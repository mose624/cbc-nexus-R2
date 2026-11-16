/* CBE Nexus — Azerbaijan curriculum sequence verification.
 * Canonical country index: Azerbaijan (AZE).
 * Review date: 2026-11-16.
 * Evidence: Ministry of Science and Education; Institute of Education (ARTI).
 * Important: curriculum reform is being rolled out by grade. Do not treat one
 * subject PDF as applying to every grade while legacy curricula remain in use.
 */
export const country = {
  name: "Azerbaijan",
  isoAlpha3: "AZE",
  reviewDate: "2026-11-16",
  authority: "Ministry of Science and Education of the Republic of Azerbaijan; Institute of Education (ARTI)",
  systemNotes: [
    "General education is organized through primary, general secondary and complete secondary levels, with the national curriculum specifying learning outcomes, content standards, subjects, weekly lesson time, assessment principles and subject-curriculum structure.",
    "ARTI's official curriculum register shows staged implementation of revised subject curricula by grade. The current published status must be read by grade, not assumed to mean the entire grade span has already changed.",
    "The 2024 revised programmes were approved for Nature Studies (Grades V–VI), Mathematics (Grades I–XI), Biology (Grades VII–XI) and Chemistry (Grades VII–XI), but ARTI's live implementation note states the revised versions are currently taught in Grade V for Mathematics and Grade VII for Biology and Chemistry.",
    "The revised Physics curriculum was approved in 2025 and ARTI states that it is currently taught in Grade VII. The legacy Physics curriculum remains listed for Grades VIII–XI.",
    "The 2026–2027 academic-year teaching plans have been approved by the Ministry. These plans set subject allocation and weekly lesson load; they are not themselves detailed topic/chapter sequences."
  ],
  subjects: [
    {
      subject: "Biology",
      language: "Biologiya",
      currentCoverage: "Revised 2024 curriculum: Grade VII currently implemented; ARTI also lists the legacy 2013 curriculum for Grades VIII–XI.",
      sequenceStatus: "official revised and legacy curriculum documents identified; full grade-by-grade content extraction pending",
      chapterCount: null,
      officialChapterCount: null,
      sourceDetails: [
        "The Ministry's 22 February 2024 order approved the revised Biology programme for Grades VII–XI and repealed the earlier Biology curriculum orders identified in the order.",
        "ARTI's current register says the revised Biology curriculum is currently used in Grade VII, while the 2013 Biology curriculum remains listed for Grades VIII–XI.",
        "The revised Biology PDF contains level outcomes, content standards, sub-standards and suggested classroom activities; these should be normalized into grade-level topics, not automatically labelled official textbook chapters."
      ],
      pending: ["Extract the revised Grade VII standards and sub-standards in sequence.", "Extract the still-applicable legacy Grade VIII–XI sequence and confirm transition schedule.", "Separate advanced/track-specific Biology curriculum for Grades X–XI where applicable."]
    },
    {
      subject: "Chemistry",
      language: "Kimya",
      currentCoverage: "Revised 2024 curriculum: Grade VII currently implemented; ARTI lists the legacy 2013 curriculum for Grades VIII–XI.",
      sequenceStatus: "official revised and legacy curriculum documents identified; full grade-by-grade content extraction pending",
      chapterCount: null,
      officialChapterCount: null,
      sourceDetails: [
        "The Ministry's 22 February 2024 order approved the revised Chemistry programme for Grades VII–XI and repealed the earlier Chemistry curriculum orders identified in the order.",
        "ARTI's current register says the revised Chemistry curriculum is currently used in Grade VII, while the 2013 Chemistry curriculum remains listed for Grades VIII–XI.",
        "The revised Chemistry PDF contains grade-level content standards and learning activities; standards and sub-standards must be distinguished from textbook chapter titles."
      ],
      pending: ["Extract Grade VII content standards/sub-standards and sequence.", "Extract and reconcile legacy Grades VIII–XI curriculum until replaced.", "Check specialized upper-secondary Chemistry curriculum for Grades X–XI."]
    },
    {
      subject: "Physics",
      language: "Fizika",
      currentCoverage: "Revised 2025 curriculum: Grade VII currently implemented; ARTI lists the legacy 2013 curriculum for Grades VIII–XI.",
      sequenceStatus: "official revised programme identified by ARTI; PDF retrieval timed out in this review; legacy scope identified",
      chapterCount: null,
      officialChapterCount: null,
      sourceDetails: [
        "ARTI's curriculum register lists the improved Physics curriculum approved in 2025 and says it is currently taught in Grade VII.",
        "The same register lists the 2013 Physics curriculum as currently used in Grades VIII–XI.",
        "The linked revised Physics PDF could not be retrieved during this review because the document request timed out; detailed topic sequence is therefore not claimed."
      ],
      pending: ["Retrieve the revised 2025 Physics PDF and extract Grade VII standards.", "Extract legacy Grades VIII–XI Physics standards and reconcile transition.", "Compare the X–XI subject-orientation Physics programme."]
    },
    {
      subject: "Mathematics",
      language: "Riyaziyyat",
      currentCoverage: "Revised 2024 curriculum: Grade V currently implemented; ARTI lists the legacy 2013 curriculum for Grades VI–XI.",
      sequenceStatus: "revised programme and legacy programme identified; revised document structure and content strands verified, complete grade-level extraction pending",
      chapterCount: null,
      officialChapterCount: null,
      contentAreasVerified: ["Numbers and operations", "Algebra and functions", "Geometry", "Measurement", "Statistics and probability"],
      sourceDetails: [
        "The Ministry's 22 February 2024 order approved the revised Mathematics programme for Grades I–XI and repealed the earlier Mathematics curriculum orders identified in the order.",
        "ARTI's current register says the revised Mathematics curriculum is currently taught in Grade V, while the 2013 Mathematics curriculum remains listed for Grades VI–XI.",
        "The 2024 Mathematics PDF explicitly organizes the curriculum into five content strands and includes learning outcomes by grade, content standards, sub-standards, explanations, classroom activities, teaching strategies, integration and assessment criteria."
      ],
      pending: ["Extract revised Grade I–V standards and topic sequence.", "Extract and reconcile legacy Grades VI–XI standards pending transition.", "Review X–XI specialized Mathematics programme separately."]
    }
  ],
  sourceRegister: [
    {
      title: "Ministry of Science and Education — National curriculum / state standards and programmes",
      url: "https://edu.gov.az/az/esas-senedler/899",
      use: "National curriculum framework: learning outcomes, content standards, subjects, weekly lesson time, assessment and subject-curriculum structure."
    },
    {
      title: "Ministry order dated 22 February 2024 approving revised Nature Studies, Life Skills, Mathematics, Biology and Chemistry curricula",
      url: "https://edu.gov.az/az/esas-senedler/tebiet-heyat-bilgisi-riyaziyyat-biologiya-ve-kimya-fenleri-uzre-tehsil-proqramlarinin-kurikulumlarin-tesdiqi-barede-azerbaycan-respublikasi-elm-ve-teh",
      use: "Legal approval and supersession of previous Mathematics, Biology and Chemistry programmes."
    },
    {
      title: "Institute of Education — official curriculum register",
      url: "https://arti.edu.az/f%C9%99aliyy%C9%99timiz/m%C9%99zmun-v%C9%99-qiym%C9%99tl%C9%99ndirm%C9%99/umumi-t%C9%99hsil/",
      use: "Live grade-by-grade implementation status; identifies 2025 Physics, 2024 Mathematics/Biology/Chemistry and remaining 2013 programmes."
    },
    {
      title: "Revised Mathematics curriculum 2024 (Grades I–XI)",
      url: "https://arti.edu.az/wp-content/uploads/2024/11/T%C9%99kmill%C9%99sdirilmis-riyaziyyat-f%C9%99nn-kurikulumu-2024-1.pdf",
      use: "Official detailed Mathematics programme, five content strands and grade-level standards."
    },
    {
      title: "Revised Chemistry curriculum 2024 (Grades VII–XI)",
      url: "https://arti.edu.az/wp-content/uploads/2024/11/T%C9%99kmill%C9%99sdirilmis-kimya-f%C9%99nn-kurikulumu-2024-1.pdf",
      use: "Official detailed Chemistry programme."
    },
    {
      title: "Revised Biology curriculum 2024 (Grades VII–XI)",
      url: "https://arti.edu.az/wp-content/uploads/2024/11/T%C9%99kmill%C9%99sdirilmis-biologiya-f%C9%99nn-kurikulumu-2024-1.pdf",
      use: "Official detailed Biology programme."
    },
    {
      title: "Ministry — approved 2026–2027 academic-year teaching plans",
      url: "https://edu.gov.az/az/esas-senedler/20262027-ci-tedris-ili-uzre-tedris-planlari-tesdiq-edilib",
      use: "Current academic-year subject allocation and weekly lesson-load plans."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithOfficialCurriculumDocumentsOrRegisterEntries: 4,
    subjectsWithDetailedGradeByGradeSequenceFullyExtracted: 0,
    mathematicsContentStrandsVerified: 5,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "official-framework-and-staged-implementation-mapped; detailed-topic-sequence-extraction-pending",
    note: "Do not interpret curriculum standards, sub-standards or content strands as official textbook chapter counts. Revised curricula are being rolled out by grade, with legacy programmes still listed for grades not yet transitioned."
  }
};
