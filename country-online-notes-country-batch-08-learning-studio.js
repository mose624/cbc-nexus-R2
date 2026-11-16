/* CBE Nexus Batch 08 — expanded supplementary Learning Studio content for countries 71–80.
   Five subject pathways; curriculum and examination alignment remains grade-, pathway- and cohort-specific.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Poland": {
    "level": "Primary, grades 4–8 and secondary education (liceum, technikum, branżowa szkoła)",
    "authority": "Ministry of National Education; Central Examination Board (CKE)",
    "curriculum": "Poland uses national core curricula with separate subject requirements across primary and upper-secondary pathways. Liceum, technical and vocational programmes differ in course allocation and matura preparation; check the current core curriculum and examination requirements for the cohort.",
    "exam": "Eight-grade examination and Matura (egzamin maturalny), with vocational examinations for relevant programmes.",
    "languages": "Polish is the main language of instruction; minority-language and bilingual provision exists.",
    "source": "https://www.gov.pl/web/edukacja"
  },
  "Portugal": {
    "level": "Basic education (9 years) and upper-secondary education (ensino secundário)",
    "authority": "Ministry of Education, Science and Innovation; Directorate-General for Education (DGE)",
    "curriculum": "Portugal's curriculum framework includes the Profile of Students by the End of Compulsory Schooling, essential learning (Aprendizagens Essenciais) and curriculum autonomy. Upper-secondary scientific-humanistic, professional and artistic courses have distinct subject plans and assessment.",
    "exam": "School assessment and national secondary examinations (exames finais nacionais) where required for completion or higher-education access.",
    "languages": "Portuguese is the main language; schools may provide language support and minority/community language options.",
    "source": "https://www.dge.mec.pt/"
  },
  "Qatar": {
    "level": "Primary, preparatory and secondary education",
    "authority": "Ministry of Education and Higher Education (MOEHE), Qatar",
    "curriculum": "Qatar's national curriculum standards and subject frameworks guide public education, while international schools may follow other accredited curricula. Distinguish the national public-school pathway from private and international school programmes; verify grade-specific subject standards.",
    "exam": "School-based assessments and applicable secondary completion or university admission requirements; verify current assessment arrangements with MOEHE.",
    "languages": "Arabic is the principal language in national schools; English is widely taught and used in many private and international schools.",
    "source": "https://www.edu.gov.qa/"
  },
  "Romania": {
    "level": "Primary, gymnasium and upper-secondary education (liceu)",
    "authority": "Ministry of Education and Research; National Centre for Curriculum and Evaluation",
    "curriculum": "Romania uses national framework plans and subject curricula across primary, gymnasium and upper-secondary pathways. The profile of study and specialisation at liceu affect subject hours and depth; use the current grade and specialisation curriculum.",
    "exam": "National Assessment at the end of grade 8 and the Baccalaureate examination (Bacalaureat), plus vocational certification where applicable.",
    "languages": "Romanian is the main language; Hungarian, German and other minority-language schooling is available in relevant communities.",
    "source": "https://www.edu.ro/"
  },
  "Russia": {
    "level": "Basic general education and secondary general education",
    "authority": "Ministry of Education of the Russian Federation; Federal Institute for Education Development",
    "curriculum": "Federal state educational standards and federal basic general education programmes define compulsory outcomes and subject content. School plans and regional contexts may add provision; verify the current Federal Working Programme for each subject and grade.",
    "exam": "State Final Attestation: OGE at the end of grade 9 and Unified State Exam (EGE) for relevant grade 11 subjects and university admission.",
    "languages": "Russian is the principal language; republics and regions provide education and language learning in other recognised languages.",
    "source": "https://edu.gov.ru/"
  },
  "Rwanda": {
    "level": "Lower secondary and upper secondary (competence-based curriculum)",
    "authority": "Rwanda Basic Education Board (REB); Ministry of Education (MINEDUC)",
    "curriculum": "Rwanda's competence-based curriculum organises learning through subject syllabuses, competencies and assessment standards. Lower-secondary and upper-secondary subject combinations differ; match resources to the current REB syllabus and learner pathway.",
    "exam": "National examinations at the end of lower secondary and upper secondary, administered by the national examination authority; verify current subject combinations and assessment formats.",
    "languages": "Kinyarwanda, English, French and Kiswahili have official roles; language of instruction varies by level and policy.",
    "source": "https://www.reb.gov.rw/; https://www.mineduc.gov.rw/"
  },
  "Saint Kitts and Nevis": {
    "level": "Primary and secondary education",
    "authority": "Ministry of Education, St Kitts and Nevis; Caribbean Examinations Council (CXC)",
    "curriculum": "The national school system uses local curriculum guidance alongside Caribbean regional syllabuses and qualifications. Secondary subject content should be mapped to the current CSEC and, where applicable, CAPE syllabus and the learner's school programme.",
    "exam": "CXC Caribbean Secondary Education Certificate (CSEC) and Caribbean Advanced Proficiency Examination (CAPE), depending on subject and school.",
    "languages": "English is the main language of instruction; Saint Kitts Creole is used in community life.",
    "source": "https://www.gov.kn/"
  },
  "Saint Lucia": {
    "level": "Primary and secondary education",
    "authority": "Ministry of Education, Sustainable Development, Innovation, Science, Technology and Vocational Training; CXC",
    "curriculum": "Saint Lucia's national education policy operates alongside Caribbean regional subject syllabuses. Secondary Biology, Chemistry, Physics, Mathematics and English resources should be mapped to the current CSEC or CAPE specification and school offering.",
    "exam": "CXC CSEC and CAPE examinations, alongside school-based assessment and national requirements.",
    "languages": "English is the official language of instruction; Saint Lucian French Creole (Kwéyòl) is widely used in community life.",
    "source": "https://education.govt.lc/"
  },
  "Saint Vincent and the Grenadines": {
    "level": "Primary and secondary education",
    "authority": "Ministry of Education, Vocational Training, Innovation, Digital Transformation and Information; CXC",
    "curriculum": "The national system includes local primary and secondary provision and Caribbean regional examinations. Subject sequence, practical requirements and assessment should be aligned with the current CSEC/CAPE syllabus and school programme.",
    "exam": "CXC CSEC and CAPE examinations, with applicable school-based assessment components.",
    "languages": "English is the official language of instruction; Vincentian Creole is used in everyday communication.",
    "source": "https://education.gov.vc/"
  },
  "Samoa": {
    "level": "Primary, junior secondary and senior secondary education",
    "authority": "Ministry of Education and Culture (MEC), Samoa",
    "curriculum": "Samoa's national curriculum and assessment policy guide primary and secondary education. Senior secondary subject offerings and external assessment requirements should be checked against current MEC syllabuses and the Samoa School Certificate or regional qualification arrangements.",
    "exam": "School-based assessment and national or regional senior secondary examinations, including the Samoa School Certificate and Pacific Senior Secondary Certificate where applicable; verify cohort rules.",
    "languages": "Samoan and English are used in education; language of instruction and subject delivery vary by level.",
    "source": "https://www.mesc.gov.ws/"
  }
};
const contexts={
  "Poland": "Baltic coast, Vistula and Oder river basins, temperate forests, agriculture, coal transition and renewable energy",
  "Portugal": "Atlantic coast, Mediterranean-climate ecosystems, cork oak forests, water management, marine resources and renewable energy",
  "Qatar": "arid desert ecosystems, Gulf marine habitats, desalination, energy systems, urban sustainability and water conservation",
  "Romania": "Carpathian Mountains, Danube Delta, temperate forests, biodiversity, agriculture and river systems",
  "Russia": "taiga, tundra, permafrost, vast river systems, continental climate, energy resources and biodiversity",
  "Rwanda": "Albertine Rift biodiversity, volcanic highlands, Lake Kivu, watersheds, agriculture and conservation",
  "Saint Kitts and Nevis": "volcanic island landscapes, tropical forests, coral reefs, coastal resilience, agriculture and tourism",
  "Saint Lucia": "Pitons and volcanic landscapes, tropical forests, coral reefs, coastal processes and watershed protection",
  "Saint Vincent and the Grenadines": "volcanic islands, tropical forests, coral reefs, fisheries, coastal resilience and agriculture",
  "Samoa": "tropical island ecosystems, volcanic soils, coral reefs, customary land stewardship, cyclones and climate resilience"
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
 r.batch08ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_08={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-08"};
})();