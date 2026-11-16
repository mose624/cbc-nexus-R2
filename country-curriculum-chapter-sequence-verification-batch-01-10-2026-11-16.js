/**
 * CBE Nexus — curriculum chapter-sequence verification register
 * Batch: first 10 countries across source-map batches 01 and 02
 * Audit date: 2026-11-16
 *
 * Important:
 * - "syllabusThemes" are source-defined themes/sections/modules, not invented chapter titles.
 * - chapterCount stays null until the official document provides a count or a complete
 *   sequence is transcribed and normalized into the CBE Nexus chapter model.
 * - "source-verified" is not the same as "chapter-sequence-verified".
 * - Integrated science, community curricula and regional exam syllabuses retain their scope.
 */
export const chapterSequenceVerificationBatch01 = {
  auditDate: "2026-11-16",
  countryCount: 10,
  subjectsReviewedPerCountry: ["Biology", "Chemistry", "Physics", "Mathematics"],
  countrySubjectRecords: 40,
  countries: [
    {
      country: "Kenya",
      sourceMapBatch: 1,
      levelReviewed: "Senior School Grade 10, Pure Sciences pathway, 2025 curriculum designs",
      authority: "Kenya Institute of Curriculum Development (KICD)",
      language: "Use the language specified in each official design and the school's language policy; do not assume one language for every learning context.",
      examPathway: "Competency-Based Education senior-school assessment; confirm assessment instruments with KNEC.",
      officialSources: [
        "https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/",
        "https://drive.google.com/file/d/146apd-v5RRjkag1oqn214pPStKsSIanK/preview",
        "https://drive.google.com/file/d/1R293rOfFoxio7GqwY-mVAolmLDnnHnQ2/preview",
        "https://drive.google.com/file/d/1vBYR4lx-zLtdjAe3n9FCJv7D0wiLhAGc/preview",
        "https://drive.google.com/file/d/1XwcFQpw5J29rryJUjwJwpd1Py5PWDpqu/preview"
      ],
      curriculumStructure: "KICD's Grade 10 Pure Sciences area lists the senior-school design collection. The linked official files are Biology Grade 10, Chemistry Grade 10, Physics Grade 10 and Core Mathematics Grade 10 (July 2025). The web text extraction exposed the file titles but not the PDF contents in this audit.",
      subjects: {
        Biology: {
          officialName: "Biology",
          sourceStatus: "KICD-Grade-10-curriculum-design-content-opened",
          sequenceStatus: "10-official-sub-strands-transcribed; one summary-table discrepancy flagged for source-page review",
          chapterCount: 10,
          chapters: [
            { number: "1.1", title: "Introduction to Biology", strand: "Cell Biology and Biodiversity", suggestedLessons: 6, officialContent: ["Applications of Biology", "Fields of study and careers related to Biology"] },
            { number: "1.2", title: "Specimen Collection and Preservation", strand: "Cell Biology and Biodiversity", suggestedLessons: 14, officialContent: ["Apparatus for collecting specimens", "Collecting, processing and preserving specimens", "Biological specimen collection and preservation project"], verificationNote: "The summary table labels 1.2 Scientific investigations in Biology, but the detailed syllabus pages label 1.2 Specimen Collection and Preservation. Use the detailed teaching pages and flag the inconsistency rather than silently choosing the summary label." },
            { number: "1.3", title: "Cell Structure and Specialization", strand: "Cell Biology and Biodiversity", suggestedLessons: 20, officialContent: ["Microscopy and cell-size estimation", "Plant and animal cell structure", "Specialized cells and adaptations", "Levels of cell organization"] },
            { number: "1.4", title: "Chemicals of Life", strand: "Cell Biology and Biodiversity", suggestedLessons: 24, officialContent: ["Carbohydrates, lipids, proteins and vitamins", "Enzymes and factors affecting enzyme activity", "Water and mineral salts", "Food tests and enzyme investigations"] },
            { number: "2.1", title: "Plant Nutrition", strand: "Anatomy and Physiology of Plants", suggestedLessons: 12, officialContent: ["Plant nutrition"] },
            { number: "2.2", title: "Transport in Plants", strand: "Anatomy and Physiology of Plants", suggestedLessons: 22, officialContent: ["Transport in plants"] },
            { number: "2.3", title: "Gaseous Exchange and Respiration in Plants", strand: "Anatomy and Physiology of Plants", suggestedLessons: 22, officialContent: ["Gaseous exchange", "Respiration"] },
            { number: "3.1", title: "Animal Nutrition", strand: "Anatomy and Physiology of Animals", suggestedLessons: 12, officialContent: ["Animal nutrition"] },
            { number: "3.2", title: "Transport in Animals", strand: "Anatomy and Physiology of Animals", suggestedLessons: 24, officialContent: ["Transport in animals"] },
            { number: "3.3", title: "Gaseous Exchange and Respiration in Animals", strand: "Anatomy and Physiology of Animals", suggestedLessons: 24, officialContent: ["Gaseous exchange", "Respiration"] }
          ],
          suggestedLessonTotal: 180,
          note: "The chapter titles follow the KICD sub-strand structure. CBE Nexus can expand each sub-strand into detailed lessons and sections, but should not split it into extra curriculum chapters without a documented reason."
        },
        Chemistry: {
          officialName: "Chemistry",
          sourceStatus: "KICD-Grade-10-2025-curriculum-design-content-opened",
          sequenceStatus: "7-official-sub-strands-transcribed; Organic-Chemistry-strand-listed-but-detailed-sub-strands-not-yet-extracted",
          chapterCount: 7,
          chapterStatus: "official-sub-strand-sequence-transcribed",
          chapters: [
            { number: "1.1", title: "Introduction to Chemistry", strand: "Inorganic Chemistry", topics: ["Definition and branches of Chemistry", "Careers in Chemistry", "Chemistry in everyday life", "Safe and healthy learning environment"] },
            { number: "1.2", title: "The Atom", strand: "Inorganic Chemistry", topics: ["Atomic structure", "Energy levels and orbitals", "Isotopes and relative atomic mass", "s and p orbital electron arrangements for the first 20 elements"] },
            { number: "1.3", title: "The Periodic Table", strand: "Inorganic Chemistry", topics: ["Periodic table organisation", "Groups and periods", "Element classification", "Using periodic position to understand properties"] },
            { number: "1.4", title: "Chemical Bonding", strand: "Inorganic Chemistry", topics: ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Bonding and properties of substances"] },
            { number: "1.5", title: "Periodicity", strand: "Inorganic Chemistry", topics: ["Periodic trends", "Variation of properties across periods and down groups", "Explaining trends using atomic structure"] },
            { number: "2.1", title: "Acids and Bases", strand: "Physical Chemistry", topics: ["Properties of acids and bases", "Indicators and pH", "Neutralisation", "Safe handling and applications"] },
            { number: "2.2", title: "Introduction to Salts", strand: "Physical Chemistry", topics: ["Types of salts", "Preparation of salts", "Properties and uses of salts", "Relevant practical investigations"] }
          ],
          additionalStrandNote: "The 2025 KICD summary also lists Strand 3.0 Organic Chemistry, but the extracted summary does not expose a numbered sub-strand title. Inspect the detailed section before adding it; do not invent a chapter title.",
          note: "Titles and order follow the 2025 KICD Grade 10 Chemistry summary. Detailed learning outcomes and the Organic Chemistry strand still require further extraction."
        },
        Physics: {
          officialName: "Physics",
          sourceStatus: "KICD-Grade-10-2025-curriculum-design-content-opened",
          sequenceStatus: "13-official-sub-strands-transcribed",
          chapterCount: 13,
          chapterStatus: "official-sub-strand-sequence-transcribed",
          chapters: [
            { number: "1.1", title: "Introduction to Physics", strand: "Mechanics and Thermal Physics", topics: ["Meaning and branches of Physics", "Importance in day-to-day life", "Relationship with other fields", "Career opportunities"] },
            { number: "1.2", title: "Pressure", strand: "Mechanics and Thermal Physics", topics: ["Pressure in solids", "Pressure in liquids", "Atmospheric pressure", "Applications and investigations"] },
            { number: "1.3", title: "Mechanical Properties of Materials", strand: "Mechanics and Thermal Physics", topics: ["Mechanical behaviour of materials", "Elasticity and deformation", "Material properties and practical investigations"] },
            { number: "1.4", title: "Temperature and Thermal Expansion", strand: "Mechanics and Thermal Physics", topics: ["Temperature measurement", "Thermal expansion", "Applications of expansion"] },
            { number: "1.5", title: "Moments and Equilibrium", strand: "Mechanics and Thermal Physics", topics: ["Moment of a force", "Principle of moments", "Conditions for equilibrium", "Practical applications"] },
            { number: "1.6", title: "Energy, Work, Power and Machines", strand: "Mechanics and Thermal Physics", topics: ["Work and energy", "Power", "Mechanical advantage and efficiency", "Simple machines"] },
            { number: "2.1", title: "Properties of Waves", strand: "Waves and Optics", topics: ["Wave characteristics", "Wave types", "Wave speed, frequency and wavelength", "Wave behaviour and applications"] },
            { number: "2.2", title: "Radioactivity and Stability of Isotopes", strand: "Waves and Optics", topics: ["Radioactive emissions", "Nuclear stability", "Radioactive decay", "Applications and safety"] },
            { number: "3.1", title: "Electrostatics", strand: "Electricity and Magnetism", topics: ["Electric charge", "Charging and discharging", "Electrostatic forces", "Applications and safety"] },
            { number: "3.2", title: "Current Electricity", strand: "Electricity and Magnetism", topics: ["Electric current", "Potential difference and resistance", "Electrical circuits", "Electrical measurements and safety"] },
            { number: "3.3", title: "Introduction to Electronics", strand: "Electricity and Magnetism", topics: ["Basic electronic components", "Semiconductor concepts", "Simple electronic circuits", "Applications of electronics"] },
            { number: "4.1", title: "Greenhouse Effect and Climate Change", strand: "Environmental and Space Physics", topics: ["Greenhouse effect", "Greenhouse gases", "Climate change evidence and impacts", "Mitigation and adaptation"] },
            { number: "4.2", title: "Introduction to Space Physics", strand: "Environmental and Space Physics", topics: ["Earth and its place in space", "Solar system and celestial objects", "Basic space science and applications"] }
          ],
          note: "Titles and order follow the 2025 KICD Grade 10 Physics summary. Detailed outcomes and learning experiences still require page-by-page extraction."
        },
        Mathematics: {
          officialName: "Core Mathematics",
          sourceStatus: "KICD-Grade-10-2025-curriculum-design-content-opened",
          sequenceStatus: "9-official-sub-strands-transcribed-from-2025-design",
          chapterCount: 9,
          chapterStatus: "official-sub-strand-sequence-transcribed",
          chapters: [
            { number: "1.1", title: "Real Numbers", strand: "Numbers and Algebra", topics: ["Classification of whole numbers", "Rational and irrational numbers", "Reciprocals of real numbers", "Applications in computation"] },
            { number: "1.2", title: "Indices and Logarithms", strand: "Numbers and Algebra", topics: ["Index notation and laws of indices", "Common logarithms to base 10", "Logarithm tables and calculators", "Applications of indices and logarithms"] },
            { number: "1.3", title: "Quadratic Expressions and Equations 1", strand: "Numbers and Algebra", topics: ["Quadratic expressions", "Quadratic identities", "Factorisation", "Formation and solution of quadratic equations", "Real-life applications"] },
            { number: "2.1", title: "Similarity and Enlargement", strand: "Measurements and Geometry", topics: ["Similar figures", "Scale factors", "Enlargement", "Applications of similarity"] },
            { number: "2.2", title: "Reflection and Congruence", strand: "Measurements and Geometry", topics: ["Reflection transformations", "Congruent figures", "Properties and applications"] },
            { number: "2.3", title: "Rotation", strand: "Measurements and Geometry", topics: ["Rotation about a centre", "Angles and direction of rotation", "Images under rotation"] },
            { number: "2.4", title: "Trigonometry 1", strand: "Measurements and Geometry", topics: ["Right-triangle trigonometric ratios", "Applications to heights and distances", "Problem solving"] },
            { number: "3.1", title: "Statistics I", strand: "Statistics and Probability", topics: ["Collection and organisation of data", "Representation and interpretation", "Statistical measures specified in the detailed design"] },
            { number: "3.2", title: "Probability 1", strand: "Statistics and Probability", topics: ["Basic probability concepts", "Probability of simple events", "Experimental and theoretical probability"] }
          ],
          note: "The 2025 KICD Core Mathematics summary has 9 sub-strands. An earlier June 2024 draft listed additional geometry sub-strands; it is not used as the 2025 sequence."
        },
      status: "Biology 10, Chemistry 7 and Physics 13 KICD sub-strands transcribed; Core Mathematics 9 sub-strands transcribed from the 2025 design. Chemistry Organic Chemistry detailed sub-strands still need extraction."
    },
    {
      country: "Ghana",
      sourceMapBatch: 1,
      levelReviewed: "Senior High School (SHS 1–3), NaCCA secondary curriculum",
      authority: "National Council for Curriculum and Assessment (NaCCA), Ministry of Education",
      language: "English",
      examPathway: "WASSCE; confirm subject-specific examination specifications with WAEC.",
      officialSources: ["https://nacca.gov.gh/secondary-education-curriculum/"],
      curriculumStructure: "NaCCA's official secondary curriculum portal separately lists Biology, Chemistry, Physics and Mathematics curriculum downloads. This confirms subject-level national curriculum presence but the current downloadable PDFs' full strand/sub-strand sequences were not extracted in this pass.",
      subjects: {
        Biology: {
          officialName: "Biology",
          sourceStatus: "NaCCA-SHS-1-to-3-September-2023-curriculum-contents-extracted",
          sequenceStatus: "9-distinct-official-sub-strands-transcribed; year-specific recurrence retained in source document",
          chapterCount: 9,
          chapterStatus: "official-sub-strand-titles-transcribed-from-contents",
          chapters: [
            { number: 1, title: "Biology as the Science of Life", strand: "Exploring Biology in Society", yearOccurrences: [1, 2], sourcePage: 23 },
            { number: 2, title: "Biology and Entrepreneurship", strand: "Exploring Biology in Society", yearOccurrences: [1, 2, 3], sourcePages: [31, 65, 88] },
            { number: 3, title: "Cell Structure and Functions", strand: "Life in the Fundamental Unit", yearOccurrences: [1, 2, 3], sourcePages: [35, 69, 92] },
            { number: 4, title: "Living Organisms", strand: "Diversity of Living Things and Their Environment", yearOccurrences: [1, 2, 3], sourcePages: [38, 72, 102] },
            { number: 5, title: "Ecology", strand: "Diversity of Living Things and Their Environment", yearOccurrences: [1, 2, 3], sourcePages: [44, 76, 105] },
            { number: 6, title: "Diseases and Infections", strand: "Diversity of Living Things and Their Environment", yearOccurrences: [1, 2, 3], sourcePages: [55, 79, 109] },
            { number: 7, title: "Mammalian Systems", strand: "Systems of Life", yearOccurrences: [1, 2, 3], sourcePages: [57, 81, 112] },
            { number: 8, title: "Plant Systems", strand: "Systems of Life", yearOccurrences: [1, 2, 3], sourcePages: [59, 84, 116] },
            { number: 9, title: "Movement of Substances in Living Organisms", strand: "Life in the Fundamental Unit", yearOccurrences: [2], sourcePage: 67 }
          ],
          note: "These are distinct sub-strand titles from the NaCCA SHS 1–3 contents. The same sub-strands recur across years; CBE Nexus should preserve year-specific indicators and not duplicate them as unrelated subjects."
        },
        Chemistry: {
          officialName: "Chemistry",
          sourceStatus: "official-curriculum-listed; official-PDF-link-needs-retrieval",
          sequenceStatus: "chapter-extraction-pending",
          syllabusThemes: [],
          chapterCount: null,
          note: "NaCCA's official portal lists Chemistry, but the linked PDF was not successfully retrieved in this pass. No chapter titles have been guessed."
        },
        Physics: {
          officialName: "Physics",
          sourceStatus: "NaCCA-SHS-1-to-3-September-2023-curriculum-contents-extracted",
          sequenceStatus: "17-distinct-sub-strands-transcribed-from-three-year-contents",
          chapterCount: 17,
          chapterStatus: "official-sub-strand-titles-transcribed-from-contents",
          chapters: [
            { number: 1, title: "Introduction to Physics", strand: "Mechanics and Matter", yearOccurrences: [1, 2, 3] },
            { number: 2, title: "Matter", strand: "Mechanics and Matter", yearOccurrences: [1, 2] },
            { number: 3, title: "Kinematics", strand: "Mechanics and Matter", yearOccurrences: [1, 2, 3] },
            { number: 4, title: "Dynamics", strand: "Mechanics and Matter", yearOccurrences: [1, 2, 3] },
            { number: 5, title: "Heat", strand: "Energy", yearOccurrences: [1, 2, 3] },
            { number: 6, title: "Waves", strand: "Energy", yearOccurrences: [1, 2, 3] },
            { number: 7, title: "Electrostatics", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [1, 2] },
            { number: 8, title: "Magnetostatics", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [1] },
            { number: 9, title: "Analogue Electronics", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [1] },
            { number: 10, title: "Atomic Physics", strand: "Atomic and Nuclear Physics", yearOccurrences: [1, 2, 3] },
            { number: 11, title: "Nuclear Physics", strand: "Atomic and Nuclear Physics", yearOccurrences: [1, 2, 3] },
            { number: 12, title: "Electromagnetism", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [2] },
            { number: 13, title: "Digital Electronics", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [2] },
            { number: 14, title: "Direct Current", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [3] },
            { number: 15, title: "Alternating Current", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [3] },
            { number: 16, title: "Electromagnetic Induction and Applications", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [3] },
            { number: 17, title: "Applications of Electronics", strand: "Electric Field, Magnetic Field and Electronics", yearOccurrences: [3] }
          ],
          note: "Distinct titles consolidated across the SHS 1, SHS 2 and SHS 3 contents. Year placement is retained in yearOccurrences."
        },
        Mathematics: {
          officialName: "Mathematics",
          sourceStatus: "NaCCA-SHS-1-to-3-September-2023-scope-and-sequence-extracted",
          sequenceStatus: "8-official-sub-strands-transcribed",
          chapterCount: 8,
          chapterStatus: "official-sub-strand-titles-transcribed-from-scope-and-sequence",
          chapters: [
            { number: 1, title: "Real Number and Numeration System", strand: "Numbers for Everyday Life", yearOccurrences: [1, 2] },
            { number: 2, title: "Proportional Reasoning", strand: "Numbers for Everyday Life", yearOccurrences: [1, 2, 3] },
            { number: 3, title: "Applications of Expressions, Equations and Inequalities", strand: "Algebraic Thinking", yearOccurrences: [1, 2] },
            { number: 4, title: "Patterns and Relationships", strand: "Algebraic Thinking", yearOccurrences: [1, 2, 3] },
            { number: 5, title: "Spatial Sense", strand: "Geometry Around Us", yearOccurrences: [1, 2, 3] },
            { number: 6, title: "Measurement", strand: "Geometry Around Us", yearOccurrences: [1, 2, 3] },
            { number: 7, title: "Statistical Reasoning and Its Application in Real Life", strand: "Making Sense of and Using Data", yearOccurrences: [1, 2, 3] },
            { number: 8, title: "Chance", strand: "Making Sense of and Using Data", yearOccurrences: [1, 2, 3] }
          ],
          note: "The eight sub-strands are transcribed from NaCCA's SHS 1–3 scope-and-sequence summary. Year-level content standards, learning outcomes and indicators must be retained when generating lessons."
        }
      },
      status: "Biology 9 and Physics 17 distinct sub-strands, Mathematics 8 sub-strands transcribed; Chemistry PDF retrieval and sequence extraction pending"
    },
    {
      country: "Nigeria",
      sourceMapBatch: 1,
      levelReviewed: "Revised Senior Secondary Curriculum, SSS 1–3; October 2025 subject documents",
      authority: "Nigerian Educational Research and Development Council (NERDC)",
      language: "English",
      examPathway: "WAEC/NECO; assessment alignment must be checked against the current revised curriculum.",
      officialSources: [
        "https://www.nerdc.gov.ng/content_manager/new_senior_curriculum_home.html",
        "https://lmis.nerdcportals.com.ng/s1_science",
        "https://lmis.nerdcportals.com.ng/s1_core",
        "https://lmis.nerdcportals.com.ng/s2_science",
        "https://lmis.nerdcportals.com.ng/s2_core",
        "https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=6.pdf"
      ],
      curriculumStructure: "The October 2025 revised Senior Secondary Curriculum is organised by SSS 1, SSS 2 and SSS 3. NERDC's SSS 1 science portal lists Biology, Chemistry and Physics; its core portal lists General Mathematics. SSS 2 portals confirm the same science/core subject groupings. The Biology SSS 1 viewer document is identified as the October 2025 revised curriculum, but its embedded viewer did not expose readable chapter contents in this audit. Do not use older e-Curriculum topics as substitutes for the revised 2025 sequence.",
      subjects: {
        Biology: {
          officialName: "Biology",
          sourceStatus: "October-2025-revised-SSS1-contents-and-focal-competencies-transcribed-from-reproduction",
          sequenceStatus: "20-source-topic-records-reported; 19-normalized-curriculum-themes-captured; primary-NERDC-file-verification-pending",
          chapterCount: null,
          sourceTopicRecordCount: 20,
          syllabusThemes: ["Biology and Scientific Enquiry", "Laboratory Safety, First Aid and Emergency Response", "Biological Laboratory Equipment and Microscopy", "ICT Tools and Ethical Use in Biology", "Biological Concepts and Characteristics of Living Organisms", "Organization of Life and Biochemical Processes", "Cell Structure, Cell Division, Diffusion and Osmosis", "Ecology and Ecological Factors", "Ecosystem Relationships, Food Chains, Food Webs and Biodiversity", "Agricultural Practices and Crop Yield Improvement", "Organic Manure and Soil Quality", "Pollution: Sources, Effects and Control", "Waste Management, Soil Erosion and Deforestation", "Scientific Misconceptions in Biology", "Bioethics and Biological Research", "Roles of Biology in Food Production, Healthcare and Conservation", "Research Collaboration, Project Work and Scientific Communication", "Microorganisms: Identification and Effects", "Human Diseases, Transmission, Prevention and Zoonoses"],
          sourceDocument: "https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=6.pdf",
          secondaryTranscription: "https://smartest.ng/syllabus/nerdc/ss1/biology/",
          note: "SmarTest reports 20 source topic records, while the visible contents/focal-competency list contains repeated headings and 19 normalized theme groups. These are curriculum themes/competencies, not 19 confirmed standalone textbook chapters. Verify the original NERDC PDF before assigning chapter numbers."
        },
        Chemistry: {
          officialName: "Chemistry",
          sourceStatus: "October-2025-NERDC-SSS1-document-contents-transcribed-from-reproduced-copy; official-subject-listing-confirmed",
          sequenceStatus: "18-SSS1-topics-transcribed-from-document-contents; primary-host-PDF-link-still-to-be-verified",
          chapterStatus: "provisional-document-topic-sequence; not-yet-primary-source-verified",
          syllabusThemes: [
            "The chemical world",
            "Chemistry and the environment",
            "The chemistry of life",
            "Chemistry and industry"
          ],
          chapterCount: 18,
          chapters: [
            { number: 1, title: "Introductory Concepts", theme: "The Chemical World", sourcePage: 1 },
            { number: 2, title: "Chemical Industry", theme: "The Chemical World", sourcePage: 2 },
            { number: 3, title: "Branches of Chemistry", theme: "The Chemical World", sourcePage: 3 },
            { number: 4, title: "Standard Separation Techniques", theme: "The Chemical World", sourcePage: 4 },
            { number: 5, title: "Chemical Hazards", theme: "The Chemical World", sourcePage: 5 },
            { number: 6, title: "Laboratory Safety Rules and Guidelines", theme: "The Chemical World", sourcePage: 6 },
            { number: 7, title: "Symbols, Formulae and Equations", theme: "The Chemical World", sourcePage: 7 },
            { number: 8, title: "Elements, Compounds and Mixtures", theme: "The Chemical World", sourcePage: 8 },
            { number: 9, title: "Particulate Nature of Matter", theme: "The Chemical World", sourcePage: 9 },
            { number: 10, title: "Atomic Structure", theme: "The Chemical World", sourcePage: 10 },
            { number: 11, title: "Chemical Combination", theme: "The Chemical World", sourcePage: 11 },
            { number: 12, title: "Chemical Bonds", theme: "The Chemical World", sourcePage: 12 },
            { number: 13, title: "Chemical Equilibrium", theme: "The Chemical World", sourcePage: 13 },
            { number: 14, title: "Gas Laws", theme: "The Chemical World", sourcePage: 14 },
            { number: 15, title: "Acids, Bases and Salts", theme: "The Chemical World", sourcePage: 15 },
            { number: 16, title: "Water", theme: "Chemistry and the Environment", sourcePage: 17 },
            { number: 17, title: "Carbon and its Compounds", theme: "The Chemistry of Life", sourcePage: 18 },
            { number: 18, title: "Entrepreneurship in Chemistry", theme: "Chemistry and Industry", sourcePage: 19 }
          ],
          sourceDocument: "https://www.scribd.com/document/1074176739/Ss-1-Science-Chemistry-2025-Curriculum",
          note: "The reproduced document identifies itself as the NERDC New Revised Senior Secondary School Curriculum, Chemistry SSS 1, October 2025. The 18 topic titles and order are transcribed from its contents page. Treat this as provisional until the corresponding NERDC-hosted PDF is retrieved and checked."
        },
        Physics: {
          officialName: "Physics",
          sourceStatus: "October-2025-revised-SSS1-contents-and-focal-competencies-transcribed-from-reproduction",
          sequenceStatus: "30-source-topic-records-reported; competency themes transcribed; primary-NERDC-file-verification-pending",
          chapterCount: null,
          sourceTopicRecordCount: 30,
          syllabusThemes: ["Interaction of Matter, Space and Time", "Physical Quantities, Fundamental and Derived Units", "Measurement of Length, Mass, Time and Other Quantities", "Position, Distance and Displacement", "Electric Charge: Production, Detection and Storage", "Motion, Forces and Friction", "Speed, Velocity and Distance-Time Graphs", "Acceleration and Velocity-Time Graphs", "Scalars, Vectors and Vector Diagrams", "Surface Tension, Viscosity and Fluid Behaviour", "Atomic Structure and Particulate Nature of Matter", "Work, Energy and Power", "Conservation Principles and Energy Transformation", "Temperature, Heat Transfer and Thermal Expansion", "Gravitational Fields and Acceleration Due to Gravity", "Electric Fields and Electric Field Lines", "Simple Electric Circuits, Current, Voltage and Ohm's Law", "Magnetic Fields, Magnets and Electromagnets", "Electromagnetic Induction: Faraday's and Lenz's Laws", "Construction of Simple Measuring Instruments", "Solar Energy Conversion and Applications", "Solar Heaters, Solar Panels and Heat Collectors", "Sensors and Simple Light-Detection Circuits", "Experimental Data Processing with Spreadsheet Software", "Experimental Data Analysis with Artificial Intelligence Tools", "Physics Laboratory Safety and Emergency Procedures", "Laboratory Equipment Organization and Maintenance", "Biogas Production and Applications of Physics", "Interdisciplinary Links between Physics and Environmental Science", "Interdisciplinary Links between Physics and Chemistry"],
          secondaryTranscription: "https://smartest.ng/syllabus/nerdc/ss1/physics/",
          note: "SmarTest reports 30 source topic records but its visible contents list contains repeated competency labels and 40 numbered entries. The 30 themes above are normalized from the page's focal competencies and are not asserted to be a one-to-one copy of the original topic numbering. Verify against the primary NERDC PDF before assigning chapter numbers."
        },
        Mathematics: {
          officialName: "General Mathematics",
          sourceStatus: "October-2025-revised-SSS1-contents-and-focal-competencies-transcribed-from-reproduction",
          sequenceStatus: "12-source-topic-records-reported; 12 curriculum topic headings normalized; primary-NERDC-file-verification-pending",
          chapterCount: null,
          sourceTopicRecordCount: 12,
          syllabusThemes: ["Number and Numeration: Number Bases", "Indices and Laws of Indices", "Trigonometric Ratios of Special Angles", "Logarithms and Antilogarithms", "ICT, Binary Numbers and Basic Coding", "Modular Arithmetic", "Sets and Set Operations", "Logical Reasoning and Compound Statements", "Variation and Change of Subject of Formula", "Quadratic Expressions, Equations and Graphs", "Geometry: Circles, Sectors, Solids and Compound Shapes", "Statistics: Data Collection, Tables, Graphs and Interpretation"],
          secondaryTranscription: "https://smartest.ng/syllabus/nerdc/ss1/mathematics/",
          note: "The 12 source topic records are normalized from the reproduced October 2025 NERDC curriculum. Competency headings are not automatically textbook chapters; check the primary NERDC document before assigning chapter numbers."
        }
      },
      status: "October-2025 revised curriculum subject listings verified for SSS1 and SSS2; Chemistry has 18 provisional entries pending primary-source reconciliation; Biology (20 source records), Physics (30 source records) and General Mathematics (12 source records) themes transcribed from reproduced curriculum pages; all three require primary NERDC PDF verification before chapter numbering"
    },
    {
      country: "Uganda",
      sourceMapBatch: 1,
      levelReviewed: "Lower Secondary S1–S4; Advanced Secondary kept as a separate future mapping",
      authority: "National Curriculum Development Centre (NCDC)",
      language: "English at secondary level, subject to official syllabus and school provisions.",
      examPathway: "Uganda Certificate of Education (UCE); do not merge with A-Level.",
      officialSources: ["https://ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf"],
      curriculumStructure: "The NCDC Lower Secondary Curriculum Framework confirms Mathematics, Biology, Chemistry and Physics in the subject menu. S1–S2 have 11 compulsory subjects plus one elective; S3–S4 have a narrower compulsory core and electives. The framework is not itself a complete chapter list for the four subjects.",
      subjects: {
        Biology: { officialName: "Biology", sourceStatus: "official-subject-presence-verified", sequenceStatus: "subject-syllabus-topic-transcription-pending", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Chemistry", sourceStatus: "official-subject-presence-verified", sequenceStatus: "subject-syllabus-topic-transcription-pending", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Physics", sourceStatus: "official-subject-presence-verified", sequenceStatus: "subject-syllabus-topic-transcription-pending", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Mathematics", sourceStatus: "official-subject-presence-verified", sequenceStatus: "subject-syllabus-topic-transcription-pending", syllabusThemes: [], chapterCount: null }
      },
      lowerSecondaryS1S4: {
        authority: "National Curriculum Development Centre (NCDC), Uganda",
        curriculumYear: 2019,
        sourceStatus: "official-NCDC-four-year-syllabus-programme-planners-transcribed",
        note: "Entries preserve the official Senior 1–4 programme-planner order. These are syllabus topics, not claims about textbook chapter numbering. The Biology planner repeats Classification in S1 across two terms; the repeated row is preserved.",
        officialSources: {
          Biology: "https://ncdc.go.ug/wp-content/uploads/2024/02/Biology_Syllabus_compressed.pdf",
          Chemistry: "https://ncdc.go.ug/wp-content/uploads/2024/03/CHEMISTRY-SYLLABUS_corrected_web-file.pdf",
          Physics: "https://ncdc.go.ug/wp-content/uploads/2024/02/PHYSICS_Syllabus_compressed.pdf",
          Mathematics: "https://ncdc.go.ug/wp-content/uploads/2024/02/Mathematics_Syllabus_compressed.pdf"
        },
        subjects: {
          Biology: {
            officialName: "Biology",
            sequenceStatus: "official-NCDC-S1-S4-programme-planner-transcribed",
            sourceListedTopicRows: 31,
            chapterCount: null,
            topicsByLevel: {
              S1: ["Introduction to Biology", "Cells", "Classification", "Classification", "Insects", "Flowering plants"],
              S2: ["Physical and chemical properties of soil", "Soil erosion and conservation; causes, effects and prevention", "Nutrition types and Nutrient compounds", "Nutrition in green plants", "Nutrition in mammals", "Transport in plants", "Transport in animals"],
              S3: ["Gaseous exchange", "Aerobic respiration and anaerobic respiration", "Excretion in animals", "Chemical coordination in humans", "Nervous coordination in humans", "Receptor organs in man", "Locomotion in mammals", "Growth in plants and animals", "Development in plants and animals"],
              S4: ["Asexual reproduction in plants (vegetative reproduction)", "Sexual reproduction in plants", "Sexual reproduction in humans", "Inheritance", "Variation and Selection", "Concept of ecology", "Food chains and food webs", "Associations in biological communities", "Humans and the natural environment"]
            }
          },
          Chemistry: {
            officialName: "Chemistry",
            sequenceStatus: "official-NCDC-S1-S4-programme-planner-transcribed",
            sourceListedTopicRows: 26,
            chapterCount: null,
            topicsByLevel: {
              S1: ["Chemistry and Society", "Experimental Chemistry", "States and changes of states of matter", "Using materials", "Temporary and permanent changes", "Mixtures, Elements, and compounds", "Air", "Water", "Rocks and Minerals"],
              S2: ["Acids and alkalis", "Salts", "The Periodic Table", "Carbon in the Environment", "The Reactivity Series"],
              S3: ["Carbon in Life", "Structures and Bonds", "Formulae, Stoichiometry and mole concept", "Properties and Structures of Substances", "Fossil Fuels", "Chemical reactions"],
              S4: ["Oxidation and Reduction Reactions", "Industrial Processes", "Trends in the Periodic Table", "Energy Changes during Chemical Reactions", "Chemical for Consumers", "Nuclear Processes"]
            }
          },
          Physics: {
            officialName: "Physics",
            sequenceStatus: "official-NCDC-S1-S4-programme-planner-transcribed",
            sourceListedTopicRows: 31,
            chapterCount: null,
            topicsByLevel: {
              S1: ["Introduction to Physics", "Measurements in Physics", "States of matter", "Effects of forces", "Temperature measurements", "Heat transfer", "Expansion of solids, liquids, and gases", "Nature of light; reflection of light at plane surfaces"],
              S2: ["Work, energy, and power", "Turning effect of forces, centre of gravity, and stability", "Pressure in solids and fluids", "Mechanical properties of Materials and Hooke’s law", "Reflection of light at curved surfaces", "Magnets and magnetic fields", "Electrostatics", "The solar system"],
              S3: ["Linear and non-linear motion", "Refraction, dispersion, and colour", "Lenses and optical instruments", "General wave properties", "Sound waves", "Heat quantities and vapours", "Stars and galaxies", "Satellites and communication"],
              S4: ["Introduction to current electricity", "Voltage, resistance and Ohm’s law", "Electromagnetic effects", "Electric energy distribution and consumption", "Atomic models", "Nuclear processes", "Digital electronics"]
            }
          },
          Mathematics: {
            officialName: "Mathematics",
            sequenceStatus: "official-NCDC-S1-S4-programme-planner-transcribed",
            sourceListedTopicRows: 46,
            chapterCount: null,
            topicsByLevel: {
              S1: ["Number Bases", "Working with Integers", "Fractions, Percentages and Decimals", "Rectangular Cartesian Coordinates in 2-Dimensions", "Geometric Constructions Skills", "Sequence and patterns", "Bearings", "General and angle properties of geometric figures", "Data collection and presentation", "Reflection", "Equation of lines and curves", "Algebra 1", "Business arithmetic", "Time and time tables"],
              S2: ["Mappings and relations", "Vectors and translation", "Graphs", "Numerical concept 1 (indices and logarithms)", "Inequalities and regions", "Algebra 2", "Similarities and enlargement", "Circle", "Rotation", "Length and area properties of two-dimensional geometrical figures", "Nets, areas and volumes of solids", "Numerical concept 2 (indices, logarithms and surds)", "Set theory"],
              S3: ["Equation of a straight line", "Trigonometry 1", "Data collection /display", "Vectors", "Ratios and proportions", "Business mathematics", "Trigonometry 2", "Matrices", "Matrix transformations", "Simultaneous equations", "Probability", "Quadratic equations", "Circle properties"],
              S4: ["Composite functions", "Equations and inequalities", "Linear programming", "Loci", "Lines and planes in three dimensions", "Revision"]
            }
          }
        }
      },
      advancedSecondaryCurriculum2025: {
        authority: "National Curriculum Development Centre (NCDC), Ministry of Education and Sports",
        implementationNote: "Separate Senior Five and Senior Six Advanced Secondary curriculum introduced from 2025. These A-Level syllabuses are recorded separately from the existing Lower Secondary S1-S4/UCE records; Principal Mathematics is not the same subject as Lower Secondary Mathematics.",
        officialSources: [
          "https://ncdc.go.ug/wp-content/uploads/2025/03/Biology.pdf",
          "https://ncdc.go.ug/wp-content/uploads/2025/03/CHEMISTRY.pdf",
          "https://ncdc.go.ug/wp-content/uploads/2025/03/Physics.pdf",
          "https://ncdc.go.ug/wp-content/uploads/2025/03/PRINCIPAL-MATHS.pdf"
        ],
        subjects: {
          Biology: { officialName: "Biology", level: "Senior Five-Six", sequenceStatus: "official-NCDC-2025-contents-transcribed", chapterCount: 9, chapters: ["Cell Biology", "Nutrition", "Transport", "Respiration", "Homeostasis", "Coordination", "Inheritance and Evolution", "Growth and Development", "Ecology"] },
          Chemistry: { officialName: "Chemistry", level: "Senior Five-Six", sequenceStatus: "official-NCDC-2025-contents-transcribed", chapterCount: 13, chapters: ["Moles and Equations", "Atomic and Electronic Structure", "Bonding and Structure", "Periodicity I", "Thermochemistry", "Organic Chemistry I", "Equilibria I", "Equilibria II", "Organic Chemistry II", "Electrochemistry", "Periodicity II", "Organic Chemistry III", "Reaction Kinetics"] },
          Physics: { officialName: "Physics", level: "Senior Five-Six", sequenceStatus: "official-NCDC-2025-contents-transcribed", chapterCount: 33, chapters: ["Measurement and Dimensions of Physical Quantities", "Statics", "Linear Motion", "Motion Under Gravity", "Work, Energy and Power", "Solid Friction", "Fluid Mechanics", "Mechanical Properties of Matter", "Thermometry", "Heat Quantities", "Transfer of Heat", "Behaviour of Gases", "Thermodynamics", "Reflection of Light", "Refraction of Light", "Optical Instruments", "Electrostatics", "Capacitors", "Digital Electronics", "Circular Motion", "Simple Harmonic Motion", "Gravitation", "Progressive Waves", "Stationary Waves", "Sound Waves", "Current Electricity", "Magnetism in Matter", "Magnetic Effect of an Electric Current", "Electromagnetic Induction", "A.C. Circuits", "Atomic Particles", "Quantum Theory", "Nuclear Processes"] },
          PrincipalMathematics: { officialName: "Principal Mathematics", level: "Senior Five-Six", sequenceStatus: "official-NCDC-2025-contents-transcribed", chapterCount: 27, chapters: ["Numerical Concepts", "Equations and Inequalities", "Coordinate Geometry 1", "Partial Fractions", "Trigonometry", "Descriptive Statistics", "Scatter Diagrams and Correlations", "Dynamics 1", "Probability Theory", "Differentiation 1", "Integration 1", "Permutations and Combinations", "Series", "Random Variables", "Probability Distributions", "Error Analysis", "Vectors", "Differentiation 2", "Integration 2", "Dynamics 2", "Trapezium Rule", "Sampling Distribution", "Iterative Methods", "Coordinate Geometry 2", "Complex Numbers", "Differential Equations", "Flow Charts"] }
        }
      },
      status: "Lower Secondary framework and subject presence verified; 2025 Advanced Secondary S5-S6 official chapter sequences transcribed for Biology (9), Chemistry (13), Physics (33) and Principal Mathematics (27); Lower Secondary S1-S4 subject chapter sequences still pending"
    },
    {
      country: "Tanzania",
      sourceMapBatch: 1,
      levelReviewed: "Ordinary Secondary Education Forms I–IV, 2023 curriculum; Forms V–VI separate",
      authority: "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
      language: "English is the language of teaching and learning in secondary education under the 2023 policy direction; subject-language requirements must still be checked.",
      examPathway: "Certificate of Secondary Education Examination (CSEE); syllabus-specific assessment.",
      officialSources: [
        "https://www.tie.go.tz/uploads/documents/en-1726825742-CURRICULUM%20FOR%20SECONDARY%20EDUCATION%20FORM%20I-IV.pdf",
        "https://www.tie.go.tz/uploads/files/BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf",
        "https://www.tie.go.tz/uploads/documents/sw-1727192894-CHEMISTRY%20O%27LEVEL%20EDUCATION%20FINAL.pdf",
        "https://www.tie.go.tz/uploads/documents/sw-1727257838-PHYSICS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION%20FINAL.pdf",
        "https://www.tie.go.tz/uploads/documents/sw-1727256902-MATHEMATICS%20SYLLABUS%20-%20O%20level%20final.pdf",
        "https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics?page=1",
        "https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics?page=2",
        "https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics?page=3"
      ],
      correctedFramework2026: {
        authority: "Tanzania Institute of Education (TIE), Ministry of Education, Science and Technology",
        source: "https://www.tie.go.tz/uploads/documents/sw-1770991250-CURRICULUM%20FOR%20SECONDARY%20EDUCATION%20FORM%20I-IV%20-CORRECTED%20%20FEB%202026.pdf",
        sourceStatus: "official-corrected-February-2026-curriculum-framework-opened-and-reviewed",
        note: "The PDF is a corrected February 2026 version of the 2023 Form I-IV curriculum framework; its approval certificate identifies the original 9 August 2023 approval. It is a framework with main/specific competences, not a replacement subject syllabus with a Form-by-Form chapter sequence.",
        verifiedCompetences: {
          Biology: ["11.1 Master concepts, principles and processes of Biology; specific competence covers physiological, anatomical and ecological processes of living organisms (the PDF displays a likely numbering typo '14.4.1')", "11.2 Communicate using scientific biological terminology", "11.3 Conduct biological investigations, present results and carry out a biological project"],
          Chemistry: ["12.1 Master concepts, theories and principles; understand periodic trends in physical and chemical properties of elements", "12.2 Use IUPAC nomenclature, chemical symbols, formulae and equations", "12.3 Conduct Chemistry experiments", "12.4 Understand principles of metal extraction", "12.5 Conduct a Chemistry project"],
          Physics: ["13.1 Apply Physics concepts, theories, principles, terminology, measurements and symbols; use mathematics to explain physical phenomena", "13.2 Conduct Physics experiments and analyse, present and report data", "13.3 Evaluate and use physical information, collect and relate data, and carry out a Physics project"],
          Mathematics: ["15.1 Use numerical skills, ratios, profit and loss, rates and variation", "15.2 Apply geometry, approximations, relations, functions, algebra, matrices, sets, sequences and series", "15.3 Apply coordinate geometry, trigonometry, circles, vectors, probability and statistics"]
        },
        subjectStatus: "framework-competences-verified; these competence statements must not be counted as chapters or assigned to Forms without the subject syllabus"
      },
      syllabusSequenceAudit: {
        status: "All four Tanzania Biology, Chemistry, Physics and Mathematics Form I-IV detailed syllabus tables reviewed and normalized; normalized themes are not official chapter counts",
        officialDocuments: {
          Biology: "https://www.tie.go.tz/uploads/documents/sw-1727192422-BIOLOGY%20SYLLABUS%20ORDINARY%20SECONDARY%20FINAL%20.pdf",
          Chemistry: "https://www.tie.go.tz/uploads/documents/sw-1727192894-CHEMISTRY%20O%27LEVEL%20EDUCATION%20FINAL.pdf",
          Physics: "https://www.tie.go.tz/uploads/documents/sw-1727257838-PHYSICS%20FOR%20ORDINARY%20SECONDARY%20EDUCATION%20FINAL.pdf",
          Mathematics: "https://www.tie.go.tz/uploads/documents/sw-1727256902-MATHEMATICS%20SYLLABUS%20-%20O%20level%20final.pdf"
        },
        confirmedTableOfContents: {
          Biology: {
          officialName: "Biology",
          sourceStatus: "TIE-2023-Form-I-IV-official-syllabus-opened-and-four-form-tables-reviewed",
          sequenceStatus: "Form-I-IV principal learning-content themes reconciled; practical investigation activities recorded separately from conceptual themes",
          sourceListedTopicRows: null,
          chapterCount: null,
          officialTablePages: { FormI: 9, FormII: 17, FormIII: 26, FormIV: 31 },
          topicsByForm: {
            FormI: ["Biology: meaning, branches, terminology, importance and links to other disciplines", "Cell biology: cell meaning, types, structures and functions", "Plant nutrition: leaf structure, photosynthesis and mineral requirements", "Classification: systems, importance and scientific naming", "Major groups of organisms: Monera, Protista, Fungi, Plantae, Animalia and viruses", "Biological investigation foundations: observation, measurement and experimentation", "Microscopic observation of plant and animal cells", "Investigation of plant nutrition and photosynthesis-related processes"],
            FormII: ["Nutrition in humans and ruminants: nutrients, digestion, deficiency and digestive disorders", "Transport in flowering plants: vascular tissues, water and mineral uptake, movement and transpiration", "Transport in humans: circulatory system and pulse-related processes", "Respiration and gaseous exchange in living organisms, including plants", "Practical investigations: food tests, transport in plants and pulse-rate experiments"],
            FormIII: ["Coordination in plants and animals: tropic responses, nervous coordination, sense organs and endocrine control", "Excretion in humans: excretory organs, products and urinary system", "Regulation in humans: temperature, blood glucose and osmoregulation", "Biological investigations of nervous coordination and plant tropic responses", "Biological project and investigation reporting"],
            FormIV: ["Reproduction in plants: asexual and sexual reproduction, pollination and fertilisation", "Human reproduction: reproductive systems, fertilisation, pregnancy and childbirth", "Growth in mammals and flowering plants: mitosis, developmental stages and seed germination", "Reproductive health themes appearing in syllabus activities, including family planning, contraception and reproductive-system disorders"]
          },
          reconciliationNotes: [
            "Form II includes practical investigation activities in addition to conceptual topics; these are recorded as practical work, not separate textbook chapters.",
            "Form III includes investigation work on nervous coordination and plant tropic responses; the earlier short summary omitted these practical strands.",
            "Form IV covers reproduction in plants and humans and growth in mammals and flowering plants; family planning and contraception appear within human-reproduction learning activities.",
            "The official syllabus presents learning content in competency matrices; normalized themes are not an official TIE chapter count."
          ]
        },
        Chemistry: {
          officialName: "Chemistry",
          sourceStatus: "TIE-2023-Form-I-IV-official-syllabus-opened-and-four-form-tables-reviewed",
          sequenceStatus: "Form-I-IV principal learning-content themes reconciled against official detailed tables; metal compounds and iron extraction correctly assigned to Form III; normalized themes are not official textbook chapter titles",
          sourceListedTopicRows: null,
          chapterCount: null,
          officialTablePages: { FormI: 9, FormII: 18, FormIII: 30, FormIV: 45 },
          topicsByForm: {
            FormI: ["Chemistry: meaning, branches, applications and links with other disciplines", "Chemistry in society and in Tanzanian industry, health, mining and agriculture", "Matter: physical and chemical changes and changes of state", "Chemical elements, symbols, compounds and mixtures", "Solutions and separation of mixtures", "Comparing properties of compounds with those of their constituent elements", "Periodic table foundations: first 20 elements, metals and non-metals", "Chemistry laboratory skills: apparatus, laboratory rules, hazard signs, safety, first aid, fire classes and firefighting"],
            FormII: ["Modern atomic structure: Dalton's model, subatomic particles and atomic structure models", "Electronic arrangements of atoms in shells", "Atomic number, mass number, protons and neutrons", "Chemical formulae and nomenclature: valency, oxidation states, radicals and IUPAC naming of binary inorganic compounds", "Empirical and molecular formulae and percentage composition", "Chemical bonding: covalent and electrovalent (ionic) bonding", "Acids, bases and indicators: properties, reactions and everyday applications", "Salts: preparation, properties and uses", "Mole concept and molar quantities: relative atomic/molecular mass and calculations"],
            FormIII: ["Mole calculations and Avogadro's law", "Volumetric analysis: standard-solution preparation, titration principles and quantitative calculations", "Applications of volumetric analysis in food, drinks, medicine and agriculture", "Ionic theory and electrolysis: ions, mechanisms and Faraday-related laws", "Applications of electrolysis in electroplating, purification and corrosion inhibition", "Preparation and properties of selected compounds of metals (oxides, hydroxides, carbonates, hydrogen carbonates, nitrates, chlorides and sulphates)", "Preparation and properties of non-metal compounds and gases, including oxidising and displacement reactions", "Preparation of sulphuric acid from sulphur dioxide", "Extraction of iron from its ore: ores, stages and methods"],
            FormIV: ["Qualitative analysis: preliminary tests, tests in solution and confirmatory tests for salts", "Organic Chemistry foundations: organic compounds, aliphatic hydrocarbons and alcohols", "Organic structures, formulae and IUPAC naming of hydrocarbons and alcohols", "Chemistry practical investigations: qualitative tests, titration, electrolysis, compound preparation and experimental set-up design", "Chemistry research project: investigate water pollution and purification, rusting, fire, pesticides, acid/chemical waste management and related local challenges"]
          },
          reconciliationNotes: [
            "The previous provisional map placed mole concept and quantitative calculations too early: the detailed syllabus places the mole and molar quantities at the end of Form II and develops Avogadro's law and volumetric analysis in Form III.",
            "The earlier provisional map misplaced metal compounds and metal extraction in Form IV. The detailed table places metal-compound preparation/properties and iron extraction in Form III; Form IV focuses on qualitative analysis, organic chemistry (hydrocarbons and alcohols), their naming/reactions/preparation, and completion of the Form III project.",
            "Laboratory safety and foundational practical skills belong in Form I; practical investigation activities are integrated across Forms and should not be counted as separate chapters.",
            "The official syllabus is a seven-column competency and learning-activity matrix. These concise normalized themes preserve its Form placement without inventing official chapter counts."
          ]
        },
        Physics: {
          officialName: "Physics",
          sourceStatus: "TIE-2023-Form-I-IV-official-syllabus-opened-and-four-form-tables-reviewed",
          sequenceStatus: "Form-I-IV learning-content themes reconciled against official detailed tables; Form II/III/IV placement corrections applied; normalized themes are not official textbook chapter titles",
          sourceListedTopicRows: null,
          chapterCount: null,
          officialTablePages: { FormI: 9, FormII: 25, FormIII: 37, FormIV: 46 },
          topicsByForm: {
            FormI: ["Physics: meaning, branches, applications and connections with other disciplines", "Physical quantities: fundamental and derived quantities and SI units", "Linear motion: distance, displacement, speed, velocity and acceleration", "Force and its applications", "Density, pressure, sinking and floating", "Work, power and energy", "Mechanical properties of matter and their relation to force and energy", "Practical measurement, investigation and development of simple prototype devices using Form I concepts"],
            FormII: ["Light: sources, propagation and transmission, image formation, colours and optical instruments", "Magnetism: magnetisation, demagnetisation and magnetic fields", "Static electricity: detection and types of charge, materials, capacitors, charge distribution and lightning conductors", "Current electricity: electromotive force, potential difference, resistance, effects and laws of current, and domestic electrical installations", "Mathematical relationships applied to light and current electricity", "Practical experiments and data processing for light, magnetism, static electricity and current electricity, including spreadsheet use and graph-based analysis", "Physics project: develop prototype devices using concepts from light, magnetism and electricity"],
            FormIII: ["Waves and laws of motion: waves, Newton's laws of motion and linear momentum", "Equilibrium: moment of force, centre of gravity and types of equilibrium", "Friction: types and laws of friction", "Simple machines: levers, pulleys, inclined planes, screw jacks, wheel and axle, and hydraulic press", "Heat: temperature measurement, thermal expansion, thermal energy and heat transfer", "Thermal measurements: measurement of thermal energy, vapour and humidity in relation to air temperature", "Scientific investigation, data analysis and development of the Physics research project"],
            FormIV: ["Physics of the atom: atomic and nuclear structure, radioactivity, nuclear radiations, nuclear processes and thermionic emission", "Electronics: semiconductors, diodes, transistors and amplifiers", "Renewable energy sources and applications", "Analyse and interpret experimental data related to atomic physics, electronics and renewable energy", "Complete and submit the research-project report started in Form III"]
          },
          reconciliationNotes: [
            "The earlier map incorrectly assigned waves and Newton's laws to Form II. The official detailed table places them at the beginning of Form III, alongside linear momentum.",
            "Form II is the light, magnetism, static electricity and current electricity sequence. Its mathematics, experiments, data processing and prototype development are attached learning activities/competences, not additional theory chapters.",
            "Heat, thermal expansion, heat transfer, vapour and humidity are in the Form III table, not Form IV. This was corrected.",
            "Form IV covers physics of the atom, electronics and renewable energy, plus analysis of experimental data and submission of the project report started in Form III.",
            "The syllabus is organized as competency and learning-activity matrices. Normalized themes preserve the official Form placement but do not assert an official textbook chapter count."
          ]
        },
        Mathematics: {
          officialName: "Mathematics",
          sourceStatus: "TIE-2023-Form-I-IV-official-syllabus-opened-and-all-four-form-tables-reviewed",
          sequenceStatus: "Form-I-IV learning-content themes reconciled to official detailed tables; concise normalized summaries, not an asserted textbook chapter count",
          sourceListedTopicRows: null,
          chapterCount: null,
          officialTablePages: { FormI: 8, FormII: 19, FormIII: 29, FormIV: 36 },
          topicsByForm: {
            FormI: ["Mathematics concepts, branches, applications and links to other disciplines", "Real numbers: rational, irrational and real-number representation", "Fractions, decimals, recurring decimals and number-line representation", "Ratios and proportions", "Approximations: rounding, significant figures, decimal places, estimation and measurement", "Algebraic expressions and equations; translating word problems into algebra", "Simultaneous linear equations in two unknowns", "Linear inequalities in one unknown", "Coordinate geometry: gradient, straight-line equations and graphs of linear equations"],
            FormII: ["Rates and variations", "Geometry: similarity and congruence of figures and triangles", "Congruent-triangle postulates, proofs and theorems", "Algebra: binary operations, quadratic expressions and equations, radicals, exponents and logarithms", "Sets: subsets, universal, equal, empty, finite, infinite, equivalent and disjoint sets", "Set operations, cardinality and Venn diagrams", "Trigonometric ratios and special angles", "Angles of elevation and depression"],
            FormIII: ["Relations and functions and their graphical representation", "Linear programming: constraints, objective functions and optimal solutions", "Sequences and series: arithmetic and geometric progressions, general terms and sums", "Arithmetic mean and geometric mean", "Compound interest and its applications", "Circle geometry: angle properties, circle theorems, tangents, chords and radians"],
            FormIV: ["Matrices: operations, determinants, inverses and transformations of 2×2 matrices", "Solving simultaneous equations using matrix inversion and Cramer's rule", "Coordinate geometry: midpoint, distance between points, parallel and perpendicular lines", "Sine and cosine rules for distances and angles of elevation", "Compound-angle identities and applications", "Vectors: position and displacement, magnitude, direction, addition, subtraction and scalar multiplication", "Probability of events, mutually exclusive and dependent events, combined events and tree diagrams", "Statistics: frequency distributions, measures of central tendency, histograms, frequency polygons and cumulative frequency curves (ogives)"]
          },
          reconciliationNotes: [
            "The earlier provisional grouping placed some themes in the wrong Forms: quadratic algebra, sets and elementary trigonometry are in the Form II table; relations/functions and linear programming are in Form III; matrices, coordinate geometry applications, sine/cosine rules, compound angles, vectors, probability and statistical graphs are in Form IV.",
            "The syllabus has detailed learning-content activities within competency matrices; the normalized themes above are not a claim that TIE labels each theme as a separate textbook chapter.",
            "The main competence framework broadly aligns with the four Form tables, but framework competence labels must not be mistaken for the detailed teaching sequence."
          ]
        }
      },
      status: "All four official TIE 2023 subject syllabuses opened; Biology, Chemistry, Physics and Mathematics Form I-IV learning-content themes reconciled against detailed tables; no official textbook chapter counts inferred"
    },
    {
      country: "Albania",
      sourceMapBatch: 2,
      levelReviewed: "Upper Secondary Grade X, 2026 updated language-oriented profile (foreign-languages direction); Mathematics programme covers Grades X–XI",
      authority: "Agency for Quality Assurance in Pre-University Education (ASCAP)",
      language: "Albanian; profile and minority-language provisions must be recorded.",
      examPathway: "National upper-secondary assessment and Matura; verify subject-specific requirements.",
      officialSources: [
        "https://www.ascap.edu.al/kurrikula-e-perditesuar-2025/",
        "https://www.ascap.edu.al/wp-content/uploads/2026/09/BIOLOGJI-AML-orientuar-gjuhesor-kl-10.pdf",
        "https://www.ascap.edu.al/wp-content/uploads/2026/09/Kimi-AML-orientuar-gjuhesor-kl-10.pdf",
        "https://www.ascap.edu.al/wp-content/uploads/2026/09/FIZIKA-AML-orientuar-gjuhesor-kl-10.pdf",
        "https://www.ascap.edu.al/wp-content/uploads/2026/09/Matematike-AML-orientuar-gjuhesor-kl-1011.pdf"
      ],
      curriculumStructure: "The four official ASCAP 2026 updated programmes for the language-oriented upper-secondary foreign-languages direction were opened. Biology, Chemistry and Physics are Grade X programmes; Mathematics covers Grades X–XI. These are profile-specific national programmes, not a universal chapter order for every Albanian upper-secondary profile. ASCAP states that themes and learning outcomes may be arranged into chapters/teaching units by implementers; CBE Nexus must not treat every thematic heading as an official textbook chapter. The Physics programme explicitly references alignment with English-curriculum standards. Practical investigations and learning outcomes must be retained as curriculum requirements, not counted as separate theory chapters."
      subjects: {
        Biology: { officialName: "Biologji", sourceStatus: "ASCAP-2026-updated-language-oriented-Grade-X-programme-opened", sequenceStatus: "two-official-content-themes-and-learning-content-reviewed; detailed outcome rows still need full extraction", syllabusThemes: ["Structure and functioning of living organisms: plant and animal cells; prokaryotic and eukaryotic cells; cell transport (diffusion, osmosis, active transport); cell division and differentiation; enzymes; aerobic and anaerobic respiration; biological molecules; human nervous coordination and organ systems", "Heredity and evolution: genetic material and inheritance; evolution"], chapterCount: null, officialPages: { contents: 2, contentStarts: 19, themes: [19, 24] }, note: "The official programme assigns 56 of 72 annual hours to structure/function and 16 to heredity/evolution. ASCAP explicitly says implementers arrange knowledge, skills and hours into logically ordered chapters/teaching units; these themes are not official chapter titles." },
        Chemistry: { officialName: "Kimi", sourceStatus: "ASCAP-2026-updated-language-oriented-Grade-X-programme-opened", sequenceStatus: "three-official-content-themes-and-detailed-principles-content-reviewed; further topic-row extraction pending", syllabusThemes: ["Principles of Chemistry: states and changes of matter; purity and separation of mixtures (filtration, crystallisation, distillation, chromatography); atomic structure; mole and stoichiometry; electrolysis; chemical reactions and equilibrium; acids, bases and salts", "Inorganic Chemistry", "Introduction to Organic Chemistry"], chapterCount: null, officialPages: { contents: 2, themes: [22, 33, 36] }, annualHours: { principles: 36, inorganic: 22, organicIntroduction: 14, total: 72 }, note: "These are thematic units. The programme also requires safe experimental planning, observation, measurement, data analysis and evaluation; practical work should be mapped into the relevant learning units." },
        Physics: { officialName: "Fizikë", sourceStatus: "ASCAP-2026-updated-language-oriented-Grade-X-programme-opened", sequenceStatus: "six-official-content-themes-verified; detailed topic rows being normalized", syllabusThemes: ["Motion, forces and energy: physical quantities and SI measurement; kinematics; forces and Newtonian mechanics; work and energy", "Thermal physics / thermodynamics", "Electricity, magnetism and electromagnetic induction", "Waves", "Atomic, nuclear and elementary-particle physics", "Space physics"], chapterCount: null, officialPages: { contents: 2, themes: [24, 37, 40, 50, 57, 61] }, annualHours: { measurement: 2, motionForcesEnergy: 22, thermalPhysics: 8, electricityMagnetismInduction: 20, waves: 15, atomicNuclearParticles: 3, spacePhysics: 2, total: 72 }, note: "The programme allows teachers to combine and order learning content across themes, provided all learning outcomes are achieved. Do not interpret contents-page ordering as a mandatory sequence of textbook chapters." },
        Mathematics: { officialName: "Matematikë", sourceStatus: "ASCAP-2026-updated-language-oriented-Grade-X-XI-programme-opened", sequenceStatus: "five-official-content-themes-verified-for-combined-Grades-X-XI; year-specific allocation not yet fully extracted", syllabusThemes: ["Number", "Measurement", "Geometry", "Algebra and function", "Statistics and probability"], chapterCount: null, officialPages: { contents: 2, themes: [21, 25, 28, 32, 38] }, note: "This source is a combined Grade X–XI programme, not a Grade X-only sequence. CBE Nexus must not assign all content to Grade X without extracting the year allocation." }
      },
      status: "four official ASCAP 2026 language-oriented profile programmes opened; thematic structures and key topic groups recorded; Biology/Chemistry/Physics detailed topic extraction ongoing; Mathematics is combined Grades X-XI; no official chapter counts asserted"
    },
    {
      country: "Algeria",
      sourceMapBatch: 2,
      levelReviewed: "Secondary education: 1AS common-core year followed by 2AS–3AS specialised streams; 2026–2027 changes must be tracked separately from legacy subject programmes",
      authority: "Ministry of National Education (Ministère de l'Éducation Nationale)",
      language: "Arabic is principal; Tamazight and French roles vary by programme and context.",
      examPathway: "Baccalauréat streams; subject combinations and weighting differ by stream. The official ministry states that the common-core system continues in 2026–2027 and that some subject content is being redistributed between the first and second secondary years.",
      officialSources: [
        "https://www.education.gov.dz/",
        "https://www.education.gov.dz/2026/07/30/وزير-التربية-الوطنية-ينشّط-ندوة-صحفية-يقدّم-فيها-توضيحات-حول-الترتيبات-البيداغوجية-الجديدة-الخاصة-بالدخول-المدرسي/",
        "https://www.education.gov.dz/2026/09/10/قرار-رقم-36-مؤرخ-في-27-ربيع-الأول-عام-1448-الموافق-9-سبتمبر-سنة-2026-يتضمن-إلغاء-القرار-رقم-20/",
        "https://education.gov.dz/wp-content/uploads/2015/04/Programme-Sciences-de-la-nature-et-de-la-vie-S.pdf",
        "https://education.gov.dz/wp-content/uploads/2015/04/Programme-SNV-3AS-MATH.pdf",
        "https://education.gov.dz/wp-content/uploads/2015/04/Prog-3AS-physique-juillet-2011.pdf",
        "https://education.gov.dz/wp-content/uploads/2015/04/3-AS-SE-sc-nat.pdf",
        "https://www.onps.dz/fr/"
      ],
      curriculumStructure: "Official Ministry sources confirm a common-core secondary structure followed by specialised streams (including Experimental Sciences, Mathematics, Technical Mathematics, Management and Economics, Letters and Philosophy, and Foreign Languages). The Ministry's 30 July 2026 briefing says the common-core system continues in 2026–2027 and that some subject content is redistributed between years 1 and 2, with greater terminal-year time for specialisation and practical work. A Ministry decree dated 9 September 2026 cancelled the earlier 28 July 2026 decree on secondary-school timetables and coefficients; therefore the July timetable must not be treated as current. Retrieved subject documents include legacy third-year Biology programmes for Experimental Sciences and Mathematics streams and a third-year Physics/Chemistry programme for science/Mathematics/technical-Mathematics streams. These documents are official but dated (2011 programme editions, and 2018 annual progression for Biology); their applicability after 2026–2027 redistribution is not yet established. No complete current 1AS–3AS sequence for all streams is claimed.",
      subjects: {
        Biology: { officialName: "Sciences naturelles / علوم الطبيعة والحياة", sourceStatus: "official-Ministry-legacy-3AS-programmes-retrieved; stream-specific; 2026-27-currentness-unconfirmed", sequenceStatus: "partial-sequence-transcribed-for-3AS-only; not-currently-verified-against-2026-27-redistribution", syllabusThemes: ["Experimental Sciences stream: functional specialisation of proteins (protein synthesis; structure-function relationship; immune defence); human activity and planetary management (air pollution, water pollution, environmental balance).", "Mathematics stream: functional specialisation of proteins (protein synthesis and structure/function)."], chapterCount: null, sourceNotes: "Official programme PDFs are dated June 2011; an official annual progression PDF for Experimental Sciences is dated September 2018. These are not proof of the current redistributed 2026–2027 sequence." },
        Chemistry: { officialName: "Chimie / الكيمياء (within Sciences physiques in retrieved programme)", sourceStatus: "official-Ministry-3AS-integrated-Physics-Chemistry-programme-retrieved; separate full chemistry sequence not retrieved", sequenceStatus: "broad-domain-description-only; detailed stream/year sequence pending", syllabusThemes: ["General, inorganic/mineral and organic chemistry; quantitative chemical transformations and reaction equations; chemical-system evolution; effects of pressure, volume and temperature; electrochemistry; thermodynamics; analytical-chemistry techniques."], chapterCount: null, sourceNotes: "These are programme-level domains described in the official 3AS Physics/Chemistry programme, not an extracted list of separate Chemistry chapters. Stream-specific and year-specific allocations remain unverified." },
        Physics: { officialName: "Sciences physiques / الفيزياء", sourceStatus: "official-Ministry-3AS-Physics-Chemistry-programme-retrieved; covers Experimental Sciences, Mathematics and Technical Mathematics streams", sequenceStatus: "programme-scope-confirmed; detailed contents sequence extraction pending; 2026-27-currentness-unconfirmed", syllabusThemes: ["Experimental and model-based study of physical phenomena; measurement and interpretation of data; laboratory experimentation and ICT-supported investigation; mathematical relationships, laws and models."], chapterCount: null, sourceNotes: "The retrieved official programme is a combined Physics/Chemistry programme dated July 2011. Do not infer separate chapter counts from its broad subject description." },
        Mathematics: { officialName: "Mathématiques / الرياضيات", sourceStatus: "official-authority-and-stream-structure-confirmed; current subject programme PDF not yet retrieved", sequenceStatus: "official-stream-syllabus-retrieval-required", syllabusThemes: [], chapterCount: null, sourceNotes: "A search result for an older Mathematics document was for the lower-secondary/basic-education stage, not the target upper-secondary streams; it was deliberately excluded. Need current official 1AS, 2AS and 3AS programmes by stream." }
      },
      status: "partially verified: official secondary structure and 2026-27 transition notes recorded; legacy 3AS Biology and integrated Physics-Chemistry programme sources retrieved; Mathematics and current year-by-year stream sequences remain outstanding; no official chapter counts asserted"
    },
    country: "Andorra",
      sourceMapBatch: 2,
      levelReviewed: "Andorran education system: Second Education (ages approximately 12–16; two two-year cycles) and General Batxillerat (two-year upper-secondary programme); do not merge with French, Spanish or IB systems",
      authority: "Government of Andorra, Ministry responsible for Education and Universities; official Portal Educatiu and BOPA legislation",
      language: "Catalan is the official/first vehicular language in the Andorran school; Spanish, French and English are also learned. General Batxillerat permits Catalan, Spanish and French as vehicular languages, with each centre determining the language of instruction by subject.",
      examPathway: "Andorran Second Education followed by General Batxillerat. Batxillerat science subjects are selectable pathways/options, including Biology, Chemistry, Physics, scientific-technical Mathematics and applied Mathematics for social sciences. International Baccalaureate equivalents are explicitly identified separately.",
      officialSources: [
        "https://www.govern.ad/en/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular",
        "https://portaleducatiu.ad/documentacio-oficial/programes-marcs-referencia",
        "https://www.govern.ad/en/tematiques/educacio-formacio-investigacio-i-divulgacio-del-coneixement/estudiar-a-andorra/sistemes-educatius-a-andorra/sistema-educatiu-andorra/segona-ensenyança",
        "https://bopa.mca.ad/text/reglament/2026-10-21/reglament-ordenament-nivell-batxillerat-general",
        "https://portaleducatiu.ad/uploads/PROGRAMA_GV20220922_11_03_53.pdf",
        "https://portaleducatiu.ad/uploads/PROGRAMA%20MATEMÀTIQUES%202A%20ENSENYANÇA%20EA_GD_2023_07_17_14_22_53.PDF",
        "https://portaleducatiu.ad/uploads/bio.pdf",
        "https://portaleducatiu.ad/uploads/quim.pdf",
        "https://portaleducatiu.ad/uploads/PROGRAMA%20FÍSICA%204%20HORES_GD_2025_07_07_12_19_27.PDF",
        "https://portaleducatiu.ad/uploads/mates%20cienti.pdf"
      ],
      curriculumStructure: "The official Andorran compulsory-education programme places Mathematics and Physical and Natural Sciences in Second Education; sciences are integrated and must not be split into separate Biology, Chemistry and Physics tracks for this stage. Second Education normally covers ages 12–16 in two cycles of two academic years. The retrieved integrated science programme organizes learning into six interdisciplinary science/technology/society themes: universe and Earth; energy and sustainability; materials and environment; genetic revolution; origin/diversity of life; health and wellbeing. The Second Education Mathematics programme has five resource blocks: numbers, relations and operations; space and form; measurement; algebra and functions; statistics and probability. For General Batxillerat, separate Biology, Chemistry, Physics and Mathematics programmes exist. The current General Batxillerat regulation is dated 21 October 2026; the subject programmes are separately published official programme documents. The General Batxillerat subject programmes are resource-block/competency frameworks across the two-year stage, not a prescribed linear textbook chapter order. The eight Chemistry blocks and six Physics blocks must not be represented as grade-specific chapter counts. Scientific-technical Mathematics and applied Mathematics for social sciences are distinct pathways.",
      subjects: {
        Biology: { officialName: "Biologia", sourceStatus: "official-General-Batxillerat-programme-PDF-opened", sequenceStatus: "four-official-resource-blocks-transcribed; two-year-programme; not-linear-chapter-order", syllabusThemes: ["Biodiversity: ecosystem biotic/abiotic components, interactions, adaptation, evolution and conservation", "Cells and organisms: cell structure and function, prokaryotic/eukaryotic cells, organelles, enzymes, cellular metabolism, photosynthesis, respiration and multicellular organisation", "Heredity and continuity of life: DNA, genes, mitosis, gene expression, inheritance patterns, genetic variation and biotechnology", "Homeostasis: nervous and hormonal coordination, internal regulation, water balance, responses to environmental change, pathogens, immunity and health"], chapterCount: null, note: "Four resource blocks apply across the General Batxillerat programme. They are not official chapter titles or grade-by-grade sequence." },
        Chemistry: { officialName: "Química", sourceStatus: "official-General-Batxillerat-programme-PDF-opened", sequenceStatus: "eight-official-resource-blocks-transcribed; two-year-programme; not-linear-chapter-order", syllabusThemes: ["Atomic-molecular model of matter: substances, atoms, molecules, ions, formulae, mole, molar mass, states of matter, gases, solutions and concentration", "Atomic models and chemical bonding", "Chemical reactions: acid-base reactions and redox reactions", "Carbon compounds", "Reaction energy and spontaneity", "Chemical equilibrium and acid-base equilibrium", "Reaction rates and kinetics", "Electrochemistry"], chapterCount: null, note: "The official programme explicitly states that the eight blocks cover both years and teachers may draw on blocks in planning first- and second-year learning units." },
        Physics: { officialName: "Física (4 hores setmanals)", sourceStatus: "official-General-Batxillerat-2025-programme-PDF-opened", sequenceStatus: "six-official-resource-blocks-transcribed; two-year-programme; not-linear-chapter-order", syllabusThemes: ["Study of light, sound and waves: geometrical optics, reflection, refraction, lenses, vision, wave properties, sound and electromagnetic spectrum", "Study of motion: kinematics, uniform and accelerated motion, circular motion and complex motion", "Study of mechanical interactions: forces, dynamics and gravitational field", "Study of energy: work, energy transfer, conservation and dissipation; mechanical and thermodynamic perspectives", "Study of electromagnetic interactions: electric and magnetic fields and electromagnetic phenomena", "Modern physics: nuclear physics, radioactivity, fission/fusion, relativity and quantum physics"], chapterCount: null, note: "This is the four-hours-per-week General Batxillerat Physics programme. A separate two-hours-per-week Physics programme also exists and must be audited as a separate pathway." },
        Mathematics: { officialName: "Matemàtiques cientificotècniques; separate Matemàtiques aplicades a les ciències socials option", sourceStatus: "official-General-Batxillerat-2025-scientific-technical-programme-PDF-opened; applied-social programme listed officially but not yet extracted", sequenceStatus: "four-official-resource-blocks-transcribed-for-scientific-technical-pathway; two-year-programme; applied-social pathway extraction pending", syllabusThemes: ["Numbers: real and irrational numbers, numerical operations, polynomials, sequences, limits and arithmetic/geometric progressions", "Geometry and linear algebra", "Calculus: functions, change and calculus methods", "Statistics and probability"], chapterCount: null, note: "The four blocks belong to the scientific-technical Mathematics programme and cover the Batxillerat stage. Do not apply this sequence to the distinct applied Mathematics for social sciences or IB Mathematics programmes without separate extraction." }
      },
      secondEducationIntegratedScience: {
        officialName: "Ciències físiques i de la natura",
        sourceStatus: "official-Second-Education-integrated-programme-PDF-opened",
        sequenceStatus: "six-interdisciplinary-resource-blocks-transcribed; first- and second-cycle progressions explicitly distinguished",
        syllabusThemes: ["The universe and Earth: universe, Solar System, Earth dynamics, geological processes and physical motion/forces", "Energy and sustainability: energy needs, environmental costs and new energy sources", "Materials and the environment: materials, substances, chemical reactions, production/use and environmental impact", "The genetic revolution: reproduction, genetics, biotechnology and their limits", "Origin and diversity of living things: classification, human origins, adaptation, interactions and evolution", "Living longer and living better: health, disease prevention and care"],
        chapterCount: null,
        note: "The programme expressly says the six blocks are interdisciplinary and not divided into isolated Physics, Chemistry, Biology and Geology subjects. Themes recur across both cycles with increasing complexity."
      },
      secondEducationMathematics: {
        officialName: "Matemàtiques de segona ensenyança",
        sourceStatus: "official-Second-Education-Mathematics-programme-PDF-opened",
        sequenceStatus: "five-official-resource-blocks-transcribed; cross-block integration required",
        syllabusThemes: ["Numbers, relations and operations", "Space and form", "Measurement", "Algebra and functions", "Statistics and probability"],
        chapterCount: null,
        note: "The official programme states these blocks organize resources across the level and do not require rigid independent teaching sequences."
      },
      status: "official Andorran Second Education and General Batxillerat programme documents retrieved; integrated lower-secondary science and five-block Mathematics mapped; upper-secondary Biology four blocks, Chemistry eight blocks, Physics six blocks and scientific-technical Mathematics four blocks recorded; separate two-hour Physics, applied-social Mathematics and IB pathways still require individual extraction; no official chapter counts asserted"
    },
    country: "Angola",
      sourceMapBatch: 2,
      levelReviewed: "General Secondary I Cycle (Classes 7–9) and II Cycle (Classes 10–12); II Cycle science pathway is Ciências Físicas e Biológicas",
      authority: "Instituto Nacional de Avaliação e Desenvolvimento da Educação (INADE), Ministry of Education; national curriculum and programme approval under the Ministry",
      language: "Portuguese (official language of instruction and national examination language).",
      examPathway: "National Examinations (Exames Nacionais). INADE's 2025–2026 portal shows examination subjects by class and implementation phase; for the 12th Class, the current displayed list includes Mathematics, Physics, Biology and Chemistry among other subjects. Do not assume every subject is offered in every cycle or every phase of generalisation.",
      officialSources: [
        "https://inade.gov.ao/",
        "https://inade.gov.ao/Programa/I_ciclo",
        "https://inade.gov.ao/Programa/II_ciclo",
        "https://inade.gov.ao/exames-nacionais",
        "https://lex.ao/docs/presidente-da-republica/2023/decreto-presidencial-n-o-162-23-de-01-de-agosto/",
        "https://lex.ao/docs/assembleia-nacional/2020/lei-n-o-32-20-de-12-de-agosto/"
      ],
      curriculumStructure: "The General Secondary system comprises two cycles of three classes: I Cycle Classes 7–9 and II Cycle Classes 10–12. The II Cycle is organised into four knowledge areas, including Physical and Biological Sciences, Economic and Legal Sciences, Human Sciences and Visual Arts. The legal framework states that national curricula are mandatory while 20% of curriculum content is the responsibility of local implementation. The INADE official curriculum-materials portal currently lists Classes 7, 8, 9, 10, 11 and 12 but displays zero downloadable curricular materials for every class on the pages inspected; therefore it is not yet possible to transcribe official subject chapter sequences from that portal. INADE's 2025–2026 national-examinations page identifies the examined subjects and phased rollout; examination subjects indicate assessment coverage, not a complete syllabus sequence. The 2023 legal framework confirms that programmes and study plans are approved by the education ministry. No chapter titles or counts are invented.",
      subjects: {
        Biology: { officialName: "Biologia", sourceStatus: "INADE-official-materials-pages-checked-no-files-current-exam-subject-confirmed", sequenceStatus: "programme-PDF-unavailable-from-current-public-portal; official-topic-sequence-pending", syllabusThemes: [], chapterCount: null, note: "Biology appears in INADE's current 9th- and 12th-Class examination lists in the displayed generalisation phases. Exam inclusion does not supply the syllabus topic order." },
        Chemistry: { officialName: "Química", sourceStatus: "INADE-official-materials-pages-checked-no-files-current-12th-Class-exam-subject-confirmed", sequenceStatus: "programme-PDF-unavailable-from-current-public-portal; official-topic-sequence-pending", syllabusThemes: [], chapterCount: null, note: "Chemistry appears in the current 9th- and 12th-Class examination lists in the displayed phase. No topic sequence is inferred from examination availability." },
        Physics: { officialName: "Física", sourceStatus: "INADE-official-materials-pages-checked-no-files-current-9th-and-12th-Class-exam-subject-confirmed", sequenceStatus: "programme-PDF-unavailable-from-current-public-portal; official-topic-sequence-pending", syllabusThemes: [], chapterCount: null, note: "Physics appears in the national examination lists for 9th and 12th Classes; this confirms assessment status, not the detailed programme sequence." },
        Mathematics: { officialName: "Matemática", sourceStatus: "INADE-official-materials-pages-checked-no-files-current-6th-9th-and-12th-Class-exam-subject-confirmed", sequenceStatus: "programme-PDF-unavailable-from-current-public-portal; official-topic-sequence-pending", syllabusThemes: [], chapterCount: null, note: "Mathematics appears in national examination lists across the displayed stages. Separate current programmes for Classes 7–12 are still required for topic-by-topic mapping." }
      },
      status: "official legal structure, subject pathways and national examination evidence verified; INADE curriculum-materials pages for all six secondary classes currently show zero materials; all four detailed subject sequences remain pending official programme documents; no official chapter counts asserted"
    },
    country: "Antigua and Barbuda",
      sourceMapBatch: 2,
      levelReviewed: "CSEC secondary examination syllabuses; CAPE is a separate post-CSEC pathway; CSEC Mathematics has a new syllabus effective for examinations from May/June 2027",
      authority: "Caribbean Examinations Council (CXC), with local Ministry/school implementation and territory Local Registrar",
      language: "English",
      examPathway: "CSEC and CAPE where offered. CXC is a regional examining body; these syllabuses are used as a main source for upper-secondary curricula across participating territories, but are not themselves a national Antigua and Barbuda grade-by-grade curriculum. CXC's 2027 subject offerings list Biology, Chemistry, Mathematics and Physics for the January and/or May–June CSEC sittings.",
      officialSources: [
        "https://www.cxc.org/subject/biology-csec/",
        "https://www.cxc.org/subject/chemistry-csec/",
        "https://www.cxc.org/subject/physics-csec/",
        "https://www.cxc.org/subject/mathematics-csec/",
        "https://www.cxc.org/syllabus-downloads/",
        "https://www.cxc.org/2027-subject-offerings/",
        "https://www.cxc.org/wp-content/uploads/2018/11/CSEC-Mathematics-Syllabus_EffectiveforExamsfrom2027.pdf",
        "https://www.cxc.org/SiteAssets/syllabusses/CSEC/CSEC%20Physics%20Syllabus%20with%20Specimen%20Papers%20and%20Mark%20Scheme-Keys.pdf"
      ],
      curriculumStructure: "CSEC Biology, Chemistry and Physics retain the official three-, three- and five-section structures respectively. CSEC Mathematics must now be versioned by examination session: the earlier syllabus remains listed for examinations until January 2027, while the revised Mathematics syllabus applies from May/June 2027 onward. The revised Mathematics programme is arranged in three sequential modules over a recommended two-year period: Module 1 Fundamentals of Secondary Level Mathematics (Number Theory and Computation; Consumer Arithmetic; Sets; Measurement; Algebra 1; Introduction to Graphs); Module 2 Intermediate Secondary Level Mathematics (Statistics 1; Algebra 2; Relations, Functions and Graphs 1; Geometry and Trigonometry 1; Vectors and Matrices 1); Module 3 Higher Concepts in Secondary Level Mathematics (Statistics 2; Relations, Functions and Graphs 2; Geometry and Trigonometry 2; Vectors and Matrices 2). Module 1 is a prerequisite for Modules 2 and 3. The CXC 2027 subject-offerings page lists all four core subjects for the relevant 2027 CSEC sittings. Antigua-specific school grade placement, subject uptake and timetable remain to be confirmed with the local Ministry/schools; do not label CXC sections as national grade chapters.",
      subjects: {
        Biology: { officialName: "CSEC Biology", sourceStatus: "CXC-official-subject-page-and-current-syllabus-download-list-verified", sequenceStatus: "three-official-sections-verified; detailed topic/outcome extraction still required", syllabusThemes: ["Section A: Living Organisms in the Environment", "Section B: Life Processes and Disease", "Section C: Continuity and Variation"], chapterCount: null, note: "CXC describes the syllabus as three sections. These are regional examination sections, not official Antigua grade-level chapters. The syllabus requires practical and School-Based Assessment skills." },
        Chemistry: { officialName: "CSEC Chemistry", sourceStatus: "CXC-official-subject-page-and-current-syllabus-download-list-verified", sequenceStatus: "three-official-sections-verified; detailed topic/outcome extraction still required", syllabusThemes: ["Section A: Principles of Chemistry", "Section B: Organic Chemistry", "Section C: Inorganic Chemistry"], chapterCount: null, note: "The official subject page confirms three sections and emphasizes inquiry, experimentation, observation, measurement and interpretation. Do not convert sections directly into textbook chapters." },
        Physics: { officialName: "CSEC Physics", sourceStatus: "CXC-official-subject-page-and-current-PDF-verified", sequenceStatus: "five-official-sections-and-recommended-starting-section-verified; detailed topic/outcome extraction still required", syllabusThemes: ["Section A: Mechanics", "Section B: Thermal Physics and Kinetic Theory", "Section C: Waves and Optics", "Section D: Electricity and Magnetism", "Section E: The Physics of the Atom"], chapterCount: null, note: "CXC explicitly recommends teaching Section A first. Practical work and the general/specific objectives form part of the required scope." },
        Mathematics: { officialName: "CSEC Mathematics", sourceStatus: "CXC-official-2027-revised-syllabus-PDF-verified; supersedes earlier syllabus from May/June 2027 examinations", sequenceStatus: "three-official-modules-and-topic-order-verified-for-May-June-2027-onward; detailed outcome extraction pending", syllabusThemes: ["Module 1: Fundamentals of Secondary Level Mathematics — Number Theory and Computation; Consumer Arithmetic; Sets; Measurement; Algebra 1; Introduction to Graphs", "Module 2: Intermediate Secondary Level Mathematics — Statistics 1; Algebra 2; Relations, Functions and Graphs 1; Geometry and Trigonometry 1; Vectors and Matrices 1", "Module 3: Higher Concepts in Secondary Level Mathematics — Statistics 2; Relations, Functions and Graphs 2; Geometry and Trigonometry 2; Vectors and Matrices 2"], chapterCount: null, note: "The revised syllabus is effective for examinations from May/June 2027. It recommends at least five 40-minute periods weekly over two years and a minimum of 65 hours per module. Module 1 is a prerequisite to Modules 2 and 3. Preserve both legacy and revised versions for candidates in different exam sessions." }
      },
      status: "CXC regional syllabus structures verified for all four subjects; CSEC Mathematics versioned for May-June 2027 transition; CXC 2027 subject offerings confirm examination availability; Antigua-specific grade mapping and local subject offering remain unverified; no official chapter counts asserted"
    }
  ],
  batchSummary: {
    countriesReviewed: 10,
    subjectRecordsReviewed: 40,
    officialProgrammeDocumentsOpened: 8,
    countriesWithAtLeastOneDetailedSyllabusSequenceTranscribed: 4,
    countriesWithAllFourSubjectSequencesVerified: 1,
    countriesRequiringAdditionalOfficialDocumentRetrieval: ["Kenya", "Ghana", "Nigeria", "Uganda", "Algeria", "Andorra", "Angola", "Antigua and Barbuda"],
    note: "Tanzania now has all four TIE 2023 Ordinary Secondary Form I-IV subject tables reviewed and normalized for Biology, Chemistry, Physics and Mathematics; these are syllabus-theme maps, not official chapter counts or proof of 10,000-word chapter content. Albania has four Grade X theme sequences transcribed; Antigua and Barbuda has CXC regional syllabus section/module structures, not a national grade sequence. Kenya has Grade 10 Biology sub-strands and provisional Chemistry, Physics and Core Mathematics maps; exact KICD topic-order reconciliation remains pending. The remaining country sequences still need extraction. This does not falsely mark all 40 subject sequences as complete."
  },
  qualityRules: {
    neverInventChapterTitlesOrCounts: true,
    syllabusThemeIsNotAutomaticallyAChapter: true,
    splitThemesIntoChaptersOnlyAfterTopicAndOutcomeExtraction: true,
    retainGradeAndPathway: true,
    retainOfficialLanguage: true,
    distinguishIntegratedScienceFromSeparateSciences: true,
    distinguishNationalCurriculumFromRegionalExamSyllabus: true,
    targetWordsPerChapter: 10000,
    minimumDiagramsPerChapter: 10,
    minimumExamQuestionsPerChapter: 15
  }
};
