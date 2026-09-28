const CACHE_NAME = "cbe-nexus-static-v2";
const STATIC_EXTENSIONS = /\.(?:css|js|png|jpg|jpeg|webp|svg|ico|woff2?)$/i;

self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

/*
 * Quiz filter hot-fix.
 *
 * The CBC-generated Mathematics banks store the topic in item[3], while
 * sub-strand and learning-outcome fields are empty. The quiz UI correctly
 * builds fallback sub-strands/outcomes from item[3], but the old filter tried
 * to read item[6]/item[7] and therefore returned zero questions after a
 * learner selected a sub-strand or learning outcome.
 *
 * Rewrite the two filter expressions at request time so existing deployments
 * receive the fix without requiring the large assessment.js file to be
 * duplicated here. The source file can be cleaned up in a later release.
 */
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

  const fixed = source
    .replace(oldSubFilter, newSubFilter)
    .replace(oldOutcomeFilter, newOutcomeFilter);

  return new Response(fixed, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return;

  const url = new URL(request.url);
  if (url.pathname.endsWith("/assessment.js")) {
    event.respondWith(getQuizFixedResponse(request));
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
