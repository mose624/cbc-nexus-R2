(function () {
  "use strict";

  function openAdmin() {
    const section = document.getElementById("adminLogin");
    if (!section) return;
    section.classList.add("open");
    section.setAttribute("aria-hidden", "false");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    const username = document.getElementById("adminUsernameInput");
    if (username) setTimeout(() => username.focus(), 150);
  }

  async function login(event) {
    event.preventDefault();
    event.stopImmediatePropagation();

    const form = event.currentTarget;
    const username = String(document.getElementById("adminUsername")?.value || "").trim();
    const password = String(document.getElementById("adminPasswordInput")?.value || "");
    const email = String(document.getElementById("adminEmailInput")?.value || "").trim().toLowerCase();
    const status = document.getElementById("adminLoginStatus");

    if (!email || !username || !password) {
      if (status) status.textContent = "Enter your admin email, username and password.";
      return;
    }

    if (status) status.textContent = "Checking admin credentials...";

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, email })
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Invalid admin username or password.");
      }

      if (status) status.textContent = "Admin login successful.";

      const loginSection = document.getElementById("adminLogin");
      if (loginSection) {
        loginSection.classList.remove("open");
        loginSection.setAttribute("aria-hidden", "true");
      }

      const dashboard = document.getElementById("admin");
      if (dashboard) {
        dashboard.classList.add("open");
        dashboard.setAttribute("aria-hidden", "false");
        dashboard.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      if (typeof window.loadAdminDashboard === "function") {
        await window.loadAdminDashboard();
      }
    } catch (error) {
      if (status) status.textContent = error.message || "Admin login failed.";
    }
  }

  function boot() {
    const button = document.getElementById("adminAreaButton");
    if (button && button.dataset.adminFallback !== "1") {
      button.dataset.adminFallback = "1";
      button.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        openAdmin();
      }, true);
    }

    const form = document.getElementById("adminLoginForm");
    if (form && form.dataset.adminFallback !== "1") {
      form.dataset.adminFallback = "1";
      form.addEventListener("submit", login, true);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }
})();
