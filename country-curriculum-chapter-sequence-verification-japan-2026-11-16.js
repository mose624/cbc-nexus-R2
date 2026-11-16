/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Japan",
  "registrySlug": "japan",
  "auditDate": "2026-11-16",
  "educationFramework": "MEXT Courses of Study set national standards; elementary and junior-high Science are integrated, senior-high science options are differentiated.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated Rika in elementary/junior high; senior-high Biology Basic/Biology options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Integrated Rika in elementary/junior high; senior-high Chemistry Basic/Chemistry options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Integrated Rika in elementary/junior high; senior-high Physics Basic/Physics options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is distinct in elementary, junior-high and senior-high.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm",
    "https://www.mext.go.jp/content/20250311-mxt_kyoiku02-100002620_05.pdf"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map school tracks and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Japan", gradeSequenceEvidence: "MEXT Courses of Study set national standards. Elementary and lower-secondary Science are integrated; upper-secondary subjects branch into Biology, Chemistry, Physics and related options, alongside Mathematics. Use current MEXT revisions and implementation schedules.", textbookEvidence: "Ministry-approved textbooks are used, but actual contents pages and book-specific chapter counts were not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official MEXT Courses of Study portal retrieval outstanding.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
