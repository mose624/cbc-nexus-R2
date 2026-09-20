const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { createUploadUrl, createDownloadUrl, createPdfPreview } = require("./r2");
const OpenAI = require("openai");

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

function safeEqual(a, b) {
  const left = Buffer.from(String(a));
  const right = Buffer.from(String(b));
  return left.length === right.length && crypto.timingSafeEqual(left, right);
}

function verifyPassword(password, storedHash) {
  return new Promise((resolve, reject) => {
    const [salt, key] = String(storedHash).split(":");
    if (!salt || !key) return resolve(false);
    crypto.scrypt(String(password), salt, 64, { N: 16384, r: 8, p: 1 }, (error, derivedKey) => {
      if (error) return reject(error);
      resolve(safeEqual(derivedKey.toString("hex"), key));
    });
  });
}

function createAdminSession() {
  const config = getAdminConfig();
  const expiresAt = Date.now() + ADMIN_SESSION_TTL_MS;
  const payload = Buffer.from(JSON.stringify({ u: config.username, exp: expiresAt })).toString("base64url");
  const signature = crypto.createHmac("sha256", config.sessionSecret).update(payload).digest("base64url");
  return payload + "." + signature;
}

function verifyAdminSession(req) {
  const config = getAdminConfig();
  if (!config.sessionSecret) return false;
  const header = String(req.headers.cookie || "");
  const match = header.match(/(?:^|;\\s*)cbe_admin_session=([^;]+)/);
  if (!match) return false;
  const token = decodeURIComponent(match[1]);
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;
  const expected = crypto.createHmac("sha256", config.sessionSecret).update(payload).digest("base64url");
  if (!safeEqual(signature, expected)) return false;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return data.u === config.username && Number(data.exp) > Date.now();
  } catch {
    return false;
  }
}

function adminCookie(token) {
  return `cbe_admin_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;
}
const SELLER_SESSION_TTL_MS=8*60*60*1000;
async function hashPassword(password){const salt=crypto.randomBytes(16).toString("hex");const key=await new Promise((res,rej)=>crypto.scrypt(String(password),salt,64,{N:16384,r:8,p:1},(e,k)=>e?rej(e):res(k.toString("hex"))));return salt+":"+key;}
function createSellerSession(username){const payload=Buffer.from(JSON.stringify({u:username,exp:Date.now()+SELLER_SESSION_TTL_MS})).toString("base64url");const sig=crypto.createHmac("sha256",String(process.env.ADMIN_SESSION_SECRET||"")).update("seller:"+payload).digest("base64url");return payload+"."+sig;}
function verifySellerSession(req){const secret=String(process.env.ADMIN_SESSION_SECRET||"");if(!secret)return null;const m=String(req.headers.cookie||"").match(/(?:^|;\s*)cbe_seller_session=([^;]+)/);if(!m)return null;const [p,sig]=decodeURIComponent(m[1]).split(".");const exp=crypto.createHmac("sha256",secret).update("seller:"+p).digest("base64url");if(!p||!sig||!safeEqual(sig,exp))return null;try{const d=JSON.parse(Buffer.from(p,"base64url").toString("utf8"));return Number(d.exp)>Date.now()?d.u:null;}catch{return null;}}
function sellerCookie(token){return `cbe_seller_session=${encodeURIComponent(token)}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=28800`;}

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8"
};

const stores = {
  "/api/projects": "projects.json",
  "/api/tuition": "tuition-registrations.json",
  "/api/quizzes": "quiz-attempts.json",
  "/api/payments": "payments.json",
  "/api/mpesa/stk-push": "mpesa-requests.json"
};

async function ensureDataDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readJsonStore(fileName) {
  await ensureDataDir();
  const filePath = path.join(DATA_DIR, fileName);
  try {
    return JSON.parse(await fs.readFile(filePath, "utf8"));
  } catch {
    return [];
  }
}

async function appendJsonStore(fileName, item) {
  const current = await readJsonStore(fileName);
  const saved = {
    id: item.id || `${Date.now()}`,
    ...item,
    receivedAt: new Date().toISOString()
  };
  current.unshift(saved);
  await fs.writeFile(path.join(DATA_DIR, fileName), JSON.stringify(current, null, 2));
  return saved;
}

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > MAX_BODY_SIZE) {
        reject(new Error("Request body too large."));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function getMpesaAccessToken(){const k=String(process.env.MPESA_CONSUMER_KEY||""),sec=String(process.env.MPESA_CONSUMER_SECRET||"");if(!k||!sec)throw new Error("M-Pesa consumer credentials are not configured.");const base=String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";return await new Promise((res,rej)=>{const https=require("https"),q=https.request(base+"/oauth/v1/generate?grant_type=client_credentials",{headers:{Authorization:"Basic "+Buffer.from(k+":"+sec).toString("base64")}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{const x=JSON.parse(d);x.access_token?res(x.access_token):rej(new Error("Daraja authorization failed."));}catch{rej(new Error("Invalid Daraja authorization response."));}})});q.on("error",rej);q.end();});}
function normalizeMpesaPhone(p){p=String(p||"").replace(/\s+/g,"");if(/^0[17]\d{8}$/.test(p))return"254"+p.slice(1);if(/^254[17]\d{8}$/.test(p))return p;return"";}
async function darajaPost(pathname,body,token){const https=require("https"),base=String(process.env.MPESA_ENVIRONMENT||"sandbox").toLowerCase()==="production"?"https://api.safaricom.co.ke":"https://sandbox.safaricom.co.ke";return await new Promise((res,rej)=>{const q=https.request(base+pathname,{method:"POST",headers:{Authorization:"Bearer "+token,"Content-Type":"application/json"}},r=>{let d="";r.on("data",c=>d+=c);r.on("end",()=>{try{res({status:r.statusCode||500,data:JSON.parse(d)});}catch{res({status:r.statusCode||500,data:{raw:d}});}})});q.on("error",rej);q.write(JSON.stringify(body));q.end();});}
async function generateAIHomeworkAnswer(payload) {
  if (!process.env.OPENAI_API_KEY) return null;
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const response = await client.responses.create({
    model: process.env.OPENAI_HOMEWORK_MODEL || "gpt-5.6-luna",
    instructions: "You are the CBE Nexus AI Homework Helper. Help learners understand and solve homework rather than giving unexplained answers. Use clear age-appropriate language, show steps and working for Mathematics and Science, explain reasoning for other subjects, do not invent facts, and ask for clarification when a question is unclear.",
    input: "Grade: " + String(payload.grade || "CBC") + "\nSubject: " + String(payload.subject || "General") + "\nHomework question: " + String(payload.question || "")
  });
  return response.output_text || null;
}

async function handleApi(req, res, url) {
  if (req.method === "GET" && url.pathname === "/api/admin/dashboard") {
    if (!verifyAdminSession(req)) { sendJson(res, 401, { ok: false, error: "Admin login required." }); return true; }
    const [resources, sellerAccounts, payments, mpesaRequests, tuition, users] = await Promise.all([
      readJsonStore("resources.json"), readJsonStore("seller-accounts.json"),
      readJsonStore("payments.json"), readJsonStore("mpesa-requests.json"),
      readJsonStore("tuition-registrations.json"), readJsonStore("admin-users.json")
    ]);
    const userMap = new Map();
    [...users].forEach((u) => userMap.set(u.phone || u.username || u.id, u));
    [...payments, ...mpesaRequests, ...tuition].forEach((item) => {
      const phone = item.customerPhone || item.phone;
      if (phone && !userMap.has(phone)) userMap.set(phone, {
        id: "user-" + phone, name: item.learner || item.name || "Customer",
        phone, status: "active", source: "transaction"
      });
    });
    const allUsers = [...userMap.values()];
    const sales = payments.filter((p) => ["paid","completed","success"].includes(String(p.status || "").toLowerCase()));
    const totalDownloads = resources.reduce((sum, r) => sum + Number(r.downloads || 0), 0);
    const popularResources = [...resources]
      .map((r) => ({ ...r, downloads: Number(r.downloads || 0), purchases: Number(r.purchases || 0) }))
      .sort((a, b) => (b.downloads + b.purchases * 3) - (a.downloads + a.purchases * 3))
      .slice(0, 10);
    sendJson(res, 200, {
      ok: true,
      stats: {
        sellers: sellerAccounts.length,
        pendingSellers: sellerAccounts.filter((x) => x.status === "pending").length,
        resources: resources.length,
        pendingResources: resources.filter((x) => x.status === "pending").length,
        users: allUsers.length,
        sales: sales.length,
        purchases: sales.length,
        revenue: sales.reduce((sum, x) => sum + Number(x.amount || 0), 0),
        downloads: totalDownloads
      },
      popularResources,
      sellers: sellerAccounts,
      resources,
      users: allUsers,
      sales,
      payments: [...payments, ...mpesaRequests].slice(0, 100)
    });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/resource") {
    if (!verifyAdminSession(req)) { sendJson(res, 401, { ok: false, error: "Admin login required." }); return true; }
    const payload = JSON.parse((await readBody(req)) || "{}");
    const resources = await readJsonStore("resources.json");
    const item = { ...payload, status: payload.status || "approved", updatedAt: new Date().toISOString() };
    const next = [item, ...resources.filter((x) => x.id !== item.id)];
    await fs.writeFile(path.join(DATA_DIR, "resources.json"), JSON.stringify(next, null, 2));
    sendJson(res, 200, { ok: true, resource: item });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/resource-status") {
    if (!verifyAdminSession(req)) { sendJson(res, 401, { ok: false, error: "Admin login required." }); return true; }
    const p = JSON.parse((await readBody(req)) || "{}");
    const resources = await readJsonStore("resources.json");
    const next = resources.map((x) => x.id === p.resourceId ? { ...x, status: String(p.status || "pending"), reviewedAt: new Date().toISOString() } : x);
    await fs.writeFile(path.join(DATA_DIR, "resources.json"), JSON.stringify(next, null, 2));
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/resource-price") {
    if (!verifyAdminSession(req)) { sendJson(res, 401, { ok: false, error: "Admin login required." }); return true; }
    const p = JSON.parse((await readBody(req)) || "{}");
    const resources = await readJsonStore("resources.json");
    const next = resources.map((x) => x.id === p.resourceId ? {
      ...x, price: Math.max(0, Number(p.price || 0)), discount: Math.min(100, Math.max(0, Number(p.discount || 0))),
      updatedAt: new Date().toISOString()
    } : x);
    await fs.writeFile(path.join(DATA_DIR, "resources.json"), JSON.stringify(next, null, 2));
    sendJson(res, 200, { ok: true });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/user-status") {
    if (!verifyAdminSession(req)) { sendJson(res, 401, { ok: false, error: "Admin login required." }); return true; }
    const p = JSON.parse((await readBody(req)) || "{}");
    const users = await readJsonStore("admin-users.json");
    const existing = users.find((x) => x.id === p.userId || x.phone === p.phone);
    const item = { ...(existing || {}), id: p.userId || existing?.id || "user-" + Date.now(), phone: p.phone || existing?.phone || "", name: p.name || existing?.name || "Customer", status: String(p.status || "active"), updatedAt: new Date().toISOString() };
    const next = [item, ...users.filter((x) => x.id !== item.id && x.phone !== item.phone)];
    await fs.writeFile(path.join(DATA_DIR, "admin-users.json"), JSON.stringify(next, null, 2));
    sendJson(res, 200, { ok: true, user: item });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/login") {
    const config = getAdminConfig();
    if (!config.username || !config.email || !config.passwordHash || !config.sessionSecret) {
      sendJson(res, 503, { ok: false, error: "Admin authentication is not configured on the server." });
      return true;
    }
    const payload = JSON.parse((await readBody(req)) || "{}");
    const username = String(payload.username || "").trim();
    const email = String(payload.email || "").trim().toLowerCase();
    const password = String(payload.password || "");
    const validIdentity = safeEqual(username.toUpperCase(), config.username.toUpperCase()) && safeEqual(email, config.email);
    const validPassword = validIdentity ? await verifyPassword(password, config.passwordHash) : false;
    if (!validIdentity || !validPassword) {
      sendJson(res, 401, { ok: false, error: "Invalid admin username, password, or email." });
      return true;
    }
    res.setHeader("Set-Cookie", adminCookie(createAdminSession()));
    sendJson(res, 200, { ok: true, user: { username: config.username, email: config.email } });
    return true;
  }

  if (req.method === "GET" && url.pathname === "/api/admin/me") {
    const authenticated = verifyAdminSession(req);
    if (!authenticated) {
      sendJson(res, 401, { ok: false, authenticated: false });
      return true;
    }
    const config = getAdminConfig();
    sendJson(res, 200, { ok: true, authenticated: true, user: { username: config.username, email: config.email } });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/admin/logout") {
    res.setHeader("Set-Cookie", "cbe_admin_session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0");
    sendJson(res, 200, { ok: true });
    return true;
  }

  if(req.method==="POST"&&url.pathname==="/api/seller/account"){const p=JSON.parse((await readBody(req))||"{}"),u=String(p.username||"").trim().toLowerCase(),pw=String(p.password||""),name=String(p.name||"").trim(),phone=String(p.phone||"").trim();if(!u||pw.length<8||!name||!phone){sendJson(res,400,{ok:false,error:"Name, phone, username and a password of at least 8 characters are required."});return true;}const ac=await readJsonStore("seller-accounts.json");if(ac.some(x=>x.username===u)){sendJson(res,409,{ok:false,error:"This seller username is already registered."});return true;}const a={id:"seller-account-"+Date.now(),name,phone,username:u,passwordHash:await hashPassword(pw),status:"pending",createdAt:new Date().toISOString()};await appendJsonStore("seller-accounts.json",a);sendJson(res,201,{ok:true,account:{id:a.id,name,phone,username:u,status:"pending"}});return true;}
  if(req.method==="POST"&&url.pathname==="/api/seller/login"){const p=JSON.parse((await readBody(req))||"{}"),u=String(p.username||"").trim().toLowerCase(),ac=await readJsonStore("seller-accounts.json"),a=ac.find(x=>x.username===u);if(!a||!(await verifyPassword(String(p.password||""),a.passwordHash))){sendJson(res,401,{ok:false,error:"Invalid seller username or password."});return true;}if(a.status!=="approved"){sendJson(res,403,{ok:false,error:"Seller account is pending admin approval."});return true;}res.setHeader("Set-Cookie",sellerCookie(createSellerSession(u)));sendJson(res,200,{ok:true,account:{id:a.id,name:a.name,phone:a.phone,username:a.username,status:a.status}});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/seller-resource-status"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),items=await readJsonStore("resources.json"),next=items.map(x=>x.id===p.resourceId?{...x,status:String(p.status||"pending"),reviewedAt:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(next,null,2));sendJson(res,200,{ok:true});return true;}
  if(req.method==="POST"&&url.pathname==="/api/admin/seller-account-status"){if(!verifyAdminSession(req)){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}const p=JSON.parse((await readBody(req))||"{}"),ac=await readJsonStore("seller-accounts.json"),up=ac.map(x=>x.id===p.accountId?{...x,status:String(p.status||"pending"),reviewedAt:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"seller-accounts.json"),JSON.stringify(up,null,2));sendJson(res,200,{ok:true});return true;}

  if(req.method==="POST"&&url.pathname==="/api/r2/upload-url"){const p=JSON.parse((await readBody(req))||"{}"),admin=verifyAdminSession(req),seller=verifySellerSession(req);if(p.role==="admin"&&!admin){sendJson(res,401,{ok:false,error:"Admin login required."});return true;}if(p.role==="seller"&&!seller){sendJson(res,401,{ok:false,error:"Approved seller login required."});return true;}if(!["admin","seller"].includes(p.role)){sendJson(res,400,{ok:false,error:"Upload role is required."});return true;}sendJson(res,200,{ok:true,...await createUploadUrl(p)});return true;}
  if(req.method==="POST"&&url.pathname==="/api/r2/project-upload-url"){const p=JSON.parse((await readBody(req))||"{}");if(!p.grade||!p.subject){sendJson(res,400,{ok:false,error:"Project grade and subject are required."});return true;}sendJson(res,200,{ok:true,...await createUploadUrl({...p,type:"CBC Projects"})});return true;}
  if (req.method === "GET" && url.pathname === "/api/r2/status") {
    const required = [
      "R2_ACCOUNT_ID",
      "R2_ACCESS_KEY_ID",
      "R2_SECRET_ACCESS_KEY",
      "R2_BUCKET_NAME"
    ];
    const missing = required.filter((name) => !process.env[name]);
    sendJson(res, 200, {
      ok: missing.length === 0,
      r2Configured: missing.length === 0,
      missing
    });
    return true;
  }

  if (req.method === "GET" && url.pathname === "/api/r2/download-url") {
    const key = url.searchParams.get("key");
    if (!key || key.includes("..")) {
      sendJson(res, 400, { ok: false, error: "A valid R2 object key is required." });
      return true;
    }
    const downloadUrl = await createDownloadUrl(key);
    sendJson(res, 200, { ok: true, downloadUrl, expiresIn: 300 });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/r2/prepare-preview") {
    const p = JSON.parse((await readBody(req)) || "{}");
    const admin = verifyAdminSession(req);
    const seller = verifySellerSession(req);
    if (!admin && !seller) {
      sendJson(res, 401, { ok: false, error: "Authorized uploader required." });
      return true;
    }
    if (!p.key || p.key.includes("..")) {
      sendJson(res, 400, { ok: false, error: "A valid R2 object key is required." });
      return true;
    }
    if (!/\.pdf$/i.test(String(p.key))) {
      sendJson(res, 200, { ok: true, supported: false, message: "PDF previews are available for PDF resources." });
      return true;
    }
    try {
      const preview = await createPdfPreview(p.key, 3);
      sendJson(res, 200, { ok: true, supported: true, ...preview });
    } catch (error) {
      sendJson(res, 422, { ok: false, error: "Could not generate the PDF preview. Please verify that the uploaded file is a valid PDF." });
    }
    return true;
  }

  if (req.method === "GET" && url.pathname === "/api/r2/preview") {
    const key = url.searchParams.get("key");
    if (!key || key.includes("..")) {
      sendJson(res, 400, { ok: false, error: "A valid preview key is required." });
      return true;
    }
    const previewUrl = await createDownloadUrl(key);
    sendJson(res, 200, { ok: true, previewUrl, expiresIn: 300 });
    return true;
  }

  if (req.method === "GET" && url.pathname === "/api/r2/file") {
    const key = url.searchParams.get("key");
    const checkoutRequestID = url.searchParams.get("checkoutRequestID");
    const free = url.searchParams.get("free") === "1";
    if (!key || key.includes("..")) {
      sendJson(res, 400, { ok: false, error: "A valid R2 object key is required." });
      return true;
    }
    const resources = await readJsonStore("resources.json");
    const resource = resources.find((item) => item.r2Key === key);
    const admin = verifyAdminSession(req);
    const seller = verifySellerSession(req);
    let entitled = Boolean(admin || seller || (resource && resource.isFreeSample && free));
    if (!entitled && checkoutRequestID) {
      const payments = await readJsonStore("payments.json");
      const payment = payments.find((item) => item.checkoutRequestID === checkoutRequestID);
      entitled = Boolean(payment && payment.status === "paid" && String(payment.resource || "").trim().toLowerCase() === String(resource?.title || "").trim().toLowerCase());
    }
    if (!entitled) {
      sendJson(res, 402, { ok: false, error: "Payment is required before the full resource can be downloaded." });
      return true;
    }
    if (!resource && !admin && !seller) {
      sendJson(res, 404, { ok: false, error: "Resource not found." });
      return true;
    }
    try {
      if (resource) {
        resource.downloads = Number(resource.downloads || 0) + 1;
        resource.lastDownloadedAt = new Date().toISOString();
        const nextResources = resources.map((item) => item.id === resource.id ? resource : item);
        await fs.writeFile(path.join(DATA_DIR, "resources.json"), JSON.stringify(nextResources, null, 2));
      }
    } catch (error) {
      console.error("Download statistics error:", error.message);
    }
    const downloadUrl = await createDownloadUrl(key);
    res.writeHead(302, { Location: downloadUrl, "Cache-Control": "private, no-store" });
    res.end();
    return true;
  }

  if (req.method === "GET" && stores[url.pathname]) {
    sendJson(res, 200, await readJsonStore(stores[url.pathname]));
    return true;
  }

  if(req.method==="POST"&&url.pathname==="/api/mpesa/stk-push"){const p=JSON.parse((await readBody(req))||"{}"),phone=normalizeMpesaPhone(p.customerPhone),amount=Math.round(Number(p.amount||0)),sc=String(process.env.MPESA_SHORTCODE||""),pk=String(process.env.MPESA_PASSKEY||""),cb=String(process.env.MPESA_CALLBACK_URL||"");if(!phone||amount<1||!sc||!pk||!cb){sendJson(res,503,{ok:false,error:"M-Pesa STK Push is not fully configured. Add MPESA_SHORTCODE, MPESA_PASSKEY and MPESA_CALLBACK_URL in Render."});return true;}try{const token=await getMpesaAccessToken(),ts=new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14),pwd=Buffer.from(sc+pk+ts).toString("base64"),out=await darajaPost("/mpesa/stkpush/v1/processrequest",{BusinessShortCode:sc,Password:pwd,Timestamp:ts,TransactionType:process.env.MPESA_TRANSACTION_TYPE||"CustomerPayBillOnline",Amount:amount,PartyA:phone,PartyB:sc,PhoneNumber:phone,CallBackURL:cb,AccountReference:String(p.resource||"CBE Nexus").slice(0,12),TransactionDesc:"CBE Nexus resource payment"},token);const saved=await appendJsonStore("mpesa-requests.json",{...p,daraja:out.data});if(out.status>=200&&out.status<300&&out.data&&out.data.CheckoutRequestID){await appendJsonStore("payments.json",{id:"pay-"+Date.now(),customerPhone:phone,amount,resource:p.resource||"CBE resource",status:"pending confirmation",checkoutRequestID:out.data.CheckoutRequestID,merchantRequestID:out.data.MerchantRequestID||"",createdAt:new Date().toISOString()});}sendJson(res,out.status>=200&&out.status<300?200:502,{ok:out.status>=200&&out.status<300,saved,...out.data});}catch(e){sendJson(res,502,{ok:false,error:e.message});}return true;}
  if (req.method === "GET" && url.pathname === "/api/mpesa/status") {
    const checkoutRequestID = url.searchParams.get("checkoutRequestID");
    if (!checkoutRequestID) {
      sendJson(res, 400, { ok: false, error: "Checkout request ID is required." });
      return true;
    }
    const payments = await readJsonStore("payments.json");
    const payment = payments.find((item) => item.checkoutRequestID === checkoutRequestID);
    if (!payment) {
      sendJson(res, 404, { ok: false, error: "Payment record not found." });
      return true;
    }
    if (payment.status === "paid") {
      const resources = await readJsonStore("resources.json");
      const resource = resources.find((item) => String(item.title || "").trim().toLowerCase() === String(payment.resource || "").trim().toLowerCase());
      if (resource?.r2Key) {
        const downloadUrl = await createDownloadUrl(resource.r2Key);
        sendJson(res, 200, { ok: true, status: "paid", resourceId: resource.id, resource: resource.title, downloadUrl, expiresIn: 300 });
        return true;
      }
    }
    sendJson(res, 200, { ok: true, status: payment.status, resource: payment.resource, message: payment.status === "failed" ? "Payment failed." : "Payment is still awaiting confirmation." });
    return true;
  }

  if(req.method==="POST"&&url.pathname==="/api/mpesa/callback"){const p=JSON.parse((await readBody(req))||"{}");await appendJsonStore("mpesa-callbacks.json",p);const cb=p?.Body?.stkCallback;if(cb?.CheckoutRequestID){const resultCode=Number(cb.ResultCode);const items=Array.isArray(cb.CallbackMetadata?.Item)?cb.CallbackMetadata.Item:[];const meta=Object.fromEntries(items.map(x=>[x.Name,x.Value]));const payments=await readJsonStore("payments.json");const next=payments.map(x=>x.checkoutRequestID===cb.CheckoutRequestID?{...x,status:resultCode===0?"paid":"failed",resultCode,resultDescription:cb.ResultDesc||"",receipt:meta.MpesaReceiptNumber||"",confirmedAt:new Date().toISOString()}:x);await fs.writeFile(path.join(DATA_DIR,"payments.json"),JSON.stringify(next,null,2));if(resultCode===0){const paid=payments.find(x=>x.checkoutRequestID===cb.CheckoutRequestID);if(paid?.resource){const resources=await readJsonStore("resources.json");const normalized=String(paid.resource).trim().toLowerCase();const nextResources=resources.map(r=>String(r.title||"").trim().toLowerCase()===normalized?{...r,purchases:Number(r.purchases||0)+1}:r);await fs.writeFile(path.join(DATA_DIR,"resources.json"),JSON.stringify(nextResources,null,2));}}}sendJson(res,200,{ResultCode:0,ResultDesc:"Accepted"});return true;}
  if (req.method === "POST" && url.pathname === "/api/resources") {
    const payload = JSON.parse((await readBody(req)) || "{}");
    const isAdmin = verifyAdminSession(req);
    const isSeller = Boolean(verifySellerSession(req));
    if ((payload.role === "admin" && !isAdmin) || (payload.role === "seller" && !isSeller)) {
      sendJson(res, 401, { ok: false, error: "Authorized account required." });
      return true;
    }
    if (!["admin", "seller"].includes(payload.role)) {
      sendJson(res, 400, { ok: false, error: "Resource role is required." });
      return true;
    }
    const saved = await appendJsonStore("resources.json", payload);
    sendJson(res, 201, { ok: true, saved });
    return true;
  }

  if (req.method === "POST" && stores[url.pathname]) {
    const payload = JSON.parse((await readBody(req)) || "{}");
    const saved = await appendJsonStore(stores[url.pathname], payload);
    sendJson(res, 201, { ok: true, saved });
    return true;
  }

  if (req.method === "POST" && url.pathname === "/api/homework-helper") {
    const payload = JSON.parse((await readBody(req)) || "{}");
    if (!String(payload.question || "").trim()) {
      sendJson(res, 400, { ok: false, error: "Homework question is required." });
      return true;
    }
    try {
      const answer = await generateAIHomeworkAnswer(payload);
      if (!answer) {
        sendJson(res, 503, { ok: false, configured: false, error: "AI Homework Helper is not configured yet. Add OPENAI_API_KEY to Render." });
        return true;
      }
      await appendJsonStore("homework-helper.json", { grade: payload.grade, subject: payload.subject, question: payload.question, answer });
      sendJson(res, 200, { ok: true, configured: true, answer });
    } catch (error) {
      console.error("AI Homework Helper error:", error);
      sendJson(res, 502, { ok: false, error: "The AI Homework Helper could not generate a response right now." });
    }
    return true;
  }

  if (url.pathname.startsWith("/api/")) {
    sendJson(res, 404, { ok: false, error: "API route not found." });
    return true;
  }

  return false;
}

async function serveStatic(req, res, url) {
  const requestedPath = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const filePath = path.resolve(ROOT, `.${requestedPath}`);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  try {
    const stat = await fs.stat(filePath);
    const target = stat.isDirectory() ? path.join(filePath, "index.html") : filePath;
    const data = await fs.readFile(target);
    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(target).toLowerCase()] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "127.0.0.1"}`);
  try {
    if (await handleApi(req, res, url)) return;
    await serveStatic(req, res, url);
  } catch (error) {
    sendJson(res, 500, { ok: false, error: error.message || "Server error." });
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`CBE website backend running on port ${PORT}`);
});
