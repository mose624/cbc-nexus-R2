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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Libya", gradeSequenceEvidence: "CERC provides grade/year-specific curriculum materials. Extract current primary, preparatory and secondary subject programmes by grade and edition; confirm whether current national implementation differs by region before applying a single sequence.", textbookEvidence: "No student textbook contents or official chapter counts inspected; regional implementation and current book editions require confirmation.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official CERC catalogue; current direct URL retrieval required.", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
