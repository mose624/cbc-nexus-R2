/** CBE Nexus curriculum verification — Fiji (FJI), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Fiji",
  "countryCode": "FJI",
  "reviewDate": "2026-11-16",
  "educationStructure": "Primary, junior secondary and senior secondary pathways; subject offerings and examination requirements vary by level.",
  "curriculumFramework": "National curriculum frameworks and syllabuses are issued by the Ministry. Science is integrated at lower levels; specialist Biology, Chemistry and Physics are offered in secondary pathways where specified. Mathematics is distinct.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Integrated science at lower levels; specialist Biology in secondary where offered.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current framework and Fiji Year 9–13 subject syllabuses; verify current assessment and subject availability."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Integrated science at lower levels; specialist Chemistry in secondary where offered.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current framework and Fiji Year 9–13 subject syllabuses; verify current assessment and subject availability."
      ]
    },
    {
      "subject": "Physics",
      "status": "Integrated science at lower levels; specialist Physics in secondary where offered.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current framework and Fiji Year 9–13 subject syllabuses; verify current assessment and subject availability."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Mathematics is a distinct subject through primary and secondary.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current framework and Fiji Year 9–13 subject syllabuses; verify current assessment and subject availability."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Ministry of Education Fiji",
      "url": "https://www.education.gov.fj/",
      "use": "National authority; current framework and subject syllabuses require direct extraction."
    }
  ],
  "implementationNotes": [
    "This record does not claim that all grade-level sequences have been extracted.",
    "Integrated science and combined Physics-Chemistry are not artificially split where the official curriculum retains them.",
    "International examination syllabuses are not automatically equivalent to the national curriculum."
  ],
  "reconciliation": {
    "biology": "Framework-level mapping recorded; detailed grade sequence pending.",
    "chemistry": "Framework-level mapping recorded; combined-course boundaries preserved; detailed sequence pending.",
    "physics": "Framework-level mapping recorded; combined-course boundaries preserved; detailed sequence pending.",
    "mathematics": "Distinct subject mapped; detailed grade sequence pending.",
    "officialChapterCounts": "Not verified.",
    "cbeNexusChapterContent": "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  "overallStatus": "Country record created with official-source leads and conservative subject mapping; detailed programme extraction and textbook chapter verification remain pending."
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Fiji", gradeSequenceEvidence: "Ministry syllabuses require grade-by-grade extraction. Lower levels use integrated Science; specialist Biology, Chemistry, Physics and Mathematics appear in secondary pathways.", textbookEvidence: "No textbook contents inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry syllabus retrieval outstanding.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
