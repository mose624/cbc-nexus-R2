/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Nauru",
  "registrySlug": "nauru",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry of Education curriculum and regional Pacific assessment pathways; current national subject syllabuses and grade-level documents not retrieved.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science integrated in primary/basic schooling; Biology specialist pathway availability and syllabus unverified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry specialist secondary course and syllabus unverified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics specialist secondary course and syllabus unverified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core learning area; grade sequence unverified.",
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
  country: "Nauru",
  gradeSequenceEvidence: "National Ministry and Pacific regional pathway evidence is insufficient to assert a grade-by-grade specialist science sequence. Integrated Science and secondary options require official syllabus retrieval.",
  textbookEvidence: "The source identified here is a curriculum/framework source, not an opened textbook contents page. No actual adopted textbook contents pages or full book PDFs were inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.education.gov.nr/",
  nextRequiredWork: "Retrieve the current official grade-by-grade syllabus and the exact approved/adopted textbook for each relevant grade and jurisdiction; open its contents pages; record the book title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters in a separate field."
};
