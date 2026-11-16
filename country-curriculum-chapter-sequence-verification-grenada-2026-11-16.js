/** CBE Nexus curriculum verification — Grenada (GRD), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Grenada",
  "countryCode": "GRD",
  "reviewDate": "2026-11-16",
  "educationStructure": "Primary education is followed by secondary education; CSEC and other Caribbean examination pathways shape subject choices.",
  "curriculumFramework": "Integrated Science is used in earlier grades; specialist Biology, Chemistry, Physics and Mathematics syllabuses must be distinguished from CXC examinations and local school programmes.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Integrated Science in earlier grades; CSEC Biology as a specialist secondary option.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve Ministry framework and grade-specific syllabuses; separate national curriculum from CXC exam content."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Integrated Science in earlier grades; CSEC Chemistry as a specialist secondary option.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve Ministry framework and grade-specific syllabuses; separate national curriculum from CXC exam content."
      ]
    },
    {
      "subject": "Physics",
      "status": "Integrated Science in earlier grades; CSEC Physics as a specialist secondary option.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve Ministry framework and grade-specific syllabuses; separate national curriculum from CXC exam content."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Mathematics is core; CSEC Mathematics is an examination pathway.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve Ministry framework and grade-specific syllabuses; separate national curriculum from CXC exam content."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Government of Grenada — Education Ministry",
      "url": "https://www.gov.gd/ministries/education",
      "use": "National authority; current curriculum and syllabus documents require retrieval."
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

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Grenada", gradeSequenceEvidence: "Primary Science and Mathematics must be separated from secondary CSEC/CAPE syllabuses. CXC Biology, Chemistry, Physics and Mathematics are examination pathways, not the full national grade sequence.", textbookEvidence: "No textbook contents inspected; local approved texts not checked.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry curriculum retrieval outstanding.", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
