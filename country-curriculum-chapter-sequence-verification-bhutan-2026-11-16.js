/**
 * CBE Nexus country curriculum verification
 * Country: Bhutan
 * Canonical country index: 24
 * Reviewed: 2026-11-16
 *
 * Evidence rule: curriculum frameworks, syllabus strands, textbook chapters and
 * CBE Nexus-generated chapters are distinct. Null chapterCount means no
 * authoritative chapter count was verified in this review.
 */
export const countryCurriculumVerification = {
  country: "Bhutan",
  countryIndex: 24,
  reviewedOn: "2026-11-16",
  authority: "Ministry of Education and Skills Development (MoESD), Department of School Education and Centre for School Curriculum Development; Bhutan Council for School Examinations and Assessment (BCSEA)",
  curriculumStructure: {
    status: "Transitional national curriculum reform with a limited 2026 pilot",
    frameworkEvidence: [
      "Science Curriculum Framework 2025 is published by the Department of School Education.",
      "Mathematics Curriculum Framework (Key Stage Wise) 2023 and Mathematics Curriculum Framework (Strand Wise) 2023 are listed in the official curriculum-framework repository.",
      "The Ministry announced alignment of national school curriculum frameworks to Cambridge standards in October 2025.",
      "The 2026 reform pilot applies to Classes IX and XI; other classes continue under the existing curriculum during the pilot period. The revised two-year key-stage structure is being tested before wider implementation."
    ],
    implementationCaution: "Do not present the Cambridge-aligned pilot as already implemented in every grade or school. Keep the existing curriculum and pilot cohorts explicitly distinguished, and recheck the Ministry's 8 November 2026 reform update before publishing a definitive rollout calendar.",
    keyStages: [
      { name: "Key Stage IV", classes: "IX-X", note: "Two-year secondary stage; 2026 reform pilot begins in Class IX." },
      { name: "Key Stage V", classes: "XI-XII", note: "Two-year higher secondary stage; 2026 reform pilot begins in Class XI." }
    ],
    assessmentEvidence: "BCSEA operational guidance identifies Mathematics, Physics, Chemistry and Biology as separately offered and assessed subjects in Classes IX-X."
  },
  subjects: [
    {
      subject: "Biology",
      nationalPosition: "Science learning is addressed through the Science Curriculum Framework 2025; Biology is a separate subject in the existing Classes IX-X secondary offering and in the science subject combinations at higher secondary level.",
      gradeCoverageEvidence: "Classes IX-X separately list Biology; higher-secondary science combinations include Biology as an option or as part of the six-subject combination.",
      sequenceEvidence: "The 2025 Science Curriculum Framework is the primary framework to extract for the revised programme. Detailed Biology learning outcomes, grade sequence, practicals and topic headings have not yet been transcribed.",
      chapterCount: null,
      sequenceStatus: "Framework identified; chapter/topic extraction pending",
      sources: [
        "https://rec.gov.bt/curriculum-frameworks/",
        "https://rec.gov.bt/wpfd_file/science-curriculum-framework-2025/",
        "https://www.bcsea.bt/uploads/publications/BCSEA%20OGEA%20UPDATED.pdf",
        "https://education.gov.bt/2025/10/26/"
      ]
    },
    {
      subject: "Chemistry",
      nationalPosition: "Chemistry is a separate subject in Classes IX-X and is a core subject in the higher-secondary science stream.",
      gradeCoverageEvidence: "BCSEA operational guidance lists Chemistry among Classes IX-X subjects assessed through continuous assessment and written examinations; higher-secondary science combinations include Chemistry.",
      sequenceEvidence: "Science Curriculum Framework 2025 identified. Exact Chemistry topics, learning outcomes, practical sequence and revised pilot textbook chapter headings remain to be extracted.",
      chapterCount: null,
      sequenceStatus: "Framework and separate-subject status identified; chapter/topic extraction pending",
      sources: [
        "https://rec.gov.bt/curriculum-frameworks/",
        "https://rec.gov.bt/wpfd_file/science-curriculum-framework-2025/",
        "https://www.bcsea.bt/uploads/publications/BCSEA%20OGEA%20UPDATED.pdf",
        "https://education.gov.bt/2025/10/26/"
      ]
    },
    {
      subject: "Physics",
      nationalPosition: "Physics is a separate subject in Classes IX-X and is a core subject in the higher-secondary science stream.",
      gradeCoverageEvidence: "BCSEA operational guidance lists Physics among Classes IX-X subjects assessed through continuous assessment and written examinations; higher-secondary science combinations include Physics.",
      sequenceEvidence: "Science Curriculum Framework 2025 identified. Exact Physics topics, learning outcomes, practical sequence and revised pilot textbook chapter headings remain to be extracted.",
      chapterCount: null,
      sequenceStatus: "Framework and separate-subject status identified; chapter/topic extraction pending",
      sources: [
        "https://rec.gov.bt/curriculum-frameworks/",
        "https://rec.gov.bt/wpfd_file/science-curriculum-framework-2025/",
        "https://www.bcsea.bt/uploads/publications/BCSEA%20OGEA%20UPDATED.pdf",
        "https://education.gov.bt/2025/10/26/"
      ]
    },
    {
      subject: "Mathematics",
      nationalPosition: "Mathematics is a distinct subject across school levels, with official key-stage-wise and strand-wise curriculum frameworks.",
      gradeCoverageEvidence: "The official repository lists Mathematics Curriculum Framework (Key Stage Wise) 2023 and Mathematics Curriculum Framework (Strand Wise) 2023. BCSEA identifies Mathematics as a required subject for Classes IX-X assessment.",
      sequenceEvidence: "Both official Mathematics frameworks are identified. Key-stage outcomes, strand progressions, grade-by-grade topic order and textbook chapter headings have not yet been transcribed.",
      chapterCount: null,
      sequenceStatus: "Official frameworks identified; detailed strand and chapter extraction pending",
      sources: [
        "https://rec.gov.bt/curriculum-frameworks/",
        "https://www.bcsea.bt/uploads/publications/BCSEA%20OGEA%20UPDATED.pdf",
        "https://education.gov.bt/2025/10/26/"
      ]
    }
  ],
  outstandingWork: [
    "Retrieve and transcribe the Science Curriculum Framework 2025 by learning area, key stage and class; do not infer chapter counts from framework sections.",
    "Retrieve both Mathematics Curriculum Framework 2023 documents and map each strand and progression outcome to classes.",
    "Obtain the exact revised pilot syllabi and approved textbooks for Classes IX and XI, then distinguish them from existing curriculum materials used by other classes.",
    "Verify the Ministry's 8 November 2026 National School Curriculum Reform update and record any official rollout or transition decisions.",
    "Build separate chapter maps only after official learning outcomes and textbook headings have been compared."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedChapterSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }

  evidenceRefresh_2026_11_16: {
  "status": "2025 Science Curriculum Framework confirmed; subject sequence extraction pending",
  "sources": [
    "https://rec.gov.bt/curriculum-frameworks/",
    "https://www.sce.edu.bt/wp-content/uploads/2025/03/Status-of-STEM-Education.pdf"
  ],
  "finding": "Department of School Education lists a Science Curriculum Framework 2025. Older STEM report describes integrated Science strands in PP–VIII and separate Physics, Chemistry, Biology and Mathematics in IX–X; confirm against 2025 framework before treating as current sequence."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
};
