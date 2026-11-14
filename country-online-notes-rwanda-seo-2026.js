/* Rwanda REB 2026 secondary curriculum SEO. */
(()=>{"use strict";
const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
if(!country||!level||!subject||!reader)return;
const meta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const canonical=url=>{let n=document.querySelector('link[rel="canonical"]');if(!n){n=document.createElement("link");n.rel="canonical";document.head.appendChild(n);}n.href=url;};
const update=()=>{
 if(String(country.value||"").toLowerCase()!=="rwanda")return;
 const l=String(level.value||"").trim(),s=String(subject.value||"").trim(),base="https://cbenexus.com/country-online-notes.html";
 const p=new URLSearchParams({country:"Rwanda"});if(l)p.set("level",l);if(s)p.set("subject",s);
 const url=base+"?"+p.toString(),title="Rwanda REB "+(s?s+" ":"")+"Secondary Notes "+(l?l+" ":"")+"& 2026 CBC Revision | CBE Nexus";
 const description="Explore Rwanda REB secondary curriculum bridging notes, worked examples and revision questions for S1–S6. Includes 2026 learning-pathway guidance and original practice.";
 document.title=title;meta("description",description);meta("robots","index,follow");meta("og:title",title,"property");meta("og:description",description,"property");meta("og:url",url,"property");meta("og:type","article","property");meta("twitter:card","summary");meta("twitter:title",title);meta("twitter:description",description);canonical(url);
 const faq=[
 {"@type":"Question","name":"Which Rwanda secondary levels are covered?","acceptedAnswer":{"@type":"Answer","text":"The existing CBE Nexus Rwanda resource contains selected supplementary bridging modules for secondary learners. It does not claim complete topic-by-topic coverage of the revised REB 2026 S1–S6 syllabus."}},
 {"@type":"Question","name":"What changed in Rwanda upper-secondary education?","acceptedAnswer":{"@type":"Answer","text":"MINEDUC announced a move from the former subject-combination model to broad learning pathways: Mathematics and Sciences, Arts and Humanities, and Languages. Check current REB and school transition guidance for your cohort."}},
 {"@type":"Question","name":"Are these official REB textbooks or NESA examination papers?","acceptedAnswer":{"@type":"Answer","text":"No. These are original CBE Nexus supplementary bridging lessons and practice questions, not official REB textbooks or national examination papers."}},
 {"@type":"Question","name":"Where can learners find Rwanda's official curriculum?","acceptedAnswer":{"@type":"Answer","text":"Consult the Rwanda Basic Education Board e-learning platform and current Ministry of Education and REB curriculum announcements."}}
 ];
 const graph={"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","name":title,"description":description,"url":url,"inLanguage":"en","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"}},
 {"@type":"LearningResource","name":title,"description":description,"learningResourceType":"Supplementary study notes and revision practice","educationalLevel":l||"Rwanda secondary education S1–S6","inLanguage":"en","isAccessibleForFree":true,"about":[{"@type":"Country","name":"Rwanda"},{"@type":"Thing","name":s||"REB revised secondary curriculum"}]},
 {"@type":"FAQPage","mainEntity":faq},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Rwanda Online Notes","item":base+"?country=Rwanda"}]}
 ]};
 let n=document.getElementById("cbe-rwanda-notes-jsonld");if(!n){n=document.createElement("script");n.id="cbe-rwanda-notes-jsonld";n.type="application/ld+json";document.head.appendChild(n);}n.textContent=JSON.stringify(graph);
};
[country,level,subject].forEach(x=>x.addEventListener("change",update));new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});update();
})();