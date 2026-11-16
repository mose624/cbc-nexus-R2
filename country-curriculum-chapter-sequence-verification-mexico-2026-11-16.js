/* Preliminary framework mapping; not a completed textbook audit. */
export const countryCurriculumVerification = {
  "country": "Mexico",
  "registrySlug": "mexico",
  "auditDate": "2026-11-16",
  "educationFramework": "SEP Plan de Estudio 2022 uses four formative fields; at secondary, Saberes y pensamiento científico includes Mathematics, Biology, Physics and Chemistry. Upper-secondary MCCEMS 2025 has its own generation/programmes.",
  "subjects": [
    {
      "subject": "Biology",
      "officialMapping": "Biology named as secondary discipline within Saberes y pensamiento científico; upper-secondary programmes vary by subsistema.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Chemistry",
      "officialMapping": "Chemistry named as secondary discipline; upper-secondary 2025 programmes vary by subsistema.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Physics",
      "officialMapping": "Physics named as secondary discipline; upper-secondary 2025 programmes vary by subsistema.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    },
    {
      "subject": "Mathematics",
      "officialMapping": "Mathematics named at secondary; upper-secondary includes semester Mathematics I–IV and further options.",
      "gradeByGradeSequenceVerified": false,
      "officialChapterCount": null,
      "cbeNexusChaptersWritten": 0,
      "notes": "Do not infer textbook chapter counts from curriculum areas, strands, standards, modules or examination syllabuses."
    }
  ],
  "sources": [
    "https://educacionbasica.sep.gob.mx/plan-y-programas-de-estudio-2022-para-la-educacion-preescolar-primaria-y-secundaria/",
    "https://educacionbasica.sep.gob.mx/segundo-aniversario-del-plan-de-estudio-para-la-educacion-preescolar-primaria-y-secundaria-2022/",
    "https://dgb.sep.gob.mx/programas-de-estudio",
    "https://dgdcpei.sep.gob.mx/PlanyProg"
  ],
  "nextActions": [
    "Retrieve current official subject programmes for each grade.",
    "Extract topic headings, learning outcomes, teaching hours and practical requirements.",
    "Compare with approved textbook tables of contents before counting chapters.",
    "Map regional, language, school-track and examination-board variations.",
    "Author and verify CBE Nexus chapters only after sequence validation."
  ]
};
