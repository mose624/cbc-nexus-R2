/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Timor-Leste",
  "registrySlug": "timor-leste",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry national curriculum: nine years basic education in three cycles; Grades 10–12 secondary general with science/technology or humanities specialisation. Instruction languages Tetum and Portuguese.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science integrated in basic education; Biology specialist content/subject in science and technology secondary specialisation, exact grade sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Science integrated in basic education; Chemistry in science/technology secondary specialisation, sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Science integrated in basic education; Physics in science/technology secondary specialisation, sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics core from basic through secondary education.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://moe.gov.tl/en/national-curriculum/"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "framework-and-stage-structure-verified",
    "evidenceSummary": "Official Ministry confirms basic cycle grades 1–4, 5–6, 7–9; Grades 10–12 general secondary has science/technology specialisation. Topic-by-topic science/math syllabus and actual learner-textbook contents still required.",
    "officialDocuments": ["https://moe.gov.tl/en/national-curriculum/","https://moe.gov.tl/en/basic-school/"],
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
  country: "Timor-Leste",
  gradeSequenceEvidence: "Basic education is organised in three cycles over nine years, with Grades 10–12 secondary pathways including science/technology; primary/basic science is integrated and specialist secondary syllabuses require grade-level extraction.",
  textbookEvidence: "The referenced material is an official curriculum, ministry or national curriculum authority source, not an opened adopted textbook contents page. Actual textbook contents pages and full book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.moe.gov.tl/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
