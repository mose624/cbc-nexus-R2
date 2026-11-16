/**
 * CBE Nexus country curriculum verification
 * Country: Bosnia and Herzegovina
 * Canonical country index: 26
 * Reviewed: 2026-11-16
 *
 * The country has decentralized education governance. This record is a
 * country-level reconciliation note, not a claim that one syllabus applies
 * nationwide. Curriculum sequence work must be jurisdiction-specific.
 */
export const countryCurriculumVerification = {
  country: "Bosnia and Herzegovina",
  countryIndex: 26,
  reviewedOn: "2026-11-16",
  coordinatingAuthority: "Ministry of Civil Affairs of Bosnia and Herzegovina",
  technicalAgency: "Agency for Pre-primary, Primary and Secondary Education (APOSO)",
  governance: {
    competentUnits: "Republika Srpska, ten cantons in the Federation of Bosnia and Herzegovina, and Brčko District",
    totalAdministrativeEducationUnits: 12,
    nationalFramework: "Framework Law requires a common core curriculum; APOSO developed the Common Core Curriculum Based on Learning Outcomes (CCC) as a shared reference.",
    implementationCaution: "There is no single nationally uniform grade-by-grade subject syllabus. Each competent administrative unit adopts and implements its curricula. OECD reports uneven adoption and alignment of the learning-outcomes common core.",
    sourceAuthorities: [
      "https://mcp.gov.ba/en/about-education-sector",
      "https://mcp.gov.ba/en/nadlezne-institucije-sektora-za-obrazovanje",
      "https://aposo.gov.ba/sadrzaj/uploads/Framework-Law.pdf",
      "https://www.oecd.org/en/publications/oecd-reviews-of-evaluation-and-assessment-in-education-bosnia-and-herzegovina_a669e5f3-en/full-report/component-8.html"
    ]
  },
  jurisdictionEvidence: [
    {
      jurisdiction: "Sarajevo Canton",
      evidence: "Official subject-curriculum repository lists Biology, Physics, Chemistry (Hemija) and Mathematics as separate subject curricula marked valid for school year 2025/26.",
      source: "https://mo.ks.gov.ba/nastavni-planovip-r-e-d-m-e-t-n-i-k-u-r-i-k-u-l-u-m-i",
      status: "Official subject documents located; detailed outcomes and grade sequence still need extraction."
    },
    {
      jurisdiction: "Central Bosnia Canton",
      evidence: "Official ministry document repository lists separate Biology, Physics, Chemistry (Kemija) and Mathematics curricula for primary schools and gymnasia.",
      source: "https://mozks-ksb.ba/dokumenti/nastavni-plan-i-program/",
      status: "Official subject documents located; document versions and grade coverage need extraction."
    },
    {
      jurisdiction: "Republika Srpska",
      evidence: "Separate entity-level education authority adopts and implements curricula. The learning-outcomes common core is a reference, not a substitute for the entity syllabus.",
      source: "https://mcp.gov.ba/en/nadlezne-institucije-sektora-za-obrazovanje",
      status: "Subject-by-subject official programme retrieval pending."
    },
    {
      jurisdiction: "Brčko District",
      evidence: "District education department has full jurisdiction and is working on new subject curricula based on learning outcomes; OSCE reported a curriculum-reform expert-team meeting on 12 November 2026.",
      source: "https://www.govserv.org/BA/Sarajevo/326129793402/OSCE-Mission-to-Bosnia-and-Herzegovina",
      status: "Reform in development; do not assume draft subject curricula are approved or in force."
    }
  ],
  subjects: [
    {
      subject: "Biology",
      commonCoreArea: "Natural Science",
      jurisdictionEvidence: "Separate Biology subject curriculum located in Sarajevo Canton (valid 2025/26) and Central Bosnia Canton repositories. National common core does not establish one shared chapter order for all jurisdictions.",
      sequenceStatus: "Subject-specific official curricula located in two cantons; detailed grade-by-grade sequence and cross-jurisdiction reconciliation pending.",
      chapterCount: null,
      sources: [
        "https://mo.ks.gov.ba/nastavni-planovip-r-e-d-m-e-t-n-i-k-u-r-i-k-u-l-u-m-i",
        "https://mozks-ksb.ba/dokumenti/nastavni-plan-i-program/",
        "https://aposo.gov.ba/sadrzaj/uploads/Framework-Law.pdf"
      ]
    },
    {
      subject: "Chemistry",
      commonCoreArea: "Natural Science",
      jurisdictionEvidence: "Separate Chemistry subject curriculum (Hemija) located in Sarajevo Canton and Chemistry (Kemija) in Central Bosnia Canton official repositories. Terminology varies by language/curriculum version.",
      sequenceStatus: "Subject-specific official curricula located in two cantons; detailed grade-by-grade sequence and cross-jurisdiction reconciliation pending.",
      chapterCount: null,
      sources: [
        "https://mo.ks.gov.ba/nastavni-planovip-r-e-d-m-e-t-n-i-k-i-k-u-l-u-m-i",
        "https://mozks-ksb.ba/dokumenti/nastavni-plan-i-program/",
        "https://aposo.gov.ba/sadrzaj/uploads/Framework-Law.pdf"
      ]
    },
    {
      subject: "Physics",
      commonCoreArea: "Natural Science",
      jurisdictionEvidence: "Separate Physics subject curriculum located in Sarajevo Canton and Central Bosnia Canton official repositories. Other entities and cantons require separate verification.",
      sequenceStatus: "Subject-specific official curricula located in two cantons; detailed grade-by-grade sequence and cross-jurisdiction reconciliation pending.",
      chapterCount: null,
      sources: [
        "https://mo.ks.gov.ba/nastavni-planovip-r-e-d-m-e-t-n-i-k-u-r-i-k-u-l-u-m-i",
        "https://mozks-ksb.ba/dokumenti/nastavni-plan-i-program/",
        "https://aposo.gov.ba/sadrzaj/uploads/Framework-Law.pdf"
      ]
    },
    {
      subject: "Mathematics",
      commonCoreArea: "Mathematics",
      jurisdictionEvidence: "Separate Mathematics subject curriculum located in Sarajevo Canton and Central Bosnia Canton official repositories. APOSO's common core defines Mathematics as a distinct education area, while local authorities set detailed curricula.",
      sequenceStatus: "Subject-specific official curricula located in two cantons; detailed grade-by-grade sequence and cross-jurisdiction reconciliation pending.",
      chapterCount: null,
      sources: [
        "https://mo.ks.gov.ba/nastavni-planovip-r-e-d-m-e-t-n-i-k-u-r-i-k-u-l-u-m-i",
        "https://mozks-ksb.ba/dokumenti/nastavni-plan-i-program/",
        "https://aposo.gov.ba/sadrzaj/uploads/Framework-Law.pdf"
      ]
    }
  ],
  outstandingWork: [
    "Create 12 jurisdiction-specific curriculum maps: Republika Srpska, each of the ten Federation cantons, and Brčko District.",
    "Download and transcribe Sarajevo Canton Biology, Chemistry, Physics and Mathematics documents; note the repository's stated 2025/26 validity and verify 2026/27 replacement status.",
    "Download and transcribe the corresponding Central Bosnia Canton documents and reconcile language/version differences.",
    "Retrieve official current subject programmes from Republika Srpska and all remaining cantonal education ministries.",
    "Track Brčko District reform as draft/development until approved curricula and effective dates are published.",
    "Compare learning outcomes and textbook contents before assigning CBE Nexus chapter counts; do not treat common-core outcome clusters as official textbook chapters."
  ],
  completion: {
    subjectRecordsCreated: 4,
    jurisdictionRepositoriesLocated: 2,
    jurisdictionMapsCompleted: 0,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedNationalSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }

  evidenceRefresh_2026_11_16: {
  "status": "existing country source map retained; current official topic documents and actual textbook contents require direct extraction",
  "sources": [],
  "finding": "No new verified topic sequence or official textbook chapter count is asserted in this evidence refresh. Preserve any jurisdiction, language, pathway and integrated-science distinctions already recorded in this file."
},
  textbookVerification_2026_11_16: { actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, cbEnexusLongFormChaptersWritten: false, note: "A syllabus listing, framework, examination subject list or textbook catalogue does not establish the actual contents-page chapter sequence. Do not invent counts." }
};
