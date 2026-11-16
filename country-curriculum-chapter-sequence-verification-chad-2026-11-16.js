/* CBE Nexus — Chad curriculum sequence verification
 * Reviewed: 2026-11-16 | Canonical project index position: 38
 * Evidence map only. Distinguish the existing secondary programmes from the
 * primary curriculum currently being rewritten under PRET 2025–2029.
 */
export default {
  country: "Chad",
  aliases: ["Chad", "Tchad", "République du Tchad"],
  isoAlpha3: "TCD",
  canonicalIndex: 38,
  reviewedOn: "2026-11-16",
  educationStructure: {
    system: "Formal education includes pre-primary, fundamental education, secondary education and higher education.",
    secondaryGeneral: "A three-year cycle: Seconde, Première and Terminale, leading to the Baccalauréat.",
    fundamental: "Primary and middle/fundamental education; middle grades include Sixième, Cinquième, Quatrième and Troisième.",
    languages: ["French", "Arabic"],
    scienceDomain: ["Mathématiques", "Physique et Chimie", "Sciences de la Vie et de la Terre (SVT)"],
    sourceNotes: [
      "The published secondary general programmes group Mathematics, Physics and Chemistry, and Life and Earth Sciences in the Sciences and Technology domain.",
      "At middle-school level, Mathematics, Physics and Chemistry, and SVT are listed as distinct timetable subjects; Physics and Chemistry are alternated in their progression.",
      "Upper-secondary subject combinations differ by series, including A4, C, D, E and G."
    ]
  },
  currentReformContext: {
    programme: "Programme de Refondation de l'École Tchadienne (PRET 2025–2029)",
    statusAsOf2026: "Primary curriculum rewriting reached the final validation stage in October 2026; CM1 and CM2 programmes were finalized at a validation workshop, with pilot implementation and monitoring guidelines still to follow.",
    completedMilestone: "UNESCO-IBE reported on 17 October 2026 that rewriting of all primary curricula had been completed, following earlier pre-primary, CP and CE work and the CM1/CM2 validation.",
    implementationCaution: "Finalized/validated primary curriculum is not automatically evidence of nationwide implementation. Keep old/current textbooks and pilot/new programme status clearly labelled until official rollout dates are confirmed.",
    secondaryCaution: "The revalidated secondary general programme document available through Tchad Éducation identifies programmes elaborated in 2008 and posted in 2023; verify any later Ministry replacement before treating this as the definitive 2026 sequence."
  },
  subjects: [
    {
      subject: "Biology",
      officialLabel: "Sciences de la Vie et de la Terre (SVT)",
      curriculumPosition: "SVT is a named discipline in the fundamental/middle curriculum and the secondary Sciences and Technology domain. Upper-secondary C and D series include SVT; course depth and sequence vary by series.",
      verifiedCoverage: ["Middle classes including Sixième through Troisième", "Upper-secondary science series including C and D", "Primary curriculum rewrite under PRET includes new grade programmes, with science strands to be extracted"],
      sequenceStatus: "PARTIAL — middle/secondary subject presence verified; primary new curriculum is validated but detailed SVT learning outcomes and grade progression require document extraction.",
      chapterCount: null,
      pending: ["Extract SVT syllabus by middle class from the current official programme and Ministry library.", "Extract Seconde, Première and Terminale SVT programmes by series.", "Obtain the validated PRET primary programme files and map biological/natural-science outcomes by CP1 through CM2.", "Verify practical work, competencies, diagrams and examination objectives."]
    },
    {
      subject: "Chemistry",
      officialLabel: "Chimie (within Physique et Chimie / Physique-Chimie)",
      curriculumPosition: "Chemistry is combined with Physics as Physique et Chimie at middle level, with the two components alternated in the progression. At upper secondary, Physics-Chemistry is a subject in scientific series, with series-specific content.",
      verifiedCoverage: ["Middle classes: combined Physics and Chemistry course", "Upper-secondary scientific series including C, D and E"],
      sequenceStatus: "PARTIAL — combined course and pathway placement verified; component-by-component topic sequence and new primary science chemistry strands remain to be extracted.",
      chapterCount: null,
      pending: ["Extract the middle-school Physique et Chimie programme and preserve its alternating progression.", "Extract upper-secondary Physics-Chemistry content by class and series.", "Map primary PRET chemistry-related science outcomes after retrieving validated programme files.", "Verify experiments, laboratory safety, quantitative content and assessment."]
    },
    {
      subject: "Physics",
      officialLabel: "Physique (within Physique et Chimie / Physique-Chimie)",
      curriculumPosition: "Physics is combined with Chemistry at middle level; the official programme notes alternating progression. Upper-secondary scientific series include Physics-Chemistry, with differing series-specific requirements.",
      verifiedCoverage: ["Middle classes: combined Physics and Chemistry course", "Upper-secondary scientific series including C, D and E"],
      sequenceStatus: "PARTIAL — subject placement and combined-course structure verified; detailed grade-by-grade topic order pending.",
      chapterCount: null,
      pending: ["Extract the official middle-school Physique et Chimie progression by class.", "Extract upper-secondary programmes for Seconde, Première and Terminale by series.", "Verify mechanics, matter, energy, waves, electricity and practical investigations against the actual syllabus.", "Map assessment objectives and current textbook editions."]
    },
    {
      subject: "Mathematics",
      officialLabel: "Mathématiques",
      curriculumPosition: "A distinct discipline in fundamental/middle education and the secondary Sciences and Technology domain. Upper-secondary Mathematics varies by series; scientific series have more advanced requirements than literary/technical pathways.",
      verifiedCoverage: ["Middle classes including Sixième through Troisième", "Upper-secondary series A4, C, D, E and G with differentiated Mathematics programmes", "New primary curriculum programmes finalized through PRET validation"],
      sequenceStatus: "PARTIAL — official course presence and secondary series differentiation verified; detailed topic progression and validated primary outcomes remain to be extracted.",
      chapterCount: null,
      pending: ["Extract Mathematics programmes for each middle class.", "Extract Seconde, Première and Terminale Mathematics by series.", "Retrieve validated PRET primary Mathematics programmes for CP1 through CM2.", "Map arithmetic, algebra, geometry, measurement, data and probability according to official grade order."]
    }
  ],
  officialSources: [
    {
      title: "Ministry of National Education — National education platform and public digital library",
      url: "https://e-education.td/",
      use: "Official Ministry portal; public library exposes school manuals and programme documents."
    },
    {
      title: "Ministry of National Education — Public digital library",
      url: "https://e-education.td/public/bibliotheque",
      use: "Current catalogue includes Mathematics 6ème (official programme, 2024) and SVT 4ème (2024) among listed Ministry materials."
    },
    {
      title: "UNESCO-IBE — Validation of CM1 and CM2 curricula under PRET, 17 October 2026",
      url: "https://www.ibe.unesco.org/en/articles/chad-decisive-step-toward-validation-cm1-and-cm2-curricula-under-programme-refoundation-chadian",
      use: "Confirms primary curriculum rewrite milestone, finalized CM1/CM2 curricula and pilot-phase implementation guidance."
    },
    {
      title: "UNESCO-IBE — Support for Chad's curriculum transformation, 20 February 2026",
      url: "https://www.ibe.unesco.org/en/articles/unesco-ibe-continuously-supports-chad-transforming-national-education-system",
      use: "Documents PRET 2025–2029 and primary curriculum diagnostic/rewrite process."
    },
    {
      title: "Tchad Éducation — Programmes réactualisés de l'enseignement secondaire général",
      url: "https://tchadeducation.com/wp-content/uploads/2023/12/Tchad-Programmes-de-lEnseignement-Secondaire-General.pdf",
      use: "Secondary general programme document; sets out 2nde, 1ère and Terminale objectives and the Sciences et Technologie domain."
    },
    {
      title: "Tchad Éducation — Programmes de l'enseignement moyen",
      url: "https://tchadeducation.com/wp-content/uploads/2023/12/Tchad-Programmes-de-lEnseignement-Moyen.pdf",
      use: "Middle-school programme and timetable; identifies Mathematics, alternating Physics-Chemistry, and SVT."
    }
  ],
  reconciliationRules: [
    "Use canonical country name Chad and retain Tchad as an alias.",
    "Keep SVT distinct from Physics-Chemistry; do not rename SVT as Biology in official-source fields.",
    "Preserve the combined Physique et Chimie course where official programmes alternate the two components.",
    "Separate secondary upper-class series (A4, C, D, E, G) before creating subject sequences.",
    "Label the 2026 PRET primary programmes as validated/rewrite-complete where supported, but do not claim full nationwide implementation without rollout evidence.",
    "Do not equate textbook chapter counts, programme objectives and CBE Nexus-generated chapters."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsReviewed: 4,
    secondaryScienceDomainVerified: true,
    upperSecondarySeriesDifferentiated: true,
    primaryReformStatusRecorded: true,
    detailedGradeSequencesReconciled: 0,
    officialChapterCountsVerified: 0,
    longFormCbeNexusChaptersWritten: 0,
    status: "SOURCE MAP CREATED — extract the current Ministry middle/secondary programmes and validated PRET primary files before finalising grade sequences."
  }
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Chad",
  gradeSequenceEvidence: "Fundamental/middle programmes identify Mathematics, Physics-Chemistry and SVT; upper-secondary series A4, C, D, E and G differ. Primary curriculum rewriting under PRET 2025–2029 has reached validation milestones, but validated programmes must be distinguished from nationwide implementation.",
  textbookEvidence: "The referenced material is an official ministry or curriculum-authority source, or an explicit source-gap note; no adopted textbook contents page or full book PDF was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.education.gouv.td/",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and track; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep CBE Nexus-authored chapters separate."
};
