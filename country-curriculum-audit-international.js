/* International curriculum audit guard.
   Keeps broad starter banks visible as supplementary study material until each country/subject
   has been mapped against its own current official syllabus and approved textbook sequence.
   Ghana SHS Year 1 sequence below is transcribed as headings only from NaCCA 2023 scope/sequence;
   it does not claim that detailed lessons have been completed. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const refs={
  Ghana:"https://nacca.gov.gh/secondary-education-curriculum/",
  Nigeria:"https://www.nerdc.gov.ng/content_manager/new_senior_curriculum_home.html",
  Uganda:"https://ncdc.go.ug/directorates/",
  Tanzania:"https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics",
  "South Africa":"https://www.education.gov.za/Curriculum/NCSGradesR12/CAPSFET.aspx"
 };
 const ghana={
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
  Ghana:"NaCCA SHS curriculum (September 2023). Biology, Chemistry and Physics SHS Year One scope-and-sequence headings have been checked. Mathematics sequence is still being checked. The sequence is not a claim that every lesson has been written.",
  Nigeria:"NERDC revised Senior Secondary curriculum portal. SSS1 subject-level topics must be verified against the current SSS1 curriculum and approved learner materials before any topic bank is promoted as core.",
  Uganda:"NCDC Lower Secondary Curriculum. Senior 1 is Lower Secondary Year 1; separate Physics, Chemistry and Biology syllabi apply. Subject sequence must be checked against the NCDC syllabus, not copied from another country.",
  Tanzania:"TIE Ordinary Secondary Education syllabus. Form I–IV subject syllabi and the current TIE student books are the references. Do not use Advanced Form V–VI sequences for Form I.",
  "South Africa":"DBE CAPS FET Phase. Grade 10–12 subject content and annual teaching plans must be mapped separately. Biology is Life Sciences; Chemistry and Physics content is presented within Physical Sciences."
 };
 for(const [country,record] of Object.entries(all)){
  if(country==="Kenya") continue;
  const levelName=Object.keys(record.levels||{})[0];
  const subjects=record.levels?.[levelName]||{};
  const verified=country==="Ghana"?ghana:{};
  record.curriculumSource=refs[country]||record.source;
  record.curriculumAuditStatus=country==="Ghana"?"partial-official-sequence-verified":"official-source-identified-sequence-audit-pending";
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
