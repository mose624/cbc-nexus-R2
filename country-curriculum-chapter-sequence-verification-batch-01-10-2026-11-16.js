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
