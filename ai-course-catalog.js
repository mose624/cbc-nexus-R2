(function(){
function e(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function renderCourses(dynamic){
  var g=document.getElementById("courseGrid");if(!g)return;
  var base=window.CBENexusAICourses||{};
  var cards=Object.keys(base).map(function(k){var c=base[k];return '<article class="course-card"><div class="course-icon">AI</div><p class="eyebrow">FREE COURSE</p><h3>'+e(c.title)+'</h3><p>'+e(c.short)+'</p><div class="course-tags"><span>6 Modules</span><span>3 Levels</span><span>Quiz after training</span></div><a class="ai-btn primary" href="'+e(c.page)+'">Open Course →</a></article>';});
  (dynamic||[]).forEach(function(c){cards.push('<article class="course-card"><div class="course-icon">AI</div><p class="eyebrow">FREE COURSE'+(c.featured?' • FEATURED':'')+'</p><h3>'+e(c.title)+'</h3><p>'+e(c.short||c.description||"")+'</p><div class="course-tags"><span>'+e(c.level||"Beginner")+'</span>'+(c.duration?'<span>'+e(c.duration)+'</span>':"")+(c.provider?'<span>'+e(c.provider)+'</span>':"")+'</div><a class="ai-btn primary" href="'+e(c.course_url)+'" target="_blank" rel="noopener noreferrer">Open Free Course →</a></article>');});
  g.innerHTML=cards.join("");
}
async function refresh(){
  try{var r=await fetch("/api/ai-courses?_="+Date.now(),{cache:"no-store"});var d=await r.json();renderCourses(r.ok&&d.ok?d.courses:[]);}
  catch(e){renderCourses([]);}
}
window.refreshPublicAICourses=refresh;
function run(){refresh();}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",run);else run();
})();