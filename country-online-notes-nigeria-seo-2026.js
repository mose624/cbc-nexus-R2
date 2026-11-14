/* Nigeria-specific search metadata and structured data for the country notes reader. */
(()=> {
 "use strict";
 const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
 if(!country||!level||!subject||!reader)return;
 const meta=(selector,attr,key,value)=>{let n=document.querySelector(selector);if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
 const link=(rel,href)=>{let n=document.querySelector('link[rel="'+rel+'"]');if(!n){n=document.createElement("link");n.rel=rel;document.head.appendChild(n);}n.href=href;};
 const update=()=>{
  if(country.value!=="Nigeria")return;
  const l=level.value,s=subject.value,base="https://cbenexus.com/country-online-notes.html",params=new URLSearchParams({country:"Nigeria"});
  if(l)params.set("level",l);if(s)params.set("subject",s);
  const canonical=base+"?"+params.toString();
  const title="Nigeria "+(s||"Curriculum Study Notes")+(l?" "+l:"")+" | Free Notes & Practice | CBE Nexus";
  const description=(s?("Read free Nigeria "+s+" notes"): "Read free Nigeria curriculum notes")+" "+(l?("for "+l):"for JHS and SHS learners")+". Study worked examples, revision questions and explanations aligned to NERDC learning pathways.";
  const short=description.length>158?description.slice(0,157).replace(/\s+\S*$/,"").replace(/[,:;—-]+$/,"")+"…":description;
  document.title=title;meta('meta[name="description"]',"name","description",short);
  meta('meta[property="og:title"]',"property","og:title",title);meta('meta[property="og:description"]',"property","og:description",short);
  meta('meta[property="og:type"]',"property","og:type","article");meta('meta[property="og:url"]',"property","og:url",canonical);
  meta('meta[name="twitter:title"]',"name","twitter:title",title);meta('meta[name="twitter:description"]',"name","twitter:description",short);
  meta('meta[name="keywords"]',"name","keywords",["Nigeria curriculum notes","NERDC curriculum","Nigeria JHS notes","Nigeria SHS notes",s,l,"Nigeria Biology","Nigeria Chemistry","Nigeria Core Mathematics","Nigeria Physics","Nigeria English Language","BECE revision","WASSCE preparation","free worked examples","online revision questions"].filter(Boolean).join(", "));
  link("canonical",canonical);
  const faqs=[
   {q:"Which Nigeria curriculum levels are covered in these notes?",a:"The Nigeria notes library separates JSS 1, JSS 2 and JSS 3 Basic Education from SS 1 senior-secondary subject support. Select the level and subject that match your school programme."},
   {q:"Are these official NERDC or WAEC examination questions?",a:"No. The explanations, worked examples and practice questions are original supplementary CBE Nexus learning materials. They are not official NERDC textbooks, BECE papers, WAEC WASSCE papers or NECO SSCE papers."},
   {q:"Where can I check Nigeria's official curriculum?",a:"Use the Nigerian Educational Research and Development Council (NERDC) curriculum pages and the current subject curriculum supplied by your school."}
  ];
  const graph={"@context":"https://schema.org","@graph":[
   {"@type":"WebPage","name":title,"description":short,"url":canonical,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":"Nigeria"},{"@type":"Thing","name":s||"Nigeria national curriculum"}]},
   {"@type":"LearningResource","name":title,"description":short,"url":canonical,"learningResourceType":["Study notes","Worked examples","Practice questions"],"educationalLevel":l||"Junior and senior high school","isAccessibleForFree":true,"inLanguage":"en","about":[{"@type":"Country","name":"Nigeria"},{"@type":"Thing","name":s||"NERDC curriculum"}]},
   {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Nigeria Education","item":"https://cbenexus.com/global-schools/nigeria"},{"@type":"ListItem","position":4,"name":"Nigeria Online Notes","item":canonical}]},
   {"@type":"FAQPage","mainEntity":faqs.map(x=>({"@type":"Question","name":x.q,"acceptedAnswer":{"@type":"Answer","text":x.a}}))}
  ]};
  let node=document.getElementById("nigeria-notes-seo-jsonld");if(!node){node=document.createElement("script");node.id="nigeria-notes-seo-jsonld";node.type="application/ld+json";document.head.appendChild(node);}node.textContent=JSON.stringify(graph);
 };
 [country,level,subject].forEach(x=>x.addEventListener("change",update));
 new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});
 update();
})();
