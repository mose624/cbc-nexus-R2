/* CBE Nexus Batch 12 — countries 111–120 supplementary Learning Studio expansion. */
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "Türkiye": {
    "level": "Lower secondary and upper secondary education; Anatolian, science, vocational and other pathways",
    "authority": "Ministry of National Education (MEB); Board of Education and Discipline (Talim ve Terbiye Kurulu)",
    "curriculum": "MEB national curricula and subject teaching programmes guide schools. Türkiye has revised curriculum frameworks including the Türkiye Century Education Model, with phased implementation by grade. Confirm the learner's year, current programme, school type and applicable transition cohort.",
    "exam": "LGS for transition to upper-secondary schools; YKS for university entry; school assessments and vocational examinations as applicable.",
    "languages": "Turkish is the main language of instruction; minority-language and foreign-language provision varies.",
    "source": "https://www.meb.gov.tr/"
  },
  "Turkmenistan": {
    "level": "General secondary education; school grades 1–12",
    "authority": "Ministry of Education of Turkmenistan",
    "curriculum": "National state standards, approved textbooks and Ministry programmes guide general secondary education. Public online detail for current subject standards may be limited; verify grade, school textbook edition, language and examination requirements with the learner's school.",
    "exam": "School graduation and university entrance examinations under national arrangements; confirm current requirements.",
    "languages": "Turkmen is the state language; Russian and other languages may be used in some schools.",
    "source": "https://education.gov.tm/"
  },
  "Tuvalu": {
    "level": "Primary and secondary education; Years 1–13",
    "authority": "Ministry of Education, Youth and Sports; Tuvalu Education Department",
    "curriculum": "National curriculum and school programmes are influenced by Pacific regional curriculum and qualification pathways. Confirm current subject syllabuses and assessment arrangements with the Ministry and school, especially for senior secondary years.",
    "exam": "Tuvaluan and Pacific regional secondary qualifications, including South Pacific Form Seven Certificate where applicable; confirm cohort.",
    "languages": "Tuvaluan and English are used in education; language of instruction varies by level and subject.",
    "source": "https://www.education.gov.tv/"
  },
  "Uganda": {
    "level": "Lower secondary and upper secondary; competency-based curriculum",
    "authority": "National Curriculum Development Centre (NCDC); Ministry of Education and Sports; UNEB",
    "curriculum": "Uganda's lower-secondary competency-based curriculum and revised upper-secondary curriculum use subject-specific syllabuses and learning outcomes. Map content to the correct O-Level or A-Level subject, grade, competence and current UNEB examination format.",
    "exam": "Uganda Certificate of Education (UCE) and Uganda Advanced Certificate of Education (UACE); transition to competency-based assessment depends on cohort.",
    "languages": "English is the principal language of instruction in secondary schools; local languages are used in earlier education and communities.",
    "source": "https://www.ncdc.go.ug/"
  },
  "Ukraine": {
    "level": "Basic secondary and specialised upper secondary education; New Ukrainian School reform",
    "authority": "Ministry of Education and Science of Ukraine; Ukrainian Institute for Education Development; Ukrainian Center for Educational Quality Assessment",
    "curriculum": "The State Standard of Basic Secondary Education and New Ukrainian School reform guide competency-based learning. Upper-secondary profile reform is staged. War-related displacement and remote learning affect access; verify current grade, school model, subject programme and assessment cohort.",
    "exam": "State final attestation and National Multi-subject Test (NMT) for relevant cohorts; current rules may change.",
    "languages": "Ukrainian is the state language of instruction; minority-language and international provision varies.",
    "source": "https://mon.gov.ua/"
  },
  "United Arab Emirates": {
    "level": "Cycle 1–3 and upper secondary; public, private and international schools",
    "authority": "Ministry of Education (MoE); Abu Dhabi Department of Education and Knowledge (ADEK); Dubai Knowledge and Human Development Authority (KHDA); other emirate regulators",
    "curriculum": "Public schools follow Ministry curriculum and subject standards; private schools may follow British, American, IB, Indian, French or other approved curricula. Always identify emirate, regulator, school curriculum, grade and examination board before writing syllabus-specific notes.",
    "exam": "Emirati national assessments and school examinations; external qualifications such as GCSE/IGCSE, A-level, IB, CBSE and others depend on school.",
    "languages": "Arabic is the official language; English is widely used in teaching and international schools. Language depends on curriculum and subject.",
    "source": "https://www.moe.gov.ae/"
  },
  "United Kingdom": {
    "level": "Devolved education systems: England, Scotland, Wales and Northern Ireland",
    "authority": "Department for Education (England); Education Scotland; Welsh Government; Department of Education Northern Ireland; examination regulators and boards",
    "curriculum": "There is no single UK-wide school curriculum. England uses the National Curriculum and GCSE/A-level specifications; Scotland uses Curriculum for Excellence and National Qualifications; Wales uses Curriculum for Wales; Northern Ireland has its own curriculum and qualifications. Identify nation, key stage, awarding body and specification.",
    "exam": "GCSE and A-level in England/Wales/NI (board-specific); Scottish National 5, Higher and Advanced Higher; other qualifications by nation.",
    "languages": "English is widely used; Welsh, Scottish Gaelic, Irish and Ulster Scots have recognised roles in relevant jurisdictions and schools.",
    "source": "https://www.gov.uk/government/organisations/department-for-education"
  },
  "United States": {
    "level": "K–12 education; state, district and school-based standards",
    "authority": "State education agencies and local school districts; U.S. Department of Education; College Board and ACT for relevant assessments",
    "curriculum": "There is no single federal school curriculum. States and districts adopt their own standards and graduation requirements; many use or adapt Common Core and NGSS. Advanced Placement, IB and other courses have separate specifications. Identify state, district, grade and course before syllabus mapping.",
    "exam": "State assessments and graduation requirements; SAT/ACT and AP exams where relevant; no single national school-leaving examination.",
    "languages": "English is the most common language of instruction; bilingual, dual-language and other language programmes vary by state and district.",
    "source": "https://www.ed.gov/"
  },
  "Uruguay": {
    "level": "Educación Básica Integrada and Educación Media Superior",
    "authority": "Administración Nacional de Educación Pública (ANEP); Dirección General de Educación Secundaria; Dirección General de Educación Técnico Profesional",
    "curriculum": "Uruguay's Transformación Curricular Integral and competency-based framework shape basic and upper-secondary education. General and technical routes differ; use current ANEP programmes, grade, orientation and subject-specific progressions.",
    "exam": "School progression and completion under ANEP regulations; upper-secondary completion and tertiary admission arrangements depend on pathway.",
    "languages": "Spanish is the principal language of instruction; Portuguese and other languages are present in border and community contexts.",
    "source": "https://www.anep.edu.uy/"
  },
  "Uzbekistan": {
    "level": "General secondary education; grades 1–11 and specialised pathways",
    "authority": "Ministry of Preschool and School Education; Agency for Assessment of Knowledge and Skills; specialised education authorities",
    "curriculum": "National state educational standards and subject curricula guide general schools. Reforms, specialised schools and language tracks can affect content and sequence. Confirm current grade, approved textbook, subject standard and assessment requirements.",
    "exam": "School completion examinations and higher-education entrance testing under national arrangements; confirm current cohort.",
    "languages": "Uzbek is the state language; Karakalpak, Russian and other languages are used in schools and communities.",
    "source": "https://uzedu.uz/"
  }
};
const contexts={
  "Türkiye": "Anatolian and Mediterranean ecosystems, water resources, seismic risk, agriculture, renewable energy and urban development",
  "Turkmenistan": "Karakum Desert, arid ecosystems, irrigation, the Amu Darya basin, energy resources and desertification",
  "Tuvalu": "atoll ecosystems, coral reefs, freshwater lenses, coastal erosion, sea-level rise and climate adaptation",
  "Uganda": "Great Lakes, tropical forests, savanna biodiversity, wetlands, agriculture, public health and renewable energy",
  "Ukraine": "steppe and forest ecosystems, river basins, agriculture, energy systems, biodiversity and environmental recovery",
  "United Arab Emirates": "desert ecology, mangroves, desalination, solar energy, urban heat and coastal ecosystems",
  "United Kingdom": "temperate ecosystems, river catchments, renewable energy, biodiversity, urban sustainability and climate adaptation",
  "United States": "diverse biomes, watersheds, energy systems, public health, agriculture and environmental management",
  "Uruguay": "grasslands, wetlands, Atlantic coast, livestock systems, renewable electricity and biodiversity",
  "Uzbekistan": "Aral Sea basin, irrigated agriculture, desert ecosystems, water management, energy and climate resilience"
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
 r.batch12ExpandedSubjectChapters=count;
 r.learningStudioSEO={title:country+" Biology Chemistry Physics Mathematics English Expanded Notes | CBE Nexus",description:"Expanded supplementary secondary learning resources contextualised for "+country+", with concept study, practical tasks and examination practice.",keywords:[country+" curriculum",...subjects.map(s=>country+" "+s+" notes")],authority:p.authority,source:p.source};
}
window.CBE_NEXUS_COUNTRY_BATCH_12={countries:Object.keys(profiles),subjects:subjects,status:"expanded-supplementary-chapters-official-topic-mapping-pending",version:"2026-11-16-batch-12"};
})();