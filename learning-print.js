(function(){
"use strict";
if(window.__cbeLearningPrintReady)return;window.__cbeLearningPrintReady=true;
var style=document.createElement("style");
style.textContent=".cbe-learning-print-toolbar{display:flex;justify-content:flex-end;margin:10px 0}.cbe-learning-print-btn{display:inline-flex;align-items:center;gap:8px;border:0;border-radius:9px;background:#0879bd;color:#fff;padding:10px 15px;font:800 14px Arial,sans-serif;cursor:pointer;box-shadow:0 3px 10px #0b477522}.cbe-learning-print-btn:hover{background:#075b91}.cbe-learning-print-btn:focus-visible{outline:3px solid #f2c94c;outline-offset:3px}#cbe-learning-print-root{display:none}@media print{@page{size:A4;margin:16mm}body>*:not(#cbe-learning-print-root){display:none!important}#cbe-learning-print-root{display:block!important;color:#111;background:#fff;font:11pt/1.5 Arial,sans-serif}#cbe-learning-print-root h1{font-size:20pt;color:#12345b;border-bottom:2px solid #12345b;padding-bottom:8px}#cbe-learning-print-root h2{font-size:16pt;color:#12345b}#cbe-learning-print-root h3{font-size:13pt;color:#194c73}#cbe-learning-print-root p,#cbe-learning-print-root li{orphans:3;widows:3}#cbe-learning-print-root img,#cbe-learning-print-root svg{max-width:100%!important;height:auto!important;max-height:240mm!important;object-fit:contain;break-inside:avoid}#cbe-learning-print-root table{width:100%!important;border-collapse:collapse!important;font-size:9pt}#cbe-learning-print-root th,#cbe-learning-print-root td{border:1px solid #777!important;padding:5px!important;color:#111!important;background:#fff!important}#cbe-learning-print-root details{display:block}#cbe-learning-print-root details>*{display:block!important}#cbe-learning-print-root .diagram,#cbe-learning-print-root .note-diagram,#cbe-learning-print-root .explained-diagram,#cbe-learning-print-root .worked-exam-card,#cbe-learning-print-root .textbook-section{break-inside:avoid;box-shadow:none!important;print-color-adjust:exact;-webkit-print-color-adjust:exact}#cbe-learning-print-root a{color:#111;text-decoration:none}#cbe-learning-print-root .cbe-print-meta{font-size:9pt;color:#444;margin:0 0 14px}}";
document.head.appendChild(style);
function printNode(node){
var old=document.getElementById("cbe-learning-print-root");if(old)old.remove();
var root=document.createElement("div");root.id="cbe-learning-print-root";
var heading=document.createElement("h1");var local=node.querySelector("h1,h2,h3");heading.textContent=(local&&local.textContent.trim())||(document.querySelector("h1")&&document.querySelector("h1").textContent.trim())||"CBE Nexus Learning Material";root.appendChild(heading);
var meta=document.createElement("p");meta.className="cbe-print-meta";var bits=[];
["#country","#curriculum","#level","#subject","#iqCountry","#iqCurriculum","#iqLevel","#quizCountryInput","#quizCurriculumInput","#quizGradeInput","#quizSubjectInput"].forEach(function(sel){var el=document.querySelector(sel);if(el&&el.value&&el.value.trim())bits.push(el.value.trim())});
meta.textContent=bits.join(" • ");if(meta.textContent)root.appendChild(meta);
var clone=node.cloneNode(true);clone.querySelectorAll("button,input,select,textarea,.no-print,[data-no-print],.cbe-learning-print-toolbar").forEach(function(el){el.remove()});clone.querySelectorAll("details").forEach(function(d){d.open=true});root.appendChild(clone);document.body.appendChild(root);
var cleanup=function(){root.remove();window.removeEventListener("afterprint",cleanup)};window.addEventListener("afterprint",cleanup);window.print();setTimeout(cleanup,1500);
}
function boot(){
var tag=document.querySelector('script[src*="learning-print.js"]');var selectors=((tag&&tag.getAttribute("data-print-target"))||"#reader").split(",").map(function(s){return s.trim()}).filter(Boolean);
var nodes=[];selectors.forEach(function(sel){try{document.querySelectorAll(sel).forEach(function(n){if(nodes.indexOf(n)<0)nodes.push(n)})}catch(e){}});
nodes.forEach(function(node){if(node.dataset.cbePrintReady==="1")return;node.dataset.cbePrintReady="1";
var toolbar=document.createElement("div");toolbar.className="cbe-learning-print-toolbar no-print";var button=document.createElement("button");button.type="button";button.className="cbe-learning-print-btn";button.innerHTML='<span aria-hidden="true">🖨</span> Print / Save as PDF';button.setAttribute("aria-label","Print this chapter, question set or examination paper");toolbar.appendChild(button);
node.parentNode.insertBefore(toolbar,node);button.addEventListener("click",function(){printNode(node)});
});
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();