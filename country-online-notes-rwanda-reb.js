/* Rwanda REB 2026 transition-aware country extension.
   The 2026 REB e-learning portal lists revised S1-S6 resources and syllabi.
   Official 2026 PDF subject-by-subject topic sequences could not be extracted in this integration pass;
   modules below are clearly labelled as bridging practice, not official chapter order. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const rwanda={
  curriculum:"Rwanda • Rwanda Basic Education Board (REB) • Revised secondary curriculum resources 2026 • S1–S6",
  authority:"Rwanda Basic Education Board (REB) • Ministry of Education (MINEDUC)",
  source:"https://elearning.reb.rw/",
  exam:"National examinations are administered under Rwanda's national assessment system. Upper-secondary subject pathways are undergoing reform; learners should follow the pathway and transition instructions applicable to their cohort.",
  curriculumAuditStatus:"official-2026-resource-release-confirmed-topic-sequences-pending",
  notice:"REB's 2026 secondary resource release lists revised S1–S6 student books, teacher guides, syllabi and content distribution. MINEDUC has also announced a proposed upper-secondary pathway reform. This first CBE Nexus release provides four clearly labelled bridging modules and a pathway overview; it does NOT claim that these modules reproduce the exact 2026 REB chapter sequence. Full topic-by-topic lessons will be mapped only after the relevant official syllabus PDFs are verified. Do not use older subject-combination or professional-option syllabi as a substitute for the general-education syllabus.",
  verifiedCurriculumSequence:{
   "2026 reform context":{
    lowerSecondary:["Senior 1 (S1)","Senior 2 (S2)","Senior 3 (S3)"],
    upperSecondaryPathways:[
     "Mathematics and Sciences — Stream 1: Mathematics, Physics, Chemistry and Biology",
     "Mathematics and Sciences — Stream 2: Mathematics, Economics, Geography and Physics",
     "Arts and Humanities",
     "Languages"
    ],
    status:"MINEDUC reform announcement and REB 2026 resource release confirmed; detailed subject-by-subject 2026 sequence remains pending verification."
   },
   Mathematics:{status:"2026 general-education S1–S6 subject sequence pending direct syllabus verification. Do not substitute the 2022 Accounting Profession option syllabus or older advanced-level core syllabus."},
   Physics:{status:"2026 general-education S1–S6 subject sequence pending direct syllabus verification. Do not substitute health-sciences / nursing professional-option materials."},
   Chemistry:{status:"2026 general-education S1–S6 subject sequence pending direct syllabus verification."},
   Biology:{status:"2026 general-education S1–S6 subject sequence pending direct syllabus verification. Do not substitute health-sciences / nursing professional-option materials."}
  },
  levels:{
   "Secondary • Bridging modules (not official chapter sequence)":{
    Mathematics:[{
     id:"rwanda-reb-maths-bridge-algebra",title:"Bridging Module: Algebraic Thinking and Problem Solving",lessons:"Rwanda • REB • Secondary Mathematics • Supplementary bridge",
     objectives:["Represent unknown quantities with variables.","Simplify expressions and solve linear equations.","Translate a real situation into a mathematical model.","Check solutions and communicate reasoning clearly."],
     sections:[
      {heading:"Algebra as a language for relationships",body:"Algebra represents quantities and relationships using symbols. A variable stands for a number that may be unknown or may change. An expression such as 3x+5 represents a quantity built from a variable, a coefficient and a constant. An equation states that two expressions have equal values. Define variables before using them in a word problem."},
      {heading:"Simplifying expressions",body:"Like terms have the same variable part and can be combined. For example, 4x+3x−2=7x−2. Use the distributive property to expand brackets: a(b+c)=ab+ac. Factorisation reverses expansion by expressing terms as a product, often by taking out a common factor."},
      {heading:"Solving linear equations",body:"An equation remains balanced when the same operation is applied to both sides. Undo operations in reverse order: remove addition or subtraction, then multiplication or division. Check a solution by substituting it into the original equation and confirming both sides are equal."},
      {heading:"Mathematical modelling",body:"For a real-life problem, identify the unknown, define a variable, translate the relationships into an equation, solve, and interpret the result with units or restrictions. A mathematically correct value may still be unsuitable if it contradicts the context, such as a negative number of people."}
     ],
     example:"A learner buys 3 notebooks at the same price and pays 4,500 RWF in total. If each notebook costs x RWF, then 3x=4,500, so x=1,500 RWF. Check: 3×1,500=4,500.",
     activity:"Create a price problem involving a fixed charge and a cost per item. Write an equation, solve it and check the result in the original situation.",
     summary:["Variables represent unknown or changing quantities.","Collect like terms and use the distributive property carefully.","Preserve equality by performing the same operation on both sides.","Check algebraic answers by substitution and interpret them in context."],
     curriculumContext:"Supplementary bridging module for Rwanda secondary Mathematics. It is not labelled as the first unit or official topic sequence in the 2026 REB syllabus.",
     questions:[
      {q:"Simplify 5a+3−2a+7.",a:"3a+10.",worked:"Combine variable terms: 5a−2a=3a. Combine constants: 3+7=10.",explanation:"Only like terms can be combined."},
      {q:"Solve 4x−9=19.",a:"x=7.",worked:"4x=28; divide by 4 to obtain x=7.",explanation:"Use inverse operations while maintaining equality."},
      {q:"Expand 3(2y−5).",a:"6y−15.",worked:"Multiply 3 by both terms: 3×2y=6y and 3×(−5)=−15.",explanation:"The distributive property applies to every term inside the bracket."},
      {q:"Factorise 8x+12.",a:"4(2x+3).",worked:"The highest common factor is 4. Divide each term by 4.",explanation:"Factorisation writes a sum as a product."},
      {q:"A taxi charges a fixed 1,000 RWF plus 500 RWF per kilometre. Write the cost for d kilometres.",a:"C=1,000+500d RWF.",worked:"Fixed charge=1,000; distance charge=500d; add them.",explanation:"A linear model combines fixed and variable costs."},
      {q:"Solve 2(x+3)=18.",a:"x=6.",worked:"2x+6=18; 2x=12; x=6.",explanation:"Expand or divide both sides by 2, then isolate x."},
      {q:"Check whether x=4 solves 3x+2=14.",a:"Yes.",worked:"3(4)+2=12+2=14, which equals the right-hand side.",explanation:"Substitution verifies a proposed solution."},
      {q:"A number is multiplied by 5 and then 6 is subtracted. The result is 29. Find the number.",a:"7.",worked:"Let the number be n. 5n−6=29; 5n=35; n=7.",explanation:"Translate the sequence of operations into an equation."},
      {q:"Solve x/3+4=10.",a:"x=18.",worked:"x/3=6; multiply both sides by 3 to get x=18.",explanation:"Undo addition before undoing division."},
      {q:"Explain why the equation 2x+5=2x+9 has no solution.",a:"Subtracting 2x from both sides gives 5=9, which is false; no value of x can make the equation true.",worked:"Show the same term removed from both sides and identify the contradiction.",explanation:"An equation can be inconsistent; not every linear-looking equation has a solution."}
     ]
    }],
    Physics:[{
     id:"rwanda-reb-physics-bridge-measurement",title:"Bridging Module: Physical Measurement and Experimental Skills",lessons:"Rwanda • REB • Secondary Physics • Supplementary bridge",
     objectives:["Identify physical quantities and appropriate SI units.","Select measuring instruments for common quantities.","Calculate averages and rates from measured data.","Evaluate uncertainty, reliability and fair-test design."],
     sections:[
      {heading:"Physical quantities and units",body:"Physics describes natural systems using measurable quantities. A measurement needs a numerical value and a unit. Examples include length in metres (m), mass in kilograms (kg), time in seconds (s), electric current in amperes (A) and temperature in kelvin (K). Derived quantities combine base quantities; speed is measured in metres per second (m s⁻¹)."},
      {heading:"Choosing measuring instruments",body:"Use a metre rule or tape for length, a balance for mass, a stopwatch for time, a thermometer for temperature and a measuring cylinder for liquid volume. Select a range and resolution suitable for the task. Read scales at eye level where appropriate and check for zero error."},
      {heading:"Reliability and uncertainty",body:"Repeat measurements to identify random variation and calculate a mean where appropriate. Repetition can improve precision but does not automatically remove systematic error such as a miscalibrated instrument. Record units and avoid claiming more precision than the instrument supports."},
      {heading:"Planning a fair investigation",body:"Identify the independent variable to change, dependent variable to measure and control variables to keep constant. Use a clear method, repeat trials and record data in a labelled table. Explain limitations and suggest improvements that directly address the source of error."}
     ],
     example:"A trolley travels 2.4 m in 3.0 s. Average speed = distance/time = 2.4/3.0 = 0.80 m s⁻¹.",
     activity:"Measure the time taken for a ball to roll a fixed distance. Repeat at least five times, calculate the mean and identify one random and one systematic source of error.",
     summary:["A physical measurement includes a value and a unit.","Choose an instrument appropriate to the quantity and required resolution.","Repeated trials help reveal random variation but not all systematic errors.","A fair test controls variables other than the independent variable."],
     curriculumContext:"Supplementary practical-skills bridge for Rwanda secondary Physics; not presented as the first chapter of the revised 2026 REB syllabus.",
     questions:[
      {q:"State the SI unit of mass.",a:"Kilogram (kg).",worked:"Mass is a base physical quantity with SI unit kilogram.",explanation:"Do not confuse mass (kg) with weight (N)."},
      {q:"A learner measures 120 m in 15 s. Calculate average speed.",a:"8 m s⁻¹.",worked:"v=s/t=120/15=8 m s⁻¹.",explanation:"Distance divided by time gives average speed."},
      {q:"Which instrument is suitable for measuring the mass of a stone?",a:"A balance.",worked:"A balance measures mass; a spring balance measures force/weight.",explanation:"Choose equipment according to the physical quantity."},
      {q:"Define the independent variable in an experiment.",a:"The variable deliberately changed by the investigator.",worked:"State that it is the factor intentionally varied.",explanation:"The dependent variable is the measured response."},
      {q:"Why should a student repeat a timing measurement?",a:"To identify variation, reduce random effects on the mean and improve reliability.",worked:"Mention repeated trials and averaging or identifying anomalous values.",explanation:"Repeats do not automatically remove systematic error."},
      {q:"A ruler has a zero error of +2 mm. Explain what this means.",a:"It reads 2 mm when the true measurement should be zero; readings need a correction of −2 mm.",worked:"Subtract the positive zero error from each observed reading.",explanation:"Zero error introduces a systematic bias."},
      {q:"A body moves 50 m east in 10 s. Find its average velocity.",a:"5 m s⁻¹ east.",worked:"Displacement/time=50/10=5 m s⁻¹ east.",explanation:"Velocity includes direction; speed does not."},
      {q:"State two control variables when investigating how ramp height affects trolley speed.",a:"For example, trolley mass and ramp surface/material; release position and method should also be kept constant.",worked:"Name two factors other than ramp height that could affect speed.",explanation:"Control variables help isolate the effect of the independent variable."},
      {q:"A set of readings is 2.1 s, 2.2 s, 2.1 s, 2.8 s and 2.2 s. Identify a possible anomalous value.",a:"2.8 s.",worked:"Most values cluster between 2.1 and 2.2 s; 2.8 s is noticeably higher and should be checked.",explanation:"An anomaly should be investigated, not automatically deleted without justification."},
      {q:"Explain why a result should not be reported as 4.7382 m when measured with a metre rule marked in centimetres.",a:"The reported precision is unjustified; the reading should reflect the scale resolution and measurement uncertainty.",worked:"State that excessive decimal places imply precision the instrument cannot support.",explanation:"Significant figures communicate realistic measurement precision."}
     ]
    }],
    Chemistry:[{
     id:"rwanda-reb-chem-bridge-matter",title:"Bridging Module: Matter, Particles and Chemical Change",lessons:"Rwanda • REB • Secondary Chemistry • Supplementary bridge",
     objectives:["Distinguish elements, compounds and mixtures.","Explain matter using particle models.","Differentiate physical and chemical changes.","Use observations to support a chemical explanation."],
     sections:[
      {heading:"Matter and particles",body:"Matter has mass and occupies space. The particle model explains that substances are made of atoms, molecules or ions. In solids, particles are closely packed and vibrate about fixed positions; in liquids they remain close but move past one another; in gases they are far apart and move randomly. Heating generally increases average particle kinetic energy."},
      {heading:"Elements, compounds and mixtures",body:"An element contains one type of atom. A compound contains two or more elements chemically bonded in a fixed ratio. A mixture contains substances physically combined in variable proportions. Mixtures can often be separated by physical methods such as filtration, distillation, chromatography or magnetic separation."},
      {heading:"Physical and chemical changes",body:"A physical change alters state, shape or appearance without creating a new substance. A chemical change produces new substances with different chemical properties. Evidence may include gas formation, a persistent colour change, a precipitate, temperature change or light emission; observations should be interpreted carefully because one sign alone may be inconclusive."},
      {heading:"Writing evidence-based explanations",body:"Describe what was observed, identify the relevant particle or reaction idea, and explain how it accounts for the observation. Distinguish observation from inference. For example, bubbles are an observation; concluding that a gas formed is an inference that should be supported by an appropriate test."}
     ],
     example:"Salt dissolving in water is a physical separation process: water can be evaporated to recover the salt. The salt particles become dispersed among water particles, but the substance sodium chloride is not converted into a new compound by dissolving.",
     activity:"Compare salt dissolving in water, ice melting and iron rusting. For each, record observations, decide whether a new substance forms and justify the classification.",
     summary:["Matter is described using particles such as atoms, molecules and ions.","Elements, compounds and mixtures differ in composition and bonding.","Physical changes do not create a new substance; chemical changes do.","Support explanations with observations and appropriate tests."],
     curriculumContext:"Supplementary conceptual bridge for Rwanda secondary Chemistry; not represented as the first topic in the 2026 REB syllabus.",
     questions:[
      {q:"Define an element.",a:"A pure substance made of only one type of atom.",worked:"Include the idea of one type of atom.",explanation:"An element cannot be chemically broken down into simpler substances."},
      {q:"Explain why water is a compound rather than a mixture.",a:"Water contains hydrogen and oxygen chemically bonded in a fixed ratio.",worked:"State chemical combination and fixed composition.",explanation:"Mixtures have variable composition and components are not chemically bonded together as a single compound."},
      {q:"Suggest a method to separate sand from water.",a:"Filtration.",worked:"Sand is insoluble and remains as residue on the filter; water passes through as filtrate.",explanation:"Choose a separation method based on physical properties."},
      {q:"Classify melting ice as a physical or chemical change and explain.",a:"Physical change; it is still H₂O and only the state changes.",worked:"State physical change and that no new substance is formed.",explanation:"A change of state does not change chemical identity."},
      {q:"Iron rusts in moist air. Explain why rusting is a chemical change.",a:"Iron reacts with oxygen and water to form hydrated iron oxides, new substances with different properties.",worked:"Identify reactants and formation of new substances.",explanation:"Chemical change involves a change in chemical composition."},
      {q:"A learner says bubbles always prove that a chemical reaction occurred. Evaluate.",a:"Not necessarily; boiling can produce bubbles without a chemical reaction. Additional evidence or a gas test is needed.",worked:"Give a physical-change counterexample and explain the need for supporting evidence.",explanation:"Evidence must be interpreted in context."},
      {q:"Describe particle arrangement in a gas.",a:"Particles are far apart, move rapidly and randomly, and fill the available container.",worked:"Mention spacing and random motion.",explanation:"The particle model explains gas compressibility and expansion."},
      {q:"Why can a mixture of iron filings and sulfur be separated with a magnet, but iron sulfide cannot be separated in the same way?",a:"In the mixture, iron retains its magnetic property; in iron sulfide, iron is chemically combined in a new compound.",worked:"Contrast physical mixing with chemical bonding and changed properties.",explanation:"A compound has properties different from its constituent elements."},
      {q:"State one observation and one inference when magnesium burns with a bright light and forms a white solid.",a:"Observation: bright light and white solid. Inference: magnesium reacted with oxygen to form magnesium oxide.",worked:"Separate directly observed evidence from the chemical explanation.",explanation:"Scientific answers distinguish what is seen from what is concluded."},
      {q:"A student wants to recover dissolved salt from salt water. Describe the method.",a:"Evaporate water to leave salt; crystallisation can be used to obtain crystals more carefully.",worked:"Explain heating/evaporation and recovery of the dissolved solid.",explanation:"The separation uses differences in volatility and solubility."}
     ]
    }],
    Biology:[{
     id:"rwanda-reb-bio-bridge-cell-life",title:"Bridging Module: Cell Organisation and Life Processes",lessons:"Rwanda • REB • Secondary Biology • Supplementary bridge",
     objectives:["Identify common cell structures and their functions.","Compare plant and animal cells.","Explain how specialised cells support organism function.","Relate cell organisation to tissues, organs and organ systems."],
     sections:[
      {heading:"The cell as a basic unit of life",body:"Cells are the basic structural and functional units of living organisms. Many cells contain a cell membrane, cytoplasm, ribosomes and genetic material. Eukaryotic cells have a nucleus and membrane-bound organelles; prokaryotic cells lack a membrane-bound nucleus. Cell structure supports essential processes such as metabolism, growth and response."},
      {heading:"Plant and animal cells",body:"Plant cells typically have a cellulose cell wall, chloroplasts in photosynthetic tissues and a large permanent vacuole. Animal cells lack a cellulose cell wall and chloroplasts and usually have smaller vacuoles. Both have a cell membrane, cytoplasm, ribosomes, mitochondria and genetic material."},
      {heading:"Specialisation",body:"A specialised cell has features adapted to its function. Red blood cells have a biconcave shape and haemoglobin for oxygen transport. Root hair cells have an extended surface area for water and mineral absorption. Nerve cells have long extensions for transmitting impulses. Link each feature to the specific task it supports."},
      {heading:"Levels of organisation",body:"Similar cells form tissues; tissues combine to form organs; organs work together in organ systems; organ systems make an organism. In multicellular organisms, coordination between levels maintains life processes and internal stability."}
     ],
     diagramHtml:'<svg viewBox="0 0 640 250" role="img" aria-label="Comparison of plant and animal cells"><rect x="20" y="25" width="275" height="190" rx="18" fill="#e5f4df" stroke="#3e7945" stroke-width="3"/><rect x="32" y="37" width="251" height="166" rx="14" fill="none" stroke="#3e7945" stroke-width="2"/><ellipse cx="120" cy="115" rx="40" ry="30" fill="#d8c8f4" stroke="#72539a" stroke-width="2"/><circle cx="120" cy="115" r="10" fill="#72539a"/><ellipse cx="220" cy="90" rx="28" ry="13" fill="#f2c98b" stroke="#a87528" stroke-width="2"/><text x="155" y="235" text-anchor="middle" font-size="15" fill="#173d70">Plant cell (schematic)</text><ellipse cx="475" cy="120" rx="125" ry="85" fill="#f6e6f5" stroke="#8b568c" stroke-width="3"/><ellipse cx="450" cy="120" rx="40" ry="30" fill="#d8c8f4" stroke="#72539a" stroke-width="2"/><circle cx="450" cy="120" r="10" fill="#72539a"/><ellipse cx="530" cy="90" rx="28" ry="13" fill="#f2c98b" stroke="#a87528" stroke-width="2"/><text x="475" y="235" text-anchor="middle" font-size="15" fill="#173d70">Animal cell (schematic)</text></svg>',
     example:"A root hair cell absorbs water and mineral ions from soil. Its long projection increases surface area in contact with the soil solution. A thin wall provides a short pathway for water movement, while transport proteins in the membrane support selective mineral uptake.",
     activity:"Draw a plant cell and an animal cell. Label at least five structures and create a table linking each structure to its function. Then explain one adaptation of a specialised cell.",
     summary:["Cells are the basic units of living organisms.","Plant cells have a cellulose wall and may contain chloroplasts and a large vacuole.","Specialised cells have structural features that support particular functions.","Cells form tissues, organs, organ systems and organisms."],
     curriculumContext:"Supplementary conceptual bridge for Rwanda secondary Biology; not represented as the first chapter in the 2026 REB syllabus.",
     questions:[
      {q:"State the function of the cell membrane.",a:"It controls movement of substances into and out of the cell.",worked:"Mention selective regulation of exchange.",explanation:"The membrane helps maintain the cell's internal conditions."},
      {q:"Give two structures usually present in plant cells but absent from animal cells.",a:"Cellulose cell wall and chloroplasts (in photosynthetic plant cells).",worked:"Name the wall and chloroplasts; note chloroplasts are not present in every plant cell.",explanation:"Avoid claiming that all plant cells contain chloroplasts."},
      {q:"Explain how the shape of a red blood cell supports its function.",a:"Its biconcave shape gives a large surface-area-to-volume ratio and short diffusion distance for oxygen exchange.",worked:"Link biconcave shape to surface area/diffusion and oxygen transport.",explanation:"Structure-function answers should state both the feature and its advantage."},
      {q:"What is a tissue?",a:"A group of similar cells working together to perform a particular function.",worked:"Include cells and shared function.",explanation:"A tissue is a level of organisation above the cell."},
      {q:"Explain why root hair cells have long projections.",a:"The projection increases surface area for absorption of water and mineral ions from the soil.",worked:"Link projection to increased surface area and uptake.",explanation:"The adaptation improves exchange with the soil solution."},
      {q:"Name an organelle where aerobic respiration occurs.",a:"Mitochondrion.",worked:"State mitochondrion; plural mitochondria.",explanation:"Mitochondria contain machinery for aerobic ATP production."},
      {q:"Arrange cell, organ, tissue, organism and organ system in order of increasing complexity.",a:"Cell → tissue → organ → organ system → organism.",worked:"Show the sequence from simplest to most complex.",explanation:"Each level is built from interacting lower levels."},
      {q:"Explain why a leaf cell in a shaded root is unlikely to contain many chloroplasts.",a:"Root tissues are generally not exposed to light and do not carry out photosynthesis in the same way as green leaf tissues.",worked:"Relate light exposure and photosynthetic role to chloroplast abundance.",explanation:"Cell structure varies with function and location."},
      {q:"A cell has no membrane-bound nucleus. What broad cell category does it belong to?",a:"Prokaryotic cell.",worked:"State prokaryote; bacteria are common examples.",explanation:"Prokaryotes lack a membrane-bound nucleus."},
      {q:"A learner says all cells have a cell wall. Correct the statement with an example.",a:"Not all cells have a cell wall; animal cells lack a cell wall, while plant cells have a cellulose wall.",worked:"Correct the universal claim and give a contrasting example.",explanation:"Biological statements should avoid overgeneralising."}
     ]
    }]
   }
  }
 };
 all.Rwanda=rwanda;
})();