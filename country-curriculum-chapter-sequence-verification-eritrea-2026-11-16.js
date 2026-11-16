/** CBE Nexus curriculum verification — Eritrea (ERI), reviewed 2026-11-16. */
export const countryCurriculumVerification = {
  "country": "Eritrea",
  "countryCode": "ERI",
  "reviewDate": "2026-11-16",
  "authority": "National Ministry/education authority; see official sources",
  "educationStructure": "The national system includes elementary, middle and secondary education; secondary education includes academic and vocational routes.",
  "curriculumFramework": "The current official subject-by-subject national curriculum documents were not sufficiently accessible to verify a complete sequence in this pass. Regional syllabuses and legacy documents must not be substituted for current national programmes without validation.",
  "subjects": [
    {
      "subject": "Biology",
      "officialDiscipline": "Biology / integrated science as specified by stage",
      "status": "Science in earlier grades; specialist secondary Biology status and sequence require current official confirmation.",
      "sequenceScope": "Verify secondary grade, stream and syllabus edition.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Obtain Ministry-issued curriculum framework, current secondary syllabuses and examination specifications; reconcile academic and vocational pathways."
      ]
    },
    {
      "subject": "Chemistry",
      "officialDiscipline": "Chemistry / combined science as specified by stage",
      "status": "Specialist/combined secondary science allocation requires official confirmation.",
      "sequenceScope": "Do not assign a standalone grade sequence yet.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Obtain Ministry-issued curriculum framework, current secondary syllabuses and examination specifications; reconcile academic and vocational pathways."
      ]
    },
    {
      "subject": "Physics",
      "officialDiscipline": "Physics / combined science as specified by stage",
      "status": "Specialist/combined secondary science allocation requires official confirmation.",
      "sequenceScope": "Do not assign a standalone grade sequence yet.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Obtain Ministry-issued curriculum framework, current secondary syllabuses and examination specifications; reconcile academic and vocational pathways."
      ]
    },
    {
      "subject": "Mathematics",
      "officialDiscipline": "Mathematics",
      "status": "Mathematics is a core school subject; current grade progression requires official programme extraction.",
      "sequenceScope": "Verify grade-level syllabus and language versions.",
      "chapterCount": null,
      "chapterCountStatus": "No official textbook chapter count verified in this batch.",
      "pending": [
        "Obtain Ministry-issued curriculum framework, current secondary syllabuses and examination specifications; reconcile academic and vocational pathways."
      ]
    }
  ],
  "implementationNotes": [
    "This is a source-mapped verification record, not a claim that every grade-level sequence has been extracted.",
    "Integrated Science, Natural Sciences, SVT and Physics-Chemistry remain combined where the national programme structure requires it.",
    "International examination syllabuses (for example CXC/EGCSE) are not automatically equivalent to the national curriculum.",
    "Country-specific regional, school-type, stream and cohort differences must be preserved."
  ],
  "officialSources": [
    {
      "title": "Ministry of Education Eritrea — official portal",
      "url": "https://moe.gov.er/",
      "use": "National authority; subject programme documents and latest syllabus versions require retrieval."
    }
  ],
  "reconciliation": {
    "biology": "Subject identity mapped at framework level; detailed grade-by-grade sequence pending.",
    "chemistry": "Subject identity mapped at framework level; combined-course boundaries preserved where known; detailed sequence pending.",
    "physics": "Subject identity mapped at framework level; combined-course boundaries preserved where known; detailed sequence pending.",
    "mathematics": "Distinct subject mapped; detailed grade-by-grade sequence pending.",
    "officialChapterCounts": "Not verified.",
    "cbeNexusChapterContent": "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  "overallStatus": "Country record created with official-source leads and conservative subject mapping; full grade-by-grade programme extraction and textbook chapter verification remain pending."
};

export const chapterEvidenceReconciliation = {
 reviewedOn: "2026-11-16",
 country: "Eritrea",
 gradeSequenceEvidence: "Current official subject-by-subject grade programmes and approved book lists were not located in this search. Keep national grade structure provisional and do not import Ethiopian or neighbouring-country sequences.",
 textbookEvidence: "No verified official textbook contents or chapter counts; ministry programme and textbook retrieval required.",
 actualTextbookContentsInspected: false,
 officialTextbookChapterCountsVerified: false,
 officialChapterCount: null,
 evidenceSource: "Official current national curriculum documents not retrieved.",
 nextRequiredWork: "Retrieve official grade/year/term programmes and extract topics for Mathematics, Biology or integrated Life Science, Chemistry and Physics; inspect approved student textbook contents pages and record printed chapter titles/counts separately. Do not infer textbook chapters from curriculum themes."
};
