/* CBE Nexus — Country Batch 03 curriculum pathway audit overlay.
   Registry order countries 21–30: Cuba, Czechia, Denmark, Dominica,
   Dominican Republic, Ecuador, El Salvador, Estonia, Fiji and Finland.
   Curriculum claims are deliberately bounded where national/pathway detail requires verification.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
"Cuba":{
level:"Educación General; Secundaria Básica and Preuniversitario",
authority:"Ministerio de Educación de la República de Cuba (MINED)",
curriculum:"Cuba operates a centrally directed national education system. Secondary Básica is followed by Preuniversitario or technical and vocational pathways. Natural Sciences and Mathematics are core learning areas, but subject sequence and course depth must be taken from current MINED programmes for the grade and pathway.",
exam:"School-based assessment and national regulations for progression and completion; verify current Preuniversitario and university-entry requirements with MINED.",
languages:"Spanish is the language of instruction; other language learning is included in school programmes.",
source:"https://www.mined.gob.cu/",
documents:["https://www.mined.gob.cu/","https://www.unesco.org/en/right-education/observatory"],
status:"national-ministry-and-education-structure-identified-current-grade-programmes-and-assessment-details-pending",
note:"Use MINED's current grade-specific programme and textbook. Do not assume generic international upper-secondary chapter sequences or publish unverified national examination formats."
},
"Czechia":{
level:"Základní škola (basic school) and upper-secondary gymnázium or vocational programmes",
authority:"Ministry of Education, Youth and Sports (MŠMT); National Pedagogical Institute of the Czech Republic (NPI ČR)",
curriculum:"The Framework Education Programme for Basic Education (RVP ZV) defines national outcomes, while schools develop their own School Education Programmes (ŠVP). Upper-secondary programmes have separate framework programmes, including gymnasium and vocational routes. Science subject timing and depth depend on the selected programme and school plan.",
exam:"Maturita examination for relevant upper-secondary programmes; its subjects and formats depend on programme and current CERMAT/MŠMT rules.",
languages:"Czech is the main language of instruction; foreign languages, commonly English, are taught. Minority-language provision varies.",
source:"https://www.edu.cz/rvp-ramcove-vzdelavaci-programy/",
documents:["https://www.edu.cz/rvp-ramcove-vzdelavaci-programy/","https://www.npi.cz/ramcove-vzdelavaci-programy"],
status:"official-framework-programme-and-school-programme-model-identified-upper-secondary-course-mapping-pending",
note:"The RVP sets outcomes rather than one identical lesson-by-lesson sequence for all schools. Match the content to the school's ŠVP and the relevant gymnasium or vocational RVP."
},
"Denmark":{
level:"Folkeskole (primary and lower secondary) and upper-secondary gymnasium/vocational pathways",
authority:"Danish Ministry of Children and Education; municipalities and schools implement local subject plans",
curriculum:"Denmark uses national legal frameworks, subject aims, competence areas and binding/common learning objectives, with municipalities and schools responsible for local syllabi and teaching plans. Upper-secondary routes include stx, hhx, htx, hf and vocational education, each with different subject levels and combinations.",
exam:"Folkeskole leaving examinations and upper-secondary examinations depend on the pathway; gymnasium subjects are offered at A, B and C levels.",
languages:"Danish; Greenlandic, Faroese, German minority and other language contexts apply in relevant territories and schools.",
source:"https://eng.uvm.dk/primary-and-lower-secondary-education",
documents:["https://eng.uvm.dk/primary-and-lower-secondary-education","https://emu.dk/"],
status:"official-national-framework-and-local-syllabus-responsibility-identified-upper-secondary-pathway-mapping-pending",
note:"Do not treat Denmark as having one fixed national chapter order. For upper secondary, identify stx/hhx/htx/hf or vocational pathway and the subject level."
},
"Dominica":{
level:"Secondary education; CSEC and CAPE pathways in participating schools",
authority:"Ministry of Education, Human Resource Planning, Vocational Training and National Excellence; Caribbean Examinations Council (CXC)",
curriculum:"Dominica has a national education framework and school curriculum, while many secondary learners prepare for CXC regional syllabuses. Subject selection, school sequence and the transition between national courses and CSEC/CAPE must be verified with the Ministry and the school.",
exam:"CSEC and CAPE examinations administered by CXC for candidates entered by participating schools; school-based assessment also applies.",
languages:"English is the official language of instruction; Dominican Creole and other community languages are used.",
source:"https://education.gov.dm/",
documents:["https://education.gov.dm/","https://www.cxc.org/"],
status:"national-ministry-and-regional-cxc-examination-pathway-identified-current-national-framework-and-school-sequence-pending",
note:"CXC is a regional examining body, not a Dominica-only national curriculum. Use current CSEC/CAPE syllabuses only for learners entered for those subjects."
},
"Dominican Republic":{
level:"Educación Secundaria; first and second cycles, academic and technical-professional modalities",
authority:"Ministerio de Educación de la República Dominicana (MINERD)",
curriculum:"The national curriculum is established by MINERD and organised by levels, cycles, modalities and competency-based curricular design. Ordinances 03-2023 and 04-2023 provide the updated curricular adaptation for Initial, Primary and Secondary education. Science, Mathematics and language subjects must be mapped to the relevant cycle and modality.",
exam:"School assessment and national assessment rules set by MINERD; current secondary completion and university-entry arrangements should be checked for the learner's cohort.",
languages:"Spanish; English and French are taught as foreign languages in relevant programmes.",
source:"https://www.minerd.gob.do/",
documents:["https://www.minerd.gob.do/","https://libroabierto.minerd.gob.do/"],
status:"official-minerd-national-curriculum-and-2023-secondary-curricular-adaptation-identified-grade-and-modality-mapping-pending",
note:"The 2023 curricular adaptations apply nationally, but grade/cycle and modality matter. Official textbook portal access may require free registration."
},
"Ecuador":{
level:"Educación General Básica Superior and Bachillerato General Unificado (BGU)",
authority:"Ministerio de Educación, Deporte y Cultura del Ecuador",
curriculum:"The national curriculum establishes learning objectives and skills for EGB and BGU. BGU includes common core learning and differentiated options. Biology, Chemistry and Physics are within Ciencias Naturales/Ciencias Experimentales pathways; Mathematics and Lengua y Literatura/English have separate curricular programmes. Use current curriculum editions and any updated competency insertions.",
exam:"School assessment and Bachiller completion requirements under Ministry regulations; university admission processes may change and should not be conflated with the school-leaving qualification.",
languages:"Spanish; intercultural bilingual education includes Indigenous languages in relevant communities and schools.",
source:"https://educacion.gob.ec/curriculo/",
documents:["https://educacion.gob.ec/curriculo/","https://educacion.gob.ec/bachillerato-general-unificado/"],
status:"official-national-curriculum-and-bgu-pathway-identified-current-subject-programme-edition-and-grade-mapping-pending",
note:"Distinguish EGB Superior from BGU. Check current Ministry curriculum updates and the school's programme before assigning grade-specific chapter order."
},
"El Salvador":{
level:"Educación Media; general and technical-vocational modalities",
authority:"Ministerio de Educación, Ciencia y Tecnología (MINEDUCYT)",
curriculum:"The national curriculum and competency-oriented programmes define the secondary learning areas. Educación Media includes general and technical-vocational routes; subject hours and sequencing depend on modality and the current Ministry programme. Science subjects and Mathematics should be mapped to the learner's actual programme.",
exam:"School assessment and national learning assessment arrangements under MINEDUCYT; confirm current graduation and any assessment requirements for the cohort.",
languages:"Spanish; English is taught as a foreign language. Indigenous language and cultural programmes are present in relevant settings.",
source:"https://www.mined.gob.sv/",
documents:["https://www.mined.gob.sv/","https://www.mined.gob.sv/curriculo/"],
status:"national-ministry-and-curriculum-framework-identified-current-media-and-technical-programme-sequence-pending",
note:"Do not assume general and technical Educación Media have identical science timetables. Confirm the official programme edition and modality."
},
"Estonia":{
level:"Basic school (Grades 1–9) and upper secondary school (Grades 10–12)",
authority:"Ministry of Education and Research; national curriculum regulations and school curriculum",
curriculum:"Estonia has national curricula for basic schools and upper-secondary schools. Upper-secondary national curriculum sets compulsory courses and learning outcomes, while schools prepare their own curricula and offer optional courses. Biology, Chemistry, Physics, Mathematics and foreign languages are defined subject areas with course structures.",
exam:"State examinations and school graduation requirements; the upper-secondary school leaving certificate requires completion of the curriculum and applicable examinations.",
languages:"Estonian; Russian-language and other language-of-instruction schools operate within national rules. English is widely taught as a foreign language.",
source:"https://www.hm.ee/en/education-research-and-youth-affairs/general-education",
documents:["https://www.hm.ee/en/education-research-and-youth-affairs/general-education","https://www.riigiteataja.ee/en/"],
status:"official-national-basic-and-upper-secondary-curricula-identified-school-course-and-examination-requirements-mapping-pending",
note:"Use the current Upper Secondary Schools National Curriculum and the individual school's curriculum; optional course choices affect the amount and level of science study."
},
"Fiji":{
level:"Secondary education; Forms 3–7 and senior secondary examination pathways",
authority:"Ministry of Education (Fiji); Fiji Curriculum Development and Assessment",
curriculum:"Fiji's national curriculum and examination programmes cover secondary levels, with subject and examination pathways that have changed over time. Biology, Chemistry, Physics, Mathematics and English are offered in senior secondary settings, but current form-level syllabuses and assessment specifications must be checked against Ministry publications.",
exam:"Fiji Year 12 Certificate and Fiji Year 13 Certificate arrangements, subject to current Ministry examination policy and cohort; verify current assessment names and rules.",
languages:"English is widely used in formal schooling; iTaukei and Fiji Hindi are important languages and are taught/used in relevant contexts.",
source:"https://www.education.gov.fj/",
documents:["https://www.education.gov.fj/"],
status:"official-ministry-and-secondary-examination-pathway-identified-current-form-level-subject-syllabi-pending",
note:"Fiji has revised senior secondary assessment arrangements over time. Verify the exact current certificate and subject syllabus for the learner's year rather than relying on historic Fiji School Leaving Certificate descriptions."
},
"Finland":{
level:"Basic education (Grades 1–9) and general upper secondary or vocational upper secondary education",
authority:"Finnish National Agency for Education (EDUFI/OPH); Ministry of Education and Culture; education providers",
curriculum:"The National Core Curriculum for Basic Education provides national objectives and content, with local curricula developed by education providers. General upper secondary education follows the national core curriculum and modular study units; Biology, Chemistry, Physics, Mathematics and languages have defined objectives and course/study-unit structures. Vocational education follows competence-based qualifications.",
exam:"Matriculation Examination (ylioppilastutkinto) for general upper-secondary candidates; vocational qualifications use competence demonstrations and qualification requirements.",
languages:"Finnish and Swedish; Sámi and other language provision exists. English is commonly studied as a foreign language.",
source:"https://www.oph.fi/en/education-and-qualifications",
documents:["https://www.oph.fi/en/education-and-qualifications","https://www.oph.fi/en/education-and-qualifications/national-core-curricula"],
status:"official-national-core-curriculum-and-provider-local-curriculum-model-identified-upper-secondary-study-unit-mapping-pending",
note:"Distinguish general upper secondary from vocational education. Local curricula and learner-selected study units shape the exact course sequence and depth."
}
};
for(const [country,p] of Object.entries(profiles)){
 const r=all[country]; if(!r) continue;
 r.curriculum=p.curriculum+" • "+p.level;
 r.authority=p.authority;r.exam=p.exam;r.languages=p.languages;
 r.curriculumSource=p.source;r.curriculumDocuments=p.documents;
 r.curriculumLevelScope=p.level;r.curriculumAuditStatus=p.status;r.curriculumNotice=p.note;
 r.notice="CBE Nexus original supplementary learning content. National framework or responsible authority identified as described; detailed chapter-by-chapter mapping remains pending. Confirm the learner's grade, school pathway, programme and current syllabus before treating topics as examinable.";
 for(const [level,subjects] of Object.entries(r.levels||{})){
  for(const [subject,chapters] of Object.entries(subjects||{})){
   for(const ch of chapters||[]){
    ch.curriculumStatus="supplementary-unverified";
    ch.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". "+p.note+" This supplementary lesson is not yet mapped to a specific official learning outcome.";
    ch.seoTitle=country+" "+level+" "+subject+" Notes and Worked Examples | CBE Nexus";
    ch.metaDescription="Study "+subject+" in "+country+" with structured supplementary lessons, labelled diagrams, worked examples, practical activities and revision questions. Check the current official syllabus for your school pathway.";
    ch.seoKeywords=[country+" "+subject+" notes",country+" "+level+" "+subject+" curriculum",country+" "+subject+" revision",country+" "+subject+" worked examples",country+" "+subject+" practical activities","CBE Nexus Learning Studio"];
    ch.countryCurriculumStatus=p.status;
   }
  }
 }
 r.learningStudioSEO={title:country+" Secondary Biology, Chemistry, Physics, Mathematics and English | CBE Nexus",description:"Country-specific supplementary secondary learning resources with curriculum pathway guidance, labelled diagrams, worked examples and revision practice.",keywords:[country+" curriculum",country+" Biology notes",country+" Chemistry notes",country+" Physics notes",country+" Mathematics notes",country+" English notes","CBE Nexus Learning Studio"],authority:p.authority,examinationPathway:p.exam,languages:p.languages};
}
window.CBE_NEXUS_COUNTRY_BATCH_03={countries:Object.keys(profiles),subjects:["Biology","Chemistry","Physics","Mathematics","English"],status:"curriculum-pathway-profiled-topic-by-topic-audit-pending",version:"2026-11-16-batch-03"};
})();