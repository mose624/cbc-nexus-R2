/**
 * CBE Nexus — Global curriculum source map
 * Batch 39: Venezuela, Vietnam, Yemen, Zambia, Zimbabwe
 * Research date: 2026-11-16
 * Source mapping only. Chapter counts and 10,000-word completion are not asserted.
 */
export const curriculumSourceMapBatch39 = {
  batch: 39,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Venezuela",
      countryNumber: 186,
      authority: "Ministerio del Poder Popular para la Educación (MPPE)",
      authorityUrl: "https://www.mppe.gob.ve/",
      naturalSciencesProgrammeUrl: "https://www.mppe.gob.ve/media/filer_public/0e/ea/0eea1db3-1d11-4c67-9bf1-80bcb4124951/ciencias_naturales.pdf",
      mathematicsProgrammeUrl: "https://www.mppe.gob.ve/media/filer_public/87/aa/87aaac40-b5d3-4f9e-8327-04a6ff93658a/matematica.pdf",
      curriculumLevel: "Educación Media; MPPE programme documents and content-review process must be distinguished from formally approved final curriculum",
      languageOfInstruction: ["Spanish; indigenous-language and intercultural bilingual provisions apply in relevant communities"],
      subjects: {
        mathematics: { status: "MPPE Educación Media programme document identifies Geometry, Arithmetic, Algebra, Statistics and Probability" },
        biology: { status: "Natural Sciences programme states general science in Years 1–2 and discipline-specific Biology from Year 3" },
        chemistry: { status: "Natural Sciences programme states discipline-specific Chemistry from Year 3" },
        physics: { status: "Natural Sciences programme states discipline-specific Physics from Year 3" },
        integratedScience: { status: "general Natural Sciences approach in first two years of Educación Media" }
      },
      mappingNotes: "The MPPE Natural Sciences document describes general Natural Sciences in the first and second years, with Biology, Chemistry, Physics and Earth Sciences deepened as separate disciplines from the third year. The Mathematics document describes Geometry, Arithmetic, Algebra, Statistics and Probability. Caution: MPPE's July 2025 announcement explicitly called its content-ordering documents proposals under consultation, not a new final curriculum; the Ministry said they would be applied for a school year and revised. Record document status and cohort, and confirm the current approved version before treating consultation materials as binding syllabus.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official MPPE subject documents located; consultation and approval status requires confirmation before final chapter sequence",
      seoTargets: ["Venezuela Educación Media Biology Chemistry Physics", "Venezuela Mathematics curriculum", "Venezuela Ciencias Naturales programme"]
    },
    {
      country: "Vietnam",
      countryNumber: 187,
      authority: "Ministry of Education and Training (MOET), Socialist Republic of Vietnam",
      authorityUrl: "https://moet.gov.vn/",
      generalProgrammeUrl: "https://moet.gov.vn/content/tintuc/Lists/News/Attachments/8421/chuong-trinh-tong-the-ctgdpt-2018.pdf",
      consolidatedCircularUrl: "https://moet.gov.vn/content/vanban/Lists/VBPQ/Attachments/1453/vbhn-322018-202021-ttbgddt-trinh-ky-xt.pdf",
      curriculumLevel: "2018 General Education Programme (CTGDPT 2018), issued under Circular 32/2018/TT-BGDDT and amended by Circular 20/2021/TT-BGDDT; phased rollout completed through upper secondary",
      languageOfInstruction: ["Vietnamese; ethnic-minority language instruction and support may be provided under applicable policy"],
      subjects: {
        mathematics: { status: "core mathematics education area throughout general education" },
        biology: { status: "separate upper-secondary subject within Natural Sciences subject group" },
        chemistry: { status: "separate upper-secondary subject within Natural Sciences subject group" },
        physics: { status: "separate upper-secondary subject within Natural Sciences subject group" },
        integratedScience: { status: "Natural Science is an integrated compulsory subject at lower secondary; upper secondary offers differentiated discipline choices" }
      },
      mappingNotes: "The 2018 General Education Programme organizes education by subject groups and stages. Natural Science is an integrated compulsory lower-secondary subject; at upper-secondary level, Physics, Chemistry and Biology are distinct elective subjects in the Natural Sciences group, alongside Mathematics. Use MOET's consolidated circular text, including its 2021 amendment, and extract the individual subject programmes and required outcomes by grade. Do not project the upper-secondary separate-science structure into lower secondary.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official MOET general programme and consolidated legal circular identified; detailed subject programme extraction pending",
      seoTargets: ["Vietnam CTGDPT 2018 Mathematics curriculum", "Vietnam integrated Natural Science lower secondary", "Vietnam upper secondary Biology Chemistry Physics syllabus"]
    },
    {
      country: "Yemen",
      countryNumber: 188,
      authority: "Ministry of Education and local education offices; curriculum and textbook availability may differ across administrative areas",
      nationalElearningPortalUrl: "https://e-learning-moe.edu.ye/book.php",
      hadramoutCurriculumPortalUrl: "https://meoh.gov.ye/services/subjects/",
      curriculumLevel: "Basic education Grades 1–9 and secondary Grades 10–12/13 terminology varies by source; verify current local authority and edition",
      languageOfInstruction: ["Arabic"],
      subjects: {
        mathematics: { status: "grade-specific Mathematics textbooks listed in official Hadramout education-office portal" },
        integratedScience: { status: "grade-specific Science textbooks listed for basic education in Hadramout portal" },
        biology: { status: "separate secondary Biology textbook listed for first secondary year in Hadramout portal" },
        chemistry: { status: "separate secondary Chemistry textbook listed for first secondary year in Hadramout portal" },
        physics: { status: "separate secondary Physics textbook listed for first secondary year in Hadramout portal" }
      },
      mappingNotes: "The Hadramout Governorate Ministry education-office portal lists grade-by-grade Mathematics and Science textbooks for basic grades, and separate Biology, Chemistry and Physics textbooks for the first secondary year. A national e-learning portal is also identified by the Ministry's education-media channel. Yemen's divided administrative context means a regional portal cannot establish universal nationwide implementation. Treat Hadramout as a clearly labelled regional source, retrieve current files and verify textbook editions with the relevant local education authority before extending the mapping to other governorates.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "regional official education-office textbook index located; nationwide curriculum equivalence and current editions require verification",
      seoTargets: ["Yemen school Mathematics Science textbooks by grade", "Yemen secondary Biology Chemistry Physics", "Yemen Ministry e-learning curriculum"]
    },
    {
      country: "Zambia",
      countryNumber: 189,
      authority: "Ministry of Education; Curriculum Development Centre (CDC); Examinations Council of Zambia",
      ministryUrl: "https://www.edu.gov.zm/",
      curriculumFrameworkUrl: "https://library.cdcrepository.info/general-resource.php?id=1",
      finalizedSyllabiUrl: "https://www.edu.gov.zm/?page_id=8082",
      curriculumDirectorateUrl: "https://www.edu.gov.zm/?page_id=1142",
      chemistrySyllabusUrl: "https://www.edu.gov.zm/wp-content/uploads/2025/04/CHEMISTRY-SYLLABUS.pdf",
      curriculumLevel: "2023 Zambia Education Curriculum Framework; competence-based curriculum transition phased; secondary reorganized into Forms and pathway choices",
      languageOfInstruction: ["English under the 2023 framework; local languages remain relevant to foundation learning and multilingual contexts"],
      subjects: {
        mathematics: { status: "official Form 1–4 Mathematics I and Mathematics II syllabuses listed by CDC" },
        biology: { status: "official Form 1–4 Biology syllabus and natural-sciences pathway subject" },
        chemistry: { status: "official Form 1–4 Chemistry syllabus; 2024 CDC document" },
        physics: { status: "official Form 1–4 Physics syllabus listed by CDC" },
        integratedScience: { status: "primary/basic science progression to be mapped from grade-level syllabuses; secondary natural-sciences pathway uses separate disciplines" }
      },
      mappingNotes: "The Ministry's CDC syllabus pages list Form 1–4 Biology, Chemistry, Physics and Mathematics I/II. The official Chemistry syllabus is labelled Secondary Education Ordinary Level, Form 1–4, developed in 2024. The 2023 framework is being implemented in phases, and the Ministry announced distribution of syllabuses and framework materials. The Ministry's November 2026 update also announces A-Level education under the new framework. Preserve 2013 and 2023 curriculum versions, Forms/Grades terminology, pathways and cohort implementation dates; do not assume all schools or forms transitioned simultaneously.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official Ministry framework and CDC subject-syllabus listings located; grade-by-grade extraction and cohort transition audit pending",
      seoTargets: ["Zambia 2023 curriculum Form 1–4 Biology Chemistry Physics", "Zambia Mathematics I Mathematics II syllabus", "Zambia competence-based curriculum A-Level"]
    },
    {
      country: "Zimbabwe",
      countryNumber: 190,
      authority: "Ministry of Primary and Secondary Education (MoPSE); Curriculum Development and Technical Services",
      ministryUrl: "https://www.mopse.gov.zw/",
      curriculumFrameworkPortalUrl: "https://www.mopsemashwest.gov.zw/Site/Curriculum_Framework.html",
      biologyForms34SyllabusUrl: "https://sytbay.co.zw/?slc_download_id=50176&slc_file=wpdm-46249-1",
      curriculumLevel: "Heritage-Based Curriculum Framework 2024–2030; primary and secondary learning areas and subject syllabuses; verify current official MoPSE editions",
      languageOfInstruction: ["English, Shona, Ndebele and other officially recognized languages according to school, level and language policy"],
      subjects: {
        mathematics: { status: "Mathematics learning area at primary and subject at secondary; current grade syllabuses must be extracted" },
        biology: { status: "separate Forms 3–4 Biology syllabus identified, 2024–2030 edition" },
        chemistry: { status: "separate secondary subject; current official syllabus file and edition need direct Ministry verification" },
        physics: { status: "separate secondary subject; current official syllabus file and edition need direct Ministry verification" },
        integratedScience: { status: "primary Science and Technology learning area; secondary science disciplines are differentiated" }
      },
      mappingNotes: "The 2024–2030 Heritage-Based Curriculum is identified in current education materials. A Ministry of Primary and Secondary Education Biology syllabus for Forms 3–4, 2024–2030, is discoverable through a third-party file host; this is not a direct MoPSE download and should be replaced with a Ministry-hosted copy before treating it as authoritative. The Ministry's provincial portal describes the framework's role in guiding syllabus development and revision. Keep primary Science and Technology distinct from secondary Biology, Chemistry and Physics; verify current Mathematics, Chemistry and Physics syllabuses directly with MoPSE or its Curriculum Development Unit.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official provincial Ministry framework information and a third-party hosted copy of a MoPSE Biology syllabus identified; direct official syllabus retrieval still required",
      seoTargets: ["Zimbabwe Heritage-Based Curriculum 2024–2030", "Zimbabwe Forms 3–4 Biology syllabus", "Zimbabwe secondary Chemistry Physics Mathematics curriculum"]
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
