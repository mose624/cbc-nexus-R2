/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Mauritius",
  "registrySlug": "mauritius",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry and Mauritius Institute of Education publish curriculum frameworks and learning programmes; primary, lower-secondary and upper-secondary pathways differ.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated Science primary/lower secondary; Biology distinct at upper secondary and examinations.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry distinct at upper secondary; lower-level science integrated.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics distinct at upper secondary; lower-level science integrated.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics core; additional/extended pathways may apply.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Mauritius", gradeSequenceEvidence: "National curriculum framework and MIE materials guide primary and secondary. Map primary Science and Mathematics separately from lower-secondary integrated science and upper-secondary Biology, Chemistry, Physics and Mathematics; verify current NCE/SC/HSC transition.", textbookEvidence: "No actual approved textbook contents pages or printed chapter counts inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry and Mauritius Institute of Education curriculum portals require extraction.", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
