/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Lesotho",
  "registrySlug": "lesotho",
  "auditDate": "2026-11-16",
  "educationFramework": "Basic Education Curriculum Policy distinguishes academic and technical streams. Lower secondary academic stream includes Biology and Physical Science; technical stream includes Chemistry, Physics, Biology and Mathematics. Grade 10–12 specialisation varies.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology separate in lower and upper secondary; Grade 10 syllabus listed by Ministry.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry explicit in technical stream; upper-secondary mapping pending.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physical Science combined in academic lower secondary; Physics separate in technical stream and upper-secondary pathway.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics is core; Ministry lists Grade 10–11 syllabus.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, standards or exam units."
    }
  ],
  "sources": [
    "https://www.education.gov.ls/img/lesotho%20basic%20education%20curriculum%20policy.pdf",
    "https://moetls.learningpassport.org/",
    "https://www.education.gov.ls/schools.php?id=secondary+school+syllabus&target=89"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practicals.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};

export const chapterEvidenceReconciliation = { reviewedOn: "2026-11-16", country: "Lesotho", gradeSequenceEvidence: "Basic Education Curriculum Policy distinguishes academic and technical streams. Lower-secondary academic and technical pathways allocate Biology and Physical Science differently; upper-secondary Grade 10–12 specialisation must be mapped by current subject syllabuses.", textbookEvidence: "Existing framework record identified; actual approved student textbook contents and printed chapter counts not inspected.", actualTextbookContentsInspected: false, officialTextbookChapterCountsVerified: false, officialChapterCount: null, evidenceSource: "Official Ministry curriculum and examination syllabus retrieval outstanding.", nextRequiredWork: "Extract the official grade/year/term sequence for Mathematics and integrated or specialist sciences from current national documents; inspect actual approved/adopted student textbook contents pages and record exact chapter titles and counts separately." };
