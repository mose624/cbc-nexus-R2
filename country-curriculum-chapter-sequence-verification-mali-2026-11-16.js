/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Mali",
  "registrySlug": "mali",
  "auditDate": "2026-11-16",
  "educationFramework": "National curriculum commonly uses SVT, Physique-Chimie and Mathématiques; current Ministry programmes and reform status require direct retrieval.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology mapped to SVT; grade-by-grade programme pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry generally within combined Physique-Chimie; separate sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics generally within combined Physique-Chimie; separate sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics distinct; annual progression pending.",
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Mali", gradeSequenceEvidence: "French-language national programmes commonly distinguish SVT, Physique-Chimie and Mathématiques; official current grade-by-grade syllabuses and any reform/track variants need retrieval before asserting exact sequence.", textbookEvidence: "No actual student textbook contents or official chapter counts inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry curriculum source retrieval outstanding.", nextRequiredWork: "Extract current official grade/year/term learning outcomes and topic sequences for Mathematics and integrated or specialist sciences. Open approved/adopted student textbook PDFs and contents pages; record exact edition, grade, chapter titles and chapter counts separately. Do not infer textbook chapters from curriculum topics." };
