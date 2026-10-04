(function(){
function esc(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function init(){
 const slug=document.body.dataset.aiCourse, course=(window.CBENexusAICourses||{})[slug];
 const hero=document.getElementById("courseHero"), list=document.getElementById("moduleList");
 if(!course){hero.innerHTML="<p>Course not found.</p>";return;}
 hero.innerHTML='<div class="course-hero-copy"><p class="eyebrow">CBE NEXUS AI ACADEMY • SELF-PACED</p><h1>'+esc(course.title)+'</h1><p>'+esc(course.description)+'</p><div class="course-meta"><span>'+esc(course.duration)+'</span><span>'+esc(course.level)+'</span><span>Comprehensive Notes</span><span>Practical Labs</span><span>Module Assessments</span><span>Final Assessment + Project</span></div><div class="hero-actions"><a class="ai-btn light" href="ai-training.html">← All Courses</a><a class="ai-btn outline" href="ai-final-assessment.html?course='+encodeURIComponent(slug)+'">Final Assessment</a></div></div><div class="course-hero-stat"><strong>6</strong><span>Learning Modules</span><small>Basic → Intermediate → Advanced</small></div>';
 list.innerHTML=course.modules.map(function(m,i){
  const n=i+1, base="ai-course-notes.html?course="+encodeURIComponent(slug)+"&module="+n;
  return '<article class="module-card"><div class="module-number">MODULE '+String(n).padStart(2,"0")+'</div><h2>'+esc(m[0])+'</h2><p class="module-focus">'+esc(m[1])+'</p><div class="level-grid"><a class="level basic" href="'+base+'&level=basic"><strong>Basic</strong><span>Concepts & foundations</span></a><a class="level medium" href="'+base+'&level=medium"><strong>Intermediate</strong><span>Application & examples</span></a><a class="level advanced" href="'+base+'&level=advanced"><strong>Advanced</strong><span>Professional practice</span></a></div><div class="module-action"><a class="ai-btn primary" href="'+base+'&level=basic">Start Module '+n+'</a><a class="quiz-link" href="'+base+'#quiz">📝 Module Assessment</a></div></article>';
 }).join("");
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();