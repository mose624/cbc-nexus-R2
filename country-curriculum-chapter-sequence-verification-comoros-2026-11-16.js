/**
 * CBE Nexus — Comoros curriculum sequence verification
 * Audit date: 2026-11-16 | Canonical country index: 42
 *
 * Scope: Union of the Comoros national system. The islands of Ngazidja,
 * Ndzuani and Mwali are served by Ministry education commissions. Record
 * language/technical and school-level differences where evidenced.
 *
 * Critical currency distinction: the 2008 secondary programmes are historic
 * reference material; a new collège SVT and Physique-Chimie programme set was
 * announced for entry into force in school year 2025–2026. Do not assume that
 * all other subjects were replaced at the same time.
 */
export const countryCurriculumVerification = {
  country: "Comoros",
  localName: "Union des Comores",
  iso3: "COM",
  canonicalIndex: 42,
  auditDate: "2026-11-16",
  status: "partial_current_curriculum_evidence_verified_subject_scope_reconciliation_pending",
  languages: ["French", "Arabic", "Comorian (Shikomori)"],
  schoolStructure: {
    levels: ["Preschool", "Elementary education", "General secondary education", "Technical education", "Higher education"],
    secondaryGrades: {
      college: ["Sixième", "Cinquième", "Quatrième", "Troisième"],
      lycée: ["Seconde", "Première", "Terminale"]
    },
    source: "https://mineducomores.gouv.km/en/ministry/",
    caveat: "The Ministry source confirms the formal levels; grade labels and the collège/lycée sequence are corroborated by the published programme corpus and teacher-training resources. Exact primary grade duration and any island-specific implementation differences need a dedicated legal/administrative check."
  },
  governance: {
    authority: "Ministry of National Education, Higher Education, Scientific Research, Training and Professional Integration",
    territorialAdministration: "The Ministry identifies three island education commissions: Ngazidja, Ndzuani and Mwali.",
    officialSource: "https://mineducomores.gouv.km/en/ministry/",
    languageNote: "UNESCO GEM country profile reports French or Arabic as languages of instruction in public and private elementary and secondary schools; Comorian may be taught and used in specified disciplines under decree.",
    languageSource: "https://gem-report-education-profiles.unesco.org/fr/node/779.html"
  },
  curriculumCurrency: {
    historicSecondaryCorpus: {
      title: "Programmes et Instructions Officielles — October 2008",
      subjects: ["Sciences de la Vie et de la Terre", "Physique-Chimie", "Mathématiques"],
      grades: ["Sixième", "Cinquième", "Quatrième", "Troisième", "Seconde", "Première", "Terminale"],
      evidenceQuality: "A detailed secondary-source transcription/catalogue of the 2008 Ministry programme corpus is available; original Ministry files and present-day validity need direct verification.",
      source: "https://www.komoripedia.org/article/programmes-scolaires-officiels-2008/"
    },
    collègeScienceUpdate: {
      title: "New official collège programmes and instructions for Physique-Chimie and SVT",
      announcedEntryIntoForce: "2025-2026 school year",
      scope: "Collège only, based on the programme preface reproduced in the accessible 63-page document.",
      evidenceQuality: "The announcement is visible in a third-party-hosted reproduction of a document bearing the Ministry heading. The original Ministry-hosted files, detailed programme contents and implementation circular should be obtained before treating every grade's sequence as fully verified.",
      source: "https://fr.scribd.com/document/920422263/Programme-SVT-Colle-ge-2024-1"
    },
    reformContext: {
      note: "A World Bank sector report describes a planned competency-based curriculum reform over a ten-year period and reports that the 2008 curriculum had not been adequately adopted nationwide at the time of the report. This is reform context, not evidence that a complete new nationwide CBC has since been implemented.",
      source: "https://documents1.worldbank.org/curated/en/099011725115522033/pdf/BOSIB-1b28ddee-3cc9-4cee-b588-d6971d933cfd.pdf"
    }
  },
  subjects: [
    {
      subject: "Biology",
      localSubjectNames: ["Sciences de la Vie et de la Terre", "SVT"],
      nationalStatus: "biology_and_earth_science_integrated_in_SVT",
      gradeScope: "Collège: Sixième–Troisième; lycée: Seconde–Terminale in the historic programme corpus. A new collège SVT programme was announced for 2025–2026.",
      verifiedFramework: [
        "The national subject is SVT, combining life sciences and Earth sciences rather than Biology alone.",
        "The Ministry-headed programme preface reproduced in the available 2025–2026 document states that new collège SVT programmes were to enter into force in the 2025–2026 school year.",
        "The 2008 secondary programme corpus contains SVT for collège and lycée; it is useful as historical evidence but must not be assumed to be the current collège sequence after the update."
      ],
      sequenceStatus: "current_collège_programme_update_announced; exact_grade_content_not_yet_extracted; lycée_current_status_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://fr.scribd.com/document/920422263/Programme-SVT-Colle-ge-2024-1",
        "https://www.komoripedia.org/article/programmes-scolaires-officiels-2008/",
        "https://www.ifadem.org/storage/medias/livret-7-comores-v081123-1-web_o_1hsdkaonp1s7h1e3jdvd74vu1a8.pdf",
        "https://www.ifadem.org/fr/pays/comores/ressources-educatives"
      ],
      pending: [
        "Obtain original Ministry-hosted 2025–2026 SVT programme files and the implementation circular.",
        "Extract exact content by Sixième, Cinquième, Quatrième and Troisième, distinguishing Biology, Geology and health education.",
        "Verify whether the 2008 lycée SVT programme remains in force or has been amended.",
        "Inspect official textbooks before recording chapter titles or counts."
      ]
    },
    {
      subject: "Chemistry",
      localSubjectNames: ["Physique-Chimie", "Chimie"],
      nationalStatus: "chemistry_integrated_with_physics_in_Physique-Chimie_at_collège; lycée_specialisation_requires_series_mapping",
      gradeScope: "Collège: Sixième–Troisième as part of Physique-Chimie; lycée: Seconde–Terminale in the historic programme corpus with series-dependent content.",
      verifiedFramework: [
        "At collège, Chemistry is taught within the combined Physique-Chimie subject, not as an independent national subject in each class.",
        "A new collège Physique-Chimie programme was announced for entry into force in 2025–2026.",
        "The 2008 programme corpus includes lycée Physics and Chemistry content with series distinctions; its current status needs confirmation."
      ],
      sequenceStatus: "current_collège_programme_update_announced; exact_grade_content_pending; lycée_series_mapping_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://fr.scribd.com/document/920422263/Programme-SVT-Colle-ge-2024-1",
        "https://www.komoripedia.org/article/programmes-scolaires-officiels-2008/",
        "https://www.ifadem.org/storage/medias/livret-6-comores-v071123-1-web_o_1hsdi627i17rcn84fbqiuj1jvp8.pdf",
        "https://www.ifadem.org/fr/pays/comores/ressources-educatives"
      ],
      pending: [
        "Obtain the original Ministry 2025–2026 Physique-Chimie programme and extract its grade-by-grade chemistry content.",
        "Verify current lycée Chemistry coverage and series differences.",
        "Separate Chemistry topics from Physics topics within the combined collège subject.",
        "Inspect official textbooks and record edition-specific chapter counts only after contents verification."
      ]
    },
    {
      subject: "Physics",
      localSubjectNames: ["Physique-Chimie", "Physique"],
      nationalStatus: "physics_integrated_with_chemistry_in_Physique-Chimie_at_collège; lycée_specialisation_requires_series_mapping",
      gradeScope: "Collège: Sixième–Troisième as part of Physique-Chimie; lycée: Seconde–Terminale in the historic programme corpus with series-dependent content.",
      verifiedFramework: [
        "At collège, Physics and Chemistry form a combined subject.",
        "A new collège Physique-Chimie programme was announced for the 2025–2026 school year.",
        "IFADEM provides a dedicated collège teacher-training resource for teaching Physics-Chemistry, supporting the combined-subject structure."
      ],
      sequenceStatus: "current_collège_programme_update_announced; detailed_grade_sequence_pending; lycée_status_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://fr.scribd.com/document/920422263/Programme-SVT-Colle-ge-2024-1",
        "https://www.komoripedia.org/article/programmes-scolaires-officiels-2008/",
        "https://www.ifadem.org/storage/medias/livret-6-comores-v071123-1-web_o_1hsdi627i17rcn84fbqiuj1jvp8.pdf",
        "https://www.ifadem.org/fr/pays/comores/ressources-educatives"
      ],
      pending: [
        "Obtain the original Ministry 2025–2026 Physique-Chimie programme and extract its grade-by-grade Physics content.",
        "Map Physics separately from Chemistry while preserving the official combined subject name.",
        "Verify lycée series and current programme status.",
        "Inspect official textbooks before entering chapter counts."
      ]
    },
    {
      subject: "Mathematics",
      localSubjectNames: ["Mathématiques"],
      nationalStatus: "distinct_subject_in_secondary_programme_corpus",
      gradeScope: "The 2008 programme corpus lists Mathematics for collège Sixième–Troisième and lycée Seconde–Terminale. Current grade-by-grade validity and any 2025–2026 update are not verified.",
      verifiedFramework: [
        "Mathematics is a separately named subject in the secondary programme corpus.",
        "The accessible 2008 programme catalogue describes subject programmes for collège and lycée, but this is not sufficient to establish that the Mathematics sequence remains unchanged in 2026.",
        "No reliable evidence found in this audit that the 2025–2026 collège SVT/Physique-Chimie update also replaced Mathematics."
      ],
      sequenceStatus: "subject_presence_verified_in_historic_programme_corpus; current_2026_sequence_and_update_status_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.komoripedia.org/article/programmes-scolaires-officiels-2008/",
        "https://mineducomores.gouv.km/en/ministry/"
      ],
      pending: [
        "Obtain current Ministry Mathematics programmes and any 2025–2026 implementation notices.",
        "Extract exact grade-level Mathematics content for collège and lycée.",
        "Map lycée series, hours and coefficients from current official documents.",
        "Inspect official textbooks and record chapter titles/counts separately from programme content."
      ]
    }
  ],
  qualityControls: {
    doNotTreat2008ProgrammeAsAutomaticallyCurrent: true,
    doNotTreatThirdPartyReproductionAsOriginalMinistryHostedEvidence: true,
    doNotSplitSVTIntoBiologyAndGeologyAsSeparateOfficialSubjectsWithoutEvidence: true,
    doNotSplitCollègePhysiqueChimieIntoTwoOfficialTimetabledSubjects: true,
    doNotAssumeMathematicsWasUpdatedAlongsideScienceIn2025: true,
    doNotInferTextbookChapterCounts: true
  },
  overallPending: [
    "Retrieve the original Ministry 2025–2026 collège SVT and Physique-Chimie programme PDFs and implementation circular.",
    "Extract each collège grade sequence from the revised documents.",
    "Verify current lycée SVT and Physique-Chimie curricula and series-specific distinctions.",
    "Verify the current Mathematics programme and whether it has been revised.",
    "Inspect official textbooks and count chapters by grade, subject and edition.",
    "Reconcile national policy with implementation across Ngazidja, Ndzuani and Mwali."
  ]
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Comoros",
  gradeSequenceEvidence: "A new collège SVT and Physique-Chimie programme set was announced for 2025–26; the older 2008 programmes are historic references. Verify which other subject programmes remain in force before constructing a full current sequence.",
  textbookEvidence: "No actual textbook contents inspected; new SVT and Physique-Chimie programme documents need extraction.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "Official current syllabus and textbook source retrieval remains outstanding.",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
