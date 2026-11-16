/* CBE Nexus — Bangladesh curriculum sequence verification.
 * Canonical alphabetical country index: Bangladesh (BGD).
 * Review date: 2026-11-16.
 * Evidence scope: NCTB National Curriculum Framework 2021, 2026 textbook publication
 * evidence, and official secondary-level subject catalogue references.
 * Critical caution: Bangladesh has had curriculum policy changes. Do not assume
 * the 2021 competency-based framework's integrated subject map is identical to
 * the 2026 textbook/SSC subject structure. Record grade, year and pathway.
 */
export const country = {
  name: "Bangladesh",
  isoAlpha3: "BGD",
  reviewDate: "2026-11-16",
  authority: "National Curriculum and Textbook Board (NCTB), Ministry of Education; Secondary and Higher Education Division",
  systemNotes: [
    "NCTB is the statutory national body responsible for curriculum development/revision and school textbooks.",
    "The National Curriculum Framework 2021 describes a competency-based, learning-area structure. At secondary level (Grades 6–10), Mathematics and Science are listed as subjects; competencies in physical sciences, biology and geology are integrated within Science.",
    "The 2026 textbook publication evidence shows a distinct current secondary textbook structure. In Grades 9–10, Physics, Chemistry and Biology appear as separate subject books alongside Mathematics. Do not apply the integrated 2021 framework table uncritically to the 2026 Grade 9–10 textbook structure.",
    "2026 textbooks were released in Bangla and English versions for primary and secondary levels. A government education portal reports 647 textbooks in the 2026 release. The current-year NCTB textbook listing is the controlling evidence for book availability, not proof that every book's chapter sequence has been extracted.",
    "Secondary-level class 6–8 should be treated separately from class 9–10. The 2026 curriculum transition and the current book lists must be reconciled by class and academic year.",
    "Higher-secondary Grades 11–12 have separate NCTB/HSC subject curricula and textbook arrangements. Do not assume Grade 9–10 sequence automatically continues into HSC."
  ],
  subjects: [
    {
      subject: "Biology",
      bengaliName: "জীববিজ্ঞান",
      coverage: "Integrated Science learning area in the 2021 framework for Grades 6–10; separate Biology textbook/subject is present in the 2026 Grades 9–10 secondary subject list; HSC Biology is a distinct higher-secondary subject.",
      sequenceStatus: "2026 separate-subject presence verified; detailed chapter sequence and grade mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The 2021 National Curriculum Framework integrates biology-related competencies into Science at secondary level rather than listing Biology as a separate core subject in its Grade 6–10 subject table.",
        "2026 secondary subject listings include Biology as a separate Grades 9–10 book, indicating a materially different/current subject structure from the framework's learning-area table.",
        "The exact 2026 Biology book contents and chapter titles have not yet been extracted in this audit."
      ],
      pending: ["Retrieve the official NCTB 2026 Biology textbook for Classes 9–10 and extract exact chapter headings/order.", "Confirm whether Biology is offered as an elective/stream-specific subject and the grade allocation in the 2026 school structure.", "Retrieve current HSC Biology syllabus and textbook sequence separately.", "Reconcile any 2021 framework content with the 2026 subject-based implementation."]
    },
    {
      subject: "Chemistry",
      bengaliName: "রসায়ন",
      coverage: "Integrated Science learning area in the 2021 framework for Grades 6–10; separate Chemistry textbook/subject is present in the 2026 Grades 9–10 secondary subject list; HSC Chemistry is a distinct higher-secondary subject.",
      sequenceStatus: "2026 separate-subject presence verified; detailed chapter sequence and grade mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The 2021 National Curriculum Framework includes chemistry-related competencies within integrated Science at secondary level.",
        "2026 secondary subject listings include Chemistry as a separate Grades 9–10 book.",
        "The 2026 Chemistry textbook chapter sequence has not yet been extracted; no official chapter count is asserted."
      ],
      pending: ["Retrieve official NCTB 2026 Chemistry textbook and extract exact chapter order.", "Confirm class/stream allocations in current 2026 study plans.", "Retrieve HSC Chemistry syllabus and textbook separately.", "Map practical/laboratory competencies and assessment standards."]
    },
    {
      subject: "Physics",
      bengaliName: "পদার্থবিজ্ঞান",
      coverage: "Integrated Science learning area in the 2021 framework for Grades 6–10; separate Physics textbook/subject is present in the 2026 Grades 9–10 secondary subject list; HSC Physics is a distinct higher-secondary subject.",
      sequenceStatus: "2026 separate-subject presence verified; detailed chapter sequence and grade mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The 2021 National Curriculum Framework integrates physical-science competencies into Science at secondary level.",
        "2026 secondary subject listings include Physics as a separate Grades 9–10 book.",
        "No detailed chapter sequence has been extracted from the official 2026 Physics textbook in this pass."
      ],
      pending: ["Retrieve official NCTB 2026 Physics textbook and extract exact chapter order.", "Confirm grade and group/stream allocations from current subject selection rules.", "Retrieve HSC Physics syllabus and textbook separately.", "Extract practicals, experiments and assessment competencies."]
    },
    {
      subject: "Mathematics",
      bengaliName: "গণিত",
      coverage: "Core subject in the 2021 framework's Grades 6–10 secondary subject table; 2026 textbooks are published for primary and secondary classes; HSC Mathematics has separate subject arrangements.",
      sequenceStatus: "official subject presence verified across framework and 2026 textbook publication; detailed class-by-class topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The National Curriculum Framework 2021 identifies Mathematics within the Mathematics and Reasoning learning area and as a selected secondary subject for Grades 6–10.",
        "The official NCTB textbook publication process released 2026 textbooks for primary and secondary education, with Bangla and English versions.",
        "The current class-specific Mathematics textbook chapter sequence has not yet been extracted."
      ],
      pending: ["Retrieve official 2026 Mathematics textbooks for Classes 6–10 and extract each class's chapter order.", "Map HSC Mathematics (higher/optional or group-specific) separately for Classes 11–12.", "Extract learning outcomes, exercises, worked examples and assessment standards.", "Check Bangla and English editions for matching chapter order."]
    }
  ],
  sourceRegister: [
    {
      title: "National Curriculum Framework 2021 — English version (NCTB / Secondary and Higher Education Division)",
      url: "https://shed.portal.gov.bd/sites/default/files/files/shed.portal.gov.bd/page/0b8eda3f_ce40_46c5_9e98_1ccda2ec348b/English.pdf",
      use: "Official framework. Section 2.10.2 identifies selected secondary subjects for Grades 6–10; Science integrates physical-science, biology and geology competencies."
    },
    {
      title: "NCTB — official national curriculum and textbook board portal",
      url: "https://nctb.gov.bd/",
      use: "Statutory national curriculum/textbook authority and official notices."
    },
    {
      title: "NCTB — official textbook publication list (2026)",
      url: "https://nctb.gov.bd/pages/static-pages/695b99afc4774958d7b70612",
      use: "Current-year textbook publication listing; verify class and subject titles from the official catalogue."
    },
    {
      title: "Government Teachers' Portal — 2026 textbook publication information",
      url: "https://teachers.gov.bd/blog/details/852145",
      use: "Government-hosted report that 647 Bangla and English version textbooks were released for primary and secondary education in 2026; secondary class 9–10 subject listing context."
    },
    {
      title: "Government Teachers' Portal — 2026 class 9–10 subject/book structure",
      url: "https://www.teachers.gov.bd/blog/details/851943",
      use: "Government-hosted explanation of 2026 class 9–10 book structure and separate Physics, Chemistry and Biology books; treat as corroborating context and verify against NCTB's official catalogue."
    },
    {
      title: "NCTB — 2026 textbook portal (secondary classes 6–10)",
      url: "https://www.nctb.cloud/textbooks/2026",
      use: "Convenient searchable mirror/archive for locating 2026 class books; site identifies itself as an independent archive, so it is not treated as the primary authority."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithFrameworkOrCurrentBookEvidence: 4,
    subjectsWithSeparateSubjectEvidenceAtGrades9_10: 3,
    subjectsWithDetailedGradeByGradeTopicSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "framework-and-2026-subject-structure-reconciled-at-high-level; textbook-sequence-extraction-pending",
    note: "The 2021 framework's integrated Science structure and the 2026 Grades 9–10 separate Biology/Chemistry/Physics books represent different curriculum structures or implementation stages. Keep the sources and academic years distinct. Do not invent chapter counts or claim detailed chapter completion."
  }
};
