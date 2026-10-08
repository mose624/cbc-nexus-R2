(function () {
  const allowed = [".pdf", ".doc", ".docx", ".ppt", ".pptx", ".xls", ".xlsx", ".txt", ".zip"];

  function json(key) {
    try { return JSON.parse(localStorage.getItem(key) || "[]"); } catch { return []; }
  }

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function safeFileName(name) {
    return String(name || "resource.bin").replace(/[^a-zA-Z0-9._-]+/g, "-");
  }

  async function upload(file, meta) {
    const ext = "." + (file.name.split(".").pop() || "").toLowerCase();
    if (!allowed.includes(ext)) throw new Error("Unsupported file type.");

    const role = meta.role || "admin";
    const response = await fetch("/api/r2/upload", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        "Content-Type": file.type || "application/octet-stream",
        "X-CBE-Grade": String(meta.grade || ""),
        "X-CBE-Subject": String(meta.subject || ""),
        "X-CBE-Type": String(meta.type || ""),
        "X-CBE-Filename": safeFileName(file.name),
        "X-CBE-Resource-Id": String(meta.resourceId || "resource"),
        "X-CBE-Role": role
      },
      body: file
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.ok) throw new Error(data.error || "Could not upload the resource to Cloudflare R2.");

    let previewKey = "";
    if (ext === ".pdf") {
      try {
        const previewResponse = await fetch("/api/r2/prepare-preview", {
          method: "POST",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: data.key })
        });
        const previewData = await previewResponse.json();
        if (previewResponse.ok && previewData.ok && previewData.previewKey) previewKey = previewData.previewKey;
      } catch {}
    }
    return { key: data.key, previewKey, fileName: file.name };
  }

  function stop(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  // Main admin resource uploads are handled by app.js. Keeping a second\n  // submit handler here caused duplicate R2 uploads and duplicate records.\n\n  const sellerForm = document.querySelector("#sellerForm");
  if (sellerForm) {
    sellerForm.addEventListener("submit", async function (event) {
      stop(event);
      const status = document.querySelector("#sellerStatus");
      const file = document.querySelector("#sellerFileInput").files[0];
      if (!file) { status.textContent = "Please choose a seller resource file."; return; }

      const id = "seller-" + Date.now();
      status.textContent = "Uploading seller resource to Cloudflare R2...";
      try {
        const grade = document.querySelector("#sellerGradeInput").value;
        const subject = document.querySelector("#sellerSubjectInput").value;
        const type = document.querySelector("#sellerTypeInput").value;
        const result = await upload(file, { grade, subject, type, resourceId: id, role: "seller" });
        const item = {
          id,
          sellerName: document.querySelector("#sellerNameInput").value.trim(),
          sellerPhone: document.querySelector("#sellerPhoneInput").value.trim(),
          title: document.querySelector("#sellerTitleInput").value.trim(),
          price: Number(document.querySelector("#sellerPriceInput").value || 0),
          grade, subject, type,
          discount: Number(document.querySelector("#sellerDiscountInput").value || 0),
          description: document.querySelector("#sellerDescriptionInput").value.trim(),
          fileName: result.fileName,
          fileSize: file.size,
          r2Key: result.key,
          previewKey: result.previewKey,
          file: "/api/r2/file?key=" + encodeURIComponent(result.key),
          status: "pending",
          createdAt: new Date().toISOString()
        };
        const activeSeller = JSON.parse(sessionStorage.getItem("activeSellerAccount") || "null");
        const saveResponse = await fetch("/api/resources", { method: "POST", credentials: "same-origin", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...item, role: "seller", sellerUsername: activeSeller?.username || "", status: "pending" }) });
        const saveData = await saveResponse.json();
        if (!saveResponse.ok || !saveData.ok) throw new Error(saveData.error || "Seller resource database save failed.");
        const savedItem = saveData.saved || item;
        save("cbeSellerResources", [savedItem, ...json("cbeSellerResources").filter((entry) => entry.id !== savedItem.id)]);
        status.textContent = "Seller resource uploaded to R2 and saved to Supabase for approval.";
        sellerForm.reset();
        if (typeof window.loadAdminDashboard === "function") await window.loadAdminDashboard();
      } catch (error) {
        status.textContent = error.message || "R2 upload failed.";
      }
    }, true);
  }

  const projectForm = document.querySelector("#projectUploadForm");
  if (projectForm) {
    projectForm.addEventListener("submit", async function (event) {
      stop(event);
      const status = document.querySelector("#projectStatus");
      const file = document.querySelector("#projectFileInput").files[0];
      if (!file) { status.textContent = "Please choose a project file."; return; }

      const id = "project-" + Date.now();
      status.textContent = "Uploading project to Cloudflare R2...";
      try {
        const grade = document.querySelector("#projectGradeInput").value;
        const subject = document.querySelector("#projectSubjectInput").value.trim();
        const result = await upload(file, { grade, subject, type: "CBC Projects", resourceId: id, role: "project" });
        const project = {
          id,
          title: document.querySelector("#projectTitleInput").value.trim(),
          grade,
          subject,
          notes: document.querySelector("#projectNotesInput").value.trim(),
          fileName: result.fileName,
          r2Key: result.key,
          file: "/api/r2/file?key=" + encodeURIComponent(result.key),
          createdAt: new Date().toISOString()
        };
        save("cbeProjects", [project, ...json("cbeProjects")]);
        status.textContent = "Project uploaded successfully to Cloudflare R2.";
        projectForm.reset();
      } catch (error) {
        status.textContent = error.message || "R2 upload failed.";
      }
    }, true);
  }

  // Independent admin-button fallback. This runs even if an optional
  // dashboard control in app.js is missing, so the Admin Area always opens.
  const adminButton = document.querySelector("#adminAreaButton");
  if (adminButton) {
    adminButton.addEventListener("click", function (event) {
      event.preventDefault();
      const login = document.querySelector("#adminLogin");
      if (!login) return;
      login.classList.add("open");
      login.setAttribute("aria-hidden", "false");
      login.scrollIntoView({ behavior: "smooth", block: "start" });
    }, true);
  }
})();
