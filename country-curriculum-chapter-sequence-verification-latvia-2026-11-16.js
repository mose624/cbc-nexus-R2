/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Latvia",
  "registrySlug": "latvia",
  "auditDate": "2026-11-16",
  "educationFramework": "Skola2030 competency-based curriculum and national basic education standard; mandatory content organised into learning areas and subject programmes.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology is a separate subject in natural-sciences learning area.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry is a separate subject in natural-sciences learning area.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics is a separate subject in natural-sciences learning area.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a separate learning area and subject.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://skola2030.lv/lv/skolotajiem/izglitibas-pakapes/pamatizglitiba"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Latvia", gradeSequenceEvidence: "Skola2030 and the national basic education standard organise learning through subject areas and competency-based outcomes. Extract Mathematics and science progression by grade, including Biology, Chemistry and Physics where separately specified.", textbookEvidence: "Official framework identified; actual adopted textbook contents and chapter counts not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://skola2030.lv/", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
