/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Lebanon",
  "registrySlug": "lebanon",
  "auditDate": "2026-11-16",
  "educationFramework": "National curriculum administered by CRDP; public and private school pathways may differ. Current grade-specific programme extraction pending.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Life sciences/Biology in science curriculum; grades and edition pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry in secondary science programmes; grade sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics in secondary science programmes; grade sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; grade sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "Official national education authority; exact current programme document URL not yet retrieved"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Lebanon", gradeSequenceEvidence: "CRDP administers national curriculum programmes and textbooks. Extract Mathematics and Life Sciences/Physics/Chemistry by grade and distinguish official national programmes from private/international curricula.", textbookEvidence: "No actual textbook contents inspected; current official editions and contents pages outstanding.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official CRDP curriculum and textbook portal retrieval outstanding.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
