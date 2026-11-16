/* CBE Nexus Batch 11 — countries 101–110 supplementary Learning Studio expansion. */
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Switzerland": {
    "level": "Compulsory education and upper-secondary pathways",
    "authority": "Swiss Conference of Cantonal Ministers of Education (EDK/CDIP); cantonal education departments; State Secretariat for Education, Research and Innovation",
    "curriculum": "Education is primarily cantonal. German-speaking cantons commonly use Lehrplan 21; French-speaking cantons use Plan d'études romand; Ticino has its own plan. Upper-secondary gymnasium and vocational programmes differ by canton and language region. Map by canton, school type and language.",
    "exam": "Cantonal school-leaving qualifications; gymnasium Matura and federal vocational qualifications according to pathway.",
    "languages": "German, French, Italian and Romansh are national languages; school language depends on canton.",
    "source": "https://www.edk.ch/"
  },
  "Syria": {
    "level": "Basic and secondary education; national and regional implementation",
    "authority": "Ministry of Education, Syrian Arab Republic; regional education authorities",
    "curriculum": "Curriculum, textbook availability and examinations may vary with administrative control, location and changing education conditions. Confirm the learner's school authority, grade, current approved textbooks and examination board before assigning a definitive sequence.",
    "exam": "Basic Education Certificate and secondary school certificate pathways where administered; confirm current local arrangements.",
    "languages": "Arabic is the principal language of instruction; Kurdish and other languages are used in some communities and schools.",
    "source": "https://moed.gov.sy/"
  },
  "Tajikistan": {
    "level": "General secondary education; grades 1–11",
    "authority": "Ministry of Education and Science of the Republic of Tajikistan; National Testing Center",
    "curriculum": "State educational standards and subject programmes guide general education. Subject sequence and examination preparation should be checked against current grade-specific standards, approved textbooks and the learner's school language.",
    "exam": "Centralised university entrance testing and school completion assessments; current grade and qualification rules should be confirmed.",
    "languages": "Tajik is the state language; Russian and Uzbek are used in some schools and communities.",
    "source": "https://maorif.tj/"
  },
  "Tanzania": {
    "level": "Primary and secondary education; Ordinary and Advanced levels",
    "authority": "Tanzania Institute of Education (TIE); Ministry of Education, Science and Technology; NECTA",
    "curriculum": "TIE develops national curricula and syllabuses. Secondary education includes lower secondary and upper-secondary subject combinations; align Biology, Chemistry, Physics and Mathematics to the current TIE syllabus and the relevant NECTA examination format. English and Kiswahili language-of-instruction policies differ by level and school.",
    "exam": "CSEE (Certificate of Secondary Education Examination) and ACSEE (Advanced Certificate of Secondary Education Examination).",
    "languages": "Kiswahili and English are both used in education; language of instruction depends on level, school and current policy.",
    "source": "https://www.tie.go.tz/"
  },
  "Thailand": {
    "level": "Basic Education Curriculum; lower and upper secondary",
    "authority": "Ministry of Education; Office of the Basic Education Commission (OBEC); IPST for science and mathematics",
    "curriculum": "The Basic Education Core Curriculum B.E. 2551 (2008), revised standards and current Ministry/OBEC guidance shape learning standards. Science and mathematics standards and school programmes should be checked for the relevant grade and current implementation.",
    "exam": "School assessments, Ordinary National Educational Test (O-NET) where applicable, and university admission assessments; confirm current cohort and exam use.",
    "languages": "Thai is the principal language of instruction; English is a core foreign language and some schools provide bilingual or international programmes.",
    "source": "https://www.obec.go.th/"
  },
  "Timor-Leste": {
    "level": "Basic education and secondary education",
    "authority": "Ministry of Education, Democratic Republic of Timor-Leste; National Directorate for Curriculum and School Materials",
    "curriculum": "National basic and secondary curriculum reforms and approved learning standards guide teaching. Confirm the current subject syllabus, grade, language transition and school programme; implementation and resources may differ by location.",
    "exam": "School-based assessment and secondary completion arrangements under Ministry policy; confirm current national examination rules.",
    "languages": "Tetum and Portuguese are official languages; Indonesian and English are also used in some schools and learning resources.",
    "source": "https://www.moe.gov.tl/"
  },
  "Togo": {
    "level": "Enseignement secondaire général and technical education",
    "authority": "Ministry of Primary, Secondary, Technical Education and Handicrafts; national curriculum and examination directorates",
    "curriculum": "Togo follows a Francophone national education structure with general and technical secondary pathways. Use the current subject programmes and examination series; do not assume the same sequence across general and technical streams.",
    "exam": "BEPC at the lower-secondary stage and Baccalauréat for upper-secondary pathways; technical qualifications vary.",
    "languages": "French is the main language of formal instruction; national languages including Ewe and Kabiye are widely used.",
    "source": "https://education.gouv.tg/"
  },
  "Tonga": {
    "level": "Primary and secondary education; national curriculum framework",
    "authority": "Ministry of Education and Training, Tonga; Tonga National Qualifications and Accreditation Board",
    "curriculum": "The Ministry sets national curriculum policy and subject programmes, with regional Pacific qualifications and school pathways influencing senior-secondary study. Confirm current grade-level syllabuses, approved learning materials and examination pathway.",
    "exam": "Tonga School Certificate, Tonga National Form Seven Certificate and Pacific senior-secondary qualifications as applicable; confirm cohort.",
    "languages": "Tongan and English are used in education; language of instruction varies by level and subject.",
    "source": "https://www.education.gov.to/"
  },
  "Trinidad and Tobago": {
    "level": "Primary, lower-secondary and upper-secondary education",
    "authority": "Ministry of Education, Trinidad and Tobago; Caribbean Examinations Council (CXC)",
    "curriculum": "The national curriculum guides primary and lower-secondary schooling. Many secondary learners follow CSEC and CAPE syllabuses; align content to the current CXC subject syllabus, examination year and school pathway rather than a generic national chapter order.",
    "exam": "Caribbean Secondary Education Certificate (CSEC) and Caribbean Advanced Proficiency Examination (CAPE).",
    "languages": "English is the official language and principal medium of instruction; Trinidadian Creole and other languages are widely spoken.",
    "source": "https://www.moe.gov.tt/"
  },
  "Tunisia": {
    "level": "Basic education and secondary education; general and technical pathways",
    "authority": "Ministry of Education, Tunisia; National Centre for Pedagogical Innovation and Educational Research",
    "curriculum": "National programmes are set through the Ministry and relevant curriculum bodies. Secondary pathways include general and technical streams, with subject specialisation and national examination expectations. Verify current grade, section and official programme.",
    "exam": "National Baccalauréat examination with different sections and specialisations; lower-secondary assessment as applicable.",
    "languages": "Arabic is the main language of instruction; French is widely used in science and technical education, and English is taught.",
    "source": "https://www.education.gov.tn/"
  }
};
const contexts={
  "Switzerland": "Alpine and Jura ecosystems, glaciers, freshwater systems, precision engineering, energy transition and multilingual communities",
  "Syria": "Mediterranean and semi-arid ecosystems, water scarcity, agriculture, public health, heritage conservation and resilient infrastructure",
  "Tajikistan": "Pamir and Alay mountain systems, glaciers, hydropower, river basins, agriculture and climate adaptation",
  "Tanzania": "Serengeti and coastal ecosystems, biodiversity, Great Lakes, agriculture, mineral resources and renewable energy",
  "Thailand": "tropical forests, monsoon systems, rice agriculture, river basins, coastal ecosystems and urban air quality",
  "Timor-Leste": "coral reefs, tropical mountain ecosystems, watersheds, coffee agriculture, marine resources and climate resilience",
  "Togo": "coastal wetlands, savanna ecosystems, agricultural soils, fisheries, urbanisation and sustainable resource use",
  "Tonga": "volcanic islands, coral reefs, ocean systems, cyclone resilience, fisheries and sustainable island development",
  "Trinidad and Tobago": "Caribbean marine ecosystems, coral reefs, tropical forests, petroleum and natural gas, energy transition and coastal resilience",
  "Tunisia": "Mediterranean coast, Saharan environments, water scarcity, olive agriculture, renewable energy and biodiversity"
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
 r.curriculumAuditStatus="country-pathway-profiled-subject-topic-mapping-pending";
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
 r.batch11ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_11={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-11"};
})();