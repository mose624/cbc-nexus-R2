/* CBE Nexus Batch 13 — countries/jurisdictions 121–130 supplementary Learning Studio expansion. */
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Vanuatu": {
    "level": "National curriculum from preschool to Year 13",
    "authority": "Ministry of Education and Training (MoET)",
    "curriculum": "The Vanuatu National Curriculum is intended to provide a harmonised programme from preschool through Year 13. Subject sequence and assessment should be checked against the current MoET syllabus and school year.",
    "exam": "National and regional senior-secondary assessment pathways; confirm current qualification and cohort with MoET.",
    "languages": "English, French and Bislama are used in education; language arrangements depend on school and programme.",
    "source": "https://moet.gov.vu/docs/curriculum/docs/handbooks/index.php?id=curriculum"
  },
  "Vatican City": {
    "level": "Schooling is principally served through Italian and Catholic educational institutions; no separate comprehensive national secondary syllabus identified",
    "authority": "Holy See education authorities and relevant Italian/Catholic school authorities",
    "curriculum": "Vatican City does not have a readily identifiable standalone national school curriculum comparable to larger national systems. Students commonly access Italian and Catholic educational institutions; confirm the individual school's jurisdiction, curriculum, language and awarding body.",
    "exam": "Qualification depends on the school and awarding system, commonly Italian or another recognised programme.",
    "languages": "Italian is widely used; Latin and other languages have roles in ecclesiastical education.",
    "source": "https://www.education.va/"
  },
  "Venezuela": {
    "level": "Educación Media General and Educación Media Técnica",
    "authority": "Ministerio del Poder Popular para la Educación",
    "curriculum": "The national education framework and ministry programmes define the school curriculum. Verify current subject programmes, grade sequence, approved texts and regional implementation with the Ministry and the learner's school.",
    "exam": "School-based assessment and completion of secondary education under national regulations; confirm current procedures locally.",
    "languages": "Spanish is the principal language of instruction; Indigenous languages are used in relevant communities and schools.",
    "source": "https://www.mpped.gob.ve/"
  },
  "Vietnam": {
    "level": "Lower secondary and upper secondary; national general education curriculum",
    "authority": "Ministry of Education and Training (MOET)",
    "curriculum": "The 2018 General Education Curriculum, as amended, guides subject teaching and competency development. Subject choice and upper-secondary pathways affect Biology, Chemistry, Physics and Mathematics; use the current MOET circulars and approved textbooks for each grade.",
    "exam": "Lower-secondary completion and upper-secondary graduation examinations under current MOET rules; university admissions use multiple routes.",
    "languages": "Vietnamese is the main language of instruction; minority-language education and foreign-language programmes vary.",
    "source": "https://moet.gov.vn/"
  },
  "Yemen": {
    "level": "Basic education and secondary education; local delivery varies",
    "authority": "Ministry of Education and relevant education authorities in areas of administration",
    "curriculum": "National textbooks and secondary programmes exist, but conflict and divided administration have disrupted schooling and implementation. Verify the school location, authority, current textbook edition, examination arrangements and access to learning before claiming syllabus alignment.",
    "exam": "Secondary school certificate examinations and local assessment arrangements; current administration and schedules require local verification.",
    "languages": "Arabic is the principal language of instruction; English is taught and used in some private schools.",
    "source": "https://moe-ye.net/"
  },
  "Zambia": {
    "level": "Secondary Forms 1–4 with senior secondary Forms 5–6 under the 2023 curriculum transition",
    "authority": "Ministry of Education; Curriculum Development Centre; Examinations Council of Zambia (ECZ)",
    "curriculum": "The 2023 Zambia Education Curriculum Framework introduces a pathway-based secondary structure. Forms 1–4 lead to the School Certificate; A-Level Forms 5–6 begin intake in 2027. Map content to the learner's transition cohort, pathway and current subject syllabus.",
    "exam": "National School Certificate at Form 4 with school-based assessment; A-Level pathway begins in 2027, alongside other pathways.",
    "languages": "English is the language of instruction; local languages support early learning and community communication.",
    "source": "https://www.edu.gov.zm/"
  },
  "Zimbabwe": {
    "level": "Secondary Forms 1–4 and upper secondary Forms 5–6; heritage-based curriculum",
    "authority": "Ministry of Primary and Secondary Education; Zimbabwe School Examinations Council (ZIMSEC)",
    "curriculum": "The Heritage-Based Curriculum Framework guides learning areas and pathways. STEM learners may take Biology, Chemistry, Physics and Mathematics; use current ZIMSEC syllabuses and distinguish O-Level from A-Level content.",
    "exam": "ZIMSEC Ordinary Level and Advanced Level examinations; school-based assessment requirements may apply.",
    "languages": "English and recognised Indigenous languages are used; language of instruction varies by subject, school and level.",
    "source": "https://www5.zimsec.co.zw/syllabi/"
  },
  "Kosovo": {
    "level": "Lower and upper secondary education under the Kosovo Curriculum Framework",
    "authority": "Ministry of Education, Science, Technology and Innovation (MESTI)",
    "curriculum": "The Kosovo Curriculum Framework organises learning through competency-based curriculum areas and grade bands. Confirm current subject core curricula, grade, profile and school programme using MESTI documents.",
    "exam": "State Matura and school-level assessment under current national regulations; confirm current cohort.",
    "languages": "Albanian and Serbian are official languages; instruction is also provided in other community languages.",
    "source": "https://masht.rks-gov.net/"
  },
  "Taiwan": {
    "level": "12-year Basic Education; junior and senior high school",
    "authority": "Ministry of Education (MOE), Taiwan; National Academy for Educational Research",
    "curriculum": "The 12-Year Basic Education Curriculum Guidelines organise learning areas and subject-specific courses. Senior high schools offer different general and vocational pathways; use the current curriculum guidelines and school course plan.",
    "exam": "Comprehensive Assessment Program for Junior High School Students; senior-high and university entrance routes vary by pathway and cohort.",
    "languages": "Mandarin Chinese is the main language of instruction; local languages and Indigenous languages are included in education.",
    "source": "https://english.moe.gov.tw/"
  },
  "Hong Kong": {
    "level": "Three-year junior secondary, three-year senior secondary and post-secondary pathways",
    "authority": "Education Bureau (EDB); Hong Kong Examinations and Assessment Authority (HKEAA)",
    "curriculum": "The Education Bureau publishes subject curricula and assessment guides. Senior secondary students follow core and elective subjects; science subject combinations and school-based assessment differ by subject.",
    "exam": "Hong Kong Diploma of Secondary Education (HKDSE), with subject-specific assessment and school-based assessment where applicable.",
    "languages": "Chinese and English are official languages; schools use Chinese-medium, English-medium or mixed-language arrangements.",
    "source": "https://www.edb.gov.hk/"
  }
};
const contexts={
  "Vanuatu": "volcanic islands, coral reefs, tropical forests, cyclones, coastal resilience and sustainable fisheries",
  "Vatican City": "urban micro-environments, cultural heritage conservation, sustainable resource use and the science of materials",
  "Venezuela": "Orinoco basin, Amazonian ecosystems, Andes, biodiversity, energy resources and water systems",
  "Vietnam": "monsoon climate, Mekong and Red River deltas, rice agriculture, coastal ecosystems and renewable energy",
  "Yemen": "arid ecosystems, water scarcity, terraced agriculture, Red Sea and Gulf of Aden coasts and public health",
  "Zambia": "Zambezi basin, wetlands, miombo woodlands, copper resources, hydropower and biodiversity",
  "Zimbabwe": "Zambezi and Limpopo basins, savanna ecosystems, agriculture, mining, biodiversity and water conservation",
  "Kosovo": "mountain ecosystems, river catchments, mineral resources, air quality and renewable energy",
  "Taiwan": "mountain biodiversity, typhoon risk, semiconductor materials, coastal systems and energy transition",
  "Hong Kong": "urban ecology, subtropical biodiversity, coastal waters, air quality, transport systems and sustainable cities"
};

const qs={
  "Biology": [
    "Explain how a cell or tissue structure is adapted to its function, using a labelled example.",
    "Design a fair investigation into one factor affecting an organism; identify variables, controls and safety considerations.",
    "Analyse ecological data and justify a conclusion using at least two pieces of evidence.",
    "Explain how genetic variation can influence the survival of a population under a changing selection pressure.",
    "Evaluate a conservation or public-health intervention in the country's environmental context."
  ],
  "Chemistry": [
    "Explain a periodic trend using nuclear charge, shielding and electron arrangement.",
    "Compare the properties of two substances using bonding and structure.",
    "Balance a chemical equation and use it to calculate an unknown reacting quantity.",
    "Describe a safe practical method and explain how observations support identification or measurement.",
    "Evaluate how experimental conditions influence reaction rate, yield or purity."
  ],
  "Physics": [
    "Use a motion or force model to solve a multistep problem with units.",
    "Interpret a graph and explain the physical meaning of its gradient or area.",
    "Explain an energy transfer and calculate efficiency or power.",
    "Analyse a circuit, wave or magnetic system when one variable changes.",
    "Plan a measurement investigation and evaluate uncertainty and validity."
  ],
  "Mathematics": [
    "Solve a multistep algebraic problem and verify the result.",
    "Model a real situation with a function, equation or inequality and state assumptions.",
    "Use statistical evidence to compare two data sets and discuss limitations.",
    "Calculate a conditional or compound probability using an appropriate representation.",
    "Justify a geometric or mathematical result with a clear chain of reasoning."
  ],
  "English": [
    "Analyse how a writer's choices shape meaning and audience response, using textual evidence.",
    "Write a coherent argument for a specified audience, including a counterargument.",
    "Compare two texts or viewpoints using a clear basis for comparison.",
    "Evaluate the reliability, bias and relevance of sources for a research task.",
    "Revise a passage to improve structure, cohesion, accuracy and register."
  ]
};



const subjects=["Biology","Chemistry","Physics","Mathematics","English"];
for(const [country,p] of Object.entries(profiles)){
 const r=all[country];if(!r)continue;
 r.curriculumAuthority=p.authority;r.curriculumLevel=p.level;r.curriculumSource=p.source;
 r.curriculumAuditStatus="jurisdiction-profiled-subject-topic-mapping-pending";
 r.curriculumDescription=p.curriculum;r.curriculumExamination=p.exam;r.curriculumLanguages=p.languages;
 r.curriculumNotice="Supplementary Learning Studio expansion. Confirm jurisdiction, grade, programme, syllabus and examination cohort against current official documents.";
 let count=0;
 for(const [grade,bank] of Object.entries(r.levels||{})){
  for(const subject of subjects){
   const chapters=bank?.[subject];if(!Array.isArray(chapters)||!chapters.length)continue;
   const chapter=chapters[0];chapter.sections=Array.isArray(chapter.sections)?chapter.sections:[];
   for(const t of topics[subject]){
    chapter.sections.push({heading:t[0]+" — "+country+" extended study",paragraphs:[t[1],t[2],"Country application: "+contexts[country]+". Treat this as a contextual case study, not a substitute for measured evidence. Identify variables and scale, compare observations and avoid generalising from one locality.","Examination approach: define the concept, identify the principle or model, apply it to data or textual evidence, show calculations where required and finish with a justified conclusion. Confirm the topic against the learner's current "+p.level+" programme before calling it prescribed content."],keyTerms:[t[0],"evidence","application","evaluation"],workedExamples:[{title:"Extended guided example",question:"Apply "+subject+" to a case involving "+contexts[country]+".",solution:"Define the relevant concept, select evidence, connect it to the subject principle and explain each reasoning step. Show units and calculations where required, or precise textual evidence for English. State a supported conclusion and identify one limitation.",marks:6}]});
   }
   chapter.realLifeApplications=(chapter.realLifeApplications||[]).concat(["Country case study: "+contexts[country]+". Explain how "+subject+" helps investigate or address one challenge in this setting.","Transfer task: compare the same "+subject+" principle in a second environment and explain which conditions remain constant and which differ."]);
   chapter.practicalActivities=(chapter.practicalActivities||[]).concat([{title:country+" "+subject+" investigation and communication task",description:"Develop a question using a teacher-approved local case, simulation or open data. Define variables or selection criteria, plan a safe and ethical method, collect or select evidence, present results clearly and evaluate limitations. Cite sources and do not infer beyond the evidence."}]);
   chapter.commonMisconceptions=(chapter.commonMisconceptions||[]).concat([{misconception:"A single example or data point proves a universal rule.",correction:"Test explanations against repeated evidence, context and alternative interpretations."},{misconception:"A correct final answer is enough in an extended task.",correction:"Show definitions, method, reasoning, units or textual evidence and a justified conclusion."}]);
   chapter.questions=(chapter.questions||[]).concat(qs[subject].map((q,i)=>({q,a:"Model answer guidance: define the relevant concept, apply it to the stated situation, show accurate reasoning or working, support claims with evidence and state a justified conclusion. Credit valid alternative methods and equivalent terminology.",marks:i<2?4:5,category:i<2?"Understanding and application":"Analysis, evaluation and communication",markingPoints:["Accurate subject knowledge and terminology.","Relevant application to the question context.","Logical method, evidence or calculation.","Reasoned conclusion and evaluation where required."]})));
   chapter.summary=(chapter.summary||[]).concat(["Extended study: "+topics[subject].map(x=>x[0]).join("; ")+".","Country case study: "+contexts[country]+".","Curriculum check: "+p.level+" — consult "+p.authority+" for the current grade and programme sequence."]);
   chapter.curriculumStatus="supplementary-unverified";
   chapter.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". This expanded CBE Nexus material is supplementary and is not certified as a complete official syllabus.";
   chapter.seoTitle=country+" "+grade+" "+subject+" Expanded Notes and Worked Examples | CBE Nexus";
   chapter.metaDescription="Expanded "+subject+" notes for "+country+" with detailed concept explanations, country case studies, guided worked examples, practical investigations and examination practice. Check current official curriculum requirements.";
   chapter.seoKeywords=[country+" "+subject+" notes",country+" "+grade+" "+subject+" curriculum",country+" "+subject+" worked examples",country+" "+subject+" practical investigations",country+" "+subject+" examination questions","CBE Nexus Learning Studio"];
   count++;
  }
 }
 r.batch13ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_13={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-13"};
})();