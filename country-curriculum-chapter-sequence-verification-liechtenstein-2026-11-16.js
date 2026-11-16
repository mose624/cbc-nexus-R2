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
