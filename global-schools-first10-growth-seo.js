(function(){
"use strict";
const countries={
"kenya":{name:"Kenya",cities:["Nairobi","Mombasa","Kisumu","Nakuru","Eldoret","Thika"],exams:"KPSEA, KJSEA and KCSE transition resources",curriculum:"Kenya CBE and CBC curriculum"},
"nigeria":{name:"Nigeria",cities:["Lagos","Abuja","Port Harcourt","Ibadan","Kano","Enugu"],exams:"BECE, WAEC WASSCE and NECO SSCE resources",curriculum:"Nigeria national curriculum and NERDC syllabuses"},
"south-africa":{name:"South Africa",cities:["Johannesburg","Cape Town","Durban","Pretoria","Gqeberha","Bloemfontein"],exams:"Grade 12 NSC matric and CAPS assessment resources",curriculum:"South Africa CAPS curriculum"},
"ghana":{name:"Ghana",cities:["Accra","Kumasi","Tamale","Takoradi","Cape Coast","Tema"],exams:"BECE and WASSCE resources",curriculum:"Ghana NaCCA curriculum"},
"uganda":{name:"Uganda",cities:["Kampala","Entebbe","Jinja","Mbarara","Gulu","Mbale"],exams:"PLE, UCE and UACE resources",curriculum:"Uganda NCDC curriculum"},
"tanzania":{name:"Tanzania",cities:["Dar es Salaam","Dodoma","Arusha","Mwanza","Mbeya","Zanzibar"],exams:"PSLE, CSEE and ACSEE resources",curriculum:"Tanzania TIE curriculum"},
"rwanda":{name:"Rwanda",cities:["Kigali","Huye","Musanze","Rubavu","Rusizi","Nyagatare"],exams:"Rwanda national assessment and examination resources",curriculum:"Rwanda REB curriculum"},
"ethiopia":{name:"Ethiopia",cities:["Addis Ababa","Dire Dawa","Hawassa","Bahir Dar","Mekelle","Adama"],exams:"Grade 8 and Grade 12 national examination guidance",curriculum:"Ethiopia national and regional curriculum guidance"},
"zambia":{name:"Zambia",cities:["Lusaka","Ndola","Kitwe","Livingstone","Chipata","Kabwe"],exams:"ECZ Grade 7 and School Certificate assessment resources",curriculum:"Zambia 2023 Education Curriculum Framework"},
"zimbabwe":{name:"Zimbabwe",cities:["Harare","Bulawayo","Mutare","Gweru","Masvingo","Chitungwiza"],exams:"ZIMSEC Grade 7, O Level and A Level resources",curriculum:"Zimbabwe national school curriculum"}
};
const $=id=>document.getElementById(id);
const el=(tag,cls,txt)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(txt!==undefined)n.textContent=txt;return n;};
const addMeta=(selector,attr,key,value)=>{let m=document.querySelector(selector);if(!m){m=document.createElement("meta");m.setAttribute(attr,key);document.head.appendChild(m);}m.content=value;};
function build(){
 const match=location.pathname.match(/^\/global-schools\/([^/]+)\/?$/);if(!match)return;
 const slug=decodeURIComponent(match[1]).toLowerCase(),c=countries[slug];if(!c)return;
 const country=encodeURIComponent(c.name),cityNames=c.cities.join(", ");
 const title=c.name+" Education, Exams, Teaching Jobs & Online Tutors | CBE Nexus";
 const description="Find "+c.name+" "+c.curriculum+", free "+c.exams+", worked-example notes and interactive questions. Explore teaching jobs, affordable online tutors, teacher resource sales, international curricula, CV writing and free AI training.";
 document.title=title;
 addMeta('meta[name="description"]',"name","description",description);
 addMeta('meta[name="keywords"]',"name","keywords",[c.name+" education resources",c.name+" teaching jobs",c.name+" online tutors",c.name+" national examinations",c.name+" free exam revision",c.name+" worked examples",c.name+" interactive questions",c.name+" teacher marketplace",c.name+" sell notes online",c.name+" international curriculum",c.name+" IGCSE Cambridge Pearson Edexcel IB",c.name+" teacher CV writing",c.name+" free AI training",...c.cities.map(x=>"education resources "+x),...c.cities.map(x=>"online tutors "+x)].join(", "));
 addMeta('meta[property="og:title"]',"property","og:title",title);
 addMeta('meta[property="og:description"]',"property","og:description",description);
 const canonical="https://cbenexus.com/global-schools/"+slug;
 let link=document.querySelector('link[rel="canonical"]');if(!link){link=document.createElement("link");link.rel="canonical";document.head.appendChild(link);}link.href=canonical;
 const root=$("gsCountry");if(!root||document.getElementById("country-service-growth-hub"))return;
 const hub=el("section","gs-panel gs-section");hub.id="country-service-growth-hub";
 hub.append(el("h2",null,c.name+" Education, Teaching & Career Services"),el("p","gs-muted","A country-focused gateway for learners, parents, teachers and schools in "+c.name+". Browse national curriculum and examination support, access international learning pathways, find teaching opportunities and connect with online education services. Job listings, tutor availability, fees, admission rules and examination dates must be checked on the relevant provider or official authority before acting."));
 const grid=el("div","cbe-country-growth-grid");
 const services=[
 ["🧑‍🏫","International & local teaching jobs","Explore school vacancies, visa-sponsored opportunities and international recruitment guidance. Verify live employer adverts, closing dates, qualifications and work-permit rules.","/international-teaching-jobs.html?country="+country],
 ["📝","Free national examination revision","Find free revision guidance for "+c.exams+", including subject preparation, practice tasks and examination advice. Official past papers are linked only where authorised.","/resources.html?country="+country+"&type=past-papers"],
 ["📘","Free notes with worked examples","Study "+c.curriculum+" with topic notes, diagrams, step-by-step worked examples, calculations and revision activities. Coverage varies by grade and subject.","/country-online-notes.html?country="+country],
 ["🎯","Free interactive questions","Practise with online quizzes and self-check questions for different grades, subjects and examination pathways.","/interactive-questions.html?country="+country],
 ["💚","Earn online teaching and selling resources","Teachers can apply to submit quality notes, mock examinations and revision materials for admin review. Approved resource sales follow the published 70% teacher share; approval and payout conditions apply.","/seller-marketplace.html?country="+country],
 ["👨‍👩‍👧","Find affordable qualified teachers","Parents and learners can request online tuition and seek teachers by subject, curriculum, grade and timetable. Confirm credentials, availability and fees before booking.","/online-teaching.html?country="+country],
 ["🌍","International curricula: IGCSE, Cambridge, Pearson & IB","Explore Cambridge, IGCSE, Pearson Edexcel, International A Level and IB programmes, with subject notes and worked examples where available.","/international-curriculum.html?country="+country],
 ["📄","Professional teacher CV writing","Prepare an ATS-friendly CV for local and international teaching applications, with guidance on qualifications, experience and references.","/professional-cv-writing.html?country="+country],
 ["🤖","Free AI training and certification","Explore AI literacy and digital-skills training for teachers, students and schools. Certificate eligibility depends on the course and provider.","/ai-training.html?country="+country]
 ];
 services.forEach(([icon,title,body,url])=>{const card=el("article","cbe-country-growth-card");card.append(el("div","cbe-growth-icon",icon),el("h3",null,title),el("p",null,body));const a=el("a","cbe-growth-link","Explore "+title+" →");a.href=url;card.append(a);grid.append(card);});
 hub.append(grid);
 const loc=el("section","cbe-country-location-panel");loc.append(el("h3",null,"Location-focused education searches in "+c.name),el("p","gs-muted","Explore education, tutoring and teacher opportunities by city or region. These are geographic search targets, not a claim that a school, vacancy or tutor has been verified in every location."));
 const cityGrid=el("div","cbe-country-city-grid");
 c.cities.forEach(city=>{const item=el("div","cbe-country-city");item.append(el("strong",null,city));const links=el("div","cbe-city-links");[["Find online tutors","/online-teaching.html?country="+country+"&city="+encodeURIComponent(city)],["Search teaching jobs","/international-teaching-jobs.html?country="+country+"&city="+encodeURIComponent(city)],["Browse learning resources","/resources.html?country="+country+"&city="+encodeURIComponent(city)]].forEach(([label,url])=>{const a=el("a",null,label);a.href=url;links.append(a);});item.append(links);cityGrid.append(item);});
 loc.append(cityGrid);hub.append(loc);
 const faq=el("section","cbe-country-growth-faq");faq.append(el("h3",null,"Frequently asked questions — "+c.name));
 const questions=[
 ["Where can I find free "+c.name+" national examination revision?","Use the national examination and revision links on this page. Check the relevant examining authority for current syllabuses, candidate rules and examination dates."],
 ["Can I find qualified online teachers in "+c.name+"?","You can submit a learner request and specify country, city, grade, subject, curriculum, timetable and budget. Tutor availability and credentials must be confirmed before lessons begin."],
 ["Can teachers in "+c.name+" earn by selling notes and mock examinations?","Teachers may apply to become resource sellers, submit original or properly licensed materials for admin approval and earn the stated share on eligible approved sales. Check seller terms and payout requirements."],
 ["Does CBE Nexus provide Cambridge, IGCSE, Pearson Edexcel and IB resources?","The international curriculum section links to these pathways. Check each subject page for the specific syllabus, level, topic coverage and available worked examples."],
 ["Are AI training and certificates free?","Free training opportunities are listed on the AI training page. Certificate availability and eligibility depend on the individual course and provider."]
 ];
 const faqList=el("div","cbe-growth-faq-list");questions.forEach(([q,a])=>{const d=el("details","cbe-growth-faq-item");d.append(el("summary",null,q),el("p",null,a));faqList.append(d);});faq.append(faqList);hub.append(faq);
 const style=el("style");style.textContent="#country-service-growth-hub{margin:20px 0;padding:clamp(16px,2vw,26px);border:1px solid #d7e5ef;border-radius:16px;background:linear-gradient(145deg,#f7fcff,#fff)}.cbe-country-growth-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:13px;margin:18px 0}.cbe-country-growth-card{display:flex;flex-direction:column;min-width:0;padding:17px;border:1px solid #dbe7ef;border-radius:13px;background:#fff;box-shadow:0 3px 12px #0f355010}.cbe-growth-icon{font-size:27px}.cbe-country-growth-card h3{margin:9px 0;color:#075080;font-size:16px;line-height:1.3}.cbe-country-growth-card p{margin:0 0 14px;color:#526477;font-size:13px;line-height:1.6;flex:1}.cbe-growth-link{display:inline-flex;align-self:flex-start;padding:9px 12px;border-radius:8px;background:#e0f2fe;color:#075080!important;font-size:12px;font-weight:850;text-decoration:none}.cbe-growth-link:hover{background:#cceafa}.cbe-country-location-panel{margin:20px 0;padding:16px;border-radius:13px;background:#eff8ff;border:1px solid #cde7f8}.cbe-country-location-panel h3,.cbe-country-growth-faq h3{margin:0 0 8px;color:#075080}.cbe-country-city-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:14px}.cbe-country-city{padding:12px;background:#fff;border:1px solid #dbe7ef;border-radius:10px}.cbe-country-city strong{display:block;margin-bottom:8px;color:#163b58}.cbe-city-links{display:grid;gap:6px}.cbe-city-links a{color:#075080!important;font-size:12px;font-weight:750;text-decoration:underline}.cbe-country-growth-faq{margin-top:20px}.cbe-growth-faq-list{display:grid;gap:8px;margin-top:10px}.cbe-growth-faq-item{padding:12px 14px;border:1px solid #dbe7ef;border-radius:10px;background:#fff}.cbe-growth-faq-item summary{cursor:pointer;color:#075080;font-weight:800}.cbe-growth-faq-item p{margin:9px 0 0;color:#475569;line-height:1.6;font-size:13px}@media(max-width:850px){.cbe-country-growth-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.cbe-country-city-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.cbe-country-growth-grid,.cbe-country-city-grid{grid-template-columns:1fr}.cbe-country-growth-card{padding:14px}}";
 document.head.append(style);
 const dashboard=document.getElementById("country-learning-hub");if(dashboard&&dashboard.parentElement)dashboard.parentElement.insertBefore(hub,dashboard.nextSibling);else root.prepend(hub);
 const serviceItems=services.map(([icon,name,body,url],i)=>({"@type":"ListItem","position":i+1,"name":name,"url":"https://cbenexus.com"+url.split("?")[0]}));
 const graph={"@context":"https://schema.org","@graph":[{"@type":"WebPage","name":title,"description":description,"url":canonical,"inLanguage":"en","about":[{"@type":"Country","name":c.name}],"keywords":[c.name+" education",c.name+" national exams",c.name+" teaching jobs",c.name+" online tutoring",c.name+" free revision",c.name+" international curriculum",...c.cities.map(x=>x+" education and tutoring")].join(", ")},{"@type":"ItemList","name":c.name+" education and career services","itemListElement":serviceItems},{"@type":"FAQPage","mainEntity":questions.map(([q,a])=>({"@type":"Question","name":q,"acceptedAnswer":{"@type":"Answer","text":a}}))}]};
 let schema=document.getElementById("country-growth-seo-jsonld");if(!schema){schema=document.createElement("script");schema.id="country-growth-seo-jsonld";schema.type="application/ld+json";document.head.append(schema);}schema.textContent=JSON.stringify(graph);
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",build,{once:true});else build();
})();