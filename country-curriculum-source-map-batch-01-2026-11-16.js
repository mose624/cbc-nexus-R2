/* CBE Nexus — verified national curriculum source map, batch 01.
 * Captured 2026-11-16 from official curriculum authorities.
 * This is a source/level/subject mapping, NOT a claim that every chapter or indicator
 * has been transcribed. Chapter titles must be added only after opening the relevant
 * official subject syllabus/design and recording page/section evidence.
 */
(function(root){
 "use strict";
 const batch={
  schemaVersion:"1.0",
  auditedAt:"2026-11-16",
  chapterVerificationAudit:"country-curriculum-chapter-sequence-verification-batch-01-10-2026-11-16.js",
  chapterVerificationScope:"first 10 countries across source-map batches 01 and 02; per-subject completion status is recorded in the linked audit",
  statusLegend:{
   "official-source-and-subject-presence-verified":"Official authority and subject presence/level confirmed; detailed chapter sequence still requires transcription.",
   "official-source-identified-sequence-not-yet-transcribed":"Official source identified, but exact sequence and indicators have not yet been transcribed.",
   "jurisdiction-dependent":"National framework exists, but state/territory or other subnational authority controls detailed curriculum or course implementation."
  },
  countries:[
   {
    country:"Kenya",
    authority:"Kenya Institute of Curriculum Development (KICD)",
    officialPortal:"https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
    curriculumLevel:"Senior School, Grade 10; Pure Sciences pathway",
    subjectNames:{Biology:"Biology",Chemistry:"Chemistry",Physics:"Physics",Mathematics:"Core Mathematics"},
    languageOfInstruction:"English and Kiswahili are used in the national education system; confirm the language specified for each subject/design and school context.",
    assessmentPathway:"Competency-Based Education senior-school assessment; confirm current assessment instruments and subject requirements with KNEC.",
    evidence:["KICD Grade 10 curriculum-designs portal; Pure Sciences section lists the subject-design area.","KICD Special Needs Grade 10 page separately lists Biology, Chemistry, Physics and Core Mathematics; not used as the mainstream syllabus."],
    evidenceUrls:["https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/","https://kicd.ac.ke/cbc-materials/curriculum-designs/sne-curriculum-designs/pi-grade-10/"],
    subjects:Object.fromEntries(["Biology","Chemistry","Physics","Mathematics"].map(s=>[s,{officialSubjectName:s==="Mathematics"?"Core Mathematics":s,sequenceStatus:"official-source-identified-sequence-not-yet-transcribed",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Ghana",
    authority:"National Council for Curriculum and Assessment (NaCCA), Ministry of Education",
    officialPortal:"https://nacca.gov.gh/secondary-education-curriculum/",
    curriculumLevel:"Senior High School (SHS 1–3), September 2023 curriculum",
    subjectNames:{Biology:"Biology",Chemistry:"Chemistry",Physics:"Physics",Mathematics:"Mathematics"},
    languageOfInstruction:"English; verify any school-specific language support separately.",
    assessmentPathway:"WASSCE; subject combinations and current examination arrangements must be checked against NaCCA/WAEC guidance.",
    evidence:["NaCCA official secondary curriculum portal lists downloadable Biology, Chemistry, Physics and Mathematics curriculum documents.","Existing country-curriculum-audit-international.js records SHS 1–3 strands and sub-strands for the four subjects; Mathematics remains at strand level and full indicator-to-lesson mapping is pending."],
    evidenceUrls:["https://nacca.gov.gh/secondary-education-curriculum/","https://nacca.gov.gh/wp-content/uploads/2025/04/Biology-Curriculum.pdf","https://nacca.gov.gh/wp-content/uploads/2025/04/Physics-Curriculum.pdf"],
    subjects:{
     Biology:{officialSubjectName:"Biology",sequenceStatus:"strand-and-substrand-scope-recorded; indicator-to-lesson mapping-pending",chapterCount:null,chapters:[]},
     Chemistry:{officialSubjectName:"Chemistry",sequenceStatus:"strand-and-substrand-scope-recorded; indicator-to-lesson mapping-pending",chapterCount:null,chapters:[]},
     Physics:{officialSubjectName:"Physics",sequenceStatus:"strand-and-substrand-scope-recorded; indicator-to-lesson mapping-pending",chapterCount:null,chapters:[]},
     Mathematics:{officialSubjectName:"Mathematics",sequenceStatus:"strand-level-scope-recorded; year-level indicator mapping pending",chapterCount:null,chapters:[]}
    }
   },
   {
    country:"Nigeria",
    authority:"Nigerian Educational Research and Development Council (NERDC), Federal Ministry of Education",
    officialPortal:"https://nerdc.gov.ng/content_manager/new_senior_curriculum_home.html",
    curriculumLevel:"Senior Secondary School 1–3; revised curriculum (October 2025 subject documents)",
    subjectNames:{Biology:"Biology",Chemistry:"Chemistry",Physics:"Physics",Mathematics:"General Mathematics"},
    languageOfInstruction:"English is the official national language and principal language of instruction; confirm local language provisions at basic levels.",
    assessmentPathway:"Senior secondary national curriculum; map assessment requirements separately against WAEC/NECO and current federal implementation guidance.",
    evidence:["NERDC's revised Senior Secondary Curriculum home page separates SSS 1, SSS 2 and SSS 3.","NERDC-approved subject notice identifies General Mathematics as a core compulsory subject and Biology, Chemistry and Physics in the Science field.","NERDC's revised Biology SSS 1 document is dated October 2025; older curriculum topic lists must not be substituted."],
    evidenceUrls:["https://nerdc.gov.ng/content_manager/new_senior_curriculum_home.html","https://www.nerdc.org.ng/Doc/NERDC-approved-subjects-notice.pdf","https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=6.pdf"],
    subjects:Object.fromEntries(["Biology","Chemistry","Physics","Mathematics"].map(s=>[s,{officialSubjectName:s==="Mathematics"?"General Mathematics":s,sequenceStatus:"official-source-identified-sequence-not-yet-transcribed",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Uganda",
    authority:"National Curriculum Development Centre (NCDC), Ministry of Education and Sports",
    officialPortal:"https://ncdc.go.ug/directorates/",
    curriculumLevel:"Lower Secondary, Senior 1–4 (UCE); Advanced Secondary must be mapped as a separate pathway",
    subjectNames:{Biology:"Biology",Chemistry:"Chemistry",Physics:"Physics",Mathematics:"Mathematics"},
    languageOfInstruction:"English is the principal language of instruction at secondary level; verify syllabus-specific language guidance.",
    assessmentPathway:"Uganda Certificate of Education (UCE) for Lower Secondary; do not combine with Advanced Level assessment or topic sequences.",
    evidence:["NCDC Lower Secondary Curriculum Framework identifies Mathematics, Biology, Chemistry and Physics as compulsory subjects in S1–S2 and core subjects in S3–S4.","NCDC secondary structure page identifies the four-year Lower Secondary cycle and subject menu."],
    evidenceUrls:["https://ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf","https://ncdc.go.ug/directorates/"],
    subjects:Object.fromEntries(["Biology","Chemistry","Physics","Mathematics"].map(s=>[s,{officialSubjectName:s,sequenceStatus:"official-source-and-subject-presence-verified",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Tanzania",
    authority:"Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
    officialPortal:"https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics",
    curriculumLevel:"Ordinary Secondary Education, Forms I–IV (2023 curriculum); Advanced Forms V–VI is a separate mapping",
    subjectNames:{Biology:"Biology",Chemistry:"Chemistry",Physics:"Physics",Mathematics:"Mathematics"},
    languageOfInstruction:"English and Kiswahili use varies by level and school policy; confirm the medium specified in each official syllabus.",
    assessmentPathway:"Certificate of Secondary Education Examination (CSEE); confirm current NECTA subject and assessment formats.",
    evidence:["TIE's 2023 Ordinary Secondary Education curriculum was approved by the Ministry on 9 August 2023.","TIE's official syllabus catalogue lists Physics and Mathematics Form I–IV syllabi; the catalogue's later pages list Biology and other subject syllabi."],
    evidenceUrls:["https://www.tie.go.tz/uploads/documents/en-1726825742-CURRICULUM%20FOR%20SECONDARY%20EDUCATION%20FORM%20I-IV.pdf","https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics","https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics?page=3"],
    subjects:Object.fromEntries(["Biology","Chemistry","Physics","Mathematics"].map(s=>[s,{officialSubjectName:s,sequenceStatus:"official-source-identified-sequence-not-yet-transcribed",chapterCount:null,chapters:[]}]))
   }
  ]
 };
 if(typeof module!=="undefined"&&module.exports) module.exports=batch;
 if(root) root.CBE_CURRICULUM_SOURCE_MAP_BATCH_01=batch;
})(typeof window!=="undefined"?window:globalThis);
