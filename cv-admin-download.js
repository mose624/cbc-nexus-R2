(function () {
  "use strict";

  function isAdminUnlocked() {
    return document.body.classList.contains("admin-unlocked");
  }

  function buildAdminButton() {
    var payButton = document.getElementById("payToDownloadCv");
    var status = document.getElementById("cvPaymentStatus");
    if (!payButton || !status || document.getElementById("adminFreeDownloadCv")) return;
    if (!isAdminUnlocked()) return;

    payButton.style.display = "none";
    var button = document.createElement("button");
    button.type = "button";
    button.id = "adminFreeDownloadCv";
    button.className = "primary-button";
    button.textContent = "👑 Admin — Download CV FREE";
    button.addEventListener("click", function () {
      var preview = document.getElementById("cvPreview");
      if (!preview || preview.dataset.generated !== "true") {
        status.textContent = "Generate the CV preview first.";
        return;
      }

      var data = {};
      try { data = JSON.parse(preview.dataset.cv || "{}"); } catch (_) {}
      var name = String(data.cvName || "International-CV").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "");
      var paper = preview.querySelector(".cv-preview-paper");
      if (!paper) {
        status.textContent = "Generate the CV preview first.";
        return;
      }

      var popup = window.open("", "_blank", "noopener,noreferrer,width=900,height=1100");
      if (!popup) {
        status.textContent = "Please allow pop-ups for CBE Nexus to download the CV.";
        return;
      }
      popup.document.write("<!doctype html><html><head><title>" + name + " - CV</title><meta charset='utf-8'><style>body{font-family:Arial,sans-serif;margin:0;background:#eee}.paper{max-width:800px;margin:24px auto;background:#fff;padding:40px;box-sizing:border-box}.paper p{line-height:1.5}.paper h3{margin:18px 0 7px;font-size:15px;border-bottom:1px solid #ddd;padding-bottom:4px}@media print{body{background:#fff}.paper{margin:0;max-width:none;box-shadow:none}}</style></head><body><main class='paper'>" + paper.innerHTML + "</main><script>window.onload=function(){setTimeout(function(){window.print()},250)};<\/script></body></html>");
      popup.document.close();
      status.textContent = "Admin download opened. Use the print dialog to Save as PDF.";
    });

    payButton.parentNode.insertBefore(button, payButton.nextSibling);
  }

  function boot() {
    buildAdminButton();
    var observer = new MutationObserver(buildAdminButton);
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"], subtree: false });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot, { once: true });
  else boot();
})();
