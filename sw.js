const CACHE_NAME = "cbe-nexus-static-v4";
const STATIC_EXTENSIONS = /\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?)$/i;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

/* Quiz filter hot-fix: support CBC banks that store topic in item[3]. */
async function getQuizFixedResponse(request) {
  const response = await fetch(request, { cache: "no-store" });
  if (!response.ok) return response;
  const source = await response.text();
  const oldSubFilter = `combined = combined.filter((item) => String(item[6] || "") === String(selectedSub));`;
  const newSubFilter = `combined = combined.filter((item) => {
        const explicitSubStrand = String(item[6] || "").trim();
        const topic = String(item[3] || "").trim();
        return explicitSubStrand ? explicitSubStrand === String(selectedSub) : topic === String(selectedSub);
      });`;
  const oldOutcomeFilter = `combined = combined.filter((item) => String(item[7] || "") === String(selectedOutcome));`;
  const newOutcomeFilter = `combined = combined.filter((item) => {
        const explicitOutcome = String(item[7] || "").trim();
        if (explicitOutcome) return explicitOutcome === String(selectedOutcome);
        const topic = String(item[3] || "").trim();
        const fallbackOutcome = topic ? "Demonstrate understanding and application of " + topic + "." : "";
        return fallbackOutcome === String(selectedOutcome);
      });`;
  const fixed = source.replace(oldSubFilter, newSubFilter).replace(oldOutcomeFilter, newOutcomeFilter);
  return new Response(fixed, { status: response.status, statusText: response.statusText, headers: response.headers });
}

/* Add the CBE Nexus identity and platform impact statement to the dashboard. */
async function getDashboardResponse(request) {
  const response = await fetch(request, { cache: "no-store" });
  if (!response.ok) return response;
  const source = await response.text();
  const marker = '<div class="portal-announcement">';
  const banner = `<div class="cbe-nexus-impact" style="margin:18px 0;padding:18px 20px;border-radius:16px;background:linear-gradient(135deg,#0b3d91,#087f5b);color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.12);text-align:center"><div style="font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;opacity:.9">CBE NEXUS</div><div style="font-size:24px;font-weight:900;margin:4px 0">Connecting Learners to Excellence</div><div style="font-size:14px;opacity:.92;margin-bottom:14px">A growing learning hub for CBC and CBE learners, teachers and parents.</div><div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap"><div style="min-width:170px;padding:10px 16px;border-radius:12px;background:rgba(255,255,255,.14)"><strong style="display:block;font-size:25px">50,000+</strong><span style="font-size:12px">Learning Resources</span></div><div style="min-width:170px;padding:10px 16px;border-radius:12px;background:rgba(255,255,255,.14)"><strong style="display:block;font-size:25px">1,500+</strong><span style="font-size:12px">Active Users</span></div></div></div>`;
  let fixed = source.replace(marker, banner + marker);
  if (!fixed.includes("resource-centre-bridge.js")) {
    fixed = fixed.replace("</body>", '<script src="/resource-centre-bridge.js?v=20260930-1" defer></script></body>');
  }
  return new Response(fixed, { status: response.status, statusText: response.statusText, headers: response.headers });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;
  const url = new URL(request.url);
  if (url.pathname.endsWith("/assessment.js")) {
    event.respondWith(getQuizFixedResponse(request));
    return;
  }
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
