/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Iran",
  "registrySlug": "iran",
  "auditDate": "2026-11-16",
  "educationFramework": "National Curriculum of the Islamic Republic of Iran and Ministry-issued textbooks/programmes; current grade-level Persian documents not retrieved.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is a distinct subject in relevant secondary science pathways; grade/track sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is a distinct secondary science subject; grade/track sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is a distinct secondary science subject; grade/track sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core with upper-secondary pathway variation.",
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
    "Map regional, state and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Iran", gradeSequenceEvidence: "National Curriculum framework and Ministry-issued textbooks govern schooling. Early years use integrated Science; upper grades differentiate Physics, Chemistry and Biology. Exact Persian grade-by-grade programme and current textbook edition need direct verification.", textbookEvidence: "No actual textbook contents inspected; no official chapter count verified.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official OERP and Ministry curriculum/textbook portals require retrieval.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
