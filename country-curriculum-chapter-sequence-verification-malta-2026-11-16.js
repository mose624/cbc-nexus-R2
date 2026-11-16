/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Malta",
  "registrySlug": "malta",
  "auditDate": "2026-11-16",
  "educationFramework": "National Curriculum Framework and Learning Outcomes Framework; compulsory education to age 16; secondary and MATSEC subject pathways differ.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated science in early years; Biology separate in secondary and MATSEC.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry separate in secondary/MATSEC; earlier science integrated.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics separate in secondary/MATSEC; earlier science integrated.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics core; secondary levels and MATSEC options vary.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Malta", gradeSequenceEvidence: "National Curriculum Framework and Learning Outcomes Framework organise compulsory education; map science and Mathematics learning outcomes across primary and secondary and distinguish specialist secondary options and SEC subject syllabuses.", textbookEvidence: "No actual approved textbook contents or printed chapter counts inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Malta education curriculum portal retrieval outstanding.", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
