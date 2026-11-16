/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Türkiye",
  "registrySlug": "turkiye",
  "auditDate": "2026-11-16",
  "educationFramework": "Türkiye Yüzyılı Maarif Modeli (TYMM) curriculum portal provides grade- and unit-selectable Biology, Physics, Chemistry and Mathematics programmes for secondary education. Implementation is phased by grade.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Separate Biology course programme available in secondary education; grade-specific units need extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Separate Chemistry course programme available in secondary education; grade-specific units need extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Separate Physics course programme available in secondary education; grade-specific units need extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics separate; primary/basic and secondary programme versions must be mapped by grade.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://tymm.meb.gov.tr/brosurler",
    "https://tymm.meb.gov.tr/ogretim-programlari/ortaogretim"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "current-implementation-and-subject-plans-verified",
    "evidenceSummary": "MEB's 2026–27 annual draft plans list Biology, Physics, Chemistry and Mathematics. TYMM implementation in secondary continues in preparatory, Grades 9–10 and starts Grade 11 in 2026–27; other grades retain previous programmes. Need download each annual-plan ZIP and compare with approved textbook contents.",
    "officialDocuments": ["https://tymm.meb.gov.tr/taslak-cerceve-planlari/ortaogretim","https://ttkb.meb.gov.tr/www/ders-kitaplari-ve-egitim-araclari-e-icerik-tablosu-guncellendi/icerik/931/tr"],
    "gradeByGradeSequenceVerified": false,
    "actualTextbookContentsInspected": false,
    "officialTextbookChapterCountsVerified": false,
    "nextAction": "Extract grade/year/term topic headings from current official programme documents; inspect actual approved learner-textbook contents pages; map every book chapter to the official topic sequence and record discrepancies."
  },
  "completion": {
    "gradeByGradeTopicSequenceVerified": false,
    "officialTextbookChapterCountsVerified": false,
    "cbeNexusChaptersOver10000WordsVerified": false,
    "diagramsWorkedExamplesPracticalsVerified": false,
    "examQuestionsAndMarkingGuidesVerified": false,
    "nextActions": [
      "Retrieve current official framework and subject programmes for every grade.",
      "Extract official topic headings, learning outcomes, hours and practical requirements.",
      "Compare each programme with approved textbook tables of contents; count chapters only from actual contents pages.",
      "Map language, regional, school-track and examination-board variations.",
      "Write CBE Nexus chapters after sequence validation, then verify word counts, diagrams, worked examples, practicals and assessment."
    ]
  }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Türkiye",
  gradeSequenceEvidence: "The Türkiye Yüzyılı Maarif Modeli is phased in by grade cohorts; map each grade to its actual implementation year and approved syllabus rather than assuming all grades changed together.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.meb.gov.tr/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
