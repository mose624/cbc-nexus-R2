/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Honduras",
  "registrySlug": "honduras",
  "auditDate": "2026-11-16",
  "educationFramework": "Secretaría de Educación's Diseño Curricular Nacional Básico and level-specific programmes; current science sequence extraction pending.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Ciencias Naturales integrated at basic level; specialist Biology pathway needs separate mapping.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "May be within Natural Sciences or diversified secondary programmes; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "May be within Natural Sciences or diversified secondary programmes; sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct curricular area.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Honduras", gradeSequenceEvidence: "Secretaría de Educación's DCNB and level-specific programmes provide the national reference. Extract Ciencias Naturales and Matemáticas by grade, then map upper-secondary Bachillerato modalities and specialist sciences separately.", textbookEvidence: "No textbook contents inspected; official textbook editions and contents pages outstanding.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Secretaría de Educación DCNB retrieval outstanding.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
