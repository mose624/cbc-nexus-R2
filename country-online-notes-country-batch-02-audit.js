/* CBE Nexus — Country Batch 02 curriculum pathway audit overlay.
   Ten profiles: Belize, Bolivia, Bosnia and Herzegovina, Brazil, Bulgaria,
   Canada, Chile, Colombia, Costa Rica and Croatia.
   Profiles distinguish national frameworks from provincial, entity, cantonal or school pathways.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
"Belize":{
level:"Secondary education; lower-secondary competency-based curriculum transition and upper-secondary/CXC pathways",
authority:"Ministry of Education, Culture, Science and Technology — Curriculum Development Unit and Assessment, Certification and Examinations Unit",
curriculum:"Belize's National Curriculum Framework sets national learning areas and expected outcomes. The Ministry has been transforming the curriculum toward a competency-based model, with lower-secondary rollout/piloting described by the Ministry. Upper-secondary schools may offer national courses and regional CXC programmes; confirm the learner's school and year.",
exam:"National assessment and certification are administered through the Ministry's Assessment, Certification and Examinations Unit; CSEC/CAPE may be offered by participating schools.",
languages:"English is the principal language of instruction; Spanish and Belizean languages are important in the wider multilingual context.",
source:"https://www.moecst.gov.bz/national-education-strategies-and-frameworks/",
documents:["https://www.moecst.gov.bz/wp-content/uploads/2022/07/National-Curriculum-Framework.pdf","https://www.moecst.gov.bz/education-services/planning-and-development-services/curriculum-unit/","https://www.moecst.gov.bz/education-services/planning-and-development-services/assessment-certification-and-examinations-unit/"],
status:"national-framework-and-ministry-assessment-units-identified-current-grade-and-upper-secondary-subject-syllabi-pending",
note:"Lower-secondary framework groups Science and Technology rather than necessarily teaching separate Biology, Chemistry and Physics in every grade. The national curriculum transformation page describes phased/pilot implementation; verify the current school year and programme before claiming rollout is complete."
},
"Bolivia":{
level:"Educación Secundaria Comunitaria Productiva — four years",
authority:"Ministerio de Educación del Estado Plurinacional de Bolivia",
curriculum:"The Plurinational Education System follows the Base Curriculum and the Educación Secundaria Comunitaria Productiva subsystem. It integrates humanistic learning with technical-technological education, community knowledge, research and productive practice. Subject content should be mapped to the current annual programme and the learner's local context.",
exam:"Bachiller Técnico Humanístico pathway; assessment and graduation requirements are set by the Ministry's current regulations and school programme.",
languages:"Spanish and the Indigenous languages recognised in the Plurinational State; multilingual/intercultural education is part of the framework.",
source:"https://www.minedu.gob.bo/index.php?Itemid=1200&id=1005%3Aabc-curriculo2023-actualizado&option=com_k2&view=item",
documents:["https://www.minedu.gob.bo/index.php?Itemid=1200&id=1005%3Aabc-curriculo2023-actualizado&option=com_k2&view=item","https://www.minedu.gob.bo/files/documentos-normativos/resoluciones-ministeriales/001_REGULAR_final.pdf"],
status:"official-plurinational-base-curriculum-and-secondary-subsystem-identified-year-subject-sequence-mapping-pending",
note:"Do not directly equate the four-year productive secondary programme with a generic Grades 10–12 sequence. Use the annual Ministry programme and community/productive context."
},
"Bosnia and Herzegovina":{
level:"Secondary education; entity, Brčko District and cantonal jurisdiction must be identified",
authority:"Relevant entity, cantonal or Brčko District education ministries and pedagogical institutes; Agency for Pre-primary, Primary and Secondary Education (APOSO) supports standards",
curriculum:"Education governance is decentralised. Curriculum, subject hours and programme details differ across Republika Srpska, the Federation of Bosnia and Herzegovina's cantons, and Brčko District. Biology, Chemistry, Physics and Mathematics are taught in secondary pathways, but no single country-wide detailed chapter sequence should be assumed.",
exam:"Secondary completion and matura arrangements depend on the jurisdiction and school pathway; verify the applicable ministry and school rules.",
languages:"Bosnian, Croatian and Serbian; language of instruction depends on school and local jurisdiction.",
source:"https://aposo.gov.ba/",
documents:["https://aposo.gov.ba/","https://www.oecd.org/en/publications/oecd-reviews-of-evaluation-and-assessment-in-education-bosnia-and-herzegovina_a669e5f3-en/full-report/component-8.html"],
status:"decentralised-jurisdictional-education-structure-identified-entity-canton-and-school-specific-curriculum-mapping-pending",
note:"A country page must not present one uniform national syllabus. The learner's entity, canton or Brčko District and school curriculum are essential for accurate topic order and examination advice."
},
"Brazil":{
level:"Ensino Médio; current national framework with state and school network curricula",
authority:"Ministério da Educação (MEC), Conselho Nacional de Educação and state/municipal education systems",
curriculum:"The Base Nacional Comum Curricular (BNCC) defines essential learning across Basic Education and organises Ensino Médio into knowledge areas. Biology, Physics and Chemistry sit within Ciências da Natureza e suas Tecnologias; Mathematics is a separate area; Portuguese and English are included in Languages and their Technologies. State networks and schools develop curricula within the national framework. The Ensino Médio framework was amended by Law 14.945/2024.",
exam:"ENEM and state/school assessments; ENEM is a major national assessment and higher-education selection route, but local assessment and admission rules vary.",
languages:"Portuguese is the language of instruction; English is included as a compulsory foreign-language component in the national framework.",
source:"https://basenacionalcomum.mec.gov.br/a-base",
documents:["https://basenacionalcomum.mec.gov.br/a-base","https://presidencia.gov.br/ccivil_03/leis/l9394compilado.htm"],
status:"official-bncc-and-2024-ensino-medio-legal-framework-identified-state-network-curriculum-mapping-pending",
note:"The five CBE Nexus subjects should be displayed as learning pathways within the relevant BNCC knowledge areas. Do not imply every school offers identical standalone subject timetables or electives."
},
"Bulgaria":{
level:"Secondary education, including upper-secondary gymnasium stage (Grades VIII–XII); profile and vocational route vary",
authority:"Ministry of Education and Science of the Republic of Bulgaria",
curriculum:"The Ministry publishes national curricula for general education and profiled preparation. Grade X programmes include Bulgarian language and literature, Mathematics, Biology and Health Education, Physics and Astronomy, Chemistry and Environmental Protection, and Information Technologies. Upper-secondary profiling changes depth and subject emphasis.",
exam:"State matriculation examinations (Държавни зрелостни изпити) and school assessments; confirm current subject and profile requirements.",
languages:"Bulgarian; foreign-language study and minority-language provision vary by school.",
source:"https://www.mon.bg/obshto-obrazovanie/uchebni-planove-i-programi-2/uchebni-programi/",
documents:["https://www.mon.bg/obshto-obrazovanie/uchebni-planove-i-programi-2/uchebni-programi/","https://www.mon.bg/obshto-obrazovanie/uchebni-planove-i-programi-2/uchebni-programi/uchebni-programi-za-obsthoobrazovatelna-podgotovka/x-klas/"],
status:"official-grade-x-general-and-profiled-programmes-identified-exact-upper-grade-profile-sequence-mapping-pending",
note:"Use the Bulgarian Ministry's current approved curriculum for each grade and profile. English is generally a foreign-language subject, not the national language of instruction."
},
"Canada":{
level:"Secondary/high school; provincial or territorial grade/course pathway required",
authority:"Provincial and territorial ministries/departments of education; Council of Ministers of Education, Canada (CMEC) coordinates pan-Canadian collaboration",
curriculum:"Canada has no federal department of education or single integrated national school system. Each of 13 provinces and territories establishes its own curriculum, courses, assessment and graduation requirements. Biology, Chemistry, Physics, Mathematics and English/French course names and grade placement vary by jurisdiction.",
exam:"Provincial/territorial graduation requirements and assessments; for example, British Columbia has its own Dogwood Diploma credit and literacy/numeracy assessment requirements. No single national secondary leaving examination.",
languages:"English or French depending on province, territory and school system; Indigenous and other languages are also taught.",
source:"https://cmec.ca/680/Elementary-Secondary_Education.html",
documents:["https://cmec.ca/680/Elementary-Secondary_Education.html","https://www.curriculum.gov.bc.ca/graduation"],
status:"official-pan-canadian-governance-and-provincial-responsibility-identified-province-or-territory-specific-syllabus-mapping-pending",
note:"Ask which province or territory the learner attends before assigning exact grade levels, course codes, credit requirements or examination weights. British Columbia information must not be generalised to all Canada."
},
"Chile":{
level:"Educación Media — 1° a 4° medio; Humanístico-Científica, Técnico-Profesional or Artística modality",
authority:"Ministerio de Educación (MINEDUC), Unidad de Currículum y Evaluación and Consejo Nacional de Educación",
curriculum:"National Bases Curriculares define learning objectives. The first two years of Educación Media have a common general formation; in 3° and 4° medio the programme varies by modality and elective selection. Science specialisations include Biology, Physics and Chemistry options, alongside integrated Ciencias para la Ciudadanía; Mathematics and language studies also form part of the curriculum.",
exam:"School assessment and the PAES higher-education admission tests; do not describe PAES as a single school-leaving examination.",
languages:"Spanish; English is taught as a foreign language. Indigenous languages and intercultural programmes vary.",
source:"https://curriculumnacional.mineduc.cl/",
documents:["https://curriculumnacional.mineduc.cl/614/articles-34641_bases.pdf","https://curriculumnacional.mineduc.cl/614/articles-140141_programa.pdf","https://curriculumnacional.mineduc.cl/614/articles-140116_programa.pdf"],
status:"official-national-curriculum-bases-and-senior-secondary-science-programmes-identified-modality-and-elective-sequence-mapping-pending",
note:"In upper secondary, learners may choose specific science options and school timetables vary. Do not imply all three separate sciences are compulsory for every learner in 3° and 4° medio."
},
"Colombia":{
level:"Educación Media — grados 10° and 11°; academic or technical pathway",
authority:"Ministerio de Educación Nacional (MEN); Secretaría de Educación entities and individual schools",
curriculum:"MEN's Basic Competency Standards describe expected learning across grade groups, including 10°–11°. Schools and territorial authorities develop their institutional curricula and study plans within national guidelines. Natural Sciences, Mathematics, language and English are taught, with academic and technical pathways varying by institution.",
exam:"Saber 11 administered by ICFES; school completion and institutional assessment also apply.",
languages:"Spanish; English is a foreign-language learning area. Indigenous and other community languages are present in some regions and schools.",
source:"https://www.mineducacion.gov.co/1780/w3-article-340021.html",
documents:["https://www.mineducacion.gov.co/1780/w3-article-340021.html"],
status:"official-national-competency-standards-and-grade-10-11-scope-identified-school-study-plan-mapping-pending",
note:"Saber 11 assesses broad competencies and is not a chapter-by-chapter national teaching syllabus. Align topic sequence with the school's PEI and current study plan."
},
"Costa Rica":{
level:"III Ciclo and Educación Diversificada; academic, technical and other modalities",
authority:"Ministerio de Educación Pública (MEP), Dirección de Desarrollo Curricular and Dirección de Gestión y Evaluación de la Calidad",
curriculum:"MEP publishes official study programmes by cycle, subject and modality. Educación Diversificada follows the III Ciclo and includes academic and technical pathways. Programme offerings can include Mathematics, Spanish, English or French, and Biology, Physics or Chemistry according to programme and assessment route.",
exam:"Bachillerato en Educación Media and current national standardised assessment arrangements; the exact route depends on modality and candidate category.",
languages:"Spanish; English or French as foreign-language subjects. Indigenous languages and intercultural programmes are available in relevant contexts.",
source:"https://mep.go.cr/programas-estudio",
documents:["https://mep.go.cr/programas-estudio","https://www.mep.go.cr/tercer-ciclo-educacion-diversificada","https://dgec.mep.go.cr/educacion-diversificada-a-distancia/"],
status:"official-mep-study-programme-portal-and-diversified-secondary-pathways-identified-modality-specific-subject-sequence-mapping-pending",
note:"Do not assume all learners take all three separate sciences in the same way. Distance, academic, technical, environmentalist and other offerings may have different subject combinations."
},
"Croatia":{
level:"Upper-secondary education; gymnasium and vocational programmes",
authority:"Ministry of Science, Education and Youth; Education and Teacher Training Agency; National Centre for External Evaluation of Education (NCVVO)",
curriculum:"Croatia has national curriculum frameworks and subject curricula, with different upper-secondary gymnasium and vocational programmes. Biology, Chemistry, Physics, Mathematics and foreign languages are placed and weighted according to programme type.",
exam:"State Matura (Državna matura) includes compulsory Croatian language, Mathematics and a foreign language, with elective examinations available under current annual rules.",
languages:"Croatian; foreign languages including English are commonly taught; minority-language programmes are available.",
source:"https://mzom.gov.hr/istaknute-teme/odgoj-i-obrazovanje/vrednovanje-i-osiguranjekvalitete-u-sustavu-odgoja-i-obrazovanja/drzavna-matura/459",
documents:["https://mzom.gov.hr/istaknute-teme/odgoj-i-obrazovanje/vrednovanje-i-osiguranjekvalitete-u-sustavu-odgoja-i-obrazovanja/drzavna-matura/459"],
status:"official-state-matura-subject-rules-and-programme-differentiation-identified-subject-curriculum-sequence-mapping-pending",
note:"The State Matura compulsory subjects are Croatian, Mathematics and a foreign language; Biology, Chemistry and Physics are not all compulsory for every candidate. Gymnasium and vocational pathways must be distinguished."
}
};
for(const [country,p] of Object.entries(profiles)){
 const r=all[country]; if(!r) continue;
 r.curriculum=p.curriculum+" • "+p.level;
 r.authority=p.authority;r.exam=p.exam;r.languages=p.languages;
 r.curriculumSource=p.source;r.curriculumDocuments=p.documents;
 r.curriculumLevelScope=p.level;r.curriculumAuditStatus=p.status;r.curriculumNotice=p.note;
 r.notice="CBE Nexus original supplementary learning content. Official framework or authority identified as described; detailed chapter-by-chapter mapping remains pending. Confirm jurisdiction, grade, school pathway and current programme before treating topics as examinable.";
 for(const [level,subjects] of Object.entries(r.levels||{})){
  for(const [subject,chapters] of Object.entries(subjects||{})){
   for(const ch of chapters||[]){
    ch.curriculumStatus="supplementary-unverified";
    ch.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". "+p.note+" This is supplementary content and is not yet mapped to a specific official learning indicator.";
    ch.seoTitle=country+" "+level+" "+subject+" Notes and Worked Examples | CBE Nexus";
    ch.metaDescription="Explore "+subject+" in "+country+" through structured supplementary lessons, labelled diagrams, worked examples, practical activities and revision questions. Check the official curriculum pathway for your school.";
    ch.seoKeywords=[country+" "+subject+" notes",country+" "+level+" "+subject+" curriculum",country+" "+subject+" revision",country+" "+subject+" worked examples",country+" "+subject+" practical activities","CBE Nexus Learning Studio"];
    ch.countryCurriculumStatus=p.status;
   }
  }
 }
 r.learningStudioSEO={title:country+" Secondary Biology, Chemistry, Physics, Mathematics and English | CBE Nexus",description:"Country-specific supplementary secondary learning resources with curriculum pathway guidance, labelled diagrams, worked examples and revision practice.",keywords:[country+" curriculum",country+" Biology notes",country+" Chemistry notes",country+" Physics notes",country+" Mathematics notes",country+" English notes","CBE Nexus Learning Studio"],authority:p.authority,examinationPathway:p.exam,languages:p.languages};
}
window.CBE_NEXUS_COUNTRY_BATCH_02={countries:Object.keys(profiles),subjects:["Biology","Chemistry","Physics","Mathematics","English"],status:"curriculum-pathway-profiled-topic-by-topic-audit-pending",version:"2026-11-16-batch-02"};
})();