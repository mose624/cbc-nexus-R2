const CACHE_NAME = "cbe-nexus-speed-v13";
const STATIC_EXTENSIONS = /\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?)$/i;
const HTML_CACHE = "cbe-nexus-pages-v13";
const PUBLIC_PAGE_CACHE = [
  "/",
  "/index.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PUBLIC_PAGE_CACHE))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE_NAME && key !== HTML_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

async function getQuizFixedResponse(request) {
  const response = await fetch(request, { cache: "no-store" });
  if (!response.ok) return response;
  const source = await response.text();
  const oldSubFilter = `combined = combined.filter((item) => String(item[6] || "") === String(selectedSub));`;
  const newSubFilter = `combined = combined.filter((item) => { const explicitSubStrand = String(item[6] || "").trim(); const topic = String(item[3] || "").trim(); return explicitSubStrand ? explicitSubStrand === String(selectedSub) : topic === String(selectedSub); });`;
  const oldOutcomeFilter = `combined = combined.filter((item) => String(item[7] || "") === String(selectedOutcome));`;
  const newOutcomeFilter = `combined = combined.filter((item) => { const explicitOutcome = String(item[7] || "").trim(); if (explicitOutcome) return explicitOutcome === String(selectedOutcome); const topic = String(item[3] || "").trim(); const fallbackOutcome = topic ? "Demonstrate understanding and application of " + topic + "." : ""; return fallbackOutcome === String(selectedOutcome); });`;
  const fixed = source.replace(oldSubFilter, newSubFilter).replace(oldOutcomeFilter, newOutcomeFilter);
  return new Response(fixed, { status: response.status, statusText: response.statusText, headers: response.headers });
}

async function getDashboardResponse(request) {
  const response = await fetch(request, { cache: "no-store" });
  if (!response.ok) return response;
  const source = await response.text();
  const marker = '<div class="portal-announcement">';
  const banner = `<div class="cbe-nexus-impact" style="margin:18px 0;padding:18px 20px;border-radius:16px;background:linear-gradient(135deg,#0b3d91,#087f5b);color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.12);text-align:center"><div style="font-size:13px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;opacity:.9">CBE NEXUS</div><div style="font-size:24px;font-weight:900;margin:4px 0">Connecting Learners to Excellence</div><div style="font-size:14px;opacity:.92;margin-bottom:14px">A growing learning hub for CBC and CBE learners, teachers and parents.</div><div style="display:flex;justify-content:center;gap:12px;flex-wrap:wrap"><div style="min-width:170px;padding:10px 16px;border-radius:12px;background:rgba(255,255,255,.14)"><strong style="display:block;font-size:25px">50,000+</strong><span style="font-size:12px">Learning Resources</span></div><div style="min-width:170px;padding:10px 16px;border-radius:12px;background:rgba(255,255,255,.14)"><strong style="display:block;font-size:25px">1,500+</strong><span style="font-size:12px">Active Users</span></div></div></div>`;
  let fixed = source.replace(marker, banner + marker);
  if (!fixed.includes("resource-centre-bridge.js")) fixed = fixed.replace("</body>", '<script src="/resource-centre-bridge.js?v=20260930-5" defer></script></body>');
  return new Response(fixed, { status: response.status, statusText: response.statusText, headers: response.headers });
}

function isPrivateOrDynamic(url) {
  const p = url.pathname.toLowerCase();
  return p.startsWith("/api/") ||
    p.startsWith("/admin") ||
    p.includes("login") ||
    p.includes("checkout") ||
    p.includes("payment") ||
    p.includes("upload") ||
    p.includes("dashboard") ||
    p.includes("seller");
}

async function cachePublicPage(request) {
  const cache = await caches.open(HTML_CACHE);
  const cached = await cache.match(request);
  const network = fetch(request, { cache: "no-store" })
    .then(response => {
      if (response.ok && response.type === "basic") cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);

  // Return cached HTML immediately for repeat visits while refreshing it in the background.
  return cached || network;
}

async function cacheStaticAsset(request) {
  const cached = await caches.match(request);
  if (cached) {
    fetch(request, { cache: "no-store" })
      .then(response => {
        if (response.ok) caches.open(CACHE_NAME).then(cache => cache.put(request, response));
      })
      .catch(() => {});
    return cached;
  }
  const response = await fetch(request);
  if (response.ok) {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
  }
  return response;
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

  if (request.mode === "navigate" && !isPrivateOrDynamic(url) && url.pathname.endsWith(".html")) {
    event.respondWith(cachePublicPage(request));
    return;
  }

  if (STATIC_EXTENSIONS.test(url.pathname)) {
    event.respondWith(cacheStaticAsset(request));
  }
});
