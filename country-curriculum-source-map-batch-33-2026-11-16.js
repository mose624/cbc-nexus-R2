/**
 * CBE Nexus — Global curriculum source map
 * Batch 33: Solomon Islands, Somalia, South Africa, South Sudan, Spain
 * Research date: 2026-11-16
 * Source mapping only. No chapter counts or 10,000-word completion claims.
 */
export const curriculumSourceMapBatch33 = {
  batch: 33,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Solomon Islands",
      countryNumber: 156,
      authority: "Ministry of Education and Human Resources Development (MEHRD), Curriculum Development Division",
      authorityUrl: "https://education.gov.sb/",
      primaryFrameworkUrl: "https://education.exceed.com.sb/publications/curriculum-framework-primary",
      curriculumLevel: "National primary framework published 2 March 2026; secondary subject syllabuses require separate confirmation",
      languageOfInstruction: ["English", "local languages may support early learning and classroom practice"],
      subjects: {
        mathematics: { status: "primary-framework-subject-outcomes-to-extract" },
        integratedScience: { status: "primary-framework-learning-area-to-extract" },
        biology: { status: "not-yet-verified-as-separate-primary-subject" },
        chemistry: { status: "not-yet-verified-as-separate-primary-subject" },
        physics: { status: "not-yet-verified-as-separate-primary-subject" }
      },
      mappingNotes: "The Ministry resource hub identifies the National Curriculum Framework—Primary (MEHRD/2026/03), a 64-page policy document published 2 March 2026. Its standards and outcomes are organised by year level and learning area. Extract the PDF before deriving topic/chapter order. Do not extrapolate this primary framework to secondary Biology, Chemistry or Physics; obtain secondary syllabus documents independently.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-ministry-primary-framework-indexed; PDF extraction and secondary syllabus verification pending",
      seoTargets: ["Solomon Islands primary curriculum", "Solomon Islands science syllabus", "Solomon Islands mathematics curriculum"]
    },
    {
      country: "Somalia",
      countryNumber: 157,
      authority: "Federal Government of Somalia, Ministry of Education, Culture and Higher Education (MoECHE)",
      authorityUrl: "https://moe.gov.so/",
      frameworkUrl: "https://moe.jl.so/ova_doc/qaabdhismeedka-manhajka-waxbarashada-qaranka-soomaaliyeed-2017/",
      sectorAnalysisUrl: "https://moe.gov.so/wp-content/uploads/2022/07/Somalia-Education-Sector-Analysis-Jan-2022-1.pdf",
      curriculumLevel: "National Curriculum Framework 2017; primary, middle and secondary structures, with federal-member-state implementation considerations",
      languageOfInstruction: ["Somali", "Arabic", "English"],
      subjects: {
        mathematics: { status: "named-national-curriculum-subject" },
        integratedScience: { status: "named-national-curriculum-subject" },
        biology: { status: "separate-secondary-sequence-not-yet-verified" },
        chemistry: { status: "separate-secondary-sequence-not-yet-verified" },
        physics: { status: "separate-secondary-sequence-not-yet-verified" }
      },
      mappingNotes: "The 2017 national framework describes a unified structure and names Mathematics and Science among the subjects. The Ministry's 2022 sector analysis documents the national curriculum's development and textbook rollout, but does not substitute for the detailed subject syllabuses. Treat the framework as a national reference while checking state-level adoption, school pathway and current subject documents. Do not split general Science into invented Biology/Chemistry/Physics chapter sequences.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "national-framework-and-ministry-sector-analysis-found; detailed subject syllabus extraction and state implementation checks pending",
      seoTargets: ["Somalia national curriculum", "Somalia secondary science curriculum", "Somalia mathematics syllabus"]
    },
    {
      country: "South Africa",
      countryNumber: 158,
      authority: "Department of Basic Education (DBE)",
      authorityUrl: "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements%28CAPS%29.aspx",
      curriculumLevel: "National Curriculum Statement Grades R–12; CAPS subject and phase documents",
      languageOfInstruction: ["English and Afrikaans versions are listed for selected non-language subject documents; other official languages are used in schools according to policy and context"],
      subjects: {
        mathematics: { status: "official-CAPS-subject", phases: ["Foundation", "Intermediate", "Senior", "FET"] },
        biology: { status: "Life Sciences official FET subject; earlier grades include integrated Natural Sciences" },
        chemistry: { status: "Physical Sciences official FET subject; chemistry concepts are integrated with physics in the subject" },
        physics: { status: "Physical Sciences official FET subject; physics concepts are integrated with chemistry in the subject" },
        integratedScience: { status: "Natural Sciences and Natural Sciences and Technology official phase subjects" }
      },
      mappingNotes: "CAPS is a single policy framework for Grades R–12, with phase-specific documents. Intermediate and Senior phases use Mathematics and integrated Natural Sciences / Natural Sciences and Technology. FET offers Life Sciences, Mathematics and Physical Sciences, with Physical Sciences combining physics and chemistry. Keep grade and phase distinctions; do not present separate Chemistry and Physics CAPS as if they were standalone FET subjects.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-DBE-CAPS-index-and-phase-subject-lists-found; individual PDFs require extraction",
      seoTargets: ["South Africa CAPS Life Sciences notes", "South Africa Physical Sciences syllabus", "South Africa CAPS Mathematics", "South Africa Natural Sciences"]
    },
    {
      country: "South Sudan",
      countryNumber: 159,
      authority: "National Curriculum Development Centre (NCDC), Ministry of General Education and Instruction",
      authorityUrl: "https://cdc.gov.ss/",
      curriculumUrl: "https://cdc.gov.ss/curriculum.php",
      frameworkPdfUrl: "https://cdc.gov.ss/uploads/resources/South%20Sudan%20Curriculum%20Framework%20.pdf",
      curriculumLevel: "National curriculum framework covering early childhood, primary, secondary and alternative education",
      languageOfInstruction: ["English (national curriculum framework context); local-language provision and policy details require level-specific confirmation"],
      subjects: {
        mathematics: { status: "named-primary-subject-on-NCDC-curriculum-portal" },
        integratedScience: { status: "named-primary-subject-on-NCDC-curriculum-portal" },
        biology: { status: "secondary-subject-syllabus-requires-extraction" },
        chemistry: { status: "secondary-subject-syllabus-requires-extraction" },
        physics: { status: "secondary-subject-syllabus-requires-extraction" }
      },
      mappingNotes: "NCDC describes itself as the curriculum authority and provides a national curriculum portal with primary Mathematics and Science syllabuses; the portal describes primary Science as covering basic physics, biology and chemistry. The national framework sets the wider phase and subject structure. Retrieve the individual primary and secondary syllabus files before defining chapter sequences or treating primary integrated Science as separate sciences.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "NCDC-official-portal-and-framework-found; individual subject files and secondary syllabus extraction pending",
      seoTargets: ["South Sudan national curriculum", "South Sudan primary Science syllabus", "South Sudan secondary Biology Chemistry Physics Mathematics"]
    },
    {
      country: "Spain",
      countryNumber: 160,
      authority: "Ministry of Education, Vocational Training and Sports; autonomous-community education administrations",
      authorityUrl: "https://educagob.educacionfpydeportes.gob.es/curriculo/curriculo-lomloe.html",
      compulsorySecondaryUrl: "https://educagob.educacionfpydeportes.gob.es/curriculo/curriculo-lomloe/menu-curriculos-basicos/ed-secundaria-obligatoria/materias/desarrollo-materias.html",
      bachilleratoUrl: "https://educagob.educacionfpydeportes.gob.es/curriculo/curriculo-lomloe/menu-curriculos-basicos/bachillerato.html",
      legalBachilleratoUrl: "https://www.boe.es/eli/es/rd/2022/04/05/243/con",
      curriculumLevel: "LOMLOE national minimum curriculum for ESO and Bachillerato; autonomous communities establish their regional curricula",
      languageOfInstruction: ["Spanish", "co-official languages in relevant autonomous communities"],
      subjects: {
        mathematics: { status: "official-subject", variants: ["Mathematics A", "Mathematics B in ESO Grade 4", "Mathematics I and II in Science and Technology Bachillerato"] },
        biology: { status: "official-subject", variants: ["Biology and Geology in ESO", "Biology in Bachillerato"] },
        chemistry: { status: "combined-in-ESO-and-separate-in-Bachillerato", variants: ["Physics and Chemistry in ESO", "Chemistry in Bachillerato"] },
        physics: { status: "combined-in-ESO-and-separate-in-Bachillerato", variants: ["Physics and Chemistry in ESO", "Physics in Bachillerato"] },
        integratedScience: { status: "other-science-combinations-include-Biology-Geology-and-Environmental-Sciences; grade and pathway dependent" }
      },
      mappingNotes: "The national minimum curriculum identifies Biology and Geology, Physics and Chemistry, and Mathematics in ESO. In Bachillerato's Science and Technology modality, first year includes Mathematics I and options including Biology/Geology/Environmental Sciences and Physics/Chemistry; second year offers Mathematics II or Applied Mathematics and separate Biology, Physics and Chemistry. Autonomous communities develop the regional curriculum within national minimums; map regional variants and co-official language versions separately.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-ministry-LOMLOE-pages-and-consolidated-2026-BOE-text-found; regional curriculum and annex extraction pending",
      seoTargets: ["Spain LOMLOE Biology and Geology", "Spain Physics and Chemistry ESO", "Spain Bachillerato Chemistry Physics Biology Mathematics"]
    }
  ],
  qualityRules: {
    doNotInventChapterCounts: true,
    chapterCountValueUntilPdfExtraction: null,
    requireGradeAndTrackMapping: true,
    distinguishIntegratedAndSeparateSciences: true,
    accountForFederalOrRegionalVariation: true,
    requireEffectiveDateForRevisedCurricula: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
