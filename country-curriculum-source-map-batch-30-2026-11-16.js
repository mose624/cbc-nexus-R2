// CBE Nexus global curriculum source map — Batch 30 (reconciliation set; 5 country records)
// Rwanda already has a dedicated country extension. This batch records its 2026 source update without replacing that file.
export const countryCurriculumSourceMapBatch30 = {
  "schemaVersion": "1.0",
  "auditedAt": "2026-11-16",
  "batch": 30,
  "countryRange": "reconciliation-set",
  "countries": [
    {
      "country": "Rwanda",
      "recordAction": "reconcile-existing-country-extension",
      "existingCountryFile": "country-online-notes-rwanda-reb.js",
      "authority": "Rwanda Basic Education Board (REB); Ministry of Education (MINEDUC)",
      "officialPortal": "https://elearning.reb.rw/",
      "curriculumLevel": "Competence-Based Curriculum; lower secondary S1–S3 and upper secondary S4–S6; revised 2026/2027 learning materials and syllabi",
      "languageOfInstruction": ["Kinyarwanda", "English", "French in applicable provision"],
      "assessmentPathway": "NESA national assessments and examinations; apply the 2026/2027 revised materials and cohort-specific pathway rules.",
      "subjectNames": {
        "biology": "Biology",
        "chemistry": "Chemistry",
        "physics": "Physics",
        "mathematics": "Mathematics"
      },
      "evidenceUrls": [
        "https://www.reb.gov.rw/curriculum-teaching-learning-resources-department",
        "https://elearning.reb.rw/",
        "https://www.mineduc.gov.rw/news-detail/better-teachers-more-schools-new-curriculum-rwanda-s-education-looks-bright",
        "https://www.mineduc.gov.rw/news-detail/consultative-meeting-with-head-teachers-on-the-implementation-of-new-educational-reforms"
      ],
      "evidence": "REB's e-learning portal is the official distribution point for revised 2026/2027 primary and secondary resources, including syllabi, content distribution and teacher guides. MINEDUC confirms that secondary science is split into Biology, Chemistry and Physics alongside Mathematics. MINEDUC has also announced consultations on restructuring upper-secondary pathways. The existing CBE Nexus Rwanda extension already records the transition and correctly flags detailed 2026 subject topic sequences as pending direct PDF verification; retain that status until the exact current syllabus files are inspected.",
      "subjects": {
        "biology": {"officialSubjectName":"Biology","sequenceStatus":"2026/2027 REB resource release identified; inspect official syllabus PDF and retain cohort/pathway labels","chapterCount":null,"chapters":[]},
        "chemistry": {"officialSubjectName":"Chemistry","sequenceStatus":"2026/2027 REB resource release identified; inspect official syllabus PDF and retain cohort/pathway labels","chapterCount":null,"chapters":[]},
        "physics": {"officialSubjectName":"Physics","sequenceStatus":"2026/2027 REB resource release identified; inspect official syllabus PDF and retain cohort/pathway labels","chapterCount":null,"chapters":[]},
        "mathematics": {"officialSubjectName":"Mathematics","sequenceStatus":"2026/2027 REB resource release identified; inspect official syllabus PDF and retain cohort/pathway labels","chapterCount":null,"chapters":[]}
      }
    },
    {
      "country": "Saint Kitts and Nevis",
      "authority": "Ministry of Education; Curriculum Development Unit",
      "officialPortal": "https://www.education.gov.kn/",
      "curriculumLevel": "Five-year secondary cycle: Forms 1–2 lower secondary and Forms 3–5 upper secondary; regional CXC subject syllabuses",
      "languageOfInstruction": ["English"],
      "assessmentPathway": "Upper-secondary learners follow CXC Caribbean Secondary Education Certificate (CSEC) subjects; school subject offerings vary.",
      "subjectNames": {
        "biology": "Integrated Science at lower levels; Biology (CSEC)",
        "chemistry": "Integrated Science at lower levels; Chemistry (CSEC)",
        "physics": "Integrated Science at lower levels; Physics (CSEC)",
        "mathematics": "Mathematics (CSEC)"
      },
      "evidenceUrls": [
        "https://education.gov.kn/secondary-education/",
        "https://education.gov.kn/2026/09/11/curriculum-development-unit-strengthens-educators-through-targeted-workshops/",
        "https://www.cxc.org/"
      ],
      "evidence": "The Ministry describes a five-year secondary cycle, with Forms 1–2 lower secondary and Forms 3–5 upper secondary. The final two years lead to regional CXC examinations; schools offer a subset of CSEC subjects. The Curriculum Development Unit was working in September 2026 on the OECS Harmonized Primary Curriculum pilot and enhanced Grade 3 Mathematics. Map local lower-secondary provision separately from CSEC subject syllabuses; do not treat CXC as a complete national curriculum.",
      "subjects": {
        "biology": {"officialSubjectName":"Biology (CSEC); Integrated Science where applicable","sequenceStatus":"CXC upper-secondary syllabus is the regional examination reference; retrieve current session syllabus and local lower-secondary scheme","chapterCount":null,"chapters":[]},
        "chemistry": {"officialSubjectName":"Chemistry (CSEC); Integrated Science where applicable","sequenceStatus":"CXC upper-secondary syllabus is the regional examination reference; retrieve current session syllabus and local lower-secondary scheme","chapterCount":null,"chapters":[]},
        "physics": {"officialSubjectName":"Physics (CSEC); Integrated Science where applicable","sequenceStatus":"CXC upper-secondary syllabus is the regional examination reference; retrieve current session syllabus and local lower-secondary scheme","chapterCount":null,"chapters":[]},
        "mathematics": {"officialSubjectName":"Mathematics (CSEC)","sequenceStatus":"CXC upper-secondary syllabus plus local lower-secondary scheme; tag examination session","chapterCount":null,"chapters":[]}
      }
    },
    {
      "country": "Saint Lucia",
      "authority": "Ministry of Education; Curriculum and Materials Development Unit (CAMDU)",
      "officialPortal": "https://camdu.edu.lc/",
      "curriculumLevel": "Primary Grades K–6 and secondary Forms 1–5 / Grades 7–12; national and OECS curriculum resources",
      "languageOfInstruction": ["English"],
      "assessmentPathway": "School assessment, Common Entrance at primary transition and CXC CSEC/CAPE for applicable upper-secondary subjects.",
      "subjectNames": {
        "biology": "Integrated Science; Biology",
        "chemistry": "Integrated Science; Chemistry",
        "physics": "Integrated Science; Physics",
        "mathematics": "Mathematics"
      },
      "evidenceUrls": [
        "https://camdu.edu.lc/about/",
        "https://camdu.edu.lc/lernbook/",
        "https://camdu.edu.lc/curriculum-guides-i/natural-sciences-and-technology-curriculum-guides/",
        "https://camdu.edu.lc/curriculum-guides-i/mathematics-curriculum-guides/"
      ],
      "evidence": "CAMDU is the Ministry's curriculum development and instructional support unit. Its official LernBook programme lists Biology, Chemistry, Physics, Integrated Science and Mathematics for secondary Forms 2–4. CAMDU's Natural Sciences and Technology curriculum guides provide separate student and teacher manuals for Biology, Chemistry and Physics; its Mathematics guides list grade-level primary materials. Extract chapter sequence from the applicable guide and distinguish integrated science from separate secondary subjects.",
      "subjects": {
        "biology": {"officialSubjectName":"Biology; Integrated Science","sequenceStatus":"CAMDU teacher and student manuals listed; extract grade/form sequence from current guides","chapterCount":null,"chapters":[]},
        "chemistry": {"officialSubjectName":"Chemistry; Integrated Science","sequenceStatus":"CAMDU teacher and student manuals listed; extract grade/form sequence from current guides","chapterCount":null,"chapters":[]},
        "physics": {"officialSubjectName":"Physics; Integrated Science","sequenceStatus":"CAMDU teacher and student manuals listed; extract grade/form sequence from current guides","chapterCount":null,"chapters":[]},
        "mathematics": {"officialSubjectName":"Mathematics","sequenceStatus":"CAMDU primary grade guides identified; retrieve secondary form-by-form mathematics programme","chapterCount":null,"chapters":[]}
      }
    },
    {
      "country": "Saint Vincent and the Grenadines",
      "authority": "Ministry of Education and National Reconciliation; Curriculum Development Unit",
      "officialPortal": "https://www.education.gov.vc/education/",
      "curriculumLevel": "Secondary education for learners aged approximately 12–18; national lower-secondary provision and CXC upper-secondary pathways",
      "languageOfInstruction": ["English"],
      "assessmentPathway": "School-based assessment and CXC CSEC/CAPE examinations for subjects and levels offered by each school.",
      "subjectNames": {
        "biology": "Integrated Science; Biology (CSEC/CAPE)",
        "chemistry": "Integrated Science; Chemistry (CSEC/CAPE)",
        "physics": "Integrated Science; Physics (CSEC/CAPE)",
        "mathematics": "Mathematics (CSEC/CAPE)"
      },
      "evidenceUrls": [
        "https://www.education.gov.vc/education/index.php/secondary-education",
        "https://www.cxc.org/"
      ],
      "evidence": "The Ministry's secondary education page describes provision for ages 12–18 and lists the national secondary schools. Upper-secondary subject syllabuses and external examinations are substantially aligned to CXC regional programmes. The Ministry page reviewed does not expose a current public grade-by-grade national chapter sequence for all four subjects; therefore, map CXC syllabuses as the examination framework and mark local lower-secondary topic order for further official verification.",
      "subjects": {
        "biology": {"officialSubjectName":"Biology (CXC); Integrated Science in lower-secondary provision","sequenceStatus":"regional CXC subject framework identified; retrieve current syllabus session and local lower-secondary curriculum","chapterCount":null,"chapters":[]},
        "chemistry": {"officialSubjectName":"Chemistry (CXC); Integrated Science in lower-secondary provision","sequenceStatus":"regional CXC subject framework identified; retrieve current syllabus session and local lower-secondary curriculum","chapterCount":null,"chapters":[]},
        "physics": {"officialSubjectName":"Physics (CXC); Integrated Science in lower-secondary provision","sequenceStatus":"regional CXC subject framework identified; retrieve current syllabus session and local lower-secondary curriculum","chapterCount":null,"chapters":[]},
        "mathematics": {"officialSubjectName":"Mathematics (CXC)","sequenceStatus":"regional CXC subject framework identified; retrieve current syllabus session and local lower-secondary curriculum","chapterCount":null,"chapters":[]}
      }
    },
    {
      "country": "Samoa",
      "authority": "Ministry of Education and Culture (MESC); Curriculum Design and Materials Division",
      "officialPortal": "https://www.mesc.gov.ws/",
      "curriculumLevel": "Primary Years 1–8; secondary Years 9–13; four-year secondary level (Years 9–12) with Science, TVET, Arts and Commerce pathways",
      "languageOfInstruction": ["Samoan", "English"],
      "assessmentPathway": "Samoa School Certificate at Year 12 and Samoa Secondary Leaving Certificate at Year 13; subject and pathway selection affect assessment.",
      "subjectNames": {
        "biology": "Biology; General Science",
        "chemistry": "Chemistry; General Science",
        "physics": "Physics; General Science",
        "mathematics": "Mathematics; General Mathematics"
      },
      "evidenceUrls": [
        "https://www.mesc.gov.ws/secondary-education/",
        "https://www.mesc.gov.ws/press-release-new-4-year-level-for-all-secondary-schools-year-9-year-10-year-11-year-12/",
        "https://mesc.gov.ws/wp-content/uploads/2024/02/Science_4YL.pdf",
        "https://mesc.gov.ws/wp-content/uploads/2024/02/Mathematics_4YL.pdf",
        "https://www.mesc.gov.ws/education/textbooks/"
      ],
      "evidence": "MESC's secondary portal provides curriculum statements by subject. The four-year secondary level covers Years 9–12 and has Science, TVET, Arts and Commerce pathways; Year 9 begins the pathway structure, and Mathematics/General Mathematics are differentiated for science and non-science learners. The 2021 Science 4YL curriculum statement covers Biology, Chemistry, Physics and General Science for Years 9–12. The 2022 Mathematics 4YSL statement replaces the old five-year curriculum and separates Mathematics from General Mathematics. MESC also lists Years 9–13 textbooks and the Year 12/13 national assessment pathway.",
      "subjects": {
        "biology": {"officialSubjectName":"Biology; General Science","sequenceStatus":"official 2021 Science 4YL statement and MESC secondary resources identified; extract subject strand and year sequence","chapterCount":null,"chapters":[]},
        "chemistry": {"officialSubjectName":"Chemistry; General Science","sequenceStatus":"official 2021 Science 4YL statement and MESC secondary resources identified; extract subject strand and year sequence","chapterCount":null,"chapters":[]},
        "physics": {"officialSubjectName":"Physics; General Science","sequenceStatus":"official 2021 Science 4YL statement and MESC secondary resources identified; extract subject strand and year sequence","chapterCount":null,"chapters":[]},
        "mathematics": {"officialSubjectName":"Mathematics; General Mathematics","sequenceStatus":"official 2022 four-year Mathematics statement; preserve science/non-science stream distinction","chapterCount":null,"chapters":[]}
      }
    }
  ],
  "completionRules": {
    "doNotInferChapterCounts": true,
    "storeStateBoardTrackAndLanguageVariants": true,
    "tagCurriculumVersionAndExamSession": true,
    "targetWordsPerChapter": 10000,
    "minimumDiagramsPerChapter": 10,
    "minimumExaminationQuestionsPerChapter": 15,
    "requireOfficialGradeAndSubjectEvidence": true,
    "requireHumanCurriculumVerification": true,
    "distinguishIntegratedScienceFromSeparateBiologyChemistryPhysics": true,
    "distinguishFrameworksFromApprovedSubjectSyllabuses": true,
    "sourceMappingIsNotChapterCompletion": true
  }
};