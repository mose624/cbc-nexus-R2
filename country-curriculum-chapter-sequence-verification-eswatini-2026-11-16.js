/** CBE Nexus curriculum verification — Eswatini (SWZ), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Eswatini",
  "countryCode": "SWZ",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "Primary education is followed by junior secondary and senior secondary (Forms 4–5). EGCSE is a principal senior-secondary qualification.",
  "curriculumFramework": "The Eswatini General Certificate of Secondary Education subject syllabuses define specialist senior-secondary content. The 2027–2029 Biology syllabus states that learners take Mathematics and Science (Biology or Physical Science) among compulsory subjects; Physics and Chemistry should not be presumed to be separate compulsory courses for all learners.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Biology / integrated science as specified by stage",
      "status": "Specialist EGCSE Biology option within the senior-secondary Science requirement.",
      "sequenceScope": "Use the current examination syllabus and distinguish Biology from Physical Science.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current EGCSE Physical Science and Mathematics syllabuses and junior-secondary curriculum; establish whether Chemistry/Physics are combined or separately examined."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Chemistry / combined science as specified by stage",
      "status": "Chemistry content is associated with Physical Science; standalone course availability depends on the approved syllabus/option.",
      "sequenceScope": "Extract the current Physical Science syllabus before separating topics.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current EGCSE Physical Science and Mathematics syllabuses and junior-secondary curriculum; establish whether Chemistry/Physics are combined or separately examined."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Physics / combined science as specified by stage",
      "status": "Physics content is associated with Physical Science; standalone course availability depends on the approved syllabus/option.",
      "sequenceScope": "Extract the current Physical Science syllabus before separating topics.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current EGCSE Physical Science and Mathematics syllabuses and junior-secondary curriculum; establish whether Chemistry/Physics are combined or separately examined."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Compulsory EGCSE subject in the 2027–2029 Biology syllabus context.",
      "sequenceScope": "Verify current Mathematics syllabus edition and grade progression.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Retrieve current EGCSE Physical Science and Mathematics syllabuses and junior-secondary curriculum; establish whether Chemistry/Physics are combined or separately examined."
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
      "title": "Eswatini Examinations Council — EGCSE Biology 2027–2029 syllabus",
      "url": "https://www.examscouncil.org.sz/upload-centre/syllabus/EGCSE%20Biology%202027-2029%20Syllabus.pdf",
      "use": "Official subject syllabus and compulsory-subject structure, including Mathematics and Science (Biology or Physical Science)."
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
