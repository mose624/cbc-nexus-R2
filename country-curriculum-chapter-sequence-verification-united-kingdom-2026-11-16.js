/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "United Kingdom",
  "registrySlug": "united-kingdom",
  "auditDate": "2026-11-16",
  "educationFramework": "There is no single UK-wide school curriculum. England, Scotland, Wales and Northern Ireland have separate frameworks. England's national curriculum identifies Biology, Chemistry and Physics disciplines within Science; other jurisdictions need their own curriculum mapping.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "England: Biology discipline within Science; GCSE/A-level separate subject options. Scotland/Wales/NI have separate frameworks.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "England: Chemistry discipline within Science; separate GCSE/A-level options. Other nations differ.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "England: Physics discipline within Science; separate GCSE/A-level options. Other nations differ.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is a core subject in England; separate national curriculum/frameworks apply across the other UK jurisdictions.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study"
  ],
  "reconciliation": {
    "batch": "173-192",
    "status": "england-official-programmes-identified-other-jurisdictions-pending",
    "evidenceSummary": "Split into four jurisdiction audits, not one UK sequence. England: Science and Mathematics statutory programmes cover KS1–KS4; science content names Biology, Chemistry and Physics, while Mathematics is year-by-year at KS1–KS2 and key-stage programmes at KS3–KS4. Scotland, Wales and Northern Ireland require separate extraction. Textbooks are publisher/school-selected, not one national approved book.",
    "officialDocuments": ["https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study/national-curriculum-in-england-science-programmes-of-study","https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study"],
"sequenceExtracted": {
      "jurisdiction": "England only; not UK-wide",
      "science": {
        "Years 1-2": ["Plants", "Animals including humans", "Everyday materials", "Seasonal changes (Year 1); living things and habitats, uses of everyday materials and additional life/material topics continue in Year 2"],
        "Years 3-4": ["Plants", "Animals including humans", "Rocks", "Light", "Forces and magnets", "Living things and their habitats", "States of matter", "Sound", "Electricity"],
        "Years 5-6": ["Living things and their habitats", "Animals including humans", "Properties and changes of materials", "Earth and space", "Forces", "Evolution and inheritance", "Electricity", "Light"],
        "Years 7-9 (KS3)": ["Biology, Chemistry and Physics disciplines; topic sequence is specified across key stage rather than fixed nationally by individual year"],
        "Years 10-11 (KS4)": ["Biology, Chemistry and Physics; approximately equal proportions required"]
      },
      "mathematics": {
        "Years 1-2": ["Number and place value", "Addition and subtraction", "Multiplication and division", "Fractions", "Measurement", "Geometry", "Statistics (as age-appropriate)"],
        "Years 3-6": ["Number and place value; four operations; fractions/decimals/percentages; measurement; geometry; statistics; algebra introduced in Year 6"],
        "Years 7-9": ["Number, algebra, ratio/proportion, geometry/measures, probability, statistics"],
        "Years 10-11": ["Builds on KS3 with number, algebra, ratio/proportion, geometry/measures, probability, statistics and problem solving"]
      },
      "sourceCaveat": "For Science, Years 1–6 are statutory year-by-year but schools have flexibility to sequence within the key stage; KS3/KS4 content is specified by key stage. Mathematics Years 1–6 is year-by-year; KS3/KS4 by key stage."
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
  country: "United Kingdom",
  gradeSequenceEvidence: "There is no single UK-wide school curriculum: England, Scotland, Wales and Northern Ireland have separate curriculum and qualification systems. Maintain four distinct jurisdiction maps and their own year/grade terminology.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.gov.uk/national-curriculum",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
