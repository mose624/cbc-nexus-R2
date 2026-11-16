/** CBE Nexus curriculum verification — Dominican Republic (DOM), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Dominican Republic",
  "countryCode": "DOM",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "National education levels include primary and secondary education; secondary programmes are organised through cycles and modalities.",
  "curriculumFramework": "The Ministry's 2023 curricular adaptations are competency-based and publish separate primary and secondary curriculum documents. Natural Sciences is an area; specialist science subjects and their progression must be read from the secondary curriculum rather than assumed for every grade.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Natural Sciences / Biology as specified by stage",
      "status": "Natural Sciences area; biological content is part of the area and secondary subject development.",
      "sequenceScope": "Map biological competencies from primary and secondary curriculum documents.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-by-grade competencies and secondary modality differences from the 2023 curriculum PDFs; determine where sciences are integrated or separate."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Natural Sciences / Chemistry as specified by stage",
      "status": "Natural Sciences area; chemistry content is included within the science progression.",
      "sequenceScope": "Verify whether and where the secondary plan allocates separate Chemistry.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-by-grade competencies and secondary modality differences from the 2023 curriculum PDFs; determine where sciences are integrated or separate."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Natural Sciences / Physics as specified by stage",
      "status": "Natural Sciences area; physics content is included within the science progression.",
      "sequenceScope": "Verify secondary subject/course allocation by modality.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-by-grade competencies and secondary modality differences from the 2023 curriculum PDFs; determine where sciences are integrated or separate."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Separate Mathematics curriculum area.",
      "sequenceScope": "Extract competencies and indicators by grade and cycle.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-by-grade competencies and secondary modality differences from the 2023 curriculum PDFs; determine where sciences are integrated or separate."
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
      "title": "MINERD — Dirección General de Currículo, Diseño Curricular",
      "url": "https://www.minerd.gob.do/sobre-nosotros/areas-institucionales/direccion-general-de-curriculo/diseno-curricular",
      "use": "Official 2023 primary and secondary curricular adaptation documents."
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
