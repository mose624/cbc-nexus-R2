/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Iraq",
  "registrySlug": "iraq",
  "auditDate": "2026-11-16",
  "educationFramework": "Federal Ministry of Education curriculum and approved textbooks; Kurdistan Region has a separate education authority and must be mapped separately.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is distinct in relevant scientific secondary streams; grade/stream sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is distinct in scientific streams; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is distinct in scientific streams; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; scientific/literary stream differences require mapping.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Iraq", gradeSequenceEvidence: "Federal Iraq and the Kurdistan Region must be mapped separately. Evidence lists Grade 6–8 integrated Science and Mathematics textbooks, then Grade 9 Biology, Chemistry and Physics. Confirm local editions and curriculum authority for each region.", textbookEvidence: "A secondary comparative curriculum portal lists actual textbook grade/subject availability, but contents pages and printed chapter counts were not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://www.oise.utoronto.ca/site/escape-projects/international-curriculum-comparison/iraq", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
