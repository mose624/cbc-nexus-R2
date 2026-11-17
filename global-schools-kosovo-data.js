/* Adds Kosovo's dedicated country/jurisdiction profile to the alphabetized CBE Nexus directory.
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
officialLanguages:"Albanian and Serbian are the two official languages at national level. Turkish, Bosnian and Romani may have official-language or official-use status at municipal level under the applicable legal thresholds.",
instructionLanguages:"Albanian is the principal language of instruction in schools following the Kosovo curriculum. Turkish and Bosnian are also used in community-language schools. Serbian-language schools operate in a separate education system using Serbian curricula. The language of teaching therefore depends on the municipality, community and school.",
languageOfInstruction:"Albanian; Serbian, Turkish and Bosnian in relevant community and school systems. Confirm the language and curriculum directly with each school.",
verifiedAt:"2026-11-17",
officialSources:[
{name:"Office of the Language Commissioner — official languages",url:"https://languagecommissioners.org/Language-Commissioner-of-Kosovo?lang=EN"},
{name:"Law No. 02/L-37 on the Use of Languages",url:"https://kryeministri.rks-gov.net/wp-content/uploads/2022/05/LAW_NO._02_L-37_ON_THE_USE_LANGUAGES1344.pdf"},
{name:"Ministry of Education, Science, Technology and Innovation (MESTI)",url:"https://masht.rks-gov.net/"},
{name:"Ombudsperson Institution — Annual Report 2025",url:"https://oik-rks.org/wp-content/uploads/2026/03/Annual-Report-2025_compressed.pdf"}
],
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
sources:[{name:"Office of the Language Commissioner — official languages",url:"https://languagecommissioners.org/Language-Commissioner-of-Kosovo?lang=EN"},{name:"Law No. 02/L-37 on the Use of Languages",url:"https://kryeministri.rks-gov.net/wp-content/uploads/2022/05/LAW_NO._02_L-37_ON_THE_USE_LANGUAGES1344.pdf"},{name:"Ministry of Education, Science, Technology and Innovation",url:"https://masht.rks-gov.net/"},{name:"Kosovo Agency of Statistics",url:"https://ask.rks-gov.net/"}]
};
})();