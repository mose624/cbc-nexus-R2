/**
 * CBE Nexus — curriculum chapter-sequence verification register
 * Country: Argentina (canonical country index position 11; source-map batch 03)
 * Audit date: 2026-11-16
 *
 * Scope control:
 * - Argentina's NAPs are nationally agreed learning priorities, not one national
 *   grade-by-grade textbook sequence.
 * - Secondary implementation and curriculum designs are jurisdictional.
 * - Basic-cycle Natural Sciences remains integrated; Biology, Physics and Chemistry
 *   are separately named within the oriented-cycle NAP.
 * - No chapter counts or detailed topic sequence are inferred from NAP titles.
 */
export const argentinaCurriculumVerification = {
  auditDate: "2026-11-16",
  country: "Argentina",
  canonicalIndexPosition: 11,
  sourceMapBatch: 3,
  authority: "Secretaría de Educación / Ministerio de Capital Humano (national education authority) and Consejo Federal de Educación; provincial and Ciudad Autónoma de Buenos Aires education authorities approve jurisdictional secondary curriculum designs",
  levelReviewed: "Educación Secundaria: Ciclo Básico and Ciclo Orientado; exact year/grade mapping depends on the jurisdictional design",
  language: "Spanish",
  examPathway: "Secondary completion and jurisdictional certification; do not assume a single nationwide subject examination sequence.",
  officialSources: [
    "https://www.argentina.gob.ar/nucleos-de-aprendizaje-prioritarios",
    "https://www.educ.ar/recursos/110571/nap-ciencias-naturales-educacion-secundaria-ciclo-basico",
    "https://www.educ.ar/recursos/110570/nap-matematica-educacion-secundaria-ciclo-basico",
    "https://www.educ.ar/recursos/132579/nap-ciencias-naturales-educacion-secundaria-ciclo-orientado",
    "https://www.educ.ar/recursos/132580/nap-matematica-educacion-secundaria-ciclo-orientado",
    "https://www.argentina.gob.ar/normativa/360942_res451_pdf/archivo",
    "https://bnm.educacion.gob.ar/digital/normas/RCFE_180-12.pdf"
  ],
  curriculumStructure: "The national NAP portal lists separate national learning-priority frameworks for Secondary Basic Cycle and Oriented Cycle. In the Basic Cycle, Mathematics and Natural Sciences are the relevant areas; Biology, Chemistry and Physics must not be represented as four independent national subject sequences at this stage because the NAP is organised under Ciencias Naturales. In the Oriented Cycle, the Natural Sciences NAP document includes Biology, Physics and Chemistry, and Mathematics has its own NAP. These NAPs are a common federal learning baseline agreed by the national Ministry and jurisdictions, not a single grade-by-grade national syllabus. The national validation procedure explicitly requires a jurisdictional secondary curriculum design, identifies the province and orientation, and records the years in which each NAP is embedded. Therefore CBE Nexus must select a province/CABA, orientation, and approved curriculum-design year before producing exact year-level chapter sequences. The national NAP PDF resources were identified, but their full topic/learning-outcome contents were not successfully extracted in this pass.",
  jurisdictionalRule: "Argentina has federal/jurisdictional curriculum implementation. A complete chapter map must be keyed by province or Ciudad Autónoma de Buenos Aires, secondary orientation, and year/cohort. Do not present a generic national chapter order as universal.",
  subjects: {
    Biology: {
      officialName: "Biología (within Ciencias Naturales)",
      sourceStatus: "official-NAP-portal-lists-Basic-and-Oriented-Cycle-Natural-Sciences; Oriented-Cycle-document-identifies-Biology; PDF-topic-extraction-pending",
      sequenceStatus: "national-priority-framework-identified; detailed-topic-sequence-and-jurisdictional-grade-allocation-pending",
      syllabusThemes: [],
      chapterCount: null,
      scopeNote: "In the Basic Cycle, use the integrated Natural Sciences framework. Biology is explicitly included in the Oriented-Cycle Natural Sciences NAP alongside Physics and Chemistry. Do not infer a Biology-only Basic Cycle chapter list."
    },
    Chemistry: {
      officialName: "Química (within Ciencias Naturales)",
      sourceStatus: "official-NAP-portal-lists-Basic-and-Oriented-Cycle-Natural-Sciences; Oriented-Cycle-document-identifies-Chemistry; PDF-topic-extraction-pending",
      sequenceStatus: "national-priority-framework-identified; detailed-topic-sequence-and-jurisdictional-grade-allocation-pending",
      syllabusThemes: [],
      chapterCount: null,
      scopeNote: "In the Basic Cycle, Chemistry is part of integrated Natural Sciences. It is identified as a discipline in the Oriented-Cycle Natural Sciences NAP. Separate provincial subject-year allocations must be obtained."
    },
    Physics: {
      officialName: "Física (within Ciencias Naturales)",
      sourceStatus: "official-NAP-portal-lists-Basic-and-Oriented-Cycle-Natural-Sciences; Oriented-Cycle-document-identifies-Physics; PDF-topic-extraction-pending",
      sequenceStatus: "national-priority-framework-identified; detailed-topic-sequence-and-jurisdictional-grade-allocation-pending",
      syllabusThemes: [],
      chapterCount: null,
      scopeNote: "In the Basic Cycle, Physics is part of integrated Natural Sciences. It is identified as a discipline in the Oriented-Cycle Natural Sciences NAP. Do not assume one national year-by-year Physics sequence."
    },
    Mathematics: {
      officialName: "Matemática",
      sourceStatus: "official-NAP-portal-lists-separate-Basic-and-Oriented-Cycle-Mathematics-frameworks; PDF-topic-extraction-pending",
      sequenceStatus: "national-priority-framework-identified; detailed-topic-sequence-and-jurisdictional-grade-allocation-pending",
      syllabusThemes: [],
      chapterCount: null,
      scopeNote: "Mathematics has separate Basic Cycle and Oriented Cycle NAP documents. Exact annual topic order must be drawn from the selected jurisdiction's approved secondary curriculum design."
    }
  },
  status: "national NAP framework and jurisdictional curriculum rule verified; four subject/area records mapped at framework level; no topic sequence or chapter count claimed; province/CABA-specific curriculum documents and full NAP topic extraction remain required"
};
