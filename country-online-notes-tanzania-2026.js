/* Tanzania TIE / NECTA-aligned original supplementary notes.
   Form I-IV Ordinary Secondary Education. Not official TIE textbooks or NECTA papers. */
(()=>{"use strict";
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const record=all.Tanzania||(all.Tanzania={});
 record.curriculum="Tanzania Institute of Education (TIE) Curriculum";
 record.authority="Tanzania Institute of Education (TIE); National Examinations Council of Tanzania (NECTA)";
 record.source="https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics";
 record.exam="Form IV Certificate of Secondary Education Examination (CSEE); Form VI Advanced Certificate of Secondary Education Examination (ACSEE). CSEE subject requirements and ACSEE combinations must be checked against current NECTA guidance.";
 record.notice="Original CBE Nexus supplementary notes for Form I–IV. Biology, Basic Mathematics and English Language are among CSEE core subjects; Physics and Chemistry are optional natural-science subjects for candidates who select them. These notes are not official TIE textbooks or NECTA examination papers. Check the current TIE syllabus, NECTA subject format and your school's scheme of work.";
 const topics={
 "Form I":{
  "Basic Mathematics":["Whole numbers, fractions and decimals","Ratio, proportion and percentages","Basic geometry and measurement","Data collection and representation"],
  "English Language":["Parts of speech and sentence structure","Reading for main ideas and details","Paragraph construction and punctuation","Vocabulary and oral communication"],
  "Biology":["Introduction to biology and scientific investigation","Cell structure and organisation","Classification of living things","Nutrition and basic ecology"],
  "Chemistry":["Introduction to chemistry and laboratory safety","Matter and its states","Elements, compounds and mixtures","Separation of mixtures"],
  "Physics":["Introduction to physics and measurement","Measurement of length, mass and time","Force and simple motion","Light and basic properties"]
 },
 "Form II":{
  "Basic Mathematics":["Algebraic expressions and simple equations","Angles, triangles and polygons","Perimeter, area and volume","Statistics and averages"],
  "English Language":["Tenses and subject–verb agreement","Comprehension and inference","Formal and informal writing","Reported speech and vocabulary"],
  "Biology":["Nutrition in plants and animals","Transport in plants and animals","Respiration and gaseous exchange","Health, disease and prevention"],
  "Chemistry":["Atomic structure and the periodic table","Chemical formulae and equations","Acids, bases and indicators","Air, water and simple chemical reactions"],
  "Physics":["Pressure in solids, liquids and gases","Work, energy and power","Heat and temperature","Sound and wave properties"]
 },
 "Form III":{
  "Basic Mathematics":["Linear equations and simultaneous equations","Trigonometry and bearings","Similarity, congruence and scale","Probability and statistical interpretation"],
  "English Language":["Complex sentences and clauses","Summary writing and note-making","Argumentative and descriptive composition","Literature response and language use"],
  "Biology":["Reproduction in plants and animals","Inheritance and variation","Coordination and response","Ecology and conservation"],
  "Chemistry":["Mole concept and chemical calculations","Chemical bonding and structure","Rates of reaction and energy changes","Metals, non-metals and reactivity"],
  "Physics":["Current electricity and simple circuits","Magnetism and electromagnetism","Reflection and refraction of light","Density, flotation and fluid concepts"]
 },
 "Form IV":{
  "Basic Mathematics":["Quadratic equations and functions","Sequences, variation and financial mathematics","Three-dimensional geometry and mensuration","Revision of statistics, probability and trigonometry"],
  "English Language":["Functional writing and formal correspondence","Comprehension, summary and précis","Grammar accuracy and editing","Oral communication and examination practice"],
  "Biology":["Genetics and inheritance applications","Evolution and adaptation","Human body systems and homeostasis","Integrated ecology and practical investigation"],
  "Chemistry":["Organic chemistry and carbon compounds","Electrolysis and chemical cells","Salts, preparation and analysis","Quantitative chemistry and practical revision"],
  "Physics":["Electromagnetic induction and applications","Waves, lenses and optical instruments","Radioactivity and basic atomic physics","Integrated mechanics, heat and electricity revision"]
 }
 };
 const explanations={
 "Basic Mathematics":"Mathematics develops accurate reasoning through number, algebra, geometry, measurement, statistics and probability. Learners should show working, state units and check whether a result is reasonable.",
 "English Language":"English Language develops listening, speaking, reading and writing. Learners should interpret texts, use grammar accurately, organise ideas for purpose and audience, and communicate clearly.",
 "Biology":"Biology studies living organisms, their structures, functions, interactions and continuity. Scientific explanations should connect observations, evidence, biological processes and environmental context.",
 "Chemistry":"Chemistry studies matter, its composition, properties and transformations. Learners use particle models, symbols, equations, measurements and safe practical methods to explain chemical change.",
 "Physics":"Physics explains matter, energy, forces and interactions. Learners combine observation, measurement, mathematical relationships, diagrams and experiments to explain physical phenomena."
 };
 const examples={
 "Basic Mathematics":"A trader buys 3 exercise books at TSh 2,000 each and pays TSh 1,000 for a pen. Total cost = 3 × 2,000 + 1,000 = TSh 7,000. Write the calculation before substituting values in a word problem.",
 "English Language":"Rewrite 'The students was ready' correctly. The plural subject 'students' takes 'were': 'The students were ready.' Check subject–verb agreement when editing.",
 "Biology":"A plant kept in darkness becomes pale and weak. Light is a factor needed for normal photosynthesis and chlorophyll development. Compare a well-lit plant with a similar plant kept in darkness, controlling water and soil.",
 "Chemistry":"A mixture of sand and salt can be separated by adding water, filtering to remove insoluble sand, then evaporating the filtrate to recover salt. Choose a method based on differences in physical properties.",
 "Physics":"A cyclist travels 120 m in 20 s. Average speed = distance ÷ time = 120 ÷ 20 = 6 m/s. Always convert quantities to consistent SI units before calculating."
 };
 const qs={
 "Basic Mathematics":[["What is 25% of 240?","60","25/100 × 240 = 60."],["Solve 3x + 5 = 20.","5","3x = 15, therefore x = 5."],["Find the area of a rectangle 8 cm by 5 cm.","40 cm²","Area = length × width = 8 × 5 = 40 cm²."],["Find the mean of 4, 6, 8 and 10.","7","The sum is 28; 28 ÷ 4 = 7."]],
 "English Language":[["Identify the verb in 'The class completed the experiment'.","completed","The verb expresses the action performed by the class."],["Change to past tense: 'She writes a report'.","She wrote a report.","'Wrote' is the irregular past-tense form of 'write'."],["What is the main idea of a passage?","Its central message or point.","The main idea is the principal point supported by details."],["Name one feature of a formal letter.","A clear subject or reference line","Formal letters use an appropriate address, salutation, purpose and closing."]],
 "Biology":[["Which cell structure controls most cell activities?","The nucleus","The nucleus contains genetic material and regulates cell activities."],["What is the main role of chlorophyll?","It absorbs light energy for photosynthesis.","Chlorophyll pigments absorb light energy used in photosynthesis."],["Name the tissue that transports water in plants.","Xylem","Xylem conducts water and dissolved mineral ions from roots."],["What is an ecosystem?","A community of organisms interacting with their physical environment.","An ecosystem includes living communities and non-living environmental factors."]],
 "Chemistry":[["What is the smallest particle of an element that retains its chemical identity?","An atom","An atom is the basic unit of an element in ordinary chemical processes."],["What is the pH of a neutral solution at 25°C?","7","At 25°C, a neutral aqueous solution has pH 7."],["Which method separates an insoluble solid from a liquid?","Filtration","The filter retains insoluble particles while liquid passes through."],["What is the chemical symbol for sodium?","Na","Sodium is represented by the symbol Na."]],
 "Physics":[["What is the SI unit of force?","Newton (N)","Force is measured in newtons."],["A car travels 150 m in 10 s. Find its average speed.","15 m/s","Speed = distance ÷ time = 150 ÷ 10 = 15 m/s."],["Which instrument measures electric current?","Ammeter","An ammeter is connected in series to measure current."],["What happens to light when it passes from air into glass at an angle?","It is refracted.","Light changes speed and direction when it enters a medium with a different optical density."]]
 };
 const mcqs={
 "Basic Mathematics":[["What is 15% of 200?",["15","20","30","45"],2,"Percentages","0.15 × 200 = 30."],["Solve 2x = 18.",["6","8","9","12"],2,"Algebra","Divide both sides by 2: x = 9."]],
 "English Language":[["Choose the correct sentence.",["They is ready.","They are ready.","They was ready.","They be ready."],1,"Grammar","The plural subject 'they' takes 'are'."],["A synonym for 'brief' is:",["lengthy","concise","unclear","distant"],1,"Vocabulary","Brief means short or concise."]],
 "Biology":[["Which organelle is the main site of aerobic respiration?",["Ribosome","Mitochondrion","Vacuole","Cell wall"],1,"Cell biology","Mitochondria are major sites of aerobic respiration."],["Which process produces glucose in green plants?",["Respiration","Photosynthesis","Transpiration","Diffusion"],1,"Nutrition","Photosynthesis uses light energy to synthesise organic food."]],
 "Chemistry":[["Which subatomic particle has a positive charge?",["Electron","Neutron","Proton","Photon"],2,"Atomic structure","Protons carry a positive electrical charge."],["Which technique is suitable for separating coloured dyes?",["Filtration","Chromatography","Decantation","Sublimation"],1,"Separation techniques","Chromatography separates components according to their movement through phases."]],
 "Physics":[["The SI unit of power is:",["Joule","Newton","Watt","Pascal"],2,"Energy","Power is measured in watts."],["A 4 kg object accelerates at 2 m/s². Resultant force is:",["2 N","6 N","8 N","12 N"],2,"Mechanics","F = ma = 4 × 2 = 8 N."]]
 };
 const levels={};
 Object.entries(topics).forEach(([form,subjects])=>{
  levels[form]={};
  Object.entries(subjects).forEach(([subject,list],si)=>{
   const title=list[0];
   const context="TIE Ordinary Secondary Education Form I–IV curriculum and NECTA CSEE pathway. The sequence below is an original study outline, not a claim to reproduce the complete official syllabus in its exact order.";
   levels[form][subject]=list.map((topic,ti)=>({
    id:"tz-"+form.toLowerCase().replace(/\s/g,"")+"-"+subject.toLowerCase().replace(/[^a-z]/g,"")+"-"+(ti+1),
    title:topic,lessons:"Original Tanzania TIE curriculum support lesson",
    objectives:["Explain the key ideas and vocabulary associated with "+topic.toLowerCase()+".","Apply the concept to a familiar Tanzanian learning or everyday context.","Use clear reasoning, evidence, diagrams or calculations where appropriate."],
    sections:[
     {heading:"Core knowledge",body:explanations[subject]+" This chapter focuses on "+topic.toLowerCase()+". Define important terms, identify the main principles and distinguish related ideas."},
     {heading:"Explanation and application",body:"Break the topic into manageable steps. Connect each principle to examples, diagrams, observations or calculations. In written responses, use accurate subject vocabulary and show the reasoning that supports each conclusion."},
     {heading:"Practical and analytical skills",body:"Record observations systematically, identify variables where an investigation is involved, use appropriate units and evaluate whether the evidence supports the conclusion. Follow teacher guidance and laboratory safety rules."}
    ],
    example:examples[subject],
    activity:"Create a one-page concept map for "+topic.toLowerCase()+". Include at least five key terms, one labelled diagram or worked calculation where appropriate, and two real-life applications.",
    summary:["Understand the meaning and central principles of "+topic.toLowerCase()+".","Practise applying the idea using evidence, correct terminology and clear working.","Review the relevant TIE subject syllabus and your school's scheme of work before examination preparation."],
    questions:qs[subject].map(([q,a,w])=>({q,a,worked:w,explanation:w})),
    curriculumContext:context+" "+topic+" is a CBE Nexus supplementary lesson, not official TIE or NECTA content."
   }));
  });
 });
 record.levels=levels;
 record.subjects=Object.keys(topics["Form I"]);
 record.levelRange="Form I–IV";
 record.notesCount=Object.values(levels).reduce((n,v)=>n+Object.values(v).reduce((m,a)=>m+a.length,0),0);
 record.revisionQuestionCount=record.notesCount*4;
 record.topics={};
})();