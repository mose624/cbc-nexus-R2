/* Ghana NaCCA curriculum practice bank for the CBE Nexus quiz engine.
   Original practice MCQs, not official BECE or WASSCE examination questions.
   Country + curriculum + level + subject are matched exactly to prevent cross-curriculum mixing. */
(()=> {
 "use strict";
 const Q=(q,o,a,t,e)=>[q,o,a,t,e];
 const banks={
  "Basic 7":{
   "Mathematics":[
    Q("Evaluate −8 + 13.",["3","5","−5","21"],1,"Integers","−8 + 13 = 5."),
    Q("Simplify the ratio 15:25.",["2:5","3:5","5:3","5:8"],1,"Ratio","Divide both terms by 5 to obtain 3:5."),
    Q("Find 2/3 of 27.",["9","12","18","21"],2,"Fractions","27 ÷ 3 × 2 = 18."),
    Q("Write 0.4 as a percentage.",["4%","14%","40%","400%"],2,"Decimals and percentages","0.4 × 100% = 40%."),
    Q("A book costs GH₵30. What is the cost of 4 books?",["GH₵90","GH₵100","GH₵120","GH₵140"],2,"Money","4 × GH₵30 = GH₵120.")
   ],
   "English Language":[
    Q("Which word is the verb in 'The pupils completed the task'?",["pupils","completed","task","the"],1,"Grammar","Completed expresses the action."),
    Q("Choose the correct sentence.",["The girls walks home.","The girls walk home.","The girls walking home.","The girls has walk home."],1,"Subject–verb agreement","The plural subject 'girls' takes 'walk'."),
    Q("Which word is closest in meaning to 'cautious'?",["careless","careful","noisy","rapid"],1,"Vocabulary","Cautious means careful to avoid danger or mistakes."),
    Q("What is the main idea of a passage?",["A minor example","The central message","The page number","The last word"],1,"Comprehension","The main idea is the central point developed by the passage."),
    Q("Which punctuation mark ends a direct question?",["Comma","Full stop","Question mark","Colon"],2,"Punctuation","A direct question ends with a question mark.")
   ],
   "Science":[
    Q("Which structure controls movement of substances into and out of a cell?",["Cell wall","Cell membrane","Nucleus","Vacuole"],1,"Cells","The selectively permeable cell membrane regulates exchange."),
    Q("Which gas is used by green plants during photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Photosynthesis","Carbon dioxide is a reactant in photosynthesis."),
    Q("Which state of matter has a fixed volume but no fixed shape?",["Solid","Liquid","Gas","All states"],1,"Matter","A liquid has a fixed volume and takes the shape of its container."),
    Q("Which instrument measures temperature?",["Ammeter","Thermometer","Balance","Metre rule"],1,"Measurement","A thermometer measures temperature."),
    Q("Which variable is deliberately changed in a fair test?",["Dependent","Independent","Controlled","Constant"],1,"Scientific investigation","The investigator changes the independent variable.")
   ]
  },
  "Basic 8":{
   "Mathematics":[
    Q("Simplify 7a − 2a + 4a.",["5a","9a","13a","3a"],1,"Algebra","Combine like terms: (7−2+4)a = 9a."),
    Q("Expand 3(x + 5).",["3x + 5","3x + 15","x + 15","8x"],1,"Algebra","Multiply 3 by both terms: 3x + 15."),
    Q("Solve 4x − 6 = 18.",["4","5","6","8"],2,"Linear equations","Add 6: 4x=24; divide by 4: x=6."),
    Q("Find the supplementary angle to 125°.",["45°","55°","65°","125°"],1,"Geometry","Angles on a straight line total 180°; 180−125=55°."),
    Q("Find the area of a rectangle 11 cm by 3 cm.",["14 cm²","28 cm²","33 cm²","44 cm²"],2,"Measurement","Area = length × width = 11 × 3 = 33 cm².")
   ],
   "English Language":[
    Q("Which opening is most suitable for a formal letter to a headteacher?",["Hey there,","Dear Headteacher,","What's up?","Hi mate,"],1,"Formal writing","A respectful salutation is appropriate in formal correspondence."),
    Q("Choose the correct conjunction: 'We remained indoors ___ it was raining.'",["although","because","unless","or"],1,"Conjunctions","Because introduces the reason."),
    Q("Which is the correct past tense of 'teach'?",["teached","taught","teaching","teaches"],1,"Tenses","Taught is the irregular past-tense form."),
    Q("What is the purpose of a topic sentence?",["To introduce the paragraph's main idea","To list page numbers","To replace every example","To end a whole book"],0,"Paragraph writing","A topic sentence states the central idea developed in the paragraph."),
    Q("Which expression is most appropriate in a formal request?",["Fix it now!","I would appreciate your assistance.","Do this quick.","You must sort it."],1,"Register","The wording is polite and suitably formal.")
   ],
   "Science":[
    Q("Which method separates insoluble sand from water?",["Distillation","Filtration","Chromatography","Magnetisation"],1,"Separation techniques","Filter paper retains sand while water passes through."),
    Q("What happens to most substances when heated?",["They expand","They vanish","They lose all mass","They become elements"],0,"Thermal effects","Most substances expand when their temperature rises."),
    Q("Which force opposes motion between surfaces in contact?",["Gravity","Friction","Upthrust","Magnetism"],1,"Forces","Friction acts against relative motion between surfaces."),
    Q("Which process changes liquid water into water vapour at the surface?",["Freezing","Condensation","Evaporation","Melting"],2,"Changes of state","Evaporation occurs at a liquid surface."),
    Q("Which energy source is renewable?",["Coal","Petroleum","Solar energy","Natural gas"],2,"Energy","Solar energy is naturally replenished.")
   ]
  },
  "Basic 9":{
   "Mathematics":[
    Q("Find the mean of 5, 7, 9 and 11.",["7","8","9","10"],1,"Statistics","The sum is 32; 32 ÷ 4 = 8."),
    Q("A fair die is rolled. What is the probability of getting an even number?",["1/6","1/3","1/2","2/3"],2,"Probability","Three of six outcomes are even: 3/6 = 1/2."),
    Q("If y = 3x − 2, find y when x = 5.",["10","11","13","15"],1,"Linear graphs","y = 3(5) − 2 = 13. Correction: the correct option is 13.",),
    Q("Find the range of 4, 12, 7, 9 and 15.",["8","9","11","15"],2,"Statistics","Range = maximum − minimum = 15 − 4 = 11."),
    Q("A bag contains 3 red and 5 blue counters. What is P(red)?",["3/5","5/8","3/8","1/3"],2,"Probability","There are 3 red counters among 8 counters in total.")
   ],
   "English Language":[
    Q("What is an inference?",["A copied heading","A conclusion drawn from clues","A punctuation mark","A list of names"],1,"Comprehension","An inference is reached by interpreting evidence in the text."),
    Q("Which statement is an opinion?",["Accra is in Ghana.","Water freezes at 0°C at standard pressure.","Reading is the most enjoyable hobby.","A triangle has three sides."],2,"Critical reading","The statement expresses a personal judgement."),
    Q("Which feature strengthens an argument?",["Unsupported claims","Relevant evidence","Personal insults","Unrelated examples"],1,"Argument writing","Relevant evidence supports the writer's claim."),
    Q("Change to indirect speech: Ama said, 'I am ready.'",["Ama said that I am ready.","Ama said that she was ready.","Ama says she ready.","Ama said she is ready yesterday."],1,"Reported speech","Pronoun and tense change to fit reported speech."),
    Q("What is a counterargument?",["A supporting title","An opposing reasoned view","A spelling mistake","A paragraph number"],1,"Argument writing","A counterargument presents an opposing position that can be addressed.")
   ],
   "Science":[
    Q("Which organism is a producer in a food chain?",["Grass","Goat","Frog","Hawk"],0,"Ecosystems","Green plants produce organic food through photosynthesis."),
    Q("What is the role of decomposers?",["Make sunlight","Break down dead organic matter","Stop all nutrient cycles","Consume only living plants"],1,"Ecosystems","Decomposers break down dead material and return nutrients to ecosystems."),
    Q("Which unit is used to measure electric current?",["Volt","Ampere","Ohm","Watt"],1,"Electricity","Electric current is measured in amperes (A)."),
    Q("What happens when a switch is open in a simple circuit?",["Current increases","The circuit is broken","The battery disappears","Resistance becomes zero"],1,"Electricity","An open switch interrupts the conducting path."),
    Q("Which practice helps reduce soil erosion?",["Removing vegetation","Overgrazing","Planting cover crops","Burning all plant remains"],2,"Environment","Plant cover reduces the impact of rain and helps bind soil.")
   ]
  },
  "SHS 1":{
   "Biology":[
    Q("Which organelle is the main site of aerobic respiration in eukaryotic cells?",["Ribosome","Mitochondrion","Golgi apparatus","Vacuole"],1,"Cell biology","Mitochondria are major sites of aerobic respiration and ATP production."),
    Q("Which plant tissue transports water and mineral ions?",["Phloem","Xylem","Epidermis","Cortex only"],1,"Plant transport","Xylem conducts water and dissolved mineral ions."),
    Q("What is the main function of haemoglobin in red blood cells?",["Digest proteins","Transport oxygen","Produce antibodies","Form platelets"],1,"Animal transport","Haemoglobin binds oxygen reversibly for transport."),
    Q("Which process produces haploid cells for sexual reproduction?",["Mitosis","Meiosis","Binary fission","Budding"],1,"Cell division","Meiosis reduces chromosome number and produces haploid cells."),
    Q("Which factor can limit the rate of photosynthesis?",["Light intensity","Carbon dioxide concentration","Temperature","All of these"],3,"Photosynthesis","Light, carbon dioxide and temperature can each be limiting factors.")
   ],
   "Chemistry":[
    Q("How many moles are present in 18 g of water? (M = 18 g mol⁻¹)",["0.5 mol","1.0 mol","1.5 mol","2.0 mol"],1,"Mole concept","n = m/M = 18/18 = 1 mol."),
    Q("What is the relative formula mass of CO₂? (C=12, O=16)",["28","32","44","48"],2,"Relative formula mass","12 + 2(16) = 44."),
    Q("Which particles are transferred in ionic bonding?",["Neutrons","Electrons","Protons","Molecules"],1,"Chemical bonding","Ionic bonding involves electron transfer and attraction between ions."),
    Q("What are the products when hydrochloric acid reacts with sodium hydroxide?",["Salt and water","Hydrogen and oxygen","Carbon and water","Only oxygen"],0,"Acids and bases","HCl + NaOH → NaCl + H₂O."),
    Q("A solution changes from pH 4 to pH 3. Its hydrogen-ion concentration:",["Decreases tenfold","Increases tenfold","Doubles","Remains unchanged"],1,"pH","A one-unit decrease in pH corresponds to a tenfold increase in hydrogen-ion concentration.")
   ],
   "Core Mathematics":[
    Q("If f(x)=2x+3, find f(4).",["8","9","11","14"],2,"Functions","f(4)=2(4)+3=11."),
    Q("What is the gradient of y=−5x+7?",["−5","−7","5","7"],0,"Linear graphs","The coefficient of x is the gradient."),
    Q("Find the median of 3, 5, 8, 10, 12.",["5","8","10","12"],1,"Statistics","The middle value of the ordered list is 8."),
    Q("A fair coin is tossed. What is the probability of tails?",["0","1/4","1/2","1"],2,"Probability","There is one favourable outcome out of two equally likely outcomes."),
    Q("Simplify 2³ × 2⁴.",["2⁷","2¹²","2¹","2⁹"],0,"Indices","When multiplying powers with the same base, add indices: 3+4=7.")
   ],
   "Physics":[
    Q("A car travels 180 m in 12 s. What is its average speed?",["12 m s⁻¹","15 m s⁻¹","18 m s⁻¹","21 m s⁻¹"],1,"Motion","Speed = distance/time = 180/12 = 15 m s⁻¹."),
    Q("What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Forces","Force is measured in newtons (N)."),
    Q("A 3 kg object accelerates at 4 m s⁻². Find the resultant force.",["7 N","12 N","16 N","24 N"],1,"Newton's laws","F=ma=3×4=12 N."),
    Q("Which quantity is a vector?",["Mass","Time","Temperature","Displacement"],3,"Physical quantities","Displacement has magnitude and direction."),
    Q("A force of 10 N moves an object 5 m in the force direction. Work done is:",["2 J","15 J","50 J","100 J"],2,"Work and energy","W=Fs=10×5=50 J.")
   ],
   "English Language":[
    Q("Which is the strongest thesis statement?",["This essay is about libraries.","Libraries are interesting.","Extending school library hours can improve access because many learners cannot visit during lessons.","I like books."],2,"Academic writing","It states a clear, arguable claim and gives a reason."),
    Q("Which source is generally most suitable for verifying an official curriculum requirement?",["An anonymous comment","The national curriculum authority","An unreferenced social post","A random advert"],1,"Research and evidence","The responsible national authority is the primary source."),
    Q("Which sentence contains a comma splice?",["Although it rained, we stayed.","It rained; we stayed indoors.","It rained, we stayed indoors.","Because it rained, we stayed indoors."],2,"Grammar and punctuation","Two independent clauses are joined with only a comma."),
    Q("What does 'cohesion' mean in writing?",["Linking ideas clearly across a text","Using only long words","Avoiding paragraphs","Repeating every sentence"],0,"Text organisation","Cohesion connects sentences and ideas using language features."),
    Q("Which is an appropriate feature of an academic report?",["Unsupported personal claims","Clear method and evidence","Slang throughout","No headings or organisation"],1,"Report writing","A report should present a clear method, evidence and reasoned conclusions.")
   ]
  }
 };
 window.CBENexusGhanaBanks={curriculum:"Ghana NaCCA Curriculum / WASSCE",banks};
})();
