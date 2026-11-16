/**
 * CBE Nexus — Global curriculum registry reconciliation
 * Audit date: 2026-11-16
 *
 * Corrected against the current main-branch source-map files. This file records
 * country identity and source-map presence only; it does not certify curriculum
 * extraction, chapter completion, or production deployment.
 */
export const countryCurriculumRegistryReconciliation = {
  auditDate: "2026-11-16",
  canonicalIndex: {
    path: "country-curriculum-canonical-country-index-2026-11-16.js",
    identityKey: "ISO 3166-1 alpha-3; project-assigned XKX for Kosovo",
    projectRegistryCount: 196,
    note: "The 196-entry register is the project's configured country/jurisdiction scope. It is not identical to the full UN M49 country-or-area list."
  },
  sourceMapInventory: {
    existingBatchFiles: 40,
    batchEntries: 200,
    canonicalUniqueRegisterCountriesMapped: 196,
    coveragePercent: 100,
    missingRegisterCountries: [],
    duplicateCountryRecords: [
      { country: "Ghana", firstBatch: 1, duplicateBatch: 14 },
      { country: "Kenya", firstBatch: 1, duplicateBatch: 19 },
      { country: "Uganda", firstBatch: 1, duplicateBatch: 37 }
    ],
    extraJurisdictionsOutsideRegister: [
      { country: "Taiwan", batch: 35, note: "Keep as a separately identified education jurisdiction; do not silently count it as one of the 196 register entries." }
    ],
    correctedFindings: [
      "Batch 19 and Batch 20 are not duplicates. Batch 19 contains Kenya, Kiribati, Kuwait, Kyrgyzstan and Laos; Batch 20 contains Latvia, Lebanon, Lesotho, Liberia and Libya.",
      "Batch 30 is a reconciliation set. Rwanda is not present in Batch 01; Batch 01 contains Kenya, Ghana, Nigeria, Uganda and Tanzania. Batch 30 references an existing dedicated Rwanda extension (country-online-notes-rwanda-reb.js), so retain the Rwanda source record and link it to the extension rather than deleting it.",
      "Canonical matching resolves The Gambia/Gambia, Brunei Darussalam/Brunei, Federated States of Micronesia/Micronesia, Democratic People's Republic of Korea/North Korea, Republic of the Congo/Congo, diacritics in São Tomé and Príncipe, and other documented name variants.",
      "Batch 40 adds Afghanistan, Belgium, South Korea, Kosovo and Vatican City to close the five canonical register gaps. Vatican City is a special-scope record: no separate national K–12 syllabus has been verified, so the record must not be treated as four completed national subject mappings.",
      "Batch numbers are not used as a coverage proxy. Coverage is calculated from normalized country identities and the explicit 196-record register. The 100% figure means every register identity now has a source-map record; it does not mean all curricula or chapters are verified."
    ],
    coverageRule: "A country counts once only when a source-map name resolves to a canonical register identity. A repeated record does not increase coverage; an extra jurisdiction does not increase the 196-country numerator."
  },
  chapterRegisterBaseline: {
    subjectsPerCountry: 4,
    countrySubjectMaps: 784,
    curriculumMappedSubjects: 0,
    registeredChapters: 4,
    curriculumVerifiedChapters: 0,
    chaptersMeetingFullStandard: 0,
    targetWordsPerChapter: 10000,
    status: "Source-map presence does not update subject-level curriculum verification or prove chapter word, diagram, question, or teaching-quality targets."
  },
  nextActions: [
    "Inspect and extract the current official grade/subject documents for all five Batch 40 entries; resolve Vatican City as a special-scope case rather than inventing a national K–12 syllabus.",
    "Keep the three duplicate source-map records linked to the same canonical identity; do not count them twice.",
    "Keep Taiwan outside the 196-country numerator unless the project formally changes its register scope.",
    "Continue country-subject-grade-track mapping from official documents before creating or verifying chapter sequences.",
    "Keep source mapping, chapter quality audits, and production deployment verification as separate statuses."
  ],
  qualityRules: {
    doNotInferCoverageFromBatchNumbers: true,
    requireCanonicalIdentityForCoverage: true,
    countEachCanonicalCountryOnce: true,
    doNotCountExtraJurisdictionsInRegisterNumerator: true,
    doNotInventChapterCounts: true,
    distinguishCountryAndTerritoryScope: true,
    distinguishIntegratedScienceFromSeparateSubjects: true,
    requireOfficialSourceAndEffectiveDate: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
