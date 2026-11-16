/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Moldova",
  "registrySlug": "moldova",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry's national curriculum and 2026–27 framework plan. Official subject curricula include Mathematics, Science, Biology, Chemistry and Physics/Astronomy. 2026 subject curricula are published for consultation as proposed 2027 editions, not yet final adopted curricula.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology: separate curriculum in gymnasium and lyceum; 2026 draft edition under consultation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry: separate curriculum in gymnasium/lyceum; 2026 draft edition under consultation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics/Astronomy: separate subject curriculum; 2026 draft edition under consultation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics: separate curriculum; 2026 draft edition under consultation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.mecc.gov.md/en/content/consultare-curriculum",
    "https://www.mecc.gov.md/en/content/curriculumul-national",
    "https://edu.gov.md/sites/default/files/plan_cadru_2026-27.pdf"
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Moldova", gradeSequenceEvidence: "Ministry National Curriculum portal lists 2026–27 framework plans and separate Biology, Chemistry, Physics and Mathematics curricula for Gymnasium and Lyceum, in Romanian and Russian versions.", textbookEvidence: "Official subject curricula and framework plans identified; actual student textbook contents and printed chapter counts not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://mec.gov.md/ro/content/curriculumul-national", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
