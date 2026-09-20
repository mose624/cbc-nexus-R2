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
    const response = await fetch(meta.role === "project" ? "/api/r2/project-upload-url" : "/api/r2/upload-url", { credentials: "same-origin",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        grade: meta.grade,
        subject: meta.subject,
        type: meta.type,
        fileName: safeFileName(file.name),
        resourceId: meta.resourceId,
        role: meta.role || "admin",
        contentType: file.type || "application/octet-stream"
      })
    });
    const data = await response.json();
    if (!response.ok || !data.ok) throw new Error(data.error || "Could not create R2 upload URL.");
    const put = await fetch(data.uploadUrl, {
      method: "PUT",
      headers: { "Content-Type": file.type || "application/octet-stream" },
      body: file
    });
    if (!put.ok) throw new Error("Cloudflare R2 upload failed.");
    return { key: data.key, fileName: file.name };
  }

  function stop(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  const resourceForm = document.querySelector("#resourceForm");
  if (resourceForm) {
    resourceForm.addEventListener("submit", async function (event) {
      stop(event);
      const status = document.querySelector("#formStatus");
      const file = document.querySelector("#fileInput").files[0];
      if (!file) {
        status.textContent = "Please choose a resource file before publishing.";
        return;
      }

      const id = "admin-" + Date.now();
      status.textContent = "Uploading resource to Cloudflare R2...";
      try {
        const grade = document.querySelector("#adminGradeInput").value;
        const subject = document.querySelector("#adminSubjectInput").value;
        const type = document.querySelector("#adminTypeInput").value;
        const result = await upload(file, { grade, subject, type, resourceId: id, role: "admin" });
        const resource = {
          id,
          title: document.querySelector("#titleInput").value.trim(),
          grade,
          subject,
          type,
          description: document.querySelector("#descriptionInput").value.trim(),
          notes: document.querySelector("#notesContentInput").value.trim(),
          price: Number(document.querySelector("#priceInput").value || 0),
          discount: Number(document.querySelector("#discountInput").value || 0),
          term: document.querySelector("#termInput").value,
          isFreeSample: document.querySelector("#freeSampleInput").value === "true",
          popularity: 1,
          fileName: result.fileName,
          r2Key: result.key,
          file: "/api/r2/file?key=" + encodeURIComponent(result.key)
        };
        const existing = json("cbeResources");
        save("cbeResources", [...existing, resource]);
        status.textContent = "Resource uploaded to Cloudflare R2 and published successfully.";
        resourceForm.reset();
      } catch (error) {
        status.textContent = error.message || "R2 upload failed.";
      }
    }, true);
  }

  const sellerForm = document.querySelector("#sellerForm");
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
          file: "/api/r2/file?key=" + encodeURIComponent(result.key),
          status: "pending",
          createdAt: new Date().toISOString()
        };
        save("cbeSellerResources", [item, ...json("cbeSellerResources")]);
        status.textContent = "Seller resource uploaded to R2 and submitted for admin approval.";
        sellerForm.reset();
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
