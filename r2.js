const { S3Client, PutObjectCommand, GetObjectCommand, HeadBucketCommand, HeadObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
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
      },
      requestChecksumCalculation: "WHEN_REQUIRED",
      responseChecksumValidation: "WHEN_REQUIRED"
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

async function verifyR2Connection() {
  const { cfg, client } = getClient();
  try {
    await client.send(new HeadBucketCommand({ Bucket: cfg.bucket }));
    return { ok: true, bucket: cfg.bucket };
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode || null;
    const code = error?.Code || error?.name || "R2_ERROR";
    const message = String(error?.message || "Cloudflare R2 verification failed.")
      .replace(/(access key|secret access key|authorization|signature)[^,.;]*/gi, "$1 [redacted]");
    return { ok: false, bucket: cfg.bucket, status, code, message };
  }
}

async function uploadObject(input, body) {
  const { cfg, client } = getClient();
  const key = buildKey(input);
  const contentType = input.contentType || "application/octet-stream";
  await client.send(new PutObjectCommand({
    Bucket: cfg.bucket,
    Key: key,
    Body: body,
    ContentType: contentType
  }));
  return { key, fileName: input.fileName || "resource.bin" };
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

async function objectExists(key) {
  const cleanKey = String(key || "").trim();
  if (!cleanKey) return false;
  const { cfg, client } = getClient();
  try {
    await client.send(new HeadObjectCommand({ Bucket: cfg.bucket, Key: cleanKey }));
    return true;
  } catch (error) {
    const status = error?.$metadata?.httpStatusCode || 0;
    const code = String(error?.name || error?.Code || "");
    if (status === 404 || code === "NotFound" || code === "NoSuchKey") return false;
    throw error;
  }
}

async function getObjectMetadata(key) {
  const { cfg, client } = getClient();
  const result = await client.send(new HeadObjectCommand({ Bucket: cfg.bucket, Key: String(key || "").trim() }));
  return {
    contentType: String(result.ContentType || "application/octet-stream").toLowerCase(),
    contentLength: Number(result.ContentLength || 0)
  };
}

async function createInlineUrl(key, fileName, contentType) {
  const { cfg, client } = getClient();
  const cleanName = String(fileName || key.split("/").pop() || "preview")
    .replace(/[\r\n"]/g, "_")
    .replace(/[\\/]/g, "_")
    .trim() || "preview";
  const allowedInlineTypes = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);
  const safeType = allowedInlineTypes.has(String(contentType || "").toLowerCase())
    ? String(contentType).toLowerCase()
    : "application/octet-stream";
  const command = new GetObjectCommand({
    Bucket: cfg.bucket,
    Key: key,
    ResponseContentDisposition: 'inline; filename="' + cleanName + '"',
    ResponseContentType: safeType,
    ResponseCacheControl: "private, max-age=60",
    ResponseContentSecurityPolicy: "default-src 'none'; sandbox"
  });
  return getSignedUrl(client, command, { expiresIn: 300 });
}

async function createPdfPreview(key, pages = 3) {
  const { cfg, client } = getClient();
  const object = await client.send(new GetObjectCommand({ Bucket: cfg.bucket, Key: key }));
  const bytes = Buffer.from(await object.Body.transformToByteArray());
  // Refuse to interpret arbitrary files (for example images or Word documents) as PDFs.
  if (bytes.length < 5 || bytes.subarray(0, 5).toString("ascii") !== "%PDF-") {
    throw new Error("Stored resource bytes do not have a valid PDF header.");
  }
  const source = await PDFDocument.load(bytes);
  const preview = await PDFDocument.create();
  const count = Math.min(Math.max(1, Number(pages) || 3), source.getPageCount());
  const copied = await preview.copyPages(source, Array.from({ length: count }, (_, i) => i));
  copied.forEach((page) => preview.addPage(page));
  const previewBytes = await preview.save();
  const previewKey = key.replace(/^resources\//, "previews/").replace(/\.[^/.]+$/, "") + "-preview.pdf";
  await client.send(new PutObjectCommand({
    Bucket: cfg.bucket,
    Key: previewKey,
    Body: Buffer.from(previewBytes),
    ContentType: "application/pdf",
    CacheControl: "private, max-age=300"
  }));
  return { previewKey, pages: count };
}

async function deleteObject(key) {
  const cleanKey = String(key || "").trim();
  if (!cleanKey) return { deleted: false };
  const { cfg, client } = getClient();
  await client.send(new DeleteObjectCommand({ Bucket: cfg.bucket, Key: cleanKey }));
  return { deleted: true, key: cleanKey };
}

async function createDownloadUrl(key, fileName = "") {
  const { cfg, client } = getClient();
  const keyName = String(key || "").split("/").pop() || "resource.bin";
  const requestedName = String(fileName || "").trim();
  const keyExt = keyName.toLowerCase().match(/\.([a-z0-9]{1,8})$/)?.[1] || "";
  const requestedExt = requestedName.toLowerCase().match(/\.([a-z0-9]{1,8})$/)?.[1] || "";
  const isPlaceholderExt = (ext) => !ext || ext === "bin";
  // Prefer the real filename extension over the storage-key extension. Older uploads
  // may have a .bin storage key even when the original document was a PDF/Word file.
  let storedContentType = "";
  // Avoid an extra R2 network round-trip for ordinary downloads when the requested
  // filename or object key already identifies the file type. Only inspect metadata
  // for legacy uploads whose names are missing an extension or end in .bin.
  if (isPlaceholderExt(requestedExt) && isPlaceholderExt(keyExt)) {
    try {
      const head = await client.send(new HeadObjectCommand({ Bucket: cfg.bucket, Key: key }));
      storedContentType = String(head.ContentType || "").split(";")[0].trim().toLowerCase();
    } catch (error) {
      console.warn("Could not inspect R2 object metadata for download:", error.message || error);
    }
  }
  const extensionByContentType = {
    "application/pdf":"pdf",
    "application/msword":"doc",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":"docx",
    "application/vnd.ms-excel":"xls",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":"xlsx",
    "application/vnd.ms-powerpoint":"ppt",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation":"pptx",
    "application/rtf":"rtf",
    "application/vnd.oasis.opendocument.text":"odt",
    "application/vnd.oasis.opendocument.spreadsheet":"ods",
    "application/vnd.oasis.opendocument.presentation":"odp",
    "text/plain":"txt",
    "text/csv":"csv",
    "application/zip":"zip",
    "image/jpeg":"jpg",
    "image/png":"png",
    "image/webp":"webp",
    "image/gif":"gif",
    "audio/mpeg":"mp3",
    "video/mp4":"mp4"
  };
  const metadataExt = extensionByContentType[storedContentType] || "";
  const ext = !isPlaceholderExt(requestedExt) ? requestedExt
    : !isPlaceholderExt(keyExt) ? keyExt : metadataExt;
  let originalName = requestedName || keyName;
  const originalNameExt = originalName.toLowerCase().match(/\.([a-z0-9]{1,8})$/)?.[1] || "";
  if (isPlaceholderExt(originalNameExt) && ext) {
    originalName = originalName.replace(/\.(?:bin)$/i, "") + "." + ext;
  } else if (!originalNameExt && ext) {
    originalName += "." + ext;
  }
  const cleanName = originalName
    .replace(/[\r\n"]/g, "_")
    .replace(/[\\/]/g, "_")
    .trim() || keyName;
  const contentTypes = {
    pdf: "application/pdf",
    doc: "application/msword",
    docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    docm: "application/vnd.ms-word.document.macroEnabled.12",
    rtf: "application/rtf",
    odt: "application/vnd.oasis.opendocument.text",
    xls: "application/vnd.ms-excel",
    xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    xlsm: "application/vnd.ms-excel.sheet.macroEnabled.12",
    ods: "application/vnd.oasis.opendocument.spreadsheet",
    ppt: "application/vnd.ms-powerpoint",
    pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    pptm: "application/vnd.ms-powerpoint.presentation.macroEnabled.12",
    odp: "application/vnd.oasis.opendocument.presentation",
    txt: "text/plain; charset=utf-8",
    md: "text/markdown; charset=utf-8",
    csv: "text/csv; charset=utf-8",
    json: "application/json",
    xml: "application/xml",
    html: "text/html; charset=utf-8",
    htm: "text/html; charset=utf-8",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    gif: "image/gif",
    svg: "image/svg+xml",
    zip: "application/zip",
    rar: "application/vnd.rar",
    "7z": "application/x-7z-compressed",
    mp3: "audio/mpeg",
    mp4: "video/mp4"
  };
  const asciiName = cleanName.replace(/[^\x20-\x7E]/g, "_").replace(/[%\\]/g, "_");
  const encodedName = encodeURIComponent(cleanName).replace(/['()*]/g, ch => "%" + ch.charCodeAt(0).toString(16).toUpperCase());
  const command = new GetObjectCommand({
    Bucket: cfg.bucket,
    Key: key,
    ResponseContentDisposition: 'attachment; filename="' + asciiName + '"; filename*=UTF-8\'\'' + encodedName,
    ResponseContentType: contentTypes[ext] || "application/octet-stream",
    ResponseCacheControl: "private, no-store"
  });
  return getSignedUrl(client, command, { expiresIn: 300 });
}


async function getObjectBuffer(key, maxBytes = 8 * 1024 * 1024) {
  const { cfg, client } = getClient();
  const result = await client.send(new GetObjectCommand({ Bucket: cfg.bucket, Key: key }));
  const length = Number(result.ContentLength || 0);
  if (length > maxBytes) throw new Error("Document is too large to prepare a safe preview.");
  if (!result.Body || typeof result.Body.transformToByteArray !== "function") {
    throw new Error("Could not read the document for preview.");
  }
  const bytes = await result.Body.transformToByteArray();
  if (bytes.byteLength > maxBytes) throw new Error("Document is too large to prepare a safe preview.");
  return Buffer.from(bytes);
}

module.exports = { createUploadUrl, createDownloadUrl, createPdfPreview, createInlineUrl, getObjectMetadata, getObjectBuffer, objectExists, uploadObject, deleteObject, verifyR2Connection };
