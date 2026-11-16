/* CBE Nexus — Austria curriculum sequence verification.
 * Country index: 14 in the project's canonical alphabetical register.
 * Review date: 2026-11-16.
 * Scope: official Austrian federal curricula; AHS evidence is recorded explicitly
 * and must not be mistaken for the complete Mittelschule, Volksschule or BHS audit.
 * Official lesson-plan content headings still require subject-by-subject extraction.
 */
export const country = {
  name: "Austria",
  isoAlpha3: "AUT",
  reviewDate: "2026-11-16",
  curriculumAuthority: "Federal Ministry of Education; legal curricula published in RIS (Rechtsinformationssystem des Bundes)",
  systemNotes: [
    "Austria has multiple school forms and pathways. This record uses the Allgemeinbildende höhere Schule (AHS) federal curriculum as the verified common reference, not as a substitute for the Mittelschule, Volksschule or Berufsbildende mittlere und höhere Schulen (BMS/BHS) curricula.",
    "AHS classes 1–4 correspond to lower-secondary school years (typically school levels 5–8); classes 5–8 correspond to upper-secondary school years (typically school levels 9–12).",
    "The AHS curriculum is organized into general educational goals, competence orientation, didactic principles, cross-curricular themes, organizational framework, timetable tables and individual subject curricula. The individual subject curricula specify content/application areas and competencies by school level.",
    "The Federal Ministry states that the new AHS upper-secondary curriculum was promulgated as BGBl. II No. 323/2026 on 6 November 2026. It takes effect progressively from 1 September 2027, beginning with class 5; therefore it must be tracked separately from the curriculum currently in force during the 2026/27 school year."
  ],
  subjects: [
    {
      subject: "Biology and Environmental Education (Biologie und Umweltbildung)",
      schoolForm: "AHS",
      gradeCoverage: "AHS classes 1–4 and 5–8 (school levels approximately 5–12)",
      sequenceStatus: "official subject curriculum identified; detailed content sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      verifiedTimetableEvidence: "The AHS lower-secondary timetable allocates Biology and Environmental Education across classes 1–4. The upper-secondary timetable includes it in selected classes; allocations vary by curriculum form and timetable version.",
      pending: ["Extract the current lower-secondary subject curriculum's content/application areas and competence expectations by class.", "Extract the applicable upper-secondary Biology curriculum and reconcile the 2026/27 transition timetable.", "Extract the new upper-secondary subject curriculum effective progressively from 2027/28.", "Compare Mittelschule and BHS pathways separately."]
    },
    {
      subject: "Chemistry (Chemie)",
      schoolForm: "AHS",
      gradeCoverage: "AHS classes 1–4 and 5–8 (school levels approximately 5–12)",
      sequenceStatus: "official subject curriculum identified; detailed content sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      verifiedTimetableEvidence: "The AHS lower-secondary timetable schedules Chemistry in classes 3–4. Upper-secondary Chemistry is scheduled in classes 7–8 in the standard timetable, with form-specific variations.",
      pending: ["Extract official Chemistry content/application areas and competencies by class.", "Verify the applicable upper-secondary curriculum for each AHS form.", "Extract and separately map the new 2027/28 upper-secondary curriculum.", "Compare Mittelschule and BHS pathways separately."]
    },
    {
      subject: "Physics (Physik)",
      schoolForm: "AHS",
      gradeCoverage: "AHS classes 1–4 and 5–8 (school levels approximately 5–12)",
      sequenceStatus: "official subject curriculum identified; detailed content sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      verifiedTimetableEvidence: "The AHS lower-secondary timetable schedules Physics in classes 2–4. Upper-secondary Physics is scheduled across classes 6–8 in the standard timetable, with form-specific variations.",
      pending: ["Extract official Physics content/application areas and competencies by class.", "Verify differences between AHS curriculum forms and timetable options.", "Extract and separately map the new 2027/28 upper-secondary curriculum.", "Compare Mittelschule and BHS pathways separately."]
    },
    {
      subject: "Mathematics (Mathematik)",
      schoolForm: "AHS",
      gradeCoverage: "AHS classes 1–4 and 5–8 (school levels approximately 5–12)",
      sequenceStatus: "official subject curriculum identified; detailed content sequence not yet extracted",
      chapterCount: null,
      officialChapterCount: null,
      verifiedTimetableEvidence: "Mathematics is a compulsory subject throughout AHS lower and upper secondary. Weekly lesson allocations differ between lower-secondary and upper-secondary curriculum versions/forms.",
      pending: ["Extract official Mathematics content/application areas and competencies by class.", "Reconcile the general AHS curriculum with special forms and school-autonomous timetables.", "Extract and separately map the new 2027/28 upper-secondary curriculum.", "Compare Volksschule, Mittelschule and BHS Mathematics curricula separately."]
    }
  ],
  sourceRegister: [
    {
      title: "Federal Ministry of Education — AHS curricula overview (current page)",
      url: "https://www.bmb.gv.at/Themen/schule/schulpraxis/lp/lp_ahs.html",
      use: "Official explanation of AHS curriculum structure, subject curricula and 2027 upper-secondary transition."
    },
    {
      title: "RIS — AHS curriculum, consolidated federal law",
      url: "https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10008568",
      use: "Current consolidated legal curriculum and timetable tables."
    },
    {
      title: "RIS — AHS curriculum, Annex A, 2026 version",
      url: "https://www.ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Anlage=1&Artikel=&FassungVom=2026-09-04&Gesetzesnummer=10008568&Paragraf=&Uebergangsrecht=",
      use: "Legal curriculum annex; source for the subject-specific curricula and timetable structure."
    },
    {
      title: "RIS — AHS curriculum, Annex 2/sp, sports-focused form",
      url: "https://ris.bka.gv.at/NormDokument.wxe?Abfrage=Bundesnormen&Anlage=2%2Fsp&Artikel=&FassungVom=2026-09-03&Gesetzesnummer=10008568&Paragraf=&Uebergangsrecht=",
      use: "Evidence that timetable allocations vary across AHS forms."
    }
  ],
  auditSummary: {
    subjectRecordsReviewed: 4,
    subjectsWithOfficialFrameworkIdentified: 4,
    subjectsWithDetailedYearByYearTopicSequenceExtracted: 0,
    subjectsWithReconciledChapterCount: 0,
    chapterContentWordCountVerified: false,
    diagramsVerified: false,
    examQuestionSetsVerified: false,
    status: "framework-and-pathway-mapping; detailed sequence extraction pending",
    note: "No official chapter counts are asserted. Timetable entries and subject names are not chapter sequences. This is not a complete national audit across all Austrian school forms."
  }
};
