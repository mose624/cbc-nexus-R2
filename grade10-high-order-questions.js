/* CBE Nexus Grade 10 higher-order practice bank.
   Original scenario-based practice; aligned to broad KICD senior-school learning areas.
   Not an official KNEC paper. Each item uses the existing Interactive Questions schema.
*/
"use strict";
const subjects = {
"Core Mathematics":["linear equations","functions and graphs","ratio and proportion","percentages and commercial arithmetic","geometry and measurement","trigonometry","statistics","probability","indices and standard form","sequences"],
"Essential Mathematics":["budgeting and percentages","ratio and proportion","measurement","data interpretation","linear relationships","financial decisions","probability","graphs","estimation","problem solving"],
"Sign Language":["sign vocabulary","facial expression and non-manual signals","spatial grammar","fingerspelling","turn-taking","visual attention","sentence structure","interpreting meaning","audience and context","clear communication"],
"Mathematics":["linear equations","functions and graphs","ratio and proportion","percentages and commercial arithmetic","geometry and measurement","trigonometry","statistics","probability","indices and standard form","sequences"],
"English":["reading inference","argument and evidence","grammar in context","sentence structure","tone and audience","summary","vocabulary in context","punctuation","creative writing","oral communication"],
"Kiswahili":["ufahamu","sarufi katika muktadha","uandishi wa insha","msamiati","methali na nahau","muundo wa sentensi","fasihi","mawasiliano","hoja na ushahidi","uandishi rasmi"],
"Biology":["cell structure and function","nutrition","transport in organisms","respiration","reproduction","ecology","classification","health and disease","experimental design","adaptation"],
"Chemistry":["atomic structure","electronic configuration and spdf notation","periodic trends","chemical bonding","formulae and equations","acids bases and indicators","separation techniques","mole concept","rates of reaction","laboratory safety"],
"Physics":["measurement and uncertainty","motion and graphs","forces and Newton's laws","pressure","mechanical properties of materials","heat transfer","waves and sound","light","electric circuits","energy conversion"],
"Integrated Science":["scientific investigation","matter and materials","energy transfer","forces and motion","cells and health","ecosystems","electricity","waves","measurement and data","environmental sustainability"],
"General Science":["scientific method","measurement","matter","energy","forces","human health","ecosystems","data interpretation","technology","environmental conservation"],
"Business Studies":["scarcity and choice","entrepreneurship","market research","demand and supply","business records","cash flow","consumer rights","insurance and risk","marketing","ethical business decisions"],
"Geography":["map interpretation","weather and climate","landforms","population patterns","settlement","natural resources","fieldwork","environmental management","transport networks","data presentation"],
"History and Citizenship":["historical evidence","cause and consequence","constitutional principles","citizenship","human rights","governance","national identity","conflict resolution","heritage","responsible participation"],
"History & Citizenship":["historical evidence","cause and consequence","constitutional principles","citizenship","human rights","governance","national identity","conflict resolution","heritage","responsible participation"],
"Community Service Learning":["community needs assessment","stakeholder consultation","project planning","budgeting resources","teamwork","safeguarding and ethics","implementation","monitoring indicators","reflection","sustainable impact"],
"Computer Studies":["algorithms","data representation","programming logic","networks","cybersecurity","databases","spreadsheets","digital citizenship","troubleshooting","system design"],
"Computer Science":["algorithms","data representation","programming logic","networks","cybersecurity","databases","spreadsheets","digital citizenship","troubleshooting","system design"],
"Agriculture":["soil management","crop selection","water conservation","pest management","livestock care","farm records","agroforestry","food safety","farm budgeting","sustainable farming"],
"Home Science":["balanced nutrition","food hygiene","food preparation","textiles and clothing","consumer decisions","home budgeting","child safety","resource management","first aid","sustainable living"],
"Home Science":["balanced nutrition","food hygiene","food preparation","textiles and clothing","consumer decisions","home budgeting","child safety","resource management","first aid","sustainable living"],
"Physical Education":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Sports & Recreation":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Sports and Recreation":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Christian Religious Education":["interpretation of scripture","ethical decision-making","human dignity","stewardship","service to others","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"Islamic Religious Education":["Qur'anic interpretation","ethical decision-making","human dignity","stewardship","charity and service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"Hindu Religious Education":["scriptural interpretation","ethical decision-making","dharma and responsibility","stewardship","service to others","peace and reconciliation","family responsibilities","justice","values in daily life","community action"],
"CRE":["scripture and values","ethical decision-making","human dignity","stewardship","service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"IRE":["Qur'anic teachings","ethical decision-making","human dignity","stewardship","charity and service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"HRE":["religious teachings","ethical decision-making","responsibility","stewardship","service to others","peace and reconciliation","family responsibilities","justice","values in daily life","community action"],
"French":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"German":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"Arabic":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"Mandarin Chinese":["comprehension","characters and meaning","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","sentence patterns","cultural context","editing for clarity"],
"Mandarin":["comprehension","characters and meaning","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","sentence patterns","cultural context","editing for clarity"],
"Literature in English":["character motivation","theme and evidence","narrative perspective","imagery","tone","dramatic conflict","structure","context","interpretation","evidence-based response"],
"Fasihi ya Kiswahili":["wahusika na motisha","maudhui na ushahidi","mandhari","tamathali za semi","mtindo","mgogoro wa tamthilia","muundo","muktadha","tafsiri","uchambuzi wa dondoo"],
"Media Technology":["audience and purpose","storyboarding","camera framing","sound recording","editing continuity","copyright and consent","lighting","production planning","digital file quality","evaluating media impact"],
"Building and Construction":["site safety","materials selection","measurement and setting out","foundation planning","structural loads","drawing interpretation","tools and maintenance","cost estimation","sustainable construction","quality inspection"],
"Building Construction":["site safety","materials selection","measurement and setting out","foundation planning","structural loads","drawing interpretation","tools and maintenance","cost estimation","sustainable construction","quality inspection"],
"Electricity":["electrical safety","circuit symbols","series and parallel circuits","current voltage and resistance","power and energy","fault finding","earthing","measurement instruments","load calculations","efficient energy use"],
"Metalwork":["workshop safety","material selection","measuring and marking out","cutting and shaping","joining methods","tool selection","drawing interpretation","tolerances","quality control","waste reduction"],
"Power Mechanics":["engine systems","energy conversion","lubrication","cooling systems","transmission","fault diagnosis","workshop safety","maintenance schedules","fuel efficiency","technical measurement"],
"Wood Technology":["timber selection","grain and defects","measuring and marking out","joints","tool safety","finishing","drawing interpretation","strength and load","sustainable sourcing","quality inspection"],
"Woodwork":["timber selection","grain and defects","measuring and marking out","joints","tool safety","finishing","drawing interpretation","strength and load","sustainable sourcing","quality inspection"],
"Aviation":["principles of flight","weather interpretation","navigation basics","aircraft safety","forces and motion","communication protocols","human factors","flight planning","maintenance checks","risk assessment"],
"Marine and Fisheries Technology":["aquatic ecosystems","sustainable fishing","water safety","fish handling","navigation basics","weather and tides","equipment maintenance","stock assessment","aquaculture","resource conservation"],
"Marine & Fisheries Technology":["aquatic ecosystems","sustainable fishing","water safety","fish handling","navigation basics","weather and tides","equipment maintenance","stock assessment","aquaculture","resource conservation"],
"Music & Dance":["rhythm and meter","melody","dynamics","ensemble coordination","movement and expression","rehearsal planning","cultural context","notation","performance evaluation","stage safety"],
"Theatre & Film":["character and motivation","script interpretation","blocking","camera and shot choices","sound design","editing continuity","rehearsal planning","audience and purpose","consent and safety","performance evaluation"],
"Fine Arts":["composition","colour relationships","texture","perspective","materials selection","visual communication","cultural context","sustainable practice","critique with evidence","portfolio development"],
"Creative Arts":["composition","colour relationships","texture","perspective","materials selection","visual communication","cultural context","sustainable practice","critique with evidence","portfolio development"],
"Pre-Technical Studies":["design brief","materials selection","technical drawing","measurement","mechanisms","electrical safety","prototyping","tool selection","testing and iteration","sustainable design"],
"Life Skills Education":["self-awareness","decision-making","communication","conflict resolution","resilience","goal setting","empathy","leadership","personal safety","reflection"],
"Health Education":["nutrition","hygiene","mental wellbeing","first aid","disease prevention","relationships and consent","substance awareness","physical activity","risk assessment","health communication"],
"Environmental Activities":["waste management","water conservation","biodiversity","community participation","soil protection","pollution prevention","resource reuse","data collection","safety","sustainable choices"],
"Indigenous Languages":["comprehension","oral traditions","vocabulary in context","sentence structure","storytelling","proverbs","respectful communication","translation choices","cultural context","writing for audience"]
};
const aliases = {
"History and Citizenship":"History & Citizenship","Core Mathematics":"Core Mathematics","Essential Mathematics":"Essential Mathematics","Mandarin Chinese":"Mandarin Chinese","Sign Language":"Sign Language","Indigenous Languages":"Indigenous Languages","Building and Construction":"Building Construction",
"Marine and Fisheries Technology":"Marine & Fisheries Technology","Wood Technology":"Woodwork",
"Sports and Recreation":"Sports & Recreation","Home Science":"Home Science"
};
const contexts = [
  "A learner team at a Kenyan school is asked to solve a practical problem during a project.",
  "A community group collects evidence before deciding how to improve a local service.",
  "A small enterprise reviews its results after an unexpected change in conditions.",
  "During a practical lesson, a learner notices that the first plan produces inconsistent results.",
  "A county project must balance cost, safety, inclusion and long-term sustainability."
];
const prompts = [
  (s,t,c)=>c+" While investigating "+t+", which action best demonstrates sound "+s+" reasoning?",
  (s,t,c)=>c+" The group is working on "+t+". Which evidence would be most useful before it chooses a solution?",
  (s,t,c)=>c+" A proposed solution to a problem involving "+t+" has an unexpected result. What should the learners do next?",
  (s,t,c)=>c+" In a task about "+t+", two explanations seem possible. Which approach gives the most defensible conclusion?",
  (s,t,c)=>c+" The team must present its findings on "+t+". Which response best shows application rather than simple recall?"
];
const answerSets = [
  ["Choose the option supported by relevant evidence, accurate analysis and the stated constraints.","Accept the first suggestion because it sounds confident.","Ignore contrary observations to finish quickly.","Copy a solution without checking whether it fits the context."],
  ["Collect relevant data, check its reliability and compare it with the question being investigated.","Select only the information that supports the preferred answer.","Use an unrelated example as the only evidence.","Make the decision before identifying what information is needed."],
  ["Repeat the procedure safely, change one relevant factor at a time and record the result.","Hide the unexpected result from the report.","Change several factors at once without recording them.","Assume the original prediction must be correct."],
  ["Compare the explanations against the available evidence and state any limitations.","Choose the explanation with the most technical-sounding words.","Treat both explanations as proven without checking.","Discard the evidence and rely on personal preference."],
  ["Apply the relevant principle to the situation and justify the choice with specific evidence.","Repeat a definition without connecting it to the situation.","Give an opinion without explaining its basis.","Describe an unrelated fact instead of answering the task."]
];
const curriculum = {
"Core Mathematics": {
"linear equations":["Algebra","Linear equations","Formulate and solve linear equations from real-life situations."],
"functions and graphs":["Algebra","Functions and graphs","Represent relationships using tables, equations and graphs."],
"ratio and proportion":["Numbers","Ratio and proportion","Solve contextual problems involving ratio and proportion."],
"percentages and commercial arithmetic":["Numbers","Percentages","Apply percentages to budgets, discounts and financial decisions."],
"geometry and measurement":["Measurement","Geometrical measurement","Select and apply appropriate measurement formulae."],
"trigonometry":["Geometry","Trigonometry","Use trigonometric ratios to solve right-angled triangle problems."],
"statistics":["Statistics","Data representation and interpretation","Interpret data and justify conclusions from statistical displays."],
"probability":["Statistics","Probability","Determine and interpret probabilities for simple events."],
"indices and standard form":["Numbers","Indices and standard form","Apply index laws and standard form to calculations."],
"sequences":["Algebra","Sequences","Identify patterns and express general terms where appropriate."]
},
"English": {
"reading inference":["Reading","Comprehension and inference","Infer meaning and justify interpretations using textual evidence."],
"argument and evidence":["Writing","Argumentative writing","Develop a coherent claim supported by relevant reasons and evidence."],
"grammar in context":["Language use","Grammar in context","Select grammatical structures appropriate to meaning and context."],
"sentence structure":["Language use","Sentence construction","Revise sentences for clarity, cohesion and correctness."],
"tone and audience":["Oral communication","Audience, purpose and register","Adapt tone and language to audience and purpose."],
"summary":["Reading","Summarising","Select main ideas and paraphrase them concisely without distortion."],
"vocabulary in context":["Reading","Vocabulary in context","Infer word meaning from contextual clues."],
"punctuation":["Language use","Punctuation","Use punctuation to clarify meaning and sentence relationships."],
"creative writing":["Writing","Creative composition","Develop a coherent narrative using relevant descriptive techniques."],
"oral communication":["Oral communication","Listening and speaking","Respond appropriately and support spoken contributions with reasons."]
},
"Kiswahili": {
"ufahamu":["Kusoma","Ufahamu","Kutoa maana na hitimisho kwa kutumia ushahidi kutoka matini."],
"sarufi katika muktadha":["Matumizi ya lugha","Sarufi","Kutumia miundo ya sarufi kwa usahihi kulingana na muktadha."],
"uandishi wa insha":["Kuandika","Insha","Kuandika insha yenye mtiririko, hoja na matumizi sahihi ya lugha."],
"msamiati":["Kusoma","Msamiati","Kutambua maana ya msamiati kwa kuzingatia muktadha."],
"methali na nahau":["Fasihi simulizi","Methali na nahau","Kufasiri methali au nahau na kuitumia katika muktadha unaofaa."],
"muundo wa sentensi":["Matumizi ya lugha","Muundo wa sentensi","Kuchanganua na kuboresha sentensi ili kuwasilisha maana wazi."],
"fasihi":["Fasihi","Uchambuzi wa fasihi","Kuchambua maudhui na wahusika kwa kurejelea ushahidi wa kazi."],
"mawasiliano":["Kuzungumza na kusikiliza","Mawasiliano","Kuchagua lugha inayofaa hadhira na lengo la mawasiliano."],
"hoja na ushahidi":["Kuandika","Uwasilishaji wa hoja","Kujenga hoja zenye ushahidi unaofaa."],
"uandishi rasmi":["Kuandika","Uandishi rasmi","Kutumia muundo na sajili inayofaa katika maandishi rasmi."]
},
"Electricity": {
"electrical safety":["Electrical Technology","Electrical safety in the work environment","Identify hazards, select appropriate protective measures and follow safe isolation procedures."],
"circuit symbols":["Electrical Technology","Electrical drawings and symbols","Interpret standard circuit symbols and use them to communicate circuit arrangements."],
"series and parallel circuits":["Electrical Technology","Electrical circuits","Distinguish series and parallel connections and predict their effects on circuit behaviour."],
"current voltage and resistance":["Electrical Technology","Electrical quantities and measurement","Measure and relate current, voltage and resistance using appropriate instruments."],
"power and energy":["Electrical Technology","Electrical power and energy","Calculate electrical power and energy from supplied circuit data."],
"fault finding":["Electrical Technology","Testing and fault diagnosis","Use a systematic and safe procedure to locate a simple circuit fault."],
"earthing":["Electrical Technology","Protection and earthing","Explain how protective earthing reduces electric-shock risk."],
"measurement instruments":["Electrical Technology","Electrical measuring instruments","Select and connect a suitable meter safely and correctly."],
"load calculations":["Electrical Technology","Electrical loads and circuits","Estimate total load and assess whether a circuit rating is suitable."],
"efficient energy use":["Electrical Technology","Energy efficiency","Recommend safe practices that reduce unnecessary electrical energy use."]
}
};
const specific = {
"Core Mathematics": [
{q:"A school buys 8 scientific calculators at KSh 1,250 each and receives a KSh 600 discount on the total bill. How much does it pay?",o:["KSh 9,400","KSh 10,000","KSh 10,600","KSh 8,600"],a:0,e:"8 × 1,250 − 600 = KSh 9,400."},
{q:"A water tank is 3/5 full and contains 720 litres. What is its full capacity?",o:["1,000 L","1,200 L","432 L","1,500 L"],a:1,e:"Capacity = 720 ÷ (3/5) = 1,200 L."},
{q:"A trader buys a bag for KSh 1,600 and sells it for KSh 2,000. What is the profit percentage on cost?",o:["20%","25%","40%","80%"],a:1,e:"Profit = 400; percentage = 400/1,600 × 100 = 25%."},
{q:"Solve 3(2x − 5) = 27.",o:["x = 6","x = 7","x = 8","x = 9"],a:1,e:"6x − 15 = 27, so 6x = 42 and x = 7."},
{q:"A taxi charges KSh 180 plus KSh 45 per kilometre. What is the fare for a 12 km trip?",o:["KSh 540","KSh 720","KSh 660","KSh 225"],a:1,e:"180 + 45 × 12 = KSh 720. Wait: 45×12=540; total=720."},
{q:"A map uses a scale of 1:50,000. Two schools are 7.2 cm apart on the map. What is the actual distance?",o:["0.36 km","3.6 km","36 km","360 km"],a:1,e:"7.2 × 50,000 cm = 360,000 cm = 3.6 km."},
{q:"A rectangular plot measures 24 m by 15 m. A fence is built around it, leaving a 3 m gate opening. How many metres of fencing are needed?",o:["75 m","78 m","72 m","69 m"],a:0,e:"Perimeter = 2(24+15)=78 m; subtract 3 m for the gate = 75 m. Correct option should be 75."},
{q:"The mean of 6, 8, 9, 11 and x is 10. Find x.",o:["12","14","16","18"],a:2,e:"Required total = 5×10=50; known total=34, so x=16."},
{q:"A learner scores 42 out of 60 in a test. What percentage is this?",o:["60%","65%","70%","75%"],a:2,e:"42/60 × 100 = 70%."},
{q:"A number is increased by 15% to become 230. What was the original number?",o:["200","195.5","215","260"],a:0,e:"Original × 1.15 = 230, so original = 200."},
{q:"A triangular garden has base 18 m and perpendicular height 7 m. Find its area.",o:["126 m²","63 m²","25 m²","31.5 m²"],a:1,e:"Area = 1/2 × 18 × 7 = 63 m²."},
{q:"A cylinder has radius 7 cm and height 10 cm. Using π = 22/7, find its volume.",o:["1,540 cm³","440 cm³","770 cm³","3,080 cm³"],a:0,e:"V = πr²h = 22/7 × 49 × 10 = 1,540 cm³."},
{q:"Simplify 3a + 5b − 2a + 4b.",o:["a + b","5a + 9b","a + 9b","a − b"],a:2,e:"Combine like terms: (3a−2a)+(5b+4b)=a+9b."},
{q:"Factorise x² + 7x + 12.",o:["(x+2)(x+6)","(x+3)(x+4)","(x−3)(x−4)","(x+1)(x+12)"],a:1,e:"The factors of 12 that sum to 7 are 3 and 4."},
{q:"Solve the simultaneous equations x+y=13 and x−y=5.",o:["x=9, y=4","x=4, y=9","x=8, y=5","x=10, y=3"],a:0,e:"Adding gives 2x=18, so x=9 and y=4."},
{q:"A line has gradient 3 and passes through (2, 7). Which equation represents it?",o:["y=3x+1","y=3x−1","y=2x+3","y=x+5"],a:0,e:"Using y−7=3(x−2), y=3x+1."},
{q:"Find the gradient of the line joining (2, 3) and (6, 15).",o:["2","3","4","6"],a:1,e:"Gradient = (15−3)/(6−2) = 12/4 = 3."},
{q:"A sequence is 4, 9, 14, 19, ... What is its 20th term?",o:["99","100","104","104? "],a:0,e:"The nth term is 4+(n−1)5; the 20th term is 99."},
{q:"Evaluate 2³ × 2⁴.",o:["2⁷ = 128","2¹² = 4,096","4⁷ = 16,384","2¹ = 2"],a:0,e:"When multiplying powers with the same base, add indices: 2^(3+4)=128."},
{q:"Write 0.000056 in standard form.",o:["5.6×10⁻⁵","5.6×10⁻⁴","56×10⁻⁵","0.56×10⁻⁵"],a:0,e:"Move the decimal five places right: 5.6×10⁻⁵."},
{q:"A right-angled triangle has opposite side 9 cm and hypotenuse 15 cm. Find sin θ for the angle θ.",o:["3/5","5/3","2/5","4/5"],a:0,e:"sin θ = opposite/hypotenuse = 9/15 = 3/5."},
{q:"A ladder 13 m long reaches a wall. Its foot is 5 m from the wall. Find the height reached.",o:["8 m","12 m","18 m","10 m"],a:1,e:"Height²=13²−5²=144, so height=12 m."},
{q:"The angles of a triangle are x, 2x and 3x. Find the largest angle.",o:["30°","60°","90°","120°"],a:2,e:"6x=180°, so x=30° and the largest angle is 90°."},
{q:"A circular pond has diameter 14 m. Using π=22/7, find its circumference.",o:["22 m","44 m","154 m","308 m"],a:1,e:"Circumference = πd = 22/7 × 14 = 44 m."},
{q:"A shop records sales of KSh 1,200, 1,500, 900 and 1,400 over four days. What is the mean daily sale?",o:["KSh 1,200","KSh 1,250","KSh 1,300","KSh 1,400"],a:1,e:"Total=5,000; mean=5,000/4=KSh 1,250."},
{q:"A bag has 4 red, 3 blue and 5 white balls. One is selected randomly. What is the probability it is not white?",o:["5/12","7/12","1/3","2/3"],a:1,e:"Non-white balls=4+3=7 out of 12."},
{q:"A school bus travels 150 km in 2.5 hours at constant speed. Find its average speed.",o:["50 km/h","55 km/h","60 km/h","75 km/h"],a:2,e:"Speed = distance/time = 150/2.5 = 60 km/h."},
{q:"Convert 3.75 hours into hours and minutes.",o:["3 h 15 min","3 h 45 min","3 h 75 min","4 h 15 min"],a:1,e:"0.75 hour × 60 = 45 minutes."},
{q:"A recipe for 8 people needs 600 g of rice. How much rice is needed for 14 people at the same rate?",o:["750 g","900 g","1,050 g","1,200 g"],a:2,e:"600×14/8 = 1,050 g."},
{q:"A phone bill of KSh 2,400 attracts 16% VAT. What is the total bill?",o:["KSh 2,784","KSh 2,640","KSh 2,816","KSh 3,840"],a:0,e:"VAT=384; total=2,784."},
{q:"A worker's salary rises from KSh 30,000 to KSh 33,600. What is the percentage increase?",o:["10%","12%","15%","18%"],a:1,e:"Increase=3,600; 3,600/30,000×100=12%."},
{q:"The exterior angle of a regular polygon is 30°. How many sides does it have?",o:["10","12","15","18"],a:1,e:"Number of sides = 360°/30° = 12."},
{q:"A rectangular prism measures 8 cm by 5 cm by 3 cm. Find its volume.",o:["40 cm³","80 cm³","120 cm³","160 cm³"],a:2,e:"Volume = 8×5×3 = 120 cm³."},
{q:"Solve 5x + 7 = 2x + 25.",o:["x=4","x=5","x=6","x=7"],a:2,e:"3x=18, so x=6."},
{q:"If y varies directly as x and y=18 when x=6, find y when x=11.",o:["27","30","33","36"],a:2,e:"y=kx; k=3, so y=3×11=33."},
{q:"A car uses 8 litres of fuel to travel 100 km. How much fuel is needed for 275 km at the same rate?",o:["18 L","20 L","22 L","24 L"],a:2,e:"Fuel = 8×275/100 = 22 L."},
{q:"A bank account earns simple interest at 5% per year. Find interest on KSh 12,000 for 3 years.",o:["KSh 600","KSh 1,200","KSh 1,800","KSh 3,600"],a:2,e:"I=PRT/100=12,000×5×3/100=KSh 1,800."},
{q:"A trader marks an item at KSh 4,000 and gives a 10% discount. The item cost KSh 3,000. What is the profit?",o:["KSh 400","KSh 600","KSh 700","KSh 1,000"],a:1,e:"Selling price=3,600; profit=3,600−3,000=KSh 600."},
{q:"The coordinates of point P are (−3, 4). In which quadrant does P lie?",o:["I","II","III","IV"],a:1,e:"Negative x and positive y place the point in quadrant II."},
{q:"Reflect point (4, −2) in the x-axis. What are the new coordinates?",o:["(−4, −2)","(4, 2)","(−4, 2)","(2, 4)"],a:1,e:"Reflection in the x-axis changes the sign of y only."},
{q:"A learner plots y=2x+1. What is y when x=−3?",o:["−7","−5","−3","5"],a:1,e:"y=2(−3)+1=−5."},
{q:"A 20 m rope is cut in the ratio 3:2. How long is the longer piece?",o:["8 m","10 m","12 m","15 m"],a:2,e:"There are 5 parts; each is 4 m. Longer piece=3×4=12 m."},
{q:"A class has 18 girls and 12 boys. What is the ratio of girls to all learners in simplest form?",o:["3:5","2:3","3:2","5:3"],a:0,e:"18:30 simplifies to 3:5."},
{q:"The probability of rain tomorrow is 0.35. What is the probability it will not rain, assuming these are the only two outcomes?",o:["0.35","0.55","0.65","1.35"],a:2,e:"Complement = 1−0.35=0.65."},
{q:"A rectangular field has area 240 m² and width 12 m. Find its length.",o:["12 m","18 m","20 m","28 m"],a:2,e:"Length=area/width=240/12=20 m."},
{q:"A learner gets 72, 68, 81 and 79 in four tests. What score is needed in the fifth test to obtain a mean of 76?",o:["70","75","80","85"],a:2,e:"Required total=380; current total=300; required score=80."},
{q:"A water pipe fills 180 litres in 6 minutes at a constant rate. How long will it take to fill 450 litres?",o:["12 min","15 min","18 min","20 min"],a:1,e:"Rate=30 L/min; time=450/30=15 min."},
{q:"A rectangle's length is (x+4) cm and width is x cm. Its perimeter is 28 cm. Find x.",o:["3 cm","4 cm","5 cm","6 cm"],a:2,e:"2[(x+4)+x]=28 gives 4x+8=28, so x=5. Correct option should be 5 cm."},
{q:"A learner simplifies 3(2x+4) to 6x+4. What correction is needed?",o:["It should be 6x+12","It should be 5x+4","It should be 6x+7","It is already correct"],a:0,e:"Distribute 3 to both terms: 3×2x + 3×4 = 6x+12."},
{q:"A cone has radius 3 cm and height 8 cm. Find its volume in terms of π.",o:["24π cm³","48π cm³","72π cm³","96π cm³"],a:0,e:"V=1/3πr²h=1/3×π×9×8=24π cm³. Correct option should be 24π."},
],
"English": [
{q:"Read: 'Although the river looked calm, the warning sign remained beside the bridge.' Which inference is best supported?",o:["The river is always safe.","A hidden or changing danger may remain despite the calm appearance.","The bridge has already collapsed.","The warning sign was placed there for decoration."],a:1,e:"The contrast between the calm appearance and warning supports caution, not certainty about the river."},
{q:"A learner writes, 'The school should extend the library hours.' Which addition would provide the strongest evidence for this argument?",o:["Everyone knows libraries are useful.","Some learners say the library is nice.","A survey showing many learners cannot access books before closing time.","The writer likes reading more than sport."],a:2,e:"A relevant survey directly supports the claim with evidence."},
{q:"Choose the sentence with correct subject–verb agreement.",o:["The list of laboratory rules are on the wall.","The list of laboratory rules is on the wall.","The rules in the list is on the wall.","The list, together with the rules, are on the wall."],a:1,e:"The head subject is singular 'list', so the verb is 'is'."},
{q:"Which revision best combines these ideas? 'The rain was heavy. The match continued.'",o:["The rain was heavy, because the match continued.","Although the rain was heavy, the match continued.","The rain was heavy the match continued.","The match continued, the rain was heavy because."],a:1,e:"'Although' correctly signals contrast and creates a grammatical complex sentence."},
{q:"You are writing a formal email to the school principal requesting permission to hold a debate. Which opening is most appropriate?",o:["Hey, let us do a debate.","I demand that you allow our debate.","Dear Principal, I am writing to request permission to organise a debate.","What's up? We want a debate."],a:2,e:"The wording is respectful, clear and appropriate for a formal audience."},
{q:"Which sentence best summarises a paragraph explaining that planting trees reduces soil erosion, provides shade and supports biodiversity?",o:["Trees are green and many people like them.","Planting trees benefits the environment by protecting soil, providing shade and supporting living things.","Soil is sometimes washed away when it rains.","Some people plant trees near schools."],a:1,e:"The option combines the central ideas without adding an unrelated opinion."},
{q:"In 'The exhausted team trudged towards the finish line', what does 'trudged' most likely mean?",o:["Moved slowly and with effort","Ran quickly with excitement","Stopped permanently","Moved silently by flying"],a:0,e:"'Exhausted' and the context suggest slow, effortful movement."},
{q:"Which punctuation best completes the sentence? 'The teacher asked ___ Have you submitted your project ___'",o:[", ... .","; ... ,"," : ... ?"," . ... !"],a:2,e:"A colon can introduce the direct question, which ends with a question mark."},
{q:"Which detail would most effectively build suspense in a story about a learner returning to an empty classroom?",o:["The classroom had four windows.","A faint tapping continued from the locked cupboard after everyone had left.","The desk was made of wood.","The learner had used a blue pen."],a:1,e:"An unexplained sound in an empty room creates uncertainty and suspense."},
{q:"During a group discussion, a learner disagrees with a proposal. Which response is most constructive?",o:["That idea is foolish; stop talking.","I disagree because the plan does not include transport for learners who live far away.","I will ignore everyone until they change it.","Only my opinion should be considered."],a:1,e:"It states disagreement respectfully and gives a relevant reason."}
],
"Kiswahili": [
{q:"Soma: 'Ingawa mvua ilikuwa imekoma, njia ilikuwa na matope mengi.' Ni hitimisho lipi linaungwa mkono na sentensi hii?",o:["Njia ilikuwa kavu kabisa.","Madhara ya mvua bado yalionekana kwenye njia.","Mvua haikunyesha kamwe.","Watu wote walikuwa wameondoka."],a:1,e:"Matope yanaonyesha kuwa athari za mvua ziliendelea hata baada ya mvua kukoma."},
{q:"Chagua sentensi yenye upatanisho sahihi wa kisarufi.",o:["Wanafunzi amefika mapema.","Wanafunzi wamefika mapema.","Wanafunzi limefika mapema.","Wanafunzi umefika mapema."],a:1,e:"Nomino ya wingi 'wanafunzi' huambatana na kitenzi 'wamefika'."},
{q:"Ni kauli ipi inayofaa zaidi katika insha ya hoja kuhusu usafi shuleni?",o:["Usafi ni kitu tu, hamna cha kusema.","Kwa mfano, takwimu za taka zilizokusanywa kila wiki zinaweza kuonyesha kama kampeni ya usafi imefanikiwa.","Mimi sipendi kuzungumza kuhusu usafi.","Kila mtu anajua kila jambo bila ushahidi."],a:1,e:"Kauli hii inatoa ushahidi unaoweza kupimwa ili kuunga mkono hoja."},
{q:"Katika muktadha wa mwanafunzi aliyefanya bidii hadi akafaulu, nahau 'kuweka juhudi' ina maana gani?",o:["Kukataa kufanya kazi","Kujitahidi kwa makini","Kusafiri mbali","Kusubiri wengine wafanye"],a:1,e:"'Kuweka juhudi' humaanisha kujitahidi kufanya jambo."},
{q:"Ni sentensi ipi inayotumia kiunganishi kuonyesha sababu?",o:["Alisoma kwa bidii lakini hakufika.","Alifurahi kwa sababu alifaulu mtihani.","Alifika kisha akaondoka.","Alisoma au akacheza."],a:1,e:"'Kwa sababu' huonyesha sababu ya kufurahi."},
{q:"Ni kipengele gani kinafaa zaidi katika barua rasmi ya kuomba vifaa vya maabara?",o:["Lugha ya matusi na utani","Madhumuni yaliyo wazi, lugha ya heshima na maelezo ya vifaa vinavyohitajika","Majina ya marafiki pekee","Misemo isiyohusiana na ombi"],a:1,e:"Barua rasmi inahitaji lugha ya heshima na ombi lililoelezwa wazi."},
{q:"Mwandishi akitumia tashbihi 'mwepesi kama upepo', anatumia tamathali gani?",o:["Sitiari","Tashbihi","Tashihisi","Kinaya"],a:1,e:"Neno 'kama' linaonyesha ulinganisho wa moja kwa moja, yaani tashbihi."},
{q:"Ni jibu lipi linalofaa katika mawasiliano rasmi unapohitaji ufafanuzi?",o:["Sielewi chochote, acha.","Tafadhali, unaweza kufafanua hatua ya pili ili niielewe vizuri?","Ongea upesi!","Hayo si muhimu."],a:1,e:"Jibu hili lina heshima na linaomba ufafanuzi mahsusi."},
{q:"Ni hoja ipi inayotumia ushahidi unaofaa kuhusu matumizi ya maji shuleni?",o:["Maji ni muhimu kwa sababu nimesema hivyo.","Rekodi zinaonyesha matumizi ya maji yalipungua baada ya kurekebisha mabomba yaliyovuja.","Hakuna haja ya kupima matumizi.","Maji yote hutumika kwa kiwango sawa kila siku."],a:1,e:"Rekodi za matumizi zinaweza kuthibitisha mabadiliko baada ya hatua kuchukuliwa."},
{q:"Ni kipengele kipi ni muhimu katika aya yenye mshikamano?",o:["Sentensi zisizohusiana","Wazo kuu linaloungwa mkono na sentensi zinazofuatana kimantiki","Kurudia neno moja bila sababu","Kubadilisha mada kila sentensi"],a:1,e:"Aya yenye mshikamano huwa na wazo kuu na sentensi zinazoliendeleza kwa mantiki."}
],
"Electricity": [
{q:"Before replacing a damaged switch in a school workshop, what is the safest first action for a competent authorised person?",o:["Touch the exposed conductor to check whether it is live.","Isolate the supply, secure it against reconnection and verify absence of voltage with a suitable tester.","Ask a learner to hold the wire.","Replace the switch while the circuit is energised."],a:1,e:"Safe isolation, prevention of reconnection and proving the circuit dead are essential before work begins."},
{q:"A learner is drawing a circuit diagram for a lamp controlled by a switch. Why should standard circuit symbols be used?",o:["They make every circuit use less current.","They provide a consistent, widely understood representation of components and connections.","They replace the need to test a circuit.","They indicate the colour of every wire."],a:1,e:"Standard symbols make circuit drawings clear and interpretable by others."},
{q:"Two identical lamps are connected in series to a battery. One lamp becomes disconnected. What happens to the other lamp?",o:["It becomes brighter.","It remains at the same brightness.","It goes out because the circuit path is broken.","It changes into a parallel circuit."],a:2,e:"A series circuit has one path; opening it stops current through both lamps."},
{q:"A component has a potential difference of 12 V and a resistance of 4 Ω. What current flows through it, assuming it obeys Ohm's law?",o:["0.33 A","3 A","8 A","48 A"],a:1,e:"I = V/R = 12/4 = 3 A."},
{q:"A 1.5 kW heater operates for 2 hours. How much electrical energy does it use?",o:["0.75 kWh","1.5 kWh","3 kWh","3.5 kWh"],a:2,e:"Energy = power × time = 1.5 kW × 2 h = 3 kWh."},
{q:"A fuse repeatedly opens when a particular appliance is switched on. What is the most responsible next step?",o:["Fit a much larger fuse without checking the circuit.","Bypass the fuse temporarily.","Disconnect the appliance and arrange safe inspection for overload or fault.","Keep replacing the fuse while the appliance runs."],a:2,e:"Repeated fuse operation indicates a possible overload or fault and requires safe diagnosis."},
{q:"Why is protective earthing provided for the exposed conductive casing of certain appliances?",o:["To increase the appliance's power consumption.","To provide a low-resistance fault path that helps protective devices disconnect the supply.","To make the casing act as a switch.","To prevent the appliance from using voltage."],a:1,e:"Earthing supports fault-current flow so a suitable protective device can disconnect the supply."},
{q:"Which instrument connection is correct when measuring current through a lamp?",o:["Connect an ammeter in series with the lamp.","Connect an ammeter in parallel across the supply.","Connect a voltmeter in series to measure current.","Connect either meter without regard to polarity or range."],a:0,e:"Current is measured with an ammeter connected in series, using a suitable range."},
{q:"A circuit supplies a 60 W lamp and a 40 W lamp at their rated operating conditions. What is their combined power?",o:["20 W","60 W","100 W","2,400 W"],a:2,e:"The total power is 60 W + 40 W = 100 W."},
{q:"Which action best reduces unnecessary electricity use in a school computer room without compromising safety?",o:["Remove protective earth connections.","Leave all equipment on overnight.","Switch off equipment when not required and use suitable efficient devices.","Overload one extension socket with every computer."],a:2,e:"Switching off unused equipment and selecting efficient devices reduces avoidable energy use safely."}
],
"Physics": [
{q:"A learner records the position of a moving trolley at equal time intervals. Which graph is most useful for comparing its speed during different intervals?",o:["Mass against colour","Distance against time","Temperature against name","Length against material"],a:1,e:"The gradient of a distance-time graph represents speed."},
{q:"Two learners measure the same length and obtain slightly different results. Which practice most improves the reliability of their result?",o:["Choose the larger value automatically.","Repeat the measurement carefully and compare or average consistent readings.","Delete all readings except the first.","Change the unit midway through measurement."],a:1,e:"Repeated measurements help identify random variation and improve reliability."},
{q:"A trolley accelerates when a resultant force acts on it. If its mass remains constant and the resultant force doubles, what happens to its acceleration?",o:["It halves.","It remains zero.","It doubles.","It becomes independent of force."],a:2,e:"From F = ma, with mass constant acceleration is directly proportional to resultant force."},
{q:"A sharp knife cuts more easily than a blunt knife when the same force is applied. Which explanation is correct?",o:["The sharp knife produces greater pressure because the contact area is smaller.","The sharp knife removes the force.","The blunt knife has no contact area.","Pressure is independent of area."],a:0,e:"Pressure equals force divided by area; a smaller area produces greater pressure for the same force."},
{q:"Why are gaps included in some bridges to accommodate temperature changes?",o:["To increase the bridge's mass.","To allow materials to expand and contract without excessive stress.","To stop gravity acting on the bridge.","To make the bridge absorb all sound."],a:1,e:"Materials expand when heated and contract when cooled; expansion gaps reduce stress."},
{q:"A metal spoon in hot tea becomes warm at its handle. Which process mainly transfers heat through the solid spoon?",o:["Conduction","Convection","Evaporation","Reflection"],a:0,e:"Thermal energy passes through the metal by conduction."},
{q:"A learner sees lightning before hearing thunder. What best explains the delay?",o:["Light travels much faster than sound in air.","Sound travels faster than light.","Thunder is produced several minutes later.","Lightning produces no sound."],a:0,e:"Light reaches the observer much earlier because its speed is far greater than sound's."},
{q:"A student uses a converging lens to form a sharp image on a screen. What must be adjusted to achieve focus?",o:["The lens-screen or object-lens distance, as appropriate to the setup","The colour of the screen only","The mass of the lens","The room's name"],a:0,e:"Image focus depends on the relative positions of the object, lens and screen."},
{q:"A 6 V battery is connected across a 3 Ω resistor. What current flows?",o:["0.5 A","2 A","3 A","18 A"],a:1,e:"Ohm's law gives I = V/R = 6/3 = 2 A."},
{q:"A solar panel powers a water pump. Which description best represents the main energy conversion?",o:["Electrical energy to nuclear energy only","Light energy to electrical energy, then electrical energy to mechanical work","Sound energy to chemical energy","Heat energy to mass without energy transfer"],a:1,e:"The panel converts light to electricity and the motor converts electrical energy to mechanical work."}
]
};
specific["Mathematics"] = specific["Core Mathematics"];
curriculum["Mathematics"] = curriculum["Core Mathematics"];
const out=[];
const seen=new Set();
for (const [subject,topics] of Object.entries(subjects)) {
  const canonical=aliases[subject]||subject;
  if (seen.has(canonical)) continue;
  seen.add(canonical);
  for(let i=0;i<50;i++){
    const topic=topics[i%topics.length], c=contexts[Math.floor(i/5)%contexts.length], p=prompts[i%prompts.length], set=answerSets[i%answerSets.length];
    let question, options, correct, explanation, strand=topic, substrand=topic, learningOutcome="Apply subject knowledge to a contextual problem and justify a safe, evidence-based solution.";
    const meta=curriculum[canonical]&&curriculum[canonical][topic];
    if(meta){strand=meta[0];substrand=meta[1];learningOutcome=meta[2];}
    const specificItems=specific[canonical];
    if(specificItems&&specificItems[i%specificItems.length]){
      const item=specificItems[i%specificItems.length];
      question=item.q;options=item.o.slice();correct=item.a;explanation=item.e;
    } else {
      const opts=set.slice();
      correct=(i*3+Math.floor(i/5))%4;
      const answer=opts[0]; opts[0]=opts[correct]; opts[correct]=answer;
      options=opts;question=p(canonical,topic,c);
      explanation=opts[correct]+" The key is to connect "+topic+" to evidence, context, safety and the intended outcome.";
    }
    out.push({
      id:"g10-ho-"+canonical.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+String(i+1).padStart(2,"0"),
      grade:"Grade 10",subject:canonical,strand,substrand,learningOutcome,question,options,correctIndex:correct,
      explanation,published:true
    });
  }
}
module.exports = out;
