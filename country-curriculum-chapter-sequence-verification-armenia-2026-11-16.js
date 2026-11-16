/**
 * CBE Nexus — curriculum chapter-sequence verification register
 * Country: Armenia (canonical country index position 12; source-map batch 03)
 * Audit date: 2026-11-16
 *
 * Scope: current national subject programme orders for Grades 7-12.
 * This pass verifies the legal framework and programme scope, not detailed topic order.
 */
export const armeniaCurriculumVerification = {
  auditDate: "2026-11-16",
  country: "Armenia",
  isoAlpha3: "ARM",
  canonicalIndexPosition: 12,
  sourceMapBatch: 3,
  authority: "Ministry of Education, Science, Culture and Sport of the Republic of Armenia; ARLIS official legal information system",
  levelReviewed: "General education, Grades 7-12; middle school Grades 5-9 and high school Grades 10-12",
  language: "Armenian (instruction may also be provided in minority-language settings under national rules)",
  examPathway: "State final examinations include Grade 9 and Grade 12. Grade 9 assessment includes Mathematics and Natural Science/subject-specific science choices; Grade 12 final examination guidelines are issued annually. Check the relevant academic-year assessment framework rather than assuming a fixed examination subject list.",
  officialSources: [
    "https://escs.am/en/static/second-education?s=edu",
    "https://escs.gov.am/articles/minister-orders/",
    "https://www.arlis.am/hy/acts/229480",
    "https://www.arlis.am/hy/acts/229267",
    "https://www.arlis.am/hy/acts/229261/latest",
    "https://www.arlis.am/hy/acts/229440/print/act",
    "https://nt.am/en/news/358341/"
  ],
  currentLegalFramework: {
    biology: "Ministerial Order N 49-N, 28 July 2026, incorporates the Biology subject programmes for Grades 7-12; effective 14 August 2026.",
    chemistry: "Ministerial Order N 55-N, 28 July 2026, replaces earlier Chemistry programme orders and incorporates the updated Grades 7-12 programme; effective 14 August 2026.",
    physics: "Ministerial Order N 36-N, 28 July 2026, cancels earlier separate programme orders for Grades 7/10 and 8/11, and replaces the incorporated programme with a Grades 7-12 programme; effective 14 August 2026.",
    mathematics: "Ministerial Order N 53-N, 28 July 2026, updates the Mathematics programme order to cover Grades 1-12; effective 14 August 2026."
  },
  curriculumStructure: "Armenia operates a 12-year general education system: elementary Grades 1-4, middle Grades 5-9, and high school Grades 10-12. The Ministry's current official orders page lists the July 28, 2026 subject-programme and subject-standard orders. For this audit, Biology, Chemistry, Physics and Mathematics all have current official programme coverage extending through Grades 7-12. The July 2026 acts materially supersede earlier subject programme orders. In particular, Chemistry N 55-N and Physics N 36-N are the current incorporated programme instruments; the old Chemistry N 74-N (2023) and old Physics N 51-N/N 85-N (2022/2023) were expressly repealed. The official ARLIS record for the current Chemistry and Physics acts provides the revised programme appendix, while Biology N 49-N and Mathematics N 53-N amend their 2024 base orders. This pass confirms programme scope and current legal status; detailed grade-by-grade topic headings, learning outcomes, hours and practical requirements still need transcription from each amended appendix before chapter order can be certified.",
  2026ImplementationNote: "The Ministry announced staged rollout of the new general education standard across grades in 2025-2026, with Grade 12 transition following later. The 2026-2027 Grade 12 examination guidance is a separate annual assessment framework and should not be mistaken for the full subject programme.",
  subjects: {
    Biology: {
      officialName: "Կենսաբանություն (Biology)",
      sourceStatus: "current-official-Grades-7-12-programme-incorporated-under-Order-49-N-2026; legal record checked",
      sequenceStatus: "current-national-programme-scope-verified; grade-by-grade-topic-and-outcome-extraction-pending",
      programmeGrades: [7, 8, 9, 10, 11, 12],
      syllabusThemes: [],
      chapterCount: null,
      note: "The 2024 base order N 35-N was amended by N 49-N on 28 July 2026; the current incorporated programme covers Grades 7-12. Do not rely on an earlier 2023 or pre-amendment grade-only programme as the current complete sequence."
    },
    Chemistry: {
      officialName: "Քիմիա (Chemistry)",
      sourceStatus: "current-official-Grades-7-12-programme-under-Order-55-N-2026; active from 14-Aug-2026",
      sequenceStatus: "current-national-programme-scope-verified; detailed-grade-topic-and-outcome-extraction-pending",
      programmeGrades: [7, 8, 9, 10, 11, 12],
      syllabusThemes: [],
      chapterCount: null,
      note: "Order N 55-N expressly repeals earlier Chemistry programme orders N 74-N (2022) and N 74-N (2023), and revises the 2024 N 30-N order to cover Grades 7-12. The 2023 Chemistry N 74-N record is marked no longer in force from 14 August 2026 and must not be used as the current syllabus."
    },
    Physics: {
      officialName: "Ֆիզիկա (Physics)",
      sourceStatus: "current-official-Grades-7-12-programme-under-Order-36-N-2026; active from 14-Aug-2026",
      sequenceStatus: "current-national-programme-scope-verified; detailed-grade-topic-and-outcome-extraction-pending",
      programmeGrades: [7, 8, 9, 10, 11, 12],
      syllabusThemes: [],
      chapterCount: null,
      note: "Order N 36-N expressly repeals the earlier separate programme orders N 51-N and N 85-N, then revises the 2024 N 40-N order to cover Grades 7-12. The superseded grade-pair orders must not be treated as the current programme."
    },
    Mathematics: {
      officialName: "Մաթեմատիկա (Mathematics)",
      sourceStatus: "current-official-Grades-1-12-programme-under-Order-53-N-2026-incorporated-into-2024-N-33-N",
      sequenceStatus: "current-national-programme-scope-verified; detailed-grade-topic-and-outcome-extraction-pending",
      programmeGrades: [7, 8, 9, 10, 11, 12],
      syllabusThemes: [],
      chapterCount: null,
      note: "Order N 53-N updates the 2024 N 33-N order and its appendix to cover Grades 1-12. This audit records the Grades 7-12 portion only; exact annual topic order and learning outcomes still need extraction."
    }
  },
  status: "all four current national subject programme instruments verified for Grades 7-12 using official Ministry/ARLIS records; 2026 legal amendments and repeals recorded; detailed topic sequence, learning outcomes, hours, practicals and official chapter counts not yet extracted; not marked chapter-sequence complete"
};
