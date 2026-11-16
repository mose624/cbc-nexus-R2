/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Italy",
  "registrySlug": "italy",
  "auditDate": "2026-11-16",
  "educationFramework": "Indicazioni Nazionali govern the first cycle; second-cycle curricula differ across licei, technical and vocational pathways.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology content is included in first-cycle Scienze; upper-secondary sequence varies by pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is integrated in first-cycle Scienze; specialist content varies by upper-secondary pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is included in first-cycle science and separately taught in selected upper-secondary pathways.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is distinct throughout; upper-secondary depth varies.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Italy", gradeSequenceEvidence: "The first cycle follows national Indicazioni Nazionali; the second cycle differs among licei, technical institutes and vocational institutes. The 2026 first-cycle national indications and 2026 technical-institute guidelines require version-aware mapping.", textbookEvidence: "Curriculum documents identified, but actual school textbook contents and chapter counts not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://umi.dm.unibo.it/materiali-umi-ciim/altre-risorse/indicazioni-curricolari/", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
