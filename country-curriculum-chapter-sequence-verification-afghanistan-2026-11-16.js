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
  gradeTopicSequenceExtraction: [
    {
      grade: "Grade 6",
      subject: "Integrated Science",
      syllabusSourceStatus: "Curriculum strands and topic coverage are identified in the University of Toronto OISE curriculum crosswalk; the original current Ministry syllabus sequence has not yet been independently extracted. Treat this as a provisional topic crosswalk, not a verified current 2026 syllabus order.",
      topicAreas: [
        "Human body systems and health",
        "Matter and states of matter; types of materials, elements, compounds, mixtures and solutions",
        "Natural resources: forests, minerals, rocks and fossils",
        "Energy: forms, changes and uses",
        "Force and its types; gravity and friction",
        "Motion, speed, direction and types of movement",
        "Communicable diseases and causes; water, food and air contamination; diarrhoea, typhoid, cholera, tuberculosis and colds; prevention",
        "Narcotic substances and effects on physical and mental health; prevention of addiction"
      ],
      syllabusSequenceVerified: false,
      evidence: "University of Toronto OISE Afghanistan curriculum crosswalk and linked Grade 6 Ministry textbook. Crosswalk topic areas should be reconciled to the original Ministry syllabus before being labelled official sequence."
    }
  ],
  textbookContentsInspections: [
    {
      grade: "Grade 6",
      subject: "Integrated Science",
      title: "Science, Environment and Health (Dari title: Science, Health and Environment)",
      publisher: "Ministry of Education, Islamic Republic of Afghanistan",
      edition: "Solar Hijri 1398 (2019/2020)",
      language: "Dari",
      sourcePdf: "https://www.oise.utoronto.ca/site/document/3152",
      contentsPageEvidence: "PDF pages 5–6 (printed contents pages; PDF page labels P5–P6)",
      chapterCount: 9,
      chapters: [
        "Internal systems of the human body",
        "Matter",
        "Natural resources",
        "Energy",
        "Force",
        "Motion",
        "Causes and agents of communicable diseases",
        "Narcotic substances and their harms",
        "Science and its basic branches"
      ],
      inspectionStatus: "contents-page-opened-and-extracted",
      currentAdoptionStatus: "Edition and contents verified from Ministry-published book; current 2026 adoption/use has not been independently confirmed."
    }
  ],
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Afghanistan",
  gradeSequenceEvidence: "The Ministry reported on 26 July 2026 that draft Science and Mathematics textbooks for Grades 7–9 were under academic review. UNICEF's 2025 situation report describes curriculum revision and textbook development; approval and implementation status must be confirmed by grade and language.",
  textbookEvidence: "Draft review announcements and curriculum-reform reporting are not opened adopted textbook contents pages. The Grade 6 Dari Ministry textbook PDF was opened and its printed contents pages were extracted (nine chapter headings). The current 2026 adoption status of this 1398 edition is not confirmed, and Grade 7–9 separate subject textbook contents remain to be inspected.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://moe.gov.af/en/node/8486",
  nextRequiredWork: "Retrieve the current approved grade-by-grade syllabus and exact adopted textbook for each relevant grade and language; inspect contents pages; record title, edition, publisher, grade, chapter titles and verified count. Keep integrated Science separate from any formally approved specialist subjects and keep CBE Nexus-authored chapters separate."
};
