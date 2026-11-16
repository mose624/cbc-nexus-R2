/** CBE Nexus curriculum verification — Estonia (EST), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Estonia",
  "countryCode": "EST",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "Basic school comprises Grades 1–9; upper-secondary general education normally covers Grades 10–12.",
  "curriculumFramework": "National curricula specify subject syllabi. In basic school, Nature Studies precedes specialist Biology and Geography from Grade 7 and Physics and Chemistry from Grade 8. Upper-secondary Mathematics is offered as narrow and extensive courses.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Biology / integrated science as specified by stage",
      "status": "Nature Studies in early grades; separate Biology from Grade 7.",
      "sequenceScope": "Extract basic-school syllabus and upper-secondary Biology course syllabi.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current national subject syllabi and upper-secondary course modules, checking the 2024 curriculum amendment and grade transition."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Chemistry / combined science as specified by stage",
      "status": "Separate Chemistry from Grade 8 in basic school; upper-secondary Chemistry courses.",
      "sequenceScope": "Map course-specific upper-secondary objectives.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current national subject syllabi and upper-secondary course modules, checking the 2024 curriculum amendment and grade transition."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Physics / combined science as specified by stage",
      "status": "Separate Physics from Grade 8 in basic school; upper-secondary Physics courses.",
      "sequenceScope": "Map basic-school and upper-secondary course sequence.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current national subject syllabi and upper-secondary course modules, checking the 2024 curriculum amendment and grade transition."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Mathematics in basic school; narrow and extensive Mathematics in upper secondary.",
      "sequenceScope": "Map common basic-school outcomes and the two upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current national subject syllabi and upper-secondary course modules, checking the 2024 curriculum amendment and grade transition."
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
      "title": "Riigi Teataja — Basic Schools and Upper Secondary Schools Act",
      "url": "https://www.riigiteataja.ee/en/akt/519012026006",
      "use": "Official legislation enumerating Mathematics, Biology, Chemistry, Physics and Nature Studies; narrow/extensive upper-secondary Mathematics."
    },
    {
      "title": "Estonian Ministry of Education — National curriculum resources",
      "url": "https://www.hm.ee/en",
      "use": "National authority for current curriculum documents."
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
