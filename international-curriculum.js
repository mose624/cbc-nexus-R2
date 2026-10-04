(() => {
  const page = document.body;
  const curriculum = String(page?.dataset?.curriculum || "").trim();
  const resourceGrid = document.querySelector("#internationalResourceGrid");
  const subjectSelect = document.querySelector("#internationalSubjectSelect");
  const resourceCount = document.querySelector("#internationalResourceCount");
  const status = document.querySelector("#internationalResourceStatus");

  if (!curriculum || !resourceGrid) return;

  const setStatus = (message, error = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("error", error);
  };

  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));

  const money = (value) => {
    const n = Number(value || 0);
    return "KES " + n.toLocaleString("en-KE");
  };

  const indexLink = (subject = "") => {
    const url = new URL("index.html", window.location.href);
    url.hash = "resources";
    const params = new URLSearchParams();
    params.set("grade", curriculum);
    if (subject) params.set("subject", subject);
    url.hash = "resources?" + params.toString();
    return url.href;
  };

  const render = (resources, subject = "") => {
    const filtered = resources.filter((r) => {
      const level = String(r.grade || "").trim().toLowerCase();
      const matchesCurriculum = level === curriculum.toLowerCase();
      const matchesSubject = !subject || String(r.subject || "").trim().toLowerCase() === subject.toLowerCase();
      return matchesCurriculum && matchesSubject;
    });

    if (resourceCount) resourceCount.textContent = String(filtered.length);
    if (!filtered.length) {
      resourceGrid.innerHTML = '<div class="international-empty"><strong>No published resources yet.</strong><p>Be the first to add an approved ' + esc(curriculum) + ' resource for this subject.</p><a class="international-btn" href="' + esc(indexLink(subject)) + '">Open CBE Nexus Resource Library</a></div>';
      return;
    }

    resourceGrid.innerHTML = filtered.map((r) => {
      const subjectName = String(r.subject || "Subject");
      const type = String(r.type || "Resource");
      const title = String(r.title || "Untitled resource");
      const description = String(r.description || "International curriculum learning resource.");
      return '<article class="international-resource-card">' +
        '<div class="international-resource-meta"><span>' + esc(subjectName) + '</span><span>' + esc(type) + '</span></div>' +
        '<h3>' + esc(title) + '</h3>' +
        '<p>' + esc(description) + '</p>' +
        '<div class="international-resource-footer"><strong>' + money(r.discount || r.price) + '</strong><a class="international-btn" href="' + esc(indexLink(subjectName)) + '">View &amp; Purchase</a></div>' +
        '</article>';
    }).join("");
  };

  const load = async () => {
    setStatus("Loading published resources...");
    try {
      const response = await fetch("/api/resources?_international=" + encodeURIComponent(curriculum) + "&_=" + Date.now(), {
        credentials: "same-origin",
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" }
      });
      const data = await response.json();
      if (!response.ok || !data.ok || !Array.isArray(data.resources)) throw new Error(data.error || "Resources could not be loaded.");
      const resources = data.resources.filter((r) => String(r.status || "approved").toLowerCase() === "approved");
      const subjects = [...new Set(resources.filter((r) => String(r.grade || "").trim().toLowerCase() === curriculum.toLowerCase()).map((r) => String(r.subject || "").trim()).filter(Boolean))].sort((a,b) => a.localeCompare(b));
      if (subjectSelect) {
        const current = subjectSelect.value;
        subjectSelect.innerHTML = '<option value="">All ' + esc(curriculum) + ' Subjects</option>' + subjects.map((s) => '<option value="' + esc(s) + '">' + esc(s) + '</option>').join("");
        if (subjects.includes(current)) subjectSelect.value = current;
      }
      render(resources, subjectSelect?.value || "");
      setStatus("Showing approved " + curriculum + " resources.");
    } catch (error) {
      console.warn("International resource loading failed:", error);
      setStatus(error.message || "Resources could not be loaded.", true);
      resourceGrid.innerHTML = '<div class="international-empty"><strong>Resource Library temporarily unavailable.</strong><p>Please open the main CBE Nexus Resource Library and try again.</p><a class="international-btn" href="' + esc(indexLink()) + '">Open Resource Library</a></div>';
    }
  };

  subjectSelect?.addEventListener("change", () => load());
  document.querySelectorAll("[data-international-subject]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      if (!subjectSelect) return;
      subjectSelect.value = button.dataset.internationalSubject || "";
      load();
      document.querySelector("#internationalResources")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  load();
})();