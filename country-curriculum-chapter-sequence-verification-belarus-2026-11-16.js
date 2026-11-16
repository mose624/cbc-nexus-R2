/* CBE Nexus — Belarus curriculum sequence verification.
 * Canonical alphabetical country index: Belarus (BLR).
 * Review date: 2026-11-16.
 * Separate national state standards, school subject programmes, textbook
 * paragraph/chapter structure, and experimental advanced-level pathways.
 */
export const country = {
  name: "Belarus",
  isoAlpha3: "BLR",
  reviewDate: "2026-11-16",
  authority: "Ministry of Education of the Republic of Belarus",
  systemNotes: [
    "General secondary education is organised in three levels: primary Grades I–IV, basic Grades V–IX, and secondary Grades X–XI. Some evening pathways extend to Grade XII.",
    "A new set of educational standards for primary, basic and secondary education was approved by Ministry of Education Resolution No. 199 of 28 November 2025 and entered into force on 1 January 2026.",
    "For Grades V–IX, the state component's required subject list explicitly includes Mathematics, Biology, Physics and Chemistry. The Ministry determines the exact classes in which each required subject is taught and the weekly hours through standard curriculum plans.",
    "For the 2026/2027 school year, the Ministry stated that the overall organisation of schooling remained stable, while some subject programmes were amended. A pilot in 28 schools offers an advanced study choice in Grade 8 among Mathematics, Physics, Chemistry or Biology; this is an experimental pathway and must not be represented as universal national provision.",
    "In Grades VIII–IX, schools may allocate additional hours for advanced study under the applicable plans; the pilot's separate advanced programme is distinct from the ordinary baseline programme.",
    "At the upper secondary level, Mathematics, Physics, Chemistry and Biology are among the subjects available for the central examination (centralised exam) at the end of Grade XI in 2026/2027.",
    "Russian and Belarusian are the main languages of instruction. Record textbook language and school language separately where local school data is available."
  ],
  subjects: [
    {
      subject: "Biology",
      coverage: "Required subject in the state component for Grades V–IX; continues at upper-secondary level, with Biology available among Grade XI central examination choices. An advanced Biology option is part of the 2026/27 Grade 8 pilot.",
      sequenceStatus: "subject and grade-band scope verified; detailed class-by-class topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "Resolution No. 199 (2025), effective 1 January 2026, includes Biology in the required Grades V–IX subject list.",
        "The 2026/27 pilot provides an advanced Biology study option in Grade 8 in selected schools only.",
        "Biology is included in the list of Grade XI central examination subjects for 2026/27.",
        "A school resource portal lists Biology textbooks/programmes across Grades 6–11, but this secondary source is not used to assert official chapter counts."
      ],
      pending: ["Retrieve the Ministry's 2026/27 Biology subject programme and weekly thematic plan for each applicable grade.", "Extract the current approved textbook's exact chapter/paragraph headings and order for Grades 6–11.", "Identify differences between standard and advanced Grade 8 pilot programme.", "Map practical/laboratory work and Grade XI assessment outcomes."]
    },
    {
      subject: "Chemistry",
      coverage: "Required subject in the state component for Grades V–IX, with the exact class allocation set by Ministry standard plans; continues at upper-secondary level and is a Grade XI central examination choice. An advanced Chemistry option is part of the 2026/27 Grade 8 pilot.",
      sequenceStatus: "subject and grade-band scope verified; detailed class-by-class topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "Resolution No. 199 (2025), effective 1 January 2026, includes Chemistry in the required Grades V–IX subject list.",
        "The Ministry's 2026/27 Grade 8 pilot offers advanced Chemistry in selected schools.",
        "Chemistry is included in the Grade XI central examination subject choices for 2026/27."
      ],
      pending: ["Retrieve the official 2026/27 Chemistry programme and class-specific thematic plans.", "Extract approved textbook chapter/paragraph headings in order for every applicable grade.", "Separate ordinary and advanced pilot content.", "Map laboratory experiments, safety competencies and assessment criteria."]
    },
    {
      subject: "Physics",
      coverage: "Required subject in the state component for Grades V–IX, with exact class allocation set by Ministry standard plans; continues at upper-secondary level and is a Grade XI central examination choice. An advanced Physics option is part of the 2026/27 Grade 8 pilot.",
      sequenceStatus: "subject and grade-band scope verified; detailed class-by-class topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "Resolution No. 199 (2025), effective 1 January 2026, includes Physics in the required Grades V–IX subject list.",
        "The Ministry's 2026/27 Grade 8 pilot offers advanced Physics in selected schools.",
        "Physics is included in the Grade XI central examination subject choices for 2026/27."
      ],
      pending: ["Retrieve the official 2026/27 Physics programme and grade-specific thematic plans.", "Extract approved textbook chapter/paragraph headings in order for each grade.", "Separate ordinary and advanced pilot content.", "Map experiments, measurement skills and assessment criteria."]
    },
    {
      subject: "Mathematics",
      coverage: "Required subject in the state component for Grades V–IX; continues through upper secondary and is a Grade XI central examination choice. An advanced Mathematics option is part of the 2026/27 Grade 8 pilot.",
      sequenceStatus: "subject and grade-band scope verified; detailed class-by-class topic sequence pending",
      chapterCount: null,
      officialChapterCount: null,
      evidence: [
        "Resolution No. 199 (2025), effective 1 January 2026, includes Mathematics in the required Grades V–IX subject list.",
        "The Ministry's 2026/27 Grade 8 pilot offers advanced Mathematics in selected schools; the reported pilot plan allocates seven Mathematics lessons per week in participating advanced classes.",
        "Mathematics is included in the Grade XI central examination subject choices for 2026/27."
      ],
      pending: ["Retrieve official Mathematics programmes and weekly thematic plans for Grades V–XI.", "Extract approved textbook chapter/paragraph headings in exact class order.", "Separate standard and advanced Grade 8 pilot pathways.", "Map outcomes, worked examples and examination specifications."]
    }
  ],
  sourceRegister: [
    {
      title: "Ministry of Education Resolution No. 199 of 28 November 2025 — Educational standards for general secondary education",
      url: "https://pravo.by/document/?guid=12551&p0=W22544307",
      use: "Primary legal instrument, effective 1 January 2026; establishes primary, basic and secondary education standards and lists required subjects for Grades V–IX."
    },
    {
      title: "Ministry of Education — 2026/2027 school-year organisation and pilot advanced study",
      url: "https://www.sb.by/articles/minobrazovaniya-osnovnye-podkhody-k-organizatsii-obrazovatelnogo-protsessa-v-shkolakh-sokhraneny.html",
      use: "18 August 2026 report quoting the Ministry: stable overall school framework, amendments to some programmes and Grade 8 advanced-study pilot in Mathematics, Physics, Chemistry and Biology."
    },
    {
      title: "Ministry of Education — 2026 school-year innovations and advanced science pilot",
      url: "https://www.sb.by/articles/skoro-v-shkolu-sobrali-vse-vazhnye-novatsii-uchebnogo-goda-2026.html",
      use: "2026 report describing pilot participation by 28 schools and separate advanced programmes in selected Grade 8 subjects."
    },
    {
      title: "Ministry of Education Resolution No. 148 of 19 August 2026 — final examinations in 2026/2027",
      url: "https://prg.kz/document/?doc_id=38143385",
      use: "Lists Mathematics, Physics, Chemistry and Biology among central examination choices at the end of Grade XI; use the official legal publication for final legal citation."
    },
    {
      title: "General secondary education — levels and grade bands",
      url: "https://bpwbrest.by/educating_foreigners/general_secondary_educat.html?lang=en",
      use: "English-language institutional overview of Grades I–IV, V–IX and X–XI (evening up to XII); secondary corroboration."
    },
    {
      title: "Pedagogical resource portal — Belarus school textbook paragraph catalogue",
      url: "https://pedskarbonka.by/about.html",
      use: "School-based learning resource describes textbook-aligned paragraphs for Mathematics, Physics, Chemistry and Biology. Secondary corroboration only; not treated as official chapter-count evidence."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithCurrentNationalStandardEvidence: 4,
    subjectsWithGradeBandEvidence: 4,
    subjectsWithDetailedClassByClassTopicSequenceExtracted: 0,
    subjectsWithVerifiedOfficialChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    advancedGrade8Pilot: "2026/27 experimental option in 28 schools; do not apply universally",
    status: "2026-national-standard-and-subject-scope-verified; textbook-sequence-extraction-pending",
    note: "The legal standard lists required subjects but delegates exact class placement and weekly hours to Ministry standard plans. The advanced Grade 8 pilot is experimental. Do not infer chapter counts or detailed sequences from subject presence alone."
  }
};
