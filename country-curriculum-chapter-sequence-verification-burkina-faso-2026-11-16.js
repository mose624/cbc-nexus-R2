/**
 * CBE Nexus country curriculum verification
 * Country: Burkina Faso
 * Canonical country index: 31
 * Reviewed: 2026-11-16
 *
 * Important terminology: Biology is commonly represented through Sciences
 * de la Vie et de la Terre (SVT); Chemistry is not necessarily a standalone
 * post-primary subject in the reform curriculum, where Sciences physiques
 * integrates physics and chemistry. Do not invent four independent national
 * chapter sequences where the official curriculum is integrated.
 */
export const countryCurriculumVerification = {
  country: "Burkina Faso",
  countryIndex: 31,
  reviewedOn: "2026-11-16",
  authorities: [
    "Ministère de l'Éducation nationale, de l'Alphabétisation et de la Promotion des Langues nationales (MENAPLN)",
    "Ministère de l'Enseignement secondaire et de la Formation professionnelle et technique"
  ],
  system: {
    curriculumApproach: "Competency-oriented curriculum reform using the Approche Pédagogique Intégratrice (API), with a continuum spanning preschool, primary, post-primary and non-formal education.",
    disciplinaryField: "Mathématiques, Sciences et Technologie groups Mathematics, Sciences physiques, Sciences de la vie et de la terre (SVT) and ICT as related disciplines.",
    postPrimaryGrades: "Post-primary commonly covers Sixième, Cinquième, Quatrième and Troisième. Upper-secondary lycée classes include Seconde, Première and Terminale, with streams such as C, D and E where applicable.",
    reformStatus: "The official Faso e-education portal publishes reform curricula and supporting guides for primary and post-primary levels. The portal lists subject/grade-specific documents, but publication on the portal alone does not establish that every school or grade has completed transition. Maintain a legacy/current implementation distinction until national rollout by cohort is confirmed.",
    2026Update: "On 7 May 2026, the Council of Ministers adopted a decree reorganising post-primary and secondary education. This concerns organisation and pathways; it does not by itself prove that new detailed subject curricula or chapter orders have entered nationwide use.",
    sources: [
      "https://www.fasoeducation.bf/espace-enseignants/reforme-curriculaire.html",
      "https://www.education.gov.bf/accueil",
      "https://gouvernement.gov.bf/conseil-des-ministres/conseil-des-ministres-n15-du-07-mai-2026/",
      "https://www.education.gov.bf/fileadmin/user_upload/cahier_1_textes_fondamentaux_du_systeme_educatif_c.pdf"
    ]
  },
  subjects: [
    {
      subject: "Biology",
      officialName: "Sciences de la Vie et de la Terre (SVT)",
      verifiedPosition: "Biological and earth-science learning is represented through SVT rather than a universally separate subject titled Biology in the post-primary reform curriculum.",
      verifiedGradeCoverage: "The official reform portal lists SVT curriculum documents for Sixième and Troisième and pedagogical guides for Sixième, Cinquième and Quatrième. The listed reform-document set is not yet a complete year-by-year national sequence.",
      sequenceEvidence: "Faso e-education's reform-curriculum register explicitly lists SVT for Sixième and Troisième; the Ministry's teacher portal lists SVT guides for Sixième, Cinquième and Quatrième. The competency framework groups SVT within the Mathematics, Sciences and Technology disciplinary field.",
      chapterCount: null,
      sequenceStatus: "SVT subject family and selected post-primary grade resources verified; detailed competency/topic order for every grade and actual textbook chapter count pending.",
      sources: [
        "https://www.fasoeducation.bf/espace-enseignants/reforme-curriculaire.html",
        "https://www.education.gov.bf/accueil",
        "https://www.fasoeducation.bf/espace_enseignants/reforme_curriculaire/curricula_enf/curricula_enf_2e_annee.pdf"
      ]
    },
    {
      subject: "Chemistry",
      officialName: "Chimie, within Sciences physiques at post-primary level where integrated",
      verifiedPosition: "The reform portal lists Sciences physiques curriculum for Quatrième and Troisième, rather than a separate post-primary Chemistry curriculum. Chemistry should therefore be mapped as a component of integrated physical sciences at those levels unless a distinct lycée or examination syllabus is established.",
      verifiedGradeCoverage: "Sciences physiques: Quatrième and Troisième in the published post-primary reform curriculum. Upper-secondary separate Chemistry syllabus coverage was not established from the official materials reviewed.",
      sequenceEvidence: "The official curriculum PDF is titled for the post-primary second sub-cycle (Quatrième and Troisième) and identifies the disciplinary field Mathematics, Sciences and Technology, with Sciences physiques as the subject. The national official-programmes listing also identifies Sciences physiques programmes in Quatrième, Troisième, Seconde C, Première C-D-E and Terminale C-D-E; the latter is a supplementary programmes portal and needs confirmation against current ministry-issued syllabuses.",
      chapterCount: null,
      sequenceStatus: "Integrated Sciences physiques position verified for Quatrième–Troisième; exact Chemistry topic boundaries, lycée syllabus status and textbook chapter count pending.",
      sources: [
        "https://www.fasoeducation.bf/espace-enseignants/reforme-curriculaire.html",
        "https://www.fasoeducation.bf/espace_enseignants/reforme_curriculaire/curricula_postprimaire/sciences_physiques/curricula_sciences_physiques_4e_3e.pdf",
        "https://www.cursusscolaires.bf/index.php/Programmes.html"
      ]
    },
    {
      subject: "Physics",
      officialName: "Sciences physiques",
      verifiedPosition: "Physics is taught within Sciences physiques at post-primary level in the reform curriculum; it should not be represented as a separate standalone national subject for Quatrième and Troisième without evidence of a separate pathway.",
      verifiedGradeCoverage: "Official reform curriculum: Quatrième and Troisième. A supplementary official-programmes listing identifies Sciences physiques programmes for Quatrième, Troisième, Seconde C, Première C-D-E and Terminale C-D-E.",
      sequenceEvidence: "The Ministry-hosted reform PDF is explicitly the Sciences physiques curriculum for the post-primary second sub-cycle (Quatrième and Troisième), dated October 2018. The programmes listing provides additional lycée class coverage but must be checked against current ministry-approved programme versions before treating it as definitive.",
      chapterCount: null,
      sequenceStatus: "Integrated physical-sciences subject and selected grade coverage verified; detailed lesson/content progression, practical sequence and textbook chapter count pending.",
      sources: [
        "https://www.fasoeducation.bf/espace_enseignants/reforme_curriculaire/curricula_postprimaire/sciences_physiques/curricula_sciences_physiques_4e_3e.pdf",
        "https://www.fasoeducation.bf/espace-enseignants/reforme-curriculaire.html",
        "https://www.cursusscolaires.bf/index.php/Programmes.html"
      ]
    },
    {
      subject: "Mathematics",
      officialName: "Mathématiques",
      verifiedPosition: "Mathematics is a distinct discipline within the Mathematics, Sciences and Technology field.",
      verifiedGradeCoverage: "The official reform portal lists post-primary Mathematics curricula for Sixième, Cinquième, Quatrième and Troisième. Ministry teacher resources also list pedagogical guides for Sixième, Cinquième and Quatrième.",
      sequenceEvidence: "The Faso e-education curriculum register lists Mathematics curriculum documents by each of the four post-primary grades. The official teacher portal separately lists Mathematics guides for Sixième, Cinquième and Quatrième. Detailed competency sequence, annual distribution and exact content headings still require extraction from the linked documents.",
      chapterCount: null,
      sequenceStatus: "Separate subject and four post-primary grade curriculum files verified; detailed grade-by-grade topic sequence and official textbook chapter count pending.",
      sources: [
        "https://www.fasoeducation.bf/espace-enseignants/reforme-curriculaire.html",
        "https://www.education.gov.bf/accueil",
        "https://www.fasoeducation.bf/espace_enseignants/reforme_curriculaire/curricula_enf/curricula_enf_2e_annee.pdf"
      ]
    }
  ],
  outstandingWork: [
    "Download and extract each grade-specific SVT, Sciences physiques and Mathematics curriculum document listed on the official reform portal; transcribe competencies, content, lesson order, hours and assessment.",
    "Reconcile the reform curriculum with legacy programmes and verify which cohorts and schools are using each version in 2026/2027.",
    "Establish the current upper-secondary lycée syllabus for Biology/SVT, Chemistry and Physics separately, including C, D and E streams where relevant.",
    "Verify whether any separate Chemistry course exists in upper-secondary general or technical/vocational pathways; do not split integrated Sciences physiques by assumption.",
    "Retrieve official textbooks and teacher guides to count actual textbook chapters; competency units and learning activities must not be counted as textbook chapters.",
    "Record Mathematics grade-level sequences and practical/application activities from the official grade files."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithOfficialSubjectFamilyOrStatusVerified: 4,
    subjectRecordsWithSelectedGradeCoverageVerified: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedGradeByGradeSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }
};
