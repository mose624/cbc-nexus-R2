/**
 * CBE Nexus — Global curriculum registry reconciliation
 * Audit date: 2026-11-16
 *
 * This file records a structural reconciliation of the country register and
 * source-map batch inventory. It does not certify syllabus extraction,
 * chapter completion, or production deployment.
 */
export const countryCurriculumRegistryReconciliation = {
  auditDate: "2026-11-16",
  register: {
    path: "country-curriculum-chapter-completion-register.js",
    verifiedRecordCount: 196,
    verifiedUniqueCountryNames: 196,
    subjectsPerCountry: ["Biology", "Chemistry", "Physics", "Mathematics"],
    countrySubjectMaps: 784,
    note: "The 196 entries are the project's configured register, not a claim that every international dataset uses the same country/territory definition. Keep the register's inclusion policy explicit, especially for disputed or separately administered jurisdictions."
  },
  sourceMapInventory: {
    batches25To27Exist: true,
    batch25Countries: ["Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands"],
    batch26Countries: ["New Zealand", "Nicaragua", "Niger", "Democratic People's Republic of Korea", "North Macedonia"],
    batch27Countries: ["Norway", "Oman", "Pakistan", "Palau", "Palestine"],
    knownInventoryIssues: [
      "Batch 20 repeats the country set used in Batch 19 and must not be counted as five additional unique countries.",
      "Batch 30 is a reconciliation set rather than a strictly sequential alphabetical range; Rwanda already exists in Batch 01, while the remaining entries include Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines, and Samoa.",
      "Country aliases and official naming variants require canonical IDs before calculating country coverage (for example, Democratic People's Republic of Korea versus North Korea; São Tomé and Príncipe diacritics; Türkiye versus Turkey).",
      "The batch numbering is not a reliable proxy for 196-country coverage because duplicate and reconciliation batches exist."
    ]
  },
  baselineChapterAudit: {
    subjectsPerCountry: 4,
    countrySubjectMaps: 784,
    curriculumMappedSubjects: 0,
    registeredChapters: 4,
    curriculumVerifiedChapters: 0,
    chaptersMeetingFullStandard: 0,
    targetWordsPerChapter: 10000,
    status: "The source-map batches add evidence and references; they do not themselves update subject-level curriculum verification or prove that chapters meet the word, diagram, question, and teaching-quality targets."
  },
  requiredNextActions: [
    "Assign a stable canonical country/jurisdiction ID to every register record.",
    "Build one deduplicated inventory of all source-map files and compare canonical IDs against all 196 register entries.",
    "Resolve aliases and separately administered jurisdictions under a documented inclusion policy.",
    "For each country-subject-grade-track record, capture the current official authority, syllabus URL, language, curriculum version, effective cohort, chapter sequence, and evidence date.",
    "Only after official document extraction, populate chapter counts and mark curriculum verification complete.",
    "Keep chapter word-count and quality audits separate from curriculum-source mapping and website deployment checks."
  ],
  qualityRules: {
    doNotInferCoverageFromBatchNumbers: true,
    doNotInventChapterCounts: true,
    distinguishCountryAndTerritoryScope: true,
    distinguishIntegratedScienceFromSeparateSubjects: true,
    requireOfficialSourceAndEffectiveDate: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
