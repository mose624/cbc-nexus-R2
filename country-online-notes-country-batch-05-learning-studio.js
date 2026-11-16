/* CBE Nexus — Country Batch 05 Learning Studio expansion.
   Ten countries × five subjects. Adds substantive supplementary modules to existing chapters.
   Content is not an official syllabus reproduction; topic-level mapping remains a separate audit.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Ireland": {
    "level": "Junior Cycle and Senior Cycle (Leaving Certificate)",
    "authority": "Department of Education; National Council for Curriculum and Assessment (NCCA)",
    "curriculum": "Junior Cycle specifications organise learning around key skills and subject learning outcomes. Senior Cycle subjects and levels are defined through current Leaving Certificate specifications; Biology, Chemistry, Physics, Mathematics and English have subject-specific outcomes and assessment components.",
    "exam": "Junior Cycle assessment; Leaving Certificate examinations and applicable coursework or assessment components.",
    "languages": "Irish and English; English is widely used, while Irish is a core subject and language of instruction in Irish-medium schools.",
    "source": "https://www.curriculumonline.ie/"
  },
  "Italy": {
    "level": "Scuola secondaria di primo grado and secondaria di secondo grado",
    "authority": "Ministero dell’Istruzione e del Merito (MIM)",
    "curriculum": "National Indicazioni Nazionali and Linee guida frame learning. Upper-secondary pathways include licei, istituti tecnici and istituti professionali; subject depth, laboratory hours and progression differ by pathway. The Esame di Stato concludes upper-secondary education.",
    "exam": "Esame di Stato conclusivo del secondo ciclo; INVALSI assessments at designated stages.",
    "languages": "Italian is the main language; recognised minority-language provisions and bilingual settings vary by region.",
    "source": "https://www.mim.gov.it/"
  },
  "Jamaica": {
    "level": "Grades 7–13; National Standards Curriculum and post-secondary sixth form",
    "authority": "Ministry of Education, Skills, Youth and Information; National Education Inspectorate; Caribbean Examinations Council",
    "curriculum": "The National Standards Curriculum guides lower-secondary learning. Upper-secondary schools commonly prepare learners for CSEC and CAPE subject syllabuses; the exact subject combination and sequence depend on the school and examination year.",
    "exam": "National Grade 6 assessments and school assessments; CXC CSEC and CAPE in participating schools.",
    "languages": "English is the official language of instruction; Jamaican Creole is widely used in everyday communication.",
    "source": "https://moey.gov.jm/"
  },
  "Kiribati": {
    "level": "Junior secondary and senior secondary education",
    "authority": "Ministry of Education, Republic of Kiribati",
    "curriculum": "National curriculum frameworks and subject programmes guide school learning, with regional Pacific qualifications and examination pathways relevant at senior levels. Confirm the current Kiribati syllabus, year level and examination arrangements with the Ministry and school.",
    "exam": "National school assessments and applicable Pacific regional senior-secondary examinations; verify the current pathway locally.",
    "languages": "English and Gilbertese (I-Kiribati); language of instruction varies by level and school policy.",
    "source": "https://www.moe.gov.ki/"
  },
  "Latvia": {
    "level": "Basic education (grades 1–9) and general secondary education (grades 10–12)",
    "authority": "Ministry of Education and Science of Latvia; National Centre for Education (VISC)",
    "curriculum": "Latvia's competency-based curriculum Skola2030 sets learning outcomes and subject areas. General secondary education offers courses at different levels and specialisation choices; current centralised examination requirements must be checked for each cohort.",
    "exam": "State examinations and centralised examinations under current national rules; school completion requirements depend on programme and cohort.",
    "languages": "Latvian is the state language of instruction; minority-language and transition arrangements follow current national law.",
    "source": "https://www.skola2030.lv/; https://www.visc.gov.lv/"
  },
  "Liechtenstein": {
    "level": "Oberschule, Realschule and Gymnasium pathways",
    "authority": "Office of Education (Schulamt) of the Principality of Liechtenstein",
    "curriculum": "Liechtenstein's school system includes differentiated lower-secondary pathways and academic upper-secondary Gymnasium. Curriculum structures are closely connected to the German-speaking educational region and Swiss/Austrian cooperation; school type determines course depth and progression.",
    "exam": "School-leaving qualifications and Gymnasium Matura; exact requirements depend on pathway and institution.",
    "languages": "German is the principal language of instruction; additional languages are taught in the curriculum.",
    "source": "https://www.llv.li/"
  },
  "Lithuania": {
    "level": "Basic education and upper-secondary education (gymnasium, grades 9–12)",
    "authority": "Ministry of Education, Science and Sport; National Agency for Education",
    "curriculum": "Updated national general curricula define competency-based learning outcomes. Upper-secondary learners study compulsory and chosen subjects, with state maturity examinations and programme-level requirements changing by cohort.",
    "exam": "Basic education achievement checks and Matura state examinations under the applicable cohort rules.",
    "languages": "Lithuanian is the state language of instruction; national minority schools may provide education in Polish, Russian and other languages under national rules.",
    "source": "https://www.nsa.smm.lt/; https://smsm.lrv.lt/"
  },
  "Luxembourg": {
    "level": "Enseignement secondaire classique and général; vocational pathways",
    "authority": "Ministry of Education, Children and Youth (MENJE)",
    "curriculum": "Luxembourg has classical, general and vocational secondary pathways. Language of instruction changes across subjects and school stages, and curriculum pathways are multilingual. Course choice, progression and assessment differ between divisions and programmes.",
    "exam": "Diplôme de fin d’études secondaires classiques or générales and vocational certificates, according to pathway.",
    "languages": "Luxembourgish, German and French have major roles; language allocation depends on subject, school stage and pathway.",
    "source": "https://men.public.lu/"
  },
  "Malta": {
    "level": "Secondary education and post-secondary sixth form",
    "authority": "Ministry for Education, Sport, Youth, Research and Innovation; MATSEC Examinations Board",
    "curriculum": "The National Curriculum Framework guides compulsory education. Secondary learners follow subject programmes and national assessment; MATSEC SEC and Advanced/Intermediate examinations serve different stages and post-secondary pathways.",
    "exam": "Secondary school assessments; MATSEC Secondary Education Certificate (SEC), Advanced and Intermediate examinations.",
    "languages": "Maltese and English are official languages and both are used in education; subject and school language practices vary.",
    "source": "https://curriculum.gov.mt/; https://www.um.edu.mt/matsec/"
  },
  "Marshall Islands": {
    "level": "Elementary, middle and secondary education",
    "authority": "Marshall Islands Ministry of Education, Sports and Training (MOEST)",
    "curriculum": "National education standards and learning frameworks guide school programmes. Curriculum implementation and available senior-secondary subjects can vary by school and island; confirm current grade-level standards, subject sequence and assessment with MOEST.",
    "exam": "School-based assessments and national learning assessments where scheduled; verify current secondary graduation requirements with MOEST.",
    "languages": "Marshallese and English are used in education; the balance varies by grade, school and programme.",
    "source": "https://www.moest.gov.mh/"
  }
};
const subjects={
  "Biology": [
    [
      "Biological organisation and life processes",
      "Biology explains living systems from molecules and cells through tissues, organs, organisms, populations and ecosystems. A sound answer links a structure to its function and identifies the scale being discussed. When comparing organisms, use observable evidence such as cell organisation, nutrition, gas exchange, transport, excretion, sensitivity, growth and reproduction rather than relying on appearance alone.",
      "For example, a leaf is an organ made of tissues and specialised cells. Palisade cells contain many chloroplasts and are positioned to receive light; guard cells alter stomatal aperture and help regulate gas exchange and water loss. This structure–function relationship can be investigated by observing prepared slides, comparing leaf surfaces or analysing data from plants exposed to different conditions."
    ],
    [
      "Cells, transport and homeostasis",
      "Cells are the basic structural and functional units of living organisms. Membranes regulate exchange through diffusion, osmosis and active transport. Diffusion is net movement down a concentration gradient; osmosis concerns water movement across a selectively permeable membrane; active transport uses energy to move substances against a gradient. Explanations should state the direction, gradient, membrane and energy requirement.",
      "Homeostasis maintains internal conditions within limits compatible with enzyme activity and cell function. Negative feedback detects a deviation, coordinates a response and reduces the original change. In humans, temperature regulation involves receptors, coordination centres and effectors; in plants, stomata and guard cells contribute to water balance. Distinguish a regulatory mechanism from the condition being regulated."
    ],
    [
      "Ecology, inheritance and evidence",
      "Ecosystems contain interacting organisms and physical factors. Energy flows through trophic levels while matter is recycled. Food webs show interconnected feeding relationships; population size is influenced by resources, competition, predation, disease and abiotic conditions. Field studies require a clear sampling strategy, consistent quadrats or transects, repeat observations and attention to bias.",
      "Inheritance involves transmission of genetic information through DNA and chromosomes. Alleles contribute to variation, while meiosis, fertilisation, mutation and environmental effects influence phenotypes. When solving a genetic problem, define alleles, establish parental genotypes, show gametes, construct the cross and interpret probabilities. A probability predicts outcomes across many events; it does not guarantee the result of one family."
    ],
    [
      "Investigation, data and evaluation",
      "A biological investigation begins with a focused question and a testable prediction. Identify the independent variable, dependent variable and controlled variables. Select suitable apparatus, define a repeatable method, use appropriate sample size and record observations with units. Ethical and safety considerations include humane treatment, hygiene, safe handling of biological materials and responsible disposal.",
      "Present quantitative data in a labelled table and choose a graph suited to the variables. Calculate means where appropriate, identify anomalies transparently and describe patterns before explaining them. A conclusion must answer the question and refer to evidence. Evaluation considers reliability, validity, sample limitations and specific improvements; merely writing 'repeat the experiment' is not a sufficient improvement."
    ]
  ],
  "Chemistry": [
    [
      "Particles, atomic structure and periodic organisation",
      "Chemistry explains matter through particles and their interactions. Atoms contain a nucleus of protons and neutrons with electrons occupying energy levels. Atomic number identifies an element; mass number counts protons and neutrons. Isotopes have the same proton number but different neutron numbers. In calculations, show the relationship used, substitute values and include appropriate units or notation.",
      "The periodic table organises elements by proton number and recurring electron-structure patterns. Elements in a group share important chemical features because of their outer-electron arrangements, while properties change across periods. Use electron configuration to explain trends rather than memorising isolated statements. Distinguish a group number, period number, atomic number and relative atomic mass."
    ],
    [
      "Bonding, structure and properties",
      "Ionic bonding involves electrostatic attraction between oppositely charged ions; covalent bonding involves shared electron pairs; metallic bonding involves positive metal ions and delocalised electrons. The bonding model must be linked to the structure: giant ionic lattices, simple molecules, giant covalent networks or metallic lattices have different properties.",
      "Explain melting point, conductivity, hardness and solubility from particle arrangement and forces. Ionic compounds conduct when molten or dissolved because ions can move, but not as solids where ions are fixed. Metals conduct because delocalised electrons move through the lattice. Simple molecular substances often have low melting points because intermolecular attractions are weaker than covalent bonds within molecules."
    ],
    [
      "Reactions, quantities and acids",
      "A chemical equation represents conservation of atoms. Balance equations by adjusting coefficients, never by changing chemical formulae. Ionic equations focus on species that participate in the reaction and omit spectator ions where appropriate. Acids donate protons in the Brønsted–Lowry model; bases accept protons. Neutralisation and salt preparation depend on the reactants and solubility of the product.",
      "Stoichiometric calculations use balanced equations to relate reacting quantities. Convert mass to moles using n=m/M, use mole ratios from the balanced equation and convert to the required quantity. For solutions, concentration in mol dm⁻³ is amount in moles divided by volume in dm³. Convert cm³ to dm³ before substituting. Show each step and round only at the end."
    ],
    [
      "Practical chemistry and evidence",
      "A reliable chemical investigation uses suitable apparatus, controlled conditions and clear observations. Record colour changes, precipitates, gas evolution, temperature changes and measured quantities precisely. Use appropriate personal protective equipment, small quantities where possible, good ventilation and the safety instructions for each reagent. Never identify a gas by directly inhaling it.",
      "Evaluate purity, yield and uncertainty. Percentage yield compares actual yield with theoretical yield; percentage purity compares the mass of the desired substance with the sample mass. Explain losses during transfer, filtration, crystallisation or incomplete reaction. A fair comparison keeps relevant variables constant and uses repeat measurements when safe and practical."
    ]
  ],
  "Physics": [
    [
      "Measurement, motion and forces",
      "Physics uses models and measurements to describe natural phenomena. Every measurement has a unit and an uncertainty; instruments should be selected for suitable range and resolution. Convert units before calculation and distinguish scalar quantities, which have magnitude only, from vectors, which also have direction.",
      "Describe motion using distance, displacement, speed, velocity and acceleration accurately. Gradient on a distance–time graph represents speed; gradient on a velocity–time graph represents acceleration; area under a velocity–time graph represents displacement. State the interval used and show the calculation. A straight line does not always mean an object is stationary: interpret the axes."
    ],
    [
      "Energy, waves and thermal processes",
      "Energy is transferred between stores by mechanical work, electrical work, heating and radiation. Conservation means total energy is not created or destroyed, although useful energy may become dispersed to the surroundings. Efficiency compares useful output with total input and can be expressed as a fraction or percentage.",
      "Waves transfer energy without overall transfer of matter. Frequency, wavelength, amplitude and wave speed are related by v=fλ. Identify whether a wave is transverse or longitudinal and describe evidence for reflection, refraction, diffraction or interference. In thermal physics, explain temperature change using energy transfer and particle motion, distinguishing temperature from thermal energy."
    ],
    [
      "Electricity, fields and circuits",
      "Current is the rate of flow of charge; potential difference is energy transferred per unit charge; resistance describes opposition to current. Use circuit diagrams and identify series or parallel arrangements before calculating. In a series circuit, current is the same through components; in parallel branches, potential difference across each branch is equal.",
      "Apply Ohm's law only where the component behaves ohmically under the stated conditions. Use P=IV and energy transferred E=Pt where appropriate. Magnetic fields are represented by field lines, whose direction and spacing communicate orientation and relative strength. Explain electromagnetic induction through a changing magnetic flux and identify how motion, field strength and coil turns affect induced output."
    ],
    [
      "Practical investigation and modelling",
      "A physics experiment should define the variable changed, the quantity measured and the conditions held constant. Select a measuring instrument with suitable precision, take repeated readings and record units. A graph can reveal proportionality, trends and anomalies; use a best-fit line rather than joining every point automatically.",
      "When evaluating a model, state what it explains and where it is limited. For example, idealised frictionless motion can clarify Newton's laws but does not represent every real surface. A good conclusion refers to the data and uncertainty. Improvements should be specific, such as using a light gate instead of a handheld stopwatch or increasing the measured range."
    ]
  ],
  "Mathematics": [
    [
      "Number, algebra and mathematical reasoning",
      "Mathematical solutions should show a logical sequence, not only a final answer. Use place value, fractions, decimals, percentages, ratio, powers and standard form accurately. Check whether a result is reasonable by estimating its size and considering the units or context. Keep exact values until rounding is required.",
      "In algebra, use equivalent operations on both sides of an equation. Expand brackets carefully, collect like terms and factorise by identifying common factors or familiar identities. When solving an inequality, reverse the inequality sign if multiplying or dividing by a negative number. Substitute the result into the original statement to check it."
    ],
    [
      "Functions, graphs and geometry",
      "A function maps each permitted input to an output. Interpret notation, domain and range in context. Linear graphs have constant gradient; quadratic graphs have a turning point; other functions may show exponential or periodic behaviour. Explain what the gradient and intercept mean in the problem, rather than treating them as abstract numbers only.",
      "Geometry depends on definitions, properties and justified reasoning. State the theorem or relationship used, show substitutions and include units. Similar figures have equal corresponding angles and proportional corresponding sides; congruent figures have matching shape and size. In trigonometry, identify the right angle, reference angle and opposite, adjacent and hypotenuse sides before selecting a ratio."
    ],
    [
      "Statistics, probability and data",
      "A statistical investigation should identify the population, sample and variable. Sampling methods affect representativeness. Mean is sensitive to extreme values; median is often more resistant; mode identifies the most frequent value. Range and interquartile range describe spread in different ways. Select a measure that suits the distribution and question.",
      "Probability lies between zero and one. For mutually exclusive events, add probabilities; for independent events, multiply probabilities. Use sample spaces, tree diagrams or tables to organise outcomes and avoid double counting. Experimental probability is based on observed frequencies and may differ from theoretical probability, especially with small samples."
    ],
    [
      "Problem solving, modelling and communication",
      "Translate a real situation into mathematical variables, assumptions and relationships. State what each variable represents, choose a suitable model and solve systematically. A model is useful only within the assumptions and range for which it is reasonable; a linear relationship may fail outside the observed interval.",
      "Communicate the method so another learner can follow it. Include diagrams when they clarify geometry or data, label axes, state units and explain rounding. Check solutions by substitution, inverse operations, estimation or an alternative method. If more than one solution is possible, test each against the original context and reject values that violate constraints."
    ]
  ],
  "English": [
    [
      "Reading comprehension and critical response",
      "Read the whole text before deciding its central purpose. Identify audience, context, genre and viewpoint. Distinguish explicit information from inference and support interpretations with precise evidence. Track how ideas develop across paragraphs and how a writer uses examples, contrast, repetition, imagery, tone and structure to influence the reader.",
      "When comparing texts, establish a clear basis for comparison rather than listing features separately. Explain how language choices shape meaning and effect. A quotation should be short, accurate and followed by analysis; naming a technique without explaining its effect is incomplete. Consider whose perspective is represented and which voices or evidence may be absent."
    ],
    [
      "Writing for purpose and audience",
      "Plan writing around purpose, audience and form. A persuasive response needs a clear position, relevant evidence, developed reasoning and a considered conclusion. An informative response needs accurate explanation and logical sequencing. A narrative needs coherent events, purposeful description and controlled point of view.",
      "Organise paragraphs around one main idea and use linking expressions to guide the reader. Vary sentence structures deliberately while maintaining clarity. Use topic-specific vocabulary accurately and avoid unsupported generalisations. A strong introduction establishes the task and direction; a conclusion synthesises the argument rather than simply repeating the opening."
    ],
    [
      "Language, grammar and vocabulary",
      "Edit for sentence boundaries, agreement, tense consistency, punctuation, spelling and word choice. A sentence fragment may be effective in a deliberate stylistic context but should not arise from accidental punctuation. Use commas to clarify structure, not to join independent clauses without a suitable conjunction or semicolon.",
      "Build vocabulary through context, word families, morphology and careful dictionary use. Check connotations as well as dictionary definitions. Formal and informal registers suit different audiences; code-switching or dialect features can be analysed respectfully without treating a language variety as inherently inferior. Explain how register supports the communicative purpose."
    ],
    [
      "Research, speaking and media literacy",
      "Evaluate sources by considering authorship, expertise, date, evidence, purpose and corroboration. Separate fact, interpretation and opinion. Paraphrase genuinely in your own sentence structure and acknowledge sources according to the task requirements; replacing a few words in a copied sentence is not adequate paraphrasing.",
      "Prepare oral presentations with a clear sequence, signposting and evidence suited to listeners. Use visual aids to clarify rather than overload. Listen actively, respond to the point being made and support disagreement with reasons. When analysing media, consider image selection, headlines, framing, omitted information and the relationship between text and visuals."
    ]
  ]
};
const contexts={
  "Ireland": "Atlantic climate, peatlands, rivers, coastal habitats, agriculture and renewable energy",
  "Italy": "Alpine and Apennine landscapes, Mediterranean ecosystems, volcanoes, heritage cities, agriculture and water management",
  "Jamaica": "Blue Mountains, limestone landscapes, coral reefs, tropical agriculture, hurricanes and biodiversity",
  "Kiribati": "low-lying atolls, coral ecosystems, freshwater lenses, ocean resources, coastal erosion and climate resilience",
  "Latvia": "Baltic Sea coast, forests, wetlands, lakes, agriculture and renewable energy",
  "Liechtenstein": "Alpine valleys, mountain rivers, hydropower, biodiversity, transport and sustainable land use",
  "Lithuania": "Baltic coast, forests, lakes, wetlands, agriculture and energy transition",
  "Luxembourg": "river valleys, temperate forests, urban sustainability, transport and cross-border services",
  "Malta": "Mediterranean islands, limestone geology, water scarcity, marine ecosystems and tourism",
  "Marshall Islands": "atoll ecosystems, coral reefs, ocean fisheries, freshwater security, sea-level rise and climate adaptation"
};
const concepts={
  "Biology": [
    "cells and specialised tissues",
    "transport and exchange",
    "inheritance and ecosystems",
    "experimental evidence"
  ],
  "Chemistry": [
    "atomic structure and periodicity",
    "bonding and material properties",
    "chemical reactions and quantitative relationships",
    "laboratory methods and safety"
  ],
  "Physics": [
    "measurement and motion",
    "forces and energy",
    "waves and electricity",
    "experimental models and uncertainty"
  ],
  "Mathematics": [
    "number and algebra",
    "functions and geometry",
    "statistics and probability",
    "mathematical modelling"
  ],
  "English": [
    "reading and interpretation",
    "purposeful writing",
    "language and communication",
    "research and media literacy"
  ]
};
const questions={
  "Biology": [
    "Explain how a specialised structure supports its function, using a labelled example.",
    "Design an investigation that tests one factor affecting a biological process. Identify variables and controls.",
    "Interpret a set of biological data and justify a conclusion using numerical evidence.",
    "Explain one way human activity can alter a local ecosystem and evaluate a possible response.",
    "Distinguish an inherited influence from an environmental influence on phenotype."
  ],
  "Chemistry": [
    "Explain a material property in terms of its bonding and particle structure.",
    "Write and balance an equation for a suitable reaction, then identify the mole ratio.",
    "Describe a safe practical method to prepare or identify a substance.",
    "Calculate an unknown quantity using a balanced chemical equation and show all working.",
    "Evaluate how a change in concentration, temperature or surface area may affect reaction rate."
  ],
  "Physics": [
    "Choose a suitable equation to solve a motion or energy problem and show units.",
    "Interpret a graph and explain the physical meaning of its gradient or area.",
    "Explain how a circuit or wave system behaves when one variable changes.",
    "Plan a fair test, including apparatus, repeat readings and safety measures.",
    "Evaluate an idealised model by identifying one assumption and its effect."
  ],
  "Mathematics": [
    "Solve a multi-step problem and show a method that can be checked.",
    "Represent a real situation using an equation, graph or geometric model.",
    "Select and justify an appropriate statistical measure for a data set.",
    "Calculate a probability using an organised sample space or diagram.",
    "Check a solution using estimation, substitution or an alternative method."
  ],
  "English": [
    "Analyse how a writer's language choices influence the reader, using evidence.",
    "Write a structured response for a stated audience and purpose.",
    "Compare two viewpoints and evaluate the evidence each uses.",
    "Edit a paragraph to improve cohesion, grammar and precision.",
    "Evaluate the reliability and bias of a source before using it in an argument."
  ]
};
const subjectDetails={
  "Biology": "Use labelled biological diagrams, accurate terminology and evidence from observations. Explain how structure supports function, and distinguish correlation from causation.",
  "Chemistry": "Write formulae and balanced equations accurately. Link observable changes to particle-level explanations and show every step in quantitative work.",
  "Physics": "Define quantities, state equations before substitution, use SI units and interpret graphs with reference to their axes and physical meaning.",
  "Mathematics": "Show a traceable method, state assumptions, use correct notation and check the answer against the original question.",
  "English": "Support interpretations with textual evidence, adapt register to purpose and audience, and revise for clarity, cohesion and accuracy."
};
const qBank={
  "Biology": [
    "Explain how a specialised structure supports its function, using a labelled example.",
    "Design an investigation that tests one factor affecting a biological process. Identify variables and controls.",
    "Interpret a set of biological data and justify a conclusion using numerical evidence.",
    "Explain one way human activity can alter a local ecosystem and evaluate a possible response.",
    "Distinguish an inherited influence from an environmental influence on phenotype."
  ],
  "Chemistry": [
    "Explain a material property in terms of its bonding and particle structure.",
    "Write and balance an equation for a suitable reaction, then identify the mole ratio.",
    "Describe a safe practical method to prepare or identify a substance.",
    "Calculate an unknown quantity using a balanced chemical equation and show all working.",
    "Evaluate how a change in concentration, temperature or surface area may affect reaction rate."
  ],
  "Physics": [
    "Choose a suitable equation to solve a motion or energy problem and show units.",
    "Interpret a graph and explain the physical meaning of its gradient or area.",
    "Explain how a circuit or wave system behaves when one variable changes.",
    "Plan a fair test, including apparatus, repeat readings and safety measures.",
    "Evaluate an idealised model by identifying one assumption and its effect."
  ],
  "Mathematics": [
    "Solve a multi-step problem and show a method that can be checked.",
    "Represent a real situation using an equation, graph or geometric model.",
    "Select and justify an appropriate statistical measure for a data set.",
    "Calculate a probability using an organised sample space or diagram.",
    "Check a solution using estimation, substitution or an alternative method."
  ],
  "English": [
    "Analyse how a writer's language choices influence the reader, using evidence.",
    "Write a structured response for a stated audience and purpose.",
    "Compare two viewpoints and evaluate the evidence each uses.",
    "Edit a paragraph to improve cohesion, grammar and precision.",
    "Evaluate the reliability and bias of a source before using it in an argument."
  ]
};
const extra=(country,subject,profile)=>{
 const units=subjects[subject];
 return units.map((u,i)=>({heading:u[0]+" — "+country+" learning extension",paragraphs:[u[1],u[2],"Apply this concept to "+contexts[country]+". "+subjectDetails[subject]+" In a country-based case study, identify the relevant evidence, explain the process or relationship and state any assumptions. Compare local examples with a second setting without assuming that one observation represents every community or ecosystem.","For examination preparation, build a response in a clear sequence: define the key term, identify the relevant principle, apply it to the question, support the explanation with evidence or a calculation and finish with a justified conclusion. Use diagrams or tables when they improve accuracy. Check the current "+profile.level+" course specification and the teacher's scheme of work before treating this extension as a prescribed topic."] ,keyTerms:concepts[subject].slice(i,i+2).concat(["evidence","application","evaluation"]),workedExamples:[{title:"Guided application",question:"Use "+subject+" to explain a situation connected with "+contexts[country]+".",solution:"First identify the relevant concept: "+u[0].toLowerCase()+". Define the important terms, select the evidence or information given, explain the relationship step by step and state a conclusion. Where measurements are involved, show units and calculations; where a written interpretation is required, support it with precise evidence.",marks:5}]}));
};
for(const [country,p] of Object.entries(profiles)){
 const r=all[country]; if(!r) continue;
 r.curriculumAuthority=p.authority;r.curriculumLevel=p.level;r.curriculumSource=p.source;r.curriculumAuditStatus="country-pathway-profiled-subject-topic-mapping-pending";r.curriculumNotice="Supplementary CBE Nexus learning extension. Verify the exact grade, subject specification, school pathway and examination year with the authority.";r.curriculumExamination=p.exam;r.curriculumLanguages=p.languages;r.curriculumDescription=p.curriculum;
 let expanded=0;
 for(const [grade,bank] of Object.entries(r.levels||{})){
  for(const subject of ["Biology","Chemistry","Physics","Mathematics","English"]){
   const chapters=bank?.[subject]; if(!Array.isArray(chapters)||!chapters.length) continue;
   const chapter=chapters[0];
   chapter.sections=Array.isArray(chapter.sections)?chapter.sections:[];
   const add=extra(country,subject,p);
   for(const section of add){section.paragraphs=section.paragraphs.map(x=>x+"");chapter.sections.push(section);}
   chapter.realLifeApplications=(chapter.realLifeApplications||[]).concat(["Investigate "+subject+" in the context of "+contexts[country]+".","Evaluate how "+subject+" knowledge can support sustainable decisions and community wellbeing in "+country+"."]);
   chapter.practicalActivities=(chapter.practicalActivities||[]).concat([{title:country+" "+subject+" evidence investigation",description:"Use a safe local observation, school-based data set or teacher-approved simulation. State the question, variables or selection criteria, method, observations, limitations and conclusion. Do not collect sensitive personal information or disturb protected habitats."}]);
   chapter.questions=(chapter.questions||[]).concat(qBank[subject].map((q,i)=>({q,a:"A strong answer should define the relevant concept, apply it accurately to the context, show reasoning or working, use appropriate evidence and finish with a justified conclusion. Award credit for correct terminology, method, units and evaluation where relevant.",marks:i<2?3:4,category:i<2?"Understanding and application":"Analysis and evaluation",markingPoints:["Accurate concept or method.","Relevant application and logical explanation.","Evidence, units or working where appropriate.","Reasoned conclusion or evaluation."]})));
   chapter.summary=(chapter.summary||[]).concat(["Country-context extension: "+contexts[country]+".","Check the current "+p.level+" subject specification and school assessment guidance."]);
   chapter.curriculumStatus="supplementary-unverified";
   chapter.curriculumContext=p.curriculum+" Authority: "+p.authority+". Examination: "+p.exam+". Language: "+p.languages+". The added CBE Nexus extension is supplementary and is not certified as a complete official syllabus sequence.";
   chapter.seoTitle=country+" "+grade+" "+subject+" Notes, Worked Examples and Revision | CBE Nexus";
   chapter.metaDescription="Explore expanded "+subject+" learning materials for "+country+": concept explanations, country-context applications, guided examples, practical investigation and examination practice. Verify the current official programme.";
   chapter.seoKeywords=[country+" "+subject+" notes",country+" "+grade+" "+subject+" syllabus",country+" "+subject+" worked examples",country+" "+subject+" revision questions",country+" "+subject+" practical activities","CBE Nexus Learning Studio"];
   expanded++;
  }
 }
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Learning Resources | CBE Nexus",description:"Expanded supplementary subject learning pathways for "+country+" with concept explanations, applications, examples and revision questions.",keywords:[country+" education curriculum",...["Biology","Chemistry","Physics","Mathematics","English"].map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
 r.batch05ExpandedSubjects=expanded;
}
window.CBE_NEXUS_COUNTRY_BATCH_05={countries:Object.keys(profiles),subjects:Object.keys(subjects),status:"expanded-supplementary-modules-official-topic-mapping-pending",version:"2026-11-16-batch-05"};
})();