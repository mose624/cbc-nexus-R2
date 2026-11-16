/** CBE Nexus curriculum verification — Ecuador (ECU), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Ecuador",
  "countryCode": "ECU",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "Educación General Básica (EGB) spans ten years and is followed by three years of Bachillerato.",
  "curriculumFramework": "The national curriculum is organised by knowledge areas. EGB uses Ciencias Naturales as an integrated area; Bachillerato subdivides Natural Sciences into Biology, Physics and Chemistry. Mathematics is a separate area/subject.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Natural Sciences / Biology as specified by stage",
      "status": "Integrated Ciencias Naturales in EGB; separate Biology in Bachillerato.",
      "sequenceScope": "Do not assign standalone Biology chapters to EGB grades without source support.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract EGB sublevel Natural Sciences and Mathematics skills and Bachillerato subject blocks; compare with current textbook editions."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Natural Sciences / Chemistry as specified by stage",
      "status": "Integrated Ciencias Naturales in EGB; separate Chemistry in Bachillerato.",
      "sequenceScope": "Map Bachillerato course objectives and approved texts.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract EGB sublevel Natural Sciences and Mathematics skills and Bachillerato subject blocks; compare with current textbook editions."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Natural Sciences / Physics as specified by stage",
      "status": "Integrated Ciencias Naturales in EGB; separate Physics in Bachillerato.",
      "sequenceScope": "Map Bachillerato course objectives and approved texts.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract EGB sublevel Natural Sciences and Mathematics skills and Bachillerato subject blocks; compare with current textbook editions."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Separate Matemática curriculum through EGB and Bachillerato.",
      "sequenceScope": "Extract grade/sublevel skills and upper-secondary progression.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract EGB sublevel Natural Sciences and Mathematics skills and Bachillerato subject blocks; compare with current textbook editions."
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
      "title": "Ministerio de Educación — Currículo priorizado de Bachillerato",
      "url": "https://educacion.gob.ec/wp-content/uploads/downloads/2025/07/Curriculo-Priorizado-Bachillerato.pdf",
      "use": "Confirms EGB and Bachillerato knowledge areas and separate Biology, Physics and Chemistry in Bachillerato."
    },
    {
      "title": "Ministerio de Educación — Currículo priorizado",
      "url": "https://recursos.educacion.gob.ec/red/curriculo/",
      "use": "Official current curriculum resource portal and sublevel downloads."
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

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Ecuador",
  gradeSequenceEvidence: "EGB uses integrated Ciencias Naturales and separate Mathematics; Bachillerato subdivides Natural Sciences into Biology, Physics and Chemistry. Extract the current national curriculum by sublevel and year; distinguish ordinary, technical and international pathways.",
  textbookEvidence: "No actual textbook contents inspected; current Ministry textbook series must be opened by grade.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://educacion.gob.ec/curriculo/",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
