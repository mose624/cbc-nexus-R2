/**
 * CBE Nexus country curriculum verification
 * Country: Cabo Verde (Cape Verde)
 * Canonical country index: 33
 * Reviewed: 2026-11-16
 *
 * Evidence is drawn from the Cabo Verde Ministry of Education curriculum,
 * school programme and textbook portals, including 2026/2027 guidance.
 * Discipline labels vary by grade: integrated science, Ciências da Terra e da
 * Vida, Físico-Química, Biology and Geology, Physics and Chemistry, etc.
 * These must not be flattened into four standalone subjects at every grade.
 */
export const countryCurriculumVerification = {
  country: "Cabo Verde",
  aliases: ["Cape Verde", "Cabo Verde"],
  countryIndex: 33,
  reviewedOn: "2026-11-16",
  authority: "Ministério da Educação, Formação Profissional, Ensino Superior, Ciência e Inovação",
  system: {
    formalBasicEducation: "The Ministry's Plano de Estudos do Ensino Básico Formal covers Years 1–8. It is based on the 2018 legislative framework and includes subject programmes by discipline/area and school year.",
    secondaryEducation: "The Ministry programme and textbook portals list secondary grades 9–12, with differentiated subject options and pathways. Do not assume every student takes every specialist science subject.",
    scienceProgression: [
      "Years 1–4: integrated learning areas including Ciências Integradas and Atividades Científicas.",
      "Years 5–6: Ciências da Terra e da Vida appears as a subject area alongside Mathematics and scientific activities.",
      "Years 7–9: separate Ciências da Terra e da Vida and Físico-Química textbooks are listed, alongside Mathematics.",
      "Years 10–11: Biology and Geology and Physics and Chemistry are listed as separate combined subjects; Mathematics has distinct course variants.",
      "Year 12: separate Biology, Physics, Chemistry and Geology manuals are listed."
    ],
    currentStatus2026: "The Ministry's Caderno de Orientações for 2026/2027 was approved by Despacho n.º 81/2026, published in the Official Bulletin on 29 July 2026. It provides school-year organisation guidance; it is not itself evidence that the detailed science programme has been replaced.",
    curriculumCaution: "Use the exact subject name and grade-specific programme/manual. In particular, do not split integrated science or Físico-Química into invented standalone chapter sequences, and do not treat combined subject manuals as two independently counted textbooks.",
    sources: [
      "https://minedu.gov.cv/recursos_educativosorientacoes",
      "https://boe.incv.cv/Bulletins/View/112578",
      "https://minedu.gov.cv/manuais",
      "https://minedu.gov.cv/recursos_educativosprogramas_escolares?page_4=2",
      "https://minedu.gov.cv/recursos_educativossearch_programa/?keywords=&page=3&programa_ciclo=Ensino+Secund%C3%A1rio"
    ]
  },
  subjects: [
    {
      subject: "Biology",
      officialNames: ["Ciências Integradas", "Atividades Científicas", "Ciências da Terra e da Vida", "Biologia e Geologia", "Biologia"],
      verifiedPosition: "Biological learning is integrated in the early basic grades, then represented through Ciências da Terra e da Vida in Years 5–9 and Biology e Geology in Years 10–11. A separate Biology manual is listed for Year 12.",
      verifiedGradeCoverage: "Ministry textbook portal lists Ciências Integradas and Atividades Científicas in Years 1–4; Ciências da Terra e da Vida in Years 5–9; Biologia e Geologia in Years 10–11; and Biologia in Year 12.",
      sequenceEvidence: "The official Ministry manual catalogue explicitly identifies the subject titles and year levels. The Ministry programme search also lists Biologia e Geologia for Years 11 and 12 and Biologia for Year 12. Exact content headings and order have not yet been transcribed from each manual/programme.",
      chapterCount: null,
      sequenceStatus: "Grade-level subject naming and manual coverage verified; detailed chapter headings, official chapter counts and outcome-by-outcome progression pending.",
      sources: [
        "https://minedu.gov.cv/manuais",
        "https://minedu.gov.cv/recursos_educativosprogramas_escolares?page_4=2",
        "https://minedu.gov.cv/recursos_educativossearch_programa/?keywords=&page=3&programa_ciclo=Ensino+Secund%C3%A1rio"
      ]
    },
    {
      subject: "Chemistry",
      officialNames: ["Físico-Química", "Física e Química", "Química"],
      verifiedPosition: "Chemistry is combined with Physics in Físico-Química in Years 7–9 and Física e Química in Years 10–11. The Ministry catalogue lists a separate Chemistry manual in Year 12.",
      verifiedGradeCoverage: "Físico-Química manuals are listed for Years 7, 8 and 9; Física e Química for Years 10 and 11; Química for Year 12.",
      sequenceEvidence: "The official manual catalogue lists the combined and standalone subject names by year. The Ministry secondary programme search lists Física e Química in Year 11 and the programme catalogue includes Química in Year 12. Chemistry-specific topic boundaries within the combined courses have not yet been extracted.",
      chapterCount: null,
      sequenceStatus: "Combined-course grade coverage and separate Year 12 Chemistry manual verified; exact chemistry topic order, practical sequence and textbook chapter counts pending.",
      sources: [
        "https://minedu.gov.cv/manuais",
        "https://minedu.gov.cv/recursos_educativossearch_programa/?keywords=&page=3&programa_ciclo=Ensino+Secund%C3%A1rio",
        "https://minedu.gov.cv/recursos_educativosprogramas_escolares?page_4=2"
      ]
    },
    {
      subject: "Physics",
      officialNames: ["Atividades Científicas", "Físico-Química", "Física e Química", "Física"],
      verifiedPosition: "Physics concepts are included in early scientific activities, then combined with Chemistry in Físico-Química (Years 7–9) and Física e Química (Years 10–11). A separate Physics manual is listed for Year 12.",
      verifiedGradeCoverage: "Atividades Científicas manuals appear in Years 1–8; Físico-Química in Years 7–9; Física e Química in Years 10–11; Física in Year 12.",
      sequenceEvidence: "The Ministry textbook catalogue explicitly lists Atividades Científicas by year, Físico-Química for Years 7–9, Física e Química for Years 10–11 and Física for Year 12. Detailed physics strands, practical activities and chapter order remain to be extracted.",
      chapterCount: null,
      sequenceStatus: "Integrated/combined course progression and separate Year 12 Physics manual verified; detailed physics topic sequence and textbook chapter counts pending.",
      sources: [
        "https://minedu.gov.cv/manuais",
        "https://minedu.gov.cv/recursos_educativossearch_programa/?keywords=&page=3&programa_ciclo=Ensino+Secund%C3%A1rio"
      ]
    },
    {
      subject: "Mathematics",
      officialNames: ["Matemática", "Matemática Aplicada às Ciências Sociais e Humanas", "Matemática Aplicada às Artes"],
      verifiedPosition: "Mathematics is a distinct subject throughout basic education and continues in secondary education with differentiated applied course variants.",
      verifiedGradeCoverage: "The Ministry manual catalogue lists Mathematics in Years 1–11, including Mathematics Applied to Social and Human Sciences and Mathematics Applied to Arts in secondary grades. The programme portal lists Mathematics in Year 11.",
      sequenceEvidence: "The official Ministry manual catalogue lists year-specific Mathematics manuals and distinct applied variants in upper secondary. The basic education plan states that year-specific subject programmes complement the curriculum plan. Exact grade-level strands, topic order and the full Year 12 Mathematics pathway require further extraction.",
      chapterCount: null,
      sequenceStatus: "Distinct subject and multiple secondary variants verified; grade-by-grade topic progression, Year 12 pathway and official textbook chapter counts pending.",
      sources: [
        "https://minedu.gov.cv/manuais",
        "https://minedu.gov.cv/recursos_educativosorientacoes/8",
        "https://minedu.gov.cv/recursos_educativossearch_programa/?keywords=&page=3&programa_ciclo=Ensino+Secund%C3%A1rio"
      ]
    }
  ],
  outstandingWork: [
    "Download the year-specific official programmes and manuals for Years 1–12 and extract each table of contents, learning outcomes, topic order, hours and assessment requirements.",
    "Map integrated Ciências Integradas and Atividades Científicas in early grades without fabricating separate Biology, Chemistry or Physics chapters.",
    "For Years 7–11, separate Chemistry and Physics topic strands analytically while preserving the official combined Físico-Química and Física e Química course structure.",
    "Verify which secondary subject variants apply to each pathway and student profile, including Year 12 Mathematics options.",
    "Count actual textbook chapters only after inspecting the official manuals; do not equate programme units or learning outcomes with chapters.",
    "Check the 2026/2027 school-year guidance for any subject-specific implementation notes beyond the general organisational directions."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithOfficialGradeSpecificManualEvidence: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedGradeByGradeSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }
};
