/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Slovakia",
  "registrySlug": "slovakia",
  "auditDate": "2026-11-16",
  "educationFramework": "Consolidated State Educational Programme for basic education published June 2026; lower-secondary learning areas include Mathematics and Work with Information and Human and Nature. Subject allocations and staged curriculum reform need grade-specific extraction.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Science content appears in Human and Nature learning area; separate Biology subject allocation requires programme-level validation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Science content in Human and Nature; separate Chemistry allocation requires grade-level validation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Science content in Human and Nature; separate Physics allocation requires grade-level validation.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics and Work with Information is a defined learning area.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.minedu.sk/46634-sk/konsolidovany-svp-pre-zakladne-vzdelavanie/",
    "https://www.minedu.sk/statny-vzdelavaci-program-pre-2-stupen-zs-konsolidovane-znenie/"
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
  country: "Slovakia",
  gradeSequenceEvidence: "The June 2026 consolidated State Educational Programme is a reform baseline; map staged implementation and actual grade allocations for Mathematics and science/nature learning areas before importing legacy subject sequences.",
  textbookEvidence: "The referenced material is a curriculum, ministry or examination-framework source, not an opened textbook contents page. Actual adopted textbook contents pages and full book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.statpedu.sk/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
