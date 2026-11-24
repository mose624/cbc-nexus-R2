(function(){
function e(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function addCourseListSchema(base){
 var items=Object.keys(base).map(function(k,i){var c=base[k];return {"@type":"ListItem","position":i+1,"item":{"@type":"Course","name":c.title,"description":c.description||c.short,"url":"https://cbenexus.com/"+c.page,"provider":{"@type":"EducationalOrganization","name":"CBE Nexus","url":"https://cbenexus.com/"}}};});
 var node=document.getElementById("ai-course-list-jsonld");if(!node){node=document.createElement("script");node.type="application/ld+json";node.id="ai-course-list-jsonld";document.head.appendChild(node);}
 node.textContent=JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"44 Free AI and Digital Skills Courses — CBE Nexus AI Academy","description":"A catalogue of free self-paced courses in artificial intelligence, prompt engineering, education, productivity and applied digital skills.","numberOfItems":items.length,"itemListElement":items});
}
function renderCourses(dynamic){
 var g=document.getElementById("courseGrid");if(!g)return;var base=window.CBENexusAICourses||{};
 var cards=Object.keys(base).map(function(k){var c=base[k];return '<article class="course-card"><div class="course-icon" aria-hidden="true">AI</div><p class="eyebrow">FREE COURSE</p><h3>'+e(c.title)+'</h3><p>'+e(c.short||c.description)+'</p><div class="course-tags"><span>6 Modules</span><span>3 Levels</span><span>Module quizzes</span></div><a class="ai-btn primary" href="'+e(c.page)+'" aria-label="Explore '+e(c.title)+' free course">Explore Course →</a></article>';});
 (dynamic||[]).forEach(function(c){cards.push('<article class="course-card"><div class="course-icon" aria-hidden="true">AI</div><p class="eyebrow">FREE COURSE'+(c.featured?' • FEATURED':'')+'</p><h3>'+e(c.title)+'</h3><p>'+e(c.short||c.description||"")+'</p><div class="course-tags"><span>'+e(c.level||"Beginner")+'</span>'+(c.duration?'<span>'+e(c.duration)+'</span>':"")+(c.provider?'<span>'+e(c.provider)+'</span>':"")+'</div><a class="ai-btn primary" href="'+e(c.course_url)+'" target="_blank" rel="noopener noreferrer">Explore Free Course →</a></article>');});
 g.innerHTML=cards.join("");addCourseListSchema(base);
}
async function refresh(){try{var r=await fetch("/api/ai-courses?_="+Date.now(),{cache:"no-store"});var d=await r.json();renderCourses(r.ok&&d.ok?d.courses:[]);}catch(e){renderCourses([]);}}
window.refreshPublicAICourses=refresh;
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",refresh);else refresh();
})();