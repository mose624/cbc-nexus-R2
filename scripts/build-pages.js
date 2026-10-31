// Cloudflare Pages static frontend build.
// Publishes public website files only; Node backend and private/runtime data stay out.
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
  "scripts", "supabase", "supabase-functions", "migrations", "assessments", "functions"
]);
const publicAdminScripts = new Set([
  "admin-module-fix.js",
  "admin-blog.js",
  "ai-course-admin.js",
  "scholarships-admin.js",
  "school-directory-admin.js"
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
    if (/(^|[-_.])admin([-.]|$)/i.test(entry.name) && !publicAdminScripts.has(entry.name)) continue;
    if (entry.name === "upload.html" || /-server-/i.test(entry.name)) continue;

    const extension = path.extname(entry.name).toLowerCase();
    if (!allowed.has(extension)) continue;
    // Only known public JSON data is included; backend-data is excluded above.
    if (extension === ".json" && !/^(data|learning)\//.test(rel)) continue;

    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    copied++;
  }
}

copyTree(root, out);

for (const required of ["index.html", "blog.html", "blog.js", "sitemap.xml", "robots.txt"]) {
  if (!fs.existsSync(path.join(out, required))) {
    throw new Error("Build failed: required public file missing: " + required);
  }
}
console.log("Cloudflare Pages frontend build complete. Public files copied: " + copied);
