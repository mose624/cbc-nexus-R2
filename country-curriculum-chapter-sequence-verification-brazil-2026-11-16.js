/**
 * CBE Nexus country curriculum verification
 * Country: Brazil
 * Canonical country index: 28
 * Reviewed: 2026-11-16
 *
 * Brazil's BNCC is a national learning-rights framework, while state and
 * municipal systems and schools implement curricula and pedagogical plans.
 * Do not treat BNCC skills/knowledge objects as textbook chapter counts.
 */
export const countryCurriculumVerification = {
  country: "Brazil",
  countryIndex: 28,
  reviewedOn: "2026-11-16",
  authority: "Ministry of Education (MEC); National Education Council (CNE); state and municipal education systems",
  system: {
    framework: "Base Nacional Comum Curricular (BNCC), implemented through local/state curricula and school pedagogical proposals.",
    schoolStages: {
      ensinoFundamental: "9 years, Grades 1–9",
      ensinoMedio: "3 years, Grades 1–3 of upper secondary"
    },
    2026Status: "The upper-secondary curriculum follows the reform established by Law 14.945/2024 and the National Curriculum Guidelines for Ensino Médio (CNE/CEB Resolution 2/2024). The law defines a General Basic Education component and formative pathways. In the General Basic Education component, Mathematics and Natural Sciences are knowledge areas; Natural Sciences integrates Biology, Physics and Chemistry.",
    implementationCaution: "Brazil is federated. BNCC defines essential learning rights and skills, not one national textbook chapter order. State networks and schools organize local curricula and learning itineraries. At Ensino Fundamental, Science is integrated; Biology, Chemistry and Physics are not separate national BNCC components for every grade."
  },
  subjects: [
    {
      subject: "Biology",
      fundamentalPosition: "Integrated into the Science component (Ciências) across Ensino Fundamental; BNCC organizes learning by thematic units, objects of knowledge and skills, not a standalone Biology subject sequence.",
      upperSecondaryPosition: "Biology is explicitly integrated into the Natural Sciences and its Technologies knowledge area alongside Physics and Chemistry under Law 14.945/2024.",
      sequenceEvidence: "The upper-secondary BNCC defines area-specific competencies and skills across the three years, rather than a uniform national Biology textbook chapter list. Local curricula and school itineraries determine detailed sequencing.",
      chapterCount: null,
      sequenceStatus: "National learning-area placement verified; grade-specific local sequence and textbook chapter extraction pending.",
      sources: [
        "https://www.gov.br/mec/pt-br/cne/bncc_ensino_medio.pdf",
        "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2024-07-31%3B14945%402024-07-31",
        "https://downloadbncc.mec.gov.br/"
      ]
    },
    {
      subject: "Chemistry",
      fundamentalPosition: "Chemistry concepts are integrated into the Science component (Ciências) in Ensino Fundamental; no standalone nationwide Chemistry component is prescribed for every grade in the BNCC.",
      upperSecondaryPosition: "Chemistry is explicitly integrated into the Natural Sciences and its Technologies knowledge area alongside Biology and Physics under Law 14.945/2024.",
      sequenceEvidence: "The upper-secondary BNCC skills are organized by knowledge area across the three years. Local state curricula and formative pathways determine the detailed teaching sequence; no single national chapter count is asserted.",
      chapterCount: null,
      sequenceStatus: "National learning-area placement verified; grade-specific local sequence and textbook chapter extraction pending.",
      sources: [
        "https://www.gov.br/mec/pt-br/cne/bncc_ensino_medio.pdf",
        "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2024-07-31%3B14945%402024-07-31",
        "https://portal.mec.gov.br/docman/novembro-2024/265041-rceb002-24/file"
      ]
    },
    {
      subject: "Physics",
      fundamentalPosition: "Physics concepts are integrated into the Science component (Ciências) in Ensino Fundamental; no standalone nationwide Physics component is prescribed for every grade in the BNCC.",
      upperSecondaryPosition: "Physics is explicitly integrated into the Natural Sciences and its Technologies knowledge area alongside Biology and Chemistry under Law 14.945/2024.",
      sequenceEvidence: "The upper-secondary BNCC sets area competencies and skills across years 1–3. Local curricula determine the detailed sequence and practical work. BNCC skills must not be converted directly into official textbook chapter counts.",
      chapterCount: null,
      sequenceStatus: "National learning-area placement verified; grade-specific local sequence and textbook chapter extraction pending.",
      sources: [
        "https://www.gov.br/mec/pt-br/cne/bncc_ensino_medio.pdf",
        "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2024-07-31%3B14945%402024-07-31",
        "https://portal.mec.gov.br/docman/novembro-2024/265041-rceb002-24/file"
      ]
    },
    {
      subject: "Mathematics",
      fundamentalPosition: "Mathematics is a distinct BNCC component throughout Ensino Fundamental, organized into thematic units, objects of knowledge and grade-linked skills.",
      upperSecondaryPosition: "Mathematics and its Technologies is a distinct knowledge area in Ensino Médio under Law 14.945/2024.",
      sequenceEvidence: "The official BNCC download portal provides grade filters for Grades 1–9 and organizes Mathematics by thematic units, objects of knowledge and skills. In Ensino Médio, Mathematics skills are organized across years 1–3. The exact local textbook chapter order varies by state/system and publisher.",
      chapterCount: null,
      sequenceStatus: "National grade-linked Mathematics skill structure verified; detailed extraction and local textbook chapter mapping pending.",
      sources: [
        "https://downloadbncc.mec.gov.br/",
        "https://basenacionalcomum.mec.gov.br/",
        "https://normas.leg.br/?urn=urn%3Alex%3Abr%3Afederal%3Alei%3A2024-07-31%3B14945%402024-07-31"
      ]
    }
  ],
  outstandingWork: [
    "Download BNCC spreadsheets for Science and Mathematics Grades 1–9 and map each thematic unit, object of knowledge and skill to the grade.",
    "Extract the three-year Ensino Médio BNCC skills for Natural Sciences and Mathematics without mislabeling area-level skills as subject-specific textbook chapters.",
    "Select state curricula (for example São Paulo, Minas Gerais, Rio de Janeiro and Bahia) and create state-specific Biology, Chemistry, Physics and Mathematics sequences.",
    "Map local curriculum itineraries and technical/professional pathways separately from the General Basic Education component.",
    "Compare state curricula with adopted textbooks before assigning chapter counts or creating CBE Nexus chapter maps."
  ],
  completion: {
    subjectRecordsCreated: 4,
    subjectRecordsWithNationalLearningAreaPlacementVerified: 4,
    subjectRecordsWithVerifiedOfficialChapterCount: 0,
    subjectRecordsWithDetailedNationalChapterSequenceReconciled: 0,
    claimOf10000WordChapters: false
  }
};
