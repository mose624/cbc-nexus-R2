/**
 * CBE Nexus — Global curriculum source map
 * Batch 32: Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia
 * Research date: 2026-11-16
 * Source maps only: chapter counts and 10,000-word completion are NOT asserted.
 */
export const curriculumSourceMapBatch32 = {
  batch: 32,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "Seychelles",
      countryNumber: 151,
      authority: "Ministry of Education, Seychelles",
      authorityUrl: "https://edu.gov.sc/curriculum/",
      curriculumLevel: "National curriculum; confirm grade bands and current adoption from source documents",
      languageOfInstruction: ["English", "French", "Seychellois Creole (Kreol)"],
      subjects: {
        mathematics: { status: "official-national-document-listed", sourceTitle: "Mathematics in the National Curriculum", url: "https://edu.gov.sc/curriculum/" },
        integratedScience: { status: "official-national-document-listed", sourceTitle: "Science in the National Curriculum", url: "https://edu.gov.sc/curriculum/" },
        biology: { status: "not-yet-verified-as-separate-national-subject", note: "Map within the official Science curriculum until grade-specific separate Biology syllabus is confirmed." },
        chemistry: { status: "not-yet-verified-as-separate-national-subject", note: "Map within the official Science curriculum until grade-specific separate Chemistry syllabus is confirmed." },
        physics: { status: "not-yet-verified-as-separate-national-subject", note: "Map within the official Science curriculum until grade-specific separate Physics syllabus is confirmed." }
      },
      mappingNotes: "The Ministry curriculum portal lists Mathematics and a single Science national-curriculum document. Do not invent separate Biology, Chemistry or Physics chapter sequences from the umbrella Science listing.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-portal-found; subject document extraction pending",
      seoTargets: ["Seychelles national curriculum", "Seychelles secondary science notes", "Seychelles mathematics notes"]
    },
    {
      country: "Sierra Leone",
      countryNumber: 152,
      authority: "Ministry of Basic and Senior Secondary Education (MBSSE)",
      authorityUrl: "https://www.mbsse.gov.sl/",
      curriculumFrameworkUrl: "https://www.mbsse.gov.sl/wp-content/uploads/2022/06/National-Senior-Secondary-Curriculum-Framework.pdf",
      legalFrameworkUrl: "https://sierralii.gov.sl/akn/sl/act/2023/23/eng%402023-06-19",
      curriculumLevel: "National basic and senior secondary framework; senior secondary is organised into streams and subject sets",
      languageOfInstruction: ["English"],
      subjects: {
        mathematics: { status: "named-subject-family-in-framework", variants: ["Fundamentals of Mathematics", "Further Mathematics", "Statistics & Probability", "Calculus"] },
        biology: { status: "named-core-subject-in-sciences-and-technologies-stream" },
        chemistry: { status: "named-core-subject-in-sciences-and-technologies-stream" },
        physics: { status: "named-core-subject-in-sciences-and-technologies-stream" },
        integratedScience: { status: "also-listed-as-core-subject-in-sciences-and-technologies-stream" }
      },
      mappingNotes: "Senior-secondary framework identifies up to five streams and core, applied and everyday subject sets. Biology, Chemistry, Physics and Integrated Science are named in the Sciences & Technologies stream; Mathematics has several distinct courses. Map by stream and course, not as one universal sequence. The 2023 Act assigns the Ministry responsibility for the national curriculum and periodic review.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-framework-and-legislation-found; detailed syllabus extraction pending",
      seoTargets: ["Sierra Leone senior secondary Biology", "Sierra Leone Chemistry syllabus", "Sierra Leone Physics and Mathematics curriculum"]
    },
    {
      country: "Singapore",
      countryNumber: 153,
      authority: "Ministry of Education Singapore; Singapore Examinations and Assessment Board (SEAB)",
      authorityUrl: "https://www.moe.gov.sg/",
      assessmentUrl: "https://www.seab.gov.sg/secondary-education-certificate-sec/g3-syllabuses-for-school-candidates-2027/",
      curriculumLevel: "Secondary education; differentiated subject levels and examination syllabuses",
      languageOfInstruction: ["English (for the cited national examination syllabuses; local Mother Tongue subjects have their own language medium)"],
      subjects: {
        mathematics: { status: "official-examination-syllabus-listed", syllabus: "Mathematics; Additional Mathematics" },
        biology: { status: "official-examination-syllabus-listed", syllabus: "Biology (SEC G3 2027)" },
        chemistry: { status: "official-examination-syllabus-listed", syllabus: "Chemistry (SEC G3 2027)" },
        physics: { status: "official-examination-syllabus-listed", syllabus: "Physics (SEC G3 2027)" },
        integratedScience: { status: "official-combination-syllabuses-listed", combinations: ["Physics-Chemistry", "Physics-Biology", "Chemistry-Biology"] }
      },
      mappingNotes: "SEAB's 2027 G3 listing includes separate Biology, Chemistry, Physics and Mathematics syllabuses, as well as paired Science combinations. The 2026 Normal Academic Level page likewise lists Mathematics and the three paired Science combinations. Do not collapse paired Science into a single identical syllabus or assume every student takes all separate sciences.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-2027-examination-syllabus-index-found; syllabus PDFs require extraction",
      seoTargets: ["Singapore SEC Biology syllabus", "Singapore Chemistry notes", "Singapore Physics syllabus", "Singapore Mathematics syllabus"]
    },
    {
      country: "Slovakia",
      countryNumber: 154,
      authority: "Ministry of Education, Research, Development and Youth of the Slovak Republic",
      authorityUrl: "https://www.minedu.sk/",
      lowerSecondaryUrl: "https://www.minedu.sk/statny-vzdelavaci-program-pre-2-stupen-zs-konsolidovane-znenie/",
      gymnasiumUrl: "https://www.minedu.sk/statny-vzdelavaci-program-pre-gymnazia/",
      curriculumLevel: "National state educational programmes for lower-secondary basic schools and gymnasia; school programmes implement the state framework",
      languageOfInstruction: ["Slovak", "Minority-language provision may apply in designated schools"],
      subjects: {
        mathematics: { status: "official-learning-area-and-gymnasium-standard" },
        biology: { status: "within-natural-sciences-learning-area; detailed subject standard to extract" },
        chemistry: { status: "within-natural-sciences-learning-area; detailed subject standard to extract" },
        physics: { status: "within-natural-sciences-learning-area; detailed subject standard to extract" }
      },
      mappingNotes: "The 2026 consolidated lower-secondary programme organises standards into learning areas including Mathematics and Information and Man and Nature. Gymnasium state programmes and school-level programmes are separate implementation layers. Extract the detailed subject standards and grade allocation before producing chapter order; do not infer a single national textbook sequence.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-2026-consolidated-programmes-found; detailed standards extraction pending",
      seoTargets: ["Slovakia national curriculum Biology", "Slovak secondary Chemistry curriculum", "Slovakia Physics and Mathematics syllabus"]
    },
    {
      country: "Slovenia",
      countryNumber: 155,
      authority: "Government of the Republic of Slovenia; Ministry of Education",
      authorityUrl: "https://www.gov.si/teme/programi-in-ucni-nacrti-v-osnovni-soli/",
      curriculumLevel: "Nine-year basic school; subject curricula and grade-level learning plans",
      languageOfInstruction: ["Slovene", "Italian or Hungarian in designated bilingual/minority-language settings"],
      subjects: {
        mathematics: { status: "official-subject-curriculum-listed; revised curriculum in use from 2026-09-01" },
        biology: { status: "official-subject-curriculum-listed; revised curriculum in use from 2026-09-01" },
        chemistry: { status: "official-subject-curriculum-listed; revised curriculum in use from 2026-09-01" },
        physics: { status: "official-subject-curriculum-listed; revised curriculum in use from 2026-09-01" },
        integratedScience: { status: "official-subjects-also-include-natural-sciences-and-technology; grade-specific mapping required" }
      },
      mappingNotes: "The GOV.SI programme page lists Biology, Chemistry, Physics, Mathematics and integrated Natural Science / Natural Science and Technology plans. Revised curricula are marked for use from 1 September 2026. Preserve the distinction between the existing and newly effective curriculum documents, grade bands, and bilingual-school variants.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official-subject-curriculum-index-found; revised 2026 documents require extraction",
      seoTargets: ["Slovenia Biology curriculum 2026", "Slovenia Chemistry syllabus", "Slovenia Physics and Mathematics curriculum"]
    }
  ],
  qualityRules: {
    doNotInventChapterCounts: true,
    chapterCountValueUntilPdfExtraction: null,
    requireGradeAndTrackMapping: true,
    distinguishIntegratedAndSeparateSciences: true,
    requireEffectiveDateForRevisedCurricula: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
