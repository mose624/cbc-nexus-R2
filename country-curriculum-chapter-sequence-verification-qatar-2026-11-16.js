/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Qatar",
  "registrySlug": "qatar",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry announced new and updated subjects for 2026–27. Grade 10 Science becomes a unified integrated course combining Biology, Chemistry and Physics; other grades and pathways require mapping against the new plan.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated into Grade 10 unified Science from 2026–27; upper secondary pathway detail pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Integrated into Grade 10 unified Science from 2026–27; upper secondary pathway detail pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Integrated into Grade 10 unified Science from 2026–27; upper secondary pathway detail pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core subject; grade and pathway programme sequence pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.edu.gov.qa/en/News/Details/18921000"
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
  country: "Qatar",
  gradeSequenceEvidence: "Ministry national curriculum standards and subject frameworks require grade-specific extraction. Confirm Arabic/English-medium and public/international school distinctions; do not assume one textbook sequence across all schools.",
  textbookEvidence: "Curriculum framework or syllabus portal identified; actual adopted textbook contents pages and complete book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.edu.gov.qa/",
  nextRequiredWork: "Retrieve current grade-by-grade official syllabus and the exact approved/adopted textbook for each grade and pathway; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters separate."
};
