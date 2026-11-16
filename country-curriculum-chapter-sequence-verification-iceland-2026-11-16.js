/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Iceland",
  "registrySlug": "iceland",
  "auditDate": "2026-11-16",
  "educationFramework": "National Curriculum Guide for compulsory schools; upper-secondary schools use national curricula and school-level programme design.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is within compulsory Natural Sciences; distinct upper-secondary course options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is within compulsory Natural Sciences; distinct upper-secondary course options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is within compulsory Natural Sciences; distinct upper-secondary course options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct national subject area throughout compulsory education.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Iceland", gradeSequenceEvidence: "The National Curriculum Guide governs compulsory education; school-level curricula and upper-secondary programmes elaborate subject organisation. Extract Mathematics and integrated/science subject outcomes by grade and upper-secondary programme.", textbookEvidence: "No student textbook contents or official chapter counts verified.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://www.government.is/topics/education/curriculum/", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
