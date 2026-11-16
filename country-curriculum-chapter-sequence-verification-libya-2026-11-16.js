/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Libya",
  "registrySlug": "libya",
  "auditDate": "2026-11-16",
  "educationFramework": "CERC catalogue provides grade/year-specific curricula. 2025–26 first-secondary general catalogue lists Biology, Chemistry, Physics and Mathematics.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology first secondary general, 2025–26 student book listed.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry first secondary general, 2025–26 textbook listed.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics first secondary general, 2025–26 student book listed.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics first secondary general, 2025–26 parts 1 and 2; basic-stage books also listed.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://cerc.moe.gov.ly/educational-curricul/?_educational-stage=education-secondary",
    "https://cerc.moe.gov.ly/educational-curricul/?_educational-stage=education-basic"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};
