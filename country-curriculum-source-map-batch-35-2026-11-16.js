/**
 * CBE Nexus — Global curriculum source map
 * Batch 35: Syria, Taiwan, Tajikistan, Thailand, Timor-Leste
 * Research date: 2026-11-16
 * Source mapping only. Chapter counts and 10,000-word completion are not asserted.
 */
export const curriculumSourceMapBatch35 = {
  batch: 35,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Syria",
      countryNumber: 166,
      authority: "Ministry of Education, Syrian Arab Republic",
      authorityUrl: "https://moed.gov.sy/",
      currentCurriculumEvidenceUrl: "https://sana.sy/en/education/2340671/",
      frameworkUpdateUrl: "https://sana.sy/en/education/2355955/",
      curriculumLevel: "Unified national school curriculum for 2026–2027; Damascus curriculum used in 2025–2026 remains the nationwide basis while new curriculum is developed",
      languageOfInstruction: ["Arabic"],
      subjects: {
        mathematics: { status: "national-subject; current grade-specific syllabus extraction pending" },
        integratedScience: { status: "grade-specific science curriculum extraction pending" },
        biology: { status: "secondary subject sequence to verify from current official textbook/syllabus" },
        chemistry: { status: "secondary subject sequence to verify from current official textbook/syllabus" },
        physics: { status: "secondary subject sequence to verify from current official textbook/syllabus" }
      },
      mappingNotes: "For 2026–2027, the Ministry announced that the Damascus curriculum used in 2025–2026 would be applied across all governorates. The Ministry has completed national standards for a new curriculum and is moving to textbook and materials development; the new curriculum is not to be treated as already fully implemented. The Ministry clarified in November 2026 that the earlier amendments were limited, and the National General Curriculum Framework had been completed. Map the currently adopted grade textbooks separately from the forthcoming framework and any exceptional examination arrangements.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "current-national-rollout-and-framework-status-reported-by-state-news-agency; ministry textbook/syllabus files require extraction",
      seoTargets: ["Syria 2026 national curriculum", "Syria secondary Biology Chemistry Physics", "Syria Mathematics school syllabus"]
    },
    {
      country: "Taiwan",
      countryNumber: 167,
      authority: "Ministry of Education (MOE); National Academy for Educational Research (NAER)",
      authorityUrl: "https://www.naer.edu.tw/",
      officialGuidelinesUrl: "https://www.naer.edu.tw/PageSyllabus?fid=148",
      scienceCurriculumGuideUrl: "https://www.naer.edu.tw/upload/1/16/doc/2064/%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%B8%E9%A0%98%E5%9F%9F%E8%AA%B2%E7%A8%8B%E6%89%8B%E5%86%8A%28%E5%AE%9A%E7%A8%BF%E7%89%88%29.pdf",
      curriculumLevel: "12-Year Basic Education Curriculum Guidelines; elementary, junior-high and senior-high stages; guidelines implemented from August 2022",
      languageOfInstruction: ["Mandarin Chinese; language arrangements may vary for indigenous, local and other language programmes"],
      subjects: {
        mathematics: { status: "official-curriculum-domain-with-separate-guidelines" },
        integratedScience: { status: "official-Natural-Sciences-domain-in-elementary-and-junior-high-stages" },
        biology: { status: "junior-high content within Natural Sciences; separately named senior-high subject and electives" },
        chemistry: { status: "junior-high content within Natural Sciences; separately named senior-high subject and electives" },
        physics: { status: "junior-high content within Natural Sciences; separately named senior-high subject and electives" }
      },
      mappingNotes: "NAER hosts the officially issued 12-Year Basic Education Guidelines and subject-domain documents. In junior high, Natural Sciences integrates biology, physics/chemistry and earth science content; the official curriculum guide gives indicative allocations across those strands. Senior-high compulsory Natural Sciences includes Physics, Chemistry, Biology and Earth Science, with deeper elective courses. Map by educational stage and course level; do not treat all science strands as separate junior-high subjects.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-NAER-guidelines-and-science-curriculum-guide-found; detailed content-code extraction pending",
      seoTargets: ["Taiwan 12-year curriculum Mathematics", "Taiwan Natural Sciences curriculum", "Taiwan senior high Biology Chemistry Physics"]
    },
    {
      country: "Tajikistan",
      countryNumber: 168,
      authority: "Ministry of Education and Science of the Republic of Tajikistan; Government of the Republic of Tajikistan",
      authorityUrl: "https://maorif.tj/",
      stateStandardUrl: "https://mmih.adlia.tj/SEARCH/DocumentView?DocumentId=125444",
      curriculumLevel: "State Standard of General Education, approved by Government Resolution No. 494 of 1 August 2015, with amendments including 27 July 2024",
      languageOfInstruction: ["Tajik", "Russian and other permitted language-of-instruction arrangements in relevant schools"],
      subjects: {
        mathematics: { status: "subject-standard-required-under-national-state-standard" },
        integratedScience: { status: "subject and stage structure must be taken from approved curriculum plans" },
        biology: { status: "subject-standard-required; obtain current subject standard and grade programme" },
        chemistry: { status: "subject-standard-required; obtain current subject standard and grade programme" },
        physics: { status: "subject-standard-required; obtain current subject standard and grade programme" }
      },
      mappingNotes: "The ADLIA legal database identifies the State Standard of General Education as active, approved by Resolution No. 494 and amended in 2018 and 2024. It defines the role of subject educational standards, including aims, structure, core content, allocated teaching time and minimum learner outcomes. The framework is not a substitute for the individual subject standards and annual curriculum plans. Extract the current Tajik-language (and where applicable Russian-language) subject standards and confirm the effective school year before chapter mapping.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "active-government-state-standard-found; individual subject standards and grade plans require extraction",
      seoTargets: ["Tajikistan state education standard", "Tajikistan Biology Chemistry Physics curriculum", "Tajikistan Mathematics syllabus"]
    },
    {
      country: "Thailand",
      countryNumber: 169,
      authority: "Ministry of Education; Office of the Basic Education Commission (OBEC); Office of the Education Council (ONEC)",
      authorityUrl: "https://www.moe.go.th/",
      obecCurriculumUrl: "https://www.academic.obec.go.th/web/page/130",
      coreCurriculumPdfUrl: "https://academic.obec.go.th/web/images/document/1559878841_d_1.pdf",
      sectorReviewUrl: "https://backoffice.onec.go.th/uploads/Book/2184-file.pdf",
      curriculumLevel: "Basic Education Core Curriculum B.E. 2551 (2008), with Mathematics and Science standards revised in B.E. 2560 (2017); new B.E. 2568 (2025) early-primary curriculum introduced in ready and willing schools",
      languageOfInstruction: ["Thai; approved bilingual and minority-language programmes may apply"],
      subjects: {
        mathematics: { status: "official-learning-area; 2017 revised standards and indicators; early-primary 2025 curriculum adoption is school-dependent" },
        integratedScience: { status: "official-science-learning-area; 2017 revised standards and indicators; early-primary 2025 curriculum adoption is school-dependent" },
        biology: { status: "science strand/content; separate upper-secondary course pathways and standards require extraction" },
        chemistry: { status: "science strand/content; separate upper-secondary course pathways and standards require extraction" },
        physics: { status: "science strand/content; separate upper-secondary course pathways and standards require extraction" }
      },
      mappingNotes: "The 2008 Basic Education Core Curriculum remains the broad national framework for primary and secondary, with Mathematics and Science standards revised in 2017. ONEC's 2025 education review reports a new 2025 primary curriculum for Grades 1–3 beginning in willing/ready schools from May 2025; it is not safe to assume universal adoption. OBEC also maintains a separate historical curriculum archive, so check current status before using legacy documents. Map school adoption, grade, learning standards and upper-secondary science course separately.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-OBEC-framework-and-government-education-review-found; school-level 2025 adoption and subject standards require verification",
      seoTargets: ["Thailand Basic Education Core Curriculum", "Thailand 2025 primary curriculum", "Thailand Science Mathematics Biology Chemistry Physics syllabus"]
    },
    {
      country: "Timor-Leste",
      countryNumber: 170,
      authority: "Ministry of Education, Timor-Leste; Office for Curriculum Assessment, Development and Pedagogical Resources",
      authorityUrl: "https://moe.gov.tl/en/national-curriculum/",
      basicSchoolUrl: "https://moe.gov.tl/en/basic-school/",
      reformUrl: "https://moe.gov.tl/en/curriculum-reform/",
      curriculumLevel: "Nine-year compulsory basic education in three cycles; general secondary Grades 10–12 with science and technology or humanities/social-sciences specialisation",
      languageOfInstruction: ["Tetum", "Portuguese"],
      subjects: {
        mathematics: { status: "core-national-basic-education-subject; official exercise books and teaching materials listed" },
        integratedScience: { status: "science included as a core subject area in basic education; cycle-specific sequence to extract" },
        biology: { status: "secondary science-and-technology pathway; detailed syllabus pending" },
        chemistry: { status: "secondary science-and-technology pathway; detailed syllabus pending" },
        physics: { status: "secondary science-and-technology pathway; detailed syllabus pending" }
      },
      mappingNotes: "The Ministry defines basic education as nine compulsory years across three cycles: Grades 1–4, 5–6 and 7–9. Grades 10–12 general secondary combine a common core with specialisation in science and technology or social sciences and humanities. The 2015 basic curriculum reform covered the first and second cycles, with Tetum as the initial language of literacy/instruction and Portuguese introduced progressively. The Ministry states that alignment of third-cycle and secondary curricula is ongoing. Map cycle and pathway carefully; do not assume one uniform science sequence across all nine basic grades.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-Ministry-national-curriculum-and-cycle-structure-found; detailed cycle and secondary syllabus files require extraction",
      seoTargets: ["Timor-Leste national curriculum", "Timor-Leste Mathematics and Science syllabus", "Timor-Leste secondary science and technology"]
    }
  ],
  qualityRules: {
    doNotInventChapterCounts: true,
    chapterCountValueUntilPdfExtraction: null,
    requireGradeCohortAndTrackMapping: true,
    distinguishIntegratedAndSeparateSciences: true,
    accountForRegionalOrSchoolLevelVariation: true,
    requireEffectiveDateForRevisedCurricula: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
