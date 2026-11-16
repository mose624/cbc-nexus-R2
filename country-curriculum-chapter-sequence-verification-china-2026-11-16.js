/**
 * CBE Nexus — China curriculum sequence verification
 * Audit date: 2026-11-16 | Canonical country index: 40
 *
 * Scope is mainland People's Republic of China national curriculum.
 * Hong Kong SAR, Macao SAR, Taiwan and international-school pathways are
 * separate jurisdiction/curriculum records and are not conflated here.
 *
 * This file records curriculum architecture and evidence status, not a
 * completed textbook chapter inventory. Official chapter counts are null
 * until official textbook contents are inspected.
 */
export const countryCurriculumVerification = {
  country: "China",
  localName: "中华人民共和国",
  iso3: "CHN",
  canonicalIndex: 40,
  auditDate: "2026-11-16",
  status: "national_framework_verified_detailed_sequence_pending",
  scope: "Mainland PRC national curriculum; provincial implementation and textbook edition differences must be tracked.",
  languageOfInstruction: "Putonghua/standard Chinese is the general national medium; minority-language and bilingual arrangements may apply in designated regions and schools.",
  schoolStructure: {
    compulsoryEducation: "Nine years, commonly six years primary (Grades 1–6) plus three years junior secondary (Grades 7–9); some regions use a 5-4 arrangement.",
    seniorSecondary: "Three years (Grades 10–12 / Senior High 1–3), with general academic and vocational pathways.",
    gradeStructureCaveat: "The 2022 national curriculum plan's subject table is explicitly arranged on the 6-3 model and notes that 5-4 systems may refer to it with adjustments.",
    source: "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html"
  },
  currentFrameworks: {
    compulsoryEducation: {
      title: "义务教育课程方案和课程标准（2022年版）",
      issuingAuthority: "Ministry of Education of the People's Republic of China",
      documentNumber: "教材〔2022〕2号",
      issued: "2022-03-25",
      effective: "2022 autumn semester",
      scope: "Grades 1–9",
      subjectStructure: {
        mathematics: "National subject in Grades 1–9",
        science: "National subject in Grades 1–6",
        physics: "National subject in Grades 7–9",
        chemistry: "National subject in Grades 7–9",
        biology: "National subject in Grades 7–9",
        alternative: "The national subject table allows 物理、化学、生物学（或科学） in Grades 7–9; record local approved science-course implementation rather than assuming identical subject delivery in every school."
      },
      officialSource: "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
      officialEnglishOverview: "https://en.moe.gov.cn/news/press_releases/202205/t20220507_625532.html"
    },
    generalSeniorSecondary: {
      title: "普通高中课程方案和语文等学科课程标准（2017年版2020年修订）",
      issuingAuthority: "Ministry of Education of the People's Republic of China",
      documentNumber: "教材〔2020〕3号",
      issued: "2020-05-11",
      scope: "General senior secondary, Grades 10–12",
      subjectStructure: "Physics, Chemistry, Biology and Mathematics are separately named subject standards; course structure includes compulsory, selective compulsory and elective study.",
      officialSource: "https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html",
      implementationEvidence: "MOE reported nationwide implementation of the new senior-secondary curriculum and textbooks from autumn 2022.",
      implementationSource: "https://www.moe.gov.cn/fbh/live/2022/54835/sfcl/202209/t20220915_661166.html"
    },
    scienceEducationPolicy: {
      note: "The 2025 national science-education guidance strengthens science teaching, experiments, projects and interdisciplinary integration. It is implementation guidance, not a replacement for the 2022 compulsory curriculum standards.",
      source: "https://english.www.gov.cn/english.www.gov.cn/news/202501/24/content_WS679303a1c6d0868f4e8ef21c.html"
    }
  },
  subjects: [
    {
      subject: "Biology",
      localSubjectName: "生物学",
      compulsoryGrades: "Grades 7–9, as a separately named national subject in the 2022 plan (subject to local implementation arrangements).",
      seniorSecondaryGrades: "Grades 10–12; separate general senior-secondary Biology standard.",
      verifiedFramework: [
        "The 2022 compulsory-education plan lists Biology as a subject in Grades 7–9, with a provision allowing Science as an alternative arrangement.",
        "A separate Biology curriculum standard is included in the 2022 compulsory-education standards package.",
        "A separate Biology subject standard is included in the general senior-secondary 2017 edition, revised 2020."
      ],
      sequenceStatus: "national_subject_framework_verified; grade_and_module_sequence_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
        "https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html"
      ],
      pending: [
        "Extract the Biology standard's content requirements and learning progression for Grades 7–9.",
        "Extract senior-secondary compulsory, selective-compulsory and elective modules and their prerequisites.",
        "Compare approved national textbook editions and inspect each table of contents before recording book chapter counts.",
        "Map provincial examination and elective requirements without presenting them as national chapter sequences."
      ]
    },
    {
      subject: "Chemistry",
      localSubjectName: "化学",
      compulsoryGrades: "Grades 7–9, as a separately named national subject in the 2022 plan (subject to local implementation arrangements).",
      seniorSecondaryGrades: "Grades 10–12; separate general senior-secondary Chemistry standard.",
      verifiedFramework: [
        "The 2022 compulsory-education plan lists Chemistry for Grades 7–9, with Science permitted as an alternative local arrangement.",
        "A separate Chemistry curriculum standard is included in the 2022 compulsory-education standards package.",
        "A separate Chemistry subject standard is included in the general senior-secondary 2017 edition, revised 2020."
      ],
      sequenceStatus: "national_subject_framework_verified; grade_and_module_sequence_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
        "https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html"
      ],
      pending: [
        "Extract Chemistry content themes, required experiments and learning outcomes for Grades 7–9.",
        "Extract senior-secondary compulsory, selective-compulsory and elective modules.",
        "Verify approved textbook edition and its actual chapter order by province/edition where applicable.",
        "Keep national standards, local course arrangements and textbook chapter titles as separate data fields."
      ]
    },
    {
      subject: "Physics",
      localSubjectName: "物理",
      compulsoryGrades: "Grades 7–9, as a separately named national subject in the 2022 plan (subject to local implementation arrangements).",
      seniorSecondaryGrades: "Grades 10–12; separate general senior-secondary Physics standard.",
      verifiedFramework: [
        "The 2022 compulsory-education plan lists Physics for Grades 7–9, with Science permitted as an alternative local arrangement.",
        "A separate Physics curriculum standard is included in the 2022 compulsory-education standards package.",
        "A separate Physics subject standard is included in the general senior-secondary 2017 edition, revised 2020."
      ],
      sequenceStatus: "national_subject_framework_verified; grade_and_module_sequence_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
        "https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html"
      ],
      pending: [
        "Extract Grades 7–9 Physics content progression and required experimental competencies.",
        "Extract senior-secondary compulsory, selective-compulsory and elective modules.",
        "Map the national standards to approved textbook editions without assuming identical chapter order across publishers.",
        "Check provincial academic proficiency and gaokao subject-selection contexts separately."
      ]
    },
    {
      subject: "Mathematics",
      localSubjectName: "数学",
      compulsoryGrades: "Grades 1–9; a separately named national subject throughout compulsory education.",
      seniorSecondaryGrades: "Grades 10–12; separate general senior-secondary Mathematics standard with compulsory, selective-compulsory and elective study.",
      verifiedFramework: [
        "The 2022 compulsory-education course plan lists Mathematics for Grades 1–9.",
        "The revised 2022 Mathematics standard is part of the national compulsory-education standards package; the Ministry's notice identifies the corrected 2022 Mathematics edition as authoritative.",
        "A separate Mathematics subject standard is included in the general senior-secondary 2017 edition, revised 2020."
      ],
      sequenceStatus: "national_subject_and_grade_scope_verified; strand_and_module_sequence_extraction_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
        "https://www.moe.gov.cn/srcsite/A26/s8001/202006/t20200603_462199.html"
      ],
      pending: [
        "Extract the Mathematics content domains, grade-level objectives and progression for Grades 1–9.",
        "Extract senior-secondary compulsory, selective-compulsory and elective modules.",
        "Inspect approved textbook tables of contents for actual chapter names and counts.",
        "Keep 5-4 and 6-3 school structures aligned to the national standards without fabricating a universal textbook order."
      ]
    }
  ],
  jurisdictionAndPathwayControls: {
    provincialImplementation: "Provincial education authorities issue implementation arrangements; local curriculum, teaching schedules, textbook editions and assessment practices can vary.",
    vocationalPathway: "Vocational secondary education requires a separate curriculum and textbook audit; do not assume the general senior-secondary course plan fully represents it.",
    specialAdministrativeRegions: ["Hong Kong SAR", "Macao SAR"],
    taiwan: "Taiwan is not included in this mainland PRC national curriculum record.",
    internationalSchools: "International curricula operating in mainland China must be represented as separate curriculum pathways, not as the national curriculum."
  },
  qualityControls: {
    doNotTreatStandardsAsTextbookChapters: true,
    doNotAssumeScienceIsAlwaysSplitIntoThreeSubjectsInEveryJuniorSecondarySchool: true,
    doNotConflateCompulsoryAndSeniorSecondaryStandards: true,
    doNotConflateGeneralAndVocationalSeniorSecondary: true,
    doNotConflateMainlandChinaWithHongKongMacaoOrTaiwan: true,
    doNotInferOfficialChapterCountsFromCurriculumDomains: true
  },
  overallPending: [
    "Full grade-by-grade extraction of the 2022 compulsory standards for Mathematics and junior-secondary Biology, Chemistry and Physics.",
    "Full module-level extraction of the 2020-revised general senior-secondary subject standards.",
    "Approved textbook edition and contents audit, including actual chapter counts.",
    "Provincial implementation and textbook mapping, prioritising representative provinces before national expansion.",
    "Separate vocational-secondary, Hong Kong SAR, Macao SAR, Taiwan and international curriculum records."
  ]
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "China",
  gradeSequenceEvidence: "The Ministry of Education's 2022 compulsory-education standards explicitly publish separate standards for Mathematics, Science, Physics, Chemistry and Biology. These are standards, not necessarily a linear grade-by-grade textbook chapter sequence; upper-secondary standards and province/school implementation must be treated separately.",
  textbookEvidence: "Official curriculum standards verified; no actual textbook contents pages inspected. Mainland PRC only; Hong Kong, Macao and Taiwan excluded from this record.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.moe.gov.cn/srcsite/A26/s8001/202204/t20220420_619921.html",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
