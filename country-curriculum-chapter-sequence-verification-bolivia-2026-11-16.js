/**
 * CBE Nexus country curriculum verification
 * Country: Bolivia
 * Canonical country index: 25
 * Reviewed: 2026-11-16
 *
 * Distinguish official curriculum areas, annual programme contents, regionalized
 * curriculum, textbook chapters and CBE Nexus-generated chapters.
 */
export const countryCurriculumVerification = {
  country: "Bolivia",
  countryIndex: 25,
  reviewedOn: "2026-11-16",
  authority: "Ministerio de Educación del Estado Plurinacional de Bolivia",
  system: {
    name: "Sistema Educativo Plurinacional; Educación Secundaria Comunitaria Productiva",
    secondaryGrades: "1ro a 6to de Secundaria",
    curriculumModel: "Currículo Base plus curricula regionalizados and diversified local curriculum",
    2026Status: "The 2026 school-year regulation says existing curriculum design and available prior-year learning texts continue while a new design is prepared for possible application in 2027. An emergency programme supports teaching in Language, Mathematics and Natural Sciences during 2026.",
    importantCaution: "Do not label a newly revised 2026 curriculum or newly issued 2026 textbooks as already in force. Ministry FAQ for RM 0001/2026 says the 2025 text revision was not completed, prior-year materials remain available, and the new design is expected for 2027. Regionalized curricula are to be completed, updated and harmonized."
  },
  subjects: [
    {
      subject: "Biology",
      officialArea: "Ciencias Naturales (Natural Sciences), with Biology content distributed through the annual secondary programme; regionalized curriculum may add locally grounded knowledge.",
      gradeCoverage: "Secondary 1ro–6to; exact grade-by-grade programme contents must be transcribed from the current official Planes y Programas de Estudio de Secundaria.",
      sequenceEvidence: "The Ministry's 2023 curriculum explanation says updated content and themes were refined within existing knowledge areas. The Ministry's Biology Olympiad material provides examples of annual curricular content, including cellular biology, human reproduction, nutrition, sensory systems and ecology, but Olympiad minimum content is not a substitute for the full official annual syllabus.",
      chapterCount: null,
      sequenceStatus: "Official Natural Sciences area confirmed; annual Biology topic sequence extraction pending",
      sources: [
        "https://www.minedu.gob.bo/files/publicaciones/minedu/ABC_de_la_Currcula_2023_compressed.pdf",
        "https://www.minedu.gob.bo/files/publicaciones/minedu/2_Biologia.pdf",
        "https://www.minedu.gob.bo/index.php?Itemid=933&catid=90&id=8244&option=com_content&view=article"
      ]
    },
    {
      subject: "Chemistry",
      officialArea: "Ciencias Naturales (Natural Sciences); Chemistry topics are included in the secondary natural-science programme and in upper-secondary scientific learning.",
      gradeCoverage: "Secondary 1ro–6to; detailed annual placement and whether individual Chemistry topics are separately labeled must be checked against the official programme.",
      sequenceEvidence: "The 2026 Ministry regulation confirms continued use of existing curricular programmes while revisions are prepared. Current detailed Chemistry topic headings and practical work have not yet been extracted from the official secondary programme.",
      chapterCount: null,
      sequenceStatus: "Subject-area relationship identified; grade-by-grade Chemistry sequence pending",
      sources: [
        "https://www.minedu.gob.bo/index.php?Itemid=933&catid=90&id=8244&option=com_content&view=article",
        "https://www.minedu.gob.bo/files/documentos-normativos/resoluciones-ministeriales/Preguntas_Frecuentes_RM_0001_2026.pdf",
        "https://www.minedu.gob.bo/files/publicaciones/minedu/ABC_de_la_Currcula_2023_compressed.pdf"
      ]
    },
    {
      subject: "Physics",
      officialArea: "Ciencias Naturales (Natural Sciences); Physics topics are included in the secondary programme rather than assumed to be a standalone national subject at every grade.",
      gradeCoverage: "Secondary 1ro–6to; exact annual placement and topic progression require the official secondary programme.",
      sequenceEvidence: "The Ministry's 2026 school-year rules retain the existing curriculum during the revision period. Detailed Physics themes, mathematical treatment, experiments and annual sequence remain to be transcribed.",
      chapterCount: null,
      sequenceStatus: "Subject-area relationship identified; grade-by-grade Physics sequence pending",
      sources: [
        "https://www.minedu.gob.bo/index.php?Itemid=933&catid=90&id=8244&option=com_content&view=article",
        "https://www.minedu.gob.bo/files/documentos-normativos/resoluciones-ministeriales/Preguntas_Frecuentes_RM_0001_2026.pdf",
        "https://www.minedu.gob.bo/files/publicaciones/minedu/ABC_de_la_Currcula_2023_compressed.pdf"
      ]
    },
    {
      subject: "Mathematics",
      officialArea: "Matemática, a distinct area of knowledge and learning in the national curriculum.",
      gradeCoverage: "Secondary 1ro–6to; the Ministry's 2026 emergency programme specifically prioritizes Mathematics alongside Language and Natural Sciences.",
      sequenceEvidence: "The Ministry's 2023 curriculum explanation confirms content updates within existing knowledge areas and no increase in instructional hours. Exact annual Mathematics content and order must be extracted from the official secondary Planes y Programas de Estudio.",
      chapterCount: null,
      sequenceStatus: "Distinct subject and 2026 priority confirmed; annual topic sequence pending",
      sources: [
        "https://www.minedu.gob.bo/files/publicaciones/minedu/ABC_de_la_Currcula_2023_compressed.pdf",
        "https://www.minedu.gob.bo/index.php?Itemid=933&catid=90&id=8244&option=com_content&view=article",
        "https://www.minedu.gob.bo/"
      ]
    }
  ],
  outstandingWork: [
    "Fetch the official Ministry-hosted Planes y Programas de Estudio for Educación Secundaria Comunitaria Productiva and extract the six annual programme sequences for Natural Sciences and Mathematics.",
    "Separate Biology, Chemistry and Physics topic clusters within the official Natural Sciences programme without falsely claiming they are nationally separate subjects in every grade.",
    "Check regionalized curricula and document jurisdiction/community-specific additions without replacing the national base.",
    "Verify whether a new curriculum design was formally approved for 2027 before changing the status recorded here.",
    "Compare official learning contents with textbook headings before creating CBE Nexus chapter maps; no official chapter count has been assumed."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedAnnualSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }

  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; current official topic documents and actual textbook contents require direct extraction",
  "sources": [],
  "finding": "No new verified topic sequence or official textbook chapter count is asserted in this evidence refresh. Preserve any jurisdiction, language, pathway and integrated-science distinctions already recorded in this file."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
};
