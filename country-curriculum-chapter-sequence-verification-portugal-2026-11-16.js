/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Portugal",
  "registrySlug": "portugal",
  "auditDate": "2026-11-16",
  "educationFramework": "DGE publishes Aprendizagens Essenciais by grade and pathway. Basic education has Mathematics and Natural Sciences, then Físico-Química in Grades 7–9. Secondary includes Biology and Geology, Physics and Chemistry A, and specialist Biology/Chemistry/Physics in Grade 12.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Natural Sciences in basic education; Biology and Geology in Grades 10–11; Biology specialist option in Grade 12.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry content within Físico-Química Grades 7–9 and Physics and Chemistry A Grades 10–11; Chemistry option Grade 12.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics content within Físico-Química Grades 7–9 and Physics and Chemistry A Grades 10–11; Physics option Grade 12.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics separate across basic and secondary, with A/B/Applied Social Science options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.dge.mec.pt/aprendizagens-essenciais-ensino-basico",
    "https://www.dge.mec.pt/aprendizagens-essenciais-ensino-secundario",
    "https://www.dge.mec.pt/biologia-e-geologia"
  ],
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
  country: "Portugal",
  gradeSequenceEvidence: "DGE Aprendizagens Essenciais separates Mathematics and Natural Sciences in basic education; Físico-Química appears in Grades 7–9. Secondary science is pathway-specific, including Biology and Geology and Physics and Chemistry.",
  textbookEvidence: "The referenced material is a curriculum, ministry or examination-framework source, not an opened textbook contents page. Actual adopted textbook contents pages and full book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.dge.mec.pt/aprendizagens-essenciais-0",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
