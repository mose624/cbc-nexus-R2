/** CBE Nexus curriculum verification — Ethiopia (ETH), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Ethiopia",
  "countryCode": "ETH",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "The national framework covers KG–Grade 12. Secondary education includes Grades 9–10 and Grades 11–12, with natural-science and social-science streams described in the framework.",
  "curriculumFramework": "The national curriculum framework identifies Biology, Chemistry and Physics as general education subjects in Grades 9–10 and specialised courses in the Natural Sciences stream in Grades 11–12. Mathematics is included in the common curriculum. Current 2023 textbook and syllabus editions must be matched to the correct reform cohort.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Biology / integrated science as specified by stage",
      "status": "General subject in Grades 9–10; specialised Natural Sciences course in Grades 11–12.",
      "sequenceScope": "Verify the current textbook edition and grade-specific units.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Reconcile the framework with the latest Ministry-issued 2023 curriculum and textbooks; extract units by grade and stream."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Chemistry / combined science as specified by stage",
      "status": "General subject in Grades 9–10; specialised Natural Sciences course in Grades 11–12.",
      "sequenceScope": "Verify the current textbook edition and grade-specific units.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Reconcile the framework with the latest Ministry-issued 2023 curriculum and textbooks; extract units by grade and stream."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Physics / combined science as specified by stage",
      "status": "General subject in Grades 9–10; specialised Natural Sciences course in Grades 11–12.",
      "sequenceScope": "Verify the current textbook edition and grade-specific units.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Reconcile the framework with the latest Ministry-issued 2023 curriculum and textbooks; extract units by grade and stream."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Core/common subject through secondary, with stream-specific expectations.",
      "sequenceScope": "Extract current grade-level textbooks and distinguish common from advanced stream content.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Reconcile the framework with the latest Ministry-issued 2023 curriculum and textbooks; extract units by grade and stream."
      ]
    }
  ],
  "implementationNotes": [
    "This is a source-mapped verification record, not a claim that every grade-level sequence has been extracted.",
    "Integrated Science, Natural Sciences, SVT and Physics-Chemistry remain combined where the national programme structure requires it.",
    "International examination syllabuses (for example CXC/EGCSE) are not automatically equivalent to the national curriculum.",
    "Country-specific regional, school-type, stream and cohort differences must be preserved."
  ],
  "officialSources": [
    {
      "title": "Ethiopian Ministry of Education — Curriculum Framework KG–Grade 12",
      "url": "https://moe.gov.et/storage/Books/Curriculum%20Framework%20for%20Ethiopian%20Education%20%28KG%20%E2%80%93%20Grade%2012%29.pdf",
      "use": "Official framework for secondary science subjects and Natural Sciences stream."
    },
    {
      "title": "Ministry of Education — official portal",
      "url": "https://moe.gov.et/",
      "use": "National authority for current curriculum and textbook releases."
    }
  ],
  "reconciliation": {
    "biology": "Subject identity mapped at framework level; detailed grade-by-grade sequence pending.",
    "chemistry": "Subject identity mapped at framework level; combined-course boundaries preserved where known; detailed sequence pending.",
    "physics": "Subject identity mapped at framework level; combined-course boundaries preserved where known; detailed sequence pending.",
    "mathematics": "Distinct subject mapped; detailed grade-by-grade sequence pending.",
    "officialChapterCounts": "Not verified.",
    "cbeNexusChapterContent": "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  "overallStatus": "Country record created with official-source leads and conservative subject mapping; full grade-by-grade programme extraction and textbook chapter verification remain pending."
};
