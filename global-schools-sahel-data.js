/* Official-source country profiles: Benin, Togo, Burkina Faso, Niger, Mali. Calendars/vacancies are live-linked, never guessed. */
(function(){ "use strict"; const d=window.CBE_GLOBAL_COUNTRY_DATA; if(!d)return;
Object.assign(d,{
"benin":{
researchStatus:"Core examination authorities checked against official ministry and Office du Baccalauréat pages. Dates/recruitment vary by session.",
officialLanguages:"French is official and the main language of formal schooling; Fon, Yoruba, Bariba, Dendi, Fulfulde, Aja and other national languages are spoken.",
authority:"Ministry of Nursery and Primary Education (MEMP); Ministry of Secondary, Technical Education and Vocational Training (MESTFP); Direction des Examens et Concours (DEC); Office du Baccalauréat.",
system:"Pre-primary, six-year primary, four-year general lower secondary (collège), three-year upper secondary (lycée), then tertiary education. Technical/vocational pathways include CAP and technical awards.",
termCalendar:"Annual calendars are issued by ministry/interministerial orders and may be revised. Check current MEMP/MESTFP circulars and school notices.",
calendar:"Use the current official school-year calendar; examination dates are published separately.",
qualificationRequirements:"Teacher preparation and appointment are level-specific: primary ENI training and secondary subject-qualified teacher-training pathways. Public recruitment follows ministry/civil-service notices. No single universal teacher-licensing portal confirmed.",
exams:[
{name:"Certificat d'Études Primaires (CEP)",body:"National primary completion examination, supporting transition to lower secondary.",level:"End of primary",url:"https://memp.gouv.bj/"},
{name:"Brevet d'Études du Premier Cycle (BEPC)",body:"National lower-secondary examination at the end of collège, organised through the DEC.",level:"End of lower secondary",url:"https://www.enseignementsecondaire.gouv.bj/les-directions"},
{name:"Baccalauréat de l'Enseignement Secondaire",body:"National school-leaving examination organised by the Office du Baccalauréat for general, technical, technological and professional streams; supports tertiary admission.",level:"End of upper secondary",url:"https://enseignementsuperieur.gouv.bj/directions/show/DIR-YRdw8YgM-F68E21C"},
{name:"CAP and technical/vocational awards",body:"Occupational and technical qualifications within approved vocational pathways.",level:"Technical/vocational",url:"https://www.enseignementsecondaire.gouv.bj/"}
],
schools:[{name:"MEMP",type:"Primary education authority",url:"https://memp.gouv.bj/"},{name:"MESTFP",type:"Secondary and technical education authority",url:"https://www.enseignementsecondaire.gouv.bj/"},{name:"Direction des Examens et Concours",type:"Secondary examination directorate",url:"https://www.enseignementsecondaire.gouv.bj/les-directions"}],
papers:[{name:"MEMP",type:"Official CEP notices and primary education information",url:"https://memp.gouv.bj/"},{name:"MESTFP — DEC",type:"Official examination regulations and notices",url:"https://www.enseignementsecondaire.gouv.bj/les-directions"},{name:"Office du Baccalauréat",type:"Official registration, results and diploma information",url:"https://enseignementsuperieur.gouv.bj/directions/show/DIR-YRdw8YgM-F68E21C"}],
jobs:[{name:"MEMP",type:"Official primary teacher recruitment notices",url:"https://memp.gouv.bj/"},{name:"MESTFP",type:"Official secondary/technical notices",url:"https://www.enseignementsecondaire.gouv.bj/"},{name:"Benin Government",type:"Public-service announcements",url:"https://www.gouv.bj/"}],
teachers:[{name:"MEMP",url:"https://memp.gouv.bj/"},{name:"MESTFP",url:"https://www.enseignementsecondaire.gouv.bj/"}],
further:[{name:"Ministry of Higher Education and Scientific Research",url:"https://enseignementsuperieur.gouv.bj/"},{name:"MESTFP",url:"https://www.enseignementsecondaire.gouv.bj/"}],
sources:[{label:"MEMP — 2026 CEP session notice",url:"https://memp.gouv.bj/communique/message-du-ministre-a-la-veille-du-lancement-du-cep-session-2026-ygwrvd?locale=fr"},{label:"MESTFP — DEC mandate",url:"https://www.enseignementsecondaire.gouv.bj/les-directions"},{label:"Office du Baccalauréat mandate",url:"https://enseignementsuperieur.gouv.bj/directions/show/DIR-YRdw8YgM-F68E21C"}]
},
"togo":{
researchStatus:"Examination names and 2026 sequence checked against Ministry of National Education and official TG Examens portal; dates are session-specific.",
officialLanguages:"French is official and the main formal-school language; Ewe, Kabiyè, Tem and other national languages are spoken.",
authority:"Ministry of National Education; ministry structures for technical education/vocational training; Direction des Examens et Concours and TG Examens portal.",
system:"Preschool, six-year primary, lower and upper secondary, plus technical/vocational pathways. CEPD is primary completion, BEPC lower-secondary, BAC I intermediate upper-secondary and BAC II final Baccalauréat.",
termCalendar:"Annual school/examination calendars are issued by the Ministry and may be revised. Check current circulars.",
calendar:"Consult current Ministry school-year calendar and TG Examens notices.",
qualificationRequirements:"Teacher preparation and recruitment depend on level and pathway. Verify qualifications, competitive examinations and appointment requirements through current Ministry notices; no universal separate teacher-licence portal confirmed.",
exams:[
{name:"Certificat de Fin d'Études du Premier Degré (CEPD)",body:"National examination certifying completion of primary education.",level:"End of primary",url:"https://www.exasco.gouv.tg/"},
{name:"Brevet d'Études du Premier Cycle (BEPC)",body:"National lower-secondary examination at the end of the first secondary cycle.",level:"End of lower secondary",url:"https://www.exasco.gouv.tg/"},
{name:"Baccalauréat première partie (BAC I)",body:"Intermediate national examination in the lycée Baccalauréat pathway; not the final school-leaving qualification.",level:"Upper-secondary intermediate",url:"https://www.exasco.gouv.tg/"},
{name:"Baccalauréat deuxième partie (BAC II)",body:"Final national Baccalauréat examination at the end of general upper secondary; supports tertiary progression.",level:"End of upper secondary",url:"https://www.exasco.gouv.tg/"},
{name:"CAP, BT, BP, CQP and CFA",body:"Technical/vocational certificates and occupational qualifications, distinct from general academic school-leaving examinations.",level:"Technical/vocational",url:"https://education.gouv.tg/"}
],
schools:[{name:"Ministry of National Education",type:"National school education authority",url:"https://education.gouv.tg/"},{name:"TG Examens",type:"Official school examination portal",url:"https://www.exasco.gouv.tg/"}],
papers:[{name:"TG Examens",type:"Official CEPD, BEPC and BAC examination portal",url:"https://www.exasco.gouv.tg/"},{name:"Ministry of National Education",type:"Curriculum and current examination notices",url:"https://education.gouv.tg/"}],
jobs:[{name:"Ministry of National Education",type:"Teacher recruitment and education notices",url:"https://education.gouv.tg/"},{name:"Togo Government",type:"Official government announcements",url:"https://www.republiquetogolaise.com/"}],
teachers:[{name:"Ministry of National Education",url:"https://education.gouv.tg/"}],
further:[{name:"Ministry of Higher Education and Research",url:"https://enseignementsuperieur.gouv.tg/"},{name:"Ministry of National Education",url:"https://education.gouv.tg/"}],
sources:[{label:"Ministry — national examinations 2026",url:"https://education.gouv.tg/examens-nationaux-2026-mama-omorou-sadresse-a-la-communaute-educative/"},{label:"TG Examens",url:"https://www.exasco.gouv.tg/"}]
},
"burkina-faso":{
researchStatus:"2026 exam families and ministries checked against Government Information Service and MEBAPLN; dates are session-specific.",
officialLanguages:"National languages have official status under the current constitutional framework; French and English are working languages. Implementation of language policy is evolving.",
authority:"Ministry of Basic Education, Literacy and Promotion of National Languages (MEBAPLN); ministry responsible for secondary education and technical/vocational training; examination directorates.",
system:"Preschool, primary, post-primary/lower secondary and upper secondary, plus technical/vocational and non-formal education. CEP is primary certificate, BEPC lower-secondary certificate and Baccalauréat upper-secondary school-leaving award.",
termCalendar:"Calendars and timetables are issued by responsible ministries and may be adjusted. Check current ministry/regional authority notices.",
calendar:"Check current MEBAPLN and government notices; do not reuse previous-year dates.",
qualificationRequirements:"Teacher preparation and appointment are level-specific through teacher-training institutions and subject-specific pathways. Public recruitment is announced through official ministry/government channels; verify current diplomas and competitive-entry requirements.",
exams:[
{name:"Certificat d'Études Primaires (CEP)",body:"National primary-cycle certificate under MEBAPLN. The concours d'entrée en sixième is a separate selection/progression process.",level:"End of primary",url:"https://www.education.gov.bf/"},
{name:"Brevet d'Études du Premier Cycle (BEPC)",body:"National lower-secondary examination under the ministry responsible for secondary education.",level:"End of lower secondary",url:"https://gouvernement.gov.bf/"},
{name:"Baccalauréat (BAC)",body:"National upper-secondary school-leaving examination with general and technical streams.",level:"End of upper secondary",url:"https://gouvernement.gov.bf/"},
{name:"BEP and CAP",body:"Technical/vocational awards certifying occupational and practical competencies.",level:"Technical/vocational",url:"https://gouvernement.gov.bf/"},
{name:"CQP, BQP, BPT and BPTS",body:"Professional qualification certificates and technician awards; distinct from general school-leaving examinations.",level:"Professional/vocational",url:"https://gouvernement.gov.bf/"}
],
schools:[{name:"MEBAPLN",type:"Basic education authority",url:"https://www.education.gov.bf/"},{name:"Government of Burkina Faso",type:"Official education and examination announcements",url:"https://gouvernement.gov.bf/"},{name:"SIGEC-CEP",type:"Official MEBAPLN examination-results platform",url:"https://www.educollect.education.gov.bf/"}],
papers:[{name:"MEBAPLN",type:"Official curriculum and CEP information",url:"https://www.education.gov.bf/"},{name:"SIGEC-CEP",type:"Official CEP results and school-examination platform",url:"https://www.educollect.education.gov.bf/"}],
jobs:[{name:"MEBAPLN",type:"Official primary teacher recruitment notices",url:"https://www.education.gov.bf/"},{name:"Government of Burkina Faso",type:"Public-service announcements",url:"https://gouvernement.gov.bf/"}],
teachers:[{name:"MEBAPLN",url:"https://www.education.gov.bf/"},{name:"Government of Burkina Faso",url:"https://gouvernement.gov.bf/"}],
further:[{name:"Ministry responsible for Higher Education",url:"https://www.enseignementsup.gov.bf/"},{name:"Government of Burkina Faso",url:"https://gouvernement.gov.bf/"}],
sources:[{label:"Government — 2026 examinations and professional certifications",url:"https://gouvernement.gov.bf/actualites/education-plus-de-27-milliards-f-cfa-mobilises-pour-lorganisation-des-examens-et-concours-session-2026/"},{label:"MEBAPLN official portal",url:"https://www.education.gov.bf/"},{label:"SIGEC-CEP results portal",url:"https://www.educollect.education.gov.bf/"}]
},
"niger":{
researchStatus:"Official Government of Niger reporting confirms the 2026 CFEPD/CEPE/FA session. BEPC and Baccalauréat are established national secondary examinations; check current Ministry notices for session arrangements.",
officialLanguages:"National languages have official status under the current constitutional framework; French remains a working language. Hausa, Zarma-Songhai, Tamasheq, Fulfulde, Kanuri, Arabic and other languages are spoken.",
authority:"Ministry of National Education, Literacy and Promotion of Languages; secondary education and vocational training authorities; national examination directorates.",
system:"Preschool, primary, collège/lower secondary and lycée/upper secondary, alongside Franco-Arabic, technical and vocational routes. CFEPD/CEPE/FA covers primary completion; BEPC lower-secondary completion; Baccalauréat is the senior-secondary school-leaving examination.",
termCalendar:"Annual calendars are issued by the Ministry; security, regional conditions and administrative decisions may affect implementation.",
calendar:"Use current Ministry calendar and examination notices, not prior-session dates.",
qualificationRequirements:"Teacher preparation includes Écoles normales d'instituteurs and higher teacher-training pathways. Recruitment requirements differ by level and employer. No universal teacher-licensing authority confirmed; verify diplomas and competitions through Ministry/civil-service notices.",
exams:[
{name:"Certificat de Fin d'Études du Premier Degré (CFEPD)",body:"National examination at the end of primary education, certifying completion of the primary cycle.",level:"End of primary",url:"https://info.education.gouv.ne/"},
{name:"CEPE / Franco-Arabic (FA) route",body:"Government's 2026 report uses the combined CFEPD/CEPE/FA designation and identifies Franco-Arabic candidates. Confirm exact stream/certificate details with the Ministry.",level:"Primary completion / Franco-Arabic stream",url:"https://www.gouv.ne/index.php/actualite-des-ministeres/1204-lancement-officiel-du-cfepd-cepe-fa-session-2026"},
{name:"Brevet d'Études du Premier Cycle (BEPC)",body:"National lower-secondary examination at the end of collège.",level:"End of lower secondary",url:"https://info.education.gouv.ne/"},
{name:"Baccalauréat (BAC)",body:"National upper-secondary school-leaving examination used for secondary certification and higher-education selection.",level:"End of upper secondary",url:"https://info.education.gouv.ne/"}
],
schools:[{name:"Ministry of National Education",type:"Official school education authority",url:"https://info.education.gouv.ne/"},{name:"Government of Niger — ministry announcements",type:"Official education/examination notices",url:"https://www.gouv.ne/index.php/actualite-des-ministeres"}],
papers:[{name:"Ministry of National Education",type:"Official curriculum and examination notices; verify past-paper availability",url:"https://info.education.gouv.ne/"},{name:"Government — CFEPD/CEPE/FA notice",type:"Official primary examination session information",url:"https://www.gouv.ne/index.php/actualite-des-ministeres/1204-lancement-officiel-du-cfepd-cepe-fa-session-2026"}],
jobs:[{name:"Ministry of National Education",type:"Official teacher recruitment and ministry notices",url:"https://info.education.gouv.ne/"},{name:"Government of Niger",type:"Official public-service announcements",url:"https://www.gouv.ne/"}],
teachers:[{name:"Ministry of National Education",url:"https://info.education.gouv.ne/"}],
further:[{name:"Government of Niger — higher education and vocational notices",url:"https://www.gouv.ne/"}],
sources:[{label:"Government — CFEPD/CEPE/FA 2026 launch",url:"https://www.gouv.ne/index.php/actualite-des-ministeres/1204-lancement-officiel-du-cfepd-cepe-fa-session-2026"},{label:"Ministry of National Education",url:"https://info.education.gouv.ne/"},{label:"Ministry — 2026/2027 school-year message",url:"https://info.education.gouv.ne/2026/09/30/message-de-madame-la-ministre-de-leducation-nationale-de-lalphabetisation-et-de-la-promotion-des-langues-a-loccasion-de-la-rentree-scolaire-2026-2027/"}]
},
"mali":{
researchStatus:"CNECE and the government administrative portal confirm DEF, Baccalauréat, CAP, BT and IFM pathways. Dates are session-specific.",
officialLanguages:"National languages have official status under the current constitutional framework; French is a working language. Bamanankan, Fula, Songhay, Tamasheq, Soninke, Dogon and other languages are spoken.",
authority:"Ministry of National Education; Centre National des Examens et Concours de l'Éducation (CNECE); technical/vocational and higher-education authorities.",
system:"Preschool, fundamental education, general/technical secondary, teacher-training institutes and higher education. DEF marks fundamental-cycle completion; Baccalauréat is senior-secondary qualification; CAP and BT are technical/professional awards; IFM relates to teacher preparation.",
termCalendar:"The Ministry issues school calendars and examination arrangements; check current Ministry, CNECE and Portail Education notices.",
calendar:"Use current school calendar and CNECE notices; do not carry forward old timetables.",
qualificationRequirements:"Teacher preparation includes Instituts de Formation des Maîtres (IFM) and higher teacher-training pathways. IFM assessments concern teacher preparation, not pupil school-leaving. Public recruitment follows Ministry/civil-service notices; no universal separate teacher-licence portal confirmed.",
exams:[
{name:"Diplôme d'Études Fondamentales (DEF)",body:"National examination marking completion of fundamental education and supporting progression to general secondary, technical or vocational pathways.",level:"End of fundamental education",url:"https://cnece-men-examens.ml/"},
{name:"Baccalauréat national (general and technical)",body:"National senior-secondary school-leaving examination certifying lycée completion and supporting access to higher education.",level:"End of secondary",url:"https://cnece-men-examens.ml/"},
{name:"Certificat d'Aptitude Professionnelle (CAP)",body:"Technical/vocational qualification certifying occupational skills and practical training, not general academic completion.",level:"Technical/vocational",url:"https://cnece-men-examens.ml/"},
{name:"Brevet de Technicien (BT 1 and BT 2)",body:"Technical education qualifications; current specialisms and candidate rules are set by official notices.",level:"Technical/vocational",url:"https://cnece-men-examens.ml/"},
{name:"Institut de Formation des Maîtres (IFM) examinations",body:"Teacher-training admission/professional assessment route, not a pupil school-leaving certificate.",level:"Teacher preparation",url:"https://cnece-men-examens.ml/"}
],
schools:[{name:"Ministry of National Education",type:"National school education authority",url:"https://www.education.gov.ml/"},{name:"CNECE",type:"Official national examination portal",url:"https://cnece-men-examens.ml/"},{name:"Portail Education",type:"Official education and examination portal",url:"https://www.porteduc.ml/"}],
papers:[{name:"CNECE",type:"DEF, Baccalauréat, CAP, BT and IFM examination information",url:"https://cnece-men-examens.ml/"},{name:"Portail Education — examinations",type:"Official calendars, candidate-centre and results services",url:"https://www.porteduc.ml/portail/examen"},{name:"Government — DEF diploma procedure",type:"Official DEF certification information",url:"https://demarchesadministratives.gouv.ml/diplome-attestation-du-diplome-detudes-fondamentales/"}],
jobs:[{name:"Ministry of National Education",type:"Official teacher recruitment and ministry notices",url:"https://www.education.gov.ml/"},{name:"Government of Mali",type:"Public-service announcements",url:"https://www.gouvernement.ml/"}],
teachers:[{name:"Ministry of National Education",url:"https://www.education.gov.ml/"},{name:"CNECE — IFM information",url:"https://cnece-men-examens.ml/"}],
further:[{name:"Government of Mali — higher education and vocational information",url:"https://www.gouvernement.ml/"}],
sources:[{label:"CNECE — national examinations",url:"https://cnece-men-examens.ml/"},{label:"Portail Education — examination calendars/results",url:"https://www.porteduc.ml/portail/examen"},{label:"Government — DEF diploma procedure",url:"https://demarchesadministratives.gouv.ml/diplome-attestation-du-diplome-detudes-fondamentales/"},{label:"Government — Baccalauréat, BT and CAP diploma procedure",url:"https://demarchesadministratives.gouv.ml/diplome-attestation-du-baccalaureat-du-brevet-de-technicien-et-du-certificat-daptitude-professionnelle/"}]
}
});
})();