/* Eritrea national curriculum supplementary notes SEO. */
(()=>{"use strict";
const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
if(!country||!level||!subject||!reader)return;
const meta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const canonical=url=>{let n=document.querySelector('link[rel="canonical"]');if(!n){n=document.createElement("link");n.rel="canonical";document.head.appendChild(n);}n.href=url;};
const update=()=>{
 if(String(country.value||"").toLowerCase()!=="eritrea")return;
 const l=String(level.value||"").trim(),s=String(subject.value||"").trim(),base="https://cbenexus.com/country-online-notes.html";
 const p=new URLSearchParams({country:"Eritrea"});if(l)p.set("level",l);if(s)p.set("subject",s);
 const url=base+"?"+p.toString(),title="Eritrea "+(s?s+" ":"")+"Secondary Study Notes "+(l?"| "+l+" ":"")+"Worked Examples & Revision | CBE Nexus";
 const description="Explore Eritrea secondary Grade 9 Biology, Chemistry, Mathematics, Physics and English bridging notes, worked examples and original revision questions. Check current Ministry and school guidance.";
 document.title=title;meta("description",description);meta("robots","index,follow");meta("og:title",title,"property");meta("og:description",description,"property");meta("og:url",url,"property");meta("og:type","article","property");meta("twitter:card","summary");meta("twitter:title",title);meta("twitter:description",description);canonical(url);
 const faq=[
 {"@type":"Question","name":"Which Eritrean secondary levels are covered?","acceptedAnswer":{"@type":"Answer","text":"This release offers selected Grade 9 bridging modules in Biology, Chemistry, Mathematics, Physics and English Language. It is not a complete Grades 9–12 official syllabus."}},
 {"@type":"Question","name":"Are these official Eritrean Ministry textbooks or ESECE examination papers?","acceptedAnswer":{"@type":"Answer","text":"No. These are original CBE Nexus supplementary learning notes and practice questions, not official textbooks or national examination papers."}},
 {"@type":"Question","name":"What examinations are used in Eritrea?","acceptedAnswer":{"@type":"Answer","text":"UNESCO education profiles report national examinations at Grade 8 and Grade 12, including the Eritrean Secondary Education Certificate Examination (ESECE). Confirm current arrangements with the Ministry of Education and your school."}},
 {"@type":"Question","name":"Where can learners check Eritrea's official curriculum?","acceptedAnswer":{"@type":"Answer","text":"Consult the Eritrea Ministry of Education and the relevant Zoba Education Office. Topic order and implementation should be checked against the learner's current school scheme of work."}}
 ];
 const graph={"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","name":title,"description":description,"url":url,"inLanguage":"en","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"}},
 {"@type":"LearningResource","name":title,"description":description,"learningResourceType":"Supplementary online study notes and revision practice","educationalLevel":l||"Eritrea secondary education Grade 9","inLanguage":"en","isAccessibleForFree":true,"about":[{"@type":"Country","name":"Eritrea"},{"@type":"Thing","name":s||"Eritrea secondary curriculum"}]},
 {"@type":"FAQPage","mainEntity":faq},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Eritrea Online Notes","item":base+"?country=Eritrea"}]}
 ]};
 let n=document.getElementById("cbe-eritrea-notes-jsonld");if(!n){n=document.createElement("script");n.id="cbe-eritrea-notes-jsonld";n.type="application/ld+json";document.head.appendChild(n);}n.textContent=JSON.stringify(graph);
};
[country,level,subject].forEach(x=>x.addEventListener("change",update));new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});update();
})();