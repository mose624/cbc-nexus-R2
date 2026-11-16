/**
 * CBE Nexus country curriculum verification
 * Country: Brunei Darussalam
 * Canonical country index: 29
 * Reviewed: 2026-11-16
 *
 * Distinguish the SPN21 common lower-secondary curriculum, differentiated
 * secondary programmes, and separate upper-secondary examination subjects.
 * Curriculum framework subject listings are not textbook chapter counts.
 */
export const countryCurriculumVerification = {
  country: "Brunei Darussalam",
  countryIndex: 29,
  reviewedOn: "2026-11-16",
  authority: "Ministry of Education, Department of Curriculum Development and Department of Examinations",
  system: {
    framework: "SPN21 (Sistem Pendidikan Negara Abad Ke-21)",
    primary: "Six years, Year 1–Year 6, preceded by one year of preschool",
    lowerSecondary: "Common curriculum in Year 7 and Year 8; students sit the Student Progress Examination (SPE) at the end of Year 8.",
    postYear8Pathways: [
      "General Secondary Education Programme (Express and Normal)",
      "Applied Secondary Education Programme",
      "Special Applied Programme (SAP), including BTEC vocational pathway"
    ],
    upperSecondaryAssessment: "General and Applied programmes lead to Brunei-Cambridge GCE O Level and/or IGCSE pathways. Subject combinations vary by programme and student choice.",
    implementationCaution: "The Ministry's current secondary education page confirms the common Year 7–8 curriculum and post-Year-8 pathways. Do not assume Biology, Chemistry and Physics are each standalone subjects in every Year 7–8 class; lower secondary includes integrated Science. Separate specialist Biology, Chemistry, Physics and Combined Science options appear in the O Level/IGCSE pathway.",
    sources: [
      "https://www.moe.gov.bn/secondary-education/",
      "https://www.moe.gov.bn/primary-education/",
      "https://www.moe.gov.bn/department-of-curriculum-development/",
      "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
    ]
  },
  subjects: [
    {
      subject: "Biology",
      lowerSecondaryPosition: "Integrated within the common Science curriculum in Years 7–8; do not publish it as a separate specialist subject sequence for all lower-secondary students.",
      upperSecondaryPosition: "Biology is listed by the Department of Curriculum Development as a secondary subject and appears as a separate O Level/IGCSE subject option in the SPN21 programme description.",
      sequenceEvidence: "Official Ministry curriculum department confirms Biology (Secondary) as a separate curriculum responsibility. The SPN21 programme description identifies Biology as a separate specialist subject option alongside Physics, Chemistry and Combined Science. Detailed current syllabus topics and approved textbook chapter headings were not retrieved in this review.",
      chapterCount: null,
      sequenceStatus: "Separate secondary subject status verified; lower-secondary integrated Science distinction recorded; topic sequence and official textbook chapter count pending.",
      sources: [
        "https://www.moe.gov.bn/department-of-curriculum-development/",
        "https://www.moe.gov.bn/secondary-education/",
        "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
      ]
    },
    {
      subject: "Chemistry",
      lowerSecondaryPosition: "Chemistry concepts are included in integrated Science in Years 7–8; a separate Chemistry sequence should not be attributed to every lower-secondary learner.",
      upperSecondaryPosition: "Chemistry is listed as a distinct secondary subject by the Department of Curriculum Development and as a specialist O Level/IGCSE subject option.",
      sequenceEvidence: "Ministry subject-unit listing and SPN21 programme description confirm separate Chemistry at secondary/examination level. Detailed current Chemistry syllabus topic order, practical requirements and textbook chapter headings remain to be extracted.",
      chapterCount: null,
      sequenceStatus: "Separate secondary subject status verified; lower-secondary integrated Science distinction recorded; topic sequence and official textbook chapter count pending.",
      sources: [
        "https://www.moe.gov.bn/department-of-curriculum-development/",
        "https://www.moe.gov.bn/secondary-education/",
        "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
      ]
    },
    {
      subject: "Physics",
      lowerSecondaryPosition: "Physics concepts are included in integrated Science in Years 7–8; a separate Physics sequence should not be attributed to every lower-secondary learner.",
      upperSecondaryPosition: "Physics is listed as a distinct secondary subject by the Department of Curriculum Development and as a specialist O Level/IGCSE subject option.",
      sequenceEvidence: "Ministry subject-unit listing and SPN21 programme description confirm separate Physics at secondary/examination level. Detailed current Physics syllabus topic order, practical requirements and textbook chapter headings remain to be extracted.",
      chapterCount: null,
      sequenceStatus: "Separate secondary subject status verified; lower-secondary integrated Science distinction recorded; topic sequence and official textbook chapter count pending.",
      sources: [
        "https://www.moe.gov.bn/department-of-curriculum-development/",
        "https://www.moe.gov.bn/secondary-education/",
        "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
      ]
    },
    {
      subject: "Mathematics",
      lowerSecondaryPosition: "Mathematics is a compulsory core subject in the common Year 7–8 curriculum.",
      upperSecondaryPosition: "Mathematics is a compulsory core subject in the general secondary programme; Additional Mathematics is also listed as a separate secondary curriculum subject.",
      sequenceEvidence: "The Department of Curriculum Development explicitly lists Mathematics (Primary), Mathematics (Secondary) and Additional Mathematics (Secondary). SPN21 identifies Mathematics as a compulsory core subject in Years 7–8 and in the general secondary programme. Grade-level topic progression and textbook chapter headings have not yet been transcribed.",
      chapterCount: null,
      sequenceStatus: "Distinct compulsory subject and Additional Mathematics pathway verified; grade-by-grade topic sequence and official textbook chapter count pending.",
      sources: [
        "https://www.moe.gov.bn/department-of-curriculum-development/",
        "https://www.moe.gov.bn/secondary-education/",
        "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
      ]
    }
  ],
  outstandingWork: [
    "Retrieve current Brunei Ministry Biology, Chemistry, Physics, Combined Science and Mathematics syllabuses and record exact year/form coverage.",
    "Map integrated Science for Years 7–8 before creating specialist Biology, Chemistry and Physics learning paths.",
    "Separate General, Applied and Special Applied Programme subject offerings and do not merge BTEC vocational content with the academic O Level/IGCSE pathway.",
    "Extract the current Brunei-Cambridge O Level/IGCSE syllabus versions used by local schools and distinguish them from the national curriculum framework.",
    "Retrieve official textbooks and teacher guides to reconcile topic sequences and count actual textbook chapters."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithOfficialSubjectStatusVerified: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedGradeByGradeSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }

  evidenceRefresh_2026_11_16: {
  "status": "official SPN21 structure confirmed; detailed syllabuses and textbook contents pending",
  "sources": [
    "https://planipolis.iiep.unesco.org/sites/default/files/ressources/brunei_darussalam_spn21english.pdf"
  ],
  "finding": "SPN21 makes Mathematics and Science compulsory in Years 7–8; Years 9–10 General Education includes Mathematics, Science and Physics/Chemistry/Biology/Combined Science options. This is pathway structure, not topic order."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish actual contents-page chapter sequence." }
};
