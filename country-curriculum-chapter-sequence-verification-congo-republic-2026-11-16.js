/**
 * CBE Nexus — Republic of the Congo (Congo-Brazzaville) curriculum verification
 * Audit date: 2026-11-16 | Canonical country index: 43
 *
 * This record is Republic of the Congo (Congo-Brazzaville), not the
 * Democratic Republic of the Congo. Current verified reform evidence:
 * Arrêté n°10161 of 22 August 2022 approves revised French, Mathematics and
 * Science (SVT) programmes, with staged rollout. A January 2026 Council of
 * Ministers approved a draft education-system bill; that approval is not
 * evidence that Parliament enacted it or that the proposed five-year primary
 * cycle is already in force.
 */
export const countryCurriculumVerification = {
  country: "Republic of the Congo",
  commonName: "Congo-Brazzaville",
  localName: "République du Congo",
  iso3: "COG",
  canonicalIndex: 43,
  auditDate: "2026-11-16",
  status: "2022_revised_programmes_verified_current_scope_partially_mapped",
  languageOfInstruction: "French is the main language of formal instruction; national language and local-language initiatives require separate treatment.",
  jurisdictionWarning: "Do not confuse this country with the Democratic Republic of the Congo (DRC; COD).",
  schoolStructure: {
    currentlyDescribedStructure: {
      primary: "Historically six years; the January 2026 Council of Ministers described a draft reform reducing primary education to five years and establishing one CP year.",
      lowerSecondary: "Four years: Sixième, Cinquième, Quatrième, Troisième; BEPC at the end.",
      upperSecondary: "Three years: Seconde, Première, Terminale; Baccalauréat at the end.",
      source: "https://gouvernement.cg/compte-rendu-du-conseil-des-ministres-du-20-janvier-2026/"
    },
    legalStatusCaveat: "The 20 January 2026 Council of Ministers report says the draft bill was approved by the Council and would be transmitted to Parliament. It must not be represented as enacted law or a completed nationwide grade-structure change without a later promulgation.",
    historicLegalFramework: "Law No. 25-95 of 17 November 1995 amended the school law and reorganised the education system; check later amendments and the status of the 2026 bill before asserting current legal details.",
    source: "https://www.unicongo.cg/wp-content/uploads/2023/03/congo-jo-2019-23.pdf"
  },
  curriculumGovernance: {
    authority: "Ministère de l'Enseignement Préscolaire, Primaire, Secondaire et de l'Alphabétisation (MEPPSA)",
    keyReform: {
      instrument: "Arrêté n° 10161 MEPPSA-CAB du 22 août 2022",
      subjectAreas: ["Français", "Mathématiques", "Sciences (Sciences de la Vie et de la Terre)"],
      initialGrades: ["CP1", "CP2", "Sixième", "Cinquième"],
      rollout: {
        schoolYear2022_2023: ["CP1", "CP2", "Sixième", "Cinquième"],
        schoolYear2023_2024: ["CE1", "CE2", "CM1", "CM2", "Quatrième", "Troisième"]
      },
      accompanyingResources: ["Guides pédagogiques for teachers", "Cahiers d'activités for learners"],
      officialGazetteSource: "https://www.sgg.cg/JO/2022/congo-jo-2022-36.pdf",
      corroboratingPublication: "https://www.lesdepechesdebrazzaville.fr/_zbhfiles/download.php?doc=20220915_DBZ_DBZ_ALL.pdf"
    },
    curriculumCaveat: "The 2022 order explicitly approves revised French, Mathematics and Sciences (SVT) programmes for the specified primary and collège classes. It does not by itself establish a newly revised Physics-Chemistry sequence or a replacement for all lycée subject programmes.",
    current2026LegalDevelopment: {
      date: "2026-01-20",
      status: "draft_education_system_bill_approved_by_council_of_ministers_for_transmission_to_parliament",
      note: "The draft describes a five-year primary cycle, four-year first secondary cycle and three-year second secondary cycle. Until enactment and commencement are verified, preserve the distinction between existing implementation and proposed structure.",
      source: "https://gouvernement.cg/compte-rendu-du-conseil-des-ministres-du-20-janvier-2026/"
    }
  },
  subjects: [
    {
      subject: "Biology",
      localSubjectNames: ["Sciences de la Vie et de la Terre", "SVT"],
      nationalStatus: "integrated_science_learning_area_in_primary_and_collège; SVT_subject_in_secondary_programmes",
      gradeScope: "Revised primary programmes CP1–CM2 and collège Sixième–Troisième were approved in stages under the 2022 order. SVT is also present in lycée programme references, but the current lycée sequence and status of revisions require primary-source confirmation.",
      verifiedFramework: [
        "The 2022 order expressly includes Sciences (Sciences de la Vie et de la Terre) among revised learning programmes.",
        "Initial rollout covered CP1, CP2, Sixième and Cinquième in 2022–2023.",
        "The remaining primary grades CE1–CM2 and collège Quatrième–Troisième were scheduled for implementation from 2023–2024.",
        "Do not relabel the entire primary Sciences area as a standalone Biology course; the official designation is Sciences/SVT."
      ],
      sequenceStatus: "revised_primary_and_college_programme_rollout_verified; detailed_grade_objectives_and_lycee_current_status_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.sgg.cg/JO/2022/congo-jo-2022-36.pdf",
        "https://www.gouvernement.cg/compte-rendu-du-conseil-des-ministres-du-20-janvier-2026/",
        "https://www.ifadem.org/fr/pays/congo/ressources-educatives"
      ],
      pending: [
        "Extract annexed SVT learning programmes from the official Gazette for CP1, CP2, CE1, CE2, CM1 and CM2.",
        "Extract the revised SVT sequence for Sixième, Cinquième, Quatrième and Troisième.",
        "Obtain current lycée SVT programmes by Seconde, Première and Terminale series.",
        "Inspect prescribed textbook contents and count chapters separately by grade and edition."
      ]
    },
    {
      subject: "Chemistry",
      localSubjectNames: ["Physique-Chimie", "Chimie"],
      nationalStatus: "chemistry_integrated_with_physics_in_physique_chimie; separate chemistry-domain mapping needed at lycée",
      gradeScope: "The 2022 revision order does not list Chemistry as a separately revised subject area; it lists Sciences (SVT). Physique-Chimie is represented in secondary programme resources, but current class-by-class status must be verified.",
      verifiedFramework: [
        "The 2022 revised-programme order covers French, Mathematics and Sciences (SVT), not a separately named Chemistry programme.",
        "Secondary programme references commonly use the combined discipline Physique-Chimie.",
        "Do not invent a standalone Chemistry subject sequence for every primary or collège grade."
      ],
      sequenceStatus: "combined_secondary_subject_structure_indicated; current_official_grade_sequence_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.sgg.cg/JO/2022/congo-jo-2022-36.pdf",
        "https://www.gouvernement.cg/compte-rendu-du-conseil-des-ministres-du-20-janvier-2026/",
        "https://www.sgg.cg/JO/2024/congo-jo-2024-25.pdf"
      ],
      pending: [
        "Obtain current Ministry-approved Physique-Chimie programmes for Sixième–Troisième.",
        "Verify lycée Physique-Chimie content by Seconde, Première and Terminale series.",
        "Extract chemistry-specific themes and practical work from official combined-subject programmes.",
        "Inspect official textbooks before recording chapter titles or counts."
      ]
    },
    {
      subject: "Physics",
      localSubjectNames: ["Physique-Chimie", "Physique"],
      nationalStatus: "physics_integrated_with_chemistry_in_physique_chimie; separate physics-domain mapping needed at lycée",
      gradeScope: "No separately revised Physics programme is named in Arrêté n°10161; secondary resources indicate Physique-Chimie as a combined subject. Current grade-by-grade official sequence remains to be sourced.",
      verifiedFramework: [
        "The 2022 order's revised science area is explicitly Sciences de la Vie et de la Terre (SVT), not Physics.",
        "Physics appears within the combined secondary subject Physique-Chimie in available programme references.",
        "A 2024 Journal officiel entry for higher education lists separate university pathways in Physics, Chemistry, Biology and Mathematics; this is not evidence of school-level chapter order."
      ],
      sequenceStatus: "combined_secondary_subject_structure_indicated; current_official_grade_sequence_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.sgg.cg/JO/2022/congo-jo-2022-36.pdf",
        "https://www.sgg.cg/JO/2024/congo-jo-2024-25.pdf"
      ],
      pending: [
        "Obtain current Ministry-approved Physique-Chimie programmes for Sixième–Troisième.",
        "Verify lycée Physics content by series and grade.",
        "Extract required practical and experimental competencies from official programmes.",
        "Inspect prescribed textbooks and record edition-specific chapter counts."
      ]
    },
    {
      subject: "Mathematics",
      localSubjectNames: ["Mathématiques"],
      nationalStatus: "distinct_national_learning_area_with_2022_revised_programmes",
      gradeScope: "The 2022 order approves revised Mathematics programmes for CP1, CP2, Sixième and Cinquième, then CE1–CM2 and Quatrième–Troisième from 2023–2024. Current lycée Mathematics programmes by series require further extraction.",
      verifiedFramework: [
        "Mathematics is explicitly named in Arrêté n°10161 as a revised learning domain.",
        "The rollout timetable is specified in the Gazette for primary and collège grades.",
        "The 2026 draft system bill does not itself provide a new Mathematics topic sequence or prove a change in current grade structure."
      ],
      sequenceStatus: "revised_primary_and_college_rollout_verified; detailed_grade_objectives_and_lycee_series_mapping_pending",
      officialChapterCount: null,
      cbeNexusChapterCount: null,
      evidence: [
        "https://www.sgg.cg/JO/2022/congo-jo-2022-36.pdf",
        "https://www.gouvernement.cg/compte-rendu-du-conseil-des-ministres-du-20-janvier-2026/",
        "https://www.sgg.cg/JO/2024/congo-jo-2024-25.pdf"
      ],
      pending: [
        "Extract Mathematics learning programmes and progression for CP1–CM2.",
        "Extract Mathematics learning programmes for Sixième–Troisième.",
        "Obtain current lycée Mathematics programmes by Seconde, Première and Terminale series.",
        "Inspect official textbook tables of contents and count chapters by grade and edition."
      ]
    }
  ],
  qualityControls: {
    distinguishRepublicOfCongoFromDRC: true,
    doNotTreat2026DraftBillAsEnactedLaw: true,
    doNotClaimFiveYearPrimaryStructureAlreadyImplementedWithoutPromulgation: true,
    doNotTreatSVTAsBiologyOnly: true,
    doNotTreatPhysiqueChimieAsTwoSeparateSubjectsWithoutEvidence: true,
    doNotTreat2022OrderAsRevisionOfPhysicsChemistry: true,
    doNotInferTextbookChapterCounts: true
  },
  overallPending: [
    "Extract the annexes to Arrêté n°10161 from the official Gazette and create a grade-by-grade sequence for revised Mathematics and SVT.",
    "Obtain current official Physics-Chemistry programmes for collège and lycée.",
    "Verify lycée Mathematics and SVT sequences by class and series.",
    "Check whether the January 2026 draft education bill was subsequently enacted and when its provisions commence.",
    "Inspect official textbooks and record actual chapter counts separately from programme learning objectives."
  ]
};
