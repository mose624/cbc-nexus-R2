(function () {
  "use strict";

  // CBE Nexus Customer Care — isolated floating assistant.
  const WA = "254798462815";
  const WA_URL = "https://wa.me/" + WA;

  const style = document.createElement("link");
  style.rel = "stylesheet";
  style.href = "customer-care.css?v=20260929-3";
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
        <a class="cc-email" href="mailto:cbenexus@gmail.com">📧 Email us</a>
      </div>
      <form class="cc-form">
        <input class="cc-input" type="text" maxlength="300" autocomplete="off" placeholder="Type your question…">
        <button class="cc-send" type="submit">Send</button>
      </form>
    </section>`;
  document.body.appendChild(root);

  const summaryGrid = document.querySelector(".summary-grid");
  if (summaryGrid) {
    summaryGrid.innerHTML = `
      <a class="holiday-program-card" href="#holidayTuition" aria-label="Book Holiday Tuition">
        <span class="holiday-program-icon">📚</span>
        <span class="holiday-program-copy">
          <strong>Learners Holiday Program</strong>
          <small>Book Holiday Tuition</small>
        </span>
        <span class="holiday-program-arrow">→</span>
      </a>`;
  }

  /* CBE Nexus website rating — recorded per browser/device until a central ratings API is connected. */
  const faq = document.querySelector("#faq");
  if (faq && !document.querySelector("#cbe-website-rating")) {
    const rating = document.createElement("div");
    rating.id = "cbe-website-rating";
    rating.innerHTML = `
      <div class="cbe-rating-inner">
        <strong class="cbe-rating-title">Rate CBE Nexus</strong>
        <span class="cbe-rating-scale">0–5</span>
        <div class="cbe-stars" role="radiogroup" aria-label="Rate CBE Nexus from 0 to 5">
          <button type="button" class="cbe-star" data-rating="1" aria-label="1 out of 5">★</button>
          <button type="button" class="cbe-star" data-rating="2" aria-label="2 out of 5">★</button>
          <button type="button" class="cbe-star" data-rating="3" aria-label="3 out of 5">★</button>
          <button type="button" class="cbe-star" data-rating="4" aria-label="4 out of 5">★</button>
          <button type="button" class="cbe-star" data-rating="5" aria-label="5 out of 5">★</button>
        </div>
        <strong class="cbe-rating-value" aria-live="polite">0/5</strong>
        <span class="cbe-rating-summary" aria-live="polite">No ratings yet</span>
        <span class="cbe-rating-thanks" aria-live="polite"></span>
      </div>`;
    faq.appendChild(rating);

    const KEY = "cbeNexusWebsiteRatings";
    const MY_KEY = "cbeNexusMyWebsiteRating";
    const readRatings = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]").filter(n => Number.isInteger(n) && n >= 0 && n <= 5); } catch { return []; } };
    const saveRatings = ratings => localStorage.setItem(KEY, JSON.stringify(ratings));
    const stars = [...rating.querySelectorAll(".cbe-star")];
    const value = rating.querySelector(".cbe-rating-value");
    const summary = rating.querySelector(".cbe-rating-summary");
    const thanks = rating.querySelector(".cbe-rating-thanks");

    function render(selected) {
      stars.forEach(star => star.classList.toggle("selected", Number(star.dataset.rating) <= selected));
      value.textContent = `${selected}/5`;
      const ratings = readRatings();
      if (ratings.length) {
        const average = ratings.reduce((sum, n) => sum + n, 0) / ratings.length;
        summary.textContent = `${average.toFixed(1)}/5 • ${ratings.length} rating${ratings.length === 1 ? "" : "s"}`;
      } else summary.textContent = "No ratings yet";
    }

    const existing = Number(localStorage.getItem(MY_KEY) || 0);
    render(existing);
    stars.forEach(star => star.addEventListener("click", () => {
      const selected = Number(star.dataset.rating);
      const previous = Number(localStorage.getItem(MY_KEY) || 0);
      const ratings = readRatings();
      if (previous >= 0 && previous <= 5 && localStorage.getItem(MY_KEY) !== null) {
        const index = ratings.indexOf(previous);
        if (index >= 0) ratings.splice(index, 1);
      }
      ratings.push(selected);
      saveRatings(ratings);
      localStorage.setItem(MY_KEY, String(selected));
      render(selected);
      thanks.textContent = "Thank you for rating CBE Nexus!";
    }));
  }

  const launcher = root.querySelector(".cc-launcher");
  const panel = root.querySelector(".cc-panel");
  const close = root.querySelector(".cc-close");
  const messages = root.querySelector(".cc-messages");
  const form = root.querySelector(".cc-form");
  const input = root.querySelector(".cc-input");
  function addMessage(text, who) { const el=document.createElement("div"); el.className="cc-message "+who; el.textContent=text; messages.appendChild(el); messages.scrollTop=messages.scrollHeight; }
  function reply(text) { window.setTimeout(() => addMessage(text, "bot"), 180); }
  function openChat() { panel.hidden=false; launcher.setAttribute("aria-expanded","true"); if(!messages.children.length){ addMessage("Hello! 👋 Welcome to CBE Nexus Customer Care. How can I help you today?","bot"); reply("You can ask about payment, purchasing resources, downloads, or WhatsApp support. Paid resources use M-Pesa STK Push."); } input.focus(); }
  function closeChat() { panel.hidden=true; launcher.setAttribute("aria-expanded","false"); }
  function answer(raw) {
    const q=raw.toLowerCase().trim(); if(!q) return "Please type your question and I’ll help you.";
    if(/^(hi|hello|hey|good morning|good afternoon|good evening|mambo|habari)\b/.test(q)) return "Hello! 👋 Welcome to CBE Nexus. How may I assist you?";
    if(q.includes("payment")||q.includes("mpesa")||q.includes("m-pesa")||q.includes("pay")) return "For a paid resource, select the resource and follow the M-Pesa STK Push prompt. Enter your M-Pesa number when requested and approve the prompt on your phone. After payment, keep the confirmation message. For help, use WhatsApp Support.";
    if(q.includes("buy")||q.includes("purchase")||q.includes("order")) return "To purchase a resource: choose your Grade and Subject, open the resource, review its details/preview, then proceed with the payment prompt. After successful payment, continue to the download.";
    if(q.includes("download")||q.includes("file")||q.includes("paid")||q.includes("payment completed")) return "After a successful payment, return to the resource and use the download option. If the download does not unlock, contact us on WhatsApp and include the resource title.";
    if(q.includes("whatsapp")||q.includes("support")||q.includes("agent")||q.includes("human")) return "Our WhatsApp support is available here: " + WA + ". Tap the WhatsApp Support button below to contact the team.";
    if(q.includes("price")||q.includes("cost")||q.includes("how much")) return "Resource prices are shown on each resource card/page before payment. If you need help with a specific resource, send its title to our WhatsApp support.";
    if(q.includes("thank")||q === "thanks") return "You're welcome! 😊 I’m happy to help.";
    return "I can help with greetings, payment/STK Push, purchasing resources, downloads, and WhatsApp support. You can also tap one of the quick-help buttons below.";
  }
  launcher.addEventListener("click", () => panel.hidden ? openChat() : closeChat());
  close.addEventListener("click", closeChat);
  root.querySelectorAll("[data-action]").forEach(btn => btn.addEventListener("click", () => { const action=btn.dataset.action; if(action==="payment") addMessage("How do I pay?","user"); if(action==="purchase") addMessage("How do I purchase a resource?","user"); if(action==="download-help"){ addMessage("I paid but I can’t download my resource.","user"); reply("No problem. Please send Customer Care the resource title, your M-Pesa confirmation code, and the phone number used for payment. Our team can then help you check the payment and download. M-Pesa STK Push is used for paid resources."); return; } if(action==="whatsapp"){ addMessage("I need WhatsApp support.","user"); reply("You can contact CBE Nexus support directly on WhatsApp: " + WA + "."); window.open(WA_URL+"?text="+encodeURIComponent("Hello CBE Nexus Customer Care, I need assistance."),"_blank","noopener"); return; } if(action==="payment") reply(answer("payment")); if(action==="purchase") reply(answer("purchase")); }));
  form.addEventListener("submit", event => { event.preventDefault(); const value=input.value.trim(); if(!value)return; addMessage(value,"user"); input.value=""; reply(answer(value)); });
})();