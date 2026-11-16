/* CBE Nexus — national curriculum source map, batch 03.
 * Countries: Argentina, Armenia, Australia, Austria, Azerbaijan.
 * Evidence checked 2026-11-16. Chapter sequences are populated only where verified.
 */
(function(root){
"use strict";
const names=["Biology","Chemistry","Physics","Mathematics"];
const make=(country,authority,portal,level,language,assessment,subjectNames,evidenceUrls,evidence,statuses={})=>({
 country,authority,officialPortal:portal,curriculumLevel:level,languageOfInstruction:language,assessmentPathway:assessment,
 subjectNames,evidenceUrls,evidence,
 subjects:Object.fromEntries(names.map(s=>[s,{officialSubjectName:subjectNames[s],sequenceStatus:statuses[s]||"official-subject-or-learning-area-identified; exact current chapter sequence not transcribed",chapterCount:null,chapters:[]}]))
});
const batch={schemaVersion:"1.0",auditedAt:"2026-11-16",countries:[
make("Argentina","Federal Council of Education (Consejo Federal de Educación) and national/provincial education ministries","https://www.argentina.gob.ar/nucleos-de-aprendizaje-prioritarios",
"Secondary education: Ciclo Básico and Ciclo Orientado. National NAP learning priorities coexist with provincial curricula; subject sequencing varies by jurisdiction and orientation.",
"Spanish; provincial and institutional language provisions may add other languages.",
"Provincial secondary assessment and national/provincial pathways; do not assume one nationwide subject examination sequence.",
{Biology:"Ciencias Naturales / Biología (depending on cycle and provincial plan)",Chemistry:"Ciencias Naturales / Química (depending on cycle and provincial plan)",Physics:"Ciencias Naturales / Física (depending on cycle and provincial plan)",Mathematics:"Matemática"},
["https://www.argentina.gob.ar/nucleos-de-aprendizaje-prioritarios"],
["The national NAP portal publishes separate secondary learning priorities for Mathematics and Natural Sciences in both the Basic Cycle and Oriented Cycle.","Natural Sciences is a broad learning area at the national NAP level; individual provinces organise Biology, Chemistry and Physics differently. A provincial curriculum must be selected before creating a chapter-by-chapter sequence."],
{Mathematics:"national NAP learning priorities identified for Basic and Oriented Cycles; provincial grade-by-grade sequence pending"}),
make("Armenia","Ministry of Education, Science, Culture and Sport of the Republic of Armenia (MoESCS)","https://escs.am/en/static/second-education",
"12-year general education: elementary grades 1–4, middle grades 5–9 and high school grades 10–12. New state standard and subject programmes are being phased in; verify academic-year version and grade.",
"Armenian is the principal language in public schools; other language streams/schools require separate validation.",
"School-based diagnostic, formative and summative assessment under state standards; high-school graduation and university admission routes must be checked against current rules.",
{Biology:"Կենսաբանություն (Biology)",Chemistry:"Քիմիա (Chemistry)",Physics:"Ֆիզիկա (Physics)",Mathematics:"Մաթեմատիկա (Mathematics)"},
["https://escs.am/en/static/second-education","https://escs.am/files/files/2024-11-18/70ace44a3426051d5c00af5d9d699491.pdf","https://arlis.am/acts/files/157880/c76cb6c393ff707984adf1f782d5e2986abb66df57672a955df7462198808d00"],
["The Ministry confirms the 12-year, three-tier school structure.","A Ministry general-education reform report states new subject standards and curricula were approved in May 2024, with staged implementation in grades across 2024–25 and 2025–26.","The official legal framework requires state standards to specify learning domains, curricula and assessment. Exact subject programme files and grade-specific chapter order still need transcription."],
{Mathematics:"new state standard and programme framework identified; grade-specific programme sequence pending"}),
make("Australia","Australian Curriculum, Assessment and Reporting Authority (ACARA), with state and territory education authorities responsible for delivery","https://www.australiancurriculum.edu.au/",
"Foundation–Year 10 Australian Curriculum Version 9.0; senior secondary subject syllabuses are published separately and states/territories implement them on their own timelines. Senior secondary pages currently list Version 8.4 subject courses.",
"English; state and territory systems may provide language programmes and additional provisions.",
"State/territory senior secondary certificates and assessment systems; the national curriculum is not a single national school-leaving examination.",
{Biology:"Senior Secondary Biology (Version 8.4)",Chemistry:"Senior Secondary Chemistry (Version 8.4)",Physics:"Senior Secondary Physics (Version 8.4)",Mathematics:"Mathematics F–10 (Version 9.0); Essential/General Mathematics, Mathematical Methods and Specialist Mathematics (Senior Secondary Version 8.4)"},
["https://www.australiancurriculum.edu.au/senior-secondary-curriculum/","https://www.education.gov.au/australian-curriculum","https://www.acara.edu.au/curriculum/"],
["Australian Government confirms Version 9.0 was endorsed in 2022 and implementation by jurisdictions began from 2023; state/territory authorities control delivery.","ACARA senior secondary curriculum portal lists Biology, Chemistry, Physics and four Mathematics courses, with senior secondary pages currently showing Version 8.4.","Science and Mathematics are learning areas in Foundation–Year 10; do not label separate Biology/Chemistry/Physics chapter sequences as universal national Years 7–10 requirements."],
{Mathematics:"F–10 Version 9.0 and senior-secondary course families identified; state-specific senior course sequencing pending",Biology:"senior-secondary subject identified; official course structure available; topic sequence transcription pending",Chemistry:"senior-secondary subject identified; official course structure available; topic sequence transcription pending",Physics:"senior-secondary subject identified; official course structure available; topic sequence transcription pending"}),
make("Austria","Federal Ministry of Education (Bundesministerium für Bildung); Federal Legal Information System (RIS)","https://www.bmb.gv.at/Themen/schule/schulpraxis/lp/lp_ahs.html",
"Academic secondary schools (AHS): lower level classes 1–4 and upper level classes 5–8. Current AHS curriculum remains applicable before the new upper-level curriculum begins progressively on 1 September 2027.",
"German; minority-language and bilingual school provisions are governed separately.",
"School-based assessment and the Reifeprüfung (Matura) at the end of upper secondary; subject combinations depend on school type and profile.",
{Biology:"Biologie und Umweltbildung",Chemistry:"Chemie",Physics:"Physik",Mathematics:"Mathematik"},
["https://www.bmb.gv.at/Themen/schule/schulpraxis/lp/lp_ahs.html","https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008568"],
["The Ministry states that new AHS upper-secondary curricula were promulgated on 6 November 2026 and will take effect progressively from 1 September 2027, beginning with class 5; until then, the currently applicable curriculum must be used.","The current legal curriculum lists Mathematics, Biology and Environmental Education, Chemistry and Physics across AHS classes, with different class-hour allocations by school form.","The official timetable confirms the four subject areas but this map does not yet transcribe their detailed subject-specific Lehrplan content."],
{Mathematics:"current AHS subject and class allocation verified; detailed Lehrplan sequence pending",Biology:"current AHS subject and class allocation verified; detailed Lehrplan sequence pending",Chemistry:"current AHS subject and class allocation verified; detailed Lehrplan sequence pending",Physics:"current AHS subject and class allocation verified; detailed Lehrplan sequence pending"}),
make("Azerbaijan","Ministry of Science and Education of the Republic of Azerbaijan","https://edu.gov.az/en/general-education",
"General education: subject curricula span grade bands; official 2024 ministry order approves updated Natural Science (grades V–VI), Mathematics (I–XI), Biology (VII–XI) and Chemistry (VII–XI) curricula. Physics curriculum requires separate current-document verification.",
"Azerbaijani is the principal state language; schools with other languages of instruction require separate subject-language mapping.",
"National assessment and final attestation arrangements; confirm current grade, subject and examination rules with the State Examination Centre and Ministry.",
{Biology:"Biologiya (VII–XI)",Chemistry:"Kimya (VII–XI)",Physics:"Fizika (current programme document retrieval pending)",Mathematics:"Riyaziyyat (I–XI)"},
["https://edu.gov.az/en/general-education","https://edu.gov.az/az/esas-senedler/tebiet-heyat-bilgisi-riyaziyyat-biologiya-ve-kimya-fenleri-uzre-tehsil-proqramlarinin-kurikulumlarin-tesdiqi-barede-azerbaycan-respublikasi-elm-ve-teh","https://edu.gov.az/upload/file/milli_kurikulum-eng.pdf"],
["The Ministry's 2024 order approves updated Natural Science for grades V–VI, Mathematics for grades I–XI, Biology for grades VII–XI and Chemistry for grades VII–XI.","The Ministry's general education page identifies its role in developing subject curricula and state standards.","The published national curriculum framework lists Physics, Chemistry, Biology and Mathematics as secondary education subjects. The latest Physics programme document and all detailed topic sequences still require retrieval."],
{Mathematics:"2024 updated curriculum approval verified; grade-by-grade sequence pending",Biology:"2024 updated curriculum approval verified for grades VII–XI; sequence pending",Chemistry:"2024 updated curriculum approval verified for grades VII–XI; sequence pending",Physics:"subject present in official national framework; latest programme document verification pending"})
],
completionRules:{doNotInferChapterCounts:true,doNotTreatLearningAreasAsSeparateSubjectsWithoutEvidence:true,doNotTreatNationalFrameworkAsProvincialOrStateSpecificSequence:true,targetWordsPerChapter:10000,minimumDiagramsPerChapter:10,minimumExamQuestionsPerChapter:15}};
if(typeof module!=="undefined"&&module.exports)module.exports=batch;
if(root)root.CBE_CURRICULUM_SOURCE_MAP_BATCH_03=batch;
})(typeof window!=="undefined"?window:globalThis);
