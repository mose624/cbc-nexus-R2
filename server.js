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
function resourcePayloadFromRow(r){return {id:r.id,title:r.title,grade:r.grade,subject:r.subject,type:r.resource_type||"",description:r.description||"",price:Number(r.price||0),discount:Number(r.discount_price||0),term:"",isFreeSample:false,popularity:0,fileName:r.filename||"",r2Key:r.r2_key||"",previewKey:r.preview_key||"",previewText:"",createdAt:r.created_at||"",updatedAt:r.updated_at||"",file:r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):"",status:r.status||"pending",downloads:0,purchases:0,sellerId:r.seller_id||null,createdAt:r.created_at||null,updatedAt:r.updated_at||null};}
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
async function handleApi(req,res,url){
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

  if(req.method==="GET"&&url.pathname==="/api/admin/dashboard"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}let resources=await readJsonStore("resources.json");const [localSellerAccounts,payments,mpesaRequests,tuition,localUsers]=await Promise.all([readJsonStore("seller-accounts.json"),readJsonStore("payments.json"),readJsonStore("mpesa-requests.json"),readJsonStore("tuition-registrations.json"),readJsonStore("admin-users.json")]);if(supabaseConfigured){try{const {data:resourceData,error:resourceError}=await supabase.from("resources").select("*").order("created_at",{ascending:false});if(resourceError)throw resourceError;resources=(resourceData||[]).map(resourcePayloadFromRow);}catch(error){console.error("Supabase resource dashboard lookup error:",error);}}let sellerAccounts=localSellerAccounts,users=localUsers,verifiedPurchases=[];if(supabaseConfigured){try{const {data,error}=await supabase.from("purchases").select("*").order("created_at",{ascending:false}).limit(100);if(error)throw error;verifiedPurchases=(data||[]).map(p=>({...p,id:p.id,resource:p.resource_id,resourceId:p.resource_id,customerPhone:p.customer_phone,checkoutRequestID:p.checkout_request_id,merchantRequestID:p.merchant_request_id,mpesaReceipt:p.mpesa_receipt,createdAt:p.created_at}));}catch(error){console.error("Supabase payment dashboard lookup error:",error);}}if(supabaseConfigured){try{const [{data:sellersData,error:sellersError},{data:usersData,error:usersError}]=await Promise.all([supabase.from("sellers").select("id,user_id,phone,username,status,created_at"),supabase.from("users").select("id,name,phone,role,status,created_at")]);if(sellersError)throw sellersError;if(usersError)throw usersError;sellerAccounts=sellersData||[];users=usersData||[];}catch(error){console.error("Supabase admin dashboard lookup error:",error);}}const userMap=new Map();[...users].forEach(u=>userMap.set(u.phone||u.username||u.id,u));[...payments,...mpesaRequests,...tuition].forEach(item=>{const phone=item.customerPhone||item.phone;if(phone&&!userMap.has(phone))userMap.set(phone,{id:"user-"+phone,name:item.learner||item.name||"Customer",phone,status:"active",source:"transaction"});});const allUsers=[...userMap.values()],sales=payments.filter(p=>["paid","completed","success"].includes(String(p.status||"").toLowerCase())),totalDownloads=resources.reduce((s,r)=>s+Number(r.downloads||0),0),popularResources=[...resources].map(r=>({...r,downloads:Number(r.downloads||0),purchases:Number(r.purchases||0)})).sort((a,b)=>(b.downloads+b.purchases*3)-(a.downloads+a.purchases*3)).slice(0,10);const dashboardPayments=[...payments,...mpesaRequests,...verifiedPurchases];const dashboardSales=[...payments,...verifiedPurchases].filter(p=>["paid","completed","success"].includes(String(p.status||"").toLowerCase()));sendJson(res,200,{ok:true,stats:{sellers:sellerAccounts.length,pendingSellers:sellerAccounts.filter(x=>x.status==="pending").length,resources:resources.length,pendingResources:resources.filter(x=>x.status==="pending").length,users:allUsers.length,sales:dashboardSales.length,purchases:dashboardSales.length,revenue:dashboardSales.reduce((s,x)=>s+Number(x.amount||0),0),downloads:totalDownloads},popularResources,sellers:sellerAccounts,resources,users:allUsers,sales:dashboardSales,payments:dashboardPayments.slice(0,100)});return true;}
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
  if(req.method==="GET"&&url.pathname==="/api/resources"){if(supabaseConfigured){try{const {data,error}=await supabase.from("resources").select("*").eq("status","approved").order("created_at",{ascending:false});if(error)throw error;sendJson(res,200,{ok:true,resources:(data||[]).map(resourcePayloadFromRow),storage:"supabase"});return true;}catch(error){console.error("Supabase resource lookup error:",error);sendJson(res,500,{ok:false,error:"Resources could not be loaded from Supabase."});return true;}}sendJson(res,200,{ok:true,resources:await readJsonStore("resources.json"),storage:"local"});return true;}
  if(req.method==="POST"&&url.pathname==="/api/resources"){const payload=JSON.parse((await readBody(req))||"{}"),isAdmin=verifyAdminSession(req),sellerUsername=String(payload.sellerUsername||"").trim().toLowerCase(),authenticatedSeller=verifySellerSession(req),isSeller=Boolean(authenticatedSeller);if((payload.role==="admin"&&!isAdmin)||(payload.role==="seller"&&!isSeller)){sendJson(res,401,{ok:false,error:"Authorized account required."});return true;}if(!["admin","seller"].includes(payload.role)){sendJson(res,400,{ok:false,error:"Resource role is required."});return true;}if(supabaseConfigured){try{let sellerId=null;if(payload.role==="seller"){const username=authenticatedSeller||sellerUsername,{data:seller,error:sellerError}=await supabase.from("sellers").select("id").eq("username",username).maybeSingle();if(sellerError)throw sellerError;if(!seller){sendJson(res,403,{ok:false,error:"Approved seller account was not found in Supabase."});return true;}sellerId=seller.id;}let previewKey=String(payload.previewKey||"").trim();if(!previewKey&&/\.pdf$/i.test(String(payload.fileName||""))&&payload.r2Key){try{const preview=await createPdfPreview(payload.r2Key,3);previewKey=preview.previewKey;}catch(error){console.error("PDF preview generation error:",error);}}const row=resourceRowFromPayload(payload,sellerId,previewKey);if(!row.title||!row.grade||!row.subject||!row.resource_type||!row.r2_key){sendJson(res,400,{ok:false,error:"Resource title, grade, subject, type and R2 file are required."});return true;}const {data,error}=await supabase.from("resources").insert(row).select("*").single();if(error)throw error;sendJson(res,201,{ok:true,saved:resourcePayloadFromRow(data),storage:"supabase"});return true;}catch(error){console.error("Supabase resource save error:",error);sendJson(res,500,{ok:false,error:"Resource could not be saved to Supabase."});return true;}}const saved=await appendJsonStore("resources.json",payload);sendJson(res,201,{ok:true,saved,storage:"local"});return true;}
  if(req.method==="POST"&&stores[url.pathname]){const p=JSON.parse((await readBody(req))||"{}");sendJson(res,201,{ok:true,saved:await appendJsonStore(stores[url.pathname],p)});return true;}
  if(url.pathname.startsWith("/api/")){sendJson(res,404,{ok:false,error:"API route not found."});return true;}return false;
}
async function serveStatic(req,res,url){
  if(req.method==="GET" && url.pathname==="/sitemap.xml"){
    res.writeHead(200,{"Content-Type":"application/xml; charset=utf-8","Cache-Control":"public, max-age=3600"});
    res.end(await seo.sitemap(req));
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
    res.end(seoPage);
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