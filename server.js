const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");
const { createUploadUrl, createDownloadUrl } = require("./r2");
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

  if (req.method === "POST" && url.pathname === "/api/r2/upload-url") {
    if (!verifyAdminSession(req)) {
      sendJson(res, 401, { ok: false, error: "Admin login required for resource uploads." });
      return true;
    }
    const payload = JSON.parse((await readBody(req)) || "{}");
    const result = await createUploadUrl(payload);
    sendJson(res, 200, { ok: true, ...result });
    return true;
  }
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

  if (req.method === "GET" && url.pathname === "/api/r2/file") {
    const key = url.searchParams.get("key");
    if (!key || key.includes("..")) {
      sendJson(res, 400, { ok: false, error: "A valid R2 object key is required." });
      return true;
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
