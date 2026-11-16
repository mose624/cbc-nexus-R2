/* Preliminary framework mapping only; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "India",
  "registrySlug": "india",
  "auditDate": "2026-11-16",
  "educationFramework": "NEP 2020 and National Curriculum Framework for School Education 2023 establish 5+3+3+4 stages; States/UTs and boards implement through local programmes.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated Science at Middle Stage; Biology disciplinary study in secondary stage and board pathways.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Integrated Science at Middle Stage; Chemistry differentiated in secondary/board subject choices.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Integrated Science at Middle Stage; Physics differentiated in secondary/board subject choices.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is distinct throughout; state/board textbook sequences vary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum themes, standards or examination units."
    }
  ],
  "sources": [
    "https://www.education.gov.in/sites/upload_files/mhrd/files/document-reports/AnnualReport2023-24EN.pdf",
    "https://dsel.education.gov.in/sites/default/files/update/PIB1993919.pdf"
  ],
  "nextActions": [
    "Retrieve official subject programmes and approved textbook tables of contents.",
    "Extract grade-by-grade outcomes, topics, hours and practical work.",
    "Map regional, state and examination pathways.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "India", gradeSequenceEvidence: "NEP 2020 and NCF-SE 2023 use a 5+3+3+4 stage structure. India is federal and board-diverse: distinguish NCERT/CBSE from state boards and other national boards. CBSE 2026–27 lists Science and Mathematics in IX–X and Biology, Chemistry, Physics and Mathematics in XI–XII.", textbookEvidence: "NCERT syllabus and CBSE curriculum sources identified; actual textbook contents pages and chapter counts not audited across boards.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://ncf.ncert.gov.in/ ; https://cbseacademic.nic.in/curriculum_2027.html", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from the current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
