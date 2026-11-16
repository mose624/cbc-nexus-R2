/* CBE Nexus — Canada curriculum sequence verification
 * Reviewed: 2026-11-16 | Canonical project index position: 36
 * Canada has no single national school curriculum. Provinces and territories
 * govern their own curricula; this record is a jurisdiction map, not a
 * fabricated country-wide grade sequence or claim of completed long-form notes.
 */
export default {
  country: "Canada",
  isoAlpha3: "CAN",
  canonicalIndex: 36,
  reviewedOn: "2026-11-16",
  governance: {
    nationalCurriculum: false,
    responsibility: "Provincial and territorial education authorities establish their own curricula.",
    jurisdictions: [
      "Alberta","British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador",
      "Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan",
      "Northwest Territories","Nunavut","Yukon"
    ],
    reconciliationRule: "Maintain 13 jurisdiction-specific curriculum maps. Do not label one province's syllabus as Canada's national curriculum.",
    source: "Council of Ministers of Education, Canada (CMEC) and provincial/territorial ministry curriculum portals."
  },
  subjectOverview: {
    Biology: "Often integrated into elementary/lower-secondary Science; distinct senior-secondary Biology or Life Sciences courses vary by jurisdiction.",
    Chemistry: "Often integrated into elementary/lower-secondary Science; distinct senior-secondary Chemistry courses vary by jurisdiction.",
    Physics: "Often integrated into elementary/lower-secondary Science; distinct senior-secondary Physics courses vary by jurisdiction.",
    Mathematics: "A distinct subject across jurisdictions, with different strands, pathways, grade names and course sequences."
  },
  subjects: [
    {
      subject: "Biology",
      curriculumPosition: "Integrated within Science in many elementary and junior-secondary programmes; distinct senior-secondary courses include Biology, Life Sciences, and Anatomy and Physiology depending on jurisdiction.",
      verifiedExamples: [
        "British Columbia: Life Sciences 11 and Anatomy and Physiology 12.",
        "Saskatchewan: Biology 30.",
        "Ontario: Grade 9 Science includes biological concepts; specialist Biology courses are available in senior secondary."
      ],
      sequenceStatus: "PARTIAL — jurisdiction examples verified; no single Canadian Biology sequence exists.",
      chapterCount: null,
      pending: ["Extract Biology outcomes and course sequences separately for all 10 provinces, 3 territories and Quebec's distinct programme.", "Map grade/course codes, prerequisites, laboratory requirements and current approved resources.", "Keep integrated Science outcomes separate from specialist Biology courses."]
    },
    {
      subject: "Chemistry",
      curriculumPosition: "Integrated within general Science in many lower grades; specialist senior-secondary Chemistry courses are offered by several jurisdictions.",
      verifiedExamples: [
        "British Columbia: Chemistry 11 and Chemistry 12.",
        "Saskatchewan: Chemistry 30.",
        "Alberta: science curriculum includes chemistry concepts; senior high course pathways require separate mapping."
      ],
      sequenceStatus: "PARTIAL — jurisdiction examples verified; grade-by-grade national sequence does not exist.",
      chapterCount: null,
      pending: ["Extract provincial/territorial Chemistry course outcomes and prerequisites.", "Identify Chemistry 11/12, Chemistry 20/30 and other local course naming differences.", "Verify practical work, safety expectations, quantitative chemistry and textbook alignment."]
    },
    {
      subject: "Physics",
      curriculumPosition: "Integrated within general Science in many lower grades; specialist senior-secondary Physics courses are offered by several jurisdictions.",
      verifiedExamples: [
        "British Columbia: Physics 11 and Physics 12.",
        "Saskatchewan: Physics 30.",
        "Ontario: Grade 9 Science includes physical science concepts; senior-secondary Physics is a separate course."
      ],
      sequenceStatus: "PARTIAL — jurisdiction examples verified; grade-by-grade national sequence does not exist.",
      chapterCount: null,
      pending: ["Extract provincial/territorial Physics outcomes and prerequisites.", "Map local course labels and grade levels.", "Verify mechanics, energy, waves, electricity, modern physics and practical requirements only against each jurisdiction's current programme."]
    },
    {
      subject: "Mathematics",
      curriculumPosition: "A distinct subject from Kindergarten/primary through secondary, with differing strands and pathways across provinces and territories.",
      verifiedExamples: [
        "Common content strands across jurisdictions generally include number and operations, patterns and relations, geometry and measurement, and data management/probability.",
        "Saskatchewan senior-secondary pathways include Foundations of Mathematics, Pre-Calculus, Workplace and Apprenticeship Mathematics, and Calculus.",
        "Alberta has province-specific Mathematics curriculum and is renewing Grades 7–9 in phases."
      ],
      sequenceStatus: "PARTIAL — broad cross-jurisdiction strands and selected pathways verified; detailed grade/course progression requires separate jurisdiction files.",
      chapterCount: null,
      pending: ["Extract Mathematics outcomes by grade for each province and territory.", "Map academic, applied, workplace, foundations, pre-calculus and calculus pathways where they exist.", "Record prerequisites, assessment standards and local terminology."]
    }
  ],
  current2026Developments: [
    {
      jurisdiction: "Alberta",
      status: "2026/27 implementation and optional pilot/field-test phase",
      detail: "New social studies Grades 4–6 implementation; optional Grades 7–9 Mathematics piloting and Science field testing. Draft status must not be confused with fully implemented curriculum.",
      source: "https://www.alberta.ca/curriculum"
    },
    {
      jurisdiction: "Ontario",
      status: "Policy changes effective September 2026",
      detail: "Updated mandatory assessment and evaluation requirements for Grades 9–12; this is assessment policy, not a replacement of the subject curricula.",
      source: "https://www.ontario.ca/page/growing-success-assessment-evaluation-and-reporting-ontario-schools-kindergarten-grade-12"
    },
    {
      jurisdiction: "Northwest Territories",
      status: "Multi-year JK–12 curriculum renewal",
      detail: "The 2026–27 implementation schedule includes finalized Grades 7–9 curriculum and draft Grade 12 curriculum; confirm the territory's current phase before mapping.",
      source: "https://www.ece.gov.nt.ca/en/curriculumrenewal"
    }
  ],
  sourceRegister: [
    {
      title: "Council of Ministers of Education, Canada — PCAP 2023 Mathematics Framework",
      url: "https://www.cmec.ca/docs/pcap/pcap2023/PCAP-2023_Framework_FINAL_EN.pdf",
      use: "Explains provincial/territorial variation and common mathematics strands."
    },
    {
      title: "British Columbia Curriculum — Science",
      url: "https://www.curriculum.gov.bc.ca/curriculum/science",
      use: "Grade-specific K–9 Science and senior-secondary Biology-related, Chemistry and Physics courses."
    },
    {
      title: "Alberta — K to 12 Curriculum Renewal",
      url: "https://www.alberta.ca/curriculum",
      use: "Current provincial curriculum and 2026/27 pilot/implementation status."
    },
    {
      title: "Alberta — Science curriculum",
      url: "https://www.alberta.ca/curriculum-science",
      use: "Integrated science content, grade snapshots and draft Grades 7–9 changes."
    },
    {
      title: "Saskatchewan Curriculum",
      url: "https://curriculum.gov.sk.ca/",
      use: "Official grade and senior-secondary course listings, including Biology 30, Chemistry 30, Physics 30 and Mathematics pathways."
    },
    {
      title: "Ontario — Secondary school courses and related procedures",
      url: "https://www.ontario.ca/document/ontario-schools-kindergarten-grade-12-policy-and-program-requirements/secondary-school-courses-and-related-procedures",
      use: "Ontario secondary course organisation by discipline, grade and course type."
    },
    {
      title: "Ontario — Growing Success policy updates",
      url: "https://www.ontario.ca/page/growing-success-assessment-evaluation-and-reporting-ontario-schools-kindergarten-grade-12",
      use: "2026 assessment policy update; not treated as a curriculum replacement."
    },
    {
      title: "Northwest Territories — JK–12 Curriculum Renewal",
      url: "https://www.ece.gov.nt.ca/en/curriculumrenewal",
      use: "Territorial phased implementation schedule."
    }
  ],
  reconciliationRules: [
    "Canada is not represented by one national curriculum; split the data by province and territory.",
    "Do not assume the same grade, course code, strand, sequence or prerequisite across jurisdictions.",
    "Keep Quebec's programme and terminology distinct rather than forcing it into another province's grade map.",
    "Separate integrated elementary/junior-secondary Science from specialist Biology, Chemistry and Physics courses.",
    "Distinguish draft, pilot, field-test and implemented curricula.",
    "Do not treat strands, course codes or textbook chapter counts as interchangeable."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsReviewed: 4,
    jurisdictionsIdentified: 13,
    jurisdictionSequencesFullyReconciled: 0,
    officialChapterCountsVerified: 0,
    longFormCbeNexusChaptersWritten: 0,
    status: "COUNTRY GOVERNANCE MAP CREATED — create and verify separate curriculum sequence records for each province and territory."
  }

  evidenceRefresh_2026_11_16: {
  "status": "13 provincial/territorial jurisdictions retained; no national sequence or chapter count asserted",
  "sources": [
    "https://www.cmec.ca/",
    "https://www.curriculum.gov.bc.ca/curriculum/science",
    "https://curriculum.gov.sk.ca/"
  ],
  "finding": "Maintain separate province/territory curriculum maps; the existing record correctly treats Canada as decentralized and separates integrated Science from senior specialist courses."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish actual contents-page chapter sequence." }
};
