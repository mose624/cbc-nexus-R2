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
  const label=(item.name||item.label)+(item.body?" — "+item.body:"")+(item.level?" · "+item.level:"")+(item.type?" — "+item.type:"");
  const a=item.url?node("a"):node("span");if(item.url){a.href=safeUrl(item.url);if(/^https?:/.test(item.url)){a.target="_blank";a.rel="noopener noreferrer";}}
  a.textContent=label;
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
  card.dataset.countryUrl=c.url;
  card.addEventListener("click",event=>{const interactive=event.target.closest("a,button,input,select,textarea");if(interactive){if(interactive.classList.contains("gs-country-name"))return;return;}if(c.url)window.location.assign(c.url);});
  card.addEventListener("keydown",event=>{if(event.key==="Enter"||event.key===" "){if(event.target===card||event.target.closest(".gs-country-body")){event.preventDefault();if(c.url)window.location.assign(c.url);}}});
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
  const openProfile=node("a","gs-country-open-profile");openProfile.href=c.url;openProfile.textContent="Open country page →";openProfile.setAttribute("aria-label","Open "+c.name+" dedicated education page");body.append(nameLink,small,snapshot,openProfile,links);card.append(flag,body);grid.appendChild(card);
 });
 if(!matches.length){const p=node("p","gs-empty");p.textContent="No matching country found. Try another spelling.";grid.appendChild(p);}
}
const countryCardActionStyle=document.createElement("style");countryCardActionStyle.textContent=".gs-country-open-profile{display:inline-flex;align-self:flex-start;margin:5px 0 2px;padding:6px 9px;border-radius:7px;background:#e0f2fe;color:#075080!important;font-size:11px;font-weight:850;text-decoration:none}.gs-country-open-profile:hover{background:#cdeafa}";document.head.appendChild(countryCardActionStyle);
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
 // Worldwide vacancy roundup belongs on the central directory page only, never on every country profile.
 const worldwideVacancies=$("globalVacancies");if(worldwideVacancies)worldwideVacancies.classList.add("gs-hidden");
 $("gsHero").classList.add("gs-hidden");$("gsDirectory").classList.add("gs-hidden");$("gsSearchWrap").classList.add("gs-hidden");$("gsCountry").classList.remove("gs-hidden");
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
 // Country-specific international recruitment and remote-teaching pathways.
 const pathways=node("section","gs-panel gs-section");pathways.id="country-teaching-pathways";
 const pathwayTitle=node("h2");pathwayTitle.textContent="Teaching Jobs & Remote Teaching Opportunities in "+c.name;
 const pathwayIntro=node("p","gs-muted");pathwayIntro.textContent="Explore international-school recruitment, local teaching opportunities and online tutoring platforms. These are job-search or platform entry points, not confirmation of an active vacancy or guaranteed applicant eligibility. Check each employer's current advert, country restrictions, qualifications, licensing and visa rules before applying.";
 const pathwayGrid=node("div","gs-country-pathway-grid");
 const makePathway=(heading,description,links)=>{
  const card=node("article","gs-card gs-country-pathway-card");
  const h=node("h3");h.textContent=heading;const p=node("p");p.textContent=description;const list=node("div","gs-country-pathway-links");
  links.forEach(item=>{const a=node("a");a.href=item.url;a.textContent=item.label;a.target="_blank";a.rel="noopener noreferrer";list.appendChild(a);});
  card.append(h,p,list);pathwayGrid.appendChild(card);
 };
 const q=encodeURIComponent(c.name);
 makePathway("International & local teaching jobs","Search school vacancies and international educator recruitment relevant to "+c.name+". Confirm the actual work location and whether sponsorship is offered.",[
  {label:"TES — search teaching jobs",url:"https://www.tes.com/jobs/search?keywords="+q},
  {label:"Schrole — educator vacancies",url:"https://www.schrole.com/jobs/"},
  {label:"ISS — international school openings",url:"https://www.iss.edu/for-individuals/find-a-job/current-openings/"},
  {label:"Teach Away — teaching jobs",url:"https://www.teachaway.com/teaching-jobs"}
 ]);
 makePathway("Online & remote teaching","Explore online tutoring and language-teaching platforms. Registration availability, subject demand, payment methods and country eligibility differ by platform; check their current requirements.",[
  {label:"Preply — become an online tutor",url:"https://preply.com/en/teach"},
  {label:"italki — teach languages online",url:"https://teach.italki.com/"},
  {label:"Classgap — become a teacher",url:"https://www.classgap.com/en/become-an-online-tutor"},
  {label:"Cambly — tutor application",url:"https://www.cambly.com/en/tutors"}
 ]);
 pathways.append(pathwayTitle,pathwayIntro,pathwayGrid);
 const pathwayStyle=node("style");pathwayStyle.textContent=".gs-country-pathway-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:14px}.gs-country-pathway-card{margin:0;padding:16px;background:#fff;border:1px solid #dbe5ef;border-radius:12px}.gs-country-pathway-card h3{margin:0 0 7px;color:#075080;font-size:16px}.gs-country-pathway-card p{font-size:12px;line-height:1.55;color:#5b6878}.gs-country-pathway-links{display:flex;gap:7px;flex-wrap:wrap}.gs-country-pathway-links a{display:inline-flex;padding:8px 10px;background:#e0f2fe;border:1px solid #bae6fd;border-radius:8px;color:#075080!important;font-size:11px;font-weight:800;text-decoration:none}.gs-country-pathway-links a:hover{background:#d0ebfa}@media(max-width:650px){.gs-country-pathway-grid{grid-template-columns:1fr}}";document.head.appendChild(pathwayStyle);
 const countryLayout=document.querySelector(".gs-country-layout");
 // Country portal quick navigation: shared layout, with country context retained in resource links.
 const portalNav=document.getElementById("countryPortalNav")||node("nav","gs-country-portal-nav");
 portalNav.classList.add("gs-country-portal-nav");portalNav.setAttribute("aria-label","Country education and career dashboard");portalNav.replaceChildren();
 const countryQuery=encodeURIComponent(c.name);
 const portalItems=[
  {label:"📘 Notes & Learning Resources",url:"/resources.html?country="+countryQuery+"&type=notes"},
  {label:"🏛️ National Examinations",url:"#exams"},
  {label:"📚 Curriculum & Syllabus",url:"#curriculum"},
  {label:"📝 Past National Exam Papers",url:"/resources.html?country="+countryQuery+"&type=past-papers"},
  {label:"🎯 Interactive Questions",url:"/interactive-questions.html?country="+countryQuery},
  {label:"💼 International & Local Teaching Jobs",url:"#country-teaching-pathways"},
  {label:"🌍 Online & Remote Teaching",url:"#country-teaching-pathways"},
  {label:"📜 Teaching Requirements & Certification",url:"#qualification-requirements"},
  {label:"🌍 Worldwide Teaching Vacancies",url:"/international-teaching-jobs.html"},
  {label:"🤝 Sponsors & Official Sources",url:"#sources"},
  {label:"🎓 Scholarships by Country",url:"#further"},
  {label:"🏫 All Schools",url:"#schools"}
 ];
 portalItems.forEach(item=>{const a=node("a");a.href=item.url;a.textContent=item.label;portalNav.appendChild(a);});
 const portalStyle=node("style");
 portalStyle.textContent=".gs-country-portal-nav{display:grid!important;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;width:100%;flex:0 0 100%;grid-column:1/-1;margin:16px 0 0;position:relative;z-index:5;visibility:visible;opacity:1}.gs-country-head-with-nav{display:grid!important;grid-template-columns:auto minmax(0,1fr);align-items:center}.gs-country-head-with-nav>.gs-country-portal-nav{grid-column:1/-1}.gs-country-portal-nav a{display:flex;align-items:center;justify-content:center;min-height:48px;padding:9px 10px;text-align:center;border:1px solid rgba(255,255,255,.72);border-radius:10px;background:rgba(255,255,255,.94);color:#075080!important;font-weight:850;font-size:12px;text-decoration:none;box-shadow:0 3px 10px #173b5910;transition:transform .18s,background .18s}.gs-country-portal-nav a:hover{background:#e0f2fe;transform:translateY(-2px)}.gs-country-head{background:linear-gradient(90deg,rgba(4,28,48,.76),rgba(7,89,133,.38)),var(--gs-learner-bg)!important;background-size:cover!important;background-position:center!important;color:#fff!important;min-height:180px}.gs-country-head h1,.gs-country-head .gs-muted{color:#fff!important;text-shadow:0 1px 3px rgba(0,0,0,.38)}@media(max-width:900px){.gs-country-portal-nav{grid-template-columns:repeat(2,minmax(0,1fr))}.gs-country-portal-nav a:last-child{grid-column:1/-1}}@media(max-width:460px){.gs-country-portal-nav{grid-template-columns:1fr}.gs-country-portal-nav a:last-child{grid-column:auto}.gs-country-head{gap:10px}.gs-country-portal-nav{margin-top:12px}}";
 document.head.appendChild(portalStyle);
 const countryHeader=document.querySelector(".gs-country-head");
 if(countryHeader){if(portalNav.parentElement!==countryHeader)countryHeader.appendChild(portalNav);countryHeader.classList.add("gs-country-head-with-nav");}
 else {const countryPanel=document.querySelector("#gsCountry > .gs-panel");if(countryPanel){const header=countryPanel.querySelector(".gs-country-head");if(header)header.insertAdjacentElement("afterend",portalNav);else countryPanel.prepend(portalNav);}else if(countryLayout){countryLayout.parentNode.insertBefore(portalNav,countryLayout);}}
 portalNav.style.display="grid";portalNav.style.visibility="visible";portalNav.style.opacity="1";

 // Country education dashboard: shared visual system, country-specific content and links.
 const learningHub=node("section","gs-country-learning-dashboard");learningHub.id="country-learning-hub";
 const hero=node("header","gs-country-learning-hero");
 const heroBrand=node("div","gs-country-learning-brand");
 const flagMark=node("span","gs-country-learning-flag");flagMark.textContent=c.flag||"🌍";
 const brandText=node("strong");brandText.textContent=c.name+" Education Resources";
 heroBrand.append(flagMark,brandText);
 const flagStrip=node("div","gs-country-learning-flag-strip");const flagStripMark=node("span");flagStripMark.textContent=c.flag||"🌍";flagStripMark.setAttribute("aria-label",c.name+" flag");flagStrip.appendChild(flagStripMark);
 const dashboardTop=node("div","gs-country-learning-topbar");
 const dashboardBrand=node("div","gs-country-learning-topbrand");dashboardBrand.append(heroBrand);
 const dashboardSearch=node("form","gs-country-learning-search");dashboardSearch.setAttribute("role","search");
 const dashboardSearchInput=node("input");dashboardSearchInput.type="search";dashboardSearchInput.placeholder="Search subjects, examinations or past papers…";dashboardSearchInput.setAttribute("aria-label","Search learning resources");
 const dashboardSearchButton=node("button");dashboardSearchButton.type="submit";dashboardSearchButton.textContent="Search";
 dashboardSearch.append(dashboardSearchInput,dashboardSearchButton);
 dashboardSearch.addEventListener("submit",event=>{event.preventDefault();const term=dashboardSearchInput.value.trim();if(term)window.location.href="/resources.html?country="+countryQuery+"&q="+encodeURIComponent(term);});
 const portalSelect=node("select");portalSelect.setAttribute("aria-label","Choose education portal");
 [["","JHS & SHS Portal"],["primary","Primary Portal"],["junior","Junior Secondary Portal"],["senior","Senior Secondary Portal"],["all","All learning resources"]].forEach(([value,label])=>{const option=node("option");option.value=value;option.textContent=label;portalSelect.appendChild(option);});
 portalSelect.addEventListener("change",()=>{const level=portalSelect.value;window.location.href="/resources.html?country="+countryQuery+(level&&level!=="all"?"&level="+encodeURIComponent(level):"");});
 dashboardTop.append(dashboardBrand,dashboardSearch,portalSelect);
 const heroCopy=node("div","gs-country-learning-hero-copy");
 const heroTitle=node("h2");heroTitle.textContent=c.name+" Education Resources";
 const heroTag=node("span","gs-country-learning-tagline");heroTag.textContent="Learn • Practise • Revise • Succeed";
 const heroDesc=node("p");heroDesc.textContent="Explore curriculum learning resources and prepare for "+((d.exams||[]).slice(0,2).map(x=>x.name).join(" and ")||"national examinations")+".";
 heroCopy.append(heroTitle,heroTag,heroDesc);hero.append(heroCopy);
 const dashBody=node("div","gs-country-learning-body");
 const leftColumn=node("div","gs-country-learning-left");
 const resourceGrid=node("div","gs-learning-grid");
 const resourceItems=[
  {icon:"▤",tone:"teal",title:"Online Notes",desc:"Subject notes and curriculum learning guides",type:"notes"},
  {icon:"▤",tone:"gold",title:"Past Papers",desc:"Past examination papers and revision resources",type:"past-papers"},
  {icon:"☑",tone:"red",title:"Mock Exams",desc:"Practise with examination-style tasks",type:"mock-exams"},
  {icon:"⚡",tone:"blue",title:"Interactive Quizzes",desc:"Test understanding with self-check questions",type:"quizzes"},
  {icon:"x²",tone:"purple",title:"Worked Examples",desc:"Step-by-step solutions and explanations",type:"worked-examples"},
  {icon:"⚗",tone:"green",title:"Science Practicals",desc:"Investigations, experiments and lab guidance",type:"practicals"},
  {icon:"▶",tone:"orange",title:"Video Lessons",desc:"Visual explanations and topic demonstrations",type:"video-lessons"},
  {icon:"🎓",tone:"gold",title:"Scholarships",desc:"Further study and funding opportunities",type:"scholarships"},
  {icon:"🏛",tone:"blue",title:"National Exam Resources",desc:"Explore this country's examinations and revision-paper links",type:"exam-resources"},
  {icon:"▦",tone:"teal",title:"Curriculum & Syllabuses",desc:"Explore national curriculum and school programmes",type:"curriculum"}
 ];
 resourceItems.forEach(item=>{
  const card=node("a","gs-learning-card");
  card.href=item.type==="quizzes"?"/interactive-questions.html?country="+countryQuery:
   item.type==="exam-resources"?"#papers":
   item.type==="curriculum"?"#curriculum":
   "/resources.html?country="+countryQuery+"&type="+encodeURIComponent(item.type);
  const icon=node("span","gs-learning-icon gs-learning-icon-"+item.tone);icon.textContent=item.icon;icon.setAttribute("aria-hidden","true");
  const title=node("strong");title.textContent=item.title;
  const desc=node("span","gs-learning-description");desc.textContent=item.desc;
  const cta=node("span","gs-learning-cta");cta.textContent="Explore learning resources  ›";
  card.append(icon,title,desc,cta);resourceGrid.appendChild(card);
 });
 leftColumn.appendChild(resourceGrid);
 const rightColumn=node("div","gs-country-learning-right");
 const examPanel=node("section","gs-learning-side-panel gs-learning-exam-panel");
 const examHead=node("div","gs-learning-side-heading");
 const examIcon=node("span","gs-learning-side-icon");examIcon.textContent="🎓";
 const examTitle=node("h3");examTitle.textContent="Examination preparation";examHead.append(examIcon,examTitle);
 const examList=node("div","gs-learning-side-links");
 (d.exams||[]).forEach(exam=>{
  const a=exam.url?node("a"):node("span");if(exam.url){a.href=safeUrl(exam.url);a.target="_blank";a.rel="noopener noreferrer";}
  const label=node("span");label.textContent=exam.name||"National examination";
  if(exam.url){const arrow=node("b");arrow.textContent="→";a.append(label,arrow);}else a.append(label);
  examList.appendChild(a);
 });
 [
  {label:"Past papers by year",url:"/resources.html?country="+countryQuery+"&type=past-papers"},
  {label:"Marking schemes and model answers",url:"/resources.html?country="+countryQuery+"&type=marking-schemes"}
 ].forEach(item=>{const a=node("a");a.href=item.url;const label=node("span");label.textContent=item.label;const arrow=node("b");arrow.textContent="→";a.append(label,arrow);examList.appendChild(a);});
 examPanel.append(examHead,examList);
 const systemPanel=node("section","gs-learning-side-panel gs-learning-system-panel");
 const systemHead=node("div","gs-learning-side-heading");
 const systemIcon=node("span","gs-learning-side-icon");systemIcon.textContent="🏛️";
 const systemTitle=node("h3");systemTitle.textContent="Explore "+c.name+"'s education system";systemHead.append(systemIcon,systemTitle);
 const systemList=node("div","gs-learning-side-links");
 [
  {label:"National curriculum",url:"#curriculum"},
  {label:"Schools directory",url:"#schools"},
  {label:"Examination authority",url:"#exams"},
  {label:"University admission guidance",url:"#further"}
 ].forEach(item=>{const a=node("a");a.href=item.url;const label=node("span");label.textContent=item.label;const arrow=node("b");arrow.textContent="→";a.append(label,arrow);systemList.appendChild(a);});
 systemPanel.append(systemHead,systemList);
 rightColumn.append(examPanel,systemPanel);dashBody.append(leftColumn,rightColumn);learningHub.append(flagStrip,dashboardTop,hero,dashBody);
 const learningStyle=node("style");
 learningStyle.textContent="\n.gs-country-learning-dashboard{width:100%;margin:0 0 24px;overflow:hidden;background:#f1f5f8;color:#102d4d;font-family:Arial,Helvetica,sans-serif;box-shadow:0 5px 22px rgba(15,45,70,.1)}\n.gs-country-learning-flag-strip{height:18px;display:flex;align-items:center;justify-content:center;background:linear-gradient(90deg,#d62828 0 14%,#087b45 14% 37%,#f4c430 37% 63%,#087b45 63% 86%,#d62828 86%);border-bottom:1px solid #d8e0e6}\n.gs-country-learning-flag-strip span{font-size:17px;line-height:1;filter:drop-shadow(0 1px 1px #0003)}\n.gs-country-learning-topbar{display:grid;grid-template-columns:minmax(250px, .9fr) minmax(260px,1.2fr) minmax(170px,.7fr);gap:18px;align-items:center;padding:12px clamp(18px,2.5vw,42px);background:#fff;border-bottom:1px solid #e2e8ef}\n.gs-country-learning-topbrand{min-width:0}.gs-country-learning-brand{display:flex;align-items:center;gap:12px;color:#102d4d;font-size:clamp(16px,1.55vw,24px);font-weight:900;line-height:1.15}\n.gs-country-learning-flag{display:grid;place-items:center;flex:0 0 54px;width:54px;height:54px;border-radius:50%;background:#f8fafc;border:1px solid #d9e2e9;font-size:34px;box-shadow:0 2px 5px #102d4d12}\n.gs-country-learning-search{display:flex;min-width:0;align-items:center;gap:0;border-radius:999px;background:#f0f3f6;border:1px solid #e6ebf0;overflow:hidden}\n.gs-country-learning-search input{width:100%;min-width:0;border:0;outline:0;background:transparent;padding:14px 18px;font:inherit;font-size:14px;color:#243b53}\n.gs-country-learning-search button{display:none}\n.gs-country-learning-topbar select{width:100%;min-width:0;border:0;border-radius:999px;background:#f0f3f6;padding:13px 16px;color:#102d4d;font:inherit;font-size:14px}\n.gs-country-learning-hero{position:relative;display:flex;align-items:center;min-height:205px;padding:28px clamp(22px,3.2vw,54px);background:linear-gradient(90deg,rgba(0,73,51,.98) 0%,rgba(0,91,62,.94) 52%,rgba(0,91,62,.45) 100%),url('https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=82') center 42%/cover;color:#fff}\n.gs-country-learning-hero-copy{max-width:900px}.gs-country-learning-hero h2{margin:0 0 10px;color:#fff;font-size:clamp(30px,3.4vw,52px);line-height:1.08;font-weight:900;letter-spacing:-.025em}\n.gs-country-learning-tagline{display:inline-block;padding:8px 18px;border-radius:999px;background:#f3c52e;color:#172d42;font-size:clamp(14px,1.35vw,20px);font-weight:900}\n.gs-country-learning-hero p{margin:12px 0 0;color:#fff;font-size:clamp(13px,1.15vw,18px);line-height:1.5}\n.gs-country-learning-body{display:grid;grid-template-columns:minmax(0,2fr) minmax(300px,1fr);gap:22px;padding:24px clamp(18px,2.4vw,40px) 30px;background:linear-gradient(135deg,#f3f6f8,#eaf0f4)}\n.gs-country-learning-left{min-width:0}.gs-learning-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}\n.gs-learning-card{display:flex;min-width:0;min-height:220px;flex-direction:column;align-items:flex-start;padding:20px 18px;border:1px solid #d3dce4;border-radius:11px;background:#fff;color:#102d4d!important;text-decoration:none;box-shadow:0 2px 6px rgba(17,46,73,.1);transition:transform .18s,box-shadow .18s}\n.gs-learning-card:hover{transform:translateY(-3px);box-shadow:0 8px 18px rgba(17,46,73,.14)}\n.gs-learning-icon{display:grid;place-items:center;width:82px;height:82px;margin:0 0 16px;border-radius:50%;color:#fff;font-size:34px;font-weight:800}\n.gs-learning-icon-teal{background:#087f7b}.gs-learning-icon-gold{background:#d6a10c}.gs-learning-icon-red{background:#c9272c}.gs-learning-icon-blue{background:#2867bd}.gs-learning-icon-purple{background:#7040a2}.gs-learning-icon-green{background:#16845b}.gs-learning-icon-orange{background:#e65d3e}\n.gs-learning-card strong{color:#102d4d;font-size:clamp(14px,1.25vw,19px);line-height:1.25}\n.gs-learning-description{margin-top:9px;color:#667587;font-size:12px;line-height:1.45;flex:1}\n.gs-learning-cta{margin-top:15px;color:#647487;font-size:12px;font-weight:700}\n.gs-country-learning-right{display:flex;flex-direction:column;gap:16px;min-width:0}\n.gs-learning-side-panel{overflow:hidden;border:1px solid #d4dfe7;border-radius:11px;background:#fff;box-shadow:0 2px 6px rgba(17,46,73,.08)}\n.gs-learning-exam-panel{margin:0;padding:0;border-left:10px solid #d4a10e;background:#fff}.gs-learning-system-panel{border-left:10px solid #13885c}\n.gs-learning-side-heading{display:flex;align-items:center;gap:12px;padding:18px 18px 13px}.gs-learning-side-heading h3{margin:0;color:#102d4d;font-size:clamp(16px,1.45vw,21px);line-height:1.3}.gs-learning-side-icon{font-size:30px}\n.gs-learning-side-links{padding:0 18px 12px}.gs-learning-side-links a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 3px;border-top:1px solid #e8edf1;color:#102d4d!important;font-size:14px;line-height:1.35;text-decoration:none}\n.gs-learning-side-links a b{color:#7b8997;font-size:20px}.gs-learning-exam-panel .gs-learning-side-links a b{color:#c59a12}.gs-learning-system-panel .gs-learning-side-links a b{color:#16845b}\n.gs-learning-side-links a:hover{color:#0873a5!important;background:#f7fbfd}\n@media(max-width:1100px){.gs-country-learning-body{grid-template-columns:minmax(0,1.5fr) minmax(270px,1fr);gap:16px}.gs-learning-grid{gap:11px}.gs-learning-card{padding:16px;min-height:195px}.gs-learning-icon{width:66px;height:66px;font-size:28px}}\n@media(max-width:850px){.gs-country-learning-topbar{grid-template-columns:1fr minmax(0,1.3fr);gap:12px}.gs-country-learning-topbar select{grid-column:1/-1}.gs-country-learning-body{grid-template-columns:1fr;padding:16px}.gs-country-learning-hero{min-height:190px}.gs-learning-grid{grid-template-columns:repeat(4,minmax(0,1fr))}}\n@media(max-width:600px){.gs-country-learning-topbar{grid-template-columns:1fr;padding:12px;gap:10px}.gs-country-learning-topbar select{grid-column:auto}.gs-country-learning-flag{width:46px;height:46px;flex-basis:46px;font-size:28px}.gs-country-learning-search input{padding:12px 15px}.gs-country-learning-hero{min-height:180px;padding:22px 16px;background-position:62% center}.gs-country-learning-hero h2{font-size:28px}.gs-country-learning-tagline{font-size:13px;padding:7px 12px}.gs-country-learning-hero p{font-size:13px}.gs-country-learning-body{padding:12px}.gs-learning-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.gs-learning-card{min-height:180px;padding:14px}.gs-learning-icon{width:58px;height:58px;font-size:25px;margin-bottom:12px}.gs-learning-card strong{font-size:14px}.gs-learning-description,.gs-learning-cta{font-size:10px}.gs-learning-side-heading{padding:15px}.gs-learning-side-links{padding:0 15px 10px}.gs-learning-side-links a{font-size:13px;padding:11px 2px}}\n";
 document.head.appendChild(learningStyle);
 // Make the new learning dashboard the primary, full-width country-page header.
 // Place it outside the legacy two-column country layout so old sidebar/header styles
 // cannot constrain it. Keep the existing country sections and marketplace intact below.
 if(countryLayout){
  const parent=countryLayout.parentElement;
  const legacyIntro=document.querySelector("#gsCountry > .gs-panel");
  const oldDashboard=document.getElementById("country-learning-hub");
  if(oldDashboard&&oldDashboard!==learningHub)oldDashboard.remove();
  if(parent){
   parent.insertBefore(learningHub,countryLayout);
   parent.insertBefore(marketplace,countryLayout);
   const main=countryLayout.querySelector(".gs-main-content");
   if(main)parent.insertBefore(main,countryLayout);
   countryLayout.remove();
  }
  if(legacyIntro)legacyIntro.remove();
  const siteTop=document.querySelector(".gs-top");if(siteTop)siteTop.classList.add("gs-hidden");
  const backLink=document.querySelector("#gsCountry > .gs-back");if(backLink)backLink.classList.add("gs-hidden");
 }else{
  const countryRoot=$("gsCountry");
  if(countryRoot)countryRoot.prepend(learningHub,marketplace);
 }
 fetch("/api/global-country-stats?country="+encodeURIComponent(c.name),{headers:{Accept:"application/json"},cache:"no-store"}).then(r=>r.json()).then(data=>{if(data&&data.ok){teacherNum.textContent=String(data.approvedTeachers||0);teacherLabel.textContent=(data.approvedTeachers===1?"approved teacher":"approved teachers")+" registered for "+c.name;learnerNum.textContent=String(data.activeLearnerRequests||0);learnerLabel.textContent=(data.activeLearnerRequests===1?"active learner request":"active learner requests")+" in "+c.name+" (identities kept private)";}else{teacherNum.textContent="—";teacherLabel.textContent="Teacher count temporarily unavailable";learnerNum.textContent="—";learnerLabel.textContent="Learner count temporarily unavailable";}}).catch(()=>{teacherNum.textContent="—";teacherLabel.textContent="Teacher count temporarily unavailable";learnerNum.textContent="—";learnerLabel.textContent="Learner count temporarily unavailable";});

 text($("verificationNote"),d.sources?"Some official-source links are curated below. This is not a complete national school or vacancy register. Check each linked record and its date before relying on it.":"Data status: detailed country-specific information is not yet curated in this directory. No school totals, exam dates, vacancies, salary figures, teacher rules or scholarship listings are being invented. Official sources must be researched before any field is marked verified.");
 text($("countryLanguages"),d.officialLanguages||officialLanguageReference[slug]||"Not yet verified for this page. Confirm language status with the country's government or education authority.");
 text($("countryAuthority"),d.authority||"Not yet curated. The responsible national or subnational education authority must be identified and linked before this field is marked verified.");
 text($("countryCurriculum"),d.curriculum||"Not yet verified for this country. The curriculum name, responsible authority, grade coverage and approved international programmes need country-specific sources.");
 linkList("curriculumLinks",d.curriculumSources,null);
 linkList("examLinks",d.exams,"examEmpty","The supplied country examination list does not include this country.");
 text($("countryTerms"),d.termCalendar||"Not yet verified for this country. No start dates, closing dates or academic-year dates are supplied until a current official calendar is located.");
 text($("countryQualifications"),d.qualificationRequirements||"Not yet verified for this country. Confirm the minimum academic qualification, teacher-training award, registration/licence, subject grades, language rules and work authorisation with the relevant regulator and employer.");
 text($("countrySystem"),d.system||"Not yet verified. School stages, grade equivalents and curriculum information need country-specific official sources.");
 text($("countryCalendar"),d.calendar||"Not yet verified. Check the relevant ministry, state, province, district or individual school calendar.");
 // Keep each school's country flag visible in the school-directory list on every country page.
 const schoolFlagStyle=node("style");
 schoolFlagStyle.textContent=".gs-school-link-row{display:flex;align-items:flex-start;gap:10px;padding:9px 10px;margin:0 0 7px;border:1px solid #e7edf2;border-radius:9px;background:#fff}.gs-school-link-row .gs-school-flag{font-size:23px;line-height:1.25;flex:0 0 auto}.gs-school-link-row a{display:block;min-width:0;overflow-wrap:anywhere}.gs-school-link-row a:hover{text-decoration:underline}";
 document.head.appendChild(schoolFlagStyle);
 // Link each country dashboard to the matching Schools of the World directory.
 // This is a source link for the external live directory, not a claim that its full dataset is imported into CBE Nexus.
 const worldDirectorySlug=String(c.slug||"").toLowerCase();
 const worldDirectoryLink={name:"Browse Schools of the World — "+c.name,url:"https://schools.brasa.education/"+worldDirectorySlug+"/schools/",type:"External global school directory",body:"Browse the source directory; coverage and record counts vary by country"};
 const countrySchoolLinks=Array.isArray(d.schools)?d.schools.slice():[];
 if(!countrySchoolLinks.some(s=>s&&s.url===worldDirectoryLink.url))countrySchoolLinks.push(worldDirectoryLink);
 linkList("schoolLinks",countrySchoolLinks,"schoolEmpty","No verified school directory records have been added for this country yet.",c.flag);
 
// Build a dedicated national-examinations dashboard inside every country page.
// Only records already present in the country data are presented as country-specific exams;
// empty categories receive research links, never invented examination names.
(function renderNationalExamDashboard(){
 const host=$("examLinks");if(!host)return;
 const records=Array.isArray(d.exams)?d.exams.filter(x=>x&&typeof x==="object"):[];
 const groups=[
  {id:"primary",title:"Primary examinations and assessments",terms:/primary|elementary|foundation|kpsea|kilea|kplea|sfna|psle|ple\b|ncee|p6\b|grade ?[1-7]|class ?[1-7]/},
  {id:"junior",title:"Junior secondary examinations",terms:/junior|lower secondary|middle school|jss|kjsea|kplea|ftna|uce\b|bece|s3\b|grade ?(?:8|9|10)/},
  {id:"senior",title:"Senior secondary and school-leaving examinations",terms:/senior|upper secondary|secondary|school leaving|leaving certificate|kcse|waec|neco|ssce|wassce|csee|acsee|uace|hsc|a.level|gce|baccalaureate|bac|matric|abitur|gaokao|csat|national.*exam|s6\b/},
  {id:"university",title:"University entrance and admission examinations",terms:/university|tertiary|entrance|admission|placement|aptitude|sat|act|jee|neet|cuet|utme|post.?utme|g?t.?exam|ucat/},
  {id:"vocational",title:"Technical, vocational and professional assessments",terms:/technical|vocational|trade|professional|certification|competency|polytechnic|tv(et|e)|artisan|gbce|abce/}
 ];
 const section=node("div","gs-exam-dashboard");
 const intro=node("p","gs-muted");intro.textContent="Explore the national assessment pathway by education level. Examination names and links below are shown as country-specific facts only when curated in the country record; research links are clearly identified and are not verified examination listings.";
 section.appendChild(intro);
 const grid=node("div","gs-exam-level-grid");
 const makeResearch=(title,query)=>{
  const a=node("a","gs-exam-research");a.href="https://www.google.com/search?q="+encodeURIComponent(query);
  a.textContent="Find official "+title+" information for "+c.name+" ↗";a.target="_blank";a.rel="noopener noreferrer";return a;
 };
 groups.forEach(group=>{
  const card=node("article","gs-card gs-exam-level-card");
  const h=node("h3");h.textContent=group.title;
  const list=node("div","gs-exam-records");
  const matched=records.filter(item=>{
   const hay=[item.name,item.label,item.body,item.level,item.type,item.description].filter(Boolean).join(" ").toLowerCase();
   return group.terms.test(hay);
  });
  matched.forEach(item=>{
   const a=node("a");a.href=safeUrl(item.url);a.textContent=(item.name||item.label||"Examination")+(item.body?" — "+item.body:"")+(item.level?" · "+item.level:"");
   if(/^https?:/.test(item.url||"")){a.target="_blank";a.rel="noopener noreferrer";}
   list.appendChild(a);
  });
  if(!matched.length){
   const p=node("p","gs-exam-unverified");p.textContent="No country-specific examination record has yet been verified in this category.";
   list.append(p,makeResearch(group.title.toLowerCase(),"official "+group.title+" examining board examination authority "+c.name+" government"));
  }
  card.append(h,list);grid.appendChild(card);
 });
 section.appendChild(grid);
 const existing=node("div","gs-exam-all-records");
 const allTitle=node("h3");allTitle.textContent="All currently curated national examination links";
 existing.appendChild(allTitle);
 if(records.length){
  records.forEach(item=>{const a=node("a");a.href=safeUrl(item.url);a.textContent=(item.name||item.label||"Examination")+(item.level?" · "+item.level:"")+(item.body?" — "+item.body:"");if(/^https?:/.test(item.url||"")){a.target="_blank";a.rel="noopener noreferrer";}existing.appendChild(a);});
 }else{
  const p=node("p","gs-exam-unverified");p.textContent="The country examination register is awaiting verified entries. CBE Nexus will not guess examination names, grade levels, dates or examining bodies.";
  existing.append(p);
 }
 existing.append(makeResearch("national examinations and the official examining authority","official national examinations examination council board "+c.name+" government"));
 section.appendChild(existing);
 const note=node("p","gs-note");note.textContent="Verification standard: each examination entry should identify the education level, official examination name, examining authority, official source URL and latest verification date. Past-paper links must be checked for copyright and reuse permission.";
 section.appendChild(note);
 const style=node("style");style.textContent=".gs-exam-dashboard{margin:14px 0}.gs-exam-level-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:14px 0}.gs-exam-level-card{margin:0;padding:15px;border:1px solid #dbe5ef;border-radius:12px;background:#fff}.gs-exam-level-card h3,.gs-exam-all-records h3{margin:0 0 10px;color:#075080;font-size:16px}.gs-exam-records,.gs-exam-all-records{display:grid;gap:8px}.gs-exam-records a,.gs-exam-all-records>a{display:block;padding:9px 11px;border-radius:8px;background:#eaf6fd;color:#075080!important;font-weight:750;text-decoration:none;overflow-wrap:anywhere}.gs-exam-records a:hover,.gs-exam-all-records>a:hover{background:#d9effb;text-decoration:underline}.gs-exam-unverified{margin:0;color:#64748b;font-size:13px;line-height:1.5}.gs-exam-records .gs-exam-research{background:#fff7e6;border:1px solid #f5d99b;color:#805500!important;font-size:12px}.gs-exam-all-records{margin-top:18px;padding:14px;border:1px solid #dbe5ef;border-radius:12px;background:#f8fbfe}.gs-exam-all-records>p{margin:0}.gs-exam-dashboard>.gs-note{margin-top:14px}@media(max-width:650px){.gs-exam-level-grid{grid-template-columns:1fr}.gs-exam-level-card{padding:13px}}";
 section.appendChild(style);
 host.replaceChildren(section);
 const empty=$("examEmpty");if(empty)empty.classList.add("gs-hidden");
})();

 linkList("paperLinks",d.papers,null);
(function renderCountryPaperDashboard(){
 const host=$("paperLinks");if(!host)return;
 const records=Array.isArray(d.papers)?d.papers.filter(x=>x&&typeof x==="object"):[];
 const levels=[
  {title:"Primary-level past papers",terms:/primary|elementary|foundation|kpsea|psle|ple|class ?[1-7]|grade ?[1-7]/},
  {title:"Junior secondary past papers",terms:/junior|lower secondary|middle school|jss|kjsea|grade ?(?:8|9|10)/},
  {title:"Senior secondary and school-leaving papers",terms:/senior|upper secondary|secondary|school leaving|kcse|waec|neco|ssce|hsc|a.level|gce|baccalaureate|matric|abitur/},
  {title:"University entrance and admission practice",terms:/university|tertiary|entrance|admission|placement|aptitude|sat|act|jee|neet|cuet|utme/}
 ];
 const wrap=node("div","gs-paper-dashboard");
 const intro=node("p","gs-muted");intro.textContent="Browse papers by level. CBE Nexus original practice questions must be distinguished from official past examination papers; use official examination-board sources wherever available.";wrap.appendChild(intro);
 const grid=node("div","gs-paper-level-grid");
 levels.forEach(level=>{
  const card=node("article","gs-card gs-paper-level-card"),h=node("h3"),list=node("div","gs-paper-level-links");h.textContent=level.title;
  const matches=records.filter(item=>level.terms.test([item.name,item.label,item.body,item.level,item.type,item.description].filter(Boolean).join(" ").toLowerCase()));
  matches.forEach(item=>{const a=node("a");a.href=safeUrl(item.url);a.textContent=(item.name||item.label||"Paper resource")+(item.level?" · "+item.level:"")+(item.body?" — "+item.body:"");if(/^https?:/.test(item.url||"")){a.target="_blank";a.rel="noopener noreferrer";}list.appendChild(a);});
  if(!matches.length){const p=node("p","gs-exam-unverified");p.textContent="No verified paper collection is currently linked for this level.";list.append(p);}
  card.append(h,list);grid.appendChild(card);
 });
 wrap.appendChild(grid);
 const research=node("a","gs-paper-official-search");research.href="https://www.google.com/search?q="+encodeURIComponent("official "+c.name+" national examination board past papers specimen papers marking schemes");research.textContent="Research official past papers, specimen papers and marking schemes for "+c.name+" ↗";research.target="_blank";research.rel="noopener noreferrer";wrap.appendChild(research);
 const style=node("style");style.textContent=".gs-paper-dashboard{margin:14px 0}.gs-paper-level-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:14px 0}.gs-paper-level-card{margin:0;padding:14px;border:1px solid #dbe5ef;border-radius:12px;background:#fff}.gs-paper-level-card h3{margin:0 0 10px;color:#075080;font-size:15px}.gs-paper-level-links{display:grid;gap:7px}.gs-paper-level-links a,.gs-paper-official-search{display:block;padding:9px 11px;border-radius:8px;background:#eaf6fd;color:#075080!important;font-size:13px;font-weight:750;text-decoration:none;overflow-wrap:anywhere}.gs-paper-official-search{background:#fff7e6;border:1px solid #f5d99b;color:#805500!important;margin-top:12px}@media(max-width:650px){.gs-paper-level-grid{grid-template-columns:1fr}}";
 wrap.appendChild(style);host.replaceChildren(wrap);
})();linkList("jobLinks",d.jobs,null);
 // Add country-specific live search links for every registered country. These are discovery links,
 // not claims that a vacancy is open; deadlines must be checked on the original employer advert.
 const jobsHost=$("jobLinks");
 if(jobsHost){
  const q=encodeURIComponent(c.name);
  const liveSearches=[
   {name:"Search current teaching vacancies in "+c.name+" on Tes",url:"https://www.tes.com/jobs/search/international?keywords="+q},
   {name:"View the central worldwide teaching vacancies roundup",url:"/global-schools#globalVacancies"}
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