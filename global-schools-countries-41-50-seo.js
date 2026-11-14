/* CBE Nexus country-specific SEO enrichment for countries 41–50.
 * Country profiles augment existing country records; they do not replace official data.
 * Examination names and arrangements can change: confirm with the national authority.
 */
(function(){
"use strict";
const d=window.CBE_GLOBAL_COUNTRY_DATA;if(!d)return;
const profiles={
 "algeria":{
  seoHeading:"Algeria Education System, BEM & Baccalauréat",
  seoTitle:"Algeria Education System, BEM, Baccalauréat & Curriculum Resources | CBE Nexus",
  seoDescription:"Explore Algeria's Arabic- and Tamazight-language education context, primary and middle-school pathways, BEM, Baccalauréat and learning resources.",
  seoIntro:"Algeria's school system includes primary education, middle education and secondary education, alongside technical and vocational pathways. The Brevet d'Enseignement Moyen (BEM) is a key assessment at the end of middle school, followed by the Baccalauréat at the end of secondary education. Arabic is the principal language of instruction in public schools; Tamazight is also part of the national education and language context, and French is widely studied. Check the Ministry of National Education for current programmes, examination rules and dates.",
  seoTopics:["Algeria national curriculum","programme scolaire Algérie","BEM examination Algeria","Baccalauréat Algérie","Algeria middle school resources","Arabic and Tamazight learning resources"],
  seoFaqs:[
   {question:"What is the BEM in Algeria?",answer:"The Brevet d'Enseignement Moyen is the national examination associated with completion of middle education and progression to secondary pathways. Confirm current candidate rules with the education authorities."},
   {question:"What examination completes secondary education in Algeria?",answer:"The Baccalauréat is the principal secondary-school leaving examination and a key route to higher education."},
   {question:"Which languages are used in Algerian schools?",answer:"Arabic is the principal language of public-school instruction. Tamazight has national-language status and French is widely taught; school provision should be checked locally."}
  ]
 },
 "egypt":{
  seoHeading:"Egypt Education System, Preparatory Certificate & Thanaweya Amma",
  seoTitle:"Egypt Education System, Thanaweya Amma, Curriculum & Exam Resources | CBE Nexus",
  seoDescription:"Find Egypt school curriculum guidance, preparatory certificate information, Thanaweya Amma pathways, technical education and Arabic learning resources.",
  seoIntro:"Egypt's school pathway includes primary, preparatory and secondary education, with general, technical and Al-Azhar routes. The Preparatory School Certificate marks the end of the preparatory stage, while the General Secondary Education Certificate (Thanaweya Amma) is a major upper-secondary qualification and route to higher education. Arabic is the main language of instruction in the national system, with foreign-language study and different school pathways. Consult the Ministry of Education and Technical Education for current curriculum, assessment and admission guidance.",
  seoTopics:["Egypt national curriculum","Egypt preparatory school certificate","Thanaweya Amma examination","Egypt technical secondary education","Egypt school subjects and syllabuses","Arabic medium learning resources"],
  seoFaqs:[
   {question:"What is Thanaweya Amma in Egypt?",answer:"Thanaweya Amma is the General Secondary Education Certificate associated with completion of the general secondary pathway. Current assessment routes and admission rules should be confirmed with the Ministry."},
   {question:"What certificate follows preparatory education?",answer:"Learners complete the preparatory stage and sit the Preparatory School Certificate examinations under the arrangements set by the relevant education directorate."},
   {question:"Where can teachers find Egypt's curriculum?",answer:"Use the Ministry of Education and Technical Education's official curriculum and assessment publications, checking the grade and academic year."}
  ]
 },
 "libya":{
  seoHeading:"Libya Education System, Secondary Education Certificate & Curriculum",
  seoTitle:"Libya Education System, Secondary Certificate & Curriculum Resources | CBE Nexus",
  seoDescription:"Explore Libya's school structure, national secondary education certificate, curriculum subjects, Arabic-language learning and examination guidance.",
  seoIntro:"Libya's formal education pathway includes basic education followed by secondary education, with scientific, literary, technical and vocational options. The Secondary Education Certificate is an important school-leaving qualification. Arabic is the principal language of instruction, and English is commonly studied as a foreign language. Education administration and examination arrangements may be affected by regional circumstances; verify the current syllabus, registration process and examination timetable with the responsible national or local education authority.",
  seoTopics:["Libya education system","Libyan national curriculum","Libya Secondary Education Certificate","Libya secondary school examinations","Libya science and literary streams","Arabic learning resources Libya"],
  seoFaqs:[
   {question:"What is the main secondary school qualification in Libya?",answer:"The Secondary Education Certificate is the key qualification awarded after the secondary education examination. Confirm the current examination structure with the responsible education authority."},
   {question:"Which subjects are studied in Libyan secondary schools?",answer:"Subject combinations depend on the grade and academic stream and may include Arabic, English, mathematics, sciences and humanities. Use the current official syllabus for exact requirements."},
   {question:"Where should candidates check examination dates?",answer:"Candidates should consult current announcements from the competent education ministry and examination offices in their area."}
  ]
 },
 "morocco":{
  seoHeading:"Morocco Education System, Regional Exams & Baccalauréat",
  seoTitle:"Morocco Curriculum, Regional Examination & Baccalauréat Resources | CBE Nexus",
  seoDescription:"Discover Morocco's school system, regional and national Baccalauréat examinations, collège assessment, curriculum and Arabic, Amazigh and French learning resources.",
  seoIntro:"Morocco's school pathway includes primary, lower-secondary collège and upper-secondary lycée, as well as vocational routes. Assessment includes the end-of-collège examination and a Baccalauréat process combining regional and national examinations with continuous assessment under current regulations. Arabic and Amazigh are official languages; French is also widely used in education, particularly in some secondary and higher-education contexts. Consult the Ministry of National Education and regional academies for current programmes and examination notices.",
  seoTopics:["Morocco national curriculum","programme scolaire Maroc","Morocco collège examination","regional Baccalauréat Morocco","national Baccalauréat examination","Arabic Amazigh French education resources"],
  seoFaqs:[
   {question:"How is the Baccalauréat assessed in Morocco?",answer:"The Baccalauréat pathway includes regional and national examinations and continuous assessment. Weightings and subject arrangements are set by current regulations, so check the Ministry's latest notices."},
   {question:"What examination follows lower-secondary education?",answer:"Learners complete collège and take the relevant end-of-cycle assessment under the national examination framework before progressing to upper-secondary pathways."},
   {question:"Which languages are important in Moroccan education?",answer:"Arabic and Amazigh are official languages. French is also widely taught and used in parts of the education system; language of instruction varies by programme and school."}
  ]
 },
 "tunisia":{
  seoHeading:"Tunisia Education System, Ninth-Year Examination & Baccalauréat",
  seoTitle:"Tunisia Curriculum, Ninth-Year Examination & Baccalauréat | CBE Nexus",
  seoDescription:"Explore Tunisia's basic and secondary education, end-of-basic education examination, Baccalauréat streams, curriculum and Arabic- and French-language resources.",
  seoIntro:"Tunisia's education pathway includes basic education followed by general, technical and vocational secondary routes. The end-of-basic education examination (concours d'accès aux collèges pilotes is a separate selective route) and the national Baccalauréat are important assessment milestones; the Baccalauréat is taken at the end of secondary studies. Arabic is the main language in much of basic schooling, while French is an important language of instruction in several scientific and technical subjects at later stages. Confirm current examination names, eligibility and dates with the Ministry of Education.",
  seoTopics:["Tunisia education system","programme scolaire Tunisie","Tunisia ninth year basic education examination","Tunisian Baccalauréat","Tunisia secondary school curriculum","Arabic and French study resources"],
  seoFaqs:[
   {question:"What is the Baccalauréat in Tunisia?",answer:"It is the national examination and qualification at the end of secondary education, with different subject sections or streams. Check the current Ministry guidance for candidate requirements."},
   {question:"How is basic education organised in Tunisia?",answer:"Basic education is followed by secondary education, with academic, technical and vocational pathways. Consult current Ministry documents for cycle lengths and progression rules."},
   {question:"Which languages are used in Tunisian schools?",answer:"Arabic is central to basic education, while French is widely taught and used in many scientific and technical subjects. Language use varies by level and subject."}
  ]
 },
 "sudan":{
  seoHeading:"Sudan Education System, Basic Education & Sudan School Certificate",
  seoTitle:"Sudan Curriculum, School Certificate & Education Resources | CBE Nexus",
  seoDescription:"Find Sudan education-system guidance, basic and secondary curriculum topics, Sudan School Certificate information and Arabic-language learning resources.",
  seoIntro:"Sudan's education pathway has traditionally included basic education followed by secondary education, with academic and technical or vocational options. The Sudan School Certificate examination is the principal secondary-school leaving qualification. Arabic is widely used in public education, alongside English and other languages in particular contexts. Conflict and displacement have disrupted schooling and examination access in parts of the country; dates, centres, curriculum coverage and candidate arrangements must therefore be checked against the latest notices from the competent education authorities.",
  seoTopics:["Sudan education system","Sudan national curriculum","Sudan School Certificate examination","Sudan secondary school subjects","Sudan basic education resources","Arabic language learning resources Sudan"],
  seoFaqs:[
   {question:"What is the Sudan School Certificate?",answer:"It is the national secondary-school leaving examination and qualification. Candidates should confirm current examination arrangements, registration and approved centres with the responsible authorities."},
   {question:"Is schooling and examination access the same throughout Sudan?",answer:"No. Conflict and displacement have affected education differently across regions. Families and candidates should verify current local school access and examination arrangements."},
   {question:"Where can teachers find Sudan curriculum information?",answer:"Consult the current publications and announcements of the competent federal or state education authorities, and verify the applicable academic year and syllabus."}
  ]
 },
 "south-sudan":{
  seoHeading:"South Sudan Education System, National Curriculum & Secondary Certificate",
  seoTitle:"South Sudan Curriculum, National Exams & School Resources | CBE Nexus",
  seoDescription:"Explore South Sudan's national curriculum, primary and secondary subjects, school assessment, secondary certificate pathways and English-language learning resources.",
  seoIntro:"South Sudan's education framework includes early childhood, primary and secondary education, alongside alternative education pathways. The National Curriculum Development Centre publishes curriculum frameworks and subject guidance for education levels including primary and secondary. English is the official language of instruction in the national curriculum, although local language and implementation contexts may vary. Secondary leaving examination arrangements and certification should be checked against current Ministry and examination authority notices.",
  seoTopics:["South Sudan national curriculum","South Sudan NCDC syllabus","South Sudan primary education subjects","South Sudan secondary school curriculum","South Sudan school examinations","English language learning resources"],
  seoFaqs:[
   {question:"Where can I find the South Sudan national curriculum?",answer:"The National Curriculum Development Centre provides curriculum frameworks and subject guidance for levels including primary and secondary education."},
   {question:"Which subjects are included in the primary curriculum?",answer:"Published curriculum areas include English, mathematics, science, social studies and religious education. Refer to the NCDC framework for the relevant level and detailed learning outcomes."},
   {question:"What language is used in South Sudan's national curriculum?",answer:"English is the official language of instruction in the national curriculum. Local implementation and language support may vary by school and community."}
  ]
 },
 "somalia":{
  seoHeading:"Somalia Education System, National Curriculum & Secondary Leaving Examination",
  seoTitle:"Somalia Curriculum, Secondary Leaving Examination & School Resources | CBE Nexus",
  seoDescription:"Discover Somalia's 4-4-4 school structure, national curriculum, secondary school leaving examination and Somali-, Arabic- and English-language resources.",
  seoIntro:"Somalia's formal education system commonly follows a 4-4-4 structure of primary, intermediate and secondary schooling, although provision and administration vary across federal member states and Somaliland. The national secondary school leaving examination leads to the Shahaadada Dugsiga Sare; Somaliland has its own secondary leaving certificate arrangements. Somali, Arabic and English are used across education settings, with language and curriculum implementation varying by jurisdiction. Check the relevant federal, state or Somaliland education authority for current syllabuses and examinations.",
  seoTopics:["Somalia national curriculum","Somalia 4-4-4 education system","Somalia secondary school leaving examination","Shahaadada Dugsiga Sare","Somaliland secondary certificate","Somali Arabic English learning resources"],
  seoFaqs:[
   {question:"What is the secondary school leaving certificate in Somalia?",answer:"The Shahaadada Dugsiga Sare is awarded following the external secondary-school leaving examination. Somaliland operates separate certificate arrangements; candidates should check their jurisdiction's authority."},
   {question:"How is schooling structured in Somalia?",answer:"A commonly described structure is four years each of primary, intermediate and secondary education. Implementation and school provision differ across regions and authorities."},
   {question:"Which languages are used in Somali schools?",answer:"Somali, Arabic and English are used in different school systems and programmes. The actual medium of instruction should be confirmed with the school or local authority."}
  ]
 },
 "eritrea":{
  seoHeading:"Eritrea Education System, Grade 8 National Exam & ESECE",
  seoTitle:"Eritrea Curriculum, National Examinations & ESECE Resources | CBE Nexus",
  seoDescription:"Explore Eritrea's school structure, Grade 8 national examination, Eritrean Secondary Education Certificate Examination and multilingual learning resources.",
  seoIntro:"Eritrea's education system includes elementary, middle and secondary levels, with general and technical pathways. National examinations are held at key transition points, including the middle-school stage, while the Eritrean Secondary Education Certificate Examination (ESECE) is taken at the end of senior secondary education. Languages used in schooling include local Eritrean languages and English at different levels. Check the Ministry of Education for current grade structure, examination requirements and curriculum publications.",
  seoTopics:["Eritrea national curriculum","Eritrea Grade 8 national examination","ESECE examination","Eritrean Secondary Education Certificate","Eritrea secondary science subjects","Eritrean language learning resources"],
  seoFaqs:[
   {question:"What is the ESECE in Eritrea?",answer:"The Eritrean Secondary Education Certificate Examination is the national examination at the end of senior secondary education and is important for progression to further study."},
   {question:"Are there national examinations before Grade 12?",answer:"National assessment is also used at earlier transition stages, including the middle-school level. Confirm current arrangements with the Ministry of Education."},
   {question:"Which languages are used in Eritrean education?",answer:"Eritrea uses several local languages in elementary education and English in later stages in many descriptions of the system. Confirm the medium used for the relevant school and grade."}
  ]
 },
 "djibouti":{
  seoHeading:"Djibouti Education System, CFEB, BEF & Baccalauréat",
  seoTitle:"Djibouti Curriculum, CFEB, BEF & Baccalauréat Resources | CBE Nexus",
  seoDescription:"Find Djibouti school-system guidance, CFEB primary certificate, BEF basic education qualification, Baccalauréat pathways and French- and Arabic-language resources.",
  seoIntro:"Djibouti's education system includes primary, middle and secondary education, alongside vocational pathways. The Certificat de Fin d'Études de Base (CFEB) is associated with completion of primary education, while the Brevet d'Enseignement Fondamental (BEF) certifies fundamental education; upper-secondary routes include general, technical and vocational qualifications. French and Arabic are important languages of instruction, with Afar and Somali recognised in the national language context. Consult the Ministry of National Education and Vocational Training for current programmes and examination regulations.",
  seoTopics:["Djibouti national curriculum","programme scolaire Djibouti","CFEB Djibouti","Brevet d'Enseignement Fondamental BEF","Djibouti Baccalauréat","French Arabic Afar Somali education resources"],
  seoFaqs:[
   {question:"What is the CFEB in Djibouti?",answer:"The Certificat de Fin d'Études de Base is the certificate associated with completion of primary education and assessment of foundational learning."},
   {question:"What does the BEF certify?",answer:"The Brevet d'Enseignement Fondamental certifies learning in fundamental education, including language, mathematics and sciences. Current examination rules are set by official regulations."},
   {question:"Which languages are used in Djibouti schools?",answer:"French and Arabic are used in education, and national languages including Afar and Somali are part of the country's language framework. Provision varies by programme."}
  ]
 }
};
Object.keys(profiles).forEach(slug=>{if(d[slug])Object.assign(d[slug],profiles[slug]);});
window.CBE_COUNTRY_SEO_41_50=true;
})();