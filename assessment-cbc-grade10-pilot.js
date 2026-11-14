/* CBE Nexus — Kenya Grade 10 KICD-aligned pilot question packs.
   Original practice MCQs (not official KICD examination questions).
   Curriculum scope mapped to the July 2025 Grade 10 designs:
   Biology, Chemistry, Core Mathematics, Physics and English.
   Questions carry strand/sub-strand IDs so learner filters remain exact.
   Source directory: https://kicd.ac.ke/cbc-materials/curriculum-designs/grade-ten/
*/
(() => {
  const root = window.CBENexusCBCBanks;
  if (!root || !root.banks) return;
  const grade = root.banks["Grade 10"] || (root.banks["Grade 10"] = {});
  root.curriculum = root.curriculum || {};
  const curriculum = root.curriculum["Grade 10"] || (root.curriculum["Grade 10"] = {});

  const sub = (id, label, outcomes, content) => ({ id, label, learningOutcomes: outcomes, content });
  const strand = (id, label, subStrands) => ({ id, label, subStrands });
  const q = (sid, subid, label, question, options, answer, explanation, outcome, contentText) =>
    [question, options, answer, label, explanation, sid, subid, outcome, contentText];

  // BIOLOGY — Cell Biology and Biodiversity; Anatomy and Physiology of Plants/Animals.
  curriculum.Biology = [
    strand("1.0", "1.0 Cell Biology and Biodiversity", [
      sub("1.1", "1.1 Introduction to Biology", ["Explain the application of Biology in everyday life."], ["Applications of Biology; fields of study and related careers"]),
      sub("1.2", "1.2 Specimen Collection and Preservation", ["Select and handle biological specimens appropriately."], ["Collection, handling, labelling and preservation of specimens"]),
      sub("1.3", "1.3 Cell Structure and Specialisation", ["Relate cell structures to their functions."], ["Cell membrane, nucleus, mitochondria and specialised cells"]),
      sub("1.4", "1.4 Chemicals of Life", ["Identify major biological molecules and their roles."], ["Carbohydrates, proteins and lipids; food tests"])
    ]),
    strand("2.0", "2.0 Anatomy and Physiology of Plants", [
      sub("2.1", "2.1 Nutrition", ["Explain how green plants manufacture organic food."], ["Photosynthesis; factors and requirements"]),
      sub("2.2", "2.2 Transport", ["Describe transport of water and manufactured food in plants."], ["Xylem and phloem; transport in plants"]),
      sub("2.3", "2.3 Gaseous Exchange and Respiration", ["Explain gaseous exchange and respiration in plants."], ["Stomata; diffusion; cellular respiration"])
    ]),
    strand("3.0", "3.0 Anatomy and Physiology of Animals", [
      sub("3.1", "3.1 Nutrition", ["Explain digestion and absorption of nutrients in animals."], ["Digestion; absorption in the small intestine"]),
      sub("3.2", "3.2 Transport", ["Describe transport of materials in animals."], ["Blood components and transport functions"]),
      sub("3.3", "3.3 Gaseous Exchange and Respiration", ["Explain gaseous exchange in mammals."], ["Alveoli; diffusion; gas exchange"])
    ])
  ];
  grade.Biology = [
    q("1.0","1.1","1.1 Introduction to Biology","Which field of Biology focuses on relationships between organisms and their environment?",["Ecology","Anatomy","Genetics","Taxonomy"],0,"Ecology studies interactions among organisms and between organisms and their environment.","Relate fields of Biology to their areas of study.","Ecology and biological fields of study."),
    q("1.0","1.2","1.2 Specimen Collection and Preservation","Why should a collected biological specimen be labelled immediately?",["To identify its source and collection details","To increase its mass","To change its natural colour","To make it reproduce"],0,"A label preserves essential information such as identity, location and date of collection.","Explain appropriate handling and documentation of specimens.","Specimen collection, labelling and preservation."),
    q("1.0","1.3","1.3 Cell Structure and Specialisation","Which cell structure controls the movement of substances into and out of a cell?",["Cell membrane","Cell wall","Nucleus","Vacuole"],0,"The cell membrane is selectively permeable and regulates exchange with the surroundings.","Relate cell structures to their functions.","Cell membrane and selective permeability."),
    q("1.0","1.3","1.3 Cell Structure and Specialisation","Which organelle is the main site of aerobic respiration in a typical plant or animal cell?",["Mitochondrion","Ribosome","Golgi apparatus","Chloroplast"],0,"Mitochondria are the main sites of aerobic respiration and ATP production.","Identify organelles and explain their functions.","Mitochondria and cellular respiration."),
    q("1.0","1.4","1.4 Chemicals of Life","A food sample turns blue-black when iodine solution is added. Which nutrient is present?",["Starch","Protein","Lipid","Vitamin C"],0,"Iodine solution gives a blue-black colour in the presence of starch.","Use food tests to identify biological molecules.","Chemical tests for carbohydrates."),
    q("2.0","2.1","2.1 Nutrition","Which raw material do green plants obtain from the air for photosynthesis?",["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],0,"Carbon dioxide supplies the carbon used to build carbohydrates during photosynthesis.","Explain the requirements for photosynthesis.","Photosynthesis and its raw materials."),
    q("2.0","2.2","2.2 Transport","Which plant tissue transports water and mineral salts mainly from roots to leaves?",["Xylem","Phloem","Epidermis","Cambium"],0,"Xylem vessels conduct water and dissolved mineral ions from roots towards aerial parts.","Describe transport of water and mineral salts in plants.","Xylem transport."),
    q("2.0","2.3","2.3 Gaseous Exchange and Respiration","Most gaseous exchange in a leaf occurs through openings called:",["Stomata","Lenticels only","Root hairs","Hydathodes"],0,"Stomata are pores that allow diffusion of carbon dioxide, oxygen and water vapour.","Explain gaseous exchange in plants.","Stomata and diffusion."),
    q("3.0","3.1","3.1 Nutrition","Which feature of the small intestine increases the surface area for absorption?",["Villi and microvilli","Cartilage rings","Alveoli","Nephrons"],0,"Numerous villi and microvilli provide a large surface area for absorption of digested nutrients.","Explain absorption of nutrients in animals.","Adaptations of the small intestine for absorption."),
    q("3.0","3.3","3.3 Gaseous Exchange and Respiration","Which feature makes mammalian alveoli efficient sites of gaseous exchange?",["Thin walls and a rich capillary supply","Thick dry walls","A waterproof outer layer","Absence of blood vessels"],0,"Thin moist walls and many surrounding capillaries provide a short diffusion distance and maintain concentration gradients.","Explain gaseous exchange in mammals.","Alveolar adaptations for diffusion.")
  ];

  // CHEMISTRY — original items mapped to the published Grade 10 strand sequence.
  curriculum.Chemistry = [
    strand("1.0","1.0 Inorganic Chemistry",[
      sub("1.1","1.1 Introduction to Chemistry",["Explain the relevance of Chemistry in everyday life."],["Matter, chemical processes and applications of Chemistry"]),
      sub("1.2","1.2 The Atom",["Describe atomic structure and determine electron arrangements."],["Protons, neutrons, electrons; isotopes; relative atomic mass; s and p orbitals for first 20 elements"]),
      sub("1.3","1.3 The Periodic Table",["Relate the position of an element to its electron arrangement."],["Development of the periodic table; groups, periods and ion formation"]),
      sub("1.4","1.4 Chemical Bonding",["Distinguish types of chemical bonds and relate them to properties."],["Ionic, covalent, dative covalent and hydrogen bonding; valence electrons"]),
      sub("1.5","1.5 Periodicity",["Describe periodic trends in selected groups and periods."],["Trends in properties of Groups I, II, VII and VIII and Period 3"])
    ]),
    strand("2.0","2.0 Physical Chemistry",[
      sub("2.1","2.1 Acids and Bases",["Distinguish acids and bases using their properties and indicators."],["Acid-base properties, indicators and neutralisation"]),
      sub("2.2","2.2 Introduction to Salts",["Classify salts and describe their formation."],["Normal, acidic, basic and double salts"])
    ]),
    strand("3.0","3.0 Organic Chemistry",[
      sub("3.0","3.0 Organic Chemistry",["Recognise carbon-based compounds as the focus of organic chemistry."],["Introduction to organic chemistry and carbon compounds"])
    ])
  ];
  grade.Chemistry = [
    q("1.0","1.1","1.1 Introduction to Chemistry","Which statement best describes the focus of Chemistry?",["The composition, properties and changes of matter","The classification of living organisms only","The movement of planets only","The study of landforms"],0,"Chemistry investigates matter, its properties, composition and the changes it undergoes.","Explain the relevance of Chemistry in everyday life.","Matter and chemical change."),
    q("1.0","1.2","1.2 The Atom","An atom has 11 protons and 12 neutrons. What is its mass number?",["11","12","23","132"],2,"Mass number = number of protons + number of neutrons = 11 + 12 = 23.","Determine mass number from subatomic particle counts.","Atomic number and mass number."),
    q("1.0","1.2","1.2 The Atom","Which statement correctly describes isotopes of the same element?",["They have the same number of protons but different numbers of neutrons","They have different numbers of protons","They always have different chemical symbols","They have the same mass number but different atomic numbers"],0,"Isotopes share the same atomic number but have different neutron numbers and therefore different mass numbers.","Explain the meaning of isotopes.","Isotopes and atomic structure."),
    q("1.0","1.3","1.3 The Periodic Table","An element has the electron arrangement 2,8,1. In which group of the modern periodic table is it placed?",["Group 1","Group 2","Group 7","Group 8"],0,"The single electron in the outermost shell places this element in Group 1.","Relate electron arrangement to group position.","Groups and valence electrons."),
    q("1.0","1.4","1.4 Chemical Bonding","What happens when sodium forms an ionic bond with chlorine?",["Sodium transfers one electron to chlorine","Both atoms share three pairs of electrons","Chlorine transfers a proton to sodium","Neither atom changes its electron arrangement"],0,"Sodium loses one electron to form Na⁺ while chlorine gains it to form Cl⁻; electrostatic attraction forms the ionic bond.","Explain ionic bond formation using electron transfer.","Ionic bonding and ion formation."),
    q("1.0","1.4","1.4 Chemical Bonding","A covalent bond is formed when atoms:",["Share one or more pairs of electrons","Transfer neutrons","Share protons","Exchange complete nuclei"],0,"Covalent bonding involves sharing electron pairs between atoms.","Distinguish covalent bonding from other bond types.","Covalent bonding and shared electrons."),
    q("1.0","1.5","1.5 Periodicity","Across Period 3 from sodium to chlorine, atomic radius generally:",["Decreases","Increases continuously","Remains exactly constant","First doubles then becomes zero"],0,"Increasing nuclear charge across the period attracts electrons more strongly while electrons are added to the same main shell.","Describe periodic trends across a period.","Periodic trends in atomic properties."),
    q("2.0","2.1","2.1 Acids and Bases","A solution turns blue litmus paper red. The solution is most likely:",["Acidic","Alkaline","Neutral","A pure salt solution in every case"],0,"Acids turn blue litmus red; this is a common qualitative test for acidity.","Use indicators to distinguish acids and bases.","Acid-base indicators."),
    q("2.0","2.2","2.2 Introduction to Salts","Which pair of substances can react to form sodium chloride and water?",["Hydrochloric acid and sodium hydroxide","Sodium chloride and water","Oxygen and hydrogen","Sodium and nitrogen"],0,"Hydrochloric acid reacts with sodium hydroxide in a neutralisation reaction to form sodium chloride and water.","Explain salt formation by neutralisation.","Acid-base neutralisation and salt formation."),
    q("3.0","3.0","3.0 Organic Chemistry","Which element is the essential backbone of most organic compounds?",["Carbon","Sodium","Calcium","Helium"],0,"Organic chemistry primarily studies carbon compounds, many of which contain carbon-hydrogen bonds.","Recognise the scope of organic chemistry.","Carbon compounds.")
  ];

  // CORE MATHEMATICS — the Grade 10 Core Mathematics design uses three main strands.
  curriculum["Core Mathematics"] = [
    strand("1.0","1.0 Numbers and Algebra",[
      sub("1.1","1.1 Real Numbers",["Classify real numbers and use reciprocals."],["Whole numbers; odd, even, prime and composite numbers; rational and irrational numbers"]),
      sub("1.2","1.2 Indices and Logarithms",["Apply laws of indices and logarithms."],["Indices; logarithms; common logarithms"]),
      sub("1.3","1.3 Quadratic Expressions and Equations",["Form and solve quadratic equations."],["Quadratic expressions and equations"])
    ]),
    strand("2.0","2.0 Measurements and Geometry",[
      sub("2.1","2.1 Similarity and Enlargement",["Use scale factors in similar figures."],["Similarity and enlargement"]),
      sub("2.2","2.2 Reflection and Congruence",["Describe reflections and congruent figures."],["Reflection and congruence"]),
      sub("2.3","2.3 Rotation",["Apply rotation transformations."],["Rotation"]),
      sub("2.4","2.4 Trigonometry",["Apply trigonometric ratios to solve problems."],["Trigonometry and right-angled triangles"])
    ]),
    strand("3.0","3.0 Statistics and Probability",[
      sub("3.1","3.1 Statistics",["Interpret and analyse statistical data."],["Collection, organisation and interpretation of data"]),
      sub("3.2","3.2 Probability",["Apply experimental and theoretical probability."],["Probability; sample spaces; mutually exclusive and independent events"])
    ])
  ];
  grade["Core Mathematics"] = [
    q("1.0","1.1","1.1 Real Numbers","Which of the following is irrational?",["0.25","√2","3/5","0.125"],1,"√2 cannot be expressed as a ratio of two integers; the other choices are rational.","Classify real numbers as rational or irrational.","Rational and irrational numbers."),
    q("1.0","1.2","1.2 Indices and Logarithms","Evaluate 2³ × 2⁴.",["2⁷","2¹²","2¹","4⁷"],0,"For the same base, add exponents: 2³ × 2⁴ = 2⁷.","Apply laws of indices.","Multiplication of powers with the same base."),
    q("1.0","1.3","1.3 Quadratic Expressions and Equations","Solve x² − 5x + 6 = 0.",["x = 1 or 6","x = 2 or 3","x = −2 or −3","x = 0 or 6"],1,"Factorise: (x − 2)(x − 3) = 0, so x = 2 or x = 3.","Solve a quadratic equation by factorisation.","Quadratic equations."),
    q("2.0","2.1","2.1 Similarity and Enlargement","Two similar triangles have corresponding sides 4 cm and 10 cm. What is the scale factor from the smaller to the larger triangle?",["2","2.5","4","6"],1,"Scale factor = 10 ÷ 4 = 2.5.","Determine scale factors in similar figures.","Similarity and enlargement."),
    q("2.0","2.2","2.2 Reflection and Congruence","The point (3, −2) is reflected in the y-axis. What are its image coordinates?",["(−3, −2)","(3, 2)","(−3, 2)","(2, −3)"],0,"Reflection in the y-axis maps (x, y) to (−x, y).","Apply coordinate rules for reflection.","Reflection in coordinate geometry."),
    q("2.0","2.3","2.3 Rotation","A point (2, 1) is rotated 90° anticlockwise about the origin. What is its image?",["(1, −2)","(−1, 2)","(−2, −1)","(2, −1)"],1,"A 90° anticlockwise rotation maps (x, y) to (−y, x), giving (−1, 2).","Apply coordinate rules for rotation.","Rotation about the origin."),
    q("2.0","2.4","2.4 Trigonometry","A right-angled triangle has an angle of 30° and a hypotenuse of 10 cm. What is the side opposite the 30° angle?",["5 cm","5√3 cm","10√3 cm","20 cm"],0,"sin 30° = opposite/hypotenuse = 1/2, so opposite = 10 × 1/2 = 5 cm.","Use trigonometric ratios in right-angled triangles.","Sine ratio."),
    q("3.0","3.1","3.1 Statistics","Find the mean of 4, 6, 8 and 10.",["6","7","8","9"],1,"Mean = (4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7.","Calculate and interpret the mean.","Measures of central tendency."),
    q("3.0","3.2","3.2 Probability","A fair die is rolled once. What is the probability of obtaining a number greater than 4?",["1/6","1/3","1/2","2/3"],1,"The favourable outcomes are 5 and 6: probability = 2/6 = 1/3.","Calculate probabilities from equally likely outcomes.","Sample space and probability."),
    q("3.0","3.2","3.2 Probability","A bag contains 3 red and 2 blue counters. One counter is selected at random. What is the probability it is not blue?",["2/5","3/5","1/2","1/5"],1,"There are 3 red counters out of 5 counters in total, so P(not blue) = 3/5.","Determine probabilities of complementary events.","Probability of an event and its complement.")
  ];

  // PHYSICS — four Grade 10 strands and their listed sub-strands.
  curriculum.Physics = [
    strand("1.0","1.0 Mechanics and Thermal Physics",[
      sub("1.1","1.1 Introduction to Physics",["Explain the meaning, branches and everyday applications of Physics."],["Meaning and branches of Physics; relationship with other fields"]),
      sub("1.2","1.2 Pressure",["Relate pressure to force and area."],["Pressure in solids and fluids"]),
      sub("1.3","1.3 Mechanical Properties of Materials",["Describe mechanical properties of materials."],["Elasticity and mechanical behaviour of materials"]),
      sub("1.4","1.4 Temperature and Thermal Expansion",["Explain temperature measurement and thermal expansion."],["Temperature; expansion and contraction of solids and fluids"]),
      sub("1.5","1.5 Moments and Equilibrium",["Determine moments and describe equilibrium."],["Moment of a force; centre of gravity; equilibrium"]),
      sub("1.6","1.6 Energy, Work, Power and Machines",["Apply relationships involving work, energy, power and machines."],["Kinetic and potential energy; work; power; simple machines"])
    ]),
    strand("2.0","2.0 Waves and Optics",[
      sub("2.1","2.1 Properties of Waves",["Describe wave properties and their applications."],["Reflection, refraction, diffraction, interference and Doppler effect"]),
      sub("2.2","2.2 Radioactivity and Stability of Isotopes",["Describe radioactivity and isotope stability."],["Radioactivity and stability of isotopes"])
    ]),
    strand("3.0","3.0 Electricity and Magnetism",[
      sub("3.1","3.1 Electrostatics",["Explain charging and electrostatic effects."],["Electric charges and electrostatic phenomena"]),
      sub("3.2","3.2 Current Electricity",["Relate current, charge and time in electric circuits."],["Electric current and simple circuits"]),
      sub("3.3","3.3 Introduction to Electronics",["Recognise basic electronic components and their functions."],["Introduction to electronic components"])
    ]),
    strand("4.0","4.0 Environmental and Space Physics",[
      sub("4.1","4.1 Greenhouse Effect and Climate Change",["Explain the greenhouse effect and its relationship to climate change."],["Greenhouse gases; infrared radiation; climate change"]),
      sub("4.2","4.2 Introduction to Space Physics",["Describe celestial bodies and basic ideas in space physics."],["Universe, celestial bodies and space exploration"])
    ])
  ];
  grade.Physics = [
    q("1.0","1.1","1.1 Introduction to Physics","Which branch of Physics mainly studies motion, forces and energy?",["Mechanics","Geometrical optics","Electronics","Astronomy"],0,"Mechanics deals with motion, forces and energy.","Identify branches of Physics and their areas of study.","Branches of Physics."),
    q("1.0","1.2","1.2 Pressure","A force of 60 N acts normally on an area of 3 m². What pressure is exerted?",["20 Pa","57 Pa","63 Pa","180 Pa"],0,"Pressure = force ÷ area = 60 ÷ 3 = 20 Pa.","Calculate pressure from force and area.","Pressure in solids."),
    q("1.0","1.3","1.3 Mechanical Properties of Materials","A material returns to its original shape after the deforming force is removed, provided its elastic limit is not exceeded. This property is:",["Elasticity","Brittleness","Ductility","Density"],0,"Elasticity is the ability of a material to regain its original shape after the force is removed.","Describe mechanical properties of materials.","Elastic behaviour."),
    q("1.0","1.4","1.4 Temperature and Thermal Expansion","Why are small gaps left between sections of some railway tracks?",["To allow for thermal expansion","To prevent the tracks from conducting electricity","To reduce the mass of the train","To increase friction"],0,"Rails expand when heated; expansion gaps reduce the risk of buckling.","Explain applications of thermal expansion.","Thermal expansion of solids."),
    q("1.0","1.5","1.5 Moments and Equilibrium","A 10 N force acts perpendicular to a spanner 0.2 m from the pivot. What is the moment?",["0.5 N m","2 N m","10.2 N m","50 N m"],1,"Moment = force × perpendicular distance = 10 × 0.2 = 2 N m.","Calculate the moment of a force.","Moment of a force."),
    q("1.0","1.6","1.6 Energy, Work, Power and Machines","A learner lifts a 20 N load vertically through 2 m. How much work is done against gravity?",["10 J","18 J","40 J","80 J"],2,"Work done = force × distance in the direction of the force = 20 × 2 = 40 J.","Calculate work done in lifting a load.","Work and energy."),
    q("2.0","2.1","2.1 Properties of Waves","Which wave property describes the number of complete oscillations per second?",["Frequency","Amplitude","Wavelength","Wave speed"],0,"Frequency is the number of complete cycles passing a point each second; its unit is hertz.","Describe basic wave properties.","Frequency of waves."),
    q("2.0","2.2","2.2 Radioactivity and Stability of Isotopes","An unstable atomic nucleus that emits radiation is described as:",["Radioactive","Neutralised","Conductive","Elastic"],0,"Radioactive nuclei emit radiation as they undergo spontaneous nuclear changes.","Describe radioactivity and unstable isotopes.","Radioactivity."),
    q("3.0","3.2","3.2 Current Electricity","A charge of 12 C passes a point in a circuit in 3 s. What is the current?",["4 A","9 A","15 A","36 A"],0,"Current = charge ÷ time = 12 ÷ 3 = 4 A.","Calculate electric current from charge and time.","Current electricity."),
    q("4.0","4.1","4.1 Greenhouse Effect and Climate Change","Which statement best explains the enhanced greenhouse effect?",["Increased greenhouse gases absorb more outgoing infrared radiation","The ozone layer produces all the Earth's heat","Clouds stop all sunlight reaching Earth","Oceans prevent heat from leaving the atmosphere"],0,"Higher concentrations of greenhouse gases absorb and re-emit more outgoing infrared radiation, warming the lower atmosphere.","Explain the greenhouse effect and climate change.","Greenhouse gases and infrared radiation.")
  ];

  // ENGLISH — listening/speaking, reading, grammar in use and writing.
  curriculum.English = [
    strand("1.0","1.0 Listening and Speaking",[
      sub("1.1","1.1 Listening for Key Information",["Identify key details in audio-visual texts."],["Titles, characters, places, events and key information"]),
      sub("1.2","1.2 Speaking Fluency",["Use clear pronunciation and organise spoken information."],["Speech sounds; fluency; informative speeches"])
    ]),
    strand("2.0","2.0 Reading",[
      sub("2.1","2.1 Reading Fluency",["Read texts fluently and interpret meaning."],["Common collocations and binomial phrases"]),
      sub("2.2","2.2 Extensive and Intensive Reading",["Read literary and non-literary texts for meaning and enjoyment."],["Comprehension; reference materials; critical reading"]),
      sub("2.3","2.3 Study Skills",["Use paraphrasing, summarising and note-making."],["SOAR; paraphrasing; summarising; note making"])
    ]),
    strand("3.0","3.0 Grammar in Use",[
      sub("3.1","3.1 Word Classes",["Identify and use word classes accurately."],["Nouns, pronouns, verbs, adjectives, adverbs, prepositions and determiners"]),
      sub("3.2","3.2 Phrases and Clauses",["Identify phrases and clauses in sentences."],["Noun, verb, adverb, adjective and prepositional phrases; relative, adverbial and noun clauses"]),
      sub("3.3","3.3 Sentence Structure",["Construct grammatically correct sentences."],["Sentence patterns; simple and compound sentences; active and passive voice; subject-verb agreement"])
    ]),
    strand("4.0","4.0 Writing",[
      sub("4.1","4.1 Mechanics and Paragraphing",["Apply spelling, punctuation, cohesion and paragraph structure."],["Spelling; punctuation; linking words; paragraph structure"]),
      sub("4.2","4.2 Functional Writing",["Produce appropriate functional texts."],["Memos, emails, letters, diaries, reports and questionnaires"]),
      sub("4.3","4.3 Creative Writing",["Develop narrative, descriptive, argumentative and expository texts."],["Essay types and the writing process"])
    ])
  ];
  grade.English = [
    q("1.0","1.1","1.1 Listening for Key Information","After listening to a short news report, which detail would best help identify its main event?",["What happened and where it happened","The colour of the radio","The listener's favourite subject","The number of pages in a notebook"],0,"The event and its location are central details that help a listener understand and recount a report.","Identify key details in audio-visual texts.","Listening for key information."),
    q("1.0","1.2","1.2 Speaking Fluency","Which practice is most helpful when delivering an informative speech?",["Organise key points and speak clearly","Read every sentence as quickly as possible","Avoid looking at the audience","Use unfamiliar words in every sentence"],0,"Clear organisation and understandable delivery help an audience follow information.","Organise and deliver spoken information clearly.","Speaking fluency and informative speeches."),
    q("2.0","2.1","2.1 Reading Fluency","In the phrase “make a decision”, the words “make a decision” are best described as:",["A common collocation","A relative clause","A proper noun","A passive verb"],0,"“Make a decision” is a conventional word combination commonly used in English.","Recognise common collocations in texts.","Reading fluency and collocations."),
    q("2.0","2.2","2.2 Extensive and Intensive Reading","Which action best demonstrates critical reading?",["Checking the writer's claims against evidence","Accepting every statement without question","Reading only the first sentence","Ignoring the purpose of the text"],0,"Critical reading involves examining claims, evidence, purpose and possible bias.","Analyse information and ideas in a text.","Critical reading and comprehension."),
    q("2.0","2.3","2.3 Study Skills","Which sentence is the best paraphrase of “Regular exercise improves physical fitness”?",["Taking part in physical activity often helps the body become fitter","Exercise is never useful","Fitness prevents all illness","People should avoid physical activity"],0,"The first option expresses the same idea using different wording without changing its meaning.","Paraphrase information while retaining its meaning.","Paraphrasing and summarising."),
    q("3.0","3.1","3.1 Word Classes","In the sentence “The diligent learner completed the task”, which word is the adjective?",["diligent","learner","completed","task"],0,"“Diligent” describes the noun “learner”, so it is an adjective.","Identify adjectives and their functions.","Word classes: adjectives."),
    q("3.0","3.2","3.2 Phrases and Clauses","Which option is a relative clause?",["who won the competition","very quickly","under the table","the bright blue sky"],0,"“Who won the competition” has a subject and verb and begins with a relative pronoun modifying a noun.","Identify relative clauses in sentences.","Relative clauses."),
    q("3.0","3.3","3.3 Sentence Structure","Choose the sentence with correct subject-verb agreement.",["The list of books is on the desk.","The list of books are on the desk.","The list of books were on the desk.","The list of books be on the desk."],0,"The head noun “list” is singular, so it takes the singular verb “is”.","Apply subject-verb agreement.","Sentence structure and agreement."),
    q("4.0","4.1","4.1 Mechanics and Paragraphing","Which linking word best completes the sentence? “The road was flooded; ______, the match was postponed.”",["therefore","although","meanwhile","for example"],0,"“Therefore” signals the result: the match was postponed because the road was flooded.","Use linking words to show logical relationships.","Cohesion and linking words."),
    q("4.0","4.2","4.2 Functional Writing","Which feature is most appropriate for a formal email to a school principal?",["A clear subject line and respectful formal language","Slang and unexplained abbreviations","No greeting or purpose","Only emojis"],0,"A formal email should identify its subject and communicate respectfully and clearly.","Compose emails using appropriate conventions.","Functional writing: emails.")
  ];

  // Do not expose the old generic placeholder science items as Grade 11/12 KICD-aligned packs.
  // Those grades require their own matching curriculum designs and authored banks.
  ["Biology","Chemistry","Physics"].forEach((subject) => {
    if (root.banks["Grade 11"]) delete root.banks["Grade 11"][subject];
    if (root.banks["Grade 12"]) delete root.banks["Grade 12"][subject];
  });
})();