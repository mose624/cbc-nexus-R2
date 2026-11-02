(() => {
  "use strict";
  const curriculum = String(document.body?.dataset?.curriculum || "").trim();
  const grid = document.querySelector("#internationalLibraryGrid");
  const count = document.querySelector("#internationalLibraryCount");
  const status = document.querySelector("#internationalLibraryStatus");
  const subject = document.querySelector("#internationalLibrarySubject");
  const type = document.querySelector("#internationalLibraryType");
  const search = document.querySelector("#internationalLibrarySearch");
  const reset = document.querySelector("#internationalLibraryReset");
  if (!grid || !curriculum) return;

  let resources = [];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const money = v => "KSh " + Math.max(0, Math.round(Number(v || 0))).toLocaleString();
  const curr = curriculum.toLowerCase();
  const requestedSubject = new URLSearchParams(window.location.search).get("subject")?.trim() || "";

  function matches(r) {
    const c = String(r.curriculum || r.grade || "").trim().toLowerCase();
    const q = String(search?.value || "").trim().toLowerCase();
    const s = String(subject?.value || "").trim().toLowerCase();
    const t = String(type?.value || "").trim().toLowerCase();
    const hay = [r.title,r.description,r.subject,r.type,r.fileName].join(" ").toLowerCase();
    return c === curr && (!s || String(r.subject || "").trim().toLowerCase() === s)
      && (!t || String(r.type || "").trim().toLowerCase() === t) && (!q || hay.includes(q));
  }

  function safeImageUrl(value) {
    const raw = String(value || "").trim();
    if (!raw) return "";
    try {
      const url = new URL(raw, window.location.origin);
      if (url.protocol !== "https:" && url.origin !== window.location.origin) return "";
      if (url.protocol !== "https:" && url.protocol !== "http:") return "";
      return url.href;
    } catch { return ""; }
  }

  function resourceCover(r) {
    const subjectName = String(r.subject || "Learning").trim();
    const supplied = safeImageUrl(r.imageUrl || r.image_url || r.thumbnailUrl || r.thumbnail_url || r.coverImage || r.cover_image);
    if (supplied) return '<div class="international-library-cover-fallback"><img class="international-library-cover-image" src="'+esc(supplied)+'" alt="'+esc((r.title || "Resource") + " cover image")+'" loading="lazy" decoding="async" onerror="this.hidden=true;this.parentElement.classList.add(\'image-failed\')"><span class="international-library-cover-subject">'+esc(subjectName)+'</span></div>';
    const typeName = String(r.type || "Resource").trim();
    const initials = subjectName.split(/\s+/).slice(0,2).map(x => x.charAt(0)).join("").toUpperCase() || "LN";
    const title = String(r.title || "Learning resource").slice(0,52);
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#071a3d"/><stop offset="1" stop-color="#087fa7"/></linearGradient></defs><rect width="720" height="300" rx="24" fill="url(#g)"/><circle cx="610" cy="65" r="120" fill="#ffffff" opacity=".08"/><circle cx="665" cy="245" r="95" fill="#18b6d9" opacity=".18"/><path d="M70 75h110a24 24 0 0 1 24 24v122H94a24 24 0 0 0-24 24z" fill="#fff" opacity=".14"/><path d="M180 75h110a24 24 0 0 1 24 24v146H204a24 24 0 0 0-24-24z" fill="#fff" opacity=".22"/><text x="390" y="130" fill="#fff" font-family="Arial,sans-serif" font-size="76" font-weight="700" text-anchor="middle">'+initials+'</text><text x="390" y="184" fill="#d8f5ff" font-family="Arial,sans-serif" font-size="23" font-weight="700" text-anchor="middle">'+esc(curriculum.toUpperCase())+' • '+esc(typeName.toUpperCase().slice(0,24))+'</text><text x="390" y="226" fill="#fff" font-family="Arial,sans-serif" font-size="20" text-anchor="middle">'+esc(title)+'</text></svg>';
    return '<div class="international-library-cover-fallback" role="img" aria-label="'+esc(subjectName + " " + typeName + " resource cover")+'"><img alt="" src="data:image/svg+xml;charset=UTF-8,'+encodeURIComponent(svg)+'"><span class="international-library-cover-subject">'+esc(subjectName)+'</span></div>';
  }

  function render() {
    const visible = resources.filter(matches);
    if (count) count.textContent = visible.length;
    grid.innerHTML = visible.length ? visible.map(r => {
      const price = Number(r.price || 0);
      const free = price <= 0 || r.isFreeSample === true;
      return '<article class="international-library-card">'
        + '<div class="international-library-cover">'+resourceCover(r)+'</div>'
        + '<div class="international-library-card-top"><span class="international-library-badge">'+esc(r.subject || "Subject")+'</span><span class="international-library-type">'+esc(r.type || "Resource")+'</span></div>'
        + '<h3>'+esc(r.title || "Untitled resource")+'</h3><p>'+esc(r.description || "International curriculum learning resource.")+'</p>'
        + '<div class="international-library-meta"><span>'+esc(curriculum)+'</span><span>'+esc(r.fileName || "Digital resource")+'</span></div>'
        + '<div class="international-library-actions">'
        + (r.previewKey ? '<button type="button" class="international-library-action secondary" data-preview="'+esc(r.id)+'">Preview</button>' : "")
        + (free ? '<button type="button" class="international-library-action primary" data-open="'+esc(r.id)+'">Open Resource</button>' : '<button type="button" class="international-library-action primary" data-buy="'+esc(r.id)+'">Purchase • '+money(price)+'</button>')
        + '</div></article>';
    }).join("") : '<div class="international-library-empty"><strong>No resources found.</strong><span>Try another subject, type or search term. New approved resources will appear here automatically.</span></div>';

    grid.querySelectorAll("[data-preview]").forEach(b => b.addEventListener("click", () => preview(b.dataset.preview)));
    grid.querySelectorAll("[data-buy],[data-open]").forEach(b => b.addEventListener("click", () => purchase(b.dataset.buy || b.dataset.open)));
  }

  async function preview(id) {
    const r = resources.find(x => String(x.id) === String(id));
    if (!r?.previewKey) return;
    try {
      const response = await fetch("/api/r2/preview?key="+encodeURIComponent(r.previewKey), {credentials:"same-origin",cache:"no-store"});
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok) throw new Error(data.error || "Preview unavailable.");
      window.open(data.previewUrl, "_blank", "noopener");
    } catch (e) { window.alert(e.message || "Preview unavailable."); }
  }

  function purchase(id) {
    const r = resources.find(x => String(x.id) === String(id));
    if (!r) return;
    sessionStorage.setItem("cbeInternationalSelectedResource", JSON.stringify({id:r.id,title:r.title,curriculum}));
    window.location.href = "index.html?resource="+encodeURIComponent(r.title)+"&amount="+encodeURIComponent(Math.max(0, Math.round(Number(r.price || 0))))+"#payments";
  }

  function fillSubjects() {
    if (!subject) return;
    const values = [...new Set(resources.map(r => String(r.subject || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b));
    subject.innerHTML = '<option value="">All Subjects</option>' + values.map(v => '<option value="'+esc(v)+'">'+esc(v)+'</option>').join("");
  }

  async function load() {
    status.textContent = "Loading approved resources for "+curriculum+"…";
    grid.innerHTML = '<div class="international-library-loading">Loading resources…</div>';
    try {
      const response = await fetch("/api/resources?_internationalLibrary="+encodeURIComponent(curriculum)+"&_="+Date.now(), {credentials:"same-origin",cache:"no-store",headers:{"Cache-Control":"no-cache"}});
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.ok || !Array.isArray(data.resources)) throw new Error("Library request failed.");
      resources = data.resources.filter(r => String(r.curriculum || r.grade || "").trim().toLowerCase() === curr && String(r.status || "approved").toLowerCase() === "approved");
      fillSubjects();
      if (requestedSubject && subject) subject.value = [...subject.options].some(o => o.value.toLowerCase() === requestedSubject.toLowerCase()) ? requestedSubject : "";
      status.textContent = resources.length ? "This is the dedicated "+curriculum+" library. CBC/CBE resources remain completely separate." : "No approved "+curriculum+" resources have been published yet.";
      render();
    } catch {
      status.textContent = "The dedicated international library could not be loaded right now.";
      grid.innerHTML = '<div class="international-library-empty"><strong>Library temporarily unavailable.</strong><span>Please refresh this page. The main CBE Nexus Resource Library is not affected.</span></div>';
    }
  }

  [subject,type,search].forEach(el => el?.addEventListener(el === search ? "input" : "change", render));
  reset?.addEventListener("click", () => { if(subject) subject.value=""; if (window.history?.replaceState) window.history.replaceState({}, "", window.location.pathname + "#internationalResources"); if(type) type.value=""; if(search) search.value=""; render(); });
  load();
})();