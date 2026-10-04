(function(){
function esc(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function init(){
 const p=new URLSearchParams(location.search), slug=p.get("course"), num=Math.max(1,Number(p.get("module")||1)), level=(p.get("level")||"basic").toLowerCase();
 const course=(window.CBENexusAICourses||{})[slug], root=document.getElementById("notesRoot");
 if(!course){root.innerHTML='<div class="empty-note"><h1>Course not found</h1><a class="ai-btn primary" href="ai-training.html">Back to AI Courses</a></div>';return;}
 const m=course.modules[num-1]; if(!m){root.innerHTML='<div class="empty-note"><h1>Module not found</h1><a class="ai-btn primary" href="'+course.page+'">Back to Course</a></div>';return;}
 const engine=window.CBENexusAIEnhanced, notes=engine?engine.makeLongNotes(slug,course,m,level):m[level==="basic"?2:level==="medium"?3:4];
 const label={basic:"Basic",medium:"Intermediate",advanced:"Advanced"}[level]||"Basic";
 const base="ai-course-notes.html?course="+encodeURIComponent(slug)+"&module="+num;
 const qs=engine?engine.makeQuestions(slug,course,m):[];
 root.innerHTML='<section class="notes-hero"><p class="eyebrow">MODULE '+num+' • '+esc(course.title)+'</p><h1>'+esc(m[0])+'</h1><p>'+esc(m[1])+'</p><div class="international-badges"><span>🌍 Internationally aligned</span><span>UNESCO AI competencies</span><span>DigComp reference</span><span>Module Assessment</span></div><div class="level-tabs"><a class="'+(level==="basic"?"active":"")+'" href="'+base+'&level=basic">Basic</a><a class="'+(level==="medium"?"active":"")+'" href="'+base+'&level=medium">Intermediate</a><a class="'+(level==="advanced"?"active":"")+'" href="'+base+'&level=advanced">Advanced</a></div></section><article class="notes-paper"><div class="notes-badge">'+label+' Comprehensive Lesson Notes</div><div class="notes-content">'+notes.split(/\n\n+/).map(function(s){const parts=s.split("\n"),head=parts.shift();return '<section><h2>'+esc(head)+'</h2><p>'+esc(parts.join("\n"))+'</p></section>';}).join("")+'</div><div class="practice-box"><strong>🎯 Applied Challenge</strong><p>Complete the real-world situation in these notes. Save your prompt, input, AI output, verification evidence, final decision and reflection. Your evidence should show what you did—not simply what the AI generated.</p></div></article><section id="quiz" class="module-quiz"><div class="quiz-head"><div><p class="eyebrow">MODULE ASSESSMENT</p><h2><span id="quizCount">Module Assessment</span></h2><p>Choose the best answer. Pass mark: 70%.</p></div><span class="quiz-score" id="quizScore">0%</span></div><form id="quizForm"></form><button class="ai-btn primary" id="submitQuiz" type="button">Submit Assessment</button><p id="quizResult" class="quiz-result" aria-live="polite"></p></section><div class="notes-nav"><a class="ai-btn light" href="'+course.page+'">← Course Modules</a><a class="ai-btn primary" href="'+course.page+'#module'+(num<6?num+1:6)+'">'+(num<6?"Next Module →":"Review Course →")+'</a></div>';
 const form=document.getElementById("quizForm");
 form.innerHTML=qs.map(function(x,i){
   const opts=[x.a].concat(x.w).sort(function(){return Math.random()-.5;});
   return '<fieldset><legend>'+((i+1)+". "+esc(x.q))+'</legend>'+opts.map(function(o){return '<label><input type="radio" name="q'+i+'" value="'+esc(o)+'"> '+esc(o)+'</label>';}).join("");
 }).join("");
 document.getElementById("submitQuiz").addEventListener("click",function(){
   let score=0,missing=false;
   qs.forEach(function(x,i){const picked=form.querySelector('input[name="q'+i+'"]:checked');if(!picked){missing=true;}else if(picked.value===x.a){score++;}});
   const pct=Math.round(score/qs.length*100),result=document.getElementById("quizResult");
   document.getElementById("quizScore").textContent=pct+"%";
   if(missing){result.textContent="Please answer all questions before submitting.";result.className="quiz-result retry";return;}
   localStorage.setItem("cbe-ai-"+slug+"-module-"+num,""+pct);
   result.textContent="You scored "+score+" / "+qs.length+" ("+pct+"%). "+(pct>=70?"Module passed. Continue to the next module.":"Module not yet passed. Review the lesson, repeat the applied challenge and retry.");
   result.className="quiz-result "+(pct>=70?"pass":"retry");
   window.scrollTo({top:document.getElementById("quiz").offsetTop-80,behavior:"smooth"});
 });
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();