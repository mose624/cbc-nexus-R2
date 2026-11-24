/* CBE Nexus AI Academy — concept-specific diagrams for AI Foundations.
   SVGs are generated locally, carry accessible labels, and require no external image service. */
(function(){
  "use strict";
  const course=(window.CBENexusAICourses||{})["ai-foundations"];
  if(!course||!Array.isArray(course.modules))return;
  const concepts=[
    {title:"An AI system: from input to accountable output",steps:[["INPUT","A question, image or dataset"],["MODEL","Rules or learned patterns"],["OUTPUT","A prediction or generated response"],["HUMAN CHECK","Verify, decide and take responsibility"]]},
    {title:"How a machine-learning model is developed",steps:[["COLLECT","Relevant, lawful data"],["PREPARE","Clean, label and split"],["TRAIN","Learn patterns from examples"],["EVALUATE","Test on unseen data before use"]]},
    {title:"How a large language model responds",steps:[["PROMPT","Task, context and constraints"],["TOKENS","Text is represented as tokens"],["MODEL","Context conditions next-token generation"],["REVIEW","Check facts, sources and suitability"]]},
    {title:"A responsible everyday AI workflow",steps:[["DEFINE","Identify the real task"],["SELECT","Choose a suitable tool"],["ASSIST","Generate or transform material"],["VERIFY","Edit, validate and approve"]]},
    {title:"Critical evaluation of AI output",steps:[["CLAIM","Identify the important statement"],["EVIDENCE","Find reliable supporting sources"],["CROSS-CHECK","Compare independent evidence"],["DECIDE","Accept, correct or reject"]]},
    {title:"A practical AI project lifecycle",steps:[["PROBLEM","Define user need and scope"],["DESIGN","Map people, data and risks"],["PROTOTYPE","Build with approved or synthetic data"],["TEST","Evaluate, document and improve"]]}
  ];
  function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));}
  function make(item,index){
    const width=960,height=410,cardW=210,gap=24,start=22,y=142;
    const colors=["#eaf2ff","#e8f7ef","#fff4df","#fcecf3"],accents=["#2857a4","#187348","#93620b","#a13b68"];
    const cards=item.steps.map((step,i)=>{
      const x=start+i*(cardW+gap);
      return '<rect x="'+x+'" y="'+y+'" width="'+cardW+'" height="178" rx="18" fill="'+colors[i]+'" stroke="'+accents[i]+'" stroke-opacity=".42" stroke-width="2"/>'+
        '<circle cx="'+(x+27)+'" cy="'+(y+28)+'" r="17" fill="'+accents[i]+'"/>'+
        '<text x="'+(x+27)+'" y="'+(y+34)+'" text-anchor="middle" font-family="Arial,sans-serif" font-size="15" font-weight="700" fill="#fff">'+(i+1)+'</text>'+
        '<text x="'+(x+18)+'" y="'+(y+75)+'" font-family="Arial,sans-serif" font-size="16" font-weight="700" fill="'+accents[i]+'">'+esc(step[0])+'</text>'+
        '<foreignObject x="'+(x+16)+'" y="'+(y+90)+'" width="'+(cardW-32)+'" height="72"><div xmlns="http://www.w3.org/1999/xhtml" style="font:14px/1.45 Arial,sans-serif;color:#26364b">'+esc(step[1])+'</div></foreignObject>'+
        (i<3?'<path d="M'+(x+cardW+5)+' 230 h14 m-6 -6 l6 6 -6 6" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>':'');
    }).join("");
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'" viewBox="0 0 '+width+' '+height+'" role="img" aria-labelledby="diagram-title diagram-desc">'+
      '<title id="diagram-title">'+esc(item.title)+'</title><desc id="diagram-desc">Four connected stages: '+item.steps.map(s=>esc(s[0])).join(", ")+'.</desc>'+
      '<rect width="960" height="410" rx="24" fill="#f7faff"/>'+
      '<text x="28" y="42" font-family="Arial,sans-serif" font-size="15" font-weight="700" letter-spacing="1.4" fill="#2857a4">CBE NEXUS AI ACADEMY • AI FOUNDATIONS • MODULE '+(index+1)+'</text>'+
      '<text x="28" y="88" font-family="Arial,sans-serif" font-size="25" font-weight="700" fill="#122c4a">'+esc(item.title)+'</text>'+
      '<path d="M28 108 H932" stroke="#d9e3ef" stroke-width="2"/>'+cards+
      '<text x="28" y="365" font-family="Arial,sans-serif" font-size="14" fill="#52657c">Use this model to explain the process, identify checks and discuss limitations.</text></svg>';
    return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
  }
  course.visuals=course.visuals||[];
  concepts.forEach((item,index)=>{
    course.visuals[index]={src:make(item,index),alt:item.title+". Four stages: "+item.steps.map(s=>s[0]+": "+s[1]).join("; "),caption:item.title+" — "+item.steps.map(s=>s[0]).join(" → ")};
  });
})();