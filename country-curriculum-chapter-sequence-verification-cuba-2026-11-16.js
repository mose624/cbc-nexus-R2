/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Cuba | ISO3: CUB | Review date: 2026-11-16
 * Source audit only. This file does not claim CBE Nexus chapters are complete.
 */
export const countryCurriculumVerification = {
  country: "Cuba",
  countryCode: "CUB",
  reviewDate: "2026-11-16",
  authority: "Ministerio de Educación (MINED), Republic of Cuba",
  languageOfInstruction: "Spanish",
  structure: {
    primary: "Educación primaria: Grades 1–6; two cycles, Grades 1–4 and 5–6.",
    lowerSecondary: "Secundaria básica: Grades 7–9; compulsory.",
    upperSecondary: "Educación preuniversitaria: Grades 10–12; includes general pre-university and specialised institutional pathways.",
    technicalProfessional: "Educación técnico-profesional is organised by professional specialities and has distinct curricular plans; do not merge it with the general pre-university pathway."
  },
  curriculumStatus2026: {
    status: "MINED remains the authority for study programmes, objectives, main curriculum topics, teacher guidance and teaching-hour distribution.",
    evidence: [
      "The International Mathematical Union's Cuba education profile links to MINED's official primary study plan and secondary-basic and pre-university study-programme portals, and notes that programmes are undergoing continuous refinement.",
      "UNESCO-IIEP SITEAL describes the six-year primary, three-year lower-secondary and three-year pre-university structure and confirms that MINED develops the study programmes.",
      "Cuba's 2026–2027 school-year directives concern organisation and local contextualisation; they are not evidence of a new replacement sequence for Biology, Chemistry, Physics or Mathematics."
    ],
    caution: "Some public grade-by-grade subject timetables available online are older or refer to emergency calendar arrangements. They must not be treated as the definitive 2026 curriculum without checking the current MINED programme files."
  },
  subjects: [
    {
      subject: "Biology",
      localName: "Biología",
      status: "Integrated natural-science learning occurs in earlier grades; Biology is a named subject in secondary and pre-university programmes, with grade-specific placement to be checked against current MINED plans.",
      sequenceScope: "Primary science is integrated across subjects such as El mundo en que vivimos and Ciencias Naturales. Secondary and pre-university programmes should be mapped from MINED's current programme files; institutional pathways may differ.",
      chapterCount: null,
      chapterCountStatus: "No official current textbook chapter count established.",
      pending: ["Retrieve current MINED Biology programme files for Grades 7–12.", "Confirm exact grades and annual sequence against the 2026–2027 plan.", "Check official textbook contents before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Química",
      status: "A named subject in secondary/pre-university curriculum materials; exact grade allocation and sequencing require current MINED programme verification.",
      sequenceScope: "Do not assume Chemistry is a standalone subject in every primary or lower-secondary grade. Some plans combine or alternate science instruction; confirm grade-specific arrangements from current MINED documents.",
      chapterCount: null,
      chapterCountStatus: "No official current textbook chapter count established.",
      pending: ["Retrieve current MINED Chemistry programmes for Grades 7–12.", "Verify whether any grade-level plan integrates or alternates Chemistry with Physics.", "Check official textbook contents and edition."]
    },
    {
      subject: "Physics",
      localName: "Física",
      status: "A named subject in secondary/pre-university curriculum materials; exact grade allocation and sequencing require current MINED programme verification.",
      sequenceScope: "Do not assume a standalone Physics course at every lower-secondary grade. Some published schedules show alternating or combined delivery with Chemistry; verify the current grade plan.",
      chapterCount: null,
      chapterCountStatus: "No official current textbook chapter count established.",
      pending: ["Retrieve current MINED Physics programmes for Grades 7–12.", "Verify grade allocation and any alternating delivery with Chemistry.", "Check official textbook contents and edition."]
    },
    {
      subject: "Mathematics",
      localName: "Matemática",
      status: "Separate subject across primary, lower-secondary and pre-university education.",
      sequenceScope: "The official primary study-plan portal lists Mathematics in primary education; the subject continues through secondary-basic and pre-university programmes. Exact current annual objectives and hours must be extracted from MINED programme documents.",
      chapterCount: null,
      chapterCountStatus: "No official current textbook chapter count established.",
      pending: ["Retrieve current MINED Mathematics programmes for Grades 1–12.", "Extract grade-by-grade objectives, content strands and teaching-hour allocations.", "Check official textbook contents and editions."]
    }
  ],
  implementationNotes: [
    "Keep the three stages distinct: primary Grades 1–6, secundaria básica Grades 7–9, and preuniversitario Grades 10–12.",
    "Primary natural-science learning is not equivalent to four separate specialist Biology, Chemistry, Physics and Mathematics courses.",
    "Secondary timetables may group or alternate Physics and Chemistry in certain grade or school-year arrangements; do not turn these into an invented universal subject sequence.",
    "Pre-university and technical-professional plans are different pathways. Map specialisations separately.",
    "The III Perfeccionamiento is a continuing system-improvement process; its existence does not prove that every new programme has been implemented nationwide.",
    "MINED programme portal materials are described as subject to continuous refinement. Record the programme version and retrieval date when extracting the actual files."
  ],
  officialSources: [
    {
      title: "MINED — Primary study plan",
      url: "https://www.mined.gob.cu/primaria/plan-de-estudio",
      use: "Official primary study-plan portal linked by the International Mathematical Union."
    },
    {
      title: "MINED — Secondary basic study programmes",
      url: "https://www.mined.gob.cu/secundaria-basica/programas-de-estudio",
      use: "Official secondary-basic programme portal."
    },
    {
      title: "MINED — Pre-university study programmes",
      url: "https://www.mined.gob.cu/preuniversitaria/programas-de-estudio",
      use: "Official pre-university programme portal."
    },
    {
      title: "International Mathematical Union — Cuba education and Mathematics syllabus",
      url: "https://www.mathunion.org/icmi/database-project-cuba",
      use: "Links to MINED portals; notes that syllabuses are refined continuously and that the Cuban Society of Mathematics and Computing has compiled grade 1–12 Mathematics syllabus material."
    },
    {
      title: "UNESCO-IIEP SITEAL — Cuba education profile",
      url: "https://siteal.iiep.unesco.org/pais/cuba",
      use: "Education structure and MINED responsibility for programmes, curriculum topics, objectives and teaching-hour distribution."
    },
    {
      title: "UNESCO-IIEP SITEAL — Cuba education profile PDF",
      url: "https://siteal.iiep.unesco.org/pais/educacion-pdf/cuba",
      use: "Six-year primary, three-year lower-secondary and three-year pre-university structure."
    },
    {
      title: "National Assembly of People's Power — Agreement on the III Perfeccionamiento",
      url: "https://www.cibercuba.com/s/gacetaoficial/acuerdo-x-26-de-2023-de-asamblea-nacional-del-poder-popular",
      use: "Secondary reproduction of the 2023 agreement; documents progressive implementation and teacher preparation, not a grade-by-grade new syllabus."
    }
  ],
  reconciliation: {
    biology: "Subject presence and official programme source identified; current grade-by-grade sequence pending.",
    chemistry: "Subject presence and official programme source identified; current grade-by-grade sequence and any integrated delivery pending.",
    physics: "Subject presence and official programme source identified; current grade-by-grade sequence and any integrated delivery pending.",
    mathematics: "Separate subject and official MINED portal identified; current grade-by-grade outcomes pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official programme portals and education structure identified; current programme files must be retrieved and reconciled grade by grade before topic sequences or textbook chapter counts can be certified."
};
