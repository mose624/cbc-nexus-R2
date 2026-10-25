const fs = require("node:fs/promises");
const path = require("node:path");
const { minify } = require("terser");
const CleanCSS = require("clean-css");

const root = path.resolve(__dirname, "..");
const jsFiles = [
  "app.js",
  "admin-bulk-upload.js",
  "admin-subject-stability.js",
  "admin-interactive-questions.js"
];
const cssFiles = [
  "styles.css",
  "customer-care.css",
  "admin-interactive-questions.css"
];

async function buildJavaScript(file) {
  const source = await fs.readFile(path.join(root, file), "utf8");
  const result = await minify(source, {
    compress: { passes: 1 },
    mangle: true,
    format: { comments: false }
  });
  if (!result.code) throw new Error("JavaScript minification produced no output for " + file);
  await fs.writeFile(path.join(root, file.replace(/\.js$/, ".min.js")), result.code);
  console.log("Minified " + file + ": " + Buffer.byteLength(source) + " -> " + Buffer.byteLength(result.code) + " bytes");
}

async function buildCss(file) {
  const source = await fs.readFile(path.join(root, file), "utf8");
  const result = new CleanCSS({ level: 1 }).minify(source);
  if (result.errors.length) throw new Error("CSS minification failed for " + file + ": " + result.errors.join("; "));
  await fs.writeFile(path.join(root, file.replace(/\.css$/, ".min.css")), result.styles);
  console.log("Minified " + file + ": " + Buffer.byteLength(source) + " -> " + Buffer.byteLength(result.styles) + " bytes");
}

(async () => {
  for (const file of jsFiles) await buildJavaScript(file);
  for (const file of cssFiles) await buildCss(file);
})().catch(error => {
  console.error("Asset minification failed:", error);
  process.exitCode = 1;
});
