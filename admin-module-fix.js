/* CBE Nexus Admin Module Reliability Layer
 * Gives every coloured Admin Dashboard tab a direct action and
 * connects each module to its real working area.
 */
(function(){
  "use strict";
  function ready(){
    const tabs=[...document.querySelectorAll("[data-admin-module]")];
    if(!tabs.length)return;

    function activate(module){
      const value=String(module||"resources");
      if(typeof window.setAdminModule==="function"){
        window.setAdminModule(value);
      }else{
        document.querySelectorAll("[data-admin-module]").forEach(b=>{
          const active=b.dataset.adminModule===value;
          b.classList.toggle("active",active);
          b.setAttribute("aria-selected",String(active));
        });
        document.querySelectorAll("[data-admin-module-panel]").forEach(p=>{
          const active=p.dataset.adminModulePanel===value;
          p.hidden=!active;
          p.classList.toggle("active",active);
        });
      }
      const panel=document.querySelector('[data-admin-module-panel="'+CSS.escape(value)+'"]');
      if(panel){
        panel.hidden=false;
        panel.classList.add("active");
        setTimeout(()=>panel.scrollIntoView({behavior:"smooth",block:"start"}),30);
      }
      if(value==="resources"){
        const form=document.getElementById("resourceForm");
        if(form)setTimeout(()=>form.scrollIntoView({behavior:"smooth",block:"start"}),150);
      }
      if(value==="ai-notes"){
        document.getElementById("aiNotesAdminForm")?.scrollIntoView({behavior:"smooth",block:"start"});
      }
      if(value==="vacancies"){
        document.getElementById("adminVacancyForm")?.scrollIntoView({behavior:"smooth",block:"start"});
      }
      if(value==="ai-courses"){
        document.getElementById("adminAICourseForm")?.scrollIntoView({behavior:"smooth",block:"start"});
      }
    }

    tabs.forEach(tab=>{
      tab.onclick=function(event){
        event.preventDefault();
        event.stopPropagation();
        activate(this.dataset.adminModule);
      };
      tab.setAttribute("tabindex","0");
      tab.onkeydown=function(event){
        if(event.key==="Enter"||event.key===" "){
          event.preventDefault();
          activate(this.dataset.adminModule);
        }
      };
    });

    const actions={
      "[data-admin-upload-link]":()=>document.getElementById("resourceForm")?.scrollIntoView({behavior:"smooth",block:"start"}),
      "#adminExportSales":()=>window.downloadAdminJson?.("cbe-nexus-sales.json",window.adminDashboardData?.sales||[]),
      "#adminExportResources":()=>window.downloadAdminJson?.("cbe-nexus-resources.json",window.adminDashboardData?.resources||[]),
      "#refreshAdminDashboardButton":()=>window.loadAdminDashboard?.(),
      "#aiNotesLoadButton":()=>window.loadAICourseNotesAdmin?.()
    };
    Object.entries(actions).forEach(([selector,fn])=>{
      document.querySelectorAll(selector).forEach(el=>{
        el.addEventListener("click",function(event){
          if(this.dataset.adminModule||this.tagName==="A"&&this.getAttribute("href")==="#resourceForm")return;
          fn(event);
        });
      });
    });

    // Make module panels usable immediately when the dashboard is opened.
    const defaultTab=document.querySelector('[data-admin-module="resources"]');
    if(defaultTab && !document.querySelector("[data-admin-module].active")){
      activate("resources");
    }
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);
  else ready();
})();