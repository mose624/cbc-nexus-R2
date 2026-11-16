/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Vietnam",
  "registrySlug": "vietnam",
  "auditDate": "2026-11-16",
  "educationFramework": "2018 General Education Curriculum structures primary and lower-secondary science as integrated natural sciences; upper secondary separates Biology, Chemistry and Physics subject programmes. Current subject programmes require extraction.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated Natural Sciences through lower secondary; separate Biology in upper secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Integrated Natural Sciences through lower secondary; separate Chemistry in upper secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Integrated Natural Sciences through lower secondary; separate Physics in upper secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a separate compulsory subject across general education.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "Official national Ministry / curriculum authority source not yet retrieved; verify before asserting detailed grade sequence"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "integrated-lower-secondary-structure-identified",
    "evidenceSummary": "2018 General Education Programme uses integrated Natural Sciences in Grades 6–9, with Physics, Chemistry and Biology strands within the subject; Grade 10–12 separate subject programmes. Mathematics is separate. A local official school plan confirms 6–9 annual time allocations by strand, but it is not a national textbook contents list.",
    "officialDocuments": ["https://storage-vnportal.vnpt.vn/qnm-ubnd/5968/banner/KEHOACHNHATRUONG/KEHOACHCACHOATDONG/24-%20KH%20GI%C3%81O%20D%E1%BB%A4C%20NH%C3%80%20TR%C6%AF%E1%BB%9CNG%2025-26.pdf"],
"sequenceEvidence": {
      "nationalStructure": "2018 General Education Programme: Natural Sciences is integrated in Grades 6–9; Biology, Chemistry and Physics are distinct elective/subject programmes in Grades 10–12; Mathematics is separate.",
      "gradeAllocationEvidence": {
        "sourceType": "Local education authority/school-year plan, not a national curriculum document",
        "grades": ["6", "7", "8", "9"],
        "naturalScienceAnnualPeriodsByStrand": {
          "Chemistry": [33,33,45,54],
          "Physics": [46,41,42,41],
          "Biology": [53,58,47,37]
        },
        "caution": "This verifies a local allocation example only; it does not establish national topic order or textbook chapter counts."
      },
      "contentsPagesInspected": false,
      "nextAction": "Retrieve the national MOET subject programmes and the approved textbook series actually adopted by each school; inspect all four grade-level contents pages."
    },
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
  country: "Vietnam",
  gradeSequenceEvidence: "The 2018 General Education Programme is implemented progressively by grade; integrated Natural Science in lower secondary must be distinguished from specialist Biology, Chemistry and Physics in upper secondary, with Mathematics separate.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit special-scope note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://moet.gov.vn/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
