/* CBE Nexus — global chapter completion register.
 * Planning/quality-control data only; it does not claim syllabus verification or chapter completion.
 * Each subject must be mapped to the current official national curriculum before chapters are authored.
 * Some countries use different subject names (e.g. Life Sciences / Physical Sciences); record the
 * official local subject name in the subject record when verified. Never invent missing chapter titles.
 */
(function(root){
 "use strict";
 const SUBJECTS=["Biology","Chemistry","Physics","Mathematics"];
 const TARGET_WORDS_PER_CHAPTER=10000;
 const MIN_DIAGRAMS_PER_CHAPTER=10;
 const MIN_EXAM_QUESTIONS_PER_CHAPTER=15;
 const countries=[
  {
    "country": "Afghanistan",
    "subjects": {
      "Biology": {
        "officialAuthority": "Afghanistan Ministry of Education",
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": 8,
        "chapters": [
          {
            "id": "biology-g7-ch1",
            "title": "Cell: structure and function",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 1,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch2",
            "title": "Cellular organization: tissues, organs, systems and organisms",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 11,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch3",
            "title": "Cell processes: transport, diffusion, osmosis, photosynthesis and cellular respiration",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 19,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch4",
            "title": "Cell division: amitosis, mitosis and meiosis",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 29,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch5",
            "title": "Seed-bearing plants: types, roots, stems, growth and leaves",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 37,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch6",
            "title": "Reproduction in seed-bearing plants: flowers, fruits, pollination and asexual reproduction",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 49,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch7",
            "title": "Ecology: ecosystems and biotic/abiotic factors",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 63,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "biology-g7-ch8",
            "title": "Cycles in ecosystems: energy transfer and water/carbon cycles",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 71,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          }
        ],
        "status": "textbook-contents-verified-syllabus-pending",
        "level": "Grade 7 textbook contents extracted only",
        "chapterInventoryStatus": "verified-from-ministry-hosted-grade-7-textbook-contents-page",
        "textbookEvidence": {
          "title": "Biology Grade 7",
          "grade": 7,
          "language": "Dari",
          "publicationYear": "1398",
          "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Biology.pdf",
          "sourceType": "Ministry-hosted student textbook PDF; contents page inspected",
          "currentApprovalStatus": "historical edition; 2026 replacement/revision status not resolved"
        }
      },
      "Chemistry": {
        "officialAuthority": "Afghanistan Ministry of Education",
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": 4,
        "chapters": [
          {
            "id": "chemistry-g7-ch1",
            "title": "Matter and its properties",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 1,
            "sourceUrl": "https://www.moe.gov.af/sites/default/files/2020-03/G7-Dr-Chemistry.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "chemistry-g7-ch2",
            "title": "Types of matter: mixtures, conservation of mass in solutions, solubility and pure substances",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 21,
            "sourceUrl": "https://www.moe.gov.af/sites/default/files/2020-03/G7-Dr-Chemistry.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "chemistry-g7-ch3",
            "title": "Chemical reactions and equations: reactions, compound formation and balancing equations",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 37,
            "sourceUrl": "https://www.moe.gov.af/sites/default/files/2020-03/G7-Dr-Chemistry.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "chemistry-g7-ch4",
            "title": "Important elements in life: hydrogen, oxygen, nitrogen and carbon",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 57,
            "sourceUrl": "https://www.moe.gov.af/sites/default/files/2020-03/G7-Dr-Chemistry.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          }
        ],
        "status": "textbook-contents-verified-syllabus-pending",
        "level": "Grade 7 textbook contents extracted only",
        "chapterInventoryStatus": "verified-from-ministry-hosted-grade-7-textbook-contents-page",
        "textbookEvidence": {
          "title": "Chemistry Grade 7",
          "grade": 7,
          "language": "Dari",
          "publicationYear": "1398",
          "sourceUrl": "https://www.moe.gov.af/sites/default/files/2020-03/G7-Dr-Chemistry.pdf",
          "sourceType": "Ministry-hosted student textbook PDF; contents page inspected",
          "currentApprovalStatus": "historical edition; 2026 replacement/revision status not resolved"
        }
      },
      "Physics": {
        "officialAuthority": "Afghanistan Ministry of Education",
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": 7,
        "chapters": [
          {
            "id": "physics-g7-ch1",
            "title": "Measurement: quantities, instruments, length, time, mass and accuracy",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 1,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch2",
            "title": "Force: effects, units, measurement and vector properties",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 17,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch3",
            "title": "Work, energy and power",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 26,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch4",
            "title": "Pressure: atmospheric and liquid pressure, Pascal's law and Archimedes' principle",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 40,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch5",
            "title": "Properties of light: vision, rectilinear propagation, shadows and transparent materials",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 53,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch6",
            "title": "Reflection of light: laws, plane and spherical mirrors",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 63,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "physics-g7-ch7",
            "title": "Refraction of light: prisms, lenses, eye and microscope",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 77,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          }
        ],
        "status": "textbook-contents-verified-syllabus-pending",
        "level": "Grade 7 textbook contents extracted only",
        "chapterInventoryStatus": "verified-from-ministry-hosted-grade-7-textbook-contents-page",
        "textbookEvidence": {
          "title": "Physics Grade 7",
          "grade": 7,
          "language": "Dari",
          "publicationYear": "1398 cover / 1399 metadata conflict",
          "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Physic.pdf",
          "sourceType": "Ministry-hosted student textbook PDF; contents page inspected",
          "currentApprovalStatus": "historical edition; 2026 replacement/revision status not resolved"
        }
      },
      "Mathematics": {
        "officialAuthority": "Afghanistan Ministry of Education",
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": 8,
        "chapters": [
          {
            "id": "math-g7-ch1",
            "title": "Sets",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 3,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch2",
            "title": "Natural numbers",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 27,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch3",
            "title": "Integers (positive and negative numbers)",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 71,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch4",
            "title": "Rational numbers",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 97,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch5",
            "title": "Triangles and polygons",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 119,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch6",
            "title": "Parallel and perpendicular lines",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 157,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch7",
            "title": "Statistics and data handling",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 187,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          },
          {
            "id": "math-g7-ch8",
            "title": "Probability",
            "grade": 7,
            "bookLanguage": "Dari",
            "contentsPage": 211,
            "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
            "sourceType": "official-textbook-table-of-contents",
            "curriculumVerified": false
          }
        ],
        "status": "textbook-contents-verified-syllabus-pending",
        "level": "Grade 7 textbook contents extracted only",
        "chapterInventoryStatus": "verified-from-ministry-hosted-grade-7-textbook-contents-page",
        "textbookEvidence": {
          "title": "Mathematics Grade 7",
          "grade": 7,
          "language": "Dari",
          "publicationYear": "1398",
          "sourceUrl": "https://moe.gov.af/sites/default/files/2020-03/G7-Dr-Math.pdf",
          "sourceType": "Ministry-hosted student textbook PDF; contents page inspected",
          "currentApprovalStatus": "historical edition; 2026 replacement/revision status not resolved"
        }
      }
    }
  },
  {
    "country": "Albania",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Algeria",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Andorra",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Angola",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Antigua and Barbuda",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Argentina",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Armenia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Australia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Austria",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Azerbaijan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bahamas",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bahrain",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bangladesh",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Curriculum and Textbook Board (NCTB), Ministry of Education, Bangladesh",
        "officialSyllabusUrl": "https://nctb.gov.bd/",
        "examBoard": "Education Boards of Bangladesh (including the regional Boards of Intermediate and Secondary Education); qualification and board-specific requirements apply",
        "languageOfInstruction": "Bangla is the principal medium in Bangla-version institutions; English-version and English-medium schools follow their applicable curricula and policies",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-authority-and-public-examination-board-framework-identified; current-subject-and-version-specific-syllabus-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Curriculum and Textbook Board (NCTB), Ministry of Education, Bangladesh",
        "officialSyllabusUrl": "https://nctb.gov.bd/",
        "examBoard": "Education Boards of Bangladesh (including the regional Boards of Intermediate and Secondary Education); qualification and board-specific requirements apply",
        "languageOfInstruction": "Bangla is the principal medium in Bangla-version institutions; English-version and English-medium schools follow their applicable curricula and policies",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-authority-and-public-examination-board-framework-identified; current-subject-and-version-specific-syllabus-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Curriculum and Textbook Board (NCTB), Ministry of Education, Bangladesh",
        "officialSyllabusUrl": "https://nctb.gov.bd/",
        "examBoard": "Education Boards of Bangladesh (including the regional Boards of Intermediate and Secondary Education); qualification and board-specific requirements apply",
        "languageOfInstruction": "Bangla is the principal medium in Bangla-version institutions; English-version and English-medium schools follow their applicable curricula and policies",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-authority-and-public-examination-board-framework-identified; current-subject-and-version-specific-syllabus-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Curriculum and Textbook Board (NCTB), Ministry of Education, Bangladesh",
        "officialSyllabusUrl": "https://nctb.gov.bd/",
        "examBoard": "Education Boards of Bangladesh (including the regional Boards of Intermediate and Secondary Education); qualification and board-specific requirements apply",
        "languageOfInstruction": "Bangla is the principal medium in Bangla-version institutions; English-version and English-medium schools follow their applicable curricula and policies",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-authority-and-public-examination-board-framework-identified; current-subject-and-version-specific-syllabus-review-pending"
      }
    }
  },
  {
    "country": "Barbados",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Belarus",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Belgium",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Belize",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Benin",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bhutan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bolivia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bosnia and Herzegovina",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Botswana",
    "subjects": {
      "Biology": {
        "officialAuthority": "Botswana Ministry of Child Welfare and Basic Education — Department of Curriculum Development and Evaluation",
        "officialSyllabusUrl": null,
        "examBoard": "Botswana Examinations Council (BEC); distinct BSSE and legacy BGCSE assessment pathways",
        "languageOfInstruction": "English and Setswana are key languages in education; other local-language support may apply by school and level. Confirm the medium for each school.",
        "chapterCount": null,
        "chapters": [],
        "officialProgrammeUrl": "https://www.bec.co.bw/index.php/component/sppagebuilder/?id=260&view=page",
        "legacyBGCSESyllabusUrl": "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "assessmentFrameworkNote": "Do not merge BSSE assessment syllabuses with legacy BGCSE syllabuses. BEC lists BSSE subjects and BGCSE subjects separately; verify the learner’s registered pathway and subject code.",
        "status": "official-authority-and-examination-pathways-identified; BSSE-and-legacy-BGCSE-subject-code-crosswalk-started; current-teaching-syllabus-sequence-extraction-pending"
      },
      "Chemistry": {
        "officialAuthority": "Botswana Ministry of Child Welfare and Basic Education — Department of Curriculum Development and Evaluation",
        "officialSyllabusUrl": null,
        "examBoard": "Botswana Examinations Council (BEC); distinct BSSE and legacy BGCSE assessment pathways",
        "languageOfInstruction": "English and Setswana are key languages in education; other local-language support may apply by school and level. Confirm the medium for each school.",
        "chapterCount": null,
        "chapters": [],
        "officialProgrammeUrl": "https://www.bec.co.bw/index.php/component/sppagebuilder/?id=260&view=page",
        "legacyBGCSESyllabusUrl": "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "assessmentFrameworkNote": "Do not merge BSSE assessment syllabuses with legacy BGCSE syllabuses. BEC lists BSSE subjects and BGCSE subjects separately; verify the learner’s registered pathway and subject code.",
        "status": "official-authority-and-examination-pathways-identified; BSSE-and-legacy-BGCSE-subject-code-crosswalk-started; current-teaching-syllabus-sequence-extraction-pending"
      },
      "Physics": {
        "officialAuthority": "Botswana Ministry of Child Welfare and Basic Education — Department of Curriculum Development and Evaluation",
        "officialSyllabusUrl": null,
        "examBoard": "Botswana Examinations Council (BEC); distinct BSSE and legacy BGCSE assessment pathways",
        "languageOfInstruction": "English and Setswana are key languages in education; other local-language support may apply by school and level. Confirm the medium for each school.",
        "chapterCount": null,
        "chapters": [],
        "officialProgrammeUrl": "https://www.bec.co.bw/index.php/component/sppagebuilder/?id=260&view=page",
        "legacyBGCSESyllabusUrl": "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "assessmentFrameworkNote": "Do not merge BSSE assessment syllabuses with legacy BGCSE syllabuses. BEC lists BSSE subjects and BGCSE subjects separately; verify the learner’s registered pathway and subject code.",
        "status": "official-authority-and-examination-pathways-identified; BSSE-and-legacy-BGCSE-subject-code-crosswalk-started; current-teaching-syllabus-sequence-extraction-pending"
      },
      "Mathematics": {
        "officialAuthority": "Botswana Ministry of Child Welfare and Basic Education — Department of Curriculum Development and Evaluation",
        "officialSyllabusUrl": null,
        "examBoard": "Botswana Examinations Council (BEC); distinct BSSE and legacy BGCSE assessment pathways",
        "languageOfInstruction": "English and Setswana are key languages in education; other local-language support may apply by school and level. Confirm the medium for each school.",
        "chapterCount": null,
        "chapters": [],
        "officialProgrammeUrl": "https://www.bec.co.bw/index.php/component/sppagebuilder/?id=260&view=page",
        "legacyBGCSESyllabusUrl": "https://www.bec.co.bw/index.php/qualifications-programmes/bgcse-products/bgcse-assesssment/bgcse-syllabi",
        "assessmentFrameworkNote": "Do not merge BSSE assessment syllabuses with legacy BGCSE syllabuses. BEC lists BSSE subjects and BGCSE subjects separately; verify the learner’s registered pathway and subject code.",
        "status": "official-authority-and-examination-pathways-identified; BSSE-and-legacy-BGCSE-subject-code-crosswalk-started; current-teaching-syllabus-sequence-extraction-pending"
      }
    }
  },
  {
    "country": "Brazil",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Brunei",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Bulgaria",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Burkina Faso",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Burundi",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Cabo Verde",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Cambodia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Cameroon",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Canada",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Central African Republic",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Chad",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Chile",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "China",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Colombia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Comoros",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Congo",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Costa Rica",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Côte d’Ivoire",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Croatia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Cuba",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Cyprus",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Czechia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Democratic Republic of the Congo",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Denmark",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Djibouti",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Dominica",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Dominican Republic",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Ecuador",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Egypt",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "El Salvador",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Equatorial Guinea",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Eritrea",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Estonia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Eswatini",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Ethiopia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Fiji",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Finland",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "France",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Gabon",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Gambia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Georgia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Germany",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Ghana",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Council for Curriculum and Assessment (NaCCA), Ghana",
        "officialSyllabusUrl": "https://nacca.gov.gh/",
        "examBoard": "West African Examinations Council (WAEC), Ghana National Office",
        "languageOfInstruction": "English (secondary education; confirm school-specific language policy)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-identified; subject-sequence-and-current-syllabus-document-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Council for Curriculum and Assessment (NaCCA), Ghana",
        "officialSyllabusUrl": "https://nacca.gov.gh/",
        "examBoard": "West African Examinations Council (WAEC), Ghana National Office",
        "languageOfInstruction": "English (secondary education; confirm school-specific language policy)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-identified; subject-sequence-and-current-syllabus-document-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Council for Curriculum and Assessment (NaCCA), Ghana",
        "officialSyllabusUrl": "https://nacca.gov.gh/",
        "examBoard": "West African Examinations Council (WAEC), Ghana National Office",
        "languageOfInstruction": "English (secondary education; confirm school-specific language policy)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-identified; subject-sequence-and-current-syllabus-document-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Council for Curriculum and Assessment (NaCCA), Ghana",
        "officialSyllabusUrl": "https://nacca.gov.gh/",
        "examBoard": "West African Examinations Council (WAEC), Ghana National Office",
        "languageOfInstruction": "English (secondary education; confirm school-specific language policy)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-identified; subject-sequence-and-current-syllabus-document-review-pending"
      }
    }
  },
  {
    "country": "Greece",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Grenada",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Guatemala",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Guinea",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Guinea-Bissau",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Guyana",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Haiti",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Honduras",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Hungary",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Iceland",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "India",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Council of Educational Research and Training (NCERT) provides national curriculum frameworks and learning resources; curriculum and examinations also vary by state/UT and school board (including CBSE and CISCE)",
        "officialSyllabusUrl": "https://ncert.nic.in/",
        "examBoard": "Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), and state/UT examination boards; board-specific requirements apply",
        "languageOfInstruction": "Language of instruction varies by state, school board and institution; English and regional languages are used",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-framework-and-major-school-board-sources-identified; state-board-and-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Council of Educational Research and Training (NCERT) provides national curriculum frameworks and learning resources; curriculum and examinations also vary by state/UT and school board (including CBSE and CISCE)",
        "officialSyllabusUrl": "https://ncert.nic.in/",
        "examBoard": "Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), and state/UT examination boards; board-specific requirements apply",
        "languageOfInstruction": "Language of instruction varies by state, school board and institution; English and regional languages are used",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-framework-and-major-school-board-sources-identified; state-board-and-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Council of Educational Research and Training (NCERT) provides national curriculum frameworks and learning resources; curriculum and examinations also vary by state/UT and school board (including CBSE and CISCE)",
        "officialSyllabusUrl": "https://ncert.nic.in/",
        "examBoard": "Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), and state/UT examination boards; board-specific requirements apply",
        "languageOfInstruction": "Language of instruction varies by state, school board and institution; English and regional languages are used",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-framework-and-major-school-board-sources-identified; state-board-and-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Council of Educational Research and Training (NCERT) provides national curriculum frameworks and learning resources; curriculum and examinations also vary by state/UT and school board (including CBSE and CISCE)",
        "officialSyllabusUrl": "https://ncert.nic.in/",
        "examBoard": "Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (CISCE), and state/UT examination boards; board-specific requirements apply",
        "languageOfInstruction": "Language of instruction varies by state, school board and institution; English and regional languages are used",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-framework-and-major-school-board-sources-identified; state-board-and-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Indonesia",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Primary and Secondary Education (Kemendikdasmen), Republic of Indonesia; National Curriculum Information System publishes the current curriculum structure and subject guidance",
        "officialSyllabusUrl": "https://kurikulum.kemendikdasmen.go.id/",
        "examBoard": "No single national subject examination board for all school pathways; national assessment and school-level assessments operate under ministry policy, while pathway-specific admissions and qualifications may add requirements",
        "languageOfInstruction": "Bahasa Indonesia is the national language of instruction; regional languages and other approved languages may be used in defined contexts and international schools may follow licensed curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "current-national-curriculum-framework-and-subject-structure-identified; current-grade-and-pathway-specific-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Primary and Secondary Education (Kemendikdasmen), Republic of Indonesia; National Curriculum Information System publishes the current curriculum structure and subject guidance",
        "officialSyllabusUrl": "https://kurikulum.kemendikdasmen.go.id/",
        "examBoard": "No single national subject examination board for all school pathways; national assessment and school-level assessments operate under ministry policy, while pathway-specific admissions and qualifications may add requirements",
        "languageOfInstruction": "Bahasa Indonesia is the national language of instruction; regional languages and other approved languages may be used in defined contexts and international schools may follow licensed curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "current-national-curriculum-framework-and-subject-structure-identified; current-grade-and-pathway-specific-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Primary and Secondary Education (Kemendikdasmen), Republic of Indonesia; National Curriculum Information System publishes the current curriculum structure and subject guidance",
        "officialSyllabusUrl": "https://kurikulum.kemendikdasmen.go.id/",
        "examBoard": "No single national subject examination board for all school pathways; national assessment and school-level assessments operate under ministry policy, while pathway-specific admissions and qualifications may add requirements",
        "languageOfInstruction": "Bahasa Indonesia is the national language of instruction; regional languages and other approved languages may be used in defined contexts and international schools may follow licensed curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "current-national-curriculum-framework-and-subject-structure-identified; current-grade-and-pathway-specific-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Primary and Secondary Education (Kemendikdasmen), Republic of Indonesia; National Curriculum Information System publishes the current curriculum structure and subject guidance",
        "officialSyllabusUrl": "https://kurikulum.kemendikdasmen.go.id/",
        "examBoard": "No single national subject examination board for all school pathways; national assessment and school-level assessments operate under ministry policy, while pathway-specific admissions and qualifications may add requirements",
        "languageOfInstruction": "Bahasa Indonesia is the national language of instruction; regional languages and other approved languages may be used in defined contexts and international schools may follow licensed curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "current-national-curriculum-framework-and-subject-structure-identified; current-grade-and-pathway-specific-sequence-review-pending"
      }
    }
  },
  {
    "country": "Iran",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Iraq",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Ireland",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Israel",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Italy",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Jamaica",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Japan",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan; national Courses of Study set curriculum standards, with schools organizing their programmes within the framework",
        "officialSyllabusUrl": "https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm",
        "examBoard": "No single national school-leaving examination board for all upper-secondary schools; university entrance examinations are set by individual universities and common testing arrangements, where applicable, are administered separately",
        "languageOfInstruction": "Japanese is the normal language of classroom instruction in Japanese schools; international schools may use other approved curricula and languages",
        "chapterCount": null,
        "chapters": [],
        "status": "mext-national-courses-of-study-and-school-framework-identified; current-upper-secondary-subject-sequence-and-examination-pathway-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan; national Courses of Study set curriculum standards, with schools organizing their programmes within the framework",
        "officialSyllabusUrl": "https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm",
        "examBoard": "No single national school-leaving examination board for all upper-secondary schools; university entrance examinations are set by individual universities and common testing arrangements, where applicable, are administered separately",
        "languageOfInstruction": "Japanese is the normal language of classroom instruction in Japanese schools; international schools may use other approved curricula and languages",
        "chapterCount": null,
        "chapters": [],
        "status": "mext-national-courses-of-study-and-school-framework-identified; current-upper-secondary-subject-sequence-and-examination-pathway-review-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan; national Courses of Study set curriculum standards, with schools organizing their programmes within the framework",
        "officialSyllabusUrl": "https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm",
        "examBoard": "No single national school-leaving examination board for all upper-secondary schools; university entrance examinations are set by individual universities and common testing arrangements, where applicable, are administered separately",
        "languageOfInstruction": "Japanese is the normal language of classroom instruction in Japanese schools; international schools may use other approved curricula and languages",
        "chapterCount": null,
        "chapters": [],
        "status": "mext-national-courses-of-study-and-school-framework-identified; current-upper-secondary-subject-sequence-and-examination-pathway-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Education, Culture, Sports, Science and Technology (MEXT), Japan; national Courses of Study set curriculum standards, with schools organizing their programmes within the framework",
        "officialSyllabusUrl": "https://www.mext.go.jp/en/policy/education/elsec/title02/detail02/1373859.htm",
        "examBoard": "No single national school-leaving examination board for all upper-secondary schools; university entrance examinations are set by individual universities and common testing arrangements, where applicable, are administered separately",
        "languageOfInstruction": "Japanese is the normal language of classroom instruction in Japanese schools; international schools may use other approved curricula and languages",
        "chapterCount": null,
        "chapters": [],
        "status": "mext-national-courses-of-study-and-school-framework-identified; current-upper-secondary-subject-sequence-and-examination-pathway-review-pending"
      }
    }
  },
  {
    "country": "Jordan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Kazakhstan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Kenya",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Kiribati",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Kuwait",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Kyrgyzstan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Laos",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Latvia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Lebanon",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Lesotho",
    "subjects": {
      "Biology": {
        "officialAuthority": "Lesotho Ministry of Education and Training; National Curriculum Development Centre (NCDC) develops syllabuses with subject panels",
        "officialSyllabusUrl": "https://web.examscouncil.org.ls/uploads/Biology_Syllabus_fb03848271.pdf",
        "examBoard": "Examinations Council of Lesotho (ECoL); Grade 11 LGCSE public examinations",
        "languageOfInstruction": "English is the medium of instruction in secondary schools; Sesotho is also a compulsory language subject.",
        "chapterCount": null,
        "chapters": [],
        "ministrySyllabusPortalUrl": "https://www.education.gov.ls/schools.php?id=secondary+school+syllabus&target=89",
        "ecolSyllabusPortalUrl": "https://www.examscouncil.org.ls/web/examinations.html",
        "syllabusYear": 2020,
        "syllabusLevel": "LGCSE Grades 11–12; syllabus cover states examination from November 2020",
        "status": "official-ECoL-Biology-syllabus-2020-identified; topic-sequence-extraction-pending"
      },
      "Chemistry": {
        "officialAuthority": "Lesotho Ministry of Education and Training; National Curriculum Development Centre (NCDC) develops syllabuses with subject panels",
        "officialSyllabusUrl": null,
        "examBoard": "Examinations Council of Lesotho (ECoL); Grade 11 LGCSE public examinations",
        "languageOfInstruction": "English is the medium of instruction in secondary schools; Sesotho is also a compulsory language subject.",
        "chapterCount": null,
        "chapters": [],
        "ministrySyllabusPortalUrl": "https://www.education.gov.ls/schools.php?id=secondary+school+syllabus&target=89",
        "ecolSyllabusPortalUrl": "https://www.examscouncil.org.ls/web/examinations.html",
        "status": "official-authority-and-LGCSE-assessment-framework-identified; subject-specific-syllabus-review-pending"
      },
      "Physics": {
        "officialAuthority": "Lesotho Ministry of Education and Training; National Curriculum Development Centre (NCDC) develops syllabuses with subject panels",
        "officialSyllabusUrl": null,
        "examBoard": "Examinations Council of Lesotho (ECoL); Grade 11 LGCSE public examinations",
        "languageOfInstruction": "English is the medium of instruction in secondary schools; Sesotho is also a compulsory language subject.",
        "chapterCount": null,
        "chapters": [],
        "ministrySyllabusPortalUrl": "https://www.education.gov.ls/schools.php?id=secondary+school+syllabus&target=89",
        "ecolSyllabusPortalUrl": "https://www.examscouncil.org.ls/web/examinations.html",
        "status": "official-authority-and-LGCSE-assessment-framework-identified; subject-specific-syllabus-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Lesotho Ministry of Education and Training; National Curriculum Development Centre (NCDC) develops syllabuses with subject panels",
        "officialSyllabusUrl": null,
        "examBoard": "Examinations Council of Lesotho (ECoL); Grade 11 LGCSE public examinations",
        "languageOfInstruction": "English is the medium of instruction in secondary schools; Sesotho is also a compulsory language subject.",
        "chapterCount": null,
        "chapters": [],
        "ministrySyllabusPortalUrl": "https://www.education.gov.ls/schools.php?id=secondary+school+syllabus&target=89",
        "ecolSyllabusPortalUrl": "https://www.examscouncil.org.ls/web/examinations.html",
        "status": "official-authority-and-LGCSE-assessment-framework-identified; subject-specific-syllabus-review-pending"
      }
    }
  },
  {
    "country": "Liberia",
    "subjects": {
      "Biology": {
        "officialAuthority": "Liberia Ministry of Education — Bureau of Curriculum, Research and Textbooks",
        "officialSyllabusUrl": null,
        "examBoard": "West African Examinations Council (WAEC), Liberia; Liberia Senior High School Certificate Examination (LSHSCE), Grade 12",
        "languageOfInstruction": "English is the principal language of instruction; local-language arrangements may apply in some schools and programmes.",
        "chapterCount": null,
        "chapters": [],
        "ministryCurriculumDownloadUrl": "https://moe.gov.lr/curriculum-download/",
        "waecSeniorExamUrl": "https://waecliberia.org.lr/lshsceregular/",
        "draftRevisedCurriculumNoticeUrl": "https://moe.gov.lr/",
        "curriculumStatusNote": "Ministry website announces a Draft Revised National Curriculum and invites stakeholder inputs; do not treat the draft as final or replace current subject sequence until approved documents are verified.",
        "status": "official-ministry-curriculum-download-and-WAEC-LSHSCE-pathway-identified; draft-revised-national-curriculum-under-consultation; subject-specific-approved-syllabus-extraction-pending"
      },
      "Chemistry": {
        "officialAuthority": "Liberia Ministry of Education — Bureau of Curriculum, Research and Textbooks",
        "officialSyllabusUrl": null,
        "examBoard": "West African Examinations Council (WAEC), Liberia; Liberia Senior High School Certificate Examination (LSHSCE), Grade 12",
        "languageOfInstruction": "English is the principal language of instruction; local-language arrangements may apply in some schools and programmes.",
        "chapterCount": null,
        "chapters": [],
        "ministryCurriculumDownloadUrl": "https://moe.gov.lr/curriculum-download/",
        "waecSeniorExamUrl": "https://waecliberia.org.lr/lshsceregular/",
        "draftRevisedCurriculumNoticeUrl": "https://moe.gov.lr/",
        "curriculumStatusNote": "Ministry website announces a Draft Revised National Curriculum and invites stakeholder inputs; do not treat the draft as final or replace current subject sequence until approved documents are verified.",
        "status": "official-ministry-curriculum-download-and-WAEC-LSHSCE-pathway-identified; draft-revised-national-curriculum-under-consultation; subject-specific-approved-syllabus-extraction-pending"
      },
      "Physics": {
        "officialAuthority": "Liberia Ministry of Education — Bureau of Curriculum, Research and Textbooks",
        "officialSyllabusUrl": null,
        "examBoard": "West African Examinations Council (WAEC), Liberia; Liberia Senior High School Certificate Examination (LSHSCE), Grade 12",
        "languageOfInstruction": "English is the principal language of instruction; local-language arrangements may apply in some schools and programmes.",
        "chapterCount": null,
        "chapters": [],
        "ministryCurriculumDownloadUrl": "https://moe.gov.lr/curriculum-download/",
        "waecSeniorExamUrl": "https://waecliberia.org.lr/lshsceregular/",
        "draftRevisedCurriculumNoticeUrl": "https://moe.gov.lr/",
        "curriculumStatusNote": "Ministry website announces a Draft Revised National Curriculum and invites stakeholder inputs; do not treat the draft as final or replace current subject sequence until approved documents are verified.",
        "status": "official-ministry-curriculum-download-and-WAEC-LSHSCE-pathway-identified; draft-revised-national-curriculum-under-consultation; subject-specific-approved-syllabus-extraction-pending"
      },
      "Mathematics": {
        "officialAuthority": "Liberia Ministry of Education — Bureau of Curriculum, Research and Textbooks",
        "officialSyllabusUrl": null,
        "examBoard": "West African Examinations Council (WAEC), Liberia; Liberia Senior High School Certificate Examination (LSHSCE), Grade 12",
        "languageOfInstruction": "English is the principal language of instruction; local-language arrangements may apply in some schools and programmes.",
        "chapterCount": null,
        "chapters": [],
        "ministryCurriculumDownloadUrl": "https://moe.gov.lr/curriculum-download/",
        "waecSeniorExamUrl": "https://waecliberia.org.lr/lshsceregular/",
        "draftRevisedCurriculumNoticeUrl": "https://moe.gov.lr/",
        "curriculumStatusNote": "Ministry website announces a Draft Revised National Curriculum and invites stakeholder inputs; do not treat the draft as final or replace current subject sequence until approved documents are verified.",
        "status": "official-ministry-curriculum-download-and-WAEC-LSHSCE-pathway-identified; draft-revised-national-curriculum-under-consultation; subject-specific-approved-syllabus-extraction-pending"
      }
    }
  },
  {
    "country": "Libya",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Liechtenstein",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Lithuania",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Luxembourg",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Madagascar",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Malawi",
    "subjects": {
      "Biology": {
        "officialAuthority": "Malawi Institute of Education (MIE), responsible for curriculum and syllabus development under the national education framework; Ministry of Education Directorate of Secondary Education oversees secondary education",
        "officialSyllabusUrl": null,
        "historicalSyllabusUrl": "https://edu.wtec1.com/pdfs/Biology%20syllabus%20Forms%203-4.pdf",
        "historicalSyllabusYear": 2013,
        "historicalSyllabusPublisher": "Malawi Institute of Education; Ministry of Education, Science and Technology",
        "historicalScopeAndSequence": {
          "sourceType": "2013-MIE-Biology-syllabus-scope-and-sequence-chart-Forms-1-to-4; historical-baseline-only",
          "coreElements": [
            "Research skills",
            "Environment",
            "Plant biology",
            "Animal biology",
            "Human biology",
            "Micro-organisms",
            "Genetics and evolution"
          ],
          "scopeAndSequencePages": "Printed pages 1-18; chart allocates learning content across Forms 1-4",
          "status": "2013-scope-and-sequence-chart-identified; not-labelled-as-current-2026-syllabus"
        },
        "curriculumFrameworkUrl": "https://mie.edu.mw/download/curriculum-and-assessment-framework-for-schools-and-colleges-in-malawi-july-2025/",
        "currentCurriculumNoticeUrl": "https://mie.edu.mw/download/public-notice_clarification-on-the-current-school-curriculum-and-approved-learning-materials/",
        "curriculumReviewNoticeUrl": "https://mie.edu.mw/educational-experts-validates-draft-lower-secondary-school-syllabuses-at-malawi-institute-of-education/",
        "examBoard": "Malawi National Examinations Board (MANEB); Junior Certificate of Education (JCE) and Malawi School Certificate of Education (MSCE)",
        "languageOfInstruction": "English (Education Act, Chapter 30:01, section 78); verify any current policy-specific exceptions against the latest Ministry and MIE guidance",
        "chapterCount": null,
        "chapters": [],
        "status": "MIE-March-2026-lower-secondary-syllabus-validation-process-linked; July-2026-current-curriculum-notice-linked; current-subject-specific-revised-syllabus-and-sequence-not-yet-verified"
      },
      "Chemistry": {
        "officialAuthority": "Malawi Institute of Education (MIE), responsible for curriculum and syllabus development under the national education framework; Ministry of Education Directorate of Secondary Education oversees secondary education",
        "officialSyllabusUrl": null,
        "historicalSyllabusUrl": "https://edu.wtec1.com/pdfs/Chemistry%20syllabus%20Forms%203-4%20-.pdf",
        "historicalSyllabusYear": 2013,
        "historicalSyllabusPublisher": "Malawi Institute of Education; Ministry of Education, Science and Technology",
        "historicalScopeAndSequence": {
          "sourceType": "2013-MIE-Chemistry-scope-and-sequence-chart-Forms-1-to-4; historical-reference-only",
          "coreElements": [
            "Analytical skills in Chemistry: laboratory safety, measurement, apparatus, scientific investigations and experimental techniques",
            "Chemical composition of matter: particulate matter, elements, compounds, mixtures, solutions, separation methods and chemical bonding",
            "Inorganic chemistry: atomic structure, electron configuration, isotopes, periodic table, group trends, nitrogen, sulphur and phosphorus",
            "Chemical reactions: physical and chemical changes, equations, mole concept, stoichiometry, reacting masses, concentration, titration, yield, rates and equilibrium",
            "Heats of reactions: endothermic and exothermic reactions, energy profiles and bond energies",
            "Acids and bases: indicators, pH, neutralisation, Brønsted-Lowry theory, strength and applications",
            "Oxidation and reduction: oxidation states, half-equations, redox agents, displacement, activity series and corrosion",
            "Electrolysis: electrolytic processes, copper purification and electroplating",
            "Organic chemistry: hydrocarbons, alkanols, alkanals, alkanones, alkanoic acids, isomerism and polymers",
            "Environmental chemistry: chemical impacts, waste and environmental applications"
          ],
          "scopeAndSequencePages": "Printed pages 1-11; teaching syllabus for Forms 3-4 begins on printed page 12",
          "status": "2013-MIE-scope-and-sequence-chart-reviewed; historical-not-current-2026-syllabus; core-elements-not-textbook-chapter-titles"
        },
        "curriculumFrameworkUrl": "https://mie.edu.mw/download/curriculum-and-assessment-framework-for-schools-and-colleges-in-malawi-july-2025/",
        "currentCurriculumNoticeUrl": "https://mie.edu.mw/download/public-notice_clarification-on-the-current-school-curriculum-and-approved-learning-materials/",
        "curriculumReviewNoticeUrl": "https://mie.edu.mw/educational-experts-validates-draft-lower-secondary-school-syllabuses-at-malawi-institute-of-education/",
        "examBoard": "Malawi National Examinations Board (MANEB); Junior Certificate of Education (JCE) and Malawi School Certificate of Education (MSCE)",
        "languageOfInstruction": "English (Education Act, Chapter 30:01, section 78); verify any current policy-specific exceptions against the latest Ministry and MIE guidance",
        "chapterCount": null,
        "chapters": [],
        "status": "2013-MIE-Chemistry-historical-scope-and-sequence-added; 2025-framework-and-2026-reform-notice-linked; current-revised-subject-syllabus-not-yet-verified"
      },
      "Physics": {
        "officialAuthority": "Malawi Institute of Education (MIE), responsible for curriculum and syllabus development under the national education framework; Ministry of Education Directorate of Secondary Education oversees secondary education",
        "officialSyllabusUrl": null,
        "historicalSyllabusUrl": "https://edu.wtec1.com/pdfs/Physics%20syllabus%20Forms%203-4.pdf",
        "historicalSyllabusYear": 2013,
        "historicalSyllabusPublisher": "Malawi Institute of Education; Ministry of Education, Science and Technology",
        "historicalScopeAndSequence": {
          "sourceType": "2013-MIE-Physics-scope-and-sequence-chart-Forms-1-to-4; historical-reference-only",
          "coreElements": [
            "Scientific investigations and skills: laboratory safety, SI quantities, measurement, experimental design, variables, data, graphs and scientific reporting",
            "Properties of matter: particulate nature, states and changes of state, density, kinetic theory, thermal expansion, heat capacity, heat transfer, thermometry, pressure, fluids and gas laws",
            "Mechanics: force, mass and weight, friction, work, energy, power, machines, scalar and vector quantities, linear motion, Newton's laws, momentum, moments, circular motion and elasticity",
            "Electricity and magnetism: electric charge, current, circuits, electrical energy, magnetic fields, electromagnetism and applications",
            "Oscillation and waves: oscillations, wave properties, sound and light-related wave applications",
            "Nuclear physics: atomic structure, radioactivity, nuclear processes, uses and safe handling of radioactive materials"
          ],
          "scopeAndSequencePages": "Printed pages 1-22; teaching syllabus for Forms 3-4 begins on printed page 23",
          "status": "2013-MIE-scope-and-sequence-chart-reviewed; historical-not-current-2026-syllabus; core-elements-not-textbook-chapter-titles"
        },
        "curriculumFrameworkUrl": "https://mie.edu.mw/download/curriculum-and-assessment-framework-for-schools-and-colleges-in-malawi-july-2025/",
        "currentCurriculumNoticeUrl": "https://mie.edu.mw/download/public-notice_clarification-on-the-current-school-curriculum-and-approved-learning-materials/",
        "curriculumReviewNoticeUrl": "https://mie.edu.mw/educational-experts-validates-draft-lower-secondary-school-syllabuses-at-malawi-institute-of-education/",
        "examBoard": "Malawi National Examinations Board (MANEB); Junior Certificate of Education (JCE) and Malawi School Certificate of Education (MSCE)",
        "languageOfInstruction": "English (Education Act, Chapter 30:01, section 78); verify any current policy-specific exceptions against the latest Ministry and MIE guidance",
        "chapterCount": null,
        "chapters": [],
        "status": "2013-MIE-Physics-historical-scope-and-sequence-added; 2025-framework-and-2026-reform-notice-linked; current-revised-subject-syllabus-not-yet-verified"
      },
      "Mathematics": {
        "officialAuthority": "Malawi Institute of Education (MIE), responsible for curriculum and syllabus development under the national education framework; Ministry of Education Directorate of Secondary Education oversees secondary education",
        "officialSyllabusUrl": null,
        "historicalSyllabusUrl": "https://edu.wtec1.com/pdfs/Maths%20syllabus%20Forms%203-4.pdf",
        "historicalSyllabusYear": 2013,
        "historicalSyllabusPublisher": "Malawi Institute of Education; Ministry of Education, Science and Technology",
        "historicalScopeAndSequence": {
          "sourceType": "2013-MIE-Mathematics-scope-and-sequence-chart-Forms-1-to-4; historical-reference-only",
          "forms": [
            {
              "form": "Form 1",
              "topics": [
                "Number systems, algebraic expressions, simple algebraic fractions, approximations and estimations, HCF and LCM, factorisation, commercial arithmetic, linear equations and number patterns",
                "Sets and transformations",
                "Lines and angles, triangles and polygons, geometric constructions",
                "Coordinate geometry",
                "Statistics"
              ]
            },
            {
              "form": "Form 2",
              "topics": [
                "Number patterns, algebraic expressions, simultaneous linear equations, proportion, mixtures, indices, standard form, logarithms and quadratic equations",
                "Pythagoras theorem, congruent triangles, quadrilaterals, similar triangles, mensuration and geometric construction",
                "Graphs of simultaneous equations, inequalities and distance-time graphs",
                "Probability"
              ]
            },
            {
              "form": "Form 3",
              "topics": [
                "Quadratic equations, irrational numbers, algebraic fractions with linear or quadratic denominators, changing the subject of formulae, exponential and logarithmic equations",
                "Sets and transformations",
                "Circle geometry: chord and angle properties, trigonometry and similarity",
                "Mapping and functions, coordinate geometry, variations, inequalities and graphs of quadratic functions",
                "Statistics"
              ]
            },
            {
              "form": "Form 4",
              "topics": [
                "Matrices, simultaneous linear and quadratic equations, progressions and polynomials",
                "Vectors",
                "Tangents to circles, trigonometry and mensuration",
                "Travel graphs, linear programming and cubic graphs",
                "Statistics and probability"
              ]
            }
          ],
          "status": "2013-MIE-Forms-1-to-4-scope-and-sequence-chart-extracted; historical-not-current-2026-syllabus; topic-groups-not-textbook-chapter-titles"
        },
        "curriculumFrameworkUrl": "https://mie.edu.mw/download/curriculum-and-assessment-framework-for-schools-and-colleges-in-malawi-july-2025/",
        "currentCurriculumNoticeUrl": "https://mie.edu.mw/download/public-notice_clarification-on-the-current-school-curriculum-and-approved-learning-materials/",
        "curriculumReviewNoticeUrl": "https://mie.edu.mw/educational-experts-validates-draft-lower-secondary-school-syllabuses-at-malawi-institute-of-education/",
        "examBoard": "Malawi National Examinations Board (MANEB); Junior Certificate of Education (JCE) and Malawi School Certificate of Education (MSCE)",
        "languageOfInstruction": "English (Education Act, Chapter 30:01, section 78); verify any current policy-specific exceptions against the latest Ministry and MIE guidance",
        "chapterCount": null,
        "chapters": [],
        "status": "2013-MIE-Mathematics-historical-scope-and-sequence-added; 2025-framework-and-2026-reform-notice-linked; current-revised-subject-syllabus-not-yet-verified"
      }
    }
  },
  {
    "country": "Malaysia",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Education Malaysia (Kementerian Pendidikan Malaysia), Curriculum Development Division; KSSM uses Dokumen Standard Kurikulum dan Pentaksiran (DSKP)",
        "officialSyllabusUrl": "https://www.moe.gov.my/",
        "examBoard": "Lembaga Peperiksaan Malaysia (Malaysian Examinations Syndicate), Ministry of Education; SPM assessment",
        "languageOfInstruction": "Bahasa Melayu is the national language; language of instruction varies by school type and programme, with English also used in specified subjects and school contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "national-kssm-curriculum-and-spm-assessment-framework-identified; current-dskp-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Education Malaysia (Kementerian Pendidikan Malaysia), Curriculum Development Division; KSSM uses Dokumen Standard Kurikulum dan Pentaksiran (DSKP)",
        "officialSyllabusUrl": "https://www.moe.gov.my/",
        "examBoard": "Lembaga Peperiksaan Malaysia (Malaysian Examinations Syndicate), Ministry of Education; SPM assessment",
        "languageOfInstruction": "Bahasa Melayu is the national language; language of instruction varies by school type and programme, with English also used in specified subjects and school contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "national-kssm-curriculum-and-spm-assessment-framework-identified; current-dskp-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Education Malaysia (Kementerian Pendidikan Malaysia), Curriculum Development Division; KSSM uses Dokumen Standard Kurikulum dan Pentaksiran (DSKP)",
        "officialSyllabusUrl": "https://www.moe.gov.my/",
        "examBoard": "Lembaga Peperiksaan Malaysia (Malaysian Examinations Syndicate), Ministry of Education; SPM assessment",
        "languageOfInstruction": "Bahasa Melayu is the national language; language of instruction varies by school type and programme, with English also used in specified subjects and school contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "national-kssm-curriculum-and-spm-assessment-framework-identified; current-dskp-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Education Malaysia (Kementerian Pendidikan Malaysia), Curriculum Development Division; KSSM uses Dokumen Standard Kurikulum dan Pentaksiran (DSKP)",
        "officialSyllabusUrl": "https://www.moe.gov.my/",
        "examBoard": "Lembaga Peperiksaan Malaysia (Malaysian Examinations Syndicate), Ministry of Education; SPM assessment",
        "languageOfInstruction": "Bahasa Melayu is the national language; language of instruction varies by school type and programme, with English also used in specified subjects and school contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "national-kssm-curriculum-and-spm-assessment-framework-identified; current-dskp-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Maldives",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mali",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Malta",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Marshall Islands",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mauritania",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mauritius",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mexico",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Micronesia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Moldova",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Monaco",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mongolia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Montenegro",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Morocco",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Mozambique",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Education and Culture (MEC); National Institute for Education Development (INDE) develops curriculum programmes; National Directorate of Secondary Education monitors secondary curriculum implementation",
        "officialSyllabusUrl": null,
        "officialProgrammePortalUrl": "https://ieda.gov.mz/site/?page_id=4021",
        "officialCurriculumDocumentsUrl": "https://www.mec.gov.mz/documentos.php",
        "curriculumFrameworkUrl": "https://www.mined.gov.mz/assets/docs/plano_curricular_es.pdf",
        "examBoard": "Instituto Nacional de Exames, Certificação e Equivalências (INECE); national secondary examination and certification authority",
        "languageOfInstruction": "Portuguese is the principal language of secondary instruction; local Mozambican languages also have educational and inclusion roles. Confirm language arrangements for individual schools and bilingual programmes.",
        "chapterCount": null,
        "chapters": [],
        "status": "MEC-official-secondary-curriculum-plan-linked; IEDA-official-repository-lists-current-I-and-II-cycle-subject-programmes; subject-PDF-and-detailed-class-sequence-extraction-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Education and Culture (MEC); National Institute for Education Development (INDE) develops curriculum programmes; National Directorate of Secondary Education monitors secondary curriculum implementation",
        "officialSyllabusUrl": null,
        "officialProgrammePortalUrl": "https://ieda.gov.mz/site/?page_id=4021",
        "officialCurriculumDocumentsUrl": "https://www.mec.gov.mz/documentos.php",
        "curriculumFrameworkUrl": "https://www.mined.gov.mz/assets/docs/plano_curricular_es.pdf",
        "examBoard": "Instituto Nacional de Exames, Certificação e Equivalências (INECE); national secondary examination and certification authority",
        "languageOfInstruction": "Portuguese is the principal language of secondary instruction; local Mozambican languages also have educational and inclusion roles. Confirm language arrangements for individual schools and bilingual programmes.",
        "chapterCount": null,
        "chapters": [],
        "status": "MEC-official-secondary-curriculum-plan-linked; IEDA-official-repository-lists-current-I-and-II-cycle-subject-programmes; subject-PDF-and-detailed-class-sequence-extraction-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Education and Culture (MEC); National Institute for Education Development (INDE) develops curriculum programmes; National Directorate of Secondary Education monitors secondary curriculum implementation",
        "officialSyllabusUrl": null,
        "officialProgrammePortalUrl": "https://ieda.gov.mz/site/?page_id=4021",
        "officialCurriculumDocumentsUrl": "https://www.mec.gov.mz/documentos.php",
        "curriculumFrameworkUrl": "https://www.mined.gov.mz/assets/docs/plano_curricular_es.pdf",
        "examBoard": "Instituto Nacional de Exames, Certificação e Equivalências (INECE); national secondary examination and certification authority",
        "languageOfInstruction": "Portuguese is the principal language of secondary instruction; local Mozambican languages also have educational and inclusion roles. Confirm language arrangements for individual schools and bilingual programmes.",
        "chapterCount": null,
        "chapters": [],
        "status": "MEC-official-secondary-curriculum-plan-linked; IEDA-official-repository-lists-current-I-and-II-cycle-subject-programmes; subject-PDF-and-detailed-class-sequence-extraction-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Education and Culture (MEC); National Institute for Education Development (INDE) develops curriculum programmes; National Directorate of Secondary Education monitors secondary curriculum implementation",
        "officialSyllabusUrl": null,
        "officialProgrammePortalUrl": "https://ieda.gov.mz/site/?page_id=4021",
        "officialCurriculumDocumentsUrl": "https://www.mec.gov.mz/documentos.php",
        "curriculumFrameworkUrl": "https://www.mined.gov.mz/assets/docs/plano_curricular_es.pdf",
        "examBoard": "Instituto Nacional de Exames, Certificação e Equivalências (INECE); national secondary examination and certification authority",
        "languageOfInstruction": "Portuguese is the principal language of secondary instruction; local Mozambican languages also have educational and inclusion roles. Confirm language arrangements for individual schools and bilingual programmes.",
        "chapterCount": null,
        "chapters": [],
        "status": "MEC-official-secondary-curriculum-plan-linked; IEDA-official-repository-lists-current-I-and-II-cycle-subject-programmes; subject-PDF-and-detailed-class-sequence-extraction-pending"
      }
    }
  },
  {
    "country": "Myanmar",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Namibia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Nauru",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Nepal",
    "subjects": {
      "Biology": {
        "officialAuthority": "Curriculum Development Centre (CDC), Ministry of Education, Science and Technology, Nepal",
        "officialSyllabusUrl": "https://www.moecdc.gov.np/",
        "examBoard": "National Examination Board (NEB), Nepal; school-level examinations and Grade 11–12 board examinations operate under the national framework",
        "languageOfInstruction": "Nepali and English are permitted media of instruction; mother-tongue instruction may be used at primary level under applicable policy; verify school and programme language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-development-centre-and-examination-board-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Curriculum Development Centre (CDC), Ministry of Education, Science and Technology, Nepal",
        "officialSyllabusUrl": "https://www.moecdc.gov.np/",
        "examBoard": "National Examination Board (NEB), Nepal; school-level examinations and Grade 11–12 board examinations operate under the national framework",
        "languageOfInstruction": "Nepali and English are permitted media of instruction; mother-tongue instruction may be used at primary level under applicable policy; verify school and programme language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-development-centre-and-examination-board-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Curriculum Development Centre (CDC), Ministry of Education, Science and Technology, Nepal",
        "officialSyllabusUrl": "https://www.moecdc.gov.np/",
        "examBoard": "National Examination Board (NEB), Nepal; school-level examinations and Grade 11–12 board examinations operate under the national framework",
        "languageOfInstruction": "Nepali and English are permitted media of instruction; mother-tongue instruction may be used at primary level under applicable policy; verify school and programme language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-development-centre-and-examination-board-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Curriculum Development Centre (CDC), Ministry of Education, Science and Technology, Nepal",
        "officialSyllabusUrl": "https://www.moecdc.gov.np/",
        "examBoard": "National Examination Board (NEB), Nepal; school-level examinations and Grade 11–12 board examinations operate under the national framework",
        "languageOfInstruction": "Nepali and English are permitted media of instruction; mother-tongue instruction may be used at primary level under applicable policy; verify school and programme language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-development-centre-and-examination-board-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Netherlands",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "New Zealand",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Nicaragua",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Niger",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Nigeria",
    "subjects": {
      "Biology": {
        "officialAuthority": "Nigerian Educational Research and Development Council (NERDC), with Federal Ministry of Education policy oversight",
        "officialSyllabusUrl": "https://nerdc.gov.ng/content_manager/new_curriculum_home.html",
        "examBoard": "West African Examinations Council (WAEC) and National Examinations Council (NECO); subject and qualification requirements vary",
        "languageOfInstruction": "English (current Federal Ministry of Education statement; check applicable school and state guidance)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-and-examination-framework-identified; current-revised-syllabus-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Nigerian Educational Research and Development Council (NERDC), with Federal Ministry of Education policy oversight",
        "officialSyllabusUrl": "https://nerdc.gov.ng/content_manager/new_curriculum_home.html",
        "examBoard": "West African Examinations Council (WAEC) and National Examinations Council (NECO); subject and qualification requirements vary",
        "languageOfInstruction": "English (current Federal Ministry of Education statement; check applicable school and state guidance)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-and-examination-framework-identified; current-revised-syllabus-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Nigerian Educational Research and Development Council (NERDC), with Federal Ministry of Education policy oversight",
        "officialSyllabusUrl": "https://nerdc.gov.ng/content_manager/new_curriculum_home.html",
        "examBoard": "West African Examinations Council (WAEC) and National Examinations Council (NECO); subject and qualification requirements vary",
        "languageOfInstruction": "English (current Federal Ministry of Education statement; check applicable school and state guidance)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-and-examination-framework-identified; current-revised-syllabus-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Nigerian Educational Research and Development Council (NERDC), with Federal Ministry of Education policy oversight",
        "officialSyllabusUrl": "https://nerdc.gov.ng/content_manager/new_curriculum_home.html",
        "examBoard": "West African Examinations Council (WAEC) and National Examinations Council (NECO); subject and qualification requirements vary",
        "languageOfInstruction": "English (current Federal Ministry of Education statement; check applicable school and state guidance)",
        "chapterCount": null,
        "chapters": [],
        "status": "official-authority-and-examination-framework-identified; current-revised-syllabus-sequence-review-pending"
      }
    }
  },
  {
    "country": "North Korea",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "North Macedonia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Norway",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Oman",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Pakistan",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Curriculum Council (NCC), Ministry of Federal Education and Professional Training; provincial and regional authorities adapt and implement curricula within their jurisdictions",
        "officialSyllabusUrl": "https://www.ncc.gov.pk/",
        "examBoard": "Provincial and regional Boards of Intermediate and Secondary Education (BISE) and other competent examination authorities; board-specific syllabuses apply",
        "languageOfInstruction": "Language of instruction varies by province, school system and institution; English and Urdu are widely used, alongside provincial languages",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-coordination-and-provincial-implementation-framework-identified; board-specific-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Curriculum Council (NCC), Ministry of Federal Education and Professional Training; provincial and regional authorities adapt and implement curricula within their jurisdictions",
        "officialSyllabusUrl": "https://www.ncc.gov.pk/",
        "examBoard": "Provincial and regional Boards of Intermediate and Secondary Education (BISE) and other competent examination authorities; board-specific syllabuses apply",
        "languageOfInstruction": "Language of instruction varies by province, school system and institution; English and Urdu are widely used, alongside provincial languages",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-coordination-and-provincial-implementation-framework-identified; board-specific-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Curriculum Council (NCC), Ministry of Federal Education and Professional Training; provincial and regional authorities adapt and implement curricula within their jurisdictions",
        "officialSyllabusUrl": "https://www.ncc.gov.pk/",
        "examBoard": "Provincial and regional Boards of Intermediate and Secondary Education (BISE) and other competent examination authorities; board-specific syllabuses apply",
        "languageOfInstruction": "Language of instruction varies by province, school system and institution; English and Urdu are widely used, alongside provincial languages",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-coordination-and-provincial-implementation-framework-identified; board-specific-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Curriculum Council (NCC), Ministry of Federal Education and Professional Training; provincial and regional authorities adapt and implement curricula within their jurisdictions",
        "officialSyllabusUrl": "https://www.ncc.gov.pk/",
        "examBoard": "Provincial and regional Boards of Intermediate and Secondary Education (BISE) and other competent examination authorities; board-specific syllabuses apply",
        "languageOfInstruction": "Language of instruction varies by province, school system and institution; English and Urdu are widely used, alongside provincial languages",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-coordination-and-provincial-implementation-framework-identified; board-specific-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Palau",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Palestine",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Panama",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Papua New Guinea",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Paraguay",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Peru",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Philippines",
    "subjects": {
      "Biology": {
        "officialAuthority": "Department of Education (DepEd), Republic of the Philippines",
        "officialSyllabusUrl": "https://www.deped.gov.ph/",
        "examBoard": "Department of Education (DepEd) administers national basic-education assessment and curriculum policy; senior high school subject offerings and assessment rules depend on the applicable curriculum and school implementation",
        "languageOfInstruction": "Filipino and English are used as official languages of instruction; language use also depends on grade, subject, school and applicable multilingual education policy",
        "chapterCount": null,
        "chapters": [],
        "status": "national-basic-education-curriculum-authority-identified; strengthened-senior-high-school-2026-27-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Department of Education (DepEd), Republic of the Philippines",
        "officialSyllabusUrl": "https://www.deped.gov.ph/",
        "examBoard": "Department of Education (DepEd) administers national basic-education assessment and curriculum policy; senior high school subject offerings and assessment rules depend on the applicable curriculum and school implementation",
        "languageOfInstruction": "Filipino and English are used as official languages of instruction; language use also depends on grade, subject, school and applicable multilingual education policy",
        "chapterCount": null,
        "chapters": [],
        "status": "national-basic-education-curriculum-authority-identified; strengthened-senior-high-school-2026-27-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Department of Education (DepEd), Republic of the Philippines",
        "officialSyllabusUrl": "https://www.deped.gov.ph/",
        "examBoard": "Department of Education (DepEd) administers national basic-education assessment and curriculum policy; senior high school subject offerings and assessment rules depend on the applicable curriculum and school implementation",
        "languageOfInstruction": "Filipino and English are used as official languages of instruction; language use also depends on grade, subject, school and applicable multilingual education policy",
        "chapterCount": null,
        "chapters": [],
        "status": "national-basic-education-curriculum-authority-identified; strengthened-senior-high-school-2026-27-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Department of Education (DepEd), Republic of the Philippines",
        "officialSyllabusUrl": "https://www.deped.gov.ph/",
        "examBoard": "Department of Education (DepEd) administers national basic-education assessment and curriculum policy; senior high school subject offerings and assessment rules depend on the applicable curriculum and school implementation",
        "languageOfInstruction": "Filipino and English are used as official languages of instruction; language use also depends on grade, subject, school and applicable multilingual education policy",
        "chapterCount": null,
        "chapters": [],
        "status": "national-basic-education-curriculum-authority-identified; strengthened-senior-high-school-2026-27-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Poland",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Portugal",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Qatar",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Romania",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Russia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Rwanda",
    "subjects": {
      "Biology": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://elearning.reb.rw/course/view.php?id=1806",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "REB-2026-secondary-curriculum-course-identified; revised-Ordinary-Level-syllabi-for-S1-S3-listed; subject-PDF-extraction-pending"
      },
      "Chemistry": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://elearning.reb.rw/course/view.php?id=1806",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "REB-2026-secondary-curriculum-course-identified; revised-Ordinary-Level-syllabi-for-S1-S3-listed; subject-PDF-extraction-pending"
      },
      "Physics": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://elearning.reb.rw/course/view.php?id=1806",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "REB-2026-secondary-curriculum-course-identified; revised-Ordinary-Level-syllabi-for-S1-S3-listed; subject-PDF-extraction-pending"
      },
      "Mathematics": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://elearning.reb.rw/course/view.php?id=1806",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "REB-2026-secondary-curriculum-course-identified; revised-Ordinary-Level-syllabi-for-S1-S3-listed; subject-PDF-extraction-pending"
      }
    }
  },
  {
    "country": "Saint Kitts and Nevis",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Saint Lucia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Samoa",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "San Marino",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Sao Tome and Principe",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Saudi Arabia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Senegal",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Serbia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Seychelles",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Sierra Leone",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Singapore",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Education (MOE), Singapore",
        "officialSyllabusUrl": "https://www.moe.gov.sg/education-in-sg/our-programmes",
        "examBoard": "Singapore Examinations and Assessment Board (SEAB), MOE and Cambridge International Education jointly examine the 2026 GCE O-Level; 2027 Secondary Education Certificate (SEC) transition applies",
        "languageOfInstruction": "English is the main language of instruction; Mother Tongue Languages are also part of the curriculum",
        "chapterCount": null,
        "chapters": [],
        "status": "moe-curriculum-and-seab-examination-framework-identified; current-2026-o-level-and-2027-sec-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Education (MOE), Singapore",
        "officialSyllabusUrl": "https://www.moe.gov.sg/education-in-sg/our-programmes",
        "examBoard": "Singapore Examinations and Assessment Board (SEAB), MOE and Cambridge International Education jointly examine the 2026 GCE O-Level; 2027 Secondary Education Certificate (SEC) transition applies",
        "languageOfInstruction": "English is the main language of instruction; Mother Tongue Languages are also part of the curriculum",
        "chapterCount": null,
        "chapters": [],
        "status": "moe-curriculum-and-seab-examination-framework-identified; current-2026-o-level-and-2027-sec-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Education (MOE), Singapore",
        "officialSyllabusUrl": "https://www.moe.gov.sg/education-in-sg/our-programmes",
        "examBoard": "Singapore Examinations and Assessment Board (SEAB), MOE and Cambridge International Education jointly examine the 2026 GCE O-Level; 2027 Secondary Education Certificate (SEC) transition applies",
        "languageOfInstruction": "English is the main language of instruction; Mother Tongue Languages are also part of the curriculum",
        "chapterCount": null,
        "chapters": [],
        "status": "moe-curriculum-and-seab-examination-framework-identified; current-2026-o-level-and-2027-sec-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Education (MOE), Singapore",
        "officialSyllabusUrl": "https://www.moe.gov.sg/education-in-sg/our-programmes",
        "examBoard": "Singapore Examinations and Assessment Board (SEAB), MOE and Cambridge International Education jointly examine the 2026 GCE O-Level; 2027 Secondary Education Certificate (SEC) transition applies",
        "languageOfInstruction": "English is the main language of instruction; Mother Tongue Languages are also part of the curriculum",
        "chapterCount": null,
        "chapters": [],
        "status": "moe-curriculum-and-seab-examination-framework-identified; current-2026-o-level-and-2027-sec-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Slovakia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Slovenia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Solomon Islands",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Somalia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "South Africa",
    "subjects": {
      "Biology": {
        "officialAuthority": "Department of Basic Education (DBE), Republic of South Africa",
        "officialSyllabusUrl": "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/tabid/420/Default.aspx",
        "examBoard": "Department of Basic Education and Provincial Education Departments administer the National Senior Certificate; Umalusi quality assures and certifies the qualification",
        "languageOfInstruction": "Varies by school and province; South Africa has multiple official languages and the school language-of-learning policy must be checked",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-assessment-framework-identified; subject-grade-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Department of Basic Education (DBE), Republic of South Africa",
        "officialSyllabusUrl": "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/tabid/420/Default.aspx",
        "examBoard": "Department of Basic Education and Provincial Education Departments administer the National Senior Certificate; Umalusi quality assures and certifies the qualification",
        "languageOfInstruction": "Varies by school and province; South Africa has multiple official languages and the school language-of-learning policy must be checked",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-assessment-framework-identified; subject-grade-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Department of Basic Education (DBE), Republic of South Africa",
        "officialSyllabusUrl": "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/tabid/420/Default.aspx",
        "examBoard": "Department of Basic Education and Provincial Education Departments administer the National Senior Certificate; Umalusi quality assures and certifies the qualification",
        "languageOfInstruction": "Varies by school and province; South Africa has multiple official languages and the school language-of-learning policy must be checked",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-assessment-framework-identified; subject-grade-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Department of Basic Education (DBE), Republic of South Africa",
        "officialSyllabusUrl": "https://www.education.gov.za/Curriculum/CurriculumAssessmentPolicyStatements/tabid/420/Default.aspx",
        "examBoard": "Department of Basic Education and Provincial Education Departments administer the National Senior Certificate; Umalusi quality assures and certifies the qualification",
        "languageOfInstruction": "Varies by school and province; South Africa has multiple official languages and the school language-of-learning policy must be checked",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-assessment-framework-identified; subject-grade-sequence-review-pending"
      }
    }
  },
  {
    "country": "South Korea",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Education, Republic of Korea; 2022 Revised National Curriculum sets the national primary and secondary curriculum framework",
        "officialSyllabusUrl": "https://english.moe.go.kr/",
        "examBoard": "Korea Institute for Curriculum and Evaluation (KICE) develops and administers the College Scholastic Ability Test (CSAT) under the national examination framework",
        "languageOfInstruction": "Korean is the principal language of instruction in national schools; foreign-language and international schools may follow approved alternative curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "2022-revised-national-curriculum-and-kice-examination-framework-identified; current-grade-and-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Education, Republic of Korea; 2022 Revised National Curriculum sets the national primary and secondary curriculum framework",
        "officialSyllabusUrl": "https://english.moe.go.kr/",
        "examBoard": "Korea Institute for Curriculum and Evaluation (KICE) develops and administers the College Scholastic Ability Test (CSAT) under the national examination framework",
        "languageOfInstruction": "Korean is the principal language of instruction in national schools; foreign-language and international schools may follow approved alternative curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "2022-revised-national-curriculum-and-kice-examination-framework-identified; current-grade-and-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Education, Republic of Korea; 2022 Revised National Curriculum sets the national primary and secondary curriculum framework",
        "officialSyllabusUrl": "https://english.moe.go.kr/",
        "examBoard": "Korea Institute for Curriculum and Evaluation (KICE) develops and administers the College Scholastic Ability Test (CSAT) under the national examination framework",
        "languageOfInstruction": "Korean is the principal language of instruction in national schools; foreign-language and international schools may follow approved alternative curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "2022-revised-national-curriculum-and-kice-examination-framework-identified; current-grade-and-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Education, Republic of Korea; 2022 Revised National Curriculum sets the national primary and secondary curriculum framework",
        "officialSyllabusUrl": "https://english.moe.go.kr/",
        "examBoard": "Korea Institute for Curriculum and Evaluation (KICE) develops and administers the College Scholastic Ability Test (CSAT) under the national examination framework",
        "languageOfInstruction": "Korean is the principal language of instruction in national schools; foreign-language and international schools may follow approved alternative curricula",
        "chapterCount": null,
        "chapters": [],
        "status": "2022-revised-national-curriculum-and-kice-examination-framework-identified; current-grade-and-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "South Sudan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Spain",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Sri Lanka",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Institute of Education (NIE), Sri Lanka, under the Ministry of Education; NIE develops national curricula and syllabuses",
        "officialSyllabusUrl": "https://www.nie.lk/",
        "examBoard": "Department of Examinations, Sri Lanka; conducts G.C.E. Ordinary Level and Advanced Level public examinations",
        "languageOfInstruction": "Sinhala and Tamil are the principal national-language streams; English is also used as a medium of instruction in schools and as a subject; verify the specific school stream and syllabus language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-institute-and-public-examination-authority-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Institute of Education (NIE), Sri Lanka, under the Ministry of Education; NIE develops national curricula and syllabuses",
        "officialSyllabusUrl": "https://www.nie.lk/",
        "examBoard": "Department of Examinations, Sri Lanka; conducts G.C.E. Ordinary Level and Advanced Level public examinations",
        "languageOfInstruction": "Sinhala and Tamil are the principal national-language streams; English is also used as a medium of instruction in schools and as a subject; verify the specific school stream and syllabus language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-institute-and-public-examination-authority-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Institute of Education (NIE), Sri Lanka, under the Ministry of Education; NIE develops national curricula and syllabuses",
        "officialSyllabusUrl": "https://www.nie.lk/",
        "examBoard": "Department of Examinations, Sri Lanka; conducts G.C.E. Ordinary Level and Advanced Level public examinations",
        "languageOfInstruction": "Sinhala and Tamil are the principal national-language streams; English is also used as a medium of instruction in schools and as a subject; verify the specific school stream and syllabus language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-institute-and-public-examination-authority-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Institute of Education (NIE), Sri Lanka, under the Ministry of Education; NIE develops national curricula and syllabuses",
        "officialSyllabusUrl": "https://www.nie.lk/",
        "examBoard": "Department of Examinations, Sri Lanka; conducts G.C.E. Ordinary Level and Advanced Level public examinations",
        "languageOfInstruction": "Sinhala and Tamil are the principal national-language streams; English is also used as a medium of instruction in schools and as a subject; verify the specific school stream and syllabus language",
        "chapterCount": null,
        "chapters": [],
        "status": "national-curriculum-institute-and-public-examination-authority-identified; current-grade-and-medium-specific-subject-sequence-review-pending"
      }
    }
  },
  {
    "country": "Sudan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Suriname",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Sweden",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Switzerland",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Syria",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Tajikistan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Tanzania",
    "subjects": {
      "Biology": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": 13,
        "chapters": [
          {"id":"tz-bio-f1-01","title":"Biology foundations and the nature of biological study","grade":"Form I","sequence":1,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f1-02","title":"Cell structure, types and functions","grade":"Form I","sequence":2,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f1-03","title":"Plant nutrition: leaf structure, photosynthesis and mineral requirements","grade":"Form I","sequence":3,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f1-04","title":"Biological classification and major groups of organisms","grade":"Form I","sequence":4,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f1-05","title":"Biological investigation skills, microscopy and scientific reporting","grade":"Form I","sequence":5,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f2-01","title":"Nutrition in humans and ruminants","grade":"Form II","sequence":1,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f2-02","title":"Transport of materials in flowering plants","grade":"Form II","sequence":2,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f2-03","title":"Transport of materials in the human body","grade":"Form II","sequence":3,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f2-04","title":"Respiration in living organisms","grade":"Form II","sequence":4,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f3-01","title":"Coordination in plants and animals","grade":"Form III","sequence":1,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f3-02","title":"Excretion in humans","grade":"Form III","sequence":2,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f3-03","title":"Regulation and homeostasis in the human body","grade":"Form III","sequence":3,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true},
          {"id":"tz-bio-f4-01","title":"Reproduction in plants and humans","grade":"Form IV","sequence":1,"sourceUrl":"https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf","sourceType":"official-tie-2023-form-i-iv-syllabus-content-matrix","curriculumVerified":true}
        ],
        "status": "partial-official-tie-2023-form-i-iv-content-matrix-mapped; remaining-form-content-and-subject-sequences-pending",
        "syllabusLevel": "Ordinary Secondary Education — Form I to Form IV (TIE 2023 syllabus)",
        "chapterInventoryStatus": "13 syllabus content areas mapped from official Form I-IV matrix; not a complete chapter inventory"
      },
      "Chemistry": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/uploads/documents/sw-1727192894-CHEMISTRY%20O%27LEVEL%20EDUCATION%20FINAL.pdf",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form I",
                            "topics": [
                                      "Meaning, branches and applications of Chemistry",
                                      "Physical and chemical changes of matter",
                                      "Chemical elements, compounds and mixtures",
                                      "Separation of mixtures and solution concepts",
                                      "Properties of compounds compared with their constituent elements",
                                      "Periodic table: first 20 elements, metals and non-metals",
                                      "Chemistry laboratory skills, safety, first aid, fire and firefighting"
                            ],
                            "status": "partial-form-i-content-areas-extracted-from-official-syllabus-matrix; not chapter titles"
                  }
        ],
        "status": "partial-official-tie-2023-form-i-content-areas-mapped; forms-ii-iv-extraction-pending",
        "syllabusLevel": "Ordinary Secondary Education — Form I to Form IV (TIE 2023 syllabus)"
      },
      "Physics": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/uploads/files/PHYSICS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION%20FINAL.pdf",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form I",
                            "topics": [
                                      "Meaning, branches and applications of Physics",
                                      "Fundamental and derived physical quantities and SI units",
                                      "Linear motion: distance, displacement, speed, velocity and acceleration",
                                      "Force and its effects",
                                      "Density and the relationship between density, sinking and floating",
                                      "Pressure",
                                      "Work, power and energy",
                                      "Mechanical properties of matter and experimental investigation"
                            ],
                            "status": "partial-form-i-content-areas-extracted-from-official-syllabus-matrix; not chapter titles"
                  }
        ],
        "status": "partial-official-tie-2023-form-i-content-areas-mapped; forms-ii-iv-extraction-pending",
        "syllabusLevel": "Ordinary Secondary Education — Form I to Form IV (TIE 2023 syllabus)"
      },
      "Mathematics": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/uploads/files/MATHEMATICS%20SYLLABUS%20-%20O%20level%20final.pdf",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form I",
                            "topics": [
                                      "Foundations and applications of Mathematics",
                                      "Rational, irrational and real numbers",
                                      "Recurring decimals and conversion between decimals and fractions",
                                      "Representing rational numbers on a number line",
                                      "Inequalities and absolute values of real numbers",
                                      "Ratios and proportions",
                                      "Approximations, rounding, significant figures and decimal places"
                            ],
                            "status": "partial-form-i-content-areas-extracted-from-official-syllabus-matrix; not chapter titles"
                  }
        ],
        "status": "partial-official-tie-2023-form-i-content-areas-mapped; forms-ii-iv-extraction-pending",
        "syllabusLevel": "Ordinary Secondary Education — Form I to Form IV (TIE 2023 syllabus)"
      }
    }
  },
  {
    "country": "Thailand",
    "subjects": {
      "Biology": {
        "officialAuthority": "Office of the Basic Education Commission (OBEC), Ministry of Education, Thailand; Institute for the Promotion of Teaching Science and Technology (IPST) develops science, mathematics and technology curriculum materials and standards",
        "officialSyllabusUrl": "https://www.ipst.ac.th/curriculum",
        "examBoard": "National Institute of Educational Testing Service (NIETS); Ordinary National Educational Test (O-NET) assesses relevant grade levels; upper-secondary admissions and subject tests may have additional requirements",
        "languageOfInstruction": "Thai is the principal language of instruction in national basic education; English and approved bilingual or international programmes may use other language arrangements",
        "chapterCount": null,
        "chapters": [],
        "status": "basic-education-core-curriculum-and-ipst-subject-framework-identified; current-grade-and-examination-specific-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Office of the Basic Education Commission (OBEC), Ministry of Education, Thailand; Institute for the Promotion of Teaching Science and Technology (IPST) develops science, mathematics and technology curriculum materials and standards",
        "officialSyllabusUrl": "https://www.ipst.ac.th/curriculum",
        "examBoard": "National Institute of Educational Testing Service (NIETS); Ordinary National Educational Test (O-NET) assesses relevant grade levels; upper-secondary admissions and subject tests may have additional requirements",
        "languageOfInstruction": "Thai is the principal language of instruction in national basic education; English and approved bilingual or international programmes may use other language arrangements",
        "chapterCount": null,
        "chapters": [],
        "status": "basic-education-core-curriculum-and-ipst-subject-framework-identified; current-grade-and-examination-specific-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Office of the Basic Education Commission (OBEC), Ministry of Education, Thailand; Institute for the Promotion of Teaching Science and Technology (IPST) develops science, mathematics and technology curriculum materials and standards",
        "officialSyllabusUrl": "https://www.ipst.ac.th/curriculum",
        "examBoard": "National Institute of Educational Testing Service (NIETS); Ordinary National Educational Test (O-NET) assesses relevant grade levels; upper-secondary admissions and subject tests may have additional requirements",
        "languageOfInstruction": "Thai is the principal language of instruction in national basic education; English and approved bilingual or international programmes may use other language arrangements",
        "chapterCount": null,
        "chapters": [],
        "status": "basic-education-core-curriculum-and-ipst-subject-framework-identified; current-grade-and-examination-specific-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Office of the Basic Education Commission (OBEC), Ministry of Education, Thailand; Institute for the Promotion of Teaching Science and Technology (IPST) develops science, mathematics and technology curriculum materials and standards",
        "officialSyllabusUrl": "https://www.ipst.ac.th/curriculum",
        "examBoard": "National Institute of Educational Testing Service (NIETS); Ordinary National Educational Test (O-NET) assesses relevant grade levels; upper-secondary admissions and subject tests may have additional requirements",
        "languageOfInstruction": "Thai is the principal language of instruction in national basic education; English and approved bilingual or international programmes may use other language arrangements",
        "chapterCount": null,
        "chapters": [],
        "status": "basic-education-core-curriculum-and-ipst-subject-framework-identified; current-grade-and-examination-specific-sequence-review-pending"
      }
    }
  },
  {
    "country": "Timor-Leste",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Togo",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Tonga",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Trinidad and Tobago",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Tunisia",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Türkiye",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Turkmenistan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Tuvalu",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Uganda",
    "subjects": {
      "Biology": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": 9,
        "chapters": [
          {
            "id": "biology-uganda-seniorfive-topic1",
            "title": "Topic 1: Cell Biology",
            "level": "Senior Five",
            "contentsPage": 10,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorfive-topic2",
            "title": "Topic 2: Nutrition",
            "level": "Senior Five",
            "contentsPage": 13,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorfive-topic3",
            "title": "Topic 3: Transport",
            "level": "Senior Five",
            "contentsPage": 15,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorfive-topic4",
            "title": "Topic 4: Respiration",
            "level": "Senior Five",
            "contentsPage": 17,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorfive-topic5",
            "title": "Topic 5: Homeostasis",
            "level": "Senior Five",
            "contentsPage": 19,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorsix-topic6",
            "title": "Topic 6: Coordination",
            "level": "Senior Six",
            "contentsPage": 21,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorsix-topic7",
            "title": "Topic 7: Inheritance and Evolution",
            "level": "Senior Six",
            "contentsPage": 24,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorsix-topic8",
            "title": "Topic 8: Growth and Development",
            "level": "Senior Six",
            "contentsPage": 27,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "biology-uganda-seniorsix-topic9",
            "title": "Topic 9: Ecology",
            "level": "Senior Six",
            "contentsPage": 28,
            "sourceUrl": "https://www.ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
            "sourceType": "official-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          }
        ],
        "status": "official-2025-advanced-secondary-biology-syllabus-reviewed; nine-topics-mapped-for-senior-five-and-six; lower-secondary-biology-sequence-not-yet-mapped",
        "syllabusLevel": "Advanced Secondary Curriculum — Senior Five and Senior Six (2025)"
      },
      "Chemistry": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": 13,
        "chapters": [
          {
            "id": "chemistry-uganda-2025-topic1",
            "title": "Moles and Equations",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 1,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic2",
            "title": "Atomic and Electronic Structure",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 2,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic3",
            "title": "Bonding and Structure",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 3,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic4",
            "title": "Periodicity 1",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 4,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic5",
            "title": "Thermochemistry",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 5,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic6",
            "title": "Organic Chemistry I",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 6,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic7",
            "title": "Equilibria I",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 7,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic8",
            "title": "Equilibria II",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 8,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic9",
            "title": "Organic Chemistry II",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 9,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic10",
            "title": "Electrochemistry",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 10,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic11",
            "title": "Periodicity II",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 11,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic12",
            "title": "Organic Chemistry III",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 12,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "chemistry-uganda-2025-topic13",
            "title": "Reaction Kinetics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 13,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          }
        ],
        "status": "official-2025-ncdc-chemistry-syllabus-reviewed; 13-ordered-topics-mapped-for-senior-five-and-six",
        "syllabusLevel": "Advanced Secondary Curriculum — Senior Five and Senior Six (2025)"
      },
      "Physics": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": 33,
        "chapters": [
          {
            "id": "physics-uganda-2025-topic1",
            "title": "Measurement and Dimensions of Physical Quantities",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 1,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic2",
            "title": "Statics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 2,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic3",
            "title": "Linear Motion",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 3,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic4",
            "title": "Motion Under Gravity",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 4,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic5",
            "title": "Work, Energy and Power",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 5,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic6",
            "title": "Solid Friction",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 6,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic7",
            "title": "Fluid Mechanics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 7,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic8",
            "title": "Mechanical Properties of Matter",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 8,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic9",
            "title": "Thermometry",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 9,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic10",
            "title": "Heat Quantities",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 10,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic11",
            "title": "Transfer of Heat",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 11,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic12",
            "title": "Behaviour of Gases",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 12,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic13",
            "title": "Thermodynamics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 13,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic14",
            "title": "Reflection of Light",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 14,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic15",
            "title": "Refraction of Light",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 15,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic16",
            "title": "Optical Instruments",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 16,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic17",
            "title": "Electrostatics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 17,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic18",
            "title": "Capacitors",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 18,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic19",
            "title": "Digital Electronics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 19,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic20",
            "title": "Circular Motion",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 20,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic21",
            "title": "Simple Harmonic Motion",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 21,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic22",
            "title": "Gravitation",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 22,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic23",
            "title": "Progressive Waves",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 23,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic24",
            "title": "Stationary Waves",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 24,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic25",
            "title": "Sound Waves",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 25,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic26",
            "title": "Current Electricity",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 26,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic27",
            "title": "Magnetism in Matter",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 27,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic28",
            "title": "Magnetic Effect of an Electric Current",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 28,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic29",
            "title": "Electromagnetic Induction",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 29,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic30",
            "title": "A.C. Circuits",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 30,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic31",
            "title": "Atomic Particles",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 31,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic32",
            "title": "Quantum Theory",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 32,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "physics-uganda-2025-topic33",
            "title": "Nuclear Processes",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 33,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          }
        ],
        "status": "official-2025-ncdc-physics-syllabus-reviewed; 33-ordered-topics-mapped-for-senior-five-and-six",
        "syllabusLevel": "Advanced Secondary Curriculum — Senior Five and Senior Six (2025)"
      },
      "Mathematics": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": 27,
        "chapters": [
          {
            "id": "mathematics-uganda-2025-topic1",
            "title": "Numerical Concepts",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 1,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic2",
            "title": "Equations and Inequalities",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 2,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic3",
            "title": "Coordinate Geometry 1",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 3,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic4",
            "title": "Partial Fractions",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 4,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic5",
            "title": "Trigonometry",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 5,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic6",
            "title": "Descriptive Statistics",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 6,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic7",
            "title": "Scatter Diagrams and Correlations",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 7,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic8",
            "title": "Dynamics 1",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 8,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic9",
            "title": "Probability Theory",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 9,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic10",
            "title": "Differentiation 1",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 10,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic11",
            "title": "Integration 1",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 11,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic12",
            "title": "Permutations and Combinations",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 12,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic13",
            "title": "Series",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 13,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic14",
            "title": "Random Variables",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 14,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic15",
            "title": "Probability Distributions",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 15,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic16",
            "title": "Error Analysis",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 16,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic17",
            "title": "Vectors",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 17,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic18",
            "title": "Differentiation 2",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 18,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic19",
            "title": "Integration 2",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 19,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic20",
            "title": "Dynamics 2",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 20,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic21",
            "title": "Trapezium Rule",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 21,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic22",
            "title": "Sampling Distribution",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 22,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic23",
            "title": "Iterative Methods",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 23,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic24",
            "title": "Coordinate Geometry 2",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 24,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic25",
            "title": "Complex Numbers",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 25,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic26",
            "title": "Differential Equations",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 26,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          },
          {
            "id": "mathematics-uganda-2025-topic27",
            "title": "Flow Charts",
            "level": "Advanced Secondary — Senior Five and Senior Six",
            "sequence": 27,
            "sourceUrl": "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf",
            "sourceType": "official-ncdc-2025-advanced-secondary-syllabus-table-of-contents",
            "curriculumVerified": true
          }
        ],
        "status": "official-2025-ncdc-principal-mathematics-syllabus-reviewed; 27-ordered-topics-mapped-for-senior-five-and-six",
        "syllabusLevel": "Advanced Secondary Principal Mathematics — Senior Five and Senior Six (2025)"
      }
    }
  },
  {
    "country": "Ukraine",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "United Arab Emirates",
    "subjects": {
      "Biology": {
        "officialAuthority": "United Arab Emirates Ministry of Education (MoE) for the national curriculum; private-school oversight is shared with local regulators including ADEK (Abu Dhabi), KHDA (Dubai) and SPEA (Sharjah); MoE supervises Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah",
        "officialSyllabusUrl": "https://u.ae/en/information-and-services/education/school-education-k-12/curricula-and-language-of-instruction-",
        "examBoard": "No single examination board applies to every UAE school: Ministry-curriculum schools follow MoE assessment requirements; private schools may use approved curriculum-specific examinations and awarding bodies, subject to emirate regulator approval",
        "languageOfInstruction": "MoE public schools generally use Arabic as the language of instruction, with English used for technical and scientific subjects; private-school language depends on the licensed curriculum and school",
        "chapterCount": null,
        "chapters": [],
        "status": "national-moe-curriculum-and-emirate-regulatory-framework-identified; private-school-curricula-and-subject-sequences-must-be-mapped-by-pathway-and-emirate"
      },
      "Chemistry": {
        "officialAuthority": "United Arab Emirates Ministry of Education (MoE) for the national curriculum; private-school oversight is shared with local regulators including ADEK (Abu Dhabi), KHDA (Dubai) and SPEA (Sharjah); MoE supervises Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah",
        "officialSyllabusUrl": "https://u.ae/en/information-and-services/education/school-education-k-12/curricula-and-language-of-instruction-",
        "examBoard": "No single examination board applies to every UAE school: Ministry-curriculum schools follow MoE assessment requirements; private schools may use approved curriculum-specific examinations and awarding bodies, subject to emirate regulator approval",
        "languageOfInstruction": "MoE public schools generally use Arabic as the language of instruction, with English used for technical and scientific subjects; private-school language depends on the licensed curriculum and school",
        "chapterCount": null,
        "chapters": [],
        "status": "national-moe-curriculum-and-emirate-regulatory-framework-identified; private-school-curricula-and-subject-sequences-must-be-mapped-by-pathway-and-emirate"
      },
      "Physics": {
        "officialAuthority": "United Arab Emirates Ministry of Education (MoE) for the national curriculum; private-school oversight is shared with local regulators including ADEK (Abu Dhabi), KHDA (Dubai) and SPEA (Sharjah); MoE supervises Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah",
        "officialSyllabusUrl": "https://u.ae/en/information-and-services/education/school-education-k-12/curricula-and-language-of-instruction-",
        "examBoard": "No single examination board applies to every UAE school: Ministry-curriculum schools follow MoE assessment requirements; private schools may use approved curriculum-specific examinations and awarding bodies, subject to emirate regulator approval",
        "languageOfInstruction": "MoE public schools generally use Arabic as the language of instruction, with English used for technical and scientific subjects; private-school language depends on the licensed curriculum and school",
        "chapterCount": null,
        "chapters": [],
        "status": "national-moe-curriculum-and-emirate-regulatory-framework-identified; private-school-curricula-and-subject-sequences-must-be-mapped-by-pathway-and-emirate"
      },
      "Mathematics": {
        "officialAuthority": "United Arab Emirates Ministry of Education (MoE) for the national curriculum; private-school oversight is shared with local regulators including ADEK (Abu Dhabi), KHDA (Dubai) and SPEA (Sharjah); MoE supervises Ajman, Umm Al Quwain, Ras Al Khaimah and Fujairah",
        "officialSyllabusUrl": "https://u.ae/en/information-and-services/education/school-education-k-12/curricula-and-language-of-instruction-",
        "examBoard": "No single examination board applies to every UAE school: Ministry-curriculum schools follow MoE assessment requirements; private schools may use approved curriculum-specific examinations and awarding bodies, subject to emirate regulator approval",
        "languageOfInstruction": "MoE public schools generally use Arabic as the language of instruction, with English used for technical and scientific subjects; private-school language depends on the licensed curriculum and school",
        "chapterCount": null,
        "chapters": [],
        "status": "national-moe-curriculum-and-emirate-regulatory-framework-identified; private-school-curricula-and-subject-sequences-must-be-mapped-by-pathway-and-emirate"
      }
    }
  },
  {
    "country": "United Kingdom",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "United States",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Uruguay",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Uzbekistan",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Vanuatu",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Vatican City",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Venezuela",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Vietnam",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Yemen",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  },
  {
    "country": "Zambia",
    "subjects": {
      "Biology": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/wp-content/uploads/2025/04/BIOLOGY-SYLABUS-O-LEVEL-FORM-1-4.pdf",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form 1",
                            "topics": [
                                      "Nature of science inquiry and the study of Biology",
                                      "Levels of biological organisation and characteristics of living things",
                                      "Microscopes, cell types, cell structure, function and specialisation",
                                      "Food nutrients, dietary needs, plant nutrients and deficiency disorders",
                                      "Types of reproduction and reproduction in humans, microorganisms and plants",
                                      "Plant and animal coordination and response",
                                      "Ecosystems, biotic and abiotic interactions, soil composition and fertility"
                            ],
                            "status": "2024-CDC-scope-and-sequence-extracted; topic groupings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 2",
                            "topics": [
                                      "Experimental design, limits of science and scientific ethics",
                                      "Micrographs, staining, permanent slides, detailed cell structure and properties of water",
                                      "Types of nutrition, autotrophic and heterotrophic nutrition, transport in plants",
                                      "Reproduction in plants; plant growth, germination and development",
                                      "Plant hormones and response; health and disease",
                                      "Classification, feeding relationships, energy flow and pollution"
                            ],
                            "status": "2024-CDC-scope-and-sequence-extracted; topic groupings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 3",
                            "topics": [
                                      "Chemicals of life, food tests and Biology research proposal",
                                      "Movement of substances across cells, metabolism and enzymes",
                                      "Dentition in mammals, holozoic nutrition and transport in animals",
                                      "Gaseous exchange and respiration",
                                      "Reproduction in frogs and humans; menstrual cycle, fertilisation, embryo development, fertility and birth control",
                                      "Immunity, endocrine system and nervous system",
                                      "Carbon, nitrogen and water cycles; classification levels and dichotomous keys"
                            ],
                            "status": "2024-CDC-scope-and-sequence-extracted; topic groupings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 4",
                            "topics": [
                                      "Research project in Biology",
                                      "Cell division",
                                      "Excretion in plants and animals; homeostasis in human beings",
                                      "Heredity",
                                      "Sense organs, support and locomotion",
                                      "Biodiversity, conservation, natural selection and evolution"
                            ],
                            "status": "2024-CDC-scope-and-sequence-extracted; topic groupings, not textbook chapter titles"
                  }
        ],
        "status": "2024-CDC-Forms-1-4-scope-and-sequence-mapped-at-topic-group-level; textbook-chapter-inventory-not-claimed"
      },
      "Chemistry": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/wp-content/uploads/2025/04/CHEMISTRY-SYLLABUS.pdf",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form 1",
                            "topics": [
                                      "Introduction to Chemistry",
                                      "Matter",
                                      "Elements, Compounds and Mixtures",
                                      "Atomic Structure"
                            ],
                            "status": "2024-CDC-syllabus-contents-and-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 2",
                            "topics": [
                                      "Bonding",
                                      "Chemical Reactions",
                                      "Chemical Kinetics",
                                      "Redox Reactions",
                                      "Acids, Bases and Salts"
                            ],
                            "status": "2024-CDC-syllabus-contents-and-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 3",
                            "topics": [
                                      "Stoichiometry and the Mole Concept",
                                      "Thermochemistry",
                                      "Equilibrium",
                                      "Electricity and Chemistry",
                                      "Periodicity"
                            ],
                            "status": "2024-CDC-syllabus-contents-and-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 4",
                            "topics": [
                                      "Metallurgy",
                                      "Non-Metals",
                                      "Organic Chemistry",
                                      "Environmental Chemistry"
                            ],
                            "status": "2024-CDC-syllabus-contents-and-structure-extracted; topic headings, not textbook chapter titles"
                  }
        ],
        "status": "2024-CDC-Forms-1-4-topic-headings-mapped; detailed-subtopics-still-to-be-extracted"
      },
      "Physics": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/wp-content/uploads/2025/04/PHYSICS-SYLLABUS-O-LEVEL-FORM-1-4.pdf",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form 1",
                            "topics": [
                                      "Introduction to Physics",
                                      "General Physics",
                                      "Elementary Astronomy",
                                      "Geophysics",
                                      "Mechanics I"
                            ],
                            "status": "2024-CDC-syllabus-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 2",
                            "topics": [
                                      "Mechanics II",
                                      "Thermal Physics",
                                      "Wave Motion and Sound"
                            ],
                            "status": "2024-CDC-syllabus-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 3",
                            "topics": [
                                      "Light",
                                      "Static Electricity",
                                      "Current Electricity",
                                      "Magnetism",
                                      "Electromagnetism",
                                      "Electromagnetic Induction"
                            ],
                            "status": "2024-CDC-syllabus-structure-extracted; topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 4",
                            "topics": [
                                      "Basic Electronics",
                                      "Electronic Communication Systems",
                                      "Atomic Physics",
                                      "Renewable Energy"
                            ],
                            "status": "2024-CDC-syllabus-structure-extracted; topic headings, not textbook chapter titles"
                  }
        ],
        "status": "2024-CDC-Forms-1-4-topic-headings-mapped; detailed-subtopics-still-to-be-extracted"
      },
      "Mathematics": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/wp-content/uploads/2025/04/MATHEMATICS-O-LEVEL-FORMS-1-4.pdf",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "syllabusPathways": ["Mathematics I (Forms 1-4)", "Mathematics II (STEM, Forms 1-4)"],
        "chapterCount": null,
        "chapters": [],
        "topicInventory": [
                  {
                            "grade": "Form 1 — Mathematics I",
                            "topics": [
                                      "Numbers",
                                      "Integers",
                                      "Approximations and Estimation",
                                      "Sets",
                                      "Algebra",
                                      "Matrices",
                                      "Angles",
                                      "Trigonometry",
                                      "Statistics"
                            ],
                            "status": "2024 CDC Mathematics I syllabus table of contents; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 2 — Mathematics I",
                            "topics": [
                                      "Coordinate Geometry",
                                      "Relations and Functions",
                                      "Algebra",
                                      "Polygons",
                                      "Systems of Equations",
                                      "Travel Graphs",
                                      "Financial Arithmetic"
                            ],
                            "status": "2024 CDC Mathematics I syllabus table of contents; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 3 — Mathematics I",
                            "topics": [
                                      "Index Notation",
                                      "Shapes",
                                      "Symmetry",
                                      "Construction",
                                      "Locus",
                                      "Similarity and Congruence",
                                      "Statistics",
                                      "Bearings and Scale Drawing",
                                      "Variations",
                                      "Matrices"
                            ],
                            "status": "2024 CDC Mathematics I syllabus table of contents; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 4 — Mathematics I",
                            "topics": [
                                      "Quadratic Equations and Functions",
                                      "Linear Programming",
                                      "Vectors",
                                      "Trigonometry",
                                      "Geometrical Transformations",
                                      "Probability"
                            ],
                            "status": "2024 CDC Mathematics I syllabus table of contents; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 1 — Mathematics II (STEM)",
                            "topics": [
                                      "Real Numbers",
                                      "Sets",
                                      "Integers",
                                      "Algebra",
                                      "Estimation and Approximation",
                                      "Coordinate Geometry",
                                      "Relations and Functions",
                                      "Angles and Polygons",
                                      "Financial Arithmetic",
                                      "Directions and Bearings",
                                      "Similarity and Congruency",
                                      "Right-Angled Triangles",
                                      "Mensuration"
                            ],
                            "status": "2024 CDC Mathematics II syllabus table of contents; STEM pathway; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 2 — Mathematics II (STEM)",
                            "topics": [
                                      "Index Notation",
                                      "Number Bases",
                                      "Equations and Inequalities",
                                      "Algebra",
                                      "Matrices",
                                      "Variation",
                                      "Mensuration",
                                      "Symmetry",
                                      "Probability"
                            ],
                            "status": "2024 CDC Mathematics II syllabus table of contents; STEM pathway; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 3 — Mathematics II (STEM)",
                            "topics": [
                                      "Equations and Inequalities",
                                      "Functions",
                                      "Systems of Equations",
                                      "Coordinate Geometry",
                                      "Sequences and Series",
                                      "Exponential and Logarithmic Functions",
                                      "Geometrical Construction and Loci",
                                      "Travel Graphs",
                                      "Statistics"
                            ],
                            "status": "2024 CDC Mathematics II syllabus table of contents; STEM pathway; syllabus topic headings, not textbook chapter titles"
                  },
                  {
                            "grade": "Form 4 — Mathematics II (STEM)",
                            "topics": [
                                      "Linear Programming",
                                      "Vectors",
                                      "Trigonometry",
                                      "Earth Geometry",
                                      "Geometrical Transformations",
                                      "Calculus"
                            ],
                            "status": "2024 CDC Mathematics II syllabus table of contents; STEM pathway; syllabus topic headings, not textbook chapter titles"
                  }
        ],
        "status": "2024-CDC-Mathematics-I-and-Mathematics-II-STEM-Forms-1-4-topic-sequences-mapped-separately; detailed-subtopics-pending"
      }
    }
  },
  {
    "country": "Zimbabwe",
    "subjects": {
      "Biology": {
        "officialAuthority": "Ministry of Primary and Secondary Education (MoPSE), Curriculum Development and Technical Services",
        "officialSyllabusUrl": "https://www.mopsemashwest.gov.zw/files/Biology%203-4.pdf",
        "examBoard": "Zimbabwe School Examinations Council (ZIMSEC)",
        "languageOfInstruction": "English is widely used in secondary science and mathematics syllabuses; verify the prescribed language and approved local-language provision for each school and learning area",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": {
          "sourceType": "MoPSE-2024-2030-Heritage-Based-Biology-Forms-3-4-scope-and-sequence; syllabus topic areas, not textbook chapter titles",
          "sourceUrl": "https://www.mopsemashwest.gov.zw/files/Biology%203-4.pdf",
          "forms": [
            {
              "form": "Form 3",
              "topics": [
                "Introduction to Biology: branches, laboratory safety and careers",
                "Chemicals of Life: water, carbohydrates, proteins, fats and nucleic acids",
                "Cells and Cellular Activities: plant and animal cell structure, cell specialisation and cell transport",
                "Enzymes: properties and mode of action",
                "Plant Science: nutrition, productivity and transport",
                "Animal Science: nutrition, gaseous exchange, transport and human sexual reproduction",
                "Microbiology and Biotechnology: types, characteristics and economic importance of microorganisms"
              ]
            },
            {
              "form": "Form 4",
              "topics": [
                "Introduction to Biology: laboratory safety labels",
                "Chemicals of Life: carbohydrates, proteins, fats and nucleic acids",
                "Enzymes: industrial applications",
                "Plant Science: coordination and response, reproduction and productivity",
                "Animal Science: homeostasis, coordination and response, and the skeletal system",
                "Microbiology and Biotechnology: applications and recombinant gene technology",
                "Genetics: genes and chromosomes, monohybrid inheritance and mutations",
                "Biodiversity: classification, natural and artificial selection, and variation",
                "Ecosystems: threats and management",
                "Health and Disease: health, drug use and abuse, and infectious and non-infectious diseases"
              ]
            }
          ],
          "documentNote": "The syllabus text describes thirteen compulsory topics, but the numbered topic list and scope-and-sequence table enumerate 6.1–6.12 (twelve headings). This discrepancy is retained for review rather than silently resolved. The scope-and-sequence table distributes some headings across both forms; the form lists above consolidate the stated content areas and are not a textbook chapter count.",
          "status": "Forms-3-4-topic-scope-and-sequence-extracted; Forms-1-2-follow-General-Science-in-the-framework; Forms-5-6-pathway-specific-mapping-pending"
        },
        "status": "MoPSE-2024-2030-Biology-Forms-3-4-scope-and-sequence-extracted; topic-headings-not-textbook-chapters; document-topic-count-discrepancy-flagged; lower-and-upper-secondary-mapping-pending"
      },
      "Chemistry": {
        "officialAuthority": "Ministry of Primary and Secondary Education (MoPSE), Curriculum Development and Technical Services",
        "officialSyllabusUrl": null,
        "examBoard": "Zimbabwe School Examinations Council (ZIMSEC)",
        "languageOfInstruction": "English is widely used in secondary science and mathematics syllabuses; verify the prescribed language and approved local-language provision for each school and learning area",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": {
          "sourceType": "MoPSE-2024-2030-Chemistry-Forms-3-4-syllabus-mirror; broad syllabus topic headings, not textbook chapter titles",
          "sourceUrl": "https://studylib.net/doc/28473417/revised-chemistry-syllabus-f3-4",
          "topics": [
            "Laboratory techniques",
            "Matter",
            "Atoms, Elements and Compounds",
            "Chemical Bonding",
            "The Mole Concept",
            "Stoichiometry",
            "Acids, Bases and Salts",
            "Electrochemistry",
            "Chemical Energetics",
            "Equilibria",
            "Reaction Kinetics",
            "Periodic Table",
            "Metals",
            "Non-metals",
            "Fuels",
            "Classification and Nomenclature of Organic Compounds",
            "Hydrocarbons",
            "Alcohols",
            "Carboxylic Acids",
            "Polymers",
            "Waste Management",
            "Pollution",
            "Water Purification",
            "Herbs"
          ],
          "coverageNote": "The 2024-2030 syllabus mirror includes a Forms 3-4 scope-and-sequence chart. The current official-hosted PDF link has not yet been confirmed; detailed form-by-form allocation and competency-matrix extraction remain pending.",
          "status": "24-syllabus-topic-headings-extracted-from-2024-2030-document-mirror; official-host-verification-and-form-allocation-pending"
        },
        "status": "MoPSE-2024-2030-Chemistry-Forms-3-4-topic-inventory-extracted-from-mirrored-syllabus; official-host-link-and-form-level-mapping-pending"
      },
      "Physics": {
        "officialAuthority": "Ministry of Primary and Secondary Education (MoPSE), Curriculum Development and Technical Services",
        "officialSyllabusUrl": null,
        "examBoard": "Zimbabwe School Examinations Council (ZIMSEC)",
        "languageOfInstruction": "English is widely used in secondary science and mathematics syllabuses; verify the prescribed language and approved local-language provision for each school and learning area",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": {
          "sourceType": "MoPSE-2024-2030-Physics-Forms-3-4-syllabus-mirror; numbered syllabus topic headings, not textbook chapter titles",
          "sourceUrl": "https://studylib.net/doc/28551621/revised-physics-syllabus-f3-4",
          "topics": [
            "Measurement and Physical Quantities",
            "Kinematics",
            "Forces",
            "Machines",
            "Mechanical Structures",
            "Work, Energy and Power",
            "Thermal Physics",
            "Internal Combustion Engines",
            "Waves",
            "Optics",
            "Electricity",
            "Magnetism",
            "Electromagnetism",
            "Electronics",
            "Robotics",
            "Atomic and Nuclear Physics"
          ],
          "coverageNote": "The 2024-2030 syllabus mirror includes a Forms 3-4 scope-and-sequence chart. The current official-hosted PDF link has not yet been confirmed; detailed form-by-form allocation and competency-matrix extraction remain pending.",
          "status": "16-numbered-syllabus-topic-headings-extracted-from-2024-2030-document-mirror; official-host-verification-and-form-allocation-pending"
        },
        "status": "MoPSE-2024-2030-Physics-Forms-3-4-topic-inventory-extracted-from-mirrored-syllabus; official-host-link-and-form-level-mapping-pending"
      },
      "Mathematics": {
        "officialAuthority": "Ministry of Primary and Secondary Education (MoPSE), Curriculum Development and Technical Services",
        "officialSyllabusUrl": "https://mopsemashwest.gov.zw/Site/Curriculum_Updated_Syllabi.html",
        "examBoard": "Zimbabwe School Examinations Council (ZIMSEC)",
        "languageOfInstruction": "English is widely used in secondary science and mathematics syllabuses; verify the prescribed language and approved local-language provision for each school and learning area",
        "chapterCount": null,
        "chapters": [],
        "topicInventory": {
          "sourceType": "MoPSE-Heritage-Based-Curriculum-2024-2030-Mathematics-Forms-1-4; syllabus topic headings, not textbook chapter titles",
          "officialCatalogueUrl": "https://mopsemashwest.gov.zw/Site/Curriculum_Updated_Syllabi.html",
          "pathways": [
            {
              "name": "Mathematics Syllabus A (Forms 1-4)",
              "sourceUrl": "https://sytbay.co.zw/?slc_download_id=49986&slc_file=wpdm-41997-1",
              "topics": [
                "Number Systems",
                "Set Language and Notation",
                "Financial Mathematics",
                "Measures and Mensuration",
                "Graphs of Linear Functions",
                "Algebra",
                "Geometry",
                "Statistics and Probability",
                "Matrices"
              ],
              "status": "9-topic-headings-and-form-wise-scope-sequence-extracted-from-2024-2030-syllabus-copy; official-catalogue-lists-Mathematics-Forms-1-4"
            },
            {
              "name": "Mathematics Syllabus B (Forms 1-4)",
              "sourceUrl": "https://studylib.net/doc/28286752/revised-maths-syllabus-b-f1-4",
              "topics": [
                "Real Numbers",
                "Sets",
                "Money and Finance",
                "Measures and Mensuration",
                "Graphs",
                "Variation",
                "Algebra",
                "Geometry",
                "Statistics",
                "Trigonometry",
                "Vectors",
                "Matrices",
                "Probability",
                "Transformations"
              ],
              "status": "14-topic-headings-extracted-from-2024-2030-syllabus-copy; detailed-form-wise-scope-and-sequence-extraction-pending"
            }
          ],
          "pathwayNote": "Mathematics A and Mathematics B are distinct syllabus pathways. Pure Mathematics and Additional Mathematics are also separate Forms 3-4 learning areas and are mapped independently below. Mathematics B form allocation and deeper competency mapping remain pending.",
          "additionalPathways": [
            {
              "name": "Pure Mathematics (Forms 3-4)",
              "sourceType": "MoPSE-2024-2030-Pure-Mathematics-syllabus-copy; syllabus headings and form scope-and-sequence, not textbook chapter titles",
              "sourceUrl": "https://www.scribd.com/document/978901310/Pure-Mathematics-syllabus-form-3-to-4",
              "topics": [
                "Indices and Irrational Numbers",
                "Polynomials",
                "Identities, Equations and Inequalities",
                "Graphs and Coordinate Geometry",
                "Vectors",
                "Functions",
                "Sequences",
                "Binomial Expansions",
                "Trigonometry",
                "Logarithmic and Exponential Functions",
                "Differentiation",
                "Integration",
                "Numerical Methods"
              ],
              "status": "13-topic-headings-and-Form-3-4-scope-sequence-extracted-from-2024-2030-syllabus-copy; official-MoPSE-catalogue-lists-Pure-Mathematics-Forms-3-4"
            },
            {
              "name": "Additional Mathematics (Forms 3-4)",
              "sourceType": "MoPSE-2024-2030-Additional-Mathematics-syllabus-copy; syllabus headings and form scope-and-sequence, not textbook chapter titles",
              "sourceUrl": "https://studylib.net/doc/28370179/revised-additional-maths-f3---4",
              "topicGroups": {
                "Pure Mathematics": [
                  "Indices and Irrational Numbers",
                  "Polynomials",
                  "Algebraic Identities, Equations and Inequalities",
                  "Sequences and Series",
                  "Coordinate Geometry in Two Dimensions",
                  "Functions",
                  "Quadratic Functions",
                  "Logarithmic and Exponential Functions",
                  "Trigonometric Functions",
                  "Differentiation",
                  "Integration"
                ],
                "Mechanics": [
                  "Kinematics of Motion in a Straight Line",
                  "Forces and Equilibrium",
                  "Newton's Laws of Motion",
                  "Energy, Work and Power"
                ],
                "Probability and Statistics": [
                  "Probability",
                  "Data Collection and Presentation",
                  "Measures of Central Tendency and Dispersion",
                  "Discrete and Continuous Probability Distributions",
                  "Normal Distribution",
                  "Sampling Methods and Estimation"
                ]
              },
              "coverageNote": "The 2024-2030 syllabus presents the content in three strands: Pure Mathematics, Mechanics, and Probability and Statistics. Topic groupings are retained by strand; detailed Form 3 versus Form 4 allocation and competency-matrix extraction remain pending.",
              "status": "21-topic-headings-across-three-strands-extracted-from-2024-2030-syllabus-copy; official-MoPSE-catalogue-lists-Additional-Mathematics-Forms-3-4"
            }
          ],
          "status": "Mathematics-A-and-B-plus-Pure-and-Additional-Mathematics-pathways-identified; topic-headings-mapped-separately; deeper-form-allocation-and-competency-mapping-pending"
        },
        "status": "MoPSE-2024-2030-Mathematics-A-B-Pure-and-Additional-pathway-inventories-added; pathways-kept-separate; official-catalogue-reference-retained"
      }
    }
  },
  {
    "country": "Kosovo",
    "subjects": {
      "Biology": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Chemistry": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Physics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      },
      "Mathematics": {
        "officialAuthority": null,
        "officialSyllabusUrl": null,
        "examBoard": null,
        "languageOfInstruction": null,
        "chapterCount": null,
        "chapters": [],
        "status": "curriculum-mapping-required"
      }
    }
  }
];
 // Seed only the Kenya Biology chapter titles already present in the current Grade 10 notes data.
 // This is explicitly a partial inventory, not a claim that the national syllabus has only four chapters.
 const kenya=countries.find(x=>x.country==="Kenya");
 if(kenya){
  const biology=kenya.subjects.Biology;
  biology.officialAuthority="Kenya Institute of Curriculum Development (KICD)";
  biology.officialSyllabusUrl="https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/";
  biology.officialLocalSubjectName="Biology";
  biology.level="Senior School • Grade 10";
  biology.chapterInventoryStatus="partial-inventory-from-current-platform-data";
  biology.status="partial-chapter-inventory";
  biology.chapters=[
   {id:"bio-intro",title:"1.1 Introduction to Biology",curriculumVerified:false,wordCount:12441,diagramCount:10,examQuestionCount:38,qualityStatus:"content-standard-met-curriculum-verification-pending",measuredOn:"2026-11-16",measurementMethod:"Loaded the base country notes data and all four active chapter extension scripts; counted rendered chapter text fields while excluding SVG markup, identifiers and styling. Verified 30 sections, 10 diagrams, 38 questions, 5 applications, 3 practical activities and 6 misconceptions.",seoMetadataVerified:true},
   {id:"bio-investigations",title:"1.2 Scientific investigations in Biology",curriculumVerified:false,wordCount:10036,diagramCount:10,examQuestionCount:29,qualityStatus:"content-standard-met-curriculum-verification-pending",measuredOn:"2026-11-16",measurementMethod:"Executed the base Kenya Grade 10 Biology notes and all loaded chapter extension scripts, including the targeted audit depth pack; counted chapter text fields excluding SVG markup, identifiers and styling.",sectionCount:26,applicationCount:5,practicalActivityCount:3,misconceptionCount:6,seoMetadataVerified:true},
   {id:"bio-cells",title:"1.3 Cell structure and specialisation",curriculumVerified:false,wordCount:10414,diagramCount:10,examQuestionCount:28,qualityStatus:"content-standard-met-curriculum-verification-pending",measuredOn:"2026-11-16",measurementMethod:"Executed the base Kenya Grade 10 Biology notes and all loaded chapter extension scripts, including the targeted audit depth pack; counted chapter text fields excluding SVG markup, identifiers and styling.",sectionCount:27,applicationCount:6,practicalActivityCount:4,misconceptionCount:8,seoMetadataVerified:true},
   {id:"bio-chemicals",title:"1.4 Chemicals of life",curriculumVerified:false,wordCount:10077,diagramCount:10,examQuestionCount:29,qualityStatus:"content-standard-met-curriculum-verification-pending",measuredOn:"2026-11-16",measurementMethod:"Executed the base Kenya Grade 10 Biology notes and all loaded chapter extension scripts, including the targeted audit depth pack; counted chapter text fields excluding SVG markup, identifiers and styling.",sectionCount:29,applicationCount:5,practicalActivityCount:3,misconceptionCount:7,seoMetadataVerified:true}
  ];
 }


 // Platform starter inventory is not a claim of official syllabus completion.
 const starterCountryKeys=["algeria","angola","benin","botswana","burkinafaso","cameroon","centralafricanrepublic","chad","comoros","congo","democraticrepublicofthecongo","djibouti","egypt","equatorialguinea","eritrea","eswatini","ethiopia","gabon","gambia","ghana","guinea","guineabissau","cotedivoire","lesotho","liberia","madagascar","mali","mauritania","mauritius","morocco","mozambique","namibia","niger","nigeria","saotomeandprincipe","senegal","seychelles","sierraleone","somalia","southafrica","southsudan","sudan","togo","tunisia","zambia","burundi","caboverde","libya","malawi","zimbabwe","afghanistan","armenia","azerbaijan","bangladesh","bhutan","brunei","cambodia","china","cyprus","georgia","india","indonesia","iran","iraq","israel","japan","jordan","kazakhstan","kuwait","kyrgyzstan","laos","lebanon","malaysia","maldives","mongolia","myanmar","nepal","northkorea","oman","pakistan","palestine","philippines","qatar","saudiarabia","singapore","southkorea","srilanka","syria","taiwan","tajikistan","thailand","timorleste","turkiye","turkmenistan","unitedarabemirates","bahrain","russia","uzbekistan","vietnam","yemen","albania","andorra","antiguaandbarbuda","argentina","australia","austria","bahamas","barbados","belarus","belgium","belize","bolivia","bosniaandherzegovina","brazil","bulgaria","canada","chile","colombia","costarica","croatia","cuba","czechia","denmark","dominica","dominicanrepublic","ecuador","elsalvador","estonia","fiji","finland","france","germany","greece","grenada","guatemala","guyana","haiti","honduras","hungary","iceland","ireland","italy","jamaica","kiribati","latvia","liechtenstein","lithuania","luxembourg","malta","marshallislands","mexico","micronesia","moldova","monaco","montenegro","nauru","netherlands","newzealand","nicaragua","northmacedonia","norway","palau","panama","papuanewguinea","paraguay","peru","poland","portugal","romania","saintkittsandnevis","saintlucia","saintvincentandthegrenadines","samoa","sanmarino","serbia","slovakia","slovenia","solomonislands","spain","suriname","sweden","switzerland","tonga","trinidadandtobago","tuvalu","ukraine","unitedkingdom","unitedstates","uruguay","vanuatu","vaticancity","venezuela","kosovo"];
 const starterSet=new Set(starterCountryKeys);
 const normaliseStarter=function(s){let k=String(s).toLowerCase().normalize("NFD").replace(/[\\u0300-\\u036f]/g,"").replace(/&/g,"and").replace(/[^a-z0-9]/g,"");const a={"bruneidarussalam":"brunei","republicofthecongo":"congo","thegambia":"gambia","turkey":"turkiye"};return a[k]||k;};
 const extraFiles={"Kenya":["country-online-notes-data.js","country-online-notes-country-expansion.js"],"Rwanda":["country-online-notes-rwanda-reb.js"],"Tanzania":["country-online-notes-international-country-expansion.js"],"Uganda":["country-online-notes-international-country-expansion.js"]};
 countries.forEach(function(c){const has=starterSet.has(normaliseStarter(c.country));SUBJECTS.forEach(function(s){const v=c.subjects[s];v.platformInventory=has?{presence:"starter-unit-found",starterUnitCount:1,starterSectionCount:12,diagramCount:10,examQuestionCount:15,wordCount:null,wordTargetStatus:"not-measured; 10,000-word target not certified",curriculumSequenceStatus:"supplementary starter sequence; official national mapping pending"}:{presence:"separate-country-file-found; subject-level inventory pending",sourceFiles:extraFiles[c.country]||[],starterUnitCount:null,starterSectionCount:null,diagramCount:null,examQuestionCount:null,wordCount:null,wordTargetStatus:"not-measured",curriculumSequenceStatus:"requires subject-by-subject file audit"};});});

 // First evidence-backed curriculum mapping batch (2026-11-16).
 // Profiles identify official authorities and pathways; only publish chapter inventories
 // where an actual syllabus/topic source has been inspected. Never infer chapter titles.
 const mappedProfiles={
  "Kenya":{
   officialAuthority:"Kenya Institute of Curriculum Development (KICD)",
   nationalAuthorityUrl:"https://kicd.ac.ke/",
   officialCurriculumPortal:"https://kicd.ac.ke/cbc-materials/curriculum-designs/sne-curriculum-designs/pi-grade-10/",
   levelMapped:"Senior School • Grade 10 • Pure Sciences pathway",
   languageOfInstruction:"English and Kiswahili (school/subject implementation context; confirm individual design)",
   assessmentAuthority:"Kenya National Examinations Council (KNEC)",
   subjectSources:{
    Biology:"https://drive.google.com/file/d/12NjkxPyQ4zrQ9OqMlMsdV1fgydQ_fV6n/preview",
    Chemistry:"https://drive.google.com/file/d/1Y1QrF91zr4UT_Ag_Dgv5yTTD-T7WkTBm/preview",
    Mathematics:"https://drive.google.com/file/d/18YmVEbur9jJn2c0_HbJmrc-eTUyNXdOX/preview",
    Physics:"https://drive.google.com/file/d/1UiHdrEzfQX7e-L4WFycMfDYokm6TEC1S/preview"
   },
   mappingStatus:"official-grade-and-subject-designs-located; chapter-sequence-extraction-pending",
   notes:"KICD lists Grade 10 Biology, Chemistry, Core Mathematics and Physics curriculum designs. These links are official design documents. Exact chapter/topic order must be extracted from the documents before marking subject chapter inventories verified."
  },
  "Afghanistan":{
   officialAuthority:"Ministry of Education — Afghanistan",
   nationalAuthorityUrl:"https://moe.gov.af/",
   officialCurriculumUrl:"https://moe.gov.af/index.php/dr/کتب-نصاب-تعلیمی",
   levelMapped:"Lower secondary • Grades 7–9 (documented pre-August 2021 textbook/curriculum set)",
   languageOfInstruction:"Dari and Pashto; verify textbook/language by school",
   mappingStatus:"historical-grade-topic-strands-extracted; current-status-and-chapter-sequence-verification-required",
   evidenceUrl:"https://www.oise.utoronto.ca/site/sites/default/files/2025-07/Afghanistan_Science-Curriculum-Overview.pdf",
   topicInventory:{
    Biology:[
     {grade:"7",topics:["Ecology","Cells","Life cycle","Cell structure"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"8",topics:["Viruses, bacteria, algae and fungi","Plant groups and reproduction","Ecology and ecosystems","Animal groups, reproduction and classification","Vertebrates and invertebrates","Biodiversity"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"9",topics:["Systems of the human body","Human health"],status:"topic-list-extracted; not verified chapter titles"}
    ],
    Chemistry:[
     {grade:"7",topics:["Characteristics and types of substances","Parts of substances","Chemical changes and reactions","Important elements of life"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"8",topics:["Atoms and electron orbitals","Periodic table","Chemical reactions","Acids and bases","Oxides","Chemical fertilizers","Salts"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"9",topics:["Hydrocarbons","Chain reactions","Chemical reactions"],status:"topic-list-extracted; not verified chapter titles"}
    ],
    Physics:[
     {grade:"7",topics:["Measurement","Force","Work","Energy","Power","Pressure","Light","Reflection and refraction","Mirrors"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"8",topics:["Temperature","Work and temperature","Magnetism","Electricity","Power and vectors","Machines","Gravity"],status:"topic-list-extracted; not verified chapter titles"},
     {grade:"9",topics:["Motion","Vibration and sound","Electric current","Measurement","Potential energy","Resistance","Electromagnetism"],status:"topic-list-extracted; not verified chapter titles"}
    ],
    Mathematics:[{grade:"6–9",topics:[],status:"separate grade-level mathematics curriculum documents identified; detailed strands not extracted in this batch"}]
   },
   notes:"The inspected overview describes textbooks published before August 2021 and explicitly reflects the pre-August-2021 curriculum. Do not present it as confirmation of current policy or current official chapter order."
  },
  "Australia":{
   officialAuthority:"Australian Curriculum, Assessment and Reporting Authority (ACARA); state and territory curriculum/assessment authorities implement senior secondary courses",
   nationalAuthorityUrl:"https://www.acara.edu.au/",
   officialCurriculumUrl:"https://www.acara.edu.au/curriculum/senior-secondary",
   levelMapped:"Foundation–Year 10 national curriculum; senior secondary Years 11–12 with state/territory implementation",
   languageOfInstruction:"English (mainstream national curriculum; state and school exceptions may apply)",
   mappingStatus:"national-framework-and-subject-pathways-identified; state-specific-course-sequence-required",
   subjectSources:{
    Biology:"https://v8.australiancurriculum.edu.au/senior-secondary-curriculum/science/biology/",
    Chemistry:"https://v8.australiancurriculum.edu.au/senior-secondary-curriculum/science/chemistry/",
    Physics:"https://v8.australiancurriculum.edu.au/senior-secondary-curriculum/science/physics/",
    Mathematics:"https://v8.australiancurriculum.edu.au/senior-secondary-curriculum/mathematics/"
   },
   notes:"ACARA identifies senior-secondary Biology, Chemistry, Physics and four mathematics pathways (Essential Mathematics, General Mathematics, Mathematical Methods and Specialist Mathematics). State/territory authorities control course organisation, assessment and certification; select the jurisdiction before final chapter sequencing."
  }
 };
 countries.forEach(function(c){
  const p=mappedProfiles[c.country];if(!p)return;
  c.curriculumProfile=p;
  if(c.country==="Afghanistan"&&p.topicInventory){
   Object.keys(p.topicInventory).forEach(function(s){
    c.subjects[s].topicInventory=p.topicInventory[s];
    c.subjects[s].officialAuthority=p.officialAuthority;
    c.subjects[s].officialSyllabusUrl=p.evidenceUrl;
    c.subjects[s].languageOfInstruction=p.languageOfInstruction;
    c.subjects[s].status="curriculum-mapping-required";
   });
  }
  if(c.country==="Kenya"){
   ["Biology","Chemistry","Physics","Mathematics"].forEach(function(s){
    const v=c.subjects[s];v.officialAuthority=p.officialAuthority;v.officialSyllabusUrl=p.subjectSources[s];v.examBoard=p.assessmentAuthority;v.languageOfInstruction=p.languageOfInstruction;
    if(v.status!=="partial-chapter-inventory")v.status="curriculum-mapping-required";
   });
  }
  if(c.country==="Australia"){
   ["Biology","Chemistry","Physics","Mathematics"].forEach(function(s){
    const v=c.subjects[s];v.officialAuthority=p.officialAuthority;v.officialSyllabusUrl=p.subjectSources[s];v.languageOfInstruction=p.languageOfInstruction;v.status="curriculum-mapping-required";
   });
  }
 });

 root.CBE_CURRICULUM_COMPLETION_REGISTER={
  version:"2026-11-16-v2-country-reconciled",
  /* Canonicalise starter-file labels to the country names used by this register.
     Do not rename live country routes or merge distinct education jurisdictions. */
  countryNameAliases:{
   "Brunei Darussalam":"Brunei",
   "Republic of the Congo":"Congo",
   "The Gambia":"Gambia",
   "São Tomé and Príncipe":"Sao Tome and Principe",
   "Turkey":"Türkiye"
  },
  countryCoverageReconciliation:{
   mainStarterGroups:{africaBatchFiles:10,africaCountryEntries:50,asiaBatchFiles:10,asiaCountryEntries:50,globalRemainingEntries:94,totalEntries:194},
   mainStarterGroupCoverage:{canonicalRegisterCountriesRepresented:192,registerCountriesNotInTheseThreeGroups:["Kenya","Rwanda","Tanzania","Uganda"],additionalNonRegisterEducationJurisdictions:["Taiwan"],duplicateAliasEntry:"Turkey / Türkiye"},
   additionalCountryFiles:{
    "Kenya":"country-online-notes-data.js; country-online-notes-country-expansion.js",
    "Rwanda":"country-online-notes-rwanda-reb.js",
    "Tanzania":"country-online-notes-international-country-expansion.js",
    "Uganda":"country-online-notes-international-country-expansion.js"
   },
   reconciliationNote:"The three main starter groups contain 194 rows, representing 192 distinct countries in this 196-entry register after canonical name matching. Taiwan is an additional education jurisdiction outside the register. Kenya, Rwanda, Tanzania and Uganda have separate country-specific files and are not missing from the repository; their detailed subject/chapter completeness still requires audit."
  },
  targetCountryCount:196,
  registeredCountryCount:countries.length,
  targetWordsPerChapter:TARGET_WORDS_PER_CHAPTER,
  minimumDiagramsPerChapter:MIN_DIAGRAMS_PER_CHAPTER,
  minimumExamQuestionsPerChapter:MIN_EXAM_QUESTIONS_PER_CHAPTER,
  requiredSubjects:SUBJECTS,
  countries:countries,
  getSummary:function(){
   let mapped=0,chapterCount=0,verifiedChapters=0,completeChapters=0;
   countries.forEach(country=>SUBJECTS.forEach(subject=>{
    const item=country.subjects[subject];
    if(item.status==="curriculum-mapped"||item.status==="chapters-registered"||item.status==="in-progress"||item.status==="verified") mapped++;
    chapterCount+=item.chapters.length;
    item.chapters.forEach(ch=>{if(ch.curriculumVerified)verifiedChapters++;if(ch.qualityStatus==="complete")completeChapters++;});
   }));
   return {countries:countries.length,subjectsPerCountry:SUBJECTS.length,countrySubjectMaps:countries.length*SUBJECTS.length,curriculumMappedSubjects:mapped,registeredChapters:chapterCount,curriculumVerifiedChapters:verifiedChapters,chaptersMeetingFullStandard:completeChapters,targetWordsPerChapter:TARGET_WORDS_PER_CHAPTER};
  }
 };
})(window);
