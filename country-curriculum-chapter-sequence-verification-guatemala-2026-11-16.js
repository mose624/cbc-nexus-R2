/** CBE Nexus curriculum verification — Guatemala (GTM), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Guatemala",
  "countryCode": "GTM",
  "reviewDate": "2026-11-16",
  "educationStructure": "CNB covers pre-primary, primary, Ciclo Básico and Ciclo Diversificado, with career-specific bachillerato options.",
  "curriculumFramework": "DIGECUR publishes CNB by level. Ciclo Básico has Mathematics and integrated Ciencias Naturales; selected diversified bachillerato orientations offer separate Biology, Chemistry and Physics subareas.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Integrated Ciencias Naturales in basic cycle; separate Biology in selected diversified orientations.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current CNB competencies by grade and orientation; map integrated and specialist science variants."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Integrated Ciencias Naturales in basic cycle; separate Chemistry in selected diversified orientations.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current CNB competencies by grade and orientation; map integrated and specialist science variants."
      ]
    },
    {
      "subject": "Physics",
      "status": "Integrated Ciencias Naturales in basic cycle; separate Physics in selected diversified orientations.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current CNB competencies by grade and orientation; map integrated and specialist science variants."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Distinct Mathematics area in basic and diversified cycles.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract current CNB competencies by grade and orientation; map integrated and specialist science variants."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "DIGECUR — Currículo Nacional Base",
      "url": "https://digecur.mineduc.gob.gt/curriculo-nacional-base-cnb/",
      "use": "Official CNB by level."
    },
    {
      "title": "DIGECUR — CNB Bachillerato en Ciencias y Letras",
      "url": "https://digecur.mineduc.gob.gt/wp-content/uploads/2025/01/1.-CNB_Ciencias-y-Letras_.pdf",
      "use": "Lists Mathematics and separate Physics, Chemistry and Biology subareas."
    },
    {
      "title": "DIGECUR — Curriculum support materials",
      "url": "https://digecur.mineduc.gob.gt/materiales-de-apoyo-curricular/",
      "use": "Official curriculum materials."
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
