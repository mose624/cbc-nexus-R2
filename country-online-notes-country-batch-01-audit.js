/* CBE Nexus — country batch 01: curriculum context and audit metadata.
   Applies to the first ten alphabetic profiles in the global remaining-country bank.
   This is an evidence-aware curriculum overlay, not a claim that full syllabus mapping is complete. */
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
"Albania":{
 level:"Upper secondary (Grades 10–12; confirm school programme/track)",
 authority:"Ministry of Education and Sports; Agency for Quality Assurance in Pre-University Education",
 curriculum:"Competency-based pre-university curriculum framework; common and elective curriculum; Natural Sciences includes Biology, Chemistry and Physics, with Mathematics as a separate learning field.",
 exam:"National Matura pathway; confirm current subject combination and examination specification for the learner's track.",
 languages:"Albanian; foreign-language provision varies.",
 source:"https://arsimi.gov.al/",
 documents:["https://arsimi.gov.al/"],
 status:"national-framework-source-identified-subject-level-syllabus-audit-pending",
 note:"Upper-secondary science subjects are distinct. The learner's profile/track and elective choices must be checked before assigning topic order."
},
"Andorra":{
 level:"Batxillerat general; school pathway must be identified",
 authority:"Government of Andorra — Ministry responsible for Education",
 curriculum:"Andorran Batxillerat general offers subject programmes in Biology, Physics, Chemistry and scientific-technical or social-science Mathematics. Andorra also has French, Spanish and other school systems; do not assume every learner follows the Andorran programme.",
 exam:"Assessment follows the relevant school system and Batxillerat programme; confirm the institution's current assessment rules.",
 languages:"Catalan, Spanish and French are vehicular languages in Andorran Batxillerat; language of each subject is determined by the centre.",
 source:"https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular",
 documents:["https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular","https://www.govern.ad/ca/tematiques/educacio-formacio-investigacio-i-divulgacio-del-coneixement/estudiar-a-andorra/sistemes-educatius-a-andorra/sistema-educatiu-andorra/batxillerat-general"],
 status:"official-batxillerat-subject-programmes-identified-school-system-and-topic-audit-pending",
 note:"The Andorran system publishes separate programmes for Biology, Chemistry, Physics and Mathematics; recent programme decrees include Physics and scientific-technical Mathematics in 2025."
},
"Antigua and Barbuda":{
 level:"Secondary; CSEC/CAPE pathway where selected by school and learner",
 authority:"Ministry of Education, Sports and Creative Industries; Caribbean Examinations Council (CXC)",
 curriculum:"CXC regional syllabuses provide the relevant external subject specifications for CSEC and CAPE candidates. School course offerings and national requirements must be checked separately.",
 exam:"CSEC and, for sixth-form learners, CAPE; CXC syllabuses and subject-specific assessment objectives govern those examinations.",
 languages:"English; local language varieties are also used in daily communication.",
 source:"https://www.cxc.org/",
 documents:["https://www.cxc.org/"],
 status:"regional-examination-framework-identified-national-scheme-and-school-subject-audit-pending",
 note:"CXC is a regional examining body serving Antigua and Barbuda and other participating states; CXC syllabuses must not be described as a single national curriculum."
},
"Argentina":{
 level:"Educación Secundaria — Ciclo Básico and Ciclo Orientado; provincial implementation",
 authority:"National Ministry of Education and provincial education authorities; Federal Council of Education",
 curriculum:"National Núcleos de Aprendizajes Prioritarios (NAP) establish common learning priorities, while provinces and jurisdictions implement their own curricula. Natural Sciences and Mathematics are mapped to the appropriate cycle and provincial programme.",
 exam:"Assessment and completion requirements are jurisdictional; do not assume one nationwide school-leaving examination.",
 languages:"Spanish; indigenous and other languages may be present in local contexts.",
 source:"https://www.argentina.gob.ar/nucleos-de-aprendizaje-prioritarios",
 documents:["https://www.argentina.gob.ar/nucleos-de-aprendizaje-prioritarios","https://www.educ.ar/recursos/150199/coleccion-ncleos-de-aprendizajes-prioritarios-nap"],
 status:"official-national-priority-framework-identified-provincial-topic-sequence-audit-pending",
 note:"Distinguish Ciclo Básico from Ciclo Orientado. Natural Sciences may be integrated at framework level; separate Biology, Chemistry and Physics pathways depend on provincial and school plans."
},
"Australia":{
 level:"Senior secondary Years 11–12; state/territory course and certificate",
 authority:"ACARA for agreed national curriculum content; state and territory curriculum, assessment and certification authorities",
 curriculum:"Senior secondary Biology, Chemistry, Physics and Mathematics pathways are available, but course structure, subject selection, assessment and certification are determined by each state or territory.",
 exam:"State/territory certificates and assessment systems (for example, state-specific senior secondary certificates); no single national Year 12 examination.",
 languages:"English; multilingual and Indigenous language contexts vary.",
 source:"https://www.acara.edu.au/curriculum/senior-secondary",
 documents:["https://www.acara.edu.au/curriculum/senior-secondary"],
 status:"official-national-content-framework-identified-state-territory-course-mapping-pending",
 note:"Country pages must ask or identify the state/territory before claiming exact Year 11–12 syllabus order or assessment weights."
},
"Austria":{
 level:"Allgemeinbildende höhere Schule (AHS) upper stage, classes 5–8; vocational pathways differ",
 authority:"Federal Ministry of Education; Austrian Federal Legal Information System (RIS)",
 curriculum:"AHS upper-stage timetable includes Mathematics, Biology and Environmental Education, Chemistry and Physics, with subject hours varying by class and curriculum version. Vocational schools follow distinct curricula.",
 exam:"AHS Reifeprüfung/Matura; vocational qualifications and school routes have their own requirements.",
 languages:"German; minority-language and multilingual provision varies.",
 source:"https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008568",
 documents:["https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008568"],
 status:"official-ahs-upper-stage-curriculum-and-subject-hours-identified-vocational-track-audit-pending",
 note:"Use AHS classes 5–8 only when that pathway is selected; do not transfer the AHS sequence to vocational schools."
},
"Bahamas":{
 level:"Senior high school; BGCSE pathway, typically culminating at Grade 12",
 authority:"Bahamas Ministry of Education",
 curriculum:"The Bahamas General Certificate of Secondary Education (BGCSE) is tailored to the national context and is based on GCSE/IGCSE models. Subject availability and school course sequence should be confirmed against current Ministry and examination specifications.",
 exam:"BGCSE; government information describes it as a secondary certification typically taken after three years of high-school study, culminating at Grade 12.",
 languages:"English; Bahamian Creole is also used in community contexts.",
 source:"https://www.govnet.bs/",
 documents:["https://www.govnet.bs/"],
 status:"official-bgcse-examination-pathway-identified-subject-syllabus-audit-pending",
 note:"BGCSE is a national examination framework; do not label generic GCSE or IGCSE notes as official BGCSE syllabus coverage without subject-by-subject comparison."
},
"Barbados":{
 level:"Secondary Forms 1–5; sixth form for CAPE",
 authority:"Ministry of Educational Transformation; Caribbean Examinations Council (CXC)",
 curriculum:"Secondary learners commonly prepare for CSEC; sixth-form learners may proceed to CAPE. The Ministry publishes CSEC subject resources and examination information. School schemes and subject choices should be matched to current CXC syllabuses.",
 exam:"CSEC at about age 16; CAPE for learners continuing into sixth form, subject to current CXC arrangements.",
 languages:"English; Bajan Creole is used in everyday communication.",
 source:"https://education.gov.bb/about/departments/examinations/",
 documents:["https://education.gov.bb/about/departments/examinations/","https://education.gov.bb/Resources/"],
 status:"ministry-examination-and-subject-resource-pathway-identified-current-cxc-syllabus-mapping-pending",
 note:"The Ministry's resource library lists CSEC Biology, Chemistry, Physics, Mathematics and English resources. Match each lesson to the current CXC syllabus and examination year."
},
"Belarus":{
 level:"General secondary education; upper secondary grade and school pathway to be confirmed",
 authority:"Ministry of Education of the Republic of Belarus",
 curriculum:"National general-secondary curriculum and approved subject programmes; exact grade-by-grade subject sequence and current programme editions require direct verification from Ministry publications.",
 exam:"School final assessment and centralised testing arrangements; confirm current rules and subjects for the learner's year.",
 languages:"Belarusian and Russian; language of instruction depends on school.",
 source:"https://edu.gov.by/",
 documents:["https://edu.gov.by/"],
 status:"national-authority-portal-identified-current-subject-programme-audit-pending",
 note:"Do not infer current chapter order or examination weighting from translated or outdated topic lists; verify the current Ministry programme and language of instruction."
},
"Belgium":{
 level:"Secondary education; community and language network must be identified",
 authority:"Education authorities of the Flemish, French and German-speaking Communities",
 curriculum:"Education is organised by language communities, not one single national secondary syllabus. Flemish attainment targets, French Community reference frameworks and German-speaking Community programmes must be treated separately.",
 exam:"Assessment, certification and subject pathways depend on the community, school network and programme.",
 languages:"Dutch, French or German according to community and school.",
 source:"https://onderwijs.vlaanderen.be/; https://www.enseignement.be/",
 documents:["https://onderwijs.vlaanderen.be/","https://www.enseignement.be/"],
 status:"community-based-official-frameworks-identified-community-specific-subject-audit-pending",
 note:"Country pages must identify Flanders, the French Community or the German-speaking Community before assigning Biology, Chemistry, Physics, Mathematics or English content."
}
};
for(const [country,p] of Object.entries(profiles)){
 const r=all[country]; if(!r) continue;
 r.curriculum=p.curriculum+" • "+p.level;
 r.authority=p.authority;
 r.exam=p.exam;
 r.languages=p.languages;
 r.curriculumSource=p.source;
 r.curriculumDocuments=p.documents;
 r.curriculumLevelScope=p.level;
 r.curriculumAuditStatus=p.status;
 r.curriculumNotice=p.note;
 r.notice="CBE Nexus original supplementary learning content. Curriculum framework identified as described; detailed chapter-by-chapter mapping remains pending. Confirm the learner's school pathway, grade, jurisdiction and current syllabus before treating a topic as examinable.";
 const levels=r.levels||{};
 for(const [level,subjects] of Object.entries(levels)){
  for(const [subject,chapters] of Object.entries(subjects||{})){
   for(const ch of chapters||[]){
    ch.curriculumStatus="supplementary-unverified";
    ch.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". "+p.note+" This chapter is supplementary and has not yet been mapped to a specific official syllabus indicator.";
    ch.seoTitle=country+" "+level+" "+subject+" Notes and Worked Examples | CBE Nexus";
    ch.metaDescription="Study "+subject+" in "+country+" with structured supplementary lessons, labelled diagrams, worked examples, practical activities and revision questions. Check the relevant official syllabus and school pathway.";
    ch.seoKeywords=[country+" "+subject+" notes",country+" "+level+" "+subject+" syllabus",country+" "+subject+" revision",country+" "+subject+" worked examples",country+" "+subject+" practical activities","CBE Nexus Learning Studio"];
    ch.countryCurriculumStatus=p.status;
   }
  }
 }
 r.learningStudioSEO={title:country+" Secondary Biology, Chemistry, Physics, Mathematics and English | CBE Nexus",description:"Country-specific supplementary secondary learning resources with curriculum pathway guidance, labelled diagrams, worked examples and revision practice.",keywords:[country+" curriculum",country+" Biology notes",country+" Chemistry notes",country+" Physics notes",country+" Mathematics notes",country+" English notes","CBE Nexus Learning Studio"],authority:p.authority,examinationPathway:p.exam,languages:p.languages};
}
window.CBE_NEXUS_COUNTRY_BATCH_01={countries:Object.keys(profiles),subjects:["Biology","Chemistry","Physics","Mathematics","English"],status:"curriculum-pathway-profiled-topic-by-topic-audit-pending",version:"2026-11-16-batch-01"};
})();