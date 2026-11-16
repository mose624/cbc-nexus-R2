/** CBE Nexus curriculum verification — Dominica (DMA), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Dominica",
  "countryCode": "DMA",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "National Curriculum organised through four key stages: K–Grade 2, Grades 3–6, Forms 1–3 and Forms 4–5.",
  "curriculumFramework": "Learning-outcomes curriculum with programmes of study by key stage. Primary Science is a core subject area; secondary specialist science options and CXC/CSEC pathways must be mapped separately.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Biology / integrated science as specified by stage",
      "status": "Science in primary/key-stage programmes; Biology as a specialist secondary/CSEC subject where offered.",
      "sequenceScope": "Do not infer a standalone Biology sequence in every primary grade.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve complete programme-of-study documents for all four key stages and the current secondary science syllabuses; verify textbook contents."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Chemistry / combined science as specified by stage",
      "status": "Science in primary; Chemistry is a specialist secondary/CSEC subject where offered.",
      "sequenceScope": "Extract Chemistry from the official secondary programme and CSEC syllabus separately.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve complete programme-of-study documents for all four key stages and the current secondary science syllabuses; verify textbook contents."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Physics / combined science as specified by stage",
      "status": "Science in primary; Physics is a specialist secondary/CSEC subject where offered.",
      "sequenceScope": "Separate school programme and CSEC subject requirements.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve complete programme-of-study documents for all four key stages and the current secondary science syllabuses; verify textbook contents."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Mathematics is a core subject across the national key stages.",
      "sequenceScope": "Map learning outcomes by key stage and then secondary/CSEC progression.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve complete programme-of-study documents for all four key stages and the current secondary science syllabuses; verify textbook contents."
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
      "title": "Ministry of Education Dominica — curriculum resources",
      "url": "https://mail.education.gov.dm/images/documents/programmes_of_study/Learning%20Outcomes%20and%20Success%20Criteria%20Grades%203%20-%204.pdf",
      "use": "Official primary curriculum key stages and Science/Mathematics programme structure."
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
