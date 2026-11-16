/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Kyrgyzstan",
  "registrySlug": "kyrgyzstan",
  "auditDate": "2026-11-16",
  "educationFramework": "2025 State General Education Standard; official standards list Biology 6–11, Physics and Astronomy 7–11, Chemistry 8–11, Mathematics 1–11.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology separate Grades 6–11.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry separate Grades 8–11.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics and Astronomy separate Grades 7–11.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics Grades 1–4 and 5–11; upper grades also distinguish algebra and geometry.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://edu.gov.kg/legislations/30/",
    "https://edu.gov.kg/legislations/37/",
    "https://edu.gov.kg/organizations/40/pages/318/",
    "https://www.gov.kg/ru/npa/s/4624"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};
