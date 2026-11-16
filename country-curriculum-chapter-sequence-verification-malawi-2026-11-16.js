/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Malawi",
  "registrySlug": "malawi",
  "auditDate": "2026-11-16",
  "educationFramework": "Malawi Institute of Education and MANEB provide curriculum and examination resources. Primary integrated science and secondary specialist subjects must be mapped separately; current edition retrieval pending.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated primary science; secondary Biology syllabus sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is a secondary subject; current syllabus edition and sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is a secondary subject; current syllabus edition and sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; primary and secondary syllabuses need grade-level extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    }
  ],
  "sources": [
    "Official Ministry of Education / curriculum authority; exact current programme document URL not yet retrieved"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practical requirements.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Malawi", gradeSequenceEvidence: "MIE's July 2025 Curriculum and Assessment Framework and updated book list (2024) are current key references. 2026 notices clarify current curriculum and approved learning materials; lower-secondary Forms 1–2 syllabus review was still under validation in March 2026, so distinguish approved curriculum from draft reform.", textbookEvidence: "MIE lists approved secondary book list, but individual student textbook contents and printed chapter counts were not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://mie.edu.mw/downloads/ ; https://mie.edu.mw/download/curriculum-and-assessment-framework-for-schools-and-colleges-in-malawi-july-2025/", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
