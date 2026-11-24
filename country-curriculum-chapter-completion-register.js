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
    "country": "Indonesia",
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
    "country": "Liberia",
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
    "country": "Malaysia",
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
        "officialSyllabusUrl": "https://www.reb.gov.rw/",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-examination-authorities-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://www.reb.gov.rw/",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-examination-authorities-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Physics": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://www.reb.gov.rw/",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-examination-authorities-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Rwanda Basic Education Board (REB), Ministry of Education",
        "officialSyllabusUrl": "https://www.reb.gov.rw/",
        "examBoard": "National Examination and School Inspection Authority (NESA)",
        "languageOfInstruction": "Language of instruction must be checked against the current national policy and the school or programme; Rwanda uses Kinyarwanda, English, French and Kiswahili in education contexts",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-and-examination-authorities-identified; subject-and-level-specific-syllabus-review-pending"
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
        "officialSyllabusUrl": "https://www.tie.go.tz/",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Physics": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        "officialSyllabusUrl": "https://www.tie.go.tz/",
        "examBoard": "National Examinations Council of Tanzania (NECTA)",
        "languageOfInstruction": "Kiswahili and English use varies by education level and school context; verify the language policy for the specific programme",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      }
    }
  },
  {
    "country": "Thailand",
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
        "officialSyllabusUrl": "https://ncdc.go.ug/",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Physics": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "National Curriculum Development Centre (NCDC), Ministry of Education and Sports, Uganda",
        "officialSyllabusUrl": "https://ncdc.go.ug/",
        "examBoard": "Uganda National Examinations Board (UNEB)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; confirm the applicable school and programme policy",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; subject-and-level-specific-syllabus-review-pending"
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
        "officialSyllabusUrl": "https://www.edu.gov.zm/?page_id=1142",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; current-cbc-subject-and-level-sequence-review-pending"
      },
      "Chemistry": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/?page_id=1142",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; current-cbc-subject-and-level-sequence-review-pending"
      },
      "Physics": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/?page_id=1142",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; current-cbc-subject-and-level-sequence-review-pending"
      },
      "Mathematics": {
        "officialAuthority": "Directorate of Curriculum Development, Ministry of Education, Zambia",
        "officialSyllabusUrl": "https://www.edu.gov.zm/?page_id=1142",
        "examBoard": "Examinations Council of Zambia (ECZ)",
        "languageOfInstruction": "English is the principal language of instruction in secondary education; verify the language policy for the specific level and school",
        "chapterCount": null,
        "chapters": [],
        "status": "official-curriculum-authority-and-examination-body-identified; current-cbc-subject-and-level-sequence-review-pending"
      }
    }
  },
  {
    "country": "Zimbabwe",
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
