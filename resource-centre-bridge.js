(function(){
  "use strict";

  // Data-flow bridge only. It does not alter the existing dashboard UI.
  const KEY="cbeResources";
  const BLOCKED=new Set(["pending","rejected","draft","deleted"]);

  function read(){
    try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return[]}
  }

  function normalize(r){
    return {
      ...r,
      id:r.id??r.resource_id,
      title:r.title||"Untitled resource",
      grade:r.grade||"",
      subject:r.subject||"",
      type:r.type||r.resource_type||"",
      description:r.description||"",
      price:Number(r.price??0),
      discount:Number(r.discount??r.discount_price??0),
      discount_price:Number(r.discount_price??r.discount??0),
      fileName:r.fileName||r.filename||"",
      r2Key:r.r2Key||r.r2_key||"",
      previewKey:r.previewKey||r.preview_key||"",
      file:r.file||(r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):""),
      status:String(r.status||"approved").toLowerCase(),
      createdAt:r.createdAt||r.created_at||"",
      updatedAt:r.updatedAt||r.updated_at||""
    };
  }

  async function fetchJson(url){
    const response=await fetch(url,{credentials:"same-origin",cache:"no-store",headers:{"Cache-Control":"no-cache"}});
    if(!response.ok) throw new Error("Resource API returned "+response.status);
    const data=await response.json();
    if(!data.ok) throw new Error(data.error||"Resource API returned an invalid response");
    return data;
  }

  async function sync(){
    try{
      let data;
      try{
        data=await fetchJson("/api/resources?_="+Date.now());
      }catch(primaryError){
        if(document.body.classList.contains("admin-unlocked") || sessionStorage.getItem("cbeAdminUnlocked")==="true"){
          data=await fetchJson("/api/admin/dashboard?_="+Date.now());
        }else{
          throw primaryError;
        }
      }

      const source=Array.isArray(data.resources)?data.resources:[];
      const live=source.map(normalize).filter(r=>!BLOCKED.has(r.status));
      const merged=new Map(read().map(r=>[String(r.id),r]));
      live.forEach(r=>merged.set(String(r.id),r));
      localStorage.setItem(KEY,JSON.stringify([...merged.values()]));

      if(typeof window.renderResources==="function") window.renderResources();
      if(typeof window.renderResourceBundles==="function") window.renderResourceBundles();
      if(typeof window.renderTrending==="function") window.renderTrending();
      if(typeof window.loadAdminDashboard==="function" && (document.body.classList.contains("admin-unlocked") || sessionStorage.getItem("cbeAdminUnlocked")==="true")){
        await window.loadAdminDashboard();
      }

      window.dispatchEvent(new CustomEvent("cbe:resources-synced",{detail:{count:live.length}}));
      return live.length;
    }catch(e){
      console.warn("CBE Nexus resource bridge failed:",e);
      throw e;
    }
  }

  function showMessage(message){
    if(typeof window.showToast==="function") window.showToast(message);
    else console.info("CBE Nexus:",message);
  }

  function installUploadRefreshButton(){
    const form=document.querySelector("#resourceForm");
    if(!form || document.querySelector("#refreshUploadResourcesButton")) return;
    const button=document.createElement("button");
    button.id="refreshUploadResourcesButton";
    button.type="button";
    button.className="secondary-button";
    button.textContent="↻ Refresh Resources";
    button.title="Reload the latest resources from Supabase and refresh the dashboard";
    button.style.margin="0 0 14px 0";
    button.addEventListener("click",async function(){
      if(button.disabled) return;
      button.disabled=true;
      const original=button.textContent;
      button.textContent="↻ Refreshing...";
      try{
        const count=await sync();
        showMessage(`Resources refreshed successfully. ${count} published resource(s) loaded.`);
      }catch(error){
        showMessage(error.message||"Resources could not be refreshed.");
      }finally{
        button.disabled=false;
        button.textContent=original;
      }
    });
    form.parentNode.insertBefore(button,form);
  }

  function apply(grade,subject){
    const gf=document.querySelector("#gradeFilter"),sf=document.querySelector("#subjectFilter");
    if(gf){gf.value=grade||"All Grades";gf.dispatchEvent(new Event("change",{bubbles:true}))}
    setTimeout(()=>{
      if(sf){sf.value=subject||"All Subjects";sf.dispatchEvent(new Event("change",{bubbles:true}))}
      const section=document.querySelector("#resources");
      if(section)section.scrollIntoView({behavior:"smooth",block:"start"});
      history.replaceState(null,"",`#resources?grade=${encodeURIComponent(grade||"All Grades")}&subject=${encodeURIComponent(subject||"All Subjects")}`);
    },0);
  }

  function wireSubjectLinks(){
    document.querySelectorAll("a[href^=\"#resources?\"]").forEach(a=>{
      if(a.dataset.cbeSubjectWired==="1")return;
      const q=(a.getAttribute("href")||"").split("?")[1]||"";
      const p=new URLSearchParams(q);
      const grade=p.get("grade"),subject=p.get("subject");
      if(!grade&&!subject)return;
      a.dataset.cbeSubjectWired="1";
      a.addEventListener("click",e=>{e.preventDefault();apply(grade,subject)});
    });
    document.querySelectorAll("[data-grade-subject-select]").forEach(select=>{
      if(select.dataset.cbeSubjectWired==="1")return;
      select.dataset.cbeSubjectWired="1";
      select.addEventListener("change",()=>{
        const grade=select.dataset.grade||"All Grades";
        const subject=select.value||"All Subjects";
        if(subject!=="All Subjects")apply(grade,subject);
      });
    });
  }

  function boot(){
    wireSubjectLinks();
    installUploadRefreshButton();
    sync().catch(()=>{});
    setTimeout(()=>{wireSubjectLinks();installUploadRefreshButton()},500);
    setTimeout(()=>{wireSubjectLinks();installUploadRefreshButton()},1500);
    setTimeout(()=>{wireSubjectLinks();installUploadRefreshButton()},3000);
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});
  else boot();
})();
