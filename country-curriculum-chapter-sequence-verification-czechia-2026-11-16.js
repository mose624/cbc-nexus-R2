/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Czechia (Czech Republic) | ISO3: CZE | Review: 2026-11-16
 * Official-source audit; not a claim that CBE Nexus textbook chapters are complete.
 */
export const countryCurriculumVerification = {
  country: "Czechia",
  alternateName: "Czech Republic",
  countryCode: "CZE",
  reviewDate: "2026-11-16",
  authority: "Ministry of Education, Youth and Sports (MŠMT); National Pedagogical Institute (NPI)",
  languageOfInstruction: "Czech; minority-language and international-school pathways also exist.",
  structure: {
    compulsoryBasicEducation: "Nine years, commonly delivered as Grades 1–5 (first stage) and Grades 6–9 (second stage) of základní škola; part of the second stage may be delivered in multi-year gymnasia.",
    upperSecondary: "Gymnázium, vocational and other secondary programmes follow basic education; programme length and subject allocation vary.",
    framework: "National framework educational programmes (RVP) are implemented through school educational programmes (ŠVP). The national framework does not prescribe one universal textbook chapter order."
  },
  curriculumStatus2026: {
    status: "The revised RVP ZV issued in January 2025 may be adopted voluntarily from September 2025. Its rollout is phased; schools still using the previous RVP continue under their existing ŠVP during the transition.",
    milestones: [
      "September 2025: voluntary start for Grades 1 and 6.",
      "September 2027: mandatory start for Grades 1 and 6.",
      "September 2031: mandatory use across all grades."
    ],
    2026Amendment: "An MŠMT measure effective 1 September 2026 adjusts selected provisions, particularly foreign-language requirements; it does not replace the science or mathematics learning outcomes.",
    nextRevision: "Further clarifications and supporting materials are planned for spring 2027; official NPI reporting in November 2026 says the structure and expected learning outcomes in subject fields are not intended to undergo fundamental change.",
    caution: "For a given school and grade, verify whether the school ŠVP follows the 2025 revised RVP or the previous framework. Do not label the revised RVP as mandatory for all pupils in 2026."
  },
  subjects: [
    {
      subject: "Biology",
      localNames: ["Přírodopis (basic education)", "Biologie (gymnasium and secondary programmes)"],
      status: "At basic level, biological content is within the Přírodopis educational field in the Člověk a příroda area; in gymnasium and relevant secondary programmes Biology is a distinct subject.",
      sequenceScope: "Map the current RVP ZV expected learning outcomes for Přírodopis by stage and grade, then map RVP G or vocational programme Biology separately. Do not assume all biology content appears as a separate subject in every grade.",
      chapterCount: null,
      chapterCountStatus: "Framework learning outcomes and content areas are not textbook chapter counts.",
      pending: ["Extract Přírodopis expected learning outcomes and recommended content from the current RVP ZV.", "Extract gymnasium Biology outcomes and compare with current school ŠVP.", "Verify current approved textbook contents before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Chemie",
      status: "A distinct educational field within Člověk a příroda at basic level and a distinct subject in relevant secondary programmes.",
      sequenceScope: "Use the current RVP ZV Chemistry outcomes for basic education and the separate RVP G/vocational programme for upper-secondary pathways. Grade and hour allocations are mediated by each school's ŠVP.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract current Chemistry expected learning outcomes and content.", "Map gymnasium and vocational Chemistry variants.", "Verify textbook editions and tables of contents."]
    },
    {
      subject: "Physics",
      localName: "Fyzika",
      status: "A distinct educational field within Člověk a příroda at basic level and a distinct subject in relevant secondary programmes.",
      sequenceScope: "Use the current RVP ZV Physics outcomes for basic education and the relevant RVP G or vocational programme for upper secondary. School ŠVP determines local sequencing and allocation.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract current Physics expected learning outcomes and recommended content.", "Map gymnasium and vocational pathways.", "Verify textbook editions and tables of contents."]
    },
    {
      subject: "Mathematics",
      localName: "Matematika a její aplikace (basic education); Matematika (secondary)",
      status: "A separate compulsory educational area/field in basic education and a core subject in many secondary programmes; upper-secondary depth and hours vary by programme.",
      sequenceScope: "Map expected learning outcomes in the Mathematics and its Applications area across Grades 1–9, then separately map RVP G and vocational programmes. Avoid treating the framework as a single national textbook chapter sequence.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract learning outcomes and progression by stage/grade.", "Map gymnasium and vocational Mathematics variants.", "Verify current textbook contents and editions."]
    }
  ],
  implementationNotes: [
    "The 2023 RVP ZV subject-area structure lists Mathematics and its Applications separately, while Physics, Chemistry and Přírodopis sit in the Člověk a příroda area.",
    "The revised 2025 RVP ZV introduces expected learning outcomes and updated framework architecture; adoption is gradual and school-specific during transition.",
    "The 2026 amendment effective 1 September 2026 primarily concerns language provision and does not constitute a replacement sequence for Biology, Chemistry, Physics or Mathematics.",
    "Secondary education uses different RVPs for gymnasia and vocational programmes. Maintain separate mappings.",
    "School ŠVPs determine local subject allocation, sequence and teaching plans within the national framework."
  ],
  officialSources: [
    {
      title: "MŠMT / Edu.cz — Current revision of framework educational programmes",
      url: "https://edu.gov.cz/dokumenty/rvp-ramcove-vzdelavaci-programy/aktualni-revize-ramcovych-vzdelavacich-programu-rvp/",
      use: "Official timeline and measures for the revised RVP ZV, including the September 2026 amendment and phased rollout."
    },
    {
      title: "NPI — Current RVP ZV text",
      url: "https://prohlednout.rvp.cz/zakladni-vzdelavani",
      use: "Current RVP ZV in the version amended by ministerial measure of 28 August 2026."
    },
    {
      title: "MŠMT — RVP ZV framework information",
      url: "https://profesnirozvoj.msmt.gov.cz/vzdelavani/zakladni-vzdelavani/ramcovy-vzdelavaci-program-pro-zakladni-vzdelavani",
      use: "Official details on phased adoption and the 2026 amendment; schools already using the revised RVP need not necessarily revise their ŠVP because of the amendment."
    },
    {
      title: "NPI / Edurevue — Implementation steps, 4 November 2026",
      url: "https://edurevue.npi.cz/serie/special-novy-svp-pojdme-do-toho/blog/od-revize-rvp-k-vyuce-co-se-chysta-a-na-co-se-zamerit",
      use: "November 2026 update on rollout support, 2027 materials and planned clarifications."
    },
    {
      title: "MŠMT — RVP ZV 2023 PDF",
      url: "https://edu.gov.cz/wp-content/uploads/2023/07/RVP_ZV_2023_cista_verze.pdf",
      use: "Subject-area structure: Mathematics and its Applications; Physics, Chemistry and Přírodopis within Man and Nature."
    },
    {
      title: "Edu.cz — Secondary framework programme catalogue",
      url: "https://edu.gov.cz/dokumenty/",
      use: "Official directory of RVP for gymnasia and vocational secondary education."
    }
  ],
  reconciliation: {
    biology: "Basic-level Přírodopis and upper-secondary Biology distinction recorded; grade-level outcomes pending.",
    chemistry: "Separate field and subject status recorded; grade-level outcomes and school ŠVP sequencing pending.",
    physics: "Separate field and subject status recorded; grade-level outcomes and school ŠVP sequencing pending.",
    mathematics: "Separate Mathematics area confirmed; grade-level outcomes and secondary pathway mapping pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Current framework and 2026 transition status verified from official sources; detailed subject outcomes, school-level implementation and textbook chapter counts remain pending."
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Czechia",
  gradeSequenceEvidence: "The current RVP ZV is the national framework for basic education, with subject areas and school-level ŠVP translating it into local programmes. Separate gymnasium and vocational frameworks apply in upper secondary. Extract current science and mathematics outcomes by stage and distinguish integrated natural science from specialist courses.",
  textbookEvidence: "RVP framework is not a textbook contents list; no student textbook contents inspected.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://edu.gov.cz/dokumenty/rvp-ramcove-vzdelavaci-programy/rvp-zv-ramcovy-vzdelavaci-program-pro-zakladni-vzdelavani/",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
