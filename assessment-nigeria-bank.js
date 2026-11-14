/* Nigeria NERDC curriculum-specific original practice MCQs. Not official WAEC/NECO examination questions. */
(()=> {
 "use strict";
 const Q=(q,o,a,t,e)=>[q,o,a,t,e];
 const banks={
 "JSS 1":{
  "Mathematics":[
   Q("Evaluate −7 + 12.",["3","5","−5","19"],1,"Integers","12 − 7 = 5, positive."),
   Q("Simplify 24:36.",["2:3","3:2","4:5","6:9"],0,"Ratio","Divide both terms by 12."),
   Q("Find 3/5 of 40.",["18","20","24","30"],2,"Fractions","40 ÷ 5 × 3 = 24."),
   Q("Write 0.75 as a fraction in simplest form.",["1/2","2/3","3/4","4/5"],2,"Decimals","75/100 simplifies to 3/4."),
   Q("If 2 notebooks cost ₦600, find the cost of 5 at the same rate.",["₦900","₦1,200","₦1,500","₦1,800"],2,"Proportion","One costs ₦300; five cost ₦1,500.")
  ],
  "English Studies":[
   Q("Which word is the verb in 'The learners completed the task'?",["learners","completed","task","the"],1,"Grammar","Completed expresses the action."),
   Q("Choose the correct sentence.",["The pupils walks to school.","The pupils walk to school.","The pupils walking to school.","The pupils has walk to school."],1,"Agreement","A plural subject takes the base verb."),
   Q("Which is the best topic sentence?",["Regular reading improves vocabulary and understanding.","Yesterday was Tuesday.","Books have pages.","I saw a bag."],0,"Paragraph writing","It introduces a clear central idea."),
   Q("What is an inference?",["A copied title","A conclusion drawn from clues","A punctuation mark","A list of names"],1,"Comprehension","An inference combines evidence and reasoning."),
   Q("Which punctuation mark ends a direct question?",["Comma","Full stop","Question mark","Colon"],2,"Punctuation","A direct question ends with a question mark.")
  ],
  "Basic Science and Technology":[
   Q("Which process releases energy from food in cells?",["Photosynthesis","Respiration","Transpiration","Evaporation"],1,"Living things","Respiration releases usable energy from nutrients."),
   Q("Which state of matter has fixed volume but no fixed shape?",["Solid","Liquid","Gas","Plasma"],1,"Matter","A liquid keeps volume but takes its container's shape."),
   Q("Which variable is deliberately changed in an experiment?",["Dependent","Independent","Controlled","Constant"],1,"Investigation","The investigator changes the independent variable."),
   Q("Which instrument measures temperature?",["Ammeter","Thermometer","Balance","Metre rule"],1,"Measurement","A thermometer measures temperature."),
   Q("Which gas is used by green plants in photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Photosynthesis","Carbon dioxide is a reactant in photosynthesis.")
  ]
 },
 "JSS 2":{
  "Mathematics":[
   Q("Simplify 7a − 2a + 4a.",["5a","9a","13a","3a"],1,"Algebra","Combine coefficients: 7 − 2 + 4 = 9."),
   Q("Solve 4x − 6 = 18.",["4","5","6","8"],2,"Equations","4x = 24, so x = 6."),
   Q("Expand 3(x + 5).",["3x + 5","3x + 15","x + 15","8x"],1,"Algebra","Multiply 3 by both terms."),
   Q("Find the supplementary angle to 125°.",["45°","55°","65°","125°"],1,"Geometry","180° − 125° = 55°."),
   Q("Find the area of a rectangle 9 cm by 4 cm.",["13 cm²","26 cm²","36 cm²","40 cm²"],2,"Mensuration","Area = 9 × 4 = 36 cm².")
  ],
  "English Studies":[
   Q("What is the past tense of 'teach'?",["teached","taught","teaching","teaches"],1,"Tenses","Taught is the irregular past form."),
   Q("Which statement is an opinion?",["Abuja is Nigeria's capital.","Water is a compound.","Science is the most interesting subject.","A triangle has three sides."],2,"Critical reading","It expresses personal judgement."),
   Q("Which salutation suits a formal letter to a principal?",["Hey there,","Dear Principal,","What's up?","Hi mate,"],1,"Formal writing","It is respectful and appropriate."),
   Q("What is the purpose of a topic sentence?",["To state the paragraph's main idea","To list page numbers","To replace all examples","To end a book"],0,"Paragraph writing","It states the central idea."),
   Q("Which conjunction introduces a reason?",["although","because","unless","or"],1,"Conjunctions","Because introduces a reason.")
  ],
  "Basic Science and Technology":[
   Q("Which force opposes motion between surfaces?",["Gravity","Friction","Upthrust","Magnetism"],1,"Forces","Friction opposes relative motion."),
   Q("Which energy does a moving object possess?",["Chemical","Kinetic","Nuclear","Sound only"],1,"Energy","Kinetic energy is energy of motion."),
   Q("What happens when a switch is open?",["Current increases","The circuit is broken","The battery vanishes","Resistance is zero"],1,"Electricity","The conducting path is interrupted."),
   Q("What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Measurement","Force is measured in newtons."),
   Q("Which energy source is renewable?",["Coal","Petroleum","Solar energy","Natural gas"],2,"Energy","Solar energy is naturally replenished.")
  ]
 },
 "JSS 3":{
  "Mathematics":[
   Q("Find the mean of 5, 7, 9 and 11.",["7","8","9","10"],1,"Statistics","32 ÷ 4 = 8."),
   Q("A fair die is rolled. Find the probability of an even number.",["1/6","1/3","1/2","2/3"],2,"Probability","Three of six outcomes are even."),
   Q("Find the range of 4, 12, 7, 9 and 15.",["8","9","11","15"],2,"Statistics","15 − 4 = 11."),
   Q("If y = 3x − 2, find y when x = 5.",["10","11","13","15"],2,"Linear relationships","3(5) − 2 = 13."),
   Q("A bag contains 3 red and 5 blue counters. Find P(red).",["3/5","5/8","3/8","1/3"],2,"Probability","3 favourable counters out of 8.")
  ],
  "English Studies":[
   Q("What is a counterargument?",["A supporting title","An opposing reasoned view","A spelling error","A paragraph number"],1,"Argument","It presents an opposing position."),
   Q("Which feature strengthens an argument?",["Unsupported claims","Relevant evidence","Personal insults","Unrelated examples"],1,"Argument","Relevant evidence supports a claim."),
   Q("What should a summary avoid?",["Main ideas","Concise wording","Personal opinions","Accurate meaning"],2,"Summary","A summary reports the source, not personal views."),
   Q("Which sentence is correct?",["Neither of the boys are absent.","Neither of the boys is absent.","Neither boys is absent.","Neither of boys are absent."],1,"Agreement","Neither is singular in this construction."),
   Q("What does cohesion mean?",["Links between ideas in a text","Using only long words","Avoiding paragraphs","Repeating every sentence"],0,"Writing","Cohesion connects ideas clearly.")
  ],
  "Basic Science and Technology":[
   Q("Which organism is a producer?",["Grass","Goat","Frog","Hawk"],0,"Ecosystems","Green plants make food through photosynthesis."),
   Q("What is the role of decomposers?",["Make sunlight","Break down dead organic matter","Stop nutrient cycles","Eat only living plants"],1,"Ecosystems","They return nutrients to the environment."),
   Q("In a food chain, arrows show the direction of what?",["Water flow","Energy transfer","Wind direction","Population growth"],1,"Food chains","Arrows point from food to consumer."),
   Q("Which practice helps prevent water-borne disease?",["Drinking untreated water","Safe water and sanitation","Dumping refuse in streams","Leaving food uncovered"],1,"Health","Safe water and sanitation reduce pathogen exposure."),
   Q("Which action helps reduce soil erosion?",["Removing vegetation","Overgrazing","Maintaining vegetation cover","Burning all plant remains"],2,"Environment","Plant roots bind soil and foliage reduces raindrop impact.")
  ]
 },
 "SS 1":{
  "General Mathematics":[
   Q("Convert 1011₂ to base ten.",["9","10","11","13"],2,"Number bases","8 + 0 + 2 + 1 = 11."),
   Q("Solve 3x + 7 = 22.",["3","4","5","6"],2,"Algebra","3x = 15, so x = 5."),
   Q("Factorise x² + 5x + 6.",["(x+1)(x+6)","(x+2)(x+3)","(x−2)(x−3)","(x+5)(x+1)"],1,"Factorisation","2×3=6 and 2+3=5."),
   Q("Solve x² − 9 = 0 for positive x.",["−3","0","3","9"],2,"Quadratic equations","x²=9 gives x=±3; positive root is 3."),
   Q("If f(x)=2x²−1, find f(3).",["11","15","17","19"],2,"Functions","2×9−1=17.")
  ],
  "English Language":[
   Q("What is the main purpose of a summary?",["To present central ideas concisely","To add personal opinions","To reproduce every example","To change the writer's meaning"],0,"Summary","A summary reduces a text while preserving its meaning."),
   Q("Which is most suitable in a formal report?",["The survey recorded 68% support.","Loads of people liked it.","Everybody was happy.","It was super cool."],0,"Register","It is precise, neutral and evidence-based."),
   Q("What is a counterclaim?",["A claim opposing the main argument","A page heading","A spelling error","A concluding greeting"],0,"Argument","It presents an alternative position."),
   Q("Which feature improves cohesion?",["Logical transitions","Unrelated examples","Missing paragraphs","Inconsistent tense"],0,"Writing","Transitions clarify relationships between ideas."),
   Q("What does inference require?",["Guessing without evidence","Combining textual clues with reasoning","Copying the first sentence","Ignoring context"],1,"Comprehension","Inference is based on evidence and reasoning.")
  ],
  "Biology":[
   Q("Which organelle contains most eukaryotic genetic material?",["Ribosome","Nucleus","Golgi apparatus","Vacuole"],1,"Cell biology","The nucleus houses chromosomes."),
   Q("Which structure regulates movement into and out of a cell?",["Cell wall","Cell membrane","Nucleolus","Chloroplast"],1,"Cell biology","The selectively permeable membrane regulates exchange."),
   Q("Which gas is used in photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Photosynthesis","Carbon dioxide is a reactant."),
   Q("Which plant tissue transports water?",["Phloem","Xylem","Epidermis","Cortex only"],1,"Transport","Xylem conducts water and mineral ions."),
   Q("Which level is made of similar cells working together?",["Organ","Tissue","System","Organism"],1,"Organisation","A tissue is a group of similar cells.")
  ],
  "Chemistry":[
   Q("What is the atomic number of an element?",["Number of neutrons","Number of protons","Number of shells","Mass number"],1,"Atomic structure","Atomic number equals proton number."),
   Q("How many electrons are in a neutral atom with 8 protons?",["6","8","10","16"],1,"Atomic structure","A neutral atom has equal protons and electrons."),
   Q("What happens when sodium forms Na⁺?",["It gains one electron","It loses one electron","It gains one proton","It loses one neutron"],1,"Ions","A positive ion forms when electrons are lost."),
   Q("Which bond involves shared electron pairs?",["Ionic","Covalent","Metallic only","Hydrogen only"],1,"Bonding","Covalent bonding involves shared electron pairs."),
   Q("How are elements ordered in the modern periodic table?",["Increasing atomic number","Increasing colour","Alphabetical order","Increasing density only"],0,"Periodic table","The modern table is ordered by atomic number.")
  ],
  "Physics":[
   Q("What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Measurement","Force is measured in newtons."),
   Q("A runner covers 150 m in 10 s. Find average speed.",["10 m/s","12 m/s","15 m/s","20 m/s"],2,"Motion","150 ÷ 10 = 15 m/s."),
   Q("A 2 kg object accelerates at 3 m/s². Find the resultant force.",["5 N","6 N","8 N","9 N"],1,"Newton's laws","F=ma=2×3=6 N."),
   Q("Which is a vector quantity?",["Mass","Time","Temperature","Displacement"],3,"Vectors","Displacement has magnitude and direction."),
   Q("What does the gradient of a distance–time graph represent?",["Acceleration","Speed","Force","Momentum"],1,"Graphs","Gradient is distance change divided by time change.")
  ]
 }
 };
 window.CBENexusNigeriaBanks={curriculum:"Nigeria NERDC Curriculum / WAEC / NECO",banks};
})();