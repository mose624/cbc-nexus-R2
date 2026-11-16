/* CBE Nexus — Bahamas curriculum verification register.
 * Canonical alphabetical country index: Bahamas (BHS).
 * Review date: 2026-11-16.
 * Primary sources: Bahamas Ministry of Education, Science & Technology,
 * Curriculum & Instruction Division and Department of Education documents.
 * Scope: published primary/junior/senior curriculum guides and pacing guides.
 * A pacing sequence is not automatically the full formal syllabus or textbook chapter list.
 */
export const country = {
  name: "Bahamas",
  isoAlpha3: "BHS",
  reviewDate: "2026-11-16",
  authority: "Commonwealth of The Bahamas, Ministry of Education, Science & Technology; Curriculum & Instruction Division",
  systemNotes: [
    "The official Curriculum & Instruction portal publishes separate primary, junior-high and senior-high curriculum catalogues and 2026/2027 pacing-guide sections.",
    "The Ministry's examination division identifies GLAT Grade 3 and Grade 6, BJC typically Grade 9, and BGCSE typically Grade 12. These are assessment milestones, not themselves curriculum sequences.",
    "The Education Act 2026 provides for development and implementation of a national curriculum for pre-primary, primary and secondary education; public schools must comply with it. Private schools are subject to the statutory minimum standards described in the Act.",
    "Senior-high specialist Biology, Chemistry and Physics are distinct from junior-high General Science. Do not map General Science topics as if they were three separate junior-high specialist courses.",
    "Curriculum guides have different publication dates. The 2026/2027 portal provides current pacing-guide navigation, while several detailed subject guides located in this audit are older editions. Confirm current school implementation before treating an older guide as the only operative version."
  ],
  subjects: [
    {
      subject: "Biology",
      grades: "Senior high Grades 10–12; separate junior-high General Science in Grades 7–9",
      sequenceStatus: "official senior-high Biology curriculum guide identified; detailed scope-and-sequence extraction pending",
      guideYear: 2010,
      chapterCount: null,
      officialChapterCount: null,
      verifiedStructure: ["Scope and Sequence (Topics and Content)", "Scope of Skills Grades 1–12", "Scope and Sequence (Skills)", "Standards and Benchmarks", "Comparison of Benchmarks for Grade Levels", "Scope of Work", "Assessment rubrics", "Pedagogical information", "Laboratory safety"],
      pending: ["Extract the actual topic headings and grade allocation from the Biology scope-and-sequence pages.", "Reconcile the 2010 guide with current 2026/2027 senior-high pacing resources.", "Keep BGCSE examination objectives distinct from the full teaching guide."]
    },
    {
      subject: "Chemistry",
      grades: "Senior high Grades 10–12",
      sequenceStatus: "official Ministry national pacing guides identified; detailed sequence partly extracted from Grade 10 and Grade 11 pacing evidence",
      guideYears: ["2024–2025 pacing guide", "2025–2026 pacing guide"],
      chapterCount: null,
      officialChapterCount: null,
      verifiedTopicEvidence: {
        grade10: ["Introduction to Chemistry and laboratory safety/equipment", "Pure substances, mixtures and separation", "Separation and purification methods: crystallization, distillation, filtration, centrifuging, magnetism, decantation and chromatography", "Purity testing using melting and boiling points", "Measurement of mass, temperature, volume, time and length", "Nature of matter and kinetic theory; states of matter and diffusion"],
        grade11: ["Chemical equations, formulae, state symbols and ionic equations", "Types of chemical reactions", "Relative atomic, molecular and formula masses", "Mole concept and Avogadro constant", "Molar mass and mass–mole–particle conversions", "Percentage composition and empirical/molecular formulae", "Molar gas volume and gas calculations", "Moles in solutions and chemical reactions"]
      },
      pending: ["Retrieve the complete 2025–2026 and 2026–2027 Chemistry pacing guides and extract Grade 12.", "Compare pacing guide topics with the full Chemistry curriculum and BGCSE syllabus.", "Do not call weekly pacing units official chapters."]
    },
    {
      subject: "Physics",
      grades: "Senior high Grades 10–12",
      sequenceStatus: "official Ministry subject curriculum scope-and-sequence document identified; grade allocation extracted",
      guideYear: 2019,
      chapterCount: null,
      officialChapterCount: null,
      verifiedMajorTopics: [
        { topic: "Physics in everyday life", grade10: "Introduction and branches of Physics", grade11: "Physicists and their contributions", grade12: "Careers in Physics" },
        { topic: "Measurements", grade10: "Physical quantities and SI units", grade11: "Unit conversion", grade12: "Unit conversion" },
        { topic: "Types of quantities", grade10: "Scalars and vectors; parallel and antiparallel vector addition", grade11: "Non-parallel vector addition", grade12: "Vector components and algebraic addition" },
        { topic: "Motion", grade10: "Displacement, velocity, speed and acceleration in one dimension", grade11: "Distance-time and velocity-time graphs", grade12: "Kinematics equations and projectile motion" },
        { topic: "Forces", grade10: "Types and sums of forces, moments and pressure", grade11: "Hooke's law, Newton's laws, equilibrium, centre of mass, momentum, impulse and circular motion", grade12: "Force/torque equilibrium, momentum conservation and one-dimensional collisions" },
        { topic: "Energy", grade10: "Forms, potential and kinetic energy, energy conversion", grade11: "Mechanical energy conservation, power and renewable energy", grade12: "Work, energy and power" },
        { topic: "Matter and thermal effects", grade10: "States, kinetic theory, temperature, heat transfer, density, flotation and Archimedes' principle", grade11: "Thermal expansion, specific and latent heat, calorimetry", grade12: "Barometers, ideal gas laws and solar thermal applications" },
        { topic: "Waves", grade10: "Wave parameters, wave types, sound, light spectrum and rectilinear propagation", grade11: "Reflection/refraction of sound and light, critical angle, lenses, ray diagrams and electromagnetic waves", grade12: "Interference and diffraction" },
        { topic: "Electricity and magnetism", grade10: "Electrostatics, fields, capacitance, current, cells, Ohm's law, permanent magnets and magnetic fields", grade11: "AC/DC, circuits, resistors, non-ohmic conductors, electromagnets, solenoids and force on a current-carrying wire", grade12: "Series/parallel combinations, power, motors, induction, generators, Faraday/Lenz laws, transformers and household electricity" }
      ],
      pending: ["Confirm whether a newer Physics guide or 2026/2027 pacing guide supersedes the 2019 sequence.", "Extract practical requirements, skills and assessment standards from the full guide.", "Cross-check with current BGCSE Physics syllabus."]
    },
    {
      subject: "Mathematics",
      grades: "Junior high Grades 7–9 and senior high Grades 10–12",
      sequenceStatus: "official junior-high curriculum guideline with explicit scope and sequence located; senior-high guide listed in current Ministry portal",
      guideYear: 2019,
      chapterCount: null,
      officialChapterCount: null,
      verifiedContentStrands: ["Number and Operations", "Algebra", "Geometry and Spatial Sense", "Measurement", "Statistics and Probability"],
      verifiedStructure: ["Junior-high Mathematics Grades 7–9: Scope and Sequence, Scope of Work, glossary, technology integration and strategies", "Official guide states the strands are integrated in yearly planning; strand display order is not a compulsory teaching order", "Senior-high Mathematics Grades 10–12 is listed in the Ministry's official Senior High Curriculum Guides catalogue"],
      pending: ["Extract grade-by-grade Grade 7–9 objectives from the scope-and-sequence tables.", "Retrieve and extract the senior-high Mathematics guide and current pacing guide.", "Check the current Ministry 2026/2027 guide for changes to the 2019 junior-high edition."]
    }
  ],
  sourceRegister: [
    { title: "Bahamas Ministry of Education — Curriculum & Instruction official portal", url: "https://www.bahamascurriculum.com/", use: "Current portal; separate grade-band curriculum catalogues and 2026/2027 pacing guide sections." },
    { title: "Ministry — Senior High Curriculum Guides", url: "https://www.bahamascurriculum.com/blank-11", use: "Official list of senior-high Mathematics, Biology, Chemistry, Physics and other course guides." },
    { title: "Ministry — Biology Curriculum Guidelines, Grades 10–12 (2010)", url: "https://curriculumbahamas.com/uploads/1/1/1/0/111058113/biology_grades-10-12.pdf", use: "Biology guide contents and scope-and-sequence structure." },
    { title: "Ministry — Junior High Mathematics Curriculum Guidelines, Grades 7–9 (2019)", url: "https://www.curriculumbahamas.com/uploads/1/1/1/0/111058113/junior_high_curriculum_finally_completed_copy.pdf", use: "Mathematics scope and sequence, five strands and integration guidance." },
    { title: "Ministry — Physics Curriculum 2019", url: "https://curriculumbahamas.com/uploads/1/1/1/0/111058113/physics_curriculum_2019.pdf", use: "Physics grade-by-grade major topic scope and sequence." },
    { title: "Ministry — National Chemistry Pacing Guide, Grades 10–12 (2025–2026)", url: "https://www.curriculumbahamas.com/uploads/1/1/1/0/111058113/national_pacing_guide_chemistry_grades_10-12__2025-2026__1_.pdf", use: "Chemistry weekly pacing and Grade 10 topic sequence." },
    { title: "Ministry — Chemistry Pacing Guide, Grades 10–12 (2024–2025)", url: "https://www.curriculumbahamas.com/uploads/1/1/1/0/111058113/pacing_guide_chemistry_grades_10-12_2024-2025.pdf", use: "Additional Grade 11 sequence evidence." },
    { title: "Ministry — Examination and Assessment Division", url: "https://www.ministryofeducationbahamas.com/examination-assessment-division", use: "GLAT, BJC and BGCSE assessment milestones and examination context." },
    { title: "Education Act 2026, section 33–35", url: "https://laws.bahamas.gov.bs/cms/images/LEGISLATION/PRINCIPAL/2026/2026-0010/2026-0010.pdf", use: "Statutory national curriculum duties and compliance." }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithOfficialGuideOrPacingEvidence: 4,
    subjectsWithSomeGradeLevelTopicEvidence: 3,
    subjectsWithCompleteGradeByGradeTopicExtraction: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "official-guide-and-sequence-evidence-recorded; full-grade-reconciliation-pending",
    note: "The record distinguishes formal curriculum guides, topic scope-and-sequence and yearly pacing plans. None of these sources establishes a fixed official textbook chapter count. Senior-high guide coverage and current 2026/2027 pacing must be reconciled before declaring the four subjects complete."
  }
};
