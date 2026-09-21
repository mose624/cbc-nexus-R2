const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { createUploadUrl, createDownloadUrl, createPdfPreview } = require("./r2");
const OpenAI = require("openai");
const { supabase, supabaseConfigured } = require("./supabase");

const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "backend-data");
const MAX_BODY_SIZE = 12 * 1024 * 1024;
const ADMIN_SESSION_TTL_MS = 8 * 60 * 60 * 1000;

function getAdminConfig() {
  return {
    username: String(process.env.ADMIN_USERNAME || "").trim(),
    email: String(process.env.ADMIN_EMAIL || "").trim().toLowerCase(),
    passwordHash: String(process.env.ADMIN_PASSWORD_HASH || ""),
    sessionSecret: String(process.env.ADMIN_SESSION_SECRET || "")
  };
}
function safeEqual(a,b){const left=Buffer.from(String(a)),right=Buffer.from(String(b));return left.length===right.length&&crypto.timingSafeEqual(left,right);}
function verifyPassword(password,storedHash){return new Promise((resolve,reject)=>{const [salt,key]=String(storedHash).split(":");if(!salt||!key)return resolve(false);crypto.scrypt(String(password),salt,64,{N:16384,r:8,p:1},(error,derivedKey)=>{if(error)return reject(error);resolve(safeEqual(derivedKey.toString("hex"),key));});});}
function createAdminSession(){const config=getAdminConfig();const expiresAt=Date.now()+ADMIN_SESSION_TTL_MS;const payload=Buffer.from(JSON.stringify({u:config.username,exp:expiresAt})).toString("base64url");const signature=crypto.createHmac("sha256",config.sessionSecret).update(payload).digest("base64url");return payload+"."+signature;}
function verifyAdminSession(req){const config=getAdminConfig();if(!config.sessionSecret)return false;const header=String(req.headers.cookie||"");const match=header.match(/(?:^|;\s*)cbe_admin_session=([^;]+)/);if(!match)return false;const token=decodeURIComponent(match[1]);const [payload,signature]=token.split(".");if(!payload||!signature)return false;const expected=crypto.createHmac("sha256",config.sessionSecret).update(payload).digest("base64url");if(!safeEqual(signature,expected))return false;try{const data=JSON.parse(Buffer.from(payload,"base64url").toString("utf8"));return data.u===config.username&&Number(data.exp)>Date.now();}catch{return false;}}
function adminCookie(token){return `cbe_admin_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;}
const SELLER_SESSION_TTL_MS=8*60*60*1000;
async function hashPassword(password){const salt=crypto.randomBytes(16).toString("hex");const key=await new Promise((res,rej)=>crypto.scrypt(String(password),salt,64,{N:16384,r:8,p:1},(e,k)=>e?rej(e):res(k.toString("hex"))));return salt+":"+key;}
function createSellerSession(username){const payload=Buffer.from(JSON.stringify({u:username,exp:Date.now()+SELLER_SESSION_TTL_MS})).toString("base64url");const sig=crypto.createHmac("sha256",String(process.env.ADMIN_SESSION_SECRET||"")).update("seller:"+payload).digest("base64url");return payload+"."+sig;}
function verifySellerSession(req){const secret=String(process.env.ADMIN_SESSION_SECRET||"");if(!secret)return null;const m=String(req.headers.cookie||"").match(/(?:^|;\s*)cbe_seller_session=([^;]+)/);if(!m)return null;const [p,sig]=decodeURIComponent(m[1]).split(".");const exp=crypto.createHmac("sha256",secret).update("seller:"+p).digest("base64url");if(!p||!sig||!safeEqual(sig,exp))return null;try{const d=JSON.parse(Buffer.from(p,"base64url").toString("utf8"));return Number(d.exp)>Date.now()?d.u:null;}catch{return null;}}
function sellerCookie(token){return `cbe_seller_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;}
const mimeTypes={".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".json":"application/json; charset=utf-8",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".gif":"image/gif",".svg":"image/svg+xml",".webp":"image/webp",".ico":"image/x-icon",".txt":"text/plain; charset=utf-8",".xml":"application/xml; charset=utf-8"};
const stores={"/api/projects":"projects.json","/api/tuition":"tuition-registrations.json","/api/quizzes":"quiz-attempts.json","/api/payments":"payments.json","/api/mpesa/stk-push":"mpesa-requests.json"};
async function ensureDataDir(){await fs.mkdir(DATA_DIR,{recursive:true});}
async function readJsonStore(fileName){await ensureDataDir();const filePath=path.join(DATA_DIR,fileName);try{return JSON.parse(await fs.readFile(filePath,"utf8"));}catch{return [];}}
async function appendJsonStore(fileName,item){const current=await readJsonStore(fileName);const saved={id:item.id||`${Date.now()}`,...item,receivedAt:new Date().toISOString()};current.unshift(saved);await fs.writeFile(path.join(DATA_DIR,fileName),JSON.stringify(current,null,2));return saved;}
function resourceRowFromPayload(payload,sellerId=null){return {title:String(payload.title||"").trim(),grade:String(payload.grade||"").trim(),subject:String(payload.subject||"").trim(),type:String(payload.type||"").trim(),description:String(payload.description||"").trim(),price:Math.max(0,Number(payload.price||0)),discount:Math.min(100,Math.max(0,Number(payload.discount||0))),term:String(payload.term||"").trim(),is_free_sample:Boolean(payload.isFreeSample),popularity:Number(payload.popularity||0),file_name:String(payload.fileName||"").trim(),r2_key:String(payload.r2Key||"").trim(),preview_key:String(payload.previewKey||"").trim(),status:String(payload.status||"pending"),seller_id:sellerId,downloads:Number(payload.downloads||0),purchases:Number(payload.purchases||0)};}
function resourcePayloadFromRow(row){return {id:row.id,title:row.title,grade:row.grade,subject:row.subject,type:row.type,description:row.description||"",price:Number(row.price||0),discount:Number(row.discount||0),term:row.term||"",isFreeSample:Boolean(row.is_free_sample),popularity:Number(row.popularity||0),fileName:row.file_name||"",r2Key:row.r2_key||"",previewKey:row.preview_key||"",file:row.r2_key?"/api/r2/file?key="+encodeURIComponent(row.r2_key):"",status:row.status||"pending",downloads:Number(row.downloads||0),purchases:Number(row.purchases||0),sellerId:row.seller_id||null,createdAt:row.created_at||null,updatedAt:row.updated_at||null};}
function sendJson(res,status,data){res.writeHead(status,{"Content-Type":"application/json; charset=utf-8"});res.end(JSON.stringify(data));}
function readBody(req){return new Promise((resolve,reject)=>{let body="";req.on("data",chunk=>{body+=chunk;if(body.length>MAX_BODY_SIZE){reject(new Error("Request body too large."));req.destroy();}});req.on("end",()=>resolve(body));req.on("error",reject);});}

async function getMpesaAccessToken(){const k=String(process.env.MPESA_CONSUMER_KEY||""),sec=String(process.env.MPESA_CONSUMER_SECRET||"");if(!k||!sec)throw new Error("M-Pesa consumer credentials are not configured.");const base=String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";return await new Promise((res,rej)=>{const https=require("https"),q=https.request(base+"/oauth/v1/generate?grant_type=client_credentials",{headers:{Authorization:"Basic "+Buffer.from(k+":"+sec).toString("base64")}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{const x=JSON.parse(d);x.access_token?res(x.access_token):rej(new Error("Daraja authorization failed."));}catch{rej(new Error("Invalid Daraja authorization response."));}})});q.on("error",rej);q.end();});}
function normalizeMpesaPhone(p){p=String(p||"").replace(/\s+/g,"");if(/^0[17]\d{8}$/.test(p))return"254"+p.slice(1);if(/^254[17]\d{8}$/.test(p))return p;return"";}
async function darajaPost(pathname,body,token){const https=require("https"),base=String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";return await new Promise((res,rej)=>{const q=https.request(base+pathname,{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{res({status:r.statusCode||500,data:JSON.parse(d)});}catch{res({status:r.statusCode||500,data:{raw:d}});}})});q.on("error",rej);q.write(JSON.stringify(body));q.end();});}
async function generateAIHomeworkAnswer(payload){if(!process.env.OPENAI_API_KEY)return null;const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});const response=await client.responses.create({model:process.env.OPENAI_HOMEWORK_MODEL||"gpt-5.6-luna",instructions:"You are the CBE Nexus AI Homework Helper. Help learners understand and solve homework rather than giving unexplained answers. Use clear age-appropriate language, show steps and working for Mathematics and Science, explain reasoning for other subjects, do not invent facts, and ask for clarification when a question is unclear.",input:"Grade: "+String(payload.grade||"CBC")+"\nSubject: "+String(payload.subject||"General")+"\nHomework question: "+String(payload.question||"")});return response.output_text||null;}

async function handleApi(req,res,url){
  if(req.method==="GET"&&url.pathname==="/api/supabase/status"){
    let databaseReachable=false;
    let databaseError=null;
    if(supabaseConfigured){try{const {error}=await supabase.from("resources").select("id",{head:true,count:"exact"});if(error)databaseError=error.message;else databaseReachable=true;}catch(error){databaseError=error.message;}}
    sendJson(res,200,{ok:supabaseConfigured&&databaseReachable,supabaseConfigured,databaseReachable,databaseError,message:supabaseConfigured?(databaseReachable?"Supabase connection is configured and reachable.":"Supabase credentials are configured but the database query failed."):"Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to the Render environment."});return true;
  }

  // Existing API routes continue below.
  if(url.pathname.startsWith("/api/")){
    sendJson(res,404,{ok:false,error:"API route not found."});return true;
  }
  return false;
}

async function serveStatic(req,res,url){const requestedPath=decodeURIComponent(url.pathname==="/"?"/index.html":url.pathname);const filePath=path.resolve(ROOT,`.${requestedPath}`);if(!filePath.startsWith(ROOT)){res.writeHead(403,{"Content-Type":"text/plain; charset=utf-8"});res.end("Forbidden");return;}try{const stat=await fs.stat(filePath);const target=stat.isDirectory()?path.join(filePath,"index.html"):filePath;const data=await fs.readFile(target);res.writeHead(200,{"Content-Type":mimeTypes[path.extname(target).toLowerCase()]||"application/octet-stream"});res.end(data);}catch{res.writeHead(404,{"Content-Type":"text/plain; charset=utf-8"});res.end("Not found");}}
const server=http.createServer(async(req,res)=>{const url=new URL(req.url,`http://${req.headers.host||"127.0.0.1"}`);try{if(await handleApi(req,res,url))return;await serveStatic(req,res,url);}catch(error){sendJson(res,500,{ok:false,error:error.message||"Server error."});}});
server.listen(PORT,"0.0.0.0",()=>{console.log(`CBE website backend running on port ${PORT}`);});
