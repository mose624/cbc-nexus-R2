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
      ["An item costs 500 units and is discounted by 10%. What is the discount?",["10 units","25 units","50 units","100 units"],2,"Percentages","10% of 500 units is 50 units."]
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
    Biology: [
      ["Which cell structure controls most activities of a eukaryotic cell?",["Cell wall","Nucleus","Vacuole","Ribosome"],1,"Cell Biology","The nucleus contains genetic material and helps control cell activities."],
      ["Which process releases usable energy from glucose in cells?",["Photosynthesis","Respiration","Transpiration","Diffusion"],1,"Cell Biology","Cellular respiration releases energy from glucose."],
      ["Which blood component transports oxygen?",["Platelets","Red blood cells","Plasma only","White blood cells"],1,"Human Biology","Haemoglobin in red blood cells binds and transports oxygen."],
      ["What is the main role of decomposers in an ecosystem?",["Produce sunlight","Recycle nutrients","Stop all predation","Make rocks"],1,"Ecology","Decomposers break down dead matter and return nutrients to ecosystems."],
      ["Which molecule carries hereditary information in most organisms?",["Starch","DNA","Water","Cellulose"],1,"Genetics","DNA stores hereditary information in most living organisms."]
    ],
    Chemistry: [
      ["What is the chemical symbol for sodium?",["So","S","Na","N"],2,"Elements","Na is the chemical symbol for sodium."],
      ["A solution with pH 3 is best described as:",["Acidic","Neutral","Alkaline","A pure metal"],0,"Acids and Bases","A pH below 7 indicates an acidic solution."],
      ["Which particle has a negative electrical charge?",["Proton","Neutron","Electron","Nucleus"],2,"Atomic Structure","Electrons carry a negative charge."],
      ["What is formed when an acid reacts with a base?",["Salt and water","Oxygen only","A metal","Carbon only"],0,"Chemical Reactions","Neutralisation typically produces salt and water."],
      ["Which method is suitable for separating an insoluble solid from a liquid?",["Filtration","Fractional distillation","Chromatography only","Magnetising the liquid"],0,"Separation Techniques","Filtration traps insoluble solid particles while liquid passes through."]
    ],
    Physics: [
      ["What is the SI unit of force?",["Joule","Watt","Newton","Pascal"],2,"Forces","Force is measured in newtons (N)."],
      ["Which equation relates speed, distance and time?",["Speed = distance ÷ time","Speed = time ÷ distance","Speed = distance × time","Speed = mass × volume"],0,"Motion","Average speed is distance travelled divided by time taken."],
      ["Which instrument measures electric current?",["Voltmeter","Ammeter","Thermometer","Barometer"],1,"Electricity","An ammeter measures electric current in amperes."],
      ["What happens to the resistance of a fixed resistor if its temperature stays constant and voltage increases?",["It always doubles","It remains approximately constant","It becomes zero","It changes into current"],1,"Electricity","For an ohmic resistor at constant temperature, resistance is approximately constant."],
      ["Which form of energy is stored in a stretched spring?",["Chemical","Elastic potential","Nuclear","Sound"],1,"Energy","A stretched spring stores elastic potential energy."]
    ],
    "Computer Studies": [
      ["Which component is commonly called the brain of a computer?",["Monitor","CPU","Keyboard","Printer"],1,"Computer Systems","The central processing unit executes instructions and processes data."],
      ["Which of these is an example of an operating system?",["Spreadsheet","Linux","Web browser","Presentation slide"],1,"Software","Linux is an operating system."],
      ["What is the main purpose of a strong password?",["Increase screen brightness","Protect access to an account","Speed up typing","Store electricity"],1,"Digital Safety","Strong passwords help prevent unauthorised access."],
      ["Which device is primarily used to enter text into a computer?",["Keyboard","Monitor","Speaker","Projector"],0,"Input Devices","A keyboard is an input device used to enter text and commands."],
      ["What does a web browser help a user do?",["Browse websites","Print money","Repair hardware automatically","Generate electricity"],0,"Internet","A web browser is used to access and view web pages."]
    ],
    "Social Studies": [
      ["What does a map scale show?",["The age of a map","The relationship between map distance and ground distance","The weather forecast","The population only"],1,"Geography Skills","A map scale compares distances on a map with actual distances."],
      ["Which is a renewable natural resource when managed sustainably?",["Coal","Petroleum","Forest","Natural gas"],2,"Environment","Forests can regenerate when protected and managed sustainably."],
      ["Why do communities establish rules and laws?",["To organise society and protect rights","To stop all trade","To prevent learning","To remove public services"],0,"Citizenship","Rules and laws support order, safety and protection of rights."],
      ["Which line divides Earth into the Northern and Southern Hemispheres?",["Prime Meridian","Equator","Tropic of Cancer","Arctic Circle"],1,"Geography","The Equator is at 0° latitude and separates the two hemispheres."],
      ["What is one purpose of local government?",["Provide local public services","Control every country","Replace all schools","Set the Earth's orbit"],0,"Governance","Local governments commonly manage services such as local roads and waste collection."]
    ],
    "Business Studies": [
      ["What is profit?",["Revenue minus total costs","Total costs plus losses","Money borrowed only","The number of workers"],0,"Business Finance","Profit is the amount remaining when total costs are subtracted from revenue."],
      ["Which document records money received and paid by a business?",["Cash book","Atlas","Timetable","Laboratory manual"],0,"Bookkeeping","A cash book records cash and bank receipts and payments."],
      ["What is market research used for?",["Understanding customers and demand","Choosing the weather","Measuring rainfall only","Replacing accounting"],0,"Marketing","Market research gathers information about customers, competitors and demand."],
      ["Which is an example of a fixed cost?",["Monthly rent","Raw materials per unit","Sales commission per item","Packaging for each product"],0,"Costs","Rent is commonly fixed over an agreed period."],
      ["Why should a business keep financial records?",["To monitor performance and support decisions","To avoid planning","To hide all transactions","To stop customer service"],0,"Business Management","Accurate records help track performance, meet obligations and make decisions."]
    ],
    Agriculture: [
      ["Which soil property describes the relative amounts of sand, silt and clay?",["Texture","Colour only","Temperature","Slope"],0,"Soil Science","Soil texture is determined by the proportions of sand, silt and clay."],
      ["Why is crop rotation practised?",["To help manage soil fertility and pests","To prevent all rainfall","To remove all soil organisms","To stop seed germination"],0,"Crop Production","Rotation can improve nutrient management and interrupt pest and disease cycles."],
      ["Which tool is commonly used for loosening soil on a small plot?",["Hoe","Syringe","Thermometer","Compass"],0,"Farm Tools","A hoe is used for shallow cultivation and weeding."],
      ["What is the main purpose of compost?",["Add organic matter and nutrients to soil","Make soil waterproof","Remove all microorganisms","Replace sunlight"],0,"Soil Fertility","Compost adds organic matter and can improve soil structure and nutrient supply."],
      ["Which practice helps reduce soil erosion on sloping land?",["Contour farming","Burning all vegetation","Overgrazing","Ploughing straight downhill"],0,"Soil Conservation","Contour farming slows runoff by following the land's contours."]
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
  "Afghanistan":["Afghanistan Ministry of Education National Curriculum (Dari)","Afghanistan Ministry of Education National Curriculum (Pashto)"],
  "Albania":["Albania National Pre-University Curriculum / ASCAP"],
  "Algeria":["Algeria National Curriculum / Ministry of National Education"],
  "Andorra":["Andorra Andorran Education System","Andorra French Education System","Andorra Spanish Education System"],
  "Angola":["Angola National Curriculum / INADE"],
  "Antigua and Barbuda":["Antigua and Barbuda National Curriculum / Ministry of Education","OECS Harmonised Primary Curriculum","CXC CSEC / CAPE"],
  "Argentina":["Argentina National Education Law / NAP and Provincial Curricula"],
  "Armenia":["Armenia State Standard of General Education / Ministry of ESCS"],
  "Austria":["Austria National Curriculum (Lehrplan) / BMB"],
  "Azerbaijan":["Azerbaijan National Curriculum / Ministry of Science and Education"],
  "Bahamas":["Bahamas Primary Mathematics Curriculum 2022–2027"],
  "Bahrain":["Bahrain Ministry of Education Curriculum","British Curriculum","American Curriculum","IB"],
  "Bangladesh":["Bangladesh NCTB / SSC / HSC","Cambridge O Level / A Level","Pearson Edexcel","IB"],
  "Barbados":["Barbados National Curriculum / CSEC / CAPE","Cambridge International"],
  "Belarus":["Belarus State Standard of Primary Education"],
  "Belgium":["Belgium Flemish Community Curriculum","Belgium French Community Curriculum","Belgium German-speaking Community Curriculum"],
  "Belize":["Belize National Primary Curriculum / Ministry of Education"],
  "Benin":["Benin National Primary Curriculum / CI"],
  "Bhutan":["Bhutan National School Curriculum / CSCD"],

  "Bolivia":["Bolivia Currículo Base del Sistema Educativo Plurinacional"],
"Bosnia and Herzegovina":["Bosnia and Herzegovina Primary Education Curriculum (entity/canton implementation)"],
"Botswana":["Botswana Primary School Curriculum / BEC"],
"Brazil":["Brazil BNCC / Ensino Fundamental"],
"Brunei":["Brunei SPN21 Primary Education"],
"Bulgaria":["Bulgaria National Curriculum / Ministry of Education and Science"],
"Burkina Faso":["Burkina Faso National Primary Curriculum / CP1"],
"Burundi":["Burundi Fundamental Education Curriculum"],
"Cabo Verde":["Cabo Verde Plano Curricular do Ensino Básico Formal"],
"Cambodia":["Cambodia National Curriculum / Ministry of Education Youth and Sport"],
  "Côte d’Ivoire":["Côte d’Ivoire Programmes éducatifs primaires / CP1"],
  "Croatia":["Croatia National Curriculum for Mathematics"],
  "Cuba":["Cuba National Primary Education Curriculum"],
  "Cyprus":["Republic of Cyprus Primary Curriculum"],
  "Czechia":["Czechia Framework Education Programme for Basic Education (RVP ZV)"],
  "Democratic Republic of the Congo":["DR Congo National Primary Education Curriculum"],
  "Denmark":["Denmark Fælles Mål / Mathematics"],
  "Djibouti":["Djibouti National Primary Curriculum / CP1"],
  "Dominica":["Dominica Primary School Curriculum"],
  "Dominican Republic":["Dominican Republic Diseño Curricular del Nivel Primario"],
  "Cameroon":["Cameroon National Curriculum / MINEDUB"],
"Canada":["Canadian Provincial/Territorial Curriculum (Ontario reference stream)"],
"Central African Republic":["Central African Republic National Primary Curriculum"],
"Chad":["Chad National Primary Curriculum"],
"Chile":["Chile Bases Curriculares / Programa de Estudio Matemática"],
"China":["China National Curriculum / Compulsory Education Mathematics"],
"Colombia":["Colombia Estándares Básicos de Competencias / MEN"],
"Comoros":["Comoros National Primary Curriculum"],
"Congo":["Republic of the Congo Programmes éducatifs révisés du primaire"],
"Costa Rica":["Costa Rica Programa de Estudio de Matemáticas / MEP"],
"Côte d’Ivoire":["Côte d’Ivoire Programmes éducatifs primaires / CP1"],
"Croatia":["Croatia National Curriculum for Mathematics"],
"Cuba":["Cuba National Primary Education Curriculum"],
"Cyprus":["Republic of Cyprus Primary Curriculum"],
"Czechia":["Czechia Framework Education Programme for Basic Education (RVP ZV)"],
"Democratic Republic of the Congo":["DR Congo National Primary Education Curriculum"],
"Denmark":["Denmark Fælles Mål / Mathematics"],
"Djibouti":["Djibouti National Primary Curriculum / CP1"],
"Dominica":["Dominica Primary School Curriculum"],
"Dominican Republic":["Dominican Republic Diseño Curricular del Nivel Primario"],
  "Ecuador":["Ecuador Currículo Nacional / Educación General Básica"],
  "Egypt":["Egypt Ministry of Education National Curriculum"],
  "El Salvador":["El Salvador Programa de Estudio de Primer Grado"],
  "Equatorial Guinea":["Equatorial Guinea National Primary Curriculum"],
  "Eritrea":["Eritrea Basic Education Curriculum"],
  "Estonia":["Estonia National Curriculum for Basic Schools"],
  "Eswatini":["Eswatini Primary Curriculum"],
  "Ethiopia":["Ethiopia General Education Curriculum / Grade 1 Mathematics"],
  "Fiji":["Fiji Primary Mathematics Syllabus / Year 1"],
  "Finland":["Finland National Core Curriculum for Basic Education"],
  "Honduras":["Honduras Diseño Curricular Nacional para la Educación Básica / Primer Grado"],
  "Hungary":["Hungary National Core Curriculum / 1. évfolyam"],
  "Iceland":["Iceland National Curriculum Guide / 1. bekkur"],
  "India":["India NCERT / NCF Foundational and Preparatory Stage — Class 1"],
  "Indonesia":["Indonesia Kurikulum Merdeka / Fase A — Kelas 1 SD"],
  "Iran":["Iran National Curriculum / پایه اول ابتدایی"],
  "Iraq":["Iraq National Curriculum / الصف الأول الابتدائي"],
  "Ireland":["Ireland Primary Mathematics Curriculum / First Class"],
  "Israel":["Israel Ministry of Education Mathematics Curriculum / כיתה א׳"],
  "Italy":["Italy Indicazioni Nazionali per il curricolo / Classe prima primaria"],
  "Jamaica":["Jamaica National Standards Curriculum / Grade 1"],
  "Japan":["Japan MEXT Course of Study / Grade 1"],
  "Jordan":["Jordan National Curriculum / الصف الأول الأساسي"],
  "Kazakhstan":["Kazakhstan State Compulsory Education Standard / 1-сынып"],
  "Kenya":["Kenya CBC/CBE / Grade 1"],
  "Kiribati":["Kiribati Primary Curriculum / Primary Year 1"],
  "Kuwait":["Kuwait Ministry of Education Curriculum / الصف الأول الابتدائي"],
  "Kyrgyzstan":["Kyrgyz Republic State Education Standard / 1-класс"],
  "Laos":["Lao PDR National Primary Curriculum / Grade 1"],
  "Latvia":["Latvia Skola2030 Curriculum / 1. klase"],
  "Lebanon":["Lebanon National Curriculum / Grade 1"],
  "Lesotho":["Lesotho Curriculum and Assessment Policy / Grade 1"],
  "Liberia":["Liberia National Curriculum / Grade 1"],
  "Libya":["Libya National Education Curriculum / الصف الأول"],
  "Liechtenstein":["Liechtenstein Lehrplan 21 / 1. Schuljahr"],
  "Lithuania":["Lithuania General Curriculum / 1 klasė"],
  "Luxembourg":["Luxembourg Plan d'études / Cycle 2.1"],
  "Madagascar":["Madagascar National Primary Curriculum / T1"],
  "Malawi":["Malawi Primary Curriculum / Standard 1"],  "Malaysia":["Malaysia KSSR Semakan / Tahun 1"],
  "Maldives":["Maldives National Curriculum / Grade 1"],
  "Mali":["Mali Programme d'enseignement fondamental / 1re année"],
  "Malta":["Malta National Curriculum Framework / Year 1"],
  "Marshall Islands":["Marshall Islands Public School System / Grade 1"],
  "Mauritania":["Mauritania National Curriculum / 1re année"],
  "Mauritius":["Mauritius National Curriculum Framework / Grade 1"],
  "Mexico":["Mexico Plan de Estudio 2022 / 1° de primaria"],
  "Micronesia":["Federated States of Micronesia National Curriculum / Grade 1"],
  "Moldova":["Moldova National Curriculum / Clasa I"],
  "France":["France National Curriculum — Cycle 2 / CP"],
  "Gabon":["Gabon National Primary Curriculum / CP1"],
  "The Gambia":["The Gambia National Curriculum / Grade 1"],
  "Georgia":["Georgia National Curriculum / Grade 1"],
  "Germany":["Germany Länder Primary Curriculum / Klasse 1"],
  "Ghana":["Ghana NaCCA Standards-Based Curriculum / Basic 1"],
  "Greece":["Greece National Curriculum / Α΄ Δημοτικού"],
  "Grenada":["Grenada National Primary Curriculum / Grade 1"],
  "Guatemala":["Guatemala Curriculum Nacional Base / Primero Primaria"],
  "Guinea":["Guinea National Primary Curriculum / CP1"],
  "Kenya":["Kenya CBC/CBE","Kenya 8-4-4 / KCSE","Cambridge International","Pearson Edexcel","IB"],
  "Uganda":["Uganda NCDC Curriculum / UNEB","Cambridge International","Pearson Edexcel"],
  "Tanzania":["Tanzania NECTA Curriculum","Cambridge International","Pearson Edexcel"],
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
  "Pakistan":["Pakistan National Curriculum / FBISE","Punjab Board (BISE)","Cambridge O Level / A Level","Pearson Edexcel","IB"],
  "Bangladesh":["Bangladesh NCTB / SSC / HSC","Cambridge O Level / A Level","Pearson Edexcel","IB"],
  "United Kingdom":["England National Curriculum / GCSE / A Level","Wales Curriculum for Wales / WJEC","Scotland Curriculum for Excellence / SQA","Northern Ireland CCEA","Cambridge International","Pearson Edexcel","IB"],
  "United States":["US Common Core / NGSS","State Standards / State Assessments","AP","IB"],
  "Canada":["Canadian Provincial Curriculum","Ontario Curriculum / OSSLT","British Columbia Curriculum","Alberta Curriculum","IB"],
  "Australia":["Australian Curriculum / ACARA","NSW NESA","VCE (Victoria)","QCE (Queensland)","WACE (Western Australia)","IB"],
  "New Zealand":["New Zealand Curriculum / NCEA","Cambridge International","IB"],
  "Singapore":["Singapore MOE Curriculum / GCE","Cambridge International","IB"],
  "Malaysia":["Malaysia KSSM / KSSR / SPM","Cambridge IGCSE","IB"],
  "China":["China National Curriculum / Gaokao","Cambridge International","Pearson Edexcel","IB"],
  "Japan":["Japan MEXT Curriculum","Cambridge International","IB"],
  "United Arab Emirates":["UAE Ministry of Education Curriculum","British Curriculum / GCSE / A Level","US Curriculum","IB","CBSE"],
  "Saudi Arabia":["Saudi Ministry of Education Curriculum","International British Curriculum","American Curriculum","IB"],
  "Qatar":["Qatar National Curriculum","British Curriculum","American Curriculum","IB"],
  "Egypt":["Egypt Ministry of Education Curriculum / Thanaweya Amma","IGCSE","IB"],
  "Ethiopia":["Ethiopia Ministry of Education Curriculum / Ethiopian General School Leaving Examination"],
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
  "Oman":["Oman Ministry of Education Curriculum","British Curriculum","IB"],
  "Kuwait":["Kuwait Ministry of Education Curriculum","British Curriculum","American Curriculum","IB"],
  "Bahrain":["Bahrain Ministry of Education Curriculum","British Curriculum","American Curriculum","IB"],
  "Jordan":["Jordan National Curriculum / Tawjihi","Cambridge International","IB"],
  "Israel":["Israel Ministry of Education / Bagrut","IB"],
  "Turkey":["Türkiye Ministry of National Education / YKS","Cambridge International","IB"],
  "Türkiye":["Türkiye Ministry of National Education / YKS","Cambridge International","IB"],
  "Russia":["Russian Federal State Educational Standards / EGE","IB"],
  "Ukraine":["Ukraine State Standard / NMT","IB"],
  "Jamaica":["Jamaica National Standards Curriculum / CSEC / CAPE","Cambridge International"],
  "Trinidad and Tobago":["Trinidad and Tobago National Curriculum / CSEC / CAPE","Cambridge International"],
  "Barbados":["Barbados National Curriculum / CSEC / CAPE","Cambridge International"],
  "Fiji":["Fiji National Curriculum / FSLC","Cambridge International"],
  "Papua New Guinea":["PNG National Curriculum / Grade 10 & 12 National Examinations"],
  "Mauritius":["Mauritius National Curriculum / NCE / SC / HSC","Cambridge International"],
  "Seychelles":["Seychelles National Curriculum / IGCSE","Cambridge International"]
};

const nationalLevelStructures = {
  "Afghanistan":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Albania":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Algeria":["1ère année primaire","2ème année primaire","3ème année primaire","4ème année primaire","5ème année primaire","1ère année moyenne","2ème année moyenne","3ème année moyenne","4ème année moyenne","1ère année secondaire","2ème année secondaire","3ème année secondaire"],
  "Andorra Andorran Education System":["Primera ensenyança 1","Primera ensenyança 2","Primera ensenyança 3","Primera ensenyança 4","Primera ensenyança 5","Primera ensenyança 6","Segona ensenyança 1","Segona ensenyança 2","Segona ensenyança 3","Segona ensenyança 4","Batxillerat 1","Batxillerat 2"],
  "Andorra French Education System":["CP","CE1","CE2","CM1","CM2","Sixième","Cinquième","Quatrième","Troisième","Seconde","Première","Terminale"],
  "Andorra Spanish Education System":["1º Primaria","2º Primaria","3º Primaria","4º Primaria","5º Primaria","6º Primaria","1º ESO","2º ESO","3º ESO","4º ESO","1º Bachillerato","2º Bachillerato"],
  "Angola":["1.ª Classe","2.ª Classe","3.ª Classe","4.ª Classe","5.ª Classe","6.ª Classe","7.ª Classe","8.ª Classe","9.ª Classe","10.ª Classe","11.ª Classe","12.ª Classe","13.ª Classe"],
  "Antigua and Barbuda":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Argentina":["1º Grado","2º Grado","3º Grado","4º Grado","5º Grado","6º Grado","7º Grado","1º Año","2º Año","3º Año","4º Año","5º Año","6º Año"],
  "Armenia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Austria":["Vorschulstufe","1. Schulstufe","2. Schulstufe","3. Schulstufe","4. Schulstufe","5. Schulstufe","6. Schulstufe","7. Schulstufe","8. Schulstufe","9. Schulstufe","10. Schulstufe","11. Schulstufe","12. Schulstufe"],
  "Azerbaijan":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11"],
  "Bahamas":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
  "Bahrain":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Belarus":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11"],
  "Belgium Flemish Community Curriculum":["1ste leerjaar","2de leerjaar","3de leerjaar","4de leerjaar","5de leerjaar","6de leerjaar"],
  "Belgium French Community Curriculum":["1re primaire","2e primaire","3e primaire","4e primaire","5e primaire","6e primaire"],
  "Belgium German-speaking Community Curriculum":["1. Primarschuljahr","2. Primarschuljahr","3. Primarschuljahr","4. Primarschuljahr","5. Primarschuljahr","6. Primarschuljahr"],
  "Belize":["Infants 1","Infants 2","Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6"],
  "Benin":["CI","CP","CE1","CE2","CM1","CM2"],
  "Bhutan":["Class PP","Class I","Class II","Class III","Class IV","Class V","Class VI","Class VII","Class VIII","Class IX","Class X","Class XI","Class XII"],

  "Bolivia":["1er Año de Escolaridad","2do Año de Escolaridad","3er Año de Escolaridad","4to Año de Escolaridad","5to Año de Escolaridad","6to Año de Escolaridad","1er Año de Secundaria","2do Año de Secundaria","3er Año de Secundaria","4to Año de Secundaria","5to Año de Secundaria","6to Año de Secundaria"],
"Bosnia and Herzegovina":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9"],
"Botswana":["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Form 1","Form 2","Form 3","Form 4","Form 5"],
"Brazil":["1º Ano do Ensino Fundamental","2º Ano do Ensino Fundamental","3º Ano do Ensino Fundamental","4º Ano do Ensino Fundamental","5º Ano do Ensino Fundamental","6º Ano do Ensino Fundamental","7º Ano do Ensino Fundamental","8º Ano do Ensino Fundamental","9º Ano do Ensino Fundamental","1ª Série do Ensino Médio","2ª Série do Ensino Médio","3ª Série do Ensino Médio"],
"Brunei":["Year 1","Year 2","Year 3","Year 4","Year 5","Year 6"],
"Bulgaria":["I клас","II клас","III клас","IV клас","V клас","VI клас","VII клас","VIII клас","IX клас","X клас","XI клас","XII клас"],
"Burkina Faso":["CP1","CP2","CE1","CE2","CM1","CM2","6ème","5ème","4ème","3ème","2nde","1ère","Terminale"],
"Burundi":["1ère année fondamentale","2ème année fondamentale","3ème année fondamentale","4ème année fondamentale","5ème année fondamentale","6ème année fondamentale","7ème année fondamentale","8ème année fondamentale","9ème année fondamentale"],
"Cabo Verde":["1.º Ano","2.º Ano","3.º Ano","4.º Ano","5.º Ano","6.º Ano","7.º Ano","8.º Ano","9.º Ano","10.º Ano","11.º Ano","12.º Ano"],
"Cambodia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
  "Cameroon":["Class 1","Class 2","Class 3","Class 4","Class 5","Class 6"],
"Canada":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"],
"Central African Republic":["CP1","CP2","CE1","CE2","CM1","CM2"],
"Chad":["CP1","CP2","CE1","CE2","CM1","CM2"],
"Chile":["1° básico","2° básico","3° básico","4° básico","5° básico","6° básico","7° básico","8° básico","1° medio","2° medio","3° medio","4° medio"],
"China":["一年级","二年级","三年级","四年级","五年级","六年级","七年级","八年级","九年级","高一","高二","高三"],
"Colombia":["1°","2°","3°","4°","5°","6°","7°","8°","9°","10°","11°"],
"Comoros":["Cours préparatoire 1 (CP1)","Cours préparatoire 2 (CP2)","Cours élémentaire 1 (CE1)","Cours élémentaire 2 (CE2)","Cours moyen 1 (CM1)","Cours moyen 2 (CM2)"],
"Congo":["CP1","CP2","CE1","CE2","CM1","CM2"],
"Costa Rica":["1er Año","2do Año","3er Año","4to Año","5to Año","6to Año","7mo Año","8vo Año","9no Año","10mo Año","11mo Año"],
"Côte d’Ivoire":["CP1","CP2","CE1","CE2","CM1","CM2"],
"Croatia":["1. razred","2. razred","3. razred","4. razred","5. razred","6. razred","7. razred","8. razred"],
"Cuba":["Primer grado","Segundo grado","Tercer grado","Cuarto grado","Quinto grado","Sexto grado"],
"Cyprus":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Czechia":["1. ročník","2. ročník","3. ročník","4. ročník","5. ročník","6. ročník","7. ročník","8. ročník","9. ročník"],
"Democratic Republic of the Congo":["1ère année primaire","2e année primaire","3e année primaire","4e année primaire","5e année primaire","6e année primaire"],
"Denmark":["0. klasse","1. klasse","2. klasse","3. klasse","4. klasse","5. klasse","6. klasse","7. klasse","8. klasse","9. klasse"],
"Djibouti":["CP1","CP2","CE1","CE2","CM1","CM2"],
"Dominica":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Dominican Republic":["1er grado","2do grado","3er grado","4to grado","5to grado","6to grado"],
"Ecuador":["1.º EGB","2.º EGB","3.º EGB","4.º EGB","5.º EGB","6.º EGB","7.º EGB","8.º EGB","9.º EGB","10.º EGB"],
"Egypt":["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6"],
"El Salvador":["1.er grado","2.º grado","3.er grado","4.º grado","5.º grado","6.º grado"],
"Equatorial Guinea":["1.º de Primaria","2.º de Primaria","3.º de Primaria","4.º de Primaria","5.º de Primaria","6.º de Primaria"],
"Eritrea":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Estonia":["1. klass","2. klass","3. klass","4. klass","5. klass","6. klass","7. klass","8. klass","9. klass"],
"Eswatini":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7"],
"Ethiopia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Fiji":["Year 1","Year 2","Year 3","Year 4","Year 5","Year 6","Year 7","Year 8"],
"Finland":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Honduras":["Primer Grado","Segundo Grado","Tercer Grado","Cuarto Grado","Quinto Grado","Sexto Grado"],
"Hungary":["1. évfolyam","2. évfolyam","3. évfolyam","4. évfolyam"],
"Iceland":["1. bekkur","2. bekkur","3. bekkur","4. bekkur","5. bekkur","6. bekkur"],
"India":["Class 1","Class 2","Class 3","Class 4","Class 5"],
"Indonesia":["Kelas 1 SD","Kelas 2 SD","Kelas 3 SD","Kelas 4 SD","Kelas 5 SD","Kelas 6 SD"],
"Iran":["پایه اول ابتدایی","پایه دوم ابتدایی","پایه سوم ابتدایی","پایه چهارم ابتدایی","پایه پنجم ابتدایی","پایه ششم ابتدایی"],
"Iraq":["الصف الأول الابتدائي","الصف الثاني الابتدائي","الصف الثالث الابتدائي","الصف الرابع الابتدائي","الصف الخامس الابتدائي","الصف السادس الابتدائي"],
"Ireland":["Junior Infants","Senior Infants","First Class","Second Class","Third Class","Fourth Class","Fifth Class","Sixth Class"],
"Israel":["כיתה א׳","כיתה ב׳","כיתה ג׳","כיתה ד׳","כיתה ה׳","כיתה ו׳"],
"Italy":["Classe prima","Classe seconda","Classe terza","Classe quarta","Classe quinta"],
"Jamaica":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Japan":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Jordan":["الصف الأول","الصف الثاني","الصف الثالث","الصف الرابع","الصف الخامس","الصف السادس"],
"Kazakhstan":["1-сынып","2-сынып","3-сынып","4-сынып","5-сынып","6-сынып"],
"Kenya":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9"],
"Kiribati":["Primary Year 1","Primary Year 2","Primary Year 3","Primary Year 4","Primary Year 5","Primary Year 6"],
"Kuwait":["الصف الأول الابتدائي","الصف الثاني الابتدائي","الصف الثالث الابتدائي","الصف الرابع الابتدائي","الصف الخامس الابتدائي","الصف السادس الابتدائي"],
"Kyrgyzstan":["1-класс","2-класс","3-класс","4-класс","5-класс","6-класс"],
"Laos":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5"],
"Latvia":["1. klase","2. klase","3. klase","4. klase","5. klase","6. klase"],
"Lebanon":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Lesotho":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7"],
"Liberia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Libya":["الصف الأول","الصف الثاني","الصف الثالث","الصف الرابع","الصف الخامس","الصف السادس"],
"Liechtenstein":["1. Schuljahr","2. Schuljahr","3. Schuljahr","4. Schuljahr","5. Schuljahr"],
"Lithuania":["1 klasė","2 klasė","3 klasė","4 klasė","5 klasė","6 klasė"],
"Luxembourg":["Cycle 2.1","Cycle 2.2","Cycle 3.1","Cycle 3.2","Cycle 4.1","Cycle 4.2"],
"Madagascar":["T1","T2","T3","T4","T5"],
"Malawi":["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Standard 8"],"Malaysia":["Year 1","Year 2","Year 3","Year 4","Year 5","Year 6"],
"Maldives":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Mali":["1re année","2e année","3e année","4e année","5e année","6e année"],
"Malta":["Year 1","Year 2","Year 3","Year 4","Year 5","Year 6"],
"Marshall Islands":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Mauritania":["1re année","2e année","3e année","4e année","5e année","6e année"],
"Mauritius":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Mexico":["1° de primaria","2° de primaria","3° de primaria","4° de primaria","5° de primaria","6° de primaria"],
"Micronesia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Moldova":["Clasa I","Clasa a II-a","Clasa a III-a","Clasa a IV-a","Clasa a V-a","Clasa a VI-a"],
"France":["CP","CE1","CE2","CM1","CM2","Sixième"],
"Gabon":["CP1","CP2","CE1","CE2","CM1","CM2"],
"The Gambia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Georgia":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Germany":["Klasse 1","Klasse 2","Klasse 3","Klasse 4"],
"Ghana":["Basic 1","Basic 2","Basic 3","Basic 4","Basic 5","Basic 6"],
"Greece":["Α΄ Δημοτικού","Β΄ Δημοτικού","Γ΄ Δημοτικού","Δ΄ Δημοτικού","Ε΄ Δημοτικού","ΣΤ΄ Δημοτικού"],
"Grenada":["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6"],
"Guatemala":["Primero Primaria","Segundo Primaria","Tercero Primaria","Cuarto Primaria","Quinto Primaria","Sexto Primaria"],
"Guinea":["CP1","CP2","CE1","CE2","CM1","CM2"],
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
  "Ethiopia": ["Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"]
};
function levelOptionsFor(countryName, curriculumName){
  const c=(curriculumName||"").toLowerCase();
  if(c.includes("cambridge") || c.includes("igcse") || c.includes("pearson") || c.includes("edexcel") || c.includes("gcse") || c.includes("british curriculum")) return [...Array.from({length:13},(_,i)=>"Year "+(i+1)),"IGCSE","O Level","AS Level","A Level"];
  if(c.includes("ib") || c.includes("international baccalaureate")) return ["PYP Year 1","PYP Year 2","PYP Year 3","PYP Year 4","PYP Year 5","PYP Year 6","MYP Year 1","MYP Year 2","MYP Year 3","MYP Year 4","MYP Year 5","DP Year 1","DP Year 2"];
  if(c.includes("common core") || c.includes("ngss") || c.includes("state standard") || c.includes("american curriculum") || c==="ap") return ["Kindergarten",...Array.from({length:12},(_,i)=>"Grade "+(i+1)),"AP"];
  if(countryName==="Belgium") return nationalLevelStructures[curriculumName] || nationalLevelStructures["Belgium Flemish Community Curriculum"];
  if(countryName==="Andorra") {
    if(c.includes("french")) return nationalLevelStructures["Andorra French Education System"];
    if(c.includes("spanish")) return nationalLevelStructures["Andorra Spanish Education System"];
    return nationalLevelStructures["Andorra Andorran Education System"];
  }
  if(countryName==="Kenya" && (c.includes("8-4-4") || c.includes("kcse"))) return ["Standard 1","Standard 2","Standard 3","Standard 4","Standard 5","Standard 6","Standard 7","Standard 8","Form 1","Form 2","Form 3","Form 4"];
  return nationalLevelStructures[countryName] || grades;
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
  if (country && curriculum) country.addEventListener("change",function(){setCurriculumOptions(country,curriculum,"");refreshLevelOptions(country.value,curriculum.value,grade,gradeList);if(typeof refreshSubjectOptions==="function")refreshSubjectOptions();});

  const learnerId = document.getElementById("quizLearnerIdInput");
  const grade = document.getElementById("quizGradeInput");
  const gradeList=document.getElementById("quizGradeOptions");
  if(country && curriculum && grade) refreshLevelOptions(country.value,curriculum.value,grade,gradeList);
  if(country && curriculum) curriculum.addEventListener("change",function(){refreshLevelOptions(country.value,curriculum.value,grade,gradeList);if(typeof refreshSubjectOptions==="function")refreshSubjectOptions();});
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
  const cognitiveLevelInput = document.getElementById("quizCognitiveInput");
  if (cognitiveLevelInput) cognitiveLevelInput.addEventListener("change", () => updateQuestionBankCoverage());
  if (subject) {
    subject.addEventListener("change", () => {
      refreshStrandOptions();
      updateQuestionBankCoverage();
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
    return n <= 3 ? gradeSubjects.lower : n <= 6 ? gradeSubjects.upper : n <= 9 ? gradeSubjects.junior : gradeSubjects.senior;
  }

  function getAvailableQuestions(selectedGrade, selectedSubject) {
    const selectedCountry = String(country && country.value || "Kenya").trim().toLowerCase();
    const selectedCurriculum = String(curriculum && curriculum.value || "Kenya CBC/CBE").trim().toLowerCase();
    const isKenyaCbc = selectedCountry === "kenya" && selectedCurriculum === "kenya cbc/cbe";
    const isNigeriaNERDC = selectedCountry === "nigeria" && selectedCurriculum === "nigeria nerdc curriculum / waec / neco";
    if (isKenyaCbc) {
      const gradeBank = window.CBENexusCBCBanks && window.CBENexusCBCBanks.banks && window.CBENexusCBCBanks.banks[selectedGrade] && window.CBENexusCBCBanks.banks[selectedGrade][selectedSubject];
      if (Array.isArray(gradeBank) && gradeBank.length) return gradeBank.slice();
    }
    if (isNigeriaNERDC) {
      const gradeBank = window.CBENexusNigeriaBanks && window.CBENexusNigeriaBanks.banks && window.CBENexusNigeriaBanks.banks[selectedGrade] && window.CBENexusNigeriaBanks.banks[selectedGrade][selectedSubject];
      if (Array.isArray(gradeBank) && gradeBank.length) return gradeBank.slice();
    }
    // Shared starter questions keep the practice portal usable in every country.
    // They are supplementary general practice, not a claim of exact national-syllabus alignment.
    return Array.isArray(bank[selectedSubject]) ? bank[selectedSubject].slice() : [];
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

  function getSelectedCountryPack(countryName, curriculumName) {
    const root = window.CBENexusCountryQuestionPacks && window.CBENexusCountryQuestionPacks[countryName];
    if (!root) return null;
    const selected = root.variants && root.variants[curriculumName] ? root.variants[curriculumName] : root;
    return selected && String(selected.curriculum || "").toLowerCase() === String(curriculumName || "").toLowerCase() ? selected : null;
  }

  function updateQuestionBankCoverage() {
    const coverage = document.getElementById("quizBankCoverage");
    if (!coverage || !subject || !subject.value) return;
    const normalize = (value) => String(value || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    const publishedCount = (Array.isArray(window.CBENexusAdminQuestions) ? window.CBENexusAdminQuestions : []).filter((item) =>
      item && item.published !== false &&
      String(item.country || "Kenya").toLowerCase() === String(country.value || "").toLowerCase() &&
      String(item.curriculum || "Kenya CBC/CBE").toLowerCase() === String(curriculum.value || "").toLowerCase() &&
      normalize(item.grade) === normalize(grade.value) &&
      normalize(item.subject) === normalize(subject.value) &&
      String(item.question || "").trim() && Array.isArray(item.options) && item.options.length >= 4
    ).length;
    const pack = getSelectedCountryPack(country.value, curriculum.value);
    const exact = pack && pack.grades && pack.grades[grade.value] && pack.grades[grade.value][subject.value];
    const nationalCount = getAvailableQuestions(grade.value, subject.value).length;
    const count = publishedCount || (Array.isArray(exact) ? exact.length : 0) + nationalCount;
    coverage.textContent = count
      ? count + " questions available for " + country.value + " · " + curriculum.value + " · " + grade.value + " · " + subject.value + (Array.isArray(exact) ? ". Includes a curriculum-mapped question set." : ". Shared starter questions are supplementary, not country-syllabus verified.")
      : "No verified question set is available for this exact selection yet. Please choose another available class/subject or use teacher-published questions.";
    const languageNotice = document.getElementById("quizLanguageNotice");
    if (languageNotice) {
      const expectedInstructionLanguages = {
        "Afghanistan": curriculum.value && curriculum.value.toLowerCase().includes("(pashto)") ? "Pashto" : "Dari",
        "Albania": "Albanian (minority-language arrangements may also apply)",
        "Algeria": "Arabic; Tamazight is also taught, with foreign-language subjects introduced by grade",
        "Andorra": curriculum.value && curriculum.value.toLowerCase().includes("french") ? "French (French-system curriculum; Andorran formation also includes Catalan)" : curriculum.value && curriculum.value.toLowerCase().includes("spanish") ? "Spanish (Spanish-system curriculum; Andorran formation also includes Catalan)" : "Catalan, Spanish and French are vehicular languages in the Andorran system; school determines subject language",
        "Angola": "Portuguese",
        "Antigua and Barbuda": "English (national language of instruction; school-level language offerings may vary)",
        "Argentina": "Spanish (with intercultural bilingual and other language provisions where applicable)",
        "Armenia": "Armenian (with foreign-language instruction and minority-language provisions where applicable)",
        "Australia": "English (with Aboriginal and Torres Strait Islander languages and other language programs where offered)",
        "Austria": "German (with language-support and minority-language provisions where applicable)",
        "Azerbaijan": "Azerbaijani (state language; other-language schools may operate under national standards)",
        "Bahamas": "English",
        "Bahrain": "Arabic (English is also taught; some schools use international curricula)",
        "Bangladesh": "Bangla (Bengali; English-medium and other streams also operate)",
        "Barbados": "English",
        "Belarus": "Belarusian and Russian (both state languages; school language varies)",
        "Belgium": curriculum.value && curriculum.value.toLowerCase().includes("flemish") ? "Dutch (Flemish Community)" : curriculum.value && curriculum.value.toLowerCase().includes("french") ? "French (French Community)" : "German (German-speaking Community)",
        "Belize": "English (official language of instruction; multilingual context)",
        "Benin": "French (national school language; national languages support learning)",
      "Bhutan": "Dzongkha and English (subject and school language arrangements vary)",
        "Bolivia":"Spanish",
"Bosnia and Herzegovina":"Bosnian",
"Botswana":"English",
"Brazil":"Portuguese",
"Brunei":"Malay",
"Bulgaria":"Bulgarian",
"Burkina Faso":"French",
"Burundi":"Kirundi",
"Cabo Verde":"Portuguese",
"Cambodia":"Khmer",
        "Côte d’Ivoire":"French",
        "Croatia":"Croatian",
        "Cuba":"Spanish",
        "Cyprus":"Greek (Republic of Cyprus stream; English also used)",
        "Czechia":"Czech",
        "Democratic Republic of the Congo":"French (local languages may support early learning)",
        "Denmark":"Danish",
        "Djibouti":"French and Arabic",
        "Dominica":"English",
        "Dominican Republic":"Spanish",
        "Ecuador":"Spanish",
        "Egypt":"Arabic",
        "El Salvador":"Spanish",
        "Equatorial Guinea":"Spanish",
        "Eritrea":"Tigrinya, Arabic and English (school language varies)",
        "Estonia":"Estonian",
        "Eswatini":"English and siSwati",
        "Ethiopia":"Amharic and regional languages (school language varies)",
        "Fiji":"English",
        "Finland":"Finnish or Swedish (school language varies)",
        "Honduras":"Spanish",
        "Hungary":"Hungarian",
        "Iceland":"Icelandic",
        "India":"Hindi, English and constitutionally recognised regional languages (school medium varies)",
        "Indonesia":"Bahasa Indonesia (regional languages may support early learning)",
        "Iran":"Persian (Farsi)",
        "Iraq":"Arabic; Kurdish is also an official language and medium in the Kurdistan Region",
        "Ireland":"English or Irish (Gaeilge), depending on school",
        "Israel":"Hebrew (Arabic-language schools use Arabic)",
        "Italy":"Italian",
        "Jamaica":"English",
        "Japan":"Japanese",
        "Jordan":"Arabic",
        "Kazakhstan":"Kazakh (Russian-medium schools also operate)",
        "Kenya":"English and Kiswahili (language of instruction varies by learning area and school)",
        "Kiribati":"English and Gilbertese (Te Kiribati); school resources may use both",
        "Kuwait":"Arabic",
        "Kyrgyzstan":"Kyrgyz and Russian (school language varies)",
        "Laos":"Lao (spoken Lao support is provided for learners whose home language differs)",
        "Latvia":"Latvian (minority-language education may also be available)",
        "Lebanon":"Arabic, French or English depending on school",
        "Lesotho":"Sesotho and English (language use varies by grade and subject)",
        "Liberia":"English (local languages are used in some early-grade contexts)",
        "Libya":"Arabic",
        "Liechtenstein":"German",
        "Lithuania":"Lithuanian",
        "Luxembourg":"Luxembourgish, German and French (multilingual system)",
        "Madagascar":"Malagasy and French",
        "Malawi":"Chichewa and English (local language varies by school and grade)",        "Malaysia":"Malay (initial language stream; other school language streams may vary)",
        "Maldives":"Dhivehi (initial language stream; other school language streams may vary)",
        "Mali":"French (initial language stream; other school language streams may vary)",
        "Malta":"Maltese (initial language stream; other school language streams may vary)",
        "Marshall Islands":"Marshallese (initial language stream; other school language streams may vary)",
        "Mauritania":"Arabic (initial language stream; other school language streams may vary)",
        "Mauritius":"English (initial language stream; other school language streams may vary)",
        "Mexico":"Spanish (initial language stream; other school language streams may vary)",
        "Micronesia":"English (initial language stream; other school language streams may vary)",
        "Moldova":"Romanian (initial language stream; other school language streams may vary)",
        "France":"French",
        "Gabon":"French",
        "The Gambia":"English",
        "Georgia":"Georgian",
        "Germany":"German (Länder administer school curricula)",
        "Ghana":"English (Ghanaian languages are used in early-grade learning where applicable)",
        "Greece":"Greek",
        "Grenada":"English",
        "Guatemala":"Spanish; Mayan, Garifuna and Xinka language education also applies in relevant communities",
        "Guinea":"French and national languages (school and programme context varies)"
      };
      languageNotice.textContent = pack && pack.curriculum.toLowerCase() === String(curriculum.value || "").toLowerCase() && Array.isArray(exact)
        ? "Question language: " + pack.language + ". " + (pack.languageNote || "") + " Curriculum source: " + ((pack.subjectSources && pack.subjectSources[subject.value]) || pack.source) + ". Verified: " + (pack.verifiedAt || "date not recorded") + "."
        : (expectedInstructionLanguages[country.value] ? "Expected teaching language(s): " + expectedInstructionLanguages[country.value] + ". Question bank for this exact selection is not yet published or language-verified." : "Question language: English supplementary practice only. Country-specific teaching language and syllabus alignment are not yet verified for this selection.");
    }
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
    const nigeriaSubjects = isNigeriaNERDC && window.CBENexusNigeriaBanks && window.CBENexusNigeriaBanks.banks &&
      window.CBENexusNigeriaBanks.banks[grade.value] ? Object.keys(window.CBENexusNigeriaBanks.banks[grade.value]) : [];
    const countrySubjects = {
      "Afghanistan":["Dari","Pashto","Mathematics","Islamic Education","Social Studies","Science","Art"],
      "Albania":["Albanian Language","Foreign Languages","Mathematics","Biology","Physics","Chemistry","Geography","History","Civic Education","Arts","Physical Education","Technology and ICT"],
      "Algeria":["Arabic","Tamazight","Mathematics","Islamic Education","Civic Education","History and Geography","Scientific and Technological Education","French","English","Physics","Natural Sciences","Technology"],
      "Andorra":["Languages and Literature","Mathematics","Science and Technology","Social Sciences","Physical and Natural Sciences","Technology","Visual and Plastic Education","Music","Physical Education","Catalan","French","Spanish","English"],
      "Angola":["Língua Portuguesa","Matemática","Estudo do Meio","Ciências da Natureza","História","Geografia","Educação Moral e Cívica","Educação Manual e Plástica","Educação Musical","Educação Física","Física","Química","Biologia","Informática"],
      "Antigua and Barbuda":["English Language","Mathematics","Science","Social Studies","Language Arts","Agriculture","Visual Arts","Music","Physical Education","Information Technology","Spanish"],
      "Argentina":["Lengua","Matemática","Ciencias Naturales","Ciencias Sociales","Educación Artística","Educación Física","Formación Ética y Ciudadana","Tecnología","Lenguas Extranjeras"],
      "Armenia":["Armenian Language","Mathematics","Ես և շրջակա աշխարհը","Հայոց պատմություն","Natural Sciences","Foreign Languages","Technology","Art","Music","Physical Education","Digital Literacy"],
      "Austria":["Deutsch","Mathematik","Sachunterricht","Englisch","Musik","Kunst und Gestaltung","Technik und Design","Bewegung und Sport","Religion oder Ethik"],
      "Azerbaijan":["Azerbaijani Language","Mathematics","Life Skills","Foreign Language","Technology","Art","Music","Physical Education"],
      "Bahamas":["Mathematics","Language Arts","Science","Social Studies","Health and Family Life Education","Religious Studies","Physical Education"],
      "Bahrain":["Arabic","Mathematics","Science","English","Islamic Education","Social Studies","Art","Physical Education"],
      "Bangladesh":["বাংলা","গণিত","ইংরেজি","প্রাথমিক বিজ্ঞান","বাংলাদেশ ও বিশ্বপরিচয়","ধর্ম ও নৈতিক শিক্ষা"],
      "Barbados":["Mathematics","Language Arts","Social Studies","Science","HFLE","Physical Education","Visual Arts","Music"],
      "Belarus":["Русский язык","Беларуская мова","Математика","Человек и мир","Трудовое обучение","Изобразительное искусство","Музыка","Физическая культура"],
      "Belgium":["Mathematics","Wiskunde","Mathématiques","Dutch","French","German","World Orientation","Arts","Physical Education"],
      "Belize":["Mathematics","Language Arts","Science","Social Studies","Physical Education","Art","Music"],
      "Benin":["Français","Mathématiques","Éducation sociale","Éducation scientifique et technologique","Éducation artistique"],
      "Bolivia":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Bosnia and Herzegovina":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Botswana":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Brazil":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Brunei":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Bulgaria":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Burkina Faso":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Burundi":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Cabo Verde":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
"Cambodia":["Mathematics","Language","Science","Social Studies","Arts","Physical Education"],
      "Côte d’Ivoire":["Français","Mathématiques","Éducation civique et morale","Éducation physique et sportive","Éveil au milieu"],
      "Croatia":["Croatian Language","Mathematics","Nature and Society","Arts","Music","Physical Education"],
      "Cuba":["Lengua Española","Matemática","El Mundo en que Vivimos","Educación Artística","Educación Física"],
      "Cyprus":["Greek Language","Mathematics","Science","History","Arts","Physical Education"],
      "Czechia":["Czech Language","Mathematics","English","First-hand Knowledge","Arts","Physical Education"],
      "Democratic Republic of the Congo":["Français","Mathématiques","Sciences","Éducation civique et morale","Éducation physique"],
      "Denmark":["Danish","Mathematics","Nature and Technology","Music","Arts","Physical Education"],
      "Djibouti":["French","Arabic","Mathematics","Science","Civic Education","Physical Education"],
      "Dominica":["English Language","Mathematics","Science","Social Studies","Visual Arts","Music","Physical Education"],
      "Dominican Republic":["Lengua Española","Matemática","Ciencias Sociales","Ciencias de la Naturaleza","Educación Artística","Educación Física"],
      "Ecuador":["Lengua y Literatura","Matemática","Ciencias Naturales","Estudios Sociales","Educación Cultural y Artística","Educación Física"],
      "Egypt":["Arabic","Mathematics","Discover","English","Religious Education","Art","Physical Education"],
      "El Salvador":["Lenguaje","Matemática","Ciencia y Tecnología","Estudios Sociales","Educación Artística","Educación Física"],
      "Equatorial Guinea":["Lengua Española","Matemáticas","Conocimiento del Medio","Educación Artística","Educación Física"],
      "Eritrea":["Tigrinya","Mathematics","English","Environmental Studies","Civic Education","Arts","Physical Education"],
      "Estonia":["Estonian Language","Mathematics","Nature Studies","Art","Music","Physical Education"],
      "Eswatini":["English","Siswati","Mathematics","General Studies","Creative Arts","Religious Education","Physical Education"],
      "Ethiopia":["Amharic","Mathematics","Environmental Science","English","Afan Oromo","Arts","Physical Education"],
      "Fiji":["English","Mathematics","Healthy Living","Social Science","Elementary Science","Arts","Physical Education"],
      "Finland":["Finnish","Mathematics","Environmental Studies","Arts","Music","Physical Education"],
      "Honduras":["Español","Matemáticas","Ciencias Naturales","Ciencias Sociales","Educación Artística","Educación Física"],
      "Hungary":["Magyar nyelv és irodalom","Matematika","Környezetismeret","Ének-zene","Vizuális kultúra","Testnevelés"],
      "Iceland":["Íslenska","Stærðfræði","Náttúrufræði","Samfélagsgreinar","List- og verkgreinar","Íþróttir"],
      "India":["Hindi","English","Mathematics","The World Around Us","Art Education","Physical Education"],
      "Indonesia":["Bahasa Indonesia","Matematika","Pendidikan Pancasila","Seni dan Budaya","Pendidikan Jasmani"],
      "Iran":["فارسی","ریاضی","علوم تجربی","آموزش قرآن","هدیه‌های آسمان","هنر"],
      "Iraq":["اللغة العربية","الرياضيات","العلوم","التربية الإسلامية","الاجتماعيات","اللغة الإنكليزية"],
      "Ireland":["English","Gaeilge","Mathematics","Social, Environmental and Scientific Education","Arts Education","Physical Education"],
      "Israel":["עברית","מתמטיקה","מדעים","מולדת וחברה","אמנות","חינוך גופני"],
      "Italy":["Italiano","Matematica","Storia","Geografia","Scienze","Tecnologia","Arte e immagine","Musica","Educazione motoria"],
      "Jamaica":["Language Arts","Mathematics","Integrated Studies","Science","Social Studies","Physical Education","Visual and Performing Arts"],
      "Japan":["国語","算数","生活","音楽","図画工作","体育","道徳"],
      "Jordan":["اللغة العربية","الرياضيات","العلوم","التربية الإسلامية","الدراسات الاجتماعية","اللغة الإنجليزية","التربية الفنية"],
      "Kazakhstan":["Қазақ тілі","Математика","Жаратылыстану","Әліппе","Музыка","Көркем еңбек","Дене шынықтыру"],
      "Kenya":["English","Kiswahili","Mathematical Activities","Environmental Activities","Creative Activities","Religious Education"],
      "Kiribati":["English","Mathematics","Te Kiribati","Environmental Studies","Creative Arts","Physical Education"],
      "Kuwait":["اللغة العربية","الرياضيات","العلوم","التربية الإسلامية","الاجتماعيات","اللغة الإنجليزية"],
      "Kyrgyzstan":["Кыргыз тили","Математика","Мекен таануу","Орус тили","Музыка","Көркөм өнөр","Дене тарбия"],
      "Laos":["Lao Language","Mathematics","Science and Environment","Moral Education","Arts","Physical Education"],
      "Latvia":["Latviešu valoda","Matemātika","Dabaszinības","Sociālās zinības","Vizuālā māksla","Mūzika","Sports un veselība"],
      "Lebanon":["اللغة العربية","الرياضيات","العلوم","التربية","اللغة الأجنبية","التربية الفنية"],
      "Lesotho":["Sesotho","Mathematics","English","Environmental Studies","Life Skills","Creative Arts"],
      "Liberia":["Language Arts","Mathematics","Science","Social Studies","Physical Education","Creative Arts"],
      "Libya":["اللغة العربية","الرياضيات","العلوم","التربية الإسلامية","التربية الفنية","اللغة الإنجليزية"],
      "Liechtenstein":["Deutsch","Mathematik","Natur, Mensch, Gesellschaft","Gestalten","Musik","Bewegung und Sport"],
      "Lithuania":["Lietuvių kalba","Matematika","Pasaulio pažinimas","Dailė","Muzika","Fizinis ugdymas"],
      "Luxembourg":["Lëtzebuergesch","Mathématiques","Allemand","Français","Éveil aux sciences","Éducation artistique"],
      "Madagascar":["Malagasy","Matematika","Français","Fahalalana ny tontolo iainana","Fanabeazana ara-tsosialy"],
      "Malawi":["Chichewa","Mathematics","English","Expressive Arts","Life Skills","Social and Environmental Sciences"],      "Malaysia":["Bahasa Melayu","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Maldives":["ދިވެހި","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Mali":["Français","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Malta":["Malti","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Marshall Islands":["Kajin M̧ajeļ","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Mauritania":["اللغة العربية","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Mauritius":["English","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Mexico":["Español","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Micronesia":["English","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "Moldova":["Limba română","Mathematics","Science","Social Studies","Arts","Physical Education"],
      "France":["Français","Mathématiques","Questionner le monde","Enseignement moral et civique","Arts plastiques","Éducation musicale","Éducation physique et sportive"],
      "Gabon":["Français","Mathématiques","Éducation civique","Sciences d'observation","Histoire-Géographie"],
      "The Gambia":["English","Mathematics","Integrated Science","Social and Environmental Studies","Creative and Performing Arts","Physical Education"],
      "Georgia":["ქართული ენა","Mathematics","Nature and Society","Arts","Music","Physical Education"],
      "Germany":["Deutsch","Mathematik","Sachunterricht","Kunst","Musik","Sport"],
      "Ghana":["English Language","Mathematics","Science","Our World Our People","Creative Arts","Physical Education"],
      "Greece":["Γλώσσα","Μαθηματικά","Μελέτη Περιβάλλοντος","Εικαστικά","Μουσική","Φυσική Αγωγή"],
      "Grenada":["Language Arts","Mathematics","Science","Social Studies","Creative Arts","Physical Education"],
      "Guatemala":["Comunicación y Lenguaje","Matemáticas","Medio Social y Natural","Expresión Artística","Educación Física"],
      "Guinea":["Français","Mathématiques","Éducation civique et morale","Sciences d'observation","Histoire-Géographie"],
      "Bhutan":["རྫོང་ཁ","English","Mathematics","Environmental Studies","Health and Physical Education","Social Studies","ICT"]
    };
    const countryBaseSubjects = countrySubjects[country && country.value] || [];
    const baseList = [...(isKenyaCbc ? subjectsForGrade(grade.value) : (isNigeriaNERDC ? nigeriaSubjects : countryBaseSubjects)), ...Object.keys(bank).filter((name) => name !== "CBC Skills")];
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
    updateQuestionBankCoverage();
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
    const nationalGradeBank = isKenyaCbc && window.CBENexusCBCBanks &&
      window.CBENexusCBCBanks.banks && window.CBENexusCBCBanks.banks[selectedGrade] && window.CBENexusCBCBanks.banks[selectedGrade][selectedSubject] ||
      isNigeriaNERDC && window.CBENexusNigeriaBanks &&
      window.CBENexusNigeriaBanks.banks && window.CBENexusNigeriaBanks.banks[selectedGrade] && window.CBENexusNigeriaBanks.banks[selectedGrade][selectedSubject];
    const pack = getSelectedCountryPack(selectedCountry, selectedCurriculum);
    const exactPack = pack && pack.grades && pack.grades[selectedGrade] && pack.grades[selectedGrade][selectedSubject];
    const packBank = Array.isArray(exactPack) ? exactPack.slice() : [];
    const nationalBank = Array.isArray(nationalGradeBank) ? nationalGradeBank : [];
    const gradeBank = nationalBank.concat(packBank);


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
      normalizeSubject(item.subject) === normalizeSubject(selectedSubject) &&
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

    const cognitiveLevel = document.getElementById("quizCognitiveInput");
    if (cognitiveLevel && cognitiveLevel.value !== "all") {
      combined = combined.filter((item) => cognitiveLevel.value === "higher-order"
        ? String(item[11] || "").toLowerCase() === "higher-order"
        : !String(item[11] || "").toLowerCase().includes("higher"));
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
      questionLanguage: (getSelectedCountryPack(country ? country.value : "", curriculum && curriculum.value) || {}).language || "English supplementary practice",
      cognitiveLevel: document.getElementById("quizCognitiveInput") ? document.getElementById("quizCognitiveInput").value : "all",
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
    const requested = Math.min(50, Math.max(1, Number(length && length.value) || 10), selectedBank.length);
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
      if (item[11]) {
        const levelTag = document.createElement("p");
        levelTag.className = "quiz-curriculum-meta";
        levelTag.textContent = item[11] === "higher-order" ? "Higher-order thinking · application / analysis / evaluation" : "Foundational understanding";
        fieldset.appendChild(levelTag);
      }
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
    instructions.innerHTML = "<strong>" + escapeHtml(country.value + " · " + curriculum.value + " · " + grade.value + " · " + subject.value) + "</strong> — " + escapeHtml(strand ? strand.value : "All Topics") + " — " + active.length + " randomized questions.";
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
      questionLanguage: (() => { const p = getSelectedCountryPack(country ? country.value : "", curriculum && curriculum.value); return p && p.grades && p.grades[grade.value] && p.grades[grade.value][subject.value] ? p.language : "English supplementary practice"; })(),
      cognitiveLevel: document.getElementById("quizCognitiveInput") ? document.getElementById("quizCognitiveInput").value : "all",
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