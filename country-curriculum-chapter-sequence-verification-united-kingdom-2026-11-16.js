/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "United Kingdom",
  "registrySlug": "united-kingdom",
  "auditDate": "2026-11-16",
  "educationFramework": "There is no single UK-wide school curriculum. England, Scotland, Wales and Northern Ireland have separate frameworks. England's national curriculum identifies Biology, Chemistry and Physics disciplines within Science; other jurisdictions need their own curriculum mapping.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "England: Biology discipline within Science; GCSE/A-level separate subject options. Scotland/Wales/NI have separate frameworks.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "England: Chemistry discipline within Science; separate GCSE/A-level options. Other nations differ.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "England: Physics discipline within Science; separate GCSE/A-level options. Other nations differ.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core subject in England; separate national curriculum/frameworks apply across the other UK jurisdictions.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "england-official-programmes-identified-other-jurisdictions-pending",
    "evidenceSummary": "Split into four jurisdiction audits, not one UK sequence. England: Science and Mathematics statutory programmes cover KS1–KS4; science content names Biology, Chemistry and Physics, while Mathematics is year-by-year at KS1–KS2 and key-stage programmes at KS3–KS4. Scotland, Wales and Northern Ireland require separate extraction. Textbooks are publisher/school-selected, not one national approved book.",
    "officialDocuments": ["https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study","https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study"],
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
