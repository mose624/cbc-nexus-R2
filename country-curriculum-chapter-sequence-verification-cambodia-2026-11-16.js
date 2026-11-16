/* CBE Nexus — Cambodia curriculum sequence verification
 * Reviewed: 2026-11-16
 * Canonical country index position: 34 (after Cabo Verde)
 * Purpose: source-grounded curriculum mapping; this is not a claim that
 * CBE Nexus long-form chapter content has been written or published.
 */
export default {
  country: "Cambodia",
  isoAlpha3: "KHM",
  canonicalIndex: 34,
  reviewedOn: "2026-11-16",
  educationStructure: {
    primary: "Grades 1–6",
    lowerSecondary: "Grades 7–9",
    upperSecondary: "Grades 10–12",
    basicEducation: "Grades 1–9",
    languageAndTerminology: [
      "Khmer is the principal language of the national system.",
      "Use official Khmer subject names alongside English labels when available."
    ],
    sourceNotes: [
      "The Education Law defines primary as Grades 1–6, lower secondary as Grades 7–9, upper secondary as Grades 10–12, and basic education as Grades 1–9.",
      "The Education Strategic Plan 2024–2028 reports adoption of general and technical education curriculum frameworks and approval of syllabuses for primary, lower-secondary and upper-secondary subjects."
    ]
  },
  currentReformContext: {
    status: "Curriculum and textbook reform is active; do not assume that a newly announced guideline replaces every grade-level syllabus immediately.",
    2026Evidence: [
      "The Ministry's Sala Digital library lists a 2026 Guideline on Transformative Curriculum.",
      "A February 2026 Ministry implementation meeting focused on core curriculum, textbooks, teaching-method guides and science teaching methodologies."
    ],
    implementationCaution: "Confirm the approved version, grade and implementation year for each subject before replacing existing sequence maps."
  },
  subjects: [
    {
      subject: "Biology",
      officialSubjectLabels: ["Biology", "ជីវវិទ្យា"],
      curriculumPosition: "Science content is encountered within the general science curriculum at lower grades; Biology is identifiable as a distinct upper-secondary subject and national Grade 12 examination subject.",
      coverageVerified: ["General education framework Grades 1–12", "Distinct Grade 12 Biology examination subject"],
      sequenceStatus: "PARTIAL — grade-level curriculum and textbook contents must be extracted before publishing a year-by-year chapter sequence.",
      chapterCount: null,
      chapterCountMeaning: "No verified official textbook chapter count recorded.",
      pending: ["Extract current primary and lower-secondary science syllabuses and identify biological strands.", "Extract upper-secondary Biology syllabus and current textbook table of contents.", "Reconcile official Khmer titles, grade placement, practical work and assessment outcomes."]
    },
    {
      subject: "Chemistry",
      officialSubjectLabels: ["Chemistry", "គីមីវិទ្យា"],
      curriculumPosition: "Chemistry-related learning is included within school science at lower grades; Chemistry is identifiable as a distinct upper-secondary subject and national Grade 12 examination subject.",
      coverageVerified: ["General education framework Grades 1–12", "Distinct Grade 12 Chemistry examination subject"],
      sequenceStatus: "PARTIAL — lower-grade integrated science and upper-secondary specialist Chemistry must be mapped separately.",
      chapterCount: null,
      chapterCountMeaning: "No verified official textbook chapter count recorded.",
      pending: ["Extract lower-secondary science syllabus and identify chemistry topics without mislabelling them as a separate course.", "Extract upper-secondary Chemistry syllabus and textbook contents.", "Verify experiments, safety requirements, grade allocation and assessment outcomes."]
    },
    {
      subject: "Physics",
      officialSubjectLabels: ["Physics", "រូបវិទ្យា"],
      curriculumPosition: "Physics-related learning is included within school science at lower grades; Physics is identifiable as a distinct upper-secondary subject and national Grade 12 examination subject.",
      coverageVerified: ["General education framework Grades 1–12", "Distinct Grade 12 Physics examination subject"],
      sequenceStatus: "PARTIAL — lower-grade integrated science and upper-secondary specialist Physics must be mapped separately.",
      chapterCount: null,
      chapterCountMeaning: "No verified official textbook chapter count recorded.",
      pending: ["Extract lower-secondary science syllabus and identify physics topics.", "Extract upper-secondary Physics syllabus and textbook contents.", "Verify practical investigations, mathematical requirements, grade allocation and assessment outcomes."]
    },
    {
      subject: "Mathematics",
      officialSubjectLabels: ["Mathematics", "គណិតវិទ្យា"],
      curriculumPosition: "A distinct subject throughout general education, with a published Grades 1–9 basic education curriculum and an upper-secondary Mathematics curriculum.",
      coverageVerified: ["Basic education Mathematics Grades 1–9", "Upper-secondary Mathematics curriculum"],
      sequenceStatus: "PARTIAL — official curriculum documents are identified, but detailed grade-by-grade strands and textbook chapter order still require extraction.",
      chapterCount: null,
      chapterCountMeaning: "Curriculum grades and strands are not textbook chapter counts.",
      pending: ["Extract the Grades 1–9 curriculum and grade comparison chart.", "Extract the upper-secondary Mathematics curriculum for Grades 10–12.", "Map strands, prerequisite progression, exercise types and national examination objectives."]
    }
  ],
  sourceRegister: [
    {
      title: "Education Law of Cambodia",
      url: "https://cdc.gov.kh/wp-content/uploads/2022/04/LAW-ON-EDUCATION_071208-.pdf",
      use: "Statutory structure of primary, lower-secondary, upper-secondary and basic education."
    },
    {
      title: "Education Strategic Plan 2024–2028",
      url: "https://nepcambodia.org/wp-content/uploads/2024/10/2.Final_ESP_2024_2028_Eng_DGPP_PRINTING_170924.pdf",
      use: "Officially reported curriculum-framework and syllabus approval reform."
    },
    {
      title: "Curriculum Framework of General Education and Technical Education",
      url: "https://nepcambodia.org/documents/curriculum-framework-of-general-education-and-technical-education/",
      use: "National curriculum framework reference."
    },
    {
      title: "MoEYS Sala Digital — Guideline on Transformative Curriculum (2026)",
      url: "https://sala.moeys.gov.kh/kh/library/00007798",
      use: "2026 Ministry-published curriculum transformation guidance."
    },
    {
      title: "ICMI — Cambodia Mathematics Curriculum Grades 1–12",
      url: "https://www.mathunion.org/icmi/around-icmi/country-contexts/database-project-cambodia",
      use: "Links to basic education Mathematics Grades 1–9 and upper-secondary Mathematics curriculum."
    },
    {
      title: "MoEYS examination resource announcement",
      url: "https://t.me/s/moeysnews?before=41706&q=%23%E1%9E%9C",
      use: "Ministry channel lists separate Grade 12 examination packages for Mathematics, Chemistry, Biology and Physics."
    }
  ],
  reconciliationRules: [
    "Do not create separate Biology, Chemistry and Physics courses for every primary or lower-secondary grade unless the official grade syllabus does so.",
    "Keep integrated Science learning outcomes distinct from upper-secondary specialist subject syllabuses.",
    "Do not treat international-school Cambridge or other international pathways as the national Cambodian curriculum.",
    "Do not equate curriculum strands, examination subjects or CBE Nexus-generated learning chapters with official textbook chapter counts."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsReviewed: 4,
    detailedGradeSequencesReconciled: 0,
    officialChapterCountsVerified: 0,
    longFormCbeNexusChaptersWritten: 0,
    status: "SOURCE MAP CREATED — detailed sequence extraction and chapter writing remain outstanding."
  }
  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; official grade/topic documents and actual textbook contents still require direct extraction",
  "finding": "This refresh does not assert a new verified topic sequence or official textbook chapter count. Preserve jurisdiction, language, pathway and integrated-science distinctions already documented.",
  "actualTextbookContentsInspected": false,
  "officialTextbookChapterCountsVerified": false,
  "cbEnexusLongFormChaptersWritten": false
},
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Cambodia",
  gradeSequenceEvidence: "The 2016 General Education and Technical Education Curriculum Framework treats Mathematics and Science as distinct subject areas; grade syllabuses are approved separately by the Ministry.",
  textbookEvidence: "Framework gives subject objectives, not actual chapter sequence; textbook contents not inspected.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://nepcambodia.org/wp-content/uploads/2024/09/Curriculum-Framework-of-General-Education-and-Teachnical-Education_january-2016.pdf",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology (or integrated Life Science), Chemistry, Physics and Mathematics; then open approved/adopted student textbooks and record exact printed chapter headings and counts separately. Do not infer textbook chapters from syllabus themes."
};
