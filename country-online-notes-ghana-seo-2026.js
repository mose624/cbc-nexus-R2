/* Ghana-specific search metadata and structured data for the country notes reader. */
(()=> {
 "use strict";
 const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
 if(!country||!level||!subject||!reader)return;
 const meta=(selector,attr,key,value)=>{let n=document.querySelector(selector);if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
 const link=(rel,href)=>{let n=document.querySelector('link[rel="'+rel+'"]');if(!n){n=document.createElement("link");n.rel=rel;document.head.appendChild(n);}n.href=href;};
 const update=()=>{
  if(country.value!=="Ghana")return;
  const l=level.value,s=subject.value,base="https://cbenexus.com/country-online-notes.html",params=new URLSearchParams({country:"Ghana"});
  if(l)params.set("level",l);if(s)params.set("subject",s);
  const canonical=base+"?"+params.toString();
  const title="Ghana "+(s||"Curriculum Study Notes")+(l?" "+l:"")+" | Free Notes & Practice | CBE Nexus";
  const description=(s?("Read free Ghana "+s+" notes"): "Read free Ghana curriculum notes")+" "+(l?("for "+l):"for JHS and SHS learners")+". Study worked examples, revision questions and explanations aligned to NaCCA learning pathways.";
  const short=description.length>158?description.slice(0,157).replace(/\s+\S*$/,"").replace(/[,:;—-]+$/,"")+"…":description;
  document.title=title;meta('meta[name="description"]',"name","description",short);
  meta('meta[property="og:title"]',"property","og:title",title);meta('meta[property="og:description"]',"property","og:description",short);
  meta('meta[property="og:type"]',"property","og:type","article");meta('meta[property="og:url"]',"property","og:url",canonical);
  meta('meta[name="twitter:title"]',"name","twitter:title",title);meta('meta[name="twitter:description"]',"name","twitter:description",short);
  meta('meta[name="keywords"]',"name","keywords",["Ghana curriculum notes","NaCCA curriculum","Ghana JHS notes","Ghana SHS notes",s,l,"Ghana Biology","Ghana Chemistry","Ghana Core Mathematics","Ghana Physics","Ghana English Language","BECE revision","WASSCE preparation","free worked examples","online revision questions"].filter(Boolean).join(", "));
  link("canonical",canonical);
  const faqs=[
   {q:"Which Ghana curriculum levels are covered in these notes?",a:"The Ghana notes library separates Basic 7, Basic 8 and Basic 9 in the NaCCA Common Core Programme from SHS Year 1 subject support. Select the level and subject that match your school programme."},
   {q:"Are these official NaCCA or WAEC examination questions?",a:"No. The explanations, worked examples and practice questions are original supplementary CBE Nexus learning materials. They are not official NaCCA textbooks, BECE papers or WASSCE papers."},
   {q:"Where can I check Ghana's official curriculum?",a:"Use the National Council for Curriculum and Assessment (NaCCA) curriculum pages and the current subject curriculum supplied by your school."}
  ];
  const graph={"@context":"https://schema.org","@graph":[
   {"@type":"WebPage","name":title,"description":short,"url":canonical,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":"Ghana"},{"@type":"Thing","name":s||"Ghana national curriculum"}]},
   {"@type":"LearningResource","name":title,"description":short,"url":canonical,"learningResourceType":["Study notes","Worked examples","Practice questions"],"educationalLevel":l||"Junior and senior high school","isAccessibleForFree":true,"inLanguage":"en","about":[{"@type":"Country","name":"Ghana"},{"@type":"Thing","name":s||"NaCCA curriculum"}]},
   {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Ghana Education","item":"https://cbenexus.com/global-schools/ghana"},{"@type":"ListItem","position":4,"name":"Ghana Online Notes","item":canonical}]},
   {"@type":"FAQPage","mainEntity":faqs.map(x=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))}
  ]};
  let node=document.getElementById("ghana-notes-seo-jsonld");if(!node){node=document.createElement("script");node.id="ghana-notes-seo-jsonld";node.type="application/ld+json";document.head.appendChild(node);}node.textContent=JSON.stringify(graph);
 };
 [country,level,subject].forEach(x=>x.addEventListener("change",update));
 new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});
 update();
})();
