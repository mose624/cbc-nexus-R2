/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Côte d’Ivoire | ISO3: CIV | Reviewed: 2026-11-16
 * Official programme/source audit; not a claim that CBE Nexus chapters are complete.
 */
export const countryCurriculumVerification = {
  country: "Côte d’Ivoire",
  countryCode: "CIV",
  reviewDate: "2026-11-16",
  authority: "Ministère de l’Éducation nationale, de l’Alphabétisation et de l’Enseignement technique; Direction de la Pédagogie et de la Formation Continue (DPFC)",
  languageOfInstruction: "French",
  structure: {
    primary: "Enseignement primaire: CP1, CP2, CE1, CE2, CM1, CM2",
    lowerSecondary: "Premier cycle du secondaire: 6e, 5e, 4e, 3e",
    upperSecondary: "Second cycle: Seconde, Première, Terminale; subject offerings vary by series A, C, D and other pathways",
    compulsorySchooling: "Schooling is compulsory from ages 6 to 16 under the applicable education law."
  },
  curriculumStatus2026: {
    establishedProgramme: "Competency-based programmes (Approche Par Compétences, APC), with official annual progressions and programme execution guides.",
    reformStatus: "The Ministry validated revised pre-primary and collège curriculum tools in August 2025. Circular 0305 of 1 September 2025 authorised experimentation in pilot schools for 2025–2026, specifically pre-primary, CP1, CP2 and 6e. Do not treat the pilot as nationwide replacement across all grades.",
    currentOperationalEvidence: "DPFC published annual progressions for 2026–2027, including Mathematics, Physique-Chimie and SVT. Its secondary programme catalogue continues to list grade- and series-specific programmes.",
    caution: "Keep the established programme and pilot reform distinct until official implementation documents confirm each grade's rollout."
  },
  subjects: [
    {
      subject: "Biology",
      localName: "Sciences de la Vie et de la Terre (SVT)",
      status: "Distinct SVT programme from collège through lycée; the official science domain groups SVT with Physique-Chimie and Mathematics.",
      sequenceScope: "Collège programmes are grade-specific (6e, 5e, 4e, 3e). Lycée SVT programmes are series-specific (Seconde, Première and Terminale, with A/C/D variants where listed).",
      programmeStructure: "Competencies, themes, lessons, example learning situations, skills and teaching content.",
      chapterCount: null,
      chapterCountStatus: "Official programme lessons/themes are not textbook chapter counts; textbook contents must be checked separately.",
      pending: ["Extract lesson/theme sequence for each collège grade.", "Extract each lycée series and year separately.", "Compare approved 2026–2027 textbooks and record actual textbook chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Physique-Chimie (Chemistry component)",
      status: "Chemistry is taught within the combined Physique-Chimie discipline in the published collège and lycée programme catalogue.",
      sequenceScope: "Collège 6e–3e and lycée series-specific pathways; at upper secondary the official catalogue includes separate course/programme documents by series and year.",
      programmeStructure: "Competencies, themes, lessons, example learning situations, skills and teaching content within Physique-Chimie.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract chemistry lesson sequence from each Physique-Chimie grade/series programme.", "Preserve the integrated Physics-Chemistry structure where the official programme does so.", "Verify approved textbook contents and editions."]
    },
    {
      subject: "Physics",
      localName: "Physique (within Physique-Chimie)",
      status: "Physics is taught within the combined Physique-Chimie discipline in collège and lycée programme listings.",
      sequenceScope: "Collège 6e–3e and lycée series-specific pathways. In some upper-secondary series, approved books distinguish Physics and Chemistry components while the programme discipline remains Physique-Chimie.",
      programmeStructure: "Competencies, themes, lessons, example learning situations, skills and teaching content.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract physics lesson sequence by grade and series.", "Cross-check current 2026–2027 annual progression.", "Verify approved textbook contents and editions."]
    },
    {
      subject: "Mathematics",
      localName: "Mathématiques",
      status: "Distinct subject, with grade-specific collège programmes and series-specific lycée programmes.",
      sequenceScope: "Collège 6e–3e; lycée Seconde, Première and Terminale with A1/A2/C/D and other series distinctions as applicable.",
      programmeStructure: "Competencies, themes, lessons, example learning situations, skills and teaching content.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract lesson/theme sequence for each collège grade.", "Extract upper-secondary programmes by series and year.", "Verify approved 2026–2027 textbooks and contents."]
    }
  ],
  implementationNotes: [
    "Do not merge SVT and Physique-Chimie into one science subject: the official secondary catalogue lists them separately.",
    "Do not split Chemistry and Physics into wholly independent national disciplines where the official programme calls the subject Physique-Chimie; maintain internal topic tagging only where source documents support it.",
    "The official 2026–2027 annual progression portal lists Maths, Physique-Chimie and SVT separately.",
    "The 2025–2026 new-programme experiment is limited to named pilot grades and schools; it is not evidence that every grade nationwide has transitioned.",
    "The 2026–2027 approved textbook list should be used for textbook selection, but a list of approved titles is not itself a table of contents or chapter-count source."
  ],
  officialSources: [
    {
      title: "DPFC — Secondary educational programmes and execution guides",
      url: "https://dpfc-ci.net/documents/programmes-educatifs-et-guides-dexecution/programmes-educatifs-et-guides-dexecution-du-secondaire/",
      use: "Lists grade-specific Mathematics, Physique-Chimie and SVT programmes across collège and lycée series."
    },
    {
      title: "DPFC — Annual progressions 2026–2027",
      url: "https://dpfc-ci.net/documents/progressions/progressions-du-secondaire-2-3-2/",
      use: "Current annual progression listings for Maths, Physique-Chimie and SVT."
    },
    {
      title: "Ministry Circular 0305/MENA/CAB/DPFC, 1 September 2025",
      url: "https://dpfc-ci.net/dpfc/2026/textes_officiels/mena/1/Circulaire%20N%C2%B0%200305_%20Exp%C3%A9rimentation%20des%20nouveaux%20programmes%20%C3%A9ducatifs.pdf",
      use: "Defines the 2025–2026 pilot scope: pre-primary, CP1, CP2 and 6e in selected pilot schools."
    },
    {
      title: "Government of Côte d’Ivoire — Curriculum reform validation, 5 August 2025",
      url: "https://gouv.ci/index.php/actualite/reformes-curriculaires-le-mena-valide-les-nouveaux-programmes-du-pre-primaire-et-du-college-2349",
      use: "Reports validation of revised pre-primary tools and adoption of collège pedagogical tools."
    },
    {
      title: "MÉNA — Official education programme framework",
      url: "https://www.education.gouv.ci/index.php/Reseaux/enseignement",
      use: "Explains competency-based programme approach and role of DPFC learning progressions."
    },
    {
      title: "DPFC — Approved textbooks and teaching materials, 2026–2027",
      url: "https://dpfc-ci.net/dpfc/2026/textes_officiels/mena/1/Liste%20des%20manuels%20scolaires%2C%20des%20ouvrages%20et%20des%20supports%20didactiques%20agr%C3%A9es%20ou%20recommand%C3%A9s.pdf",
      use: "Approved/recommended textbook register; requires separate contents-page review for chapter counts."
    }
  ],
  reconciliation: {
    biology: "SVT programme confirmed; lesson-by-lesson grade and series extraction pending.",
    chemistry: "Combined Physique-Chimie programme confirmed; Chemistry component extraction pending.",
    physics: "Combined Physique-Chimie programme confirmed; Physics component extraction pending.",
    mathematics: "Distinct programme and series-specific structure confirmed; detailed sequence extraction pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official 2026–2027 programme and progression sources identified; 2025–2026 pilot reform scope distinguished; detailed topic and textbook chapter reconciliation remains pending."
};
