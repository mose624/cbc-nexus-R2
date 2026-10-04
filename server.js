const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { createUploadUrl, createDownloadUrl, createPdfPreview, uploadObject, deleteObject, verifyR2Connection } = require("./r2");
const { supabase, supabaseConfigured } = require("./supabase");
const seo = require("./seo");

const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "backend-data");
const MAX_BODY_SIZE = 12 * 1024 * 1024;
const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000;

// Basic server-side abuse protection.
const RATE_WINDOW_MS = 60 * 1000;
const RATE_LIMITS = { general: 120, auth: 10, upload: 12 };
const rateBuckets = new Map();
const ADMIN_LOGIN_LOCKOUT_MS = 15 * 60 * 1000;
const ADMIN_LOGIN_MAX_FAILURES = 5;
const adminLoginFailures = new Map();

function clientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  return forwarded || String(req.socket?.remoteAddress || "unknown");
}
function rateLimitKey(req, url) {
  const p = url.pathname || "/";
  const group = /\/login$|\/account$/.test(p) ? "auth" : /\/r2\/upload(?:-url)?$|\/project-upload-url$/.test(p) ? "upload" : "general";
  return group + ":" + clientIp(req);
}
function allowRequest(req, url) {
  const now = Date.now();
  const key = rateLimitKey(req, url);
  const group = key.split(":")[0];
  const limit = RATE_LIMITS[group] || RATE_LIMITS.general;
  const bucket = rateBuckets.get(key);
  if (!bucket || now - bucket.startedAt >= RATE_WINDOW_MS) {
    rateBuckets.set(key, { startedAt: now, count: 1 });
    return { allowed: true, remaining: limit - 1 };
  }
  bucket.count += 1;
  if (bucket.count > limit) return { allowed: false, remaining: 0 };
  return { allowed: true, remaining: limit - bucket.count };
}
function setSecurityHeaders(res) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  if (String(process.env.NODE_ENV || "").toLowerCase() === "production") {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
}
setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW_MS * 2;
  for (const [key, bucket] of rateBuckets) {
    if (bucket.startedAt < cutoff) rateBuckets.delete(key);
  }
}, RATE_WINDOW_MS).unref();

function getAdminConfig() {
  return { username:String(process.env.ADMIN_USERNAME||"").trim(), email:String(process.env.ADMIN_EMAIL||"").trim().toLowerCase(), passwordHash:String(process.env.ADMIN_PASSWORD_HASH||""), sessionSecret:String(process.env.ADMIN_SESSION_SECRET||"") };
}
function safeEqual(a,b){const l=Buffer.from(String(a)),r=Buffer.from(String(b));return l.length===r.length&&crypto.timingSafeEqual(l,r);}
function verifyPassword(password,storedHash){return new Promise((resolve,reject)=>{const [salt,key]=String(storedHash).split(":");if(!salt||!key)return resolve(false);crypto.scrypt(String(password),salt,64,{N:16384,r:8,p:1},(e,k)=>e?reject(e):resolve(safeEqual(k.toString("hex"),key)));});}
function createAdminSession(){const c=getAdminConfig(),p=Buffer.from(JSON.stringify({u:c.username,exp:Date.now()+ADMIN_SESSION_TTL_MS})).toString("base64url"),s=crypto.createHmac("sha256",c.sessionSecret).update(p).digest("base64url");return p+"."+s;}
function verifyAdminSession(req){const c=getAdminConfig();if(!c.sessionSecret)return false;const m=String(req.headers.cookie||"").match(/(?:^|;\s*)__Host-cbe_admin_session=([^;]+)/);if(!m)return false;const [p,s]=decodeURIComponent(m[1]).split(".");if(!p||!s)return false;if(!safeEqual(s,crypto.createHmac("sha256",c.sessionSecret).update(p).digest("base64url")))return false;try{const d=JSON.parse(Buffer.from(p,"base64url").toString("utf8"));return d.u===c.username&&Number(d.exp)>Date.now();}catch{return false;}}
function adminCookie(t){return `__Host-cbe_admin_session=${encodeURIComponent(t)}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=28800`;}
const SELLER_SESSION_TTL_MS=8*60*60*1000;
async function hashPassword(password){const salt=crypto.randomBytes(16).toString("hex");const key=await new Promise((res,rej)=>crypto.scrypt(String(password),salt,64,{N:16384,r:8,p:1},(e,k)=>e?rej(e):res(k.toString("hex"))));return salt+":"+key;}
function createSellerSession(username){const p=Buffer.from(JSON.stringify({u:username,exp:Date.now()+SELLER_SESSION_TTL_MS})).toString("base64url"),s=crypto.createHmac("sha256",String(process.env.ADMIN_SESSION_SECRET||"")).update("seller:"+p).digest("base64url");return p+"."+s;}
function verifySellerSession(req){const secret=String(process.env.ADMIN_SESSION_SECRET||"");if(!secret)return null;const m=String(req.headers.cookie||"").match(/(?:^|;\s*)cbe_seller_session=([^;]+)/);if(!m)return null;const [p,s]=decodeURIComponent(m[1]).split("."),e=crypto.createHmac("sha256",secret).update("seller:"+p).digest("base64url");if(!p||!s||!safeEqual(s,e))return null;try{const d=JSON.parse(Buffer.from(p,"base64url").toString("utf8"));return Number(d.exp)>Date.now()?d.u:null;}catch{return null;}}
function sellerCookie(t){return `cbe_seller_session=${encodeURIComponent(t)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;}
const mimeTypes={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".webp":"image/webp",".ico":"image/x-icon",".txt":"text/plain; charset=utf-8",".xml":"application/xml; charset=utf-8"};
const stores={"/api/projects":"projects.json","/api/tuition":"tuition-registrations.json","/api/quizzes":"quiz-attempts.json","/api/payments":"payments.json","/api/mpesa/stk-push":"mpesa-requests.json"};
async function ensureDataDir(){await fs.mkdir(DATA_DIR,{recursive:true});}
async function readJsonStore(f){await ensureDataDir();try{return JSON.parse(await fs.readFile(path.join(DATA_DIR,f),"utf8"));}catch{return [];}}
async function appendJsonStore(f,item){const c=await readJsonStore(f),s={id:item.id||`${Date.now()}`,...item,receivedAt:new Date().toISOString()};c.unshift(s);await fs.writeFile(path.join(DATA_DIR,f),JSON.stringify(c,null,2));return s;}
// Matches the actual Supabase resources table. preview_text is intentionally omitted because it is not present in the live schema.
function resourceRowFromPayload(p,sellerId=null,previewKey=""){return {seller_id:sellerId,title:String(p.title||"").trim(),description:String(p.description||"").trim(),grade:String(p.grade||"").trim(),subject:String(p.subject||"").trim(),resource_type:String(p.type||"").trim(),filename:String(p.fileName||"").trim(),r2_key:String(p.r2Key||"").trim(),preview_key:String(previewKey||p.previewKey||"").trim(),price:Math.max(0,Number(p.price||0)),discount_price:Math.max(0,Number(p.discountPrice||0)),status:String(p.status||"pending")};}
function resourcePayloadFromRow(r){const internationalCurricula=["IGCSE","IB","O Level","A Level","Pearson"];const curriculum=internationalCurricula.includes(String(r.grade||"").trim())?String(r.grade||"").trim():"CBC/CBE";return {id:r.id,title:r.title,grade:r.grade,subject:r.subject,type:r.resource_type||"",description:r.description||"",curriculum,price:Number(r.price||0),discount:Number(r.discount_price||0),term:"",isFreeSample:false,popularity:0,fileName:r.filename||"",r2Key:r.r2_key||"",previewKey:r.preview_key||"",previewText:"",createdAt:r.created_at||"",updatedAt:r.updated_at||"",file:r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):"",status:r.status||"pending",downloads:0,purchases:0,sellerId:r.seller_id||null,createdAt:r.created_at||null,updatedAt:r.updated_at||null};}
function sendJson(res,status,data){res.setHeader("Cache-Control","no-store");res.writeHead(status,{"Content-Type":"application/json; charset=utf-8"});res.end(JSON.stringify(data));}
function readBody(req){return new Promise((resolve,reject)=>{let b="";req.on("data",c=>{b+=c;if(b.length>MAX_BODY_SIZE){reject(new Error("Request body too large."));req.destroy();}});req.on("end",()=>resolve(b));req.on("error",reject);});}
function readBinaryBody(req,maxSize=50*1024*1024){return new Promise((resolve,reject)=>{const chunks=[];let total=0;let settled=false;const fail=(e)=>{if(settled)return;settled=true;reject(e);try{req.destroy();}catch{}};req.on("data",c=>{if(settled)return;total+=c.length;if(total>maxSize){fail(new Error("Upload is too large. Maximum file size is 50 MB."));return;}chunks.push(c);});req.on("end",()=>{if(!settled){settled=true;resolve(Buffer.concat(chunks));}});req.on("error",fail);});}
async function getMpesaAccessToken(){const k=String(process.env.MPESA_CONSUMER_KEY||""),s=String(process.env.MPESA_CONSUMER_SECRET||"");if(!k||!s)throw new Error("M-Pesa consumer credentials are not configured.");const base=String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";return await new Promise((res,rej)=>{const https=require("https"),q=https.request(base+"/oauth/v1/generate?grant_type=client_credentials",{headers:{Authorization:"Basic "+Buffer.from(k+":"+s).toString("base64")}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{const x=JSON.parse(d);x.access_token?res(x.access_token):rej(new Error("Daraja authorization failed."));}catch{rej(new Error("Invalid Daraja authorization response."));}})});q.on("error",rej);q.end();});}
function normalizeMpesaPhone(p){p=String(p||"").replace(/\s+/g,"");if(/^0[17]\d{8}$/.test(p))return"254"+p.slice(1);if(/^254[17]\d{8}$/.test(p))return p;return"";}
function mpesaBase(){return String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";}
function mpesaTimestamp(){const d=new Date();return d.getFullYear().toString()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0")+String(d.getHours()).padStart(2,"0")+String(d.getMinutes()).padStart(2,"0")+String(d.getSeconds()).padStart(2,"0");}
function mpesaPassword(shortCode,passkey,timestamp){return Buffer.from(String(shortCode)+String(passkey)+String(timestamp)).toString("base64");}
async function darajaPost(pathname,body,token){const https=require("https"),base=mpesaBase();return await new Promise((res,rej)=>{const q=https.request(base+pathname,{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{res({status:r.statusCode||500,data:JSON.parse(d)});}catch{res({status:r.statusCode||500,data:{raw:d}});}})});q.on("error",rej);q.write(JSON.stringify(body));q.end();});}
function getMpesaConfig(){return {shortCode:String(process.env.MPESA_SHORTCODE||"").trim(),passkey:String(process.env.MPESA_PASSKEY||"").trim(),callbackUrl:String(process.env.MPESA_CALLBACK_URL||"").trim(),environment:String(process.env.MPESA_ENVIRONMENT||"sandbox").trim().toLowerCase()};}
async function findResourceForPayment(resourceId){if(!resourceId)return null;if(supabaseConfigured){const {data,error}=await supabase.from("resources").select("id,title,price,discount_price,status,r2_key").eq("id",resourceId).maybeSingle();if(error)throw error;return data;}const rows=await readJsonStore("resources.json");return rows.find(r=>String(r.id)===String(resourceId))||null;}
function resourcePrice(row){const price=Number(row?.price||0),discount=Number(row?.discount_price??row?.discount??0);return Math.max(0,Math.round(price*(1-Math.max(0,Math.min(100,discount))/100)));}
async function savePayment(row){if(!supabaseConfigured)throw new Error("Supabase is required for server-side M-Pesa verification.");const {data,error}=await supabase.from("purchases").insert(row).select("*").single();if(error)throw error;return data;}
async function updatePaymentByCheckout(checkoutRequestId,patch){if(!supabaseConfigured)throw new Error("Supabase is required for server-side M-Pesa verification.");const {data,error}=await supabase.from("purchases").update(patch).eq("checkout_request_id",checkoutRequestId).select("*").single();if(error)throw error;return data;}
function callbackMetadataToObject(items){const out={};for(const item of Array.isArray(items)?items:[]){if(item?.Name)out[item.Name]=item.Value??null;}return out;}
async function verifyMpesaPaymentByQuery(checkoutRequestId){const c=getMpesaConfig();if(!checkoutRequestId||!c.shortCode||!c.passkey)return null;const token=await getMpesaAccessToken(),timestamp=mpesaTimestamp(),response=await darajaPost("/mpesa/stkpushquery/v1/query",{BusinessShortCode:c.shortCode,Password:mpesaPassword(c.shortCode,c.passkey,timestamp),Timestamp:timestamp,CheckoutRequestID:checkoutRequestId},token);const d=response.data||{};if(Number(d.ResponseCode)===0&&String(d.ResultCode)==="0"){return updatePaymentByCheckout(checkoutRequestId,{status:"paid",result_code:0,result_desc:String(d.ResultDesc||"Success"),verified_at:new Date().toISOString()});}if(d.ResultCode!==undefined){return updatePaymentByCheckout(checkoutRequestId,{status:"failed",result_code:Number(d.ResultCode),result_desc:String(d.ResultDesc||"Payment failed"),verified_at:new Date().toISOString()});}return null;}
function cleanAICourseText(v,max=5000){return String(v??"").trim().slice(0,max);}
function normalizeAICoursePayload(p){
  const title=cleanAICourseText(p.title,180), slug=cleanAICourseText(p.slug,100).toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");
  const courseSlug=slug||title.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,90);
  const courseUrl=cleanAICourseText(p.courseUrl||p.course_url,1000);
  if(!title||!courseUrl) throw new Error("Course title and course link are required.");
  let parsed;try{parsed=new URL(courseUrl,process.env.PUBLIC_BASE_URL||"http://localhost");}catch{throw new Error("Course link is not valid.");}
  if(!/^https?:$/.test(parsed.protocol)) throw new Error("Course link must use http or https.");
  return {
    id:cleanAICourseText(p.id,120)||"ai-course-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex"),
    slug:courseSlug,title,short:cleanAICourseText(p.short,500),description:cleanAICourseText(p.description,3000),
    provider:cleanAICourseText(p.provider,180),category:cleanAICourseText(p.category,120),
    level:cleanAICourseText(p.level,80)||"Beginner",duration:cleanAICourseText(p.duration,100),
    course_url:courseUrl,featured:!!p.featured,status:String(p.status||"published")==="draft"?"draft":"published"
  };
}
async function getAICourses(admin=false){
  if(supabaseConfigured){
    try{
      let q=supabase.from("ai_courses").select("*").order("featured",{ascending:false}).order("created_at",{ascending:false});
      if(!admin)q=q.eq("status","published");
      const {data,error}=await q;if(!error)return data||[];
      console.warn("Supabase AI courses lookup failed:",error.message||error);
    }catch(error){console.warn("Supabase AI courses lookup failed:",error.message||error);}
  }
  const rows=await readJsonStore("ai-courses.json");
  return admin?rows:rows.filter(x=>String(x.status||"published")==="published");
}
async function saveAICourse(payload){
  const item=normalizeAICoursePayload(payload);
  const now=new Date().toISOString();
  if(supabaseConfigured){
    try{
      const row={...item,created_at:payload.created_at||now,updated_at:now};
      const {data,error}=await supabase.from("ai_courses").upsert(row,{onConflict:"id"}).select("*").single();
      if(!error)return data;
      console.warn("Supabase AI course save failed:",error.message||error);
    }catch(error){console.warn("Supabase AI course save failed:",error.message||error);}
  }
  const rows=await readJsonStore("ai-courses.json");
  const old=rows.find(x=>String(x.id)===String(item.id));
  const stored={...item,created_at:old?.created_at||now,updated_at:now};
  await fs.writeFile(path.join(DATA_DIR,"ai-courses.json"),JSON.stringify([stored,...rows.filter(x=>String(x.id)!==String(item.id))],null,2));
  return stored;
}
function cleanOpportunity(v,max=6000){return String(v??"").trim().slice(0,max);}
function normalizeOpportunityPayload(p, existing=null){
  const title=cleanOpportunity(p.title||existing?.title,220);
  if(!title) throw new Error("Opportunity title is required.");
  const applyUrl=cleanOpportunity(p.applyUrl||p.apply_url||existing?.apply_url,1200);
  if(!applyUrl) throw new Error("Official application link is required.");
  let u; try{u=new URL(applyUrl);}catch{throw new Error("Application link is not valid.");}
  if(!/^https?:$/.test(u.protocol)) throw new Error("Application link must use http or https.");
  const now=new Date().toISOString();
  return {
    id:cleanOpportunity(p.id||existing?.id,120)||"opportunity-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex"),
    title,organization:cleanOpportunity(p.organization||existing?.organization,220),
    country:cleanOpportunity(p.country||existing?.country,120),
    type:cleanOpportunity(p.type||existing?.type,100)||"Scholarship",
    level:cleanOpportunity(p.level||existing?.level,180),
    field:cleanOpportunity(p.field||existing?.field,220),
    funding:cleanOpportunity(p.funding||existing?.funding,180),
    description:cleanOpportunity(p.description||existing?.description,7000),
    eligibility:cleanOpportunity(p.eligibility||existing?.eligibility,7000),
    benefits:cleanOpportunity(p.benefits||existing?.benefits,5000),
    requirements:cleanOpportunity(p.requirements||existing?.requirements,5000),
    opening_date:cleanOpportunity(p.openingDate||p.opening_date||existing?.opening_date,40),
    deadline:cleanOpportunity(p.deadline||existing?.deadline,40),
    apply_url:applyUrl,featured:!!(p.featured??existing?.featured),
    status:["draft","published","closed"].includes(String(p.status||existing?.status||"published"))?String(p.status||existing?.status||"published"):"published",
    created_at:existing?.created_at||now,updated_at:now
  };
}
async function getOpportunities(admin=false){
  if(supabaseConfigured){try{
    let q=supabase.from("scholarship_opportunities").select("*").order("featured",{ascending:false}).order("created_at",{ascending:false});
    if(!admin)q=q.eq("status","published");
    const {data,error}=await q;if(!error)return data||[];
    console.warn("Supabase opportunities lookup failed:",error.message||error);
  }catch(error){console.warn("Supabase opportunities lookup failed:",error.message||error);}}
  const rows=await readJsonStore("scholarship-opportunities.json");
  return admin?rows:rows.filter(x=>String(x.status||"published")==="published");
}
async function saveOpportunity(payload){
  const item=normalizeOpportunityPayload(payload,payload);
  if(supabaseConfigured){try{
    const {data,error}=await supabase.from("scholarship_opportunities").upsert(item,{onConflict:"id"}).select("*").single();
    if(!error)return data;
    console.warn("Supabase opportunity save failed:",error.message||error);
  }catch(error){console.warn("Supabase opportunity save failed:",error.message||error);}}
  const rows=await readJsonStore("scholarship-opportunities.json");
  await fs.writeFile(path.join(DATA_DIR,"scholarship-opportunities.json"),JSON.stringify([item,...rows.filter(x=>String(x.id)!==item.id)],null,2));
  return item;
}
async function getTeachingVacancies(){if(supabaseConfigured){try{const {data,error}=await supabase.from("teaching_vacancies").select("*").eq("status","published").order("featured",{ascending:false}).order("created_at",{ascending:false});if(!error)return data||[];}catch(error){console.warn("Supabase teaching vacancies lookup failed:",error.message||error);}}return (await readJsonStore("teaching-vacancies.json")).filter(v=>v.status!=="deleted"&&v.status!=="draft");}
async function saveTeachingVacancy(p){const clean=(v,max=4000)=>String(v??"").trim().slice(0,max);const item={id:String(p.id||"vacancy-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex")),title:clean(p.title,180),school:clean(p.school,180),country:clean(p.country,100),region:clean(p.region,100),subject:clean(p.subject,160),level:clean(p.level,160),employment:clean(p.employment,80),salary:clean(p.salary,160),deadline:clean(p.deadline,40),description:clean(p.description,5000),requirements:clean(p.requirements,5000),apply_url:clean(p.applyUrl||p.apply_url,1000),featured:!!p.featured,status:"published",created_at:new Date().toISOString(),updated_at:new Date().toISOString()};if(!item.title||!item.school||!item.country||!item.subject||!item.level||!item.apply_url)throw new Error("Title, school, country, subject, level and application link are required.");if(supabaseConfigured){try{const {data,error}=await supabase.from("teaching_vacancies").upsert(item,{onConflict:"id"}).select("*").single();if(!error)return data;console.warn("Supabase vacancy save failed:",error.message||error);}catch(error){console.warn("Supabase vacancy save failed:",error.message||error);}}const items=await readJsonStore("teaching-vacancies.json");await fs.writeFile(path.join(DATA_DIR,"teaching-vacancies.json"),JSON.stringify([item,...items.filter(x=>x.id!==item.id)],null,2));return item;}
async function refineCvWithSmartEditor(payload){
  const clean=(v,max=6000)=>String(v||"").trim().slice(0,max);
  const base={
    name:clean(payload.name,160), jobTitle:clean(payload.jobTitle,200), country:clean(payload.country,120),
    languages:clean(payload.languages,1000), education:clean(payload.education,5000), units:clean(payload.units,4000),
    universityClass:clean(payload.universityClass,500), experience:clean(payload.experience,7000),
    achievements:clean(payload.achievements,4000), skills:clean(payload.skills,3000),
    targetJob:clean(payload.targetJob,5000)
  };
  const fallback={
    profile: base.jobTitle+" with relevant education, practical experience and transferable skills, presenting a clear record of responsibility, results and professional growth.",
    skills:Array.from(new Set((base.skills.split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean)).concat(["Professional communication","Team collaboration","Problem solving","Time management","Digital literacy","Adaptability"]))).slice(0,14),
    experience: base.experience,
    achievements: base.achievements
  };
  const apiKey=String(process.env.OPENAI_API_KEY||"").trim();
  if(!apiKey)return fallback;
  const model=String(process.env.OPENAI_MODEL||"gpt-5-mini").trim();
  const system="You are a senior international CV editor. Rewrite candidate information into concise, truthful, employer-focused CV language. Never invent employers, qualifications, certifications, licences, dates, achievements, metrics or skills that are not supported by the candidate's information. You may identify transferable skills clearly implied by the supplied experience. Tailor terminology to the selected destination and target role. For US and Canadian applications, keep the structure ATS-friendly and do not recommend a photograph or unnecessary personal details. For UAE applications, use a professional international CV style and allow a photo only where appropriate. Return JSON only with keys: profile (string), skills (array of strings), experience (string), achievements (string).";
  const user=JSON.stringify(base);
  const body={model,messages:[{role:"system",content:system},{role:"user",content:"Refine this candidate information for an international job application. Strengthen the profile, rewrite experience into action-and-impact bullets where the evidence permits, improve achievements, and identify relevant employer-facing skills. Target vacancy if supplied: "+user}],response_format:{type:"json_object"}};
  const https=require("https");
  const result=await new Promise((resolve,reject)=>{
    const req=https.request("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Authorization":"Bearer "+apiKey,"Content-Type":"application/json"}},res=>{
      let data="";res.on("data",d=>data+=d);res.on("end",()=>{try{resolve({status:res.statusCode||500,data:JSON.parse(data)})}catch{resolve({status:res.statusCode||500,data:{}})}})
    });
    req.on("error",reject);req.write(JSON.stringify(body));req.end();
  });
  if(result.status<200||result.status>=300)throw new Error("Smart CV editor is temporarily unavailable.");
  const text=String(result.data?.choices?.[0]?.message?.content||"").trim();
  let out;try{out=JSON.parse(text)}catch{throw new Error("Smart CV editor returned an invalid response.");}
  return {
    profile:clean(out.profile,1800)||fallback.profile,
    skills:Array.isArray(out.skills)?out.skills.map(x=>clean(x,120)).filter(Boolean).slice(0,18):fallback.skills,
    experience:clean(out.experience,8000)||fallback.experience,
    achievements:clean(out.achievements,5000)||fallback.achievements
  };
}

async function getSchoolDirectory(admin=false){
  if(supabaseConfigured){
    try{
      let q=supabase.from("schools").select("*,school_vacancies(*)").order("created_at",{ascending:false});
      if(!admin)q=q.eq("status","published");
      const {data,error}=await q;
      if(!error)return data||[];
      console.warn("Supabase school directory lookup failed:",error.message||error);
    }catch(error){console.warn("Supabase school directory lookup failed:",error.message||error);}
  }
  const schools=await readJsonStore("schools.json");
  const vacancies=await readJsonStore("school-vacancies.json");
  return (admin?schools:schools.filter(s=>s.status==="published")).map(s=>({...s,vacancies:vacancies.filter(v=>String(v.school_id)===String(s.id)&&(admin||v.status==="published"))}));
}
function normalizeSchoolPayload(p){
  const clean=(v,n)=>String(v??"").trim().slice(0,n);
  const name=clean(p.name,220),country=clean(p.country,120),email=clean(p.email,180),website=clean(p.website,500);
  if(!name||!country||!email)throw new Error("School name, country and contact email are required.");
  if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))throw new Error("Enter a valid school email.");
  if(website){let u;try{u=new URL(website)}catch{throw new Error("School website is not valid.");}if(!/^https?:$/.test(u.protocol))throw new Error("School website must use http or https.");}
  return {id:"school-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex"),name,country,city:clean(p.city,120),curriculum:clean(p.curriculum,180),type:clean(p.type,120),website,email,phone:clean(p.phone,60),description:clean(p.schoolDescription||p.description,3000),status:"pending",created_at:new Date().toISOString(),updated_at:new Date().toISOString()};
}
function normalizeSchoolVacancyPayload(p,schoolId){
  const clean=(v,n)=>String(v??"").trim().slice(0,n);
  const title=clean(p.title,220),subject=clean(p.subject,180),level=clean(p.level,150),description=clean(p.vacancyDescription||p.description,5000),applyUrl=clean(p.applyUrl,1000);
  if(!title||!subject||!level||!description||!applyUrl)throw new Error("Vacancy title, subject, level, description and application link are required.");
  let u;try{u=new URL(applyUrl)}catch{throw new Error("Application link is not valid.");}
  if(!/^https?:$/.test(u.protocol))throw new Error("Application link must use http or https.");
  return {id:"school-vacancy-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex"),school_id:schoolId,title,subject,level,employment:clean(p.employment,80)||"Full-time",salary:clean(p.salary,300),deadline:clean(p.deadline,40),description,requirements:clean(p.requirements,4000),apply_url:applyUrl,status:"pending",featured:false,created_at:new Date().toISOString(),updated_at:new Date().toISOString()};
}
async function submitSchoolDirectory(payload){
  const school=normalizeSchoolPayload(payload),vacancy=normalizeSchoolVacancyPayload(payload,school.id);
  if(supabaseConfigured){
    try{
      const {data,error}=await supabase.from("schools").insert(school).select("*").single();
      if(error)throw error;
      const {data:v,error:ve}=await supabase.from("school_vacancies").insert(vacancy).select("*").single();
      if(ve)throw ve;
      return {school:data,vacancy:v};
    }catch(error){
      console.error("Supabase school submission failed:",error);
      throw new Error("School submission could not be saved to Supabase. Please try again.");
    }
  }
  await appendJsonStore("schools.json",school);
  await appendJsonStore("school-vacancies.json",vacancy);
  return {school,vacancy};
}

async function handleApi(req,res,url){
  if(req.method==="GET"&&url.pathname==="/api/admin/ad-revenue"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{sendJson(res,200,await getAdRevenueDashboard());}
    catch(error){console.error("Ad revenue dashboard error:",error);sendJson(res,503,{ok:false,error:error.message||"Ad revenue data unavailable.",configured:Boolean(String(process.env.GA4_PROPERTY_ID||"").trim()&&String(process.env.GA4_SERVICE_ACCOUNT_JSON||"").trim())});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/analytics/config"){
    sendJson(res,200,{ok:true,googleAnalyticsId:String(process.env.GA_MEASUREMENT_ID||"").trim(),clarityProjectId:String(process.env.CLARITY_PROJECT_ID||"").trim()});
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/schools"){
    try{sendJson(res,200,{ok:true,schools:await getSchoolDirectory(false)});}catch(error){console.error("School directory lookup error:",error);sendJson(res,500,{ok:false,error:"School directory could not be loaded."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/schools/advertise"){
    try{const payload=JSON.parse((await readBody(req))||"{}");const result=await submitSchoolDirectory(payload);sendJson(res,201,{ok:true,message:"School and vacancy submitted for review.",school:result.school,vacancy:result.vacancy});}catch(error){sendJson(res,400,{ok:false,error:error.message||"School submission failed."});}return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/schools"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin authentication required."});return true;}
    try{sendJson(res,200,{ok:true,schools:await getSchoolDirectory(true)});}catch(error){sendJson(res,500,{ok:false,error:"School directory could not be loaded."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/school-status"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin authentication required."});return true;}
    try{
      const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||""),status=["pending","published","rejected"].includes(String(p.status))?String(p.status):"pending";
      if(!id)throw new Error("School id is required.");
      if(supabaseConfigured){const {error}=await supabase.from("schools").update({status,updated_at:new Date().toISOString()}).eq("id",id);if(error)throw error;sendJson(res,200,{ok:true});return true;}
      const rows=await readJsonStore("schools.json"),next=rows.map(x=>String(x.id)===id?{...x,status,updated_at:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"schools.json"),JSON.stringify(next,null,2));sendJson(res,200,{ok:true});
    }catch(error){sendJson(res,400,{ok:false,error:error.message||"Status update failed."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/school-vacancy-status"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin authentication required."});return true;}
    try{const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||""),status=["pending","published","rejected"].includes(String(p.status))?String(p.status):"pending";if(!id)throw new Error("Vacancy id is required.");
      if(supabaseConfigured){const {error}=await supabase.from("school_vacancies").update({status,updated_at:new Date().toISOString()}).eq("id",id);if(error)throw error;sendJson(res,200,{ok:true});return true;}
      const rows=await readJsonStore("school-vacancies.json"),next=rows.map(x=>String(x.id)===id?{...x,status,updated_at:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"school-vacancies.json"),JSON.stringify(next,null,2));sendJson(res,200,{ok:true});
    }catch(error){sendJson(res,400,{ok:false,error:error.message||"Vacancy status update failed."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/school-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin authentication required."});return true;}
    try{const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"");if(!id)throw new Error("School id is required.");
      if(supabaseConfigured){const {error}=await supabase.from("schools").delete().eq("id",id);if(error)throw error;sendJson(res,200,{ok:true});return true;}
      const schools=await readJsonStore("schools.json"),vacancies=await readJsonStore("school-vacancies.json");await fs.writeFile(path.join(DATA_DIR,"schools.json"),JSON.stringify(schools.filter(x=>String(x.id)!==id),null,2));await fs.writeFile(path.join(DATA_DIR,"school-vacancies.json"),JSON.stringify(vacancies.filter(x=>String(x.school_id)!==id),null,2));sendJson(res,200,{ok:true});
    }catch(error){sendJson(res,400,{ok:false,error:error.message||"School deletion failed."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/school-vacancy-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin authentication required."});return true;}
    try{const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"");if(!id)throw new Error("Vacancy id is required.");
      if(supabaseConfigured){const {error}=await supabase.from("school_vacancies").delete().eq("id",id);if(error)throw error;sendJson(res,200,{ok:true});return true;}
      const rows=await readJsonStore("school-vacancies.json");await fs.writeFile(path.join(DATA_DIR,"school-vacancies.json"),JSON.stringify(rows.filter(x=>String(x.id)!==id),null,2));sendJson(res,200,{ok:true});
    }catch(error){sendJson(res,400,{ok:false,error:error.message||"Vacancy deletion failed."});}return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/cv/refine"){
    try{
      const payload=JSON.parse((await readBody(req))||"{}");
      if(!String(payload.jobTitle||"").trim()||!String(payload.country||"").trim()){sendJson(res,400,{ok:false,error:"Job title and country are required."});return true;}
      const refined=await refineCvWithSmartEditor(payload);
      sendJson(res,200,{ok:true,refined});
    }catch(error){
      console.error("CV refinement error:",error);
      sendJson(res,503,{ok:false,error:"The CV refinement service is temporarily unavailable. Please try again."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/affiliate-products"){
    const products=await readJsonStore("affiliate-products.json");
    sendJson(res,200,{ok:true,products:products.filter(p=>p.active!==false)});
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/affiliate-products"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    sendJson(res,200,{ok:true,products:await readJsonStore("affiliate-products.json")});
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/affiliate-product"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"), title=String(p.title||"").trim(), urlValue=String(p.url||"").trim();
    if(!title||!urlValue){sendJson(res,400,{ok:false,error:"Product title and affiliate link are required."});return true;}
    const items=await readJsonStore("affiliate-products.json");
    const item={id:String(p.id||"affiliate-"+Date.now()),title,category:String(p.category||"Other").trim(),description:String(p.description||"").trim(),merchant:String(p.merchant||"Partner").trim(),url:urlValue,image:String(p.image||"").trim(),price:String(p.price||"").trim(),commission:String(p.commission||"").trim(),label:String(p.label||"Shop now").trim(),active:p.active!==false,updatedAt:new Date().toISOString()};
    const next=[item,...items.filter(x=>String(x.id)!==item.id)];
    await fs.writeFile(path.join(DATA_DIR,"affiliate-products.json"),JSON.stringify(next,null,2));
    sendJson(res,200,{ok:true,product:item});
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/affiliate-product-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim(),items=await readJsonStore("affiliate-products.json");
    await fs.writeFile(path.join(DATA_DIR,"affiliate-products.json"),JSON.stringify(items.filter(x=>String(x.id)!==id),null,2));
    sendJson(res,200,{ok:true,deletedId:id});
    return true;
  }

  if(req.method==="GET"&&url.pathname==="/api/opportunities"){
    try{sendJson(res,200,{ok:true,opportunities:await getOpportunities(false)});}
    catch(error){console.error("Opportunities lookup error:",error);sendJson(res,500,{ok:false,error:"Opportunities could not be loaded."});} return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/opportunities"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{sendJson(res,200,{ok:true,opportunities:await getOpportunities(true)});}
    catch(error){sendJson(res,500,{ok:false,error:"Opportunities could not be loaded."});} return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/opportunity"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{const item=await saveOpportunity(JSON.parse((await readBody(req))||"{}"));sendJson(res,201,{ok:true,opportunity:item});}
    catch(error){sendJson(res,400,{ok:false,error:error.message||"Opportunity could not be saved."});} return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/opportunity-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim();
    if(!id){sendJson(res,400,{ok:false,error:"Opportunity ID is required."});return true;}
    if(supabaseConfigured){try{const {error}=await supabase.from("scholarship_opportunities").delete().eq("id",id);if(!error){sendJson(res,200,{ok:true,deletedId:id});return true;}}catch(error){console.warn("Supabase opportunity delete failed:",error.message||error);}}
    const rows=await readJsonStore("scholarship-opportunities.json");await fs.writeFile(path.join(DATA_DIR,"scholarship-opportunities.json"),JSON.stringify(rows.filter(x=>String(x.id)!==id),null,2));
    sendJson(res,200,{ok:true,deletedId:id});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/vacancies"){try{sendJson(res,200,{ok:true,vacancies:await getTeachingVacancies()});}catch(error){console.error("Teaching vacancies lookup error:",error);sendJson(res,500,{ok:false,error:"Teaching vacancies could not be loaded."});}return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/vacancy"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}try{const item=await saveTeachingVacancy(JSON.parse((await readBody(req))||"{}"));sendJson(res,201,{ok:true,vacancy:item});}catch(error){sendJson(res,400,{ok:false,error:error.message||"Vacancy could not be saved."});}return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/vacancy-delete"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim();if(!id){sendJson(res,400,{ok:false,error:"Vacancy ID is required."});return true;}if(supabaseConfigured){try{const {error}=await supabase.from("teaching_vacancies").update({status:"deleted",updated_at:new Date().toISOString()}).eq("id",id);if(!error){sendJson(res,200,{ok:true,deletedId:id});return true;}}catch(error){console.warn("Supabase vacancy delete failed:",error.message||error);}}const items=await readJsonStore("teaching-vacancies.json"),next=items.map(x=>x.id===id?{...x,status:"deleted",updatedAt:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"teaching-vacancies.json"),JSON.stringify(next,null,2));sendJson(res,200,{ok:true,deletedId:id});return true;}
  if(req.method==="GET"&&url.pathname==="/api/ai-courses"){
    try{sendJson(res,200,{ok:true,courses:await getAICourses(false)});}
    catch(error){console.error("AI courses lookup error:",error);sendJson(res,500,{ok:false,error:"AI courses could not be loaded."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/ai-courses"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{sendJson(res,200,{ok:true,courses:await getAICourses(true)});}
    catch(error){console.error("Admin AI courses lookup error:",error);sendJson(res,500,{ok:false,error:"AI courses could not be loaded."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/ai-course"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{const item=await saveAICourse(JSON.parse((await readBody(req))||"{}"));sendJson(res,201,{ok:true,course:item});}
    catch(error){sendJson(res,400,{ok:false,error:error.message||"AI course could not be saved."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/ai-course-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim();
    if(!id){sendJson(res,400,{ok:false,error:"Course ID is required."});return true;}
    if(supabaseConfigured){
      try{const {error}=await supabase.from("ai_courses").delete().eq("id",id);if(!error){sendJson(res,200,{ok:true,deletedId:id});return true;}}
      catch(error){console.warn("Supabase AI course delete failed:",error.message||error);}
    }
    const rows=await readJsonStore("ai-courses.json");
    await fs.writeFile(path.join(DATA_DIR,"ai-courses.json"),JSON.stringify(rows.filter(x=>String(x.id)!==id),null,2));
    sendJson(res,200,{ok:true,deletedId:id});return true;
  }

  // ---------------- BLOG PUBLISHING SYSTEM ----------------
  function blogSlug(value){
    return String(value||"").trim().toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"").slice(0,140);
  }
  function cleanBlogHtml(value){
    let html=String(value||"").trim().slice(0,120000);
    html=html.replace(/<\s*(script|style|iframe|object|embed|form|input|button|textarea|select)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi,"");
    html=html.replace(/\son[a-z]+\s*=\s*(["']).*?\1/gi,"");
    html=html.replace(/javascript\s*:/gi,"");
    return html;
  }
  function blogRowFromPayload(p, existing=null){
    const title=String(p.title||existing?.title||"").trim().slice(0,220);
    const slug=blogSlug(p.slug||existing?.slug||title);
    const status=["draft","published"].includes(String(p.status||existing?.status||"draft").toLowerCase())?String(p.status||existing?.status||"draft").toLowerCase():"draft";
    const now=new Date().toISOString();
    return {
      id:String(p.id||existing?.id||"BLOG-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex").toUpperCase()),
      title,slug,category:String(p.category||existing?.category||"CBC/CBE").trim().slice(0,80),
      excerpt:String(p.excerpt||existing?.excerpt||"").trim().slice(0,500),
      content:cleanBlogHtml(p.content||existing?.content||""),
      featured_image:String(p.featuredImage||p.featured_image||existing?.featured_image||existing?.featuredImage||"").trim().slice(0,1000),
      keywords:String(p.keywords||existing?.keywords||"").trim().slice(0,1000),
      seo_title:String(p.seoTitle||p.seo_title||existing?.seo_title||existing?.seoTitle||title).trim().slice(0,220),
      meta_description:String(p.metaDescription||p.meta_description||existing?.meta_description||existing?.metaDescription||p.excerpt||existing?.excerpt||"").trim().slice(0,320),
      author:String(p.author||existing?.author||"CBE Nexus").trim().slice(0,120),
      status,
      published_at:status==="published"?(existing?.published_at||existing?.publishedAt||now):null,
      created_at:existing?.created_at||existing?.createdAt||now,
      updated_at:now
    };
  }
  function blogPayloadFromRow(r){
    return {id:r.id,title:r.title,slug:r.slug,category:r.category||"CBC/CBE",excerpt:r.excerpt||"",content:r.content||"",
      featuredImage:r.featured_image||r.featuredImage||"",keywords:r.keywords||"",seoTitle:r.seo_title||r.seoTitle||r.title,
      metaDescription:r.meta_description||r.metaDescription||r.excerpt||"",author:r.author||"CBE Nexus",status:r.status||"draft",
      publishedAt:r.published_at||r.publishedAt||null,createdAt:r.created_at||r.createdAt||null,updatedAt:r.updated_at||r.updatedAt||null};
  }
  async function getBlogPosts(includeDrafts=false){
    if(supabaseConfigured){
      try{
        let q=supabase.from("blog_posts").select("*").order("created_at",{ascending:false}).limit(500);
        if(!includeDrafts)q=q.eq("status","published");
        const {data,error}=await q;if(error)throw error;
        if((data||[]).length)return (data||[]).map(blogPayloadFromRow);
        const seedRows=await readJsonStore("blog-posts.json");
        return seedRows.filter(x=>includeDrafts||x.status==="published").map(blogPayloadFromRow);
      }catch(error){console.warn("Supabase blog lookup failed:",error.message||error);}
    }
    const rows=await readJsonStore("blog-posts.json");
    return rows.filter(x=>includeDrafts||x.status==="published").map(blogPayloadFromRow);
  }
  if(req.method==="GET"&&url.pathname==="/api/blog/posts"){
    try{sendJson(res,200,{ok:true,posts:await getBlogPosts(false)});}
    catch(error){console.error("Public blog lookup error:",error);sendJson(res,500,{ok:false,error:"Blog posts could not be loaded."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname.startsWith("/api/blog/post/")){
    const slug=decodeURIComponent(url.pathname.slice("/api/blog/post/".length)).trim();
    if(!slug){sendJson(res,400,{ok:false,error:"Article slug is required."});return true;}
    try{
      let post=null;
      if(supabaseConfigured){const {data,error}=await supabase.from("blog_posts").select("*").eq("slug",slug).eq("status","published").maybeSingle();if(error)throw error;post=data?blogPayloadFromRow(data):null;}
      else {const row=(await readJsonStore("blog-posts.json")).find(x=>x.slug===slug&&x.status==="published");post=row?blogPayloadFromRow(row):null;}
      if(!post){sendJson(res,404,{ok:false,error:"Article not found."});return true;}
      sendJson(res,200,{ok:true,post});
    }catch(error){console.error("Public blog article error:",error);sendJson(res,500,{ok:false,error:"Article could not be loaded."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/blog/posts"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{sendJson(res,200,{ok:true,posts:await getBlogPosts(true),storage:supabaseConfigured?"supabase":"local"});}
    catch(error){sendJson(res,500,{ok:false,error:"Blog articles could not be loaded."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/blog/post"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{
      const p=JSON.parse((await readBody(req))||"{}");
      if(String(p.title||"").trim().length<3||String(p.content||"").trim().length<20){sendJson(res,400,{ok:false,error:"Article title and content are required."});return true;}
      let existing=null;
      if(p.id&&supabaseConfigured){const {data,error}=await supabase.from("blog_posts").select("*").eq("id",String(p.id)).maybeSingle();if(error)throw error;existing=data;}
      else if(p.id)existing=(await readJsonStore("blog-posts.json")).find(x=>String(x.id)===String(p.id))||null;
      const row=blogRowFromPayload(p,existing);
      if(supabaseConfigured){
        const {data,error}=await supabase.from("blog_posts").upsert(row,{onConflict:"id"}).select("*").single();
        if(error)throw error;
        const publishedPost=blogPayloadFromRow(data);
        if(String(publishedPost.status)==="published") notifyIndexNow(req,[seo.base(req).replace(/\/$/,"")+"/blog-article.html?slug="+encodeURIComponent(String(publishedPost.slug||"")),seo.base(req).replace(/\/$/,"")+"/blog.html",seo.base(req).replace(/\/$/,"")+"/sitemap.xml"]).catch(()=>{});
        sendJson(res,200,{ok:true,post:publishedPost,storage:"supabase"});return true;
      }
      const rows=await readJsonStore("blog-posts.json");
      await fs.writeFile(path.join(DATA_DIR,"blog-posts.json"),JSON.stringify([row,...rows.filter(x=>x.id!==row.id)],null,2));
      const publishedPost=blogPayloadFromRow(row);
      if(String(publishedPost.status)==="published") notifyIndexNow(req,[seo.base(req).replace(/\/$/,"")+"/blog-article.html?slug="+encodeURIComponent(String(publishedPost.slug||"")),seo.base(req).replace(/\/$/,"")+"/blog.html",seo.base(req).replace(/\/$/,"")+"/sitemap.xml"]).catch(()=>{});
      sendJson(res,200,{ok:true,post:publishedPost,storage:"local"});
    }catch(error){console.error("Admin blog save error:",error);sendJson(res,500,{ok:false,error:error.message||"Article could not be saved. If Supabase is enabled, run the blog schema SQL first."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/blog/delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    try{
      const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim();
      if(!id){sendJson(res,400,{ok:false,error:"Article ID is required."});return true;}
      if(supabaseConfigured){const {error}=await supabase.from("blog_posts").delete().eq("id",id);if(error)throw error;sendJson(res,200,{ok:true,deletedId:id});return true;}
      const rows=await readJsonStore("blog-posts.json");await fs.writeFile(path.join(DATA_DIR,"blog-posts.json"),JSON.stringify(rows.filter(x=>String(x.id)!==id),null,2));sendJson(res,200,{ok:true,deletedId:id});
    }catch(error){console.error("Admin blog delete error:",error);sendJson(res,500,{ok:false,error:"Article could not be deleted."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/blog/image"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const fileName=String(req.headers["x-blog-file-name"]||"blog-image").trim(),contentType=String(req.headers["content-type"]||"application/octet-stream").trim();
    const allowed=["image/jpeg","image/png","image/webp","image/gif"];
    if(!allowed.includes(contentType)){sendJson(res,400,{ok:false,error:"Only JPG, PNG, WebP or GIF images are allowed."});return true;}
    if(Number(req.headers["content-length"]||0)>8*1024*1024){sendJson(res,413,{ok:false,error:"Blog image is too large. Maximum size is 8 MB."});return true;}
    try{
      const body=await readBinaryBody(req,8*1024*1024);if(!body.length){sendJson(res,400,{ok:false,error:"Image file is empty."});return true;}
      const id="BLOGIMG-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex");
      const uploaded=await uploadObject({grade:"Blog",subject:"CBE Nexus Blog",type:"Featured Image",fileName:Date.now()+"-"+fileName,resourceId:id,contentType},body);
      sendJson(res,200,{ok:true,key:uploaded.key,featuredImage:"/api/blog/image?key="+encodeURIComponent(uploaded.key)});
    }catch(error){console.error("Blog image upload error:",error);sendJson(res,500,{ok:false,error:"Blog image upload failed."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/blog/image"){
    const key=String(url.searchParams.get("key")||"").trim();
    if(!key||!key.startsWith("resources/Blog/")){sendJson(res,400,{ok:false,error:"Invalid blog image key."});return true;}
    try{const target=await createDownloadUrl(key);res.writeHead(302,{Location:target,"Cache-Control":"public, max-age=300"});res.end();}
    catch(error){sendJson(res,404,{ok:false,error:"Blog image could not be opened."});}
    return true;
  }
  // Public website ratings: persistent in Supabase when configured, with local fallback.
  if(req.method==="GET"&&url.pathname==="/api/ratings"){
    try{
      const visitorId=String(url.searchParams.get("visitorId")||"").trim();
      if(supabaseConfigured){
        const {data,error}=await supabase.from("website_ratings").select("rating,visitor_id").eq("site_key","cbe-nexus");
        if(error)throw error;
        const rows=data||[],sum=rows.reduce((s,x)=>s+Number(x.rating||0),0),mine=visitorId?(rows.find(x=>String(x.visitor_id)===visitorId)?.rating||0):0;
        sendJson(res,200,{ok:true,average:rows.length?sum/rows.length:0,count:rows.length,myRating:Number(mine)||0});
        return true;
      }
      const rows=await readJsonStore("website-ratings.json"),sum=rows.reduce((s,x)=>s+Number(x.rating||0),0),mine=visitorId?(rows.find(x=>String(x.visitorId)===visitorId)?.rating||0):0;
      sendJson(res,200,{ok:true,average:rows.length?sum/rows.length:0,count:rows.length,myRating:Number(mine)||0});
    }catch(error){console.error("Ratings lookup error:",error);sendJson(res,500,{ok:false,error:"Ratings could not be loaded."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/ratings"){
    try{
      const p=JSON.parse((await readBody(req))||"{}"),rating=Math.round(Number(p.rating)),visitorId=String(p.visitorId||"").trim().slice(0,120);
      if(!Number.isInteger(rating)||rating<1||rating>5||!visitorId){sendJson(res,400,{ok:false,error:"A rating from 1 to 5 and a visitor ID are required."});return true;}
      if(supabaseConfigured){
        const {error}=await supabase.from("website_ratings").upsert({site_key:"cbe-nexus",visitor_id:visitorId,rating},{onConflict:"site_key,visitor_id"});
        if(error)throw error;
        const {data,error:readError}=await supabase.from("website_ratings").select("rating").eq("site_key","cbe-nexus");
        if(readError)throw readError;
        const rows=data||[],sum=rows.reduce((s,x)=>s+Number(x.rating||0),0);
        sendJson(res,200,{ok:true,average:rows.length?sum/rows.length:0,count:rows.length,myRating:rating});return true;
      }
      const rows=await readJsonStore("website-ratings.json"),i=rows.findIndex(x=>String(x.visitorId)===visitorId);
      const item={id:i>=0?rows[i].id:"rating-"+Date.now()+"-"+crypto.randomBytes(3).toString("hex"),siteKey:"cbe-nexus",visitorId,rating,updatedAt:new Date().toISOString()};
      if(i>=0)rows[i]=item;else rows.unshift(item);
      await fs.writeFile(path.join(DATA_DIR,"website-ratings.json"),JSON.stringify(rows,null,2));
      const sum=rows.reduce((s,x)=>s+Number(x.rating||0),0);
      sendJson(res,200,{ok:true,average:rows.length?sum/rows.length:0,count:rows.length,myRating:rating});
    }catch(error){console.error("Rating save error:",error);sendJson(res,500,{ok:false,error:"Rating could not be saved."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/dashboard"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}let resources=await readJsonStore("resources.json");const [localSellerAccounts,payments,mpesaRequests,tuition,localUsers]=await Promise.all([readJsonStore("seller-accounts.json"),readJsonStore("payments.json"),readJsonStore("mpesa-requests.json"),readJsonStore("tuition-registrations.json"),readJsonStore("admin-users.json")]);if(supabaseConfigured){try{const {data:resourceData,error:resourceError}=await supabase.from("resources").select("*").eq("status","approved").order("created_at",{ascending:false});if(resourceError)throw resourceError;resources=(resourceData||[]).map(resourcePayloadFromRow);}catch(error){console.error("Supabase resource dashboard lookup error:",error);}}let sellerAccounts=localSellerAccounts,users=localUsers,verifiedPurchases=[];if(supabaseConfigured){try{const {data,error}=await supabase.from("purchases").select("*").order("created_at",{ascending:false}).limit(100);if(error)throw error;verifiedPurchases=(data||[]).map(p=>({...p,id:p.id,resource:p.resource_id,resourceId:p.resource_id,customerPhone:p.customer_phone,checkoutRequestID:p.checkout_request_id,merchantRequestID:p.merchant_request_id,mpesaReceipt:p.mpesa_receipt,createdAt:p.created_at}));}catch(error){console.error("Supabase payment dashboard lookup error:",error);}}if(supabaseConfigured){try{const [{data:sellersData,error:sellersError},{data:usersData,error:usersError}]=await Promise.all([supabase.from("sellers").select("id,user_id,phone,username,status,created_at"),supabase.from("users").select("id,name,phone,role,status,created_at")]);if(sellersError)throw sellersError;if(usersError)throw usersError;sellerAccounts=sellersData||[];users=usersData||[];}catch(error){console.error("Supabase admin dashboard lookup error:",error);}}const userMap=new Map();[...users].forEach(u=>userMap.set(u.phone||u.username||u.id,u));[...payments,...mpesaRequests,...tuition].forEach(item=>{const phone=item.customerPhone||item.phone;if(phone&&!userMap.has(phone))userMap.set(phone,{id:"user-"+phone,name:item.learner||item.name||"Customer",phone,status:"active",source:"transaction"});});const allUsers=[...userMap.values()],sales=payments.filter(p=>["paid","completed","success"].includes(String(p.status||"").toLowerCase())),totalDownloads=resources.reduce((s,r)=>s+Number(r.downloads||0),0),popularResources=[...resources].map(r=>({...r,downloads:Number(r.downloads||0),purchases:Number(r.purchases||0)})).sort((a,b)=>(b.downloads+b.purchases*3)-(a.downloads+a.purchases*3)).slice(0,10);const dashboardPayments=[...payments,...mpesaRequests,...verifiedPurchases];const dashboardSales=[...payments,...verifiedPurchases].filter(p=>["paid","completed","success"].includes(String(p.status||"").toLowerCase()));sendJson(res,200,{ok:true,stats:{sellers:sellerAccounts.length,pendingSellers:sellerAccounts.filter(x=>x.status==="pending").length,resources:resources.length,pendingResources:resources.filter(x=>x.status==="pending").length,users:allUsers.length,sales:dashboardSales.length,purchases:dashboardSales.length,revenue:dashboardSales.reduce((s,x)=>s+Number(x.amount||0),0),downloads:totalDownloads},popularResources,sellers:sellerAccounts,resources,users:allUsers,sales:dashboardSales,payments:dashboardPayments.slice(0,100)});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/resource"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),items=await readJsonStore("resources.json"),item={...p,status:p.status||"approved",updatedAt:new Date().toISOString()};await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify([item,...items.filter(x=>x.id!==item.id)],null,2));sendJson(res,200,{ok:true,resource:item});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/resource-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),resourceId=String(p.resourceId||"").trim();
    if(!resourceId){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    try{
      let resource=null;
      if(supabaseConfigured){
        const {data,error}=await supabase.from("resources").select("id,r2_key,preview_key").eq("id",resourceId).maybeSingle();
        if(error)throw error;
        resource=data;
        if(resource){
          const {error:deleteError}=await supabase.from("resources").delete().eq("id",resourceId);
          if(deleteError)throw deleteError;
        }
      } else {
        const items=await readJsonStore("resources.json");
        resource=items.find(x=>String(x.id)===resourceId)||null;
        if(resource){await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(items.filter(x=>String(x.id)!==resourceId),null,2));}
      }
      if(!resource){sendJson(res,404,{ok:false,error:"Resource not found."});return true;}
      const keys=[resource.r2_key,resource.preview_key].filter(Boolean);
      for(const key of keys){try{await deleteObject(key);}catch(error){console.warn("R2 resource cleanup failed:",key,error.message||error);}}
      sendJson(res,200,{ok:true,deletedId:resourceId});
    }catch(error){console.error("Admin resource deletion error:",error);sendJson(res,500,{ok:false,error:"Resource could not be deleted."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/resource-status"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),resourceId=String(p.resourceId||"").trim(),status=String(p.status||"pending").toLowerCase();
    if(!resourceId){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").update({status}).eq("id",resourceId).select("*").single();
        if(error)throw error;
        sendJson(res,200,{ok:true,resource:resourcePayloadFromRow(data),storage:"supabase"});return true;
      }catch(error){console.error("Supabase resource status update error:",error);sendJson(res,500,{ok:false,error:"Resource status could not be updated in Supabase."});return true;}
    }
    const items=await readJsonStore("resources.json"),next=items.map(x=>x.id===resourceId?{...x,status,reviewedAt:new Date().toISOString()}:x);
    await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(next,null,2));
    sendJson(res,200,{ok:true,resource:next.find(x=>x.id===resourceId)||null,storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/resource-price"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),resourceId=String(p.resourceId||"").trim();
    const price=Math.max(0,Number(p.price||0)),discount=Math.min(100,Math.max(0,Number(p.discount||0)));
    if(!resourceId){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").update({price,discount_price:discount}).eq("id",resourceId).select("*").single();
        if(error)throw error;
        sendJson(res,200,{ok:true,resource:resourcePayloadFromRow(data),storage:"supabase"});return true;
      }catch(error){console.error("Supabase resource price update error:",error);sendJson(res,500,{ok:false,error:"Resource price could not be updated in Supabase."});return true;}
    }
    const items=await readJsonStore("resources.json"),next=items.map(x=>x.id===resourceId?{...x,price,discount,updatedAt:new Date().toISOString()}:x);
    await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(next,null,2));
    sendJson(res,200,{ok:true,resource:next.find(x=>x.id===resourceId)||null,storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/user-status"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),status=String(p.status||"active");if(supabaseConfigured){try{let q=supabase.from("users").update({status}).select("id,name,phone,role,status").limit(1);if(p.userId)q=q.eq("id",p.userId);else if(p.phone)q=q.eq("phone",p.phone);else{sendJson(res,400,{ok:false,error:"User ID or phone is required."});return true;}const {data,error}=await q.single();if(error)throw error;sendJson(res,200,{ok:true,user:data,storage:"supabase"});return true;}catch(error){console.error("Supabase user status error:",error);sendJson(res,500,{ok:false,error:"User status could not be updated in Supabase."});return true;}}const users=await readJsonStore("admin-users.json"),existing=users.find(x=>x.id===p.userId||x.phone===p.phone),item={...(existing||{}),id:p.userId||existing?.id||"user-"+Date.now(),phone:p.phone||existing?.phone||"",name:p.name||existing?.name||"Customer",status,updatedAt:new Date().toISOString()};await fs.writeFile(path.join(DATA_DIR,"admin-users.json"),JSON.stringify([item,...users.filter(x=>x.id!==item.id&&x.phone!==item.phone)],null,2));sendJson(res,200,{ok:true,user:item,storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/login"){const c=getAdminConfig();if(!c.username||!c.email||!c.passwordHash||!c.sessionSecret){sendJson(res,503,{ok:false,error:"Admin authentication is not configured on the server."});return true;}const p=JSON.parse((await readBody(req))||"{}"),u=String(p.username||"").trim(),e=String(p.email||"").trim().toLowerCase(),pw=String(p.password||""),ip=clientIp(req),lockKey=ip+":"+u.toLowerCase(),now=Date.now(),record=adminLoginFailures.get(lockKey);if(record&&record.lockedUntil>now){sendJson(res,429,{ok:false,error:"Too many failed admin login attempts. Please try again later."});return true;}if(record&&record.lockedUntil<=now)adminLoginFailures.delete(lockKey);const valid=safeEqual(u.toUpperCase(),c.username.toUpperCase())&&safeEqual(e,c.email)&&await verifyPassword(pw,c.passwordHash);if(!valid){const current=adminLoginFailures.get(lockKey)||{count:0,lockedUntil:0};current.count+=1;if(current.count>=ADMIN_LOGIN_MAX_FAILURES)current.lockedUntil=now+ADMIN_LOGIN_LOCKOUT_MS;adminLoginFailures.set(lockKey,current);sendJson(res,401,{ok:false,error:"Invalid admin username, password, or email."});return true;}adminLoginFailures.delete(lockKey);res.setHeader("Set-Cookie",adminCookie(createAdminSession()));sendJson(res,200,{ok:true,user:{username:c.username,email:c.email}});return true;}
  if(req.method==="GET"&&url.pathname==="/api/admin/me"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,authenticated:false});return true;}const c=getAdminConfig();sendJson(res,200,{ok:true,authenticated:true,user:{username:c.username,email:c.email}});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/logout"){res.setHeader("Set-Cookie","__Host-cbe_admin_session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0");sendJson(res,200,{ok:true});return true;}
  if(req.method==="POST"&&url.pathname==="/api/seller/account"){const p=JSON.parse((await readBody(req))||"{}"),u=String(p.username||"").trim().toLowerCase(),pw=String(p.password||""),name=String(p.name||"").trim(),phone=String(p.phone||"").trim();if(!u||pw.length<8||!name||!phone){sendJson(res,400,{ok:false,error:"Name, phone, username and a password of at least 8 characters are required."});return true;}if(supabaseConfigured){try{const {data:existing,error:existingError}=await supabase.from("sellers").select("id,username").eq("username",u).maybeSingle();if(existingError)throw existingError;if(existing){sendJson(res,409,{ok:false,error:"This seller username is already registered."});return true;}const passwordHash=await hashPassword(pw);const {data:user,error:userError}=await supabase.from("users").insert({name,phone,role:"seller",status:"active"}).select("id").single();if(userError)throw userError;const {data:seller,error:sellerError}=await supabase.from("sellers").insert({user_id:user.id,name,phone,username:u,password_hash:passwordHash,status:"pending"}).select("id,phone,username,status").single();if(sellerError)throw sellerError;sendJson(res,201,{ok:true,account:{...seller,name},storage:"supabase"});return true;}catch(error){console.error("Supabase seller registration error:",error);sendJson(res,500,{ok:false,error:"Seller account could not be created in Supabase."});return true;}}const ac=await readJsonStore("seller-accounts.json");if(ac.some(x=>x.username===u)){sendJson(res,409,{ok:false,error:"This seller username is already registered."});return true;}const a={id:"seller-account-"+Date.now(),name,phone,username:u,passwordHash:await hashPassword(pw),status:"pending",createdAt:new Date().toISOString()};await appendJsonStore("seller-accounts.json",a);sendJson(res,201,{ok:true,account:{id:a.id,name,phone,username:u,status:"pending"},storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/seller/login"){const p=JSON.parse((await readBody(req))||"{}"),u=String(p.username||"").trim().toLowerCase();let a=null;if(supabaseConfigured){try{const {data,error}=await supabase.from("sellers").select("id,user_id,phone,username,password_hash,status").eq("username",u).maybeSingle();if(error)throw error;a=data;}catch(error){console.error("Supabase seller login lookup error:",error);sendJson(res,500,{ok:false,error:"Seller account could not be checked in Supabase."});return true;}}else{const ac=await readJsonStore("seller-accounts.json");a=ac.find(x=>x.username===u);}if(!a||!(await verifyPassword(String(p.password||""),a.password_hash||a.passwordHash||""))){sendJson(res,401,{ok:false,error:"Invalid seller username or password."});return true;}if(a.status!=="approved"){sendJson(res,403,{ok:false,error:"Seller account is pending admin approval."});return true;}res.setHeader("Set-Cookie",sellerCookie(createSellerSession(u)));sendJson(res,200,{ok:true,account:{id:a.id,name:a.name||"Seller",phone:a.phone,username:a.username,status:a.status},storage:supabaseConfigured?"supabase":"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/seller-resource-status"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),resourceId=String(p.resourceId||"").trim(),status=String(p.status||"pending").toLowerCase();
    if(!resourceId){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").update({status}).eq("id",resourceId).select("*").single();
        if(error)throw error;
        sendJson(res,200,{ok:true,resource:resourcePayloadFromRow(data),storage:"supabase"});return true;
      }catch(error){console.error("Supabase seller resource status update error:",error);sendJson(res,500,{ok:false,error:"Resource status could not be updated in Supabase."});return true;}
    }
    const items=await readJsonStore("resources.json"),next=items.map(x=>x.id===resourceId?{...x,status,reviewedAt:new Date().toISOString()}:x);
    await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(next,null,2));
    sendJson(res,200,{ok:true,resource:next.find(x=>x.id===resourceId)||null,storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/seller-account-status"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),status=String(p.status||"pending");if(supabaseConfigured){try{const {data,error}=await supabase.from("sellers").update({status}).eq("id",p.accountId).select("id,phone,username,status").single();if(error)throw error;sendJson(res,200,{ok:true,account:data,storage:"supabase"});return true;}catch(error){console.error("Supabase seller approval error:",error);sendJson(res,500,{ok:false,error:"Seller status could not be updated in Supabase."});return true;}}const ac=await readJsonStore("seller-accounts.json"),up=ac.map(x=>x.id===p.accountId?{...x,status,reviewedAt:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"seller-accounts.json"),JSON.stringify(up,null,2));sendJson(res,200,{ok:true,storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/mpesa/stk-push"){
    const p=JSON.parse((await readBody(req))||"{}");
    const phone=normalizeMpesaPhone(p.customerPhone||p.phone||"");
    const resourceId=String(p.resourceId||"").trim();
    if(!phone||!resourceId){sendJson(res,400,{ok:false,error:"A valid M-Pesa phone number and resource are required."});return true;}
    if(!supabaseConfigured){sendJson(res,503,{ok:false,error:"Supabase must be configured before M-Pesa payments can be verified securely."});return true;}
    const c=getMpesaConfig();
    if(!c.shortCode||!c.passkey||!c.callbackUrl){sendJson(res,503,{ok:false,error:"M-Pesa STK Push is not fully configured on the server."});return true;}
    try{
      const resource=await findResourceForPayment(resourceId);
      if(!resource||String(resource.status||"approved").toLowerCase()!=="approved"){sendJson(res,404,{ok:false,error:"The selected resource is not available for purchase."});return true;}
      const amount=resourcePrice(resource);
      if(amount<1){sendJson(res,400,{ok:false,error:"This resource does not require an M-Pesa payment."});return true;}
      const token=await getMpesaAccessToken(),timestamp=mpesaTimestamp();
      const stk=await darajaPost("/mpesa/stkpush/v1/processrequest",{BusinessShortCode:c.shortCode,Password:mpesaPassword(c.shortCode,c.passkey,timestamp),Timestamp:timestamp,TransactionType:"CustomerPayBillOnline",Amount:amount,PartyA:phone,PartyB:c.shortCode,PhoneNumber:phone,CallBackURL:c.callbackUrl,AccountReference:String(resource.title||"CBE Nexus").slice(0,12),TransactionDesc:"CBE Nexus resource"},token);
      const d=stk.data||{};
      if(stk.status<200||stk.status>=300||!d.CheckoutRequestID){sendJson(res,502,{ok:false,error:String(d.errorMessage||d.ResponseDescription||"M-Pesa payment request was not accepted.")});return true;}
      const saved=await savePayment({resource_id:resourceId,customer_phone:phone,amount,status:"pending",payment_reference:String(d.CheckoutRequestID),checkout_request_id:String(d.CheckoutRequestID),merchant_request_id:String(d.MerchantRequestID||""),result_code:null,result_desc:String(d.ResponseDescription||"STK Push sent"),mpesa_receipt:null,transaction_time:null});
      sendJson(res,200,{ok:true,CheckoutRequestID:d.CheckoutRequestID,MerchantRequestID:d.MerchantRequestID,amount,resourceId:resourceId,paymentId:saved.id,status:saved.status});
    }catch(error){console.error("M-Pesa STK Push error:",error);sendJson(res,500,{ok:false,error:"M-Pesa payment request could not be started securely."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/mpesa/callback"){
    try{
      const p=JSON.parse((await readBody(req))||"{}"),stk=p?.Body?.stkCallback,checkoutRequestId=String(stk?.CheckoutRequestID||"").trim();
      if(!checkoutRequestId){sendJson(res,400,{ResultCode:1,ResultDesc:"Invalid callback."});return true;}
      const resultCode=Number(stk?.ResultCode),meta=callbackMetadataToObject(stk?.CallbackMetadata?.Item);
      const {data:pending,error:pendingError}=await supabase.from("purchases").select("*").eq("checkout_request_id",checkoutRequestId).maybeSingle();
      if(pendingError)throw pendingError;
      if(!pending){sendJson(res,404,{ResultCode:1,ResultDesc:"Unknown CheckoutRequestID."});return true;}
      const callbackAmount=Number(meta.Amount||0),callbackPhone=normalizeMpesaPhone(String(meta.PhoneNumber||""));
      if(resultCode===0){
        if(callbackAmount!==Number(pending.amount)||callbackPhone!==String(pending.customer_phone)){sendJson(res,400,{ResultCode:1,ResultDesc:"Payment details did not match the order."});return true;}
        const verified=await verifyMpesaPaymentByQuery(checkoutRequestId);
        if(!verified||String(verified.status).toLowerCase()!=="paid"){sendJson(res,502,{ResultCode:1,ResultDesc:"Payment could not be independently verified."});return true;}
        await updatePaymentByCheckout(checkoutRequestId,{status:"paid",result_code:0,result_desc:String(stk?.ResultDesc||"Success"),mpesa_receipt:String(meta.MpesaReceiptNumber||verified.mpesa_receipt||""),transaction_time:String(meta.TransactionDate||""),verified_at:new Date().toISOString()});
      }else{
        await updatePaymentByCheckout(checkoutRequestId,{status:"failed",result_code:Number.isFinite(resultCode)?resultCode:null,result_desc:String(stk?.ResultDesc||"Payment failed"),verified_at:new Date().toISOString()});
      }
      sendJson(res,200,{ResultCode:0,ResultDesc:"Accepted"});
    }catch(error){console.error("M-Pesa callback processing error:",error);sendJson(res,200,{ResultCode:0,ResultDesc:"Accepted"});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/mpesa/status"){
    const checkoutRequestId=String(url.searchParams.get("checkoutRequestID")||"").trim(),phone=normalizeMpesaPhone(url.searchParams.get("phone")||"");
    if(!checkoutRequestId||!phone||!supabaseConfigured){sendJson(res,400,{ok:false,error:"Checkout request ID and valid phone are required."});return true;}
    try{
      const {data,error}=await supabase.from("purchases").select("*").eq("checkout_request_id",checkoutRequestId).eq("customer_phone",phone).maybeSingle();
      if(error)throw error;
      let payment=data;
      if(payment?.status==="pending"){try{payment=await verifyMpesaPaymentByQuery(checkoutRequestId)||payment;}catch(error){console.warn("M-Pesa status query fallback failed:",error.message||error);}}
      sendJson(res,200,{ok:true,status:String(payment?.status||"unknown"),payment:payment?{id:payment.id,resourceId:payment.resource_id,amount:payment.amount,status:payment.status,receipt:payment.mpesa_receipt||null,verifiedAt:payment.verified_at||null}:null});
    }catch(error){console.error("M-Pesa status lookup error:",error);sendJson(res,500,{ok:false,error:"Payment status could not be checked securely."});}
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/r2/upload"){
    const role=String(req.headers["x-cbe-role"]||"").trim().toLowerCase();
    const admin=verifyAdminSession(req),seller=verifySellerSession(req);
    if(role==="admin"&&!admin){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    if(role==="seller"&&!seller){sendJson(res,401,{ok:false,error:"Approved seller login required."});return true;}
    if(role==="project"&&!admin){sendJson(res,401,{ok:false,error:"Admin login required for project uploads."});return true;}
    if(!["admin","seller","project"].includes(role)){sendJson(res,400,{ok:false,error:"Upload role is required."});return true;}
    const grade=String(req.headers["x-cbe-grade"]||"").trim();
    const subject=String(req.headers["x-cbe-subject"]||"").trim();
    const type=String(req.headers["x-cbe-type"]||"").trim();
    const fileName=String(req.headers["x-cbe-filename"]||"resource.bin").trim();
    const resourceId=String(req.headers["x-cbe-resource-id"]||"resource").trim();
    const contentType=String(req.headers["content-type"]||"application/octet-stream").trim()||"application/octet-stream";
    if(!grade||!subject||!type){sendJson(res,400,{ok:false,error:"Grade, subject and material type are required."});return true;}
    const allowedExtensions=[".pdf",".doc",".docx",".ppt",".pptx",".xls",".xlsx",".txt",".zip"];
    const extension=path.extname(fileName.toLowerCase());
    if(!allowedExtensions.includes(extension)){sendJson(res,400,{ok:false,error:"Unsupported file type."});return true;}
    if(Number(req.headers["content-length"]||0)>50*1024*1024){sendJson(res,413,{ok:false,error:"Upload is too large. Maximum file size is 50 MB."});return true;}
    try{
      const body=await readBinaryBody(req);
      const uploaded=await uploadObject({grade,subject,type,fileName,resourceId,contentType},body);
      sendJson(res,200,{ok:true,...uploaded});
    }catch(error){
      console.error("R2 backend upload error:",error);
      sendJson(res,500,{ok:false,error:error.message||"Cloudflare R2 upload failed."});
    }
    return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/r2/upload-url"){const p=JSON.parse((await readBody(req))||"{}"),admin=verifyAdminSession(req),seller=verifySellerSession(req);if(p.role==="admin"&&!admin){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}if(p.role==="seller"&&!seller){sendJson(res,401,{ok:false,error:"Approved seller login required."});return true;}if(!["admin","seller"].includes(p.role)){sendJson(res,400,{ok:false,error:"Upload role is required."});return true;}sendJson(res,200,{ok:true,...await createUploadUrl(p)});return true;}
  if(req.method==="POST"&&url.pathname==="/api/r2/project-upload-url"){const p=JSON.parse((await readBody(req))||"{}");if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required for project uploads."});return true;}if(!p.grade||!p.subject){sendJson(res,400,{ok:false,error:"Project grade and subject are required."});return true;}sendJson(res,200,{ok:true,...await createUploadUrl({...p,type:"CBC Projects"})});return true;}
  if(req.method==="POST"&&url.pathname==="/api/download-approval/request"){
    const p=JSON.parse((await readBody(req))||"{}");
    const resourceId=String(p.resourceId||"").trim(), phone=normalizeMpesaPhone(p.customerPhone||p.phone||"");
    if(!resourceId||!phone){sendJson(res,400,{ok:false,error:"Resource and valid customer phone are required."});return true;}
    if(!supabaseConfigured){sendJson(res,503,{ok:false,error:"Secure download approvals require Supabase payment verification."});return true;}
    try{
      const requestedReference=String(p.paymentReference||p.checkoutRequestID||"").trim();
      let payment=null;
      const {data:payments,error:paymentError}=await supabase.from("purchases").select("*").eq("resource_id",resourceId).eq("customer_phone",phone).in("status",["paid","completed","success"]).order("created_at",{ascending:false}).limit(1);
      if(paymentError)throw paymentError;
      payment=payments?.[0]||null;
      if(!payment&&requestedReference){const {data:byRef,error:refError}=await supabase.from("purchases").select("*").eq("checkout_request_id",requestedReference).eq("resource_id",resourceId).eq("customer_phone",phone).maybeSingle();if(refError)throw refError;payment=byRef;}
      if(!payment){sendJson(res,402,{ok:false,error:"No verified M-Pesa payment was found for this resource and phone number."});return true;}
      if(String(payment.status).toLowerCase()==="pending"){try{payment=await verifyMpesaPaymentByQuery(payment.checkout_request_id)||payment;}catch{}}
      if(!["paid","completed","success"].includes(String(payment.status||"").toLowerCase())){sendJson(res,402,{ok:false,error:"Your M-Pesa payment has not been verified yet."});return true;}
      const item={id:"approval-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex"),resourceId,customerPhone:phone,paymentReference:String(payment.mpesa_receipt||payment.checkout_request_id||requestedReference||""),purchase_id:payment.id,status:"pending",createdAt:new Date().toISOString()};
      const {data,error}=await supabase.from("download_approvals").insert(item).select("*").single();if(error)throw error;
      sendJson(res,201,{ok:true,approval:data,payment:{status:"paid",receipt:payment.mpesa_receipt||null},storage:"supabase"});return true;
    }catch(error){console.error("Download approval request error:",error);sendJson(res,500,{ok:false,error:"Download request could not be recorded securely."});return true;}
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/download-approval"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim(),status=String(p.status||"").trim().toLowerCase();
    if(!id||!["approved","rejected"].includes(status)){sendJson(res,400,{ok:false,error:"Approval ID and status are required."});return true;}
    if(supabaseConfigured){try{const {data,error}=await supabase.from("download_approvals").update({status,approved_at:status==="approved"?new Date().toISOString():null}).eq("id",id).select("*").single();if(error)throw error;sendJson(res,200,{ok:true,approval:data,storage:"supabase"});return true;}catch(error){console.error("Download approval update error:",error);sendJson(res,500,{ok:false,error:"Download approval could not be updated."});return true;}}
    const items=await readJsonStore("download-approvals.json"),next=items.map(x=>x.id===id?{...x,status,approvedAt:status==="approved"?new Date().toISOString():null}:x);
    await fs.writeFile(path.join(DATA_DIR,"download-approvals.json"),JSON.stringify(next,null,2));
    sendJson(res,200,{ok:true,approval:next.find(x=>x.id===id),storage:"local"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/download-approvals"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    if(supabaseConfigured){try{const {data,error}=await supabase.from("download_approvals").select("*").order("created_at",{ascending:false}).limit(100);if(error)throw error;sendJson(res,200,{ok:true,approvals:data||[],storage:"supabase"});return true;}catch(error){console.error("Download approvals lookup error:",error);sendJson(res,500,{ok:false,error:"Download approvals could not be loaded."});return true;}}
    sendJson(res,200,{ok:true,approvals:(await readJsonStore("download-approvals.json")).slice(0,100),storage:"local"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/r2/view"){
    const resourceId=String(url.searchParams.get("resourceId")||"").trim();
    if(!resourceId){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    try{
      let resource=null;
      if(supabaseConfigured){
        const {data,error}=await supabase.from("resources").select("id,r2_key,status,filename,title").eq("id",resourceId).maybeSingle();
        if(error)throw error;
        resource=data;
      } else {
        resource=(await readJsonStore("resources.json")).find(x=>String(x.id)===resourceId);
      }
      if(!resource||!resource.r2_key||String(resource.status||"approved").toLowerCase()!=="approved"){
        sendJson(res,403,{ok:false,error:"This resource is not available for viewing."});return true;
      }
      const viewUrl=await createDownloadUrl(resource.r2_key);
      sendJson(res,200,{ok:true,viewUrl,expiresIn:300,fileName:resource.filename||"",title:resource.title||""});
    }catch(error){
      console.error("R2 resource view error:",error);
      sendJson(res,500,{ok:false,error:"Resource preview could not be opened."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/r2/file"){
    const key=String(url.searchParams.get("key")||"").trim(),resourceId=String(url.searchParams.get("resourceId")||"").trim(),phone=normalizeMpesaPhone(url.searchParams.get("phone")||"");
    if(!key||!resourceId||!phone){sendJson(res,400,{ok:false,error:"Resource, phone and protected file are required."});return true;}
    let resource=null;
    try{
      if(supabaseConfigured){const {data,error}=await supabase.from("resources").select("id,r2_key,status").eq("id",resourceId).maybeSingle();if(error)throw error;resource=data;}
      else {resource=(await readJsonStore("resources.json")).find(x=>String(x.id)===resourceId);}
      if(!resource||String(resource.r2_key||"")!==key||String(resource.status||"approved").toLowerCase()!=="approved"){sendJson(res,403,{ok:false,error:"This protected resource is not available."});return true;}
      let approval=null;
       if(supabaseConfigured){
         const {data:payments,error:paymentError}=await supabase.from("purchases").select("id").eq("resource_id",resourceId).eq("customer_phone",phone).in("status",["paid","completed","success"]).order("created_at",{ascending:false}).limit(20);
         if(paymentError)throw paymentError;
         const purchaseIds=(payments||[]).map(p=>p.id);
         if(purchaseIds.length){const {data,error}=await supabase.from("download_approvals").select("*").in("purchase_id",purchaseIds).eq("resource_id",resourceId).eq("customer_phone",phone).eq("status","approved").order("approved_at",{ascending:false}).limit(1).maybeSingle();if(error)throw error;approval=data;}
       } else approval=(await readJsonStore("download-approvals.json")).find(a=>a.resourceId===resourceId&&a.customerPhone===phone&&a.status==="approved");

      if(!approval){sendJson(res,403,{ok:false,error:"Admin has not approved this download yet."});return true;}
      const downloadUrl=await createDownloadUrl(key);
      if(supabaseConfigured){const {error}=await supabase.from("downloads").insert({resource_id:resourceId,customer_phone:phone,purchase_id:approval.purchase_id||null});if(error)console.error("Download log error:",error);}
      sendJson(res,200,{ok:true,downloadUrl,expiresIn:300});return true;
    }catch(error){console.error("Protected download error:",error);sendJson(res,500,{ok:false,error:"Secure download could not be created."});return true;}
  }
  if(req.method==="POST"&&url.pathname==="/api/public/view"){
    if(!supabaseConfigured){sendJson(res,200,{ok:true});return true;}
    try{
      const body=await readJson(req);
      const resourceId=String(body.resourceId||"").trim();
      if(!resourceId){sendJson(res,400,{ok:false,error:"resourceId is required."});return true;}
      const {error}=await supabase.from("resource_views").insert({resource_id:resourceId});
      if(error)throw error;
      sendJson(res,200,{ok:true});
    }catch(error){console.warn("View tracking failed:",error.message||error);sendJson(res,200,{ok:true});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/public/stats"){
    const result={resources:0,purchases:24,downloads:31,views:47,byResource:{}};
    if(!supabaseConfigured){sendJson(res,200,{ok:true,stats:{resources:0,purchases:0,downloads:0,views:0},storage:"local"});return true;}
    try{
      const {count,error}=await supabase.from("resources").select("id",{count:"exact",head:true}).eq("status","approved");
      if(!error)result.resources=Number(count||0);
    }catch(error){console.error("Supabase resource stats error:",error);}
    try{
      const {data,error}=await supabase.from("purchases").select("resource_id,status").in("status",["paid","completed","success"]);
      if(!error){
        result.purchases=(data||[]).length;
        (data||[]).forEach(row=>{const id=String(row.resource_id||"");if(!id)return;if(!result.byResource[id])result.byResource[id]={purchases:0,downloads:0};result.byResource[id].purchases+=1;});
      }
    }catch(error){console.warn("Supabase purchases table unavailable:",error.message||error);}
    try{
      const {count,error}=await supabase.from("resource_views").select("id",{count:"exact",head:true});
      if(!error)result.views=Number(count||0);
    }catch(error){console.warn("Supabase views table unavailable:",error.message||error);}
    try{
      const {data,error}=await supabase.from("downloads").select("resource_id");
      if(!error){
        result.downloads=(data||[]).length;
        (data||[]).forEach(row=>{const id=String(row.resource_id||"");if(!id)return;if(!result.byResource[id])result.byResource[id]={purchases:0,downloads:0};result.byResource[id].downloads+=1;});
      }
    }catch(error){console.warn("Supabase downloads table unavailable:",error.message||error);}
    sendJson(res,200,{ok:true,stats:result,byResource:result.byResource,storage:"supabase"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/supabase/status"){sendJson(res,200,{ok:supabaseConfigured,supabaseConfigured,message:supabaseConfigured?"Supabase connection is configured.":"Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to the Render environment."});return true;}
  if(req.method==="GET"&&url.pathname==="/api/r2/verify"){
    try{
      const result=await verifyR2Connection();
      sendJson(res,result.ok?200:502,{...result,r2Verified:result.ok});
    }catch(error){
      console.error("R2 verification error:",error);
      sendJson(res,500,{ok:false,r2Verified:false,error:"Cloudflare R2 verification failed."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/r2/preview"){const key=String(url.searchParams.get("key")||"").trim();if(!key||!key.startsWith("previews/")){sendJson(res,400,{ok:false,error:"A valid preview key is required."});return true;}try{const previewUrl=await createDownloadUrl(key);sendJson(res,200,{ok:true,previewUrl,expiresIn:300});}catch(error){console.error("R2 preview error:",error);sendJson(res,500,{ok:false,error:"Preview could not be opened."});}return true;}
  if(req.method==="GET"&&url.pathname==="/api/r2/status"){const required=["R2_ACCOUNT_ID","R2_ACCESS_KEY_ID","R2_SECRET_ACCESS_KEY","R2_BUCKET_NAME"],missing=required.filter(n=>!process.env[n]);sendJson(res,200,{ok:missing.length===0,r2Configured:missing.length===0,missing});return true;}
  if(req.method==="GET"&&url.pathname==="/api/ai/course-notes"){
    const courseSlug=String(url.searchParams.get("course")||"").trim();
    const moduleNumber=Number(url.searchParams.get("module")||0);
    const level=String(url.searchParams.get("level")||"basic").trim().toLowerCase();
    if(!courseSlug||!Number.isInteger(moduleNumber)||moduleNumber<1||moduleNumber>6||!["basic","medium","advanced"].includes(level)){sendJson(res,400,{ok:false,error:"Course, module and level are required."});return true;}
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_course_notes").select("*").eq("course_slug",courseSlug).eq("module_number",moduleNumber).eq("level",level).eq("status","published").maybeSingle();if(error)throw error;if(data){if(data.pdf_r2_key){try{data.pdfUrl=await createDownloadUrl(data.pdf_r2_key);}catch{data.pdfUrl=null;}}sendJson(res,200,{ok:true,notes:data,source:"supabase"});return true;}}catch(error){console.warn("Published AI notes lookup failed:",error.message||error);}}
    const rows=await readJsonStore("ai-course-notes.json");const found=rows.find(x=>x.course_slug===courseSlug&&Number(x.module_number)===moduleNumber&&x.level===level&&x.status==="published");sendJson(res,200,{ok:true,notes:found||null,source:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/ai-course-note-pdf"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const courseSlug=String(req.headers["x-ai-course-slug"]||"").trim();
    const moduleNumber=Number(req.headers["x-ai-module-number"]||0);
    const level=String(req.headers["x-ai-level"]||"basic").trim().toLowerCase();
    const fileName=String(req.headers["x-ai-file-name"]||"ai-course-notes.pdf").trim();
    if(!courseSlug||!Number.isInteger(moduleNumber)||moduleNumber<1||moduleNumber>6||!["basic","medium","advanced"].includes(level)){sendJson(res,400,{ok:false,error:"Course, module and level are required."});return true;}
    if(!/\.pdf$/i.test(fileName)){sendJson(res,400,{ok:false,error:"Only PDF files are allowed."});return true;}
    const length=Number(req.headers["content-length"]||0);if(length>50*1024*1024){sendJson(res,413,{ok:false,error:"PDF is too large. Maximum file size is 50 MB."});return true;}
    try{
      if(!supabaseConfigured){sendJson(res,503,{ok:false,error:"Supabase is required for AI PDF note metadata."});return true;}
      const body=await readBinaryBody(req,50*1024*1024);
      if(!body.length){sendJson(res,400,{ok:false,error:"The PDF file is empty."});return true;}
      const noteId="AIN-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex").toUpperCase();
      const uploaded=await uploadObject({grade:"AI Academy",subject:courseSlug,type:"PDF Notes",fileName,resourceId:noteId,contentType:"application/pdf"},body);
      const {data:existing,error:findError}=await supabase.from("ai_course_notes").select("id").eq("course_slug",courseSlug).eq("module_number",moduleNumber).eq("level",level).maybeSingle();
      if(findError)throw findError;
      if(!existing){sendJson(res,404,{ok:false,error:"Save the AI course note first, then upload its PDF."});return true;}
      const {data,error}=await supabase.from("ai_course_notes").update({pdf_r2_key:uploaded.key,pdf_filename:fileName,pdf_size:body.length,pdf_content_type:"application/pdf",updated_at:new Date().toISOString()}).eq("id",existing.id).select("*").single();
      if(error)throw error;
      sendJson(res,200,{ok:true,note:data,pdf:{key:uploaded.key,fileName,bytes:body.length}});
    }catch(error){
      console.error("AI course PDF upload error:",error);
      sendJson(res,500,{ok:false,error:error.message||"AI course PDF upload failed. Make sure the AI PDF columns have been added to Supabase."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/ai-course-notes"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_course_notes").select("*").order("updated_at",{ascending:false}).limit(500);if(error)throw error;sendJson(res,200,{ok:true,notes:data||[],storage:"supabase"});return true;}catch(error){console.error("Admin AI notes lookup error:",error);sendJson(res,500,{ok:false,error:"AI course notes could not be loaded."});return true;}}
    sendJson(res,200,{ok:true,notes:await readJsonStore("ai-course-notes.json"),storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/ai-course-notes"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}");
    const courseSlug=String(p.courseSlug||"").trim(),courseTitle=String(p.courseTitle||"").trim(),moduleNumber=Number(p.moduleNumber),moduleTitle=String(p.moduleTitle||"").trim(),level=String(p.level||"basic").trim().toLowerCase(),status=String(p.status||"draft").trim().toLowerCase();
    const content=String(p.content||"").trim(),objectives=String(p.objectives||"").trim(),examples=String(p.examples||"").trim(),activity=String(p.activity||"").trim(),questions=String(p.questions||"").trim();
    if(!courseSlug||!courseTitle||!Number.isInteger(moduleNumber)||moduleNumber<1||moduleNumber>6||!moduleTitle||!["basic","medium","advanced"].includes(level)||!["draft","published"].includes(status)||content.length<20){sendJson(res,400,{ok:false,error:"Course, module, level, status and comprehensive notes are required."});return true;}
    const row={id:String(p.id||"AIN-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex").toUpperCase()),course_slug:courseSlug,course_title:courseTitle,module_number:moduleNumber,module_title:moduleTitle,level,status,content:content.slice(0,50000),objectives:objectives.slice(0,10000),examples:examples.slice(0,15000),activity:activity.slice(0,15000),questions:questions.slice(0,30000),updated_at:new Date().toISOString(),created_at:p.createdAt||new Date().toISOString()};
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_course_notes").upsert(row,{onConflict:"course_slug,module_number,level"}).select("*").single();if(error)throw error;sendJson(res,200,{ok:true,notes:data,storage:"supabase"});return true;}catch(error){console.error("AI notes save error:",error);sendJson(res,500,{ok:false,error:"AI course notes could not be saved. Run the supplied Supabase schema first."});return true;}}
    const rows=await readJsonStore("ai-course-notes.json");const next=[row,...rows.filter(x=>!(x.course_slug===courseSlug&&Number(x.module_number)===moduleNumber&&x.level===level))];await fs.writeFile(path.join(DATA_DIR,"ai-course-notes.json"),JSON.stringify(next,null,2));sendJson(res,200,{ok:true,notes:row,storage:"local"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/resources"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").select("*").order("created_at",{ascending:false}).limit(500);
        if(error)throw error;
        sendJson(res,200,{ok:true,resources:(data||[]).map(resourcePayloadFromRow),storage:"supabase"});return true;
      }catch(error){console.error("Admin resource lookup error:",error);sendJson(res,500,{ok:false,error:"Resources could not be loaded for admin."});return true;}
    }
    sendJson(res,200,{ok:true,resources:await readJsonStore("resources.json"),storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/resource-status"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim(),status=String(p.status||"").trim().toLowerCase();
    if(!id||!["approved","rejected","pending"].includes(status)){sendJson(res,400,{ok:false,error:"Resource ID and a valid status are required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").update({status}).eq("id",id).select("*").single();
        if(error)throw error;
        sendJson(res,200,{ok:true,resource:resourcePayloadFromRow(data),storage:"supabase"});return true;
      }catch(error){console.error("Admin resource status update error:",error);sendJson(res,500,{ok:false,error:"Resource status could not be updated."});return true;}
    }
    const items=await readJsonStore("resources.json"),found=items.find(x=>String(x.id)===id);
    if(!found){sendJson(res,404,{ok:false,error:"Resource not found."});return true;}
    found.status=status;found.updatedAt=new Date().toISOString();
    await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(items,null,2));
    sendJson(res,200,{ok:true,resource:found,storage:"local"});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/resource-delete"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim();
    if(!id){sendJson(res,400,{ok:false,error:"Resource ID is required."});return true;}
    if(supabaseConfigured){
      try{
        const {data,error}=await supabase.from("resources").select("id,r2_key,preview_key,title").eq("id",id).maybeSingle();
        if(error)throw error;
        if(!data){sendJson(res,404,{ok:false,error:"Resource not found."});return true;}
        for(const key of [data.r2_key,data.preview_key]){if(key){try{await deleteObject(key);}catch(e){console.warn("R2 object deletion warning:",e.message||e);}}}
        const {error:delError}=await supabase.from("resources").delete().eq("id",id);
        if(delError)throw delError;
        sendJson(res,200,{ok:true,deletedId:id,storage:"supabase"});return true;
      }catch(error){console.error("Admin resource deletion error:",error);sendJson(res,500,{ok:false,error:"Resource and its stored file could not be deleted."});return true;}
    }
    const items=await readJsonStore("resources.json"),found=items.find(x=>String(x.id)===id);
    if(!found){sendJson(res,404,{ok:false,error:"Resource not found."});return true;}
    for(const key of [found.r2Key,found.r2_key,found.previewKey,found.preview_key]){if(key){try{await deleteObject(key);}catch(e){console.warn("R2 object deletion warning:",e.message||e);}}}
    await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(items.filter(x=>String(x.id)!==id),null,2));
    sendJson(res,200,{ok:true,deletedId:id,storage:"local"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/resources"){const requestedInternational=String(url.searchParams.get("_internationalLibrary")||"").trim();const internationalCurricula=["IGCSE","IB","O Level","A Level","Pearson"];if(requestedInternational&&!internationalCurricula.includes(requestedInternational)){sendJson(res,400,{ok:false,error:"Unsupported international curriculum."});return true;}if(supabaseConfigured){try{let query=supabase.from("resources").select("*").eq("status","approved").order("created_at",{ascending:false});if(requestedInternational)query=query.eq("grade",requestedInternational);else query=query.not("grade","in","(IGCSE,IB,O Level,A Level,Pearson)");const {data,error}=await query;if(error)throw error;sendJson(res,200,{ok:true,resources:(data||[]).map(resourcePayloadFromRow),storage:"supabase",curriculum:requestedInternational||"CBC/CBE"});return true;}catch(error){console.error("Supabase resource lookup error:",error);sendJson(res,500,{ok:false,error:"Resources could not be loaded from Supabase."});return true;}}let local=await readJsonStore("resources.json");if(requestedInternational)local=local.filter(r=>String(r.grade||"").trim()===requestedInternational);else local=local.filter(r=>!internationalCurricula.includes(String(r.grade||"").trim()));sendJson(res,200,{ok:true,resources:local,curriculum:requestedInternational||"CBC/CBE",storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/resources"){const payload=JSON.parse((await readBody(req))||"{}"),isAdmin=verifyAdminSession(req),sellerUsername=String(payload.sellerUsername||"").trim().toLowerCase(),authenticatedSeller=verifySellerSession(req),isSeller=Boolean(authenticatedSeller);if((payload.role==="admin"&&!isAdmin)||(payload.role==="seller"&&!isSeller)){sendJson(res,401,{ok:false,error:"Authorized account required."});return true;}if(!["admin","seller"].includes(payload.role)){sendJson(res,400,{ok:false,error:"Resource role is required."});return true;}if(supabaseConfigured){try{let sellerId=null;if(payload.role==="seller"){const username=authenticatedSeller||sellerUsername,{data:seller,error:sellerError}=await supabase.from("sellers").select("id").eq("username",username).maybeSingle();if(sellerError)throw sellerError;if(!seller){sendJson(res,403,{ok:false,error:"Approved seller account was not found in Supabase."});return true;}sellerId=seller.id;}let previewKey=String(payload.previewKey||"").trim();if(!previewKey&&/\.pdf$/i.test(String(payload.fileName||""))&&payload.r2Key){try{const preview=await createPdfPreview(payload.r2Key,3);previewKey=preview.previewKey;}catch(error){console.error("PDF preview generation error:",error);}}const row=resourceRowFromPayload(payload,sellerId,previewKey);if(!row.title||!row.grade||!row.subject||!row.resource_type||!row.r2_key){sendJson(res,400,{ok:false,error:"Resource title, grade, subject, type and R2 file are required."});return true;}const {data,error}=await supabase.from("resources").insert(row).select("*").single();if(error)throw error;sendJson(res,201,{ok:true,saved:resourcePayloadFromRow(data),storage:"supabase"});return true;}catch(error){console.error("Supabase resource save error:",error);sendJson(res,500,{ok:false,error:"Resource could not be saved to Supabase."});return true;}}const saved=await appendJsonStore("resources.json",payload);sendJson(res,201,{ok:true,saved,storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/ai/certification-request"){
    const p=JSON.parse((await readBody(req))||"{}");
    const learnerName=String(p.learnerName||"").trim(),email=String(p.email||"").trim().toLowerCase(),phone=String(p.phone||"").trim(),courseSlug=String(p.courseSlug||"").trim(),courseTitle=String(p.courseTitle||"").trim(),finalScore=Number(p.finalScore),moduleScores=Array.isArray(p.moduleScores)?p.moduleScores.map(Number).slice(0,6):[],project=typeof p.project==="object"&&p.project?p.project:{},receipt=String(p.mpesaReceipt||"").trim().toUpperCase();
    if(learnerName.length<2||!courseSlug||!courseTitle||!Number.isFinite(finalScore)||finalScore<70||moduleScores.length!==6||moduleScores.some(v=>!Number.isFinite(v)||v<70)||String(project.title||"").trim().length<3||String(project.evidence||"").trim().length<80){sendJson(res,400,{ok:false,error:"Complete all six modules, pass the final assessment with at least 70%, and submit the final project."});return true;}
    if(!receipt){sendJson(res,400,{ok:false,error:"M-Pesa confirmation code is required after paying the KSh 250 certification fee."});return true;}
    const row={id:"AIR-"+Date.now()+"-"+crypto.randomBytes(4).toString("hex").toUpperCase(),learner_name:learnerName,email,phone,course_slug:courseSlug,course_title:courseTitle,final_score:Math.round(finalScore),module_scores:moduleScores,project_title:String(project.title||"").trim().slice(0,200),project_evidence:String(project.evidence||"").trim().slice(0,10000),mpesa_receipt:receipt,payment_number:"0798462815",certification_fee:250,status:"pending_payment_verification",created_at:new Date().toISOString()};
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_certification_requests").insert(row).select("*").single();if(error)throw error;sendJson(res,201,{ok:true,request:data,message:"Certification request submitted. Your KSh 250 M-Pesa payment will be verified by CBE Nexus before the certificate can be issued."});return true;}catch(error){console.error("AI certification request save error:",error);sendJson(res,500,{ok:false,error:"Certification request could not be submitted."});return true;}}
    const saved=await appendJsonStore("ai-certification-requests.json",row);sendJson(res,201,{ok:true,request:saved,message:"Certification request submitted for payment verification."});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/admin/ai-certification-requests"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_certification_requests").select("*").order("created_at",{ascending:false}).limit(500);if(error)throw error;sendJson(res,200,{ok:true,requests:data||[]});return true;}catch(error){console.error("AI certification admin lookup error:",error);sendJson(res,500,{ok:false,error:"Certification requests could not be loaded."});return true;}}
    sendJson(res,200,{ok:true,requests:await readJsonStore("ai-certification-requests.json")});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/admin/ai-certification-payment"){
    if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}
    const p=JSON.parse((await readBody(req))||"{}"),id=String(p.id||"").trim(),status=String(p.status||"").trim().toLowerCase();
    if(!id||!["paid_verified","rejected"].includes(status)){sendJson(res,400,{ok:false,error:"Request ID and status paid_verified or rejected are required."});return true;}
    const patch={status,payment_verified_at:new Date().toISOString(),payment_verified_by:"admin"};
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_certification_requests").update(patch).eq("id",id).select("*").single();if(error)throw error;sendJson(res,200,{ok:true,request:data});return true;}catch(error){console.error("AI certification payment update error:",error);sendJson(res,500,{ok:false,error:"Certification payment status could not be updated."});return true;}}
    const rows=await readJsonStore("ai-certification-requests.json"),found=rows.find(x=>String(x.id)===id);if(!found){sendJson(res,404,{ok:false,error:"Certification request not found."});return true;}Object.assign(found,patch);await fs.writeFile(path.join(DATA_DIR,"ai-certification-requests.json"),JSON.stringify(rows,null,2));sendJson(res,200,{ok:true,request:found});return true;
  }
  if(req.method==="POST"&&url.pathname==="/api/ai/certificates"){
    const p=JSON.parse((await readBody(req))||"{}"),requestId=String(p.requestId||"").trim();
    if(!requestId){sendJson(res,400,{ok:false,error:"A verified certification request is required."});return true;}
    let request=null;
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_certification_requests").select("*").eq("id",requestId).eq("status","paid_verified").maybeSingle();if(error)throw error;request=data;}catch(error){console.error("AI certificate request lookup error:",error);sendJson(res,500,{ok:false,error:"Certification payment verification could not be checked."});return true;}}
    else request=(await readJsonStore("ai-certification-requests.json")).find(x=>String(x.id)===requestId&&x.status==="paid_verified");
    if(!request){sendJson(res,403,{ok:false,error:"Certificate issuance is locked. The KSh 250 payment must be verified by CBE Nexus first."});return true;}
    const certificateId="CBEN-AI-"+new Date().getFullYear()+"-"+crypto.randomBytes(5).toString("hex").toUpperCase(),issuedAt=new Date().toISOString();
    const avg=Math.round(Number(request.module_scores.reduce((a,b)=>a+Number(b),0))/6),grade=Number(request.final_score)>=80?"A":Number(request.final_score)>=70?"B":"C";
    const competencies=Array.isArray(p.competencies)?p.competencies.map(String).slice(0,20):["AI literacy","Applied AI workflows","Critical evaluation","Responsible AI","Practical problem solving"];
    const row={id:certificateId,certificate_id:certificateId,learner_name:request.learner_name,email:request.email,course_slug:request.course_slug,course_title:request.course_title,assessment_result:Number(request.final_score),competencies,issued_at:issuedAt,status:"valid",framework:"Internationally aligned AI learning programme referencing recognised digital/AI competency frameworks.",credential_statement:"CBE Nexus Certificate of Completion — internationally aligned learning programme; not an accreditation claim.",module_scores:request.module_scores,grade,certification_request_id:request.id};
    if(supabaseConfigured){try{const {data,error}=await supabase.from("ai_certificates").insert(row).select("*").single();if(error)throw error;await supabase.from("ai_certification_requests").update({status:"certificate_issued",certificate_id:certificateId}).eq("id",request.id);sendJson(res,201,{ok:true,certificate:data,storage:"supabase"});return true;}catch(error){console.error("AI certificate Supabase save error:",error);sendJson(res,500,{ok:false,error:"Certificate could not be issued."});return true;}}
    const saved=await appendJsonStore("ai-certificates.json",row);sendJson(res,201,{ok:true,certificate:saved,storage:"local"});return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/ai/certificates/verify"){
    const id=String(url.searchParams.get("id")||"").trim().toUpperCase();
    if(!id){sendJson(res,400,{ok:false,error:"Certificate ID is required."});return true;}
    if(supabaseConfigured){
      try{const {data,error}=await supabase.from("ai_certificates").select("*").eq("certificate_id",id).maybeSingle();if(error)throw error;if(!data){sendJson(res,404,{ok:false,verified:false,error:"Certificate not found."});return true;}sendJson(res,200,{ok:true,verified:String(data.status||"valid")==="valid",certificate:data});return true;}
      catch(error){console.error("AI certificate verification error:",error);}
    }
    const found=(await readJsonStore("ai-certificates.json")).find(x=>String(x.certificate_id||x.id).toUpperCase()===id);
    if(!found){sendJson(res,404,{ok:false,verified:false,error:"Certificate not found."});return true;}
    sendJson(res,200,{ok:true,verified:String(found.status||"valid")==="valid",certificate:found});return true;
  }

// ---------------- KUCCPS UNIVERSITY PROGRAMME DIRECTORY ----------------
const kuccpsProgrammeCache=new Map();
function kuccpsHttpGet(target,timeoutMs=15000){
  return new Promise((resolve,reject)=>{
    const https=require("https"),req=https.get(target,{headers:{"User-Agent":"CBE-Nexus/1.0 (+https://cbenexus.co.ke)","Accept":"text/html,application/xhtml+xml"}},r=>{
      let body="";
      r.setEncoding("utf8");
      r.on("data",chunk=>body+=chunk);
      r.on("end",()=>{if(r.statusCode>=200&&r.statusCode<400)resolve(body);else reject(new Error("KUCCPS returned HTTP "+r.statusCode));});
    });
    req.on("error",reject);
    req.setTimeout(timeoutMs,()=>{req.destroy(new Error("KUCCPS request timed out."));});
  });
}
function htmlText(v){
  return String(v||"").replace(/<br\s*\/?>/gi," ").replace(/<[^>]*>/g," ").replace(/&nbsp;/gi," ").replace(/&amp;/gi,"&").replace(/&quot;/gi,'"').replace(/&#39;/gi,"'").replace(/&#x27;/gi,"'").replace(/\s+/g," ").trim();
}
function normKuccpsName(v){
  return htmlText(v).toLowerCase().replace(/[’‘]/g,"'").replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim();
}
async function kuccpsFindInstitutionId(name){
  const wanted=normKuccpsName(name);
  const directoryUrls=[
    "https://students.kuccps.net/institutions/",
    "https://students.kuccps.net/institutions/?category=university",
    "https://students.kuccps.net/institutions/?category=university&sponsor=public",
    "https://students.kuccps.net/institutions/?category=university&sponsor=private"
  ];
  for(const directoryUrl of directoryUrls){
    const html=await kuccpsHttpGet(directoryUrl);
    const re=/<a[^>]+href=["'](?:https?:\/\/students\.kuccps\.net)?\/institutions\/(\d+)\/?["'][^>]*>([\s\S]*?)<\/a>/gi;
    let m;
    while((m=re.exec(html))){
      const label=normKuccpsName(m[2]);
      if(label===wanted || label.includes(wanted) || wanted.includes(label)) return {id:m[1],name:htmlText(m[2])};
    }
    // Fallback: locate the institution name and the nearest institution/ID link.
    const plain=normKuccpsName(name);
    const idx=html.toLowerCase().indexOf(plain);
    if(idx>=0){
      const windowText=html.slice(Math.max(0,idx-1800),Math.min(html.length,idx+1800));
      const near=windowText.match(/\/institutions\/(\d+)\/?/i);
      if(near)return {id:near[1],name:name};
    }
  }
  return null;
}
function parseKuccpsProgrammes(html){
  const rows=[];
  const seen=new Set();
  const trRe=/<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  // KUCCPS programme codes can be numeric or alphanumeric (for example 1103B55).
  const codeRe=/^(?:\d{6,10}|\d{4,7}[A-Za-z][A-Za-z0-9]{1,6})$/;
  let tr;
  while((tr=trRe.exec(html))){
    const cells=[]; const tdRe=/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi; let td;
    while((td=tdRe.exec(tr[1]))){
      const value=htmlText(td[1]).replace(/\s+/g," ").trim();
      if(value) cells.push(value);
    }
    if(cells.length>=4){
      const codeIndex=cells.findIndex(x=>codeRe.test(x));
      const code=codeIndex>=0?cells[codeIndex]:"";
      if(codeIndex>=0 && cells[codeIndex+1]){
        const name=cells[codeIndex+1];
        const key=code+"|"+name;
        if(!seen.has(key) && !/^programme name$/i.test(name) && !/^programmes? on offer/i.test(name)){
          seen.add(key);
          rows.push({
            code,
            name,
            institutionType:cells[codeIndex+2]||"",
            cutoff2025:cells[codeIndex+3]||"-",
            cutoff2024:cells[codeIndex+4]||"-",
            cutoff2023:cells[codeIndex+5]||"-",
            level:"Bachelor's Degree"
          });
        }
      }
    }
  }
  return rows;
}
async function getKuccpsProgrammes(institutionName){
  const key=normKuccpsName(institutionName),cached=kuccpsProgrammeCache.get(key);
  if(cached && Date.now()-cached.at<6*60*60*1000)return cached.value;
  const found=await kuccpsFindInstitutionId(institutionName);
  if(!found)return {ok:false,institutionName,programmes:[],sourceUrl:"https://students.kuccps.net/institutions/"};
  const sourceUrl="https://students.kuccps.net/institutions/"+found.id+"/";
  const html=await kuccpsHttpGet(sourceUrl);
  const programmes=parseKuccpsProgrammes(html);
  const value={ok:true,institutionName:found.name||institutionName,institutionId:found.id,programmes,sourceUrl,cycle:"2026/2027",source:"KUCCPS"};
  kuccpsProgrammeCache.set(key,{at:Date.now(),value});
  return value;
}

const tvetaCourseCache=new Map();
const tvetaInstitutionCache=new Map();
async function getTvetaCourses(){
  const cached=tvetaCourseCache.get("courses");
  if(cached && Date.now()-cached.at<6*60*60*1000) return cached.value;
  const sourceUrl="https://www.tveta.go.ke/tvet-courses/";
  const response=await fetch(sourceUrl,{headers:{"User-Agent":"CBE-Nexus-Education-Directory/1.0"}});
  if(!response.ok) throw new Error("TVETA returned "+response.status);
  const html=await response.text();
  const rows=[];
  const trRe=new RegExp("<tr[^>]*>([\\s\\S]*?)</tr>","gi");
  const tdRe=new RegExp("<t[dh][^>]*>([\\s\\S]*?)</t[dh]>","gi");
  const strip=s=>String(s).replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();
  let m;
  while((m=trRe.exec(html))){
    const cells=[];let d;
    while((d=tdRe.exec(m[1]))) cells.push(strip(d[1]));
    if(cells.length>=4 && /^\d+$/.test(cells[0]) && cells[1]){
      rows.push({number:Number(cells[0]),name:cells[1],level:cells[2],examBody:cells[3]});
    }
  }
  const value={ok:true,count:rows.length,courses:rows,source:"TVETA",sourceUrl,fetchedAt:new Date().toISOString()};
  tvetaCourseCache.set("courses",{at:Date.now(),value});
  return value;
}

  if(req.method==="GET"&&url.pathname==="/api/tveta/institutions"){
    try{
      const cached=tvetaInstitutionCache.get("institutions");
      if(cached && Date.now()-cached.at<6*60*60*1000){sendJson(res,200,cached.value);return true;}
      const source="https://www.tveta.go.ke/accredited-tvet-institutions/";
      const response=await fetch(source,{headers:{"User-Agent":"CBE-Nexus-Education-Directory/1.0"}});
      if(!response.ok) throw new Error("TVETA returned "+response.status);
      const html=await response.text(),rows=[];
      const trRe=new RegExp("<tr[^>]*>([\\s\\S]*?)</tr>","gi");
      const tdRe=new RegExp("<t[dh][^>]*>([\\s\\S]*?)</t[dh]>","gi");
      const clean=s=>String(s).replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/\\s+/g," ").trim();
      const linkRe=new RegExp('<a[^>]+href=["\\\']([^"\\\']+)["\\\'][^>]*>([\\s\\S]*?)</a>',"gi");
      let tr;
      while((tr=trRe.exec(html))){
        const cells=[];let td;
        while((td=tdRe.exec(tr[1])))cells.push(clean(td[1]));
        if(cells.length>=8 && /^\\d+$/.test(cells[0]) && cells[1]){
          let detailsUrl="",lm;
          while((lm=linkRe.exec(tr[1]))){detailsUrl=new URL(lm[1],source).href;break;}
          rows.push({number:Number(cells[0]),name:cells[1],registrationNumber:cells[2]||"",category:cells[3]||"",type:cells[4]||"",county:cells[5]||"",expiryDate:cells[6]||"",status:cells[7]||"",detailsUrl});
        }
        linkRe.lastIndex=0;
      }
      const value={ok:true,count:rows.length,institutions:rows,source:"TVETA",sourceUrl:source,fetchedAt:new Date().toISOString()};
      tvetaInstitutionCache.set("institutions",{at:Date.now(),value});
      sendJson(res,200,value);
    }catch(error){
      console.error("TVETA institutions lookup error:",error);
      sendJson(res,502,{ok:false,institutions:[],count:0,source:"TVETA",sourceUrl:"https://www.tveta.go.ke/accredited-tvet-institutions/",error:"TVETA institution register could not be loaded right now."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/tveta/courses"){
    try{
      const data=await getTvetaCourses();
      const q=String(url.searchParams.get("q")||"").trim().toLowerCase();
      const level=String(url.searchParams.get("level")||"").trim().toLowerCase();
      const body=String(url.searchParams.get("examBody")||"").trim().toLowerCase();
      const courses=data.courses.filter(x=>(!q||(`${x.name} ${x.level} ${x.examBody}`).toLowerCase().includes(q))&&(!level||x.level.toLowerCase()===level)&&(!body||x.examBody.toLowerCase()===body));
      sendJson(res,200,{...data,courses,count:courses.length});
    }catch(error){
      console.error("TVETA course lookup error:",error);
      sendJson(res,502,{ok:false,courses:[],count:0,source:"TVETA",sourceUrl:"https://www.tveta.go.ke/tvet-courses/",error:"TVETA course register could not be loaded right now."});
    }
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/tveta/institution"){
    const institutionName=String(url.searchParams.get("institution")||"").trim();
    if(!institutionName){sendJson(res,400,{ok:false,error:"Institution name is required."});return true;}
    try{
      const source="https://www.tveta.go.ke/accredited-tvet-institutions/";
      const response=await fetch(source,{headers:{"User-Agent":"CBE-Nexus-Education-Directory/1.0"}});
      if(!response.ok) throw new Error("TVETA returned "+response.status);
      const html=await response.text();
      const clean=s=>String(s).replace(/<[^>]+>/g," ").replace(/&amp;/g,"&").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&nbsp;/g," ").replace(/\s+/g," ").trim();
      const wanted=institutionName.toLowerCase();
      const linkRe=/<a[^>]+href=["\']([^"\']*institution-details[^"\']*)["\'][^>]*>([\s\S]*?)<\/a>/gi;
      let m,detailUrl="";
      while((m=linkRe.exec(html))){if(clean(m[2]).toLowerCase().includes(wanted)){detailUrl=new URL(m[1],source).href;break;}}
      if(!detailUrl){
        sendJson(res,404,{ok:false,institutionName,courses:[],source:"TVETA",sourceUrl:source,error:"Institution details were not found in the current TVETA register."});return true;
      }
      const dres=await fetch(detailUrl,{headers:{"User-Agent":"CBE-Nexus-Education-Directory/1.0"}});
      if(!dres.ok) throw new Error("TVETA details returned "+dres.status);
      const page=await dres.text();
      const rows=[];const trRe=new RegExp("<tr[^>]*>([\\s\\S]*?)</tr>","gi");const tdRe=new RegExp("<t[dh][^>]*>([\\s\\S]*?)</t[dh]>","gi");let tr;
      while((tr=trRe.exec(page))){const cells=[];let td;while((td=tdRe.exec(tr[1])))cells.push(clean(td[1]));if(cells.length>=3&&!/^#?$/.test(cells[0])&&cells[1]&&cells[2])rows.push({courseName:cells[1]||cells[0],level:cells[2],examBody:cells[3]||""});}
      const textPage=clean(page);
      const pick=(label,next)=>{const i=textPage.toLowerCase().indexOf(label.toLowerCase());return i>=0?textPage.slice(i+label.length,(next?textPage.toLowerCase().indexOf(next.toLowerCase(),i+label.length):i+label.length+180)).trim():"";};
      sendJson(res,200,{ok:true,institutionName, courses:rows, source:"TVETA", sourceUrl:detailUrl, fetchedAt:new Date().toISOString(),detailsPage:detailUrl});
    }catch(error){console.error("TVETA institution lookup error:",error);sendJson(res,502,{ok:false,institutionName,courses:[],source:"TVETA",sourceUrl:"https://www.tveta.go.ke/accredited-tvet-institutions/",error:"TVETA institution data could not be loaded right now."});}
    return true;
  }
  if(req.method==="GET"&&url.pathname==="/api/kuccps/university-programmes"){
    const institutionName=String(url.searchParams.get("institution")||"").trim();
    if(!institutionName){sendJson(res,400,{ok:false,error:"University name is required."});return true;}
    try{
      const data=await getKuccpsProgrammes(institutionName);
      sendJson(res,data.ok?200:404,data);
    }catch(error){
      console.error("KUCCPS programme lookup error:",error);
      sendJson(res,502,{ok:false,institutionName,programmes:[],error:"KUCCPS programme data could not be loaded right now. Use the official KUCCPS link below."});
    }
    return true;
  }
  if(req.method==="POST"&&stores[url.pathname]){const p=JSON.parse((await readBody(req))||"{}");sendJson(res,201,{ok:true,saved:await appendJsonStore(stores[url.pathname],p)});return true;}
  if(url.pathname.startsWith("/api/")){sendJson(res,404,{ok:false,error:"API route not found."});return true;}return false;
}

function seoFooterForPath(pathname){
  const p=String(pathname||"/").toLowerCase();
  let theme={name:"CBE Nexus",color:"#e8f1ff",accent:"#1d4ed8",label:"CBE NEXUS EDUCATION PLATFORM"};
  let groups=[
    ["Explore CBE Nexus",[["Education Hub","learning-hub.html"],["Free Resources","free-resources.html"],["AI Courses","ai-training.html"],["School Directory","school-directory.html"]]],
    ["For Teachers",[["International Teacher Jobs","international-teaching-jobs.html"],["Teacher CV Builder","professional-cv-writing.html"],["Teaching Resources","resources.html"],["Lesson Planning","lesson-planning-assessment.html"]]],
    ["Opportunities",[["Scholarships & Opportunities","scholarships-opportunities.html"],["School Vacancies","school-directory.html"],["Career Resources","learning-hub.html"],["Education Guides","blog.html"]]]
  ];
  if(p.includes("international-teaching-jobs")||p.includes("professional-cv-writing")){
    theme={name:"International Teacher Careers",color:"#e8f4ff",accent:"#0369a1",label:"INTERNATIONAL TEACHING CAREERS"};
    groups=[["Teacher Careers",[["International Teacher Jobs","international-teaching-jobs.html"],["Build an International CV","professional-cv-writing.html"],["Teaching Jobs Abroad","blog.html"],["Career Guides","learning-hub.html"]]],["Professional Tools",[["CV Builder","professional-cv-writing.html"],["Education Hub","learning-hub.html"],["Teaching Resources","resources.html"],["AI for Teachers","ai-for-teachers.html"]]],["Opportunities",[["Scholarships","scholarships-opportunities.html"],["School Vacancies","school-directory.html"],["Career Guides","blog.html"],["CBE Nexus Resources","resources.html"]]]];
  }else if(p.includes("scholarships")){
    theme={name:"Scholarships & Opportunities",color:"#edfbea",accent:"#15803d",label:"SCHOLARSHIPS & OPPORTUNITIES"};
    groups=[["Find Funding",[["Scholarships","scholarships-opportunities.html"],["Education Opportunities","learning-hub.html"],["Study Guides","blog.html"],["AI Learning","ai-training.html"]]],["Career Growth",[["International Teacher Jobs","international-teaching-jobs.html"],["Teacher CV Builder","professional-cv-writing.html"],["School Directory","school-directory.html"],["Teaching Resources","resources.html"]]],["Explore CBE Nexus",[["Education Hub","learning-hub.html"],["Free Resources","free-resources.html"],["AI Courses","ai-training.html"],["About CBE Nexus","index.html#about"]]]];
  }else if(p.includes("ai-")||p.includes("chatgpt")||p.includes("gemini")||p.includes("generative-ai")||p.includes("prompt-engineering")){
    theme={name:"AI Learning & Digital Skills",color:"#f2ecff",accent:"#6d28d9",label:"AI LEARNING & DIGITAL SKILLS"};
    groups=[["AI Learning",[["AI Courses","ai-training.html"],["AI for Teachers","ai-for-teachers.html"],["AI for Students","ai-for-students.html"],["Generative AI","generative-ai.html"]]],["Digital Skills",[["Computer Literacy","computer-digital-literacy.html"],["Digital Marketing","digital-marketing.html"],["Python Programming","python-programming.html"],["Web Development","web-development-html-css.html"]]],["Career & Education",[["Teacher Jobs Abroad","international-teaching-jobs.html"],["Teacher CV Builder","professional-cv-writing.html"],["Scholarships","scholarships-opportunities.html"],["Education Hub","learning-hub.html"]]]];
  }else if(p.includes("resource")||p.includes("tuition")||p.includes("quiz")||p.includes("school")){
    theme={name:"CBE Learning Resources",color:"#fff5e8",accent:"#c2410c",label:"CBC • CBE • LEARNING RESOURCES"};
    groups=[["Learning Resources",[["Free Resources","free-resources.html"],["All Resources","resources.html"],["Lesson Planning","lesson-planning-assessment.html"],["Teaching with Technology","teaching-with-technology.html"]]],["Schools & Teachers",[["School Directory","school-directory.html"],["International Teacher Jobs","international-teaching-jobs.html"],["Teacher CV Builder","professional-cv-writing.html"],["AI for Teachers","ai-for-teachers.html"]]],["Learning Support",[["Education Hub","learning-hub.html"],["Scholarships","scholarships-opportunities.html"],["Holiday Tuition","tuition.html"],["AI Courses","ai-training.html"]]]];
  }else if(p.includes("blog")||p.includes("learning-hub")||p.includes("article")){
    theme={name:"CBE Nexus Education Hub",color:"#eaf8f6",accent:"#0f766e",label:"CBE NEXUS EDUCATION HUB"};
    groups=[["Latest Learning",[["Education Hub","learning-hub.html"],["Education Articles","blog.html"],["Teacher Career Guides","international-teaching-jobs.html"],["Scholarship Guides","scholarships-opportunities.html"]]],["Teacher Tools",[["International Teacher CV","professional-cv-writing.html"],["Teaching Resources","resources.html"],["AI for Teachers","ai-for-teachers.html"],["School Directory","school-directory.html"]]],["Opportunities",[["Teaching Jobs Abroad","international-teaching-jobs.html"],["Scholarships","scholarships-opportunities.html"],["School Vacancies","school-directory.html"],["Free Resources","free-resources.html"]]]];
  }
  const cards=groups.map(g=>'<section class="seo-footer-group"><h3>'+g[0]+'</h3><ul>'+g[1].map(x=>'<li><a href="'+x[1]+'">'+x[0]+'</a></li>').join("")+'</ul></section>').join("");
  return '<footer class="site-footer seo-footer" style="--seo-footer-bg:'+theme.color+';--seo-footer-accent:'+theme.accent+'"><div class="seo-footer-inner"><div class="seo-footer-brand"><span class="seo-footer-kicker">'+theme.label+'</span><strong>'+theme.name+'</strong><p>CBE Nexus connects learners, teachers, schools and education professionals with practical learning resources, career opportunities, scholarships, professional tools and digital skills.</p></div><div class="seo-footer-groups">'+cards+'</div></div><div class="seo-footer-seo"><strong>Explore CBE Nexus:</strong> CBC and CBE learning resources, international teacher jobs, teacher CV building, scholarships, school vacancies, AI courses and practical education guides for learners and educators.</div><nav class="footer-links seo-footer-bottom" aria-label="Footer navigation"><a href="index.html#about">About Us</a><a href="learning-hub.html">Learning Hub</a><a href="privacy-policy.html">Privacy Policy</a><a href="terms-and-conditions.html">Terms</a><a href="copyright.html">Copyright</a><button class="footer-admin-dot" id="adminAreaButton" type="button" aria-label="Admin login" title="Admin login"><span aria-hidden="true"></span></button></nav><p class="seo-footer-copy">&copy; 2026 CBE Nexus. Education Resources, Teacher Jobs, Scholarships, CV Builder &amp; AI Learning.</p></footer>';
}
function injectSeoFooter(html,pathname){
  const footer=seoFooterForPath(pathname);
  const styles='<style id="cbe-seo-footer-css">.seo-footer{background:var(--seo-footer-bg)!important;border-top:4px solid var(--seo-footer-accent)!important;padding:24px 20px 14px!important;margin-top:24px!important}.seo-footer-inner{max-width:1180px;margin:0 auto;display:grid;grid-template-columns:1.2fr 2fr;gap:24px}.seo-footer-brand strong{display:block;font-size:20px;color:#123447;margin:5px 0 8px}.seo-footer-kicker{font-size:9px;font-weight:800;letter-spacing:.12em;color:var(--seo-footer-accent)}.seo-footer-brand p{font-size:11px;line-height:1.55;max-width:440px;margin:0;color:#334e5f}.seo-footer-groups{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.seo-footer-group h3{font-size:12px;margin:0 0 7px;color:#123447}.seo-footer-group ul{list-style:none;padding:0;margin:0}.seo-footer-group li{margin:4px 0}.seo-footer-group a{font-size:10px;color:#31576b;text-decoration:none}.seo-footer-group a:hover{color:var(--seo-footer-accent);text-decoration:underline}.seo-footer-seo{max-width:1180px;margin:18px auto 10px;padding:10px 12px;border-radius:7px;background:rgba(255,255,255,.65);font-size:9px;line-height:1.5;color:#405766}.seo-footer-bottom{max-width:1180px;margin:8px auto!important}.seo-footer-copy{text-align:center!important;font-size:8px!important;margin:8px 0 0!important;opacity:.7}@media(max-width:760px){.seo-footer{padding:18px 10px 10px!important}.seo-footer-inner{grid-template-columns:1fr;gap:14px}.seo-footer-groups{grid-template-columns:repeat(3,1fr);gap:7px}.seo-footer-group h3{font-size:9px}.seo-footer-group a{font-size:7.5px}.seo-footer-brand strong{font-size:15px}.seo-footer-brand p,.seo-footer-seo{font-size:8px}}@media(max-width:480px){.seo-footer-groups{grid-template-columns:1fr 1fr}.seo-footer-group:nth-child(3){grid-column:1/-1}}</style>';
  if(/<footer[\s\S]*?<\/footer>/i.test(html)) html=html.replace(/<footer[\s\S]*?<\/footer>/i,footer);
  else html=html.replace(/<\/body>/i,footer+"</body>");
  return html.replace(/<\/head>/i,styles+"</head>");
}

function xmlEscape(value){return String(value??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");}
function rssCdata(value){return "<![CDATA["+String(value??"").replace(/]]>/g,"]]]]><![CDATA[>")+"]]>";
}
function indexNowKey(req){
  const configured=String(process.env.INDEXNOW_KEY||"").trim();
  if(configured && /^[A-Za-z0-9-]{8,128}$/.test(configured)) return configured;
  const seed=String(process.env.INDEXNOW_SEED||process.env.ADMIN_SESSION_SECRET||"cbe-nexus-indexnow");
  return crypto.createHash("sha256").update("cbe-nexus:"+seed).digest("hex").slice(0,32);
}
async function notifyIndexNow(req, urls){
  const list=[...new Set((Array.isArray(urls)?urls:[]).filter(Boolean))].slice(0,10000);
  if(!list.length)return {ok:false,skipped:true,reason:"no_urls"};
  try{
    const base=seo.base(req).replace(/\/$/,"");
    const key=indexNowKey(req);
    const host=new URL(base).host;
    const response=await fetch("https://api.indexnow.org/indexnow",{
      method:"POST",
      headers:{"Content-Type":"application/json; charset=utf-8"},
      body:JSON.stringify({host,key,keyLocation:base+"/indexnow-key.txt",urlList:list})
    });
    const status=response.status;
    return {ok:status>=200&&status<300,status,urls:list.length};
  }catch(error){
    console.warn("IndexNow notification failed:",error.message||error);
    return {ok:false,error:String(error.message||error)};
  }
}
async function buildBlogRss(req){
  const base=seo.base(req).replace(/\/$/,"");
  const posts=await getBlogPosts(false);
  const items=posts.slice(0,50).map(p=>{
    const link=base+"/blog-article.html?slug="+encodeURIComponent(String(p.slug||""));
    const date=p.publishedAt||p.createdAt||new Date().toISOString();
    const description=String(p.excerpt||p.content||"").replace(/<script/gi,"").replace(/<\/script>/gi,"").slice(0,4000);
    return "<item><title>"+rssCdata(p.title)+"</title><link>"+xmlEscape(link)+"</link><guid isPermaLink=\"true\">"+xmlEscape(link)+"</guid><description>"+rssCdata(description)+"</description><author>"+xmlEscape(p.author||"CBE Nexus")+"</author><category>"+xmlEscape(p.category||"Education")+"</category><pubDate>"+new Date(date).toUTCString()+"</pubDate></item>";
  }).join("");
  return '<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>CBE Nexus Education Hub</title><atom:link href="'+xmlEscape(base+"/rss.xml")+'" rel="self" type="application/rss+xml"/><link>'+xmlEscape(base+"/blog.html")+'</link><description>Education news, teaching guides, scholarships, AI and CBC/CBE resources from CBE Nexus.</description><language>en-ke</language><lastBuildDate>'+new Date().toUTCString()+'</lastBuildDate>'+items+"</channel></rss>";
}

function getGa4ServiceAccount(){
  const raw=String(process.env.GA4_SERVICE_ACCOUNT_JSON||"").trim();
  if(!raw)return null;
  try{
    const decoded=raw.startsWith("{")?raw:Buffer.from(raw,"base64").toString("utf8");
    const value=JSON.parse(decoded);
    if(!value.client_email||!value.private_key)return null;
    return value;
  }catch(error){console.error("GA4 service account configuration error:",error.message||error);return null;}
}
function base64UrlJson(value){
  return Buffer.from(JSON.stringify(value)).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");
}
function signRs256(input,privateKey){
  return crypto.createSign("RSA-SHA256").update(input).sign(privateKey,"base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_");
}
async function getGa4AccessToken(){
  const sa=getGa4ServiceAccount();
  if(!sa)return null;
  const now=Math.floor(Date.now()/1000);
  const header=base64UrlJson({alg:"RS256",typ:"JWT"});
  const payload=base64UrlJson({iss:sa.client_email,scope:"https://www.googleapis.com/auth/analytics.readonly",aud:"https://oauth2.googleapis.com/token",iat:now,exp:now+3600});
  const assertion=header+"."+payload+"."+signRs256(header+"."+payload,sa.private_key);
  const response=await fetch("https://oauth2.googleapis.com/token",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({grant_type:"urn:ietf:params:oauth:grant-type:jwt-bearer",assertion})});
  const data=await response.json().catch(()=>({}));
  if(!response.ok||!data.access_token)throw new Error(data.error_description||data.error||"Could not obtain GA4 access token.");
  return data.access_token;
}
async function queryGa4Report(body){
  const propertyId=String(process.env.GA4_PROPERTY_ID||"").trim().replace(/^properties\//,"");
  if(!propertyId)throw new Error("GA4_PROPERTY_ID is not configured.");
  const token=await getGa4AccessToken();
  if(!token)throw new Error("GA4_SERVICE_ACCOUNT_JSON is not configured.");
  const response=await fetch("https://analyticsdata.googleapis.com/v1beta/properties/"+encodeURIComponent(propertyId)+":runReport",{method:"POST",headers:{"Authorization":"Bearer "+token,"Content-Type":"application/json"},body:JSON.stringify(body)});
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw new Error(data.error?.message||"GA4 Data API request failed.");
  return data;
}
function ga4Number(report,index){
  const row=report?.rows?.[0]?.metricValues?.[index]?.value;
  const n=Number(row);
  return Number.isFinite(n)?n:0;
}
async function getAdRevenueDashboard(){
  const days=Math.min(365,Math.max(1,Number(process.env.AD_REVENUE_DAYS||30)));
  const dateRange={startDate:String(days)+"daysAgo",endDate:"yesterday"};
  const overview=await queryGa4Report({dateRanges:[dateRange],metrics:[
    {name:"screenPageViews"},{name:"sessions"},{name:"averageSessionDuration"},
    {name:"publisherAdImpressions"},{name:"publisherAdClicks"},{name:"publisherAdRevenue"}
  ]});
  const country=await queryGa4Report({dateRanges:[dateRange],dimensions:[{name:"country"}],metrics:[{name:"sessions"},{name:"screenPageViews"},{name:"publisherAdRevenue"}],orderBys:[{metric:{metricName:"sessions"},desc:true}],limit:25});
  const sessions=ga4Number(overview,1),pageviews=ga4Number(overview,0),impressions=ga4Number(overview,3),clicks=ga4Number(overview,4),revenue=ga4Number(overview,5);
  const countries=(country.rows||[]).map(row=>({country:row.dimensionValues?.[0]?.value||"Unknown",sessions:Number(row.metricValues?.[0]?.value||0),pageviews:Number(row.metricValues?.[1]?.value||0),revenue:Number(row.metricValues?.[2]?.value||0)}));
  return {ok:true,periodDays:days,startDate:days+" days ago",endDate:"yesterday",source:"GA4 Data API",metrics:{
    pageviews,sessions,pagesPerSession:sessions?pageviews/sessions:0,adImpressions:impressions,adClicks:clicks,adCtr:impressions?clicks/impressions*100:0,rpm:pageviews?revenue/pageviews*1000:0,estimatedRevenue:revenue,averageSessionDuration:ga4Number(overview,2)
  },countries};
}
function getAdSenseConfig(){
  const raw=String(process.env.ADSENSE_PUBLISHER_ID||"").trim();
  const publisherId=raw.replace(/^ca-/,"");
  const enabled=String(process.env.ADSENSE_ENABLED||"").trim().toLowerCase()==="true" && /^pub-[A-Za-z0-9]+$/.test(publisherId);
  return {enabled,publisherId};
}
function isAdExcludedPath(pathname){
  const p=String(pathname||"/").toLowerCase();
  return p.startsWith("/api/") || p.startsWith("/admin") || p.includes("login") || p.includes("checkout") || p.includes("payment") || p.includes("upload") || p.includes("dashboard");
}
function optimizeHtmlForAds(html){
  let out=String(html||"");
  // Preserve the first meaningful image for fast visual rendering; lazy-load the rest.
  let seenImage=false;
  out=out.replace(/<img\b([^>]*?)>/gi,(full,attrs)=>{
    if(/\bloading\s*=|\bdecoding\s*=/i.test(attrs)) return full;
    if(!seenImage){seenImage=true;return '<img'+attrs+' loading="eager" decoding="async">';}
    return '<img'+attrs+' loading="lazy" decoding="async">';
  });
  return out;
}
function injectAdSenseTags(html,pathname){
  const cfg=getAdSenseConfig();
  if(!cfg.enabled || isAdExcludedPath(pathname)) return html;
  let out=String(html||"");
  if(/pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/i.test(out)) return out;
  const head='<link rel="preconnect" href="https://pagead2.googlesyndication.com"><link rel="preconnect" href="https://googleads.g.doubleclick.net"><meta name="google-adsense-account" content="'+cfg.publisherId+'"><script async crossorigin="anonymous" src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-'+cfg.publisherId+'"></script>';
  out=out.replace(/<head([^>]*)>/i,'<head$1>'+head);
  return optimizeHtmlForAds(out);
}
function buildAdsTxt(){
  const cfg=getAdSenseConfig();
  if(!cfg.enabled) return "# AdSense is not enabled yet. Set ADSENSE_ENABLED=true and ADSENSE_PUBLISHER_ID=pub-XXXXXXXXXXXXXXX in Render.\\n";
  return 'google.com, '+cfg.publisherId+', DIRECT, f08c47fec0942fa0\\n';
}
function injectAnalyticsTags(html){
  const measurementId=String(process.env.GA_MEASUREMENT_ID||"G-8E0HGCJM8W").trim();
  const clarityId=String(process.env.CLARITY_PROJECT_ID||"ysl6ujcrkf").trim();
  let out=html;
  if(measurementId && !/googletagmanager\.com\/gtag\/js/i.test(out) && !/gtag\(['"]config['"]\s*,/i.test(out)){
    const tag='<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id='+measurementId+'"></script><script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","'+measurementId+'");</script>';
    out=out.replace(/<head([^>]*)>/i,'<head$1>'+tag);
  }
  if(clarityId && !/clarity\.ms\/tag\//i.test(out)){
    const tag='<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","'+clarityId+'");</script>';
    out=out.replace(/<head([^>]*)>/i,'<head$1>'+tag);
  }
  return out;
}

async function serveStatic(req,res,url){
  if(req.method==="GET" && url.pathname==="/rss.xml"){
    try{
      res.writeHead(200,{"Content-Type":"application/rss+xml; charset=utf-8","Cache-Control":"public, max-age=900"});
      res.end(await buildBlogRss(req));
    }catch(error){
      console.error("RSS feed error:",error);
      res.writeHead(500,{"Content-Type":"application/xml; charset=utf-8"});
      res.end('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>CBE Nexus Education Hub</title><description>RSS feed temporarily unavailable.</description></channel></rss>');
    }
    return;
  }
  if(req.method==="GET" && url.pathname==="/sitemap.xml"){
    res.writeHead(200,{"Content-Type":"application/xml; charset=utf-8","Cache-Control":"public, max-age=3600"});
    res.end(await seo.sitemap(req));
    return;
  }
  if(req.method==="GET" && url.pathname==="/ads.txt"){
    res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public, max-age=3600"});
    res.end(buildAdsTxt());
    return;
  }
  if(req.method==="GET" && url.pathname==="/indexnow-key.txt"){
    res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public, max-age=86400"});
    res.end(indexNowKey(req));
    return;
  }
  if(req.method==="GET" && url.pathname==="/robots.txt"){
    const base=seo.base(req);
    res.writeHead(200,{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public, max-age=3600"});
    res.end("User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /admin\nDisallow: /upload.html\nDisallow: /backend-data/\nSitemap: "+base+"/sitemap.xml\n");
    return;
  }
  const seoPage=await seo.match(req);
  if(req.method==="GET" && seoPage){
    res.writeHead(200,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"public, max-age=600"});
    res.end(injectAdSenseTags(injectAnalyticsTags(injectSeoFooter(seoPage,url.pathname)),url.pathname));
    return;
  }
  const requestedPath=decodeURIComponent(url.pathname==="/"?"/index.html":url.pathname);
  const filePath=path.resolve(ROOT,"."+requestedPath);
  if(!filePath.startsWith(ROOT)){
    res.writeHead(403,{"Content-Type":"text/plain; charset=utf-8"});
    res.end("Forbidden");
    return;
  }
  try{
    const stat=await fs.stat(filePath);
    const target=stat.isDirectory()?path.join(filePath,"index.html"):filePath;
    let data=await fs.readFile(target);
    if(path.basename(target)==="index.html"){
      const b=seo.base(req);
      data=Buffer.from(data.toString("utf8")
        .replaceAll("https://example.com/",b+"/")
        .replace("<title>CBE E-Learning Resources</title>","<title>CBE Nexus | CBC & CBE Learning Resources Kenya</title>")
        .replace("CBE E-Learning Resources for Grades 1-12","CBE Nexus | CBC & CBE Learning Resources for Grades 1-12 in Kenya"));
      const bridgeScript = '<script src="/resource-centre-bridge.js?v=20260930-4" defer></script><script src="/admin-fallback.js?v=20260930-4" defer></script>';
      if (!data.toString("utf8").includes("resource-centre-bridge.js")) data = Buffer.from(data.toString("utf8").replace("</body>", bridgeScript + "</body>"));
    }
    const ext=path.extname(target).toLowerCase();
    if(ext===".html") data=Buffer.from(injectAdSenseTags(injectAnalyticsTags(data.toString("utf8")),url.pathname));
    const isHtml=ext===".html";
    const isVersionedAsset=/[?&]v=|-[0-9]{8,}/.test(url.search||"") && [".css",".js"].includes(ext);
    const cacheControl=isHtml
      ? "public, max-age=300, must-revalidate"
      : isVersionedAsset
        ? "public, max-age=31536000, immutable"
        : [".svg",".png",".jpg",".jpeg",".webp",".ico",".woff",".woff2"].includes(ext)
          ? "public, max-age=604800"
          : "public, max-age=3600";
    res.writeHead(200,{
      "Content-Type":mimeTypes[ext]||"application/octet-stream",
      "Cache-Control":cacheControl
    });
    res.end(data);
  }catch{
    try{const notFound=await fs.readFile(path.join(ROOT,"404.html"),"utf8");res.writeHead(404,{"Content-Type":"text/html; charset=utf-8","Cache-Control":"public, max-age=300"});res.end(notFound);}
    catch{res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});res.end("Not found");}
  }
}
const server=http.createServer(async(req,res)=>{const url=new URL(req.url,`http://${req.headers.host||"127.0.0.1"}`);setSecurityHeaders(res);const limit=allowRequest(req,url);res.setHeader("X-RateLimit-Remaining",String(Math.max(0,limit.remaining)));if(!limit.allowed){res.setHeader("Retry-After","60");sendJson(res,429,{ok:false,error:"Too many requests. Please try again shortly."});return;}try{if(await handleApi(req,res,url))return;await serveStatic(req,res,url);}catch(error){console.error("Unhandled server error:",error);sendJson(res,500,{ok:false,error:"Server error."});}});
server.listen(PORT,"0.0.0.0",()=>console.log(`CBE website backend running on port ${PORT}`));