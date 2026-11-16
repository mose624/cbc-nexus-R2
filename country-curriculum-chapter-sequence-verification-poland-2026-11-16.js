/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Poland",
  "registrySlug": "poland",
  "auditDate": "2026-11-16",
  "educationFramework": "A 2026 regulation defines integrated education in Grades I–III and separate Biology, Chemistry, Physics and Mathematics among Grades IV–VIII subjects. Secondary pathways and transition rules need separate mapping.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Separate subject from Grades IV–VIII under 2026 core curriculum; secondary programmes differ by pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Separate subject from Grades IV–VIII under 2026 core curriculum; secondary programmes differ by pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Separate subject from Grades IV–VIII under 2026 core curriculum; secondary programmes differ by pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Separate subject from Grades IV–VIII; integrated education in Grades I–III.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://eli.gov.pl/api/acts/DU/2026/378/text/I/D20260378.pdf"
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
  country: "Poland",
  gradeSequenceEvidence: "The 2026 core-curriculum regulation and school-stage structure require version-aware mapping. Distinguish integrated early education from separate Biology, Chemistry, Physics and Mathematics at later grades; inspect the relevant regulation annexes before asserting topic order.",
  textbookEvidence: "Curriculum framework or syllabus portal identified; actual adopted textbook contents pages and complete book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.gov.pl/web/edukacja",
  nextRequiredWork: "Retrieve current grade-by-grade official syllabus and the exact approved/adopted textbook for each grade and pathway; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters separate."
};
