/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Ireland",
  "registrySlug": "ireland",
  "auditDate": "2026-11-16",
  "educationFramework": "NCCA specifications distinguish Junior Cycle and Senior Cycle; senior-cycle subject selection varies by school.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Junior Cycle Science is integrated; Leaving Certificate Biology is separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Junior Cycle Science integrates chemistry; Leaving Certificate Chemistry is separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Junior Cycle Science integrates physics; Leaving Certificate Physics is separate.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core in Junior and Senior Cycle; levels/pathways differ.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "Official Ministry of Education / curriculum authority and approved syllabus documents; exact current programme URL not yet retrieved"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map school tracks and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Ireland", gradeSequenceEvidence: "Primary education has an eight-year cycle; Junior Cycle covers the first three post-primary years. Junior Cycle Science is integrated through Nature of Science, Physical, Chemical, Biological, and Earth and Space strands. Senior Cycle offers specialist subjects including Biology, Chemistry and Physics.", textbookEvidence: "Official curriculum specifications identified; no approved textbook contents inspected. Senior Cycle subject availability can vary by school.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://www.curriculumonline.ie/primary/ ; https://www.curriculumonline.ie/junior-cycle/", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
