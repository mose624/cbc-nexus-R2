const RENDER_ORIGIN = "https://cbc-nexus-r2.onrender.com";

/**
 * Forward a same-origin Pages request to the existing Render application.
 * Preserve method, query string, body, cookies and response headers.
 */
export async function proxyToRender(request) {
  const incoming = new URL(request.url);
  const target = new URL(incoming.pathname + incoming.search, RENDER_ORIGIN);
  const original = new Request(target.toString(), request);
  const headers = new Headers(original.headers);
  headers.set("x-forwarded-host", incoming.host);
  headers.set("x-forwarded-proto", incoming.protocol.slice(0, -1));
  return fetch(new Request(original, { headers, redirect: "manual" }));
}
