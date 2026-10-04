(function(){
function esc(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function init(){
 const slug=document.body.dataset.aiCourse, course=(window.CBENexusAICourses||{})[slug];
 const hero=document.getElementById("courseHero"), list=document.getElementById("moduleList");
 if(!course){hero.innerHTML="<p>Course not found.</p>";return;}
 hero.innerHTML='<div class="course-hero-copy"><p class="eyebrow">FREE AI COURSE</p><h1>'+esc(course.title)+'</h1><p>'+esc(course.description)+'</p><div class="course-meta"><span>'+esc(course.duration)+'</span><span>'+esc(course.level)+'</span><span>Notes + Practice + Quiz</span></div><a class="ai-btn light" href="ai-training.html">← All Courses</a></div><div class="course-hero-stat"><strong>6</strong><span>Modules</span><small>3 learning levels in every module</small></div>';
 list.innerHTML=course.modules.map(function(m,i){
  const n=i+1, base="ai-course-notes.html?course="+encodeURIComponent(slug)+"&module="+n;
  return '<article class="module-card"><div class="module-number">MODULE '+n+'</div><h2>'+esc(m[0])+'</h2><p class="module-focus">'+esc(m[1])+'</p><div class="level-grid"><a class="level basic" href="'+base+'&level=basic"><strong>Basic Notes</strong><span>Start here</span></a><a class="level medium" href="'+base+'&level=medium"><strong>Intermediate Notes</strong><span>Apply it</span></a><a class="level advanced" href="'+base+'&level=advanced"><strong>Advanced Notes</strong><span>Go deeper</span></a></div><div class="module-action"><a class="ai-btn primary" href="'+base+'&level=basic">Open Training</a><a class="quiz-link" href="'+base+'#quiz">📝 Questions after Module '+n+'</a></div></article>';
 }).join("");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();