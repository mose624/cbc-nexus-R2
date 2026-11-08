/* CBE Nexus online-notes expansion — West Africa Wave 7 (2026).
   Original supplementary lessons. Follow each country's current official programme and school sequence.
*/
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const lesson=(id,title,sections,example,activity,qa,status)=>({
  id,title,lessons:"Comprehensive online lesson",
  curriculumContext:status+" Original CBE Nexus supplementary study notes; not official examination papers.",
  curriculumStatus:"supplementary-national-curriculum-support",
  objectives:["Explain concepts with accurate subject vocabulary.","Apply principles to familiar and unfamiliar problems.","Interpret diagrams, data and practical observations.","Show working clearly and use correct units."],
  sections:sections.map((body,i)=>({heading:["Core concepts","Detailed explanation","Applications","Practical and analytical skills"][i],body,paragraphs:[body]})),
  example,activity,summary:sections.map(s=>s.split(".")[0]+"."),
  questions:qa.map(([q,a])=>({q,a,worked:a,explanation:a}))
 });
 const packs=[
 {name:"Cabo Verde",level:"10º–12º Ano • Ciências e Tecnologias",curriculum:"Cabo Verde Ensino Secundário • Ciências e Tecnologias",authority:"Ministério da Educação, Formação Profissional, Ensino Superior, Ciência e Inovação",source:"https://minedu.gov.cv/recursos_educativosprogramas_escolares",status:"The Ministry publishes secondary-level programmes and manuals including Mathematics, Physics and Chemistry, Biology and Geology, Chemistry, Biology and Physics. These English notes are supplementary; consult the official Portuguese programme for exact sequencing.",subjects:{
 Biology:["Biology and Geology: cells, inheritance and ecosystems",[
 "Living things are organised into cells, tissues, organs and systems. Eukaryotic cells contain a nucleus and membrane-bound organelles; prokaryotic cells do not. Cell membranes regulate exchange with the environment.",
 "DNA stores hereditary information. Genes are DNA sequences; alleles are alternative forms of a gene. Mitosis supports growth and repair, while meiosis produces haploid cells and creates variation.",
 "Photosynthesis converts light energy into chemical energy using carbon dioxide and water. Respiration releases usable energy from organic molecules. These processes connect organisms to energy and carbon cycles.",
 "Ecosystems include communities and their physical environment. Food chains and webs show feeding relationships; energy is lost between trophic levels, while nutrients are recycled by decomposers. Island and coastal ecosystems can be sensitive to disturbance."
 ],"A diploid organism has 2n=18 chromosomes. Its haploid gametes have n=9 chromosomes.","Investigate plant growth using equal seedlings under different light conditions. Keep water, soil and temperature controlled, record growth and evaluate limitations.",[
 ["What is the role of DNA?","It stores hereditary information."],["How does meiosis differ from mitosis?","Meiosis produces haploid cells and variation; mitosis produces genetically similar cells for growth and repair."],["Write the word equation for photosynthesis.","Carbon dioxide + water → glucose + oxygen, using light energy."],["What is a producer?","An organism that makes organic food, usually by photosynthesis."],["Why does energy decrease along a food chain?","Energy is transferred and dissipated through respiration, heat, movement and waste."],["If 2n=24, what is n?","12."]])],
 Chemistry:["Chemistry: atomic structure, bonding and reactions",[
 "Atoms contain protons and neutrons in a tiny nucleus, with electrons occupying energy levels. Atomic number is proton number; mass number is proton plus neutron number. Isotopes have the same proton number but different neutron numbers.",
 "Ionic bonding is attraction between oppositely charged ions; covalent bonding involves shared electron pairs; metallic bonding involves positive ions and delocalised electrons. Structure and bonding explain conductivity, melting point and solubility.",
 "Chemical equations represent reactions and must be balanced because atoms are conserved. The mole connects particle number to measurable mass; molar mass and equation coefficients support quantitative calculations.",
 "Acids donate protons and bases accept protons in Brønsted–Lowry theory. Solutions have concentration; neutralisation and titration are used to analyse acid-base reactions."
 ],"For 0.20 mol dissolved to make 0.50 dm³, c=n/V=0.20/0.50=0.40 mol dm⁻³.","Use a periodic table to predict ion charges and write formulae for simple salts. Practise safe solution preparation with water and measured volumes.",[
 ["Define isotope.","Atoms of the same element with different numbers of neutrons."],["Describe covalent bonding.","A shared pair of electrons between atoms."],["How many neutrons are in sodium-23, atomic number 11?","23−11=12."],["Calculate concentration for 0.3 mol in 0.15 dm³.","2.0 mol dm⁻³."],["Why must equations be balanced?","To show conservation of atoms."],["Define a Brønsted–Lowry acid.","A proton donor."]])],
 Physics:["Physics: motion, energy and electricity",[
 "Distance is scalar while displacement is a vector. Speed is distance per time; velocity is displacement per time; acceleration is change in velocity per time. Motion graphs represent these quantities.",
 "Newton's laws relate resultant force to changes in motion. The equation F=ma applies to the resultant force; momentum is mass multiplied by velocity and is conserved in an isolated system.",
 "Work transfers energy when a force causes displacement. Kinetic energy is ½mv² and gravitational potential energy near Earth's surface is mgh. Power is the rate of energy transfer.",
 "Current is rate of flow of charge, potential difference is energy transferred per unit charge, and resistance opposes current. For an ohmic conductor at constant temperature, V=IR."
 ],"A 2 kg object moving at 5 m/s has kinetic energy ½×2×25=25 J.","Build a low-voltage circuit with a resistor. Measure voltage and current, plot V against I and calculate resistance from the gradient.",[
 ["Define acceleration.","Change in velocity divided by time."],["Find force on 4 kg accelerating at 3 m/s².","F=ma=12 N."],["What does the gradient of a displacement-time graph represent?","Velocity."],["Calculate GPE for 2 kg raised 4 m using g=10 N/kg.","80 J."],["State Ohm's law.","For an ohmic conductor at constant temperature, current is proportional to potential difference."],["What is the unit of charge?","Coulomb (C)."]])],
 Mathematics:["Mathematics: functions, geometry and statistics",[
 "A function assigns one output to each permitted input. Domain is the set of inputs and range is the set of outputs. Functions may be represented algebraically, numerically or graphically.",
 "Linear equations describe constant rates of change; quadratic equations involve a squared variable and have parabolic graphs. Factorisation and the quadratic formula are useful solution methods.",
 "Geometry studies shape, angles and space. Similar triangles have equal corresponding angles and proportional sides; trigonometric ratios connect angles and side lengths in right-angled triangles.",
 "Statistics summarises data using mean, median and mode; spread may be described by range and interquartile range. Probability measures uncertainty from zero to one."
 ],"For f(x)=3x−4, f(5)=15−4=11.","Collect a small local weather dataset, calculate its mean and median, draw a suitable graph and discuss how outliers affect the mean.",[
 ["Evaluate 2x+3 at x=4.","11."],["Solve x²−7x+12=0.","(x−3)(x−4)=0; x=3 or 4."],["What is the gradient of y=5x+2?","5."],["State Pythagoras' theorem.","For a right triangle, hypotenuse² equals the sum of the squares of the other two sides."],["Convert 0.35 to a percentage.","35%."],["What is the probability of a certain event?","1."]])]
 }},
 {name:"Guinea",level:"Lycée • Sciences expérimentales",curriculum:"Guinée Enseignement secondaire général • sciences expérimentales",authority:"Ministère de l'Enseignement pré-universitaire et de l'Alphabétisation",source:"https://www.education.gov.gn/",status:"These are supplementary science foundations for lycée scientific study. Confirm the current national programme and class-specific progression with the ministry and school.",subjects:{
 Biology:["Biology: cell biology, genetics and human health",[
 "Cells are the basic structural and functional units of organisms. Organelles perform specialised roles; membranes control exchange, mitochondria release energy through respiration, and ribosomes synthesise proteins.",
 "DNA is organised into chromosomes. Genes influence inherited characteristics, while environmental factors also affect phenotype. Mitosis produces similar cells; meiosis forms gametes and contributes to variation.",
 "The human body coordinates systems. Digestion breaks food into absorbable molecules, circulation transports materials, and respiration exchanges oxygen and carbon dioxide. These systems work together to maintain internal conditions.",
 "Pathogens include bacteria, viruses, fungi and parasites. Physical barriers, immune cells and antibodies help defend the body. Prevention includes sanitation, vaccination where appropriate, safe water and evidence-based health practices."
 ],"A body cell with 46 chromosomes produces gametes with 23 chromosomes after meiosis.","Create a labelled flow diagram linking digestion, absorption, circulation and cellular respiration. Explain how each stage supports energy supply.",[
 ["What is the function of mitochondria?","They are a major site of aerobic respiration and ATP production."],["What is a chromosome?","A DNA-containing structure carrying genes."],["How many chromosomes are in a human gamete?","23."],["Name two physical barriers to infection.","Skin and mucus membranes."],["What is the role of antibodies?","They bind specific antigens and help immune defence."],["Why is clean water important?","It reduces transmission of water-borne pathogens."]])],
 Chemistry:["Chemistry: matter, formulae and chemical change",[
 "Matter consists of particles. Elements contain one type of atom, compounds contain chemically combined elements in fixed ratios, and mixtures contain substances physically combined.",
 "Atomic structure and electron arrangement help explain periodic trends and reactivity. Metals often form positive ions; non-metals often form negative ions or share electrons in covalent compounds.",
 "Chemical reactions rearrange atoms and involve energy changes. Balanced equations represent conservation of atoms; reaction types include combination, decomposition, displacement and neutralisation.",
 "Acids, bases and salts are important in laboratory and everyday contexts. pH indicates acidity or alkalinity; indicators show pH ranges, while titration can determine an unknown concentration."
 ],"Magnesium reacts with oxygen: 2Mg + O₂ → 2MgO, showing two magnesium atoms for each oxygen molecule.","Compare filtration, evaporation and simple distillation using safe mixtures. Record which physical property allows each separation method.",[
 ["What is an element?","A pure substance made of one type of atom."],["How does a compound differ from a mixture?","A compound is chemically combined in fixed proportions; a mixture is physically combined."],["What is the pH of a neutral solution at 25°C?","Approximately 7."],["Balance H₂ + O₂ → H₂O.","2H₂ + O₂ → 2H₂O."],["What gas is commonly released when a reactive metal reacts with dilute acid?","Hydrogen."],["Which method separates an insoluble solid from a liquid?","Filtration."]])],
 Physics:["Physics: measurement, mechanics and energy",[
 "Physical quantities are measured using standard units. Scalars have magnitude only; vectors have magnitude and direction. Repeated measurements, suitable instruments and uncertainty estimates improve reliability.",
 "Motion is described by displacement, velocity and acceleration. The gradient of a displacement-time graph gives velocity; the gradient of a velocity-time graph gives acceleration, and its area gives displacement.",
 "A resultant force changes motion according to Newton's laws. Work is force multiplied by displacement in the force direction; energy is conserved but can be transferred to less useful forms.",
 "Heat transfers by conduction, convection and radiation. Temperature relates to average particle kinetic energy, while internal energy includes particle kinetic and potential energies."
 ],"A runner covers 150 m in 30 s. Average speed =150/30=5 m/s.","Measure the time for a trolley to travel several marked distances. Repeat trials, calculate average speed and identify sources of uncertainty.",[
 ["What is the SI unit of force?","Newton (N)."],["Calculate speed for 100 m in 20 s.","5 m/s."],["Find force on 2 kg accelerating at 6 m/s².","12 N."],["What does the area under a velocity-time graph represent?","Displacement."],["Name the three modes of heat transfer.","Conduction, convection and radiation."],["What is a vector quantity?","A quantity with magnitude and direction."]])],
 Mathematics:["Mathematics: algebra, functions and probability",[
 "Algebra uses symbols to represent numbers and relationships. Expressions can be simplified by collecting like terms; equations are solved by applying equivalent operations to both sides.",
 "Functions describe relationships between inputs and outputs. Linear and quadratic functions can be represented with tables and graphs; roots are input values for which the function equals zero.",
 "Geometry and trigonometry connect algebra to measurement. Similarity, congruence, Pythagoras' theorem and trigonometric ratios solve problems involving lengths and angles.",
 "Probability describes uncertain outcomes. The sample space lists possible outcomes; mutually exclusive probabilities add, while probabilities of independent joint events multiply."
 ],"Solve 3x+5=20: 3x=15, therefore x=5.","Survey classmates using an anonymous numerical question, organise results in a frequency table and compare mean and median.",[
 ["Simplify 4a+3a−2a.","5a."],["Solve 5x−4=16.","x=4."],["Factorise x²−16.","(x−4)(x+4)."],["What is the sum of angles in a triangle?","180°."],["What is the probability of an impossible event?","0."],["If a fair coin is tossed once, what is P(head)?","1/2."]])]
 }},
 {name:"Guinea-Bissau",level:"Ensino Secundário • Ciências",curriculum:"Guiné-Bissau Ensino Secundário • science foundations",authority:"Ministério da Educação Nacional",source:"https://www.minedu.gov.gw/",status:"Supplementary English-language science support; verify Portuguese-language national syllabi and the class-specific subject plan with the Ministry or school.",subjects:{
 Biology:["Biology: living systems and environmental science",[
 "Living organisms share characteristics including cellular organisation, metabolism, growth, response and reproduction. Cells may be prokaryotic or eukaryotic and contain structures adapted to their functions.",
 "Photosynthesis stores energy in organic molecules; cellular respiration releases usable energy. Producers, consumers and decomposers connect organisms in food webs and recycle nutrients.",
 "Inheritance is based on DNA and genes. Chromosomes are passed from parents to offspring; meiosis forms gametes and genetic variation contributes to differences among individuals.",
 "Biodiversity includes variation within species, between species and among ecosystems. Habitat protection, sustainable resource use and pollution control help conserve ecosystems, including wetlands and coastal habitats."
 ],"In a simple Aa × Aa cross, the expected genotype ratio is 1 AA : 2 Aa : 1 aa.","Map a nearby habitat and record producers, consumers and decomposers. Suggest two practical ways to reduce human pressure on it.",[
 ["What is biodiversity?","Variation within species, between species and among ecosystems."],["What is photosynthesis?","The process by which organisms such as green plants use light energy to make organic molecules from carbon dioxide and water."],["What molecule carries genes?","DNA."],["What is a food web?","A network of interconnected food chains."],["Give one role of decomposers.","They break down dead matter and recycle nutrients."],["Name one way to conserve a wetland.","Prevent pollution, protect vegetation or regulate damaging land use."]])],
 Chemistry:["Chemistry: particles, mixtures and reactions",[
 "The particle model explains solids, liquids and gases. Particles are closely packed in solids, move past one another in liquids and are widely spaced in gases; temperature affects their average kinetic energy.",
 "Pure substances have characteristic properties. Mixtures can be separated by physical methods such as filtration, evaporation, distillation and chromatography, chosen according to differences in particle size, volatility or attraction.",
 "Atoms combine through ionic or covalent bonding. Chemical formulae show composition; balanced equations show how atoms are rearranged while total atom numbers are conserved.",
 "Acids and bases can be identified using indicators and pH. Neutralisation produces a salt and water in many acid-base reactions; safe handling and careful measurement are essential."
 ],"A mixture of sand and salt can be separated by adding water, filtering off sand, then evaporating the filtrate to recover salt.","Plan a safe separation procedure for a sand-salt-water mixture. Explain each step and identify the property used.",[
 ["Which state has a fixed shape and volume?","Solid."],["Which method separates sand from water?","Filtration."],["What is an atom?","The smallest unit of an element that retains its chemical identity."],["Why are equations balanced?","Atoms are conserved in chemical reactions."],["What does pH below 7 indicate?","An acidic solution at ordinary school conditions."],["What forms in a typical acid-base neutralisation?","A salt and water."]])],
 Physics:["Physics: forces, electricity and thermal effects",[
 "Measurement requires appropriate instruments and units. Distance and time are scalar quantities; displacement and force are vectors. Accuracy, precision and uncertainty are important when interpreting results.",
 "Forces can change speed, direction or shape. Newton's second law states that resultant force equals mass multiplied by acceleration. Friction opposes relative motion and can transfer mechanical energy to thermal energy.",
 "Electric circuits require a complete conducting path. Current is the rate of charge flow; potential difference is energy transferred per unit charge. Components may be arranged in series or parallel.",
 "Thermal energy moves by conduction, convection and radiation. Good conductors transfer thermal energy efficiently; convection occurs in fluids through bulk movement, and radiation can travel through a vacuum."
 ],"A 10 N resultant force acts on a 2 kg trolley. Acceleration a=F/m=10/2=5 m/s².","Compare how quickly equal volumes of water cool in different safe containers. Record temperatures at fixed intervals and explain heat-transfer pathways.",[
 ["What is the SI unit of mass?","Kilogram (kg)."],["Calculate acceleration for F=18 N and m=3 kg.","a=18/3=6 m/s²."],["Define electric current.","Rate of flow of electric charge."],["What is needed for current in a simple circuit?","A complete conducting path and a source of potential difference."],["Which heat transfer method occurs in a vacuum?","Radiation."],["What is friction?","A force that opposes relative motion or attempted motion between surfaces."]])],
 Mathematics:["Mathematics: number, algebra and geometry",[
 "The real number system includes rational and irrational numbers. Fractions, decimals, percentages and ratios are useful forms for comparing quantities; units must be consistent before calculations.",
 "Algebraic expressions can be expanded and factorised. Linear equations model constant rates, while simultaneous equations solve situations involving two unknowns.",
 "Geometry includes angle properties, perimeter, area and volume. Pythagoras' theorem applies to right-angled triangles; scale drawings represent real objects using a constant ratio.",
 "Data can be organised in tables and graphs. Mean, median and mode summarise central tendency; probability uses the ratio of favourable outcomes to equally likely possible outcomes."
 ],"A price of 80 reduced by 15% becomes 80−12=68.","Measure a rectangular classroom or garden, prepare a scale drawing and calculate actual perimeter and area.",[
 ["Convert 3/4 to a percentage.","75%."],["Simplify 24:36.","2:3."],["Solve 2x+7=19.","x=6."],["Find the area of a rectangle 8 m by 5 m.","40 m²."],["What is the hypotenuse if the other sides are 3 cm and 4 cm?","5 cm."],["What is the mean of 2,4,6,8?","5."]])]
 }},
 {name:"Togo",level:"Lycée • Séries scientifiques",curriculum:"Togo Enseignement secondaire général • séries scientifiques",authority:"Ministère des Enseignements primaire, secondaire, technique et de l'artisanat",source:"https://education.gouv.tg/",status:"Supplementary science lessons for lycée scientific pathways. Check the current Togolese programme and class-specific progression for exact syllabus alignment.",subjects:{
 Biology:["Biology: cell function, genetics and physiology",[
 "Cells are the basic units of life. Organelles have specialised functions: the nucleus stores DNA, ribosomes synthesise proteins, mitochondria release energy and membranes regulate transport.",
 "Enzymes are biological catalysts. Their activity depends on temperature, pH, substrate concentration and enzyme structure. They lower activation energy without being consumed by the reaction.",
 "Genes are DNA sequences located on chromosomes. Alleles contribute to inherited variation; meiosis produces haploid gametes, and fertilisation restores the diploid chromosome number.",
 "Human physiology depends on coordinated systems. Digestion provides absorbable nutrients, circulation transports them, respiration supplies oxygen and excretion removes metabolic wastes."
 ],"If an enzyme works fastest at 37°C, activity may decrease at much higher temperatures because its active-site structure can be disrupted.","Investigate the effect of temperature on a safe enzyme model or teacher-led catalase demonstration. Identify independent, dependent and controlled variables.",[
 ["What is an enzyme?","A biological catalyst that speeds reactions without being used up."],["What is the active site?","The region of an enzyme where substrate binds and reaction occurs."],["What happens to many enzymes at very high temperatures?","They denature and lose the shape needed for activity."],["What is an allele?","An alternative form of a gene."],["What is fertilisation?","Fusion of male and female gametes to form a zygote."],["Name two functions of the kidney.","Filtering blood and regulating water and ion balance by forming urine."]])],
 Chemistry:["Chemistry: bonding, stoichiometry and redox",[
 "Electron arrangement helps explain periodic properties. Atoms may lose, gain or share electrons to achieve more stable outer-shell arrangements; the resulting bonding influences material properties.",
 "Chemical equations represent rearrangement of atoms. Balancing equations and using relative formula masses allow calculations of reacting masses and limiting reactants.",
 "Acids and bases participate in neutralisation. Strong and weak describe extent of ionisation, not concentration; pH is related to hydrogen ion concentration and can be measured with indicators or meters.",
 "Redox reactions involve electron transfer. Oxidation is loss of electrons and reduction is gain; oxidation numbers help identify which species is oxidised or reduced."
 ],"For 2H₂ + O₂ → 2H₂O, 2 mol hydrogen react with 1 mol oxygen to form 2 mol water.","Use simple half-equations to identify electron loss and gain in a displacement reaction demonstration conducted by a teacher.",[
 ["Define ionic bonding.","Electrostatic attraction between oppositely charged ions."],["What is a limiting reactant?","The reactant consumed first that limits the amount of product formed."],["Define oxidation in electron terms.","Loss of electrons."],["Define reduction in electron terms.","Gain of electrons."],["Does a weak acid have to be dilute?","No; strength describes ionisation, while concentration describes amount per volume."],["How many moles of water form from 4 mol H₂ with excess oxygen?","4 mol H₂O."]])],
 Physics:["Physics: kinematics, forces and waves",[
 "Kinematics describes motion using displacement, velocity and acceleration. Uniform acceleration equations apply when acceleration is constant; graphs provide gradient and area interpretations.",
 "Newton's laws connect force and motion. Momentum is mass multiplied by velocity; in an isolated system total momentum is conserved. Impulse equals change in momentum.",
 "Waves transfer energy without net transfer of matter. Frequency is cycles per second, wavelength is distance between corresponding points, and wave speed is v=fλ.",
 "Electricity involves charge flow and energy transfer. Ohm's law applies to ohmic conductors at constant temperature; electrical power is P=VI and energy transferred is Pt."
 ],"A wave has frequency 25 Hz and wavelength 2 m. Speed v=fλ=50 m/s.","Use a slinky or rope to compare transverse and longitudinal waves. Measure frequency and wavelength where practical and calculate wave speed.",[
 ["What is acceleration?","Change in velocity per unit time."],["Find momentum of a 3 kg object moving at 4 m/s.","12 kg m/s."],["What does the area under a velocity-time graph give?","Displacement."],["Calculate wave speed for f=10 Hz and λ=0.5 m.","5 m/s."],["State Ohm's law.","For an ohmic conductor at constant temperature, V is proportional to I."],["Define impulse.","Change in momentum, equal to force multiplied by the time interval for constant force."]])],
 Mathematics:["Mathematics: functions, calculus and statistics",[
 "Functions describe mappings between sets. Domain restrictions may arise from denominators, square roots or context. Graphs reveal intercepts, turning points and intervals of increase or decrease.",
 "Polynomial equations can be solved by factorisation, substitution or numerical methods. The discriminant of a quadratic indicates the number of real roots.",
 "Differentiation gives instantaneous rate of change. The power rule differentiates xⁿ to nxⁿ⁻¹; stationary points occur when the first derivative is zero and can be investigated using the second derivative.",
 "Statistics describes and analyses data. Measures of central tendency and spread should be selected according to data type; probability models quantify uncertainty and support decisions."
 ],"For y=x³−2x, dy/dx=3x²−2; at x=2, gradient=10.","Plot a quadratic function, estimate roots and turning point, then verify the turning point using differentiation.",[
 ["Find f(3) for f(x)=2x².","18."],["Solve x²−9=0.","x=−3 or x=3."],["Differentiate y=4x³.","12x²."],["What does a derivative represent geometrically?","The gradient of a curve at a point."],["Find the median of 2,4,7,9,12.","7."],["What is the probability range?","From 0 to 1 inclusive."]])]
 }},
 {name:"Benin",level:"Lycée • Séries scientifiques",curriculum:"Bénin Enseignement secondaire général • séries scientifiques",authority:"Ministère des Enseignements secondaire, technique et de la formation professionnelle",source:"https://enseignementsecondaire.gouv.bj/",status:"Supplementary English-language study support for scientific series. Match topics and examination expectations to the current official Beninese programme and school sequence.",subjects:{
 Biology:["Biology: organisation, heredity and ecology",[
 "Living organisms are built from cells. Cells form tissues and organs; specialised structures support transport, communication, defence and reproduction. Microscopes help observe cells and tissues.",
 "DNA contains genetic information. Genes influence protein production and inherited characteristics; meiosis and fertilisation explain chromosome transmission and genetic variation.",
 "Organisms interact with one another and with the environment. Population size is affected by resources, competition, predation, disease and environmental change; ecosystems depend on energy flow and nutrient cycling.",
 "Human health is influenced by nutrition, sanitation, infectious agents and lifestyle. Public-health measures include safe water, hygiene, vaccination where indicated and reliable health education."
 ],"A diploid cell with 2n=20 produces haploid cells with n=10 after meiosis.","Construct a food web for a local terrestrial or aquatic ecosystem. Predict the consequences of a decline in one producer population.",[
 ["What is a tissue?","A group of similar or coordinated cells performing a particular function."],["What is the function of DNA?","It stores hereditary information."],["How many chromosomes are in a gamete if 2n=46?","23."],["What is a population?","Individuals of the same species living in a particular area at a given time."],["What is a limiting factor?","A resource or environmental condition that restricts population growth."],["Give two ways to prevent water-borne disease.","Treat drinking water and maintain sanitation/hand hygiene."]])],
 Chemistry:["Chemistry: atomic theory, reactions and solutions",[
 "The atom has a nucleus containing protons and neutrons and electrons arranged in energy levels. Atomic number identifies an element; isotopes differ in neutron number.",
 "The periodic table organises elements by atomic number and recurring properties. Electron arrangement helps predict common ion charges, bonding and reactivity.",
 "Chemical reactions conserve atoms. Balanced equations and mole ratios support quantitative analysis; reaction rates are affected by temperature, concentration, surface area and catalysts.",
 "Solutions contain solute and solvent. Concentration describes solute amount per volume; acids, bases and salts undergo reactions that can be investigated by indicators and titration."
 ],"For 0.10 mol solute in 250 cm³, convert volume to 0.250 dm³; c=0.10/0.250=0.40 mol dm⁻³.","Compare reaction rates using safe effervescent tablets at different temperatures. Keep tablet mass and water volume constant and discuss fair testing.",[
 ["What determines an element's identity?","Its atomic number or number of protons."],["What are isotopes?","Atoms of the same element with different neutron numbers."],["Name two factors that increase reaction rate.","Higher temperature and greater concentration (also greater surface area or a catalyst)."],["Convert 250 cm³ to dm³.","0.250 dm³."],["Calculate concentration for 0.5 mol in 0.25 dm³.","2.0 mol dm⁻³."],["What is a catalyst?","A substance that increases reaction rate without being consumed overall."]])],
 Physics:["Physics: mechanics, electricity and energy",[
 "Motion is described by distance, displacement, speed, velocity and acceleration. Graphs represent motion: gradient of displacement-time gives velocity and gradient of velocity-time gives acceleration.",
 "Forces cause acceleration or deformation. Newton's second law relates resultant force, mass and acceleration. Work and energy concepts explain how mechanical systems transfer energy.",
 "Electric current is charge flow per unit time. Potential difference is energy transferred per unit charge, and resistance relates voltage to current. Circuit arrangements affect current and voltage distribution.",
 "Energy is conserved but can be transferred between stores. Kinetic energy, gravitational potential energy and electrical energy are common forms; power measures the rate of energy transfer."
 ],"A 5 kg object is raised 2 m. With g=10 N/kg, gain in GPE=mgh=100 J.","Use a low-voltage circuit to compare series and parallel arrangements. Record current and potential difference and explain the differences.",[
 ["What is the SI unit of energy?","Joule (J)."],["Calculate force on 6 kg accelerating at 2 m/s².","12 N."],["Define potential difference.","Energy transferred per unit charge between two points."],["What is the current if 10 C passes in 2 s?","I=Q/t=5 A."],["Calculate kinetic energy of 2 kg at 3 m/s.","½×2×9=9 J."],["What is power?","Energy transferred or work done per unit time."]])],
 Mathematics:["Mathematics: algebra, trigonometry and probability",[
 "Algebra represents relationships using variables. Expressions can be simplified, expanded and factorised; equations and inequalities model constraints and unknown quantities.",
 "Functions include linear, quadratic and exponential forms. Their graphs support interpretation of rates, roots, intercepts and growth patterns.",
 "Trigonometry relates angles and sides. In right-angled triangles, sine, cosine and tangent connect an acute angle with side ratios; these methods support indirect measurement.",
 "Probability uses sample spaces and event rules. Statistics summarises collected data; sampling methods and graph choice affect the reliability of conclusions."
 ],"In a right triangle, opposite=3 and hypotenuse=5, so sin θ=3/5=0.6.","Measure the height of a tree or building using a measured baseline and angle of elevation. Draw a diagram and state assumptions.",[
 ["Expand 3(x+4).","3x+12."],["Factorise x²+5x+6.","(x+2)(x+3)."],["Solve 2x−9=7.","x=8."],["What is cos θ in a right triangle?","Adjacent side divided by hypotenuse."],["What is the probability of an event that is certain?","1."],["Find the mean of 3,5,7,9.","6."]])]
 }}
 ];
 for(const c of packs){
  const country=all[c.name]||(all[c.name]={});
  country.curriculum=c.curriculum;country.authority=c.authority;country.source=c.source;country.levels=country.levels||{};
  const level=country.levels[c.level]||(country.levels[c.level]={});
  for(const [subject,data] of Object.entries(c.subjects)){
   const [title,sections,example,activity,qa]=data;
   const list=level[subject]||(level[subject]=[]);
   const id=c.name.toLowerCase().replace(/[^a-z]+/g,"-")+"-wave7-"+subject.toLowerCase()+"-01";
   if(!list.some(x=>x.id===id))list.push(lesson(id,title,sections,example,activity,qa,c.status));
  }
 }
})();