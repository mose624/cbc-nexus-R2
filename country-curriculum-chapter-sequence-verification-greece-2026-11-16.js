/** CBE Nexus curriculum verification — Greece (GRC), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Greece",
  "countryCode": "GRC",
  "reviewDate": "2026-11-16",
  "educationStructure": "Primary education is followed by three-year Gymnasio and upper-secondary Lykeio pathways.",
  "curriculumFramework": "Primary science begins through Environmental Studies. Gymnasio includes Mathematics and natural sciences, including Biology, Physics and Chemistry; upper-secondary allocation varies by class and pathway.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Environmental Studies in primary; Biology in lower and upper secondary according to grade.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current teaching instructions and subject allocation by Gymnasio/Lykeio grade and pathway."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Natural-science learning in primary; Chemistry in lower/upper secondary according to grade.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current teaching instructions and subject allocation by Gymnasio/Lykeio grade and pathway."
      ]
    },
    {
      "subject": "Physics",
      "status": "Natural-science learning in primary; Physics in lower/upper secondary according to grade.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current teaching instructions and subject allocation by Gymnasio/Lykeio grade and pathway."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Separate Mathematics subject in primary, Gymnasio and Lykeio.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current teaching instructions and subject allocation by Gymnasio/Lykeio grade and pathway."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Hellenic Ministry of Education",
      "url": "https://www.minedu.gov.gr/",
      "use": "Official curricula and 2026/27 teaching instructions require grade-level extraction."
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
