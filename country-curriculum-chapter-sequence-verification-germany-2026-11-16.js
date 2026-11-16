/** CBE Nexus curriculum verification — Germany (DEU), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Germany",
  "countryCode": "DEU",
  "reviewDate": "2026-11-16",
  "educationStructure": "Education is the responsibility of 16 Länder; school stages, subject names, grade sequencing and pathways vary by state.",
  "curriculumFramework": "KMK sets cross-state educational standards. Updated standards cover Biology, Chemistry and Physics at lower-secondary level and Mathematics in primary/lower-secondary; Länder curricula determine actual sequencing.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Länder subject curricula; KMK standards for lower and upper secondary.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Audit all 16 Länder separately; no single nationwide textbook sequence should be invented."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Länder subject curricula; KMK updated lower-secondary and upper-secondary standards.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Audit all 16 Länder separately; no single nationwide textbook sequence should be invented."
      ]
    },
    {
      "subject": "Physics",
      "status": "Länder subject curricula; KMK updated lower-secondary and upper-secondary standards.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Audit all 16 Länder separately; no single nationwide textbook sequence should be invented."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "KMK standards across primary, lower-secondary and upper-secondary; Länder implement.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Audit all 16 Länder separately; no single nationwide textbook sequence should be invented."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "KMK — Educational Standards",
      "url": "https://www.kmk.org/en/bildungsministerkonferenz/bildungsthemen/bildungsstandards.html",
      "use": "Official standards and 2024 implementation materials."
    },
    {
      "title": "KMK — General Education standards catalogue",
      "url": "https://www.kmk.org/en/downloads-dokumente/beschluesse-und-veroeffentlichungen/bildung-/-schule/allgemeine-bildung.html",
      "use": "Lists subject-specific standards."
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
