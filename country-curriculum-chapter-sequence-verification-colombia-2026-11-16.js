/**
 * CBE Nexus — Colombia curriculum sequence verification
 * Audit date: 2026-11-16 | Canonical country index: 41
 *
 * Scope: Republic of Colombia national pre-school, basic and middle education.
 * The national framework is competency/reference based and preserves school
 * autonomy through each institution's PEI and study plan. Do not present one
 * national textbook chapter order where none is prescribed.
 */
export const countryCurriculumVerification = {
  country: "Colombia",
  localName: "República de Colombia",
  iso3: "COL",
  canonicalIndex: 41,
  auditDate: "2026-11-16",
  status: "national_references_verified_institutional_sequence_pending",
  languageOfInstruction: "Spanish is the general language of instruction; bilingual and ethno-education arrangements apply in relevant communities and territories.",
  schoolStructure: {
    basicPrimary: "Grades 1–5",
    basicSecondary: "Grades 6–9",
    middleEducation: "Grades 10–11",
    totalBasicAndMiddleGrades: 11,
    source: "https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/"
  },
  governance: {
    nationalFramework: "The Ministry of National Education publishes curricular guidelines, Basic Standards of Competencies (EBC) and Basic Learning Rights (DBA) as national reference instruments.",
    institutionalAutonomy: "Schools develop their institutional educational project (PEI), study plan and area plans in context. The national standards are not a single textbook table of contents.",
    scienceArea: "Ciencias Naturales y Educación Ambiental is the national area; Biology, Chemistry and Physics are scientific domains within it and may be organised differently by school.",
    mathematicsArea: "Matemáticas is a distinct mandatory area.",
    source: "https://www.mineducacion.gov.co/1780/w3-article-340021.html"
  },
  2026CurriculumPosition: {
    status: "New national curricular guidelines for integral formation and citizenship/socio-emotional development were published in July 2026. The Ministry states these strengthen contextualised school curriculum and autonomy; they do not replace PEIs or establish new subjects.",
    published: "2026-07-15",
    officialAnnouncement: "2026-07-31",
    scienceAndMathematicsCaveat: "The 2026 announcement includes new integral-formation and citizenship/socio-emotional guidelines and an update to Social Sciences guidelines. It does not announce replacement national Science or Mathematics subject standards. Continue to use the relevant existing Science and Mathematics reference instruments unless the Ministry issues a specific replacement.",
    sources: [
      "https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Referentes-de-calidad/339975:Lineamientos-curriculares",
      "https://www.mineducacion.gov.co/portal/salaprensa/Comunicados/430005:Ministerio-de-Educacion-presenta-los-nuevos-lineamientos-curriculares-para-fortalecer-la-formacion-integral-en-los-colegios"
    ]
  },
  nationalReferenceArchitecture: {
    basicStandardsOfCompetencies: {
      name: "Estándares Básicos de Competencias (EBC)",
      gradeBands: ["1°–3°", "4°–5°", "6°–7°", "8°–9°", "10°–11°"],
      subjects: ["Ciencias Naturales y Educación Ambiental", "Matemáticas"],
      source: "https://www.mineducacion.gov.co/1780/w3-article-340021.html"
    },
    learningRights: {
      name: "Derechos Básicos de Aprendizaje (DBA)",
      note: "DBA provide grade-specific structured learning expectations and support planning; they are not textbook chapter counts.",
      mathematicsResource: "https://colombiaaprende.edu.co/recurso-coleccion/derechos-basicos-de-aprendizaje-matematicas",
      standardsResource: "https://www.colombiaaprende.edu.co/recurso-coleccion/revisa-los-estandares-basicos-de-competencias-ebc"
    },
    scienceReference: {
      name: "Lineamientos Curriculares de Ciencias Naturales y Educación Ambiental",
      companion: "Estándares Básicos de Competencias en Ciencias Naturales",
      organisation: "Scientific thinking and production, physical environment, living environment, science-technology-society and personal/social commitments are represented in the standards; Biology/Chemistry/Physics should be mapped from the actual learning statements, not invented as a universal national timetable.",
      source: "https://www.mineducacion.gov.co/1621/articles-81033_archivo_pdf.pdf"
    }
  },
  subjects: [
    {
      subject: "Biology",
      localSubjectNames: ["Ciencias Naturales y Educación Ambiental", "Biología"],
      nationalStatus: "integrated_domain_within_national_natural_sciences_area",
      gradeScope: "Grades 1–11 within Ciencias Naturales y Educación Ambiental; institutions determine the detailed area plan and may timetable Biology as a distinct component, particularly in secondary and middle education.",
      verifiedFramework: [
        "The national compulsory area is Ciencias Naturales y Educación Ambiental, not a single nationally mandated standalone Biology course for every grade.",
        "The EBC framework groups expectations into grade bands 1°–3°, 4°–5°, 6°–7°, 8°–9° and 10°–11°.",
        "Living-environment standards and related science learning statements provide the basis for mapping biological concepts."
      ],
      sequenceStatus: "national_area_and_grade_bands_verified; biology_learning_statement_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.mineducacion.gov.co/1621/articles-81033_archivo_pdf.pdf",
        "https://www.mineducacion.gov.co/1780/w3-article-340021.html",
        "https://www.colombiaaprende.edu.co/recurso-coleccion/revisa-los-estandares-basicos-de-competencias-ebc"
      ],
      pending: [
        "Extract all living-environment and biological learning statements across the five EBC grade bands.",
        "Map grade-specific DBA and compare with institutional area plans where Biology is timetabled separately.",
        "Inspect official textbook tables of contents by grade/publisher before entering textbook chapter counts.",
        "Build a CBE Nexus Biology sequence without misrepresenting it as a mandated national chapter order."
      ]
    },
    {
      subject: "Chemistry",
      localSubjectNames: ["Ciencias Naturales y Educación Ambiental", "Química"],
      nationalStatus: "integrated_domain_within_national_natural_sciences_area",
      gradeScope: "Grades 1–11 within Ciencias Naturales y Educación Ambiental; school study plans determine how chemistry content is sequenced and whether it is separately timetabled.",
      verifiedFramework: [
        "Chemistry is represented within the national Natural Sciences area and its physical-environment/scientific-thinking learning expectations.",
        "The EBC grade bands are 1°–3°, 4°–5°, 6°–7°, 8°–9° and 10°–11°.",
        "The national framework does not establish one universal Chemistry textbook chapter order for every school."
      ],
      sequenceStatus: "national_area_and_grade_bands_verified; chemistry_learning_statement_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.mineducacion.gov.co/1621/articles-81033_archivo_pdf.pdf",
        "https://www.mineducacion.gov.co/1780/w3-article-340021.html",
        "https://www.colombiaaprende.edu.co/recurso-coleccion/revisa-los-estandares-basicos-de-competencias-ebc"
      ],
      pending: [
        "Extract matter, transformations, mixtures, reactions and related chemistry statements from the official standards by grade band.",
        "Map chemistry-related DBA and local area plans, especially Grades 6–11.",
        "Inspect official textbook contents and record edition-specific chapters separately from EBC expectations.",
        "Do not assume a single national Biology/Chemistry/Physics timetable."
      ]
    },
    {
      subject: "Physics",
      localSubjectNames: ["Ciencias Naturales y Educación Ambiental", "Física"],
      nationalStatus: "integrated_domain_within_national_natural_sciences_area",
      gradeScope: "Grades 1–11 within Ciencias Naturales y Educación Ambiental; schools determine the detailed sequence and separate timetable allocation.",
      verifiedFramework: [
        "Physics is represented within the Natural Sciences area, particularly physical-environment learning expectations.",
        "The national EBC framework uses five grade bands from 1°–3° through 10°–11°.",
        "Physics concepts are not a universal standalone national course in every grade."
      ],
      sequenceStatus: "national_area_and_grade_bands_verified; physics_learning_statement_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.mineducacion.gov.co/1621/articles-81033_archivo_pdf.pdf",
        "https://www.mineducacion.gov.co/1780/w3-article-340021.html",
        "https://www.colombiaaprende.edu.co/recurso-coleccion/revisa-los-estandares-basicos-de-competencias-ebc"
      ],
      pending: [
        "Extract motion, forces, energy, waves, electricity, magnetism and related physical-environment standards by grade band.",
        "Map physics-related DBA and institutional sequencing for Grades 6–11.",
        "Inspect official textbook tables of contents before assigning any chapter counts.",
        "Separate integrated primary science from secondary school timetabling choices."
      ]
    },
    {
      subject: "Mathematics",
      localSubjectNames: ["Matemáticas"],
      nationalStatus: "distinct_mandatory_national_area",
      gradeScope: "Grades 1–11, with EBC grade bands 1°–3°, 4°–5°, 6°–7°, 8°–9° and 10°–11°; DBA resources provide grade-specific learning expectations.",
      verifiedFramework: [
        "Matemáticas is a distinct mandatory area in the national basic and middle education framework.",
        "EBC expectations are organised by five grade bands.",
        "The Ministry's Colombia Aprende DBA resource describes grade-specific structured learning expectations for basic and middle education."
      ],
      sequenceStatus: "national_area_and_grade_bands_verified; strand_and_grade_objective_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.mineducacion.gov.co/1780/w3-article-340021.html",
        "https://colombiaaprende.edu.co/recurso-coleccion/derechos-basicos-de-aprendizaje-matematicas",
        "https://www.colombiaaprende.edu.co/recurso-coleccion/revisa-los-estandares-basicos-de-competencias-ebc"
      ],
      pending: [
        "Extract mathematical thinking types/processes and EBC statements by grade band.",
        "Extract grade-specific Mathematics DBA for Grades 1–11 and reconcile with EBC.",
        "Inspect approved textbook contents and record publisher/edition-specific chapter counts.",
        "Preserve institutional autonomy when proposing a CBE Nexus teaching sequence."
      ]
    }
  ],
  qualityControls: {
    doNotTreatEBCGradeBandsAsTextbookChapters: true,
    doNotTreatDBAAsTextbookChapterTitles: true,
    doNotPresentBiologyChemistryPhysicsAsFourSeparateNationalSubjectsInEveryGrade: true,
    doNotTreat2026IntegralFormationGuidelinesAsReplacementScienceOrMathematicsStandards: true,
    preserveInstitutionalPEIAndStudyPlanAutonomy: true,
    doNotInferOfficialChapterCounts: true
  },
  overallPending: [
    "Extract the full official EBC statements and map them into Biology, Chemistry and Physics concepts across the five grade bands.",
    "Extract Mathematics EBC and grade-specific DBA from Grades 1–11.",
    "Inspect official textbook contents, with publisher, edition, grade and actual chapter count recorded separately.",
    "Sample institutional area plans to understand how schools distribute Biology, Chemistry and Physics in secondary and middle education.",
    "Create CBE Nexus chapter sequences only after the national learning expectations and textbook editions are reconciled."
  ]
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Colombia",
  gradeSequenceEvidence: "The Ministry published updated curriculum guidelines in 2026; Colombia's reference standards and institutional PEI/study plans mean a single mandated national textbook chapter order should not be asserted. Extract grade-cycle standards and school-plan variation.",
  textbookEvidence: "No textbook contents inspected; do not treat national learning standards as a single prescribed book sequence.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Referentes-de-calidad/339975:Lineamientos-curriculares",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
