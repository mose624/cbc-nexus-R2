/* CBE Nexus five-country Learning Studio.
 * Creates supplementary grade-by-grade concept lessons and worked practice.
 * Exact official term-by-term chapter sequencing is not claimed; the national syllabus links
 * and curriculum context are supplied so teachers can check each cohort against the current documents.
 */
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const countries={
"Tanzania":{
 curriculum:"Tanzania national curriculum — TIE; NECTA assessment pathways",
 authority:"Tanzania Institute of Education (TIE); Ministry of Education, Science and Technology; National Examinations Council of Tanzania (NECTA)",
 source:"https://www.tie.go.tz/publications/syllabus-for-lower-secondary-academics",
 resource:"https://ol.tie.go.tz/",
 exams:"PSLE at Standard VII; FTNA at Form II; CSEE at Form IV; ACSEE at Form VI. Confirm the current cohort's syllabus and exam format.",
 languages:"Kiswahili and English are used in education; language of instruction depends on level, school and current policy.",
 levels:["Standard I","Standard II","Standard III","Standard IV","Standard V","Standard VI","Standard VII","Form I","Form II","Form III","Form IV","Form V","Form VI"],
 primary:["Mathematics","English","Kiswahili","Science and Technology","Social Studies"],
 secondary:["Mathematics","English Language","Biology","Chemistry","Physics","Geography","History","Civics"],
 context:"Tanzanian settings such as farming, markets, water access, transport, health, conservation and community enterprise."
},
"Uganda":{
 curriculum:"Uganda NCDC competency-based curriculum / UNEB assessment pathways",
 authority:"National Curriculum Development Centre (NCDC); Ministry of Education and Sports; Uganda National Examinations Board (UNEB)",
 source:"https://ncdc.go.ug/directorates/",
 resource:"https://ncdc.go.ug/resource/",
 exams:"PLE at the end of Primary 7; UCE at the end of lower secondary; UACE at the end of upper secondary. Check current cohort rules.",
 languages:"English is the principal language of secondary instruction; approved local-language teaching is used in early primary according to policy and school context.",
 levels:["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Primary 7","Senior 1","Senior 2","Senior 3","Senior 4","Senior 5","Senior 6"],
 primary:["Mathematics","English","Integrated Science","Social Studies","Literacy"],
 secondary:["Mathematics","English Language","Biology","Chemistry","Physics","Geography","History and Political Education","Entrepreneurship"],
 context:"Ugandan settings such as agriculture, lakes and rivers, public health, local enterprise, biodiversity and community development."
},
"Rwanda":{
 curriculum:"Rwanda competence-based curriculum — REB; national assessment pathways — NESA",
 authority:"Rwanda Basic Education Board (REB); Ministry of Education (MINEDUC); National Examination and School Inspection Authority (NESA)",
 source:"https://www.reb.gov.rw/curriculum-teaching-learning-resources-department",
 resource:"https://elearning.reb.rw/",
 exams:"National examinations at P6, S3 and S6; check current NESA guidelines and transition instructions for the learner's cohort.",
 languages:"Kinyarwanda, English, French and Kiswahili are official languages; school language of instruction varies by level, programme and institution.",
 levels:["P1","P2","P3","P4","P5","P6","S1","S2","S3","S4","S5","S6"],
 primary:["Mathematics","Kinyarwanda","English","Science and Elementary Technology","Social Studies"],
 secondary:["Mathematics","English","Biology","Chemistry","Physics","Geography","History and Citizenship","ICT"],
 context:"Rwandan settings such as terraced agriculture, land use, water catchments, health, conservation, enterprise and community services."
},
"Burundi":{
 curriculum:"Burundi Fundamental Education Curriculum; post-fundamental general, pedagogical and technical pathways",
 authority:"Ministry of National Education and Scientific Research (MENRS)",
 source:"https://mesrs.gov.bi/",
 resource:"https://mesrs.gov.bi/",
 exams:"National certification and orientation at the end of fundamental education; Examen d’État for relevant post-fundamental pathways. Confirm current circulars.",
 languages:"Kirundi, French and English are official languages. Language of instruction varies by level and school programme; confirm the learner's actual stream.",
 levels:["1ère année fondamentale","2ème année fondamentale","3ème année fondamentale","4ème année fondamentale","5ème année fondamentale","6ème année fondamentale","7ème année fondamentale","8ème année fondamentale","9ème année fondamentale","1ère année post-fondamentale","2ème année post-fondamentale","3ème année post-fondamentale"],
 primary:["Mathématiques","Kirundi","Français","Sciences et technologie","Étude du milieu"],
 secondary:["Mathématiques","Français","Biologie","Chimie","Physique","Géographie","Histoire"],
 context:"Burundian settings such as hillside farming, Lake Tanganyika, water management, public health, trade and community life."
},
"South Sudan":{
 curriculum:"South Sudan National Curriculum — NCDC / Ministry of General Education and Instruction",
 authority:"National Curriculum Development Centre (NCDC); Ministry of General Education and Instruction (MoGEI)",
 source:"https://cdc.gov.ss/curriculum.php",
 resource:"https://cdc.gov.ss/Resources.php",
 exams:"Use current MoGEI examination and completion guidance for the relevant level and cohort.",
 languages:"English is the official language of instruction in the national curriculum framework. Local-language use and provision vary by school and programme.",
 levels:["P-1","P-2","P-3","P-4","P-5","P-6","P-7","P-8","S-1","S-2","S-3","S-4"],
 primary:["Mathematics","English Language","Science","Social Studies","Religious Education"],
 secondary:["Mathematics","English Language","Biology","Chemistry","Physics","Geography","History","Agriculture"],
 context:"South Sudanese settings such as pastoralism, farming, Nile basin environments, public health, natural resources and community resilience."
}
};
const core={
math:[
["Number, operations and problem solving","Use place value, the four operations and estimation to represent and solve practical problems. Check whether an answer is reasonable and show each step. In earlier years use concrete objects and drawings; in later years connect numerical methods to fractions, percentages, ratios, algebra and financial decisions.","A trader records 24 baskets in the morning and 18 in the afternoon. Total = 24 + 18 = 42 baskets. Estimate first (about 40) to check that the exact answer is sensible."],
["Patterns, relationships and mathematical reasoning","Describe a pattern, identify what changes and express the rule in words, a table, diagram or algebraic expression. Compare strategies and justify why a method works. Progress from repeating and growing patterns to formulae, equations, functions and proportional relationships.","The sequence 4, 7, 10, 13 increases by 3 each time. The next term is 16; the rule is add 3."],
["Measurement, shape and data","Choose suitable units and instruments, calculate perimeter, area or volume where appropriate, describe geometric properties, and collect or interpret data. Label units and axes and explain what the data can and cannot show.","A rectangular plot 8 m by 5 m has area 8 × 5 = 40 m². Its perimeter is 2(8 + 5) = 26 m."]
],
language:[
["Reading and comprehension","Read a suitable text more than once. Identify the main idea, supporting details, sequence, purpose and point of view. Use evidence from the passage when answering inference questions; distinguish what the writer states from what the reader concludes.","If a passage says that farmers stored seed before the rainy season, a supported inference is that they were preparing for planting. Quote or paraphrase the sentence that supports the inference."],
["Grammar, vocabulary and language choices","Build accurate sentences and use word classes, tense, agreement, punctuation and vocabulary appropriate to the language being studied. Explain how a word or sentence choice affects meaning. Compare formal and informal registers.","Correct the sentence 'The learners was ready' to 'The learners were ready'. The plural subject 'learners' requires the plural verb 'were'."],
["Writing, speaking and communication","Plan, draft, revise and proofread writing for a clear audience and purpose. Organise ideas into coherent paragraphs, use evidence or examples, and speak so that listeners can follow the message. Respect local language conventions and the school's language policy.","A short report should include a clear title, purpose, method or source of information, findings and a concise conclusion."]
],
science:[
["Scientific inquiry and practical skills","Begin with a question that can be investigated. Make a testable prediction, identify variables, select safe apparatus, collect repeatable observations, record units and present evidence in a table or graph. Explain limitations and avoid conclusions that go beyond the data.","To test whether light affects plant growth, keep plant type, soil, water and container constant; vary light exposure; measure growth over the same period; repeat the investigation."],
["Matter, energy and physical processes","Describe materials and changes using observations, measurements and appropriate models. Distinguish physical and chemical change, identify energy transfers and relate scientific ideas to water, food, materials, weather and technology. At secondary level, connect these ideas to chemistry and physics models.","Melting ice is a physical change because the substance remains water. Burning wood is a chemical change because new substances are formed."],
["Living things, health and environment","Explain how organisms obtain resources, grow, reproduce and interact with their environment. Connect body systems, disease prevention, food production and biodiversity to evidence-based decisions in the community.","A food chain may be grass → grasshopper → frog → snake. Energy is transferred between trophic levels, and each population depends on the others."]
],
social:[
["People, place and map skills","Use maps, directions, scale, symbols and spatial evidence to describe a place. Compare physical and human features and explain how location influences settlement, transport, livelihoods and access to services.","A map scale of 1 cm to 5 km means a measured 3 cm route represents 15 km on the ground."],
["History, identity and evidence","Study events and change using timelines, oral accounts, artefacts, documents and other sources. Ask who created a source, when and why; compare accounts and distinguish evidence from opinion.","A timeline places events in chronological order. Two accounts of the same event may differ because witnesses had different roles or perspectives."],
["Citizenship, resources and sustainable communities","Explain rights, responsibilities, public institutions and community participation. Evaluate how people use land, water and other resources and propose fair, safe and sustainable responses to local challenges.","A community water committee can agree on access rules, maintenance duties and reporting procedures to protect a shared water point."]
],
bio:[
["Cell biology and organisation","Relate cell structures to their functions and explain how cells form tissues, organs and organ systems. Use diagrams and microscopy observations carefully; distinguish general patterns from exceptions.","A palisade cell contains many chloroplasts because it is adapted for photosynthesis in a leaf."],
["Nutrition, transport and life processes","Explain how organisms obtain nutrients, exchange gases, transport materials and remove wastes. Link structure to function and use evidence from practical investigations.","In humans, red blood cells contain haemoglobin which binds oxygen for transport from the lungs to body tissues."],
["Ecology, inheritance and continuity","Investigate interactions among organisms and their environment, energy transfer in food webs, variation and inheritance. Evaluate how human activity affects biodiversity and ecosystem stability.","A habitat change can alter food availability and population size; the effect may spread through a food web."]
],
chem:[
["Particles, elements and compounds","Use particle models to explain states of matter and changes of state. Distinguish elements, compounds and mixtures and interpret chemical symbols and formulae accurately.","Water is a compound made from hydrogen and oxygen in a fixed ratio; air is a mixture of gases."],
["Reactions, acids and quantitative chemistry","Describe evidence of chemical reactions, represent reactions with balanced equations where appropriate and investigate acids, bases and salts safely. Show calculations and units clearly.","A pH below 7 indicates an acidic solution; a pH above 7 indicates an alkaline solution at ordinary conditions."],
["Materials, separation and applications","Choose separation methods using differences in physical properties and connect chemical knowledge to agriculture, water treatment, health, industry and environmental protection.","Filtration separates an insoluble solid from a liquid; evaporation can recover a dissolved solid from a solution."]
],
phys:[
["Measurement, motion and forces","Use appropriate instruments and SI units. Describe motion using distance, displacement, speed and time; represent relationships with tables or graphs and explain the effects of forces.","A vehicle travelling 120 km in 2 h has average speed 120 ÷ 2 = 60 km/h."],
["Energy, heat and waves","Describe energy stores and transfers, temperature and heat flow, and the behaviour of waves. Use diagrams and calculations to explain everyday systems and safety.","A metal spoon placed in hot water warms by conduction as energy transfers through the material."],
["Electricity, pressure and practical applications","Investigate simple circuits, current, voltage and resistance; explain pressure in solids and fluids; evaluate safe applications of physical principles.","Pressure is force per unit area. For the same force, a smaller contact area produces a greater pressure."]
]
};
function phase(country,level){if(country==="Burundi")return level.includes("post-fondamentale")?"secondary":"primary";return /Form|Senior|^S[1-6]$|^S-[1-4]$/.test(level)?"secondary":"primary";}
function subjectType(subject){if(/Math|Mathématiques/.test(subject))return "math";if(/Biology|Biologie/.test(subject))return "bio";if(/Chemistry|Chimie/.test(subject))return "chem";if(/Physics|Physique/.test(subject))return "phys";if(/English|Kiswahili|Kinyarwanda|Kirundi|Français|Literacy/.test(subject))return "language";if(/Science|Sciences/.test(subject))return "science";return "social";}
function buildChapter(country,level,subject,unit,idx,p){
 const kind=subjectType(subject),templates=core[kind],t=templates[idx%templates.length],id=(country+"-"+level+"-"+subject+"-"+idx).toLowerCase().replace(/[^a-z0-9]+/g,"-");
 const local=t[1]+" Apply the ideas to "+p.context+" Adjust the depth of explanation, calculations and independent research to the learner's "+level+" programme and the current school syllabus.";
 return {id,title:(idx+1)+". "+t[0],lessons:"Suggested supplementary study lesson for "+level,objectives:["Explain the central ideas in "+t[0].toLowerCase()+".","Apply the concepts to a practical example from "+country+".","Use accurate subject language, evidence and appropriate working.","Review the current national syllabus and teacher guidance for the prescribed depth."],sections:[{heading:t[0],body:local},{heading:"Worked example",body:t[2]},{heading:"Study and assessment guidance",body:"Read the question carefully, identify the command word, show each reasoning step, label diagrams and calculations, include units where relevant and support conclusions with evidence. For practical work, state variables, safety precautions, observations and limitations."}],example:t[2],curriculumContext:p.curriculum+" • "+p.authority+". CBE Nexus supplementary lesson for "+level+". Check "+p.source+" and the official resource portal "+p.resource+" for the current grade-level syllabus and approved learning materials. This lesson is not a claim that every official syllabus outcome or textbook chapter has been transcribed.",summary:["Key concept: "+t[0]+".","Apply knowledge to a local context in "+country+".","Practise explaining reasoning and evaluating evidence.","Confirm prescribed content and sequence with the current official syllabus."],questions:[{q:"Explain one important idea from "+t[0]+" and give a relevant example from "+country+".",a:t[1],worked:t[2],category:"Understanding and application",marks:4},{q:"Describe how you would investigate or verify one claim related to "+t[0]+".",a:"State a clear question, identify the evidence required, choose a safe and suitable method, record observations accurately and explain the limits of the conclusion.",category:"Scientific / analytical reasoning",marks:5},{q:"Why is it important to use evidence rather than assumption when answering a question on "+t[0]+"?",a:"Evidence makes the answer testable and supports a justified conclusion. Assumptions may ignore alternative explanations or local conditions.",category:"Evaluation",marks:3},{q:"Apply "+t[0]+" to a practical issue in "+country+".",a:"Use the relevant concept, explain the local context, show the reasoning or method and give a realistic conclusion or recommendation.",category:"Transfer of learning",marks:4},{q:"Identify one common error learners may make when studying "+t[0]+" and explain how to avoid it.",a:"A common error is memorising a definition without applying it. Avoid this by explaining the concept in your own words, using a worked example and checking the answer against evidence.",category:"Reflection",marks:3}],questionNotice:"These are original supplementary practice questions, not official past-paper questions. Exact term-by-term syllabus mapping is still being reconciled."};
}
for(const [country,p] of Object.entries(countries)){
 const record=all[country]||(all[country]={});
 record.curriculum=record.curriculum||p.curriculum;
 record.authority=record.authority||p.authority;
 record.source=record.source||p.source;
 record.resourcePortal=p.resource;
 record.examPathway=p.exams;
 record.languages=record.languages||p.languages;
 record.curriculumStatus="supplementary-grade-level-learning-studio-official-sequence-check-required";
 record.levels=record.levels||{};
 p.levels.forEach(level=>{
  const subjects=phase(country,level)==="primary"?p.primary:p.secondary;
  const levelRecord=record.levels[level]||(record.levels[level]={});
  subjects.forEach(subject=>{
   if(Array.isArray(levelRecord[subject])&&levelRecord[subject].length) return;
   levelRecord[subject]=core[subjectType(subject)].map((t,i)=>buildChapter(country,level,subject,t,i,p));
  });
 });
}
window.CBE_NEXUS_EAST_AFRICA_FIVE_COUNTRY_STUDIO={countries:Object.keys(countries),levels:Object.fromEntries(Object.entries(countries).map(([k,v])=>[k,v.levels.length])),status:"grade-level-supplementary-studio-published-official-outcome-mapping-pending",version:"2026-11-19"};
})();