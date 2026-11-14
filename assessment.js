(() => {
  const QUIZ_KEY = "cbeQuizProgress";
  const grades = ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Form 1","Form 2","Form 3","Form 4","Form 5","Form 6","Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12","Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8","Year 9","Year 10","Year 11","Year 12","Year 13","Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Secondary 1","Secondary 2","Secondary 3","Secondary 4","Secondary 5","Secondary 6","S1","S2","S3","S4","S5","S6","JSS1","JSS2","JSS3","SS1","SS2","SS3","IGCSE","AS Level","A Level","IB MYP 1","IB MYP 2","IB MYP 3","IB MYP 4","IB MYP 5","IB DP Year 1","IB DP Year 2"];
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
  const country = document.getElementById("quizCountryInput");
  const curriculum = document.getElementById("quizCurriculumInput");
  const curriculumByCountry = {
  "Kenya":["Kenya CBC/CBE","Kenya 8-4-4 / KCSE","Cambridge International","Pearson Edexcel","IB"],
  "Uganda":["Uganda NCDC Curriculum / UNEB","Cambridge International","Pearson Edexcel"],
  "Tanzania":["Tanzania TIE Curriculum / NECTA","Cambridge International","Pearson Edexcel"],
  "Rwanda":["Rwanda REB Curriculum / NESA","Cambridge International"],
  "South Africa":["South Africa CAPS / NSC (DBE)","IEB NSC","Cambridge International","Pearson Edexcel","IB"],
  "Ghana":["Ghana NaCCA Curriculum / WASSCE","Cambridge International"],
  "Nigeria":["Nigeria NERDC Curriculum / WAEC / NECO","Cambridge International"],
  "Zambia":["Zambia ZEC / ECZ Curriculum","Cambridge International"],
  "Zimbabwe":["Zimbabwe ZIMSEC","Cambridge International","Pearson Edexcel"],
  "Botswana":["Botswana BGCSE / BEC","Cambridge International"],
  "Namibia":["Namibia NSSCO / NSSCAS","Cambridge International"],
  "Malawi":["Malawi MANEB Curriculum","Cambridge International"],
  "Lesotho":["Lesotho LGCSE / ECOL","Cambridge International"],
  "Eswatini":["Eswatini EGCSE / ECESWA","Cambridge International"],
  "India":["India CBSE","India CISCE / ICSE / ISC","State Board","Cambridge International","Pearson Edexcel","IB"],
  "Pakistan":["Pakistan National Curriculum / FBISE","Punjab Board (BISE)","Cambridge O Level / A Level","Pearson Edexcel","IB","Pakistan National Curriculum 2026 (NCP-2026) / Grade 9 — Federal & ICT scope"],
  "Bangladesh":["Bangladesh NCTB / SSC / HSC","Cambridge O Level / A Level","Pearson Edexcel","IB"],
  "United Kingdom":["England National Curriculum / GCSE / A Level","Wales Curriculum for Wales / WJEC","Scotland Curriculum for Excellence / SQA","Northern Ireland CCEA","Cambridge International","Pearson Edexcel","IB"],
  "United States":["US Common Core / NGSS","State Standards / State Assessments","AP","IB"],
  "Canada":["Canadian Provincial Curriculum","Ontario Curriculum / OSSLT","British Columbia Curriculum","Alberta Curriculum","IB"],
  "Australia":["Australian Curriculum / ACARA","NSW NESA","VCE (Victoria)","QCE (Queensland)","WACE (Western Australia)","IB"],
  "New Zealand":["New Zealand Curriculum / NCEA","New Zealand National Curriculum Statement 2026 / Te Mātaiaho / Year 10","Cambridge International","IB"],
  "Singapore":["Singapore MOE Curriculum / GCE","Cambridge International","IB"],
  "Malaysia":["Malaysia KSSM / KSSR / SPM","Cambridge IGCSE","IB"],
  "China":["China National Curriculum / Gaokao","Cambridge International","Pearson Edexcel","IB"],
  "Japan":["Japan MEXT Curriculum","Cambridge International","IB"],
  "United Arab Emirates":["UAE Ministry of Education Curriculum","British Curriculum / GCSE / A Level","US Curriculum","IB","CBSE"],
  "Singapore":["Singapore MOE Lower Secondary Curriculum / Secondary 2 / G2-G3"],
  "Slovakia":["Slovakia State Educational Programme for Basic Education / 9th Grade"],
  "Slovenia":["Slovenia Basic School National Curriculum / 9th Grade"],
  "Solomon Islands":["Solomon Islands National Curriculum / Junior Secondary Year 9 / Form 3"],
  "Somalia":["Somalia National Education Curriculum / Secondary Form 1 (Grade 9)"],
  "South Africa":["South Africa CAPS / Senior Phase / Grade 9"],
  "South Korea":["South Korea 2022 Revised National Curriculum / Middle School Grade 3"],
  "South Sudan":["South Sudan National General Education Policy / National Curriculum Framework (secondary supplementary)"],
  "Spain":["Spain LOMLOE / Educación Secundaria Obligatoria / 3º ESO"],
  "Sri Lanka":["Sri Lanka National Curriculum / Grade 9 (current syllabus; reform transition noted)"],
  "Sudan":["Sudan Ministry of Education Curriculum / Intermediate Stage / Third Intermediate"],
  "Suriname":["Suriname MinOWC / Secondary Education / Leerjaar 9 iSTREAMS"],
  "Sweden":["Sweden National Curriculum Lgr22 / Compulsory School / Year 9"],
  "Switzerland":["Switzerland Cantonal Curriculum / Lower Secondary Cycle 3 / Final Year"],
  "Syria":["Syria Ministry of Education / National Curriculum / Grade 9"],
  "Tajikistan":["Tajikistan State Standard of General Education / Basic General Education / Grade 9"],
  "Tanzania":["Tanzania TIE Curriculum for Ordinary Secondary Education / Form II (2023)"],
  "Thailand":["Thailand Basic Education Core Curriculum B.E. 2551 (2008), revised 2017 / Matthayom 3"],
  "Timor-Leste":["Timor-Leste National Basic Education Curriculum / Third Cycle / Grade 9 (2024 revised framework)"],
  "Togo":["Togo National Curriculum / Collège / Classe de Troisième (3e)"],
  "Benin":["Benin National Curriculum / Enseignement secondaire général / Classe de Troisième (3e)"],
  "Cambodia":["Cambodia MoEYS General Education Curriculum Framework / Lower Secondary / Grade 9"],
  "China":["China Ministry of Education Compulsory Education Curriculum Standards (2022) / Grade 9"],
  "Indonesia":["Indonesia National Curriculum / Grade IX (Kelas IX) / Kurikulum Merdeka and transition provisions"],
  "Japan":["Japan MEXT Courses of Study / Lower Secondary School / Year 3 (Grade 9)"],
  "Laos":["Lao National Curriculum for Lower Secondary Education / Grade 9"],
  "Malaysia":["Malaysia KSSM / Secondary School Standard Curriculum / Form 3"],
  "Mongolia":["Mongolia General Education Curriculum / Basic Education / Grade 9"],
  "North Korea":["DPR Korea General Education System / Lower Secondary / Year 3 (Grade 9) — supplementary pathway"],
  "Philippines":["Philippines DepEd Revised K to 10 / MATATAG Curriculum / Grade 9 (SY 2026–2027)"],
  "Vietnam":["Vietnam General Education Curriculum 2018 / Lower Secondary / Grade 9"],
  "Brunei":["Brunei SPN21 / General Secondary Education Programme / Year 9"],
  "Kazakhstan":["Kazakhstan State Compulsory Education Standard / Basic Secondary / Grade 9"],
  "Kyrgyzstan":["Kyrgyz Republic State Educational Standard / Basic General Education / Grade 9"],
  "Turkmenistan":["Turkmenistan General Education Programme / Basic Secondary / Grade 9"],
  "Saudi Arabia":["Saudi Ministry of Education Curriculum / Intermediate Grade 9 / Third Intermediate"],
  "Senegal":["Senegal National Curriculum / Collège / Troisième (3e)"],
  "Serbia":["Serbia National Curriculum / Primary Education / Grade 8"],
  "Seychelles":["Seychelles National Curriculum Framework / Secondary 3 (S3)"],
  "Sierra Leone":["Sierra Leone MBSSE National Senior Secondary Curriculum Framework / SSS 1 / Sciences and Technologies"],
  "Qatar":["Qatar National Curriculum","Qatar National Curriculum / Preparatory Stage / Grade 9","British Curriculum","American Curriculum","IB"],
  "Egypt":["Egypt Ministry of Education Curriculum / Thanaweya Amma","IGCSE","IB"],
  "Ethiopia":["Ethiopia Ministry of Education Curriculum / Ethiopian General School Leaving Examination"],
  "Eritrea":["Eritrea Ministry of Education National Curriculum / Secondary Education Certificate Examination (ESECE)"],
  "Estonia":["Estonia National Curriculum (Basic School) / Harno"],
  "Latvia":["Latvia National Basic Education Standard / Skola2030"],
  "Lithuania":["Lithuanian National Curriculum / General Programmes (V-1269)"],
  "Luxembourg":["Luxembourg National Curriculum / Classical Secondary Education (ESC)"],
  "Malta":["Malta National Curriculum Framework / Learning Outcomes Framework / Secondary Year 9"],
  "Ireland":["Irish Primary Curriculum / Junior Cycle / Leaving Certificate","Cambridge International","IB"],
  "France":["French National Curriculum / Baccalauréat","Cambridge International","IB"],
  "Germany":["German Länder Curriculum / Abitur","Cambridge International","IB"],
  "Netherlands":["Dutch National Curriculum / VMBO / HAVO / VWO","Cambridge International","IB"],
  "Brazil":["Brazil BNCC / ENEM","Cambridge International","IB"],
  "Mexico":["Mexico SEP Curriculum","Cambridge International","IB"],
  "Philippines":["Philippines DepEd K to 12 / MATATAG","Cambridge International","IB"],
  "Indonesia":["Indonesia Merdeka Curriculum / National Assessment","Cambridge International","IB"],
  "South Korea":["South Korea National Curriculum / CSAT (Suneung)","IB"],
  "Sri Lanka":["Sri Lanka National Curriculum / GCE O/L & A/L","Cambridge International","Pearson Edexcel"],
  "Nepal":["Nepal CDC Curriculum / NEB","Cambridge International"],
  "Myanmar":["Myanmar Basic Education Curriculum / Matriculation","Cambridge International"],
  "Oman":["Oman Ministry of Education Curriculum","British Curriculum","IB","Oman Ministry of Education Curriculum Frameworks 2026 / Grade 10"],
  "Kuwait":["Kuwait Ministry of Education Curriculum","British Curriculum","American Curriculum","IB"],
  "Bahrain":["Bahrain Ministry of Education Curriculum","British Curriculum","American Curriculum","IB"],
  "Jordan":["Jordan National Curriculum / Tawjihi","Cambridge International","IB"],
  "Israel":["Israel Ministry of Education / Bagrut","IB"],
  "Turkey":["Türkiye Ministry of National Education / YKS","Cambridge International","IB"],
  "Türkiye":["Türkiye Ministry of National Education / YKS","Cambridge International","IB"],
  "Russia":["Russian Federal State Educational Standards / EGE","Russian Federal State Educational Standards / Basic General Education / Grade 9","IB"],
  "Ukraine":["Ukraine State Standard / NMT","IB"],
  "Jamaica":["Jamaica National Standards Curriculum / CSEC / CAPE","Cambridge International"],
  "Trinidad and Tobago":["Trinidad and Tobago National Curriculum / CSEC / CAPE","Cambridge International"],
  "Barbados":["Barbados National Curriculum / CSEC / CAPE","Cambridge International"],
  "Fiji":["Fiji National Curriculum / FSLC","Cambridge International"],
  "Papua New Guinea":["PNG National Curriculum / Grade 10 & 12 National Examinations"],
  "Mauritius":["Mauritius National Curriculum Framework Grades 7–9 / National Certificate of Education (NCE)","Cambridge GCE O Level (Mauritius Grades 10–11)","Cambridge International","Pearson Edexcel","IB"],
  "Mauritania":["Mauritania National Curriculum / New Republican School (École Républicaine) — Secondary supplementary pathway"],
  "Mexico":["Mexico SEP Plan de Estudio 2022 / Fase 6 (Secondary)"],
  "Marshall Islands":["Marshall Islands Public School System Curriculum / MISAT Grade 8"],
  "Mongolia":["Mongolia National Core Curriculum for Basic Education (2019) / Grade 9"],
  "Montenegro":["Montenegro Publicly Valid Nine-Year Basic Education Programme / Grade IX"],
  "Morocco":["Morocco National Curriculum / Common Core Secondary (Tronc commun scientifique) — supplementary"],
  "Mozambique":["Mozambique Secondary Education Curriculum Plan / 10th Class (2nd Cycle)"],
  "Myanmar":["Myanmar Basic Education Curriculum / Grade 9 — supplementary pathway"],
  "Namibia":["Namibia National Curriculum for Basic Education / Junior Secondary Grade 9"],
  "Nauru":["Nauru National Curriculum / Year 10 — supplementary learning strands"],
  "Nepal":["Nepal Secondary Education Curriculum 2078 / Grade 9 — compulsory subjects"],
  "Netherlands":["Netherlands SLO Core Objectives / Lower Secondary (VO onderbouw) — supplementary"],
  "Micronesia":["Federated States of Micronesia National Curriculum Standards and Benchmarks / Secondary supplementary"],
  "Moldova":["Moldova National Curriculum / Gymnasium (Grades V–IX)"],
  "Monaco":["Monaco National Education Programme / French National Programmes with Monaco-specific History"],
  "Seychelles":["Seychelles National Curriculum / IGCSE","Cambridge International"],
  "Nicaragua":["Nicaragua Regular Secondary Education / 9° (Fourth Cycle)"],
  "Niger":["Niger General Secondary Education / Second Cycle (Lycée) — Official Programme Reference"],
  "North Korea":["DPR Korea 12-Year Compulsory Education / Lower Secondary Year 3 — Supplementary"],
  "North Macedonia":["North Macedonia Primary Education Concept / Grade IX — Supplementary Subject Starters"],
  "Norway":["Norway National Curriculum / Kunnskapsløftet 2020 (LK20) / Year 10"],
  "Palau":["Palau Ministry of Education Curriculum Frameworks / Grade 9 — supplementary"],
  "Panama":["Panama MEDUCA Educación Básica General / Premedia 9°"],
  "Paraguay":["Paraguay Educación Escolar Básica / Tercer Ciclo / 9° Grado"],
  "Peru":["Perú Currículo Nacional de la Educación Básica / Educación Secundaria / 3°"],
  "Poland":["Poland Podstawa programowa / Szkoła Podstawowa / Klasa VIII"],
  "Saint Lucia":["Saint Lucia National Curriculum / Lower Secondary / Form 3"],
  "Saint Vincent and the Grenadines":["Saint Vincent and the Grenadines National Curriculum / Secondary Form 3 / CSEC pathway"],
  "Samoa":["Samoa National Curriculum / Secondary Year 9"],
  "San Marino":["San Marino Scuola Media / Classe Terza"],
  "Sao Tome and Principe":["Sao Tome and Principe National Curriculum / 9ª Classe / Ensino Básico 7ª–9ª"],
  "Portugal":["Portugal Aprendizagens Essenciais / 3.º Ciclo / 9.º Ano"],
  "Romania":["Romania National Curriculum / Gimnaziu / Grade VIII"],
  "Saint Kitts and Nevis":["Saint Kitts and Nevis Secondary Education / Form 3 / CSEC preparation pathway"],
};

const nationalLevelStructures = {
  "Eritrea": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Estonia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Latvia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Lithuania": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Luxembourg": ["7e","6e","5e","4e","3e","2e","1re"],
  "Malta": ["Year 7","Year 8","Year 9","Year 10","Year 11"],
  "Mauritius": ["Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Grade 13"],
  "Mauritania": ["4ème AS"],
  "Mexico": ["Secundaria 3"],
  "Micronesia": ["Grade 8"],
  "Moldova": ["Grade 9"],
  "Monaco": ["4e"],
  "Marshall Islands": ["Grade 8"],
  "Mongolia": ["Grade 9"],
  "Montenegro": ["Grade IX"],
  "Morocco": ["Tronc commun"],
  "Mozambique": ["10th Class"],
  "Myanmar": ["Grade 9"],
  "Namibia": ["Grade 9"],
  "Nauru": ["Year 10"],
  "Nepal": ["Grade 9"],
  "Netherlands": ["VO onderbouw (Year 2)"],
  "Nicaragua": ["9°"],
  "Niger": ["Second Cycle (Lycée)"],
  "North Korea": ["Lower Secondary Year 3"],
  "North Macedonia": ["Grade IX"],
  "Saint Lucia":["Form 3"],
  "Saint Vincent and the Grenadines":["Form 3"],
  "Samoa":["Year 9"],
  "San Marino":["Classe III"],
  "Sao Tome and Principe":["9ª Classe"],
  "Portugal":["9.º Ano"],
  "Romania":["Grade VIII"],
  "Russia":["Grade 9"],
  "Saint Kitts and Nevis":["Form 3"],
  "Kenya": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Uganda": ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Primary 7","Senior 1","Senior 2","Senior 3","Senior 4","Senior 5","Senior 6"],
  "Tanzania": ["Standard I","Standard II","Standard III","Standard IV","Standard V","Standard VI","Standard VII","Form I","Form II","Form III","Form IV","Form V","Form VI"],
  "Rwanda": ["P1","P2","P3","P4","P5","P6","S1","S2","S3","S4","S5","S6"],
  "South Africa": ["Grade R","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Ghana": ["KG 1","KG 2","Basic 1","Basic 2","Basic 3","Basic 4","Basic 5","Basic 6","Basic 7","Basic 8","Basic 9","SHS 1","SHS 2","SHS 3"],
  "Nigeria": ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","JSS 1","JSS 2","JSS 3","SS 1","SS 2","SS 3"],
  "Zambia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Zimbabwe": ["ECD A","ECD B","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Form 1","Form 2","Form 3","Form 4","Lower Sixth","Upper Sixth"],
  "Botswana": ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Form 1","Form 2","Form 3","Form 4","Form 5"],
  "Namibia": ["Grade 0","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Malawi": ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Standard 8","Form 1","Form 2","Form 3","Form 4"],
  "Lesotho": ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Form A","Form B","Form C","Form D","Form E"],
  "Eswatini": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Form 1","Form 2","Form 3","Form 4","Form 5"],
  "India": ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"],
  "Pakistan": ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"],
  "Bangladesh": ["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6","Class 7","Class 8","Class 9","Class 10","Class 11","Class 12"],
  "United Kingdom": ["Reception","Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8","Year 9","Year 10","Year 11","Year 12","Year 13"],
  "United States": ["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Canada": ["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Australia": ["Foundation","Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8","Year 9","Year 10","Year 11","Year 12"],
  "New Zealand": ["Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8","Year 9","Year 10","Year 11","Year 12","Year 13"],
  "Singapore": ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Secondary 1","Secondary 2","Secondary 3","Secondary 4","Secondary 5","Junior College 1","Junior College 2"],
  "Malaysia": ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Form 1","Form 2","Form 3","Form 4","Form 5","Form 6"],
  "Philippines": ["Kindergarten","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Indonesia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Sri Lanka": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Grade 13"],
  "Nepal": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Ireland": ["Junior Infants","Senior Infants","1st Class","2nd Class","3rd Class","4th Class","5th Class","6th Class","1st Year","2nd Year","3rd Year","Transition Year","5th Year","6th Year"],
  "France": ["CP","CE1","CE2","CM1","CM2","Sixième","Cinquième","Quatrième","Troisième","Seconde","Première","Terminale"],
  "Germany": ["Grundschule 1","Grundschule 2","Grundschule 3","Grundschule 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12","Grade 13"],
  "Japan": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Junior High 1","Junior High 2","Junior High 3","Senior High 1","Senior High 2","Senior High 3"],
  "China": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Junior Secondary 1","Junior Secondary 2","Junior Secondary 3","Senior Secondary 1","Senior Secondary 2","Senior Secondary 3"],
  "United Arab Emirates": ["KG 1","KG 2","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Saudi Arabia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Qatar": ["KG 1","KG 2","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Egypt": ["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Preparatory 1","Preparatory 2","Preparatory 3","Secondary 1","Secondary 2","Secondary 3"],
  "Ethiopia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Norway": ["Year 10"],
  "Oman": ["Grade 10"],
  "Palau": ["Grade 9"],
  "Panama": ["9°"],
  "Papua New Guinea": ["Grade 10"],
  "Paraguay": ["9° Grado"],
  "Peru": ["3° Secundaria"],
  "Poland": ["Klasa VIII"],
};
function levelOptionsFor(countryName, curriculumName){
  const c=(curriculumName||"").toLowerCase();
  if(c.includes("cambridge") || c.includes("igcse") || c.includes("pearson") || c.includes("edexcel") || c.includes("gcse") || c.includes("british curriculum")) return [...Array.from({length:13},(_,i)=>"Year "+(i+1)),"IGCSE","O Level","AS Level","A Level"];
  if(c.includes("ib") || c.includes("international baccalaureate")) return ["PYP Year 1","PYP Year 2","PYP Year 3","PYP Year 4","PYP Year 5","PYP Year 6","MYP Year 1","MYP Year 2","MYP Year 3","MYP Year 4","MYP Year 5","DP Year 1","DP Year 2"];
  if(c.includes("common core") || c.includes("ngss") || c.includes("state standard") || c.includes("american curriculum") || c==="ap") return ["Kindergarten",...Array.from({length:12},(_,i)=>"Grade "+(i+1)),"AP"];
  if(countryName==="Kenya" && (c.includes("8-4-4") || c.includes("kcse"))) return ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Standard 8","Form 1","Form 2","Form 3","Form 4"];
  return nationalLevelStructures[countryName] || [];
}
function refreshLevelOptions(countryName, curriculumName, input, list){
  if(!input || !list) return;
  const previous=input.value;
  list.replaceChildren();
  levelOptionsFor(countryName,curriculumName).forEach(function(label){const option=document.createElement("option");option.value=label;list.appendChild(option);});
  input.placeholder=list.options.length ? "Choose or type a class / level" : "Enter this country's class / level";
  if(previous && Array.from(list.options).some(function(option){return option.value===previous;})) input.value=previous;
  else input.value=list.options.length ? list.options[0].value : "";
}

function boardsForCountry(name){
  return curriculumByCountry[name] || ["National curriculum / national examinations (confirm board)","Cambridge International","Pearson Edexcel","IB"];
}
function setCurriculumOptions(countryEl, curriculumEl, preferred){
  if(!countryEl || !curriculumEl) return;
  const boards=boardsForCountry(countryEl.value);
  curriculumEl.replaceChildren();
  const prompt=document.createElement("option"); prompt.value=""; prompt.textContent="Select curriculum / examination board"; curriculumEl.appendChild(prompt);
  boards.forEach(function(board){const option=document.createElement("option");option.value=board;option.textContent=board;curriculumEl.appendChild(option);});
  if(preferred && !boards.includes(preferred)){const option=document.createElement("option");option.value=preferred;option.textContent=preferred+" (from link)";curriculumEl.appendChild(option);}
  curriculumEl.value=preferred && (boards.includes(preferred)||curriculumEl.querySelector('option[value="'+CSS.escape(preferred)+'"]')) ? preferred : (countryEl.value==="Kenya" ? "Kenya CBC/CBE" : boards[0]);
}
  const initialParams = new URLSearchParams(window.location.search);
  if (country && initialParams.get("country")) country.value = initialParams.get("country");
  if (country && curriculum) setCurriculumOptions(country,curriculum,initialParams.get("curriculum") || (country.value==="Kenya" ? "Kenya CBC/CBE" : ""));
  if (country && curriculum) country.addEventListener("change",function(){setCurriculumOptions(country,curriculum,"");refreshLevelOptions(country.value,curriculum.value,grade,gradeList);});

  const learnerId = document.getElementById("quizLearnerIdInput");
  const grade = document.getElementById("quizGradeInput");
  const gradeList=document.getElementById("quizGradeOptions");
  if(country && curriculum && grade) refreshLevelOptions(country.value,curriculum.value,grade,gradeList);
  if(country && curriculum) curriculum.addEventListener("change",function(){refreshLevelOptions(country.value,curriculum.value,grade,gradeList);});
  const subject = document.getElementById("quizSubjectInput");
  const strand = document.getElementById("quizStrandInput");
  const subStrand = document.getElementById("quizSubStrandInput");
  const contentCovered = document.getElementById("quizContentCovered");
  const outcome = document.getElementById("quizOutcomeInput");
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

  const questionSetter = document.getElementById("questionSetter");
  const toggleQuestionSetterButton = document.getElementById("toggleQuestionSetterButton");
  const setQuestionText = document.getElementById("setQuestionText");
  const setOptionA = document.getElementById("setOptionA");
  const setOptionB = document.getElementById("setOptionB");
  const setOptionC = document.getElementById("setOptionC");
  const setOptionD = document.getElementById("setOptionD");
  const setCorrectAnswer = document.getElementById("setCorrectAnswer");
  const setContentCovered = document.getElementById("setContentCovered");
  const setExplanation = document.getElementById("setExplanation");
  const saveSetQuestionButton = document.getElementById("saveSetQuestionButton");
  const clearSetQuestionButton = document.getElementById("clearSetQuestionButton");
  const questionSetterStatus = document.getElementById("questionSetterStatus");
  const setQuestionsList = document.getElementById("setQuestionsList");

  // Support any national grade, class, form, year or examination-level label.
  // Select elements retain a fallback option list; the learner-facing input accepts custom labels.
  if (grade && grade.tagName === "SELECT") {
    grade.innerHTML = "";
    grades.forEach((g) => {
      const option = document.createElement("option");
      option.value = g;
      option.textContent = g;
      grade.appendChild(option);
    });
    grade.value = initialParams.get("level") && grades.includes(initialParams.get("level")) ? initialParams.get("level") : "Grade 7";
  } else if (grade) {
    grade.value = initialParams.get("level") || grade.value || "Grade 7";
  }
  // Subject options are initialized after gradeSubjects is declared below.

  // Keep the selected grade visible and usable whenever the learner changes it.
  [country, curriculum].filter(Boolean).forEach((field) => field.addEventListener("change", () => {
    refreshSubjectOptions();
    refreshStrandOptions();
    renderSetQuestions();
    if (instructions) instructions.textContent = country.value + " · " + curriculum.value + " selected. Choose level and subject.";
  }));
  grade.addEventListener("change", () => {
    refreshSubjectOptions();
    refreshStrandOptions();
    renderSetQuestions();
    if (instructions) {
      instructions.textContent = grade.value + " " + subject.value + " selected. Choose a strand/topic or All Topics, then click Start / Restart Quiz.";
    }
  });
  if (subject) {
    subject.addEventListener("change", () => {
      refreshStrandOptions();
      renderSetQuestions();
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " selected. Choose a strand/topic or All Topics, then click Start / Restart Quiz.";
      }
    });
  }
  if (strand) {
    strand.addEventListener("change", () => {
      refreshOutcomeOptions();
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " — " + strand.value + " selected. Choose a specific learning outcome or All Learning Outcomes, then click Start / Restart Quiz.";
      }
    });
  }
  if (subStrand) {
    subStrand.addEventListener("change", () => {
      updateCurriculumContent();
      refreshOutcomeOptions();
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " — " + strand.value + " — " + subStrand.value + " selected. Choose a specific learning outcome or All Learning Outcomes, then click Start / Restart Quiz.";
      }
    });
  }
  if (outcome) {
    outcome.addEventListener("change", () => {
      if (instructions) {
        instructions.textContent = grade.value + " " + subject.value + " — " + strand.value + " — " + outcome.value + " selected. Click Start / Restart Quiz.";
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
  // Kenya CBC/CBE subject map based on the current KICD curriculum-design
  // structure. Optional languages/religious options are kept as separate choices.
  const gradeSubjects = {
    lower: [
      "Mathematics","English Activities","Kiswahili",
      "Environmental Activities","Creative Activities",
      "Christian Religious Education","Islamic Religious Education",
      "Hindu Religious Education"
    ],
    upper: [
      "Mathematics","English","Kiswahili","Science & Technology",
      "Social Studies","Agriculture","Creative Arts",
      "Christian Religious Education","Islamic Religious Education",
      "Hindu Religious Education","Arabic","French","German",
      "Mandarin","Indigenous Language"
    ],
    junior: [
      "English","Kiswahili","Mathematics","Integrated Science",
      "Health Education","Pre-Technical Studies","Social Studies",
      "Religious Education","Business Studies","Agriculture",
      "Life Skills Education","Sports & Physical Education",
      "Visual Arts","Performing Arts","Home Science","Computer Science",
      "French","German","Mandarin","Arabic","Kenyan Sign Language",
      "Indigenous Languages"
    ],
    senior: [
      "English","Kiswahili","Core Mathematics","Essential Mathematics",
      "Community Service Learning","Biology","Chemistry","Physics",
      "General Science","Agriculture","Computer Studies","Home Science",
      "Aviation","Building Construction","Electricity","Metalwork",
      "Power Mechanics","Wood Technology","Media Technology",
      "Marine & Fisheries Technology","Business Studies",
      "History & Citizenship","Geography","Literature in English",
      "Indigenous Languages","Fasihi ya Kiswahili","Sign Language",
      "Arabic","French","German","Mandarin Chinese",
      "Christian Religious Education","Islamic Religious Education",
      "Hindu Religious Education","Sports & Recreation",
      "Music & Dance","Theatre & Film","Fine Arts"
    ]
  };

  // Initialize subject options only after gradeSubjects has been created.
  refreshSubjectOptions();

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
    const selectedCountry = String(country && country.value || "").trim().toLowerCase();
    const selectedCurriculum = String(curriculum && curriculum.value || "").trim().toLowerCase();
    if (selectedCountry === "ethiopia" && selectedCurriculum === "ethiopia ministry of education curriculum / ethiopian general school leaving examination" && n === 9) {
      return ["Biology","Chemistry","Mathematics","Physics"];
    }
    if (selectedCountry === "eritrea" && selectedCurriculum === "eritrea ministry of education national curriculum / secondary education certificate examination (esece)" && n === 9) {
      return ["Biology","Chemistry","Mathematics","Physics","English Language"];
    }
    return n <= 3 ? gradeSubjects.lower : n <= 6 ? gradeSubjects.upper : n <= 9 ? gradeSubjects.junior : gradeSubjects.senior;
  }

  function getAvailableQuestions(selectedGrade, selectedSubject) {
    const selectedCountry = String(country && country.value || "Kenya").trim().toLowerCase();
    const selectedCurriculum = String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase();
    const isKenyaCbc = selectedCountry === "kenya" && selectedCurriculum === "kenya cbc/cbe";
    const isNigeriaNERDC = selectedCountry === "nigeria" && selectedCurriculum === "nigeria nerdc curriculum / waec / neco";
    const isTanzaniaTIE = selectedCountry === "tanzania" && selectedCurriculum === "tanzania tie curriculum / necta";
    const isEstoniaNational = selectedCountry === "estonia" && selectedCurriculum === "estonia national curriculum (basic school) / harno";
    const isLatviaNational = selectedCountry === "latvia" && selectedCurriculum === "latvia national basic education standard / skola2030";
    const isLithuaniaNational = selectedCountry === "lithuania" && selectedCurriculum === "lithuanian national curriculum / general programmes (v-1269)";
    const isLuxembourgESC = selectedCountry === "luxembourg" && selectedCurriculum === "luxembourg national curriculum / classical secondary education (esc)";
    const isMaltaNational = selectedCountry === "malta" && selectedCurriculum === "malta national curriculum framework / learning outcomes framework / secondary year 9";
    const isMauritiusNational = selectedCountry === "mauritius" && selectedCurriculum === "mauritius national curriculum framework grades 7–9 / national certificate of education (nce)";
    const isMauritaniaNational = selectedCountry === "mauritania" && selectedCurriculum === "mauritania national curriculum / new republican school (école républicaine) — secondary supplementary pathway";
    const isMexicoNational = selectedCountry === "mexico" && selectedCurriculum === "mexico sep plan de estudio 2022 / fase 6 (secondary)";
    const isMicronesiaNational = selectedCountry === "micronesia" && selectedCurriculum === "federated states of micronesia national curriculum standards and benchmarks / secondary supplementary";
    const isMoldovaNational = selectedCountry === "moldova" && selectedCurriculum === "moldova national curriculum / gymnasium (grades v–ix)";
    const isMonacoNational = selectedCountry === "monaco" && selectedCurriculum === "monaco national education programme / french national programmes with monaco-specific history";
    const ismarshallislandsNational = selectedCountry === "marshall islands" && selectedCurriculum === "marshall islands public school system curriculum / misat grade 8";
    const ismongoliaNational = selectedCountry === "mongolia" && selectedCurriculum === "mongolia national core curriculum for basic education (2019) / grade 9";
    const ismontenegroNational = selectedCountry === "montenegro" && selectedCurriculum === "montenegro publicly valid nine-year basic education programme / grade ix";
    const ismoroccoNational = selectedCountry === "morocco" && selectedCurriculum === "morocco national curriculum / common core secondary (tronc commun scientifique) — supplementary";
    const ismozambiqueNational = selectedCountry === "mozambique" && selectedCurriculum === "mozambique secondary education curriculum plan / 10th class (2nd cycle)";
    const ismyanmarNational = selectedCountry === "myanmar" && selectedCurriculum === "myanmar basic education curriculum / grade 9 — supplementary pathway";
    const isnamibiaNational = selectedCountry === "namibia" && selectedCurriculum === "namibia national curriculum for basic education / junior secondary grade 9";
    const isnauruNational = selectedCountry === "nauru" && selectedCurriculum === "nauru national curriculum / year 10 — supplementary learning strands";
    const isnepalNational = selectedCountry === "nepal" && selectedCurriculum === "nepal secondary education curriculum 2078 / grade 9 — compulsory subjects";
    const isnetherlandsNational = selectedCountry === "netherlands" && selectedCurriculum === "netherlands slo core objectives / lower secondary (vo onderbouw) — supplementary";
    const isnewzealandNational = selectedCountry === "new zealand" && selectedCurriculum === "new zealand national curriculum statement 2026 / te mātaiaho / year 10";
    const isnicaraguaNational = selectedCountry === "nicaragua" && selectedCurriculum === "nicaragua regular secondary education / 9° (fourth cycle)";
    const isnigerNational = selectedCountry === "niger" && selectedCurriculum === "niger general secondary education / second cycle (lycée) — official programme reference";
    const isnorthkoreaNational = selectedCountry === "north korea" && selectedCurriculum === "dpr korea 12-year compulsory education / lower secondary year 3 — supplementary";
    const isnorthmacedoniaNational = selectedCountry === "north macedonia" && selectedCurriculum === "north macedonia primary education concept / grade ix — supplementary subject starters";
    const isnorwayNational = selectedCountry.toLowerCase() === "norway" && selectedCurriculum.toLowerCase() === "norway national curriculum / kunnskapsløftet 2020 (lk20) / year 10";
    const isomanNational = selectedCountry.toLowerCase() === "oman" && selectedCurriculum.toLowerCase() === "oman ministry of education curriculum frameworks 2026 / grade 10";
    const ispakistanNational = selectedCountry.toLowerCase() === "pakistan" && selectedCurriculum.toLowerCase() === "pakistan national curriculum 2026 (ncp-2026) / grade 9 — federal & ict scope";
    const ispalauNational = selectedCountry.toLowerCase() === "palau" && selectedCurriculum.toLowerCase() === "palau ministry of education curriculum frameworks / grade 9 — supplementary";
    const ispanamaNational = selectedCountry.toLowerCase() === "panama" && selectedCurriculum.toLowerCase() === "panama meduca educación básica general / premedia 9°";
    const ispapuanewguineaNational = selectedCountry.toLowerCase() === "papua new guinea" && selectedCurriculum.toLowerCase() === "png national curriculum / grade 10 & 12 national examinations";
    const isparaguayNational = selectedCountry.toLowerCase() === "paraguay" && selectedCurriculum.toLowerCase() === "paraguay educación escolar básica / tercer ciclo / 9° grado";
    const isperuNational = selectedCountry.toLowerCase() === "peru" && selectedCurriculum.toLowerCase() === "perú currículo nacional de la educación básica / educación secundaria / 3°";
    const isphilippinesNational = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped k to 12 / matatag";
    const ispolandNational = selectedCountry.toLowerCase() === "poland" && selectedCurriculum.toLowerCase() === "poland podstawa programowa / szkoła podstawowa / klasa viii";
    const isportugalNational = selectedCountry.toLowerCase() === "portugal" && selectedCurriculum.toLowerCase() === "portugal aprendizagens essenciais / 3.º ciclo / 9.º ano";
    const isqatarNational = selectedCountry.toLowerCase() === "qatar" && selectedCurriculum.toLowerCase() === "qatar national curriculum / preparatory stage / grade 9";
    const isromaniaNational = selectedCountry.toLowerCase() === "romania" && selectedCurriculum.toLowerCase() === "romania national curriculum / gimnaziu / grade viii";
    const isrussiaNational = selectedCountry.toLowerCase() === "russia" && selectedCurriculum.toLowerCase() === "russian federal state educational standards / basic general education / grade 9";
    const issaintkittsNational = selectedCountry.toLowerCase() === "saint kitts and nevis" && selectedCurriculum.toLowerCase() === "saint kitts and nevis secondary education / form 3 / csec preparation pathway";
    const issaintluciaNational = selectedCountry.toLowerCase() === "saint lucia" && selectedCurriculum.toLowerCase() === "saint lucia national curriculum / lower secondary / form 3";
    const issaintvincentNational = selectedCountry.toLowerCase() === "saint vincent and the grenadines" && selectedCurriculum.toLowerCase() === "saint vincent and the grenadines national curriculum / secondary form 3 / csec pathway";
    const issamoaNational = selectedCountry.toLowerCase() === "samoa" && selectedCurriculum.toLowerCase() === "samoa national curriculum / secondary year 9";
    const issanmarinoNational = selectedCountry.toLowerCase() === "san marino" && selectedCurriculum.toLowerCase() === "san marino scuola media / classe terza";
    const issaotomeNational = selectedCountry.toLowerCase() === "sao tome and principe" && selectedCurriculum.toLowerCase() === "sao tome and principe national curriculum / 9ª classe / ensino básico 7ª–9ª";
    const isNinthsaudiarabia = selectedCountry.toLowerCase() === "saudi arabia" && selectedCurriculum.toLowerCase() === "saudi ministry of education curriculum / intermediate grade 9 / third intermediate";
    const isTenthsingapore = selectedCountry.toLowerCase() === "singapore" && selectedCurriculum.toLowerCase() === "singapore moe lower secondary curriculum / secondary 2 / g2-g3";
    const isTenthslovakia = selectedCountry.toLowerCase() === "slovakia" && selectedCurriculum.toLowerCase() === "slovakia state educational programme for basic education / 9th grade";
    const isTenthslovenia = selectedCountry.toLowerCase() === "slovenia" && selectedCurriculum.toLowerCase() === "slovenia basic school national curriculum / 9th grade";
    const isTenthsolomonislands = selectedCountry.toLowerCase() === "solomon islands" && selectedCurriculum.toLowerCase() === "solomon islands national curriculum / junior secondary year 9 / form 3";
    const isTenthsomalia = selectedCountry.toLowerCase() === "somalia" && selectedCurriculum.toLowerCase() === "somalia national education curriculum / secondary form 1 (grade 9)";
    const isEleventhsouthafrica = selectedCountry.toLowerCase() === "south africa" && selectedCurriculum.toLowerCase() === "south africa caps / senior phase / grade 9";
    const isEleventhsouthkorea = selectedCountry.toLowerCase() === "south korea" && selectedCurriculum.toLowerCase() === "south korea 2022 revised national curriculum / middle school grade 3";
    const isEleventhsouthsudan = selectedCountry.toLowerCase() === "south sudan" && selectedCurriculum.toLowerCase() === "south sudan national general education policy / national curriculum framework (secondary supplementary)";
    const isEleventhspain = selectedCountry.toLowerCase() === "spain" && selectedCurriculum.toLowerCase() === "spain lomloe / educación secundaria obligatoria / 3º eso";
    const isEleventhsrilanka = selectedCountry.toLowerCase() === "sri lanka" && selectedCurriculum.toLowerCase() === "sri lanka national curriculum / grade 9 (current syllabus; reform transition noted)";
    const isTwelfthsudan = selectedCountry.toLowerCase() === "sudan" && selectedCurriculum.toLowerCase() === "sudan ministry of education curriculum / intermediate stage / third intermediate";
    const isTwelfthsuriname = selectedCountry.toLowerCase() === "suriname" && selectedCurriculum.toLowerCase() === "suriname minowc / secondary education / leerjaar 9 istreams";
    const isTwelfthsweden = selectedCountry.toLowerCase() === "sweden" && selectedCurriculum.toLowerCase() === "sweden national curriculum lgr22 / compulsory school / year 9";
    const isTwelfthswitzerland = selectedCountry.toLowerCase() === "switzerland" && selectedCurriculum.toLowerCase() === "switzerland cantonal curriculum / lower secondary cycle 3 / final year";
    const isTwelfthsyria = selectedCountry.toLowerCase() === "syria" && selectedCurriculum.toLowerCase() === "syria ministry of education / national curriculum / grade 9";
    const isThirteenthtajikistan = selectedCountry.toLowerCase() === "tajikistan" && selectedCurriculum.toLowerCase() === "tajikistan state standard of general education / basic general education / grade 9";
    const isThirteenthtanzania = selectedCountry.toLowerCase() === "tanzania" && selectedCurriculum.toLowerCase() === "tanzania tie curriculum for ordinary secondary education / form ii (2023)";
    const isThirteenththailand = selectedCountry.toLowerCase() === "thailand" && selectedCurriculum.toLowerCase() === "thailand basic education core curriculum b.e. 2551 (2008), revised 2017 / matthayom 3";
    const isThirteenthtimorleste = selectedCountry.toLowerCase() === "timor-leste" && selectedCurriculum.toLowerCase() === "timor-leste national basic education curriculum / third cycle / grade 9 (2024 revised framework)";
    const isThirteenthtogo = selectedCountry.toLowerCase() === "togo" && selectedCurriculum.toLowerCase() === "togo national curriculum / collège / classe de troisième (3e)";
    const isFourteenthbenin = selectedCountry.toLowerCase() === "benin" && selectedCurriculum.toLowerCase() === "benin national curriculum / enseignement secondaire général / classe de troisième (3e)";
    const isFifteenthlaos = selectedCountry.toLowerCase() === "laos" && selectedCurriculum.toLowerCase() === "lao national curriculum for lower secondary education / grade 9";
    const isFifteenthmalaysia = selectedCountry.toLowerCase() === "malaysia" && selectedCurriculum.toLowerCase() === "malaysia kssm / secondary school standard curriculum / form 3";
    const isFifteenthmongolia = selectedCountry.toLowerCase() === "mongolia" && selectedCurriculum.toLowerCase() === "mongolia general education curriculum / basic education / grade 9";
    const isFifteenthnorthkorea = selectedCountry.toLowerCase() === "north korea" && selectedCurriculum.toLowerCase() === "dpr korea general education system / lower secondary / year 3 (grade 9) — supplementary pathway";
    const isFifteenthphilippines = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped revised k to 10 / matatag curriculum / grade 9 (sy 2026–2027)";
    const isSixteenthvietnam = selectedCountry.toLowerCase() === "vietnam" && selectedCurriculum.toLowerCase() === "vietnam general education curriculum 2018 / lower secondary / grade 9";
    const isSixteenthbrunei = selectedCountry.toLowerCase() === "brunei" && selectedCurriculum.toLowerCase() === "brunei spn21 / general secondary education programme / year 9";
    const isSixteenthkazakhstan = selectedCountry.toLowerCase() === "kazakhstan" && selectedCurriculum.toLowerCase() === "kazakhstan state compulsory education standard / basic secondary / grade 9";
    const isSixteenthkyrgyzstan = selectedCountry.toLowerCase() === "kyrgyzstan" && selectedCurriculum.toLowerCase() === "kyrgyz republic state educational standard / basic general education / grade 9";
    const isSixteenthturkmenistan = selectedCountry.toLowerCase() === "turkmenistan" && selectedCurriculum.toLowerCase() === "turkmenistan general education programme / basic secondary / grade 9";
    const isFourteenthcambodia = selectedCountry.toLowerCase() === "cambodia" && selectedCurriculum.toLowerCase() === "cambodia moeys general education curriculum framework / lower secondary / grade 9";
    const isFourteenthchina = selectedCountry.toLowerCase() === "china" && selectedCurriculum.toLowerCase() === "china ministry of education compulsory education curriculum standards (2022) / grade 9";
    const isFourteenthindonesia = selectedCountry.toLowerCase() === "indonesia" && selectedCurriculum.toLowerCase() === "indonesia national curriculum / grade ix (kelas ix) / kurikulum merdeka and transition provisions";
    const isFourteenthjapan = selectedCountry.toLowerCase() === "japan" && selectedCurriculum.toLowerCase() === "japan mext courses of study / lower secondary school / year 3 (grade 9)";
    const isNinthsenegal = selectedCountry.toLowerCase() === "senegal" && selectedCurriculum.toLowerCase() === "senegal national curriculum / collège / troisième (3e)";
    const isNinthserbia = selectedCountry.toLowerCase() === "serbia" && selectedCurriculum.toLowerCase() === "serbia national curriculum / primary education / grade 8";
    const isNinthseychelles = selectedCountry.toLowerCase() === "seychelles" && selectedCurriculum.toLowerCase() === "seychelles national curriculum framework / secondary 3 (s3)";
    const isNinthsierraleone = selectedCountry.toLowerCase() === "sierra leone" && selectedCurriculum.toLowerCase() === "sierra leone mbsse national senior secondary curriculum framework / sss 1 / sciences and technologies";
    const isNinthFiveNational = isNinthsaudiarabia || isNinthsenegal || isNinthserbia || isNinthseychelles || isNinthsierraleone;
    const isTenthFiveNational = isTenthsingapore || isTenthslovakia || isTenthslovenia || isTenthsolomonislands || isTenthsomalia;
    const isEleventhFiveNational = isEleventhsouthafrica || isEleventhsouthkorea || isEleventhsouthsudan || isEleventhspain || isEleventhsrilanka;
    const isTwelfthFiveNational = isTwelfthsudan || isTwelfthsuriname || isTwelfthsweden || isTwelfthswitzerland || isTwelfthsyria;
    const isThirteenthFiveNational = isThirteenthtajikistan || isThirteenthtanzania || isThirteenththailand || isThirteenthtimorleste || isThirteenthtogo;
    const isFourteenthFiveNational = isFourteenthbenin || isFourteenthcambodia || isFourteenthchina || isFourteenthindonesia || isFourteenthjapan;
    const isFifteenthFiveNational = isFifteenthlaos || isFifteenthmalaysia || isFifteenthmongolia || isFifteenthnorthkorea || isFifteenthphilippines;
    const isSixteenthFiveNational = isSixteenthvietnam || isSixteenthbrunei || isSixteenthkazakhstan || isSixteenthkyrgyzstan || isSixteenthturkmenistan;
    const isEthiopiaMoE = selectedCountry === "ethiopia" && selectedCurriculum === "ethiopia ministry of education curriculum / ethiopian general school leaving examination";
    const isEritreaMoE = selectedCountry === "eritrea" && selectedCurriculum === "eritrea ministry of education national curriculum / secondary education certificate examination (esece)";
    if (isKenyaCbc) {
      const gradeBank = window.CBENexusCBCBanks && window.CBENexusCBCBanks.banks && window.CBENexusCBCBanks.banks[selectedGrade] && window.CBENexusCBCBanks.banks[selectedGrade][selectedSubject];
      return Array.isArray(gradeBank) ? gradeBank.slice() : [];
    }
    if (isNigeriaNERDC) {
      const gradeBank = window.CBENexusNigeriaBanks && window.CBENexusNigeriaBanks.banks && window.CBENexusNigeriaBanks.banks[selectedGrade] && window.CBENexusNigeriaBanks.banks[selectedGrade][selectedSubject];
      return Array.isArray(gradeBank) ? gradeBank.slice() : [];
    }
    if (isTanzaniaTIE) { const gradeBank = window.CBENexusTanzaniaBanks && window.CBENexusTanzaniaBanks.banks && window.CBENexusTanzaniaBanks.banks[selectedGrade] && window.CBENexusTanzaniaBanks.banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEthiopiaMoE) { const gradeBank = window.CBENexusEthiopiaBanks && window.CBENexusEthiopiaBanks.banks && window.CBENexusEthiopiaBanks.banks[selectedGrade] && window.CBENexusEthiopiaBanks.banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEritreaMoE) { const gradeBank = window.CBENexusEritreaBanks && window.CBENexusEritreaBanks.banks && window.CBENexusEritreaBanks.banks[selectedGrade] && window.CBENexusEritreaBanks.banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMauritiusNational) { const gradeBank = window.CBENexusMauritiusBanks && window.CBENexusMauritiusBanks.banks && window.CBENexusMauritiusBanks.banks[selectedGrade] && window.CBENexusMauritiusBanks.banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMauritaniaNational) { const gradeBank = window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mauritania"] && window.CBENexusFiveCountryBanks["Mauritania"].banks && window.CBENexusFiveCountryBanks["Mauritania"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Mauritania"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMexicoNational) { const gradeBank = window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mexico"] && window.CBENexusFiveCountryBanks["Mexico"].banks && window.CBENexusFiveCountryBanks["Mexico"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Mexico"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMicronesiaNational) { const gradeBank = window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Micronesia"] && window.CBENexusFiveCountryBanks["Micronesia"].banks && window.CBENexusFiveCountryBanks["Micronesia"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Micronesia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMoldovaNational) { const gradeBank = window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Moldova"] && window.CBENexusFiveCountryBanks["Moldova"].banks && window.CBENexusFiveCountryBanks["Moldova"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Moldova"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isMonacoNational) { const gradeBank = window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Monaco"] && window.CBENexusFiveCountryBanks["Monaco"].banks && window.CBENexusFiveCountryBanks["Monaco"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Monaco"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismarshallislandsNational) { const gradeBank = window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Marshall Islands"] && window.CBENexusNextFiveBanks["Marshall Islands"].banks && window.CBENexusNextFiveBanks["Marshall Islands"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Marshall Islands"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismongoliaNational) { const gradeBank = window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mongolia"] && window.CBENexusNextFiveBanks["Mongolia"].banks && window.CBENexusNextFiveBanks["Mongolia"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Mongolia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismontenegroNational) { const gradeBank = window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Montenegro"] && window.CBENexusNextFiveBanks["Montenegro"].banks && window.CBENexusNextFiveBanks["Montenegro"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Montenegro"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismoroccoNational) { const gradeBank = window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Morocco"] && window.CBENexusNextFiveBanks["Morocco"].banks && window.CBENexusNextFiveBanks["Morocco"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Morocco"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismozambiqueNational) { const gradeBank = window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mozambique"] && window.CBENexusNextFiveBanks["Mozambique"].banks && window.CBENexusNextFiveBanks["Mozambique"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Mozambique"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ismyanmarNational) { const gradeBank = window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Myanmar"] && window.CBENexusThirdFiveBanks["Myanmar"].banks && window.CBENexusThirdFiveBanks["Myanmar"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Myanmar"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnamibiaNational) { const gradeBank = window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Namibia"] && window.CBENexusThirdFiveBanks["Namibia"].banks && window.CBENexusThirdFiveBanks["Namibia"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Namibia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnauruNational) { const gradeBank = window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nauru"] && window.CBENexusThirdFiveBanks["Nauru"].banks && window.CBENexusThirdFiveBanks["Nauru"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Nauru"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnepalNational) { const gradeBank = window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nepal"] && window.CBENexusThirdFiveBanks["Nepal"].banks && window.CBENexusThirdFiveBanks["Nepal"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Nepal"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnetherlandsNational) { const gradeBank = window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Netherlands"] && window.CBENexusThirdFiveBanks["Netherlands"].banks && window.CBENexusThirdFiveBanks["Netherlands"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Netherlands"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnewzealandNational) { const gradeBank = window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["New Zealand"] && window.CBENexusFourthFiveBanks["New Zealand"].banks && window.CBENexusFourthFiveBanks["New Zealand"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["New Zealand"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnicaraguaNational) { const gradeBank = window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Nicaragua"] && window.CBENexusFourthFiveBanks["Nicaragua"].banks && window.CBENexusFourthFiveBanks["Nicaragua"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["Nicaragua"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnigerNational) { const gradeBank = window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Niger"] && window.CBENexusFourthFiveBanks["Niger"].banks && window.CBENexusFourthFiveBanks["Niger"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["Niger"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnorthkoreaNational) { const gradeBank = window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Korea"] && window.CBENexusFourthFiveBanks["North Korea"].banks && window.CBENexusFourthFiveBanks["North Korea"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["North Korea"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnorthmacedoniaNational) { const gradeBank = window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Macedonia"] && window.CBENexusFourthFiveBanks["North Macedonia"].banks && window.CBENexusFourthFiveBanks["North Macedonia"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["North Macedonia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isnorwayNational) { const gradeBank = window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Norway"] && window.CBENexusFifthFiveBanks["Norway"].banks && window.CBENexusFifthFiveBanks["Norway"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Norway"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isomanNational) { const gradeBank = window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Oman"] && window.CBENexusFifthFiveBanks["Oman"].banks && window.CBENexusFifthFiveBanks["Oman"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Oman"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ispakistanNational) { const gradeBank = window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Pakistan"] && window.CBENexusFifthFiveBanks["Pakistan"].banks && window.CBENexusFifthFiveBanks["Pakistan"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Pakistan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ispalauNational) { const gradeBank = window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Palau"] && window.CBENexusFifthFiveBanks["Palau"].banks && window.CBENexusFifthFiveBanks["Palau"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Palau"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ispanamaNational) { const gradeBank = window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Panama"] && window.CBENexusFifthFiveBanks["Panama"].banks && window.CBENexusFifthFiveBanks["Panama"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Panama"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ispapuanewguineaNational) { const gradeBank = window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Papua New Guinea"] && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isparaguayNational) { const gradeBank = window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Paraguay"] && window.CBENexusSixthFiveBanks["Paraguay"].banks && window.CBENexusSixthFiveBanks["Paraguay"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Paraguay"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isperuNational) { const gradeBank = window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Peru"] && window.CBENexusSixthFiveBanks["Peru"].banks && window.CBENexusSixthFiveBanks["Peru"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Peru"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isphilippinesNational) { const gradeBank = window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Philippines"] && window.CBENexusSixthFiveBanks["Philippines"].banks && window.CBENexusSixthFiveBanks["Philippines"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Philippines"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (ispolandNational) { const gradeBank = window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Poland"] && window.CBENexusSixthFiveBanks["Poland"].banks && window.CBENexusSixthFiveBanks["Poland"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Poland"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isportugalNational) { const gradeBank = window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Portugal"] && window.CBENexusSeventhFiveBanks["Portugal"].banks && window.CBENexusSeventhFiveBanks["Portugal"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Portugal"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isqatarNational) { const gradeBank = window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Qatar"] && window.CBENexusSeventhFiveBanks["Qatar"].banks && window.CBENexusSeventhFiveBanks["Qatar"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Qatar"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isromaniaNational) { const gradeBank = window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Romania"] && window.CBENexusSeventhFiveBanks["Romania"].banks && window.CBENexusSeventhFiveBanks["Romania"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Romania"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isrussiaNational) { const gradeBank = window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Russia"] && window.CBENexusSeventhFiveBanks["Russia"].banks && window.CBENexusSeventhFiveBanks["Russia"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Russia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (issaintkittsNational) { const gradeBank = window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"] && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }

    if (isNinthsaudiarabia) { const gradeBank = window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Saudi Arabia"] && window.CBENexusNinthFiveBanks["Saudi Arabia"].banks && window.CBENexusNinthFiveBanks["Saudi Arabia"].banks[selectedGrade] && window.CBENexusNinthFiveBanks["Saudi Arabia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isNinthsenegal) { const gradeBank = window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Senegal"] && window.CBENexusNinthFiveBanks["Senegal"].banks && window.CBENexusNinthFiveBanks["Senegal"].banks[selectedGrade] && window.CBENexusNinthFiveBanks["Senegal"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isNinthserbia) { const gradeBank = window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Serbia"] && window.CBENexusNinthFiveBanks["Serbia"].banks && window.CBENexusNinthFiveBanks["Serbia"].banks[selectedGrade] && window.CBENexusNinthFiveBanks["Serbia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isNinthseychelles) { const gradeBank = window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Seychelles"] && window.CBENexusNinthFiveBanks["Seychelles"].banks && window.CBENexusNinthFiveBanks["Seychelles"].banks[selectedGrade] && window.CBENexusNinthFiveBanks["Seychelles"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isNinthsierraleone) { const gradeBank = window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Sierra Leone"] && window.CBENexusNinthFiveBanks["Sierra Leone"].banks && window.CBENexusNinthFiveBanks["Sierra Leone"].banks[selectedGrade] && window.CBENexusNinthFiveBanks["Sierra Leone"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTenthsingapore) { const gradeBank = window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Singapore"] && window.CBENexusTenthFiveBanks["Singapore"].banks && window.CBENexusTenthFiveBanks["Singapore"].banks[selectedGrade] && window.CBENexusTenthFiveBanks["Singapore"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTenthslovakia) { const gradeBank = window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Slovakia"] && window.CBENexusTenthFiveBanks["Slovakia"].banks && window.CBENexusTenthFiveBanks["Slovakia"].banks[selectedGrade] && window.CBENexusTenthFiveBanks["Slovakia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTenthslovenia) { const gradeBank = window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Slovenia"] && window.CBENexusTenthFiveBanks["Slovenia"].banks && window.CBENexusTenthFiveBanks["Slovenia"].banks[selectedGrade] && window.CBENexusTenthFiveBanks["Slovenia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTenthsolomonislands) { const gradeBank = window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Solomon Islands"] && window.CBENexusTenthFiveBanks["Solomon Islands"].banks && window.CBENexusTenthFiveBanks["Solomon Islands"].banks[selectedGrade] && window.CBENexusTenthFiveBanks["Solomon Islands"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTenthsomalia) { const gradeBank = window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Somalia"] && window.CBENexusTenthFiveBanks["Somalia"].banks && window.CBENexusTenthFiveBanks["Somalia"].banks[selectedGrade] && window.CBENexusTenthFiveBanks["Somalia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEleventhsouthafrica) { const gradeBank = window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Africa"] && window.CBENexusEleventhFiveBanks["South Africa"].banks && window.CBENexusEleventhFiveBanks["South Africa"].banks[selectedGrade] && window.CBENexusEleventhFiveBanks["South Africa"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEleventhsouthkorea) { const gradeBank = window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Korea"] && window.CBENexusEleventhFiveBanks["South Korea"].banks && window.CBENexusEleventhFiveBanks["South Korea"].banks[selectedGrade] && window.CBENexusEleventhFiveBanks["South Korea"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEleventhsouthsudan) { const gradeBank = window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Sudan"] && window.CBENexusEleventhFiveBanks["South Sudan"].banks && window.CBENexusEleventhFiveBanks["South Sudan"].banks[selectedGrade] && window.CBENexusEleventhFiveBanks["South Sudan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEleventhspain) { const gradeBank = window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["Spain"] && window.CBENexusEleventhFiveBanks["Spain"].banks && window.CBENexusEleventhFiveBanks["Spain"].banks[selectedGrade] && window.CBENexusEleventhFiveBanks["Spain"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isEleventhsrilanka) { const gradeBank = window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["Sri Lanka"] && window.CBENexusEleventhFiveBanks["Sri Lanka"].banks && window.CBENexusEleventhFiveBanks["Sri Lanka"].banks[selectedGrade] && window.CBENexusEleventhFiveBanks["Sri Lanka"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTwelfthsudan) { const gradeBank = window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Sudan"] && window.CBENexusTwelfthFiveBanks["Sudan"].banks && window.CBENexusTwelfthFiveBanks["Sudan"].banks[selectedGrade] && window.CBENexusTwelfthFiveBanks["Sudan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTwelfthsuriname) { const gradeBank = window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Suriname"] && window.CBENexusTwelfthFiveBanks["Suriname"].banks && window.CBENexusTwelfthFiveBanks["Suriname"].banks[selectedGrade] && window.CBENexusTwelfthFiveBanks["Suriname"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTwelfthsweden) { const gradeBank = window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Sweden"] && window.CBENexusTwelfthFiveBanks["Sweden"].banks && window.CBENexusTwelfthFiveBanks["Sweden"].banks[selectedGrade] && window.CBENexusTwelfthFiveBanks["Sweden"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTwelfthswitzerland) { const gradeBank = window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Switzerland"] && window.CBENexusTwelfthFiveBanks["Switzerland"].banks && window.CBENexusTwelfthFiveBanks["Switzerland"].banks[selectedGrade] && window.CBENexusTwelfthFiveBanks["Switzerland"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isTwelfthsyria) { const gradeBank = window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Syria"] && window.CBENexusTwelfthFiveBanks["Syria"].banks && window.CBENexusTwelfthFiveBanks["Syria"].banks[selectedGrade] && window.CBENexusTwelfthFiveBanks["Syria"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isThirteenthtajikistan) { const gradeBank = window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Tajikistan"] && window.CBENexusThirteenthFiveBanks["Tajikistan"].banks && window.CBENexusThirteenthFiveBanks["Tajikistan"].banks[selectedGrade] && window.CBENexusThirteenthFiveBanks["Tajikistan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isThirteenthtanzania) { const gradeBank = window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Tanzania"] && window.CBENexusThirteenthFiveBanks["Tanzania"].banks && window.CBENexusThirteenthFiveBanks["Tanzania"].banks[selectedGrade] && window.CBENexusThirteenthFiveBanks["Tanzania"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isThirteenththailand) { const gradeBank = window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Thailand"] && window.CBENexusThirteenthFiveBanks["Thailand"].banks && window.CBENexusThirteenthFiveBanks["Thailand"].banks[selectedGrade] && window.CBENexusThirteenthFiveBanks["Thailand"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isThirteenthtimorleste) { const gradeBank = window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Timor-Leste"] && window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks && window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks[selectedGrade] && window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isThirteenthtogo) { const gradeBank = window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Togo"] && window.CBENexusThirteenthFiveBanks["Togo"].banks && window.CBENexusThirteenthFiveBanks["Togo"].banks[selectedGrade] && window.CBENexusThirteenthFiveBanks["Togo"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFourteenthbenin) { const gradeBank = window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Benin"] && window.CBENexusFourteenthFiveBanks["Benin"].banks && window.CBENexusFourteenthFiveBanks["Benin"].banks[selectedGrade] && window.CBENexusFourteenthFiveBanks["Benin"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFourteenthcambodia) { const gradeBank = window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Cambodia"] && window.CBENexusFourteenthFiveBanks["Cambodia"].banks && window.CBENexusFourteenthFiveBanks["Cambodia"].banks[selectedGrade] && window.CBENexusFourteenthFiveBanks["Cambodia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFourteenthchina) { const gradeBank = window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["China"] && window.CBENexusFourteenthFiveBanks["China"].banks && window.CBENexusFourteenthFiveBanks["China"].banks[selectedGrade] && window.CBENexusFourteenthFiveBanks["China"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFourteenthindonesia) { const gradeBank = window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Indonesia"] && window.CBENexusFourteenthFiveBanks["Indonesia"].banks && window.CBENexusFourteenthFiveBanks["Indonesia"].banks[selectedGrade] && window.CBENexusFourteenthFiveBanks["Indonesia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFourteenthjapan) { const gradeBank = window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Japan"] && window.CBENexusFourteenthFiveBanks["Japan"].banks && window.CBENexusFourteenthFiveBanks["Japan"].banks[selectedGrade] && window.CBENexusFourteenthFiveBanks["Japan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFifteenthlaos) { const gradeBank = window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Laos"] && window.CBENexusFifteenthFiveBanks["Laos"].banks && window.CBENexusFifteenthFiveBanks["Laos"].banks[selectedGrade] && window.CBENexusFifteenthFiveBanks["Laos"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFifteenthmalaysia) { const gradeBank = window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Malaysia"] && window.CBENexusFifteenthFiveBanks["Malaysia"].banks && window.CBENexusFifteenthFiveBanks["Malaysia"].banks[selectedGrade] && window.CBENexusFifteenthFiveBanks["Malaysia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFifteenthmongolia) { const gradeBank = window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Mongolia"] && window.CBENexusFifteenthFiveBanks["Mongolia"].banks && window.CBENexusFifteenthFiveBanks["Mongolia"].banks[selectedGrade] && window.CBENexusFifteenthFiveBanks["Mongolia"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFifteenthnorthkorea) { const gradeBank = window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["North Korea"] && window.CBENexusFifteenthFiveBanks["North Korea"].banks && window.CBENexusFifteenthFiveBanks["North Korea"].banks[selectedGrade] && window.CBENexusFifteenthFiveBanks["North Korea"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isFifteenthphilippines) { const gradeBank = window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Philippines"] && window.CBENexusFifteenthFiveBanks["Philippines"].banks && window.CBENexusFifteenthFiveBanks["Philippines"].banks[selectedGrade] && window.CBENexusFifteenthFiveBanks["Philippines"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isSixteenthvietnam) { const gradeBank = window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Vietnam"] && window.CBENexusSixteenthFiveBanks["Vietnam"].banks && window.CBENexusSixteenthFiveBanks["Vietnam"].banks[selectedGrade] && window.CBENexusSixteenthFiveBanks["Vietnam"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isSixteenthbrunei) { const gradeBank = window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Brunei"] && window.CBENexusSixteenthFiveBanks["Brunei"].banks && window.CBENexusSixteenthFiveBanks["Brunei"].banks[selectedGrade] && window.CBENexusSixteenthFiveBanks["Brunei"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isSixteenthkazakhstan) { const gradeBank = window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Kazakhstan"] && window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks && window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks[selectedGrade] && window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isSixteenthkyrgyzstan) { const gradeBank = window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"] && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks[selectedGrade] && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }
    if (isSixteenthturkmenistan) { const gradeBank = window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Turkmenistan"] && window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks && window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks[selectedGrade] && window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks[selectedGrade][selectedSubject]; return Array.isArray(gradeBank) ? gradeBank.slice() : []; }

    return [];
  }

  function getCurriculumItems(selectedGrade, selectedSubject) {
    const isKenyaCbc = String(country && country.value || "Kenya").trim().toLowerCase() === "kenya" && String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase() === "kenya cbc/cbe";
    const map = isKenyaCbc && window.CBENexusCBCBanks &&
      window.CBENexusCBCBanks.curriculum &&
      window.CBENexusCBCBanks.curriculum[selectedGrade] &&
      window.CBENexusCBCBanks.curriculum[selectedGrade][selectedSubject];

    const normalizeQuestionMetadata = () => {
      const questions = getAvailableQuestions(selectedGrade, selectedSubject);
      const groups = new Map();

      // Generic assessment banks do not always have a full KICD hierarchy.
      // In that case expose their subject topics as usable sub-strands under
      // one parent topic group so every subject still has working filters.
      const hasExplicitSubStrandMetadata = questions.some((item) =>
        String(item[6] || "").trim()
      );

      questions.forEach((item) => {
        const topic = String(item[3] || "").trim();
        if (!topic) return;

        const strandId = hasExplicitSubStrandMetadata
          ? String(item[5] || topic).trim()
          : "TOPICS";
        const strandLabel = hasExplicitSubStrandMetadata
          ? String(item[3] || strandId).trim()
          : String(selectedSubject || "Subject Topics").trim();

        if (!groups.has(strandId)) {
          groups.set(strandId, {
            id: strandId,
            label: strandLabel || strandId,
            subStrands: []
          });
        }

        const parent = groups.get(strandId);
        const subId = String(item[6] || topic).trim();
        const subLabel = hasExplicitSubStrandMetadata
          ? subId
          : topic.charAt(0).toUpperCase() + topic.slice(1);

        let sub = parent.subStrands.find((entry) => entry.id === subId);
        if (!sub) {
          sub = {
            id: subId,
            label: subLabel,
            content: [],
            learningOutcomes: []
          };
          parent.subStrands.push(sub);
        }

        const learningOutcome = String(item[7] || "").trim() ||
          "Demonstrate understanding and application of " + topic + ".";
        const content = String(item[8] || "").trim() ||
          "Key concepts and practical application of " + topic + ".";

        if (!sub.learningOutcomes.includes(learningOutcome)) {
          sub.learningOutcomes.push(learningOutcome);
        }
        if (!sub.content.includes(content)) {
          sub.content.push(content);
        }
      });

      return Array.from(groups.values());
    };

    if (Array.isArray(map) && map.length) {
      const raw = map.map((item) => {
        if (typeof item === "string") {
          return { id: item, label: item, subStrands: [] };
        }
        return {
          id: String(item.id || item.label || ""),
          label: String(item.label || item.id || ""),
          strand: String(item.strand || "").trim(),
          content: Array.isArray(item.content) ? item.content : [],
          learningOutcomes: Array.isArray(item.learningOutcomes) ? item.learningOutcomes : [],
          subStrands: Array.isArray(item.subStrands) ? item.subStrands : []
        };
      }).filter((item) => item.id && item.label);

      // Some KICD curriculum data is stored as individual sub-strands with a
      // shared strand field. Convert that flat structure into a hierarchy:
      // Strand -> Sub-Strands -> Learning Outcomes / Content.
      const flatWithStrands = raw.filter((item) => item.strand && !item.subStrands.length);
      if (flatWithStrands.length) {
        const grouped = new Map();

        raw.filter((item) => !item.strand || item.subStrands.length).forEach((item) => {
          if (item.subStrands.length) {
            grouped.set(item.id, {
              id: item.id,
              label: item.label,
              subStrands: item.subStrands
            });
          }
        });

        flatWithStrands.forEach((item) => {
          const strandId = item.strand;
          if (!grouped.has(strandId)) {
            grouped.set(strandId, {
              id: strandId,
              label: strandId,
              subStrands: []
            });
          }
          grouped.get(strandId).subStrands.push({
            id: item.id,
            label: item.label,
            content: item.content,
            learningOutcomes: item.learningOutcomes
          });
        });

        const normalized = Array.from(grouped.values());
        if (normalized.some((item) => item.subStrands.length)) return normalized;
      }

      if (raw.some((item) => item.subStrands.length)) {
        return raw.map((item) => ({
          id: item.id,
          label: item.label,
          subStrands: item.subStrands
        }));
      }
    }

    return normalizeQuestionMetadata();
  }

  function getSelectedCurriculumItem() {
    const items = getCurriculumItems(grade.value, subject.value);
    return items.find((item) => item.id === strand.value) || null;
  }

  function getSelectedSubStrand() {
    const item = getSelectedCurriculumItem();
    if (!item || !Array.isArray(item.subStrands)) return null;
    return item.subStrands.find((entry) => String(entry.id || entry.label) === String(subStrand ? subStrand.value : "")) || null;
  }

  function refreshSubStrandOptions() {
    if (!subStrand) return;
    const item = getSelectedCurriculumItem();
    const list = item && Array.isArray(item.subStrands) ? item.subStrands : [];
    const current = subStrand.value || "All Sub-Strands";
    subStrand.innerHTML = "";
    const all = document.createElement("option");
    all.value = "All Sub-Strands";
    all.textContent = "All Sub-Strands";
    subStrand.appendChild(all);
    list.forEach((entry) => {
      const option = document.createElement("option");
      option.value = String(entry.id || entry.label || "");
      option.textContent = String(entry.label || entry.id || "");
      subStrand.appendChild(option);
    });
    subStrand.value = list.some((entry) => String(entry.id || entry.label || "") === current)
      ? current
      : "All Sub-Strands";
    updateCurriculumContent();
  }

  function updateCurriculumContent() {
    const selected = getSelectedSubStrand();
    if (!contentCovered) return;
    const content = selected && Array.isArray(selected.content) ? selected.content : [];
    contentCovered.innerHTML = content.length
      ? "<strong>Content Covered:</strong> " + content.map((item) => escapeHtml(String(item))).join(" • ")
      : "Select a strand and sub-strand to view content covered.";
  }

  function refreshOutcomeOptions() {
    if (!outcome) return;
    const current = outcome.value || "All Outcomes";
    const selectedSub = getSelectedSubStrand();
    const item = getSelectedCurriculumItem();
    const outcomes = selectedSub
      ? (Array.isArray(selectedSub.learningOutcomes) ? selectedSub.learningOutcomes : [])
      : (item ? item.subStrands.flatMap((sub) => Array.isArray(sub.learningOutcomes) ? sub.learningOutcomes : []) : []);

    outcome.innerHTML = "";
    const all = document.createElement("option");
    all.value = "All Outcomes";
    all.textContent = "All Learning Outcomes";
    outcome.appendChild(all);

    [...new Set(outcomes.map((value) => String(value).trim()).filter(Boolean))].forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      outcome.appendChild(option);
    });

    outcome.value = outcomes.includes(current) ? current : "All Outcomes";
  }

  function refreshStrandOptions() {
    if (!strand) return;
    const current = strand.value || "All Topics";
    const curriculumItems = getCurriculumItems(grade.value, subject.value);
    const questions = getAvailableQuestions(grade.value, subject.value);
    const questionTopics = Array.from(new Set(questions.map((item) => item[3]).filter(Boolean)));
    const adminTopics = (Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [])
      .filter((item) => String(item.country || "Kenya").toLowerCase() === String(country && country.value || "Kenya").trim().toLowerCase() &&
        String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase() &&
        String(item.grade || "").toLowerCase().replace(/[^a-z0-9]/g, "") === String(grade.value || "").toLowerCase().replace(/[^a-z0-9]/g, "") &&
        String(item.subject || "").toLowerCase().replace(/[^a-z0-9]/g, "") === String(subject.value || "").toLowerCase().replace(/[^a-z0-9]/g, "") &&
        item.published !== false)
      .map((item) => String(item.strand || "").trim())
      .filter(Boolean);
    const topics = [...new Set([
      ...(curriculumItems.length ? curriculumItems.map((item) => item.id) : questionTopics),
      ...adminTopics
    ])];

    strand.innerHTML = "";
    const all = document.createElement("option");
    all.value = "All Topics";
    all.textContent = "All Topics";
    strand.appendChild(all);

    topics.forEach((topicId) => {
      const item = curriculumItems.find((entry) => entry.id === topicId);
      const option = document.createElement("option");
      option.value = topicId;
      option.textContent = item ? item.label : topicId;
      strand.appendChild(option);
    });

    strand.value = topics.includes(current) ? current : "All Topics";
    refreshSubStrandOptions();
    refreshOutcomeOptions();
  }

  function refreshSubjectOptions() {
    if (!subject) return;
    const current = subject.value;
    const gradeNumber = (value) => String(value == null ? "" : value).toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizeSubject = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const selectedCountry = String(country && country.value || "Kenya").trim().toLowerCase();
    const selectedCurriculum = String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase();
    const isKenyaCbc = selectedCountry === "kenya" && selectedCurriculum === "kenya cbc/cbe";
    const isNigeriaNERDC = selectedCountry === "nigeria" && selectedCurriculum === "nigeria nerdc curriculum / waec / neco";
    const isTanzaniaTIE = selectedCountry === "tanzania" && selectedCurriculum === "tanzania tie curriculum / necta";
    const isEstoniaNational = selectedCountry === "estonia" && selectedCurriculum === "estonia national curriculum (basic school) / harno";
    const isLatviaNational = selectedCountry === "latvia" && selectedCurriculum === "latvia national basic education standard / skola2030";
    const isLithuaniaNational = selectedCountry === "lithuania" && selectedCurriculum === "lithuanian national curriculum / general programmes (v-1269)";
    const isLuxembourgESC = selectedCountry === "luxembourg" && selectedCurriculum === "luxembourg national curriculum / classical secondary education (esc)";
    const isMaltaNational = selectedCountry === "malta" && selectedCurriculum === "malta national curriculum framework / learning outcomes framework / secondary year 9";
    const isMauritiusNational = selectedCountry === "mauritius" && selectedCurriculum === "mauritius national curriculum framework grades 7–9 / national certificate of education (nce)";
    const isMauritaniaNational = selectedCountry === "mauritania" && selectedCurriculum === "mauritania national curriculum / new republican school (école républicaine) — secondary supplementary pathway";
    const isMexicoNational = selectedCountry === "mexico" && selectedCurriculum === "mexico sep plan de estudio 2022 / fase 6 (secondary)";
    const isMicronesiaNational = selectedCountry === "micronesia" && selectedCurriculum === "federated states of micronesia national curriculum standards and benchmarks / secondary supplementary";
    const isMoldovaNational = selectedCountry === "moldova" && selectedCurriculum === "moldova national curriculum / gymnasium (grades v–ix)";
    const isMonacoNational = selectedCountry === "monaco" && selectedCurriculum === "monaco national education programme / french national programmes with monaco-specific history";
    const ismarshallislandsNational = selectedCountry === "marshall islands" && selectedCurriculum === "marshall islands public school system curriculum / misat grade 8";
    const ismongoliaNational = selectedCountry === "mongolia" && selectedCurriculum === "mongolia national core curriculum for basic education (2019) / grade 9";
    const ismontenegroNational = selectedCountry === "montenegro" && selectedCurriculum === "montenegro publicly valid nine-year basic education programme / grade ix";
    const ismoroccoNational = selectedCountry === "morocco" && selectedCurriculum === "morocco national curriculum / common core secondary (tronc commun scientifique) — supplementary";
    const ismozambiqueNational = selectedCountry === "mozambique" && selectedCurriculum === "mozambique secondary education curriculum plan / 10th class (2nd cycle)";
    const ismyanmarNational = selectedCountry === "myanmar" && selectedCurriculum === "myanmar basic education curriculum / grade 9 — supplementary pathway";
    const isnamibiaNational = selectedCountry === "namibia" && selectedCurriculum === "namibia national curriculum for basic education / junior secondary grade 9";
    const isnauruNational = selectedCountry === "nauru" && selectedCurriculum === "nauru national curriculum / year 10 — supplementary learning strands";
    const isnepalNational = selectedCountry === "nepal" && selectedCurriculum === "nepal secondary education curriculum 2078 / grade 9 — compulsory subjects";
    const isnetherlandsNational = selectedCountry === "netherlands" && selectedCurriculum === "netherlands slo core objectives / lower secondary (vo onderbouw) — supplementary";
    const isnewzealandNational = selectedCountry === "new zealand" && selectedCurriculum === "new zealand national curriculum statement 2026 / te mātaiaho / year 10";
    const isnicaraguaNational = selectedCountry === "nicaragua" && selectedCurriculum === "nicaragua regular secondary education / 9° (fourth cycle)";
    const isnigerNational = selectedCountry === "niger" && selectedCurriculum === "niger general secondary education / second cycle (lycée) — official programme reference";
    const isnorthkoreaNational = selectedCountry === "north korea" && selectedCurriculum === "dpr korea 12-year compulsory education / lower secondary year 3 — supplementary";
    const isnorthmacedoniaNational = selectedCountry === "north macedonia" && selectedCurriculum === "north macedonia primary education concept / grade ix — supplementary subject starters";
    const isnorwayNational = selectedCountry.toLowerCase() === "norway" && selectedCurriculum.toLowerCase() === "norway national curriculum / kunnskapsløftet 2020 (lk20) / year 10";
    const isomanNational = selectedCountry.toLowerCase() === "oman" && selectedCurriculum.toLowerCase() === "oman ministry of education curriculum frameworks 2026 / grade 10";
    const ispakistanNational = selectedCountry.toLowerCase() === "pakistan" && selectedCurriculum.toLowerCase() === "pakistan national curriculum 2026 (ncp-2026) / grade 9 — federal & ict scope";
    const ispalauNational = selectedCountry.toLowerCase() === "palau" && selectedCurriculum.toLowerCase() === "palau ministry of education curriculum frameworks / grade 9 — supplementary";
    const ispanamaNational = selectedCountry.toLowerCase() === "panama" && selectedCurriculum.toLowerCase() === "panama meduca educación básica general / premedia 9°";
    const ispapuanewguineaNational = selectedCountry.toLowerCase() === "papua new guinea" && selectedCurriculum.toLowerCase() === "png national curriculum / grade 10 & 12 national examinations";
    const isparaguayNational = selectedCountry.toLowerCase() === "paraguay" && selectedCurriculum.toLowerCase() === "paraguay educación escolar básica / tercer ciclo / 9° grado";
    const isperuNational = selectedCountry.toLowerCase() === "peru" && selectedCurriculum.toLowerCase() === "perú currículo nacional de la educación básica / educación secundaria / 3°";
    const isphilippinesNational = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped k to 12 / matatag";
    const ispolandNational = selectedCountry.toLowerCase() === "poland" && selectedCurriculum.toLowerCase() === "poland podstawa programowa / szkoła podstawowa / klasa viii";
    const isportugalNational = selectedCountry.toLowerCase() === "portugal" && selectedCurriculum.toLowerCase() === "portugal aprendizagens essenciais / 3.º ciclo / 9.º ano";
    const isqatarNational = selectedCountry.toLowerCase() === "qatar" && selectedCurriculum.toLowerCase() === "qatar national curriculum / preparatory stage / grade 9";
    const isromaniaNational = selectedCountry.toLowerCase() === "romania" && selectedCurriculum.toLowerCase() === "romania national curriculum / gimnaziu / grade viii";
    const isrussiaNational = selectedCountry.toLowerCase() === "russia" && selectedCurriculum.toLowerCase() === "russian federal state educational standards / basic general education / grade 9";
    const issaintkittsNational = selectedCountry.toLowerCase() === "saint kitts and nevis" && selectedCurriculum.toLowerCase() === "saint kitts and nevis secondary education / form 3 / csec preparation pathway";
    const issaintluciaNational = selectedCountry.toLowerCase() === "saint lucia" && selectedCurriculum.toLowerCase() === "saint lucia national curriculum / lower secondary / form 3";
    const isNinthsaudiarabia = selectedCountry.toLowerCase() === "saudi arabia" && selectedCurriculum.toLowerCase() === "saudi ministry of education curriculum / intermediate grade 9 / third intermediate";
    const isTenthsingapore = selectedCountry.toLowerCase() === "singapore" && selectedCurriculum.toLowerCase() === "singapore moe lower secondary curriculum / secondary 2 / g2-g3";
    const isTenthslovakia = selectedCountry.toLowerCase() === "slovakia" && selectedCurriculum.toLowerCase() === "slovakia state educational programme for basic education / 9th grade";
    const isTenthslovenia = selectedCountry.toLowerCase() === "slovenia" && selectedCurriculum.toLowerCase() === "slovenia basic school national curriculum / 9th grade";
    const isTenthsolomonislands = selectedCountry.toLowerCase() === "solomon islands" && selectedCurriculum.toLowerCase() === "solomon islands national curriculum / junior secondary year 9 / form 3";
    const isTenthsomalia = selectedCountry.toLowerCase() === "somalia" && selectedCurriculum.toLowerCase() === "somalia national education curriculum / secondary form 1 (grade 9)";
    const isEleventhsouthafrica = selectedCountry.toLowerCase() === "south africa" && selectedCurriculum.toLowerCase() === "south africa caps / senior phase / grade 9";
    const isEleventhsouthkorea = selectedCountry.toLowerCase() === "south korea" && selectedCurriculum.toLowerCase() === "south korea 2022 revised national curriculum / middle school grade 3";
    const isEleventhsouthsudan = selectedCountry.toLowerCase() === "south sudan" && selectedCurriculum.toLowerCase() === "south sudan national general education policy / national curriculum framework (secondary supplementary)";
    const isEleventhspain = selectedCountry.toLowerCase() === "spain" && selectedCurriculum.toLowerCase() === "spain lomloe / educación secundaria obligatoria / 3º eso";
    const isEleventhsrilanka = selectedCountry.toLowerCase() === "sri lanka" && selectedCurriculum.toLowerCase() === "sri lanka national curriculum / grade 9 (current syllabus; reform transition noted)";
    const isTwelfthsudan = selectedCountry.toLowerCase() === "sudan" && selectedCurriculum.toLowerCase() === "sudan ministry of education curriculum / intermediate stage / third intermediate";
    const isTwelfthsuriname = selectedCountry.toLowerCase() === "suriname" && selectedCurriculum.toLowerCase() === "suriname minowc / secondary education / leerjaar 9 istreams";
    const isTwelfthsweden = selectedCountry.toLowerCase() === "sweden" && selectedCurriculum.toLowerCase() === "sweden national curriculum lgr22 / compulsory school / year 9";
    const isTwelfthswitzerland = selectedCountry.toLowerCase() === "switzerland" && selectedCurriculum.toLowerCase() === "switzerland cantonal curriculum / lower secondary cycle 3 / final year";
    const isTwelfthsyria = selectedCountry.toLowerCase() === "syria" && selectedCurriculum.toLowerCase() === "syria ministry of education / national curriculum / grade 9";
    const isThirteenthtajikistan = selectedCountry.toLowerCase() === "tajikistan" && selectedCurriculum.toLowerCase() === "tajikistan state standard of general education / basic general education / grade 9";
    const isThirteenthtanzania = selectedCountry.toLowerCase() === "tanzania" && selectedCurriculum.toLowerCase() === "tanzania tie curriculum for ordinary secondary education / form ii (2023)";
    const isThirteenththailand = selectedCountry.toLowerCase() === "thailand" && selectedCurriculum.toLowerCase() === "thailand basic education core curriculum b.e. 2551 (2008), revised 2017 / matthayom 3";
    const isThirteenthtimorleste = selectedCountry.toLowerCase() === "timor-leste" && selectedCurriculum.toLowerCase() === "timor-leste national basic education curriculum / third cycle / grade 9 (2024 revised framework)";
    const isThirteenthtogo = selectedCountry.toLowerCase() === "togo" && selectedCurriculum.toLowerCase() === "togo national curriculum / collège / classe de troisième (3e)";
    const isFourteenthbenin = selectedCountry.toLowerCase() === "benin" && selectedCurriculum.toLowerCase() === "benin national curriculum / enseignement secondaire général / classe de troisième (3e)";
    const isFifteenthlaos = selectedCountry.toLowerCase() === "laos" && selectedCurriculum.toLowerCase() === "lao national curriculum for lower secondary education / grade 9";
    const isFifteenthmalaysia = selectedCountry.toLowerCase() === "malaysia" && selectedCurriculum.toLowerCase() === "malaysia kssm / secondary school standard curriculum / form 3";
    const isFifteenthmongolia = selectedCountry.toLowerCase() === "mongolia" && selectedCurriculum.toLowerCase() === "mongolia general education curriculum / basic education / grade 9";
    const isFifteenthnorthkorea = selectedCountry.toLowerCase() === "north korea" && selectedCurriculum.toLowerCase() === "dpr korea general education system / lower secondary / year 3 (grade 9) — supplementary pathway";
    const isFifteenthphilippines = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped revised k to 10 / matatag curriculum / grade 9 (sy 2026–2027)";
    const isSixteenthvietnam = selectedCountry.toLowerCase() === "vietnam" && selectedCurriculum.toLowerCase() === "vietnam general education curriculum 2018 / lower secondary / grade 9";
    const isSixteenthbrunei = selectedCountry.toLowerCase() === "brunei" && selectedCurriculum.toLowerCase() === "brunei spn21 / general secondary education programme / year 9";
    const isSixteenthkazakhstan = selectedCountry.toLowerCase() === "kazakhstan" && selectedCurriculum.toLowerCase() === "kazakhstan state compulsory education standard / basic secondary / grade 9";
    const isSixteenthkyrgyzstan = selectedCountry.toLowerCase() === "kyrgyzstan" && selectedCurriculum.toLowerCase() === "kyrgyz republic state educational standard / basic general education / grade 9";
    const isSixteenthturkmenistan = selectedCountry.toLowerCase() === "turkmenistan" && selectedCurriculum.toLowerCase() === "turkmenistan general education programme / basic secondary / grade 9";
    const isFourteenthcambodia = selectedCountry.toLowerCase() === "cambodia" && selectedCurriculum.toLowerCase() === "cambodia moeys general education curriculum framework / lower secondary / grade 9";
    const isFourteenthchina = selectedCountry.toLowerCase() === "china" && selectedCurriculum.toLowerCase() === "china ministry of education compulsory education curriculum standards (2022) / grade 9";
    const isFourteenthindonesia = selectedCountry.toLowerCase() === "indonesia" && selectedCurriculum.toLowerCase() === "indonesia national curriculum / grade ix (kelas ix) / kurikulum merdeka and transition provisions";
    const isFourteenthjapan = selectedCountry.toLowerCase() === "japan" && selectedCurriculum.toLowerCase() === "japan mext courses of study / lower secondary school / year 3 (grade 9)";
    const isNinthsenegal = selectedCountry.toLowerCase() === "senegal" && selectedCurriculum.toLowerCase() === "senegal national curriculum / collège / troisième (3e)";
    const isNinthserbia = selectedCountry.toLowerCase() === "serbia" && selectedCurriculum.toLowerCase() === "serbia national curriculum / primary education / grade 8";
    const isNinthseychelles = selectedCountry.toLowerCase() === "seychelles" && selectedCurriculum.toLowerCase() === "seychelles national curriculum framework / secondary 3 (s3)";
    const isNinthsierraleone = selectedCountry.toLowerCase() === "sierra leone" && selectedCurriculum.toLowerCase() === "sierra leone mbsse national senior secondary curriculum framework / sss 1 / sciences and technologies";
    const issaintvincentNational = selectedCountry.toLowerCase() === "saint vincent and the grenadines" && selectedCurriculum.toLowerCase() === "saint vincent and the grenadines national curriculum / secondary form 3 / csec pathway";
    const issamoaNational = selectedCountry.toLowerCase() === "samoa" && selectedCurriculum.toLowerCase() === "samoa national curriculum / secondary year 9";
    const issanmarinoNational = selectedCountry.toLowerCase() === "san marino" && selectedCurriculum.toLowerCase() === "san marino scuola media / classe terza";
    const issaotomeNational = selectedCountry.toLowerCase() === "sao tome and principe" && selectedCurriculum.toLowerCase() === "sao tome and principe national curriculum / 9ª classe / ensino básico 7ª–9ª";
    const nigeriaSubjects = isNigeriaNERDC && window.CBENexusNigeriaBanks && window.CBENexusNigeriaBanks.banks &&
      window.CBENexusNigeriaBanks.banks[grade.value] ? Object.keys(window.CBENexusNigeriaBanks.banks[grade.value]) : [];
    const tanzaniaSubjects = isTanzaniaTIE && window.CBENexusTanzaniaBanks && window.CBENexusTanzaniaBanks.banks && window.CBENexusTanzaniaBanks.banks[grade.value] ? Object.keys(window.CBENexusTanzaniaBanks.banks[grade.value]) : [];
    const estoniaSubjects = isEstoniaNational && window.CBENexusEstoniaBanks && window.CBENexusEstoniaBanks.banks && window.CBENexusEstoniaBanks.banks[grade.value] ? Object.keys(window.CBENexusEstoniaBanks.banks[grade.value]) : [];
    const latviaSubjects = isLatviaNational && window.CBENexusLatviaBanks && window.CBENexusLatviaBanks.banks && window.CBENexusLatviaBanks.banks[grade.value] ? Object.keys(window.CBENexusLatviaBanks.banks[grade.value]) : [];
    const lithuaniaSubjects = isLithuaniaNational && window.CBENexusLithuaniaBanks && window.CBENexusLithuaniaBanks.banks && window.CBENexusLithuaniaBanks.banks[grade.value] ? Object.keys(window.CBENexusLithuaniaBanks.banks[grade.value]) : [];
    const luxembourgSubjects = isLuxembourgESC && window.CBENexusLuxembourgBanks && window.CBENexusLuxembourgBanks.banks && window.CBENexusLuxembourgBanks.banks[grade.value] ? Object.keys(window.CBENexusLuxembourgBanks.banks[grade.value]) : [];
    const maltaSubjects = isMaltaNational && window.CBENexusMaltaBanks && window.CBENexusMaltaBanks.banks && window.CBENexusMaltaBanks.banks[grade.value] ? Object.keys(window.CBENexusMaltaBanks.banks[grade.value]) : [];
    const mauritiusSubjects = isMauritiusNational && window.CBENexusMauritiusBanks && window.CBENexusMauritiusBanks.banks && window.CBENexusMauritiusBanks.banks[grade.value] ? Object.keys(window.CBENexusMauritiusBanks.banks[grade.value]) : [];
    const subjectsMauritania = isMauritaniaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mauritania"] && window.CBENexusFiveCountryBanks["Mauritania"].banks && window.CBENexusFiveCountryBanks["Mauritania"].banks[grade.value] ? Object.keys(window.CBENexusFiveCountryBanks["Mauritania"].banks[grade.value]) : [];
    const subjectsMexico = isMexicoNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mexico"] && window.CBENexusFiveCountryBanks["Mexico"].banks && window.CBENexusFiveCountryBanks["Mexico"].banks[grade.value] ? Object.keys(window.CBENexusFiveCountryBanks["Mexico"].banks[grade.value]) : [];
    const subjectsMicronesia = isMicronesiaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Micronesia"] && window.CBENexusFiveCountryBanks["Micronesia"].banks && window.CBENexusFiveCountryBanks["Micronesia"].banks[grade.value] ? Object.keys(window.CBENexusFiveCountryBanks["Micronesia"].banks[grade.value]) : [];
    const subjectsMoldova = isMoldovaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Moldova"] && window.CBENexusFiveCountryBanks["Moldova"].banks && window.CBENexusFiveCountryBanks["Moldova"].banks[grade.value] ? Object.keys(window.CBENexusFiveCountryBanks["Moldova"].banks[grade.value]) : [];
    const subjectsMonaco = isMonacoNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Monaco"] && window.CBENexusFiveCountryBanks["Monaco"].banks && window.CBENexusFiveCountryBanks["Monaco"].banks[grade.value] ? Object.keys(window.CBENexusFiveCountryBanks["Monaco"].banks[grade.value]) : [];
    const subjectsmarshallislands = ismarshallislandsNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Marshall Islands"] && window.CBENexusNextFiveBanks["Marshall Islands"].banks && window.CBENexusNextFiveBanks["Marshall Islands"].banks[grade.value] ? Object.keys(window.CBENexusNextFiveBanks["Marshall Islands"].banks[grade.value]) : [];
    const subjectsmongolia = ismongoliaNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mongolia"] && window.CBENexusNextFiveBanks["Mongolia"].banks && window.CBENexusNextFiveBanks["Mongolia"].banks[grade.value] ? Object.keys(window.CBENexusNextFiveBanks["Mongolia"].banks[grade.value]) : [];
    const subjectsmontenegro = ismontenegroNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Montenegro"] && window.CBENexusNextFiveBanks["Montenegro"].banks && window.CBENexusNextFiveBanks["Montenegro"].banks[grade.value] ? Object.keys(window.CBENexusNextFiveBanks["Montenegro"].banks[grade.value]) : [];
    const subjectsmorocco = ismoroccoNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Morocco"] && window.CBENexusNextFiveBanks["Morocco"].banks && window.CBENexusNextFiveBanks["Morocco"].banks[grade.value] ? Object.keys(window.CBENexusNextFiveBanks["Morocco"].banks[grade.value]) : [];
    const subjectsmozambique = ismozambiqueNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mozambique"] && window.CBENexusNextFiveBanks["Mozambique"].banks && window.CBENexusNextFiveBanks["Mozambique"].banks[grade.value] ? Object.keys(window.CBENexusNextFiveBanks["Mozambique"].banks[grade.value]) : [];
    const subjectsmyanmar = ismyanmarNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Myanmar"] && window.CBENexusThirdFiveBanks["Myanmar"].banks && window.CBENexusThirdFiveBanks["Myanmar"].banks[grade.value] ? Object.keys(window.CBENexusThirdFiveBanks["Myanmar"].banks[grade.value]) : [];
    const subjectsnamibia = isnamibiaNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Namibia"] && window.CBENexusThirdFiveBanks["Namibia"].banks && window.CBENexusThirdFiveBanks["Namibia"].banks[grade.value] ? Object.keys(window.CBENexusThirdFiveBanks["Namibia"].banks[grade.value]) : [];
    const subjectsnauru = isnauruNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nauru"] && window.CBENexusThirdFiveBanks["Nauru"].banks && window.CBENexusThirdFiveBanks["Nauru"].banks[grade.value] ? Object.keys(window.CBENexusThirdFiveBanks["Nauru"].banks[grade.value]) : [];
    const subjectsnepal = isnepalNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nepal"] && window.CBENexusThirdFiveBanks["Nepal"].banks && window.CBENexusThirdFiveBanks["Nepal"].banks[grade.value] ? Object.keys(window.CBENexusThirdFiveBanks["Nepal"].banks[grade.value]) : [];
    const subjectsnetherlands = isnetherlandsNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Netherlands"] && window.CBENexusThirdFiveBanks["Netherlands"].banks && window.CBENexusThirdFiveBanks["Netherlands"].banks[grade.value] ? Object.keys(window.CBENexusThirdFiveBanks["Netherlands"].banks[grade.value]) : [];
    const subjectsnewzealand = isnewzealandNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["New Zealand"] && window.CBENexusFourthFiveBanks["New Zealand"].banks && window.CBENexusFourthFiveBanks["New Zealand"].banks[grade.value] ? Object.keys(window.CBENexusFourthFiveBanks["New Zealand"].banks[grade.value]) : [];
    const subjectsnicaragua = isnicaraguaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Nicaragua"] && window.CBENexusFourthFiveBanks["Nicaragua"].banks && window.CBENexusFourthFiveBanks["Nicaragua"].banks[grade.value] ? Object.keys(window.CBENexusFourthFiveBanks["Nicaragua"].banks[grade.value]) : [];
    const subjectsniger = isnigerNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Niger"] && window.CBENexusFourthFiveBanks["Niger"].banks && window.CBENexusFourthFiveBanks["Niger"].banks[grade.value] ? Object.keys(window.CBENexusFourthFiveBanks["Niger"].banks[grade.value]) : [];
    const subjectsnorthkorea = isnorthkoreaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Korea"] && window.CBENexusFourthFiveBanks["North Korea"].banks && window.CBENexusFourthFiveBanks["North Korea"].banks[grade.value] ? Object.keys(window.CBENexusFourthFiveBanks["North Korea"].banks[grade.value]) : [];
    const subjectsnorthmacedonia = isnorthmacedoniaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Macedonia"] && window.CBENexusFourthFiveBanks["North Macedonia"].banks && window.CBENexusFourthFiveBanks["North Macedonia"].banks[grade.value] ? Object.keys(window.CBENexusFourthFiveBanks["North Macedonia"].banks[grade.value]) : [];
    const subjectsnorway = isnorwayNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Norway"] && window.CBENexusFifthFiveBanks["Norway"].banks && window.CBENexusFifthFiveBanks["Norway"].banks[grade.value] ? Object.keys(window.CBENexusFifthFiveBanks["Norway"].banks[grade.value]) : [];
    const subjectsoman = isomanNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Oman"] && window.CBENexusFifthFiveBanks["Oman"].banks && window.CBENexusFifthFiveBanks["Oman"].banks[grade.value] ? Object.keys(window.CBENexusFifthFiveBanks["Oman"].banks[grade.value]) : [];
    const subjectspakistan = ispakistanNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Pakistan"] && window.CBENexusFifthFiveBanks["Pakistan"].banks && window.CBENexusFifthFiveBanks["Pakistan"].banks[grade.value] ? Object.keys(window.CBENexusFifthFiveBanks["Pakistan"].banks[grade.value]) : [];
    const subjectspalau = ispalauNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Palau"] && window.CBENexusFifthFiveBanks["Palau"].banks && window.CBENexusFifthFiveBanks["Palau"].banks[grade.value] ? Object.keys(window.CBENexusFifthFiveBanks["Palau"].banks[grade.value]) : [];
    const subjectspanama = ispanamaNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Panama"] && window.CBENexusFifthFiveBanks["Panama"].banks && window.CBENexusFifthFiveBanks["Panama"].banks[grade.value] ? Object.keys(window.CBENexusFifthFiveBanks["Panama"].banks[grade.value]) : [];
    const subjectspapuanewguinea = ispapuanewguineaNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Papua New Guinea"] && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[grade.value] ? Object.keys(window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[grade.value]) : [];
    const subjectsparaguay = isparaguayNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Paraguay"] && window.CBENexusSixthFiveBanks["Paraguay"].banks && window.CBENexusSixthFiveBanks["Paraguay"].banks[grade.value] ? Object.keys(window.CBENexusSixthFiveBanks["Paraguay"].banks[grade.value]) : [];
    const subjectsperu = isperuNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Peru"] && window.CBENexusSixthFiveBanks["Peru"].banks && window.CBENexusSixthFiveBanks["Peru"].banks[grade.value] ? Object.keys(window.CBENexusSixthFiveBanks["Peru"].banks[grade.value]) : [];
    const subjectsphilippines = isphilippinesNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Philippines"] && window.CBENexusSixthFiveBanks["Philippines"].banks && window.CBENexusSixthFiveBanks["Philippines"].banks[grade.value] ? Object.keys(window.CBENexusSixthFiveBanks["Philippines"].banks[grade.value]) : [];
    const subjectspoland = ispolandNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Poland"] && window.CBENexusSixthFiveBanks["Poland"].banks && window.CBENexusSixthFiveBanks["Poland"].banks[grade.value] ? Object.keys(window.CBENexusSixthFiveBanks["Poland"].banks[grade.value]) : [];
    const subjectssaintlucia = issaintluciaNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Saint Lucia"] && window.CBENexusEighthFiveBanks["Saint Lucia"].banks && window.CBENexusEighthFiveBanks["Saint Lucia"].banks[grade.value] ? Object.keys(window.CBENexusEighthFiveBanks["Saint Lucia"].banks[grade.value]) : [];
    const subjectssaintvincent = issaintvincentNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"] && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks[grade.value] ? Object.keys(window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks[grade.value]) : [];
    const subjectssamoa = issamoaNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Samoa"] && window.CBENexusEighthFiveBanks["Samoa"].banks && window.CBENexusEighthFiveBanks["Samoa"].banks[grade.value] ? Object.keys(window.CBENexusEighthFiveBanks["Samoa"].banks[grade.value]) : [];
    const subjectssanmarino = issanmarinoNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["San Marino"] && window.CBENexusEighthFiveBanks["San Marino"].banks && window.CBENexusEighthFiveBanks["San Marino"].banks[grade.value] ? Object.keys(window.CBENexusEighthFiveBanks["San Marino"].banks[grade.value]) : [];
    const subjectssaotome = issaotomeNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Sao Tome and Principe"] && window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks && window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks[grade.value] ? Object.keys(window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks[grade.value]) : [];
    const subjectsSaudiArabia = isNinthsaudiarabia && window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Saudi Arabia"] && window.CBENexusNinthFiveBanks["Saudi Arabia"].banks && window.CBENexusNinthFiveBanks["Saudi Arabia"].banks[grade.value] ? Object.keys(window.CBENexusNinthFiveBanks["Saudi Arabia"].banks[grade.value]) : [];
    const subjectsSenegal = isNinthsenegal && window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Senegal"] && window.CBENexusNinthFiveBanks["Senegal"].banks && window.CBENexusNinthFiveBanks["Senegal"].banks[grade.value] ? Object.keys(window.CBENexusNinthFiveBanks["Senegal"].banks[grade.value]) : [];
    const subjectsSerbia = isNinthserbia && window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Serbia"] && window.CBENexusNinthFiveBanks["Serbia"].banks && window.CBENexusNinthFiveBanks["Serbia"].banks[grade.value] ? Object.keys(window.CBENexusNinthFiveBanks["Serbia"].banks[grade.value]) : [];
    const subjectsSeychelles = isNinthseychelles && window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Seychelles"] && window.CBENexusNinthFiveBanks["Seychelles"].banks && window.CBENexusNinthFiveBanks["Seychelles"].banks[grade.value] ? Object.keys(window.CBENexusNinthFiveBanks["Seychelles"].banks[grade.value]) : [];
    const subjectsSierraLeone = isNinthsierraleone && window.CBENexusNinthFiveBanks && window.CBENexusNinthFiveBanks["Sierra Leone"] && window.CBENexusNinthFiveBanks["Sierra Leone"].banks && window.CBENexusNinthFiveBanks["Sierra Leone"].banks[grade.value] ? Object.keys(window.CBENexusNinthFiveBanks["Sierra Leone"].banks[grade.value]) : [];
    const subjectsTenthsingapore = isTenthsingapore && window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Singapore"] && window.CBENexusTenthFiveBanks["Singapore"].banks && window.CBENexusTenthFiveBanks["Singapore"].banks[grade.value] ? Object.keys(window.CBENexusTenthFiveBanks["Singapore"].banks[grade.value]) : [];
    const subjectsTenthslovakia = isTenthslovakia && window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Slovakia"] && window.CBENexusTenthFiveBanks["Slovakia"].banks && window.CBENexusTenthFiveBanks["Slovakia"].banks[grade.value] ? Object.keys(window.CBENexusTenthFiveBanks["Slovakia"].banks[grade.value]) : [];
    const subjectsTenthslovenia = isTenthslovenia && window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Slovenia"] && window.CBENexusTenthFiveBanks["Slovenia"].banks && window.CBENexusTenthFiveBanks["Slovenia"].banks[grade.value] ? Object.keys(window.CBENexusTenthFiveBanks["Slovenia"].banks[grade.value]) : [];
    const subjectsTenthsolomonislands = isTenthsolomonislands && window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Solomon Islands"] && window.CBENexusTenthFiveBanks["Solomon Islands"].banks && window.CBENexusTenthFiveBanks["Solomon Islands"].banks[grade.value] ? Object.keys(window.CBENexusTenthFiveBanks["Solomon Islands"].banks[grade.value]) : [];
    const subjectsTenthsomalia = isTenthsomalia && window.CBENexusTenthFiveBanks && window.CBENexusTenthFiveBanks["Somalia"] && window.CBENexusTenthFiveBanks["Somalia"].banks && window.CBENexusTenthFiveBanks["Somalia"].banks[grade.value] ? Object.keys(window.CBENexusTenthFiveBanks["Somalia"].banks[grade.value]) : [];
    const subjectsEleventhsouthafrica = isEleventhsouthafrica && window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Africa"] && window.CBENexusEleventhFiveBanks["South Africa"].banks && window.CBENexusEleventhFiveBanks["South Africa"].banks[grade.value] ? Object.keys(window.CBENexusEleventhFiveBanks["South Africa"].banks[grade.value]) : [];
    const subjectsEleventhsouthkorea = isEleventhsouthkorea && window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Korea"] && window.CBENexusEleventhFiveBanks["South Korea"].banks && window.CBENexusEleventhFiveBanks["South Korea"].banks[grade.value] ? Object.keys(window.CBENexusEleventhFiveBanks["South Korea"].banks[grade.value]) : [];
    const subjectsEleventhsouthsudan = isEleventhsouthsudan && window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["South Sudan"] && window.CBENexusEleventhFiveBanks["South Sudan"].banks && window.CBENexusEleventhFiveBanks["South Sudan"].banks[grade.value] ? Object.keys(window.CBENexusEleventhFiveBanks["South Sudan"].banks[grade.value]) : [];
    const subjectsEleventhspain = isEleventhspain && window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["Spain"] && window.CBENexusEleventhFiveBanks["Spain"].banks && window.CBENexusEleventhFiveBanks["Spain"].banks[grade.value] ? Object.keys(window.CBENexusEleventhFiveBanks["Spain"].banks[grade.value]) : [];
    const subjectsEleventhsrilanka = isEleventhsrilanka && window.CBENexusEleventhFiveBanks && window.CBENexusEleventhFiveBanks["Sri Lanka"] && window.CBENexusEleventhFiveBanks["Sri Lanka"].banks && window.CBENexusEleventhFiveBanks["Sri Lanka"].banks[grade.value] ? Object.keys(window.CBENexusEleventhFiveBanks["Sri Lanka"].banks[grade.value]) : [];
    const subjectsTwelfthsudan = isTwelfthsudan && window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Sudan"] && window.CBENexusTwelfthFiveBanks["Sudan"].banks && window.CBENexusTwelfthFiveBanks["Sudan"].banks[grade.value] ? Object.keys(window.CBENexusTwelfthFiveBanks["Sudan"].banks[grade.value]) : [];
    const subjectsTwelfthsuriname = isTwelfthsuriname && window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Suriname"] && window.CBENexusTwelfthFiveBanks["Suriname"].banks && window.CBENexusTwelfthFiveBanks["Suriname"].banks[grade.value] ? Object.keys(window.CBENexusTwelfthFiveBanks["Suriname"].banks[grade.value]) : [];
    const subjectsTwelfthsweden = isTwelfthsweden && window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Sweden"] && window.CBENexusTwelfthFiveBanks["Sweden"].banks && window.CBENexusTwelfthFiveBanks["Sweden"].banks[grade.value] ? Object.keys(window.CBENexusTwelfthFiveBanks["Sweden"].banks[grade.value]) : [];
    const subjectsTwelfthswitzerland = isTwelfthswitzerland && window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Switzerland"] && window.CBENexusTwelfthFiveBanks["Switzerland"].banks && window.CBENexusTwelfthFiveBanks["Switzerland"].banks[grade.value] ? Object.keys(window.CBENexusTwelfthFiveBanks["Switzerland"].banks[grade.value]) : [];
    const subjectsTwelfthsyria = isTwelfthsyria && window.CBENexusTwelfthFiveBanks && window.CBENexusTwelfthFiveBanks["Syria"] && window.CBENexusTwelfthFiveBanks["Syria"].banks && window.CBENexusTwelfthFiveBanks["Syria"].banks[grade.value] ? Object.keys(window.CBENexusTwelfthFiveBanks["Syria"].banks[grade.value]) : [];
    const subjectsThirteenthtajikistan = isThirteenthtajikistan && window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Tajikistan"] && window.CBENexusThirteenthFiveBanks["Tajikistan"].banks && window.CBENexusThirteenthFiveBanks["Tajikistan"].banks[grade.value] ? Object.keys(window.CBENexusThirteenthFiveBanks["Tajikistan"].banks[grade.value]) : [];
    const subjectsThirteenthtanzania = isThirteenthtanzania && window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Tanzania"] && window.CBENexusThirteenthFiveBanks["Tanzania"].banks && window.CBENexusThirteenthFiveBanks["Tanzania"].banks[grade.value] ? Object.keys(window.CBENexusThirteenthFiveBanks["Tanzania"].banks[grade.value]) : [];
    const subjectsThirteenththailand = isThirteenththailand && window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Thailand"] && window.CBENexusThirteenthFiveBanks["Thailand"].banks && window.CBENexusThirteenthFiveBanks["Thailand"].banks[grade.value] ? Object.keys(window.CBENexusThirteenthFiveBanks["Thailand"].banks[grade.value]) : [];
    const subjectsThirteenthtimorleste = isThirteenthtimorleste && window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Timor-Leste"] && window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks && window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks[grade.value] ? Object.keys(window.CBENexusThirteenthFiveBanks["Timor-Leste"].banks[grade.value]) : [];
    const subjectsThirteenthtogo = isThirteenthtogo && window.CBENexusThirteenthFiveBanks && window.CBENexusThirteenthFiveBanks["Togo"] && window.CBENexusThirteenthFiveBanks["Togo"].banks && window.CBENexusThirteenthFiveBanks["Togo"].banks[grade.value] ? Object.keys(window.CBENexusThirteenthFiveBanks["Togo"].banks[grade.value]) : [];
    const subjectsFourteenthbenin = isFourteenthbenin && window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Benin"] && window.CBENexusFourteenthFiveBanks["Benin"].banks && window.CBENexusFourteenthFiveBanks["Benin"].banks[grade.value] ? Object.keys(window.CBENexusFourteenthFiveBanks["Benin"].banks[grade.value]) : [];
    const subjectsFifteenthlaos = isFifteenthlaos && window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Laos"] && window.CBENexusFifteenthFiveBanks["Laos"].banks && window.CBENexusFifteenthFiveBanks["Laos"].banks[grade.value] ? Object.keys(window.CBENexusFifteenthFiveBanks["Laos"].banks[grade.value]) : [];
    const subjectsFifteenthmalaysia = isFifteenthmalaysia && window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Malaysia"] && window.CBENexusFifteenthFiveBanks["Malaysia"].banks && window.CBENexusFifteenthFiveBanks["Malaysia"].banks[grade.value] ? Object.keys(window.CBENexusFifteenthFiveBanks["Malaysia"].banks[grade.value]) : [];
    const subjectsFifteenthmongolia = isFifteenthmongolia && window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Mongolia"] && window.CBENexusFifteenthFiveBanks["Mongolia"].banks && window.CBENexusFifteenthFiveBanks["Mongolia"].banks[grade.value] ? Object.keys(window.CBENexusFifteenthFiveBanks["Mongolia"].banks[grade.value]) : [];
    const subjectsFifteenthnorthkorea = isFifteenthnorthkorea && window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["North Korea"] && window.CBENexusFifteenthFiveBanks["North Korea"].banks && window.CBENexusFifteenthFiveBanks["North Korea"].banks[grade.value] ? Object.keys(window.CBENexusFifteenthFiveBanks["North Korea"].banks[grade.value]) : [];
    const subjectsFifteenthphilippines = isFifteenthphilippines && window.CBENexusFifteenthFiveBanks && window.CBENexusFifteenthFiveBanks["Philippines"] && window.CBENexusFifteenthFiveBanks["Philippines"].banks && window.CBENexusFifteenthFiveBanks["Philippines"].banks[grade.value] ? Object.keys(window.CBENexusFifteenthFiveBanks["Philippines"].banks[grade.value]) : [];
    const subjectsSixteenthvietnam = isSixteenthvietnam && window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Vietnam"] && window.CBENexusSixteenthFiveBanks["Vietnam"].banks && window.CBENexusSixteenthFiveBanks["Vietnam"].banks[grade.value] ? Object.keys(window.CBENexusSixteenthFiveBanks["Vietnam"].banks[grade.value]) : [];
    const subjectsSixteenthbrunei = isSixteenthbrunei && window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Brunei"] && window.CBENexusSixteenthFiveBanks["Brunei"].banks && window.CBENexusSixteenthFiveBanks["Brunei"].banks[grade.value] ? Object.keys(window.CBENexusSixteenthFiveBanks["Brunei"].banks[grade.value]) : [];
    const subjectsSixteenthkazakhstan = isSixteenthkazakhstan && window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Kazakhstan"] && window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks && window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks[grade.value] ? Object.keys(window.CBENexusSixteenthFiveBanks["Kazakhstan"].banks[grade.value]) : [];
    const subjectsSixteenthkyrgyzstan = isSixteenthkyrgyzstan && window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"] && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks && window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks[grade.value] ? Object.keys(window.CBENexusSixteenthFiveBanks["Kyrgyzstan"].banks[grade.value]) : [];
    const subjectsSixteenthturkmenistan = isSixteenthturkmenistan && window.CBENexusSixteenthFiveBanks && window.CBENexusSixteenthFiveBanks["Turkmenistan"] && window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks && window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks[grade.value] ? Object.keys(window.CBENexusSixteenthFiveBanks["Turkmenistan"].banks[grade.value]) : [];
    const subjectsFourteenthcambodia = isFourteenthcambodia && window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Cambodia"] && window.CBENexusFourteenthFiveBanks["Cambodia"].banks && window.CBENexusFourteenthFiveBanks["Cambodia"].banks[grade.value] ? Object.keys(window.CBENexusFourteenthFiveBanks["Cambodia"].banks[grade.value]) : [];
    const subjectsFourteenthchina = isFourteenthchina && window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["China"] && window.CBENexusFourteenthFiveBanks["China"].banks && window.CBENexusFourteenthFiveBanks["China"].banks[grade.value] ? Object.keys(window.CBENexusFourteenthFiveBanks["China"].banks[grade.value]) : [];
    const subjectsFourteenthindonesia = isFourteenthindonesia && window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Indonesia"] && window.CBENexusFourteenthFiveBanks["Indonesia"].banks && window.CBENexusFourteenthFiveBanks["Indonesia"].banks[grade.value] ? Object.keys(window.CBENexusFourteenthFiveBanks["Indonesia"].banks[grade.value]) : [];
    const subjectsFourteenthjapan = isFourteenthjapan && window.CBENexusFourteenthFiveBanks && window.CBENexusFourteenthFiveBanks["Japan"] && window.CBENexusFourteenthFiveBanks["Japan"].banks && window.CBENexusFourteenthFiveBanks["Japan"].banks[grade.value] ? Object.keys(window.CBENexusFourteenthFiveBanks["Japan"].banks[grade.value]) : [];
    let baseList = isKenyaCbc ? subjectsForGrade(grade.value) : (isNigeriaNERDC ? nigeriaSubjects : (isTanzaniaTIE ? tanzaniaSubjects : (isEstoniaNational ? estoniaSubjects : (isLatviaNational ? latviaSubjects : (isLithuaniaNational ? lithuaniaSubjects : (isLuxembourgESC ? luxembourgSubjects : (isMaltaNational ? maltaSubjects : (isMauritaniaNational ? subjectsMauritania : (isMexicoNational ? subjectsMexico : (isMicronesiaNational ? subjectsMicronesia : (isMoldovaNational ? subjectsMoldova : (ismarshallislandsNational ? subjectsmarshallislands : (ismongoliaNational ? subjectsmongolia : (ismontenegroNational ? subjectsmontenegro : (ismoroccoNational ? subjectsmorocco : (ismozambiqueNational ? subjectsmozambique : (ismyanmarNational ? subjectsmyanmar : (isnamibiaNational ? subjectsnamibia : (isnauruNational ? subjectsnauru : (isnepalNational ? subjectsnepal : (isnetherlandsNational ? subjectsnetherlands : (isnewzealandNational ? subjectsnewzealand : (isnicaraguaNational ? subjectsnicaragua : (isnigerNational ? subjectsniger : (isnorthkoreaNational ? subjectsnorthkorea : (isnorthmacedoniaNational ? subjectsnorthmacedonia : (isMonacoNational ? subjectsMonaco : mauritiusSubjects)))))))))))))))))))))))))));
    if (isSixteenthFiveNational) baseList = (isSixteenthvietnam ? subjectsSixteenthvietnam : (isSixteenthbrunei ? subjectsSixteenthbrunei : (isSixteenthkazakhstan ? subjectsSixteenthkazakhstan : (isSixteenthkyrgyzstan ? subjectsSixteenthkyrgyzstan : (isSixteenthturkmenistan ? subjectsSixteenthturkmenistan : [])))));
    if (isFifteenthFiveNational) baseList = (isFifteenthlaos ? subjectsFifteenthlaos : (isFifteenthmalaysia ? subjectsFifteenthmalaysia : (isFifteenthmongolia ? subjectsFifteenthmongolia : (isFifteenthnorthkorea ? subjectsFifteenthnorthkorea : (isFifteenthphilippines ? subjectsFifteenthphilippines : [])))));
    if (ispapuanewguineaNational) baseList = subjectspapuanewguinea;
    if (isparaguayNational) baseList = subjectsparaguay;
    if (isperuNational) baseList = subjectsperu;
    if (isphilippinesNational) baseList = subjectsphilippines;
    if (ispolandNational) baseList = subjectspoland;
    if (issaintluciaNational) baseList = subjectssaintlucia;
    if (issaintvincentNational) baseList = subjectssaintvincent;
    if (issamoaNational) baseList = subjectssamoa;
    if (issanmarinoNational) baseList = subjectssanmarino;
    if (issaotomeNational) baseList = subjectssaotome;
    if (isportugalNational) baseList = (window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Portugal"] && window.CBENexusSeventhFiveBanks["Portugal"].banks && window.CBENexusSeventhFiveBanks["Portugal"].banks[grade.value]) ? Object.keys(window.CBENexusSeventhFiveBanks["Portugal"].banks[grade.value]) : [];
    if (isqatarNational) baseList = (window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Qatar"] && window.CBENexusSeventhFiveBanks["Qatar"].banks && window.CBENexusSeventhFiveBanks["Qatar"].banks[grade.value]) ? Object.keys(window.CBENexusSeventhFiveBanks["Qatar"].banks[grade.value]) : [];
    if (isromaniaNational) baseList = (window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Romania"] && window.CBENexusSeventhFiveBanks["Romania"].banks && window.CBENexusSeventhFiveBanks["Romania"].banks[grade.value]) ? Object.keys(window.CBENexusSeventhFiveBanks["Romania"].banks[grade.value]) : [];
    if (isrussiaNational) baseList = (window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Russia"] && window.CBENexusSeventhFiveBanks["Russia"].banks && window.CBENexusSeventhFiveBanks["Russia"].banks[grade.value]) ? Object.keys(window.CBENexusSeventhFiveBanks["Russia"].banks[grade.value]) : [];
    if (issaintkittsNational) baseList = (window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"] && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[grade.value]) ? Object.keys(window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[grade.value]) : [];
    if (isnorwayNational) baseList = subjectsnorway;
    if (isomanNational) baseList = subjectsoman;
    if (ispakistanNational) baseList = subjectspakistan;
    if (ispalauNational) baseList = subjectspalau;
    if (ispanamaNational) baseList = subjectspanama;
    if (isNinthsaudiarabia) baseList = subjectsSaudiArabia;
    if (isNinthsenegal) baseList = subjectsSenegal;
    if (isNinthserbia) baseList = subjectsSerbia;
    if (isNinthseychelles) baseList = subjectsSeychelles;
    if (isNinthsierraleone) baseList = subjectsSierraLeone;
    if (isTenthsingapore) baseList = subjectsTenthsingapore;
    if (isTenthslovakia) baseList = subjectsTenthslovakia;
    if (isTenthslovenia) baseList = subjectsTenthslovenia;
    if (isTenthsolomonislands) baseList = subjectsTenthsolomonislands;
    if (isTenthsomalia) baseList = subjectsTenthsomalia;
    if (isEleventhsouthafrica) baseList = subjectsEleventhsouthafrica;
    if (isEleventhsouthkorea) baseList = subjectsEleventhsouthkorea;
    if (isEleventhsouthsudan) baseList = subjectsEleventhsouthsudan;
    if (isEleventhspain) baseList = subjectsEleventhspain;
    if (isEleventhsrilanka) baseList = subjectsEleventhsrilanka;
    if (isTwelfthsudan) baseList = subjectsTwelfthsudan;
    if (isTwelfthsuriname) baseList = subjectsTwelfthsuriname;
    if (isTwelfthsweden) baseList = subjectsTwelfthsweden;
    if (isTwelfthswitzerland) baseList = subjectsTwelfthswitzerland;
    if (isTwelfthsyria) baseList = subjectsTwelfthsyria;
    if (isThirteenthtajikistan) baseList = subjectsThirteenthtajikistan;
    if (isThirteenthtanzania) baseList = subjectsThirteenthtanzania;
    if (isThirteenththailand) baseList = subjectsThirteenththailand;
    if (isThirteenthtimorleste) baseList = subjectsThirteenthtimorleste;
    if (isThirteenthtogo) baseList = subjectsThirteenthtogo;
    if (isFourteenthbenin) baseList = subjectsFourteenthbenin;
    if (isFourteenthcambodia) baseList = subjectsFourteenthcambodia;
    if (isFourteenthchina) baseList = subjectsFourteenthchina;
    if (isFourteenthindonesia) baseList = subjectsFourteenthindonesia;
    if (isFourteenthjapan) baseList = subjectsFourteenthjapan;
    // Include every subject that has published Admin Dashboard questions for this grade.
    // This changes only discoverability/filtering; saved question text and answers are untouched.
    const adminSubjects = (Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [])
      .filter((item) => item && item.published !== false &&
        String(item.country || "Kenya").toLowerCase() === String(country && country.value || "Kenya").trim().toLowerCase() &&
        String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase() &&
        gradeNumber(item.grade) === gradeNumber(grade.value) &&
        String(item.subject || "").trim() &&
        String(item.question || "").trim() &&
        Array.isArray(item.options) && item.options.length >= 4)
      .map((item) => String(item.subject).trim());
    const seen = new Set();
    const list = [...baseList, ...adminSubjects].filter((name) => {
      const key = normalizeSubject(name);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
    subject.innerHTML = "";
    list.forEach((name) => {
      const option = document.createElement("option");
      option.value = name;
      option.textContent = name;
      subject.appendChild(option);
    });
    subject.value = list.includes(current) ? current : list[0];
    refreshStrandOptions();
  }

  // Refresh the student subject selector after the published Admin Dashboard bank loads
  // or changes, so newly uploaded subjects are selectable without a manual page reload.
  if (window.CBENexusAdminQuestionsReady && typeof window.CBENexusAdminQuestionsReady.then === "function") {
    window.CBENexusAdminQuestionsReady.then(() => refreshSubjectOptions());
  }
  window.addEventListener("cbe:interactive-questions-updated", () => {
    Promise.resolve(window.CBENexusAdminQuestionsReady).then(() => refreshSubjectOptions());
  });

  const CUSTOM_QUESTIONS_KEY = "cbeNexusCustomQuestions";

  function readCustomQuestions() {
    try {
      const parsed = JSON.parse(localStorage.getItem(CUSTOM_QUESTIONS_KEY) || "[]");
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveCustomQuestions(items) {
    localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(items.slice(0, 500)));
  }

  function getGradeQuestionBank(selectedGrade, selectedSubject) {
    const gradeNumber = (value) => String(value == null ? "" : value).toLowerCase().replace(/[^a-z0-9]/g, "");
    const normalizeSubject = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const selectedCountry = String(country && country.value || "Kenya").trim();
    const selectedCurriculum = String(curriculum && curriculum.value || "Kenya CBC/CBE").trim();
    const isKenyaCbc = selectedCountry.toLowerCase() === "kenya" && selectedCurriculum.toLowerCase() === "kenya cbc/cbe";
    const isNigeriaNERDC = selectedCountry.toLowerCase() === "nigeria" && selectedCurriculum.toLowerCase() === "nigeria nerdc curriculum / waec / neco";
    const isTanzaniaTIE = selectedCountry.toLowerCase() === "tanzania" && selectedCurriculum.toLowerCase() === "tanzania tie curriculum / necta";
    const isEstoniaNational = selectedCountry.toLowerCase() === "estonia" && selectedCurriculum.toLowerCase() === "estonia national curriculum (basic school) / harno";
    const isLatviaNational = selectedCountry.toLowerCase() === "latvia" && selectedCurriculum.toLowerCase() === "latvia national basic education standard / skola2030";
    const isLithuaniaNational = selectedCountry.toLowerCase() === "lithuania" && selectedCurriculum.toLowerCase() === "lithuanian national curriculum / general programmes (v-1269)";
    const isLuxembourgESC = selectedCountry.toLowerCase() === "luxembourg" && selectedCurriculum.toLowerCase() === "luxembourg national curriculum / classical secondary education (esc)";
    const isMaltaNational = selectedCountry.toLowerCase() === "malta" && selectedCurriculum.toLowerCase() === "malta national curriculum framework / learning outcomes framework / secondary year 9";
    const isMauritiusNational = selectedCountry.toLowerCase() === "mauritius" && selectedCurriculum.toLowerCase() === "mauritius national curriculum framework grades 7–9 / national certificate of education (nce)";
    const isMauritaniaNational = selectedCountry.toLowerCase() === "mauritania" && selectedCurriculum.toLowerCase() === "mauritania national curriculum / new republican school (école républicaine) — secondary supplementary pathway";
    const isMexicoNational = selectedCountry.toLowerCase() === "mexico" && selectedCurriculum.toLowerCase() === "mexico sep plan de estudio 2022 / fase 6 (secondary)";
    const isMicronesiaNational = selectedCountry.toLowerCase() === "micronesia" && selectedCurriculum.toLowerCase() === "federated states of micronesia national curriculum standards and benchmarks / secondary supplementary";
    const isMoldovaNational = selectedCountry.toLowerCase() === "moldova" && selectedCurriculum.toLowerCase() === "moldova national curriculum / gymnasium (grades v–ix)";
    const isMonacoNational = selectedCountry.toLowerCase() === "monaco" && selectedCurriculum.toLowerCase() === "monaco national education programme / french national programmes with monaco-specific history";
    const ismarshallislandsNational = selectedCountry.toLowerCase() === "marshall islands" && selectedCurriculum.toLowerCase() === "marshall islands public school system curriculum / misat grade 8";
    const ismongoliaNational = selectedCountry.toLowerCase() === "mongolia" && selectedCurriculum.toLowerCase() === "mongolia national core curriculum for basic education (2019) / grade 9";
    const ismontenegroNational = selectedCountry.toLowerCase() === "montenegro" && selectedCurriculum.toLowerCase() === "montenegro publicly valid nine-year basic education programme / grade ix";
    const ismoroccoNational = selectedCountry.toLowerCase() === "morocco" && selectedCurriculum.toLowerCase() === "morocco national curriculum / common core secondary (tronc commun scientifique) — supplementary";
    const ismozambiqueNational = selectedCountry.toLowerCase() === "mozambique" && selectedCurriculum.toLowerCase() === "mozambique secondary education curriculum plan / 10th class (2nd cycle)";
    const ismyanmarNational = selectedCountry.toLowerCase() === "myanmar" && selectedCurriculum.toLowerCase() === "myanmar basic education curriculum / grade 9 — supplementary pathway";
    const isnamibiaNational = selectedCountry.toLowerCase() === "namibia" && selectedCurriculum.toLowerCase() === "namibia national curriculum for basic education / junior secondary grade 9";
    const isnauruNational = selectedCountry.toLowerCase() === "nauru" && selectedCurriculum.toLowerCase() === "nauru national curriculum / year 10 — supplementary learning strands";
    const isnepalNational = selectedCountry.toLowerCase() === "nepal" && selectedCurriculum.toLowerCase() === "nepal secondary education curriculum 2078 / grade 9 — compulsory subjects";
    const isnetherlandsNational = selectedCountry.toLowerCase() === "netherlands" && selectedCurriculum.toLowerCase() === "netherlands slo core objectives / lower secondary (vo onderbouw) — supplementary";
    const isnewzealandNational = selectedCountry.toLowerCase() === "new zealand" && selectedCurriculum.toLowerCase() === "new zealand national curriculum statement 2026 / te mātaiaho / year 10";
    const isnicaraguaNational = selectedCountry.toLowerCase() === "nicaragua" && selectedCurriculum.toLowerCase() === "nicaragua regular secondary education / 9° (fourth cycle)";
    const isnigerNational = selectedCountry.toLowerCase() === "niger" && selectedCurriculum.toLowerCase() === "niger general secondary education / second cycle (lycée) — official programme reference";
    const isnorthkoreaNational = selectedCountry.toLowerCase() === "north korea" && selectedCurriculum.toLowerCase() === "dpr korea 12-year compulsory education / lower secondary year 3 — supplementary";
    const isnorthmacedoniaNational = selectedCountry.toLowerCase() === "north macedonia" && selectedCurriculum.toLowerCase() === "north macedonia primary education concept / grade ix — supplementary subject starters";
    const isnorwayNational = selectedCountry.toLowerCase() === "norway" && selectedCurriculum.toLowerCase() === "norway national curriculum / kunnskapsløftet 2020 (lk20) / year 10";
    const isomanNational = selectedCountry.toLowerCase() === "oman" && selectedCurriculum.toLowerCase() === "oman ministry of education curriculum frameworks 2026 / grade 10";
    const ispakistanNational = selectedCountry.toLowerCase() === "pakistan" && selectedCurriculum.toLowerCase() === "pakistan national curriculum 2026 (ncp-2026) / grade 9 — federal & ict scope";
    const ispalauNational = selectedCountry.toLowerCase() === "palau" && selectedCurriculum.toLowerCase() === "palau ministry of education curriculum frameworks / grade 9 — supplementary";
    const ispanamaNational = selectedCountry.toLowerCase() === "panama" && selectedCurriculum.toLowerCase() === "panama meduca educación básica general / premedia 9°";
    const ispapuanewguineaNational = selectedCountry.toLowerCase() === "papua new guinea" && selectedCurriculum.toLowerCase() === "png national curriculum / grade 10 & 12 national examinations";
    const isparaguayNational = selectedCountry.toLowerCase() === "paraguay" && selectedCurriculum.toLowerCase() === "paraguay educación escolar básica / tercer ciclo / 9° grado";
    const isperuNational = selectedCountry.toLowerCase() === "peru" && selectedCurriculum.toLowerCase() === "perú currículo nacional de la educación básica / educación secundaria / 3°";
    const isphilippinesNational = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped k to 12 / matatag";
    const ispolandNational = selectedCountry.toLowerCase() === "poland" && selectedCurriculum.toLowerCase() === "poland podstawa programowa / szkoła podstawowa / klasa viii";
    const isportugalNational = selectedCountry.toLowerCase() === "portugal" && selectedCurriculum.toLowerCase() === "portugal aprendizagens essenciais / 3.º ciclo / 9.º ano";
    const isqatarNational = selectedCountry.toLowerCase() === "qatar" && selectedCurriculum.toLowerCase() === "qatar national curriculum / preparatory stage / grade 9";
    const isromaniaNational = selectedCountry.toLowerCase() === "romania" && selectedCurriculum.toLowerCase() === "romania national curriculum / gimnaziu / grade viii";
    const isrussiaNational = selectedCountry.toLowerCase() === "russia" && selectedCurriculum.toLowerCase() === "russian federal state educational standards / basic general education / grade 9";
    const issaintkittsNational = selectedCountry.toLowerCase() === "saint kitts and nevis" && selectedCurriculum.toLowerCase() === "saint kitts and nevis secondary education / form 3 / csec preparation pathway";
    const issaintluciaNational = selectedCountry.toLowerCase() === "saint lucia" && selectedCurriculum.toLowerCase() === "saint lucia national curriculum / lower secondary / form 3";
    const isNinthsaudiarabia = selectedCountry.toLowerCase() === "saudi arabia" && selectedCurriculum.toLowerCase() === "saudi ministry of education curriculum / intermediate grade 9 / third intermediate";
    const isTenthsingapore = selectedCountry.toLowerCase() === "singapore" && selectedCurriculum.toLowerCase() === "singapore moe lower secondary curriculum / secondary 2 / g2-g3";
    const isTenthslovakia = selectedCountry.toLowerCase() === "slovakia" && selectedCurriculum.toLowerCase() === "slovakia state educational programme for basic education / 9th grade";
    const isTenthslovenia = selectedCountry.toLowerCase() === "slovenia" && selectedCurriculum.toLowerCase() === "slovenia basic school national curriculum / 9th grade";
    const isTenthsolomonislands = selectedCountry.toLowerCase() === "solomon islands" && selectedCurriculum.toLowerCase() === "solomon islands national curriculum / junior secondary year 9 / form 3";
    const isTenthsomalia = selectedCountry.toLowerCase() === "somalia" && selectedCurriculum.toLowerCase() === "somalia national education curriculum / secondary form 1 (grade 9)";
    const isEleventhsouthafrica = selectedCountry.toLowerCase() === "south africa" && selectedCurriculum.toLowerCase() === "south africa caps / senior phase / grade 9";
    const isEleventhsouthkorea = selectedCountry.toLowerCase() === "south korea" && selectedCurriculum.toLowerCase() === "south korea 2022 revised national curriculum / middle school grade 3";
    const isEleventhsouthsudan = selectedCountry.toLowerCase() === "south sudan" && selectedCurriculum.toLowerCase() === "south sudan national general education policy / national curriculum framework (secondary supplementary)";
    const isEleventhspain = selectedCountry.toLowerCase() === "spain" && selectedCurriculum.toLowerCase() === "spain lomloe / educación secundaria obligatoria / 3º eso";
    const isEleventhsrilanka = selectedCountry.toLowerCase() === "sri lanka" && selectedCurriculum.toLowerCase() === "sri lanka national curriculum / grade 9 (current syllabus; reform transition noted)";
    const isTwelfthsudan = selectedCountry.toLowerCase() === "sudan" && selectedCurriculum.toLowerCase() === "sudan ministry of education curriculum / intermediate stage / third intermediate";
    const isTwelfthsuriname = selectedCountry.toLowerCase() === "suriname" && selectedCurriculum.toLowerCase() === "suriname minowc / secondary education / leerjaar 9 istreams";
    const isTwelfthsweden = selectedCountry.toLowerCase() === "sweden" && selectedCurriculum.toLowerCase() === "sweden national curriculum lgr22 / compulsory school / year 9";
    const isTwelfthswitzerland = selectedCountry.toLowerCase() === "switzerland" && selectedCurriculum.toLowerCase() === "switzerland cantonal curriculum / lower secondary cycle 3 / final year";
    const isTwelfthsyria = selectedCountry.toLowerCase() === "syria" && selectedCurriculum.toLowerCase() === "syria ministry of education / national curriculum / grade 9";
    const isThirteenthtajikistan = selectedCountry.toLowerCase() === "tajikistan" && selectedCurriculum.toLowerCase() === "tajikistan state standard of general education / basic general education / grade 9";
    const isThirteenthtanzania = selectedCountry.toLowerCase() === "tanzania" && selectedCurriculum.toLowerCase() === "tanzania tie curriculum for ordinary secondary education / form ii (2023)";
    const isThirteenththailand = selectedCountry.toLowerCase() === "thailand" && selectedCurriculum.toLowerCase() === "thailand basic education core curriculum b.e. 2551 (2008), revised 2017 / matthayom 3";
    const isThirteenthtimorleste = selectedCountry.toLowerCase() === "timor-leste" && selectedCurriculum.toLowerCase() === "timor-leste national basic education curriculum / third cycle / grade 9 (2024 revised framework)";
    const isThirteenthtogo = selectedCountry.toLowerCase() === "togo" && selectedCurriculum.toLowerCase() === "togo national curriculum / collège / classe de troisième (3e)";
    const isFourteenthbenin = selectedCountry.toLowerCase() === "benin" && selectedCurriculum.toLowerCase() === "benin national curriculum / enseignement secondaire général / classe de troisième (3e)";
    const isFifteenthlaos = selectedCountry.toLowerCase() === "laos" && selectedCurriculum.toLowerCase() === "lao national curriculum for lower secondary education / grade 9";
    const isFifteenthmalaysia = selectedCountry.toLowerCase() === "malaysia" && selectedCurriculum.toLowerCase() === "malaysia kssm / secondary school standard curriculum / form 3";
    const isFifteenthmongolia = selectedCountry.toLowerCase() === "mongolia" && selectedCurriculum.toLowerCase() === "mongolia general education curriculum / basic education / grade 9";
    const isFifteenthnorthkorea = selectedCountry.toLowerCase() === "north korea" && selectedCurriculum.toLowerCase() === "dpr korea general education system / lower secondary / year 3 (grade 9) — supplementary pathway";
    const isFifteenthphilippines = selectedCountry.toLowerCase() === "philippines" && selectedCurriculum.toLowerCase() === "philippines deped revised k to 10 / matatag curriculum / grade 9 (sy 2026–2027)";
    const isSixteenthvietnam = selectedCountry.toLowerCase() === "vietnam" && selectedCurriculum.toLowerCase() === "vietnam general education curriculum 2018 / lower secondary / grade 9";
    const isSixteenthbrunei = selectedCountry.toLowerCase() === "brunei" && selectedCurriculum.toLowerCase() === "brunei spn21 / general secondary education programme / year 9";
    const isSixteenthkazakhstan = selectedCountry.toLowerCase() === "kazakhstan" && selectedCurriculum.toLowerCase() === "kazakhstan state compulsory education standard / basic secondary / grade 9";
    const isSixteenthkyrgyzstan = selectedCountry.toLowerCase() === "kyrgyzstan" && selectedCurriculum.toLowerCase() === "kyrgyz republic state educational standard / basic general education / grade 9";
    const isSixteenthturkmenistan = selectedCountry.toLowerCase() === "turkmenistan" && selectedCurriculum.toLowerCase() === "turkmenistan general education programme / basic secondary / grade 9";
    const isFourteenthcambodia = selectedCountry.toLowerCase() === "cambodia" && selectedCurriculum.toLowerCase() === "cambodia moeys general education curriculum framework / lower secondary / grade 9";
    const isFourteenthchina = selectedCountry.toLowerCase() === "china" && selectedCurriculum.toLowerCase() === "china ministry of education compulsory education curriculum standards (2022) / grade 9";
    const isFourteenthindonesia = selectedCountry.toLowerCase() === "indonesia" && selectedCurriculum.toLowerCase() === "indonesia national curriculum / grade ix (kelas ix) / kurikulum merdeka and transition provisions";
    const isFourteenthjapan = selectedCountry.toLowerCase() === "japan" && selectedCurriculum.toLowerCase() === "japan mext courses of study / lower secondary school / year 3 (grade 9)";
    const isNinthsenegal = selectedCountry.toLowerCase() === "senegal" && selectedCurriculum.toLowerCase() === "senegal national curriculum / collège / troisième (3e)";
    const isNinthserbia = selectedCountry.toLowerCase() === "serbia" && selectedCurriculum.toLowerCase() === "serbia national curriculum / primary education / grade 8";
    const isNinthseychelles = selectedCountry.toLowerCase() === "seychelles" && selectedCurriculum.toLowerCase() === "seychelles national curriculum framework / secondary 3 (s3)";
    const isNinthsierraleone = selectedCountry.toLowerCase() === "sierra leone" && selectedCurriculum.toLowerCase() === "sierra leone mbsse national senior secondary curriculum framework / sss 1 / sciences and technologies";
    const issaintvincentNational = selectedCountry.toLowerCase() === "saint vincent and the grenadines" && selectedCurriculum.toLowerCase() === "saint vincent and the grenadines national curriculum / secondary form 3 / csec pathway";
    const issamoaNational = selectedCountry.toLowerCase() === "samoa" && selectedCurriculum.toLowerCase() === "samoa national curriculum / secondary year 9";
    const issanmarinoNational = selectedCountry.toLowerCase() === "san marino" && selectedCurriculum.toLowerCase() === "san marino scuola media / classe terza";
    const issaotomeNational = selectedCountry.toLowerCase() === "sao tome and principe" && selectedCurriculum.toLowerCase() === "sao tome and principe national curriculum / 9ª classe / ensino básico 7ª–9ª";
    const gradeBank = isKenyaCbc && window.CBENexusCBCBanks &&
      window.CBENexusCBCBanks.banks && window.CBENexusCBCBanks.banks[selectedGrade] && window.CBENexusCBCBanks.banks[selectedGrade][selectedSubject] ||
      isNigeriaNERDC && window.CBENexusNigeriaBanks &&
      window.CBENexusNigeriaBanks.banks && window.CBENexusNigeriaBanks.banks[selectedGrade] && window.CBENexusNigeriaBanks.banks[selectedGrade][selectedSubject] ||
      isTanzaniaTIE && window.CBENexusTanzaniaBanks && window.CBENexusTanzaniaBanks.banks && window.CBENexusTanzaniaBanks.banks[selectedGrade] && window.CBENexusTanzaniaBanks.banks[selectedGrade][selectedSubject] ||
      isEstoniaNational && window.CBENexusEstoniaBanks && window.CBENexusEstoniaBanks.banks && window.CBENexusEstoniaBanks.banks[selectedGrade] && window.CBENexusEstoniaBanks.banks[selectedGrade][selectedSubject] ||
      isLatviaNational && window.CBENexusLatviaBanks && window.CBENexusLatviaBanks.banks && window.CBENexusLatviaBanks.banks[selectedGrade] && window.CBENexusLatviaBanks.banks[selectedGrade][selectedSubject] ||
      isLithuaniaNational && window.CBENexusLithuaniaBanks && window.CBENexusLithuaniaBanks.banks && window.CBENexusLithuaniaBanks.banks[selectedGrade] && window.CBENexusLithuaniaBanks.banks[selectedGrade][selectedSubject] ||
      isLuxembourgESC && window.CBENexusLuxembourgBanks && window.CBENexusLuxembourgBanks.banks && window.CBENexusLuxembourgBanks.banks[selectedGrade] && window.CBENexusLuxembourgBanks.banks[selectedGrade][selectedSubject] ||
      isMaltaNational && window.CBENexusMaltaBanks && window.CBENexusMaltaBanks.banks && window.CBENexusMaltaBanks.banks[selectedGrade] && window.CBENexusMaltaBanks.banks[selectedGrade][selectedSubject] ||
      isMauritiusNational && window.CBENexusMauritiusBanks && window.CBENexusMauritiusBanks.banks && window.CBENexusMauritiusBanks.banks[selectedGrade] && window.CBENexusMauritiusBanks.banks[selectedGrade][selectedSubject] ||
      isMauritaniaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mauritania"] && window.CBENexusFiveCountryBanks["Mauritania"].banks && window.CBENexusFiveCountryBanks["Mauritania"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Mauritania"].banks[selectedGrade][selectedSubject] ||
      isMexicoNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Mexico"] && window.CBENexusFiveCountryBanks["Mexico"].banks && window.CBENexusFiveCountryBanks["Mexico"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Mexico"].banks[selectedGrade][selectedSubject] ||
      isMicronesiaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Micronesia"] && window.CBENexusFiveCountryBanks["Micronesia"].banks && window.CBENexusFiveCountryBanks["Micronesia"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Micronesia"].banks[selectedGrade][selectedSubject] ||
      isMoldovaNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Moldova"] && window.CBENexusFiveCountryBanks["Moldova"].banks && window.CBENexusFiveCountryBanks["Moldova"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Moldova"].banks[selectedGrade][selectedSubject] ||
      isMonacoNational && window.CBENexusFiveCountryBanks && window.CBENexusFiveCountryBanks["Monaco"] && window.CBENexusFiveCountryBanks["Monaco"].banks && window.CBENexusFiveCountryBanks["Monaco"].banks[selectedGrade] && window.CBENexusFiveCountryBanks["Monaco"].banks[selectedGrade][selectedSubject] ||
      ismarshallislandsNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Marshall Islands"] && window.CBENexusNextFiveBanks["Marshall Islands"].banks && window.CBENexusNextFiveBanks["Marshall Islands"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Marshall Islands"].banks[selectedGrade][selectedSubject] ||
      ismongoliaNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mongolia"] && window.CBENexusNextFiveBanks["Mongolia"].banks && window.CBENexusNextFiveBanks["Mongolia"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Mongolia"].banks[selectedGrade][selectedSubject] ||
      ismontenegroNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Montenegro"] && window.CBENexusNextFiveBanks["Montenegro"].banks && window.CBENexusNextFiveBanks["Montenegro"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Montenegro"].banks[selectedGrade][selectedSubject] ||
      ismoroccoNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Morocco"] && window.CBENexusNextFiveBanks["Morocco"].banks && window.CBENexusNextFiveBanks["Morocco"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Morocco"].banks[selectedGrade][selectedSubject] ||
      ismozambiqueNational && window.CBENexusNextFiveBanks && window.CBENexusNextFiveBanks["Mozambique"] && window.CBENexusNextFiveBanks["Mozambique"].banks && window.CBENexusNextFiveBanks["Mozambique"].banks[selectedGrade] && window.CBENexusNextFiveBanks["Mozambique"].banks[selectedGrade][selectedSubject] ||
      ismyanmarNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Myanmar"] && window.CBENexusThirdFiveBanks["Myanmar"].banks && window.CBENexusThirdFiveBanks["Myanmar"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Myanmar"].banks[selectedGrade][selectedSubject] ||
      isnamibiaNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Namibia"] && window.CBENexusThirdFiveBanks["Namibia"].banks && window.CBENexusThirdFiveBanks["Namibia"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Namibia"].banks[selectedGrade][selectedSubject] ||
      isnauruNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nauru"] && window.CBENexusThirdFiveBanks["Nauru"].banks && window.CBENexusThirdFiveBanks["Nauru"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Nauru"].banks[selectedGrade][selectedSubject] ||
      isnepalNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Nepal"] && window.CBENexusThirdFiveBanks["Nepal"].banks && window.CBENexusThirdFiveBanks["Nepal"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Nepal"].banks[selectedGrade][selectedSubject] ||
      isnetherlandsNational && window.CBENexusThirdFiveBanks && window.CBENexusThirdFiveBanks["Netherlands"] && window.CBENexusThirdFiveBanks["Netherlands"].banks && window.CBENexusThirdFiveBanks["Netherlands"].banks[selectedGrade] && window.CBENexusThirdFiveBanks["Netherlands"].banks[selectedGrade][selectedSubject] ||
      isnewzealandNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["New Zealand"] && window.CBENexusFourthFiveBanks["New Zealand"].banks && window.CBENexusFourthFiveBanks["New Zealand"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["New Zealand"].banks[selectedGrade][selectedSubject] ||
      isnicaraguaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Nicaragua"] && window.CBENexusFourthFiveBanks["Nicaragua"].banks && window.CBENexusFourthFiveBanks["Nicaragua"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["Nicaragua"].banks[selectedGrade][selectedSubject] ||
      isnigerNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["Niger"] && window.CBENexusFourthFiveBanks["Niger"].banks && window.CBENexusFourthFiveBanks["Niger"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["Niger"].banks[selectedGrade][selectedSubject] ||
      isnorthkoreaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Korea"] && window.CBENexusFourthFiveBanks["North Korea"].banks && window.CBENexusFourthFiveBanks["North Korea"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["North Korea"].banks[selectedGrade][selectedSubject] ||
      isnorthmacedoniaNational && window.CBENexusFourthFiveBanks && window.CBENexusFourthFiveBanks["North Macedonia"] && window.CBENexusFourthFiveBanks["North Macedonia"].banks && window.CBENexusFourthFiveBanks["North Macedonia"].banks[selectedGrade] && window.CBENexusFourthFiveBanks["North Macedonia"].banks[selectedGrade][selectedSubject] ||
      isnorwayNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Norway"] && window.CBENexusFifthFiveBanks["Norway"].banks && window.CBENexusFifthFiveBanks["Norway"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Norway"].banks[selectedGrade][selectedSubject] ||
      isomanNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Oman"] && window.CBENexusFifthFiveBanks["Oman"].banks && window.CBENexusFifthFiveBanks["Oman"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Oman"].banks[selectedGrade][selectedSubject] ||
      ispakistanNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Pakistan"] && window.CBENexusFifthFiveBanks["Pakistan"].banks && window.CBENexusFifthFiveBanks["Pakistan"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Pakistan"].banks[selectedGrade][selectedSubject] ||
      ispalauNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Palau"] && window.CBENexusFifthFiveBanks["Palau"].banks && window.CBENexusFifthFiveBanks["Palau"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Palau"].banks[selectedGrade][selectedSubject] ||
      ispanamaNational && window.CBENexusFifthFiveBanks && window.CBENexusFifthFiveBanks["Panama"] && window.CBENexusFifthFiveBanks["Panama"].banks && window.CBENexusFifthFiveBanks["Panama"].banks[selectedGrade] && window.CBENexusFifthFiveBanks["Panama"].banks[selectedGrade][selectedSubject] ||
      ispapuanewguineaNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Papua New Guinea"] && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Papua New Guinea"].banks[selectedGrade][selectedSubject] ||
      isparaguayNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Paraguay"] && window.CBENexusSixthFiveBanks["Paraguay"].banks && window.CBENexusSixthFiveBanks["Paraguay"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Paraguay"].banks[selectedGrade][selectedSubject] ||
      isperuNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Peru"] && window.CBENexusSixthFiveBanks["Peru"].banks && window.CBENexusSixthFiveBanks["Peru"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Peru"].banks[selectedGrade][selectedSubject] ||
      isphilippinesNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Philippines"] && window.CBENexusSixthFiveBanks["Philippines"].banks && window.CBENexusSixthFiveBanks["Philippines"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Philippines"].banks[selectedGrade][selectedSubject] ||
      ispolandNational && window.CBENexusSixthFiveBanks && window.CBENexusSixthFiveBanks["Poland"] && window.CBENexusSixthFiveBanks["Poland"].banks && window.CBENexusSixthFiveBanks["Poland"].banks[selectedGrade] && window.CBENexusSixthFiveBanks["Poland"].banks[selectedGrade][selectedSubject] ||

      isportugalNational && window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Portugal"] && window.CBENexusSeventhFiveBanks["Portugal"].banks && window.CBENexusSeventhFiveBanks["Portugal"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Portugal"].banks[selectedGrade][selectedSubject] ||
      isqatarNational && window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Qatar"] && window.CBENexusSeventhFiveBanks["Qatar"].banks && window.CBENexusSeventhFiveBanks["Qatar"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Qatar"].banks[selectedGrade][selectedSubject] ||
      isromaniaNational && window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Romania"] && window.CBENexusSeventhFiveBanks["Romania"].banks && window.CBENexusSeventhFiveBanks["Romania"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Romania"].banks[selectedGrade][selectedSubject] ||
      isrussiaNational && window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Russia"] && window.CBENexusSeventhFiveBanks["Russia"].banks && window.CBENexusSeventhFiveBanks["Russia"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Russia"].banks[selectedGrade][selectedSubject] ||
      issaintkittsNational && window.CBENexusSeventhFiveBanks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"] && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[selectedGrade] && window.CBENexusSeventhFiveBanks["Saint Kitts and Nevis"].banks[selectedGrade][selectedSubject] ||
      issaintluciaNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Saint Lucia"] && window.CBENexusEighthFiveBanks["Saint Lucia"].banks && window.CBENexusEighthFiveBanks["Saint Lucia"].banks[selectedGrade] && window.CBENexusEighthFiveBanks["Saint Lucia"].banks[selectedGrade][selectedSubject] ||
      issaintvincentNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"] && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks[selectedGrade] && window.CBENexusEighthFiveBanks["Saint Vincent and the Grenadines"].banks[selectedGrade][selectedSubject] ||
      issamoaNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Samoa"] && window.CBENexusEighthFiveBanks["Samoa"].banks && window.CBENexusEighthFiveBanks["Samoa"].banks[selectedGrade] && window.CBENexusEighthFiveBanks["Samoa"].banks[selectedGrade][selectedSubject] ||
      issanmarinoNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["San Marino"] && window.CBENexusEighthFiveBanks["San Marino"].banks && window.CBENexusEighthFiveBanks["San Marino"].banks[selectedGrade] && window.CBENexusEighthFiveBanks["San Marino"].banks[selectedGrade][selectedSubject] ||
      issaotomeNational && window.CBENexusEighthFiveBanks && window.CBENexusEighthFiveBanks["Sao Tome and Principe"] && window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks && window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks[selectedGrade] && window.CBENexusEighthFiveBanks["Sao Tome and Principe"].banks[selectedGrade][selectedSubject] ||
      null;

    const adminQuestions = Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : [];
    const publishedSource = adminQuestions.filter((item) =>
      String(item.country || "Kenya").toLowerCase() === selectedCountry.toLowerCase() &&
      String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === selectedCurriculum.toLowerCase() &&
      gradeNumber(item.grade) === gradeNumber(selectedGrade) &&
      normalizeSubject(item.subject) === normalizeSubject(selectedSubject) &&
      item.published !== false &&
      String(item.question || "").trim() &&
      Array.isArray(item.options) && item.options.length >= 4
    );
    const publishedBank = publishedSource.map((item) => [
      item.question,
      item.options,
      Number(item.correctIndex),
      item.strand || "All Topics",
      item.explanation || "",
      item.strand || "All Topics",
      "All Sub-Strands",
      "All Outcomes",
      item.strand || "",
      item.imageData || item.imageUrl || "",
      item.imageAlt || "Question diagram"
    ]);

    // Uploaded/published Admin Dashboard questions must never be silently replaced
    // with built-in or browser-local sample questions. Once a grade has a published
    // admin bank, use only the exact matching subject bank for that grade.
    const gradeHasPublishedAdminQuestions = adminQuestions.some((item) =>
      item && item.published !== false &&
      String(item.country || "Kenya").toLowerCase() === selectedCountry.toLowerCase() &&
      String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === selectedCurriculum.toLowerCase() &&
      gradeNumber(item.grade) === gradeNumber(selectedGrade) &&
      String(item.question || "").trim() &&
      Array.isArray(item.options) && item.options.length >= 4
    );
    let combined;
    const usingPublishedBank = publishedBank.length > 0;
    if (usingPublishedBank) {
      combined = publishedBank;
    } else if (gradeHasPublishedAdminQuestions) {
      combined = [];
    } else {
      const customBank = readCustomQuestions()
        .filter((item) =>
          String(item.country || "Kenya").toLowerCase() === selectedCountry.toLowerCase() &&
          String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === selectedCurriculum.toLowerCase() &&
          gradeNumber(item.grade) === gradeNumber(selectedGrade) &&
          normalizeSubject(item.subject) === normalizeSubject(selectedSubject)
        )
        .map((item) => [
          item.question, item.options, Number(item.correctIndex),
          item.strand || "All Topics", item.explanation || "",
          item.strand || "All Topics", item.subStrand || "All Sub-Strands",
          item.learningOutcome || "All Outcomes", item.contentCovered || ""
        ]);
      combined = (Array.isArray(gradeBank) ? gradeBank.slice() : []).concat(customBank);
    }

    const selectedStrand = strand ? strand.value : "All Topics";
    if (selectedStrand && selectedStrand !== "All Topics") {
      const selectedCurriculum = getCurriculumItems(selectedGrade, selectedSubject)
        .find((item) => String(item.id) === String(selectedStrand));
      const selectedLabels = new Set([
        String(selectedStrand),
        String(selectedCurriculum && selectedCurriculum.label || "")
      ].filter(Boolean));
      const matchesStrand = (item) => selectedLabels.has(String(item[5] || item[3] || ""));
      const topicMatches = combined.filter(matchesStrand);
      // Curriculum IDs and admin topic labels can differ. Never blank a valid
      // published bank just because its topic label is not in the curriculum map.
      if (topicMatches.length) combined = topicMatches;
      else if (!usingPublishedBank) {
        const allowedSubStrands = selectedCurriculum && Array.isArray(selectedCurriculum.subStrands)
          ? new Set(selectedCurriculum.subStrands.map((entry) => String(entry.id || entry.label || "")))
          : null;
        combined = combined.filter((item) => matchesStrand(item) ||
          Boolean(allowedSubStrands && allowedSubStrands.has(String(item[6] || ""))));
      }
    }

    // Admin questions currently store a topic, not sub-strand/outcome IDs.
    // Apply those deeper filters only to fallback banks that actually carry them.
    if (!usingPublishedBank) {
      const selectedSub = subStrand ? subStrand.value : "All Sub-Strands";
      if (selectedSub && selectedSub !== "All Sub-Strands") {
        combined = combined.filter((item) => String(item[6] || "") === String(selectedSub));
      }
      const selectedOutcome = outcome ? outcome.value : "All Outcomes";
      if (selectedOutcome && selectedOutcome !== "All Outcomes") {
        combined = combined.filter((item) => String(item[7] || "") === String(selectedOutcome));
      }
    }

    return combined;
  };

  function clearQuestionSetterForm() {
    [setQuestionText, setOptionA, setOptionB, setOptionC, setOptionD, setContentCovered, setExplanation]
      .forEach((el) => { if (el) el.value = ""; });
    if (setCorrectAnswer) setCorrectAnswer.value = "0";
  }

  function renderSetQuestions() {
    if (!setQuestionsList) return;
    const items = readCustomQuestions()
      .filter((item) => item.grade === grade.value && item.subject === subject.value);

    if (!items.length) {
      setQuestionsList.innerHTML = "<p>No custom questions have been set for this grade and subject yet.</p>";
      return;
    }

    setQuestionsList.innerHTML = items.map((item) =>
      "<article><strong>" + escapeHtml(item.question) + "</strong>" +
      "<span>" + escapeHtml(item.grade + " — " + item.subject + " — " + (item.strand || "All Topics")) + "</span>" +
      "<span>Correct answer: " + escapeHtml(item.options[item.correctIndex]) + "</span>" +
      "<button type='button' class='ghost-button delete-set-question' data-question-id='" + escapeHtml(item.id) + "'>Delete</button></article>"
    ).join("");

    setQuestionsList.querySelectorAll(".delete-set-question").forEach((button) => {
      button.addEventListener("click", () => {
        saveCustomQuestions(readCustomQuestions().filter((item) => item.id !== button.dataset.questionId));
        renderSetQuestions();
        if (questionSetterStatus) questionSetterStatus.textContent = "Question deleted.";
      });
    });
  }

  function saveSetQuestion() {
    const question = String(setQuestionText && setQuestionText.value || "").trim();
    const options = [
      String(setOptionA && setOptionA.value || "").trim(),
      String(setOptionB && setOptionB.value || "").trim(),
      String(setOptionC && setOptionC.value || "").trim(),
      String(setOptionD && setOptionD.value || "").trim()
    ];
    const correctIndex = Number(setCorrectAnswer && setCorrectAnswer.value || 0);

    if (!question || options.some((value) => !value)) {
      if (questionSetterStatus) questionSetterStatus.textContent = "Enter the question and all four answer options.";
      return;
    }

    const items = readCustomQuestions();
    items.unshift({
      id: "custom-" + Date.now(),
      country: country ? country.value.trim() : "Kenya",
      curriculum: curriculum ? curriculum.value.trim() : "Kenya CBC/CBE",
      grade: grade.value,
      subject: subject.value,
      strand: strand ? strand.value : "All Topics",
      subStrand: subStrand ? subStrand.value : "All Sub-Strands",
      learningOutcome: outcome ? outcome.value : "All Outcomes",
      contentCovered: String(setContentCovered && setContentCovered.value || "").trim(),
      question,
      options,
      correctIndex,
      explanation: String(setExplanation && setExplanation.value || "").trim() || "Review the curriculum content and reasoning behind the correct answer.",
      createdAt: new Date().toISOString()
    });
    saveCustomQuestions(items);
    renderSetQuestions();
    clearQuestionSetterForm();
    if (questionSetterStatus) questionSetterStatus.textContent = "Question saved. It will be included in the next quiz for this selection.";
  }

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
        list.length + " quiz attempt" + (list.length === 1 ? "" : "s") + " | Latest: " + escapeHtml(latest.grade || "") + " " + escapeHtml(latest.subject || "") + " | " + escapeHtml(latest.strand || "All Topics") +
        "</span></div><div class=\"progress-score\">" + average + "%<small>average</small></div></div>" +
        "<div class=\"progress-stats\"><div><strong>" + best + "%</strong><span>Best Score</span></div><div><strong>" + list.length +
        "</strong><span>Quizzes</span></div><div><strong>" + latest.score + "%</strong><span>Latest</span></div></div>" +
        "<div class=\"progress-subject-list\">" + subjectHtml + "</div>" +
        "<div class=\"progress-meter large\"><span style=\"width:" + average + "%\"></span></div>" +
        "</article>";
    }).join("");
  }

  function renderLearningGaps() {
    const gapBox = document.getElementById("learningGapsReport");
    if (!gapBox) return;

    const attempts = readProgress();
    if (!attempts.length) {
      gapBox.innerHTML = "<div class=\"empty-state\">Complete an assessment to identify learning gaps and receive targeted remediation.</div>";
      return;
    }

    const gaps = {};
    attempts.forEach((attempt) => {
      (attempt.results || []).forEach((r) => {
        if (!r.isCorrect) {
          const key = [attempt.learner, attempt.grade, attempt.subject, r.topic || "General"].join("|");
          if (!gaps[key]) {
            gaps[key] = {
              learner: attempt.learner,
              grade: attempt.grade,
              subject: attempt.subject,
              topic: r.topic || "General",
              missed: 0,
              questions: []
            };
          }
          gaps[key].missed++;
          gaps[key].questions.push(r.question);
        }
      });
    });

    const list = Object.values(gaps)
      .sort((a,b) => b.missed - a.missed)
      .slice(0, 20);

    if (!list.length) {
      gapBox.innerHTML = "<div class=\"gap-success\"><strong>No identified gaps yet.</strong><span>The learner has answered all recorded questions correctly.</span></div>";
      return;
    }

    gapBox.innerHTML = "<div class=\"gap-intro\"><strong>Targeted remediation</strong><span>Gaps are identified from incorrect answers by grade, subject and strand/topic. Start a focused practice quiz instead of repeating the whole assessment.</span></div>" +
      list.map((gap) => {
        const safeTopic = escapeHtml(gap.topic);
        return "<article class=\"learning-gap-card\">" +
          "<div><strong>" + escapeHtml(gap.subject) + " — " + safeTopic + "</strong><span>" + escapeHtml(gap.grade) + " | " + gap.missed + " missed question" + (gap.missed === 1 ? "" : "s") + "</span></div>" +
          "<button type=\"button\" class=\"primary-button remedial-button\" data-remedial-grade=\"" + escapeHtml(gap.grade) + "\" data-remedial-subject=\"" + escapeHtml(gap.subject) + "\" data-remedial-topic=\"" + safeTopic + "\">Remediate This Gap</button>" +
          "</article>";
      }).join("");

    gapBox.querySelectorAll(".remedial-button").forEach((button) => {
      button.addEventListener("click", () => {
        const targetGrade = button.dataset.remedialGrade;
        const targetSubject = button.dataset.remedialSubject;
        const targetTopic = button.dataset.remedialTopic;

        grade.value = targetGrade;
        refreshSubjectOptions();
        subject.value = targetSubject;
        refreshStrandOptions();
        strand.value = targetTopic;

        mode.value = "practice";
        length.value = "50";
        if (instructions) {
          instructions.innerHTML = "<strong>Remedial Practice</strong> — " +
            escapeHtml(targetGrade + " " + targetSubject + " — " + targetTopic) +
            ". Questions will focus on this identified gap.";
        }
        if (status) status.textContent = "Remedial quiz selected. Click Start / Restart Quiz.";
        document.getElementById("quizCentre")?.scrollIntoView({behavior:"smooth", block:"start"});
      });
    });
  }

  function updateTimer() {
    if (!startedAt) {
      timer.textContent = "Time: 00:00";
      return;
    }
    const elapsed = Math.floor((Date.now() - startedAt) / 1000);
    const mm = String(Math.floor(elapsed / 60)).padStart(2, "0");
    const ss = String(elapsed % 60).padStart(2, "0");
    const remaining = Math.max(0, 4500 - elapsed);
    const remainingHours = String(Math.floor(remaining / 3600)).padStart(2, "0");
    const remainingMinutes = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
    const remainingSeconds = String(remaining % 60).padStart(2, "0");
    timer.textContent = mode.value === "assessment"
      ? "Time remaining: " + remainingHours + ":" + remainingMinutes + ":" + remainingSeconds + " (maximum 1 hour 15 minutes)"
      : "Time: " + mm + ":" + ss + " — practice mode";
    if (mode.value === "assessment" && elapsed >= 4500 && !submitted) {
      markQuiz(true);
    }
  }

  async function startQuiz() {
    if (!learner.value.trim()) {
      status.textContent = "Enter the learner name before starting.";
      learner.focus();
      return;
    }

    if (window.CBENexusAdminQuestionsReady) {
      await window.CBENexusAdminQuestionsReady;
    }
    if (window.CBENexusAdminQuestionsLoadError) {
      status.textContent = "Published questions could not be loaded from CBE Nexus. Please refresh the page and try again; built-in questions have not been substituted.";
      questionsBox.innerHTML = "";
      submitButton.disabled = true;
      return;
    }
    const selectedBank = getGradeQuestionBank(grade.value, subject.value);
    if (!selectedBank.length) {
      status.textContent = "No published questions are available yet for " + (country ? country.value : "Kenya") + " · " + (curriculum ? curriculum.value : "Kenya CBC/CBE") + " · " + grade.value + " · " + subject.value + (strand && strand.value !== "All Topics" ? " · " + strand.value : "") + ". Ask an administrator to publish questions for this exact curriculum and level.";
      questionsBox.innerHTML = "";
      submitButton.disabled = true;
      return;
    }
    // Never hide a valid published question bank merely because it contains
    // fewer than 50 questions. Use up to 50 questions, or all available questions
    // when the teacher has published a smaller set.
    const requested = Math.min(50, selectedBank.length);
    if (requested < 1) {
      status.textContent = "No published questions are available for " + grade.value + " — " + subject.value +
        (strand && strand.value !== "All Topics" ? " — " + strand.value : "") +
        ". Please choose another subject or ask your teacher to publish questions.";
      questionsBox.innerHTML = "";
      submitButton.disabled = true;
      active = [];
      return;
    }
    length.value = String(requested);
    active = shuffle(selectedBank).slice(0, requested);
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
      if (item[9]) {
        const questionImage = document.createElement("img");
        questionImage.src = item[9];
        questionImage.alt = item[10] || "Question diagram";
        questionImage.loading = "lazy";
        questionImage.style.cssText = "display:block;max-width:min(100%,680px);max-height:420px;object-fit:contain;margin:10px 0 16px;border:1px solid #dbe3ea;border-radius:8px;background:#fff";
        questionImage.onerror = () => questionImage.remove();
        fieldset.appendChild(questionImage);
      }

      const optionOrder = item[1].map((optionText, optionIndex) => ({
        text: optionText,
        originalIndex: optionIndex
      }));
      shuffle(optionOrder);
      optionOrder.forEach(({text: optionText, originalIndex: optionIndex}) => {
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
    instructions.innerHTML = "<strong>" + escapeHtml(grade.value + " " + subject.value) + "</strong> — " + escapeHtml(strand ? strand.value : "All Topics") + " — " + active.length + " randomized questions.";
    status.textContent = "Quiz started. Answer every question and submit when ready.";
    updateTimer();
    if (mode.value === "assessment") timerId = setInterval(updateTimer, 1000);
    questionsBox.scrollIntoView({behavior:"smooth", block:"start"});
  }

  function createAssessmentSerial() {
    const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const bytes = new Uint8Array(8);
    if (window.crypto && window.crypto.getRandomValues) window.crypto.getRandomValues(bytes);
    else for (let i = 0; i < bytes.length; i++) bytes[i] = Math.floor(Math.random() * 256);
    let letters = "";
    for (let i = 0; i < bytes.length; i++) letters += alphabet[bytes[i] % alphabet.length];
    return "CBENEXUS-" + letters + "-" + Date.now().toString(36).toUpperCase();
  }

  function pdfSafe(value) {
    return String(value == null ? "" : value).replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, "-").replace(/[^\x20-\x7E]/g, "?");
  }
  function wrapPdfText(value, maxChars) {
    const words = pdfSafe(value).split(/\s+/), lines = [];
    let line = "";
    words.forEach(word => {
      if (!word) return;
      if (word.length > maxChars) {
        if (line) { lines.push(line); line = ""; }
        for (let i = 0; i < word.length; i += maxChars) lines.push(word.slice(i, i + maxChars));
      } else if (!line) line = word;
      else if ((line + " " + word).length <= maxChars) line += " " + word;
      else { lines.push(line); line = word; }
    });
    if (line) lines.push(line);
    return lines.length ? lines : [""];
  }
  function getPerformanceStandard(score) {
    if (score > 75) return "EE1";
    if (score >= 60) return "EE2";
    if (score >= 50) return "ME1";
    if (score >= 40) return "ME2";
    if (score >= 30) return "AE";
    return "BE";
  }
  async function buildAssessmentPdf(attempt) {
    if (!attempt.serialNumber) attempt.serialNumber = createAssessmentSerial();
    const pages = [];
    const red = "0.68 0.08 0.12";
    const yellow = "0.98 0.82 0.12";
    const green = "0.05 0.48 0.24";
    const dark = "0.12 0.16 0.20";
    const esc = value => pdfSafe(value == null ? "-" : String(value)).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    const newPage = () => {
      const page = { ops: [], y: 730 };
      pages.push(page);
      const rect = (x,y,w,h,color) => page.ops.push("q\n" + color + " rg\n" + x + " " + y + " " + w + " " + h + " re f\nQ\n");
      const line = (x1,y1,x2,y2,color,width=1) => page.ops.push("q\n" + color + " RG\n" + width + " w\n" + x1 + " " + y1 + " m " + x2 + " " + y2 + " l S\nQ\n");
      const txt = (x,y,value,size=12,bold=false,color=dark) => page.ops.push("BT\n" + (bold ? "/F2 " : "/F1 ") + size + " Tf\n" + color + " rg\n1 0 0 1 " + x + " " + y + " Tm\n(" + esc(value) + ") Tj\nET\n");
      rect(0,0,612,842,"1 1 1");
      rect(24,794,564,28,red);
      rect(24,788,564,4,yellow);
      txt(38,803,"CBE NEXUS",17,true,"1 1 1");
      txt(390,804,"CONNECTING LEARNERS TO EXCELLENCE",7,true,"1 1 1");
      txt(36,768,"MARKED ASSESSMENT REPORT",12,true);
      txt(36,751,"Learner: " + (attempt.learner || "-") + "   Grade: " + (attempt.grade || "-") + "   Subject: " + (attempt.subject || "-"),12,true);
      txt(36,736,"Serial: " + attempt.serialNumber + "   Date: " + new Date(attempt.createdAt).toLocaleDateString("en-GB"),12,false,red);
      line(30,48,582,48,red,2);
      line(30,42,582,42,yellow,3);
      txt(36,25,"CBE NEXUS  |  CBENEXUS.CO.KE  |  CONNECTING LEARNERS TO EXCELLENCE",7,true);
      // Keep every page body below the branded header and summary area.
      // Without resetting y here, page 2+ could start underneath the header.
      page.y = 614;
      return page;
    };
    const addText = (page, x, y, value, size=12, bold=false, color=dark) => {
      page.ops.push("BT\n" + (bold ? "/F2 " : "/F1 ") + size + " Tf\n" + color + " rg\n1 0 0 1 " + x + " " + y + " Tm\n(" + esc(value) + ") Tj\nET\n");
    };
    const addRect = (page,x,y,w,h,color) => page.ops.push("q\n" + color + " rg\n" + x + " " + y + " " + w + " " + h + " re f\nQ\n");
    const addLine = (page,x1,y1,x2,y2,color,width=1) => page.ops.push("q\n" + color + " RG\n" + width + " w\n" + x1 + " " + y1 + " m " + x2 + " " + y2 + " l S\nQ\n");
    let page = newPage();
    addRect(page,30,687,552,30,yellow);
    addText(page,40,698,"ASSESSMENT SUMMARY",12,true);
    addText(page,40,673,"Score: " + attempt.score + "%     Correct: " + attempt.correct + "/" + attempt.total + "     Answered: " + attempt.answered + "/" + attempt.total,12,true);
    addText(page,40,657,"Performance: " + (attempt.remark || "Assessment completed"),12,false);
    addText(page,40,638,"MARKING KEY: red tick = correct; red X = incorrect or unanswered.",12,true);
    page.y = 614;

    const results = Array.isArray(attempt.results) ? attempt.results : [];
    results.forEach((result, index) => {
      const question = active[index] || null;
      const questionText = (index + 1) + ". " + (result.question || (question && question[0]) || "Question");
      const questionLines = wrapPdfText(questionText, 82);
      const options = question && Array.isArray(question[1]) ? question[1] : [];
      const selectedText = result.selected === null || result.selected === undefined ? "Not answered" : (options[result.selected] || "Selected option");
      const correctText = options[result.correctAnswer] || "Correct option";
      const detailLines = [
        "Your answer: " + selectedText,
        "Correct answer: " + correctText
      ];
      const explanationLines = result.explanation ? wrapPdfText("Explanation: " + result.explanation, 82) : [];
      const optionLineCount = options.reduce((sum, option, oi) => { const marker = oi === result.correctAnswer ? "[CORRECT]" : (oi === result.selected ? "[YOUR ANSWER]" : "[" + String.fromCharCode(65+oi) + "]"); return sum + wrapPdfText(marker + " " + option, 78).length; }, 0);
      const needed = 24 + questionLines.length * 14 + optionLineCount * 14 + detailLines.length * 14 + explanationLines.length * 14 + 10;
      if (page.y - needed < 65) page = newPage();
      const top = page.y;
      addRect(page,32,top-15,548,18,result.isCorrect ? "0.88 0.96 0.89" : "1 0.91 0.91");
      addText(page,38,top-10,questionLines[0] || questionText,12,true);
      page.y = top - 24;
      for (let li=1; li<questionLines.length; li++) {
        page.y -= 14;
        addText(page,46,page.y,questionLines[li],12,false);
      }
      page.y -= 14;
      options.forEach((option, oi) => {
        const marker = oi === result.correctAnswer ? "[CORRECT]" : (oi === result.selected ? "[YOUR ANSWER]" : "[" + String.fromCharCode(65+oi) + "]");
        const lines = wrapPdfText(marker + " " + option, 78);
        lines.forEach((ln, li) => {
          addText(page,48,page.y,ln,12,oi === result.correctAnswer,oi === result.correctAnswer ? green : dark);
          page.y -= 14;
        });
      });
      addText(page,48,page.y,"Your answer: " + selectedText,12,true,result.isCorrect ? green : red);
      page.y -= 14;
      addText(page,48,page.y,"Correct answer: " + correctText,12,true,green);
      page.y -= 14;
      if (explanationLines.length) {
        explanationLines.forEach(lineText => {
          addText(page,48,page.y,lineText,12,false);
          page.y -= 14;
        });
      }
      // Draw a large vector tick or X at the right of the question heading.
      if (result.isCorrect) {
        addLine(page,548,top-8,553,top-13,red,2.5);
        addLine(page,553,top-13,563,top-3,red,2.5);
      } else {
        addLine(page,550,top-4,562,top-16,red,2.5);
        addLine(page,550,top-16,562,top-4,red,2.5);
      }
      addLine(page,38,page.y+3,574,page.y+3,"0.85 0.85 0.85",0.5);
      page.y -= 14;
    });

    // Add a final concise score line at the end of the marking pages.
    if (page.y < 82) page = newPage();
    addRect(page,32,page.y-8,548,25,yellow);
    addText(page,42,page.y,"FINAL SCORE: " + attempt.correct + "/" + attempt.total + " (" + attempt.score + "%)",12,true);
    const objects = [];
    objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    const pageObjectIds = [];
    let nextId = 3;
    const fontRegularId = nextId++;
    const fontBoldId = nextId++;
    objects[fontRegularId] = "<< /Type /Font /Subtype /Type1 /BaseFont /Times-Roman >>";
    objects[fontBoldId] = "<< /Type /Font /Subtype /Type1 /BaseFont /Times-Bold >>";
    pages.forEach((p) => {
      const pageId = nextId++;
      const contentId = nextId++;
      pageObjectIds.push(pageId);
      const stream = p.ops.join("");
      objects[contentId] = "<< /Length " + stream.length + " >>\nstream\n" + stream + "\nendstream";
      objects[pageId] = "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 " + fontRegularId + " 0 R /F2 " + fontBoldId + " 0 R >> >> /Contents " + contentId + " 0 R >>";
    });
    objects[2] = "<< /Type /Pages /Kids [" + pageObjectIds.map(id => id + " 0 R").join(" ") + "] /Count " + pageObjectIds.length + " >>";
    let pdf = "%PDF-1.4\n";
    const offsets = [0];
    for (let i=1; i<nextId; i++) {
      offsets[i] = pdf.length;
      pdf += i + " 0 obj\n" + objects[i] + "\nendobj\n";
    }
    const xref = pdf.length;
    pdf += "xref\n0 " + nextId + "\n0000000000 65535 f \n";
    for (let i=1; i<nextId; i++) pdf += String(offsets[i]).padStart(10,"0") + " 00000 n \n";
    pdf += "trailer\n<< /Size " + nextId + " /Root 1 0 R >>\nstartxref\n" + xref + "\n%%EOF";
    const bytes = new Uint8Array(pdf.length);
    for (let i=0; i<pdf.length; i++) bytes[i] = pdf.charCodeAt(i) & 255;
    return new Blob([bytes], {type:"application/pdf"});
  }
  async function downloadAssessmentReport(attempt) {
    const pdfBlob = await buildAssessmentPdf(attempt);
    const url = URL.createObjectURL(pdfBlob);
    const filename = ("CBE-Nexus-" + attempt.learner + "-" + attempt.subject + "-Assessment-Report.pdf").replace(/[^a-z0-9.-]+/gi, "-").replace(/-+/g, "-");
    const link = document.createElement("a");
    link.href = url; link.download = filename; link.textContent = "Download assessment report PDF";
    link.className = "primary-button"; link.style.cssText = "display:inline-flex;margin:12px 0;text-decoration:none";
    link.addEventListener("click", () => setTimeout(() => URL.revokeObjectURL(url), 30000), { once: true });
    resultBox.appendChild(link);
    link.click();
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
        options: item[1],
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
      serialNumber: createAssessmentSerial(),
      learner: learner.value.trim(),
      learnerId: learnerId ? learnerId.value.trim() : "",
      country: country ? country.value.trim() : "Kenya",
      curriculum: curriculum ? curriculum.value.trim() : "Kenya CBC/CBE",
      grade: grade.value,
      subject: subject.value,
      strand: strand ? strand.value : "All Topics",
      learningOutcome: outcome ? outcome.value : "All Outcomes",
      subStrand: subStrand ? subStrand.value : "All Sub-Strands",
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

    // quizzes.html does not load app.js, so submit directly to the durable
    // assessment API rather than relying on app.js's optional postToBackend helper.
    // Keep the local history for the learner, but confirm whether the admin copy saved.
    status.textContent = "Quiz marked. Saving this attempt to the CBE Nexus admin records…";
    fetch("/api/quizzes", {
      method: "POST",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(attempt)
    }).then(async function (response) {
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "The attempt could not be saved to admin records.");
      }
      status.textContent += payload.storage === "supabase"
        ? " Saved permanently for administrator evaluation."
        : " Saved, but permanent database storage needs verification.";
    }).catch(function (error) {
      console.error("CBE Nexus assessment record submission failed:", error);
      status.textContent += " WARNING: this attempt is only in this browser and was not confirmed in admin records. Please retry or notify the administrator.";
    });

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
      (attempt.mode === "assessment" ? "<p class=\"assessment-serial-number\"><strong>Assessment serial number:</strong> " + escapeHtml(attempt.serialNumber) + "</p>" : "") +
      "<h3>" + escapeHtml(attempt.remark) + "</h3>" + review;

    // Put the download control in the results immediately, before optional progress
    // widgets run, so a progress-rendering error cannot hide the marked assessment.
    {
      const reportButton = document.createElement("button");
      reportButton.type = "button";
      reportButton.className = "primary-button";
      reportButton.id = "generateAssessmentReportButton";
      reportButton.textContent = "Download Marked Assessment (PDF)";
      reportButton.style.cssText = "display:flex;width:100%;box-sizing:border-box;align-items:center;justify-content:center;margin:16px 0;padding:14px 18px;font-weight:800;font-size:1rem;background:#facc15;color:#111827;border:2px solid #ca8a04;border-radius:10px;cursor:pointer;min-height:52px;white-space:normal";
      reportButton.setAttribute("aria-label", "Download the marked assessment report as a PDF");
      reportButton.addEventListener("click", () => {
        try {
          downloadAssessmentReport(attempt);
          status.textContent = "Your marked assessment PDF is ready. If it opened in a new tab, use your browser's Download or Save option.";
        } catch (error) {
          console.error("Assessment PDF generation failed:", error);
          status.textContent = "The marked assessment PDF could not be generated. Please try again.";
        }
      });
      const resultHeading = resultBox.querySelector("h3");
      if (resultHeading) resultBox.insertBefore(reportButton, resultHeading);
      else resultBox.appendChild(reportButton);
    }
    try { renderProgress(); } catch (error) { console.error("Learner progress display failed:", error); }
    try { renderLearningGaps(); } catch (error) { console.error("Learning gaps display failed:", error); }
    if (typeof showToast === "function") showToast("Quiz marked. Learning gaps identified and remediation updated.");
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    markQuiz(false);
  });

  if (toggleQuestionSetterButton && questionSetter) {
    toggleQuestionSetterButton.addEventListener("click", () => {
      questionSetter.classList.toggle("hidden-section");
      toggleQuestionSetterButton.textContent = questionSetter.classList.contains("hidden-section")
        ? "Open Question Setter"
        : "Close Question Setter";
      renderSetQuestions();
    });
  }

  if (saveSetQuestionButton) saveSetQuestionButton.addEventListener("click", saveSetQuestion);
  if (clearSetQuestionButton) clearSetQuestionButton.addEventListener("click", clearQuestionSetterForm);

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
  renderLearningGaps();
  window.CBENexusQuiz = { startQuiz: startQuiz, markQuiz: markQuiz, renderProgress: renderProgress, renderLearningGaps: renderLearningGaps };
})();