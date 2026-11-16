/* CBE Nexus Batch 09 — expanded supplementary Learning Studio content for countries 81–90.
   Five subject pathways; curriculum and examination alignment remains grade-, pathway- and cohort-specific.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "San Marino": {
    "level": "Lower and upper secondary education",
    "authority": "Ministry of Education and Culture; Department of Education",
    "curriculum": "San Marino's school system is closely connected to the Italian education framework, with local administration and national arrangements. Secondary pathways and subject syllabuses should be checked against the current school programme and applicable Italian or Sammarinese regulations.",
    "exam": "Upper-secondary Diploma di Maturità; verify school pathway and current examination arrangements.",
    "languages": "Italian is the principal language of instruction.",
    "source": "https://www.gov.sm/"
  },
  "Sao Tome and Principe": {
    "level": "Ensino Básico and Ensino Secundário (7th–12th classes)",
    "authority": "Ministry of Education of São Tomé and Príncipe",
    "curriculum": "The Ministry's digital curriculum repository publishes subject programmes and essential learning for lower and upper secondary levels, including Portuguese, Mathematics, Biology, Chemistry, Physics and English. Align content to the specific class and programme rather than assuming one sequence across all levels.",
    "exam": "Secondary completion certificate (Certidão do Ensino Secundário); confirm current national assessment and class requirements.",
    "languages": "Portuguese is the official language of instruction; local Creoles and other community languages are also spoken.",
    "source": "https://repositoriodigital.me.gov.st/categorias/documentos-orientacao-curricular"
  },
  "Saudi Arabia": {
    "level": "General education: intermediate and secondary stages",
    "authority": "Ministry of Education, Kingdom of Saudi Arabia; Education and Training Evaluation Commission",
    "curriculum": "Saudi national curricula and secondary pathways are governed by Ministry frameworks and evolving curriculum/assessment reforms. Public, private, international and specialised pathways may differ; match subject content to the current grade, pathway, textbook edition and official course plan.",
    "exam": "School-based assessment and relevant national assessments; secondary completion and university admission requirements vary by pathway and cohort.",
    "languages": "Arabic is the principal language of instruction in national schools; English is a major taught subject and international schools may use other curricula.",
    "source": "https://www.moe.gov.sa/"
  },
  "Senegal": {
    "level": "Enseignement moyen and enseignement secondaire général/technique",
    "authority": "Ministry of National Education; Office du Baccalauréat",
    "curriculum": "Senegal's national curriculum and secondary programmes operate in a Francophone system, with general and technical pathways. Subject programmes and examination expectations should be checked against current Ministry documents and the relevant series or stream.",
    "exam": "Brevet de Fin d'Études Moyennes (BFEM) and Baccalauréat, depending on level and pathway.",
    "languages": "French is the main language of formal instruction; national languages including Wolof, Pulaar, Serer, Jola and Mandinka are used in communities and language programmes.",
    "source": "https://www.education.sn/"
  },
  "Serbia": {
    "level": "Primary and secondary education; gymnasium and vocational schools",
    "authority": "Ministry of Education of the Republic of Serbia; Institute for the Improvement of Education",
    "curriculum": "National standards and subject curricula apply across primary and secondary education. Gymnasium, vocational and specialist programmes differ in subject hours and depth; use the current subject programme for the grade and educational profile.",
    "exam": "Final examination at the end of primary education and secondary graduation/matura arrangements; vocational final exams differ by profile.",
    "languages": "Serbian is the main language; education is also provided in minority languages in designated communities.",
    "source": "https://prosveta.gov.rs/"
  },
  "Seychelles": {
    "level": "Primary and secondary education; S4–S5 pathways",
    "authority": "Ministry of Education, Seychelles; Seychelles Institute of Teacher Education and curriculum units",
    "curriculum": "Seychelles publishes national curriculum documents for English, Mathematics, Science and other subjects, as well as General Education Skills Development Pathways. Match lower-secondary science and senior subject choices to the current national curriculum and S4–S5 programme of study.",
    "exam": "School-based assessment and Cambridge/other approved secondary qualifications where applicable; confirm current cohort and subject examination route.",
    "languages": "English, French and Seychellois Creole are used in education; language allocation depends on subject and school level.",
    "source": "https://edu.gov.sc/curriculum/"
  },
  "Sierra Leone": {
    "level": "Junior secondary and senior secondary education",
    "authority": "Ministry of Basic and Senior Secondary Education; Teaching Service Commission; WAEC",
    "curriculum": "Sierra Leone's national curriculum frameworks and subject syllabuses guide junior and senior secondary education. The senior secondary curriculum and WASSCE preparation should be matched to the current subject syllabus, grade and school programme.",
    "exam": "Basic Education Certificate Examination (BECE) and West African Senior School Certificate Examination (WASSCE).",
    "languages": "English is the principal formal language of instruction; Krio and other national languages are widely used in everyday communication.",
    "source": "https://mbsse.gov.sl/"
  },
  "Singapore": {
    "level": "Secondary education and post-secondary pathways",
    "authority": "Ministry of Education, Singapore; Singapore Examinations and Assessment Board",
    "curriculum": "Singapore's national curriculum is subject- and pathway-specific. Secondary subject-based banding and phased qualification changes mean learners' examination routes depend on cohort; use the current MOE syllabus and SEAB examination syllabus for each subject.",
    "exam": "Singapore-Cambridge GCE O-Level and A-Level routes for applicable cohorts; new Singapore-Cambridge Secondary Education Certificate (SEC) begins for the 2027 cohort, subject to current transition rules.",
    "languages": "English is the main language of instruction; Mother Tongue Languages include Chinese, Malay and Tamil.",
    "source": "https://www.moe.gov.sg/; https://www.seab.gov.sg/"
  },
  "Slovakia": {
    "level": "Primary and secondary education; gymnasium and vocational pathways",
    "authority": "Ministry of Education, Research, Development and Youth of the Slovak Republic; National Institute of Education and Youth",
    "curriculum": "National state educational programmes set learning standards, while school educational programmes and gymnasium/vocational routes determine subject depth and sequence. Check current subject standards and programme type.",
    "exam": "Maturita examination for relevant secondary programmes and vocational final examinations where applicable.",
    "languages": "Slovak is the main language of instruction; minority-language education is available in some areas.",
    "source": "https://www.minedu.sk/"
  },
  "Slovenia": {
    "level": "Basic education and upper-secondary education",
    "authority": "Ministry of Education, Slovenia; National Education Institute Slovenia",
    "curriculum": "Slovenia's national curricula distinguish compulsory basic education from gymnasium, technical and vocational upper-secondary programmes. Subject syllabuses and assessment differ by programme; verify the current syllabus and year of study.",
    "exam": "Matura (general or vocational) and final examinations for applicable vocational programmes.",
    "languages": "Slovene is the main language; Italian and Hungarian have official status in designated bilingual areas.",
    "source": "https://www.gov.si/en/state-authorities/ministries/ministry-of-education/"
  }
};
const contexts={
  "San Marino": "Apennine landscapes, Mediterranean climate, woodland habitats, water resources, tourism and sustainable urban development",
  "Sao Tome and Principe": "equatorial rainforests, volcanic islands, endemic biodiversity, cocoa agroforestry, coastal ecosystems and marine conservation",
  "Saudi Arabia": "arid deserts, Red Sea and Gulf marine ecosystems, groundwater, desalination, solar energy and sustainable urban development",
  "Senegal": "Sahelian ecosystems, Senegal River basin, mangroves, fisheries, agriculture, coastal erosion and climate adaptation",
  "Serbia": "Danube and Sava river systems, Balkan mountain ecosystems, forests, agriculture, mining and energy transition",
  "Seychelles": "coral reefs, granitic islands, endemic species, marine conservation, fisheries, coastal resilience and tourism",
  "Sierra Leone": "tropical forests, mangroves, river basins, coastal fisheries, mineral resources and biodiversity conservation",
  "Singapore": "urban biodiversity, tropical climate, water security, urban heat, coastal resilience and sustainable city systems",
  "Slovakia": "Carpathian mountain ecosystems, forests, rivers, karst landscapes, agriculture and renewable energy",
  "Slovenia": "Alpine and karst ecosystems, forests, rivers, Adriatic coast, biodiversity and sustainable water management"
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
 r.curriculumNotice="Supplementary Learning Studio expansion. Confirm grade, programme, subject specification and examination cohort against current official documents.";
 let count=0;
 for(const [grade,bank] of Object.entries(r.levels||{})){
  for(const subject of subjects){
   const chapters=bank?.[subject];if(!Array.isArray(chapters)||!chapters.length)continue;
   const chapter=chapters[0];chapter.sections=Array.isArray(chapter.sections)?chapter.sections:[];
   for(const t of topics[subject]){
    chapter.sections.push({heading:t[0]+" — "+country+" extended study",paragraphs:[t[1],t[2],"Country application: "+contexts[country]+". Treat this as a contextual case study, not as a substitute for measured evidence. Identify variables and scale, compare more than one observation where possible, and avoid generalising from one locality to the whole country.","Examination approach: define the concept, identify the principle or model, apply it to the data or context, show calculations or textual evidence, and finish with a justified conclusion. Evaluate limitations and improvements. Confirm the topic against the learner's current "+p.level+" programme before calling it prescribed content."],keyTerms:[t[0],"evidence","application","evaluation"],workedExamples:[{title:"Extended guided example",question:"Apply "+subject+" to a case involving "+contexts[country]+".",solution:"Define the relevant concept, select evidence from the case, connect it to the subject principle and explain each reasoning step. Show units and calculations where required, or use precise textual evidence for English. State a conclusion supported by evidence and identify one limitation.",marks:6}]});
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
 r.batch09ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_09={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-09"};
})();