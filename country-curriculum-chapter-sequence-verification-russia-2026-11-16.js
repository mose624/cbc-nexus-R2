/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Russia",
  "registrySlug": "russia",
  "auditDate": "2026-11-16",
  "educationFramework": "Ministry announced updated Federal State Educational Standard for general secondary education on 17 September 2026; revised Biology, Chemistry, Physics and Mathematics content is scheduled to take effect 1 September 2027.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Separate subject; revised standard includes updated Biology content, effective 2027.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Separate subject; revised standard includes updated Chemistry content, effective 2027.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Separate subject; revised standard includes updated Physics content, effective 2027.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Separate subject; revised standard includes updated Mathematics content, effective 2027.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://edu.gov.ru/press/12065/prinyat-obnovlennyy-gosudarstvennyy-obrazovatelnyy-standart-srednego-obschego-obrazovaniya/"
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
  country: "Russia",
  gradeSequenceEvidence: "Federal State Educational Standards and federal basic general education programmes establish national requirements, while approved federal textbook lists and regional adoption need separate checking. Track the updated standards by implementation year.",
  textbookEvidence: "Curriculum framework or syllabus portal identified; actual adopted textbook contents pages and complete book PDFs were not inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://edu.gov.ru/",
  nextRequiredWork: "Retrieve current grade-by-grade official syllabus and the exact approved/adopted textbook for each grade and pathway; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters separate."
};
