(function(){
  const q=id=>document.getElementById(id);
  const esc=v=>String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]));
  let courses=[];
  function resetForm(){q("adminAICourseForm")?.reset();if(q("aiCourseIdInput"))q("aiCourseIdInput").value="";if(q("saveAICourseButton"))q("saveAICourseButton").textContent="➕ Publish Course";if(q("adminAICourseStatus"))q("adminAICourseStatus").textContent="";}
  function render(){
    const host=q("adminAICourseList");if(!host)return;
    const summary=q("adminAICourseSummary");
    const published=courses.filter(x=>x.status==="published").length;
    if(summary)summary.textContent=courses.length+" total · "+published+" published";
    if(!courses.length){host.innerHTML='<div class="admin-management-card"><strong>No courses added yet.</strong><p>Add your first free AI course above.</p></div>';return;}
    host.innerHTML=courses.map(x=>{
      const status=x.status==="published"?"✓ PUBLISHED":"● DRAFT";
      return '<article class="admin-management-card">'+
        '<div class="admin-management-heading"><div><span class="eyebrow">'+esc(x.category||"AI Course")+'</span><h4>'+esc(x.title)+'</h4><p>'+esc(x.provider||"")+' · '+esc(x.level||"")+(x.duration?" · "+esc(x.duration):"")+'</p></div><span class="price-pill">'+status+'</span></div>'+
        '<p>'+esc(x.short||"")+'</p>'+
        '<div class="admin-resource-moderation-actions">'+
        '<button class="primary-button" type="button" data-ai-edit="'+esc(x.id)+'">✏ Edit</button>'+
        '<button class="secondary-button" type="button" data-ai-copy="'+esc(x.id)+'">📋 Copy & Share</button>'+
        '<a class="secondary-button" href="'+esc(x.course_url)+'" target="_blank" rel="noopener">Open Course</a>'+
        '<button class="danger-button" type="button" data-ai-delete="'+esc(x.id)+'">🗑 Delete</button>'+
        '</div></article>';
    }).join("");
  }
  async function load(){
    const host=q("adminAICourseList");if(!host)return;
    try{
      const r=await fetch("/api/admin/ai-courses?_="+Date.now(),{credentials:"same-origin",cache:"no-store"});
      if(r.status===401){host.innerHTML='<p class="form-status">Admin login required.</p>';return;}
      const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Courses could not be loaded.");
      courses=d.courses||[];render();
    }catch(e){host.innerHTML='<p class="form-status error">'+esc(e.message)+'</p>';}
  }
  async function init(){
    const form=q("adminAICourseForm");if(!form)return;
    try{const r=await fetch("/api/admin/me",{credentials:"same-origin"});const d=await r.json();if(!r.ok||!d.authenticated){form.closest(".admin-ai-courses-card")?.remove();return;}}catch{form.closest(".admin-ai-courses-card")?.remove();return;}
    await load();
    form.addEventListener("submit",async e=>{
      e.preventDefault();
      const id=q("aiCourseIdInput").value.trim();
      const status=q("adminAICourseStatus");
      status.textContent=id?"Updating course…":"Publishing course…";
      const body={id:id||undefined,title:q("aiCourseTitleInput").value,provider:q("aiCourseProviderInput").value,category:q("aiCourseCategoryInput").value,level:q("aiCourseLevelInput").value,duration:q("aiCourseDurationInput").value,courseUrl:q("aiCourseUrlInput").value,short:q("aiCourseShortInput").value,description:q("aiCourseDescriptionInput").value,featured:q("aiCourseFeaturedInput").checked,status:"published"};
      try{
        const r=await fetch("/api/admin/ai-course",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});
        const d=await r.json();if(!r.ok||!d.ok)throw new Error(d.error||"Course could not be saved.");
        status.textContent=id?"✓ Course updated successfully.":"✓ Course published successfully.";
        resetForm();await load();
        if(window.refreshPublicAICourses)window.refreshPublicAICourses();
      }catch(err){status.textContent=err.message||"Course could not be saved.";}
    });
    q("clearAICourseButton")?.addEventListener("click",resetForm);
    q("adminAICourseList")?.addEventListener("click",async e=>{
      const edit=e.target.closest("[data-ai-edit]"),copy=e.target.closest("[data-ai-copy]"),del=e.target.closest("[data-ai-delete]");
      const item=courses.find(x=>String(x.id)===String((edit||copy||del)?.dataset.aiEdit||(edit||copy||del)?.dataset.aiCopy||(edit||copy||del)?.dataset.aiDelete));
      if(edit&&item){
        q("aiCourseIdInput").value=item.id;q("aiCourseTitleInput").value=item.title||"";q("aiCourseProviderInput").value=item.provider||"";q("aiCourseCategoryInput").value=item.category||"";q("aiCourseLevelInput").value=item.level||"Beginner";q("aiCourseDurationInput").value=item.duration||"";q("aiCourseUrlInput").value=item.course_url||"";q("aiCourseShortInput").value=item.short||"";q("aiCourseDescriptionInput").value=item.description||"";q("aiCourseFeaturedInput").checked=!!item.featured;q("saveAICourseButton").textContent="💾 Update Course";q("adminAICourseStatus").textContent="Editing "+item.title;form.scrollIntoView({behavior:"smooth",block:"start"});return;
      }
      if(copy&&item){
        const share=location.origin+location.pathname.replace(/index\.html?$/,"")+"ai-training.html#course-"+encodeURIComponent(item.slug||item.id);
        const text="🤖 Free AI Course: "+item.title+"\n"+(item.short||"")+(item.provider?"\nProvider: "+item.provider:"")+"\n\nLearn free: "+share;
        try{await navigator.clipboard.writeText(text);q("adminAICourseStatus").textContent="✓ Course details copied. Paste into WhatsApp, Facebook or any message.";}catch{window.prompt("Copy this course post:",text);}
        return;
      }
      if(del&&item){
        if(!confirm("Delete this AI course?"))return;
        const r=await fetch("/api/admin/ai-course-delete",{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:item.id})});
        const d=await r.json();if(!r.ok||!d.ok){q("adminAICourseStatus").textContent=d.error||"Could not delete course.";return;}
        await load();if(window.refreshPublicAICourses)window.refreshPublicAICourses();
      }
    });
    const observer=new MutationObserver(()=>{if(document.body.classList.contains("admin-unlocked"))load();});
    observer.observe(document.body,{attributes:true,attributeFilter:["class"]});
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();