(function(){
"use strict";
const countries=window.CBE_GLOBAL_COUNTRIES||[], details=window.CBE_GLOBAL_COUNTRY_DATA||{};
const $=id=>document.getElementById(id);
function text(el,value){if(el)el.textContent=value==null?"":String(value);}
function node(tag,cls){const e=document.createElement(tag);if(cls)e.className=cls;return e;}
function safeUrl(value){try{const u=new URL(value,location.origin);return ["http:","https:"].includes(u.protocol)?u.href:"#";}catch{return "#";}}
function linkList(id,items,emptyId,emptyText){
 const host=$(id); if(!host)return; host.replaceChildren();
 (items||[]).forEach(item=>{if(!item||!item.name&&!item.label)return;const a=node("a");a.href=safeUrl(item.url);a.textContent=(item.name||item.label)+(item.body?" — "+item.body:"")+(item.level?" · "+item.level:"")+(item.type?" — "+item.type:"");if(/^https?:/.test(item.url||"")){a.target="_blank";a.rel="noopener noreferrer";}host.appendChild(a);});
 if(emptyId){const e=$(emptyId);if(e){e.classList.toggle("gs-hidden",!!(items||[]).length);text(e,emptyText||"No verified records have been added for this section yet.");}}
}
function renderCountries(filter){
 const grid=$("countryGrid");grid.replaceChildren();
 const q=String(filter||"").trim().toLowerCase();
 const matches=countries.filter(c=>!q||c.name.toLowerCase().includes(q)||c.slug.includes(q)||c.code.toLowerCase()===q);
 text($("countryCount"),matches.length+" countries shown · "+countries.length+" country routes in registry");
 matches.forEach(c=>{
  const a=node("a","gs-country");a.href=c.url;
  const flag=node("span","gs-flag");flag.textContent=c.flag;flag.setAttribute("aria-hidden","true");
  const body=node("span");const name=node("strong");name.textContent=c.name;const small=node("small");small.textContent=details[c.slug]?"Country sources curated · verify each record":"Country page available · detailed records not yet verified";
  body.append(name,small);a.append(flag,body);grid.appendChild(a);
 });
 if(!matches.length){const p=node("p","gs-empty");p.textContent="No matching country found. Try another spelling.";grid.appendChild(p);}
}
function routeSlug(){const m=location.pathname.match(/^\/global-schools\/([^/]+)\/?$/);return m?decodeURIComponent(m[1]).toLowerCase():"";}
function renderCountry(){
 const slug=routeSlug();if(!slug)return;
 const c=countries.find(x=>x.slug===slug);if(!c){text($("gsTitle"),"Country not found");text($("gsIntro"),"This country slug is not in the current country registry. Return to the directory and select a listed country.");return;}
 const d=details[slug]||{};
 $("gsDirectory").classList.add("gs-hidden");$("gsSearchWrap").classList.add("gs-hidden");$("gsCountry").classList.remove("gs-hidden");
 text($("gsTitle"),c.name+" Schools, Education & Teaching Vacancies");text($("gsIntro"),"Country guide for "+c.name+": school directory, education system, national examinations, revision papers, teaching vacancies, teacher requirements and further education.");
 text($("countryFlag"),c.flag);text($("countryName"),c.name);text($("countrySub"),"Dedicated country page · /global-schools/"+c.slug);
 text($("countryIntro"),"This page brings together source links and country-specific education information for "+c.name+". Do not treat a missing record as proof that no school, exam, vacancy or scholarship exists.");
 const status=$("countryStatus");status.replaceChildren();const badge=node("span","gs-status "+(d.sources?"partial":"missing"));badge.textContent=d.sources?"Some official sources curated — individual records require verification":"Framework available — country-specific data not yet verified";status.appendChild(badge);
 text($("verificationNote"),d.sources?"Some official-source links are curated below. This is not a complete national school or vacancy register. Check each linked record and its date before relying on it.":"Data status: detailed country-specific information is not yet curated in this directory. No school totals, exam dates, vacancies, salary figures, teacher rules or scholarship listings are being invented. Official sources must be researched before any field is marked verified.");
 text($("countryLanguages"),d.officialLanguages||"Not yet verified for this page. Confirm language status with the country's government or education authority.");
 text($("countryAuthority"),d.authority||"Not yet curated. The responsible national or subnational education authority must be identified and linked before this field is marked verified.");
 text($("countryCurriculum"),d.curriculum||"Not yet verified for this country. The curriculum name, responsible authority, grade coverage and approved international programmes need country-specific sources.");
 linkList("curriculumLinks",d.curriculumSources,null);
 text($("countryTerms"),d.termCalendar||"Not yet verified for this country. No start dates, closing dates or academic-year dates are supplied until a current official calendar is located.");
 text($("countryQualifications"),d.qualificationRequirements||"Not yet verified for this country. Confirm the minimum academic qualification, teacher-training award, registration/licence, subject grades, language rules and work authorisation with the relevant regulator and employer.");
 text($("countrySystem"),d.system||"Not yet verified. School stages, grade equivalents and curriculum information need country-specific official sources.");
 text($("countryCalendar"),d.calendar||"Not yet verified. Check the relevant ministry, state, province, district or individual school calendar.");
 linkList("schoolLinks",d.schools,"schoolEmpty","No verified school directory records have been added for this country yet.");
 linkList("examLinks",d.exams,"examEmpty","No verified national examination records or current examination dates have been added for this country yet.");
 linkList("paperLinks",d.papers,null);linkList("jobLinks",d.jobs,null);linkList("teacherLinks",d.teachers,null);linkList("furtherLinks",d.further,null);linkList("sourceLinks",d.sources,null);
 const title=c.name+" Schools, Education System & Teaching Vacancies | CBE Nexus Global Schools";
 document.title=title;
 const desc="Explore school directories, education systems, national examinations, sample papers, teaching vacancies and teacher requirements in "+c.name+". Verify each listing with official sources.";
 let meta=document.querySelector('meta[name="description"]');if(meta)meta.content=desc;
 let canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.href=location.origin+"/global-schools/"+c.slug;
}
$("searchButton").addEventListener("click",()=>{const q=$("countrySearch").value.trim();const match=countries.find(c=>c.name.toLowerCase()===q.toLowerCase()||c.slug===q.toLowerCase().replace(/\s+/g,"-"));if(match){location.href=match.url;return;}renderCountries(q);});
$("countrySearch").addEventListener("input",e=>renderCountries(e.target.value));
$("countrySearch").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("searchButton").click();}});
renderCountries("");renderCountry();
})();