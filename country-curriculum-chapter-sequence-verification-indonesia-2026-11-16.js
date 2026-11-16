/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Indonesia",
  "registrySlug": "indonesia",
  "auditDate": "2026-11-16",
  "educationFramework": "Kurikulum Merdeka; lower grades use integrated science (IPAS/IPA), senior secondary offers elective disciplinary sciences.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is an upper-secondary elective; official TKA Biology material covers biodiversity, cells and life processes.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is an upper-secondary elective; TKA material includes basic, analytical, physical and organic chemistry.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is an upper-secondary elective; detailed learning outcomes require programme extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is compulsory at upper secondary; advanced mathematics is an elective.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "https://pusmendik.kemdikbud.go.id/tka/tka/view/mata-pelajaran-pilihan/sma/kimia",
    "https://pusmendik.kemdikbud.go.id/tka/tka/view/mata-pelajaran-pilihan/sma/Biologi",
    "https://pusmendik.kemdikbud.go.id/tka/tka/view/mata-pelajaran-wajib/sma/matematika"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map regional, state and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Indonesia", gradeSequenceEvidence: "Kurikulum Merdeka distinguishes integrated IPAS at primary level and IPA at lower secondary, with upper-secondary subject selection including Biology, Chemistry, Physics and Mathematics. Verify current implementation phase and grade learning outcomes.", textbookEvidence: "No actual approved textbook contents inspected; textbook availability and chapter counts vary by grade and edition.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry Kurikulum Merdeka and Capaian Pembelajaran sources require direct grade-level extraction.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
