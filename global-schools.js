(function(){
"use strict";
const countries=window.CBE_GLOBAL_COUNTRIES||[], details=window.CBE_GLOBAL_COUNTRY_DATA||{}, officialLanguageReference=window.CBE_GLOBAL_OFFICIAL_LANGUAGES||{};
const $=id=>document.getElementById(id);
function text(el,value){if(el)el.textContent=value==null?"":String(value);}
function node(tag,cls){const e=document.createElement(tag);if(cls)e.className=cls;return e;}
function safeUrl(value){try{const u=new URL(value,location.origin);return ["http:","https:"].includes(u.protocol)?u.href:"#";}catch{return "#";}}
function linkList(id,items,emptyId,emptyText,flagSymbol){
 const host=$(id); if(!host)return; host.replaceChildren();
 (items||[]).forEach(item=>{
  if(!item||!item.name&&!item.label)return;
  const a=node("a");a.href=safeUrl(item.url);
  a.textContent=(item.name||item.label)+(item.body?" — "+item.body:"")+(item.level?" · "+item.level:"")+(item.type?" — "+item.type:"");
  if(/^https?:/.test(item.url||"")){a.target="_blank";a.rel="noopener noreferrer";}
  if(flagSymbol){
   const row=node("div","gs-school-link-row");
   const flag=node("span","gs-school-flag");flag.textContent=flagSymbol;flag.setAttribute("aria-hidden","true");flag.title="Country flag";
   row.append(flag,a);host.appendChild(row);
  }else host.appendChild(a);
 });
 if(emptyId){const e=$(emptyId);if(e){e.classList.toggle("gs-hidden",!!(items||[]).length);text(e,emptyText||"No verified records have been added for this section yet.");}}
}
function renderCountries(filter){
 const grid=$("countryGrid");grid.replaceChildren();
 const q=String(filter||"").trim().toLowerCase();
 const matches=countries.filter(c=>!q||c.name.toLowerCase().includes(q)||c.slug.includes(q)||c.code.toLowerCase()===q);
 text($("countryCount"),matches.length+" countries shown · "+countries.length+" country routes in registry");
 // Snapshot counts are sourced from the public vacancy indexes checked 27 Oct 2026.
 // They are labelled as directory snapshots, not guaranteed open jobs; the employer advert is authoritative.
 const taaCounts={
  "egypt":30,"poland":25,"indonesia":24,"japan":21,"malaysia":21,"germany":17,"china":13,"kenya":13,"kuwait":12,"romania":12,"spain":12,"hong-kong":9,"italy":8,"pakistan":8,"saudi-arabia":7,"thailand":7,"bahrain":5,"bangladesh":5,"vietnam":4,"gibraltar":3,"jersey":3,"morocco":3,"sri-lanka":3,"cayman-islands":2,"czechia":2,"hungary":2,"iraq":2,"israel":2,"jordan":2,"south-korea":2,"ukraine":2,"bermuda":1,"malawi":1,"singapore":1,"sweden":1,"switzerland":1,"taiwan":1,"united-arab-emirates":1
 };
 const skolberaCounts={
  "brazil":418,"united-arab-emirates":411,"thailand":331,"malaysia":266,"vietnam":210,"germany":184,"philippines":101,"italy":79,"spain":69,"portugal":60,"switzerland":57,"kazakhstan":54,"france":47,"netherlands":45,"cambodia":44,"belgium":37,"cyprus":37,"czechia":37,"ecuador":32,"romania":30,"hungary":30,"latvia":28,"mauritius":26,"turkiye":26,"greece":25,"nepal":23,"argentina":22,"azerbaijan":22,"lithuania":21,"uzbekistan":18,"austria":17,"chile":17,"serbia":17,"norway":15,"armenia":15,"senegal":15,"slovakia":11,"denmark":10,"estonia":10,"croatia":10,"kyrgyzstan":10,"sweden":9,"ireland":9,"laos":9,"luxembourg":8,"gabon":8,"bulgaria":7,"cote-divoire":6,"slovenia":6,"namibia":5,"rwanda":5,"uruguay":5,"paraguay":4,"finland":4,"seychelles":3,"bermuda":2,"bosnia-and-herzegovina":2,"brunei":1,"malta":1
 };
 matches.forEach(c=>{
  const card=node("div","gs-country");
  card.setAttribute("role","link");card.setAttribute("tabindex","0");card.setAttribute("aria-label","Open the "+c.name+" country dashboard");card.title="Open "+c.name+" country dashboard";
  card.addEventListener("click",event=>{if(event.target.closest("a,button,input,select,textarea"))return;location.href=c.url;});
  card.addEventListener("keydown",event=>{if(event.target===card&&(event.key==="Enter"||event.key===" ")){event.preventDefault();location.href=c.url;}});
  const flag=node("span","gs-flag");flag.textContent=c.flag;flag.setAttribute("aria-hidden","true");
  const body=node("span","gs-country-body");
  const nameLink=node("a","gs-country-name");nameLink.href=c.url;nameLink.style.color="inherit";nameLink.style.textDecoration="none";nameLink.setAttribute("aria-label","Open "+c.name+" country dashboard");
  const name=node("strong");name.textContent=c.name;nameLink.append(name);
  const small=node("small");small.textContent="Vacancy indexes checked 27 Oct 2026 · verify each employer advert";
  const snapshot=node("small","gs-vacancy-snapshot");
  const counts=[];
  if(taaCounts[c.slug])counts.push("Teach Abroad Agencies: "+taaCounts[c.slug]);
  if(skolberaCounts[c.slug])counts.push("Skolbera: "+skolberaCounts[c.slug]);
  snapshot.textContent=counts.length?counts.join(" · ")+" listed":"Open vacancy searches below";
  const links=node("span","gs-country-vacancy-sources");
  const qCountry=encodeURIComponent(c.name);
  const sourceLinks=[
   {label:"Tes",url:"https://www.tes.com/jobs/search/international?keywords="+qCountry},
   {label:"Teach Abroad",url:"https://www.teachabroadagencies.com/jobs/"},
   {label:"Skolbera",url:"https://skolbera.com/teaching-jobs"},
   {label:"ISS",url:"https://www.iss.edu/for-individuals/find-a-job/current-openings/"}
  ];
  sourceLinks.forEach(source=>{const a=node("a");a.href=safeUrl(source.url);a.textContent=source.label;a.target="_blank";a.rel="noopener noreferrer";a.setAttribute("aria-label","Search "+c.name+" teaching vacancies on "+source.label);links.appendChild(a);});
  body.append(nameLink,small,snapshot,links);card.append(flag,body);grid.appendChild(card);
 });
 if(!matches.length){const p=node("p","gs-empty");p.textContent="No matching country found. Try another spelling.";grid.appendChild(p);}
}
// Learner photography is selected deterministically by country so all country pages have a visual hero.
const learnerPhotos=[
 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=82',
 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1800&q=82',
 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=82'
];
function photoForCountry(slug){let n=0;for(let i=0;i<slug.length;i++)n=(n*31+slug.charCodeAt(i))>>>0;return learnerPhotos[n%learnerPhotos.length];}
const localeCopy={
 'zh-CN':{
  title:'全球学校、教育与教师招聘',intro:'查看学校目录、教育体系、国家考试、教师资格要求及教学职位。请通过学校或官方机构核实所有信息。',
  home:'← CBE Nexus 首页',directory:'← 返回所有国家',profile:'国家概况',schools:'学校目录',curriculum:'课程与学校项目',academic:'学年与学期日期',qualifications:'教师资格与要求',system:'教育体系',exams:'国家考试',papers:'样卷与复习资源',vacancies:'教师招聘',teachers:'教师注册与要求',further:'继续教育',
  languages:'官方语言',authority:'教育主管机构',search:'搜索国家，例如中国、法国或德国',find:'搜索国家',back:'返回所有国家',missing:'该国家的详细资料尚未核实。请查看官方教育部门及学校网站。',verify:'部分官方来源已整理；每项招聘及日期仍需核实。',generic:'该国家的具体信息尚未核实。请通过政府、教育主管部门或学校确认。',countryIntro:'本页面汇集学校目录、教育体系、国家考试、教学职位和教师资格信息。申请前请核实招聘截止日期及工作签证要求。',
  footer:'CBE Nexus 全球学校目录。学校职位、截止日期、资格要求及签证信息可能变化，请向雇主或主管机构核实。'
 },
 'fr':{
  title:'Écoles, éducation et offres d’enseignement dans le monde',intro:'Consultez les annuaires scolaires, les systèmes éducatifs, les examens nationaux, les qualifications des enseignants et les offres d’emploi. Vérifiez les informations auprès des écoles ou des organismes officiels.',
  home:'← Accueil CBE Nexus',directory:'← Retour à tous les pays',profile:'Profil du pays',schools:'Annuaire des écoles',curriculum:'Programmes scolaires',academic:'Année scolaire et dates des trimestres',qualifications:'Qualifications et conditions des enseignants',system:'Système éducatif',exams:'Examens nationaux',papers:'Sujets types et ressources de révision',vacancies:'Offres d’enseignement',teachers:'Inscription et exigences professionnelles',further:'Études supérieures et formation',
  languages:'Langues officielles',authority:'Autorité éducative',search:'Rechercher un pays, par ex. Chine, France ou Allemagne',find:'Rechercher',back:'Retour à tous les pays',missing:'Les informations détaillées sur ce pays n’ont pas encore été vérifiées. Consultez les sites officiels du ministère et des écoles.',verify:'Certaines sources officielles sont répertoriées ; chaque offre et chaque date doivent être vérifiées.',generic:'Cette information n’a pas encore été vérifiée pour ce pays. Consultez le gouvernement, l’autorité éducative ou les écoles.',countryIntro:'Cette page rassemble des liens vers les écoles, le système éducatif, les examens, les postes d’enseignants et les conditions professionnelles. Vérifiez les dates limites et les exigences de visa avant de postuler.',
  footer:'Annuaire mondial CBE Nexus. Les offres, dates limites, qualifications et règles de visa peuvent changer : confirmez-les auprès de l’employeur ou de l’autorité compétente.'
 },
 'de':{
  title:'Schulen, Bildung und internationale Lehrstellen weltweit',intro:'Entdecken Sie Schulverzeichnisse, Bildungssysteme, nationale Prüfungen, Lehrkräftequalifikationen und Stellenangebote. Prüfen Sie Angaben direkt bei Schulen oder offiziellen Stellen.',
  home:'← CBE Nexus Startseite',directory:'← Zurück zu allen Ländern',profile:'Länderprofil',schools:'Schulverzeichnis',curriculum:'Lehrpläne und Schulprogramme',academic:'Schuljahr und Ferientermine',qualifications:'Qualifikationen und Anforderungen für Lehrkräfte',system:'Bildungssystem',exams:'Nationale Prüfungen',papers:'Musterprüfungen und Lernmaterialien',vacancies:'Lehrstellen',teachers:'Lehrkräftezulassung und Anforderungen',further:'Weiterbildung und Hochschulbildung',
  languages:'Amtssprachen',authority:'Bildungsbehörde',search:'Land suchen, z. B. China, Frankreich oder Deutschland',find:'Land suchen',back:'Zurück zu allen Ländern',missing:'Detaillierte Angaben zu diesem Land wurden noch nicht verifiziert. Bitte prüfen Sie die offiziellen Ministeriums- und Schulwebsites.',verify:'Einige offizielle Quellen sind zusammengestellt; jede Stelle und Frist muss einzeln geprüft werden.',generic:'Diese Angaben wurden für dieses Land noch nicht verifiziert. Bitte prüfen Sie Regierungs-, Bildungsbehörden- oder Schulwebsites.',countryIntro:'Diese Seite bündelt Links zu Schulen, Bildungssystem, Prüfungen, Lehrstellen und beruflichen Anforderungen. Prüfen Sie Bewerbungsfristen und Visabestimmungen vor der Bewerbung.',
  footer:'CBE Nexus weltweites Schulverzeichnis. Stellenangebote, Fristen, Qualifikationen und Visabestimmungen können sich ändern. Bitte direkt beim Arbeitgeber oder der zuständigen Behörde bestätigen.'
 }
};
function applyCountryLocale(slug){
 const locale=slug==='china'?'zh-CN':slug==='france'?'fr':slug==='germany'?'de':'en';
 document.documentElement.lang=locale;
 const hero=$('gsHero');if(hero)hero.style.setProperty('--gs-learner-bg','url("'+photoForCountry(slug)+'")');
 const head=document.querySelector('.gs-country-head');if(head)head.style.setProperty('--gs-learner-bg','url("'+photoForCountry(slug)+'")');
 if(locale==='en')return;
 const t=localeCopy[locale];if(!t)return;
 const put=(id,value)=>{const el=$(id);if(el&&value)el.textContent=value;};
 put('gsTitle',t.title);put('gsIntro',t.intro);put('countryIntro',t.countryIntro);
 const home=document.querySelector('.gs-top a[href="/"]');if(home)home.textContent=t.home;
 const back=document.querySelector('.gs-back');if(back)back.textContent=t.directory;
 const search=$('countrySearch');if(search)search.placeholder=t.search;
 const searchButton=$('searchButton');if(searchButton)searchButton.textContent=t.find;
 const labels={'profile':t.profile,'schools':t.schools,'curriculum':t.curriculum,'academic-year':t.academic,'qualification-requirements':t.qualifications,'system':t.system,'exams':t.exams,'papers':t.papers,'vacancies':t.vacancies,'teachers':t.teachers,'further':t.further};
 Object.keys(labels).forEach(id=>{const el=document.querySelector('.gs-side nav a[href="#'+id+'"]');if(el)el.textContent=labels[id];});
 const hs=document.querySelectorAll('#profile .gs-card h3');if(hs[0])hs[0].textContent=t.languages;if(hs[1])hs[1].textContent=t.authority;
 const empty=$('schoolEmpty');if(empty)empty.textContent=t.generic;
 const note=$('verificationNote');if(note)note.textContent=t.missing;
 const status=$('countryStatus');if(status&&status.firstElementChild)status.firstElementChild.textContent=t.verify;
 const foot=document.querySelector('.gs-footer');if(foot)foot.textContent=t.footer;
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
 // Country-specific online teaching and learning marketplace.
 const marketStyle=node("style");marketStyle.textContent=".gs-country-market-stats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;margin:14px 0}.gs-country-market-stats .gs-card{margin:0;padding:14px}.gs-country-market-stats strong{display:block;color:#075080;font-size:24px}.gs-country-market-stats p{margin:3px 0 0}.gs-country-market-actions{display:flex;gap:8px;flex-wrap:wrap;margin:12px 0}.gs-market-btn{display:inline-flex;align-items:center;justify-content:center;padding:10px 13px;border-radius:8px;background:#075080;color:#fff!important;font-weight:800;font-size:12px;text-decoration:none}.gs-country-market-actions .gs-market-btn:first-child{background:#08734f}@media(max-width:560px){.gs-country-market-stats{grid-template-columns:1fr}.gs-country-market-actions .gs-market-btn{width:100%}}";document.head.appendChild(marketStyle);
 const marketplace=node("section","gs-panel gs-section");marketplace.id="countryOnlineLearning";
 const marketTitle=node("h2");marketTitle.textContent="Online Teaching & Learning in "+c.name;
 const marketIntro=node("p","gs-muted");marketIntro.textContent="Learners can request online lessons and teachers can register for this country. Public teacher profiles appear only after existing approval and payment checks. Learner contact details and individual requests remain private.";
 const stats=node("div","gs-country-market-stats");
 const teacherStat=node("article","gs-card"),teacherNum=node("strong"),teacherLabel=node("p");teacherNum.textContent="…";teacherLabel.textContent="Approved teachers for "+c.name;teacherStat.append(teacherNum,teacherLabel);
 const learnerStat=node("article","gs-card"),learnerNum=node("strong"),learnerLabel=node("p");learnerNum.textContent="Private";learnerLabel.textContent="Learner requests shared only with eligible teachers";learnerStat.append(learnerNum,learnerLabel);stats.append(teacherStat,learnerStat);
 const actions=node("div","gs-country-market-actions");
 const learnerLink=node("a","gs-market-btn");learnerLink.href="/online-teaching.html?country="+encodeURIComponent(c.name)+"#learner-request-form";learnerLink.textContent="🎓 Register as a learner";
 const teacherLink=node("a","gs-market-btn");teacherLink.href="/online-teaching.html?country="+encodeURIComponent(c.name)+"#teacher-registration";teacherLink.textContent="🧑‍🏫 Register as a teacher";
 const browseLink=node("a","gs-market-btn");browseLink.href="/online-teaching.html?country="+encodeURIComponent(c.name)+"#teacher-directory";browseLink.textContent="Browse approved teachers";
 const boardNote=node("p","gs-muted");boardNote.textContent="For privacy, learner names and contact details are not displayed publicly. Eligible approved teachers sign in to view appropriate learner requests.";
 actions.append(learnerLink,teacherLink,browseLink);marketplace.append(marketTitle,marketIntro,stats,actions,boardNote);
 const countryLayout=document.querySelector(".gs-country-layout");if(countryLayout){const main=countryLayout.querySelector(".gs-main-content");if(main)main.prepend(marketplace);else countryLayout.prepend(marketplace);}
 fetch("/api/global-country-stats?country="+encodeURIComponent(c.name),{headers:{Accept:"application/json"},cache:"no-store"}).then(r=>r.json()).then(data=>{if(data&&data.ok){teacherNum.textContent=String(data.approvedTeachers||0);teacherLabel.textContent=(data.approvedTeachers===1?"approved teacher":"approved teachers")+" registered for "+c.name;learnerNum.textContent=String(data.activeLearnerRequests||0);learnerLabel.textContent=(data.activeLearnerRequests===1?"active learner request":"active learner requests")+" in "+c.name+" (identities kept private)";}else{teacherNum.textContent="—";teacherLabel.textContent="Teacher count temporarily unavailable";learnerNum.textContent="—";learnerLabel.textContent="Learner count temporarily unavailable";}}).catch(()=>{teacherNum.textContent="—";teacherLabel.textContent="Teacher count temporarily unavailable";learnerNum.textContent="—";learnerLabel.textContent="Learner count temporarily unavailable";});

 text($("verificationNote"),d.sources?"Some official-source links are curated below. This is not a complete national school or vacancy register. Check each linked record and its date before relying on it.":"Data status: detailed country-specific information is not yet curated in this directory. No school totals, exam dates, vacancies, salary figures, teacher rules or scholarship listings are being invented. Official sources must be researched before any field is marked verified.");
 text($("countryLanguages"),d.officialLanguages||officialLanguageReference[slug]||"Not yet verified for this page. Confirm language status with the country's government or education authority.");
 text($("countryAuthority"),d.authority||"Not yet curated. The responsible national or subnational education authority must be identified and linked before this field is marked verified.");
 text($("countryCurriculum"),d.curriculum||"Not yet verified for this country. The curriculum name, responsible authority, grade coverage and approved international programmes need country-specific sources.");
 linkList("curriculumLinks",d.curriculumSources,null);
 text($("countryTerms"),d.termCalendar||"Not yet verified for this country. No start dates, closing dates or academic-year dates are supplied until a current official calendar is located.");
 text($("countryQualifications"),d.qualificationRequirements||"Not yet verified for this country. Confirm the minimum academic qualification, teacher-training award, registration/licence, subject grades, language rules and work authorisation with the relevant regulator and employer.");
 text($("countrySystem"),d.system||"Not yet verified. School stages, grade equivalents and curriculum information need country-specific official sources.");
 text($("countryCalendar"),d.calendar||"Not yet verified. Check the relevant ministry, state, province, district or individual school calendar.");
 // Keep each school's country flag visible in the school-directory list on every country page.
 const schoolFlagStyle=node("style");
 schoolFlagStyle.textContent=".gs-school-link-row{display:flex;align-items:flex-start;gap:10px;padding:9px 10px;margin:0 0 7px;border:1px solid #e7edf2;border-radius:9px;background:#fff}.gs-school-link-row .gs-school-flag{font-size:23px;line-height:1.25;flex:0 0 auto}.gs-school-link-row a{display:block;min-width:0;overflow-wrap:anywhere}.gs-school-link-row a:hover{text-decoration:underline}";
 document.head.appendChild(schoolFlagStyle);
 linkList("schoolLinks",d.schools,"schoolEmpty","No verified school directory records have been added for this country yet.",c.flag);
 linkList("examLinks",d.exams,"examEmpty","No verified national examination records or current examination dates have been added for this country yet.");
 linkList("paperLinks",d.papers,null);linkList("jobLinks",d.jobs,null);
 // Add country-specific live search links for every registered country. These are discovery links,
 // not claims that a vacancy is open; deadlines must be checked on the original employer advert.
 const jobsHost=$("jobLinks");
 if(jobsHost){
  const q=encodeURIComponent(c.name);
  const liveSearches=[
   {name:"Search current international teaching vacancies in "+c.name+" on Tes",url:"https://www.tes.com/jobs/search/international?keywords="+q},
   {name:"Browse international school vacancies worldwide (filter by country)",url:"https://www.teachabroadagencies.com/jobs/"},
   {name:"Browse worldwide school openings on ISS",url:"https://www.iss.edu/for-individuals/find-a-job/current-openings/"}
  ];
  liveSearches.forEach(item=>{const a=node("a");a.href=safeUrl(item.url);a.textContent=item.name+" — live search; confirm deadline and visa eligibility";a.target="_blank";a.rel="noopener noreferrer";jobsHost.appendChild(a);});
 }
 linkList("teacherLinks",d.teachers,null);linkList("furtherLinks",d.further,null);linkList("sourceLinks",d.sources,null);
 // Research starter pack is available for every country, including those with incomplete
 // country-specific records. These are authoritative discovery portals, not country facts.
 const sourceHost=$("sourceLinks");
 if(sourceHost){
  const researchLinks=[
   {name:"UNESCO UIS — official international education statistics and country profiles",url:"https://www.uis.unesco.org/en/data"},
   {name:"UNESCO IICBA — African country education policy briefs (where applicable)",url:"https://www.iicba.unesco.org/en/country-briefs"},
   {name:"World Bank — education data and country indicators",url:"https://data.worldbank.org/topic/education"},
   {name:"UNESCO Global Education Monitoring — country policy profiles",url:"https://www.education-profiles.org/"},
   {name:"Official government education authority search for "+c.name,url:"https://www.google.com/search?q="+encodeURIComponent("site:gov "+c.name+" ministry education official") }
  ];
  const existing=new Set(Array.from(sourceHost.querySelectorAll("a")).map(a=>a.href));
  researchLinks.forEach(item=>{const url=safeUrl(item.url);if(existing.has(url))return;const a=node("a");a.href=url;a.textContent=item.name+" — research source; verify country-specific details";a.target="_blank";a.rel="noopener noreferrer";sourceHost.appendChild(a);});
 }
 // Missing country-specific fields stay explicitly unverified; add direct research entry points
 // beside the relevant empty sections rather than filling them with guessed facts.
 const researchBySection=[
  ["schoolLinks","schoolEmpty","school directory", "official school registry "+c.name],
  ["examLinks","examEmpty","national examinations", "national examinations assessment authority "+c.name],
  ["paperLinks",null,"past papers and assessment samples","official sample examination papers "+c.name],
  ["teacherLinks",null,"teacher registration and licensing","teacher registration licensing regulator "+c.name],
  ["furtherLinks",null,"scholarships and further education","official scholarships higher education ministry "+c.name]
 ];
 researchBySection.forEach(([hostId,emptyId,label,query])=>{
  const host=$(hostId);if(!host)return;
  const link=node("a");link.href="https://www.google.com/search?q="+encodeURIComponent("site:gov "+query);
  link.textContent="Research official "+label+" for "+c.name+" — confirm results on the government/regulator website";
  link.target="_blank";link.rel="noopener noreferrer";host.appendChild(link);
 });
 applyCountryLocale(slug);
 const title=c.name+" Schools, Education System & Teaching Vacancies | CBE Nexus Global Schools";
 document.title=title;
 const desc="Explore school directories, education systems, national examinations, sample papers, teaching vacancies and teacher requirements in "+c.name+". Verify each listing with official sources.";
 let meta=document.querySelector('meta[name="description"]');if(meta)meta.content=desc;
 let canonical=document.querySelector('link[rel="canonical"]');if(canonical)canonical.href=location.origin+"/global-schools/"+c.slug;
}
$("searchButton").addEventListener("click",()=>{const q=$("countrySearch").value.trim();const match=countries.find(c=>c.name.toLowerCase()===q.toLowerCase()||c.slug===q.toLowerCase().replace(/\s+/g,"-"));if(match){location.href=match.url;return;}renderCountries(q);});
$("countrySearch").addEventListener("input",e=>renderCountries(e.target.value));
$("countrySearch").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();$("searchButton").click();}});
renderCountries("");
 const directoryHero=$("gsHero");if(directoryHero)directoryHero.style.setProperty("--gs-learner-bg",'url("https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=82")');
 renderCountry();
})();