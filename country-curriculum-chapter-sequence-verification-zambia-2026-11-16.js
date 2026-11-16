/* CBE Nexus evidence-led curriculum reconciliation record — 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Zambia",
  "registrySlug": "zambia",
  "auditDate": "2026-11-16",
  "educationFramework": "National curriculum governed by the Curriculum Development Centre; grade- and subject-level Biology, Chemistry, Physics and Mathematics programmes and current approved textbook contents still require direct verification.",
  "subjects": [
    {
      "subject": "Biology",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "actualTextbookContentsInspected": false,
      "notes": "Do not count syllabus strands or curriculum topics as textbook chapters."
    },
    {
      "subject": "Chemistry",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "actualTextbookContentsInspected": false,
      "notes": "Do not count syllabus strands or curriculum topics as textbook chapters."
    },
    {
      "subject": "Physics",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "actualTextbookContentsInspected": false,
      "notes": "Do not count syllabus strands or curriculum topics as textbook chapters."
    },
    {
      "subject": "Mathematics",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "actualTextbookContentsInspected": false,
      "notes": "Do not count syllabus strands or curriculum topics as textbook chapters."
    }
  ],
  "sources": [
    "https://www.cdc.gov.zm/"
  ],
  "completion": {
    "gradeByGradeTopicSequenceVerified": false,
    "officialTextbookChapterCountsVerified": false,
    "cbeNexusChaptersOver10000WordsVerified": false,
    "diagramsWorkedExamplesPracticalsVerified": false,
    "examQuestionsAndMarkingGuidesVerified": false,
    "nextActions": [
      "Extract current official grade/year/term topic sequences for all four subjects.",
      "Identify the precise approved or school-adopted textbook edition for each grade and subject.",
      "Inspect actual contents pages and map each book chapter to official syllabus topics.",
      "Record discrepancies, missing topics, duplicated topics and implementation-year changes."
    ]
  },
  "reconciliation": {
    "batch": "193-196 plus 1-6",
    "status": "national-authority-identified",
    "evidenceSummary": "National curriculum governed by the Curriculum Development Centre; grade- and subject-level Biology, Chemistry, Physics and Mathematics programmes and current approved textbook contents still require direct verification.",
    "officialDocuments": [
      "https://www.cdc.gov.zm/"
    ],
    "actualTextbookContentsInspected": false,
    "officialTextbookChapterCountsVerified": false
  }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Zambia",
  gradeSequenceEvidence: "The Curriculum Development Centre and Ministry oversee national curriculum frameworks and syllabuses; current revised curriculum implementation and approved textbook editions must be mapped by grade and effective year.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit special-scope note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.edu.gov.zm/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
