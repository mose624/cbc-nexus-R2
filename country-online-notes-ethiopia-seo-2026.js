/* Ethiopia Ministry of Education country notes SEO. */
(()=>{"use strict";
const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
if(!country||!level||!subject||!reader)return;
const meta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const canonical=url=>{let n=document.querySelector('link[rel="canonical"]');if(!n){n=document.createElement("link");n.rel="canonical";document.head.appendChild(n);}n.href=url;};
const update=()=>{
 if(String(country.value||"").toLowerCase()!=="ethiopia")return;
 const l=String(level.value||"").trim(),s=String(subject.value||"").trim(),base="https://cbenexus.com/country-online-notes.html";
 const p=new URLSearchParams({country:"Ethiopia"});if(l)p.set("level",l);if(s)p.set("subject",s);
 const url=base+"?"+p.toString(),title="Ethiopia "+(s?s+" ":"")+"Grade 9 Study Notes "+(l?"| "+l+" ":"")+"Worked Examples & Revision | CBE Nexus";
 const description="Read Ethiopia Grade 9 Biology, Chemistry, Mathematics and Physics notes online. Explore explanations, worked examples and original practice questions, with Ministry of Education curriculum guidance.";
 document.title=title;meta("description",description);meta("robots","index,follow");meta("og:title",title,"property");meta("og:description",description,"property");meta("og:url",url,"property");meta("og:type","article","property");meta("twitter:card","summary");meta("twitter:title",title);meta("twitter:description",description);canonical(url);
 const faq=[
 {"@type":"Question","name":"Which Ethiopian grade levels are covered in this notes release?","acceptedAnswer":{"@type":"Answer","text":"This release focuses on selected Grade 9 Biology, Chemistry, Mathematics and Physics learning support. It is not a complete Grades 9–12 syllabus."}},
 {"@type":"Question","name":"Are these official Ethiopian Ministry of Education textbooks or examination papers?","acceptedAnswer":{"@type":"Answer","text":"No. These are original CBE Nexus supplementary notes and practice questions. Compare them with current Ministry of Education, regional education bureau and school guidance."}},
 {"@type":"Question","name":"Where can learners check Ethiopia's official curriculum and learning materials?","acceptedAnswer":{"@type":"Answer","text":"Consult the Federal Ministry of Education curriculum framework and Ethiopian Schoolnet Learning Passport. Curriculum implementation and language of instruction may vary by region and cohort."}},
 {"@type":"Question","name":"Does Ethiopia use the same curriculum as Kenya or Ghana?","acceptedAnswer":{"@type":"Answer","text":"No. This Ethiopia resource is selected only under the Ethiopia country and Ministry of Education curriculum choice. It is kept separate from Kenya CBC/CBE, Ghana NaCCA and other national curriculum banks."}}
 ];
 const graph={"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","name":title,"description":description,"url":url,"inLanguage":"en","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"}},
 {"@type":"LearningResource","name":title,"description":description,"learningResourceType":"Supplementary online study notes and revision practice","educationalLevel":l||"Ethiopia Grade 9","inLanguage":"en","isAccessibleForFree":true,"about":[{"@type":"Country","name":"Ethiopia"},{"@type":"Thing","name":s||"Ethiopia Grade 9 curriculum"}]},
 {"@type":"FAQPage","mainEntity":faq},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Ethiopia Online Notes","item":base+"?country=Ethiopia"}]}
 ]};
 let n=document.getElementById("cbe-ethiopia-notes-jsonld");if(!n){n=document.createElement("script");n.id="cbe-ethiopia-notes-jsonld";n.type="application/ld+json";document.head.appendChild(n);}n.textContent=JSON.stringify(graph);
};
[country,level,subject].forEach(x=>x.addEventListener("change",update));new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});update();
})();