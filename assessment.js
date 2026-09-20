(() => {
  const QUIZ_KEY = "cbeQuizProgress";
  const grades = ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"];
  const bank = {
    Mathematics: [
      ["What is 7 × 8?",["54","56","64","48"],1,"Number","7 groups of 8 make 56."],
      ["What is 3/4 of 20?",["5","10","15","16"],2,"Fractions","20 ÷ 4 = 5, then 5 × 3 = 15."],
      ["Which number is prime?",["21","27","29","33"],2,"Number","29 has only 1 and 29 as positive factors."],
      ["What is 2.5 + 1.75?",["3.25","4.25","4.15","3.75"],1,"Decimals","2.50 + 1.75 = 4.25."],
      ["A rectangle is 8 cm long and 3 cm wide. What is its area?",["11 cm²","22 cm²","24 cm²","48 cm²"],2,"Measurement","Area = length × width = 24 cm²."],
      ["What is 15% of 200?",["15","20","30","35"],2,"Percentages","0.15 × 200 = 30."],
      ["If x + 9 = 17, what is x?",["6","7","8","9"],2,"Algebra","17 − 9 = 8."],
      ["How many degrees are in a right angle?",["45°","90°","180°","360°"],1,"Geometry","A right angle measures 90°."],
      ["What is the mean of 4, 6 and 8?",["5","6","7","8"],1,"Statistics","(4 + 6 + 8) ÷ 3 = 6."],
      ["A KSh 500 item is discounted by 10%. What is the discount?",["KSh 10","KSh 25","KSh 50","KSh 100"],2,"Percentages","10% of KSh 500 is KSh 50."]
    ],
    Science: [
      ["Which organ pumps blood around the body?",["Lungs","Heart","Kidney","Stomach"],1,"Human Body","The heart pumps blood through the circulatory system."],
      ["Which gas do green plants use during photosynthesis?",["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],2,"Plants","Plants use carbon dioxide during photosynthesis."],
      ["Which state of matter has a fixed volume but no fixed shape?",["Solid","Liquid","Gas","Plasma"],1,"Matter","A liquid keeps its volume but takes the shape of its container."],
      ["What force pulls objects towards Earth?",["Friction","Magnetism","Gravity","Upthrust"],2,"Forces","Gravity attracts objects towards Earth."],
      ["Which part of a plant absorbs most water from the soil?",["Flower","Leaf","Root","Fruit"],2,"Plants","Roots absorb water and mineral salts from the soil."],
      ["Which simple machine is commonly used to draw water from a well?",["Pulley","Wedge","Screw","Wheelbarrow"],0,"Machines","A pulley changes the direction of the pulling force."],
      ["Which material is a good electrical conductor?",["Rubber","Copper","Plastic","Wood"],1,"Electricity","Copper allows electric current to flow easily."],
      ["What happens to most substances when they are heated?",["They always shrink","They expand","They disappear","They become magnetic"],1,"Heat","Most substances expand when heated."],
      ["Which planet is closest to the Sun?",["Earth","Mars","Venus","Mercury"],3,"Space","Mercury is the innermost planet."],
      ["Which method separates sand from water?",["Filtration","Evaporation only","Magnetism","Mixing"],0,"Separation","Filtration retains insoluble sand while water passes through."]
    ],
    "Integrated Science": [
      ["Which instrument measures temperature?",["Barometer","Thermometer","Ammeter","Balance"],1,"Measurement","A thermometer measures temperature."],
      ["Which process changes a liquid into a gas?",["Freezing","Condensation","Evaporation","Melting"],2,"Matter","Evaporation changes liquid into vapour."],
      ["What is the main source of energy for most life on Earth?",["The Moon","The Sun","Soil","Wind only"],1,"Energy","Sunlight drives photosynthesis and supports most food chains."],
      ["Which blood cells help fight disease-causing organisms?",["Red blood cells","White blood cells","Platelets","Plasma only"],1,"Health","White blood cells help defend the body against infection."],
      ["Which component is needed to complete a simple electric circuit?",["An unconnected wire","A source of electrical energy","Only a switch","Only a bulb"],1,"Electricity","A circuit needs a source and a complete conducting path."],
      ["Which method can make drinking water safer from many microorganisms?",["Boiling","Adding soil","Leaving it uncovered","Mixing with oil"],0,"Health","Boiling kills many disease-causing microorganisms."],
      ["Which gas is released by green plants during photosynthesis?",["Carbon dioxide","Oxygen","Methane","Nitrogen"],1,"Plants","Oxygen is released as a product of photosynthesis."],
      ["Which is a renewable source of energy?",["Coal","Petroleum","Solar energy","Natural gas"],2,"Energy","Solar energy is naturally replenished."],
      ["What is the function of a fuse in an electrical circuit?",["Increase voltage","Protect the circuit from excessive current","Store water","Produce light"],1,"Electricity","A fuse breaks the circuit when current becomes too high."],
      ["Which practice helps prevent soil erosion?",["Planting vegetation","Removing all plants","Overgrazing","Leaving soil bare"],0,"Environment","Plant roots help hold soil together and reduce erosion."]
    ],
    English: [
      ["Choose the correctly spelled word.",["Beautifull","Beautiful","Beutiful","Beautifull"],1,"Spelling","The correct spelling is beautiful."],
      ["What is the opposite of 'ancient'?",["Old","Modern","Historic","Past"],1,"Vocabulary","Modern means relating to the present or recent times."],
      ["Which word is a verb in: 'The learners read quietly'?",["learners","read","quietly","the"],1,"Grammar","Read is the action word."],
      ["Choose the plural of 'child'.",["Childs","Childes","Children","Childrens"],2,"Grammar","The irregular plural of child is children."],
      ["Which punctuation mark ends a direct question?",["Full stop","Comma","Question mark","Colon"],2,"Punctuation","A question mark ends a direct question."],
      ["Which word is closest in meaning to 'rapid'?",["Slow","Fast","Weak","Late"],1,"Vocabulary","Rapid means very fast or quick."],
      ["Complete: 'She ___ to school every day.'",["go","goes","going","gone"],1,"Grammar","With 'she' in the simple present, the verb is 'goes'."],
      ["Which is a noun?",["Quickly","Honest","Teacher","Run"],2,"Grammar","Teacher names a person and is a noun."],
      ["What is the main purpose of a title in a passage?",["Hide the topic","Give an idea of the content","Add punctuation","Replace the conclusion"],1,"Comprehension","A title usually gives readers an idea of the text."],
      ["Which sentence is in the past tense?",["They play football.","They are playing football.","They played football.","They will play football."],2,"Grammar","Played is the past-tense form."]
    ],
    "CBC Skills": [
      ["CBC learning mainly emphasizes:",["Competencies and skills","Memorisation only","Copying notes only","Avoiding practical work"],0,"Competencies","CBC focuses on developing competencies through meaningful learning."],
      ["A rubric is mainly used to:",["Decorate a book","Assess work using criteria","Replace all teaching","Record attendance only"],1,"Assessment","A rubric describes criteria and performance levels."],
      ["Which is an example of collaboration?",["Working alone","Working with others towards a shared goal","Ignoring group members","Avoiding discussion"],1,"Collaboration","Collaboration involves working with others towards a shared goal."],
      ["Critical thinking involves:",["Accepting every claim","Examining evidence and reasoning","Guessing only","Copying another answer"],1,"Critical Thinking","Critical thinking examines evidence, assumptions and reasoning."],
      ["Which activity best demonstrates creativity?",["Producing an original solution","Copying exactly","Refusing alternatives","Memorising only"],0,"Creativity","Creativity involves generating useful original ideas or solutions."],
      ["A learner portfolio is useful for:",["Showing evidence of learning","Replacing every lesson","Storing only fees","Avoiding assessment"],0,"Assessment","A portfolio collects evidence showing learning over time."],
      ["Which action demonstrates problem solving?",["Identifying a problem and testing solutions","Ignoring the problem","Blaming others","Stopping immediately"],0,"Problem Solving","Problem solving involves understanding a problem and testing solutions."],
      ["Self-assessment means:",["A teacher marks another learner","A learner reflects on their own work","A parent writes every answer","No assessment"],1,"Assessment","Self-assessment is a learner's reflection on performance."],
      ["Why are practical activities important?",["They connect knowledge with action","They remove thinking","They prevent collaboration","They are only entertainment"],0,"Practical Learning","Practical activities help learners apply concepts and develop skills."],
      ["Which habit supports lifelong learning?",["Curiosity and reflection","Avoiding questions","Rejecting feedback","Never revising"],0,"Lifelong Learning","Curiosity, reflection and feedback support continued learning."]
    ]
  };

  const form = document.getElementById("quizForm");
  if (!form) return;

  if (typeof handleQuizSubmit === "function") {
    form.removeEventListener("submit", handleQuizSubmit);
  }

  const learner = document.getElementById("quizLearnerInput");
  const grade = document.getElementById("quizGradeInput");
  const subject = document.getElementById("quizSubjectInput");
  const length = document.getElementById("quizLengthInput");
  const mode = document.getElementById("quizModeInput");
  const startButton = document.getElementById("startQuizButton");
  const submitButton = document.getElementById("submitQuizButton");
  const clearButton = document.getElementById("clearQuizButton");
  const clearProgressButton = document.getElementById("clearQuizProgressButton");
  const instructions = document.getElementById("quizInstructions");
  const timer = document.getElementById("quizTimer");
  const questionsBox = document.getElementById("quizQuestions");
  const resultBox = document.getElementById("quizResultPanel");
  const status = document.getElementById("quizStatus");
  const progressBox = document.getElementById("progressReport");

  // Populate the assessment Grade dropdown with Grade 1–12.
  // Clear existing options first so this remains safe if the page already has options.
  grade.innerHTML = "";
  grades.forEach((g) => {
    const option = document.createElement("option");
    option.value = g;
    option.textContent = g;
    grade.appendChild(option);
  });
  grade.value = grade.querySelector('option[value="Grade 7"]') ? "Grade 7" : grades[0];
  refreshSubjectOptions();

  // Keep the selected grade visible and usable whenever the learner changes it.
  grade.addEventListener("change", () => {
    refreshSubjectOptions();
    if (instructions) {
      instructions.textContent = grade.value + " " + subject.value + " selected. Click Start / Restart Quiz.";
    }
  });
  if (subject) {
    subject.addEventListener("change", () => {
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " selected. Click Start / Restart Quiz.";
      }
    });
  }



  // Grade-aware question pools. Grades 1–3 use lower-primary questions;
  // Grades 4–6 upper-primary; Grades 7–9 junior secondary; Grades 10–12 senior secondary.
  const gradePools = {
    "Grade 1": {
      Mathematics: [
        ["What number comes after 7?",["6","8","9","10"],1,"Number","Counting forward from 7 gives 8."],
        ["How many sides does a triangle have?",["2","3","4","5"],1,"Geometry","A triangle has 3 sides."],
        ["What is 5 + 3?",["6","7","8","9"],2,"Addition","5 + 3 = 8."],
        ["Which number is smaller?",["9","4","7","8"],1,"Number","4 is the smallest number."],
        ["How many fingers are on one hand?",["4","5","6","10"],1,"Number","One hand has five fingers."]
      ],
      Science: [
        ["Which body part do we use to see?",["Ear","Eye","Nose","Hand"],1,"Human Body","We use our eyes to see."],
        ["Which animal says 'moo'?",["Dog","Cow","Cat","Goat"],1,"Animals","A cow makes a moo sound."],
        ["What do plants need to grow?",["Water","Stones only","Plastic","Smoke"],0,"Plants","Plants need water and other resources to grow."],
        ["Which is a source of light?",["Sun","Chair","Shoe","Book"],0,"Energy","The Sun gives us light."],
        ["Which sense helps us hear?",["Sight","Hearing","Taste","Touch"],1,"Senses","Hearing helps us detect sounds."]
      ],
      "Integrated Science": [
        ["Which one is a living thing?",["Stone","Tree","Chair","Book"],1,"Living Things","A tree is a living organism."],
        ["What do we use to measure length?",["Ruler","Cup","Spoon","Plate"],0,"Measurement","A ruler is used to measure length."],
        ["What should we do before eating food?",["Wash hands","Play","Sleep","Run"],0,"Health","Washing hands helps remove germs."],
        ["Which is a liquid?",["Water","Stone","Book","Chair"],0,"Matter","Water is a liquid."],
        ["Which object is usually made of wood?",["Pencil","Water","Air","Sunlight"],0,"Materials","Many pencils are made partly from wood."]
      ],
      English: [
        ["Choose the correct word: 'I ___ happy.'",["am","is","are","be"],0,"Grammar","The correct sentence is 'I am happy.'"],
        ["Which is a colour?",["Blue","Run","Jump","Sing"],0,"Vocabulary","Blue is a colour."],
        ["What is the opposite of 'big'?",["Tall","Small","Long","Fast"],1,"Vocabulary","Small is the opposite of big."],
        ["Which word names a person?",["Teacher","Quickly","Run","Blue"],0,"Nouns","Teacher is a noun naming a person."],
        ["Choose the plural: one cat, two ___.",["cat","cats","cates","caties"],1,"Grammar","The plural of cat is cats."]
      ],
      "CBC Skills": [
        ["What should you do when someone is speaking?",["Listen","Shout","Run away","Sleep"],0,"Communication","Good communication includes listening."],
        ["Which action keeps you safe when crossing a road?",["Look both ways","Close your eyes","Run without looking","Play on the road"],0,"Safety","Looking both ways helps you check for traffic."],
        ["Sharing materials shows:",["Cooperation","Anger","Carelessness","Silence"],0,"Collaboration","Sharing can support cooperation with others."],
        ["What should you do when you make a mistake?",["Learn and try again","Give up","Hide it","Blame everyone"],0,"Growth Mindset","Mistakes can help us learn and improve."],
        ["Which habit keeps the classroom clean?",["Putting rubbish in a bin","Dropping litter","Breaking desks","Spilling water"],0,"Responsibility","Using a bin helps keep the classroom clean."]
      ]
    }
  };

  const bandQuestions = {
    primaryUpper: {
      Mathematics: [
        ["What is 125 + 276?",["391","401","411","421"],1,"Number","125 + 276 = 401."],
        ["What is 3/5 of 25?",["10","12","15","20"],2,"Fractions","25 ÷ 5 × 3 = 15."],
        ["A square has a side of 6 cm. What is its perimeter?",["12 cm","18 cm","24 cm","36 cm"],2,"Geometry","Perimeter = 4 × 6 = 24 cm."],
        ["What is 2.4 × 10?",["0.24","2.4","24","240"],2,"Decimals","Multiplying by 10 gives 24."]
      ],
      Science: [
        ["Which organ removes urea from the blood?",["Heart","Kidney","Lung","Stomach"],1,"Human Body","The kidneys filter wastes including urea from blood."],
        ["Which process do plants use to make food?",["Respiration","Photosynthesis","Digestion","Filtration"],1,"Plants","Plants make food through photosynthesis."],
        ["Which force slows a moving object when surfaces rub?",["Gravity","Friction","Upthrust","Magnetism"],1,"Forces","Friction opposes motion between surfaces."],
        ["Which material is an electrical insulator?",["Copper","Aluminium","Rubber","Iron"],2,"Electricity","Rubber resists the flow of electric current."]
      ],
      "Integrated Science": [
        ["Which change is reversible?",["Burning paper","Melting ice","Cooking an egg","Rusting iron"],1,"Matter","Ice can freeze again after melting."],
        ["Why do we breathe faster during exercise?",["The body needs more oxygen","The body stops working","Bones need water","Eyes need light"],0,"Respiration","Working muscles need more oxygen."],
        ["Which method separates salt from salt solution?",["Filtration","Evaporation","Sieving","Magnetism"],1,"Separation","Evaporation removes water and leaves salt."],
        ["Which practice conserves water?",["Turning off a tap when not in use","Leaving taps running","Pouring water away","Damaging pipes"],0,"Environment","Turning off unused taps reduces water wastage."]
      ],
      English: [
        ["Choose the correct sentence.",["She go to school.","She goes to school.","She going school.","She gone school."],1,"Grammar","The singular subject 'she' takes 'goes'."],
        ["What is the synonym of 'brave'?",["Cowardly","Courageous","Lazy","Quiet"],1,"Vocabulary","Courageous means brave."],
        ["Which word is an adjective in 'The tall tree fell'?",["tree","fell","tall","the"],2,"Grammar","Tall describes the noun tree."],
        ["Which punctuation mark can join two closely related clauses?",["Semicolon","Apostrophe","Hyphen","Question mark"],0,"Punctuation","A semicolon can join closely related clauses."]
      ],
      "CBC Skills": [
        ["Which skill helps a learner compare evidence before deciding?",["Critical thinking","Guessing","Copying","Avoidance"],0,"Critical Thinking","Critical thinking evaluates evidence and reasoning."],
        ["A group divides tasks fairly. This demonstrates:",["Collaboration","Isolation","Competition only","Carelessness"],0,"Collaboration","Sharing responsibilities supports teamwork."],
        ["A learner identifies a problem, plans steps and tests a solution. This is:",["Problem solving","Memorisation","Imitation","Guessing"],0,"Problem Solving","Problem solving involves identifying and testing solutions."],
        ["Which is evidence of self-management?",["Planning time for tasks","Ignoring deadlines","Losing materials","Avoiding goals"],0,"Self Management","Planning and managing time supports self-management."]
      ]
    },
    junior: {
      Mathematics: [
        ["Solve: 3x + 5 = 20.",["3","5","7","15"],1,"Algebra","3x = 15, so x = 5."],
        ["What is the probability of getting a head with a fair coin?",["0","1/4","1/2","1"],2,"Probability","There are two equally likely outcomes, so P(head) = 1/2."],
        ["Find the gradient between (1,2) and (3,6).",["1","2","3","4"],1,"Geometry","Gradient = (6−2)/(3−1) = 2."],
        ["Simplify 2a + 3a − a.",["2a","3a","4a","6a"],2,"Algebra","Combine like terms to get 4a."]
      ],
      Science: [
        ["Which structure controls what enters and leaves a cell?",["Cell wall","Cell membrane","Nucleus","Cytoplasm"],1,"Cells","The cell membrane regulates movement into and out of the cell."],
        ["What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Forces","Force is measured in newtons (N)."],
        ["Which process releases energy from glucose in cells?",["Photosynthesis","Respiration","Transpiration","Diffusion"],1,"Respiration","Cellular respiration releases usable energy from glucose."],
        ["What happens to current in a series circuit if another bulb is added?",["It generally decreases","It always doubles","It becomes zero immediately","It becomes infinite"],0,"Electricity","Adding resistance in series generally reduces current."]
      ],
      "Integrated Science": [
        ["Which particle has a negative charge?",["Proton","Neutron","Electron","Nucleus"],2,"Matter","Electrons carry negative charge."],
        ["What is the main function of red blood cells?",["Fight pathogens","Carry oxygen","Clot blood","Digest food"],1,"Human Body","Red blood cells transport oxygen."],
        ["Which factor can increase the rate of a chemical reaction?",["Lower temperature only","Suitable increase in temperature","Removing all particles","Always reducing surface area"],1,"Chemistry","Increasing temperature often increases effective collisions."],
        ["Why is a balanced diet important?",["It supplies needed nutrients","It removes all diseases","It stops growth","It replaces exercise"],0,"Nutrition","A balanced diet supplies nutrients needed for growth and energy."]
      ],
      English: [
        ["Which sentence uses a conditional correctly?",["If it rains, we will stay inside.","If it rained, we stay inside.","If it rain, we stayed inside.","If it rains, we stayed inside yesterday."],0,"Grammar","The first sentence correctly uses a first conditional."],
        ["What is an inference?",["A conclusion drawn from evidence","A copied sentence","A punctuation mark","A title"],0,"Comprehension","An inference is a conclusion supported by clues or evidence."],
        ["Which is an example of personification?",["The wind whispered through the trees.","The tree is tall.","The stone is heavy.","The sun is a star."],0,"Literature","Personification gives a human quality to something non-human."],
        ["Choose the passive form of 'The teacher marked the test.'",["The test marked the teacher.","The test was marked by the teacher.","The teacher was marked by the test.","The test is marking."],1,"Grammar","The object becomes the subject in the passive construction."]
      ],
      "CBC Skills": [
        ["Which source is most useful when checking a scientific claim?",["Reliable evidence","A random rumour","An unsupported post","A guess"],0,"Critical Thinking","Reliable evidence provides a basis for evaluating a claim."],
        ["Which action best demonstrates digital citizenship?",["Protecting personal information","Sharing passwords publicly","Bullying online","Posting private data"],0,"Digital Citizenship","Protecting personal information is responsible online behaviour."],
        ["A learner changes a plan after reviewing evidence. This shows:",["Adaptability","Stubbornness","Carelessness","Avoidance"],0,"Adaptability","Adaptability includes adjusting actions when evidence changes."]
      ]
    },
    senior: {
      Mathematics: [
        ["Differentiate y = x².",["x","2x","x²","2"],1,"Calculus","The derivative of x² is 2x."],
        ["Solve x² − 5x + 6 = 0.",["1 and 6","2 and 3","−2 and −3","3 and 5"],1,"Algebra","Factor: (x−2)(x−3)=0."],
        ["If sin θ = 3/5 for an acute angle, what is cos θ?",["3/5","4/5","5/3","1/5"],1,"Trigonometry","Using a 3-4-5 triangle, cos θ = 4/5."],
        ["What is the mean if the sum is 240 and there are 30 values?",["6","8","10","12"],1,"Statistics","Mean = 240 ÷ 30 = 8."]
      ],
      Science: [
        ["Which law states that current is proportional to potential difference at constant temperature?",["Newton's law","Ohm's law","Boyle's law","Faraday's law"],1,"Electricity","Ohm's law gives V = IR under stated conditions."],
        ["What is the role of mRNA in protein synthesis?",["Carries genetic instructions from DNA to ribosome","Digests proteins","Stores fats","Produces oxygen"],0,"Genetics","mRNA carries coding information from DNA to the ribosome."],
        ["Which factor can shift a chemical equilibrium?",["A change in concentration","Colour alone","Container shape only","Mass of the apparatus"],0,"Chemistry","Changing concentration can shift equilibrium."],
        ["What is acceleration?",["Distance travelled","Rate of change of velocity","Mass per volume","Force per area"],1,"Mechanics","Acceleration is the rate of change of velocity."]
      ],
      "Integrated Science": [
        ["Which bond involves sharing electron pairs?",["Ionic","Covalent","Metallic only","Hydrogen only"],1,"Chemistry","Covalent bonding involves shared electron pairs."],
        ["What is the main cause of seasons on Earth?",["Earth's axial tilt as it orbits the Sun","Distance alone","The Moon's phases","Daily rotation alone"],0,"Earth Science","Earth's tilted axis changes sunlight angle and duration."],
        ["Which process releases energy from glucose in aerobic respiration?",["Glycolysis only","Aerobic respiration","Transpiration","Photosynthesis"],1,"Biology","Aerobic respiration releases energy from glucose using oxygen."],
        ["What is the purpose of a control group in an experiment?",["Provide a comparison","Guarantee the result","Remove all variables","Replace measurements"],0,"Scientific Method","A control provides a baseline for comparison."]
      ],
      English: [
        ["Which rhetorical device repeats initial consonant sounds?",["Alliteration","Irony","Hyperbole","Oxymoron"],0,"Literature","Alliteration repeats initial consonant sounds in nearby words."],
        ["Which sentence contains a subordinate clause?",["Although it rained, we continued.","We continued.","The rain stopped.","The learners studied."],0,"Grammar","'Although it rained' is a subordinate clause."],
        ["What is a thesis statement?",["The central claim of an argument","A punctuation mark","A character's name","A bibliography only"],0,"Writing","A thesis states the central claim of an argument."],
        ["Which technique uses deliberate exaggeration for effect?",["Hyperbole","Alliteration","Metaphor only","Dialogue"],0,"Literature","Hyperbole is deliberate exaggeration for emphasis."]
      ],
      "CBC Skills": [
        ["Which practice best supports ethical research?",["Accurate reporting and informed consent where required","Changing results to fit expectations","Copying without attribution","Hiding relevant evidence"],0,"Research Ethics","Ethical research requires honest reporting and appropriate consent."],
        ["Which skill involves evaluating arguments for validity and evidence?",["Critical thinking","Guessing","Memorisation only","Avoidance"],0,"Critical Thinking","Critical thinking evaluates reasoning, evidence and assumptions."],
        ["Which action demonstrates entrepreneurship?",["Identifying a need and developing a viable solution","Ignoring customers","Avoiding planning","Copying without improvement"],0,"Entrepreneurship","Entrepreneurship involves identifying opportunities and creating value."]
      ]
    }
  };

  // Subjects offered by grade band. The list changes automatically when the learner changes Grade.
  const gradeSubjects = {
    lower: ["Mathematics","English","Kiswahili","Environmental Activities","Creative Activities","Religious Education","CBC Skills"],
    upper: ["Mathematics","English","Kiswahili","Science","Social Studies","Agriculture","Creative Arts","Religious Education","CBC Skills"],
    junior: ["Mathematics","English","Kiswahili","Integrated Science","Social Studies","Agriculture","Pre-Technical Studies","Business Studies","Computer Science","Creative Arts & Sports","Religious Education","Life Skills","CBC Skills"],
    senior: ["Mathematics","English","Kiswahili","Physics","Chemistry","Biology","Computer Science","Business Studies","Geography","History & Government","Agriculture","General Science","Religious Education","Physical Education","Art & Design","Music","CBC Skills"]
  };

  const additionalQuestions = {
    "Kiswahili": [
      ["Chagua sentensi iliyo sahihi.",["Wanafunzi anasoma.","Wanafunzi wanasoma.","Wanafunzi unasoma.","Wanafunzi akisoma."],1,"Sarufi","Kiima cha wingi 'wanafunzi' huchukua kitenzi 'wanasoma'."],
      ["Neno 'haraka' lina maana gani katika sentensi: 'Alikimbia haraka'?",["Polepole","Kwa kasi","Kimya","Mbali"],1,"Msamiati","Haraka humaanisha kwa kasi."],
      ["Ni ipi dhamira kuu ya methali?",["Kuburudisha pekee","Kutoa funzo au hekima","Kuchora picha","Kutoa hesabu"],1,"Fasihi","Methali hubeba hekima au funzo la maisha."]
    ],
    "Environmental Activities": [
      ["Kwa nini mimea ni muhimu katika mazingira?",["Hutoa oksijeni na kusaidia mifumo ya ikolojia","Hutoa plastiki","Huzuia mvua yote","Huharibu udongo"],0,"Mazingira","Mimea huchangia oksijeni, chakula na makazi."],
      ["Ni hatua ipi husaidia kupunguza uchafuzi wa mazingira?",["Kutupa taka mtoni","Kutenganisha na kurejeleza taka","Kuchoma plastiki kila mahali","Kumwaga mafuta ardhini"],1,"Usafi","Kutenganisha na kurejeleza taka hupunguza taka na uchafuzi."],
      ["Kwa nini tunapaswa kuhifadhi maji?",["Maji ni rasilimali muhimu yenye matumizi mengi","Maji hayana matumizi","Maji hayawezi kuisha","Maji ni hatari kila wakati"],0,"Rasilimali","Maji ni muhimu kwa maisha, kilimo na shughuli za kila siku."]
    ],
    "Creative Activities": [
      ["Ni hatua ipi huonyesha ubunifu?",["Kufuata wazo moja bila kubadilisha","Kutengeneza suluhisho jipya la tatizo","Kukataa mawazo yote","Kunakili kila kitu"],1,"Ubunifu","Ubunifu huhusisha kuzalisha mawazo au suluhisho mpya zenye manufaa."],
      ["Kwa nini msanii huchagua rangi tofauti katika kazi?",["Kuonyesha hisia, msisitizo au ujumbe","Kuzuia ubunifu","Kuficha kazi","Kufanya kazi iwe nzito"],0,"Sanaa","Rangi zinaweza kubeba hisia, maana na msisitizo."],
      ["Kazi ya sanaa inaweza kusaidia jamii kwa:",["Kuwasilisha ujumbe kuhusu suala la jamii","Kuzuia mawasiliano","Kuondoa mawazo","Kuzuia ubunifu"],0,"Sanaa na Jamii","Sanaa inaweza kuwa njia ya mawasiliano na uhamasishaji."]
    ],
    "Social Studies": [
      ["Kwa nini jamii huweka sheria?",["Kusaidia kudumisha utaratibu na kulinda haki","Kuzuia kila shughuli","Kuwazuia watu wote kusafiri","Kuondoa majukumu"],0,"Uraia","Sheria husaidia kuweka utaratibu na kulinda haki na wajibu."],
      ["Ni ushahidi gani unaweza kusaidia mtafiti kuelewa historia ya eneo?",["Vyanzo vya kihistoria vinavyoweza kuthibitishwa","Uvumi pekee","Hadithi isiyojulikana","Makisio bila ushahidi"],0,"Historia","Vyanzo kama nyaraka na ushahidi wa akiolojia vinaweza kusaidia utafiti."],
      ["Kwa nini ramani hutumia alama?",["Kuwakilisha vipengele kwa njia rahisi kueleweka","Kupamba karatasi pekee","Kuficha maeneo","Kuondoa vipimo"],0,"Jiografia","Alama hurahisisha kuwakilisha vipengele vya eneo."]
    ],
    "Agriculture": [
      ["Kwa nini mkulima huzungusha mazao?",["Kuboresha rutuba na kupunguza mkusanyiko wa baadhi ya wadudu na magonjwa","Kuondoa mazao yote","Kupunguza mvua","Kuzuia ukuaji"],0,"Kilimo","Mzunguko wa mazao unaweza kusaidia rutuba na usimamizi wa wadudu na magonjwa."],
      ["Ni jambo gani muhimu wakati wa kuchagua mbegu?",["Ubora na kufaa kwa mazingira","Rangi ya kifurushi pekee","Ukubwa wa gunia pekee","Bei pekee"],0,"Uzalishaji","Mbegu bora zinazofaa mazingira husaidia uzalishaji."],
      ["Kwa nini udongo wenye rutuba ni muhimu?",["Hutoa virutubisho vinavyohitajika na mimea","Huzuia mizizi yote","Huondoa maji yote","Huzuia mwanga"],0,"Udongo","Mimea huhitaji virutubisho vya udongo kwa ukuaji."]
    ],
    "Pre-Technical Studies": [
      ["Kwa nini mchoro wa kiufundi hutumia vipimo?",["Ili sehemu itengenezwe kwa ukubwa unaokusudiwa","Ili kuchora bila mpangilio","Ili kuondoa usahihi","Ili kupunguza matumizi ya zana"],0,"Technical Drawing","Vipimo huonyesha ukubwa na uhusiano wa sehemu kwa usahihi."],
      ["Ni hatua ipi ni muhimu kabla ya kutumia mashine?",["Kusoma maelekezo na kuangalia usalama","Kuanzisha bila ukaguzi","Kuondoa kinga","Kupuuza hatari"],0,"Usalama","Maelekezo na ukaguzi wa usalama hupunguza hatari."],
      ["Mwanafunzi anachagua nyenzo kwa bidhaa. Ni kigezo gani cha juu?",["Sifa za nyenzo, matumizi na usalama","Rangi pekee","Jina la bidhaa pekee","Ukubwa wa duka"],0,"Materials","Nyenzo huchaguliwa kwa kuzingatia sifa, matumizi na usalama."]
    ],
    "Business Studies": [
      ["Kwa nini biashara hufanya utafiti wa soko kabla ya kuzindua bidhaa?",["Kuelewa mahitaji ya wateja na ushindani","Kuepuka wateja","Kuongeza gharama bila sababu","Kuondoa ubunifu"],0,"Entrepreneurship","Utafiti wa soko husaidia kuelewa wateja na mazingira ya ushindani."],
      ["Biashara ina mauzo mengi lakini faida ndogo. Ni jambo gani linapaswa kuchunguzwa kwanza?",["Gharama na bei ya bidhaa","Rangi ya nembo pekee","Jina la mfanyakazi","Ukubwa wa bango"],0,"Finance","Faida inategemea mapato na gharama."],
      ["Ni ipi inaonyesha ujasiriamali?",["Kutambua tatizo na kutengeneza suluhisho lenye thamani","Kusubiri bila kupanga","Kukataa maoni ya wateja","Kunakili bila kuboresha"],0,"Entrepreneurship","Ujasiriamali huhusisha kutambua fursa na kuunda thamani."]
    ],
    "Computer Science": [
      ["Kwa nini algorithm nzuri huvunja tatizo kubwa katika hatua?",["Ili tatizo liwe rahisi kueleweka na kutekelezwa","Ili kuongeza makosa","Ili kuondoa mantiki","Ili kuficha matokeo"],0,"Algorithms","Kugawanya tatizo husaidia kupanga na kutatua hatua kwa hatua."],
      ["Programu inatoa matokeo yasiyotarajiwa. Hatua gani ni muhimu?",["Kuchunguza mantiki, data na makosa ya programu","Kubadilisha kila kitu bila sababu","Kupuuza matokeo","Kufuta kompyuta"],0,"Debugging","Debugging hutafuta chanzo cha kosa kwa utaratibu."],
      ["Kwa nini nenosiri imara ni muhimu?",["Kupunguza uwezekano wa akaunti kufikiwa bila ruhusa","Kufanya kompyuta iwe haraka","Kuongeza ukubwa wa skrini","Kuzuia kila tovuti"],0,"Cybersecurity","Nenosiri imara husaidia kulinda akaunti."]
    ],
    "Religious Education": [
      ["Kwa nini maadili ni muhimu katika jamii?",["Husaidia watu kufanya maamuzi yenye kuwajibika","Huondoa majukumu","Huzuia huruma","Huondoa ushirikiano"],0,"Ethics","Maadili husaidia kuongoza tabia na maamuzi."],
      ["Mtu anapokutana na mgogoro, hatua ipi inaonyesha maadili?",["Kusikiliza pande zote na kutafuta suluhisho la amani","Kukataa kusikiliza","Kueneza uvumi","Kuongeza ugomvi"],0,"Peace","Kusikiliza na kutafuta suluhisho la amani husaidia kutatua migogoro."],
      ["Kwa nini kuheshimu watu wenye mitazamo tofauti ni muhimu?",["Hujenga maelewano na ushirikiano","Huondoa mazungumzo","Huzuia kujifunza","Huongeza ubaguzi"],0,"Values","Heshima huwezesha mazungumzo na kuishi pamoja kwa amani."]
    ],
    "Physics": [
      ["Gari linaongeza kasi kutoka 10 m/s hadi 25 m/s ndani ya sekunde 5. Kasi ya kuongeza ni ipi?",["2 m/s²","3 m/s²","5 m/s²","7 m/s²"],1,"Mechanics","a = (25−10)/5 = 3 m/s²."],
      ["Kwa nini voltmeter huunganishwa sambamba na sehemu inayopimwa?",["Ili kupima tofauti ya potential kwenye sehemu hiyo","Ili kuongeza current bila kikomo","Ili kuzuia voltage","Ili kupima mass"],0,"Electricity","Voltmeter hupima potential difference across a component."],
      ["Mwanafunzi anaona matokeo ya jaribio yakitofautiana. Hatua bora ni ipi?",["Kurudia vipimo na kuchunguza vyanzo vya makosa","Kuchagua matokeo anayopenda","Kubadilisha data","Kupuuza tofauti"],0,"Experimental Skills","Kurudia vipimo na kuchanganua makosa huongeza uaminifu wa hitimisho."]
    ],
    "Chemistry": [
      ["Kwa nini ongezeko la joto linaweza kuongeza kasi ya reaction?",["Chembe hugongana mara nyingi zaidi na kwa nishati inayofaa","Chembe hutoweka","Misa huisha","Reaction husimama"],0,"Kinetics","Joto huongeza nishati ya kinetic na collisions zenye ufanisi."],
      ["Kwa nini catalyst huongeza kasi ya reaction?",["Hutoa njia yenye activation energy ndogo","Huongeza bidhaa moja kwa moja","Huondoa reactants","Hubadilisha equilibrium kila wakati"],0,"Kinetics","Catalyst hutoa alternative pathway yenye activation energy ndogo."],
      ["Mwanafunzi anapata pH 2.5. Hii inaonyesha nini?",["Suluhisho ni tindikali","Suluhisho ni neutral","Suluhisho ni alkali","Hakuna ions"],0,"Acids and Bases","pH chini ya 7 huonyesha mazingira ya tindikali."]
    ],
    "Biology": [
      ["Kwa nini enzyme activity hupungua sana zaidi ya optimum temperature?",["Muundo wa enzyme unaweza kubadilika na active site kupoteza umbo","Substrate huongezeka bila kikomo","Maji hugeuka kuwa DNA","Oxygen hupotea kila wakati"],0,"Enzymes","Joto kubwa linaweza denature enzyme na kubadilisha active site."],
      ["Kwa nini variation ni muhimu kwa evolution?",["Hutoa tofauti zinazoweza kuchaguliwa na mazingira","Huondoa urithi","Huzuia reproduction","Hufanya viumbe wote wafanane"],0,"Evolution","Variation hutoa tofauti zinazoweza kuathiri survival and reproduction."],
      ["Kwa nini alveoli zinafaa kwa gas exchange?",["Zina surface area kubwa na kuta nyembamba zenye supply nzuri ya damu","Zina kuta nene sana","Hazina capillaries","Hazina unyevu"],0,"Gas Exchange","Large surface area and thin moist walls support diffusion."]
    ],
    "Geography": [
      ["Kwa nini miji karibu na mito mikubwa inaweza kukua haraka lakini ikawa katika hatari ya mafuriko?",["Mito hutoa rasilimali na usafiri lakini floodplains zinaweza kufurika","Mito huzuia shughuli zote","Miji haihitaji maji","Mafuriko hayawezi kutokea"],0,"Settlement","Mito can support settlement while floodplains present flood risk."],
      ["Mabadiliko ya matumizi ya ardhi yanaweza kuathiri mzunguko wa maji vipi?",["Uondoaji wa mimea unaweza kuongeza runoff na kupunguza infiltration","Huongeza infiltration kila wakati","Hauna athari","Huondoa mvua kabisa"],0,"Physical Geography","Vegetation affects interception, infiltration and runoff."],
      ["Kwa nini data za GIS zinaweza kusaidia mipango ya miji?",["Zinaunganisha taarifa na maeneo ili kusaidia maamuzi","Ni ramani za mapambo pekee","Haziwezi kuchanganua data","Huondoa hitaji la ushahidi"],0,"GIS","GIS links spatial and attribute data for analysis."]
    ],
    "History & Government": [
      ["Kwa nini mwanahistoria anapaswa kulinganisha vyanzo tofauti?",["Ili kutathmini ushahidi na kupunguza upendeleo wa chanzo kimoja","Ili kubadilisha historia","Ili kuepuka ushahidi","Ili kuchagua hadithi rahisi"],0,"Historical Inquiry","Cross-checking sources helps evaluate reliability and bias."],
      ["Kwa nini mgawanyo wa madaraka ni muhimu katika utawala?",["Husaidia kuweka checks and balances","Huondoa uwajibikaji","Huipa taasisi moja mamlaka yote","Huzuia sheria"],0,"Government","Separation and checks can limit concentration of power."],
      ["Ni kwa nini katiba ni muhimu kwa nchi?",["Huweka misingi ya utawala, haki na taasisi","Ni kitabu cha historia pekee","Huondoa sheria","Huzuia uraia"],0,"Civics","A constitution establishes foundational rules and institutions."]
    ],
    "General Science": [
      ["Kwa nini control variables ni muhimu katika experiment?",["Husaidia kutenga athari ya variable inayochunguzwa","Huondoa data","Hakikisha hypothesis ni kweli","Huzuia measurement"],0,"Scientific Method","Keeping relevant variables controlled improves the validity of comparisons."],
      ["Mwanafunzi anapata result isiyolingana na hypothesis. Afanye nini?",["Atathmini data na hypothesis bila kubadilisha ushahidi","Afute result","Aunde data mpya","Aamue hypothesis ni kweli"],0,"Scientific Reasoning","Evidence should be evaluated honestly even when unexpected."],
      ["Kwa nini correlation haimaanishi causation moja kwa moja?",["Variables mbili zinaweza kuhusiana bila moja kusababisha nyingine","Correlation ni kosa kila wakati","Causation haiwezi kupimwa","Data haina maana"],0,"Data Analysis","An observed association alone does not establish cause."]
    ],
    "Art & Design": [
      ["Msanii anatumia contrast kali. Anaweza kuwa analenga nini?",["Kuvuta attention na kuonyesha tofauti","Kuficha subject","Kuondoa balance","Kupunguza ujumbe"],0,"Design Principles","Contrast creates visual distinction and emphasis."],
      ["Kwa nini prototype ni muhimu katika design?",["Huruhusu mawazo kujaribiwa na kuboreshwa kabla ya final product","Huzuia feedback","Huondoa testing","Hakikisha first idea ni perfect"],0,"Design Process","Prototypes allow testing, feedback and iteration."],
      ["Design yenye mtumiaji katikati inapaswa kuzingatia nini?",["Mahitaji na mazingira ya mtumiaji","Rangi pekee","Gharama pekee","Mapambo pekee"],0,"User-Centred Design","Good design considers user needs, context and constraints."]
    ],
    "Music": [
      ["Kwa nini dynamics hubadilisha nguvu ya muziki?",["Huongeza expression na kuonyesha tofauti za intensity","Huondoa rhythm","Huondoa melody","Huzuia tempo"],0,"Musical Expression","Dynamics control changes in loudness and expression."],
      ["Mwanamuziki anafanya rehearsal mara kwa mara kwa nini?",["Kuboresha accuracy, coordination na interpretation","Kuondoa creativity","Kuzuia performance","Kupunguza listening"],0,"Performance","Practice improves technical and expressive performance."],
      ["Kwa nini rhythm ni muhimu katika ensemble?",["Husaidia performers kudumisha timing ya pamoja","Huondoa harmony","Huzuia communication","Hubadilisha instruments"],0,"Rhythm","Shared rhythm supports coordinated performance."]
    ],
    "Physical Education": [
      ["Kwa nini warm-up hufanywa kabla ya mazoezi makali?",["Kuandaa mwili kwa shughuli na kupunguza hatari ya strain","Kuongeza uchovu kabla ya kuanza","Kuzuia circulation","Kuondoa flexibility"],0,"Fitness","A warm-up prepares muscles and cardiovascular system for activity."],
      ["Ni kwa nini hydration ni muhimu wakati wa mazoezi?",["Husaidia kudumisha fluid balance na utendaji wa mwili","Huongeza dehydration","Huzuia sweating","Huondoa oxygen"],0,"Health","Fluid balance is important for temperature regulation and performance."],
      ["Mwanafunzi anataka kuboresha endurance. Ni mpango gani unaofaa?",["Mazoezi ya aerobic yaliyopangwa na kuongezwa hatua kwa hatua","Kukaa bila mazoezi","Mazoezi makali mara moja tu","Kulala pekee"],0,"Training","Progressive aerobic training can improve endurance."]
    ]
  };

  function subjectsForGrade(gradeValue) {
    const n = Number(String(gradeValue).replace(/[^0-9]/g, "")) || 7;
    return n <= 3 ? gradeSubjects.lower : n <= 6 ? gradeSubjects.upper : n <= 9 ? gradeSubjects.junior : gradeSubjects.senior;
  }

  function refreshSubjectOptions() {
    if (!subject) return;
    const current = subject.value;
    const list = subjectsForGrade(grade.value);
    subject.innerHTML = "";
    list.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      subject.appendChild(option);
    });
    subject.value = list.includes(current) ? current : list[0];
  }

  function getGradeQuestionBank(selectedGrade, selectedSubject) {
    const n = Number(String(selectedGrade).replace(/[^0-9]/g, "")) || 7;
    const base = bank[selectedSubject] || additionalQuestions[selectedSubject] || bank["CBC Skills"];
    let extra = additionalQuestions[selectedSubject] ? additionalQuestions[selectedSubject].slice() : [];
    if (n <= 3) {
      extra = gradePools["Grade 1"][selectedSubject] || [];
    } else if (n <= 6) {
      extra = bandQuestions.primaryUpper[selectedSubject] || [];
    } else if (n <= 9) {
      extra = bandQuestions.junior[selectedSubject] || [];
    } else {
      extra = bandQuestions.senior[selectedSubject] || [];
    }

    // Rotate by grade so adjacent grades do not receive the same first questions.
    const combined = base.concat(extra).slice();
    const rotation = (n - 1) % combined.length;
    return combined.slice(rotation).concat(combined.slice(0, rotation));
  };

  let active = [];
  let startedAt = 0;
  let timerId = null;
  let submitted = false;

  function escapeHtml(value) {
    return String(value).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");
  }

  function readProgress() {
    try { return JSON.parse(localStorage.getItem(QUIZ_KEY) || "[]"); } catch { return []; }
  }

  function saveAttempt(attempt) {
    const attempts = readProgress();
    attempts.unshift(attempt);
    localStorage.setItem(QUIZ_KEY, JSON.stringify(attempts.slice(0, 100)));
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i]; copy[i] = copy[j]; copy[j] = temp;
    }
    return copy;
  }

  function renderProgress() {
    const attempts = readProgress();
    if (!attempts.length) {
      progressBox.innerHTML = "<div class=\"empty-state\">No quiz attempts yet. Start a quiz to generate a learner progress report.</div>";
      return;
    }

    const groups = {};
    attempts.forEach((a) => {
      const key = a.learner || "Learner";
      if (!groups[key]) groups[key] = [];
      groups[key].push(a);
    });

    progressBox.innerHTML = Object.keys(groups).map((name) => {
      const list = groups[name];
      const average = Math.round(list.reduce((sum, a) => sum + Number(a.score || 0), 0) / list.length);
      const best = Math.max.apply(null, list.map((a) => Number(a.score || 0)));
      const latest = list[0];
      const subjectMap = {};
      list.forEach((a) => {
        if (!subjectMap[a.subject]) subjectMap[a.subject] = [];
        subjectMap[a.subject].push(Number(a.score || 0));
      });

      const subjectHtml = Object.keys(subjectMap).map((sub) => {
        const scores = subjectMap[sub];
        const avg = Math.round(scores.reduce((x,y) => x + y, 0) / scores.length);
        return "<div class=\"progress-subject\"><span>" + escapeHtml(sub) + "</span><strong>" + avg + "%</strong><span class=\"progress-meter\"><i style=\"width:" + avg + "%\"></i></span></div>";
      }).join("");

      return "<article class=\"learner-progress-card\">" +
        "<div class=\"learner-progress-header\"><div><strong>" + escapeHtml(name) + "</strong><span>" +
        list.length + " quiz attempt" + (list.length === 1 ? "" : "s") + " | Latest: " + escapeHtml(latest.grade || "") + " " + escapeHtml(latest.subject || "") +
        "</span></div><div class=\"progress-score\">" + average + "%<small>average</small></div></div>" +
        "<div class=\"progress-stats\"><div><strong>" + best + "%</strong><span>Best Score</span></div><div><strong>" + list.length +
        "</strong><span>Quizzes</span></div><div><strong>" + latest.score + "%</strong><span>Latest</span></div></div>" +
        "<div class=\"progress-subject-list\">" + subjectHtml + "</div>" +
        "<div class=\"progress-meter large\"><span style=\"width:" + average + "%\"></span></div>" +
        "</article>";
    }).join("");
  }

  function updateTimer() {
    if (!startedAt) {
      timer.textContent = "Time: 00:00";
      return;
    }
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");
    timer.textContent = "Time: " + mm + ":" + ss + (mode.value === "assessment" ? " — assessment mode (10 min)" : " — practice mode");
    if (mode.value === "assessment" && elapsed >= 600 && !submitted) {
      markQuiz(true);
    }
  }

  function startQuiz() {
    if (!learner.value.trim()) {
      status.textContent = "Enter the learner name before starting.";
      learner.focus();
      return;
    }

    const selectedBank = getGradeQuestionBank(grade.value, subject.value);
    active = shuffle(selectedBank).slice(0, Math.min(Number(length.value || 10), selectedBank.length));
    startedAt = Date.now();
    submitted = false;
    clearInterval(timerId);

    questionsBox.innerHTML = "";
    active.forEach((item, index) => {
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-question";
      const legend = document.createElement("legend");
      legend.textContent = (index + 1) + ". " + item[0];
      fieldset.appendChild(legend);

      item[1].forEach((optionText, optionIndex) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "quizQuestion" + index;
        input.value = String(optionIndex);
        input.required = true;
        const span = document.createElement("span");
        span.textContent = optionText;
        label.appendChild(input);
        label.appendChild(span);
        fieldset.appendChild(label);
      });
      questionsBox.appendChild(fieldset);
    });

    submitButton.disabled = false;
    resultBox.classList.add("hidden-section");
    resultBox.innerHTML = "";
    instructions.innerHTML = "<strong>" + escapeHtml(grade.value + " " + subject.value) + "</strong> — " + active.length + " randomized questions.";
    status.textContent = "Quiz started. Answer every question and submit when ready.";
    updateTimer();
    if (mode.value === "assessment") timerId = setInterval(updateTimer, 1000);
    questionsBox.scrollIntoView({behavior:"smooth", block:"start"});
  }

  function markQuiz(autoSubmit) {
    if (!active.length || submitted) return;

    const answers = new FormData(form);
    let answered = 0;
    let correct = 0;
    const results = [];

    active.forEach((item, index) => {
      const raw = answers.get("quizQuestion" + index);
      const selected = raw === null ? null : Number(raw);
      if (selected !== null) answered++;
      const right = selected === item[2];
      if (right) correct++;
      results.push({
        question: item[0],
        selected: selected,
        correctAnswer: item[2],
        isCorrect: right,
        topic: item[3],
        explanation: item[4]
      });
    });

    const total = active.length;
    const score = Math.round((correct / total) * 100);
    const attempt = {
      id: "quiz-" + Date.now(),
      learner: learner.value.trim(),
      grade: grade.value,
      subject: subject.value,
      mode: mode.value,
      total: total,
      answered: answered,
      correct: correct,
      score: score,
      durationSeconds: Math.floor((Date.now() - startedAt) / 1000),
      results: results,
      createdAt: new Date().toISOString(),
      remark: score >= 80 ? "Excellent progress" : score >= 60 ? "Good progress — keep practising" : "Needs guided revision"
    };

    submitted = true;
    clearInterval(timerId);
    saveAttempt(attempt);

    if (typeof postToBackend === "function" && typeof API_ENDPOINTS !== "undefined") {
      postToBackend(API_ENDPOINTS.quizzes, attempt).catch(() => {});
    }

    status.textContent = autoSubmit
      ? "Time ended. " + attempt.learner + " scored " + score + "%."
      : attempt.learner + " scored " + score + "%. " + attempt.remark + ".";

    const missed = results.filter((r) => !r.isCorrect);
    let review = "";
    if (missed.length) {
      review = "<div class=\"quiz-review\"><h4>Review incorrect answers</h4>" +
        missed.map((item) => {
          const index = results.indexOf(item);
          const q = active[index];
          const yourAnswer = item.selected === null ? "Not answered" : q[1][item.selected];
          return "<article><strong>" + escapeHtml(item.question) + "</strong>" +
            "<span>Your answer: " + escapeHtml(yourAnswer) + "</span>" +
            "<span>Correct answer: " + escapeHtml(q[1][item.correctAnswer]) + "</span>" +
            "<p>" + escapeHtml(item.explanation) + "</p></article>";
        }).join("") + "</div>";
    } else {
      review = "<p>Excellent — all questions were answered correctly.</p>";
    }

    resultBox.classList.remove("hidden-section");
    resultBox.innerHTML =
      "<div class=\"quiz-result-summary\"><div><strong>" + score + "%</strong><span>Score</span></div>" +
      "<div><strong>" + correct + "/" + total + "</strong><span>Correct</span></div>" +
      "<div><strong>" + answered + "/" + total + "</strong><span>Answered</span></div>" +
      "<div><strong>" + Math.floor(attempt.durationSeconds / 60) + "m " + (attempt.durationSeconds % 60) + "s</strong><span>Time</span></div></div>" +
      "<h3>" + escapeHtml(attempt.remark) + "</h3>" + review;

    renderProgress();
    if (typeof showToast === "function") showToast("Quiz marked and learner progress updated.");
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    markQuiz(false);
  });

  startButton.addEventListener("click", startQuiz);
  clearButton.addEventListener("click", function() {
    form.querySelectorAll('input[type="radio"]').forEach((input) => { input.checked = false; });
    status.textContent = "Answers cleared.";
  });

  clearProgressButton.addEventListener("click", function() {
    if (!window.confirm("Clear all quiz progress stored in this browser?")) return;
    localStorage.removeItem(QUIZ_KEY);
    renderProgress();
    status.textContent = "Quiz progress cleared.";
  });

  renderProgress();
  window.CBENexusQuiz = { startQuiz: startQuiz, markQuiz: markQuiz, renderProgress: renderProgress };
})();