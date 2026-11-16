/**
 * CBE Nexus — Global curriculum source map
 * Batch 36: Togo, Tonga, Trinidad and Tobago, Tunisia, Türkiye
 * Research date: 2026-11-16
 * Source mapping only. Chapter counts and 10,000-word completion are not asserted.
 */
export const curriculumSourceMapBatch36 = {
  batch: 36,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Togo",
      countryNumber: 171,
      authority: "Ministère de l'Éducation nationale; Centre national d'évaluation des apprentissages (CNEA)",
      authorityUrl: "https://education.gouv.tg/",
      secondaryLearningPortalUrl: "https://ecole.gouv.tg/lycee/course/index.php?categoryid=12",
      curriculumLevel: "National primary and secondary curricula; curriculum review and learning-assessment development underway",
      languageOfInstruction: ["French"],
      subjects: {
        mathematics: { status: "named-subject-in-secondary-curriculum-and-assessment-review" },
        biology: { status: "listed-through-Sciences-de-la-Vie-et-de-la-Terre (SVT) in secondary learning portal" },
        chemistry: { status: "combined-with-physics-in-Physique-Chimie et Technologie at lower-secondary level" },
        physics: { status: "combined-with-chemistry-in-Physique-Chimie et Technologie at lower-secondary level" },
        integratedScience: { status: "primary science and lower-secondary integrated/combined science content; exact grade mapping pending" }
      },
      mappingNotes: "The Ministry reported that a November 2025 analysis of secondary-cycle-1 curricula covered Mathematics and Physique-Chimie et Technologie, following earlier preschool and primary curriculum analyses. The official secondary learning portal lists Mathematics, Physique-Chimie and Sciences de la Vie et de la Terre as separate course areas. Preserve the lower-secondary combined Physics-Chemistry course and the secondary SVT pathway; extract approved programme documents and grade-by-grade progressions before chapter sequencing.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-Ministry-curriculum-review-and-secondary-learning-portal-found; detailed syllabus extraction pending",
      seoTargets: ["Togo programme scolaire mathématiques", "Togo SVT programme lycée", "Togo physique chimie curriculum"]
    },
    {
      country: "Tonga",
      countryNumber: 172,
      authority: "Ministry of Education and Training, Government of Tonga",
      authorityUrl: "https://www.education.gov.to/",
      curriculumFrameworkUrl: "https://www.education.gov.to/media/attachments/2025/06/09/curriculum-framework_2023_final_final_cabinet-approved1.pdf",
      minimumServiceStandardsUrl: "https://www.education.gov.to/media/attachments/2026/04/30/met-2025-minimum-service-standards-final-final.pdf",
      curriculumLevel: "Revised 2022 competency-based curriculum framework; core-subject framework for Classes 1–8; secondary subject syllabuses and materials vary by form",
      languageOfInstruction: ["Tongan", "English"],
      subjects: {
        mathematics: { status: "named-core-subject-in-Classes-1-to-8-framework-and-service-standards" },
        integratedScience: { status: "named-core-subject-in-Classes-1-to-8-framework-and-service-standards" },
        biology: { status: "separate-secondary-subject-sequence-not-yet-verified" },
        chemistry: { status: "separate-secondary-subject-sequence-not-yet-verified" },
        physics: { status: "separate-secondary-subject-sequence-not-yet-verified" }
      },
      mappingNotes: "The Cabinet-approved January 2023 framework covers core subjects at Classes 1–8 and describes a revised competency-based curriculum. The Ministry's 2025 minimum-service standards list Mathematics and Science syllabuses, teacher guides and pupil books for Classes 1–6 and Forms 1–2. Do not assume that the primary/junior framework establishes separate Biology, Chemistry and Physics at all levels; obtain current upper-secondary syllabuses and map by form and language.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-Ministry-framework-and-2025-service-standards-found; subject syllabus and secondary pathway extraction pending",
      seoTargets: ["Tonga curriculum framework mathematics", "Tonga Science syllabus", "Tonga secondary Biology Chemistry Physics"]
    },
    {
      country: "Trinidad and Tobago",
      countryNumber: 173,
      authority: "Ministry of Education, Trinidad and Tobago",
      authorityUrl: "https://moe.gov.tt/",
      primaryCurriculumUrl: "https://moe.gov.tt/curriculum-guides/",
      lowerSecondaryCurriculumUrl: "https://www.moe.gov.tt/curriculumguidesforsecondaryschool/",
      curriculumFrameworkUrl: "https://storage.moe.gov.tt/corporate/2023/02/NCSE-Integrated-Science-Curriculum-Guide.pdf",
      curriculumLevel: "Primary curriculum guides and national lower-secondary guides for Forms 1–3; upper-secondary subject pathways require separate examination/curriculum mapping",
      languageOfInstruction: ["English"],
      subjects: {
        mathematics: { status: "official-primary-and-lower-secondary-curriculum-guide" },
        integratedScience: { status: "official-primary-Science-and-lower-secondary-Integrated-Science-guides" },
        biology: { status: "upper-secondary subject syllabus must be mapped separately; not a standalone lower-secondary subject in cited guides" },
        chemistry: { status: "upper-secondary subject syllabus must be mapped separately; lower-secondary content is integrated" },
        physics: { status: "upper-secondary subject syllabus must be mapped separately; lower-secondary content is integrated" }
      },
      mappingNotes: "The Ministry's primary curriculum guides list Mathematics and Science. Its lower-secondary page identifies ten compulsory subjects for Forms 1–3 and explicitly lists Integrated Science and Mathematics. This means lower-secondary science should be mapped as integrated science, not as three invented separate subjects. Upper-secondary Biology, Chemistry and Physics syllabuses require separate official examination or curriculum source verification before mapping.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-Ministry-primary-and-Forms-1-to-3-curriculum-guides-found; upper-secondary syllabus extraction pending",
      seoTargets: ["Trinidad and Tobago lower secondary Integrated Science", "Trinidad Mathematics curriculum guide", "Trinidad CSEC Biology Chemistry Physics syllabus"]
    },
    {
      country: "Tunisia",
      countryNumber: 174,
      authority: "Ministère de l'Éducation, République tunisienne; Direction générale des programmes et de la formation continue",
      authorityUrl: "https://education.gov.tn/?lang=fr",
      officialProgrammesUrl: "https://education.gov.tn/?lang=fr&s=%D8%A7%D9%84%D8%A8%D8%B1%D8%A7%D9%85%D8%AC+%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9",
      curriculumLevel: "National basic and secondary education programmes; secondary programmes organised by year and baccalaureate section",
      languageOfInstruction: ["Arabic", "French is used in scientific/technical learning and resources in relevant programmes"],
      subjects: {
        mathematics: { status: "official-subject-with-section-specific-secondary-programmes" },
        biology: { status: "Sciences de la Vie et de la Terre (SVT) subject in secondary pathways" },
        chemistry: { status: "part of Sciences Physiques in basic education and secondary; section-specific content requires extraction" },
        physics: { status: "part of Sciences Physiques in basic education and secondary; section-specific content requires extraction" },
        integratedScience: { status: "primary Sciences naturelles; lower-secondary Physics and Life/Earth Sciences appear as distinct science areas" }
      },
      mappingNotes: "The Ministry portal provides an official-programmes archive and 2025–2026/2026–2027 school and examination notices. Its programme structure distinguishes primary natural sciences, lower-secondary Mathematics and Physical Sciences, and secondary Mathematics, Physical Sciences and Life/Earth Sciences, with programme choices by baccalaureate section. The Ministry also publishes reduced-programme and textbook notices, so confirm the academic year and section before using a syllabus. Do not merge SVT and Physical Sciences.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-Ministry-programmes-and-current-year-notices-found; current detailed programme files require extraction",
      seoTargets: ["Tunisie programmes officiels mathématiques", "Tunisie sciences physiques SVT lycée", "programme officiel secondaire Tunisie"]
    },
    {
      country: "Türkiye",
      countryNumber: 175,
      authority: "Ministry of National Education (Millî Eğitim Bakanlığı, MEB); Board of Education and Discipline (Talim ve Terbiye Kurulu)",
      authorityUrl: "https://www.meb.gov.tr/",
      curriculumPortalUrl: "https://mufredat.meb.gov.tr/programlar.aspx",
      maarifModelUrl: "https://tymm.meb.gov.tr/",
      curriculumLevel: "Türkiye Yüzyılı Maarif Modeli (TYMM), approved in 2024; subject programmes and revisions listed for multiple grade bands, including 2026 editions",
      languageOfInstruction: ["Turkish"],
      subjects: {
        mathematics: { status: "official-subject-programmes-listed-for-primary-and-secondary; 2024 and 2026 versions appear in portal" },
        biology: { status: "separate official secondary subject programme; 2024 and 2026 versions listed for Grades 9–12" },
        chemistry: { status: "separate official secondary subject programme; 2024 and 2026 versions listed for Grades 9–12" },
        physics: { status: "separate official secondary subject programme; 2024 and 2026 versions listed for Grades 9–12" },
        integratedScience: { status: "Fen Bilimleri is the integrated science subject in basic education; secondary sciences are separate subjects" }
      },
      mappingNotes: "MEB's official curriculum portal lists TYMM Biology, Physics, Chemistry and Mathematics programmes, including 2024 and 2026 editions for secondary education. The 2024 model includes primary Mathematics and integrated Fen Bilimleri for Grades 3–8, while secondary Biology, Physics and Chemistry are separate subjects. Preserve programme edition, grade, school type and transition year: the portal also retains older and specialist science-high-school programmes. Do not treat all listed versions as interchangeable.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-MEB-curriculum-portal-and-TYMM-subject-index-found; programme PDFs and grade-level transition details require extraction",
      seoTargets: ["Türkiye Maarif Modeli mathematics curriculum", "Türkiye biology chemistry physics curriculum", "Türkiye Fen Bilimleri curriculum"]
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
