/**
 * CBE Nexus — Country curriculum sequence verification
 * Country: Denmark | ISO3: DNK | Review: 2026-11-16
 * Separates Folkeskole from gymnasium/vocational upper-secondary programmes.
 */
export const countryCurriculumVerification = {
  country: "Denmark",
  alternateNames: ["Danmark"],
  countryCode: "DNK",
  reviewDate: "2026-11-16",
  authority: "Ministry of Children and Education (Børne- og Undervisningsministeriet); Danish Agency for Education and Quality (STUK)",
  languageOfInstruction: "Danish in the public Folkeskole; language and programme vary in international and private schools.",
  structure: {
    compulsoryBasicEducation: "The Folkeskole comprises a pre-school class and nine years of basic schooling (Grades 1–9); Grade 10 is an optional additional year.",
    primaryAndLowerSecondary: "The nine-year Folkeskole is a single structure. Science subjects are introduced progressively; specialist Biology, Geography and Physics/Chemistry are taught in Grades 7–9.",
    upperSecondary: "Four principal gymnasium pathways: stx (general), hhx (commercial), htx (technical) and hf (two-year higher preparatory). Vocational education and training (EUD) is a separate pathway.",
    framework: "Fælles Mål sets national purposes, competency areas and competency goals. Schools and teachers plan teaching locally; since August 2025 schools are no longer required to prepare local curricula."
  },
  curriculumStatus2026: {
    currentFramework: "Fælles Mål remains the operative national framework for Folkeskole during 2026, but from 1 January 2025 knowledge/skills areas and their objectives are advisory rather than binding. Subject purposes, competency areas and competency goals remain binding.",
    fagfornyelsen: "The Ministry's Fagfornyelsen (Curriculum Renewal) is developing new, simpler subject plans. Second drafts were published in June 2026 and tested in schools; final plans are expected to be approved and issued in 2027.",
    effectiveDate: "New Folkeskole subject plans are scheduled to take effect from school year 2027/2028, replacing Fælles Mål.",
    2026Caution: "Do not present the 2026 draft plans as already adopted final curricula. Continue to label the current Fælles Mål separately from the draft Fagfornyelsen plans.",
    upperSecondary: "Gymnasium subjects use separate national subject curricula (læreplaner), with levels such as A, B and C and pathway-specific requirements."
  },
  subjects: [
    {
      subject: "Biology",
      localName: "Biologi",
      folkeskoleStatus: "Compulsory specialist subject in Grades 7–9. The Ministry identifies four competency areas: investigation, modelling, perspective and communication. Earlier grades receive integrated Natural Sciences/Technology rather than separate Biology.",
      upperSecondaryStatus: "Available as Biology A, B and C in stx; student subject combinations and levels depend on the chosen study programme. Other gymnasium pathways have their own subject offers and curricula.",
      sequenceScope: "Map the current Folkeskole Biology 7–9 competency goals and advisory knowledge/skills content separately from the stx Biology A/B/C curricula and other upper-secondary pathways.",
      chapterCount: null,
      chapterCountStatus: "National competency goals and subject curricula are not textbook chapter counts.",
      pending: ["Extract current Biology 7–9 competency goals and advisory content areas.", "Extract Biology A/B/C learning objectives and required practical work in stx.", "Check htx/hf and vocational variants where offered; verify textbook contents before assigning chapter counts."]
    },
    {
      subject: "Chemistry",
      localName: "Kemi; in Folkeskole taught jointly as Fysik/kemi",
      folkeskoleStatus: "Chemistry is not a separate compulsory Folkeskole subject in Grades 7–9; it is taught within the compulsory combined Physics/Chemistry subject. Earlier Grades 1–6 have integrated Natural Sciences/Technology.",
      upperSecondaryStatus: "Separate Chemistry A, B and C curricula are available in stx; levels and combinations vary by study programme. Technical upper-secondary pathways have separate subject curricula.",
      sequenceScope: "Retain the combined Physics/Chemistry designation for Folkeskole and extract chemistry strands without pretending they are an independently timetabled national subject. Map upper-secondary Chemistry separately.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract the Chemistry content and competencies within Fysik/kemi 7–9.", "Map Chemistry A/B/C in stx and the relevant htx/hf options.", "Verify current textbooks and their contents."]
    },
    {
      subject: "Physics",
      localName: "Fysik; in Folkeskole taught jointly as Fysik/kemi",
      folkeskoleStatus: "Physics is taught in the compulsory combined Physics/Chemistry subject in Grades 7–9. Earlier Grades 1–6 use integrated Natural Sciences/Technology.",
      upperSecondaryStatus: "Separate Physics A, B and C curricula are available in stx; Physics is compulsory at C level in the general stx subject structure, with higher levels in selected study programmes.",
      sequenceScope: "Keep Physics/Chemistry combined for Folkeskole, and map Physics A/B/C separately for stx and relevant technical pathways.",
      chapterCount: null,
      chapterCountStatus: "No official textbook chapter count established.",
      pending: ["Extract Physics competencies and advisory content within Fysik/kemi 7–9.", "Map Physics A/B/C learning objectives and experiments.", "Compare htx and other upper-secondary pathways; verify textbook contents."]
    },
    {
      subject: "Mathematics",
      localName: "Matematik",
      folkeskoleStatus: "Compulsory in Grades 1–9. Grade 10 is optional. The Ministry retains selected binding attention points in Mathematics in addition to the subject purpose, competency areas and competency goals.",
      upperSecondaryStatus: "Mathematics is a core stx subject with levels A, B and C; Mathematics A/B/C curricula are published separately. Requirements and levels differ across stx, hhx, htx and hf.",
      sequenceScope: "Map the Folkeskole Mathematics progression by its competency areas and grade stages, then separately map A/B/C level curricula for each upper-secondary pathway.",
      chapterCount: null,
      chapterCountStatus: "Competency progression and official subject curricula do not establish textbook chapter counts.",
      pending: ["Extract Mathematics competency areas, goals and grade-stage progression.", "Extract Mathematics A/B/C curriculum requirements for stx.", "Map hhx, htx and hf variants and verify textbook tables of contents."]
    }
  ],
  implementationNotes: [
    "Folkeskole Grades 1–6: Natural Sciences/Technology is integrated; do not create standalone national Biology, Chemistry and Physics sequences for these grades.",
    "Folkeskole Grades 7–9: Biology and Geography are separate subjects; Physics and Chemistry remain combined in Fysik/kemi.",
    "From 1 January 2025, knowledge/skills areas and objectives in Fælles Mål are advisory; subject purpose, competency areas and competency goals remain binding.",
    "From 1 August 2025, Folkeskole schools are no longer required to prepare local curricula.",
    "Fagfornyelsen second drafts were published June 2026; final subject plans are scheduled to take effect in 2027/28. Drafts must not be presented as final policy.",
    "Upper-secondary education includes distinct stx, hhx, htx and hf curricula. A/B/C are subject levels, not school grades or textbook chapter counts."
  ],
  officialSources: [
    {
      title: "Ministry of Education — Subjects and curriculum in the Folkeskole",
      url: "https://eng.uvm.dk/primary-and-lower-secondary-education/the-folkeskole/subjects-and-curriculum",
      use: "Official subject list and grade bands; integrated Natural Sciences/Technology in Grades 1–6, Biology and Physics/Chemistry in Grades 7–9; Fagfornyelsen effective 2027/28."
    },
    {
      title: "Ministry — Compulsory subjects and Fælles Mål",
      url: "https://uvm.dk/grundskole/folkeskolen/fag-og-indhold/fag-emner-og-tvaergaaende-temaer/faelles-maal/faelles-maal-for-folkeskolens-fag/obligatoriske-fag/",
      use: "Official subject descriptions including Biology and grade range; current binding status."
    },
    {
      title: "Ministry — Physics/Chemistry subject",
      url: "https://uvm.dk/folkeskolen/fag-timetal-og-overgange/fag-emner-og-tvaergaaende-temaer/faelles-maal/faelles-maal-for-folkeskolens-fag/obligatoriske-fag",
      use: "Confirms Fysik/kemi is a compulsory combined subject in Grades 7–9 and optional in Grade 10."
    },
    {
      title: "Ministry — Fælles Mål status",
      url: "https://uvm.dk/grundskole/folkeskolen/fag-og-indhold/fag-emner-og-tvaergaaende-temaer/faelles-maal/",
      use: "Explains binding competency goals, advisory knowledge/skills content and 2027/28 replacement."
    },
    {
      title: "Ministry — Fagfornyelsen",
      url: "https://uvm.dk/grundskole/folkeskolen/lovgivning-og-politiske-aftaler/politiske-aftaler/folkeskolens-kvalitetsprogram/fagfornyelsen/om-fagfornyelsen/",
      use: "Official reform purpose, second draft publication in June 2026, development process and planned effective date."
    },
    {
      title: "Ministry — Second draft release, 26 June 2026",
      url: "https://uvm.dk/aktuelt/nyheder/2026/juni/260624-nu-kan-alle-igen-give-input-til-udkast-til-folkeskolens-fagplaner/",
      use: "Confirms draft status, public feedback process, testing and intended start from 1 August 2027."
    },
    {
      title: "Ministry — STX study programmes",
      url: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/uddannelser/studentereksamen-stx/studieretninger-i-almen-studentereksamen/",
      use: "Official combinations of Biology, Chemistry, Physics and Mathematics A/B levels in stx study programmes."
    },
    {
      title: "Ministry — STX subject curricula",
      url: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/fag-og-laereplaner/stx-laereplaner/",
      use: "Separate Biology A/B/C, Chemistry A/B/C, Physics A/B/C and Mathematics A/B/C curricula and guidance."
    },
    {
      title: "Ministry — Four gymnasium pathways",
      url: "https://uvm.dk/uddannelse-til-unge/gymnasiale-uddannelser/uddannelser/overblik-over-gymnasiale-uddannelser/",
      use: "Distinguishes stx, hhx, htx and hf."
    }
  ],
  reconciliation: {
    biology: "Separate Folkeskole Biology Grades 7–9 and stx A/B/C pathways; integrated early-grade science preserved.",
    chemistry: "Combined with Physics in Folkeskole Fysik/kemi Grades 7–9; separate upper-secondary Chemistry pathways.",
    physics: "Combined with Chemistry in Folkeskole Fysik/kemi Grades 7–9; separate upper-secondary Physics pathways.",
    mathematics: "Separate compulsory Folkeskole subject Grades 1–9; upper-secondary A/B/C pathways.",
    officialChapterCounts: "Not verified for any subject.",
    cbeNexusChapterContent: "No claim of 10,000+ words, 10+ diagrams or 15+ questions per chapter is made."
  },
  overallStatus: "Official Folkeskole subject structure, 2025 relaxation of Fælles Mål requirements, 2026 draft reform status and stx subject curricula confirmed; detailed grade-stage outcomes, all upper-secondary pathway mapping and textbook chapter counts remain pending."
};

export const chapterEvidenceReconciliation = {
  reviewedOn: "2026-11-16",
  country: "Denmark",
  gradeSequenceEvidence: "Folkeskole uses national common objectives (Fælles Mål) and subject curricula, with upper-secondary gymnasium programmes separate. Science is integrated in early grades and specialist Biology, Chemistry/Physics-related subjects and Mathematics progress through later grades and upper-secondary pathways.",
  textbookEvidence: "No actual textbook contents inspected; local school materials and subject plans need matching to official objectives.",
  actualTextbookContentsInspected: false,
  officialTextbookChapterCountsVerified: false,
  officialChapterCount: null,
  evidenceSource: "https://www.uvm.dk/",
  nextRequiredWork: "Extract official grade/year/term topic headings for Biology or integrated Life Science, Chemistry, Physics and Mathematics. Then inspect adopted student textbooks and record printed chapter titles and counts separately; do not infer chapters from standards or themes."
};
