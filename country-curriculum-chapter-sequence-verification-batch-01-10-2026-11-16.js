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
        Biology: { officialName: "Biology", sourceStatus: "official-grade-10-document-identified", sequenceStatus: "pdf-content-extraction-pending", syllabusThemes: [], chapterCount: null },
        Chemistry: { officialName: "Chemistry", sourceStatus: "official-grade-10-document-identified", sequenceStatus: "pdf-content-extraction-pending", syllabusThemes: [], chapterCount: null },
        Physics: { officialName: "Physics", sourceStatus: "official-grade-10-document-identified", sequenceStatus: "pdf-content-extraction-pending", syllabusThemes: [], chapterCount: null },
        Mathematics: { officialName: "Core Mathematics", sourceStatus: "official-grade-10-document-identified", sequenceStatus: "pdf-content-extraction-pending", syllabusThemes: [], chapterCount: null }
      },
      status: "official-documents-identified; exact chapter sequences not yet verified"
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
    countriesWithAtLeastOneDetailedSyllabusSequenceTranscribed: 3,
    countriesWithAllFourSubjectSequencesVerified: 0,
    countriesRequiringAdditionalOfficialDocumentRetrieval: ["Kenya", "Ghana", "Nigeria", "Uganda", "Tanzania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda"],
    note: "This is a real 10-country source verification pass. It does not falsely mark all 40 subject sequences as complete. Albania has four Grade X theme sequences transcribed; Tanzania has a partial Biology sequence; Antigua and Barbuda has CXC syllabus section/module structures. Remaining topic extraction is outstanding."
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
