/* CBE Nexus: researched profiles for the five-country East Africa resource rollout.
 * Profile claims are linked to national authorities; check live ministry notices for dates.
 */
(function(){
"use strict";
const d=window.CBE_GLOBAL_COUNTRY_DATA||(window.CBE_GLOBAL_COUNTRY_DATA={});
Object.assign(d,{
"burundi":{
researchStatus:"Country profile curated from Burundi's Ministry of National Education and Scientific Research statistical publications and official education notices. Confirm current school-year circulars and examination arrangements with the Ministry.",
officialLanguages:"Kirundi, French and English are official languages. Kirundi is widely used in everyday life and early learning; French and English are used in education and administration according to level, programme and school policy.",
authority:"Ministry of National Education and Scientific Research (MENRS); relevant directorates for preschool, fundamental, post-fundamental, technical and vocational education.",
curriculum:"The formal system includes preschool, nine years of fundamental education, post-fundamental general and pedagogical education, technical education, trades and vocational training. Subject sequences and languages must be checked against the current MENRS-approved programmes and the learner's school stream.",
system:"Preschool is generally for ages 3–5. Fundamental education lasts nine years and is organised in four cycles. Post-fundamental general and pedagogical pathways usually last three years, with a longer pedagogical pathway in some programmes; technical and vocational routes have programme-specific durations.",
termCalendar:"Use the current MENRS school calendar and official circulars. Dates can change by academic year and should not be hard-coded.",
calendar:"Follow MENRS school-calendar notices and current examination circulars.",
qualificationRequirements:"Teacher qualifications and recruitment conditions depend on school level, subject and public/private employer. Check MENRS and the exact recruitment notice for required teaching awards, language proficiency and professional status.",
exams:[
{name:"Concours national de certification et d’orientation",body:"National certification and orientation assessment at the end of the nine-year fundamental cycle; consult MENRS for current candidate and progression rules.",level:"End of fundamental education",url:"https://mesrs.gov.bi/"},
{name:"Examen d’État",body:"State examination used at the end of relevant post-fundamental pathways for certification and progression; check the current MENRS examination circular.",level:"Post-fundamental",url:"https://mesrs.gov.bi/"}
],
schools:[
{name:"Ministry of National Education and Scientific Research",type:"National education authority, policy and school notices",url:"https://mesrs.gov.bi/"},
{name:"MENRS education statistics and publications",type:"Official education-system structure and statistical reports",url:"https://mesrs.gov.bi/"}
],
papers:[
{name:"MENRS official publications",type:"Curriculum, education statistics, policy and school notices",url:"https://mesrs.gov.bi/"},
{name:"National education statistics 2022/2023",type:"Official description of preschool, fundamental, post-fundamental and vocational pathways",url:"https://mesrs.gov.bi/wp-content/uploads/2026/06/Annu_Stat_Education_TOME1_2022_2023.pdf"}
],
jobs:[{name:"MENRS official notices",type:"Check current public education recruitment and teacher-service announcements",url:"https://mesrs.gov.bi/"}]
},
"south-sudan":{
researchStatus:"Country profile curated from the Ministry of General Education and Instruction and the National Curriculum Development Centre (NCDC). Verify current examination and school-calendar notices before relying on dates.",
officialLanguages:"English is the official language of instruction in the national curriculum framework. South Sudan is multilingual, and local languages are important in communities and early learning; school-level language arrangements should be confirmed.",
authority:"Ministry of General Education and Instruction (MoGEI); National Curriculum Development Centre (NCDC); examination and assessment directorates under the Ministry.",
curriculum:"The national curriculum framework covers Early Childhood Development, Primary Education, Secondary Education and Alternative Education Systems. NCDC publishes subject syllabuses, teacher guides and approved student textbooks. The current online resource library identifies primary P-1 to P-8 and secondary S-1 to S-4 resources.",
system:"The national school pathway includes eight primary years followed by four secondary years, alongside ECD, alternative education and technical/vocational routes. Check current Ministry guidance for cohort-specific transitions and school provision.",
termCalendar:"Use current MoGEI circulars and school-calendar announcements; do not assume dates from previous years.",
calendar:"Follow MoGEI and NCDC announcements for current school and examination dates.",
qualificationRequirements:"Teacher requirements vary by school level, subject, qualification and employing authority. Verify the exact post with MoGEI, the relevant state education authority and the recruiting school.",
exams:[
{name:"Primary Leaving Certificate / primary completion assessment",body:"Primary-cycle completion and progression requirements should be checked against current MoGEI and examination-directorate guidance.",level:"End of primary",url:"https://mogei.gov.ss/"},
{name:"Certificate of Secondary Education",body:"Secondary completion and examination arrangements are governed by current Ministry guidance. Check current examination notices and subject requirements.",level:"End of secondary",url:"https://mogei.gov.ss/"}
],
schools:[
{name:"Ministry of General Education and Instruction",type:"National education policy, administration and notices",url:"https://mogei.gov.ss/"},
{name:"National Curriculum Development Centre",type:"National curriculum, subject frameworks and approved learning materials",url:"https://cdc.gov.ss/"},
{name:"NCDC curriculum portal",type:"Browse curriculum by ECD, primary, secondary and alternative education",url:"https://cdc.gov.ss/curriculum.php"}
],
papers:[
{name:"NCDC curriculum library",type:"Official subject frameworks, teacher guides and approved textbooks",url:"https://cdc.gov.ss/resources"},
{name:"NCDC learning resources",type:"Student textbooks and teacher resources organised by P-1 to P-8 and S-1 to S-4",url:"https://cdc.gov.ss/Resources.php"}
],
jobs:[{name:"MoGEI official notices",type:"Check national and state education recruitment notices",url:"https://mogei.gov.ss/"}]
}
});
})();