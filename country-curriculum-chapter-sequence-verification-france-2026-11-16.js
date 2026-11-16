/** CBE Nexus curriculum verification — France (FRA), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "France",
  "countryCode": "FRA",
  "reviewDate": "2026-11-16",
  "educationStructure": "Primary school, collège (Grades 6e–3e), and lycée with general, technological and vocational pathways.",
  "curriculumFramework": "National programmes are organised by cycles. Primary science is integrated; collège includes Mathematics, Physics-Chemistry and SVT. Lycée programmes vary by pathway. Selected revised programmes enter progressively in 2026–2028.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Life-science content in primary science; SVT at collège and specialist options at lycée.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract official cycle-level SVT, Physics-Chemistry and Mathematics programmes and map effective dates by grade."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Primary science and Physics-Chemistry at collège; chemistry components in lycée pathways.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract official cycle-level SVT, Physics-Chemistry and Mathematics programmes and map effective dates by grade."
      ]
    },
    {
      "subject": "Physics",
      "status": "Primary science and Physics-Chemistry at collège; specialist Physics at lycée where offered.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract official cycle-level SVT, Physics-Chemistry and Mathematics programmes and map effective dates by grade."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Distinct subject from primary through lycée; revised programme rollout varies by grade.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract official cycle-level SVT, Physics-Chemistry and Mathematics programmes and map effective dates by grade."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Ministère — Programmes scolaires",
      "url": "https://www.education.gouv.fr/programmes-scolaires-41483",
      "use": "Official cycle structure and programme implementation."
    },
    {
      "title": "Éduscol — Mathematics programmes",
      "url": "https://eduscol.education.gouv.fr/4509/mathematiques",
      "use": "2026/27 programme status."
    },
    {
      "title": "Ministère — Science education",
      "url": "https://www.education.gouv.fr/l-enseignement-des-sciences-7076",
      "use": "Science teaching structure and revisions."
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
