/* CBE Nexus country learning and service hubs for the remaining country profiles.
 * Uses the country-specific SEO profiles already loaded by global-schools.html.
 * Does not replace canonical metadata or claim that vacancies/resources are verified.
 */
(function(){
"use strict";
const targetSlugs=[
"slovenia","solomon-islands","spain","saint-kitts-and-nevis","saint-lucia",
"saint-vincent-and-the-grenadines","suriname","sweden","switzerland","tonga",
"trinidad-and-tobago","tuvalu","ukraine","united-kingdom","united-states","uruguay",
"vanuatu","vatican-city","venezuela","antigua-and-barbuda","argentina","armenia",
"australia","azerbaijan","bahamas","bahrain","barbados","belize","bolivia","brazil",
"burundi","canada","chile","colombia","comoros","congo","costa-rica","cuba","dominica",
"dominican-republic","ecuador","el-salvador","fiji","grenada","guatemala"
];
const profiles=window.CBE_GLOBAL_COUNTRY_DATA||{};
const registry=window.CBE_GLOBAL_COUNTRIES||[];
const $=id=>document.getElementById(id);
const make=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value!==undefined)n.textContent=value;return n;};
function addLink(card,label,url){const a=make("a","cbe-country-growth-link",label+" →");a.href=url;card.append(a);}
function render(){
 const match=location.pathname.match(/^\/global-schools\/([^/]+)\/?$/);if(!match)return;
 const slug=decodeURIComponent(match[1]).toLowerCase();if(!targetSlugs.includes(slug))return;
 if(document.getElementById("country-learning-pathways-hub"))return;
 const profile=profiles[slug];if(!profile)return;
 const record=registry.find(x=>x.slug===slug);
 const name=record&&record.name?record.name:slug.split("-").map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(" ");
 const root=$("gsCountry");if(!root)return;
 const hub=make("section","gs-panel gs-section");hub.id="country-learning-pathways-hub";
 hub.append(make("h2",null,name+" Curriculum, Examination & Learning Pathways"));
 hub.append(make("p","gs-muted","Choose learning materials by the learner’s current grade or year, subject, national or international programme, language of instruction and syllabus version. The country guidance above identifies the relevant education pathway; confirm any recent curriculum or examination changes with the responsible authority before relying on a resource."));
 const services=[
  ["National curriculum notes","Browse online notes and worked examples. Match every resource to the learner's grade, subject, curriculum and language of instruction.","/country-online-notes.html?country="+encodeURIComponent(name)],
  ["Examination revision","Review examination pathways and practice materials. Confirm current syllabus versions, candidate rules and examination dates with the responsible authority.","/resources.html?country="+encodeURIComponent(name)+"&type=past-papers"],
  ["Interactive subject practice","Use online quizzes and self-check activities to strengthen understanding across relevant subjects.","/interactive-questions.html?country="+encodeURIComponent(name)],
  ["Online tuition","Request lessons by country, grade, subject, curriculum, preferred time zone and budget; verify teacher credentials and availability before booking.","/online-teaching.html?country="+encodeURIComponent(name)],
  ["Teaching opportunities","Explore local and international teaching opportunities. Treat listings as leads until the employer's live advert, deadline and application route are checked.","/international-teaching-jobs.html?country="+encodeURIComponent(name)],
  ["International curriculum options","Compare Cambridge, IGCSE, Pearson Edexcel, International A Level and IB resources where they match the learner's actual programme.","/international-curriculum.html?country="+encodeURIComponent(name)]
 ];
 const grid=make("div","cbe-country-pathway-grid");
 services.forEach(([title,body,url])=>{const card=make("article","cbe-country-pathway-card");card.append(make("h3",null,title),make("p",null,body));addLink(card,"Explore "+title,url);grid.append(card);});
 hub.append(grid);
 const note=make("p","cbe-country-verification-note","Resource availability varies by country, grade and subject. CBE Nexus should label original practice materials clearly and should not present them as official past papers. Always confirm curriculum changes and examination requirements with the relevant education authority.");
 hub.append(note);
 const anchor=root.querySelector("#sources")||root.lastElementChild;
 if(anchor&&anchor.parentNode===root)root.insertBefore(hub,anchor);else root.append(hub);
}
const css=make("style");css.textContent="#country-learning-pathways-hub{padding:clamp(16px,2.5vw,26px);border:1px solid #d7e5ef;border-radius:14px;background:linear-gradient(145deg,#f7fcff,#fff)}#country-learning-pathways-hub h2,#country-learning-pathways-hub h3{color:#075080}.cbe-country-pathway-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:16px}.cbe-country-pathway-card{display:flex;flex-direction:column;padding:15px;border:1px solid #dbe7ef;border-radius:11px;background:#fff}.cbe-country-pathway-card h3{margin:0 0 8px;font-size:16px}.cbe-country-pathway-card p{flex:1;margin:0 0 12px;color:#526477;font-size:13px;line-height:1.55}.cbe-country-growth-link{align-self:flex-start;padding:8px 10px;border-radius:8px;background:#e0f2fe;color:#075080!important;font-size:12px;font-weight:850;text-decoration:none}.cbe-country-verification-note{margin-top:15px;padding:12px;border-left:4px solid #d6a83a;background:#fffaf0;color:#65502b;font-size:12px;line-height:1.6}@media(max-width:760px){.cbe-country-pathway-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:520px){.cbe-country-pathway-grid{grid-template-columns:1fr}}";
document.head.append(css);
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",render,{once:true});else render();
})();