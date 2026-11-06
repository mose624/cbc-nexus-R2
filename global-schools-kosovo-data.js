/* Adds Kosovo as the 196th separately listed country/jurisdiction entry in the CBE Nexus directory.
 * Kosovo's international recognition is not universal; the directory labels it transparently.
 */
(function(){
"use strict";
const list=window.CBE_GLOBAL_COUNTRIES;
if(!Array.isArray(list)) return;
if(!list.some(c=>String(c.slug||"").toLowerCase()==="kosovo"||String(c.name||"").toLowerCase()==="kosovo")){
 list.push({name:"Kosovo",slug:"kosovo",code:"XK",flag:"🇽🇰",url:"/global-schools/kosovo"});
}
const data=window.CBE_GLOBAL_COUNTRY_DATA;
if(!data||data.kosovo)return;
data.kosovo={
researchStatus:"Country profile entry added to the directory. Kosovo's international status is not universally recognised; official education and examination links should be checked against current institutions.",
officialLanguages:"Albanian and Serbian are official languages; Turkish, Bosnian and Romani have recognised community-language status in relevant contexts.",
authority:"Ministry of Education, Science, Technology and Innovation (MESTI); Kosovo Agency of Statistics; relevant municipal education directorates.",
curriculum:"The national curriculum framework is administered by MESTI. Consult the ministry for current subject curricula, grade-level programmes and assessment requirements.",
system:"The system generally comprises pre-primary, five years of primary, four years of lower-secondary and three years of upper-secondary education, followed by vocational and higher education pathways.",
termCalendar:"Academic calendars and school-year instructions are issued by MESTI and may be updated. Check the current ministry circular and municipal school notices.",
calendar:"The State Matura and other assessments are scheduled through current ministry and examination-authority announcements. Dates are not hard-coded.",
qualificationRequirements:"Teacher qualifications and licensing/recruitment requirements are governed by the applicable education legislation and ministry rules. Confirm current requirements with MESTI and the employer.",
exams:[
{name:"Testi i Arritshmërisë (Achievement Test)",body:"Assessment associated with completion of lower-secondary education and transition to upper-secondary pathways; confirm current implementation and rules with MESTI.",level:"Lower secondary",url:"https://masht.rks-gov.net/"},
{name:"Matura Shtetërore (State Matura)",body:"National secondary-school leaving examination used in completion and progression to higher education, subject to current regulations and programme requirements.",level:"Upper secondary",url:"https://masht.rks-gov.net/"}],
schools:[{name:"Ministry of Education, Science, Technology and Innovation",url:"https://masht.rks-gov.net/",body:"Official ministry information, curriculum and education notices."}],
papers:[{name:"MESTI examination and curriculum information",url:"https://masht.rks-gov.net/",body:"Consult official notices for current examination guidance and any released materials."}],
jobs:[{name:"MESTI and public-service notices",url:"https://masht.rks-gov.net/",body:"Check ministry and municipal recruitment announcements."}],
teachers:[{name:"MESTI",url:"https://masht.rks-gov.net/",body:"Official education authority for teacher policy and qualification information."}],
further:[{name:"MESTI",url:"https://masht.rks-gov.net/",body:"Curriculum, education policy and further study information."}],
sources:[{name:"Ministry of Education, Science, Technology and Innovation",url:"https://masht.rks-gov.net/"},{name:"Kosovo Agency of Statistics",url:"https://ask.rks-gov.net/"}]
};
})();