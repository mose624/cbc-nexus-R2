// Cloudflare Pages API proxy for the existing CBE Nexus Node/Render backend.
// Keeps browser requests same-origin while preserving admin cookies and request bodies.
// Optional Pages environment variable: CBE_NEXUS_BACKEND_URL
export async function onRequest({ request, env }) {
  const backendOrigin = String(
    env.CBE_NEXUS_BACKEND_URL || "https://cbc-nexus-r2.onrender.com"
  ).trim().replace(/\/+$/, "");

  let upstreamUrl;
  try {
    const incoming = new URL(request.url);
    upstreamUrl = new URL(incoming.pathname + incoming.search, backendOrigin);
  } catch {
    return new Response("CBE Nexus API backend is not configured correctly.", {
      status: 500,
      headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "no-store" }
    });
  }

  try {
    const headers = new Headers(request.headers);
    headers.set("x-forwarded-host", new URL(request.url).host);
    headers.set("x-forwarded-proto", new URL(request.url).protocol.replace(":", ""));

    const upstreamRequest = new Request(upstreamUrl.toString(), {
      method: request.method,
      headers,
      body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
      redirect: "manual"
    });

    return await fetch(upstreamRequest);
  } catch (error) {
    return new Response("CBE Nexus API backend is temporarily unavailable. Please try again.", {
      status: 502,
      headers: {
        "content-type": "text/plain; charset=utf-8",
        "cache-control": "no-store"
      }
    });
  }
}
