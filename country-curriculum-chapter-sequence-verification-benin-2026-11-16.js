/* CBE Nexus — Benin curriculum sequence verification.
 * Canonical alphabetical country index: Benin (BEN).
 * Review date: 2026-11-16.
 * Subject mapping reflects the Beninese French-language secondary structure:
 * Mathematics, Sciences de la Vie et de la Terre (SVT), and Physique-Chimie-
 * Technologie (PCT). Biology is mapped within SVT; Physics and Chemistry are
 * components of PCT unless a pathway provides separate advanced subjects.
 */
export const country = {
  name: "Benin",
  isoAlpha3: "BEN",
  reviewDate: "2026-11-16",
  authority: "Ministère des Enseignements Secondaire, Technique et de la Formation Professionnelle (MESTFP); Direction de l'Enseignement Secondaire Général (DESG); Conseil National de l'Éducation (CNE)",
  systemNotes: [
    "The Ministry's Directorate of General Secondary Education is responsible for developing/proposing policy and regulations, supervising implementation of current study programmes, validating/certifying curricula and approving textbooks and teaching materials.",
    "The Ministry's public service catalogue explicitly provides access to current study programmes and official school textbook lists. The actual programme documents must be obtained before claiming chapter-level sequences.",
    "The general secondary system is organised into a first cycle (collège) and second cycle (lycée). The Ministry tracks completion and examination outcomes separately for the first and second cycles, including BEPC and Baccalauréat.",
    "The commonly used secondary subject nomenclature distinguishes Mathématiques, Sciences de la Vie et de la Terre (SVT), and Physique-Chimie-Technologie (PCT). Therefore, Biology is represented within SVT, while Physics and Chemistry are mapped within PCT; do not fabricate three standalone lower-secondary course sequences.",
    "The 2024 official authorised textbook order covered school years 2024–2025 and 2025–2026. It is useful evidence of approved learning materials but does not alone establish the authorised list for 2026–2027.",
    "At the 20–21 July 2026 preparatory seminar for the 2026–2027 school year, the National Education Council discussed curriculum revision, validated new curricula, pedagogical guides, competency-based approaches and the need for more systematic curriculum review. This indicates ongoing curriculum development and implementation work, not proof that every subject programme was newly replaced for 2026–2027.",
    "The Ministry's current 2026/27 news stream confirms the school year began in September 2026. The Ministry's exact current subject programme and grade-by-grade chapter sequence remains to be downloaded from its programme service or obtained from DESG.",
    "French is the principal language of instruction in the formal secondary programme; national-language literacy and promotion initiatives should be recorded separately from the subject curriculum."
  ],
  subjects: [
    {
      subject: "Biology",
      localSubject: "Sciences de la Vie et de la Terre (SVT)",
      coverage: "Biological content is taught within the integrated SVT subject in general secondary education. This record does not assert that Biology is a separate standalone subject at every grade.",
      sequenceStatus: "subject identity and Ministry programme authority verified; current grade-by-grade SVT themes and chapter sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry's curriculum authority and programme supervision functions are assigned to DESG; the official service catalogue provides current study programmes and textbook lists.",
        "A Ministry recruitment notice distinguishes teachers of Sciences de la Vie et de la Terre (SVT), corroborating the formal subject name.",
        "The actual current SVT programme document and textbook contents have not been retrieved in this verification pass."
      ],
      pending: ["Obtain the current 2026/27 official SVT programme from DESG and extract themes, competencies and sequence for each collège and lycée class.", "Extract approved SVT textbook chapters and distinguish chapters from programme learning situations.", "Map biological content separately from geology/ecology content within SVT.", "Record practical work, field observation and assessment requirements."]
    },
    {
      subject: "Chemistry",
      localSubject: "Physique-Chimie-Technologie (PCT) — chemistry component",
      coverage: "Chemistry is mapped as a component of the secondary PCT subject; do not represent it as a separate national course unless the applicable lycée series or programme specifies that.",
      sequenceStatus: "PCT subject identity verified; chemistry-specific grade-by-grade topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry's teacher recruitment documentation identifies Physique, Chimie et Technologie as a teaching discipline.",
        "The DESG is responsible for current study programme compliance and approval of teaching materials.",
        "The official programme service lists current programmes and school textbook lists, but the current PCT programme itself has not been extracted."
      ],
      pending: ["Obtain the 2026/27 PCT programme and extract chemistry topics by class in the official order.", "Distinguish chemistry topics from physics and technology strands.", "Retrieve approved PCT textbooks and verify their contents pages and chapter numbering.", "Map laboratory practicals, chemical safety and assessment competencies."]
    },
    {
      subject: "Physics",
      localSubject: "Physique-Chimie-Technologie (PCT) — physics component",
      coverage: "Physics is mapped as a component of the secondary PCT subject; separate advanced science pathways may require additional subject mapping.",
      sequenceStatus: "PCT subject identity verified; physics-specific grade-by-grade topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry's teacher recruitment documentation identifies Physique, Chimie et Technologie as a teaching discipline.",
        "The Ministry supervises application of current study programmes and conformity of teaching materials.",
        "No current official PCT grade-by-grade sequence or textbook chapter list has been extracted in this pass."
      ],
      pending: ["Obtain the 2026/27 PCT programme and extract physics topics by class in the official order.", "Separate physics from chemistry and technology strands without inventing independent course structures.", "Retrieve approved PCT textbooks and verify chapter headings and order.", "Map experiments, measurement skills and assessment competencies."]
    },
    {
      subject: "Mathematics",
      localSubject: "Mathématiques",
      coverage: "Distinct secondary subject across general education; the Ministry and National Education Council identify Mathematics as a key subject for scientific preparation and learning outcomes.",
      sequenceStatus: "national subject presence and 2026/27 priority verified; grade-by-grade topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The Ministry's September 2026 school-year launch coverage explicitly emphasises Mathematics and scientific subjects in secondary education.",
        "The Ministry's DESG is responsible for the current study programmes and textbook conformity in general secondary schools.",
        "The current Mathematics programme and approved textbook contents for each grade have not yet been extracted."
      ],
      pending: ["Obtain current 2026/27 Mathematics programmes for each collège and lycée class.", "Extract topics, competencies and sequence from official programme guides.", "Retrieve the approved textbook list and verify chapter headings for each grade and series.", "Map mathematics assessment requirements for BEPC and Baccalauréat pathways."]
    }
  ],
  sourceRegister: [
    {
      title: "MESTFP — General Secondary Education / Direction de l'Enseignement Secondaire Général",
      url: "https://enseignementsecondaire.gouv.bj/volet-enseignements/enseignement-secondaire-general",
      use: "Official authority for general secondary education; DESG supervises programmes in force and their application in public and private schools."
    },
    {
      title: "Benin Public Services — provision of current study programmes and school textbook lists",
      url: "https://catis.xroad.bj/publicservices/PS00179",
      use: "Official public service catalogue; confirms DESG service for making current study programmes and textbook lists available."
    },
    {
      title: "MESTFP — Missions and responsibilities of the directorates",
      url: "https://enseignementsecondaire.gouv.bj/les-directions",
      use: "Official DESG responsibilities include curriculum validation/certification, monitoring implementation, periodic curriculum evaluation and approval of textbooks/materials."
    },
    {
      title: "Official order No. 053/MESTFP of 2024 — authorised textbooks for 2024–2025 and 2025–2026",
      url: "https://kpakpatomedias.bj/wp-content/uploads/2024/10/manuel-scolaire-2024-2025.pdf",
      use: "Copy of ministerial order identifying the authorised textbook list for the two named school years. Secondary-hosted copy; not proof of the 2026–2027 list."
    },
    {
      title: "National Education Council — 2026 publication on the National Strategy for General Secondary Education",
      url: "https://cne.gouv.bj/avis-decisions/avis?year=2026",
      use: "Official CNE publication list, including an opinion dated 5 June 2026 on the national strategy for general secondary education."
    },
    {
      title: "2026–2027 secondary school preparation seminar — curriculum and quality priorities",
      url: "https://eduactions.bj/presse/rentree-scolaire-2026-2027-au-secondaire-i-le-defi-de-transformer-la-qualite-en-resultats",
      use: "11 August 2026 reporting on the 20–21 July CNE seminar; describes validated new curricula, pedagogical guides, competency-based approaches and remaining curriculum revision needs. Non-government publication reporting official seminar."
    },
    {
      title: "MESTFP — 2026/2027 news and school-year notices",
      url: "https://enseignementsecondaire.gouv.bj/actualite/nouvelles",
      use: "Official Ministry news stream confirms current 2026/27 school-year activity and current education-sector priorities."
    },
    {
      title: "MESTFP — Ministry portal",
      url: "https://enseignementsecondaire.gouv.bj/",
      use: "Official portal and route to curriculum, regulations, reports, statistics and programme resources."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithOfficialAuthorityOrProgrammeServiceEvidence: 4,
    subjectsWithVerifiedLocalSubjectIdentity: 4,
    subjectsWithDetailedGradeByGradeTopicSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "official-programme-authority-and-secondary-subject-structure-verified; 2026-27-programme-and-textbook-sequence-retrieval-pending",
    note: "Map Biology through SVT and Physics/Chemistry through PCT unless an official class/series programme establishes separate subjects. The 2024 textbook order applies to 2024–25 and 2025–26 only. Do not claim it is the current 2026–27 authorised list. No chapter counts or chapter-level sequences are invented."
  }

  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; current official topic documents and actual textbook contents require direct extraction",
  "sources": [],
  "finding": "No new verified topic sequence or official textbook chapter count is asserted in this evidence refresh. Preserve any jurisdiction, language, pathway and integrated-science distinctions already recorded in this file."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
};
