/* CBE Nexus — Belize curriculum sequence verification.
 * Canonical alphabetical country index: Belize (BLZ).
 * Review date: 2026-11-16.
 * Important distinction: national competency-based framework, current secondary
 * implementation/pilot status, and CXC regional examination syllabuses.
 */
export const country = {
  name: "Belize",
  isoAlpha3: "BLZ",
  reviewDate: "2026-11-16",
  authority: "Ministry of Education, Culture, Science and Technology (MoECST); Caribbean Examinations Council (CXC)",
  systemNotes: [
    "The Ministry's National Curriculum Framework (July 2022) groups learning into Key Learning Areas. Mathematics is its own KLA; Science and Technology is another. The framework promotes integration and cross-curricular connections rather than assuming four separate national lower-secondary syllabuses for Biology, Chemistry, Physics and Mathematics.",
    "The Ministry's National Curriculum Transformation page states that the National Competency-based Curriculum was developed and piloted after the 2021/22 learning-loss response. In 2023/24 it was implemented in primary levels while piloting began at secondary level; the Ministry page says lower-secondary piloting continues and gives an intended implementation date of 2024/25. Because this wording may not have been refreshed to reflect all 2026 implementation decisions, the exact 2026/27 rollout by grade and school must be confirmed before assigning a definitive sequence.",
    "The Ministry's secondary education overview describes four years of secondary education (Forms 1–4). Lower-secondary core courses usually include Mathematics and Integrated Science. Upper-secondary study has core subjects plus areas of specialisation, commonly Business, Science and Arts.",
    "At lower secondary, Biology, Chemistry and Physics should be mapped as strands/concepts within Integrated Science unless an official school or programme syllabus demonstrates separate subjects.",
    "At upper secondary, students may follow a Science concentration and sit CXC CSEC subject examinations. CSEC Biology, Chemistry and Physics are separate regional examination syllabuses; these are not automatically the same as Belize national classroom schemes of work.",
    "The July 2022 National Curriculum Framework's Level 5 (Lower Secondary) indicative timetable lists Geometry and Algebra under Mathematics and Science & Technology as an integrated subject. This is framework timetable evidence, not a detailed topic sequence.",
    "The Ministry homepage lists a Belize Education Sector Plan 2026–2030 and current education statistics uploads, but the curriculum framework and transformation page remain the primary sources used in this record. Further 2026/27 implementation circulars and updated secondary syllabuses should be collected."
  ],
  subjects: [
    {
      subject: "Biology",
      nationalCoverage: "Lower secondary: biology concepts belong within Integrated Science / Science and Technology in the competency-based framework, not a separately verified national Biology course. Upper secondary: specialist Biology may be offered through Science concentration and CXC CSEC.",
      sequenceStatus: "national integrated-science scope verified; detailed lower-secondary sequence and upper-secondary national programme pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The National Curriculum Framework places Science and Technology in Key Learning Area 5 and promotes integration.",
        "The Ministry's secondary overview lists Integrated Science among usual lower-secondary core courses and Science among common upper-secondary concentrations.",
        "CXC CSEC Biology is a separate regional examination syllabus and can be used as an upper-secondary examination pathway reference, not as proof of the national Form 1–4 teaching sequence."
      ],
      pending: ["Obtain current 2026/27 lower-secondary competency-based Science unit plans from the Ministry/501 Academy and extract biological strands in sequence.", "Confirm grade-by-grade implementation status of the lower-secondary curriculum transformation.", "Obtain official upper-secondary Biology course outline and CSEC syllabus alignment for participating schools.", "Do not assign separate national Biology chapters to Forms 1–4 without school/programme evidence."]
    },
    {
      subject: "Chemistry",
      nationalCoverage: "Lower secondary: chemistry concepts belong within Integrated Science / Science and Technology in the competency-based framework, not a separately verified national Chemistry course. Upper secondary: specialist Chemistry may be offered through Science concentration and CXC CSEC.",
      sequenceStatus: "national integrated-science scope verified; detailed lower-secondary sequence and upper-secondary national programme pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The National Curriculum Framework places Science and Technology in Key Learning Area 5 and promotes integration.",
        "The Ministry's secondary overview identifies Integrated Science as a usual lower-secondary core course and Science as an upper-secondary concentration.",
        "CXC CSEC Chemistry is a separate regional examination syllabus, not evidence of a uniform Belizean national chapter sequence."
      ],
      pending: ["Obtain 2026/27 lower-secondary Science unit plans and extract chemistry-related competencies in official order.", "Confirm current rollout by Form/grade and school.", "Obtain upper-secondary Chemistry programme and practical/laboratory requirements.", "Map CSEC Chemistry objectives separately from the national curriculum."]
    },
    {
      subject: "Physics",
      nationalCoverage: "Lower secondary: physics concepts belong within Integrated Science / Science and Technology in the competency-based framework, not a separately verified national Physics course. Upper secondary: specialist Physics may be offered through Science concentration and CXC CSEC.",
      sequenceStatus: "national integrated-science scope verified; detailed lower-secondary sequence and upper-secondary national programme pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The National Curriculum Framework places Science and Technology in Key Learning Area 5 and promotes integrated learning.",
        "The Ministry's secondary overview identifies Integrated Science as a usual lower-secondary core course and Science as a common upper-secondary concentration.",
        "CXC CSEC Physics is a regional examination syllabus; its topic order should not be represented as the national lower-secondary sequence."
      ],
      pending: ["Obtain current lower-secondary Science unit plans and extract physics-related competencies in order.", "Confirm 2026/27 competency-based implementation by grade and school.", "Obtain official upper-secondary Physics programme and practical assessment requirements.", "Map CSEC Physics as a distinct examination pathway."]
    },
    {
      subject: "Mathematics",
      nationalCoverage: "Distinct Key Learning Area and usual lower-secondary core subject. The 2022 framework's Level 5 indicative timetable specifies Geometry and Algebra under Mathematics. Upper-secondary Mathematics pathways and CSEC options require separate mapping.",
      sequenceStatus: "national subject and lower-secondary indicative content areas verified; full grade-by-grade topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedFrameworkContent: ["Geometry", "Algebra"],
      evidence: [
        "The National Curriculum Framework identifies Mathematics as Key Learning Area 2.",
        "The Level 5 (Lower Secondary) indicative timetable lists Geometry and Algebra, with four hours per week and 144 indicative hours per year.",
        "The Ministry's secondary education overview lists Mathematics among usual lower-secondary core courses."
      ],
      pending: ["Obtain official Mathematics unit plans for each lower-secondary teaching cycle and extract all topics/competencies in order.", "Confirm 2026/27 implementation by Form and school.", "Map upper-secondary Mathematics courses and CSEC syllabus alignment separately.", "Extract assessment standards, worked examples and problem-solving competencies."]
    }
  ],
  sourceRegister: [
    {
      title: "Belize National Curriculum Framework — July 2022",
      url: "https://www.moecst.gov.bz/wp-content/uploads/2022/07/National-Curriculum-Framework-Final-for-Website-July-2022.pdf",
      use: "Primary national framework; Section 8 identifies Key Learning Areas and Level 5 lower-secondary timetable. Mathematics is separate; Science and Technology is integrated."
    },
    {
      title: "MoECST — National Curriculum Transformation",
      url: "https://www.moecst.gov.bz/education-services/school-services/national-curriculum-transformation/",
      use: "Official description of competency-based curriculum development, primary implementation and lower-secondary piloting. Its stated rollout timeline should be cross-checked against current school-year circulars."
    },
    {
      title: "MoECST — Secondary Education",
      url: "https://www.moecst.gov.bz/education-sectors/secondary-education/",
      use: "Official overview: four-year secondary programme (Forms 1–4), lower-secondary Integrated Science and Mathematics, upper-secondary specialisations including Science, and CSEC assessment context."
    },
    {
      title: "MoECST — National Education Strategies and Frameworks",
      url: "https://www.moecst.gov.bz/national-education-strategies-and-frameworks/",
      use: "Official index of the National Curriculum Framework, National Student Assessment Policy and sector planning documents."
    },
    {
      title: "MoECST — Publications",
      url: "https://www.moecst.gov.bz/media/publications/",
      use: "Official repository for education statistics and current policy publications; current site lists 2024–2025 education quick facts."
    },
    {
      title: "MoECST — 501 Academy and curriculum access",
      url: "https://www.moecst.gov.bz/",
      use: "Official Ministry portal points teachers to 501 Academy as the learning hub and curriculum access route; unit plans should be retrieved there for detailed sequencing."
    },
    {
      title: "CXC — CSEC Biology",
      url: "https://www.cxc.org/subject/biology-csec/",
      use: "Regional upper-secondary examination syllabus reference; not a national Belize lower-secondary curriculum."
    },
    {
      title: "CXC — CSEC Chemistry",
      url: "https://www.cxc.org/subject/chemistry-csec/",
      use: "Regional upper-secondary examination syllabus reference; not a national Belize lower-secondary curriculum."
    },
    {
      title: "CXC — CSEC Physics",
      url: "https://www.cxc.org/subject/physics-csec/",
      use: "Regional upper-secondary examination syllabus reference; not a national Belize lower-secondary curriculum."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithNationalFrameworkEvidence: 4,
    subjectsWithLowerSecondaryIntegratedScienceScopeEvidence: 3,
    subjectsWithDetailedGradeByGradeTopicSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "national-framework-and-secondary-structure-verified; current-secondary-rollout-and-unit-sequence-extraction-pending",
    note: "The 2022 framework is an overarching framework and the Ministry transformation page reports lower-secondary piloting. Do not claim the full secondary competency-based curriculum is implemented in all schools in 2026/27 without current grade-level evidence. Keep integrated lower-secondary Science distinct from upper-secondary CSEC Biology, Chemistry and Physics."
  }

  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; current official topic documents and actual textbook contents require direct extraction",
  "sources": [],
  "finding": "No new verified topic sequence or official textbook chapter count is asserted in this evidence refresh. Preserve any jurisdiction, language, pathway and integrated-science distinctions already recorded in this file."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
};
