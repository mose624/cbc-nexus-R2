/* CBE Nexus Batch 07 — expanded supplementary Learning Studio content for countries 61–70.
   Five subject pathways; curriculum and examination alignment remains grade-, pathway- and cohort-specific.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Norway": {
    "level": "Lower secondary and upper secondary (videregående)",
    "authority": "Norwegian Directorate for Education and Training (Udir)",
    "curriculum": "The national curriculum LK20 includes core curriculum, subject curricula and interdisciplinary topics. Lower-secondary and upper-secondary pathways, programme subjects and assessment arrangements differ; use the current subject curriculum and cohort-specific requirements.",
    "exam": "School assessment and upper-secondary examinations under current Udir rules; programme and subject choices affect examination arrangements.",
    "languages": "Norwegian Bokmål and Nynorsk; Sámi-language education and other language provisions apply in relevant communities.",
    "source": "https://www.udir.no/"
  },
  "Oman": {
    "level": "Basic Education and post-basic education",
    "authority": "Ministry of Education, Sultanate of Oman",
    "curriculum": "Oman's national school system includes basic education and post-basic education. Subject plans, grade sequence and assessment must be checked against the current Ministry curriculum and the learner's school pathway.",
    "exam": "School-based assessment and applicable general education diploma examinations; confirm current subject and cohort requirements.",
    "languages": "Arabic is the principal language of instruction; English is taught as a major additional language.",
    "source": "https://www.moe.gov.om/"
  },
  "Pakistan": {
    "level": "Grades IX–XII; provincial and federal education systems",
    "authority": "National Curriculum Council, Ministry of Federal Education and Professional Training, plus provincial and regional education boards",
    "curriculum": "Pakistan has federal curriculum coordination alongside provincial and regional implementation. The National Curriculum of Pakistan 2026 for English, Mathematics, Physics, Chemistry and Biology in grades IX–XII is scheduled for implementation in ICT and federal institutions from academic year 2027; provincial adoption and board syllabuses must be checked separately.",
    "exam": "Board examinations vary by province, region and board; consult the relevant BISE or FBISE syllabus and assessment scheme.",
    "languages": "Urdu and English are widely used in formal education; provincial and regional languages are important and medium of instruction varies.",
    "source": "https://www.ncc.gov.pk/"
  },
  "Palau": {
    "level": "Elementary and secondary education",
    "authority": "Palau Ministry of Education",
    "curriculum": "The national education system is guided by Palau education policy and standards, with school and subject implementation requiring confirmation from the Ministry. Verify grade-level scope, language, senior secondary subjects and current learning standards before claiming exact syllabus alignment.",
    "exam": "School-based assessments and applicable graduation or college-entry requirements; verify current national arrangements.",
    "languages": "Palauan and English are official languages and both have important roles in education.",
    "source": "https://www.palaumoe.net/"
  },
  "Palestine": {
    "level": "Basic education and secondary education (Tawjihi pathway)",
    "authority": "Palestinian Ministry of Education and Higher Education",
    "curriculum": "The Palestinian national curriculum and subject textbooks are administered through the Ministry. Grade, stream, current textbook edition and examination cohort should be mapped directly to the current official subject plans, including the academic and vocational secondary pathways.",
    "exam": "General Secondary Education Certificate Examination (Tawjihi), with stream- and cohort-specific requirements.",
    "languages": "Arabic is the principal language of instruction; English and other languages are taught as subjects.",
    "source": "https://www.moe.edu.ps/"
  },
  "Panama": {
    "level": "Educación Básica General and Educación Media",
    "authority": "Ministerio de Educación de Panamá (MEDUCA)",
    "curriculum": "Panama's national education structure includes premedia within Educación Básica General and Educación Media pathways. Subject programmes, bachillerato specialisations and learning outcomes should be checked against current MEDUCA plans and the learner's modality.",
    "exam": "School assessments and applicable bachillerato completion requirements; confirm current national and institutional rules.",
    "languages": "Spanish is the main language of instruction; Indigenous languages and bilingual intercultural education are relevant in designated communities.",
    "source": "https://www.meduca.gob.pa/"
  },
  "Papua New Guinea": {
    "level": "Lower secondary Grades 9–10 and upper secondary Grades 11–12",
    "authority": "Papua New Guinea Department of Education, Curriculum Development Division",
    "curriculum": "The Standard Based Curriculum provides separate Grades 9–10 and Grades 11–12 syllabuses. Upper-secondary sciences are offered as Biology, Chemistry and Physics; Mathematics includes General and Advanced pathways. Match each unit to the current grade syllabus and teacher guide.",
    "exam": "School Certificate external examination at end of Grade 10 and Higher School Certificate external examination at end of Grade 12.",
    "languages": "English is the main language of formal secondary instruction; Tok Pisin, Hiri Motu and many local languages are used in wider community life.",
    "source": "https://www.education.gov.pg/secondary"
  },
  "Paraguay": {
    "level": "Educación Escolar Básica and Educación Media",
    "authority": "Ministerio de Educación y Ciencias (MEC), Paraguay",
    "curriculum": "Paraguay's national curriculum includes Educación Escolar Básica and a three-year Educación Media stage with scientific and technical pathways. Subject plans and competencies should be matched to the relevant bachillerato and current MEC programme.",
    "exam": "School-based assessment and applicable Educación Media completion and university-entry requirements; verify current arrangements.",
    "languages": "Spanish and Guaraní are official languages; bilingual education and language use vary by community and school.",
    "source": "https://www.mec.gov.py/"
  },
  "Peru": {
    "level": "Educación Básica Regular: primary and secondary; upper-secondary completion",
    "authority": "Ministerio de Educación del Perú (MINEDU)",
    "curriculum": "The Currículo Nacional de la Educación Básica and national programmes organise learning through competencies, capacities and performance standards. Secondary subject areas and grade-level performance expectations should be mapped to the current MINEDU programme and relevant modality.",
    "exam": "School-based competency assessment and applicable national assessments or admission examinations; verify current year and purpose.",
    "languages": "Spanish is widely used in schooling; Quechua, Aymara and other Indigenous languages are used in intercultural bilingual education.",
    "source": "https://www.gob.pe/minedu"
  },
  "Philippines": {
    "level": "K–12 basic education; Grades 7–10 junior high and Grades 11–12 senior high",
    "authority": "Department of Education (DepEd), Philippines",
    "curriculum": "The K–12 system includes the MATATAG Curriculum rollout in elementary and junior high grade levels, while other grade cohorts and senior high school follow applicable transition and subject requirements. Check the current DepEd curriculum guides and cohort-specific implementation schedule.",
    "exam": "School-based assessment and applicable national assessments; senior high completion and admission requirements depend on current DepEd and institution rules.",
    "languages": "Filipino and English are official languages of instruction; mother-tongue and regional language contexts are important in basic education.",
    "source": "https://www.deped.gov.ph/"
  }
};
const contexts={
  "Norway": "fjords, glaciers, Arctic and boreal ecosystems, hydropower, fisheries, offshore energy and climate adaptation",
  "Oman": "arid deserts, wadis, mountain ecosystems, desalination, water conservation, solar energy and coastal marine habitats",
  "Pakistan": "Indus River basin, Himalayan and Karakoram glaciers, monsoon systems, agriculture, biodiversity, urbanisation and water security",
  "Palau": "coral reefs, marine biodiversity, island freshwater lenses, fisheries, coastal resilience and climate change",
  "Palestine": "Mediterranean ecosystems, semi-arid landscapes, water scarcity, agriculture, biodiversity and urban resource management",
  "Panama": "Panama Canal watershed, tropical rainforests, biodiversity corridors, coastal ecosystems, freshwater management and transport",
  "Papua New Guinea": "tropical rainforests, coral reefs, highland ecosystems, volcanic landscapes, biodiversity, mining and freshwater resources",
  "Paraguay": "Paraguay and Paraná river systems, Gran Chaco, Atlantic Forest, agriculture, wetlands and renewable hydropower",
  "Peru": "Andes, Amazon basin, Pacific coast, altitudinal ecosystems, glaciers, biodiversity, mining and water resources",
  "Philippines": "tropical islands, coral triangle, volcanoes, typhoons, mangroves, biodiversity, fisheries and disaster resilience"
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
   for(const t of topics[subject]){
    chapter.sections.push({heading:t[0]+" — "+country+" extended study",paragraphs:[t[1],t[2],"Country application: "+contexts[country]+". Treat this as a contextual case study, not as a substitute for measured evidence. Identify variables and scale, compare more than one observation where possible, and avoid generalising from one locality to the whole country.","Examination approach: define the concept, identify the principle or model, apply it to the data or context, show calculations or textual evidence, and finish with a justified conclusion. Evaluate limitations and improvements. Confirm the topic against the learner's current "+p.level+" programme before calling it prescribed content."],keyTerms:[t[0],"evidence","application","evaluation"],workedExamples:[{title:"Extended guided example",question:"Apply "+subject+" to a case involving "+contexts[country]+".",solution:"Define the relevant concept, select evidence from the case, connect it to the subject principle and explain each reasoning step. Show units and calculations where required, or use precise textual evidence for English. State a conclusion supported by evidence and identify one limitation.",marks:6}]});
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
 r.batch07ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_07={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-07"};
})();