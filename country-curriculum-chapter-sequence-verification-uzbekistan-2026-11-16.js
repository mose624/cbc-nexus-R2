/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Uzbekistan",
  "registrySlug": "uzbekistan",
  "auditDate": "2026-11-16",
  "educationFramework": "A new National Curriculum Framework launched 18 August 2026, with updated learning objectives across primary, lower and upper secondary. National certificate exams separately assess Biology, Chemistry, Physics and Mathematics.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is a distinct subject and national certificate examination subject; new NCF grade sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is a distinct subject and national certificate examination subject; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is a distinct subject and national certificate examination subject; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct subject and national certificate examination subject; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.unicef.org/uzbekistan/en/press-releases/national-education-milestone-new-national-curriculum-launched-achieve-world-class",
    "https://gov.uz/en/uzbmb/news/view/240212"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "framework-change-identified",
    "evidenceSummary": "New National Curriculum Framework launched in August 2026. Official Biology, Chemistry, Physics and Mathematics subject standards/programmes and current textbook contents still need grade-by-grade extraction; certificate examination subjects alone do not establish grade sequence.",
    "officialDocuments": ["https://www.unicef.org/uzbekistan/en/press-releases/national-education-milestone-new-national-curriculum-launched-achieve-world-class"],
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
