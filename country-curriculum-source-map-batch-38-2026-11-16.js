/**
 * CBE Nexus — Global curriculum source map
 * Batch 38: United Kingdom, United States, Uruguay, Uzbekistan, Vanuatu
 * Research date: 2026-11-16
 * Source mapping only. Chapter counts and 10,000-word completion are not asserted.
 */
export const curriculumSourceMapBatch38 = {
  batch: 38,
  researchedAt: "2026-11-16",
  countries: [
    {
      country: "United Kingdom",
      countryNumber: 181,
      authority: "Devolved education authorities: Department for Education (England), Welsh Government, Scottish Government/Education Scotland, Department of Education Northern Ireland",
      englandCurriculumUrl: "https://www.gov.uk/government/collections/national-curriculum",
      ukComparisonUrl: "https://commonslibrary.parliament.uk/research-briefings/cbp-9834/",
      curriculumLevel: "Four distinct national/devolved curriculum systems; do not represent England's National Curriculum as applying throughout the UK",
      languageOfInstruction: ["English", "Welsh in Welsh-medium settings; Gaelic and other language provision in Scotland and Northern Ireland"],
      subjects: {
        mathematics: { status: "core or required subject across the four systems; programme, stages and terminology differ by jurisdiction" },
        biology: { status: "disciplinary science within England's science curriculum and commonly separate qualification subject at upper secondary; arrangements differ elsewhere" },
        chemistry: { status: "disciplinary science within England's science curriculum and commonly separate qualification subject at upper secondary; arrangements differ elsewhere" },
        physics: { status: "disciplinary science within England's science curriculum and commonly separate qualification subject at upper secondary; arrangements differ elsewhere" },
        integratedScience: { status: "science is taught as a broad curriculum area at earlier stages; separate qualifications and pathways vary" }
      },
      mappingNotes: "Maintain four jurisdiction records or explicit jurisdiction keys: England, Wales, Scotland and Northern Ireland. England's statutory National Curriculum sets programmes of study for Key Stages 1–4, with Mathematics and Science core subjects. Scotland uses Curriculum for Excellence; Wales uses Curriculum for Wales; Northern Ireland has its own statutory curriculum. Academies/free schools in England and independent schools may have different obligations. GCSE, A-level, National Qualifications and other awarding-body specifications are qualifications, not interchangeable national curricula. Extract each jurisdiction's current official subject framework and qualification specification separately.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official England framework and parliamentary comparison of devolved systems identified; Scotland, Wales and Northern Ireland subject-level extraction pending",
      seoTargets: ["UK national curricula by country", "England Key Stage Science Mathematics", "Scotland Curriculum for Excellence Biology Chemistry Physics", "Wales Curriculum for Wales science", "Northern Ireland curriculum science"]
    },
    {
      country: "United States",
      countryNumber: 182,
      authority: "State education agencies, local education agencies and local school boards; U.S. Department of Education has no federal national academic curriculum",
      federalRoleUrl: "https://www.ed.gov/about/contact-us/faqs/Elementary%20and%20Secondary%20Education",
      ngssUrl: "https://www.nextgenscience.org/",
      ngssFaqUrl: "https://www.nextgenscience.org/faqs/faqs",
      curriculumLevel: "State and local K–12 standards and curricula; optional multi-state frameworks and standards are not a single national curriculum",
      languageOfInstruction: ["English predominantly; state, district, bilingual and multilingual programmes vary"],
      subjects: {
        mathematics: { status: "state standards and locally selected curricula; Common Core Mathematics adopted or adapted by some jurisdictions, not a federal mandate" },
        biology: { status: "high-school life-science standards/course offerings vary by state and district" },
        chemistry: { status: "high-school physical-science/chemistry standards and course sequences vary by state and district" },
        physics: { status: "high-school physical-science/physics standards and course sequences vary by state and district" },
        integratedScience: { status: "middle-school integrated science and high-school integrated or discipline-specific courses vary by state and district" }
      },
      mappingNotes: "Do not create or advertise one authoritative US national syllabus. The Department of Education explicitly states that there are no federal national standards for academic areas and that states/local agencies develop standards and curricula. NGSS is a state-led voluntary standard; adoption is decided by each state. Build state-specific mappings with state education agency source, grade band, standard identifier, revision year, course and district/local exceptions. Common Core Mathematics and NGSS must be labelled as frameworks adopted/adapted by participating jurisdictions, not federal curriculum.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official federal explanation and NGSS governance sources identified; state-by-state curriculum registry required before chapter mapping",
      seoTargets: ["United States state science standards", "US state mathematics curriculum by grade", "NGSS Biology Chemistry Physics standards by state"]
    },
    {
      country: "Uruguay",
      countryNumber: 183,
      authority: "Administración Nacional de Educación Pública (ANEP), Dirección General de Educación Inicial y Primaria, Dirección General de Educación Secundaria and Dirección General de Educación Técnico Profesional",
      curriculumPortalUrl: "https://anep.edu.uy/documentos-curriculares",
      integratedBasicProgrammesUrl: "https://www.anep.edu.uy/sites/default/files/images/2022/Resoluciones/202207/AAA0220382597.pdf",
      mathematicsUrl: "https://www.anep.edu.uy/unidad-curricular-matematica",
      upperSecondaryProgrammesUrl: "https://www.anep.edu.uy/documentos-curriculares/ems/programas-primer-grado",
      curriculumLevel: "Marco Curricular Nacional; Educación Básica Integrada (EBI); Educación Media Superior (EMS) 2023 programmes",
      languageOfInstruction: ["Spanish; additional language provision varies"],
      subjects: {
        mathematics: { status: "explicit EBI and EMS curricular unit with stage-specific programmes" },
        biology: { status: "Biology/environmental science progression in EBI and separate Biology in upper secondary" },
        chemistry: { status: "Física y Química integrated/combined learning in earlier EBI stages; Chemistry in later stages and EMS" },
        physics: { status: "Física y Química combined in early stages; Physics in later EBI and EMS" },
        integratedScience: { status: "scientific-mathematical curricular space integrates and differentiates science disciplines by stage" }
      },
      mappingNotes: "ANEP describes the Marco Curricular Nacional as the highest-level framework, followed by learning progressions, profiles and concrete EBI/EMS programmes. EBI programme documents organize content by curricular spaces and stages (tramos); Mathematics, Physics and Chemistry, and Biology have stage-dependent units. EMS first-year programmes list Mathematics, Biology, Physics and Chemistry within the relevant science/technology spaces. Preserve stage and programme version; do not project an upper-secondary discipline sequence backwards into early grades.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official ANEP curriculum portal, EBI programme document and EMS programme listings identified; detailed learning outcomes and full sequence extraction pending",
      seoTargets: ["Uruguay ANEP EBI curriculum Mathematics", "Uruguay Biology Chemistry Physics programme", "Uruguay Educación Media Superior science curriculum"]
    },
    {
      country: "Uzbekistan",
      countryNumber: 184,
      authority: "Ministry of Preschool and School Education (MoPSE); Republican Education Centre; Agency for Assessment of Knowledge and Skills",
      ministryUrl: "https://uzedu.uz/",
      newFrameworkAnnouncementUrl: "https://www.unicef.org/uzbekistan/en/press-releases/national-education-milestone-new-national-curriculum-launched-achieve-world-class",
      nationalCertificatePortalUrl: "https://gov.uz/en/uzbmb",
      curriculumLevel: "National Curriculum Framework launched 18 August 2026; implementation details and grade/cohort transition schedules must be checked against Ministry releases",
      languageOfInstruction: ["Uzbek; Russian and other languages of instruction in designated schools"],
      subjects: {
        mathematics: { status: "national subject and national certificate examination subject; new NCF learning objectives require grade-level document extraction" },
        biology: { status: "national subject and national certificate examination subject; new NCF learning objectives require grade-level document extraction" },
        chemistry: { status: "national subject and national certificate examination subject; new NCF learning objectives require grade-level document extraction" },
        physics: { status: "national subject and national certificate examination subject; new NCF learning objectives require grade-level document extraction" },
        integratedScience: { status: "framework-wide science competency structure and grade-level subject organization pending official detailed programme extraction" }
      },
      mappingNotes: "UNICEF reports that MoPSE launched a new National Curriculum Framework on 18 August 2026, developed with the Republican Education Centre and partners, intended to shape learning from primary through upper secondary. Government National Certificate announcements confirm Biology, Chemistry, Physics and Mathematics as examination subjects, but an examination subject list is not a substitute for curriculum sequence. Record pre-reform and new NCF versions separately; verify grade-by-grade transition dates, language versions, approved textbooks and official learning objectives before chapter mapping.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "2026 national framework launch and official national certificate subject evidence found; Ministry subject syllabuses, learning objectives and rollout details pending extraction",
      seoTargets: ["Uzbekistan new National Curriculum Framework 2026", "Uzbekistan Biology Chemistry Physics syllabus", "Uzbekistan school Mathematics curriculum"]
    },
    {
      country: "Vanuatu",
      countryNumber: 185,
      authority: "Ministry of Education and Training (MoET); Curriculum Development Unit; National Curriculum and Assessment Board",
      curriculumPortalUrl: "https://moet.gov.vu/index.php?id=curriculum",
      educationActUrl: "https://education.gov.vu/docs/acts/Education%20Act_No.%209%20of%202014.pdf",
      syllabusBulletinUrl: "https://moet.gov.vu/docs/curriculum/bulletin/CDU%20Givhan%20Bulletin%20Issue%2001_09_2020.pdf",
      curriculumLevel: "Vanuatu National Curriculum from preschool to Year 13; approved syllabuses administered through the Curriculum Development Unit",
      languageOfInstruction: ["English", "French", "Bislama and local-language contexts according to school and programme"],
      subjects: {
        mathematics: { status: "national syllabus; Year 11–12 and Year 11–13 subject listings evidenced in curriculum bulletin" },
        biology: { status: "separate Years 11–12 syllabus listed" },
        chemistry: { status: "separate Years 11–13 syllabus listed" },
        physics: { status: "separate Years 11–13 syllabus listed" },
        integratedScience: { status: "primary and lower-secondary science structure requires extraction from current syllabus documents" }
      },
      mappingNotes: "MoET states that the National Curriculum serves learners from preschool to Year 13. The Education Act assigns the National Curriculum and Assessment Board functions including reviewing the national curriculum and evaluating/approving primary and secondary syllabuses. The CDU bulletin lists subject syllabuses by year band, including Biology for Years 11–12, Mathematics for Years 11–12, and Chemistry and Physics for Years 11–13. Treat the bulletin as evidence of listed syllabus availability, then retrieve current approved syllabus files and verify edition/year before constructing chapter sequences.",
      chapterCount: null,
      chapterSequenceVerified: false,
      sourceStatus: "official MoET curriculum portal, Education Act and CDU syllabus bulletin identified; current individual syllabus files and full grade sequence extraction pending",
      seoTargets: ["Vanuatu National Curriculum Year 13", "Vanuatu Biology Chemistry Physics syllabus", "Vanuatu Mathematics curriculum"]
    }
  ],
  qualityRules: {
    doNotInventChapterCounts: true,
    chapterCountValueUntilPdfExtraction: null,
    requireGradeCohortTrackAndVersionMapping: true,
    distinguishIntegratedAndSeparateSciences: true,
    accountForDevolvedStateAndLocalVariation: true,
    requireEffectiveDateForRevisedCurricula: true,
    targetWordsPerChapter: 10000,
    targetWordsAreNotEvidenceOfCompletion: true
  }
};
