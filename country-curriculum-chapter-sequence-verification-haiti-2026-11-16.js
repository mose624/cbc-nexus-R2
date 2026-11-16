/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Haiti",
  "registrySlug": "haiti",
  "auditDate": "2026-11-16",
  "educationFramework": "MENFP national curriculum and reform framework; current grade-by-grade subject programmes need direct retrieval.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Sciences expérimentales/natural sciences is cautious basic-level mapping; specialist Biology unverified.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "May be integrated before specialist secondary study; course title and sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "May be integrated before specialist secondary study; course title and sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct core subject; grade progression pending.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Haiti", gradeSequenceEvidence: "MENFP curriculum/reform materials require direct grade-level retrieval. Preserve French/Creole language context and integrated experimental sciences; specialist subject progression remains unverified.", textbookEvidence: "No textbook contents inspected; official chapter counts not verified.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official MENFP curriculum retrieval outstanding.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
