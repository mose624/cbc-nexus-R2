/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Jamaica",
  "registrySlug": "jamaica",
  "auditDate": "2026-11-16",
  "educationFramework": "National Standards Curriculum at primary/lower-secondary; CSEC/CAPE syllabuses shape upper-secondary specialist subjects.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated Science at lower levels; Biology is a separate CSEC/CAPE subject.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry concepts in integrated science; separate CSEC/CAPE Chemistry.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics concepts in integrated science; separate CSEC/CAPE Physics.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; Additional Mathematics is an upper-secondary option.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Jamaica", gradeSequenceEvidence: "The National Standards Curriculum structures primary and lower-secondary learning; CSEC/CAPE subject syllabuses shape upper-secondary Biology, Chemistry, Physics and Mathematics. Keep national curriculum and CXC examination syllabuses as distinct layers.", textbookEvidence: "No actual student textbook contents inspected; CXC syllabus topics are not textbook chapter counts.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://moey.gov.jm/curriculum/", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
