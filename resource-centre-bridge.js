(function(){
  "use strict";
  const KEY="cbeResources";
  const blocked=new Set(["pending","rejected","draft","deleted"]);
  const read=()=>{try{return JSON.parse(localStorage.getItem(KEY)||"[]")}catch{return[]}};
  const normalize=r=>({...r,id:r.id??r.resource_id,title:r.title||"Untitled resource",grade:r.grade||"",subject:r.subject||"",type:r.type||r.resource_type||"",description:r.description||"",price:Number(r.price??0),discount:Number(r.discount??r.discount_price??0),discount_price:Number(r.discount_price??r.discount??0),fileName:r.fileName||r.filename||"",r2Key:r.r2Key||r.r2_key||"",previewKey:r.previewKey||r.preview_key||"",file:r.file||(r.r2_key?"/api/r2/file?key="+encodeURIComponent(r.r2_key):""),status:String(r.status||"approved").toLowerCase(),createdAt:r.createdAt||r.created_at||"",updatedAt:r.updatedAt||r.updated_at||""});
  async function sync(){
    try{
      const response=await fetch("/api/resources?_="+Date.now(),{credentials:"same-origin",cache:"no-store",headers:{"Cache-Control":"no-cache"}});
      if(!response.ok)throw new Error("Resource API returned "+response.status);
      const data=await response.json();
      if(!data.ok||!Array.isArray(data.resources))throw new Error("Invalid resource API response");
      const live=data.resources.map(normalize).filter(r=>!blocked.has(r.status));
      const merged=new Map(read().map(r=>[String(r.id),r]));
      live.forEach(r=>merged.set(String(r.id),r));
      localStorage.setItem(KEY,JSON.stringify([...merged.values()]));
      if(typeof window.renderResources==="function")window.renderResources();
      if(typeof window.renderTrending==="function")window.renderTrending();
      wireSubjectLinks();
      window.dispatchEvent(new CustomEvent("cbe:resources-synced",{detail:{count:live.length}}));
      console.info("CBE Nexus resource bridge: "+live.length+" live resources");
    }catch(e){console.warn("CBE Nexus resource bridge failed:",e)}
  }
  function apply(grade,subject){
    const gf=document.querySelector("#gradeFilter"),sf=document.querySelector("#subjectFilter");
    if(gf){gf.value=grade||"All Grades";gf.dispatchEvent(new Event("change",{bubbles:true}))}
    if(sf){sf.value=subject||"All Subjects";sf.dispatchEvent(new Event("change",{bubbles:true}))}
    const section=document.querySelector("#resources");
    if(section)setTimeout(()=>section.scrollIntoView({behavior:"smooth",block:"start"}),50);
  }
  function wireSubjectLinks(){
    document.querySelectorAll("a[href^=\"#resources?\"]").forEach(a=>{
      if(a.dataset.cbeSubjectWired==="1")return;
      const href=a.getAttribute("href")||"";
      const q=href.split("?")[1]||"";
      const p=new URLSearchParams(q);
      const grade=p.get("grade"),subject=p.get("subject");
      if(!grade&&!subject)return;
      a.dataset.cbeSubjectWired="1";
      a.addEventListener("click",e=>{e.preventDefault();apply(grade,subject)});
    });
    document.querySelectorAll("[data-grade-subject-select]").forEach(select=>{
      if(select.dataset.cbeSubjectWired==="1")return;
      select.dataset.cbeSubjectWired="1";
      select.addEventListener("change",()=>{const grade=select.dataset.grade||"All Grades";const subject=select.value||"All Subjects";if(subject!=="All Subjects")apply(grade,subject)});
    });
  }
  function boot(){wireSubjectLinks();sync();setTimeout(wireSubjectLinks,500);setTimeout(wireSubjectLinks,1500);}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();
