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
        status: "Biology, Chemistry and Mathematics Form I-IV detailed tables reviewed and normalized; Physics still requires equivalent row-by-row reconciliation",
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
          sourceStatus: "TIE-2023-Form-I-IV-official-syllabus-opened-and-reviewed",
          sequenceStatus: "Form-I detailed learning activities confirmed against official PDF; Forms-II-IV summary themes are provisional and not yet line-by-line verified",
          chapterCount: null,
          topicsByForm: {
            FormI: ["Concept, branches and applications of Physics", "Physical quantities and measurement", "Linear motion: speed, velocity, acceleration, distance and displacement", "Force, density and pressure", "Work, power and energy", "Mechanical properties of matter"],
            FormII: ["Light: sources, propagation, transmission, image formation, colours and optical instruments", "Magnetism and magnetic fields", "Static electricity and capacitors", "Current electricity and domestic electrical installations", "Experimental investigation and data analysis"],
            FormIII: ["Waves and motion", "Newton's laws of motion", "Equilibrium: moments and centre of gravity", "Friction", "Simple machines", "Experimental investigations and research project work"],
            FormIV: ["Heat and thermal energy", "Temperature measurement and thermal expansion", "Transfer and measurement of heat", "Vapour and humidity", "Physics of the atom", "Electronics and renewable energy", "Completion and reporting of research project"]
          }
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
      status: "All four official TIE 2023 subject syllabuses opened; Forms I-IV sections confirmed; exact full topic-row extraction remains in progress; broad Form II-IV topic summaries are explicitly provisional"
    },
    {
      country: "Albania",
      sourceMapBatch: 2,
      levelReviewed: "Upper Secondary Grade X; 2026 programme files for language-oriented profile reviewed",
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
      curriculumStructure: "The four current ASCAP Grade X programme PDFs were opened. Their tables of contents provide the official thematic structure. These are thematic units, not a claim that each theme is already a separate CBE Nexus chapter.",
      subjects: {
        Biology: { officialName: "Biologji", sourceStatus: "2026-Grade-X-programme-opened", sequenceStatus: "official-theme-sequence-verified", syllabusThemes: ["Structure and functioning of living organisms", "Heredity and evolution"], chapterCount: null },
        Chemistry: { officialName: "Kimi", sourceStatus: "2026-Grade-X-programme-opened", sequenceStatus: "official-theme-sequence-verified", syllabusThemes: ["Principles of Chemistry", "Inorganic Chemistry", "Introduction to Organic Chemistry"], chapterCount: null },
        Physics: { officialName: "Fizikë", sourceStatus: "2026-Grade-X-programme-opened", sequenceStatus: "official-theme-sequence-verified", syllabusThemes: ["Motion, forces and energy", "Thermal physics / thermodynamics", "Electricity, magnetism and electromagnetic induction", "Waves", "Atomic, nuclear and elementary-particle physics", "Space physics"], chapterCount: null },
        Mathematics: { officialName: "Matematikë", sourceStatus: "2026-Grade-X-XI-programme-opened", sequenceStatus: "official-theme-sequence-verified", syllabusThemes: ["Number", "Measurement", "Geometry", "Algebra and function", "Statistics and probability"], chapterCount: null }
      },
      status: "four-official-current-programmes-opened; theme order verified; detailed lesson-outcome-to-chapter mapping still required"
    },
    {
      country: "Algeria",
      sourceMapBatch: 2,
      levelReviewed: "Secondary education; common core and specialised Baccalauréat streams must be separated",
      authority: "Ministry of National Education (Ministère de l'Éducation Nationale)",
      language: "Arabic is principal; Tamazight and French roles vary by programme and context.",
      examPathway: "Baccalauréat streams; subject weighting and subject combinations differ by stream.",
      officialSources: ["https://www.education.gov.dz/"],
      curriculumStructure: "The ministry authority and stream-based secondary structure are identified, but the current official subject programme PDFs and their chapter sequences were not retrieved in this audit. No chapter titles or counts are assigned.",
      subjects: {
        Biology: { officialName: "Sciences naturelles / علوم الطبيعة والحياة", sourceStatus: "authority-only", sequenceStatus: "official-stream-syllabus-retrieval-required", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Chimie", sourceStatus: "authority-only", sequenceStatus: "official-stream-syllabus-retrieval-required", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Physique", sourceStatus: "authority-only", sequenceStatus: "official-stream-syllabus-retrieval-required", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Mathématiques", sourceStatus: "authority-only", sequenceStatus: "official-stream-syllabus-retrieval-required", syllabusThemes: [], chapterCount: null }
      },
      status: "not-yet-chapter-verified; current official stream documents required"
    },
    {
      country: "Andorra",
      sourceMapBatch: 2,
      levelReviewed: "Second education and General Baccalaureate; integrated lower-secondary sciences must remain integrated",
      authority: "Government of Andorra, Ministry responsible for Education and Universities",
      language: "Catalan, Spanish and French are vehicular languages in compulsory education; programme/school-specific language must be captured.",
      examPathway: "Andorran school-system and General Baccalaureate pathways; do not substitute Spanish or French national sequences.",
      officialSources: ["https://www.govern.ad/en/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular"],
      curriculumStructure: "Official legislation lists Mathematics and Physical and Natural Sciences for second education, and individual Biology, Chemistry, Physics and Mathematics programmes for the General Baccalaureate. The exact syllabus PDF contents were not extracted in this pass.",
      subjects: {
        Biology: { officialName: "Biologia", sourceStatus: "official-baccalaureate-programme-listed", sequenceStatus: "programme-document-extraction-pending; not a separate lower-secondary subject assumption", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Química", sourceStatus: "official-baccalaureate-programme-listed", sequenceStatus: "programme-document-extraction-pending; not a separate lower-secondary subject assumption", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Física", sourceStatus: "official-baccalaureate-programme-listed", sequenceStatus: "programme-document-extraction-pending; lower-secondary integrated sciences retained", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Matemàtiques", sourceStatus: "official-second-education-and-baccalaureate-programme-listed", sequenceStatus: "programme-document-extraction-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "official-programme-structure-verified; chapter sequence extraction pending"
    },
    {
      country: "Angola",
      sourceMapBatch: 2,
      levelReviewed: "General Secondary I Cycle (Classes 7–9) and II Cycle (Classes 10–12)",
      authority: "Instituto Nacional de Avaliação e Desenvolvimento da Educação (INADE), Ministry of Education",
      language: "Portuguese",
      examPathway: "National Examinations; subject availability depends on cycle and implementation phase.",
      officialSources: ["https://inade.gov.ao/", "https://inade.gov.ao/exames-nacionais"],
      curriculumStructure: "INADE's official portal confirms curricular materials across school levels. The II Cycle includes a Physical and Biological Sciences area. The portal's current individual subject programme files and exact topic sequences were not retrieved in this audit.",
      subjects: {
        Biology: { officialName: "Biologia", sourceStatus: "official-materials-portal-identified", sequenceStatus: "current-subject-programme-extraction-pending", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Química", sourceStatus: "official-materials-portal-identified", sequenceStatus: "current-subject-programme-extraction-pending", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Física", sourceStatus: "official-materials-portal-identified", sequenceStatus: "current-subject-programme-extraction-pending", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Matemática", sourceStatus: "official-materials-portal-identified", sequenceStatus: "current-subject-programme-extraction-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "official-authority-and-materials-portal-verified; exact subject chapter sequences pending"
    },
    {
      country: "Antigua and Barbuda",
      sourceMapBatch: 2,
      levelReviewed: "CSEC secondary examination syllabuses; CAPE is a separate post-CSEC pathway",
      authority: "Caribbean Examinations Council (CXC), with local Ministry/school implementation",
      language: "English",
      examPathway: "CSEC and CAPE where offered; regional syllabus is not a national grade-by-grade curriculum.",
      officialSources: [
        "https://www.cxc.org/subject/biology-csec/",
        "https://www.cxc.org/subject/chemistry-csec/",
        "https://www.cxc.org/subject/physics-csec/",
        "https://www.cxc.org/subject/mathematics-csec/",
        "https://www.cxc.org/syllabus-downloads/"
      ],
      curriculumStructure: "CXC syllabus divisions were verified for all four subjects. They are regional examination syllabus sections/modules, not national grade-level chapter sequences. Local school offering and current examination session must be checked before publishing as an Antigua-specific course.",
      subjects: {
        Biology: { officialName: "CSEC Biology", sourceStatus: "CXC-official-subject-page-verified", sequenceStatus: "syllabus-section-structure-verified", syllabusThemes: ["Living organisms in the environment", "Life processes and disease", "Continuity and variation"], chapterCount: null },
        Chemistry: { officialName: "CSEC Chemistry", sourceStatus: "CXC-official-subject-page-verified", sequenceStatus: "syllabus-section-structure-verified", syllabusThemes: ["Principles of Chemistry", "Organic Chemistry", "Inorganic Chemistry"], chapterCount: null },
        Physics: { officialName: "CSEC Physics", sourceStatus: "CXC-official-subject-page-verified", sequenceStatus: "syllabus-section-structure-verified", syllabusThemes: ["Mechanics", "Thermal Physics and Kinetic Theory", "Waves and Optics", "Electricity and Magnetism", "Physics of the Atom"], chapterCount: null },
        Mathematics: { officialName: "CSEC Mathematics", sourceStatus: "CXC-official-subject-page-verified", sequenceStatus: "syllabus-module-and-topic-structure-verified", syllabusThemes: ["Fundamentals: Number Theory and Computation, Measurement", "Intermediate: Consumer Arithmetic, Algebra 1, Statistics 1, Algebra 2, Relations/Functions/Graphs 1, Geometry/Trigonometry 1, Vectors/Matrices 1", "Higher: Sets, Introduction to Graphs, Statistics 2, Relations/Functions/Graphs 2, Geometry/Trigonometry 2, Vectors/Matrices 2"], chapterCount: null }
      },
      status: "four-regional-examination-syllabus-structures-verified; national-grade mapping and local offering confirmation pending"
    }
  ],
  batchSummary: {
    countriesReviewed: 10,
    subjectRecordsReviewed: 40,
    officialProgrammeDocumentsOpened: 8,
    countriesWithAtLeastOneDetailedSyllabusSequenceTranscribed: 4,
    countriesWithAllFourSubjectSequencesVerified: 0,
    countriesRequiringAdditionalOfficialDocumentRetrieval: ["Kenya", "Ghana", "Nigeria", "Uganda", "Tanzania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda"],
    note: "Kenya now has 10 Grade 10 Biology sub-strands transcribed from the KICD curriculum design. Albania has four Grade X theme sequences transcribed; Tanzania has a partial Biology sequence; Antigua and Barbuda has CXC syllabus section/module structures. Kenya Chemistry, Physics and Core Mathematics now have provisional chapter maps; their official KICD topic order still needs exact PDF reconciliation. The other country sequences still need extraction. This does not falsely mark all 40 subject sequences as complete."
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
