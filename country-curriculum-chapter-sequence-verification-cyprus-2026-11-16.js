/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Cyprus | ISO3: CYP | Review date: 2026-11-16
 * Official-source audit; not a claim that CBE Nexus chapters are complete.
 */
export const countryCurriculumVerification = {
  country: "Cyprus",
  countryCode: "CYP",
  reviewDate: "2026-11-16",
  authority: "Ministry of Education, Sport and Youth (MESY), Republic of Cyprus",
  languageOfInstruction: "Greek in public schools; minority and private/international school pathways may use other languages.",
  structure: {
    primary: "Six-year primary education (Grades 1–6).",
    lowerSecondary: "Three-year Gymnasium (Grades 7–9), compulsory.",
    upperSecondary: "Three-year Lyceum (Grades 10–12) or secondary technical and vocational education; pathways and subject choices differ.",
    note: "Private and international schools may follow different curricula, including Cambridge/IGCSE and A-level pathways; do not merge them into the public national programme."
  },
  curriculumStatus2026: {
    status: "Updated analytical curricula for all subjects and grades in primary and secondary general education were published on 28 August 2024. The 2026 official EU reform tracker reports the secondary curriculum reform as completed.",
    evidence: [
      "The Ministry announced publication of updated analytical programmes for all subjects and all grades of primary and secondary general education.",
      "The EU reform project records completion of the reform of 40 secondary curricula, including Biology, Mathematics, Physics and Chemistry.",
      "The Ministry's official Gymnasium page lists Mathematics, Physics, Chemistry and Biology as taught subjects in the three-year lower-secondary cycle."
    ],
    caution: "The 2024 curriculum update and subsequent 2025–2026 integration of key competences should be treated as the current public-school reference; do not confuse proposed long-term strategy items with an adopted replacement curriculum."
  },
  subjects: [
    {
      subject: "Biology",
      localName: "Βιολογία (Biología)",
      status: "Listed as a separate subject in Gymnasium and in relevant Lyceum pathways; subject selection and teaching hours vary by upper-secondary direction.",
      sequenceScope: "Use the updated MESY analytical programme for the relevant grade in public secondary general education. Upper-secondary Biology is offered according to the student's selected direction and timetable.",
      chapterCount: null,
      chapterCountStatus: "Official analytical programme indicators are not textbook chapter counts; current textbook contents need separate verification.",
      pending: ["Retrieve and extract the updated Biology analytical programme for each grade.", "Map Lyceum theoretical/practical directions and elective combinations.", "Check current approved textbook contents and edition before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Χημεία (Chimía)",
      status: "Listed as a separate Gymnasium subject and offered in relevant Lyceum directions; upper-secondary availability varies by pathway.",
      sequenceScope: "Use the updated MESY analytical programme by grade. Distinguish public-school national programme from private/international school IGCSE or A-level courses.",
      chapterCount: null,
      chapterCountStatus: "No verified official textbook chapter count.",
      pending: ["Extract grade-level analytical programme indicators and content.", "Map upper-secondary directions and subject combinations.", "Verify approved textbook contents and editions."]
    },
    {
      subject: "Physics",
      localName: "Φυσική (Fysikí)",
      status: "Listed as a separate Gymnasium subject and offered in relevant Lyceum directions; upper-secondary availability varies by pathway.",
      sequenceScope: "Use the updated MESY analytical programme by grade; preserve upper-secondary direction and elective distinctions.",
      chapterCount: null,
      chapterCountStatus: "No verified official textbook chapter count.",
      pending: ["Extract grade-level learning outcomes and content sequence.", "Map Lyceum directions and upper-secondary elective combinations.", "Verify approved textbook contents and editions."]
    },
    {
      subject: "Mathematics",
      localName: "Μαθηματικά (Mathimatiká)",
      status: "Core subject in Gymnasium and Lyceum; Mathematics pathways and teaching hours vary by upper-secondary direction.",
      sequenceScope: "Use the updated MESY analytical programme for each primary and secondary grade. Distinguish general/core Mathematics from upper-secondary direction-specific or advanced options.",
      chapterCount: null,
      chapterCountStatus: "No verified official textbook chapter count.",
      pending: ["Extract grade-by-grade programme indicators from primary through Lyceum.", "Map general and direction-specific upper-secondary Mathematics.", "Verify approved textbook contents and editions."]
    }
  ],
  implementationNotes: [
    "Public secondary general education comprises two three-year cycles: Gymnasium and Lyceum; technical/vocational education is a distinct pathway.",
    "The official Gymnasium curriculum lists Biology, Chemistry, Physics and Mathematics as subjects; it is not a single integrated science subject at that stage.",
    "Upper-secondary subject choices and weekly teaching periods vary by direction. Do not imply all students take all three sciences at the same intensity.",
    "The Ministry's 28 August 2024 update covered all grades of primary and secondary general education; later competence integration is a further update, not proof of a wholly new curriculum.",
    "Private/international schools can offer different curricula; maintain separate records for Cambridge, IGCSE, A-level and other non-national programmes."
  ],
  officialSources: [
    {
      title: "MESY — Publication of updated analytical curricula, 28 August 2024",
      url: "https://www.gov.cy/paideia-athlitismos-neolaia/anartisi-epikairopoiimenon-analytikon-programmaton/",
      use: "Official announcement that updated programmes for all subjects and grades in primary and secondary general education were published."
    },
    {
      title: "MESY — Gymnasium",
      url: "https://www.moec.gov.cy/dme/en/gymnasium.html",
      use: "Official list of Gymnasium subjects, including Mathematics, Physics, Chemistry and Biology; confirms the three-year cycle."
    },
    {
      title: "European Commission — Addressing skills mismatch in secondary and higher education",
      url: "https://reforms-investments.ec.europa.eu/projects/addressing-skills-mismatch-between-education-and-labour-market-secondary-and-higher-education_en",
      use: "Records completed reform of 40 secondary curricula, including Biology, Mathematics, Physics and Chemistry."
    },
    {
      title: "Cyprus government — Annual Progress Report 2026",
      url: "https://www.gov.cy/media/sites/11/2025/05/CY-APR-2026-Final.pdf",
      use: "States the first curriculum update phase concluded in May 2024 and detailed curricula were posted on the Ministry website; subsequent work integrates key competences."
    },
    {
      title: "MESY — Secondary General Education: General Information",
      url: "https://www.moec.gov.cy/dme/en/infoserv_secondary_general_information.html",
      use: "Confirms secondary general education ages 12–18 in two three-year cycles."
    }
  ],
  reconciliation: {
    biology: "Current analytical programme confirmed as updated; grade-level content extraction and Lyceum direction mapping pending.",
    chemistry: "Current analytical programme confirmed as updated; grade-level content extraction and Lyceum direction mapping pending.",
    physics: "Current analytical programme confirmed as updated; grade-level content extraction and Lyceum direction mapping pending.",
    mathematics: "Updated analytical programme confirmed across primary and secondary; grade-level content extraction and pathway mapping pending.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Updated national analytical curriculum and public-school subject structure identified; detailed grade-by-grade outcomes, upper-secondary pathways and textbook chapter counts remain pending."
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Cyprus",
  gradeSequenceEvidence: "MESY curriculum distinguishes primary, Gymnasium and Lyceum/technical pathways. Science is integrated at some stages and specialist Biology, Chemistry, Physics and Mathematics are offered according to grade and pathway; extract current analytical programmes by class.",
  textbookEvidence: "No actual textbook contents inspected; official analytical programmes and textbook contents remain outstanding.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.moec.gov.cy/",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
