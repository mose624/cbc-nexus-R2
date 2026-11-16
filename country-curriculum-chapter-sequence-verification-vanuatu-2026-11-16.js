/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Vanuatu",
  "registrySlug": "vanuatu",
  "auditDate": "2026-11-16",
  "educationFramework": "National curriculum and assessment framework administered by Ministry of Education and Training; current official subject syllabuses and year-level standards not retrieved in this pass.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science learning area in primary/lower secondary; specialist Biology syllabus requires verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry specialist course availability and syllabus require verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics specialist course availability and syllabus require verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core learning area; year-level sequence pending.",
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
    "status": "source-retrieval-required",
    "evidenceSummary": "Current Ministry subject syllabuses and approved textbook catalogue by year/form not retrieved. Need official national curriculum and Pacific assessment pathway evidence before assigning specialist subjects or chapter counts.",
    "officialDocuments": [],
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
  country: "Vanuatu",
  gradeSequenceEvidence: "National curriculum and assessment authority materials require grade-by-grade extraction; preserve the language and school-system differences and do not substitute generic Pacific regional syllabuses for national subject programmes.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit special-scope note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://moet.gov.vu/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
