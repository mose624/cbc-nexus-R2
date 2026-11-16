/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Liberia",
  "registrySlug": "liberia",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry curriculum portal offers Grades 1–6, 7–9 and 10–12 downloads. Ministry also identifies a Draft Revised National Curriculum; draft is not nationwide implementation.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated science at lower grades; Biology subject sequence needs current syllabus retrieval.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry sequence needs grade-specific official retrieval.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics sequence needs grade-specific official retrieval.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; grade-band curriculum downloads available.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://moe.gov.lr/curriculum-download/",
    "https://moe.gov.lr/"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};
