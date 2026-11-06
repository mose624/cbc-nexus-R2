/* Country profiles: Guinea, Guinea-Bissau and Cabo Verde. Official references and assessment caveats included. */
(function(){ "use strict"; const d=window.CBE_GLOBAL_COUNTRY_DATA; if(!d)return; Object.assign(d,{
"guinea":{
researchStatus:"Core national examination names and certificate procedures checked against Guinea's government service portal; confirm annual dates and candidate rules with DGECS.",
officialLanguages:"French is official and used in formal schooling; Pular, Maninka, Susu and other national languages are widely spoken.",
authority:"Ministry responsible for pre-university education and literacy; Direction Générale des Examens et Contrôles Scolaires (DGECS); authorities responsible for technical/vocational and higher education.",
curriculum:"National programmes are administered by the education ministries and curriculum directorates. Confirm current subject syllabuses and reforms through ministry circulars.",
system:"Pre-primary, primary, lower-secondary collège, upper-secondary lycée, technical/vocational and higher education pathways.",
termCalendar:"School calendars and examination timetables are published through ministry and DGECS notices; check the current session.",
calendar:"Dates are not hard-coded because registration windows and examination timetables change by session.",
qualificationRequirements:"Teacher credentials, equivalencies and recruitment rules depend on level and employer; verify with the responsible ministry.",
exams:[
{name:"Certificat d'Études Élémentaires (CEE) / entry to 7th year",body:"Primary completion and progression examination; confirm current designation and candidate rules with DGECS.",level:"Primary",url:"https://service-public.gov.gn/education/"},
{name:"Brevet d'Études du Premier Cycle (BEPC)",body:"National lower-secondary completion examination. Government service portal provides diploma and transcript procedures.",level:"Lower secondary",url:"https://service-public.gov.gn/education/"},
{name:"Baccalauréat unique (BAC)",body:"National upper-secondary leaving examination and pathway to higher education, subject to programme entry rules.",level:"Upper secondary",url:"https://service-public.gov.gn/education/"},
{name:"Technical and vocational awards",body:"Awards and awarding bodies vary by programme; verify current recognition with the responsible authority.",level:"Technical/vocational",url:"https://service-public.gov.gn/education/"}],
schools:[{name:"Government education services",url:"https://service-public.gov.gn/education/",body:"Education administration and certificate procedures."}],
papers:[{name:"Government certificate and examination services",url:"https://service-public.gov.gn/education/",body:"CEE, BEPC and BAC certificate/transcript procedures; no official past-paper archive verified."}],
jobs:[{name:"Government public-service portal",url:"https://service-public.gov.gn/",body:"Check official public-service notices."}],
teachers:[{name:"Education administration",url:"https://service-public.gov.gn/education/",body:"Check credential and education administration procedures."}],
further:[{name:"Government education services",url:"https://service-public.gov.gn/education/",body:"Official education-related procedures."}],
sources:[{name:"Service Public Guinée — Education",url:"https://service-public.gov.gn/education/"}]
},
"guinea-bissau":{
researchStatus:"Education structure and legal examination requirements checked against the Basic Law on the Education System and UN/UNESCO material. National examination delivery has included interrupted and pilot phases; verify current implementation.",
officialLanguages:"Portuguese is official and used in formal administration; Guinea-Bissau Creole (Kriol) and several national languages are widely spoken.",
authority:"Ministry of National Education, Higher Education and Science (MENESCS) is the national policy authority. Confirm current examination administration and teacher requirements through ministry notices.",
curriculum:"Portuguese-language national programmes are governed by the Basic Law on the Education System and ministry policy. Implementation and assessment capacity vary.",
system:"The 2010 reform describes nine years of basic education (grades 1–9), followed by general or technical-professional secondary education (grades 10–12), then higher education.",
termCalendar:"Academic calendars are issued by the education ministry and may be affected by institutional and resource constraints; confirm with the ministry or school.",
calendar:"The law provides for examinations at the end of basic cycles and the final secondary year, but implementation has varied and recent initiatives have included pilot examinations.",
qualificationRequirements:"Teacher training and appointments are managed through education authorities and training institutions. UNESCO notes there is no separate independent teacher service commission.",
exams:[
{name:"End-of-cycle basic education examinations",body:"The Basic Law provides for national examinations at the end of each basic-education cycle, with successful candidates receiving ministry-issued diplomas. Confirm current delivery.",level:"Basic education",url:"https://guineabissau.un.org/sites/default/files/2022-07/Examen%20National%20Volontaire%20Guinnee%20Bissau%20Version%20Finale%206%20Juin%202022%20fr%20%282%29%20pt-PT.pdf"},
{name:"Final secondary education examination",body:"The legal framework provides for an examination in the final secondary year; recent initiatives have included pilot or experimental phases.",level:"Secondary",url:"https://www.iicba.unesco.org/en/guinea-bissau"},
{name:"Technical-professional qualifications",body:"Technical-professional pathways lead to programme-specific professional qualifications; verify recognition with the ministry.",level:"Technical/vocational",url:"https://www.iicba.unesco.org/en/guinea-bissau"}],
schools:[{name:"Government of Guinea-Bissau",url:"https://gov.gw/",body:"Starting point for current government and education ministry notices; no verified national school directory located."}],
papers:[{name:"UN Voluntary National Review",url:"https://guineabissau.un.org/sites/default/files/2022-07/Examen%20National%20Volontaire%20Guinnee%20Bissau%20Version%20Finale%206%20Juin%202022%20fr%20%282%29%20pt-PT.pdf",body:"Education structure and assessment context, not a past-paper archive."}],
jobs:[{name:"Government portal",url:"https://gov.gw/",body:"Check current official announcements."}],
teachers:[{name:"UNESCO IICBA country brief",url:"https://www.iicba.unesco.org/en/guinea-bissau",body:"Teacher-policy and education-system context."}],
further:[{name:"Basic Law on the Education System",url:"https://www.convencaocidada.gw/assets/tematicas/anexos/19.%20LEI%20BASE%20SISTEMA%20EDUCATIVO%20-%20VERSAO%20DEFINITIVA%20ANP%202010.pdf",body:"Legal framework for education and national examinations."}],
sources:[{name:"UNESCO IICBA — Guinea-Bissau",url:"https://www.iicba.unesco.org/en/guinea-bissau"},{name:"UN Guinea-Bissau review",url:"https://guineabissau.un.org/sites/default/files/2022-07/Examen%20National%20Volontaire%20Guinnee%20Bissau%20Version%20Finale%206%20Juin%202022%20fr%20%282%29%20pt-PT.pdf"}]
},
"cabo-verde":{
researchStatus:"National assessment structure and current 2026/2027 school-year guidance checked against the Ministry of Education, Government and Official Gazette.",
officialLanguages:"Portuguese is the official language and language of formal schooling; Cape Verdean Creole (Kriolu) is widely spoken.",
authority:"Ministry of Education, Professional Training, Higher Education, Science and Innovation; Direção Nacional de Educação (DNE); Official Gazette for binding orders.",
curriculum:"National curriculum extends across grades 1–12. The Ministry publishes textbooks and subject resources online for basic and secondary education.",
system:"Pre-school, basic education through grade 8, secondary education grades 9–12, professional training and higher education.",
termCalendar:"The Ministry publishes annual school-year organisation guidance. The 2026/2027 guidance is available through the official resources portal; school-level dates can vary.",
calendar:"Assessment and examination dates are set by annual ministerial dispatches; use the current-year order.",
qualificationRequirements:"Teacher qualification, recruitment and professional-development requirements are governed by national education and public-service rules; confirm with the Ministry and employer.",
exams:[
{name:"National basic education tests (Provas Nacionais)",body:"National tests include Portuguese, Mathematics and Integrated Sciences in grade 4, and Portuguese and Mathematics in grade 8 under the legal framework.",level:"Basic education",url:"https://www.governo.cv/comunicado-de-imprensa-processo-de-elaboracao-validacao-e-correcao-das-provas-nacionais/"},
{name:"National secondary examinations (Exames Nacionais)",body:"Secondary examinations are scheduled by annual ministry orders. Check the current calendar for subjects, grades, eligibility and dates.",level:"Secondary",url:"https://minedu.gov.cv/"},
{name:"Municipal/cycle-end assessments",body:"The assessment framework also provides for local/cycle-end tests; arrangements are set by current legislation and ministry guidance.",level:"Basic and secondary",url:"https://boe.incv.cv/Bulletins/View?id=86791"}],
schools:[{name:"Ministry of Education",url:"https://minedu.gov.cv/",body:"Official education information, notices and school resources."}],
papers:[{name:"Ministry educational resources",url:"https://minedu.gov.cv/global_search",body:"Official textbooks and learning resources by grade and subject."},{name:"Official Gazette — education order",url:"https://boe.incv.cv/Bulletins/View?id=86791",body:"Published school-year and examination order; use latest annual order."}],
jobs:[{name:"Ministry of Education",url:"https://minedu.gov.cv/",body:"Check official recruitment and announcement notices."}],
teachers:[{name:"Ministry of Education",url:"https://minedu.gov.cv/",body:"Official source for teacher and professional-development notices."}],
further:[{name:"2026/2027 school-year guidance",url:"https://minedu.gov.cv/recursos_educativosorientacoes/16",body:"Current ministry school-year organisation guidance."}],
sources:[{name:"Ministry of Education",url:"https://minedu.gov.cv/"},{name:"Government notice on national examinations",url:"https://www.governo.cv/comunicado-de-imprensa-processo-de-elaboracao-validacao-e-correcao-das-provas-nacionais/"},{name:"Official Gazette",url:"https://boe.incv.cv/Bulletins/View?id=86791"}]
}
}); })();