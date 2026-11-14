/* Dynamic country-specific SEO for free notes, worked examples and revision questions. */
(()=>{const $=id=>document.getElementById(id);const c=$("country"),l=$("level"),s=$("subject"),reader=$("reader");if(!c||!l||!s||!reader)return;
const meta=(key,value,attr="name")=>{let n=document.querySelector('meta['+attr+'="'+key+'"]');if(!n){n=document.createElement("meta");n.setAttribute(attr,key);document.head.appendChild(n);}n.content=value;};
const setLink=(rel,href)=>{let n=document.querySelector('link[rel="'+rel+'"]');if(!n){n=document.createElement("link");n.rel=rel;document.head.appendChild(n);}n.href=href;};
const refresh=()=>{const country=String(c.value||"").trim(),level=String(l.value||"").trim(),subject=String(s.value||"").trim();if(!country)return;
const base="https://cbenexus.com/country-online-notes.html",p=new URLSearchParams();p.set("country",country);if(level)p.set("level",level);if(subject)p.set("subject",subject);const canonical=base+"?"+p.toString();
const title=[country,subject||"Free Online Notes",level].filter(Boolean).join(" | ")+" — Worked Examples & Revision Questions | CBE Nexus";
const description="Read free "+(subject?subject+" ":"")+"online notes for "+country+(level?" ("+level+")":"")+". Study clear explanations, worked examples, practical activities and self-check revision questions. Supplementary learning material to compare with the current national syllabus.";
document.title=title;meta("description",description);meta("robots","index,follow");meta("og:title",title,"property");meta("og:description",description,"property");meta("og:type","article","property");meta("og:url",canonical,"property");meta("twitter:card","summary");meta("twitter:title",title);meta("twitter:description",description);setLink("canonical",canonical);
const heading=reader.querySelector("h2")?.textContent||subject+" revision notes",lang=reader.getAttribute("lang")||"en";
const graph={"@context":"https://schema.org","@graph":[
{"@type":"WebPage","name":title,"description":description,"url":canonical,"inLanguage":lang,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":country},{"@type":"Thing","name":subject||"National curriculum learning resources"}]},
{"@type":"LearningResource","name":heading,"description":description,"url":canonical,"inLanguage":lang,"learningResourceType":["Study notes","Worked examples","Practice questions"],"educationalLevel":level||"Secondary education","isAccessibleForFree":true,"isPartOf":{"@type":"WebSite","name":"CBE Nexus","url":"https://cbenexus.com/"},"about":[{"@type":"Country","name":country},{"@type":"Thing","name":subject||"Science and mathematics"}]},
{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://cbenexus.com/"},{"@type":"ListItem","position":2,"name":"Global Schools","item":"https://cbenexus.com/global-schools.html"},{"@type":"ListItem","position":3,"name":country+" Online Notes","item":base+"?country="+encodeURIComponent(country)}]}
]};
let node=document.getElementById("cbe-country-notes-jsonld");if(!node){node=document.createElement("script");node.id="cbe-country-notes-jsonld";node.type="application/ld+json";document.head.appendChild(node);}node.textContent=JSON.stringify(graph);
};
[c,l,s].forEach(el=>el.addEventListener("change",refresh));new MutationObserver(refresh).observe(reader,{childList:true,subtree:true,characterData:true});refresh();
})();