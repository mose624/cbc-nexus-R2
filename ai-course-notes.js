(function(){
function esc(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function init(){
 const p=new URLSearchParams(location.search), slug=p.get("course"), num=Math.max(1,Number(p.get("module")||1)), level=(p.get("level")||"basic").toLowerCase();
 const course=(window.CBENexusAICourses||{})[slug], root=document.getElementById("notesRoot");
 if(!course){root.innerHTML='<div class="empty-note"><h1>Course not found</h1><a class="ai-btn primary" href="ai-training.html">Back to AI Courses</a></div>';return;}
 const m=course.modules[num-1]; if(!m){root.innerHTML='<div class="empty-note"><h1>Module not found</h1><a class="ai-btn primary" href="'+course.page+'">Back to Course</a></div>';return;}
 const notes={basic:m[2],medium:m[3],advanced:m[4]}, label={basic:"Basic",medium:"Intermediate",advanced:"Advanced"}[level]||"Basic";
 const base="ai-course-notes.html?course="+encodeURIComponent(slug)+"&module="+num;
 root.innerHTML='<section class="notes-hero"><p class="eyebrow">MODULE '+num+' • '+esc(course.title)+'</p><h1>'+esc(m[0])+'</h1><p>'+esc(m[1])+'</p><div class="level-tabs"><a class="'+(level==="basic"?"active":"")+'" href="'+base+'&level=basic">Basic</a><a class="'+(level==="medium"?"active":"")+'" href="'+base+'&level=medium">Intermediate</a><a class="'+(level==="advanced"?"active":"")+'" href="'+base+'&level=advanced">Advanced</a></div></section><article class="notes-paper"><div class="notes-badge">'+label+' Notes</div><h2>Training Notes</h2><p>'+esc(notes[level]||notes.basic)+'</p><h3>What to do now</h3><ol><li>Read the note and write one idea you understand.</li><li>Try the concept on a real task.</li><li>Check your result and record one improvement.</li></ol><div class="practice-box"><strong>Practical activity</strong><p>Create one small example using this module. Explain the goal, the AI instruction or workflow, the result and one limitation you noticed.</p></div></article><section id="quiz" class="module-quiz"><div class="quiz-head"><div><p class="eyebrow">AFTER THE TRAINING</p><h2>Module '+num+' Questions</h2><p>Answer all five questions. Your score is shown immediately.</p></div><span class="quiz-score" id="quizScore">0%</span></div><form id="quizForm"></form><button class="ai-btn primary" id="submitQuiz" type="button">Submit Module Quiz</button><p id="quizResult" class="quiz-result" aria-live="polite"></p></section><div class="notes-nav"><a class="ai-btn light" href="'+course.page+'">← Course Modules</a><a class="ai-btn primary" href="'+course.page+'#module'+(num<6?num+1:6)+'">'+(num<6?"Next Module →":"Review Course →")+'</a></div>';
 const qs=[
  {q:"What is the main focus of this module?",a:m[1],w:["A random unrelated topic","Only memorising definitions","A task with no practical use"]},
  {q:"What is the key Basic-level idea?",a:m[2],w:["Skip human checking","Use the most complicated method first","Avoid practising the idea"]},
  {q:"What is expected at Intermediate level?",a:m[3],w:["Never test the result","Use the idea only once","Ignore the audience or task"]},
  {q:"What does Advanced learning emphasise?",a:m[4],w:["Avoid evaluation","Treat every AI answer as correct","Remove all human judgment"]},
  {q:"What should you do after studying this module?",a:"Apply the concept to a small real task, check the result and improve it.",w:["Close the page without practice","Share unverified output immediately","Skip the questions"]}
 ];
 const form=document.getElementById("quizForm");
 form.innerHTML=qs.map(function(x,i){const opts=[x.a].concat(x.w).sort(function(){return Math.random()-.5;});return '<fieldset><legend>'+(i+1)+'. '+esc(x.q)+'</legend>'+opts.map(function(o){return '<label><input type="radio" name="q'+i+'" value="'+esc(o)+'"> '+esc(o)+'</label>';}).join("")+'</fieldset>';}).join("");
 document.getElementById("submitQuiz").addEventListener("click",function(){
  let score=0,missing=false;qs.forEach(function(x,i){const picked=form.querySelector('input[name="q'+i+'"]:checked');if(!picked){missing=true;}else if(picked.value===x.a){score++;}});
  const pct=Math.round(score/qs.length*100), result=document.getElementById("quizResult");document.getElementById("quizScore").textContent=pct+"%";
  if(missing){result.textContent="Please answer every question before submitting.";return;}
  localStorage.setItem("cbe-ai-"+slug+"-module-"+num,""+pct);
  result.textContent="You scored "+score+" / "+qs.length+" ("+pct+"%). "+(pct>=70?"Module passed. Continue to the next module.":"Review the notes and try the quiz again.");
  result.className="quiz-result "+(pct>=70?"pass":"retry");
 });
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();