(function(){
  const WHATSAPP="254798462815";
  const MPESA="0798462815";
  const WA=(message)=>`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
  const replies={
    greeting:`Hello! 👋 Welcome to CBE Nexus Customer Service. I can help you find resources, explain M-Pesa payment, or connect you to WhatsApp for a purchase.`,
    payment:`💳 <strong>How to pay:</strong><br>1. Choose the resource you want.<br>2. Click <strong>Pay M-Pesa</strong>.<br>3. Enter your Safaricom number when prompted.<br>4. Approve the M-Pesa STK Push on your phone.<br>5. After successful payment, follow the download instructions on the site.<br><br>If payment does not arrive or you need help, I can connect you to WhatsApp.`,
    whatsapp:`💬 You can purchase or get payment assistance through WhatsApp.`,
    resources:`📚 CBE Nexus provides CBC/CBE notes, schemes of work, lesson plans, assessments, topical questions, past papers, marking schemes, study guides and other learning resources for Kenyan learners and teachers.`,
    mpesa:`📱 M-Pesa support: use the <strong>Pay M-Pesa</strong> button on the resource you want. The site uses an STK Push so you can approve the payment directly on your phone.`,
    help:`I can help with:<br>• Finding learning resources<br>• M-Pesa payment guidance<br>• WhatsApp purchases<br>• Payment problems<br>• General CBE Nexus questions`
  };
  function response(text){
    const t=text.toLowerCase();
    if(/^(hi|hello|hey|habari|mambo|good morning|good afternoon|good evening)\b/.test(t)) return replies.greeting;
    if(/pay|payment|lipa|mpesa|m-pesa|stk|money|cost|price/.test(t)) return replies.payment;
    if(/whatsapp|buy|purchase|order|nunua|nunua|contact/.test(t)) return replies.whatsapp;
    if(/resource|notes|scheme|lesson|exam|paper|marking|material|book/.test(t)) return replies.resources;
    if(/help|assist|support|how/.test(t)) return replies.help;
    return `Thanks for contacting CBE Nexus Customer Service. I can guide you on <strong>payments</strong>, <strong>resources</strong>, or <strong>WhatsApp purchases</strong>. What would you like help with?`;
  }
  function addMessage(html,who){const box=document.querySelector("#cbeCustomerMessages");if(!box)return;const item=document.createElement("div");item.className="cbe-customer-message "+who;item.innerHTML=html;box.appendChild(item);box.scrollTop=box.scrollHeight;}
  function open(){const panel=document.querySelector("#cbeCustomerPanel");if(!panel)return;panel.classList.add("open");panel.setAttribute("aria-hidden","false");setTimeout(()=>document.querySelector("#cbeCustomerInput")?.focus(),80);}
  function close(){const panel=document.querySelector("#cbeCustomerPanel");if(!panel)return;panel.classList.remove("open");panel.setAttribute("aria-hidden","true");}
  function init(){
    const fab=document.querySelector("#cbeCustomerFab"),panel=document.querySelector("#cbeCustomerPanel"),closeBtn=document.querySelector("#cbeCustomerClose"),form=document.querySelector("#cbeCustomerForm"),input=document.querySelector("#cbeCustomerInput"),wa=document.querySelector("#cbeCustomerWhatsApp");
    if(!fab||!panel||!form)return;
    fab.addEventListener("click",open);closeBtn?.addEventListener("click",close);
    wa?.setAttribute("href",WA("Hello CBE Nexus, I need help with a resource purchase."));
    document.querySelectorAll("[data-customer-question]").forEach(b=>b.addEventListener("click",()=>{const q=b.dataset.customerQuestion;addMessage(q,"user");setTimeout(()=>addMessage(response(q),"bot"),180);}));
    form.addEventListener("submit",e=>{e.preventDefault();const q=input.value.trim();if(!q)return;addMessage(q,"user");input.value="";setTimeout(()=>addMessage(response(q),"bot"),180);});
    setTimeout(()=>{if(!sessionStorage.getItem("cbeCustomerWelcomed")){open();sessionStorage.setItem("cbeCustomerWelcomed","true");}},1200);
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();
