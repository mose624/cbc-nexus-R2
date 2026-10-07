/* CBE Nexus Admin Module Reliability + Higher Education Jobs */
(function(){
 "use strict";
 function ready(){
   const tabs=[...document.querySelectorAll("[data-admin-module]")];
   if(!tabs.length)return;
   function activate(module){
     const value=String(module||"resources");
     if(typeof window.setAdminModule==="function")window.setAdminModule(value);
     else document.querySelectorAll("[data-admin-module-panel]").forEach(p=>{p.hidden=p.dataset.adminModulePanel!==value;p.classList.toggle("active",p.dataset.adminModulePanel===value);});
     const panel=document.querySelector('[data-admin-module-panel="'+CSS.escape(value)+'"]');
     if(panel){panel.hidden=false;panel.classList.add("active");setTimeout(()=>panel.scrollIntoView({behavior:"smooth",block:"start"}),30);}
     if(value==="resources")document.getElementById("resourceForm")?.scrollIntoView({behavior:"smooth",block:"start"});
     if(value==="ai-notes")document.getElementById("aiNotesAdminForm")?.scrollIntoView({behavior:"smooth",block:"start"});
     if(value==="vacancies")document.getElementById("adminVacancyForm")?.scrollIntoView({behavior:"smooth",block:"start"});
     if(value==="ai-courses")document.getElementById("adminAICourseForm")?.scrollIntoView({behavior:"smooth",block:"start"});
     if(value==="higher-education-jobs")document.getElementById("adminHigherJobForm")?.scrollIntoView({behavior:"smooth",block:"start"});
   }
   tabs.forEach(tab=>{tab.onclick=function(e){e.preventDefault();e.stopPropagation();activate(this.dataset.adminModule)};tab.setAttribute("tabindex","0");tab.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();activate(tab.dataset.adminModule)}}});
   injectHigherEducationJobs(activate);
 }
 function injectHigherEducationJobs(activate){
   if(document.querySelector('[data-admin-module="higher-education-jobs"]')){ bindHigherJobs(); return; }
   const tabBar=document.querySelector(".admin-module-tabs");
   const panel=document.querySelector('[data-admin-module-panel="vacancies"]');
   if(!tabBar||!panel)return;
   const tab=document.createElement("button");
   tab.className="admin-module-tab";
   tab.type="button";tab.role="tab";tab.dataset.adminModule="higher-education-jobs";tab.setAttribute("aria-selected","false");
   tab.textContent="🎓 Higher Education Jobs";
   tab.addEventListener("click",e=>{e.preventDefault();activate("higher-education-jobs")});
   tabBar.appendChild(tab);
   const p=document.createElement("div");
   p.className="admin-module-panel";
   p.dataset.adminModulePanel="higher-education-jobs";p.hidden=true;
   p.innerHTML=
   '<div class="admin-management-card admin-higher-jobs-card">'+
   '<div class="admin-management-heading"><div><p class="eyebrow">Kenya higher education</p><h3>🎓 Higher Education Jobs</h3><p>Publish jobs for universities, TVET colleges, teacher training colleges, KMTC and technical institutions. These jobs appear only on the Kenya Higher Education Jobs page.</p></div><span class="price-pill">Admin publishing</span></div>'+
   '<form id="adminHigherJobForm" class="admin-form feature-form">'+
   '<div class="form-row"><label>Job Title<input id="hejAdminTitle" required></label><label>Institution<input id="hejAdminInstitution" required></label></div>'+
   '<div class="form-row"><label>Institution Type<select id="hejAdminType" required><option>University</option><option>TVET College</option><option>Teacher Training College</option><option>KMTC</option><option>Technical Institution</option><option>Other Higher Education</option></select></label><label>County<select id="hejAdminCounty" required><option>National</option><option>Nairobi</option><option>Mombasa</option><option>Kisumu</option><option>Kiambu</option><option>Nakuru</option><option>Uasin Gishu</option><option>Kakamega</option><option>Machakos</option><option>Meru</option><option>Nyeri</option><option>Other County</option></select></label></div>'+
   '<div class="form-row"><label>Job / Role Area<input id="hejAdminSubject" placeholder="e.g. Lecturer, ICT, Finance, Laboratory"></label><label>Qualification / Grade<input id="hejAdminLevel" placeholder="e.g. PhD, Master’s, Diploma, CUE Grade 5"></label></div>'+
   '<div class="form-row"><label>Employment Type<input id="hejAdminEmployment" placeholder="Permanent & Pensionable / Contract"></label><label>Salary / Package<input id="hejAdminSalary"></label></div>'+
   '<div class="form-row"><label>Closing Date<input id="hejAdminDeadline" type="date"></label><label>Application Link<input id="hejAdminApplyUrl" type="url" required placeholder="Official application URL"></label></div>'+
   '<label>Description<textarea id="hejAdminDescription" rows="5"></textarea></label>'+
   '<label>Requirements<textarea id="hejAdminRequirements" rows="5"></textarea></label>'+
   '<label><input id="hejAdminFeatured" type="checkbox"> Feature this vacancy</label>'+
   '<div class="actions"><button class="primary-button" type="submit">➕ Publish Higher Education Job</button><button class="secondary-button" type="button" id="hejAdminClear">Clear</button></div>'+
   '<p id="hejAdminStatus" class="form-status"></p></form>'+
   '<div class="admin-management-heading" style="margin-top:18px"><div><h4>Published Higher Education Jobs</h4><p>Edit or remove vacancies from the public board.</p></div></div>'+
   '<div id="adminHigherJobList"></div></div>';
   panel.parentElement.appendChild(p);
   bindHigherJobs();
 }
 async function bindHigherJobs(){
   const form=document.getElementById("adminHigherJobForm"),list=document.getElementById("adminHigherJobList"),status=document.getElementById("hejAdminStatus");
   if(!form)return;
   async function load(){
     try{
       const r=await fetch("/api/vacancies?_="+Date.now(),{credentials:"same-origin",cache:"no-store"}),d=await r.json();
       if(!r.ok||!d.ok)throw new Error(d.error||"Could not load jobs.");
       const rows=(d.vacancies||[]).filter(v=>{const region=String(v.region||"").trim(); const type=String(v.institution_type||v.institutionType||"").trim(); return /^higher\s*education/i.test(region)||/^(university|TVET college|teacher training college|KMTC|technical institution|other higher education)$/i.test(type);});
       list.innerHTML=rows.length?rows.map(v=>'<article style="background:#fff;border:1px solid #dbe5ef;border-radius:10px;padding:12px;margin:8px 0"><strong>'+esc(v.title)+'</strong><div style="color:#64748b;font-size:.84rem;margin:4px 0">'+esc(v.school)+' • '+esc(v.region)+'</div><button type="button" class="secondary-button" data-hej-edit="'+esc(v.id)+'">✏ Edit</button> <button type="button" class="ghost-button" data-hej-delete="'+esc(v.id)+'">Delete</button></article>').join(""):'<p class="help">No higher education jobs published yet.</p>';
     }catch(e){list.innerHTML='<p class="form-status error">'+esc(e.message)+'</p>';}
   }
   function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
   function reset(){form.reset();delete form.dataset.editId;form.querySelector('[type="submit"]').textContent="➕ Publish Higher Education Job";status.textContent="";}
   form.addEventListener("submit",async e=>{
     e.preventDefault();status.textContent="Publishing job…";
     const body={id:form.dataset.editId||undefined,title:document.getElementById("hejAdminTitle").value,school:document.getElementById("hejAdminInstitution").value,country:"Kenya",region:"Higher Education | "+document.getElementById("hejAdminCounty").value+" | "+document.getElementById("hejAdminType").value,subject:document.getElementById("hejAdminSubject").value||"Higher Education",level:document.getElementById("hejAdminLevel").value||"See vacancy",employment:document.getElementById("hejAdminEmployment").value,salary:document.getElementById("hejAdminSalary").value,deadline:document.getElementById("hejAdminDeadline").value,applyUrl:document.getElementById("hejAdminApplyUrl").value,description:document.getElementById("hejAdminDescription").value,requirements:document.getElementById("hejAdminRequirements").value,featured:document.getElementById("hejAdminFeatured").checked};
     try{const r=await fetch("/api/admin/vacancy",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)}),d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Job could not be published.");status.textContent=form.dataset.editId?"✓ Higher education job updated.":"✓ Higher education job published.";reset();await load();}catch(e){status.textContent=e.message||"Job could not be published.";}
   });
   document.getElementById("hejAdminClear").addEventListener("click",reset);
   list.addEventListener("click",async e=>{
     const edit=e.target.closest("[data-hej-edit]"),del=e.target.closest("[data-hej-delete]");
     if(edit){
       try{const r=await fetch("/api/vacancies?_="+Date.now(),{credentials:"same-origin"}),d=await r.json(),v=(d.vacancies||[]).find(x=>String(x.id)===String(edit.dataset.hejEdit));if(!v)return;
         const parts=String(v.region||"").split("|").map(x=>x.trim());
         document.getElementById("hejAdminTitle").value=v.title||"";document.getElementById("hejAdminInstitution").value=v.school||"";document.getElementById("hejAdminCounty").value=parts[1]||"National";document.getElementById("hejAdminType").value=parts[2]||"Other Higher Education";document.getElementById("hejAdminSubject").value=v.subject||"";document.getElementById("hejAdminLevel").value=v.level||"";document.getElementById("hejAdminEmployment").value=v.employment||"";document.getElementById("hejAdminSalary").value=v.salary||"";document.getElementById("hejAdminDeadline").value=v.deadline||"";document.getElementById("hejAdminApplyUrl").value=v.apply_url||"";document.getElementById("hejAdminDescription").value=v.description||"";document.getElementById("hejAdminRequirements").value=v.requirements||"";document.getElementById("hejAdminFeatured").checked=!!v.featured;form.dataset.editId=v.id;form.querySelector('[type="submit"]').textContent="💾 Update Higher Education Job";document.getElementById("hejAdminForm")?.scrollIntoView({behavior:"smooth"});document.getElementById("adminHigherJobForm").scrollIntoView({behavior:"smooth"});}
       catch(_){}
     }
     if(del){
       if(!confirm("Delete this higher education job?"))return;
       const r=await fetch("/api/admin/vacancy-delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:del.dataset.hejDelete})});
       const d=await r.json().catch(()=>({}));if(!r.ok||!d.ok){status.textContent=d.error||"Job could not be deleted.";return;}status.textContent="✓ Job deleted.";load();
     }
   });
   load();
 }
 if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",ready);else ready();
})();