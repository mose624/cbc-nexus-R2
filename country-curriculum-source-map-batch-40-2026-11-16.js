/**
 * CBE Nexus — source-map gap-fill batch 40
 * Research date: 2026-11-16
 * These five entries close the canonical register's missing source-map identities.
 * A source-map record is not proof that a full syllabus or chapter sequence is verified.
 */
export const curriculumSourceMapBatch40 = {
  batch: 40,
  researchedAt: "2026-11-16",
  batchPurpose: "canonical-register-gap-fill",
  countries: [
    {
      country: "Afghanistan",
      isoAlpha3: "AFG",
      authority: "Ministry of Education of Afghanistan (de facto education administration; record political/administrative context in all content)",
      authorityUrl: "https://moe.gov.af/en/",
      curriculumLevel: "General education; current curriculum revisions and textbook development are in progress. Ministry reporting in July 2026 describes review of draft Grade 7–9 Science and Mathematics textbooks.",
      languageOfInstruction: ["Dari", "Pashto"],
      assessmentPathway: "National school assessment and Kankor university entrance pathway; verify current grade-specific rules against official documents before publishing.",
      subjectNames: {
        biology: "Science / Biology (grade- and curriculum-version dependent)",
        chemistry: "Science / Chemistry (grade- and curriculum-version dependent)",
        physics: "Science / Physics (grade- and curriculum-version dependent)",
        mathematics: "Mathematics"
      },
      evidenceUrls: [
        "https://moe.gov.af/en/node/8486",
        "https://www.unicef.org/afghanistan/media/12691/file/Report_AFG_Education_PRINT_final-.pdf.pdf"
      ],
      evidence: "The Ministry of Education reported on 26 July 2026 that a six-day academic review had opened to evaluate and strengthen draft Science and Mathematics textbooks for Grades 7–9. UNICEF's 2025 education situation report describes the de facto Ministry's curriculum revision, formalization of a revised curriculum in February 2025, completion of primary textbook revisions by September 2025, and continuing work on Grades 7–9. Treat curriculum version, grade, language and policy context as essential metadata. Do not infer separate Biology, Chemistry and Physics chapter sequences from an integrated Science reference.",
      subjects: {
        biology: { officialSubjectName: "Science / Biology (subject separation requires grade-specific evidence)", sequenceStatus: "official 2026 draft textbook review identified; retrieve approved current syllabus/textbook before sequencing", chapterCount: null, chapters: [] },
        chemistry: { officialSubjectName: "Science / Chemistry (subject separation requires grade-specific evidence)", sequenceStatus: "official 2026 draft textbook review identified; retrieve approved current syllabus/textbook before sequencing", chapterCount: null, chapters: [] },
        physics: { officialSubjectName: "Science / Physics (subject separation requires grade-specific evidence)", sequenceStatus: "official 2026 draft textbook review identified; retrieve approved current syllabus/textbook before sequencing", chapterCount: null, chapters: [] },
        mathematics: { officialSubjectName: "Mathematics", sequenceStatus: "official 2026 Grade 7–9 draft review identified; retrieve approved grade-level sequence", chapterCount: null, chapters: [] }
      }
    },
    {
      country: "Belgium",
      isoAlpha3: "BEL",
      authority: "Education authorities of the Flemish Community, French Community (Wallonia-Brussels Federation), and German-speaking Community",
      authorityUrl: "https://www.vlaanderen.be/onderwijsprofessionals/lesgeven-en-begeleiden/opleidingsinhouden/onderwijsdoelen",
      curriculumLevel: "Three community-governed education systems; there is no single federal national curriculum. Curricula, languages, grade structures and implementation differ by community and school network.",
      languageOfInstruction: ["Dutch", "French", "German"],
      assessmentPathway: "Community- and school-network-specific assessments and qualifications; record the relevant community, school network, grade and pathway.",
      subjectNames: {
        biology: "Biology / Natural Sciences (community- and stage-specific)",
        chemistry: "Chemistry / Natural Sciences (community- and stage-specific)",
        physics: "Physics / Natural Sciences (community- and stage-specific)",
        mathematics: "Mathematics"
      },
      evidenceUrls: [
        "https://eindtermen.vlaanderen.be/",
        "https://www.wallonie-bruxelles-enseignement.be/_dbIntro2.cfm?page=dbIntro&profil=ens",
        "https://www.pfwb.be/education",
        "https://ostbelgienbildung.be/desktopdefault.aspx/tabid-7657/",
        "https://ostbelgienbildung.be/desktopdefault.aspx/tabid-7673/"
      ],
      evidence: "Belgian education is governed by three linguistic Communities rather than a single federal curriculum. The Flemish government's official education-goals portal provides objectives by level and grade; the Wallonia-Brussels Federation publishes common-core subject reference frameworks including Mathematics and Science; the German-speaking Community publishes subject- and stage-specific Rahmenpläne, including Mathematics and Natural Sciences/Technology. Keep three distinct curriculum branches and do not merge them into one Belgian chapter order.",
      subjects: {
        biology: { officialSubjectName: "Biology / Natural Sciences; retain community, network and grade labels", sequenceStatus: "official community curriculum portals identified; extract the applicable subject sequence separately for each community", chapterCount: null, chapters: [] },
        chemistry: { officialSubjectName: "Chemistry / Natural Sciences; retain community, network and grade labels", sequenceStatus: "official community curriculum portals identified; extract the applicable subject sequence separately for each community", chapterCount: null, chapters: [] },
        physics: { officialSubjectName: "Physics / Natural Sciences; retain community, network and grade labels", sequenceStatus: "official community curriculum portals identified; extract the applicable subject sequence separately for each community", chapterCount: null, chapters: [] },
        mathematics: { officialSubjectName: "Mathematics", sequenceStatus: "official community grade-level objectives identified; extract separately for Flemish, French and German-speaking communities", chapterCount: null, chapters: [] }
      }
    },
    {
      country: "South Korea",
      isoAlpha3: "KOR",
      authority: "Ministry of Education, Republic of Korea",
      authorityUrl: "https://english.moe.go.kr/",
      curriculumLevel: "National curriculum for elementary, middle and high schools; 2022 Revised National Curriculum, with implementation phased by grade.",
      languageOfInstruction: ["Korean"],
      assessmentPathway: "School assessments and high-school pathways; upper-secondary subject selection and national college entrance assessment require separate treatment.",
      subjectNames: {
        biology: "Science / Biology",
        chemistry: "Science / Chemistry",
        physics: "Science / Physics",
        mathematics: "Mathematics"
      },
      evidenceUrls: [
        "https://english.moe.go.kr/boardCnts/viewRenewal.do?boardID=265&boardSeq=93810&lev=0&m=0201&opType=N&s=english&statusYN=W",
        "https://www.moe.go.kr/boardCnts/viewRenew.do?boardID=141&boardSeq=93458&lev=0&search="
      ],
      evidence: "The Ministry of Education announced the 2022 Revised National Curriculum on 22 December 2022. The official notice identifies separate elementary, middle and high-school curricula and specific Mathematics and Science curriculum annexes. Preserve grade-level implementation dates, the integrated/separate science distinction and high-school subject-choice pathways. The official notice identifies the governing curriculum but chapter-level sequences still require extraction from the relevant annexes.",
      subjects: {
        biology: { officialSubjectName: "Science / Biology", sequenceStatus: "2022 revised national curriculum identified; extract elementary, middle and high-school annexes and distinguish integrated from elective Biology", chapterCount: null, chapters: [] },
        chemistry: { officialSubjectName: "Science / Chemistry", sequenceStatus: "2022 revised national curriculum identified; extract elementary, middle and high-school annexes and distinguish integrated from elective Chemistry", chapterCount: null, chapters: [] },
        physics: { officialSubjectName: "Science / Physics", sequenceStatus: "2022 revised national curriculum identified; extract elementary, middle and high-school annexes and distinguish integrated from elective Physics", chapterCount: null, chapters: [] },
        mathematics: { officialSubjectName: "Mathematics", sequenceStatus: "2022 revised national curriculum identified; extract grade-specific annex and implementation cohort", chapterCount: null, chapters: [] }
      }
    },
    {
      country: "Kosovo",
      isoAlpha3: "XKX",
      authority: "Ministry of Education, Science, Technology and Innovation (MESTI); curriculum and assessment agencies",
      authorityUrl: "https://masht.rks-gov.net/",
      curriculumLevel: "Competency-based pre-university system organized through the Kosovo Curriculum Framework and core curricula for lower- and upper-secondary education.",
      languageOfInstruction: ["Albanian", "Serbian", "Bosnian", "Turkish", "other community languages where applicable"],
      assessmentPathway: "School-based assessment and national final/Matura examinations; preserve language, municipality, school and pathway variants.",
      subjectNames: {
        biology: "Biology",
        chemistry: "Chemistry",
        physics: "Physics",
        mathematics: "Mathematics"
      },
      evidenceUrls: [
        "https://masht.rks-gov.net/wp-content/uploads/2022/09/korniza-komplet-ang.pdf",
        "https://masht.rks-gov.net/wp-content/uploads/2023/06/7.klasa-e-shtate-versioni-final-22-gusht-2018-eng.pdf",
        "https://masht.rks-gov.net/wp-content/uploads/2024/12/04-ENG-ProgamiOrientues-Matematike.pdf"
      ],
      evidence: "The Ministry's Curriculum Framework describes competency-based pre-university education and six key stages. The Ministry-hosted Grade 7 curriculum document separately lists Mathematics and Natural Sciences syllabuses for Physics, Biology and Chemistry. A 2024 Ministry professional-development document references the 2016 lower-secondary and upper-secondary core curricula. Extract current grade and stage sequences from the applicable approved documents; do not assume the Grade 7 document is the complete national sequence.",
      subjects: {
        biology: { officialSubjectName: "Biology", sequenceStatus: "Ministry-hosted Grade 7 subject syllabus identified; extract all grades and current approved revisions", chapterCount: null, chapters: [] },
        chemistry: { officialSubjectName: "Chemistry", sequenceStatus: "Ministry-hosted Grade 7 subject syllabus identified; extract all grades and current approved revisions", chapterCount: null, chapters: [] },
        physics: { officialSubjectName: "Physics", sequenceStatus: "Ministry-hosted Grade 7 subject syllabus identified; extract all grades and current approved revisions", chapterCount: null, chapters: [] },
        mathematics: { officialSubjectName: "Mathematics", sequenceStatus: "Ministry-hosted Grade 7 syllabus and 2024 teacher guidance identified; extract all grades and current approved revisions", chapterCount: null, chapters: [] }
      }
    },
    {
      country: "Vatican City",
      isoAlpha3: "VAT",
      authority: "Special-scope record; no separate national K–12 curriculum authority or national school syllabus identified in the official sources reviewed. The Holy See Dicastery for Culture and Education's Schools Office has a global Catholic-school remit, not a Vatican national curriculum mandate.",
      authorityUrl: "https://www.vaticanstate.va/en/",
      curriculumLevel: "Do not assume a separate national primary/secondary curriculum. Treat the jurisdiction as an exceptional education-scope record pending authoritative confirmation of school-age provision and any applicable Italian or other school system.",
      languageOfInstruction: ["Italian in the surrounding national education context; verify per learner and school"],
      assessmentPathway: "No separate Vatican City national school assessment pathway established by the official sources reviewed.",
      subjectNames: {
        biology: "No separate national K–12 subject syllabus verified",
        chemistry: "No separate national K–12 subject syllabus verified",
        physics: "No separate national K–12 subject syllabus verified",
        mathematics: "No separate national K–12 subject syllabus verified"
      },
      evidenceUrls: [
        "https://www.vaticanstate.va/en/",
        "https://www.dce.va/en/education/schools/About-us.html",
        "https://www.vatican.va/roman_curia/congregations/ccatheduc/documents/rc_con_ccatheduc_doc_20220125_istruzione-identita-scuola-cattolica_en.html"
      ],
      evidence: "The official Vatican City State portal is the sovereign-state reference. The Holy See Dicastery's Schools Office describes a global remit concerning Catholic schools and does not publish a distinct Vatican City national K–12 curriculum. Therefore this record closes the jurisdiction-identity gap but deliberately does not invent a national syllabus, grade sequence or examination pathway. If a learner living in Vatican City attends a school governed by Italy or an international system, map that learner to the actual school curriculum rather than assigning a fictitious Vatican curriculum.",
      subjects: {
        biology: { officialSubjectName: "Not separately established", sequenceStatus: "special-scope-no-national-K12-syllabus-verified; do not generate national chapters without official confirmation", chapterCount: null, chapters: [] },
        chemistry: { officialSubjectName: "Not separately established", sequenceStatus: "special-scope-no-national-K12-syllabus-verified; do not generate national chapters without official confirmation", chapterCount: null, chapters: [] },
        physics: { officialSubjectName: "Not separately established", sequenceStatus: "special-scope-no-national-K12-syllabus-verified; do not generate national chapters without official confirmation", chapterCount: null, chapters: [] },
        mathematics: { officialSubjectName: "Not separately established", sequenceStatus: "special-scope-no-national-K12-syllabus-verified; do not generate national chapters without official confirmation", chapterCount: null, chapters: [] }
      }
    }
  ],
  completionRules: {
    doNotInferChapterCounts: true,
    storeStateBoardTrackAndLanguageVariants: true,
    tagCurriculumVersionAndExamSession: true,
    requireOfficialGradeAndSubjectEvidence: true,
    requireHumanCurriculumVerification: true,
    distinguishIntegratedScienceFromSeparateBiologyChemistryPhysics: true,
    distinguishFederalOrCommunitySystemsFromSingleNationalCurricula: true,
    specialScopeDoesNotImplyNationalK12Syllabus: true,
    sourceMappingIsNotChapterCompletion: true,
    targetWordsPerChapter: 10000,
    minimumDiagramsPerChapter: 10,
    minimumExaminationQuestionsPerChapter: 15
  }
};
