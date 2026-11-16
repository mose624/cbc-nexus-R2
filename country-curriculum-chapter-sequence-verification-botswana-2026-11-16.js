/**
 * CBE Nexus country curriculum verification
 * Country: Botswana
 * Canonical country index: 27
 * Reviewed: 2026-11-16
 *
 * Distinguish legacy BGCSE syllabi from Botswana Senior Secondary Education
 * (BSSE) transition syllabi, and both from the junior secondary curriculum.
 */
export const countryCurriculumVerification = {
  country: "Botswana",
  countryIndex: 27,
  reviewedOn: "2026-11-16",
  authority: "Ministry of Child Welfare and Basic Education; Department of Curriculum Development and Evaluation; Botswana Examinations Council (BEC)",
  system: {
    primary: "Seven years, Standard 1–7",
    secondary: "Junior secondary followed by senior secondary",
    framework: "General Education Curriculum and Assessment Framework (GECAF), reconfigured toward STEAM-driven, skill- and competency-based education.",
    2026Transition: "The 2025 examination cycle included both legacy BGCSE syllabi and the new Botswana Senior Secondary Education (BSSE) framework. The STEAM-based senior secondary reconfiguration is being phased in from January 2027. Junior secondary syllabus review is planned for 2027; the existing Junior Certificate syllabus was revised in 2010.",
    implementationCaution: "Do not assume all grades and schools have switched simultaneously. Keep legacy BGCSE and new BSSE syllabi as separate pathways. Do not treat the announced 2027 junior syllabus review as already implemented."
  },
  subjects: [
    {
      subject: "Biology",
      juniorSecondaryPosition: "Science is taught within the junior-secondary curriculum; exact current junior syllabus topic order requires extraction.",
      seniorSecondaryPathways: [
        { name: "Legacy BGCSE", code: "0572", status: "Listed in BEC's BGCSE syllabus catalogue." },
        { name: "Botswana Senior Secondary Education", code: "1428", status: "New BSSE assessment syllabus published; five modules identified." }
      ],
      verifiedBSSEModules: [
        "Module 1: Explore continuity and diversity of life (cell processes, classification, reproduction, heredity).",
        "Module 2: Analyse energy flow in ecosystems (ecosystem interactions, human nutrition, energy transformation in organisms).",
        "Module 3: Evaluate transport of substances in plants and animals.",
        "Module 4: Evaluate regulation and control in plants and animals (homeostasis, hormonal regulation, nervous coordination).",
        "Module 5: Explore applications of biological processes in real-life situations (biotechnology and gene technology)."
      ],
      chapterCount: null,
      sequenceStatus: "Five official BSSE assessment modules verified; they are learning modules, not textbook chapter counts. Full teaching-syllabus outcomes and junior-secondary sequence pending.",
      sources: [
        "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "https://www.bec.co.bw/images/2025/bsse-syllabi/1428-biology/1428-biology-assessment-syllabus.pdf",
        "https://www.bec.co.bw/images/2025/bsse-syllabi/1428-biology/1428-biology-pba-guide.pdf"
      ]
    },
    {
      subject: "Chemistry",
      juniorSecondaryPosition: "Chemistry-related concepts occur within junior-secondary Science; the exact junior syllabus sequence needs extraction.",
      seniorSecondaryPathways: [
        { name: "Legacy BGCSE", code: "0570", status: "Listed in BEC's BGCSE syllabus catalogue." },
        { name: "Botswana Senior Secondary Education", code: null, status: "New BSSE Chemistry syllabus is part of the transition; exact code and module headings require verification from the official BEC syllabus document." }
      ],
      verifiedBSSEModules: [],
      chapterCount: null,
      sequenceStatus: "Separate senior-secondary Chemistry pathway confirmed; exact BSSE module sequence and teaching-syllabus topics pending.",
      sources: [
        "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "https://www.bec.co.bw/",
        "https://gov.bw/ministries/ministry-child-welfare-and-basic-education"
      ]
    },
    {
      subject: "Physics",
      juniorSecondaryPosition: "Physics-related concepts occur within junior-secondary Science; the exact junior syllabus sequence needs extraction.",
      seniorSecondaryPathways: [
        { name: "Legacy BGCSE", code: "0571", status: "Listed in BEC's BGCSE syllabus catalogue." },
        { name: "Botswana Senior Secondary Education", code: "1427", status: "New BSSE assessment syllabus published; module headings partially verified." }
      ],
      verifiedBSSEModules: [
        "Module 1: Apply principles of measurements and scientific processes (scientific method, conventions, quantities, units and measurement).",
        "Module 2: Explore principles of mechanics (scalars and vectors, motion, forces, pressure).",
        "Module 3: Demonstrate understanding of energy and waves (work, power, thermal energy and wave properties).",
        "Module 4: Explore magnetism, electricity and electronics (full detailed outcomes require extraction)."
      ],
      chapterCount: null,
      sequenceStatus: "At least four BSSE module headings and their initial learning outcomes verified; full syllabus module list and junior-secondary sequence pending.",
      sources: [
        "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "https://www.bec.co.bw/images/2025/bsse-syllabi/1427-physics/1427-physics-assessment-syllabus-2.pdf"
      ]
    },
    {
      subject: "Mathematics",
      juniorSecondaryPosition: "Mathematics is a distinct subject within primary and secondary general education.",
      seniorSecondaryPathways: [
        { name: "Legacy BGCSE", code: "0563", status: "Listed in BEC's BGCSE syllabus catalogue." },
        { name: "Botswana Senior Secondary Education", code: null, status: "Senior-secondary STEAM/BSSE transition applies; exact Mathematics syllabus code and module sequence require official document extraction." }
      ],
      verifiedBSSEModules: [],
      chapterCount: null,
      sequenceStatus: "Separate subject and legacy BGCSE assessment code verified; new BSSE module/learning-outcome sequence pending.",
      sources: [
        "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "https://gov.bw/ministries/ministry-child-welfare-and-basic-education",
        "https://www.bec.co.bw/"
      ]
    }
  ],
  outstandingWork: [
    "Retrieve and map the current junior-secondary Science and Mathematics syllabi; the announced review is for 2027, not proof of a completed new syllabus.",
    "Retrieve the full official BSSE Chemistry and Mathematics assessment and teaching syllabi and verify codes, modules, learning outcomes and assessment requirements.",
    "Extract complete BSSE Biology and Physics teaching-syllabus performance criteria, practical work and module outcomes.",
    "Build a transition table by cohort and school year for legacy BGCSE versus BSSE, including the January 2027 phased STEAM rollout.",
    "Only after syllabus-to-textbook reconciliation, create CBE Nexus chapters; do not equate modules with official textbook chapters."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithSomeOfficialSeniorSecondaryModuleSequence: 2,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithCompleteGradeByGradeSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }

  evidenceRefresh_2026_11_16: {
  "status": "official BGCSE syllabus catalogue confirmed; syllabus contents not extracted",
  "sources": [
    "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi"
  ],
  "finding": "Botswana Examinations Council lists Mathematics, Biology, Chemistry, Physics and single/double-award Science syllabuses. This establishes examination subjects, not national grade-by-grade topic sequence or textbook chapter count."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish actual contents-page chapter sequence." }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Botswana",
  gradeSequenceEvidence: "BEC lists BGCSE Mathematics, Biology, Chemistry, Physics and Science syllabi. A 2025 BSSE Biology assessment syllabus is also published; keep legacy BGCSE and transitioning BSSE pathways distinct.",
  textbookEvidence: "Official assessment syllabi provide examinable subject content; textbook chapter counts are not established by exam syllabi.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology (or integrated Life Science), Chemistry, Physics and Mathematics; then open approved/adopted student textbooks and record exact printed chapter headings and counts separately. Do not infer textbook chapters from syllabus themes."
};
