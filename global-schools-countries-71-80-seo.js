/* CBE Nexus country-specific SEO enrichment for countries 71–80.
 * Country profiles add search-intent context to existing country records.
 * Always confirm current syllabuses, examinations and admissions notices with national authorities.
 */
(function(){
"use strict";
const d=window.CBE_GLOBAL_COUNTRY_DATA;if(!d)return;
const profiles={
 "south-korea":{
  seoHeading:"South Korea Education System, National Curriculum & CSAT (Suneung)",
  seoTitle:"South Korea Education System, Curriculum, CSAT & School Resources | CBE Nexus",
  seoDescription:"Explore South Korea's national curriculum, elementary and secondary pathways, high-school subjects, CSAT university entrance examination and learning resources.",
  seoIntro:"South Korea's school system is commonly organised into six years of elementary school, three years of middle school and three years of high school. The Ministry of Education sets national education policy and curriculum frameworks, while the Korea Institute for Curriculum and Evaluation (KICE) supports curriculum and assessment work. The College Scholastic Ability Test (CSAT, commonly called Suneung) is a major university entrance examination. Korean is the principal language of instruction; foreign-language learning, including English, is part of the curriculum. School pathways and assessment details can vary by school type and current policy.",
  seoTopics:["South Korea national curriculum","South Korea elementary school subjects","South Korea middle school curriculum","South Korea high school education","CSAT Suneung examination preparation","KICE curriculum and assessment","South Korea mathematics science resources"],
  seoFaqs:[
   {question:"What is the CSAT in South Korea?",answer:"The College Scholastic Ability Test (CSAT), widely known as Suneung, is a major standardised examination used in university admissions. Candidates should consult current official admissions and examination guidance."},
   {question:"How is school education structured in South Korea?",answer:"The general structure is six years of elementary school, three years of middle school and three years of high school."},
   {question:"Where can I find South Korea curriculum information?",answer:"Check the Ministry of Education and the Korea Institute for Curriculum and Evaluation (KICE) for current curriculum and assessment information."}
  ]
 },
 "vietnam":{
  seoHeading:"Vietnam Education System, National Curriculum & High School Graduation Exam",
  seoTitle:"Vietnam Curriculum, Grade 12 Graduation Exam & School Resources | CBE Nexus",
  seoDescription:"Explore Vietnam's general education curriculum, primary and secondary pathways, high school graduation examination and learning resources.",
  seoIntro:"Vietnam's general education system includes primary, lower secondary and upper secondary stages. The Ministry of Education and Training (MOET) oversees national education policy and curriculum frameworks. The 2018 General Education Programme is being implemented across school levels, with subject arrangements and assessment rules set by current MOET guidance. The high school graduation examination is important for completing upper secondary education and may also be used in university admissions alongside other criteria. Vietnamese is the main language of instruction.",
  seoTopics:["Vietnam 2018 General Education Programme","Vietnam primary curriculum","Vietnam lower secondary curriculum","Vietnam upper secondary subjects","Vietnam high school graduation examination","MOET curriculum and assessment","Vietnam mathematics physics chemistry biology"],
  seoFaqs:[
   {question:"What curriculum is used in Vietnam?",answer:"Vietnam is implementing its 2018 General Education Programme. Schools and learners should check current MOET documents for subject requirements and implementation details."},
   {question:"What is the Vietnam high school graduation examination?",answer:"It is the national examination associated with completion of upper secondary education; current subject combinations and university admission uses should be checked in the annual MOET guidance."},
   {question:"Where can I find official Vietnam syllabuses?",answer:"The Ministry of Education and Training (MOET) is the primary source for national curriculum, examination and education policy information."}
  ]
 },
 "timor-leste":{
  seoHeading:"Timor-Leste Education System, Curriculum & National School Assessments",
  seoTitle:"Timor-Leste Education System, Curriculum & Learning Resources | CBE Nexus",
  seoDescription:"Explore Timor-Leste's basic and secondary education pathways, curriculum information, school assessment and learning resources.",
  seoIntro:"Timor-Leste's education system is overseen by the national education ministry and includes basic education and secondary pathways. Curriculum and school evaluation functions are administered through national education structures, with Portuguese and Tetum important in the education and language policy context. The language used for teaching can vary by grade, subject and school context; learners should follow the language and curriculum specified by their school. Publicly available assessment arrangements may change, so current ministry circulars should be used for examination dates and requirements.",
  seoTopics:["Timor-Leste basic education curriculum","Timor-Leste secondary education","Timor-Leste school assessment","Timor-Leste Portuguese and Tetum language of instruction","Timor-Leste curriculum resources","Timor-Leste teacher and learner resources"],
  seoFaqs:[
   {question:"What are the main languages used in Timor-Leste education?",answer:"Portuguese and Tetum are central to national language and education policy. The language used in a particular class or subject should be confirmed with the school and current ministry guidance."},
   {question:"How is school education organised in Timor-Leste?",answer:"The system includes basic education and secondary education pathways. Consult the education ministry for current grade structures and curriculum requirements."},
   {question:"Where can I verify Timor-Leste curriculum information?",answer:"Use current publications and notices from the national Ministry of Education and its curriculum and school-evaluation directorates."}
  ]
 },
 "brunei":{
  seoHeading:"Brunei Darussalam Education System, SPN21 & Brunei-Cambridge Examinations",
  seoTitle:"Brunei SPN21 Curriculum, O-Level, A-Level & School Resources | CBE Nexus",
  seoDescription:"Explore Brunei Darussalam's SPN21 education system, bilingual learning, Brunei-Cambridge examinations and school resources.",
  seoIntro:"Brunei Darussalam's education system is guided by the Ministry of Education and the SPN21 framework, which provides pathways through primary and secondary education and onward to post-secondary study. Malay and English are important languages in the national education context, with bilingual education and religious education forming part of the system. Students may follow Brunei-Cambridge examination pathways, including Brunei-Cambridge GCE O-Level and A-Level routes, depending on school and programme. Confirm current subject syllabuses and examination arrangements with the Ministry and Department of Examinations.",
  seoTopics:["Brunei SPN21 education system","Brunei primary curriculum","Brunei secondary curriculum","Brunei Cambridge GCE O Level","Brunei Cambridge A Level","Brunei bilingual education Malay English","Brunei examination department"],
  seoFaqs:[
   {question:"What is SPN21 in Brunei?",answer:"SPN21 is Brunei Darussalam's national education system framework, setting out education pathways and curriculum direction."},
   {question:"Which examinations are offered in Brunei?",answer:"Brunei-Cambridge GCE O-Level and A-Level routes are among the established qualifications. Check the Department of Examinations for current syllabuses and candidate notices."},
   {question:"What languages are used in Brunei schools?",answer:"Malay and English are both important in the education system. The language arrangement depends on subject, level and school policy."}
  ]
 },
 "kazakhstan":{
  seoHeading:"Kazakhstan Education System, National Curriculum & UNT University Entrance Test",
  seoTitle:"Kazakhstan Curriculum, School Education, UNT & Learning Resources | CBE Nexus",
  seoDescription:"Explore Kazakhstan's school education system, national curriculum, language pathways, final school assessment and Unified National Testing (UNT).",
  seoIntro:"Kazakhstan's education system includes primary, basic secondary and general secondary education, alongside technical and vocational pathways. The Ministry of Education oversees school education and national policy, while curriculum and assessment arrangements are subject to national standards and periodic reform. The Unified National Testing (UNT) is used in the higher-education admission process, with current rules and subject combinations published by the responsible authorities. Kazakh and Russian are widely used in education, and some schools offer instruction in other languages.",
  seoTopics:["Kazakhstan national curriculum","Kazakhstan primary education","Kazakhstan basic secondary education","Kazakhstan general secondary school","Kazakhstan Unified National Testing UNT","Kazakhstan school final assessment","Kazakhstan Kazakh and Russian language education"],
  seoFaqs:[
   {question:"What is the UNT in Kazakhstan?",answer:"The Unified National Testing is a key component of the higher-education admission process. Applicants should check current official rules, test dates and subject combinations."},
   {question:"What are the main stages of school education in Kazakhstan?",answer:"School education is commonly described through primary, basic secondary and general secondary stages, with technical and vocational routes also available."},
   {question:"Which languages are used in Kazakhstan schools?",answer:"Kazakh and Russian are widely used as languages of instruction; provision varies by school and region."}
  ]
 },
 "kyrgyzstan":{
  seoHeading:"Kyrgyzstan Education System, National Curriculum & ORT Admissions Test",
  seoTitle:"Kyrgyzstan Curriculum, School Exams, ORT & Learning Resources | CBE Nexus",
  seoDescription:"Explore Kyrgyzstan's school education, curriculum, state examinations, language pathways and the national university admissions test.",
  seoIntro:"Kyrgyzstan's education system includes primary, basic general and secondary general education, as well as vocational and specialised pathways. The Ministry of Education and Science is responsible for national education policy and curriculum direction. The nationwide General Republican Testing (ORT) is used in the higher-education admissions process. Kyrgyz and Russian are important languages in education, while other language-medium schools may also operate. Grade-level requirements and assessment rules should be checked against current ministry and testing-centre information.",
  seoTopics:["Kyrgyzstan national curriculum","Kyrgyzstan primary school education","Kyrgyzstan basic general education","Kyrgyzstan secondary school curriculum","Kyrgyzstan ORT General Republican Testing","Kyrgyzstan state examinations","Kyrgyz and Russian language schools"],
  seoFaqs:[
   {question:"What is the ORT in Kyrgyzstan?",answer:"The General Republican Testing (ORT) is a nationwide test used in the university admission process. Check the current testing centre guidance for registration and subject requirements."},
   {question:"What are the main school education levels in Kyrgyzstan?",answer:"The general pathway includes primary, basic general and secondary general education, alongside vocational and specialised options."},
   {question:"Which languages are used in Kyrgyzstan schools?",answer:"Kyrgyz and Russian are important languages of instruction; the language available depends on the school and locality."}
  ]
 },
 "tajikistan":{
  seoHeading:"Tajikistan Education System, National Curriculum & School Assessments",
  seoTitle:"Tajikistan Curriculum, School Education & Learning Resources | CBE Nexus",
  seoDescription:"Explore Tajikistan's school education structure, national curriculum, language of instruction and centralised university admission testing.",
  seoIntro:"Tajikistan's education system includes primary, basic general and secondary general education, with vocational and higher education pathways. The Ministry of Education and Science sets national education policy and curriculum frameworks. Centralised entrance examinations are used for admission to many higher-education programmes; the National Testing Centre publishes current registration, subject and placement information. Tajik is the state language and principal language of instruction in many schools, while Russian and other languages are also used in some settings.",
  seoTopics:["Tajikistan national curriculum","Tajikistan primary education","Tajikistan basic general education","Tajikistan secondary school subjects","Tajikistan centralised entrance examinations","Tajikistan National Testing Centre","Tajikistan Tajik and Russian language education"],
  seoFaqs:[
   {question:"How are students admitted to universities in Tajikistan?",answer:"Centralised entrance testing is used for admission to many higher-education programmes. Consult the National Testing Centre for current procedures and programme-specific requirements."},
   {question:"What are the main stages of school education in Tajikistan?",answer:"The general school pathway includes primary, basic general and secondary general education, alongside vocational options."},
   {question:"What is the main language of instruction in Tajikistan?",answer:"Tajik is the state language and is widely used in schools; Russian and other languages may be used depending on the institution."}
  ]
 },
 "turkmenistan":{
  seoHeading:"Turkmenistan Education System, State Standards & School Curriculum",
  seoTitle:"Turkmenistan School Curriculum, Education Standards & Learning Resources | CBE Nexus",
  seoDescription:"Explore Turkmenistan's school education system, state education standards, curriculum areas and learning resources.",
  seoIntro:"Turkmenistan's education system is governed by national education legislation and state education standards. The Ministry of Education is responsible for implementing education policy and ensuring that approved standards are applied by educational institutions. School pathways include general education and specialised or vocational routes. Turkmen is the principal language of instruction in state schools, while foreign-language learning is also part of education. Public details on examination structures and annual requirements can be limited or change; use current ministry and government notices rather than relying on outdated exam descriptions.",
  seoTopics:["Turkmenistan state education standards","Turkmenistan school curriculum","Turkmenistan primary education","Turkmenistan secondary education","Turkmenistan language of instruction","Turkmenistan education ministry","Turkmenistan school learning resources"],
  seoFaqs:[
   {question:"Who oversees education in Turkmenistan?",answer:"The Ministry of Education is responsible for implementing national education policy and state education standards."},
   {question:"What language is used in Turkmenistan schools?",answer:"Turkmen is the principal language of instruction in state schools; foreign languages are also taught."},
   {question:"Where can I check current school requirements in Turkmenistan?",answer:"Use current Ministry of Education and government notices because curriculum and assessment details may be updated."}
  ]
 },
 "uzbekistan":{
  seoHeading:"Uzbekistan Education System, National Curriculum & State Examinations",
  seoTitle:"Uzbekistan Curriculum, School Education, Attestation & Learning Resources | CBE Nexus",
  seoDescription:"Explore Uzbekistan's school education pathways, national curriculum, state attestation and higher education entrance arrangements.",
  seoIntro:"Uzbekistan's education system includes general secondary education and specialised academic or vocational pathways, with policy and curriculum responsibilities distributed among national education authorities. Reforms have updated school curricula, assessment and vocational pathways over time. Uzbek is the principal language of instruction in many schools, while Russian and other languages are used in some institutions. School-leaving certification and higher-education admission arrangements can change, so learners should consult current ministry and Knowledge and Skills Assessment Agency announcements for the relevant academic year.",
  seoTopics:["Uzbekistan national curriculum","Uzbekistan general secondary education","Uzbekistan school subjects","Uzbekistan state attestation examinations","Uzbekistan university entrance tests","Uzbekistan education reforms","Uzbek and Russian language schools"],
  seoFaqs:[
   {question:"What is the structure of school education in Uzbekistan?",answer:"Uzbekistan provides general secondary education and specialised academic and vocational pathways. Check current national policy for the applicable grade structure and routes."},
   {question:"How do students enter universities in Uzbekistan?",answer:"Admission procedures and tests are announced by the responsible national authorities for each admissions cycle; subject combinations and dates should be verified annually."},
   {question:"Which languages are used in Uzbekistan schools?",answer:"Uzbek is widely used, with Russian and other language-medium schools also available in some locations."}
  ]
 },
 "iran":{
  seoHeading:"Iran Education System, National Curriculum & Konkur University Entrance Exam",
  seoTitle:"Iran Education System, Curriculum, Konkur & School Learning Resources | CBE Nexus",
  seoDescription:"Explore Iran's school education structure, national curriculum, final secondary examinations and university entrance pathways.",
  seoIntro:"Iran's formal school system generally includes six years of primary education, three years of lower secondary education and three years of upper secondary education. The Ministry of Education oversees school curricula and national education policy. Upper-secondary pathways include academic and technical or vocational fields. The national university entrance examination, commonly called Konkur, has undergone policy changes, including changes to the role of school-record results; applicants must check current annual rules from the National Organization of Educational Testing. Persian is the principal language of instruction, with recognised minority-language provisions and language subjects in the curriculum.",
  seoTopics:["Iran national school curriculum","Iran primary education","Iran lower secondary education","Iran upper secondary academic tracks","Iran technical vocational education","Iran Konkur university entrance exam","Iran final secondary examinations"],
  seoFaqs:[
   {question:"How is school education structured in Iran?",answer:"The general structure includes six years of primary, three years of lower secondary and three years of upper secondary education."},
   {question:"What is the Konkur in Iran?",answer:"Konkur is the commonly used name for the national university entrance examination. Its weighting and admissions rules have changed, so applicants should check the current annual regulations."},
   {question:"What is the main language of instruction in Iran?",answer:"Persian is the principal language of instruction in the national school system."}
  ]
 }
};
Object.keys(profiles).forEach(slug=>{if(d[slug])Object.assign(d[slug],profiles[slug]);});
window.CBE_COUNTRY_SEO_71_80=true;
})();