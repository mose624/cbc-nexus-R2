/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Kuwait",
  "registrySlug": "kuwait",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry of Education national curriculum and grade-specific textbooks; public and private/international programmes must be kept separate.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science integrated in early grades; Biology distinct in relevant secondary tracks.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry distinct in secondary tracks; grade/track sequence needs textbook verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics distinct in secondary tracks; grade/track sequence needs textbook verification.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core across school stages; upper-secondary track sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "Official Ministry of Education / national curriculum authority and approved textbook catalogue; exact current programme URL not yet retrieved"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map school tracks and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Kuwait", gradeSequenceEvidence: "Ministry of Education national curriculum and grade-specific textbooks are the reference. Separate public national schools from private/international programmes; extract grade sequence for Mathematics and integrated/specialist sciences from current Ministry documents.", textbookEvidence: "No actual textbook contents inspected; approved national textbook editions and contents pages outstanding.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Kuwait Ministry curriculum/textbook portal retrieval outstanding.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
