/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Ukraine",
  "registrySlug": "ukraine",
  "auditDate": "2026-11-16",
  "educationFramework": "State Standard of Basic Secondary Education and model educational programmes define integrated natural science and subject-specific pathways. War-related implementation disruptions and school/provider variations need recognition.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Integrated natural science at earlier stages; Biology separate in basic/upper secondary programmes.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry separate in relevant basic/upper secondary grades; programme version pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics separate in relevant basic/upper secondary grades; programme version pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a separate educational field/subject; grade programme versions pending.",
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
    "status": "programme-and-textbook-title-lists-identified",
    "evidenceSummary": "MOE lists model programmes and approved textbook titles for Grades 5–9. Grades 5–6 may use integrated natural-science courses; Grades 7–9 include separate Physics, Biology and Chemistry programme options; Mathematics is integrated at 5–6 and may split into Algebra/Geometry at 7–9. The 2024 Profile Secondary Standard takes effect 1 Sep 2027. Actual selected textbook contents must be inspected per approved title.",
    "officialDocuments": ["https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/osvitni-programi/modelni-navchalni-programi-dlya-5-9-klasiv-novoi-ukrainskoi-shkoli-zaprovadzhuyutsya-poetapno-z-2022-roku","https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/osvitni-programi/tipovi-osvitni-programi-2"],
"programmeAndTextbookEvidence": {
      "Grades5to6": "MOE model programme listings include integrated Natural Science / integrated courses; Mathematics is a separate area.",
      "Grades7to9": "MOE lists separate Physics (multiple model programmes), Biology and Chemistry; Mathematics programme options include integrated Mathematics and separate Algebra/Geometry.",
      "approvedTextbookTitles": "MOE's model programme pages list multiple named textbook/programme options for Biology, Chemistry, Physics and Mathematics. The existence of several approved options means a single chapter count cannot be asserted without selecting the actual school-adopted book.",
      "profileSecondaryStandard": "2024 Profile Secondary Education Standard is stated by MOE as taking effect 1 September 2027.",
      "contentsPagesInspected": false,
      "nextAction": "Select the specific approved model programme and adopted textbook edition, then map contents pages for Grades 5–9."
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
  country: "Ukraine",
  gradeSequenceEvidence: "New Ukrainian School reform and State Standards define staged grade-level learning; map each subject by implementation cohort and current textbook edition, noting wartime regional delivery differences.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://mon.gov.ua/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
