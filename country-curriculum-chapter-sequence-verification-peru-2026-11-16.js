/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Peru",
  "registrySlug": "peru",
  "auditDate": "2026-11-16",
  "educationFramework": "MINEDU's CNEB and Basic Education Regular curricular programmes define competencies and expected performances by grade; secondary programme updated/reposted May 2025. Science is an integrated area rather than a four-subject chapter list in basic education.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology content integrated within Ciencia y Tecnología; secondary performance sequence by grade needs extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry content integrated within Ciencia y Tecnología; do not represent as separate basic-education course without track evidence.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics content integrated within Ciencia y Tecnología; grade sequence needs extraction.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a distinct curricular area with grade-level expected performances.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.gob.pe/institucion/minedu/informes-publicaciones/6791708-programa-curricular-de-educacion-secundaria",
    "https://www.gob.pe/es/90158-ministerio-de-educacion-programas-curriculares-de-la-educacion-basica-regular",
    "https://www.gob.pe/institucion/minedu/campa%C3%B1as/106784-curriculo-nacional-de-la-educacion-basica"
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
  country: "Peru",
  gradeSequenceEvidence: "MINEDU CNEB basic education organises science within Ciencia y Tecnología, not four separate basic-school science subjects. Grade-specific performance sequences and any upper-secondary distinctions need extraction.",
  textbookEvidence: "The source identified here is a curriculum/framework source, not an opened textbook contents page. No actual adopted textbook contents pages or full book PDFs were inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.minedu.gob.pe/curriculo/",
  nextRequiredWork: "Retrieve the current official grade-by-grade syllabus and the exact approved/adopted textbook for each relevant grade and jurisdiction; open its contents pages; record book title, edition, publisher, grade, chapter titles and verified chapter count. Keep CBE Nexus-authored chapters in a separate field."
};
