/** CBE Nexus curriculum verification — Finland (FIN), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Finland",
  "countryCode": "FIN",
  "reviewDate": "2026-11-16",
  "educationStructure": "Basic education Grades 1–9; general upper-secondary and vocational education follow.",
  "curriculumFramework": "The national core curriculum lists Mathematics, Environmental Studies, Biology, Physics and Chemistry. Individual subjects are introduced progressively; local curricula specify implementation.",
  "subjects": [
    {
      "subject": "Biology",
      "status": "Environmental Studies integrates early science; Biology is a distinct subject in later grades.",
      "sequenceScope": "Map official outcomes by grade and pathway; preserve integrated science where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-band objectives and upper-secondary modules; map local curriculum variations."
      ]
    },
    {
      "subject": "Chemistry",
      "status": "Environmental Studies in early grades; Chemistry is distinct in later basic education.",
      "sequenceScope": "Extract Chemistry content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-band objectives and upper-secondary modules; map local curriculum variations."
      ]
    },
    {
      "subject": "Physics",
      "status": "Environmental Studies in early grades; Physics is distinct in later basic education.",
      "sequenceScope": "Extract Physics content from the official programme and retain combined-course structure where applicable.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-band objectives and upper-secondary modules; map local curriculum variations."
      ]
    },
    {
      "subject": "Mathematics",
      "status": "Core subject throughout Grades 1–9; upper-secondary Mathematics has basic and advanced pathways.",
      "sequenceScope": "Extract grade-level outcomes and upper-secondary pathways.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Extract grade-band objectives and upper-secondary modules; map local curriculum variations."
      ]
    }
  ],
  "officialSources": [
    {
      "title": "Finnish National Agency for Education — National core curriculum",
      "url": "https://www.oph.fi/en/education-and-qualifications/national-core-curriculum-primary-and-lower-secondary-basic-education",
      "use": "Official subject list and national curriculum basis."
    },
    {
      "title": "Finnish National Agency — Basic education overview",
      "url": "https://www.oph.fi/en/education-and-qualifications/bacic-information-about-primary-and-lower-secondary-education",
      "use": "Confirms subject progression and local implementation variation."
    }
  ],
  "implementationNotes": [
    "This record does not claim that all grade-level sequences have been extracted.",
    "Integrated science and combined Physics-Chemistry are not artificially split where the official curriculum retains them.",
    "International examination syllabuses are not automatically equivalent to the national curriculum."
  ],
  "reconciliation": {
    "biology": "Framework-level mapping recorded; detailed grade sequence pending.",
    "chemistry": "Framework-level mapping recorded; combined-course boundaries preserved; detailed sequence pending.",
    "physics": "Framework-level mapping recorded; combined-course boundaries preserved; detailed sequence pending.",
    "mathematics": "Distinct subject mapped; detailed grade sequence pending.",
    "officialChapterCounts": "Not verified.",
    "cbeNexusChapterContent": "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  "overallStatus": "Country record created with official-source leads and conservative subject mapping; detailed programme extraction and textbook chapter verification remain pending."
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Finland", gradeSequenceEvidence: "National core curriculum lists Mathematics, Environmental Studies, Biology, Physics and Chemistry. Municipal/school curricula elaborate the national core; no single national textbook chapter order.", textbookEvidence: "Official subject architecture verified; actual textbooks not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "https://www.oph.fi/en/education-and-qualifications/national-core-curriculum-primary-and-lower-secondary-basic-education", nextRequiredWork: "Retrieve official grade/year/term programmes and extract Mathematics, Biology or integrated Life Science, Chemistry and Physics topics; inspect approved student textbook contents pages and record printed chapter titles/counts separately." };
