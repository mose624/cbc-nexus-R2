/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Liechtenstein",
  "registrySlug": "liechtenstein",
  "auditDate": "2026-11-16",
  "educationFramework": "LiLe curriculum based on Lehrplan 21 with local adaptation; 11 years across three cycles (kindergarten–Grade 2, Grades 3–6, Grades 7–9). Gymnasium and vocational plans separate.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Natural Sciences learning area; Biology and gymnasium course detail pending extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Natural Sciences learning area; Chemistry and gymnasium course detail pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Natural Sciences learning area; Physics and gymnasium course detail pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct curriculum area across LiLe cycles.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://www.regierung.li/ministerium/16666/ministry-of-infrastructure-and-education/topics/16789/Liechtenstein-Curriculum",
    "https://www.llv.li/de/landesverwaltung/schulamt/bildungsbereiche/lehrplaene"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Liechtenstein", gradeSequenceEvidence: "LiLe applies to kindergarten, primary and Sekundarstufe I and is based on the regional Lehrplan 21 framework with national adaptation. Gymnasium lower and upper stages have separate curricula; map local adaptation rather than copying Switzerland wholesale.", textbookEvidence: "Official curriculum portal identified; actual adopted textbook contents and chapter counts not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://www.llv.li/de/privatpersonen/bildung/schule-und-studium/schulamt/bildungsbereiche/lehrplaene", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
