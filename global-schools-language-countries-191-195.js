/* Alphabetical country teaching-language profiles: final registry entries 191–195. */
(function(){
"use strict";
const d=window.CBE_GLOBAL_COUNTRY_DATA;if(!d)return;
const profiles={
 "venezuela":{
  instructionLanguages:"Spanish is the principal language of instruction in the national education system. The Constitution and education law recognise Indigenous languages for use by Indigenous peoples and support intercultural bilingual education that reflects their languages, cultures and communities. Actual provision of Indigenous-language teaching varies by region and school.",
  officialSources:[
   {name:"UNESCO Global Education Monitoring — Venezuela education profile",url:"https://gem-report-education-profiles.unesco.org/node/578.html",body:"Explains Spanish as the official language and Indigenous-language rights, including intercultural bilingual education."},
   {name:"UNESCO Observatory on the Right to Education — Venezuela",url:"https://www.unesco.org/es/right-education/observatory/list",body:"Lists Venezuela's Organic Law on Education and constitutional instruments."},
   {name:"Venezuela Ministry of People's Power for Education",url:"https://www.me.gob.ve/",body:"National education authority; consult current ministry publications for curriculum and language policy."}
  ],verifiedAt:"2026-11-17"
 },
 "vietnam":{
  instructionLanguages:"Vietnamese is the official language used in schools and other educational institutions. The Education Law provides for ethnic-minority learners to study their spoken and written languages under government regulations. Approved schools may teach selected subjects or programmes in a foreign language under national rules; this does not replace Vietnamese as the statutory default.",
  officialSources:[
   {name:"Vietnam Education Law — Article 7, Languages used in schools",url:"https://www.uil.unesco.org/sites/default/files/medias/fichiers/2023/06/viet-nam-education-law-2005.pdf",body:"States that Vietnamese is the official language in schools and provides for ethnic-minority language learning."},
   {name:"Vietnam Ministry of Education and Training",url:"https://moet.gov.vn/",body:"Official national authority for curriculum, school policy and education regulations."},
   {name:"Decree 222/2025/ND-CP — Teaching and learning in foreign languages",url:"https://thuvienphapluat.vn/van-ban/EN/Giao-duc/Decree-222-2025-ND-CP-learning-in-foreign-languages-in-educational-institutions/687951/tieng-anh.aspx",body:"Sets requirements for approved foreign-language teaching in educational institutions."}
  ],verifiedAt:"2026-11-17"
 },
 "yemen":{
  instructionLanguages:"Arabic is the language of instruction in public schools from primary through secondary education. English is taught as a second language from primary school onwards. Yemen's linguistic diversity includes Mehri, Soqotri and other languages, but public-school teaching remains predominantly Arabic; private and community institutions may have different arrangements.",
  officialSources:[
   {name:"UNESCO Global Education Monitoring — Yemen education profile",url:"https://gem-report-education-profiles.unesco.org/node/407.html",body:"States that Arabic is the language of instruction in public schools and English is taught from primary level."},
   {name:"Yemen Ministry of Education",url:"https://moe-ye.net/",body:"National education authority; current access and policy publication may be affected by conflict."},
   {name:"UNICEF Yemen — Education",url:"https://www.unicef.org/yemen/education",body:"Country education context, including access and learning disruption."}
  ],verifiedAt:"2026-11-17"
 },
 "zambia":{
  instructionLanguages:"The Zambia Education Curriculum Framework provides for a familiar local language in Grades 1–4, with English as the language of instruction from Grade 5 upwards. Seven widely used regional languages—Bemba, Nyanja, Tonga, Lozi, Lunda, Luvale and Kaonde—are used for initial literacy and early-grade teaching according to the language zone. Sign language is also recognised for learners who use it.",
  officialSources:[
   {name:"Zambia Education Act No. 23 of 2011 — Sections 98–99",url:"https://www.parliament.gov.zm/",body:"Provides for English as the general instructional language, ministerial approval of local languages for initial literacy, and sign language."},
   {name:"Zambia Ministry of Education",url:"https://www.edu.gov.zm/",body:"Official national authority for curriculum and education policy."},
   {name:"UN Committee on the Elimination of Racial Discrimination — Zambia report",url:"https://digitallibrary.un.org/record/4085070/files/CERD_C_ZMB_20-26-EN.pdf",body:"Government report summarises seven local languages used for early-grade instruction and the transition to English from Grade 5."}
  ],verifiedAt:"2026-11-17"
 },
 "zimbabwe":{
  instructionLanguages:"Zimbabwe recognises 16 official languages. The Education Act allows a learner's officially recognised language to be used as the medium of instruction in early primary grades in areas where it is commonly spoken; English is generally the medium from Grade 4 onwards. Shona, Ndebele and other indigenous languages are taught and used according to local language communities and school provision. Sign language is also recognised.",
  officialSources:[
   {name:"Zimbabwe Ministry of Primary and Secondary Education",url:"https://www.mopse.gov.zw/",body:"Official national authority for school curriculum, language policy and examinations."},
   {name:"Zimbabwe Education Act",url:"https://www.veritaszim.net/node/318",body:"Legal provisions on languages used in schools and instruction in recognised languages."},
   {name:"UNESCO — Zimbabwe multilingual education profile",url:"https://whc.unesco.org/en/377/?page=reports&participant=7462",body:"Reports on multilingual education and the use of indigenous languages through Grade 3, with English generally from Grade 4."}
  ],verifiedAt:"2026-11-17"
 }
};
Object.keys(profiles).forEach(slug=>{
 const existing=d[slug]||{};
 d[slug]=Object.assign({},existing,profiles[slug]);
});
})();