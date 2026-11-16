/**
 * CBE Nexus — curriculum chapter-sequence verification register
 * Country: Australia (canonical country index position 13; source-map batch 03)
 * Audit date: 2026-11-16
 *
 * Scope: national Australian Curriculum Version 9.0, Foundation–Year 10, plus
 * agreed senior-secondary subject frameworks. Implementation and certification
 * are determined by state/territory and school-system authorities.
 */
export const australiaCurriculumVerification = {
  auditDate: "2026-11-16",
  country: "Australia",
  isoAlpha3: "AUS",
  canonicalIndexPosition: 13,
  sourceMapBatch: 3,
  authority: "Australian Curriculum, Assessment and Reporting Authority (ACARA); Australian Government Department of Education; state and territory curriculum, assessment and certification authorities",
  levelReviewed: "Foundation–Year 10 national curriculum; senior secondary Years 11–12 subject frameworks",
  language: "English; schools may provide language programmes and additional language support",
  officialSources: [
    "https://www.australiancurriculum.edu.au/f-10-curriculum/f-10-curriculum-overview/",
    "https://www.australiancurriculum.edu.au/curriculum-information/understand-this-learning-area/science/",
    "https://www.australiancurriculum.edu.au/curriculum-information/understand-this-learning-area/mathematics/",
    "https://www.acara.edu.au/curriculum/senior-secondary",
    "https://www.australiancurriculum.edu.au/help/f-10-curriculum-overview/implementation-of-the-australian-curriculum0/",
    "https://www.education.gov.au/australian-curriculum"
  ],
  nationalFramework: {
    currentVersion: "Australian Curriculum Version 9.0 (F–10), endorsed by education ministers in April 2022 and released May 2022; jurisdictions determine their own implementation timelines and delivery.",
    f10Science: "Science is taught from Foundation to Year 10 as one learning area. It is organised around three interrelated strands: Science understanding, Science as a human endeavour, and Science inquiry. Within Science understanding are Biological sciences, Chemical sciences, Earth and space sciences, and Physical sciences. Biology, Chemistry and Physics are not separate compulsory national F–10 subject sequences.",
    f10Mathematics: "Mathematics is taught from Foundation to Year 10 and organised into six interrelated strands: Number, Algebra, Measurement, Space, Statistics and Probability.",
    seniorSecondary: "ACARA developed agreed senior-secondary subject frameworks. State and territory authorities determine course structure, integration, assessment and certification. Senior-secondary science includes Biology, Chemistry, Earth and Environmental Science, and Physics. Senior-secondary Mathematics includes Essential Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics.",
    implementation: "States, territories, non-government sectors and schools determine how and when Version 9.0 is implemented. Some jurisdictions deliver the national curriculum directly; others use jurisdictional curriculum sites that incorporate it."
  },
  subjects: {
    Biology: {
      officialName: "Australian Curriculum: Science — Biological sciences (F–10); Biology (senior secondary)",
      scope: "F–10 Biological sciences is a science-understanding sub-strand, not a separate national subject or independent year-by-year Biology syllabus. A distinct senior-secondary Biology subject framework is available.",
      programmeGrades: ["Foundation", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Senior secondary Biology"],
      syllabusThemes: ["Biological sciences (F–10 sub-strand)", "Senior secondary Biology (separate subject framework; local course implementation applies)"],
      chapterCount: null,
      sequenceStatus: "national-framework-scope-verified; year-level content descriptions and senior-secondary units require extraction and jurisdiction mapping",
      note: "Do not turn the F–10 biological-sciences sub-strand into a standalone national Biology subject sequence. For Years 11–12, map the ACARA framework to the relevant state/territory course and current assessment specifications."
    },
    Chemistry: {
      officialName: "Australian Curriculum: Science — Chemical sciences (F–10); Chemistry (senior secondary)",
      scope: "F–10 Chemical sciences is a science-understanding sub-strand, not a separate national subject. A distinct senior-secondary Chemistry subject framework is available.",
      programmeGrades: ["Foundation", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Senior secondary Chemistry"],
      syllabusThemes: ["Chemical sciences (F–10 sub-strand)", "Senior secondary Chemistry (separate subject framework; local course implementation applies)"],
      chapterCount: null,
      sequenceStatus: "national-framework-scope-verified; year-level content descriptions and senior-secondary units require extraction and jurisdiction mapping",
      note: "F–10 content is embedded in integrated Science. Senior-secondary Chemistry is a distinct framework but state/territory authorities set local course structures, assessment and certification."
    },
    Physics: {
      officialName: "Australian Curriculum: Science — Physical sciences (F–10); Physics (senior secondary)",
      scope: "F–10 Physical sciences is a science-understanding sub-strand, not a separate national subject. A distinct senior-secondary Physics subject framework is available.",
      programmeGrades: ["Foundation", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Senior secondary Physics"],
      syllabusThemes: ["Physical sciences (F–10 sub-strand)", "Senior secondary Physics (separate subject framework; local course implementation applies)"],
      chapterCount: null,
      sequenceStatus: "national-framework-scope-verified; year-level content descriptions and senior-secondary units require extraction and jurisdiction mapping",
      note: "F–10 content is embedded in integrated Science. Senior-secondary Physics is a distinct framework but state/territory authorities set local course structures, assessment and certification."
    },
    Mathematics: {
      officialName: "Australian Curriculum: Mathematics (F–10); senior-secondary Mathematics subjects",
      scope: "National F–10 curriculum is organised into six interrelated strands. Senior-secondary pathways comprise four distinct subjects.",
      programmeGrades: ["Foundation", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Senior secondary"],
      syllabusThemes: ["Number", "Algebra", "Measurement", "Space", "Statistics", "Probability", "Senior secondary: Essential Mathematics", "Senior secondary: General Mathematics", "Senior secondary: Mathematical Methods", "Senior secondary: Specialist Mathematics"],
      chapterCount: null,
      sequenceStatus: "national-framework-scope-verified; year-level content descriptions and senior-secondary pathway mapping require extraction",
      note: "The six F–10 strands are not official textbook chapter counts. Senior-secondary subject choice and local course implementation vary by jurisdiction and pathway."
    }
  },
  reconciliationRequirements: [
    "Extract the official Version 9.0 Science content descriptions and achievement standards for each year level, including the biological, chemical, physical and Earth/space science sub-strands.",
    "Extract the official Mathematics content descriptions and achievement standards for each year level under all six strands.",
    "Map Years 11–12 Biology, Chemistry, Physics and the four Mathematics subjects to each state/territory authority's current course, unit, assessment and certification documents before asserting a local sequence.",
    "Record implementation version and transition status for each jurisdiction; do not assume every school system has identical rollout or local course packaging."
  ],
  status: "national F–10 framework and senior-secondary subject architecture verified from official ACARA and Australian Government sources; no single national grade-by-grade standalone Biology/Chemistry/Physics F–10 sequence exists; detailed year-level topic extraction, jurisdictional senior-secondary mapping and official chapter counts remain pending; not marked chapter-sequence complete"
};
