(function () {
  "use strict";

  // CBE Nexus Customer Care — isolated floating assistant.
  // This script only creates its own elements and does not modify existing page structure/styles.
  const WA = "254798462815";
  const WA_URL = "https://wa.me/" + WA;

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "customer-care.css?v=20260929-1";
  document.head.appendChild(style);

  const root = document.createElement("div");
  root.id = "cbe-customer-care";
  root.innerHTML = `
    <button class="cc-launcher" type="button" aria-label="Open Customer Care" aria-expanded="false">
      <span class="cc-icon">💬</span><span class="cc-label">Customer Care</span>
    </button>
    <section class="cc-panel" aria-label="CBE Nexus Customer Care" hidden>
      <div class="cc-header">
        <div><strong>Customer Care</strong><small>CBE Nexus • We're here to help</small></div>
        <button class="cc-close" type="button" aria-label="Close">×</button>
      </div>
      <div class="cc-messages" role="log" aria-live="polite"></div>
      <div class="cc-actions">
        <button type="button" data-action="payment">💳 Payment help</button>
        <button type="button" data-action="purchase">📚 How to purchase</button>
        <button type="button" data-action="whatsapp">💬 WhatsApp support</button>
        <button type="button" data-action="download-help">📥 I paid — help me download</button>
      </div>
      <form class="cc-form">
        <input class="cc-input" type="text" maxlength="300" autocomplete="off" placeholder="Type your question…">
        <button class="cc-send" type="submit">Send</button>
      </form>
    </section>`;
  document.body.appendChild(root);

  const launcher = root.querySelector(".cc-launcher");
  const panel = root.querySelector(".cc-panel");
  const close = root.querySelector(".cc-close");
  const messages = root.querySelector(".cc-messages");
  const form = root.querySelector(".cc-form");
  const input = root.querySelector(".cc-input");

  function addMessage(text, who) {
    const el = document.createElement("div");
    el.className = "cc-message " + who;
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function reply(text) {
    window.setTimeout(() => addMessage(text, "bot"), 180);
  }

  function openChat() {
    panel.hidden = false;
    launcher.setAttribute("aria-expanded", "true");
    if (!messages.children.length) {
      addMessage("Hello! 👋 Welcome to CBE Nexus Customer Care. How can I help you today?", "bot");
      reply("You can ask about payment, purchasing resources, downloads, or WhatsApp support. M-Pesa payment number: 0798462815.");
    }
    input.focus();
  }

  function closeChat() {
    panel.hidden = true;
    launcher.setAttribute("aria-expanded", "false");
  }

  function answer(raw) {
    const q = raw.toLowerCase().trim();
    if (!q) return "Please type your question and I’ll help you.";
    if (/^(hi|hello|hey|good morning|good afternoon|good evening|mambo|habari)\b/.test(q)) {
      return "Hello! 👋 Welcome to CBE Nexus. How may I assist you?";
    }
    if (q.includes("payment") || q.includes("mpesa") || q.includes("m-pesa") || q.includes("pay")) {
      return "For a paid resource, select the resource and follow the payment prompt. Payment method: pay through M-Pesa to 0798462815. After payment, keep your M-Pesa confirmation message and follow the download instructions. If you need help, contact Customer Care on WhatsApp: 0798462815.";
    }
    if (q.includes("buy") || q.includes("purchase") || q.includes("order")) {
      return "To purchase a resource: choose your Grade and Subject, open the resource, review its details/preview, then proceed with the payment prompt. After successful payment, continue to the download.";
    }
    if (q.includes("download") || q.includes("file") || q.includes("paid") || q.includes("payment completed")) {
      return "After a successful payment, return to the resource and use the download option. If the download does not unlock, contact us on WhatsApp and include the resource title.";
    }
    if (q.includes("whatsapp") || q.includes("support") || q.includes("agent") || q.includes("human")) {
      return "Our WhatsApp support is available here: " + WA + ". Tap the WhatsApp Support button below to contact the team.";
    }
    if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
      return "Resource prices are shown on each resource card/page before payment. If you need help with a specific resource, send its title to our WhatsApp support.";
    }
    if (q.includes("thank") || q === "thanks") return "You're welcome! 😊 I’m happy to help.";
    return "I can help with greetings, payment/STK Push, purchasing resources, downloads, and WhatsApp support. You can also tap one of the quick-help buttons below.";
  }

  launcher.addEventListener("click", () => panel.hidden ? openChat() : closeChat());
  close.addEventListener("click", closeChat);

  root.querySelectorAll("[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.action;
      if (action === "payment") addMessage("How do I pay?", "user");
      if (action === "purchase") addMessage("How do I purchase a resource?", "user");
      if (action === "download-help") {
        addMessage("I paid but I can’t download my resource.", "user");
        reply("No problem. Please send Customer Care the resource title, your M-Pesa confirmation code, and the phone number used for payment. Our team can then help you check the payment and download. M-Pesa payment number: 0798462815.");
        return;
      }
      if (action === "whatsapp") {
        addMessage("I need WhatsApp support.", "user");
        reply("You can contact CBE Nexus support directly on WhatsApp: " + WA + ".");
        window.open(WA_URL + "?text=" + encodeURIComponent("Hello CBE Nexus Customer Care, I need assistance."), "_blank", "noopener");
        return;
      }
      if (action === "payment") reply(answer("payment"));
      if (action === "purchase") reply(answer("purchase"));
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    addMessage(value, "user");
    input.value = "";
    reply(answer(value));
  });
})();