/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Philippines",
  "registrySlug": "philippines",
  "auditDate": "2026-11-16",
  "educationFramework": "DepEd K–12 curriculum guides list Mathematics and Science in Grades 1–10; senior high-school STEM offers General Biology, General Physics and General Chemistry. Strengthened SHS programme is phased for Grade 11 in SY 2026–27; Grade 12 transition differs.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science integrated Grades 1–10; General Biology 1 and 2 in STEM senior high.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Science integrated Grades 1–10; General Chemistry 1 and 2 in STEM senior high.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Science integrated Grades 1–10; General Physics 1 and 2 in STEM senior high.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics Grades 1–10; senior high General Mathematics, Pre-Calculus and Basic Calculus depending programme.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://tangub.deped.gov.ph/k-to-12-curriculum-guides/",
    "https://www.deped.gov.ph/k-to-12/about/k-to-12-basic-education-curriculum/academic-track/",
    "https://www.deped.gov.ph/strengthened-shs-program/"
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
  country: "Philippines",
  gradeSequenceEvidence: "DepEd K–12 guides place Mathematics and Science across Grades 1–10; senior high STEM has distinct Biology, Chemistry and Physics. Strengthened SHS rollout is phased from SY 2026–27, so Grade 11 and Grade 12 cannot be treated as one unchanged cohort.",
  textbookEvidence: "The referenced material is a curriculum, ministry or examination-framework source, not an opened textbook contents page. Actual adopted textbook contents pages and full book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.deped.gov.ph/k-to-12/about/k-to-12-basic-education-curriculum/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
