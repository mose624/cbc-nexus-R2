/* CBE Nexus — Central African Republic curriculum verification
 * Reviewed 2026-11-16 | Canonical country index position: 37
 * Source map only. Official textbook chapter totals and full grade sequences
 * are not asserted unless a Ministry-issued book/programme has been inspected.
 */
export default {
  country: "Central African Republic",
  aliases: ["Central African Republic", "République centrafricaine", "RCA"],
  isoAlpha3: "CAF",
  canonicalIndex: 37,
  reviewedOn: "2026-11-16",
  educationStructure: {
    model: "2-6-4-3",
    preschool: "2 years",
    fundamental1: "6 years: CP1, CP2, CE1, CE2, CM1, CM2",
    fundamental2: "4 years: Sixième, Septième, Huitième, Neuvième année fondamentale",
    upperSecondary: "3 years: Seconde, Première, Terminale",
    languages: ["French", "Sango (used in the first years of schooling)"],
    examinations: ["CEF1", "BEPC / Diplôme de fin d'Études Fondamentales", "Baccalauréat"],
    sourceNotes: [
      "The Ministry's education-system description identifies the 2-6-4-3 structure.",
      "Fundamental 1 includes foundational natural-science learning; Fundamental 2 identifies Mathematics, SVT and Physics among its disciplines.",
      "Upper-secondary pathways include exact sciences and life and earth sciences."
    ]
  },
  curriculumGovernance: {
    authority: "Ministère de l'Éducation Nationale de la République Centrafricaine",
    technicalBody: "Institut National de Recherche et d'Animation Pédagogiques (INRAP)",
    authorityResponsibilities: "The Ministry is responsible for policy, programme revision, school materials, national examinations and implementation across the national territory.",
    2026Context: [
      "The Ministry portal reports the 2026–2027 school-year opening and publishes official examination and education updates.",
      "New Beafrika French and calculation manuals were presented for Fundamental 1 in October 2026. These are identified as literacy and calculation resources, not evidence of a new four-subject science syllabus."
    ],
    implementationCaution: "Do not infer that a newly published textbook or an announced reform has replaced all grade programmes. Verify the class, subject and approved edition."
  },
  subjects: [
    {
      subject: "Biology",
      officialLabel: "Sciences de la Vie et de la Terre (SVT)",
      curriculumPosition: "Natural-science foundations in Fundamental 1; SVT is a named discipline in Fundamental 2; upper-secondary Life and Earth Sciences pathway provides specialist study.",
      verifiedCoverage: ["Fundamental 1 foundational natural sciences", "Fundamental 2 SVT", "Upper-secondary Sciences de la Vie et de la Terre pathway"],
      sequenceStatus: "PARTIAL — national structure and subject placement verified; official class-by-class topic sequence requires extraction from INRAP programmes and current textbooks.",
      chapterCount: null,
      pending: ["Retrieve official SVT programmes for Sixième through Neuvième.", "Retrieve Seconde, Première and Terminale SVT/science-series programmes.", "Verify Fundamental 1 natural-science outcomes and approved Beafrika scope; do not misclassify literacy/calculation manuals as science texts.", "Extract practical work, diagrams, competencies and assessment objectives."]
    },
    {
      subject: "Chemistry",
      officialLabel: "Chimie / Physique-Chimie",
      curriculumPosition: "Chemistry is represented within the physical-sciences programme at lower levels; whether and where it is separately timetabled in each upper-secondary series must be verified against official programmes.",
      verifiedCoverage: ["Fundamental 2 includes physical-science learning", "Upper-secondary exact-science pathway"],
      sequenceStatus: "PARTIAL — do not publish a standalone national Chemistry sequence until the current class and series programmes are extracted.",
      chapterCount: null,
      pending: ["Retrieve INRAP programmes for Physique-Chimie by Fundamental 2 class.", "Check upper-secondary exact-science series for separate Chemistry courses or combined Physique-Chimie.", "Verify practical experiments, laboratory safety, quantitative content and assessment.", "Compare current Ministry-approved textbooks and record edition/year."]
    },
    {
      subject: "Physics",
      officialLabel: "Physique / Physique-Chimie",
      curriculumPosition: "Physics is identified among Fundamental 2 disciplines and is included in the upper-secondary exact-science pathway; combined course naming and class placement require syllabus-level confirmation.",
      verifiedCoverage: ["Fundamental 2 physical sciences", "Upper-secondary exact-science pathway"],
      sequenceStatus: "PARTIAL — subject placement verified, detailed annual topic order pending.",
      chapterCount: null,
      pending: ["Retrieve official Physics or Physique-Chimie programmes for Sixième through Neuvième.", "Extract upper-secondary programmes for Seconde, Première and Terminale by series.", "Verify mechanics, matter, energy, waves and electricity topics from official documents rather than assuming a generic order.", "Map practical work and examination competencies."]
    },
    {
      subject: "Mathematics",
      officialLabel: "Mathématiques",
      curriculumPosition: "A distinct discipline across Fundamental 1, Fundamental 2 and upper-secondary education, with upper-secondary pathways and series determining depth and emphasis.",
      verifiedCoverage: ["Fundamental 1 calculation foundations", "Fundamental 2 Mathematics", "Upper-secondary general and scientific pathways"],
      sequenceStatus: "PARTIAL — subject presence and stage coverage verified; grade-by-grade syllabus strands and series differentiation pending.",
      chapterCount: null,
      pending: ["Retrieve Mathematics programmes for CP1 through CM2 and Sixième through Neuvième.", "Retrieve Seconde, Première and Terminale programmes by series.", "Verify arithmetic, algebra, geometry, measurement, statistics and probability sequence from official documents.", "Inspect current textbooks before recording any chapter count."]
    }
  ],
  officialSources: [
    {
      title: "Ministry of National Education — Central African education system",
      url: "https://www.mineduc-rca.net/site/educatif/systeme-educatif",
      use: "Official 2-6-4-3 structure, grade names, languages, examinations and subject placement."
    },
    {
      title: "Ministry of National Education — Ministry mandate",
      url: "https://www.mineduc-rca.net/ministere/mission",
      use: "Official responsibility for curriculum/programme revision, teaching materials and national examinations."
    },
    {
      title: "Ministry of National Education — Media library",
      url: "https://www.mineduc-rca.net/documents",
      use: "Official repository for decrees, orders, reports and school textbooks; individual subject documents must be inspected."
    },
    {
      title: "Ministry of National Education — official portal and 2026 updates",
      url: "https://mineduc-rca.net/",
      use: "Current Ministry announcements, 2026 examination results and 2026–2027 school-year information."
    },
    {
      title: "Radio Lengo Songo — Beafrika Fundamental 1 textbooks, 26 October 2026",
      url: "https://lengosongo.cf/2026/10/26/education-de-nouveaux-manuels-beafrika-pour-le-fondamental-1/",
      use: "Secondary reporting on newly presented locally developed French and calculation textbooks; not used as proof of science syllabus revision."
    },
    {
      title: "Global Partnership for Education — Central African Republic",
      url: "https://www.globalpartnership.org/where-we-work/central-african-republic",
      use: "Context on system-strengthening and education reform priorities; not a subject syllabus."
    }
  ],
  reconciliationRules: [
    "Use canonical country name Central African Republic; retain République centrafricaine and RCA as aliases.",
    "Keep SVT distinct from Chemistry and Physics; keep combined Physique-Chimie intact where that is the official course.",
    "Do not force separate Biology, Chemistry and Physics chapter lists into every Fundamental 1 or Fundamental 2 grade.",
    "Separate upper-secondary series and pathways before mapping specialist subject content.",
    "Treat Ministry textbook counts as unverified until the actual current approved textbook contents are inspected.",
    "Do not count the Beafrika French/calculation manuals as evidence of a complete science curriculum revision."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsReviewed: 4,
    educationStagesMapped: 4,
    detailedGradeSequencesReconciled: 0,
    officialChapterCountsVerified: 0,
    longFormCbeNexusChaptersWritten: 0,
    status: "SOURCE MAP CREATED — obtain and extract current INRAP class-by-class programmes and Ministry-approved textbooks before writing chapter sequences."
  }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Central African Republic",
  gradeSequenceEvidence: "National education structure is 2-6-4-3: Fundamental 1 (CP1–CM2), Fundamental 2 (Sixième–Neuvième) and upper secondary (Seconde–Terminale). SVT, Physics and Mathematics are named disciplines in later stages; current adopted textbook contents and exact chapter order remain unverified.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.education.gouv.cf/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
