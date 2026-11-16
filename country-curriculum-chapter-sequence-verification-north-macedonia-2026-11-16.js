/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "North Macedonia",
  "registrySlug": "north-macedonia",
  "auditDate": "2026-11-16",
  "educationFramework": "Bureau for Development of Education (BDE) develops national curricula; primary education reform introduced new concepts and grade-by-grade programmes. Secondary gymnasium/vocational pathways differ.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Natural Sciences integrated in early primary; Biology becomes a separate subject in later primary/secondary programmes; current grade map pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is a separate subject in relevant secondary grades; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is a separate subject in relevant secondary grades; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct subject throughout primary and secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "Official national Ministry of Education / curriculum authority; current subject programme URLs not yet retrieved"
  ],
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
  country: "North Macedonia",
  gradeSequenceEvidence: "Bureau for Development of Education primary reform and secondary gymnasium/vocational pathways require separate grade maps. Current subject sequence remains to be extracted from official programmes.",
  textbookEvidence: "The source identified here is a curriculum/framework source, not an opened textbook contents page. No actual adopted textbook contents pages or full book PDFs were inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.bro.gov.mk/",
  nextRequiredWork: "Retrieve the current official grade-by-grade syllabus and the exact approved/adopted textbook for each relevant grade and jurisdiction; open its contents pages; record book title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters in a separate field."
};
