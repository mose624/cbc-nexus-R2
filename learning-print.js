(function(){
  "use strict";
  if(window.__cbeLearningPrintReady)return;
  window.__cbeLearningPrintReady=true;
  function boot(){
    var tag=document.currentScript;
    var targetSelector=(tag&&tag.getAttribute("data-print-target"))||"#reader";
    var targets=targetSelector.split(",").map(function(s){return s.trim()}).filter(Boolean);
    var anchor=null;
    for(var i=0;i<targets.length;i++){anchor=document.querySelector(targets[i]);if(anchor)break;}
    if(!anchor)return;
    var button=document.createElement("button");
    button.type="button";
    button.className="cbe-learning-print-btn";
    button.innerHTML='<span aria-hidden="true">🖨</span> Print / Save as PDF';
    button.setAttribute("aria-label","Print learning material or save as PDF");
    var toolbar=document.createElement("div");
    toolbar.className="cbe-learning-print-toolbar";
    toolbar.appendChild(button);
    if(anchor.id==="reader"){
      anchor.parentNode.insertBefore(toolbar,anchor);
    }else{
      var section=anchor.closest("#quizCentre")||anchor.parentNode;
      section.insertBefore(toolbar,section.firstChild);
    }
    button.addEventListener("click",function(){
      var old=document.getElementById("cbe-learning-print-root");
      if(old)old.remove();
      var root=document.createElement("div");
      root.id="cbe-learning-print-root";
      var heading=document.createElement("h1");
      heading.textContent=(document.querySelector("h1")&&document.querySelector("h1").textContent.trim())||"CBE Nexus Learning Material";
      root.appendChild(heading);
      var meta=document.createElement("p");
      meta.className="cbe-print-meta";
      var bits=[];
      ["#country","#curriculum","#level","#subject","#iqCountry","#iqCurriculum","#iqLevel","#quizCountryInput","#quizCurriculumInput","#quizGradeInput","#quizSubjectInput"].forEach(function(sel){
        var el=document.querySelector(sel);
        if(el&&el.value&&el.value.trim())bits.push(el.value.trim());
      });
      meta.textContent=bits.join(" • ");
      if(meta.textContent)root.appendChild(meta);
      var found=false;
      targets.forEach(function(sel){
        document.querySelectorAll(sel).forEach(function(node){
          if(!node||node.closest("#cbe-learning-print-root"))return;
          var clone=node.cloneNode(true);
          clone.querySelectorAll("button, input, select, textarea, .no-print, [data-no-print]").forEach(function(el){el.remove()});
          clone.querySelectorAll("details").forEach(function(d){d.open=true});
          root.appendChild(clone);found=true;
        });
      });
      if(!found){window.print();return;}
      document.body.appendChild(root);
      var cleanup=function(){root.remove();window.removeEventListener("afterprint",cleanup)};
      window.addEventListener("afterprint",cleanup);
      window.print();
      setTimeout(cleanup,1200);
    });
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();