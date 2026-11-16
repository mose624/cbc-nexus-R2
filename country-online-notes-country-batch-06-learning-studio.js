/* CBE Nexus Batch 06 — expanded supplementary Learning Studio content for countries 51–60.
   Adds four substantive modules per available subject chapter across the existing country records.
   Curriculum alignment remains subject-, grade-, pathway- and cohort-specific and requires official verification.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Mexico": {
    "level": "Educación Básica and Educación Media Superior",
    "authority": "Secretaría de Educación Pública (SEP)",
    "curriculum": "Nueva Escuela Mexicana and the Plan de Estudio 2022 guide basic education; upper-secondary education uses the Marco Curricular Común de la Educación Media Superior with subsystems and institutional programmes. Subject sequence differs between basic and upper-secondary stages.",
    "exam": "School assessments and applicable upper-secondary certification or admission assessments; confirm current subsystem requirements.",
    "languages": "Spanish is the principal language; Indigenous language education and intercultural bilingual provision are important in many communities.",
    "source": "https://www.gob.mx/sep"
  },
  "Micronesia": {
    "level": "Elementary and secondary education across the four states",
    "authority": "Federated States of Micronesia Department of Education and state education departments",
    "curriculum": "Education governance is shared between the national department and the states of Yap, Chuuk, Pohnpei and Kosrae. Curriculum, language practices and school implementation vary by state; verify the specific state curriculum and senior-secondary pathway.",
    "exam": "School-based assessment and applicable national or regional assessments; confirm the current state and school graduation requirements.",
    "languages": "English is used in formal education alongside state and local languages including Chuukese, Pohnpeian, Kosraean and Yapese.",
    "source": "https://www.doe.fm/"
  },
  "Moldova": {
    "level": "Primary, gymnasium (grades 5–9) and lyceum (grades 10–12)",
    "authority": "Ministry of Education and Research; National Agency for Curriculum and Evaluation (ANCE)",
    "curriculum": "The national curriculum is centrally defined through the National Curriculum Reference Framework and subject curricula. Gymnasium and lyceum programmes differ, and upper-secondary vocational routes should be distinguished from general lyceum study.",
    "exam": "Gymnasium graduation assessments and the national Baccalaureate examination for relevant lyceum programmes.",
    "languages": "Romanian is the state language; education is also available in minority languages, including Russian, under national provisions.",
    "source": "https://mec.gov.md/; https://ance.gov.md/"
  },
  "Monaco": {
    "level": "Collège and lycée",
    "authority": "Direction de l’Éducation Nationale, de la Jeunesse et des Sports (DENJS)",
    "curriculum": "Monaco's education system is closely aligned with the French national education framework, with local arrangements and Monaco-specific context. Collège and lycée pathways and examination requirements should be checked against current Monaco and French programme documents.",
    "exam": "French national examinations and qualifications as applicable, including Diplôme national du brevet and baccalauréat pathways.",
    "languages": "French is the main language of instruction; Monegasque, Italian and other languages have cultural or educational roles.",
    "source": "https://www.gouv.mc/"
  },
  "Montenegro": {
    "level": "Primary, lower secondary and general/vocational upper secondary",
    "authority": "Ministry of Education, Science and Innovation; Institute for Education (Zavod za školstvo)",
    "curriculum": "National education programmes and subject catalogues guide teaching. Gymnasium and vocational secondary programmes have different subject hours and learning outcomes; current catalogue and programme versions should be checked for each grade.",
    "exam": "External assessment at the end of primary education and Matura examinations for relevant secondary programmes; vocational final examinations differ.",
    "languages": "Montenegrin is the official language; Serbian, Bosnian, Albanian and Croatian are also used in education according to school and community.",
    "source": "https://www.gov.me/mps; https://www.zzs.gov.me/"
  },
  "Nauru": {
    "level": "Primary and secondary education",
    "authority": "Nauru Department of Education",
    "curriculum": "Nauru's small national education system uses local policy and school programmes, with regional Pacific examination and qualification arrangements relevant to some senior secondary learners. Confirm current subject offerings and curriculum sequence with the Department and school.",
    "exam": "School-based assessment and applicable regional Pacific senior-secondary examinations; verify current arrangements.",
    "languages": "Nauruan and English are used; English is prominent in formal schooling and Nauruan is central to national and community life.",
    "source": "https://www.nauru.gov.nr/"
  },
  "Netherlands": {
    "level": "VMBO, HAVO and VWO secondary pathways",
    "authority": "Ministry of Education, Culture and Science; SLO (Netherlands Institute for Curriculum Development)",
    "curriculum": "National attainment targets and examination programmes apply across secondary education, but VMBO, HAVO and VWO have distinct routes and subject depth. Upper-secondary subject combinations and central examination syllabuses must be matched to the pathway and cohort.",
    "exam": "School examinations and central written examinations (eindexamen) for relevant VMBO, HAVO and VWO qualifications.",
    "languages": "Dutch is the main language of instruction; Frisian has official status in Friesland and international/bilingual programmes are available.",
    "source": "https://www.rijksoverheid.nl/onderwerpen/voortgezet-onderwijs; https://www.slo.nl/"
  },
  "New Zealand": {
    "level": "Years 9–13 secondary schooling; national curriculum pathways",
    "authority": "Ministry of Education; Tāhūrangi curriculum portal; New Zealand Qualifications Authority (NZQA)",
    "curriculum": "The New Zealand Curriculum and Te Marautanga o Aotearoa are distinct national pathways. The National Curriculum Statement 2026 takes effect 1 January 2027, with staged implementation. Senior secondary Years 11–13 and NCEA subject standards require separate alignment; Māori-medium and bilingual contexts must be respected.",
    "exam": "NCEA and other approved qualifications; assessment standards and implementation dates vary by cohort and subject.",
    "languages": "English and te reo Māori are important languages of education; Te Marautanga o Aotearoa supports Māori-medium education and other language pathways.",
    "source": "https://www.education.govt.nz/our-work/legislation/secondary-legislation/national-curriculum-statement-2026; https://tahurangi.education.govt.nz/; https://www.nzqa.govt.nz/"
  },
  "Nicaragua": {
    "level": "Educación Básica and Educación Media",
    "authority": "Ministerio de Educación (MINED)",
    "curriculum": "Nicaragua's national curriculum includes basic and secondary education, with regular, multigrade, technical and intercultural bilingual modalities. Grade sequence and language of instruction may differ by modality and region; consult current MINED programmes and planning documents.",
    "exam": "School assessments and official completion requirements under MINED; verify current national assessment arrangements and modality.",
    "languages": "Spanish is the main language; Caribbean Coast regions include Indigenous and Afro-descendant languages and intercultural bilingual education.",
    "source": "https://www.mined.gob.ni/"
  },
  "North Macedonia": {
    "level": "Primary and secondary education; gymnasium and vocational programmes",
    "authority": "Ministry of Education and Science; Bureau for Development of Education (BDE)",
    "curriculum": "National curricula and subject programmes are developed through the education authorities. Gymnasium, vocational and language-of-instruction pathways may differ in course allocation and subject depth; check current grade-specific programmes.",
    "exam": "State Matura for applicable secondary programmes and vocational final examinations for relevant pathways.",
    "languages": "Macedonian and Albanian are widely used as languages of instruction; Turkish, Serbian, Bosnian and other community languages are also represented.",
    "source": "https://mon.gov.mk/; https://www.bro.gov.mk/"
  }
};
const topics={
  "Biology": [
    [
      "Cell systems and specialised organisation",
      "Cells maintain life through coordinated biochemical reactions. The plasma membrane regulates exchange; cytoplasm contains enzymes and organelles; genetic information directs protein synthesis. Specialised cells develop structures suited to particular functions. When comparing cells, use observable features and explain how each feature contributes to function. Distinguish prokaryotic cells, which lack a membrane-bound nucleus, from eukaryotic cells, which contain one.",
      "Connect cell organisation to tissues, organs and systems. In a multicellular organism, specialised cells cooperate and depend on transport systems to exchange materials. Explain surface-area-to-volume ratio when discussing exchange: as a cell grows, volume increases faster than surface area, potentially limiting the rate of exchange. Apply this reasoning to alveoli, root hair cells or intestinal villi."
    ],
    [
      "Physiology, regulation and disease",
      "Organ systems coordinate exchange, transport, nutrition, gas exchange, excretion and response. Homeostasis keeps internal conditions within ranges that support enzyme activity. A negative feedback loop includes a receptor, coordination centre and effector; the response reduces the original deviation. Use precise examples and distinguish a stimulus from the response.",
      "Disease may result from pathogens, inherited variation, environmental exposure or lifestyle factors. Evaluate prevention using evidence: vaccination, sanitation, nutrition, vector control and access to healthcare address different causes. Avoid assuming a single intervention solves every public-health problem; consider effectiveness, accessibility, cost and community context."
    ],
    [
      "Genetics, evolution and biodiversity",
      "DNA stores hereditary information in sequences of nucleotides. Genes influence protein production and inherited characteristics; alleles are alternative forms of a gene. Meiosis produces genetically varied gametes through segregation and recombination. A genetic cross should define alleles, state parental genotypes, identify gametes and interpret offspring probabilities.",
      "Evolution describes changes in heritable characteristics of populations over generations. Variation, selection pressures, differential reproductive success and inheritance contribute to natural selection. Biodiversity exists at genetic, species and ecosystem levels. Conservation decisions should consider habitat connectivity, invasive species, climate pressures and the needs of local communities."
    ],
    [
      "Ecology, fieldwork and data analysis",
      "An ecosystem includes organisms and their abiotic environment. Energy moves through food chains and webs; nutrients cycle through decomposers and physical processes. Population size changes with births, deaths, immigration and emigration. Sampling with quadrats or transects must use a consistent method, suitable sample size and representative locations.",
      "Record field observations in tables with units and clear categories. Calculate means or rates where appropriate, graph the data and describe patterns before explaining them. Identify anomalies without deleting them without justification. A valid conclusion refers to evidence and considers alternative explanations, sampling bias and limitations of the method."
    ]
  ],
  "Chemistry": [
    [
      "Atomic models and periodic trends",
      "Atomic structure explains chemical identity and behaviour. Proton number defines an element; isotopes differ in neutron number. Electrons occupy quantised energy levels and sublevels, and outer-electron arrangements help explain chemical reactivity. Use isotope notation and distinguish mass number from relative atomic mass, which is a weighted mean based on isotope abundance.",
      "Periodic trends arise from nuclear charge, electron shielding and distance from the nucleus. Explain atomic radius, ionisation energy and electronegativity through these factors rather than memorising directions alone. State the trend, identify the relevant comparison and explain how attraction between the nucleus and outer electrons changes."
    ],
    [
      "Chemical bonding and material behaviour",
      "Ionic, covalent and metallic bonding are models for different particle arrangements. Ionic lattices contain oppositely charged ions; covalent molecules contain shared electron pairs; giant covalent structures have extended networks; metals contain positive ions and delocalised electrons. Link each structure to melting point, hardness and electrical conductivity.",
      "Intermolecular forces act between molecules and are distinct from covalent bonds within molecules. Stronger intermolecular attractions generally require more energy to overcome during melting or boiling. Explain solubility using interactions between solute and solvent particles, and avoid the oversimplification that all ionic substances dissolve in water or all covalent substances do not."
    ],
    [
      "Chemical change, equilibrium and quantities",
      "Chemical reactions rearrange atoms and conserve total atoms and charge. Balance equations using coefficients. Reaction rate depends on factors such as concentration, pressure for gases, temperature, surface area and catalysts. Collision theory explains rate changes through collision frequency and the proportion of collisions with sufficient energy and suitable orientation.",
      "Quantitative chemistry uses the mole to connect particles, mass and gas or solution quantities. Start with a balanced equation, convert known quantities to moles, apply the stoichiometric ratio and convert to the requested unit. For reversible reactions, dynamic equilibrium occurs when forward and reverse rates are equal in a closed system; concentrations remain constant, not necessarily equal."
    ],
    [
      "Analysis, organic chemistry and laboratory practice",
      "Analytical methods identify substances and measure composition. Chromatography separates components according to differing affinities for stationary and mobile phases; calculate retention factors only when the method and solvent front are clearly defined. Organic chemistry studies carbon compounds, functional groups, homologous series and patterns in physical and chemical properties.",
      "Plan practical work with a clear aim, suitable apparatus, controlled variables and safe reagent handling. Record observations precisely and distinguish qualitative evidence from quantitative measurement. Explain percentage yield and purity calculations, sources of product loss and improvements. Dispose of chemicals according to local laboratory rules; never improvise hazardous tests."
    ]
  ],
  "Physics": [
    [
      "Kinematics, forces and momentum",
      "Motion is described using displacement, velocity and acceleration. Use consistent sign conventions and interpret gradient and area on motion graphs. A constant gradient on a displacement-time graph indicates constant velocity; the gradient of a velocity-time graph is acceleration. The area under a velocity-time graph gives displacement over the interval.",
      "Newton's laws connect resultant force, mass and acceleration. Momentum is the product of mass and velocity; in an isolated system total momentum is conserved. For collisions, define the system and direction, show initial and final momentum and state assumptions. Distinguish conservation of momentum from conservation of kinetic energy."
    ],
    [
      "Energy, thermal physics and waves",
      "Energy is transferred between stores; total energy is conserved, although useful energy may be dissipated. Calculate work, power and efficiency using appropriate definitions and units. Thermal transfer occurs through conduction, convection and radiation; explain each using particle collisions, fluid movement or electromagnetic waves.",
      "Waves are described by amplitude, wavelength, frequency, period and speed. Use v=fλ and check units. Reflection, refraction, diffraction and interference depend on wave behaviour and boundaries. Sound requires a medium, while electromagnetic waves can travel through a vacuum. Relate wave properties to applications such as communication, medical imaging or monitoring."
    ],
    [
      "Electricity, magnetism and modern physics",
      "Current, potential difference, resistance, charge and electrical energy are related quantities. Analyse circuit topology before using equations. In series, current is common and potential differences add; in parallel, branch potential differences are equal and currents add. Use P=IV and E=Pt with units and stated assumptions.",
      "Magnetic fields arise from magnets and currents. Electromagnetic induction occurs when magnetic flux linkage changes; the direction follows Lenz's law. Modern physics introduces photons, atomic spectra, nuclear structure and radioactive decay. Distinguish alpha, beta and gamma radiation by ionising ability, penetration and charge, and explain safety through time, distance and shielding."
    ],
    [
      "Measurement, uncertainty and experimental design",
      "An investigation requires a measurable question, operational definitions, controlled conditions and suitable instruments. Repeat readings, calculate averages where meaningful and estimate uncertainty from instrument resolution or data spread. Significant figures should reflect measurement precision rather than create false accuracy.",
      "Graph data with labelled axes, units and a suitable scale. Use a best-fit line or curve and interpret its gradient or intercept physically. Evaluate validity, reliability and limitations separately. Suggest improvements that address a named source of uncertainty, such as automated timing, calibrated sensors, reduced parallax or a wider range of independent-variable values."
    ]
  ],
  "Mathematics": [
    [
      "Number, algebra and proof",
      "Use rational, irrational, real and complex number ideas at the level of the relevant course. Work accurately with indices, surds, logarithms, ratios and percentages. In algebra, expand, factorise, rearrange and solve equations while preserving equivalence. State restrictions when denominators, square roots or logarithms impose domain conditions.",
      "A mathematical proof uses definitions, established results and logically connected steps. Test conjectures with examples, but recognise that examples alone do not prove a universal statement. Use counterexamples to disprove claims. When solving simultaneous equations, select substitution, elimination or graphical methods and interpret solutions in the original context."
    ],
    [
      "Functions, calculus and geometry",
      "Functions describe relationships between inputs and outputs. Interpret domain, range, inverse and composite functions. Graphs communicate behaviour, including intercepts, turning points, asymptotes and rates of change. Explain how transformations affect a graph and distinguish a graphical estimate from an exact algebraic result.",
      "Where calculus is part of the course, differentiation represents instantaneous rate of change and gradient; integration can represent accumulated change or area under a curve. State the variable and units. Geometry and trigonometry require accurate diagrams, definitions and justified relationships; use radians or degrees consistently and check calculator mode."
    ],
    [
      "Statistics, probability and modelling",
      "Choose statistical summaries according to data type and distribution. Mean, median, mode, quartiles and standard deviation answer different questions. Correlation does not by itself establish causation. Consider sampling bias, confounding variables and the population to which a conclusion may reasonably apply.",
      "Probability models use sample spaces, conditional probability and independence. Use tree diagrams, tables or algebra to avoid double counting. A mathematical model makes assumptions to simplify a real situation; state them, solve the model, interpret the result and test whether it is plausible. Explain how model limitations affect decisions."
    ],
    [
      "Mathematical communication and applied problem solving",
      "Translate word problems into variables, equations, inequalities, diagrams or statistical models. Identify known values, unknowns, constraints and units before calculating. Show a method that another person can follow, and use estimation or an alternative method to check the answer.",
      "In extended tasks, organise reasoning into stages and justify method selection. Round only as instructed and retain sufficient precision during intermediate calculations. Use technology to explore patterns and verify computations, but explain the mathematics behind the output. Report conclusions in context and identify values that are mathematically possible but contextually invalid."
    ]
  ],
  "English": [
    [
      "Close reading, interpretation and context",
      "Interpret texts by considering form, purpose, audience, context and viewpoint. Identify the central argument or narrative development, then analyse how language, structure and evidence shape meaning. Distinguish an author's claim from supporting evidence and from the reader's inference. Use brief, accurate quotations and explain their relevance.",
      "Compare texts through a clear organising idea: perspective, tone, representation, structure or use of evidence. Consider historical and cultural context without reducing a text to background information. Evaluate whose experiences are represented and how language positions the reader. Support each interpretation with textual detail."
    ],
    [
      "Composition, argument and creative craft",
      "Plan writing around a precise purpose and audience. Argumentative writing needs a defensible thesis, coherent reasons, relevant evidence, counterargument and a conclusion that follows from the discussion. Expository writing needs clear definitions, logical sequencing and examples; creative writing needs controlled viewpoint, character, setting and purposeful detail.",
      "Develop paragraphs with a central claim or idea, explanation and evidence. Use transitions to show relationships between points. Vary sentence length and syntax for clarity and emphasis. Edit for cohesion, register, grammar and punctuation. Avoid padding: every paragraph should advance the purpose or deepen the reader's understanding."
    ],
    [
      "Language, rhetoric and communication",
      "Analyse diction, imagery, figurative language, sound, syntax, repetition and rhetorical questions in relation to effect. A technique label is not an analysis: explain what the choice suggests, how it shapes tone or emphasis and why it may influence the intended audience. Distinguish denotation from connotation.",
      "Use grammar as a resource for meaning. Maintain tense and agreement, construct clear clauses and punctuate sentences accurately. Formality depends on context and audience. Language varieties and multilingual practices should be described respectfully; evaluate communication effectiveness without treating a community's dialect as deficient."
    ],
    [
      "Research, digital literacy and speaking",
      "Research requires a focused question and a transparent method for selecting sources. Evaluate authorship, expertise, publication date, evidence, purpose and corroboration. Paraphrase by rebuilding the idea in your own language and structure, and acknowledge sources as required. Separate factual reporting, interpretation and persuasive framing.",
      "Prepare oral presentations with a clear opening, signposted sequence, relevant evidence and a purposeful conclusion. Adapt pace, vocabulary and visual support to the audience. In digital media, examine headlines, images, editing, algorithms, sponsorship and omissions. Verify claims against independent reliable sources before repeating them."
    ]
  ]
};
const contexts={
  "Mexico": "arid deserts, mountain forests, tropical ecosystems, volcanoes, megadiversity, water management and urban growth",
  "Micronesia": "island and reef ecosystems, ocean currents, fisheries, freshwater security and climate resilience",
  "Moldova": "Dniester and Prut river basins, fertile soils, agriculture, forests and renewable energy",
  "Monaco": "Mediterranean coastal habitats, urban density, marine conservation and sustainable transport",
  "Montenegro": "Adriatic coast, Dinaric Alps, karst landscapes, rivers, lakes and biodiversity",
  "Nauru": "phosphate geology, coral reefs, limited freshwater, coastal habitats and island sustainability",
  "Netherlands": "delta engineering, polders, rivers, coastal protection, agriculture and renewable energy",
  "New Zealand": "Aotearoa's mountains, volcanic landscapes, endemic species, coasts, Māori knowledge and renewable energy",
  "Nicaragua": "volcanoes, lakes, tropical forests, biodiversity, agriculture and freshwater resources",
  "North Macedonia": "Lake Ohrid, mountain ecosystems, river basins, agriculture and urban air quality"
};
const qs={
  "Biology": [
    "Explain how a cell or tissue structure is adapted to its function, using a labelled example.",
    "Design a fair investigation into one factor affecting an organism; identify variables, controls and safety considerations.",
    "Analyse ecological data and justify a conclusion using at least two pieces of evidence.",
    "Explain how genetic variation can influence the survival of a population under a changing selection pressure.",
    "Evaluate a conservation or public-health intervention in the country's environmental context."
  ],
  "Chemistry": [
    "Explain a periodic trend using nuclear charge, shielding and electron arrangement.",
    "Compare the properties of two substances using bonding and structure.",
    "Balance a chemical equation and use it to calculate an unknown reacting quantity.",
    "Describe a safe practical method and explain how observations support identification or measurement.",
    "Evaluate how experimental conditions influence reaction rate, yield or purity."
  ],
  "Physics": [
    "Use a motion or force model to solve a multistep problem with units.",
    "Interpret a graph and explain the physical meaning of its gradient or area.",
    "Explain an energy transfer and calculate efficiency or power.",
    "Analyse a circuit, wave or magnetic system when one variable changes.",
    "Plan a measurement investigation and evaluate uncertainty and validity."
  ],
  "Mathematics": [
    "Solve a multistep algebraic problem and verify the result.",
    "Model a real situation with a function, equation or inequality and state assumptions.",
    "Use statistical evidence to compare two data sets and discuss limitations.",
    "Calculate a conditional or compound probability using an appropriate representation.",
    "Justify a geometric or mathematical result with a clear chain of reasoning."
  ],
  "English": [
    "Analyse how a writer's choices shape meaning and audience response, using textual evidence.",
    "Write a coherent argument for a specified audience, including a counterargument.",
    "Compare two texts or viewpoints using a clear basis for comparison.",
    "Evaluate the reliability, bias and relevance of sources for a research task.",
    "Revise a passage to improve structure, cohesion, accuracy and register."
  ]
};
const subjects=["Biology","Chemistry","Physics","Mathematics","English"];
for(const [country,p] of Object.entries(profiles)){
 const r=all[country];if(!r)continue;
 r.curriculumAuthority=p.authority;r.curriculumLevel=p.level;r.curriculumSource=p.source;
 r.curriculumAuditStatus="country-pathway-profiled-subject-topic-mapping-pending";
 r.curriculumDescription=p.curriculum;r.curriculumExamination=p.exam;r.curriculumLanguages=p.languages;
 r.curriculumNotice="Supplementary Learning Studio expansion. Confirm grade, programme, subject specification and examination cohort against current official documents.";
 let count=0;
 for(const [grade,bank] of Object.entries(r.levels||{})){
  for(const subject of subjects){
   const chapters=bank?.[subject];if(!Array.isArray(chapters)||!chapters.length)continue;
   const chapter=chapters[0];chapter.sections=Array.isArray(chapter.sections)?chapter.sections:[];
   for(let i=0;i<topics[subject].length;i++){
    const t=topics[subject][i];
    chapter.sections.push({heading:t[0]+" — "+country+" extended study",paragraphs:[t[1],t[2],"Country application: "+contexts[country]+". Use this setting as a case study, not as a substitute for measured evidence. Identify the relevant system, the variables or processes involved, and the scale at which the explanation applies. Compare more than one source or observation where possible. Avoid generalising from one region, school, ecosystem or community to the entire country.","Extended examination guidance: begin with a precise definition; identify the principle or model; apply it to the data or context in the question; show calculations or textual evidence where needed; and finish with a justified conclusion. In an evaluation, discuss strengths, limitations and a realistic improvement. Confirm that the topic belongs to the learner's current "+p.level+" programme before describing it as prescribed content."],keyTerms:[t[0], "evidence","application","evaluation"],workedExamples:[{title:"Extended guided example",question:"Apply "+subject+" to a case involving "+contexts[country]+".",solution:"Identify the concept and define it accurately. Select relevant information from the case, connect it to the scientific, mathematical or language principle, and explain each reasoning step. Use units and equations where required; use precise textual evidence for English. State a conclusion that follows from the evidence and identify one limitation.",marks:6}]});
   }
   chapter.realLifeApplications=(chapter.realLifeApplications||[]).concat(["Country case study: "+contexts[country]+". Explain how "+subject+" helps investigate or address one challenge in this setting.","Transfer task: compare the same "+subject+" principle in a second environment and explain which conditions remain constant and which differ."]);
   chapter.practicalActivities=(chapter.practicalActivities||[]).concat([{title:country+" "+subject+" investigation and communication task",description:"Develop a question using a teacher-approved local case, simulation or open data. Define variables or selection criteria, plan a safe and ethical method, collect or select evidence, present results clearly and evaluate limitations. Cite sources and do not infer beyond the evidence."}]);
   chapter.commonMisconceptions=(chapter.commonMisconceptions||[]).concat([{misconception:"A single example or data point proves a universal rule.",correction:"Test explanations against repeated evidence, context and alternative interpretations."},{misconception:"A correct final answer is enough in an extended task.",correction:"Show definitions, method, reasoning, units or textual evidence and a justified conclusion."}]);
   chapter.questions=(chapter.questions||[]).concat(qs[subject].map((q,i)=>({q,a:"Model answer guidance: define the relevant concept, apply it to the stated situation, show accurate reasoning or working, support claims with evidence and state a justified conclusion. Credit valid alternative methods and equivalent terminology.",marks:i<2?4:5,category:i<2?"Understanding and application":"Analysis, evaluation and communication",markingPoints:["Accurate subject knowledge and terminology.","Relevant application to the question context.","Logical method, evidence or calculation.","Reasoned conclusion and evaluation where required."]})));
   chapter.summary=(chapter.summary||[]).concat(["Extended study: "+topics[subject].map(x=>x[0]).join("; ")+".","Country case study: "+contexts[country]+".","Curriculum check: "+p.level+" — consult "+p.authority+" for the current grade and programme sequence."]);
   chapter.curriculumStatus="supplementary-unverified";
   chapter.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". This expanded CBE Nexus material is supplementary and is not certified as a complete official syllabus.";
   chapter.seoTitle=country+" "+grade+" "+subject+" Expanded Notes and Worked Examples | CBE Nexus";
   chapter.metaDescription="Expanded "+subject+" notes for "+country+" with detailed concept explanations, country case studies, guided worked examples, practical investigations and examination practice. Check current official curriculum requirements.";
   chapter.seoKeywords=[country+" "+subject+" notes",country+" "+grade+" "+subject+" curriculum",country+" "+subject+" worked examples",country+" "+subject+" practical investigations",country+" "+subject+" examination questions","CBE Nexus Learning Studio"];
   count++;
  }
 }
 r.batch06ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_06={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-06"};
})();