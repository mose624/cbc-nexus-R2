/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Tonga",
  "registrySlug": "tonga",
  "auditDate": "2026-11-16",
  "educationFramework": "National curriculum and assessment framework administered by Ministry of Education and Training; current grade-specific science and mathematics syllabuses not retrieved in this pass.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science is a learning area in primary/basic education; separate Biology secondary syllabus needs verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry secondary subject availability and syllabus not verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics secondary subject availability and syllabus not verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core subject; grade-level progression pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "Official national Ministry / curriculum authority source not yet retrieved; verify before asserting detailed grade sequence"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "textbook-titles-and-forms-identified",
    "evidenceSummary": "2025 Minimum Service Standards appendix identifies secondary Form 3–7 textbooks/study guides by subject, including Biology, Chemistry, Physics and Mathematics. It does not expose chapter contents; retrieve the listed subject syllabuses and actual books.",
    "officialDocuments": ["https://www.education.gov.to/media/attachments/2026/04/30/met-2025-minimum-service-standards-final-final.pdf"],
"textbookCatalogueEvidence": {
      "source": "Tonga Ministry of Education and Training, Minimum Service Standards 2025, Annex 3 (p.60)",
      "forms": ["Form 3", "Form 4", "Form 5", "Form 6", "Form 7"],
      "subjects": ["Mathematics", "Science", "Biology", "Chemistry", "Physics"],
      "namedMaterials": "Form 3 syllabus/CDU study guide; Form 4–7 subject syllabuses and ESA publications/study guides as listed in the annex.",
      "contentsPagesInspected": false,
      "officialChapterCountVerified": false,
      "nextAction": "Retrieve the named form-specific syllabuses and books; inspect contents pages for each form and subject before counting chapters."
    },
        "gradeByGradeSequenceVerified": false,
    "actualTextbookContentsInspected": false,
    "officialTextbookChapterCountsVerified": false,
    "nextAction": "Extract grade/year/term topic headings from current official programme documents; inspect actual approved learner-textbook contents pages; map every book chapter to the official topic sequence and record discrepancies."
  },
  "completion": {
    "gradeByGradeTopicSequenceVerified": false,
    "officialTextbookChapterCountsVerified": false,
    "cbeNexusChaptersOver10000WordsVerified": false,
    "diagramsWorkedExamplesPracticalsVerified": false,
    "examQuestionsAndMarkingGuidesVerified": false,
    "nextActions": [
      "Retrieve current official framework and subject programmes for every grade.",
      "Extract official topic headings, learning outcomes, hours and practical requirements.",
      "Compare each programme with approved textbook tables of contents; count chapters only from actual contents pages.",
      "Map language, regional, school-track and examination-board variations.",
      "Write CBE Nexus chapters after sequence validation, then verify word counts, diagrams, worked examples, practicals and assessment."
    ]
  }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Tonga",
  gradeSequenceEvidence: "The Ministry of Education and Training oversees national curriculum and assessment; primary Science and Mathematics progressions and secondary specialist science syllabuses must be retrieved by class before assigning chapters.",
  textbookEvidence: "The referenced material is an official curriculum, ministry or national curriculum authority source, not an opened adopted textbook contents page. Actual textbook contents pages and full book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.education.gov.to/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
