/* Zimbabwe MoPSE / ZIMSEC four-subject revision extension.
   O-Level: Forms 1-4 learning pathway; ZIMSEC subject syllabuses examined at O-Level.
   A-Level: Forms 5-6. Topic lists are conservative syllabus-area maps pending full
   transcription of current MoPSE 2024-2030 documents; starter lessons are not full coverage. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const mk=(id,title,subject,level,sections,example,questions,objectives,activity,summary)=>({
  id,title,lessons:"Zimbabwe • "+level+" • "+subject+" • Original revision starter",
  objectives,sections,example,activity,summary,questions
 });
 const q=(q,a,worked,explanation)=>({q,a,worked,explanation});
 const z={
  curriculum:"Zimbabwe • Ministry of Primary and Secondary Education (MoPSE) • ZIMSEC Ordinary Level Forms 1–4 • Advanced Level Forms 5–6",
  authority:"Ministry of Primary and Secondary Education (MoPSE) • Zimbabwe School Examinations Council (ZIMSEC)",
  source:"https://www5.zimsec.co.zw/syllabi/",
  exam:"ZIMSEC administers national examinations. Ordinary Level subject syllabuses include Mathematics, Biology, Chemistry and Physics (with Combined Science also offered); Advanced Level has separate Biology, Chemistry, Mathematics and Physics syllabuses for Forms 5–6.",
  curriculumAuditStatus:"official-examination-levels-and-subject-offerings-verified-detailed-topic-sequences-pending",
  notice:"Zimbabwe's O-Level science provision includes both Combined Science and separate subject syllabuses. These revision pages keep Biology, Chemistry and Physics as separate learning strands for learners taking the corresponding subjects; they do not imply that every learner takes all three. The current MoPSE syllabus edition for the learner's examination cohort must be checked before treating a topic list as exhaustive. The starter lessons below are original CBE Nexus teaching material, not copied past-paper questions.",
  revisionCoverage:{
   fourCoreSubjects:["Biology","Chemistry","Mathematics","Physics"],
   levels:[
    {level:"Forms 1–4",qualification:"Ordinary Level pathway",subjects:["Mathematics","Biology","Chemistry","Physics","Combined Science"],scienceStrands:["Biology","Chemistry","Physics"],note:"Forms 1–2 provide foundational learning; O-Level syllabuses and examination preparation extend through Forms 3–4. Combined Science is a distinct option and should not be confused with the separate Biology, Chemistry and Physics subjects."},
    {level:"Forms 5–6",qualification:"Advanced Level",subjects:["Mathematics","Biology","Chemistry","Physics"],note:"Advanced subject study for learners selecting the relevant science and mathematics pathways."}
   ],
   sequenceRule:"Use the MoPSE syllabus version for the candidate's cohort and the ZIMSEC subject syllabus for the relevant examination. This extension currently provides subject/level coverage and starter lessons; it does not claim that every official topic heading has been transcribed or authored.",
   features:["Syllabus-aligned topic checklist as verified","Online chapter notes and diagrams","Worked calculations and examples","Practical and experimental skills","Higher-order application questions","Model answers with marking points","Past-paper questions identified by year and paper; original practice labelled separately"]
  },
  verifiedCurriculumSequence:{
   "Ordinary Level Forms 1–4":{
    Mathematics:"ZIMSEC Ordinary Level Mathematics syllabus. Exact current topic-by-topic order is pending direct transcription from the current syllabus document.",
    Biology:"ZIMSEC Ordinary Level Biology syllabus. Keep practical biology, data handling and experimental skills alongside content topics.",
    Chemistry:"ZIMSEC Chemistry syllabus (Forms 3–4 examination course); foundational chemistry learning precedes the examination course.",
    Physics:"ZIMSEC Physics syllabus (Forms 3–4 examination course); practical measurement and data handling are integral."
   },
   "Advanced Level Forms 5–6":{
    Mathematics:"ZIMSEC Advanced Level Mathematics syllabus. Confirm the subject route (Mathematics / Further Mathematics / Statistics) before assigning optional units.",
    Biology:"MoPSE Biology syllabus Forms 5–6, current 2024–2030 edition.",
    Chemistry:"MoPSE Chemistry syllabus Forms 5–6, current 2024–2030 edition.",
    Physics:"ZIMSEC / MoPSE Advanced Level Physics syllabus Forms 5–6. Full current topic sequence pending direct syllabus transcription."
   }
  },
  levels:{
   "Ordinary Level • Forms 1–4 • Four core subjects":{
    Mathematics:[mk("zw-olevel-maths-number","Number, Operations and Mathematical Reasoning","Mathematics","O-Level Forms 1–4",[
     {heading:"Number systems and operations",body:"Work with integers, fractions, decimals, percentages, ratio and proportion. Apply order of operations and use estimation to check the size and reasonableness of an answer."},
     {heading:"Algebraic language",body:"Represent unknown quantities with symbols. Simplify expressions by collecting like terms, expand brackets using the distributive law and factorise common factors."},
     {heading:"Equations and problem solving",body:"Solve linear equations by applying inverse operations to both sides. Translate word problems into equations, state units where relevant and check solutions by substitution."}
    ],"Solve 3(2x − 1) = 15. Expand: 6x − 3 = 15. Add 3: 6x = 18. Divide by 6: x = 3. Check: 3(6 − 1) = 15.",[
     q("Evaluate 3/4 + 2/3.","17/12 or 1 5/12.","Use denominator 12: 9/12 + 8/12 = 17/12.","Fractions must have a common denominator before addition."),
     q("Find 18% of 250.","45.","0.18 × 250 = 45.","Convert the percentage to a decimal and multiply."),
     q("Simplify 5a − 2b + 3a + 7b.","8a + 5b.","Combine a terms: 5a+3a=8a; b terms: −2b+7b=5b.","Only like terms may be combined."),
     q("Solve 4x + 9 = 29.","x = 5.","4x=20; x=5.","Apply inverse operations in reverse order."),
     q("A ratio is 3:5 and the total is 64. Find the smaller share.","24.","Total parts=8; one part=64÷8=8; smaller share=3×8=24.","Divide the total by the sum of ratio parts.")
    ],["Use number operations accurately.","Simplify algebraic expressions.","Solve equations and ratio problems."],"Solve a household-budget problem involving percentages, ratio and a linear equation.",["Show each calculation step.","Use correct notation and units.","Check answers by estimation or substitution."])],
    Biology:[mk("zw-olevel-biology-cells","Cells, Organisation and Life Processes","Biology","O-Level Forms 1–4",[
     {heading:"Cells as the basic units of life",body:"Cells are the structural and functional units of living organisms. Eukaryotic cells contain a nucleus and membrane-bound organelles. Cell membranes regulate exchange; cytoplasm is the site of many chemical reactions."},
     {heading:"Plant and animal cells",body:"Plant cells typically possess a cellulose cell wall, a large permanent vacuole and chloroplasts in photosynthetic tissues. Animal cells lack a cellulose cell wall and chloroplasts."},
     {heading:"Organisation and specialised cells",body:"In multicellular organisms, cells form tissues, tissues form organs and organs form systems. Specialised cells have structures adapted to their functions, such as root hair cells for absorption and red blood cells for oxygen transport."},
     {heading:"Life processes",body:"Living organisms carry out nutrition, respiration, excretion, growth, sensitivity, movement and reproduction. Respiration releases energy from organic molecules; it is not the same as breathing."}
    ],"A root hair cell has a long projection that increases surface area. Its thin wall provides a short diffusion path, supporting water and mineral-ion uptake.",[
     q("State the function of the cell membrane.","It controls movement of substances into and out of the cell.","Award control of entry and exit; selective permeability may be stated.","A good function answer explains what the structure does."),
     q("Name two structures found in typical plant cells but not animal cells.","Cellulose cell wall and chloroplasts (in photosynthetic cells).","Give two valid structures.","Do not state that all plant cells contain chloroplasts."),
     q("Explain how a root hair cell is adapted for absorption.","Its long projection increases surface area; thin wall gives a short uptake path.","Link the projection to surface area and absorption.","Adaptation answers must connect structure with function."),
     q("Arrange cell, organ, tissue and organ system from simplest to most complex.","Cell → tissue → organ → organ system.","Place tissue after cell and before organ.","Levels of organisation build from smaller units."),
     q("Explain why muscle cells contain many mitochondria.","Muscle contraction requires energy; mitochondria release usable energy during aerobic respiration.","Link high energy demand to respiration in mitochondria.","Avoid saying mitochondria create energy.")
    ],["Describe basic cell structures and functions.","Compare plant and animal cells.","Explain levels of organisation and cell adaptations."],"Prepare labelled biological drawings using clear single lines, labels and a title.",["Structure is related to function.","Cells form tissues, organs and systems.","Respiration releases energy for life processes."])],
    Chemistry:[mk("zw-olevel-chemistry-particles","Matter, Particles and Atomic Structure","Chemistry","O-Level Forms 1–4",[
     {heading:"Matter and the particle model",body:"Matter has mass and occupies space. The particle model explains solids, liquids and gases through particle spacing, arrangement and movement. Changes of state are physical changes."},
     {heading:"Elements, compounds and mixtures",body:"An element contains one type of atom. A compound contains two or more elements chemically combined in fixed proportions. A mixture contains substances physically combined and can often be separated by physical methods."},
     {heading:"Atomic structure",body:"Atoms contain protons and neutrons in a central nucleus, with electrons occupying energy levels around it. Atomic number is the number of protons; mass number is the total number of protons and neutrons."},
     {heading:"Separation and purity",body:"Filtration separates an insoluble solid from a liquid; evaporation or crystallisation can recover a dissolved solid; distillation separates liquids using differences in boiling point. Chromatography separates components according to their movement through stationary and mobile phases."}
    ],"A neutral sodium atom has atomic number 11, so it contains 11 protons and 11 electrons. If its mass number is 23, neutrons = 23 − 11 = 12.",[
     q("Distinguish an element from a compound.","An element contains one type of atom; a compound contains different elements chemically combined in a fixed ratio.","Include one atom type versus chemically combined elements.","A mixture is not chemically combined."),
     q("How many neutrons are in an atom with atomic number 17 and mass number 35?","18.","Neutrons = mass number − atomic number = 35 − 17 = 18.","Atomic number gives proton number."),
     q("Name a suitable method to separate sand from water.","Filtration.","Pour the mixture through filter paper; sand remains as residue.","Filtration separates an insoluble solid from a liquid."),
     q("Why can a gas be compressed more easily than a liquid?","Gas particles are much farther apart, leaving larger spaces that can be reduced.","Mention large inter-particle spaces.","The particles themselves are not substantially compressed."),
     q("A mixture contains ethanol and water. Which separation method is appropriate and why?","Fractional distillation, because the liquids have different boiling points.","Identify fractional distillation and boiling-point difference.","The fractionating column improves separation of miscible liquids.")
    ],["Use the particle model to explain matter.","Distinguish elements, compounds and mixtures.","Describe atomic structure and separation methods."],"Draw particle arrangements for solid, liquid and gas, and label the relative spacing.",["Atomic number equals proton number.","Mass number equals protons plus neutrons.","Choose separation methods based on physical properties."])],
    Physics:[mk("zw-olevel-physics-measurement","Physical Quantities, Measurement and Motion","Physics","O-Level Forms 1–4",[
     {heading:"Physical quantities and SI units",body:"A measurement has a numerical value and a unit. Common SI base units include metre (m), kilogram (kg), second (s), ampere (A) and kelvin (K). Use suitable instruments and record sensible precision."},
     {heading:"Scalars and vectors",body:"A scalar has magnitude only, such as distance, speed, mass and time. A vector has magnitude and direction, such as displacement, velocity, force and acceleration."},
     {heading:"Distance, displacement and speed",body:"Distance is total path length; displacement is change in position in a stated direction. Average speed = total distance ÷ total time. Average velocity uses displacement divided by time."},
     {heading:"Motion graphs",body:"A distance–time graph has gradient equal to speed. A horizontal line indicates rest. On a velocity–time graph, gradient represents acceleration and area under the graph represents displacement."}
    ],"A vehicle travels 150 m in 10 s. Average speed = 150 ÷ 10 = 15 m/s. Always include the unit.",[
     q("State the SI unit of force.","newton (N).","Force is measured in newtons.","Use the named SI derived unit."),
     q("A runner covers 400 m in 80 s. Calculate average speed.","5 m/s.","Speed = distance/time = 400/80 = 5 m/s.","Use total distance divided by total time."),
     q("Distinguish distance from displacement.","Distance is total path length (scalar); displacement is straight-line change in position with direction (vector).","Include path length and direction.","The return journey may add distance while net displacement is zero."),
     q("What does a horizontal section on a distance–time graph show?","The object is stationary; its distance from the reference point is unchanged.","State zero gradient and no change in distance.","Gradient of distance–time graph gives speed."),
     q("A car increases velocity from 4 m/s to 16 m/s in 6 s. Find its average acceleration.","2 m/s².","a=(v−u)/t=(16−4)/6=2 m/s².","Acceleration is change in velocity per unit time.")
    ],["Use SI units and appropriate instruments.","Distinguish scalar and vector quantities.","Interpret motion graphs and calculate speed/acceleration."],"Plot a distance–time graph from measured data and interpret its gradient.",["Write formula, substitution and answer with unit.","Graph gradients have physical meaning.","Direction matters for vector quantities."])]
   },
   "Advanced Level • Forms 5–6 • Four core subjects":{
    Mathematics:[mk("zw-alevel-maths-functions","Functions, Algebra and Mathematical Modelling","Mathematics","A-Level Forms 5–6",[
     {heading:"Functions and notation",body:"A function maps each allowed input to exactly one output. State the domain and range where required. Distinguish a function from a general relation and interpret f(x) notation."},
     {heading:"Composite and inverse functions",body:"For functions f and g, the composite f(g(x)) applies g first and then f. An inverse function reverses the mapping and exists as a function when the original mapping is one-to-one on the stated domain."},
     {heading:"Algebraic reasoning",body:"Use factorisation, algebraic identities and equation-solving methods to simplify expressions and solve problems. Check restrictions introduced by denominators, roots and logarithms."}
    ],"If f(x)=2x+3 and g(x)=x², then f(g(x))=2x²+3. The order matters: g(f(x))=(2x+3)².",[
     q("Given f(x)=3x−4, find f(5).","11.","f(5)=3(5)−4=15−4=11.","Substitute the input for x."),
     q("If f(x)=2x+1 and g(x)=x², find f(g(x)).","2x²+1.","First g(x)=x²; then f(x²)=2x²+1.","Apply the inside function first."),
     q("Find the inverse of f(x)=4x−7.","f⁻¹(x)=(x+7)/4.","Set y=4x−7; swap x and y; solve x=4y−7 for y.","An inverse reverses input and output."),
     q("Solve x²−5x+6=0.","x=2 or x=3.","(x−2)(x−3)=0.","Use the zero-product property."),
     q("State why x=0 is excluded from 1/x.","Division by zero is undefined.","Denominator cannot equal zero.","State the domain restriction.")
    ],["Use function notation and domain restrictions.","Evaluate composite and inverse functions.","Apply algebraic methods to mathematical models."],"Model a simple growth or cost situation with a function and explain domain restrictions.",["Show logical algebraic steps.","State domain restrictions.","Check solutions in the original expression."])],
    Biology:[mk("zw-alevel-biology-cell-membranes","Cell Structure, Membranes and Biological Molecules","Biology","A-Level Forms 5–6",[
     {heading:"Cell ultrastructure",body:"Eukaryotic cells contain membrane-bound organelles with specialised functions. The nucleus contains DNA; mitochondria are sites of aerobic respiration; ribosomes synthesise polypeptides; rough endoplasmic reticulum and Golgi apparatus process and transport proteins."},
     {heading:"Membrane structure",body:"The fluid-mosaic model describes a phospholipid bilayer with embedded proteins. Phospholipid hydrophilic heads face aqueous environments while hydrophobic tails face inward. Membrane proteins function in transport, recognition and signalling."},
     {heading:"Transport across membranes",body:"Diffusion is net movement down a concentration gradient. Osmosis is net movement of water across a partially permeable membrane. Facilitated diffusion uses membrane proteins without direct ATP input; active transport moves substances against a gradient using energy."},
     {heading:"Biological molecules",body:"Carbohydrates, lipids, proteins and nucleic acids have characteristic monomers or building blocks, bonds and biological roles. Relate molecular structure to function rather than memorising isolated definitions."}
    ],"A cell placed in a solution with a lower water potential than its cytoplasm loses water by osmosis. A plant cell becomes flaccid and may become plasmolysed if the membrane pulls away from the cell wall.",[
     q("Describe the fluid-mosaic model.","A phospholipid bilayer with proteins embedded in or associated with it; components can move laterally.","Mention bilayer and embedded proteins.","The model explains both membrane structure and flexibility."),
     q("Distinguish facilitated diffusion from active transport.","Facilitated diffusion moves down a concentration/electrochemical gradient through proteins without ATP; active transport moves against a gradient using energy.","Compare direction relative to gradient and energy use.","Transport mechanism depends on gradient and energy requirement."),
     q("Explain why phospholipids form a bilayer in water.","Hydrophilic heads interact with water while hydrophobic tails avoid water and face inward.","Link head and tail properties to arrangement.","This arrangement forms a stable barrier."),
     q("A cell is placed in a hypertonic solution. Predict the net water movement.","Water moves out of the cell by osmosis.","State net movement from higher to lower water potential across partially permeable membrane.","Use water potential terminology where appropriate."),
     q("Give two functions of membrane proteins.","Transport (channels/carriers), receptors, cell recognition or enzymes.","Any two correctly described roles.","Link the protein type to its function.")
    ],["Explain eukaryotic cell organelles.","Apply the fluid-mosaic model.","Compare membrane transport mechanisms and biological molecules."],"Use microscope drawings and annotated membrane diagrams to connect structure with function.",["Use water-potential language accurately.","Compare transport by gradient and energy use.","Relate biological structure to function."])],
    Chemistry:[mk("zw-alevel-chemistry-atomic-bonding","Atomic Structure, Bonding and Chemical Quantities","Chemistry","A-Level Forms 5–6",[
     {heading:"Atomic structure and electron configuration",body:"Protons and neutrons occupy the nucleus; electrons occupy quantised energy levels and orbitals. Electron configuration helps explain periodic trends and chemical behaviour."},
     {heading:"Chemical bonding",body:"Ionic bonding involves electrostatic attraction between oppositely charged ions. Covalent bonding involves shared electron pairs. Metallic bonding involves positive ions attracted to delocalised electrons."},
     {heading:"Moles and quantitative chemistry",body:"The mole is the amount of substance containing Avogadro's number of specified entities. Use n=m/M and concentration c=n/V with consistent units. Balanced equations provide mole ratios."},
     {heading:"Structure and properties",body:"Relate bonding and structure to melting point, boiling point, electrical conductivity, solubility and mechanical properties. Distinguish giant ionic, metallic, covalent network and simple molecular structures."}
    ],"For 9.8 g of H₂SO₄ (Mᵣ=98), n=m/M=9.8/98=0.10 mol. If dissolved to 0.50 dm³, concentration = 0.10/0.50=0.20 mol dm⁻³.",[
     q("Calculate the amount in moles in 12 g of carbon (Aᵣ=12).","1.0 mol.","n=m/M=12/12=1.0 mol.","Use the correct molar mass and unit."),
     q("Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.","In the solid, ions are fixed in a lattice; when molten, ions are mobile and carry charge.","Mention mobile ions only in molten state.","Electrical conduction requires mobile charged particles."),
     q("State the type of bonding in magnesium metal.","Metallic bonding.","Positive metal ions are attracted to delocalised electrons.","Describe the electrostatic attraction."),
     q("Calculate concentration when 0.25 mol is dissolved to make 0.50 dm³ solution.","0.50 mol dm⁻³.","c=n/V=0.25/0.50=0.50 mol dm⁻³.","Use volume in dm³."),
     q("Why do simple molecular substances often have low boiling points?","Only relatively weak intermolecular forces need to be overcome; covalent bonds within molecules remain intact.","Distinguish intermolecular forces from covalent bonds.","Do not say the covalent bonds are broken during boiling.")
    ],["Use atomic structure to explain periodic behaviour.","Explain ionic, covalent and metallic bonding.","Perform mole and concentration calculations."],"Solve a stoichiometry problem from a balanced equation and show the mole ratio clearly.",["Balance equations before using mole ratios.","Show formula, substitution and units.","Distinguish intermolecular forces from covalent bonds."])],
    Physics:[mk("zw-alevel-physics-measurement-mechanics","Measurement, Kinematics and Dynamics","Physics","A-Level Forms 5–6",[
     {heading:"Measurement and uncertainty",body:"Use SI units, appropriate significant figures and instrument resolution. Distinguish random and systematic errors. Repeat measurements where appropriate and report uncertainty consistently."},
     {heading:"Kinematics",body:"For constant acceleration, use v=u+at, s=ut+½at², v²=u²+2as and s=(u+v)t/2 where assumptions apply. Interpret displacement–time and velocity–time graphs."},
     {heading:"Newton's laws",body:"Newton's first law describes equilibrium or constant velocity when resultant force is zero. The second law relates resultant force to rate of change of momentum (F=ma for constant mass). The third law describes equal and opposite forces acting on different bodies."},
     {heading:"Momentum and energy",body:"Momentum p=mv. In an isolated system, total momentum is conserved. Work done by a constant force parallel to displacement is W=Fs; kinetic energy is ½mv² and gravitational potential energy near Earth's surface is mgh."}
    ],"A body accelerates from 5 m/s to 17 m/s in 4 s. a=(17−5)/4=3 m/s². If mass is 2 kg, resultant force F=ma=6 N.",[
     q("A car changes velocity from 10 m/s to 22 m/s in 3 s. Find acceleration.","4 m/s².","a=(v−u)/t=(22−10)/3=4 m/s².","Use change in velocity divided by time."),
     q("Calculate the momentum of a 0.20 kg ball moving at 15 m/s.","3.0 kg m/s.","p=mv=0.20×15=3.0 kg m/s.","Momentum is a vector quantity."),
     q("A 5 kg object experiences a resultant force of 20 N. Find acceleration.","4 m/s².","a=F/m=20/5=4 m/s².","Use Newton's second law."),
     q("State the principle of conservation of momentum.","Total momentum of an isolated system remains constant if no resultant external force acts.","Mention isolated system/no external resultant force.","Apply before and after interaction."),
     q("A force of 12 N moves an object 3 m in its direction. Calculate work done.","36 J.","W=Fs=12×3=36 J.","Use displacement parallel to the force.")
    ],["Analyse measurement uncertainty.","Apply constant-acceleration equations.","Use Newton's laws, momentum and energy."],"Plan a practical to determine acceleration and identify sources of systematic and random error.",["State assumptions before applying equations.","Keep units consistent.","Distinguish resultant forces from action–reaction pairs."])]
   }
  }
 };
 all.Zimbabwe=z;
 if(all.countryIndex && Array.isArray(all.countryIndex) && !all.countryIndex.includes("Zimbabwe")) all.countryIndex.push("Zimbabwe");
 if(all.countries && Array.isArray(all.countries) && !all.countries.includes("Zimbabwe")) all.countries.push("Zimbabwe");
})();