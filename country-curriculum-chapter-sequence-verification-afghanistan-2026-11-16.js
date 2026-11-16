/* CBE Nexus — Afghanistan curriculum sequence verification
 * Reviewed 2026-11-16 | Canonical country index position: 1
 * Source-map gap-fill record; current textbook chapter counts are not verified.
 */
export default {
  country: "Afghanistan",
  aliases: ["Afghanistan", "Islamic Emirate of Afghanistan"],
  isoAlpha3: "AFG",
  canonicalIndex: 1,
  reviewedOn: "2026-11-16",
  educationStructure: {
    system: "General education; curriculum revision and textbook development are in progress.",
    languages: ["Dari", "Pashto"],
    subjectCaution: "Do not assume Biology, Chemistry and Physics are separate subjects at every grade; current draft and approved materials must be distinguished."
  },
  curriculumEvidence: {
    authority: "Ministry of Education of Afghanistan (de facto education administration; preserve political and administrative context)",
    authorityUrl: "https://moe.gov.af/en/",
    currentContext: "On 26 July 2026, the Ministry reported an academic review of draft Science and Mathematics textbooks for Grades 7–9. UNICEF's 2025 education situation report describes a revised curriculum formalized in February 2025, completion of primary textbook revisions by September 2025, and continuing work on Grades 7–9.",
    implementationCaution: "A draft textbook review is not evidence of final approval or nationwide classroom implementation. Record curriculum version, grade, language and approval status separately.",
    evidenceUrls: [
      "https://moe.gov.af/en/node/8486",
      "https://www.unicef.org/afghanistan/media/12691/file/Report_AFG_Education_PRINT_final-.pdf.pdf"
    ]
  },
  subjects: [
    { subject: "Biology", officialMapping: "Science / Biology; separation depends on grade and curriculum version.", gradeByGradeSequenceVerified: false, officialChapterCount: null, cbeNexusChaptersWritten: 0, notes: "Retrieve approved grade-level Science/Biology syllabus and textbook contents before sequencing." },
    { subject: "Chemistry", officialMapping: "Science / Chemistry; separation depends on grade and curriculum version.", gradeByGradeSequenceVerified: false, officialChapterCount: null, cbeNexusChaptersWritten: 0, notes: "Do not infer a separate Chemistry chapter sequence from integrated Science drafts." },
    { subject: "Physics", officialMapping: "Science / Physics; separation depends on grade and curriculum version.", gradeByGradeSequenceVerified: false, officialChapterCount: null, cbeNexusChaptersWritten: 0, notes: "Do not infer a separate Physics chapter sequence from integrated Science drafts." },
    { subject: "Mathematics", officialMapping: "Mathematics; Ministry reported draft Grade 7–9 textbook review in July 2026.", gradeByGradeSequenceVerified: false, officialChapterCount: null, cbeNexusChaptersWritten: 0, notes: "Retrieve approved grade-specific sequence and final textbook edition." }
  ],
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Afghanistan",
  gradeSequenceEvidence: "The Ministry reported on 26 July 2026 that draft Science and Mathematics textbooks for Grades 7–9 were under academic review. UNICEF's 2025 situation report describes curriculum revision and textbook development; approval and implementation status must be confirmed by grade and language.",
  textbookEvidence: "Draft review announcements and curriculum-reform reporting are not opened adopted textbook contents pages. No full approved textbook PDF or contents page was inspected in this batch.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://moe.gov.af/en/node/8486",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and language; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep integrated Science separate from any formally approved specialist subjects and keep CBE Nexus-authored chapters separate."
};
