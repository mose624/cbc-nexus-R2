/* CBE Nexus AI Academy — universal labelled module diagrams.
   Fills missing module visuals across the entire course catalogue.
   Existing course-specific visuals are preserved. */
(function(){
  const A=window.CBENexusAICourses||{};
  const esc=s=>String(s??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"}[c]));
  function lines(value,max=31,count=3){
    const words=String(value||"").replace(/\s+/g," ").trim().split(" ");
    const out=[];let line="";
    words.forEach(word=>{
      if(!word)return;
      if((line+" "+word).trim().length>max&&line){out.push(line);line=word;}
      else line=(line+" "+word).trim();
    });
    if(line)out.push(line);
    if(out.length>count){out.length=count;out[count-1]=out[count-1].replace(/[.,;:]?$/,"")+"…";}
    return out;
  }
  function textBlock(value,x,y,max=31,count=3,size=17,color="#334155"){
    return lines(value,max,count).map((line,i)=>'<text x="'+x+'" y="'+(y+i*23)+'" font-family="Arial,sans-serif" font-size="'+size+'" fill="'+color+'">'+esc(line)+'</text>').join("");
  }
  function makeDiagram(course,module,index){
    const title=String(module&&module[0]||"Learning module");
    const steps=[
      {head:"LEARN",sub:module&&module[1]||"Understand the key concept",fill:"#e8f1ff",accent:"#2457a6"},
      {head:"EXPLORE",sub:module&&module[2]||"Examine methods and examples",fill:"#e8f7ef",accent:"#187348"},
      {head:"APPLY",sub:module&&module[3]||"Practise with a realistic task",fill:"#fff4dc",accent:"#94620b"},
      {head:"CHECK",sub:module&&module[4]||"Evaluate evidence and improve",fill:"#fbeaf2",accent:"#a23b69"}
    ];
    const positions=[[28,178],[466,178],[28,370],[466,370]];
    const cards=steps.map((s,i)=>{
      const [x,y]=positions[i];
      return '<rect x="'+x+'" y="'+y+'" width="406" height="158" rx="18" fill="'+s.fill+'" stroke="'+s.accent+'" stroke-opacity=".35" stroke-width="2"/>'+
        '<circle cx="'+(x+34)+'" cy="'+(y+34)+'" r="20" fill="'+s.accent+'"/>'+
        '<text x="'+(x+34)+'" y="'+(y+40)+'" text-anchor="middle" font-family="Arial,sans-serif" font-size="17" font-weight="700" fill="#fff">'+(i+1)+'</text>'+
        '<text x="'+(x+66)+'" y="'+(y+41)+'" font-family="Arial,sans-serif" font-size="20" font-weight="700" letter-spacing="1" fill="'+s.accent+'">'+s.head+'</text>'+
        textBlock(s.sub,x+24,y+86,37,3,17,"#25364b");
    }).join("");
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="900" height="570" viewBox="0 0 900 570" role="img" aria-labelledby="title desc">'+
      '<title id="title">'+esc(course.title+" — "+title)+'</title>'+
      '<desc id="desc">Four labelled learning stages: learn, explore, apply and check.</desc>'+
      '<rect width="900" height="570" rx="24" fill="#f7faff"/>'+
      '<text x="30" y="45" font-family="Arial,sans-serif" font-size="16" font-weight="700" letter-spacing="1.5" fill="#2563a6">CBE NEXUS AI ACADEMY • MODULE '+(index+1)+'</text>'+
      textBlock(title,30,91,72,2,25,"#102b4e")+
      '<path d="M30 126 H870" stroke="#d6e1ed" stroke-width="2"/>'+
      cards+
      '<path d="M450 336 V354 M441 345 L450 354 L459 345" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+
      '<text x="30" y="552" font-family="Arial,sans-serif" font-size="14" fill="#64748b">Understand • Practise • Apply • Verify</text>'+
      '</svg>';
    return "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
  }
  Object.keys(A).forEach(slug=>{
    const course=A[slug];
    if(!course||!Array.isArray(course.modules))return;
    if(!Array.isArray(course.visuals))course.visuals=[];
    course.modules.forEach((module,index)=>{
      const existing=course.visuals[index];
      if(existing&&existing.src&&existing.alt&&existing.caption)return;
      course.visuals[index]={
        src:makeDiagram(course,module,index),
        alt:course.title+" — module "+(index+1)+": labelled learning diagram showing learn, explore, apply and check stages for "+String(module&&module[0]||"the module"),
        caption:"Module "+(index+1)+" learning diagram • "+String(module&&module[0]||"Learning module")+" • Learn → Explore → Apply → Check"
      };
    });
  });
})();