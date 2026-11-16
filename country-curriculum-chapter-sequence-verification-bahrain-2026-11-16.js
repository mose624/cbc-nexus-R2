/* CBE Nexus — Bahrain curriculum sequence verification.
 * Canonical alphabetical country index: Bahrain (BHR).
 * Review date: 2026-11-16.
 * Sources: Bahrain Ministry of Education, eduNET, National Curriculum Framework,
 * official textbook catalogue and National Examinations information.
 * Scope note: official framework and textbook catalogue verified; detailed
 * subject-by-subject grade/topic sequences still require extraction from Arabic
 * curriculum and textbook materials. Do not infer chapter order from exam levels.
 */
export const country = {
  name: "Bahrain",
  isoAlpha3: "BHR",
  reviewDate: "2026-11-16",
  authority: "Kingdom of Bahrain, Ministry of Education",
  systemNotes: [
    "The Ministry describes Basic Education as Grades I–IX (nine years), followed by Secondary Education.",
    "The Ministry's National Curriculum Framework is available as an Arabic-language 52-page document; its official page was updated 19 October 2026.",
    "The official eduNET textbook guide lists separate 2026–2027 prescribed-book catalogues for Basic Education and Secondary Education. The catalogue confirms current-year textbook listings, but detailed book contents and chapter order must be extracted from each actual book.",
    "Bahrain's national examinations are held at Grades 9 and 12 and are aligned to national curriculum specifications. Examination specifications are useful validation sources but are not substitutes for the full curriculum.",
    "The Ministry announced an International Baccalaureate partnership in February 2026, with government-school implementation beginning in September 2026 at intermediate level from Year 8 through the Middle Years Programme, with progression to the Diploma Programme. This is a parallel pathway and must not be merged into the national curriculum sequence.",
    "The Ministry provides digital learning units for Mathematics and Science, among other core subjects, and electronic textbooks, model lessons and past examination questions."
  ],
  subjects: [
    {
      subject: "Biology",
      nationalStatus: "Science curriculum in basic education; specialist Biology at secondary level/pathway where offered",
      gradeCoverage: "Basic Education Grades I–IX: integrated Science; Secondary Education: specialist subject offering to be confirmed against 2026–2027 book catalogue and study plans",
      sequenceStatus: "national framework and current textbook catalogue verified; specialist Biology grade-by-grade topic sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The official Ministry textbook guide lists 2026–2027 prescribed books for Basic and Secondary Education.",
        "The Ministry's National Curriculum Framework provides the national framework but is currently listed in Arabic only.",
        "The Ministry's national examinations at Grades 9 and 12 are aligned with national curriculum specifications."
      ],
      pending: ["Retrieve the 2026–2027 Biology textbook(s) and extract actual chapter titles and order.", "Identify which secondary grade/track offers specialist Biology in the current study plan.", "Extract Biology learning outcomes, practical work and assessment specifications.", "Keep any IB MYP/DP Biology pathway separate from national subject sequence."]
    },
    {
      subject: "Chemistry",
      nationalStatus: "Science curriculum in basic education; specialist Chemistry at secondary level/pathway where offered",
      gradeCoverage: "Basic Education Grades I–IX: integrated Science; Secondary Education: specialist subject offering to be confirmed against 2026–2027 book catalogue and study plans",
      sequenceStatus: "national framework and current textbook catalogue verified; specialist Chemistry grade-by-grade topic sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The official Ministry textbook guide lists 2026–2027 prescribed books for Basic and Secondary Education.",
        "The Ministry's digital learning programme supports Science through interactive learning units.",
        "National examinations at Grades 9 and 12 are aligned with national curriculum specifications."
      ],
      pending: ["Retrieve the 2026–2027 Chemistry textbook(s) and extract chapter titles and sequence.", "Confirm current secondary grade/track allocations and weekly study plan.", "Extract practical/laboratory competencies and exam specifications.", "Keep IB curriculum content separate."]
    },
    {
      subject: "Physics",
      nationalStatus: "Science curriculum in basic education; specialist Physics at secondary level/pathway where offered",
      gradeCoverage: "Basic Education Grades I–IX: integrated Science; Secondary Education: specialist subject offering to be confirmed against 2026–2027 book catalogue and study plans",
      sequenceStatus: "national framework and current textbook catalogue verified; specialist Physics grade-by-grade topic sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry's current textbook catalogue is separated into Basic and Secondary Education book lists.",
        "The Ministry's National Curriculum Framework is the primary national reference; the currently listed file is Arabic only.",
        "The National Examinations framework aligns Grade 9 and Grade 12 examinations with national curriculum specifications."
      ],
      pending: ["Retrieve the 2026–2027 Physics textbook(s) and extract actual chapter sequence.", "Confirm grade and secondary-track allocations from current study plans.", "Extract practical and laboratory competencies and assessment specifications.", "Separate IB pathway content."]
    },
    {
      subject: "Mathematics",
      nationalStatus: "Core national subject supported by digital learning units",
      gradeCoverage: "Basic Education Grades I–IX and Secondary Education; exact current grade-by-grade topic sequence pending textbook extraction",
      sequenceStatus: "official subject presence and current textbook catalogue verified; detailed grade-by-grade topic sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry publishes prescribed textbook lists for Basic Education and Secondary Education for 2026–2027.",
        "The Ministry provides digital learning units and interactive activities for Mathematics.",
        "National examinations at Grades 9 and 12 align with national curriculum specifications."
      ],
      pending: ["Retrieve Mathematics textbooks and extract chapter titles by grade.", "Extract learning outcomes, progression and assessment specifications from the National Curriculum Framework and subject documents.", "Check secondary study-plan variations and any applied/science tracks.", "Keep IB MYP/DP Mathematics separate from national Mathematics."]
    }
  ],
  sourceRegister: [
    {
      title: "Ministry of Education — National Curriculum Framework (Arabic; 52 pages; page updated 19 October 2026)",
      url: "https://moe.gov.bh/en//the-national-curriculum-framework",
      use: "Primary national curriculum framework."
    },
    {
      title: "eduNET — Prescribed Textbook Guide, 2026–2027",
      url: "https://www.edunet.bh/Econtent/BooksGuide",
      use: "Current academic-year prescribed textbook catalogues for Basic Education and Secondary Education."
    },
    {
      title: "Ministry of Education — Basic Education and Secondary Education overview",
      url: "https://moe.gov.bh/en/",
      use: "Official grade-band structure; Basic Education includes Grades I–IX."
    },
    {
      title: "Ministry of Education — National Examinations",
      url: "https://moe.gov.bh/en//national-examinations",
      use: "National examinations at Grades 9 and 12, aligned to national curriculum specifications."
    },
    {
      title: "Ministry of Education — Digital Learning Units (Interactive Activities)",
      url: "https://moe.gov.bh/en/digital-learning-units-interactive-activities",
      use: "Official Mathematics and Science digital learning support."
    },
    {
      title: "Ministry of Education — Educational Resources",
      url: "https://moe.gov.bh/en//moe-educational-resources",
      use: "Electronic textbooks for all stages, model lessons and previous examination questions."
    },
    {
      title: "Bahrain government — IB implementation in government schools, announced 15 February 2026",
      url: "https://sdgs.gov.bh/NewsDetails?nid=WAcETLBpBKmj0PrJFcP1Sg%3D%3D",
      use: "Separate IB MYP introduction from Year 8 in September 2026 and planned progression to Diploma Programme."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithNationalFrameworkOrTextbookEvidence: 4,
    subjectsWithDetailedGradeByGradeTopicSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    current2026_2027TextbookCatalogueVerified: true,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "national-framework-and-current-textbook-catalogue-verified; subject-sequence-extraction-pending",
    note: "The national framework is listed in Arabic and the current textbook portal provides catalogue lists. Until the actual books, study plans and subject documents are extracted, do not claim official chapter counts or a completed grade-by-grade sequence. IB is a distinct parallel pathway."
  }

  evidenceRefresh_2026_11_16: {
  "status": "official framework and 2026–27 textbook catalogue confirmed; actual book contents not inspected",
  "sources": [
    "https://moe.gov.bh/en//the-national-curriculum-framework",
    "https://www.edunet.bh/Econtent/BooksGuide"
  ],
  "finding": "Ministry framework is Arabic-only; eduNET lists prescribed Basic and Secondary Education books for 2026–27. Catalogue presence is not chapter-sequence evidence."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }

  evidenceRefresh_2026_11_16: {
  "status": "official framework and 2026–27 textbook catalogue confirmed; actual book contents not inspected",
  "sources": [
    "https://moe.gov.bh/en//the-national-curriculum-framework",
    "https://www.edunet.bh/Econtent/BooksGuide"
  ],
  "finding": "Ministry framework is Arabic-only; eduNET lists prescribed Basic and Secondary Education books for 2026–27. Catalogue presence is not chapter-sequence evidence."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish actual contents-page chapter sequence." }
};
