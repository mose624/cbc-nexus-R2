/* CBE Nexus AI Academy — readable, course-specific 2x2 learning diagrams. */
(function(){
 const A=window.CBENexusAICourses||{};
 const stages={
 "chatgpt-mastery":[["Goal + context","Prompt design","Research","Data analysis","Reusable workflow","Capstone"],["Define task and audience","Set constraints and format","Trace claims to sources","Inspect, calculate, validate","Separate instructions from knowledge","Measure against a baseline"]],
 "gemini-mastery":[["Multimodal input","Research","Visual analysis","Productivity","Creative work","Project"],["Identify text, image or file","Extract and compare evidence","Read labels, axes and units","Draft, then review actions","Generate and critique against brief","Combine inputs and test alignment"]],
 "ai-agents":[["Agent loop","Tool contract","State + memory","Agent safety","Multi-agent","Evaluation"],["Goal, plan, act and observe","Schema, permission and validation","Track progress and stop safely","Threat model and approval gates","Define roles and reconcile outputs","Test failure cases and monitor"]],
 "generative-ai":[["Generation","Text workflow","Image workflow","Audio + video","Multimodal","Publishing"],["Prompt, model and output","Brief, draft and fact-check","Generate then inspect details","Script, storyboard and caption","Align each modality with evidence","Review rights and disclose"]],
 "ai-automation":[["Workflow","API + webhook","AI step","Data protection","Reliability","Production"],["Trigger, validate and act","Authenticate and validate payloads","Classify, check and route","Minimise, secure and retain","Retry safely and reconcile","Test, monitor and roll back"]]
 };
 const fills=["#e8f1ff","#e7f7ef","#fff4d8","#fbeaf2"];
 function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));}
 function diagram(title,labels,notes){
  const pos=[[28,145],[472,145],[472,375],[28,375]],w=400,h=178;
  const cards=labels.map((label,i)=>{
   const x=pos[i][0],y=pos[i][1];
   return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="18" fill="'+fills[i]+'" stroke="#9aaabd" stroke-width="2"/>'+
    '<circle cx="'+(x+35)+'" cy="'+(y+36)+'" r="20" fill="#173b69"/><text x="'+(x+35)+'" y="'+(y+43)+'" text-anchor="middle" font-family="Arial" font-size="17" font-weight="700" fill="#fff">'+(i+1)+'</text>'+
    '<text x="'+(x+24)+'" y="'+(y+87)+'" font-family="Arial" font-size="24" font-weight="700" fill="#102b4e">'+esc(label)+'</text>'+
    '<text x="'+(x+24)+'" y="'+(y+126)+'" font-family="Arial" font-size="16" fill="#334155">'+esc(notes[i])+'</text>';
  }).join("");
  const arrows='<path d="M430 232 h35 m-10 -10 l10 10 -10 10" fill="none" stroke="#53677f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+
   '<path d="M672 328 v38 m-9 -10 l9 10 9 -10" fill="none" stroke="#53677f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+
   '<path d="M470 462 h-35 m10 -10 l-10 10 10 10" fill="none" stroke="#53677f" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>';
  const svg='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="610" viewBox="0 0 900 610"><rect width="900" height="610" rx="22" fill="#f7faff"/><text x="30" y="48" font-family="Arial" font-size="27" font-weight="700" fill="#102b4e">'+esc(title)+'</text><text x="30" y="83" font-family="Arial" font-size="16" fill="#52647a">CBE Nexus AI Academy • Module concept map</text><path d="M30 105 H870" stroke="#d5dfeb" stroke-width="2"/>'+cards+arrows+'<rect x="28" y="575" width="844" height="20" rx="8" fill="#eaf0f8"/></svg>';
  return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
 }
 Object.keys(stages).forEach(slug=>{
  const course=A[slug];if(!course)return;
  course.visuals=course.modules.map((m,i)=>({src:diagram(m[0],stages[slug][i].slice(0,4),stages[slug][i].slice(0,4).map(label=>"Apply "+label.toLowerCase()+" and verify the result.")),alt:course.title+" module "+(i+1)+" four-step learning diagram",caption:"Module "+(i+1)+" concept map: "+stages[slug][i].slice(0,4).join(" → ")}));
 });
})();