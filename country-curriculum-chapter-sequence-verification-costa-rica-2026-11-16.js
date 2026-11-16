/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Costa Rica
 * ISO 3166-1 alpha-3: CRI
 * Review date: 2026-11-16
 *
 * Scope: official Ministry of Public Education (MEP) programme framework.
 * This is a curriculum-source verification record, not a claim that
 * CBE Nexus textbook chapters or long-form notes have been completed.
 */
export const countryCurriculumVerification = {
  country: "Costa Rica",
  countryCode: "CRI",
  reviewDate: "2026-11-16",
  authority: "Ministerio de Educación Pública (MEP), Dirección de Desarrollo Curricular",
  languageOfInstruction: "Spanish; local Indigenous language and intercultural provisions apply in relevant schools",
  structure: {
    levels: [
      "Educación General Básica: I and II Ciclos (primary)",
      "Educación General Básica: III Ciclo (lower secondary, grades 7–9)",
      "Educación Diversificada (upper secondary; grade 10 onward, with pathways and school-offer variation)"
    ],
    note: "MEP programme listings identify Mathematics across I, II and III Ciclos and Educación Diversificada. Science organisation and subject availability vary by cycle and educational offer."
  },
  curriculumStatus2026: {
    status: "Current MEP study programmes remain the operative reference for the 2026 school year.",
    evidence: [
      "MEP 2026 technical-curricular guidance instructs schools to use the complete current Biology, Physics and Chemistry study programmes in their stated evaluation-criterion order.",
      "The 2026 national assessment regulations refer to current programmes in Ciencias (Biology, Chemistry and Physics) and Mathematics.",
      "MEP's official programme catalogue lists Biology, Chemistry, Physics and Mathematics as distinct programme entries in the relevant academic cycles."
    ],
    caution: "Do not treat a guidance document, assessment specification, school-specific timetable or proposed change as a nationwide replacement curriculum."
  },
  subjects: [
    {
      subject: "Biology",
      localNames: ["Biología", "Ciencias"],
      status: "Verified as a distinct subject programme in Educación Diversificada; science learning is integrated/organised as Ciencias in earlier cycles.",
      sequenceScope: "Use the applicable MEP Ciencias programme in earlier cycles and the current Biología programme for the relevant upper-secondary offer. MEP 2026 guidance explicitly confirms the current Biology programme is to be followed completely and in evaluation-criterion order.",
      chapterCount: null,
      chapterCountStatus: "Not established from official textbook contents.",
      pending: ["Extract the official programme's criteria and learning situations by grade/course.", "Check the current official student textbook table of contents before assigning chapter counts.", "Map school-offer exceptions and upper-secondary emphasis."]
    },
    {
      subject: "Chemistry",
      localNames: ["Química", "Ciencias"],
      status: "Verified as a distinct programme in Educación Diversificada; earlier-cycle science is organised through Ciencias.",
      sequenceScope: "Use the current MEP Química programme for the applicable upper-secondary course. MEP 2026 guidance explicitly says to work through the complete current programme in evaluation-criterion order.",
      chapterCount: null,
      chapterCountStatus: "Not established from official textbook contents.",
      pending: ["Extract official criteria, concepts, inquiry activities and course sequence.", "Verify current textbook contents and edition.", "Map the relevant academic and technical school offers."]
    },
    {
      subject: "Physics",
      localNames: ["Física", "Ciencias"],
      status: "Verified as a distinct programme in Educación Diversificada; earlier-cycle science is organised through Ciencias.",
      sequenceScope: "Use the current MEP Física programme for the applicable upper-secondary course. MEP 2026 guidance explicitly says to work through the complete current programme in evaluation-criterion order.",
      chapterCount: null,
      chapterCountStatus: "Not established from official textbook contents.",
      pending: ["Extract official criteria, concepts, mathematical skills and practical sequence.", "Verify current textbook contents and edition.", "Map the relevant academic and technical school offers."]
    },
    {
      subject: "Mathematics",
      localNames: ["Matemáticas"],
      status: "Verified as a separate MEP programme across I Ciclo, II Ciclo, III Ciclo and Educación Diversificada.",
      sequenceScope: "The MEP programme catalogue explicitly lists Mathematics in all four cycle groupings. The exact grade/course progression must be extracted from the programme document rather than inferred from the cycle labels.",
      chapterCount: null,
      chapterCountStatus: "Not established from official textbook contents.",
      pending: ["Extract grade-by-grade learning objectives and progression from the current MEP Mathematics programme.", "Verify the current textbook contents and edition.", "Map academic, technical, scientific and other differentiated offers."]
    }
  ],
  implementationNotes: [
    "Costa Rica has differentiated educational offers, including scientific colleges and rural/technical arrangements; do not assume every learner takes all three specialist sciences in every upper-secondary year.",
    "MEP 2026 assessment guidance states that the composition of the Science assessment depends on the student's applicable study plan. Some offers include only one of Biology, Physics or Chemistry; academic night schools may take all three in year 10 and one emphasis subject in year 11.",
    "Scientific Colleges have a stronger pre-university emphasis on Mathematics, Physics, Chemistry, Biology and computing; this is a specialised offer, not the universal timetable."
  ],
  officialSources: [
    {
      title: "MEP — 2026 technical-curricular orientations for III Ciclo and Educación Diversificada",
      url: "https://ddc.mep.go.cr/cursolectivo/documentos/pdfs/TERCER_CICLO_Y_EDUCACI%C3%93N_DIVERSIFICADA_ORIENTACIONES_T%C3%89CNICO_CURRICULARES_06-02-2026.pdf",
      use: "Explicit confirmation that the complete current Biology, Physics and Chemistry programmes are to be followed in evaluation-criterion order."
    },
    {
      title: "MEP — Official study programme catalogue",
      url: "https://www.mep.go.cr/programas-estudio",
      use: "Current official catalogue of study programmes and cycle groupings."
    },
    {
      title: "MEP — Mathematics programme catalogue results",
      url: "https://www.mep.go.cr/programas-estudio?academico=All&texto-programas-academicos=matem%C3%A1ticas",
      use: "Lists Mathematics for I Ciclo, II Ciclo, III Ciclo and Educación Diversificada."
    },
    {
      title: "MEP — 2026 standardised national assessment FAQ",
      url: "https://dgec.mep.go.cr/pruebas-nacionales-estandarizadas/informacion-2026/preguntas-frecuentes/",
      use: "Explains that science assessment content follows each learner's applicable school programme and subject emphasis."
    },
    {
      title: "MEP — Costa Rican Scientific Colleges",
      url: "https://mep.go.cr/tercer-ciclo-educacion-diversificada/colegios-cientificos",
      use: "Documents the specialised science and mathematics emphasis of scientific colleges."
    },
    {
      title: "MEP — Direction of Curriculum Development",
      url: "https://ddc.mep.go.cr/index.html",
      use: "Official curriculum authority and programme portal."
    }
  ],
  reconciliation: {
    biology: "Programme confirmed; detailed grade/course sequence not yet extracted.",
    chemistry: "Programme confirmed; detailed grade/course sequence not yet extracted.",
    physics: "Programme confirmed; detailed grade/course sequence not yet extracted.",
    mathematics: "Programme coverage across four cycle groupings confirmed; detailed grade sequence not yet extracted.",
    officialChapterCounts: "Pending for all four subjects.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made by this verification record."
  },
  overallStatus: "Official programme framework identified; detailed topic-by-topic reconciliation and textbook chapter verification remain pending."
};
