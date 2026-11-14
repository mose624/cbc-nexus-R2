/* Uganda-specific SEO for NCDC lower-secondary online notes and UCE practice. */
(()=>{"use strict";
const $=id=>document.getElementById(id),country=$("country"),level=$("level"),subject=$("subject"),reader=$("reader");
if(!country||!level||!subject||!reader)return;
const putMeta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const putLink=(rel,href)=>{let n=document.querySelector('link[rel="'+rel+'"]');if(!n){n=document.createElement("link");n.rel=rel;document.head.appendChild(n);}n.href=href;};
const refresh=()=>{
 if(String(country.value||"").toLowerCase()!=="uganda")return;
 const lev=String(level.value||"").trim(),sub=String(subject.value||"").trim();
 const base="https://cbenexus.com/country-online-notes.html",params=new URLSearchParams({country:"Uganda"});
 if(lev)params.set("level",lev);if(sub)params.set("subject",sub);
 const canonical=base+"?"+params.toString();
 const title="Uganda "+(sub?sub+" ":"")+"NCDC Notes"+(lev?" "+lev:"")+" & UCE Revision | CBE Nexus";
 const description="Read Uganda NCDC Senior 1–4 notes, worked examples and revision questions in Mathematics, English, Biology, Chemistry, Physics and Geography.";
 document.title=title;putMeta("description",description);putMeta("robots","index,follow");
 putMeta("og:title",title,"property");putMeta("og:description",description,"property");putMeta("og:type","article","property");putMeta("og:url",canonical,"property");
 putMeta("twitter:card","summary");putMeta("twitter:title",title);putMeta("twitter:description",description);
 putLink("canonical",canonical);
 const faqs=[
 {"@type":"Question","name":"Which Uganda curriculum levels are covered?","acceptedAnswer":{"@type":"Answer","text":"This first CBE Nexus Uganda notes release covers selected subjects in Senior 1, Senior 2, Senior 3 and Senior 4."}},
 {"@type":"Question","name":"Which subjects are included in the Uganda notes?","acceptedAnswer":{"@type":"Answer","text":"Mathematics, English Language, Biology, Chemistry, Physics and Geography."}},
 {"@type":"Question","name":"Are these official UNEB UCE examination papers?","acceptedAnswer":{"@type":"Answer","text":"No. These are original CBE Nexus supplementary notes, worked examples and practice questions. They are not official NCDC textbooks or UNEB examination papers."}},
 {"@type":"Question","name":"Where can learners check the official Uganda curriculum?","acceptedAnswer":{"@type":"Answer","text":"Check the National Curriculum Development Centre (NCDC) curriculum framework, current subject syllabus and your school's scheme of work."}}
 ];
 const graph={"@context":"https://schema.org","@graph":[
 {"@type":"WebPage","name":title,"description":description,"url":canonical,"inLanguage":"en","isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"}},
 {"@type":"LearningResource","name":title,"description":description,"learningResourceType":"Study notes and revision practice","educationalLevel":lev||"Uganda Senior 1–4","inLanguage":"en","isAccessibleForFree":true,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":"Uganda"},{"@type":"Thing","name":sub||"Uganda NCDC curriculum"}]},
 {"@type":"FAQPage","mainEntity":faqs},
 {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":"Uganda Online Notes","item":base+"?country=Uganda"}]}
 ]};
 let node=document.getElementById("cbe-uganda-notes-jsonld");if(!node){node=document.createElement("script");node.id="cbe-uganda-notes-jsonld";node.type="application/ld+json";document.head.appendChild(node);}node.textContent=JSON.stringify(graph);
};
[country,level,subject].forEach(x=>x.addEventListener("change",refresh));
new MutationObserver(refresh).observe(reader,{childList:true,subtree:true,characterData:true});refresh();
})();
