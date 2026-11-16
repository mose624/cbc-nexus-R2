/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "North Korea",
  "registrySlug": "north-korea",
  "auditDate": "2026-11-16",
  "educationFramework": "Publicly accessible, independently verifiable current national curriculum documents are very limited. Do not infer subject order or grade coverage from historical or secondary sources.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Current official Biology curriculum and grade sequence not independently verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Current official Chemistry curriculum and grade sequence not independently verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Current official Physics curriculum and grade sequence not independently verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Current official Mathematics curriculum and grade sequence not independently verified.",
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
  country: "Democratic People's Republic of Korea",
  gradeSequenceEvidence: "Publicly accessible independently verifiable current national curriculum documents remain limited; available UNESCO material describes general science/technology but does not establish a current grade-by-grade syllabus.",
  textbookEvidence: "The source identified here is a curriculum/framework source, not an opened textbook contents page. No actual adopted textbook contents pages or full book PDFs were inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://gem-report-education-profiles.unesco.org/eastern-and-south-eastern-asia/democratic-peoples-republic-of-korea/",
  nextRequiredWork: "Retrieve the current official grade-by-grade syllabus and the exact approved/adopted textbook for each relevant grade and jurisdiction; open its contents pages; record book title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters in a separate field."
};
