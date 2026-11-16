/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Croatia | ISO3: HRV | Review date: 2026-11-16
 * Source audit only; no claim that CBE Nexus notes or textbook chapters are complete.
 */
export const countryCurriculumVerification = {
  country: "Croatia",
  countryCode: "HRV",
  reviewDate: "2026-11-16",
  authority: "Ministry of Science, Education and Youth (MZOM), Republic of Croatia",
  languageOfInstruction: "Croatian; minority-language education models also operate.",
  structure: {
    primaryAndLowerSecondary: "Eight-year compulsory osnovna škola, Grades 1–8.",
    upperSecondary: "Secondary education follows primary school and varies by programme: typically four-year gymnasium, vocational and art pathways, with some vocational programmes of different duration.",
    scienceTransition: "Priroda i društvo in Grades 1–4; Priroda in Grades 5–6; Biology, Chemistry and Physics as distinct subjects in Grades 7–8."
  },
  curriculumStatus2026: {
    status: "The official MZOM national curriculum and subject-curriculum framework remains the reference for school implementation.",
    evidence: [
      "MZOM explains that school education is delivered through national curricula, subject curricula, teaching plans and school curricula.",
      "The official subject-curriculum catalogue identifies Biology NN 7/2019, Physics NN 10/2019, Chemistry NN 10/2019 and Mathematics NN 7/2019.",
      "The official primary-school curriculum timetable shows Mathematics in Grades 1–8, Nature and Society in Grades 1–4, Nature in Grades 5–6, and Biology, Chemistry and Physics in Grades 7–8."
    ],
    caution: "Upper-secondary provision varies by gymnasium and vocational programme. Do not extend the basic-school subject timetable to every secondary pathway."
  },
  subjects: [
    {
      subject: "Biology",
      localName: "Biologija",
      status: "Distinct compulsory subject in Grades 7–8; continues in gymnasium programmes and varies by secondary pathway.",
      sequenceScope: "The subject curriculum is issued for osnovne škole and gimnazije. In Grades 1–6, biological concepts are addressed through Priroda i društvo and Priroda rather than a separate Biology subject.",
      officialFramework: "Four macroconcepts: organisation of the living world; processes and interdependencies in the living world; energy in the living world; and scientific approach.",
      chapterCount: null,
      chapterCountStatus: "Official curriculum macroconcepts and outcomes are not textbook chapter counts.",
      pending: ["Extract learning outcomes and content by grade and gymnasium year.", "Map vocational programme variants where Biology is offered.", "Verify current approved textbook tables of contents and chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Kemija",
      status: "Distinct compulsory subject in Grades 7–8; upper-secondary availability and hours depend on gymnasium or vocational programme.",
      sequenceScope: "Official subject curriculum applies to osnovne škole and gimnazije. Earlier primary science is covered through integrated Nature and Society and Nature.",
      officialFramework: "Use the Chemistry subject curriculum outcomes, domains and progression; do not convert domains automatically into textbook chapters.",
      chapterCount: null,
      chapterCountStatus: "Official textbook chapter count not established.",
      pending: ["Extract grade-level outcomes and chemistry content sequence.", "Map gymnasium and vocational pathways separately.", "Check current approved textbook editions and contents."]
    },
    {
      subject: "Physics",
      localName: "Fizika",
      status: "Distinct compulsory subject in Grades 7–8; upper-secondary provision depends on programme and school type.",
      sequenceScope: "Official subject curriculum applies to osnovne škole and gimnazije. Earlier primary science is covered through integrated subjects.",
      officialFramework: "Use the Physics subject curriculum outcomes and content progression; preserve practical/inquiry expectations.",
      chapterCount: null,
      chapterCountStatus: "Official textbook chapter count not established.",
      pending: ["Extract grade-level outcomes and topic progression.", "Map gymnasium orientations and vocational pathways.", "Verify approved textbook tables of contents."]
    },
    {
      subject: "Mathematics",
      localName: "Matematika",
      status: "Separate compulsory subject throughout Grades 1–8 and offered in secondary programmes with programme-specific scope and hours.",
      sequenceScope: "The official primary timetable lists Mathematics in every grade from 1 to 8. The subject curriculum defines learning outcomes across the educational continuum; upper-secondary programmes must be mapped by pathway.",
      officialFramework: "Use the current official Mathematics subject curriculum and grade-level outcomes; do not infer chapter counts from annual teaching hours.",
      chapterCount: null,
      chapterCountStatus: "Official textbook chapter count not established.",
      pending: ["Extract grade-by-grade outcomes and progression.", "Map gymnasium and vocational mathematics variants.", "Verify approved textbook contents and editions."]
    }
  ],
  implementationNotes: [
    "Primary school is eight grades; avoid describing it as a six-year primary phase.",
    "The official national timetable establishes a clear science progression: integrated Priroda i društvo (1–4), Priroda (5–6), then separate Biology, Chemistry and Physics (7–8).",
    "Secondary school is not a single uniform pathway: gymnasiums, vocational schools and art schools have different programmes.",
    "Gymnasium orientations include general, language-oriented, classical, mathematics/physics/computer-science-oriented, and biology/chemistry-oriented.",
    "The subject curriculum catalogue records the formal publication references; detailed outcomes and approved textbook contents still require extraction."
  ],
  officialSources: [
    {
      title: "MZOM — National Curriculum",
      url: "https://mzom.gov.hr/istaknute-teme/odgoj-i-obrazovanje/nacionalni-kurikulum/125",
      use: "Explains the national curriculum system, subject curricula and teaching plans."
    },
    {
      title: "MZOM — Subject Curricula",
      url: "https://mzom.gov.hr/istaknute-teme/odgoj-i-obrazovanje/nacionalni-kurikulum/predmetni-kurikulumi/539",
      use: "Lists official subject curriculum publications including Biology, Physics, Chemistry and Mathematics."
    },
    {
      title: "Official Gazette NN 7/2019 — Biology curriculum decision",
      url: "https://narodne-novine.nn.hr/clanci/sluzbeni/2019_01_7_149.html",
      use: "Biology curriculum for primary schools and gymnasiums; confirms separate Biology in Grades 7–8 and continuity from earlier integrated science."
    },
    {
      title: "MZOM — National Curriculum for Primary School",
      url: "https://mzom.gov.hr/UserDocsImages/dokumenti/Obrazovanje/NacionalniKurikulum/NacionalniKurikulumi/Nacionalni%20kurikulum%20za%20osnovno%C5%A1kolski%20odgoj%20i%20obrazovanje.pdf",
      use: "Official primary subject timetable: Mathematics Grades 1–8; Nature and Society Grades 1–4; Nature Grades 5–6; Biology, Chemistry and Physics Grades 7–8."
    },
    {
      title: "Government of Croatia — Types of Secondary Schools",
      url: "https://gov.hr/?id=1029&lang=en&url=print",
      use: "Distinguishes gymnasium, vocational and art secondary pathways and gymnasium orientations."
    }
  ],
  reconciliation: {
    biology: "Official subject curriculum and Grades 7–8 placement confirmed; detailed outcomes and upper-secondary pathways pending.",
    chemistry: "Official subject curriculum and Grades 7–8 placement confirmed; detailed outcomes and upper-secondary pathways pending.",
    physics: "Official subject curriculum and Grades 7–8 placement confirmed; detailed outcomes and upper-secondary pathways pending.",
    mathematics: "Separate subject across Grades 1–8 confirmed; detailed outcomes and secondary pathway reconciliation pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official curriculum structure and subject publications identified; detailed outcome-by-outcome mapping, secondary pathway reconciliation and textbook chapter verification remain pending."
};
