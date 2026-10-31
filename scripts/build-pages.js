// Cloudflare Pages static frontend build.
// Copies public website files into dist/ while excluding Node/backend and private data.
const fs = require("node:fs");
const path = require("node:path");

const root = process.cwd();
const out = path.join(root, "dist");
const allowed = new Set([
  ".html", ".css", ".js", ".mjs", ".svg", ".png", ".jpg", ".jpeg",
  ".webp", ".gif", ".ico", ".avif", ".woff", ".woff2", ".ttf", ".eot",
  ".pdf", ".txt", ".xml", ".webmanifest", ".mp4", ".webm", ".json"
]);
const excludedDirs = new Set([
  ".git", ".github", "node_modules", "dist", "backend-data",
  "scripts", "supabase", "supabase-functions", "migrations", "assessments"
]);
const excludedFiles = new Set([
  "server.js", "package.json", "package-lock.json", "yarn.lock",
  ".gitignore", ".env", ".env.example"
]);

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

let copied = 0;
function copyTree(source, destination, relative = "") {
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const rel = relative ? path.posix.join(relative, entry.name) : entry.name;
    const src = path.join(source, entry.name);
    const dest = path.join(destination, entry.name);

    if (entry.isDirectory()) {
      if (excludedDirs.has(entry.name) || entry.name.startsWith(".")) continue;
      fs.mkdirSync(dest, { recursive: true });
      copyTree(src, dest, rel);
      continue;
    }

    if (!entry.isFile()) continue;
    if (excludedFiles.has(entry.name) || entry.name.startsWith(".env")) continue;
    if (/^(admin[-_.]|admin\.)/i.test(entry.name) || entry.name === "upload.html") continue;
    const extension = path.extname(entry.name).toLowerCase();\n    if (!allowed.has(extension)) continue;\n    if (extension === ".json" && !/^(data|learning)\\//.test(rel)) continue;

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied++;
  }
}

copyTree(root, out);

// Cloudflare Pages serves the root index and public SEO files from dist.
if (!fs.existsSync(path.join(out, "index.html"))) {
  throw new Error("Build failed: root index.html was not copied.");
}
for (const required of ["blog.html", "blog.js", "sitemap.xml", "robots.txt"]) {
  if (!fs.existsSync(path.join(out, required))) {
    throw new Error("Build failed: required public file missing: " + required);
  }
}
console.log("Cloudflare Pages frontend build complete. Public files copied: " + copied);
