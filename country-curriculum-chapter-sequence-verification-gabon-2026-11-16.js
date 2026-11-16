/** CBE Nexus curriculum verification — Gabon (GAB), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Gabon",
  "countryCode": "GAB",
  "reviewDate": "2026-11-16",
  "educationStructure": "Primary, collège and lycée, with upper-secondary streams/series and technical pathways.",
  "curriculumFramework": "Secondary subject architecture commonly includes SVT, Physique-Chimie and Mathématiques. Third-party chapter lists are not official Ministry chapter-count evidence.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Biology commonly appears within SVT in secondary education.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Secure Ministry-issued programmes and annual progressions; do not use third-party chapter counts as official."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Chemistry commonly appears within combined Physique-Chimie.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Secure Ministry-issued programmes and annual progressions; do not use third-party chapter counts as official."
      ]
    },
    {
      "subject": "Physics",
      "status": "Physics commonly appears within combined Physique-Chimie.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Secure Ministry-issued programmes and annual progressions; do not use third-party chapter counts as official."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Mathematics is a distinct subject; progression varies by stream.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Secure Ministry-issued programmes and annual progressions; do not use third-party chapter counts as official."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Ministry of National Education, Gabon",
      "url": "https://www.education.gouv.ga/",
      "use": "National authority; current programmes and textbook lists require retrieval."
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Gabon", gradeSequenceEvidence: "Secondary curriculum architecture uses SVT, Physique-Chimie and Mathématiques; current official programmes by class/series and adopted books need retrieval.", textbookEvidence: "No textbook contents inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry sources not retrieved.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
