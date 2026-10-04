(function () {
  "use strict";

  // CBE Nexus Customer Care — isolated floating assistant.
  const WA = "254798462815";
  const WA_URL = "https://wa.me/" + WA;

  const root = document.createElement("div");
  root.id = "cbe-customer-care";
  root.innerHTML = `
    <button class="cc-launcher" type="button" aria-label="Open Customer Care" aria-expanded="false">
      <span class="cc-icon">💬</span><span class="cc-label">Customer Care</span>
    </button>
    <section class="cc-panel" aria-label="CBE Nexus Customer Care" hidden>
      <div class="cc-header"><div><strong>Customer Care</strong><small>CBE Nexus • We're here to help</small></div><button class="cc-close" type="button" aria-label="Close">×</button></div>
      <div class="cc-messages" role="log" aria-live="polite"></div>
      <div class="cc-actions"><button type="button" data-action="payment">💳 Payment help</button><button type="button" data-action="purchase">📚 How to purchase</button><button type="button" data-action="whatsapp">💬 WhatsApp support</button><button type="button" data-action="download-help">📥 I paid — help me download</button><a class="cc-email" href="mailto:cbenexus@gmail.com">📧 Email us</a></div>
      <form class="cc-form"><input class="cc-input" type="text" maxlength="300" autocomplete="off" placeholder="Type your question…"><button class="cc-send" type="submit">Send</button></form>
    </section>`;
  document.body.appendChild(root);

  const summaryGrid = document.querySelector(".summary-grid");
  if (summaryGrid) summaryGrid.innerHTML = `<a class="holiday-program-card" href="#holidayTuition" aria-label="Book Holiday Tuition"><span class="holiday-program-icon">📚</span><span class="holiday-program-copy"><strong>Learners Holiday Program</strong><small>Book Holiday Tuition</small></span><span class="holiday-program-arrow">→</span></a>`;

  const faq = document.querySelector("#faq");
  if (faq && !document.querySelector("#cbe-website-rating")) {
    const rating = document.createElement("div"); rating.id = "cbe-website-rating";
    rating.innerHTML = `<div class="cbe-rating-inner"><strong class="cbe-rating-title">Rate CBE Nexus</strong><span class="cbe-rating-scale">0–5</span><div class="cbe-stars" role="radiogroup" aria-label="Rate CBE Nexus from 0 to 5"><button type="button" class="cbe-star" data-rating="1" aria-label="1 out of 5">★</button><button type="button" class="cbe-star" data-rating="2" aria-label="2 out of 5">★</button><button type="button" class="cbe-star" data-rating="3" aria-label="3 out of 5">★</button><button type="button" class="cbe-star" data-rating="4" aria-label="4 out of 5">★</button><button type="button" class="cbe-star" data-rating="5" aria-label="5 out of 5">★</button></div><strong class="cbe-rating-value" aria-live="polite">0/5</strong><span class="cbe-rating-summary" aria-live="polite">No ratings yet</span><span class="cbe-rating-thanks" aria-live="polite"></span></div>`;
    faq.appendChild(rating);
    const KEY="cbeNexusWebsiteRatings",MY_KEY="cbeNexusMyWebsiteRating";
    const readRatings=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"[]").filter(n=>Number.isInteger(n)&&n>=0&&n<=5)}catch{return[]}};
    const stars=[...rating.querySelectorAll(".cbe-star")],value=rating.querySelector(".cbe-rating-value"),summary=rating.querySelector(".cbe-rating-summary"),thanks=rating.querySelector(".cbe-rating-thanks");
    function render(selected){stars.forEach(star=>star.classList.toggle("selected",Number(star.dataset.rating)<=selected));value.textContent=`${selected}/5`;const ratings=readRatings();summary.textContent=ratings.length?`${(ratings.reduce((s,n)=>s+n,0)/ratings.length).toFixed(1)}/5 • ${ratings.length} rating${ratings.length===1?"":"s"}`:"No ratings yet";}
    render(Number(localStorage.getItem(MY_KEY)||0));
    stars.forEach(star=>star.addEventListener("click",()=>{const selected=Number(star.dataset.rating),previous=Number(localStorage.getItem(MY_KEY)||0),ratings=readRatings();if(localStorage.getItem(MY_KEY)!==null){const i=ratings.indexOf(previous);if(i>=0)ratings.splice(i,1)}ratings.push(selected);localStorage.setItem(KEY,JSON.stringify(ratings));localStorage.setItem(MY_KEY,String(selected));render(selected);thanks.textContent="Thank you for rating CBE Nexus!";}));
  }

  const launcher=root.querySelector(".cc-launcher"),panel=root.querySelector(".cc-panel"),close=root.querySelector(".cc-close"),messages=root.querySelector(".cc-messages"),form=root.querySelector(".cc-form"),input=root.querySelector(".cc-input");
  function addMessage(text,who){const el=document.createElement("div");el.className="cc-message "+who;el.textContent=text;messages.appendChild(el);messages.scrollTop=messages.scrollHeight}
  function reply(text){setTimeout(()=>addMessage(text,"bot"),180)}
  const path=(window.location.pathname||"").toLowerCase();
  const pageContext=path.includes("international-teaching-jobs")?"You are on International Teacher Jobs. I can help with vacancies, requirements, application links, countries and teacher CVs."
    :path.includes("scholarships-opportunities")?"You are on Scholarships & Opportunities. I can help with eligibility, funding, deadlines, requirements and application links."
    :path.includes("professional-cv-writing")?"You are on the International Teacher CV Builder. I can help with ATS CV sections, teacher experience, qualifications, keywords and applications abroad."
    :(path.includes("resource")||path.includes("free-resources")||path.includes("upload"))?"You are on CBE Nexus Resources. I can help with finding resources, grades, subjects, payments, uploads, previews and downloads."
    :(path.includes("blog")||path.includes("learning-hub"))?"You are on the CBE Nexus Education Hub. I can help you find guides on jobs, scholarships, CVs, AI tools and CBC/CBE education."
    :(path.includes("ai-")||path.includes("chatgpt")||path.includes("gemini")||path.includes("generative-ai"))?"You are on an AI learning page. I can help explain the course/topic, learning steps, tools and available training."
    :path.includes("school")?"You are on the School Directory. I can help with schools, vacancies and how to advertise a school or vacancy."
    :path.includes("tuition")?"You are on Holiday Tuition. I can help with registration, programme information and learner support."
    :"I can help you navigate CBE Nexus and find the service you need.";
  function openChat(){panel.hidden=false;launcher.setAttribute("aria-expanded","true");if(!messages.children.length){addMessage("Hello! 👋 Welcome to CBE Nexus Customer Care.","bot");reply(pageContext+" Ask me a question about this page, payment, downloads, WhatsApp support or another CBE Nexus service.")}input.focus()}
  function closeChat(){panel.hidden=true;launcher.setAttribute("aria-expanded","false")}
  function answer(raw){const q=raw.toLowerCase().trim();if(!q)return pageContext+" Please type your question and I’ll help you.";if(/^(hi|hello|hey|good morning|good afternoon|good evening|mambo|habari)\b/.test(q))return"Hello! 👋 Welcome to CBE Nexus. How may I assist you?";if(q.includes("payment")||q.includes("mpesa")||q.includes("m-pesa")||q.includes("pay"))return"For a paid resource, select the resource and follow the M-Pesa STK Push prompt. Enter your M-Pesa number when requested and approve the prompt on your phone. After payment, keep the confirmation message. For help, use WhatsApp Support.";if(q.includes("buy")||q.includes("purchase")||q.includes("order"))return"To purchase a resource: choose your Grade and Subject, open the resource, review its details/preview, then proceed with the payment prompt. After successful payment, continue to the download.";if(q.includes("download")||q.includes("file")||q.includes("paid"))return"After a successful payment, return to the resource and use the download option. If the download does not unlock, contact us on WhatsApp and include the resource title.";if(q.includes("whatsapp")||q.includes("support")||q.includes("agent")||q.includes("human"))return"Our WhatsApp support is available here: "+WA+". Tap the WhatsApp Support button below to contact the team.";if(q.includes("price")||q.includes("cost")||q.includes("how much"))return"Resource prices are shown on each resource card/page before payment. If you need help with a specific resource, send its title to our WhatsApp support.";if(q.includes("thank")||q==="thanks")return"You're welcome! 😊 I’m happy to help.";if((path.includes("international-teaching-jobs"))&&(q.includes("job")||q.includes("vacanc")||q.includes("apply")))return"I can help you review a vacancy, understand its requirements and open the application link. For an international application, your teacher CV should match the vacancy keywords.";
    if(path.includes("scholarships-opportunities")&&(q.includes("scholar")||q.includes("deadline")||q.includes("eligib")||q.includes("fund")))return"I can help you understand the scholarship's eligibility, funding, deadline and application steps. Open the opportunity details and use its official application link.";
    if(path.includes("professional-cv-writing")&&(q.includes("cv")||q.includes("resume")||q.includes("ats")||q.includes("teacher")))return"I can help you build an ATS-friendly international teacher CV with qualifications, teaching experience, curriculum experience, achievements, certifications, skills and vacancy keywords.";
    if((path.includes("resource")||path.includes("free-resources")||path.includes("upload"))&&(q.includes("resource")||q.includes("note")||q.includes("exam")||q.includes("upload")))return"I can help you find resources by grade and subject, understand payment, preview files, download after payment, or submit resources through the appropriate page.";
    if((path.includes("blog")||path.includes("learning-hub"))&&(q.includes("article")||q.includes("guide")||q.includes("job")||q.includes("scholarship")||q.includes("cv")||q.includes("ai")))return"I can help you find the right Education Hub guide. You can explore articles about teacher jobs, scholarships, CVs, AI and CBC/CBE education.";
    if(path.includes("school")&&(q.includes("school")||q.includes("vacanc")||q.includes("advert")))return"I can help you find schools and vacancies or explain how a school can advertise on CBE Nexus.";
    if(path.includes("tuition")&&(q.includes("tuition")||q.includes("register")||q.includes("holiday")))return"I can help with Holiday Tuition registration, programme information and learner support.";
    return pageContext+" I can also help with payment/STK Push, purchasing resources, downloads and WhatsApp support."}
  launcher.addEventListener("click",()=>panel.hidden?openChat():closeChat());close.addEventListener("click",closeChat);
  root.querySelectorAll("[data-action]").forEach(btn=>btn.addEventListener("click",()=>{const action=btn.dataset.action;if(action==="payment"){addMessage("How do I pay?","user");reply(answer("payment"))}if(action==="purchase"){addMessage("How do I purchase a resource?","user");reply(answer("purchase"))}if(action==="download-help"){addMessage("I paid but I can’t download my resource.","user");reply("Please send Customer Care the resource title, your M-Pesa confirmation code, and the phone number used for payment.")}if(action==="whatsapp"){addMessage("I need WhatsApp support.","user");reply("You can contact CBE Nexus support directly on WhatsApp: "+WA+".");window.open(WA_URL+"?text="+encodeURIComponent("Hello CBE Nexus Customer Care, I need assistance."),"_blank","noopener")}}));
  form.addEventListener("submit",e=>{e.preventDefault();const v=input.value.trim();if(!v)return;addMessage(v,"user");input.value="";reply(answer(v))});
})();

/* Public resource sync. The API returns the full Supabase resource table; only resources that are explicitly live are copied into the public browser library. */
(function syncPublishedResources(){
  "use strict";
  const STORAGE_KEY="cbeResources";
  const LIVE_STATUSES=new Set(["approved","published","active","live","available"]);
  async function sync(){
    try{
      const response=await fetch("/api/resources",{credentials:"same-origin",cache:"no-store"});
      if(!response.ok)return;
      const data=await response.json();
      if(!data.ok||!Array.isArray(data.resources))return;
      const live=data.resources.filter(r=>{
        const status=String(r.status||"").trim().toLowerCase();
        return LIVE_STATUSES.has(status);
      });
      const local=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");
      const merged=new Map(local.map(r=>[String(r.id),r]));
      live.forEach(r=>merged.set(String(r.id),r));
      localStorage.setItem(STORAGE_KEY,JSON.stringify([...merged.values()]));
      if(typeof window.renderResources==="function")window.renderResources();
      if(typeof window.renderTrending==="function")window.renderTrending();
      document.dispatchEvent(new CustomEvent("cbe:resources-synced",{detail:{count:live.length}}));
    }catch(error){console.warn("Published resource sync failed:",error)}
  }
  window.setTimeout(sync,150);
  window.addEventListener("pageshow",sync);
})();