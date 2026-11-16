/* CBE Nexus — Cameroon curriculum sequence verification
 * Reviewed: 2026-11-16 | Canonical country index position: 35
 * Source map only; not a claim of completed long-form learning chapters.
 */
export default {
  country: "Cameroon",
  isoAlpha3: "CMR",
  canonicalIndex: 35,
  reviewedOn: "2026-11-16",
  educationStructure: {
    primary: "Six years in both major education sub-systems",
    anglophoneSecondary: "Seven years: five-year lower secondary and two-year upper secondary (5+2)",
    francophoneSecondary: "Seven years: four-year lower secondary and three-year upper secondary (4+3)",
    systems: ["Anglophone", "Francophone"],
    languages: ["English", "French"],
    pathways: ["General education", "Technical and vocational education"],
    sourceNotes: [
      "The two sub-systems have different grade/class naming, course structures and exit examinations.",
      "The anglophone upper-secondary science subject combinations include Mathematics, Chemistry, Physics and Biology in differing combinations.",
      "The francophone upper-secondary series include C (Mathematics and Physical Sciences) and D (Mathematics and Life and Earth Sciences)."
    ]
  },
  curriculumGovernance: {
    currentFramework: "MINESEC publishes separate official syllabuses for the anglophone and francophone sub-systems and for general and technical/professional education.",
    2025Decree: "Decree No. 075/PM of 12 May 2025 sets procedures for development of official curricula and school programmes, retaining recognition of the specific anglophone and francophone sub-systems.",
    2026Reform: "In August 2026, stakeholders began developing diagnostic tools for a future unified Curriculum Orientation Framework. This is a diagnostic and framework-development process, not an already implemented unified syllabus.",
    implementationCaution: "Do not merge the anglophone and francophone grade sequences or assume the proposed unified framework has replaced current programmes."
  },
  subjects: [
    {
      subject: "Biology",
      anglophoneLabel: "Biology",
      francophoneLabel: "Sciences de la Vie et de la Terre (SVT)",
      curriculumPosition: "A distinct upper-secondary subject in relevant science combinations; within first-cycle Science and Technology learning area at lower secondary. Francophone upper-secondary Series D includes Mathematics and Life and Earth Sciences.",
      sequenceStatus: "PARTIAL — official syllabus families identified; grade-by-grade topic extraction and reconciliation between sub-systems remain outstanding.",
      chapterCount: null,
      pending: ["Extract MINESEC anglophone Biology syllabus by Form and topic.", "Extract francophone SVT programmes by class and series.", "Map practical work, ecology, genetics, physiology and assessment objectives to the correct pathway.", "Compare current approved textbooks without treating book chapters as official syllabus units."]
    },
    {
      subject: "Chemistry",
      anglophoneLabel: "Chemistry",
      francophoneLabel: "Chimie",
      curriculumPosition: "A distinct upper-secondary subject and part of lower-secondary integrated Science and Technology. Chemistry is included in anglophone science combinations and francophone C/D science pathways.",
      sequenceStatus: "PARTIAL — official syllabus families identified; separate lower- and upper-secondary topic sequence extraction remains outstanding.",
      chapterCount: null,
      pending: ["Extract anglophone Chemistry syllabus by Form.", "Extract francophone Chemistry programme by class and series.", "Verify practical experiments, quantitative chemistry, safety and assessment objectives.", "Keep integrated lower-secondary science outcomes separate from specialist upper-secondary Chemistry."]
    },
    {
      subject: "Physics",
      anglophoneLabel: "Physics",
      francophoneLabel: "Physique",
      curriculumPosition: "A distinct upper-secondary subject and part of lower-secondary integrated Science and Technology. Physics is included in anglophone science combinations and francophone Series C.",
      sequenceStatus: "PARTIAL — official syllabus families identified; detailed grade/class topic order is not yet fully extracted.",
      chapterCount: null,
      pending: ["Extract anglophone Physics syllabus by Form.", "Extract francophone Physics programme by class and series.", "Map mechanics, matter, energy, waves, electricity and practical investigations only where confirmed in the official syllabus.", "Verify assessment objectives and textbook alignment."]
    },
    {
      subject: "Mathematics",
      anglophoneLabel: "Mathematics",
      francophoneLabel: "Mathématiques",
      curriculumPosition: "A distinct discipline in both sub-systems. Upper-secondary combinations and series vary; Mathematics is central to anglophone S1 and francophone C/D pathways, while other combinations may differ.",
      sequenceStatus: "PARTIAL — national syllabus portals identified; class-by-class content, options and specialist mathematics variants need extraction.",
      chapterCount: null,
      pending: ["Extract Mathematics syllabus for each anglophone Form.", "Extract francophone Mathematics programmes by class and series.", "Identify additional/pure mathematics options where officially specified.", "Map prerequisite progression, assessment and approved textbooks."]
    }
  ],
  officialSources: [
    {
      title: "MINESEC — Official syllabuses for anglophone and francophone sub-systems",
      url: "https://www.minesec.gov.cm/web/index.php/en/systeme-educatif-en/progammes-d-etudes-en",
      use: "Primary official entry point for general, technical and professional education syllabuses."
    },
    {
      title: "Prime Minister's Office — Decree No. 075/PM of 12 May 2025",
      url: "https://spm.gov.cm/site/?q=en/node/1436",
      use: "Official curriculum development procedure and protection of the two sub-system specificities."
    },
    {
      title: "MINESEC — First-cycle competence-based syllabus framework",
      url: "https://files.minesec.gov.cm/1T/LIT_POS_LEAN.pdf",
      use: "Science and Technology learning area includes Mathematics and Sciences (Physics, Chemistry, Technology, Life and Earth Sciences)."
    },
    {
      title: "MINESEC — Secondary textbook catalogue (2022/2023)",
      url: "https://www.minesec.gov.cm/web/attachments/article/272/Textbooks%20General%20Secondary%20Education%202022_2023.pdf",
      use: "Evidence that Biology, Chemistry, Physics, Pure Mathematics and Additional Mathematics appear as distinct textbook subjects in relevant classes; catalogue is not itself a current syllabus."
    },
    {
      title: "UNESCO-IBE — Cameroon curriculum orientation framework diagnostic, 1 September 2026",
      url: "https://www.ibe.unesco.org/en/articles/cameroon-strengthening-national-capacities-prepare-unified-curriculum-orientation-framework",
      use: "Current reform status: diagnostic tools and future framework development, not completed nationwide replacement."
    },
    {
      title: "Alberta International Education Guide — Cameroon",
      url: "https://www.alberta.ca/iqas-education-guide-cameroon",
      use: "Independent cross-check of school structure, sub-system duration and upper-secondary pathways."
    }
  ],
  reconciliationRules: [
    "Maintain separate anglophone and francophone curriculum maps.",
    "Do not confuse integrated first-cycle Science and Technology with specialist Biology, Chemistry and Physics courses.",
    "Do not merge general secondary with technical and vocational syllabuses.",
    "Do not treat the proposed unified Curriculum Orientation Framework as implemented before official adoption and rollout evidence.",
    "Do not equate syllabus modules, learning areas or textbook chapter counts with CBE Nexus-generated chapters."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsReviewed: 4,
    subSystemsRecognised: 2,
    detailedGradeSequencesReconciled: 0,
    officialChapterCountsVerified: 0,
    longFormCbeNexusChaptersWritten: 0,
    status: "SOURCE MAP CREATED — extract class-by-class official syllabuses separately for both sub-systems before chapter production."
  }
};
