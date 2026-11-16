/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Mauritania",
  "registrySlug": "mauritania",
  "auditDate": "2026-11-16",
  "educationFramework": "National Arabic/French education programmes; science disciplines commonly use SVT, Physique-Chimie and Mathématiques. Current grade-level programmes require official confirmation.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "SVT is cautious Biology mapping; separate Biology sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Combined Physique-Chimie mapping; Chemistry sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Combined Physique-Chimie mapping; Physics sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics distinct; annual sequence pending.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Mauritania", gradeSequenceEvidence: "National Arabic/French education pathways require separate attention to language of instruction and grade-level subject programmes. Verify current Mathematics, Life Sciences/SVT and Physics-Chemistry sequence by cycle and language stream.", textbookEvidence: "No actual student textbook contents or chapter counts inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry programme and textbook source retrieval outstanding.", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
