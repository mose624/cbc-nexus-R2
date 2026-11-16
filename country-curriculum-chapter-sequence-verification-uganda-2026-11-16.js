/* CBE Nexus curriculum verification record — 2026-11-16.
 * Framework/subject mapping only; not a completed grade-by-grade textbook audit.
 */
export const countryCurriculumVerification = {
  "country": "Uganda",
  "registrySlug": "uganda",
  "auditDate": "2026-11-16",
  "educationFramework": "NCDC lower secondary curriculum lists Mathematics, Biology, Chemistry and Physics as separate compulsory subjects in S1–S4, with subject options and different menus by stage. Upper secondary offers all four in subject combinations.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology compulsory at S1–S4 and available at higher secondary.",
      "gradeByGradeSequenceVerified": true,
      "gradeByGradeSequence": {
        "source": "NCDC Biology Syllabus (2019), programme planner, pp. 12–14",
        "Senior 1": {
          "Term 1": ["Introduction to Biology (8 periods)", "Cells (20 periods)", "Classification (8 periods)"],
          "Term 2": ["Classification (36 periods)", "Five Kingdoms of Living Organisms (30 periods)", "Viruses (6 periods)"],
          "Term 3": ["Insects (20 periods)", "Flowering plants (16 periods)"],
          "annualPeriods": 108
        },
        "Senior 2": {
          "Term 1": ["Physical and chemical properties of soil (20 periods)", "Soil erosion and conservation: causes, effects and prevention (16 periods)"],
          "Term 2": ["Nutrition types and nutrient compounds (11 periods)", "Nutrition in green plants (10 periods)", "Nutrition in mammals (15 periods)"],
          "Term 3": ["Transport in plants (18 periods)", "Transport in animals (18 periods)"],
          "annualPeriods": 108
        },
        "Senior 3": {
          "Term 1": ["Gaseous exchange (14 periods)", "Aerobic and anaerobic respiration (15 periods)", "Excretion in animals (19 periods)"],
          "Term 2": ["Chemical coordination in humans (18 periods)", "Nervous coordination in humans (22 periods)", "Receptor organs in man (8 periods)"],
          "Term 3": ["Locomotion in mammals (20 periods)", "Growth in plants and animals (12 periods)", "Development in plants and animals (16 periods)"],
          "annualPeriods": 144
        },
        "Senior 4": {
          "Term 1": ["Asexual reproduction in plants (vegetative reproduction) (10 periods)", "Sexual reproduction in plants (16 periods)", "Sexual reproduction in humans (22 periods)"],
          "Term 2": ["Inheritance (20 periods)", "Variation and Selection (13 periods)", "Concept of ecology (3 periods)", "Food chains and food webs (12 periods)", "Associations in biological communities (18 periods)"],
          "Term 3": ["Humans and the natural environment (20 periods)"],
          "annualPeriods": 134
        }
      },
      "officialChapterCount": null,
      "textbookEvidence": {
        "officialCatalogue": "NCDC Orange Book (2024), catalogue record pp. 90–91",
        "identifiedTitle": "Biology Textbook Senior One: (Prototype) Lower Secondary Curriculum",
        "authorPublisher": "NCDC",
        "publicationYear": 2020,
        "isbn": "Not assigned",
        "coverageEvidence": "Senior One prototype textbook listed; catalogue summary says it follows the revised Biology syllabus.",
        "contentsPageInspected": false,
        "chapterCountVerified": false,
        "missing": "Obtain actual approved S1–S4 Biology learner textbooks and inspect each contents page; map book chapters to NCDC topic codes."
      },
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry compulsory at S1–S4 and available at higher secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics compulsory at S1–S4; General Science is an alternative in specified special-needs context.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics compulsory at S1–S4 and offered at higher secondary.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, learning outcomes, examination units or strands."
    }
  ],
  "sources": [
    "https://ncdc.go.ug/directorates/",
    "https://www.ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf",
    "https://ncdc.go.ug/wp-content/uploads/2024/02/Biology_Syllabus_compressed.pdf",
    "https://ncdc.go.ug/wp-content/uploads/2025/05/NCDC-Orange-Book-Final-List_working_Corrected-Updated-02.06.2025_Web-FILE.pdf",
    "https://www.ncdc.go.ug/wp-content/uploads/2024/02/GENERAL-SCIENCE-syllabus.pdf"
  ],
  "completion": {
    "gradeByGradeTopicSequenceVerified": false,
    "officialTextbookChapterCountsVerified": false,
    "cbeNexusChaptersOver10000WordsVerified": false,
    "diagramsWorkedExamplesPracticalsVerified": false,
    "examQuestionsAndMarkingGuidesVerified": false,
    "nextActions": [
      "Retrieve current official framework and subject programmes for every grade.",
      "Extract official topic headings, learning outcomes, hours and practical requirements.",
      "Compare each programme with approved textbook tables of contents; count chapters only from actual contents pages.",
      "Map language, regional, school-track and examination-board variations.",
      "Write CBE Nexus chapters after sequence validation, then verify word counts, diagrams, worked examples, practicals and assessment."
    ]
  }
};
