/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "New Zealand",
  "registrySlug": "new-zealand",
  "auditDate": "2026-11-16",
  "educationFramework": "The 2026 National Curriculum Statement was gazetted 5 Nov 2026. Years 0–10 Science and Mathematics/Statistics have revised curricula; implementation is phased. NCEA senior subjects have updated Level 1 outcomes.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Years 0–10 Science is integrated; senior NCEA Biology is a distinct subject with updated Level 1 subject learning outcomes.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Years 0–10 integrated Science includes material-world/chemistry learning; senior NCEA Chemistry separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Years 0–10 integrated Science includes physical-world/physics learning; senior NCEA Physics/Earth and Space Science separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics and Statistics required Years 0–10; 2026 refreshed content applies, senior NCEA subject outcomes separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.education.govt.nz/news/new-timeframe-years-0-8-final-national-curriculum",
    "https://www.education.govt.nz/our-work/legislation/secondary-legislation/national-curriculum-statement-2026",
    "https://ncea.education.govt.nz/whats-new/strengthened-guidance-ncea-level-1-subjects",
    "https://newzealandcurriculum.tahurangi.education.govt.nz/new-zealand-curriculum-online/new-zealand-curriculum/learning-areas/science-curriculum/5637165588.c"
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
  country: "New Zealand",
  gradeSequenceEvidence: "The October 2026 national framework sets Science and Mathematics/Statistics for Years 0–10. Treat senior NCEA Biology, Chemistry and Physics separately and record phased implementation.",
  textbookEvidence: "The source identified here is a curriculum/framework source, not an opened textbook contents page. No actual adopted textbook contents pages or full book PDFs were inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.education.govt.nz/our-work/legislation/secondary-legislation/national-curriculum-statement-2026",
  nextRequiredWork: "Retrieve the current official grade-by-grade syllabus and the exact approved/adopted textbook for each relevant grade and jurisdiction; open its contents pages; record the book title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters in a separate field."
};
