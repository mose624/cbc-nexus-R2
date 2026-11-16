/* International curriculum audit guard.
   Keeps broad starter banks visible as supplementary study material until each country/subject
   has been mapped against its own current official syllabus and approved textbook sequence.
   Ghana SHS Year 1 sequence below is transcribed as headings only from NaCCA 2023 scope/sequence;
   it does not claim that detailed lessons have been completed. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const refs={
  Ghana:"https://nacca.gov.gh/secondary-education-curriculum/",
  Nigeria:"https://nerdc.gov.ng/content_manager/new_senior_curriculum_home.html",
  Uganda:"https://ncdc.go.ug/directorates/",
  Tanzania:"https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics",
  "South Africa":"https://www.education.gov.za/Curriculum/NCSGradesR12/CAPSFET.aspx"
 };
 const ghanaDocuments={
  "Biology":"https://nacca.gov.gh/wp-content/uploads/2025/04/Biology-Curriculum.pdf",
  "Chemistry":"https://nacca.gov.gh/wp-content/uploads/2025/04/Chemistry-Curriculum.pdf",
  "Physics":"https://nacca.gov.gh/wp-content/uploads/2025/04/Physics-Curriculum.pdf",
  "Mathematics":"https://nacca.gov.gh/wp-content/uploads/2025/04/Mathematics-Curriculum.pdf",
  "Curriculum portal":"https://nacca.gov.gh/secondary-education-curriculum/",
  "Subject combinations and WASSCE":"https://nacca.gov.gh/subject-combination-guidelines-secondary-education/"
 };
 const ghanaScope={
  "Biology":{
   "SHS1to3BroadStrands":["Exploring Biology in Society","Life in the Fundamental Unit","Diversity of Living Things and Their Environment","Systems of Life"],
   "scopeNote":"Four recurring strands across SHS 1–3; sub-strands, content standards and learning indicators must be extracted by year before defining individual chapters."
  },
  "Physics":{
   "SHS1to3BroadStrands":["Mechanics and Matter","Energy","Electric Field, Magnetic Field and Electronics","Atomic and Nuclear Physics"],
   "scopeNote":"Four recurring strands across SHS 1–3; detailed year-level sub-strands and learning indicators remain to be transcribed."
  },
  "Mathematics":{
   "SHS1to3BroadStrands":["Numbers for Everyday Life","Algebraic Thinking","Geometry Around Us","Making Sense of and Using Data"],
   "scopeNote":"NaCCA scope-and-sequence summary reports 40 content standards, 42 learning outcomes and 108 learning indicators across SHS 1–3. These are not 108 chapters."
  },
  "Chemistry":{
   "SHS1to3BroadStrands":["Physical Chemistry","Systematic Chemistry of the Elements","Chemistry of Carbon Compounds"],
   "scopeNote":"The curriculum uses three broad strands; the official PDF's year-specific sub-strands, content standards and learning indicators still need full extraction."
  }
 };
 const ghana={
  "Mathematics":[
   "Strand 1 — Numbers for Everyday Life: Real Number System",
   "Strand 1 — Numbers for Everyday Life: Proportional Reasoning",
   "Strand 2 — Algebraic Thinking: Applications of Expressions, Equations and Inequalities",
   "Strand 2 — Algebraic Thinking: Patterns and Relationships",
   "Strand 3 — Geometry Around Us: Spatial Sense",
   "Strand 3 — Geometry Around Us: Measurement",
   "Strand 4 — Making Sense of and Using Data: Statistical Reasoning and Its Application in Real Life",
   "Strand 4 — Making Sense of and Using Data: Chance"
  ],
  "Biology":[
   "Strand 1 — Exploring Biology in Society: Biology as the Science of Life",
   "Strand 1 — Exploring Biology in Society: Biology and Entrepreneurship",
   "Strand 2 — Life in the Fundamental Unit: Cell Structure and Functions",
   "Strand 3 — Diversity of Living Things and Their Environment: Living Organisms",
   "Strand 3 — Diversity of Living Things and Their Environment: Ecology",
   "Strand 3 — Diversity of Living Things and Their Environment: Diseases and Infections",
   "Strand 4 — Systems of Life: Mammalian Systems",
   "Strand 4 — Systems of Life: Plant Systems"
  ],
  "Chemistry":[
   "Strand 1 — Physical Chemistry: Matter and Its Properties",
   "Strand 1 — Physical Chemistry: Equilibria",
   "Strand 2 — Systematic Chemistry of the Elements: Periodicity",
   "Strand 2 — Systematic Chemistry of the Elements: Bonding",
   "Strand 3 — Chemistry of Carbon Compounds: Characterisation of Organic Compounds",
   "Strand 3 — Chemistry of Carbon Compounds: Organic Functional Groups"
  ],
  "Physics":[
   "Strand 1 — Mechanics and Matter: Introduction to Physics",
   "Strand 1 — Mechanics and Matter: Matter",
   "Strand 1 — Mechanics and Matter: Kinematics",
   "Strand 1 — Mechanics and Matter: Dynamics",
   "Strand 2 — Energy: Heat",
   "Strand 2 — Energy: Waves",
   "Strand 3 — Electric Field, Magnetic Field and Electronics: Electrostatics",
   "Strand 3 — Electric Field, Magnetic Field and Electronics: Magnetostatics",
   "Strand 3 — Electric Field, Magnetic Field and Electronics: Analogue Electronics",
   "Strand 4 — Atomic and Nuclear Physics: Atomic Physics",
   "Strand 4 — Atomic and Nuclear Physics: Nuclear Physics"
  ]
 };
 const sourceText={
  Ghana:"NaCCA Senior High School curriculum (September 2023). Official separate Biology, Chemistry, Physics and Mathematics curriculum documents cover SHS 1–3. Broad subject strands and a partial set of sequence headings are recorded. They are not a year-by-year chapter map. Detailed SHS 1, SHS 2 and SHS 3 sub-strands, content standards, learning outcomes and indicators still require extraction from the official PDFs before the chapter register can be called complete.",
   Nigeria:"NERDC New Revised Senior Secondary Education Curriculum (2025 implementation cycle). The national portal separates SSS 1, SSS 2 and SSS 3; the science offering includes Biology, Chemistry and Physics, with General Mathematics as a core subject. Each subject and year must be mapped from its own current curriculum document; older topic lists must not be assumed current.",
  Uganda:"NCDC curriculum framework and subject syllabi. Lower Secondary runs Senior 1–4 and includes Mathematics, Biology, Chemistry and Physics as separate subjects; General Science is an alternative for some learners with special educational needs. Advanced Secondary has separate aligned syllabi, so level must be identified before topics are mapped.",
  Tanzania:"Tanzania Institute of Education (TIE) publishes separate Ordinary Secondary Education syllabi for Forms I–IV and Advanced Secondary Education syllabi for Forms V–VI. Subject and level must be matched to the correct current syllabus; never substitute an Advanced Form V–VI sequence for Ordinary Form I.",
  "South Africa":"DBE CAPS FET Phase. Grade 10–12 subject content and annual teaching plans must be mapped separately. Biology is Life Sciences; Chemistry and Physics content is presented within Physical Sciences."
 };
 for(const [country,record] of Object.entries(all)){
  if(country==="Kenya") continue;
  const levelName=Object.keys(record.levels||{})[0];
  const subjects=record.levels?.[levelName]||{};
  const verified=country==="Ghana"?ghana:{};
  record.curriculumSource=refs[country]||record.source;
  if(country==="Ghana"){
   record.curriculumDocuments=ghanaDocuments;
   record.curriculumScopeBySubject=ghanaScope;
   record.curriculumLevelScope="Senior High School (SHS 1–3), September 2023 curriculum; do not merge with Junior High School Common Core Programme (JHS 1–3 Integrated Science and Mathematics).";
   record.assessmentContext="WASSCE subject combinations follow NaCCA's current secondary subject-combination guidelines; school subject offering and learner combination can vary.";
   record.curriculumAuditStatus="official-documents-and-strand-scope-identified-substrand-indicator-audit-pending";
  }
  record.curriculumAuditStatus=country==="Ghana"?"official-documents-and-partial-strand-headings-identified-year-level-substrand-audit-pending":"official-source-identified-sequence-audit-pending";
  record.verifiedCurriculumSequence=verified;
  record.notice=(sourceText[country]||"Official curriculum sequence audit pending.")+
   " Existing generic starter lessons are explicitly labelled SUPPLEMENTARY until their exact position and scope are verified. They are not presented as the national syllabus.";
  for(const [subject,lessons] of Object.entries(subjects)){
   const hasVerifiedSequence=Array.isArray(verified[subject]);
   for(const lesson of lessons||[]){
    if(lesson.curriculumStatus==="official-core") continue;
    lesson.curriculumStatus="supplementary-unverified";
    const base=String(lesson.title||"").replace(/^Supplementary topic — /,"");
    lesson.title="Supplementary topic — "+base;
    lesson.curriculumContext="SUPPLEMENTARY STUDY MATERIAL — this topic has not yet been verified as a core topic in the exact "+country+" "+levelName+" "+subject+" sequence. "+(hasVerifiedSequence?"The official sequence headings for this subject are listed in the country curriculum notice; this lesson is not yet mapped to an individual syllabus indicator.":"The exact official topic sequence is still being checked. Do not treat this starter lesson order as the national syllabus.");
   }
  }
 }
})();
