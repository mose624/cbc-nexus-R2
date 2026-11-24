(function(){
function esc(v){return String(v??"").replace(/[&<>"']/g,function(c){return({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]);});}
function renderNotes(value){if(window.CBENotesRenderer&&typeof window.CBENotesRenderer.render==="function")return window.CBENotesRenderer.render(value);return String(value||"").split(/\n\n+/).map(function(block){return "<p>"+esc(block).replace(/\n/g,"<br>")+"</p>";}).join("");}
function init(){
 const root=document.getElementById("notesRoot");
 if(root)root.innerHTML='<div class="empty-note"><p>Loading your lesson notes…</p></div>';
 try {
 const p=new URLSearchParams(location.search), slug=p.get("course"), num=Math.max(1,Number(p.get("module")||1)), level=(p.get("level")||"basic").toLowerCase();
 const course=(window.CBENexusAICourses||{})[slug];
 if(!course){root.innerHTML='<div class="empty-note"><h1>Course not found</h1><a class="ai-btn primary" href="ai-training.html">Back to AI Courses</a></div>';return;}
 const m=course.modules[num-1]; if(!m){root.innerHTML='<div class="empty-note"><h1>Module not found</h1><a class="ai-btn primary" href="'+course.page+'">Back to Course</a></div>';return;}
 const engine=window.CBENexusAIEnhanced; let fallbackNotes; try{fallbackNotes=engine&&typeof engine.makeLongNotes==="function"?engine.makeLongNotes(slug,course,m,level):m[level==="basic"?2:level==="medium"?3:4];}catch(e){console.error("AI lesson notes generator failed:",e);fallbackNotes=m[level==="basic"?2:level==="medium"?3:4]||m[1]||m[0];}
 const label={basic:"Basic",medium:"Intermediate",advanced:"Advanced"}[level]||"Basic";
 const visual=course.visuals&&course.visuals[num-1];
 const base="ai-course-notes.html?course="+encodeURIComponent(slug)+"&module="+num;
 let qs=[]; try{qs=engine&&typeof engine.makeQuestions==="function"?engine.makeQuestions(slug,course,m):[];}catch(e){console.error("AI module assessment generator failed:",e);}
 fetch("/api/ai/course-notes?course="+encodeURIComponent(slug)+"&module="+num+"&level="+encodeURIComponent(level)+"&_="+Date.now(),{cache:"no-store"}).then(r=>r.ok?r.json():null).then(d=>{if(d&&d.ok&&d.notes&&d.notes.pdfUrl){const paper=document.querySelector(".notes-content");if(paper){paper.insertAdjacentHTML("beforebegin",'<div style="background:#fffbeb;border:2px solid #facc15;border-radius:14px;padding:14px;margin-bottom:18px"><strong>📄 Official PDF Notes</strong><p style="margin:6px 0">Download or open the administrator-uploaded PDF for this module.</p><a class="ai-btn primary" href="'+esc(d.notes.pdfUrl)+'" target="_blank" rel="noopener">Open PDF Notes ↗</a></div>');}}if(d&&d.ok&&d.notes&&d.notes.content&&!course.priorityAdvancedNotes&&slug!=="ai-foundations"&&slug!=="prompt-engineering"&&slug!=="ai-for-teachers"){const paper=document.querySelector(".notes-content");if(paper){paper.innerHTML=renderNotes(d.notes.content);}}}).catch(function(){});
 root.innerHTML='<section class="notes-hero"><p class="eyebrow">MODULE '+num+' • '+esc(course.title)+'</p><h1>'+esc(m[0])+'</h1><p>'+esc(m[1])+'</p><div class="international-badges"><span>🌍 Internationally aligned</span><span>UNESCO AI competencies</span><span>DigComp reference</span><span>Module Assessment</span></div><div class="level-tabs"><a class="'+(level==="basic"?"active":"")+'" href="'+base+'&level=basic">Basic</a><a class="'+(level==="medium"?"active":"")+'" href="'+base+'&level=medium">Intermediate</a><a class="'+(level==="advanced"?"active":"")+'" href="'+base+'&level=advanced">Advanced</a></div></section><article class="notes-paper"><div class="notes-badge">'+label+' Comprehensive Lesson Notes</div>'+(visual?'<figure class="ai-lesson-visual"><img src="'+esc(visual.src)+'" alt="'+esc(visual.alt)+'" loading="lazy" decoding="async"><figcaption>'+esc(visual.caption)+'</figcaption></figure>':'')+'<div class="notes-content">'+renderNotes(fallbackNotes)+'</div><div class="practice-box"><strong>🎯 Applied Challenge</strong><p>Complete the real-world situation in these notes. Save your prompt, input, AI output, verification evidence, final decision and reflection. Your evidence should show what you did—not simply what the AI generated.</p></div></article><section id="quiz" class="module-quiz"><div class="quiz-head"><div><p class="eyebrow">MODULE ASSESSMENT</p><h2><span id="quizCount">Module Assessment</span></h2><p id="quizDescription">Answer every question below. Select one option per question. Pass mark: 70%.</p></div><span class="quiz-score" id="quizScore">0%</span></div><form id="quizForm"></form><button class="ai-btn primary" id="submitQuiz" type="button">Submit Assessment</button><p id="quizResult" class="quiz-result" aria-live="polite"></p></section><div class="notes-nav"><a class="ai-btn light" href="'+course.page+'">← Course Modules</a><a class="ai-btn primary" href="'+course.page+'#module'+(num<6?num+1:6)+'">'+(num<6?"Next Module →":"Review Course →")+'</a></div>';
 const form=document.getElementById("quizForm");
 document.getElementById("quizCount").textContent="Module Assessment · "+qs.length+" Questions";
 form.className="module-assessment-questions";
 form.innerHTML=qs.map(function(x,i){
   const opts=[x.a].concat(x.w).sort(function(){return Math.random()-.5;});
   return '<fieldset class="module-assessment-question" id="module-question-'+(i+1)+'"><legend><span class="module-question-number">'+String(i+1).padStart(2,"0")+'</span><span class="module-question-copy"><span class="module-question-kicker">QUESTION '+(i+1)+' OF '+qs.length+'</span><span class="module-question-text">'+esc(x.q)+'</span></span></legend><div class="module-answer-grid">'+opts.map(function(o,j){const letter=String.fromCharCode(65+j);return '<label class="module-answer-option"><input type="radio" name="q'+i+'" value="'+esc(o)+'"><span class="module-answer-letter">'+letter+'</span><span class="module-answer-text">'+esc(o)+'</span></label>';}).join("")+'</div></fieldset>';
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
 }catch(error){console.error("AI lesson page failed to render:",error);if(root)root.innerHTML='<section class="notes-paper"><h1>Lesson notes are temporarily unavailable</h1><p>The lesson page encountered a loading error. Please reload this page. The issue has been logged for diagnosis.</p><a class="ai-btn primary" href="ai-training.html">Return to AI Academy</a></section>';}
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);else init();
})();