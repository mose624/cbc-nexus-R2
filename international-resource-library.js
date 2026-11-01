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
  const controls = document.querySelector(".international-library-controls");
  if (!grid || !curriculum) return;\n  const readerStyles = document.createElement("style");\n  readerStyles.textContent = ".cbe-online-reader{position:fixed;inset:0;z-index:9999;background:rgba(5,18,43,.78);padding:2vh 2vw}.cbe-online-reader[hidden]{display:none}.cbe-online-reader-panel{height:96vh;max-width:1100px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;display:flex;flex-direction:column}.cbe-online-reader header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 18px;background:#071a3d;color:#fff}.cbe-reader-title{display:block;font-size:17px}.cbe-reader-meta{display:block;font-size:12px;color:#dce8fa;margin-top:4px}.cbe-reader-close{background:#f2c14e;border:0;border-radius:6px;padding:10px 14px;font-weight:800;cursor:pointer}.cbe-online-reader iframe{width:100%;height:100%;border:0;background:#fff}@media(max-width:640px){.cbe-online-reader{padding:0}.cbe-online-reader-panel{height:100vh;border-radius:0}.cbe-online-reader header{padding:12px}}";\n  document.head.appendChild(readerStyles);

  function addMetadataFilter(id, label) {
    if (!controls) return null;
    let el = document.getElementById(id);
    if (!el) {
      el = document.createElement("select");
      el.id = id;
      el.setAttribute("aria-label", label);
      el.innerHTML = '<option value="">All ' + label + '</option>';
      controls.insertBefore(el, controls.querySelector("#internationalLibraryReset") || null);
    }
    return el;
  }
  const topicFilter = addMetadataFilter("internationalLibraryTopic", "Topics");
  const levelFilter = addMetadataFilter("internationalLibraryLevel", "Levels");
  const qualificationFilter = addMetadataFilter("internationalLibraryQualification", "Qualifications");
  const sessionFilter = addMetadataFilter("internationalLibrarySession", "Exam Sessions");
  const metadataValue = (r, keys) => {
    for (const key of keys) {
      const value = r && r[key];
      if (Array.isArray(value) && value.length) return value.map(v => String(v ?? "").trim()).filter(Boolean).join(", ");
      if (value !== undefined && value !== null && String(value).trim()) return String(value).trim();
    }
    return "";
  };

  let resources = [];
  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const money = v => "KSh " + Math.max(0, Math.round(Number(v || 0))).toLocaleString();
  const curr = curriculum.toLowerCase();
  const queryParams = new URLSearchParams(window.location.search);
  const requestedSubject = queryParams.get("subject")?.trim() || "";
  const requestedType = queryParams.get("type")?.trim() || "";

  function matches(r) {
    const c = String(r.curriculum || r.grade || "").trim().toLowerCase();
    const q = String(search?.value || "").trim().toLowerCase();
    const s = String(subject?.value || "").trim().toLowerCase();
    const t = String(type?.value || "").trim().toLowerCase();
    const topic = String(topicFilter?.value || "").trim().toLowerCase();
    const level = String(levelFilter?.value || "").trim().toLowerCase();
    const qualification = String(qualificationFilter?.value || "").trim().toLowerCase();
    const session = String(sessionFilter?.value || "").trim().toLowerCase();
    const rowTopic = metadataValue(r, ["topic","topics","unit","chapter"]).toLowerCase();
    const rowLevel = metadataValue(r, ["level","stage","yearGroup","gradeLevel"]).toLowerCase();
    const rowQualification = metadataValue(r, ["qualification","qualificationLevel","examBoard","syllabus","specification"]).toLowerCase();
    const rowSession = metadataValue(r, ["examSession","session","exam_session","series"]).toLowerCase();
    const hay = [r.title,r.description,r.subject,r.type,r.fileName,rowTopic,rowLevel,rowQualification,rowSession].join(" ").toLowerCase();
    return c === curr && (!s || String(r.subject || "").trim().toLowerCase() === s)
      && (!t || String(r.type || "").trim().toLowerCase() === t)
      && (!topic || rowTopic.split(",").map(v => v.trim()).includes(topic))
      && (!level || rowLevel === level)
      && (!qualification || rowQualification === qualification)
      && (!session || rowSession === session)
      && (!q || hay.includes(q));
  }

  function render() {
    const visible = resources.filter(matches);
    if (count) count.textContent = visible.length;
    grid.innerHTML = visible.length ? visible.map(r => {
      const price = Number(r.price || 0);
      const free = price <= 0 || r.isFreeSample === true;
      return '<article class="international-library-card">'
        + '<div class="international-library-card-top"><span class="international-library-badge">'+esc(r.subject || "Subject")+'</span><span class="international-library-type">'+esc(r.type || "Resource")+'</span></div>'
        + '<h3>'+esc(r.title || "Untitled resource")+'</h3><p>'+esc(r.description || "International curriculum learning resource.")+'</p>'
        + '<div class="international-library-meta"><span>'+esc(curriculum)+'</span><span>'+esc(r.fileName || "Digital resource")+'</span></div>'
        + '<div class="international-library-actions">'
        + (r.onlineContent ? '<button type="button" class="international-library-action primary" data-read-online="'+esc(r.id)+'">Read on Website</button>' : '<span class="international-library-action secondary" aria-label="Website reading unavailable">Website reading not yet available — content conversion required</span>')
        + '</div></article>';
    }).join("") : '<div class="international-library-empty"><strong>No resources found.</strong><span>Try another subject, type or search term. New approved resources will appear here automatically.</span></div>';

    grid.querySelectorAll("[data-read-online]").forEach(b => b.addEventListener("click", () => readOnline(b.dataset.readOnline)));
  }

  function readOnline(id) {
    const resource = resources.find(x => String(x.id) === String(id));
    if (!resource?.onlineContent) return;
    let reader = document.getElementById("cbeInternationalOnlineReader");
    if (!reader) {
      reader = document.createElement("section");
      reader.id = "cbeInternationalOnlineReader";
      reader.className = "cbe-online-reader";
      reader.setAttribute("role", "dialog");
      reader.setAttribute("aria-modal", "true");
      reader.setAttribute("aria-label", "Online resource reader");
      reader.innerHTML = '<div class="cbe-online-reader-panel"><header><div><strong class="cbe-reader-title"></strong><span class="cbe-reader-meta"></span></div><button type="button" class="cbe-reader-close" aria-label="Close reader">Close ✕</button></header><iframe title="Resource reading area" sandbox="" referrerpolicy="no-referrer"></iframe></div>';
      document.body.appendChild(reader);
      reader.querySelector(".cbe-reader-close").addEventListener("click", () => { reader.hidden = true; });
    }
    reader.querySelector(".cbe-reader-title").textContent = resource.title || "Online resource";
    reader.querySelector(".cbe-reader-meta").textContent = [resource.subject, resource.type, curriculum].filter(Boolean).join(" · ");
    const frame = reader.querySelector("iframe");
    const content = String(resource.onlineContent);
    const documentHtml = /<html[\s>]/i.test(content) ? content : '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font:17px/1.75 Arial,sans-serif;color:#17233b;max-width:900px;margin:32px auto;padding:0 22px}img,table{max-width:100%}h1,h2,h3{color:#071a3d}table{border-collapse:collapse}td,th{border:1px solid #cbd5e1;padding:8px}</style></head><body>'+content+'</body></html>';
    frame.srcdoc = documentHtml;
    reader.hidden = false;
    reader.scrollIntoView({behavior:"smooth",block:"start"});
  }


  function fillSelect(el, label, values) {
    if (!el) return;
    const selected = el.value;
    el.innerHTML = '<option value="">All ' + label + '</option>' + values.map(v => '<option value="' + esc(v) + '">' + esc(v) + '</option>').join("");
    if (values.includes(selected)) el.value = selected;
  }

  function fillSubjects() {
    const values = [...new Set(resources.map(r => String(r.subject || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b));
    fillSelect(subject, "Subjects", values);
    fillSelect(topicFilter, "Topics", [...new Set(resources.map(r => metadataValue(r, ["topic","topics","unit","chapter"]).split(",").map(v => v.trim()).filter(Boolean)).flat())].sort((a,b) => a.localeCompare(b)));
    fillSelect(levelFilter, "Levels", [...new Set(resources.map(r => metadataValue(r, ["level","qualification","stage","yearGroup"])).filter(Boolean))].sort((a,b) => a.localeCompare(b)));
    fillSelect(sessionFilter, "Exam Sessions", [...new Set(resources.map(r => metadataValue(r, ["examSession","session","exam_session","series"])).filter(Boolean))].sort((a,b) => a.localeCompare(b)));
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
      if (requestedType && type) type.value = [...type.options].some(o => o.value.toLowerCase() === requestedType.toLowerCase()) ? requestedType : "";
      status.textContent = resources.length ? "This is the dedicated "+curriculum+" library. CBC/CBE resources remain completely separate." : "No approved "+curriculum+" resources have been published yet.";
      render();
    } catch {
      status.textContent = "The dedicated international library could not be loaded right now.";
      grid.innerHTML = '<div class="international-library-empty"><strong>Library temporarily unavailable.</strong><span>Please refresh this page. The main CBE Nexus Resource Library is not affected.</span></div>';
    }
  }

  [subject,type,topicFilter,levelFilter,qualificationFilter,sessionFilter,search].forEach(el => el?.addEventListener(el === search ? "input" : "change", render));
  document.querySelectorAll("[data-filter-type]").forEach(card => card.addEventListener("click", () => {
    const selectedType = String(card.dataset.filterType || "").trim();
    if (type) type.value = [...type.options].some(o => o.value.toLowerCase() === selectedType.toLowerCase()) ? selectedType : "";
    if (window.history?.replaceState) {
      const params = new URLSearchParams(window.location.search);
      if (selectedType && type?.value) params.set("type", type.value); else params.delete("type");
      const query = params.toString();
      window.history.replaceState({}, "", window.location.pathname + (query ? "?" + query : "") + "#internationalResources");
    }
    render();
    document.getElementById("internationalResources")?.scrollIntoView({behavior:"smooth",block:"start"});
  }));
  reset?.addEventListener("click", () => { if(subject) subject.value=""; if(topicFilter) topicFilter.value=""; if(levelFilter) levelFilter.value=""; if(qualificationFilter) qualificationFilter.value=""; if(sessionFilter) sessionFilter.value=""; if (window.history?.replaceState) window.history.replaceState({}, "", window.location.pathname + "#internationalResources"); if(type) type.value=""; if(search) search.value=""; render(); });
  load();
})();