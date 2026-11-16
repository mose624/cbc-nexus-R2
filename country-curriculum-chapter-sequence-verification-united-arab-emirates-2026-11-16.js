/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "United Arab Emirates",
  "registrySlug": "united-arab-emirates",
  "auditDate": "2026-11-16",
  "educationFramework": "MOE 2026–27 Ministry curriculum study plan distinguishes General and Advanced streams in Grades 9–10. General stream includes Science; Advanced stream lists Physics, Chemistry and Biology in specified grades. Mathematics is core.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Grade 9 Advanced Biology; no Biology in the shown General-stream plan.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Grade 10 Advanced Chemistry; no Chemistry in shown General-stream plan.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics in Advanced Grades 9–10; General stream has Science.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is compulsory in General and Advanced streams.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://moe.gov.ae/en/guides/Documents/Study%20Plan%20for%20the%202026-2027%20Academic%20Year%20%28Ministry%20Curriculum%29/Study%20Plan%20for%20the%202026-2027%20Academic%20Year%20%28Ministry%20Curriculum%29%20EN.pdf"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "current-stream-rules-verified",
    "evidenceSummary": "MOE 2026–27 study-plan FAQ specifies General Grade 9–10 Science covering Physics, Chemistry and Biology; Grade 11 Biology, Chemistry and Physics become fixed compulsory subjects in both General and Advanced streams. Grade 12 carries forward selected Grade 11 scenarios. Mathematics and actual book contents require separate subject plan/book inspection.",
    "officialDocuments": ["https://www.moe.gov.ae/en/guides/Pages/Study-Plan-for-the-2026-2027-Academic-Year-Ministry-Curriculum.aspx"],
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
  country: "United Arab Emirates",
  gradeSequenceEvidence: "The Ministry curriculum applies to federal public schools; private schools may follow different curricula and examination boards. Maintain federal and private/international tracks separately by emirate and school.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.moe.gov.ae/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
