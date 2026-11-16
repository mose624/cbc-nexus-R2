/** CBE Nexus curriculum verification — El Salvador (SLV), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "El Salvador",
  "countryCode": "SLV",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "Basic education includes first and second cycles and third cycle (Grades 7–9), followed by Educación Media/Bachillerato.",
  "curriculumFramework": "The Ministry is implementing a Ciencia y Tecnología transformation. Mathematics has its own ESMATE programmes and textbooks. Science is integrated in Ciencia y Tecnología in basic education and Educación Media, while Biology, Chemistry and Physics are assessed as identifiable scientific domains in upper-secondary learning.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Natural Sciences / Biology as specified by stage",
      "status": "Integrated Ciencia y Tecnología in basic education and Bachillerato; Biology is a distinct content domain in upper-secondary science.",
      "sequenceScope": "Do not represent Biology as a separate standalone course in every grade.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract all official unit titles and learning outcomes from the current science and Mathematics PDFs; reconcile transition materials by grade."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Natural Sciences / Chemistry as specified by stage",
      "status": "Integrated Ciencia y Tecnología; Chemistry is a distinct scientific content domain in Bachillerato.",
      "sequenceScope": "Extract content from the official science programme.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract all official unit titles and learning outcomes from the current science and Mathematics PDFs; reconcile transition materials by grade."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Natural Sciences / Physics as specified by stage",
      "status": "Integrated Ciencia y Tecnología; Physics is a distinct scientific content domain in Bachillerato.",
      "sequenceScope": "Extract content from the official science programme.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract all official unit titles and learning outcomes from the current science and Mathematics PDFs; reconcile transition materials by grade."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Separate Mathematics programmes and ESMATE textbooks from primary through Bachillerato.",
      "sequenceScope": "Use official grade-level programme and textbook sequence.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract all official unit titles and learning outcomes from the current science and Mathematics PDFs; reconcile transition materials by grade."
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
      "title": "MINEDUCYT — Ciencia Educativa",
      "url": "https://www.mined.gob.sv/ciencia-educativa/",
      "use": "Official Ciencia y Tecnología programmes and textbooks for Grades 2–9 and Bachillerato."
    },
    {
      "title": "MINEDUCYT — ESMATE",
      "url": "https://www.mined.gob.sv/esmate/",
      "use": "Official Mathematics programmes, textbooks and teacher guides across school levels."
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
