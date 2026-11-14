/* Tanzania-specific online-notes SEO and structured data. */
(()=>{"use strict";
const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
if(!country||!level||!subject||!reader)return;
const meta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const canonical=url=>{let n=document.querySelector('link[rel="canonical"]');if(!n){n=document.createElement("link");n.rel="canonical";document.head.appendChild(n);}n.href=url;};
const update=()=>{
 if(String(country.value||"").toLowerCase()!=="tanzania")return;
 const l=String(level.value||"").trim(),s=String(subject.value||"").trim(),base="https://cbenexus.com/country-online-notes.html";
 const p=new URLSearchParams({country:"Tanzania"});if(l)p.set("level",l);if(s)p.set("subject",s);
 const url=base+"?"+p.toString(),title="Tanzania "+(s?s+" ":"")+"TIE Notes"+(l?" "+l:"")+" & NECTA CSEE Revision | CBE Nexus";
 const description="Study Tanzania TIE Form I–IV notes, worked examples and revision questions in Basic Mathematics, English Language, Biology, Chemistry and Physics.";
 document.title=title;meta("description",description);meta("robots","index,follow");meta("og:title",title,"property");meta("og:description",description,"property");meta("og:url",url,"property");meta("og:type","article","property");meta("twitter:card","summary");meta("twitter:title",title);meta("twitter:description",description);canonical(url);
 const faq=[
 {"@type":"Question","name":"Which Tanzania school levels are covered?","acceptedAnswer":{"@type":"Answer","text":"This first CBE Nexus Tanzania notes release covers selected subjects in Form I, Form II, Form III and Form IV."}},
 {"@type":"Question","name":"Which subjects are included?","acceptedAnswer":{"@type":"Answer","text":"Basic Mathematics, English Language, Biology, Chemistry and Physics. Physics and Chemistry are optional natural-science subjects for CSEE candidates who select them."}},
 {"@type":"Question","name":"Are these official NECTA examination papers?","acceptedAnswer":{"@type":"Answer","text":"No. These are original CBE Nexus supplementary notes and practice questions, not official TIE textbooks or NECTA examination papers."}},
 {"@type":"Question","name":"Where can learners find the official Tanzania curriculum?","acceptedAnswer":{"@type":"Answer","text":"Use the Tanzania Institute of Education (TIE) curriculum and subject syllabus publications and check the current NECTA CSEE examination formats and your school's scheme of work."}},
 {"@type":"Question","name":"Does this release cover Form V–VI ACSEE?","acceptedAnswer":{"@type":"Answer","text":"This first notes pack focuses on Form I–IV. Form V–VI ACSEE subject combinations, such as PCM and PCB, require a separate advanced-level resource pack."}}
 ];
 const graph={"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","name":title,"description":description,"url":url,"inLanguage":"en","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"}},
 {"@type":"LearningResource","name":title,"description":description,"learningResourceType":"Study notes and revision practice","educationalLevel":l||"Tanzania Form I–IV","inLanguage":"en","isAccessibleForFree":true,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":"Tanzania"},{"@type":"Thing","name":s||"Tanzania TIE curriculum"}]},
 {"@type":"FAQPage","mainEntity":faq},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Tanzania Online Notes","item":base+"?country=Tanzania"}]}
 ]};
 let n=document.getElementById("cbe-tanzania-notes-jsonld");if(!n){n=document.createElement("script");n.id="cbe-tanzania-notes-jsonld";n.type="application/ld+json";document.head.appendChild(n);}n.textContent=JSON.stringify(graph);
};
[country,level,subject].forEach(x=>x.addEventListener("change",update));new MutationObserver(update).observe(reader,{childList:true,subtree:true,characterData:true});update();
})();