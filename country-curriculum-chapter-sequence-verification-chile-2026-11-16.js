/**
 * CBE Nexus — Chile curriculum sequence verification
 * Audit date: 2026-11-16
 * Canonical country index: 39
 *
 * Scope: national curriculum architecture and evidence register for Biology,
 * Chemistry, Physics and Mathematics. This is NOT a textbook chapter register.
 * Official chapter counts remain null until the relevant official textbook
 * contents are inspected.
 */
export const countryCurriculumVerification = {
  country: "Chile",
  iso3: "CHL",
  canonicalIndex: 39,
  auditDate: "2026-11-16",
  status: "framework_verified_detailed_sequence_pending",
  language: ["Spanish"],
  schoolStructure: {
    compulsorySchoolingYears: 12,
    basicEducation: "1° a 6° básico",
    secondaryEducation: "7° básico a 4° medio",
    seniorSecondary: "3° y 4° medio include common general formation and differentiated pathways",
    note: "Use Chilean course labels (for example, 1° básico and 4° medio) in country pages; do not substitute another country's grade numbering."
  },
  currentCurriculumPosition2026: {
    governingDocuments: [
      "Bases Curriculares 1° a 6° básico — Decretos 433 y 439 de 2012",
      "Bases Curriculares 7° básico a 2° medio — Decretos 614 de 2013 y 369 de 2015",
      "Bases Curriculares 3° y 4° medio, Formación General Común, Formación General Electiva y Formación Diferenciada Humanístico-Científica — Decreto 193 de 2019",
      "Bases Curriculares Educación Media Técnico-Profesional — Decreto 452 de 2013"
    ],
    2026Implementation: "Mineduc's 2026 official guidance says schools should work from the current Bases Curriculares without the temporary curricular prioritisation; the 2023 prioritisation ended in December 2025.",
    updateCaveat: "A national update process for 1° básico to 2° medio is underway, but Mineduc states that the proposal is not yet approved/decreed for implementation. Do not label draft proposals as the current curriculum.",
    sources: [
      "https://www.curriculumnacional.cl/sites/default/files/adjuntos/recursos/2026-04/Cartilla_N1.pdf",
      "https://www.curriculumnacional.cl/actualizacion-curricular",
      "https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares"
    ]
  },
  subjects: [
    {
      subject: "Biology",
      localSubjectNames: ["Ciencias Naturales", "Biología"],
      nationalStatus: "integrated_in_natural_sciences_in_basic_and_lower_secondary; differentiated_subject_or_elective_in_upper_secondary",
      gradeScope: "1° a 6° básico: Ciencias Naturales; 7° básico a 2° medio: Ciencias Naturales; 3° y 4° medio: common and differentiated upper-secondary offerings must be mapped separately",
      verifiedFramework: [
        "In 1°–6° básico, the official subject is Ciencias Naturales, not a standalone Biology course.",
        "The primary science framework is organised through ejes including Ciencias de la Vida, Ciencias Físicas y Químicas, and Ciencias de la Tierra y el Universo.",
        "At upper secondary, Biology-related learning must be mapped against the 3°–4° medio common and differentiated curriculum documents and actual elective availability."
      ],
      sequenceStatus: "framework_and_primary_strand_verified; grade_by_grade_learning_objective_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.curriculumnacional.cl/recursos/cartilla-n1-bases-curriculares-vigentes",
        "https://www.curriculumnacional.cl/recursos/bases-curriculares-1-6-basico",
        "https://www.curriculumnacional.cl/curriculum/1o-6o-basico/ciencias-naturales/1-basico",
        "https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares"
      ],
      pending: ["Extract all relevant Ciencias Naturales objectives by course from 1° básico to 2° medio.", "Extract 3°–4° medio Biology common/elective and differentiated objectives.", "Inspect official textbook tables of contents before recording any book chapter count."]
    },
    {
      subject: "Chemistry",
      localSubjectNames: ["Ciencias Naturales", "Química"],
      nationalStatus: "integrated_in_natural_sciences_in_basic_and_lower_secondary; differentiated_science_component_in_upper_secondary",
      gradeScope: "1° a 6° básico and 7° básico a 2° medio: integrated Ciencias Naturales; 3° y 4° medio: map Chemistry-related objectives within the relevant common/differentiated science offer",
      verifiedFramework: [
        "The primary national subject is Ciencias Naturales; its official ejes include Ciencias Físicas y Químicas.",
        "Do not create a separate national Chemistry course for every basic grade.",
        "Upper-secondary Chemistry coverage must be distinguished by common versus differentiated formation and by the applicable plan of study."
      ],
      sequenceStatus: "framework_and_primary_physical_chemical_axis_verified; detailed_objectives_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.curriculumnacional.cl/recursos/cartilla-n1-bases-curriculares-vigentes",
        "https://www.curriculumnacional.cl/recursos/bases-curriculares-1-6-basico",
        "https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares"
      ],
      pending: ["Extract chemistry-related learning objectives from Ciencias Naturales for each course through 2° medio.", "Map 3°–4° medio Chemistry offerings and objectives from official curriculum and study-plan documents.", "Verify textbook chapter headings independently; do not infer them from curriculum axes."]
    },
    {
      subject: "Physics",
      localSubjectNames: ["Ciencias Naturales", "Física"],
      nationalStatus: "integrated_in_natural_sciences_in_basic_and_lower_secondary; differentiated_science_component_in_upper_secondary",
      gradeScope: "1° a 6° básico and 7° básico a 2° medio: integrated Ciencias Naturales; 3° y 4° medio: map Physics-related objectives in common/differentiated pathways",
      verifiedFramework: [
        "The primary Ciencias Naturales framework includes the eje Ciencias Físicas y Químicas.",
        "The national structure does not justify a standalone Physics course label in every basic grade.",
        "Senior-secondary Physics-related courses and electives require a separate 3°–4° medio mapping."
      ],
      sequenceStatus: "framework_axis_verified; grade_by_grade_objective_and_senior_course_mapping_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.curriculumnacional.cl/recursos/cartilla-n1-bases-curriculares-vigentes",
        "https://www.curriculumnacional.cl/recursos/bases-curriculares-1-6-basico",
        "https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares"
      ],
      pending: ["Extract physical-science objectives by course through 2° medio.", "Map 3°–4° medio Physics common and differentiated options.", "Inspect official textbooks before assigning chapter counts."]
    },
    {
      subject: "Mathematics",
      localSubjectNames: ["Matemática"],
      nationalStatus: "distinct_compulsory_subject_with_upper_secondary_differentiated_pathways",
      gradeScope: "1° a 6° básico; 7° básico a 2° medio; 3° y 4° medio common general and differentiated offerings",
      verifiedFramework: [
        "Matemática is a separately named subject in the national Bases Curriculares for 1°–6° básico.",
        "The official 2026 framework inventory confirms the separate curriculum bands and the 3°–4° medio Bases Curriculares.",
        "Senior-secondary Mathematics must distinguish common/general formation from differentiated pathways and elective offerings."
      ],
      sequenceStatus: "subject_and_grade_bands_verified; strand_and_objective_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.curriculumnacional.cl/recursos/cartilla-n1-bases-curriculares-vigentes",
        "https://www.curriculumnacional.cl/recursos/bases-curriculares-1-6-basico",
        "https://www.curriculumnacional.cl/Curriculum/Bases_Curriculares"
      ],
      pending: ["Extract course-by-course Mathematics objectives and strands for 1° básico–2° medio.", "Map 3°–4° medio common and differentiated Mathematics courses.", "Compare official learning objectives with textbook contents before creating CBE Nexus chapter order."]
    }
  ],
  qualityControls: {
    doNotTreatCurriculumAxesAsTextbookChapters: true,
    doNotSplitIntegratedBasicScienceIntoFourStandaloneCourses: true,
    doNotTreatDraftCurricularUpdateAsImplemented: true,
    doNotInferOfficialChapterCountsFromLearningObjectives: true,
    preserveChileanCourseLabels: true
  },
  overallPending: [
    "Full course-by-course extraction of official learning objectives for all four subject areas.",
    "3°–4° medio common, elective and differentiated pathway mapping, including Humanistic-Scientific and Technical-Professional differences.",
    "Official textbook table-of-contents inspection and chapter count verification.",
    "Only after source extraction, build CBE Nexus chapter sequences, worked examples, diagrams, practical work and assessment banks."
  ]
};
