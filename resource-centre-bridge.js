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
        // The admin endpoint is a safe authenticated fallback. This keeps an
        // existing admin dashboard usable if the public resource query fails.
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
      if(typeof window.renderTrending==="function") window.renderTrending();
      if(typeof window.loadAdminDashboard==="function" && (document.body.classList.contains("admin-unlocked") || sessionStorage.getItem("cbeAdminUnlocked")==="true")){
        await window.loadAdminDashboard();
      }

      window.dispatchEvent(new CustomEvent("cbe:resources-synced",{detail:{count:live.length}}));
    }catch(e){
      console.warn("CBE Nexus resource bridge failed:",e);
    }
  }

  function normalize(value){
    return String(value||"").trim().toLowerCase()
      .replace(/&/g,"and").replace(/[()]/g,"").replace(/\s+/g," ")
      .replace(/[^a-z0-9]+/g," ").trim();
  }

  // Header Grade -> Subject links are the single source of truth.
  // Dashboard Grade -> Subject selections open those exact same pages.
  function apply(grade,subject){
    const wantedGrade=normalize(grade), wantedSubject=normalize(subject);
    if(!wantedGrade || !wantedSubject || wantedSubject==="all subjects") return;

    const links=Array.from(document.querySelectorAll('a[href*="resource-category.html?grade="]'));
    const match=links.find(link=>{
      try{
        const u=new URL(link.getAttribute("href"),window.location.href);
        return normalize(u.searchParams.get("grade"))===wantedGrade &&
               normalize(u.searchParams.get("subject"))===wantedSubject;
      }catch{return false;}
    });

    if(match){
      window.location.assign(match.href);
      return;
    }

    window.location.assign("resource-category.html?grade="+encodeURIComponent(grade)+"&subject="+encodeURIComponent(subject));
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
    sync();
    setTimeout(wireSubjectLinks,500);
    setTimeout(wireSubjectLinks,1500);
    setTimeout(wireSubjectLinks,3000);
  }

  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});
  else boot();
})();
