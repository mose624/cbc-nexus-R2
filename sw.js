const CACHE_NAME = "cbe-nexus-static-v12";
const STATIC_EXTENSIONS = /\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?)$/i;

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

async function getDashboardResponse(request) {
  const response = await fetch(request, { cache: "no-store" });
  if (!response.ok) return response;
  const source = await response.text();
  const marker = '<div class="portal-announcement">';
  const banner = `<div class="cbe-nexus-impact" style="margin:18px 0;padding:18px 20px;border-radius:16px;background:linear-gradient(135deg,#0b3d91,#087f5b);color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.12);text-align:center"><div style="font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;opacity:.9">CBE NEXUS</div><div style="font-size:24px;font-weight:900;margin:4px 0">Connecting Learners to Excellence</div><div style="font-size:14px;opacity:.92;margin-bottom:14px">A growing learning hub for CBC and CBE learners, teachers and parents.</div></div>`;
  let fixed = source.replace(marker, banner + marker);
  if (!fixed.includes("resource-centre-bridge.js")) {
    fixed = fixed.replace("</body>", '<script src="/resource-centre-bridge.js?v=20261001-1" defer></script></body>');
  }
  return new Response(fixed, { status: response.status, statusText: response.statusText, headers: response.headers });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  const url = new URL(request.url);
  if (url.pathname === "/" || url.pathname.endsWith("/index.html")) {
    event.respondWith(getDashboardResponse(request));
    return;
  }
  if (!STATIC_EXTENSIONS.test(url.pathname)) return;
  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      });
      return cached || network;
    })
  );
});
