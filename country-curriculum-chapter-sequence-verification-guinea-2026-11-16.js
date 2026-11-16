/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Guinea",
  "registrySlug": "guinea",
  "auditDate": "2026-11-16",
  "educationFramework": "French national programmes commonly use SVT and Physique-Chimie alongside Mathematics. Exact current grade programmes not retrieved.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "SVT; specialist Biology sequence needs grade-level verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Combined Physique-Chimie; separate Chemistry sequence not yet verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Combined Physique-Chimie; separate Physics sequence not yet verified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct subject; annual topic order pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "Official national Ministry of Education / curriculum authority documents; exact current programme URL not yet retrieved"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map regional and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Guinea", gradeSequenceEvidence: "Preserve French-language SVT, Physique-Chimie and Mathematics; current official class-by-class programme documents were not retrieved. Verify programme year before sequencing.", textbookEvidence: "No textbook contents inspected; approved book contents/counts outstanding.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry programme retrieval outstanding.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
