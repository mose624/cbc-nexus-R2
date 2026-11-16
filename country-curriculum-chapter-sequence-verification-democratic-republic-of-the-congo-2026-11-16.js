/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Democratic Republic of the Congo | ISO3: COD | Review: 2026-11-16
 * Distinguishes current programme documents from the curriculum reform framework.
 */
export const countryCurriculumVerification = {
  country: "Democratic Republic of the Congo",
  alternateNames: ["DR Congo", "DRC", "République démocratique du Congo", "RDC"],
  countryCode: "COD",
  reviewDate: "2026-11-16",
  authority: "Ministère de l'Éducation Nationale et Nouvelle Citoyenneté (EDU-NC); Direction des Programmes Scolaires et Matériel Didactique (DIPROMAD)",
  languageOfInstruction: "French is the principal language of formal curriculum documentation; national-language resources and adaptations are also provided.",
  structure: {
    compulsoryBasicEducation: "Eight years: six years of primary (1re–6e année) followed by the two-year terminal cycle of basic education (7e–8e année, commonly 1re–2e secondaire).",
    secondary: "Humanités générales and technical streams generally continue for four years after the eight-year basic education; professional humanités have a distinct three-year structure.",
    scienceDomain: "The Domaine d'Apprentissage des Sciences (DAS) at the 7e/8e basic-education level is organised into Mathematics, Sciences de la Vie et de la Terre (SVT), and Sciences Physiques, Technologie et TIC (SPTTIC).",
    pedagogy: "Official programme matrices are organised around essential knowledge, learning situations and competencies; they are not necessarily textbook chapter lists."
  },
  curriculumStatus2026: {
    currentProgrammes: "The Ministry's national-programmes portal lists grade/year-specific programmes and teacher guides, including Mathematics, SVT and SPTTIC beginning in the 7e year of basic education and continuing into scientific humanités.",
    reform: "The Ministry launched development of a new national Curriculum Framework in November 2025. The Cadre d'Orientation Curriculaire (COC) was validated on 18 June 2026. This is a strategic orientation framework for harmonising and developing programmes; its validation alone does not prove that every subject programme and textbook has already been replaced nationwide.",
    implementationCaution: "Continue to map the published current programmes unless a specific new programme is officially issued and its implementation scope/date is documented.",
    scope: "General, scientific, technical and professional pathways must not be collapsed into a single sequence."
  },
  subjects: [
    {
      subject: "Biology",
      officialDiscipline: "Sciences de la Vie et de la Terre (SVT)",
      status: "Biological learning is organised in SVT rather than as a standalone Biology course throughout basic education. The Ministry provides SVT programmes and guides for the 7e and 8e years of basic education and scientific humanités.",
      sequenceScope: "Map 7e and 8e basic-education SVT separately from the four years of scientific humanités. The Ministry's programme corpus includes scientific humanités through 4e année (6e secondaire).",
      chapterCount: null,
      chapterCountStatus: "Official programme matrices and essential-knowledge lists are not automatically equivalent to textbook chapter counts.",
      pending: ["Extract every essential knowledge item and learning situation from the official 7e and 8e SVT programmes.", "Extract SVT progression for each of the four scientific-humanités years.", "Verify current official textbook tables of contents before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      officialDiscipline: "Sciences Physiques, Technologie et Technologies de l'Information et de la Communication (SPTTIC); later Physics-Chemistry programme groupings",
      status: "At the 7e/8e basic-education level, chemistry content is embedded in the broader physical-sciences/technology/TIC subdomain, not evidenced as a separate standalone course. At secondary level, official programmes and resources may group Chemistry with Physics as Physique-Chimie.",
      sequenceScope: "Do not fabricate a separate chemistry-only grade sequence where the official programme combines content. Extract chemistry concepts from the SPTTIC and Physics-Chemistry matrices and retain their original grade and pathway labels.",
      chapterCount: null,
      chapterCountStatus: "No verified official standalone Chemistry textbook chapter count.",
      pending: ["Extract chemistry-specific essential knowledge from 7e/8e SPTTIC matrices.", "Separate chemistry from physics only where the official programme makes the distinction possible.", "Map scientific and technical humanités variants and verify textbooks."]
    },
    {
      subject: "Physics",
      officialDiscipline: "Sciences Physiques, Technologie et Technologies de l'Information et de la Communication (SPTTIC); later Physics-Chemistry programme groupings",
      status: "At basic-education level, Physics is included in the integrated SPTTIC subdomain. In scientific secondary education, physical-science content is provided through the relevant programme matrices, sometimes grouped with Chemistry.",
      sequenceScope: "Map the integrated 7e/8e SPTTIC progression first, then extract physics content from each scientific-humanités year. Preserve combined Physics-Chemistry titles where that is the official course structure.",
      chapterCount: null,
      chapterCountStatus: "No verified official standalone Physics textbook chapter count.",
      pending: ["Extract 7e/8e SPTTIC learning content and practical work.", "Map physics topics across the four scientific-humanités years.", "Verify approved textbook contents and technical-stream variations."]
    },
    {
      subject: "Mathematics",
      officialDiscipline: "Mathématiques",
      status: "Mathematics is a distinct subdomain within the Domaine d'Apprentissage des Sciences. The Ministry portal lists grade/year-specific Mathematics programmes and supporting guides from 7e basic education through the four years of scientific humanités.",
      sequenceScope: "Map 7e and 8e basic-education programmes independently, followed by 1re–4e scientific-humanités programmes. Do not assume that scientific-stream progression represents all general, technical and professional pathways.",
      chapterCount: null,
      chapterCountStatus: "Programme matrices and learning situations are not official textbook chapter counts.",
      pending: ["Extract all essential knowledge, competencies and learning situations for 7e and 8e.", "Extract and sequence all four scientific-humanités Mathematics programmes.", "Map non-scientific and technical programme variants; verify textbook contents."]
    }
  ],
  implementationNotes: [
    "The Ministry's current portal explicitly groups the Science Learning Domain into Mathematics, SVT, and SPTTIC, with year-specific programmes and teacher guides.",
    "For basic education, do not present Biology, Chemistry and Physics as three independent national courses in every grade: SVT and SPTTIC are the official programme groupings.",
    "The official SVT programme PDF describes the reform of 7e/8e basic education and the scientific-humanités programmes; it states that 7e/8e programmes were generalised and that scientific-humanités programme development extended through the later years.",
    "The 2026 COC validation is a curriculum-orientation milestone, not proof of nationwide replacement of all current subject programmes.",
    "Primary science appears within the primary learning/Discovery programme; this audit's specialist subject records focus on the officially named science subdomains and secondary pathways."
  ],
  officialSources: [
    {
      title: "EDU-NC — Programmes nationaux",
      url: "https://edu-nc.gouv.cd/programmes-nationaux",
      use: "Official national programme portal and descriptions of primary and secondary disciplines."
    },
    {
      title: "EDU-NC — National programmes (English portal)",
      url: "https://edu-nc.gouv.cd/national-programmes",
      use: "Lists downloadable Mathematics, SVT and SPTTIC programmes and guides by year, beginning in 7e basic education and continuing through scientific humanités."
    },
    {
      title: "EDU-NC — Educational programmes: 6e secondaire / 4e scientific humanités SVT (PDF)",
      url: "https://edu-nc.gouv.cd/wp-content/uploads/2022/09/MEPST_Programmes-Educatifs_6e-Sec_4-HS_SVT.pdf",
      use: "Official SVT programme preface describing the reformed basic-education programmes and the scientific-humanités programme progression."
    },
    {
      title: "EDU-NC — Structure et niveaux d'enseignement",
      url: "https://edu-nc.gouv.cd/niveaux",
      use: "Official structure: six-year primary, two-year terminal basic-education cycle, and general/technical/professional humanités."
    },
    {
      title: "EDU-NC — Validation du Cadre d'Orientation Curriculaire, 19 June 2026",
      url: "https://edu-nc.gouv.cd/actualites/validation-du-cadre-d-orientation-curriculaire-pour-une-reforme-du-systeme-educatif",
      use: "Confirms COC validation on 18 June 2026 and its role as a reference for future programme design, harmonisation and implementation."
    },
    {
      title: "EDU-NC — Curriculum framework development launch, 19 November 2025",
      url: "https://edu-nc.gouv.cd/news/the-ministry-launches-the-development-of-the-new-curricular-framework-for-inclusive-quality-education",
      use: "Documents the start of development of the new national curriculum framework."
    },
    {
      title: "EDU-NC — Cadre d'Orientations Curriculaires",
      url: "https://edu-nc.gouv.cd/documentation/cadre-dorientations-curriculaires-de-la-republique-democratique-du-congo",
      use: "Official documentation page for the validated curriculum orientation framework."
    }
  ],
  reconciliation: {
    biology: "Mapped to SVT; separate grade-level extraction pending.",
    chemistry: "Mapped to SPTTIC/combined Physics-Chemistry where official; standalone sequence not assumed.",
    physics: "Mapped to SPTTIC/combined Physics-Chemistry where official; standalone sequence not assumed.",
    mathematics: "Separate official subdomain; year-specific programme documents identified.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official programme architecture, basic-education structure and 2026 curriculum-reform milestone verified; detailed grade-by-grade content extraction, pathway reconciliation and textbook chapter counts remain pending."
};
