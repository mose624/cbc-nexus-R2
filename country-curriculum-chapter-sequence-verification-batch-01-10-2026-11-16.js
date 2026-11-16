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
          sourceStatus: "official-grade-10-document-identified; detailed-2025-PDF-extraction-pending",
          sequenceStatus: "10-provisional-CBE-Nexus-chapters-added; not-yet-verified-against-KICD-detailed-sequence",
          chapterCount: 10,
          chapterStatus: "provisional-teaching-map",
          chapters: [
            { number: 1, title: "Introduction to Chemistry and Laboratory Safety", topics: ["Chemistry in everyday life", "Laboratory rules and hazard symbols", "Apparatus and safe handling", "Observation, measurement and recording"] },
            { number: 2, title: "Measurement and Physical Properties of Matter", topics: ["Physical quantities and SI units", "Mass, volume and density", "States and properties of matter", "Changes of state"] },
            { number: 3, title: "The Particulate Nature of Matter", topics: ["Particles in solids, liquids and gases", "Diffusion", "Kinetic particle model", "Heating and cooling curves"] },
            { number: 4, title: "Atomic Structure and the Periodic Table", topics: ["Protons, neutrons and electrons", "Atomic and mass numbers", "Isotopes", "Arrangement of elements and periodic trends"] },
            { number: 5, title: "Chemical Bonding and Structure", topics: ["Ionic bonding", "Covalent bonding", "Metallic bonding", "Properties of ionic, molecular and metallic substances"] },
            { number: 6, title: "Chemical Formulae, Equations and the Mole", topics: ["Valency and formula writing", "Word and symbol equations", "Balancing equations", "Relative masses and introductory mole calculations"] },
            { number: 7, title: "Acids, Bases and Salts", topics: ["Indicators and pH", "Properties of acids and bases", "Neutralization", "Preparation and uses of salts"] },
            { number: 8, title: "Types of Chemical Reactions", topics: ["Combination and decomposition", "Displacement", "Precipitation", "Oxidation and reduction at an introductory level"] },
            { number: 9, title: "Metals, Non-metals and Their Compounds", topics: ["Physical and chemical properties", "Reactivity patterns", "Extraction and uses", "Corrosion and prevention"] },
            { number: 10, title: "Air, Water and Environmental Chemistry", topics: ["Composition of air", "Water treatment and testing", "Combustion and pollution", "Responsible chemical use and environmental protection"] }
          ],
          note: "These are CBE Nexus draft teaching chapters, not a claim about the official KICD chapter count or exact sequence. Reconcile titles and order against the July 2025 KICD Chemistry design before marking curriculum-verified."
        },
        Physics: {
          officialName: "Physics",
          sourceStatus: "official-grade-10-document-identified; detailed-2025-PDF-extraction-pending",
          sequenceStatus: "10-provisional-CBE-Nexus-chapters-added; not-yet-verified-against-KICD-detailed-sequence",
          chapterCount: 10,
          chapterStatus: "provisional-teaching-map",
          chapters: [
            { number: 1, title: "Introduction to Physics and Scientific Measurement", topics: ["Physics in society and technology", "Laboratory safety", "Physical quantities and SI units", "Accuracy, precision and significant figures"] },
            { number: 2, title: "Measurement of Length, Time, Mass and Volume", topics: ["Measuring instruments", "Errors and uncertainty", "Area and volume", "Density and practical investigations"] },
            { number: 3, title: "Motion in One Dimension", topics: ["Distance and displacement", "Speed and velocity", "Acceleration", "Distance-time and velocity-time graphs"] },
            { number: 4, title: "Force and Newton's Laws of Motion", topics: ["Types of forces", "Resultant force", "Newton's laws", "Friction, mass and weight"] },
            { number: 5, title: "Work, Energy and Power", topics: ["Work done", "Kinetic and potential energy", "Conservation and transformation of energy", "Power and efficiency"] },
            { number: 6, title: "Pressure in Solids, Liquids and Gases", topics: ["Pressure and area", "Pressure in liquids", "Atmospheric pressure", "Applications of pressure"] },
            { number: 7, title: "Thermal Physics", topics: ["Temperature and thermometers", "Thermal expansion", "Heat capacity and specific heat capacity", "Transfer of heat"] },
            { number: 8, title: "Waves and Sound", topics: ["Wave properties", "Transverse and longitudinal waves", "Sound production and propagation", "Reflection and applications of sound"] },
            { number: 9, title: "Light and Geometrical Optics", topics: ["Reflection of light", "Refraction", "Lenses and image formation", "Optical instruments"] },
            { number: 10, title: "Electricity and Magnetism", topics: ["Charge and electric circuits", "Current, voltage and resistance", "Series and parallel circuits", "Magnets and electromagnets"] }
          ],
          note: "These are CBE Nexus draft teaching chapters, not a claim about the official KICD chapter count or exact sequence. Reconcile titles and order against the July 2025 KICD Physics design before marking curriculum-verified."
        },
        Mathematics: {
          officialName: "Core Mathematics",
          sourceStatus: "official-grade-10-document-identified; detailed-2025-PDF-extraction-pending",
          sequenceStatus: "10-provisional-CBE-Nexus-chapters-added; not-yet-verified-against-KICD-detailed-sequence",
          chapterCount: 10,
          chapterStatus: "provisional-teaching-map",
          chapters: [
            { number: 1, title: "Number Systems and Computation", topics: ["Integers, fractions and decimals", "Rational and irrational numbers", "Indices and standard form", "Estimation and approximation"] },
            { number: 2, title: "Sets, Logic and Number Patterns", topics: ["Set notation and representation", "Subsets and set operations", "Venn diagrams", "Sequences and patterns"] },
            { number: 3, title: "Ratio, Rate, Proportion and Percentages", topics: ["Ratios and rates", "Direct and inverse proportion", "Percentages and percentage change", "Financial and consumer arithmetic"] },
            { number: 4, title: "Algebraic Expressions and Formulae", topics: ["Terms and coefficients", "Expansion and factorization", "Algebraic fractions", "Substitution and changing the subject of a formula"] },
            { number: 5, title: "Linear Equations and Inequalities", topics: ["Solving linear equations", "Simultaneous linear equations", "Linear inequalities", "Forming equations from word problems"] },
            { number: 6, title: "Relations, Functions and Graphs", topics: ["Coordinates and relations", "Function notation", "Linear graphs", "Interpreting gradients and intercepts"] },
            { number: 7, title: "Geometry and Geometrical Reasoning", topics: ["Angles and parallel lines", "Properties of triangles and polygons", "Congruence and similarity", "Geometrical constructions and reasoning"] },
            { number: 8, title: "Measurement, Mensuration and Scale", topics: ["Perimeter and area", "Surface area and volume", "Units and conversions", "Scale drawings and practical measurement"] },
            { number: 9, title: "Trigonometry and Vectors", topics: ["Right-angled triangle ratios", "Angles of elevation and depression", "Bearings", "Introduction to vectors and their operations"] },
            { number: 10, title: "Statistics and Probability", topics: ["Data collection and presentation", "Measures of central tendency", "Measures of dispersion", "Basic probability and interpretation"] }
          ],
          note: "These are CBE Nexus draft teaching chapters, not a claim about the official KICD chapter count or exact sequence. Reconcile titles and order against the July 2025 KICD Core Mathematics design before marking curriculum-verified."
        }
      },
      status: "Biology has 10 KICD sub-strands transcribed; Chemistry, Physics and Core Mathematics each have 10 provisional CBE Nexus chapters awaiting exact KICD PDF sequence reconciliation"
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
        Biology: { officialName: "Biology", sourceStatus: "official-curriculum-listed", sequenceStatus: "pdf-strand-and-indicator-extraction-pending", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Chemistry", sourceStatus: "official-curriculum-listed", sequenceStatus: "pdf-strand-and-indicator-extraction-pending", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Physics", sourceStatus: "official-curriculum-listed", sequenceStatus: "pdf-strand-and-indicator-extraction-pending", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Mathematics", sourceStatus: "official-curriculum-listed", sequenceStatus: "year-level-indicator-extraction-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "four-official-subject-documents-identified; chapter sequence extraction pending"
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
        "https://lmis.nerdcportals.com.ng/s1_core"
      ],
      curriculumStructure: "NERDC separates SSS 1, SSS 2 and SSS 3. The SSS 1 science portal lists Biology, Chemistry and Physics; the core portal separately lists General Mathematics. Viewer links were identified, but their embedded curriculum PDF contents were not machine-readable in this pass.",
      subjects: {
        Biology: { officialName: "Biology", sourceStatus: "official-SSS1-subject-listed", sequenceStatus: "viewer-document-extraction-pending", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Chemistry", sourceStatus: "official-SSS1-subject-listed", sequenceStatus: "viewer-document-extraction-pending", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Physics", sourceStatus: "official-SSS1-subject-listed", sequenceStatus: "viewer-document-extraction-pending", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "General Mathematics", sourceStatus: "official-core-SSS1-subject-listed", sequenceStatus: "viewer-document-extraction-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "revised-official-curriculum-and-subject-listings-verified; chapter sequence extraction pending"
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
      status: "framework-and-subject-presence-verified; individual subject chapter sequences pending"
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
        "https://www.tie.go.tz/index.php/publications/syllabus-for-lower-secondary-academics?page=1",
        "https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics?page=2",
        "https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics?page=3"
      ],
      curriculumStructure: "The 2023 Form I–IV curriculum is Ministry-approved. The official Biology syllabus is organized by Form I, II, III and IV. The Biology Form I document explicitly includes basic Biology concepts, cells, plant nutrition and classification among its learning content. The curriculum framework identifies Biology, Chemistry and Physics as elective/stream subjects and Mathematics as a core subject. The TIE catalogue lists subject-specific Biology, Chemistry, Physics and Mathematics syllabuses; only Biology detailed content was opened in this pass.",
      subjects: {
        Biology: { officialName: "Biology", sourceStatus: "2023-Form-I-IV-syllabus-opened", sequenceStatus: "partial-official-topic-sequence-transcribed", syllabusThemes: ["Basic concepts and branches of Biology", "Cell: types, structures and functions", "Plant nutrition: photosynthesis, leaf structure and mineral requirements", "Classification and scientific naming of organisms", "Form II: nutrition in humans and ruminants"], chapterCount: null },
        Chemistry: { officialName: "Chemistry", sourceStatus: "official-Form-I-IV-syllabus-listed", sequenceStatus: "full-syllabus-transcription-pending", syllabusThemes: ["Basic concepts, theories and principles", "Periodic-table properties of elements", "IUPAC nomenclature", "Chemical symbols, formulae and equations", "Chemical experiments", "Extraction of metals", "Chemistry project"], chapterCount: null },
        Physics: { officialName: "Physics", sourceStatus: "official-Form-I-IV-syllabus-listed", sequenceStatus: "full-syllabus-transcription-pending", syllabusThemes: ["Basic concepts, theories, principles, terminology and measurement", "Mathematics in physical explanations", "Experimental skills and data analysis", "Physics project"], chapterCount: null },
        Mathematics: { officialName: "Mathematics", sourceStatus: "official-Form-I-IV-syllabus-listed-as-core", sequenceStatus: "full-syllabus-transcription-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "official-framework-and-Biology-topics-partially-transcribed; three other subject sequences pending"
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
