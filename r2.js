const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const { PDFDocument } = require("pdf-lib");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

function getR2Config() {
  const required = ["R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY", "R2_BUCKET_NAME"];
  const missing = required.filter((key) => !process.env[key]);
  if (missing.length) {
    throw new Error("Cloudflare R2 is not configured. Missing: " + missing.join(", "));
  }
  return {
    accountId: process.env.R2_ACCOUNT_ID,
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    bucket: process.env.R2_BUCKET_NAME
  };
}

function getClient() {
  const cfg = getR2Config();
  return {
    cfg,
    client: new S3Client({
      region: "auto",
      endpoint: `https://${cfg.accountId}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: cfg.accessKeyId,
        secretAccessKey: cfg.secretAccessKey
      }
    })
  };
}

function safePart(value) {
  return String(value || "general")
    .trim()
    .replace(/[^a-zA-Z0-9._-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80) || "general";
}

function buildKey({ grade, subject, type, fileName, resourceId }) {
  const cleanName = safePart(fileName || "resource.bin");
  const ext = cleanName.includes(".") ? "" : ".bin";
  return [
    "resources",
    safePart(grade),
    safePart(subject),
    safePart(type),
    `${Date.now()}-${safePart(resourceId || "resource")}-${cleanName}${ext}`
  ].join("/");
}

async function createUploadUrl(input) {
  const { cfg, client } = getClient();
  const key = buildKey(input);
  const contentType = input.contentType || "application/octet-stream";
  const command = new PutObjectCommand({
    Bucket: cfg.bucket,
    Key: key,
    ContentType: contentType
  });
  const uploadUrl = await getSignedUrl(client, command, { expiresIn: 900 });
  return { uploadUrl, key, expiresIn: 900 };
}

async function createPdfPreview(key, pages = 3) {
  const { cfg, client } = getClient();
  const object = await client.send(new GetObjectCommand({ Bucket: cfg.bucket, Key: key }));
  const bytes = await object.Body.transformToByteArray();
  const source = await PDFDocument.load(bytes);
  const preview = await PDFDocument.create();
  const count = Math.min(Math.max(1, Number(pages) || 3), source.getPageCount());
  const copied = await preview.copyPages(source, Array.from({ length: count }, (_, i) => i));
  copied.forEach((page) => preview.addPage(page));
  const previewBytes = await preview.save();
  const previewKey = key.replace(/^resources\\//, "previews/").replace(/\\.[^/.]+$/, "") + "-preview.pdf";
  await client.send(new PutObjectCommand({
    Bucket: cfg.bucket,
    Key: previewKey,
    Body: Buffer.from(previewBytes),
    ContentType: "application/pdf",
    CacheControl: "private, max-age=300"
  }));
  return { previewKey, pages: count };
}

async function createDownloadUrl(key) {
  const { cfg, client } = getClient();
  const command = new GetObjectCommand({
    Bucket: cfg.bucket,
    Key: key
  });
  return getSignedUrl(client, command, { expiresIn: 300 });
}

module.exports = { createUploadUrl, createDownloadUrl, createPdfPreview };
