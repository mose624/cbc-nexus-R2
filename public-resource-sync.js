(function () {
  "use strict";

  // Public resource bridge: keeps the website library synchronized with the
  // server/Supabase source of truth after admin publishing and page refresh.
  const STORAGE_KEY = "cbeResources";

  function normalizeResource(r) {
    return {
      ...r,
      id: r.id ?? r.resource_id,
      title: r.title || "Untitled resource",
      grade: r.grade || "",
      subject: r.subject || "",
      type: r.type || r.resource_type || "",
      description: r.description || "",
      price: Number(r.price ?? 0),
      discount: Number(r.discount ?? r.discount_price ?? 0),
      discount_price: Number(r.discount_price ?? r.discount ?? 0),
      fileName: r.fileName || r.filename || "",
      r2Key: r.r2Key || r.r2_key || "",
      previewKey: r.previewKey || r.preview_key || "",
      file: r.file || (r.r2_key ? "/api/r2/file?key=" + encodeURIComponent(r.r2_key) : ""),
      status: String(r.status || "approved").toLowerCase(),
      createdAt: r.createdAt || r.created_at || "",
      updatedAt: r.updatedAt || r.updated_at || ""
    };
  }

  async function sync() {
    try {
      const response = await fetch("/api/resources?_=" + Date.now(), {
        credentials: "same-origin",
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" }
      });
      if (!response.ok) throw new Error("Resource API returned " + response.status);

      const data = await response.json();
      if (!data.ok || !Array.isArray(data.resources)) throw new Error("Invalid resource API response");

      // Anything returned by the public API is considered publishable here.
      // Pending/rejected seller resources are excluded; admin-published records
      // are preserved even if their status is stored as published instead of approved.
      const publishable = data.resources
        .map(normalizeResource)
        .filter(r => !["pending", "rejected", "draft", "deleted"].includes(r.status));

      const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      const merged = new Map(existing.map(r => [String(r.id), r]));
      publishable.forEach(r => merged.set(String(r.id), r));
      localStorage.setItem(STORAGE_KEY, JSON.stringify([...merged.values()]));

      // Give the existing application a chance to redraw without changing its design.
      if (typeof window.renderResources === "function") window.renderResources();
      if (typeof window.renderTrending === "function") window.renderTrending();
      window.dispatchEvent(new CustomEvent("cbe:resources-synced", { detail: { count: publishable.length } }));
      console.info("CBE Nexus: synchronized", publishable.length, "published resources");
    } catch (error) {
      console.warn("CBE Nexus public resource sync failed:", error);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", sync, { once: true });
  } else {
    sync();
  }
})();
