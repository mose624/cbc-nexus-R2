/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Djibouti | ISO3: DJI | Review: 2026-11-16
 * Distinguishes fundamental curriculum from general and vocational secondary programmes.
 */
export const countryCurriculumVerification = {
  country: "Djibouti",
  alternateNames: ["République de Djibouti"],
  countryCode: "DJI",
  reviewDate: "2026-11-16",
  authority: "Ministère de l'Éducation Nationale et de la Formation Professionnelle (MENFOP); CRIPEN; Inspection Générale de l'Éducation Nationale (IGEN)",
  languageOfInstruction: "French and Arabic are official languages of instruction; Afar and Somali are national languages recognised in the education system.",
  structure: {
    fundamentalEducation: "The reformed fundamental curriculum is designed as a continuous progression from 1re to 9e année, with primary/base and moyen (middle) stages. The historical legal structure describes five primary years and a four-year moyen cycle; current curriculum portals publish stage-specific subject programmes.",
    secondaryGeneral: "General secondary is organised through Seconde, Première and Terminale, with programmes varying by series and level.",
    secondaryVocational: "Vocational programmes are separately documented for CFP, CAP, BAC Pro and BTS, including Mathematics and Physics-Chemistry.",
    framework: "Competency-Based Approach (Approche Par Compétences, APC). National curriculum documents use competencies, learning situations and annual progression; these should not be assumed to equal textbook chapter counts."
  },
  curriculumStatus2026: {
    currentFramework: "The Education and Training Master Plan (SDEF) 2021–2035 was adopted by Law No. 22/AN/23/9ème L. The associated fundamental curriculum reform began in 2019 and the master plan records generalisation across grades from the 2024 school year.",
    scienceProgression: "The revised fundamental curriculum introduces Physics-Chemistry in 6e année rather than 8e année and strengthens SVT, which was already present in 6e année.",
    2026Evidence: "The IGEN/MENFOP resource portal lists fundamental curricula for Mathematics, SVT and Physics-Chemistry and secondary programmes compiled by level (Seconde, Première, Terminale) and by discipline. Official 2026/27 administrative documents include annual calendars and school-year guidance, not evidence of a replacement science curriculum.",
    caution: "Keep fundamental SVT and Physics-Chemistry distinct from secondary SVT and PC programmes. Secondary series and vocational programmes have different subject combinations."
  },
  subjects: [
    {
      subject: "Biology",
      officialDiscipline: "Sciences de la Vie et de la Terre (SVT)",
      status: "SVT is an official subject in the moyen stage of fundamental education and in general secondary education. Biological content is taught within SVT rather than as a standalone Biology subject throughout all grades.",
      sequenceScope: "Map SVT moyen by its published grade-level curriculum, then map Seconde, Première and Terminale programmes separately. Retain any series-specific differences.",
      chapterCount: null,
      chapterCountStatus: "Official curriculum progression and competency units are not verified textbook chapter counts.",
      pending: ["Extract the full SVT moyen curriculum by grade, competency, learning situation and annual progression.", "Extract SVT programmes for Seconde, Première and Terminale by series.", "Verify current textbook tables of contents before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      officialDiscipline: "Physique-Chimie (PC); Physics-Chemistry in fundamental education",
      status: "Chemistry is integrated with Physics in the official Physics-Chemistry subject at fundamental level and in secondary general and vocational programmes; it is not established here as a separate national subject at every grade.",
      sequenceScope: "Preserve the combined PC designation. Extract chemistry learning content from each grade-level Physics-Chemistry programme and distinguish fundamental, general-secondary and vocational pathways.",
      chapterCount: null,
      chapterCountStatus: "No verified standalone official Chemistry textbook chapter count.",
      pending: ["Extract chemistry-specific content from the fundamental Physics-Chemistry curriculum, beginning in 6e année.", "Map chemistry content in Seconde, Première and Terminale PC programmes.", "Map CFP, CAP, BAC Pro and BTS variants and verify textbook contents."]
    },
    {
      subject: "Physics",
      officialDiscipline: "Physique-Chimie (PC); Physics-Chemistry in fundamental education",
      status: "Physics is taught in the combined Physics-Chemistry subject. The reformed fundamental curriculum moves the start of Physics-Chemistry to 6e année rather than 8e année.",
      sequenceScope: "Map the combined PC curriculum from 6e through 9e année, then secondary general and vocational programmes. Keep Physics and Chemistry strands linked to the original combined programme.",
      chapterCount: null,
      chapterCountStatus: "No verified standalone official Physics textbook chapter count.",
      pending: ["Extract physics-specific content and practical activities from fundamental PC programmes.", "Map PC progression across Seconde, Première and Terminale and series.", "Map vocational programme differences and verify textbook contents."]
    },
    {
      subject: "Mathematics",
      officialDiscipline: "Mathématiques",
      status: "Mathematics is a distinct fundamental curriculum and a named discipline in general secondary and vocational programmes.",
      sequenceScope: "Map Mathematics in the moyen stage by grade, then Seconde, Première and Terminale by series. Keep CFP, CAP, BAC Pro and BTS Mathematics pathways separate.",
      chapterCount: null,
      chapterCountStatus: "Curriculum competencies and annual progressions are not textbook chapter counts.",
      pending: ["Extract all grade-level Mathematics competencies and learning situations in the fundamental curriculum.", "Extract secondary Mathematics programmes by level and series.", "Map vocational Mathematics programmes and verify textbook tables of contents."]
    }
  ],
  implementationNotes: [
    "The official IGEN curriculum portal lists separate fundamental Mathematics, SVT and Physics-Chemistry curricula; the CRIPEN fundamental curriculum page corroborates SVT moyen, Maths moyen and PC moyen.",
    "The SDEF 2021–2035 states that revised curricula are competency-based and continuous from 1re to 9e année.",
    "The SDEF specifically records Physics-Chemistry starting in 6e année instead of 8e année and strengthened SVT from 6e année.",
    "Secondary programmes are available compiled by Seconde, Première and Terminale and by discipline. Do not infer identical content across all series.",
    "Vocational CFP, CAP, BAC Pro and BTS programmes list Mathematics and Physics-Chemistry separately from the general secondary programme.",
    "The 2026/27 school-year circulars and annual calendars are operational documents, not proof of a new national science syllabus."
  ],
  officialSources: [
    {
      title: "IGEN Djibouti — Les curricula",
      url: "https://sites.google.com/view/igendjibouti/ressources/les-curricula",
      use: "Official inspection resource portal listing fundamental curriculum orientation, Mathematics, SVT, Physics-Chemistry, secondary programmes by level and discipline, and vocational programmes."
    },
    {
      title: "CRIPEN — Curricula Fondamental",
      url: "https://cripen.dj/index.php/curricula-de-base/",
      use: "National curriculum production centre listing SVT moyen, Mathematics moyen and Physics-Chemistry moyen curriculum resources."
    },
    {
      title: "Journal Officiel — Law No. 22/AN/23/9ème L adopting SDEF 2021–2035",
      url: "https://www.journalofficiel.dj/texte-juridique/loi-n22-an-23-9eme-l-portant-adoption-du-schema-directeur-de-leducation-et-de-la-formation/",
      use: "Legal adoption of the 2021–2035 Education and Training Master Plan and its implementation through five-year action plans."
    },
    {
      title: "Journal Officiel — SDEF 2021–2035 reference document",
      url: "https://www.journalofficiel.dj/wp-content/uploads/2024/08/schema_directeur_2021-2035.pdf",
      use: "Explains competency-based fundamental curriculum reform, continuous 1re–9e year progression, generalisation from 2024, and Physics-Chemistry starting in 6e rather than 8e year with strengthened SVT."
    },
    {
      title: "CRIPEN — Seconde programmes compilation (2025)",
      url: "https://cripen.dj/wp-content/uploads/2025/05/Programmes-compile-seconde.pdf",
      use: "Officially hosted secondary programme compilation with SVT, Mathematics and Physics-Chemistry sections."
    },
    {
      title: "MENFOP Digital Portal — Guides moyens",
      url: "https://www.education.dj/portail/guide9eme.php",
      use: "Government education portal with middle-stage subject guides, including SVT."
    },
    {
      title: "MENFOP/IGEN — Official documents for 2026 school year",
      url: "https://sites.google.com/view/igendjibouti/docs-officiels/menfop",
      use: "Lists 2026 rentrée circulars and annual breakdown documents; used to distinguish current administrative guidance from curriculum revision."
    },
    {
      title: "DGECE — National examinations",
      url: "https://www.dec-menfop.com/",
      use: "National examinations authority and 2026 examination session information, including BEF and general/professional baccalaureates."
    }
  ],
  reconciliation: {
    biology: "Mapped to SVT in fundamental moyen and general secondary; grade-by-grade extraction pending.",
    chemistry: "Mapped within combined Physics-Chemistry (PC), including fundamental and secondary programmes.",
    physics: "Mapped within combined Physics-Chemistry (PC), beginning in fundamental 6e année under the revised curriculum.",
    mathematics: "Distinct fundamental, general-secondary and vocational curriculum; detailed extraction pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official curriculum architecture, competency-based reform, science subject timing and 2026 resource listings verified; detailed grade-by-grade outcomes, secondary series mapping and textbook chapter counts remain pending."
};
