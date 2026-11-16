/* CBE Nexus — Barbados curriculum sequence verification.
 * Canonical alphabetical country index: Barbados (BRB).
 * Review date: 2026-11-16.
 * Important scope distinction: Barbados national school curriculum vs regional
 * CXC CSEC/CAPE syllabuses. CXC provides examinable secondary/upper-secondary
 * subject frameworks used in Barbados, but these are not themselves a complete
 * national grade-by-grade curriculum.
 */
export const country = {
  name: "Barbados",
  isoAlpha3: "BRB",
  reviewDate: "2026-11-16",
  authorities: [
    "Ministry of Educational Transformation / Ministry of Education, Technological and Vocational Training",
    "Caribbean Examinations Council (CXC)"
  ],
  systemNotes: [
    "The national secondary curriculum is in a reform and transition period. The Ministry's 14 August 2026 ministerial statement described revised curriculum offerings from September 2026; however, a 20 August 2026 report quoting the Chief Education Officer said the 2026/27 school year would instead be used for teacher preparation and stakeholder consultation before introduction. Therefore, do not label the proposed revised curriculum as fully implemented in November 2026 without a later official implementation notice.",
    "The Ministry's proposed secondary structure describes Forms 1–3 (now moving to Grade terminology) as a broad programme including Mathematics and Science; specialist areas including Biology, Chemistry and Physics are named among the science/technology/life-sciences specialisations for later secondary study.",
    "Barbados uses CXC CSEC and CAPE qualifications. CSEC Biology, Chemistry, Physics and Mathematics syllabuses provide regional examinable topic structures. CAPE offers advanced subject pathways in Biology, Chemistry, Physics and Mathematics. These are regional examination syllabuses, not proof of one identical school-level teaching sequence in every Barbadian school.",
    "The 2026 CXC syllabus downloads page identifies selected revised/amended syllabuses for teaching from September 2026. The listed changes do not establish that CSEC Biology, Chemistry, Physics or Mathematics were all newly revised for that date.",
    "The Education Regulations describe the historic core secondary curriculum as including Integrated Science and Mathematics. This statutory framework is useful historical baseline evidence, but the curriculum reform and CXC subject pathways must be recorded separately.",
    "From September 2026 the Ministry proposed a change from Forms/Classes to Grades. The exact grade mapping and rollout should be checked against current ministry circulars before being used as a definitive data migration."
  ],
  subjects: [
    {
      subject: "Biology",
      nationalCoverage: "Science is part of the broad lower-secondary programme; Biology is identified as a specialist science/life-sciences subject in the proposed upper-secondary specialisation structure.",
      regionalExamPathway: "CXC CSEC Biology; CXC CAPE Biology for advanced study.",
      sequenceStatus: "CSEC topic structure verified at section level; national grade-by-grade sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedCsecSections: [
        "Section A — Living Organisms in the Environment",
        "Section B — Life Processes and Disease",
        "Section C — Continuity and Variation"
      ],
      evidence: [
        "CXC describes CSEC Biology as three sections covering organisms/environment, life processes/disease, and continuity/variation.",
        "CXC syllabus requires prior general secondary science, supporting its classification as a specialist subject after a general science foundation.",
        "The Ministry's proposed specialisation list explicitly includes Biology within Science, Technology, Engineering and Life Sciences."
      ],
      pending: ["Extract all detailed CSEC Biology syllabus objectives and subtopics in official order.", "Retrieve CAPE Biology Units 1 and 2 and map their module sequence separately.", "Obtain the Ministry's final national curriculum guide and grade-by-grade allocation after the 2026/27 consultation period.", "Do not convert CXC sections into invented textbook chapter counts."]
    },
    {
      subject: "Chemistry",
      nationalCoverage: "Science is part of the broad lower-secondary programme; Chemistry is identified as a specialist science/life-sciences subject in the proposed upper-secondary specialisation structure.",
      regionalExamPathway: "CXC CSEC Chemistry; CXC CAPE Chemistry for advanced study.",
      sequenceStatus: "CSEC section structure verified; national grade-by-grade sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedCsecSections: [
        "Section A — Principles of Chemistry",
        "Section B — Organic Chemistry",
        "Section C — Inorganic Chemistry"
      ],
      evidence: [
        "CXC organises CSEC Chemistry into three main sections: Principles of Chemistry, Organic Chemistry and Inorganic Chemistry.",
        "CXC identifies inquiry, experimentation, measurement and interpretation as central elements of the syllabus.",
        "The Ministry's proposed specialisation list explicitly includes Chemistry in Science, Technology, Engineering and Life Sciences."
      ],
      pending: ["Extract detailed CSEC Chemistry objectives/subtopics in official order.", "Retrieve CAPE Chemistry Units 1 and 2 separately; verify modules, practical hours and assessment.", "Obtain the final Ministry national curriculum guide and school grade allocation.", "Keep CSEC/CAPE examination sequence distinct from locally sequenced classroom schemes of work."]
    },
    {
      subject: "Physics",
      nationalCoverage: "Science is part of the broad lower-secondary programme; Physics is identified as a specialist science/technology subject in the proposed upper-secondary specialisation structure.",
      regionalExamPathway: "CXC CSEC Physics; CXC CAPE Physics for advanced study.",
      sequenceStatus: "CSEC five-section sequence verified; national grade-by-grade sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedCsecSections: [
        "Section A — Mechanics",
        "Section B — Thermal Physics and Kinetic Theory",
        "Section C — Waves and Optics",
        "Section D — Electricity and Magnetism",
        "Section E — The Physics of the Atom"
      ],
      evidence: [
        "CXC lists five sections in the CSEC Physics syllabus, in the order recorded here.",
        "The Ministry's proposed Science, Technology, Engineering and Life Sciences specialisation explicitly names Physics.",
        "CXC CAPE Physics has a separate two-unit, six-module structure and should not be merged with CSEC."
      ],
      pending: ["Extract all detailed CSEC Physics objectives and subtopics in order.", "Retrieve CAPE Physics Units 1 and 2 and map module sequence separately.", "Obtain final Ministry curriculum guide and confirm national grade placement.", "Extract required experiments, SBA skills and assessment criteria."]
    },
    {
      subject: "Mathematics",
      nationalCoverage: "Core subject in the Ministry's proposed lower-secondary broad curriculum and in the historic statutory secondary core curriculum.",
      regionalExamPathway: "CXC CSEC Mathematics; CAPE Mathematics pathways include Pure Mathematics, Applied Mathematics and other approved options.",
      sequenceStatus: "CSEC three-module structure and topic sequence verified at module/topic-heading level; national grade-by-grade sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedCsecModules: [
        {
          module: "Module 1 — Fundamentals of Secondary Level Mathematics",
          topics: ["Number Theory and Computation", "Measurement", "Statistics 1"]
        },
        {
          module: "Module 2 — Intermediate Secondary Level Mathematics",
          topics: ["Consumer Arithmetic", "Algebra 1", "Algebra 2", "Geometry and Trigonometry 1"]
        },
        {
          module: "Module 3 — Higher Concepts in Secondary Level Mathematics",
          topics: ["Sets", "Introduction to Graphs", "Relations, Functions and Graphs 1", "Vectors and Matrices 1", "Statistics 2", "Relations, Functions and Graphs 2", "Geometry and Trigonometry 2", "Vectors and Matrices 2"]
        }
      ],
      evidence: [
        "CXC's current CSEC Mathematics subject page presents three modules and their associated topic headings.",
        "The Ministry's proposed broad secondary curriculum includes Mathematics in Forms 1–3 (transitioning to Grade terminology).",
        "CXC Mathematics is a regional examination syllabus and its modules should not be represented as the national primary-to-secondary class sequence."
      ],
      pending: ["Extract the complete official CSEC Mathematics syllabus objectives and subtopics.", "Map primary and lower-secondary national mathematics guides by grade.", "Retrieve CAPE Pure Mathematics and Applied Mathematics structures separately.", "Confirm the final grade nomenclature and implementation through current Ministry circulars."]
    }
  ],
  sourceRegister: [
    {
      title: "Barbados Ministry of Education — 2026 Ministerial Statement",
      url: "https://education.gov.bb/ministerial-statement/",
      use: "Official statement dated 14 August 2026 on education priorities, transition arrangements and planned curriculum reform."
    },
    {
      title: "Barbados Ministry — Skills for the Future II",
      url: "https://change.education.gov.bb/skills-for-the-future-ii/",
      use: "Official programme page describing curriculum reform and additional secondary subject areas."
    },
    {
      title: "Caribbean Examinations Council — CSEC Biology",
      url: "https://www.cxc.org/subject/biology-csec/",
      use: "Official CXC Biology syllabus overview and three-section structure."
    },
    {
      title: "Caribbean Examinations Council — CSEC Chemistry",
      url: "https://www.cxc.org/subject/chemistry-csec/",
      use: "Official CXC Chemistry syllabus overview and three-section structure."
    },
    {
      title: "Caribbean Examinations Council — CSEC Physics",
      url: "https://www.cxc.org/subject/physics-csec/",
      use: "Official CXC Physics syllabus overview and five-section structure."
    },
    {
      title: "Caribbean Examinations Council — CSEC Mathematics",
      url: "https://www.cxc.org/subject/mathematics-csec/",
      use: "Official CXC Mathematics three-module structure and topic headings."
    },
    {
      title: "Caribbean Examinations Council — Syllabuses and Standards",
      url: "https://www.cxc.org/syllabus-downloads/",
      use: "Official CXC notice of selected revised/amended syllabuses for teaching from September 2026; confirms regional assessment pathways."
    },
    {
      title: "Barbados Education Regulations, 1982 (consolidated)",
      url: "https://www.barbadoslawcourts.gov.bb/assets/content/pdfs/consolidatedlaws/subsidiarylegislationofbarbados/EducationRegulations%2C1982Cap41%27C.pdf",
      use: "Historic statutory secondary core subject baseline, including Integrated Science and Mathematics."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithOfficialRegionalExamStructureRecorded: 4,
    subjectsWithNationalGradeByGradeSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    curriculumReformStatus: "2026/27 implementation timing requires caution: Ministry statement planned revised offerings from September 2026, while a 20 August 2026 report quoting the Chief Education Officer said the year would be used for preparation and consultation before implementation.",
    status: "CXC-secondary-exam-frameworks-mapped-at-section-or-module-level; national-grade-sequence-and-final-reform-guides-pending",
    note: "Do not claim CXC topic sections/modules are official textbook chapters. Keep CSEC and CAPE separate from the national curriculum and record the 2026/27 reform transition accurately."
  }
};
