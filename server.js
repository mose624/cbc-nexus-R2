const http = require("http");
const fs = require("fs/promises");
const path = require("path");

const PORT = Number(process.env.PORT || 8000);
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, "backend-data");
const MAX_BODY_SIZE = 12 * 1024 * 1024;

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

function homeworkResponse(payload) {
  const grade = payload.grade || "CBC";
  const subject = payload.subject || "the subject";
  const question = payload.question || "the homework question";
  return [
    `For ${grade} ${subject}, start by restating the task in simple words.`,
    `Question: ${question}`,
    "Step 1: Identify the key terms and write what each one means.",
    "Step 2: List the facts, formula, passage details, or examples given in the question.",
    "Step 3: Solve one small part at a time and show your working.",
    "Step 4: Check your final answer against the question before submitting."
  ].join(" ");
}

async function handleApi(req, res, url) {
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
    const saved = await appendJsonStore("homework-helper.json", {
      ...payload,
      answer: homeworkResponse(payload)
    });
    sendJson(res, 200, { ok: true, answer: saved.answer, saved });
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

server.listen(PORT, "127.0.0.1", () => {
  console.log(`CBE website backend running at http://127.0.0.1:${PORT}/`);
});
