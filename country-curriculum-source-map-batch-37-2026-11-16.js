/**
 * CBE Nexus — Global curriculum source map
 * Batch 37: Turkmenistan, Tuvalu, Uganda, Ukraine, United Arab Emirates
 * Research date: 2026-11-16
 * Source mapping only. Chapter counts and 10,000-word completion are not asserted.
 */
export const curriculumSourceMapBatch37 = {
  batch: 37,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Turkmenistan",
      countryNumber: 176,
      authority: "Ministry of Education of Turkmenistan; National Institute of Education; State Publishing Service",
      authorityUrl: "https://education.gov.tm/",
      evidenceUrl: "https://turkmenistan.gov.tm/en/post/98238/biology-textbook-11th-grade-students-has-been-published",
      physicsGuideUrl: "https://turkmenistan.gov.tm/en/post/108859/methodological-guide-preparing-physics-lessons-grades-viix-has-been-published-turkmenistan",
      curriculumLevel: "National general secondary education; current grade-specific textbooks and methodological guides provide subject-level evidence",
      languageOfInstruction: ["Turkmen", "Russian in designated schools and classes"],
      subjects: {
        mathematics: { status: "national-secondary-subject; grade and language variants require textbook-by-textbook extraction" },
        biology: { status: "officially recommended Grade 11 General Biology textbook reported in 2025" },
        chemistry: { status: "secondary school subject evidenced by Ministry-recommended textbooks; current grade sequence pending" },
        physics: { status: "grades VII–X curriculum topics covered by official 2026 methodological guide" },
        integratedScience: { status: "early-grade integrated science structure not yet verified from current primary curriculum documents" }
      },
      mappingNotes: "Government education reporting confirms a Ministry-recommended Grade 11 General Biology textbook in Turkmen-language schools (2025), a 2026 physics lesson-planning guide covering all curriculum topics for Grades VII–X, and earlier grade-specific Chemistry, Physics and Biology textbooks. These reports establish subject presence, not a complete authoritative topic sequence. Verify the current Ministry-approved textbook edition, language of instruction, grade and any recent curriculum revisions before chapter mapping.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-government education publications evidence subject presence; full current syllabus and grade sequence extraction pending",
      seoTargets: ["Turkmenistan Grade 11 Biology curriculum", "Turkmenistan Physics Grades 7–10", "Turkmenistan Chemistry and Mathematics school syllabus"]
    },
    {
      country: "Tuvalu",
      countryNumber: 177,
      authority: "Ministry of Education, Youth and Sports (MEYS), Tuvalu",
      authorityUrl: "https://meys.gov.tv/",
      curriculumPortalUrl: "https://meys.gov.tv/education/curriculum",
      frameworkPdfUrl: "https://meys.gov.tv/images/curriculum/1._Revised_Tuvaulu_National_Curriculum_Policy_Framework_TNCPF.pdf",
      curriculumLevel: "Tuvalu National Curriculum and Policy Framework (TNCPF), from early childhood to Year 13",
      languageOfInstruction: ["Tuvaluan", "English"],
      subjects: {
        mathematics: { status: "explicit-learning-area-for-Years-1-to-13" },
        integratedScience: { status: "science learning area in national framework; detailed subject/grade progression requires PDF extraction" },
        biology: { status: "separate upper-secondary subject sequence not yet verified" },
        chemistry: { status: "separate upper-secondary subject sequence not yet verified" },
        physics: { status: "separate upper-secondary subject sequence not yet verified" }
      },
      mappingNotes: "The official framework supports coherent learning standards from ECCE to Year 13 and identifies Mathematics in Years 1–8 and 9–13. It specifies Tuvaluan and English as languages taught in all schools from early primary through Form 7. Extract the full Science learning-area outcomes and secondary subject/course details before assigning Biology, Chemistry and Physics chapters; do not infer separate sciences solely from the general framework.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-MEYS-framework-and-learning-area index found; science strand and secondary course extraction pending",
      seoTargets: ["Tuvalu national curriculum framework", "Tuvalu Mathematics Years 1–13", "Tuvalu Science curriculum"]
    },
    {
      country: "Uganda",
      countryNumber: 178,
      authority: "National Curriculum Development Centre (NCDC), Ministry of Education and Sports",
      authorityUrl: "https://ncdc.go.ug/",
      lowerSecondaryFrameworkUrl: "https://ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf",
      biologySyllabusUrl: "https://ncdc.go.ug/wp-content/uploads/2024/02/Biology_Syllabus_compressed.pdf",
      advancedSyllabusPortal: "https://ncdc.go.ug/books/?wbg_category_s=A-LEVEL+CURRICULUM+2025",
      curriculumLevel: "Competency-based lower-secondary curriculum (S1–S4) and revised Advanced Secondary curriculum (2025 onward)",
      languageOfInstruction: ["English; local-language provision applies in relevant primary contexts"],
      subjects: {
        mathematics: { status: "compulsory-lower-secondary-subject; advanced secondary syllabus listed by NCDC" },
        biology: { status: "separate four-year lower-secondary syllabus and 2025 advanced-secondary syllabus" },
        chemistry: { status: "separate lower-secondary subject and 2025 advanced-secondary syllabus" },
        physics: { status: "separate lower-secondary subject and advanced-secondary syllabus" },
        integratedScience: { status: "General Science option for learners with special educational needs; not a replacement for the regular separate sciences" }
      },
      mappingNotes: "NCDC's lower-secondary framework identifies Mathematics, Biology, Chemistry and Physics as compulsory at S1–S2 and core subjects at S3–S4; General Science is an alternative for learners with special educational needs. The NCDC portal also lists 2025 A-Level syllabuses and 2026 assessment guidance. Keep lower-secondary and advanced-secondary curriculum versions separate, and extract each syllabus' programme planner, topics, learning outcomes and assessment requirements before chapter creation.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-NCDC-framework-and-lower-secondary Biology syllabus and 2025 A-Level listing found; full subject-by-subject extraction pending",
      seoTargets: ["Uganda NCDC Biology syllabus", "Uganda Chemistry Physics syllabus 2025", "Uganda Mathematics lower secondary curriculum"]
    },
    {
      country: "Ukraine",
      countryNumber: 179,
      authority: "Ministry of Education and Science of Ukraine (МОН); Cabinet of Ministers of Ukraine",
      authorityUrl: "https://mon.gov.ua/",
      stateStandardsUrl: "https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/derzhavni-standarti",
      educationProgrammesUrl: "https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/osvitni-programi",
      upperSecondary2027Url: "https://mon.gov.ua/osvita-2/zagalna-serednya-osvita/osvitni-programi/modelni-navchalni-prohramy-dlia-10-12-klasiv-novoi-ukrainskoi-shkoly-profilna-shkola-z-2027-roku",
      curriculumLevel: "State standards for primary, basic secondary and specialised upper secondary; New Ukrainian School model programmes phased in from 2022; specialised 10–12 profile school from 2027",
      languageOfInstruction: ["Ukrainian; legally permitted minority-language arrangements apply in designated settings"],
      subjects: {
        mathematics: { status: "state-standard learning area and model subject programmes; profile-school programme transition from 2027" },
        biology: { status: "subject programmes available in basic secondary and specialised upper-secondary model programme list" },
        chemistry: { status: "subject programmes available in basic secondary and specialised upper-secondary model programme list" },
        physics: { status: "subject programmes available in basic secondary and specialised upper-secondary model programme list" },
        integratedScience: { status: "integrated natural-science courses and cross-disciplinary learning areas may apply by grade and school programme" }
      },
      mappingNotes: "The Ministry lists state standards for primary, basic secondary and profile secondary education. Model programmes for Grades 5–9 have been introduced progressively since 2022. The specialised 10–12 profile-school model programmes are for implementation from 2027; the Ministry's 2026 list includes Biology, Chemistry and Physics at basic and advanced levels. Do not present the 2027 upper-secondary curriculum as already implemented for all current cohorts. Record grade, programme, level and implementation year.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-MON state standards and phased programme index found; grade-level subject programme extraction pending",
      seoTargets: ["Ukraine New Ukrainian School curriculum", "Ukraine Biology Chemistry Physics model programmes", "Ukraine Mathematics state standard"]
    },
    {
      country: "United Arab Emirates",
      countryNumber: 180,
      authority: "UAE Ministry of Education; Education, Human Resources and Community Development Council; local education authorities",
      authorityUrl: "https://www.moe.gov.ae/",
      nationalCurriculumLegislationUrl: "https://uaelegislation.gov.ae/en/legislations/3966/download",
      studyPlan2026Url: "https://www.moe.gov.ae/en/guides/Pages/Study-Plan-for-the-2026-2027-Academic-Year-Ministry-Curriculum.aspx",
      cycle3PlanPdfUrl: "https://www.moe.gov.ae/en/guides/Documents/Study%20Plan%20for%20the%202026-2027%20Academic%20Year%20%28Ministry%20Curriculum%29/Study%20Plan%20for%20the%202026-2027%20Academic%20Year%20%28Ministry%20Curriculum%29%20EN.pdf",
      curriculumLevel: "National Ministry curriculum from Kindergarten to Grade 12; 2026–2027 Cycle 3 General and Advanced streams; international curricula also operate in private schools",
      languageOfInstruction: ["Arabic in government national-curriculum schools; English used for technical/scientific subjects as specified by policy and school implementation"],
      subjects: {
        mathematics: { status: "national-subject in General and Advanced streams" },
        integratedScience: { status: "Science in General Stream Grades 9–10 includes Biology, Chemistry and Physics domains" },
        biology: { status: "separate Advanced Stream subject in Grades 9–10; 2026–2027 Grade 11 compulsory under both streams" },
        chemistry: { status: "separate Advanced Stream subject in Grades 9–10; 2026–2027 Grade 11 compulsory under both streams" },
        physics: { status: "separate Advanced Stream subject in Grades 9–10; 2026–2027 Grade 11 compulsory under both streams" }
      },
      mappingNotes: "The 2026–2027 Ministry study plan applies to public and private schools implementing the Ministry curriculum. Its Cycle 3 guide differentiates General and Advanced streams: in Grades 9–10 the General stream has Science, while the Advanced stream has separate Physics, Chemistry and Biology; the 2026–2027 guide states all three sciences become compulsory in Grade 11 in both streams. The 2025 Federal Decree-Law establishes governance of the national curriculum and mandatory subjects even in private schools following other curricula. Do not conflate Ministry-curriculum schools with IB, British, American, Indian or other private-school curricula.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-MOE 2026–2027 study plans and 2025 curriculum-governance law found; detailed subject learning outcomes and textbook sequences require extraction",
      seoTargets: ["UAE Ministry curriculum 2026–2027", "UAE Grade 9 Biology Chemistry Physics", "UAE Mathematics General and Advanced streams"]
    }
  ],
  qualityRules: {
    doNotInventChapterCounts: true,
    chapterCountValueUntilPdfExtraction: null,
    requireGradeCohortTrackAndVersionMapping: true,
    distinguishIntegratedAndSeparateSciences: true,
    accountForRegionalOrSchoolLevelVariation: true,
    requireEffectiveDateForRevisedCurricula: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
