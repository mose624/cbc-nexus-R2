/* Malawi MIE / MANEB country extension.
   Current curriculum is in transition. This release supplies clearly labelled supplementary
   bridging lessons and MSCE exam context; it does not claim an unverified official chapter order. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const malawi={
  curriculum:"Malawi • Malawi Institute of Education (MIE) • Secondary Forms 1–4 • transition-aware curriculum support",
  authority:"Malawi Institute of Education (MIE) • Ministry of Education • Malawi National Examinations Board (MANEB)",

  revisionCoverage:{
   purpose:"Full examination revision across subjects and examinable classes, not a four-science-only resource.",
   classLevels:[
    {level:"Forms 1–2",stage:"Lower secondary",status:"2025 framework subject matrix identified; draft revised syllabuses were under validation in March 2026. Verify the learner's cohort before assigning final topic order."},
    {level:"Forms 3–4",stage:"Upper secondary",status:"Include the complete MSCE preparation content and cumulative concepts from earlier forms, according to the approved subject syllabus for the examination cohort."},
    {level:"Forms 5–6",stage:"Advanced level",status:"Advanced-level pathway is identified in the 2025 framework; add its subjects and syllabuses as a distinct revision level, not as MSCE content."}
   ],
   lowerSecondaryCore:["Mathematics","Chichewa","English and Sign Language","Social Studies (Life Skills, Geography, History and Civics)","Technical Studies (Material Science, Technical and Computer-aided Drawing, ICT)","Integrated Science (Sports Science, Agriculture and Biology)"],
   lowerSecondaryElectives:["Business and Financial Studies","Creative Arts (Visual and Performing Arts)","Foreign Languages (French, Kiswahili, Arabic, Mandarin Chinese and Portuguese)","Sign Language","Religious and Moral Education","Islamic Education","Christian Education","Carpentry and Joinery","Welding and Fabrication","Human Ecology (Fashion and Fabrics, Food and Nutrition)","Physical Education","Sports and Recreation","Media Technology","Chemistry","Physics"],
   upperSecondaryPathways:["Arts and Sports Science","Social Sciences and Humanities","Science, Technology, Engineering and Mathematics (STEM)","Technical, Entrepreneurial, Vocational Education and Training (TEVET)"],
   examRevisionRule:"For MSCE, revise all subjects the learner is registered for, including English and Mathematics where required by the applicable MANEB rules. The official MANEB page states that MSCE is the final secondary examination and requires passes in five or six subjects including English, with credit thresholds. Subject entry and cohort-specific syllabus must be checked with MANEB.",
   sequenceRule:"Do not invent topic order. Populate each subject and class from the approved MIE syllabus and the MANEB examination syllabus/model papers that apply to the candidate's cohort."
  },
  source:"https://mie.edu.mw/downloads/",
  exam:"Malawi School Certificate of Education (MSCE), administered by MANEB, is the final secondary-school examination. Learners should confirm the syllabus and approved learning materials applicable to their examination cohort.",
  curriculumAuditStatus:"official-framework-2025-and-reform-process-verified-subject-sequences-pending",
  notice:"MIE published the Curriculum and Assessment Framework for Schools and Colleges in Malawi in July 2025. In March 2026, MIE reported validation work on draft revised lower-secondary (Forms 1–2) syllabuses. Therefore, these four starter lessons are explicitly supplementary bridging modules, not a claim about the first official unit or complete 2026 topic sequence. Use the MIE/Ministry-approved syllabus and MANEB guidance applicable to the learner's cohort. Do not mix old and revised syllabus cohorts.",
  verifiedCurriculumSequence:{
   "Forms 1–2":{
    status:"MIE reported draft lower-secondary syllabus validation in March 2026; exact final subject-by-subject sequences and implementation arrangements require confirmation from the final approved syllabuses.",
    source:"https://mie.edu.mw/educational-experts-validates-draft-lower-secondary-school-syllabuses-at-malawi-institute-of-education/"
   },
   "Forms 3–4 / MSCE":{
    status:"MANEB confirms MSCE as the final secondary-level examination. The exact current syllabus edition and subject sequence must be checked against MANEB/MIE approved subject documents for the learner's cohort.",
    source:"https://www.maneb.edu.mw/examinations/school-examinations/msce.html"
   },
   Mathematics:{status:"Exact current Forms 1–4 official topic sequence pending direct verification from approved MIE/MANEB syllabus documents."},
   Physics:{status:"Exact current Forms 1–4 official topic sequence pending direct verification from approved MIE/MANEB syllabus documents."},
   Chemistry:{status:"Exact current Forms 1–4 official topic sequence pending direct verification from approved MIE/MANEB syllabus documents."},
   Biology:{status:"Exact current Forms 1–4 official topic sequence pending direct verification from approved MIE/MANEB syllabus documents."}
  },
  levels:{
   "Secondary • Supplementary bridging modules (not official chapter order)":{
    Mathematics:[{
     id:"malawi-mie-maths-bridge-number-algebra",title:"Bridging Module: Number Skills and Algebraic Reasoning",lessons:"Malawi • Secondary Mathematics • Supplementary bridge",
     objectives:["Use integers, fractions, decimals and percentages accurately.","Apply order of operations and laws of indices.","Simplify algebraic expressions and solve linear equations.","Show clear working and check mathematical answers."],
     sections:[
      {heading:"Number sense and operations",body:"A number can be represented in different forms. Fractions, decimals and percentages are connected: one half is 0.5 or 50%. Convert between forms according to the task. When adding or subtracting fractions, use a common denominator. When multiplying fractions, multiply numerators and denominators, then simplify."},
      {heading:"Order of operations",body:"Apply brackets first, then powers and roots, then multiplication and division from left to right, and finally addition and subtraction from left to right. Keep negative signs clear. For example, −3² means −(3²)=−9, while (−3)²=9."},
      {heading:"Algebraic expressions",body:"A variable represents a number. Terms are like terms when their variable parts and powers match. Thus 4x+3x−2=7x−2. Use the distributive law a(b+c)=ab+ac. Factorisation reverses expansion by taking out a common factor."},
      {heading:"Linear equations and checking",body:"An equation is a balance. Apply the same operation to both sides. Isolate the unknown using inverse operations and substitute the answer into the original equation to check it. In word problems, define the variable and include units in the final answer."}
     ],
     example:"A school buys 8 exercise books at K1,200 each and pays K9,600. If the unit price is p, then 8p=9,600, so p=K1,200. Check: 8×1,200=9,600.",
     activity:"Create a market-price problem using Malawi Kwacha. Define a variable, form an equation, solve it and verify the answer.",
     summary:["Convert fractions, decimals and percentages accurately.","Follow order of operations and use brackets to show intended grouping.","Combine like terms and apply the distributive law.","Solve equations by preserving equality and check by substitution."],
     curriculumContext:"Supplementary number-and-algebra foundation for Malawi secondary Mathematics. It is not asserted to be the first unit in the revised MIE syllabus.",
     questions:[
      {q:"Evaluate 18−3×4.",a:"6.",worked:"Multiply first: 3×4=12. Then 18−12=6.",explanation:"Multiplication takes priority over subtraction."},
      {q:"Convert 0.375 to a fraction in its simplest form.",a:"3/8.",worked:"0.375=375/1000. Divide numerator and denominator by 125 to get 3/8.",explanation:"Simplify a fraction by dividing by a common factor."},
      {q:"Find 15% of K800.",a:"K120.",worked:"15/100×800=120.",explanation:"Percent means per hundred."},
      {q:"Simplify 7a−2a+4−9.",a:"5a−5.",worked:"7a−2a=5a and 4−9=−5.",explanation:"Combine variable terms and constants separately."},
      {q:"Expand 4(2x−3).",a:"8x−12.",worked:"4×2x=8x and 4×(−3)=−12.",explanation:"Multiply every term inside the bracket."},
      {q:"Solve 5x+7=32.",a:"x=5.",worked:"5x=25; divide by 5: x=5.",explanation:"Use inverse operations on both sides."},
      {q:"A trader reduces a K5,000 item by 12%. Calculate the sale price.",a:"K4,400.",worked:"Discount=0.12×5,000=K600. Sale price=5,000−600=K4,400.",explanation:"Calculate the discount before subtracting it from the original price."},
      {q:"Evaluate (−4)²−3².",a:"7.",worked:"(−4)²=16 and 3²=9; 16−9=7.",explanation:"The brackets show that the negative number itself is squared."},
      {q:"A number is doubled and 11 is added to give 35. Find the number.",a:"12.",worked:"Let the number be n. 2n+11=35; 2n=24; n=12.",explanation:"Translate the verbal relationship into an equation."},
      {q:"A learner writes 3(x+2)=3x+2. Correct the expansion and explain the error.",a:"3(x+2)=3x+6.",worked:"Multiply 3 by x and by 2. The learner failed to multiply the constant term by 3.",explanation:"The distributive property applies to every term in the bracket."}
     ]
    }],
    Physics:[{
     id:"malawi-mie-physics-bridge-measurement",title:"Bridging Module: Measurement, Motion and Data",lessons:"Malawi • Secondary Physics • Supplementary bridge",
     objectives:["Use SI units and suitable measuring instruments.","Distinguish distance from displacement and speed from velocity.","Calculate average speed from measured data.","Interpret graphs and evaluate experimental uncertainty."],
     sections:[
      {heading:"Physical quantities and SI units",body:"A physical quantity is measured and expressed using a number and a unit. Common SI units include metre (m) for length, kilogram (kg) for mass, second (s) for time, ampere (A) for electric current and kelvin (K) for thermodynamic temperature. Derived quantities combine base quantities; speed is measured in metres per second (m s⁻¹)."},
      {heading:"Distance, displacement and motion",body:"Distance is the total path travelled and is a scalar. Displacement is the change in position in a specified direction and is a vector. Speed is distance travelled per unit time. Average velocity is displacement divided by elapsed time. State direction when reporting a vector."},
      {heading:"Measuring and recording",body:"Use a metre rule or tape for length, a balance for mass and a stopwatch for time. Read scales at eye level where possible. Record units in table headings, repeat trials and calculate a mean. Avoid reporting more decimal places than the instrument can justify."},
      {heading:"Motion graphs",body:"On a distance–time graph, gradient represents speed. A horizontal section indicates no change in distance from the reference point. A steeper gradient indicates greater speed. On a velocity–time graph, gradient represents acceleration and the area under the graph represents displacement."}
     ],
     example:"A cyclist travels 150 m in 25 s. Average speed = distance/time = 150/25 = 6 m s⁻¹.",
     activity:"Time a rolling object over a measured distance, repeat five times, calculate average speed and explain one source of random error.",
     summary:["Always include the correct SI unit.","Distance and speed are scalars; displacement and velocity include direction.","Average speed is total distance divided by total time.","Graph gradients and areas can represent physical quantities."],
     curriculumContext:"Supplementary practical and motion foundation for Malawi secondary Physics; not asserted to be the first official MIE unit.",
     questions:[
      {q:"State the SI unit of time.",a:"Second (s).",worked:"The SI base unit for time is the second.",explanation:"Use the unit symbol s, not sec, in calculations."},
      {q:"A runner covers 400 m in 50 s. Calculate average speed.",a:"8 m s⁻¹.",worked:"v=distance/time=400/50=8 m s⁻¹.",explanation:"Average speed uses total distance and total elapsed time."},
      {q:"Distinguish distance from displacement.",a:"Distance is total path length; displacement is the straight-line change in position with direction.",worked:"Mention path length for distance and direction for displacement.",explanation:"Displacement is a vector; distance is a scalar."},
      {q:"Which instrument is suitable for measuring the mass of a small object?",a:"A balance.",worked:"A balance compares or measures mass.",explanation:"A spring balance measures force/weight rather than mass directly."},
      {q:"A car travels 60 km east and then 20 km west. Find total distance and displacement.",a:"Distance=80 km; displacement=40 km east.",worked:"Distance=60+20=80 km. Net change=60−20=40 km east.",explanation:"Distance adds path lengths; displacement accounts for direction."},
      {q:"What does a horizontal line on a distance–time graph indicate?",a:"The object is stationary relative to the reference point.",worked:"Distance does not change as time passes.",explanation:"The gradient is zero, so speed is zero."},
      {q:"A student records 2.4 s, 2.5 s, 2.4 s and 2.7 s. Calculate the mean time.",a:"2.5 s.",worked:"Mean=(2.4+2.5+2.4+2.7)/4=10.0/4=2.5 s.",explanation:"Add repeated values and divide by the number of trials."},
      {q:"A vehicle's velocity changes from 5 m s⁻¹ to 17 m s⁻¹ in 4 s. Find its average acceleration.",a:"3 m s⁻².",worked:"a=(v−u)/t=(17−5)/4=12/4=3 m s⁻².",explanation:"Acceleration is change in velocity per unit time."},
      {q:"Why should the same distance be used when comparing two runners' speeds in a simple timing experiment?",a:"It controls distance so that the comparison focuses on the time taken and calculated speed.",worked:"Explain control of distance and fair comparison.",explanation:"A fair test changes or compares one factor while controlling relevant others."},
      {q:"A learner reports a ruler measurement as 12.4387 cm although the ruler is marked in millimetres. Explain the problem.",a:"The result implies unjustified precision; it should be recorded to a precision supported by the ruler and measurement method.",worked:"Link decimal places to instrument resolution.",explanation:"A measurement should not claim accuracy beyond the instrument's capability."}
     ]
    }],
    Chemistry:[{
     id:"malawi-mie-chem-bridge-matter",title:"Bridging Module: Matter, Separation and Chemical Reactions",lessons:"Malawi • Secondary Chemistry • Supplementary bridge",
     objectives:["Classify elements, compounds and mixtures.","Describe matter using a particle model.","Choose suitable physical separation methods.","Identify evidence for chemical reactions and write simple word equations."],
     sections:[
      {heading:"Matter and particle theory",body:"Matter has mass and occupies space. It consists of particles such as atoms, molecules or ions. In a solid, particles are close together and vibrate about fixed positions. In a liquid, particles remain close but move past each other. In a gas, particles are far apart and move randomly. Heating generally increases average kinetic energy."},
      {heading:"Elements, compounds and mixtures",body:"An element contains one type of atom. A compound contains two or more elements chemically bonded in a fixed proportion. A mixture contains substances physically combined in variable proportions. Mixtures can often be separated by physical methods because their components retain their identities."},
      {heading:"Separation techniques",body:"Filtration separates an insoluble solid from a liquid. Evaporation or crystallisation can recover a dissolved solid. Simple distillation can recover a solvent from a solution. Fractional distillation separates miscible liquids with different boiling points. Chromatography separates substances according to their different movement through a stationary phase."},
      {heading:"Chemical change",body:"A chemical reaction rearranges atoms to form new substances. Evidence can include gas production, formation of a precipitate, persistent colour change, energy change or light emission. A word equation names reactants on the left and products on the right. Balanced symbol equations conserve atoms."}
     ],
     example:"Magnesium + oxygen → magnesium oxide. The atoms are rearranged during reaction; the product has properties different from the starting magnesium and oxygen.",
     activity:"Investigate a mixture of sand, salt and water. Filter to separate sand, then evaporate or crystallise the filtrate to recover salt. Explain the physical property used at each stage.",
     summary:["Elements, compounds and mixtures have different compositions.","Choose separation methods using solubility, particle size and boiling point.","Chemical reactions produce new substances.","Equations represent reactants and products and must conserve atoms."],
     curriculumContext:"Supplementary chemistry foundation for Malawi secondary learners; not asserted to be the first official MIE chapter.",
     questions:[
      {q:"Define a compound.",a:"A pure substance containing two or more elements chemically bonded in fixed proportions.",worked:"Include chemical bonding and fixed composition.",explanation:"A compound has a definite chemical composition."},
      {q:"Name a method for separating insoluble sand from water.",a:"Filtration.",worked:"Sand remains as residue; water passes through as filtrate.",explanation:"Filtration separates by particle size and insolubility."},
      {q:"How can dissolved salt be recovered from salt water?",a:"By evaporation or crystallisation.",worked:"Remove some or all solvent so salt crystals form.",explanation:"The method uses the volatility of water and the solubility of salt."},
      {q:"State one difference between a mixture and a compound.",a:"Mixture components are physically combined in variable proportions; a compound has elements chemically bonded in fixed proportions.",worked:"Contrast physical combination and variable composition with chemical bonding and fixed ratio.",explanation:"This distinction determines whether physical separation is possible."},
      {q:"Write a word equation for magnesium burning in oxygen.",a:"Magnesium + oxygen → magnesium oxide.",worked:"Place reactants on the left and product on the right.",explanation:"A word equation summarises the chemical change."},
      {q:"Explain why melting wax is usually a physical change.",a:"The wax changes state but remains the same substance; no new substance is formed.",worked:"State change of state and unchanged chemical identity.",explanation:"Physical changes do not alter chemical composition."},
      {q:"A mixture contains coloured dyes. Suggest a separation technique.",a:"Paper chromatography.",worked:"The solvent carries components at different rates along the paper.",explanation:"Different affinities for the mobile and stationary phases cause separation."},
      {q:"What happens to particle motion when a substance is heated?",a:"The particles' average kinetic energy generally increases.",worked:"Connect heating with increased average particle kinetic energy.",explanation:"This helps explain expansion and changes of state."},
      {q:"A reaction produces bubbles when two solutions are mixed. Give a suitable next step to investigate the gas.",a:"Collect the gas and test it with an appropriate gas test, selected according to the suspected gas.",worked:"Suggest collection and a valid identification test rather than assuming the gas identity.",explanation:"An observation alone may not identify the product."},
      {q:"Why must a chemical equation be balanced?",a:"Because atoms are conserved in a chemical reaction; the same number of each type of atom must appear on both sides.",worked:"State conservation of atoms and equal counts on both sides.",explanation:"Balancing reflects conservation of matter."}
     ]
    }],
    Biology:[{
     id:"malawi-mie-bio-bridge-cells",title:"Bridging Module: Cells, Organisation and Life Processes",lessons:"Malawi • Secondary Biology • Supplementary bridge",
     objectives:["Describe the cell as a basic unit of life.","Identify common cell structures and their functions.","Compare plant and animal cells.","Explain levels of biological organisation and cell specialisation."],
     sections:[
      {heading:"The cell",body:"The cell is the basic structural and functional unit of living organisms. Many cells contain a cell membrane, cytoplasm, ribosomes and genetic material. Eukaryotic cells have a nucleus and membrane-bound organelles. Prokaryotic cells do not have a membrane-bound nucleus."},
      {heading:"Plant and animal cells",body:"Plant cells typically have a cellulose cell wall, a large permanent vacuole and chloroplasts in photosynthetic tissues. Animal cells lack a cellulose cell wall and chloroplasts. Both plant and animal cells have a cell membrane, cytoplasm, ribosomes, mitochondria and genetic material."},
      {heading:"Cell specialisation",body:"A specialised cell has adaptations that help it perform a particular function. A red blood cell has a biconcave shape and haemoglobin for oxygen transport. A root hair cell has an elongated projection that increases surface area for absorption. A nerve cell has long extensions for communication."},
      {heading:"Levels of organisation",body:"In multicellular organisms, similar cells form tissues, tissues form organs, organs work in organ systems and organ systems make an organism. Specialisation and coordination allow different parts to perform complementary functions."}
     ],
     diagramHtml:'<svg viewBox="0 0 640 250" role="img" aria-label="Simplified comparison of plant and animal cells"><rect x="20" y="25" width="275" height="190" rx="18" fill="#e5f4df" stroke="#3e7945" stroke-width="3"/><rect x="32" y="37" width="251" height="166" rx="14" fill="none" stroke="#3e7945" stroke-width="2"/><ellipse cx="120" cy="115" rx="40" ry="30" fill="#d8c8f4" stroke="#72539a" stroke-width="2"/><circle cx="120" cy="115" r="10" fill="#72539a"/><ellipse cx="220" cy="90" rx="28" ry="13" fill="#f2c98b" stroke="#a87528" stroke-width="2"/><text x="155" y="235" text-anchor="middle" font-size="15" fill="#173d70">Plant cell (schematic)</text><ellipse cx="475" cy="120" rx="125" ry="85" fill="#f6e6f5" stroke="#8b568c" stroke-width="3"/><ellipse cx="450" cy="120" rx="40" ry="30" fill="#d8c8f4" stroke="#72539a" stroke-width="2"/><circle cx="450" cy="120" r="10" fill="#72539a"/><ellipse cx="530" cy="90" rx="28" ry="13" fill="#f2c98b" stroke="#a87528" stroke-width="2"/><text x="475" y="235" text-anchor="middle" font-size="15" fill="#173d70">Animal cell (schematic)</text></svg>',
     example:"A red blood cell transports oxygen. Its biconcave shape gives a relatively large surface area for gas exchange, while haemoglobin binds oxygen reversibly. Its lack of a nucleus in the mature mammalian cell leaves more space for haemoglobin.",
     activity:"Draw and label a plant cell and an animal cell. Make a comparison table showing at least four similarities and three differences, then link one specialised-cell adaptation to its function.",
     summary:["Cells are the basic units of living organisms.","Plant and animal cells share several structures but differ in key features.","Specialised cells have adaptations linked to their functions.","Cells form tissues, organs, organ systems and organisms."],
     curriculumContext:"Supplementary biology foundation for Malawi secondary learners; not asserted to be the first official MIE chapter.",
     questions:[
      {q:"State the function of the nucleus in a typical eukaryotic cell.",a:"It contains genetic material and helps control cell activities.",worked:"Mention DNA/genetic information and control of activities.",explanation:"The nucleus stores hereditary information."},
      {q:"Name two structures typical of plant cells but absent from animal cells.",a:"Cellulose cell wall and chloroplasts (in photosynthetic cells).",worked:"Name both structures; qualify chloroplasts because not all plant cells photosynthesise.",explanation:"Plant cells are adapted to support and, in green tissues, photosynthesis."},
      {q:"What is the role of mitochondria?",a:"They are the main site of aerobic respiration and ATP production.",worked:"Link mitochondria to aerobic respiration and energy transfer.",explanation:"ATP supplies energy for cellular processes."},
      {q:"Explain how a root hair cell is adapted for absorption.",a:"Its long projection increases surface area for absorption of water and mineral ions.",worked:"State the projection and connect it to increased surface area and uptake.",explanation:"Adaptation answers should connect structure to function."},
      {q:"Arrange cell, tissue, organ and organ system in increasing order of organisation.",a:"Cell → tissue → organ → organ system.",worked:"Start with the cell and progress to larger coordinated structures.",explanation:"Each higher level is made from interacting lower levels."},
      {q:"Why is a mature mammalian red blood cell suited to oxygen transport?",a:"It contains haemoglobin, has a biconcave shape and lacks a nucleus, allowing more space for haemoglobin.",worked:"Award points for haemoglobin, shape/surface area and space due to loss of nucleus.",explanation:"Multiple adaptations work together to support oxygen transport."},
      {q:"Define tissue.",a:"A group of similar cells working together to perform a particular function.",worked:"Include a group of cells and shared function.",explanation:"Tissues are above cells and below organs in organisation."},
      {q:"A cell lacks a membrane-bound nucleus. What broad category is it?",a:"Prokaryotic.",worked:"State prokaryote; bacteria are examples.",explanation:"Prokaryotic cells do not have a membrane-bound nucleus."},
      {q:"Explain why chloroplasts are abundant in many leaf cells.",a:"Leaves receive light and carry out photosynthesis; chloroplasts contain chlorophyll to absorb light energy.",worked:"Link leaf exposure/photosynthesis with chlorophyll and light absorption.",explanation:"Organelle abundance reflects the function of the cell."},
      {q:"A student claims all cells have a cell wall. Correct the claim with an example.",a:"The claim is false; animal cells do not have a cell wall, although plant cells do.",worked:"Reject the universal claim and provide a valid example.",explanation:"Scientific explanations must avoid overgeneralisation."}
     ]
    }]
   }
  }
 };
 all.Malawi=malawi;
})();