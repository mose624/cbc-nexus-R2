/* CBE Nexus — national curriculum source map, batch 02.
 * Countries: Albania, Algeria, Andorra, Angola, Antigua and Barbuda.
 * Evidence checked 2026-11-16. This records authorities, pathways and verified subject presence.
 * Do not mark chapter sequences complete until official subject documents are transcribed.
 */
(function(root){
 "use strict";
 const subjects=["Biology","Chemistry","Physics","Mathematics"];
 const batch={
  schemaVersion:"1.0",
  auditedAt:"2026-11-16",
  countries:[
   {
    country:"Albania",
    authority:"Agency for Quality Assurance in Pre-University Education (ASCAP), Ministry of Education and Sports",
    officialPortal:"https://www.ascap.edu.al/kurrikula-e-perditesuar-2025/",
    curriculumLevel:"Upper secondary (Klasa X and onward); confirm grade/profile for each subject programme before using it",
    languageOfInstruction:"Albanian; confirm language provisions for minority-language schools and individual programme.",
    assessmentPathway:"National upper-secondary assessment and Matura pathway; verify current subject-specific Matura requirements before tagging exam preparation.",
    subjectNames:{Biology:"Biologji",Chemistry:"Kimi",Physics:"Fizikë",Mathematics:"Matematikë"},
    evidenceUrls:["https://www.ascap.edu.al/kurrikula-e-perditesuar-2025/","https://www.ascap.edu.al/document/biologji-53/","https://www.ascap.edu.al/document/fizike-63/"],
    evidence:["ASCAP's updated 2025 curriculum portal lists Grade X subject programmes including Physics, Biology and Mathematics.","ASCAP has dedicated 2025 Biology and Physics curriculum document records. The portal is the authoritative route for locating Chemistry and Mathematics programme files too."],
    subjects:Object.fromEntries(subjects.map(s=>[s,{officialSubjectName:{Biology:"Biologji",Chemistry:"Kimi",Physics:"Fizikë",Mathematics:"Matematikë"}[s],sequenceStatus:"official-current-curriculum-portal-identified; exact grade/profile chapter sequence not yet transcribed",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Algeria",
    authority:"Ministry of National Education (Ministère de l'Éducation Nationale); National Education curricula and programmes",
    officialPortal:"https://www.education.gov.dz/",
    curriculumLevel:"Secondary education (enseignement secondaire); subject streams and year levels must be separated (common core and specialised years)",
    languageOfInstruction:"Arabic is the principal language of instruction; Tamazight and French have defined roles in the education system. Record the language for each specific programme.",
    assessmentPathway:"Baccalauréat (Bac) streams; subject selection and weighting differ by stream.",
    subjectNames:{Biology:"Sciences naturelles / علوم الطبيعة والحياة",Chemistry:"Chimie (within science/physical sciences programmes)",Physics:"Physique",Mathematics:"Mathématiques"},
    evidenceUrls:["https://www.education.gov.dz/"],
    evidence:["The Ministry of National Education is the national authority; Algeria's secondary system is stream-based, so one universal four-subject chapter order would be misleading.","Detailed current subject syllabuses and official programme PDFs still need retrieval from the ministry's curriculum resources before chapter titles are entered."],
    subjects:Object.fromEntries(subjects.map(s=>[s,{officialSubjectName:{Biology:"Sciences naturelles / علوم الطبيعة والحياة",Chemistry:"Chimie",Physics:"Physique",Mathematics:"Mathématiques"}[s],sequenceStatus:"national-authority-identified; current stream-specific syllabus document and sequence retrieval pending",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Andorra",
    authority:"Government of Andorra, Ministry responsible for Education and Universities; Escola Andorrana curriculum ordinances",
    officialPortal:"https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular",
    curriculumLevel:"Second education (segona ensenyança) and General Baccalaureate (batxillerat general); separate programme mapping required",
    languageOfInstruction:"Catalan, Spanish and French are vehicular languages in compulsory education; schools determine language use for each subject while ensuring balanced presence.",
    assessmentPathway:"Andorran school-system programme and General Baccalaureate pathways; do not substitute Spanish or French national exam sequences without identifying the school system.",
    subjectNames:{Biology:"Biologia (Baccalaureate programme)",Chemistry:"Química (Baccalaureate programme)",Physics:"Física (Baccalaureate programme)",Mathematics:"Matemàtiques; scientifico-technical or social-science applied pathways"},
    evidenceUrls:["https://www.govern.ad/ca/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular","https://portaleducatiu.ad/documentacio-oficial/programes-marcs-referencia","https://bopa.mca.ad/decret/392-2025/art-11"],
    evidence:["Decree 392/2025 defines compulsory second-education learning areas as Mathematics and Physical and Natural Sciences, among others; its Article 11 specifies Catalan, Spanish and French as vehicular languages.","The Government's curriculum legislation portal lists specific General Baccalaureate programmes for Biology, Chemistry, Physics and mathematics pathways, including Physics and mathematics programmes published in 2025.","Second-education Physical and Natural Sciences is an integrated area; it must not be falsely split into four separate compulsory subjects at that level."],
    subjects:Object.fromEntries(subjects.map(s=>[s,{officialSubjectName:{Biology:"Biologia",Chemistry:"Química",Physics:"Física",Mathematics:"Matemàtiques"}[s],sequenceStatus:s==="Mathematics"?"official-programme-pathways-identified; exact programme sequence not transcribed":"Baccalaureate programme identified; second-education content is within integrated Physical and Natural Sciences; exact sequence not transcribed",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Angola",
    authority:"Instituto Nacional de Avaliação e Desenvolvimento da Educação (INADE), Ministry of Education",
    officialPortal:"https://inade.gov.ao/",
    curriculumLevel:"General Secondary Education: I Cycle, 7th–9th Classes; II Cycle, 10th–12th Classes. II Cycle includes Physical and Biological Sciences area.",
    languageOfInstruction:"Portuguese.",
    assessmentPathway:"National Examinations (Exames Nacionais) including 9th and 12th Class; subject availability varies by implementation phase and year.",
    subjectNames:{Biology:"Biologia",Chemistry:"Química",Physics:"Física",Mathematics:"Matemática"},
    evidenceUrls:["https://inade.gov.ao/","https://inade.gov.ao/exames-nacionais","https://files.lex.ao/presidente-da-republica/2023/decreto-presidencial-n-o-162-23-de-01-de-agosto/download/decreto-presidencial-n-o-162-23-de-01-de-agosto_presidente-da-republica_lex-ao.pdf"],
    evidence:["Presidential Decree 162/23 organises General Secondary Education into I Cycle (7th–9th Classes) and II Cycle (10th–12th Classes), with a Physical and Biological Sciences area in the II Cycle.","INADE's 2025–2026 National Examinations page lists Mathematics, Physics, Biology and Chemistry in the 9th/12th Class examination framework across implementation phases.","INADE is the official education assessment and development institute and provides curriculum materials. Exact subject programme documents and chapter order still need extraction."],
    subjects:Object.fromEntries(subjects.map(s=>[s,{officialSubjectName:{Biology:"Biologia",Chemistry:"Química",Physics:"Física",Mathematics:"Matemática"}[s],sequenceStatus:"official-subject-and-assessment-presence-identified; exact current programme sequence not transcribed",chapterCount:null,chapters:[]}]))
   },
   {
    country:"Antigua and Barbuda",
    authority:"Ministry of Education, Sports and Creative Industries; Caribbean Examinations Council (CXC) for regional secondary syllabuses",
    officialPortal:"https://www.cxc.org/syllabus-downloads/",
    curriculumLevel:"Secondary CSEC and post-secondary/CAPE pathways; CXC syllabuses are regional examination syllabuses, not a single national grade-by-grade curriculum.",
    languageOfInstruction:"English.",
    assessmentPathway:"CSEC (Caribbean Secondary Education Certificate) and CAPE where offered; school subject combinations and local programme delivery should be confirmed with the Ministry/school.",
    subjectNames:{Biology:"CSEC Biology / CAPE Biology",Chemistry:"CSEC Chemistry / CAPE Chemistry",Physics:"CSEC Physics / CAPE Physics",Mathematics:"CSEC Mathematics / CAPE Pure Mathematics or Applied Mathematics"},
    evidenceUrls:["https://www.cxc.org/syllabus-downloads/","https://www.cxc.org/examinations/csec-edit/","https://www.cxc.org/subject/biology-csec/","https://asc.edu.ag/department-of-liberal-arts/"],
    evidence:["CXC's official syllabus catalogue lists CSEC Biology, Chemistry, Physics and Mathematics, and CAPE Biology, Chemistry, Physics, Pure Mathematics and Applied Mathematics.","CXC states that its syllabuses are a main source for curricula at upper-secondary and post-CSEC levels in participating territories.","Antigua State College's School of Science and Mathematics lists Biology, Chemistry and Physics combinations, with Mathematics as a prerequisite; this confirms local programme use but is not itself a national curriculum decree."],
    subjects:Object.fromEntries(subjects.map(s=>[s,{officialSubjectName:{Biology:"CSEC/CAPE Biology",Chemistry:"CSEC/CAPE Chemistry",Physics:"CSEC/CAPE Physics",Mathematics:"CSEC Mathematics; CAPE Pure/Applied Mathematics"}[s],sequenceStatus:"regional-CXC-syllabus-identified; verify local offering and transcribe current syllabus topics separately",chapterCount:null,chapters:[]}]))
   }
  ],
  completionRules:{
   doNotInferChapterCounts:true,
   doNotTreatIntegratedScienceAsSeparateBiologyChemistryPhysicsWithoutEvidence:true,
   doNotTreatRegionalExamSyllabusAsNationalGradeSequence:true,
   targetWordsPerChapter:10000,
   minimumDiagramsPerChapter:10,
   minimumExamQuestionsPerChapter:15
  }
 };
 if(typeof module!=="undefined"&&module.exports) module.exports=batch;
 if(root) root.CBE_CURRICULUM_SOURCE_MAP_BATCH_02=batch;
})(typeof window!=="undefined"?window:globalThis);
