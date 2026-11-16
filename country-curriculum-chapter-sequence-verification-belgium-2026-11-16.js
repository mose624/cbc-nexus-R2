/* CBE Nexus — Belgium curriculum sequence verification.
 * Canonical alphabetical country index: Belgium (BEL).
 * Review date: 2026-11-16.
 * Belgium has no single national school curriculum: education is governed by
 * the Flemish, French-speaking (Wallonia-Brussels Federation) and
 * German-speaking Communities. Brussels schools follow the relevant Community.
 */
export const country = {
  name: "Belgium",
  isoAlpha3: "BEL",
  reviewDate: "2026-11-16",
  authorities: [
    "Flemish Community — Flemish Ministry of Education and Training",
    "French Community — Wallonia-Brussels Federation (Fédération Wallonie-Bruxelles)",
    "German-speaking Community — Ministry of the German-speaking Community"
  ],
  systemNotes: [
    "Curriculum authority is devolved to the three language Communities. A single Belgian national grade-by-grade sequence would be inaccurate.",
    "The French Community's common core (tronc commun) uses separate Mathematics and Science reference frameworks. The official Science framework explicitly addresses Biology, Chemistry and Physics within an integrated Science subject across primary and lower-secondary years; it does not create three independent national lower-secondary subject syllabuses.",
    "The French Community is changing the first year of secondary school for 2026/27, with more emphasis on core learning, Mathematics and Science. This is a Community-specific reform, not a nationwide Belgian change.",
    "In Flanders, minimum attainment goals (minimumdoelen/eindtermen) and specific attainment goals guide schools. Schools and school boards map goals to subjects and subject clusters; do not assume a single fixed textbook chapter sequence across all schools.",
    "On 23 October 2026, the Flemish Government gave principle approval to a draft decree for developing new secondary minimum goals. The government notice says the current goals remain in force until new goals are formally adopted and enter into effect. This is a draft framework process, not an already implemented replacement curriculum.",
    "The German-speaking Community has its own curriculum framework and school programme. Its subject sequences must be audited independently rather than inferred from Flanders or the French Community.",
    "Secondary education generally has three two-year stages, but grade names, pathways, subject allocation and transition dates vary by Community and school network.",
    "For Biology, Chemistry and Physics, distinguish integrated Science at lower-secondary level from specialist subjects in later secondary tracks. Mathematics is a distinct subject in all three systems."
  ],
  subjects: [
    {
      subject: "Biology",
      coverage: "French Community: integrated in the official Science reference framework in the common core, with explicit biological concepts and progression through primary and lower-secondary. Flanders: biological content is covered through minimum goals and school subject/subject-cluster mapping. German-speaking Community: separate community curriculum applies.",
      sequenceStatus: "French Community integrated-science themes verified; Flemish and German-speaking class-by-class mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedFrenchCommunityThemes: [
        "Biodiversity",
        "Relationships between living organisms and their environment",
        "Stages of life",
        "Nutrition in animals and associated systems",
        "Nutrition in green plants / photosynthesis"
      ],
      evidence: [
        "The official French Community Science reference framework synoptic table identifies Biology and distributes biological themes across primary years and secondary years S1–S3.",
        "The framework's S3 overview highlights nutrition in living organisms, including photosynthesis.",
        "Flemish attainment goals are not necessarily assigned to a single subject by Parliament; schools/school boards make the subject or cluster mapping."
      ],
      pending: ["Extract the full French Community Science framework's biology progressions by year and competency.", "Map Flemish biology-related minimum goals to the current secondary grades and school pathways.", "Retrieve the German-speaking Community's current Biology/Science programme and map grades.", "Identify upper-secondary specialist Biology programmes and practical requirements in each Community."]
    },
    {
      subject: "Chemistry",
      coverage: "French Community: integrated in the official Science reference framework in the common core, with matter, resources and chemical transformations. Flanders: chemistry-related minimum goals are mapped through school subject/subject clusters. German-speaking Community: separate community curriculum applies.",
      sequenceStatus: "French Community integrated-science themes verified; Flemish and German-speaking class-by-class mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedFrenchCommunityThemes: [
        "Environment and natural resources",
        "Composition/constitution of matter",
        "Chemical transformation of matter",
        "Transformation and conservation"
      ],
      evidence: [
        "The official French Community Science framework contains a Chemistry progression table and distributes matter, resources and chemical transformation themes across years.",
        "Its S3 overview states that chemical transformations are studied using the periodic table.",
        "Flemish schools map attainment goals into subjects or subject clusters; a fixed national Belgian chapter list does not exist."
      ],
      pending: ["Extract the complete French Community Chemistry progressions and competency descriptors.", "Map Flemish chemistry minimum goals to grades, pathways and school programmes.", "Retrieve the German-speaking Community's Chemistry/Science curriculum.", "Map upper-secondary specialist Chemistry and laboratory/SBA requirements separately."]
    },
    {
      subject: "Physics",
      coverage: "French Community: integrated in the official Science reference framework in the common core, covering states of matter, electricity, forces/pressure, sound/light and energy. Flanders: physics-related minimum goals are mapped through school subject/subject clusters. German-speaking Community: separate community curriculum applies.",
      sequenceStatus: "French Community integrated-science themes verified; Flemish and German-speaking class-by-class mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      verifiedFrenchCommunityThemes: [
        "States of matter and changes of state",
        "Electricity",
        "Force and pressure",
        "Sound and light",
        "Sources, forms and transformations of energy"
      ],
      evidence: [
        "The French Community's official Science framework has a Physics progression table distributing these themes across primary and lower-secondary years.",
        "Its S3 overview identifies electricity as energy and the principle of Archimedes as study content.",
        "The Flemish curriculum's attainment-goal structure does not prescribe one universal textbook sequence."
      ],
      pending: ["Extract the full French Community Physics progressions and practical competencies.", "Map Flemish physics-related minimum goals to current grades and tracks.", "Retrieve the German-speaking Community's current Physics/Science curriculum.", "Map upper-secondary specialist Physics and practical assessment separately."]
    },
    {
      subject: "Mathematics",
      coverage: "A distinct subject in the French Community common core, Flanders' attainment-goal framework and the German-speaking Community's curriculum. The precise progression, grade naming and pathway differ by Community.",
      sequenceStatus: "subject framework presence verified across the three-community system; complete grade-by-grade topic mapping pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "The French Community's common core has a separate Mathematics reference framework.",
        "Flanders uses minimum goals/attainment goals; new secondary minimum-goal development was at draft-decree stage in October 2026, while existing goals remain in force until replacement goals are adopted.",
        "The 2026/27 French Community first-year secondary reform strengthens Mathematics in its timetable.",
        "Belgium's three Community systems determine their own curriculum and subject progression."
      ],
      pending: ["Extract French Community Mathematics reference framework by year and competency.", "Map Flemish minimum goals and specific attainment goals to current grades and tracks; distinguish goals from school schemes of work.", "Retrieve German-speaking Community Mathematics curriculum and grade allocation.", "Map upper-secondary general, technical and vocational Mathematics pathways separately."]
    }
  ],
  sourceRegister: [
    {
      title: "Wallonia-Brussels Federation — official Science reference framework",
      url: "https://www.enseignement.be/public/docs/r-f-rentiel-de-sciences.pdf",
      use: "Primary source. Integrated Science framework with Biology, Chemistry and Physics progression tables across primary and lower-secondary years."
    },
    {
      title: "Wallonia-Brussels Federation Parliament — Education / common core reference frameworks",
      url: "https://www.pfwb.be/education",
      use: "Official description of the common core's separate Mathematics and Science reference frameworks."
    },
    {
      title: "Flanders — official secondary education minimum-goal reform notice",
      url: "https://www.vlaanderen.be/onderwijsprofessionals/nieuwsberichten/secundair-onderwijs-krijgt-nieuwe-minimumdoelen",
      use: "Official 26 October 2026 notice: draft decree for a new secondary minimum-goal framework; current goals remain until new goals take effect."
    },
    {
      title: "Flanders — Government decision on development of secondary minimum goals",
      url: "https://www.vlaanderen.be/vlaamse-regering/beslissingen-van-de-vlaamse-regering/ontwikkeling-en-vaststelling-van-minimumdoelen-secundair-onderwijs-wijziging-codex-secundair-onderwijs",
      use: "Official Government decision of 23 October 2026; draft decree and explanatory documents."
    },
    {
      title: "Flanders — 2026/27 secondary education regulatory changes",
      url: "https://www.vlaanderen.be/onderwijsprofessionals/regelgeving-data-en-onderzoek/regelgeving/wat-is-nieuw-schooljaar-2026-2027/secundair-onderwijs",
      use: "Official overview of school-year 2026/27 secondary regulatory changes."
    },
    {
      title: "Belgium — ICMI national mathematics education overview",
      url: "https://www.icmi-belgium.be/",
      use: "Secondary corroboration that education policy and curricula are determined by the three Communities and that each has its own framework."
    },
    {
      title: "European Commission — Education and Training Monitor 2025, Belgium",
      url: "https://op.europa.eu/webpub/eac/education-and-training-monitor/en/country-reports/belgium.html",
      use: "Cross-community overview of reforms and curriculum governance; contextual secondary source."
    },
    {
      title: "German-speaking Community — education portal",
      url: "https://ostbelgienbildung.be/",
      use: "Official portal for the German-speaking Community; source for separate local curriculum and school programmes to be extracted in the next verification pass."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithCommunityFrameworkEvidence: 4,
    subjectsWithFrenchCommunityDetailedThemeEvidence: 3,
    subjectsWithAllThreeCommunityGradeSequencesReconciled: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "community-governance-and-French-Community-science-themes-mapped; Flemish-and-German-speaking-grade-sequences-pending",
    note: "Belgium is not one national curriculum. French Community Science is integrated at lower-secondary level; Flemish attainment goals and German-speaking Community curricula must be mapped independently. Do not publish a single countrywide grade/chapter sequence until the three Community pathways are reconciled."
  }

  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; current official topic documents and actual textbook contents require direct extraction",
  "sources": [],
  "finding": "No new verified topic sequence or official textbook chapter count is asserted in this evidence refresh. Preserve any jurisdiction, language, pathway and integrated-science distinctions already recorded in this file."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; official grade/topic documents and actual textbook contents still require direct extraction",
  "finding": "This refresh does not assert a new verified topic sequence or official textbook chapter count. Preserve jurisdiction, language, pathway and integrated-science distinctions already documented.",
  "actualTextbookContentsInspected": false,
  "officialTextbookChapterCountsVerified": false,
  "cbEnexusLongFormChaptersWritten": false
},
};


export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Belgium",
  gradeSequenceEvidence: "Maintain separate Flemish, French-speaking and German-speaking Community maps; do not create a single Belgian national sequence.",
  textbookEvidence: "No textbook contents inspected; community-specific book lists and contents pages remain outstanding.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "Official jurisdiction-specific syllabus and textbook source retrieval remains outstanding.",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology (or integrated Life Science), Chemistry, Physics and Mathematics; then open approved/adopted student textbooks and record exact printed chapter headings and counts separately. Do not infer textbook chapters from syllabus themes."
};
