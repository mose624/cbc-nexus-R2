/* CBE Nexus Global Schools country registry.
 * The registry provides country routing and flags; it does not imply that every country's education data is verified.
 */
(function(){
"use strict";
const rows = "Afghanistan|AF\nAlbania|AL\nAlgeria|DZ\nAndorra|AD\nAngola|AO\nAntigua and Barbuda|AG\nArgentina|AR\nArmenia|AM\nAustralia|AU\nAustria|AT\nAzerbaijan|AZ\nBahamas|BS\nBahrain|BH\nBangladesh|BD\nBarbados|BB\nBelarus|BY\nBelgium|BE\nBelize|BZ\nBenin|BJ\nBhutan|BT\nBolivia|BO\nBosnia and Herzegovina|BA\nBotswana|BW\nBrazil|BR\nBrunei|BN\nBulgaria|BG\nBurkina Faso|BF\nBurundi|BI\nCabo Verde|CV\nCambodia|KH\nCameroon|CM\nCanada|CA\nCentral African Republic|CF\nChad|TD\nChile|CL\nChina|CN\nColombia|CO\nComoros|KM\nRepublic of the Congo|CG\nCosta Rica|CR\nCôte d’Ivoire|CI\nCroatia|HR\nCuba|CU\nCyprus|CY\nCzechia|CZ\nDemocratic Republic of the Congo|CD\nDenmark|DK\nDjibouti|DJ\nDominica|DM\nDominican Republic|DO\nEcuador|EC\nEgypt|EG\nEl Salvador|SV\nEquatorial Guinea|GQ\nEritrea|ER\nEstonia|EE\nEswatini|SZ\nEthiopia|ET\nFiji|FJ\nFinland|FI\nFrance|FR\nGabon|GA\nGambia|GM\nGeorgia|GE\nGermany|DE\nGhana|GH\nGreece|GR\nGrenada|GD\nGuatemala|GT\nGuinea|GN\nGuinea-Bissau|GW\nGuyana|GY\nHaiti|HT\nHoly See|VA\nHonduras|HN\nHungary|HU\nIceland|IS\nIndia|IN\nIndonesia|ID\nIran|IR\nIraq|IQ\nIreland|IE\nIsrael|IL\nItaly|IT\nJamaica|JM\nJapan|JP\nJordan|JO\nKazakhstan|KZ\nKenya|KE\nKiribati|KI\nKosovo|XK\nKuwait|KW\nKyrgyzstan|KG\nLaos|LA\nLatvia|LV\nLebanon|LB\nLesotho|LS\nLiberia|LR\nLibya|LY\nLiechtenstein|LI\nLithuania|LT\nLuxembourg|LU\nMadagascar|MG\nMalawi|MW\nMalaysia|MY\nMaldives|MV\nMali|ML\nMalta|MT\nMarshall Islands|MH\nMauritania|MR\nMauritius|MU\nMexico|MX\nMicronesia|FM\nMoldova|MD\nMonaco|MC\nMongolia|MN\nMontenegro|ME\nMorocco|MA\nMozambique|MZ\nMyanmar|MM\nNamibia|NA\nNauru|NR\nNepal|NP\nNetherlands|NL\nNew Zealand|NZ\nNicaragua|NI\nNiger|NE\nNigeria|NG\nNorth Korea|KP\nNorth Macedonia|MK\nNorway|NO\nOman|OM\nPakistan|PK\nPalau|PW\nPalestine|PS\nPanama|PA\nPapua New Guinea|PG\nParaguay|PY\nPeru|PE\nPhilippines|PH\nPoland|PL\nPortugal|PT\nQatar|QA\nRomania|RO\nRussia|RU\nRwanda|RW\nSaint Kitts and Nevis|KN\nSaint Lucia|LC\nSaint Vincent and the Grenadines|VC\nSamoa|WS\nSan Marino|SM\nSao Tome and Principe|ST\nSaudi Arabia|SA\nSenegal|SN\nSerbia|RS\nSeychelles|SC\nSierra Leone|SL\nSingapore|SG\nSlovakia|SK\nSlovenia|SI\nSolomon Islands|SB\nSomalia|SO\nSouth Africa|ZA\nSouth Korea|KR\nSouth Sudan|SS\nSpain|ES\nSri Lanka|LK\nSudan|SD\nSuriname|SR\nSweden|SE\nSwitzerland|CH\nSyria|SY\nTajikistan|TJ\nTanzania|TZ\nThailand|TH\nTimor-Leste|TL\nTogo|TG\nTonga|TO\nTrinidad and Tobago|TT\nTunisia|TN\nTürkiye|TR\nTurkmenistan|TM\nTuvalu|TV\nUganda|UG\nUkraine|UA\nUnited Arab Emirates|AE\nUnited Kingdom|GB\nUnited States|US\nUruguay|UY\nUzbekistan|UZ\nVanuatu|VU\nVenezuela|VE\nVietnam|VN\nYemen|YE\nZambia|ZM\nZimbabwe|ZW";
function slug(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function flag(code){return code.toUpperCase().replace(/[A-Z]/g,c=>String.fromCodePoint(127397+c.charCodeAt(0)));}
const countryRegistry = rows.split("\n").filter(Boolean).map(line=>{const [name,code]=line.split("|");return {name,code,slug:slug(name),flag:flag(code),url:"/global-schools/"+slug(name)};});
const countryData = {
 "kenya": {
  curriculum:"Kenya Competency-Based Curriculum (CBC/CBE); KICD publishes curriculum designs and approved materials. Some learners remain in the legacy 8-4-4 transition pathway; confirm cohort-specific arrangements with the Ministry.",
  termCalendar:"2026 basic-education calendar reported from the Ministry circular: Term 1 Jan 5–Apr 2; Term 2 Apr 27–Jul 31; Term 3 Aug 24–Oct 23 (some reports differ on closing day). National assessment/exam period follows from late October. Recheck the official Ministry circular and school notice.",
  qualificationRequirements:"Kenya: teachers must meet TSC registration requirements for the relevant teaching category. The exact academic grades and subject grades depend on certificate/diploma/degree route and current TSC regulations. Do not treat one KCSE pass grade as sufficient for every teaching post.",
  officialLanguages:"Swahili and English (official languages)",
  authority:"Ministry of Education; Kenya Institute of Curriculum Development (KICD); Kenya National Examinations Council (KNEC)",
  system:"2-6-3-3 structure: 2 years pre-primary, 6 primary, 3 junior school and 3 senior school; post-school pathways include TVET and higher education.",
  calendar:"School term dates are set through Ministry circulars; confirm the current year's official calendar.",
  exams:[{name:"KPSEA",body:"KNEC · scheduled 26–29 October 2026 (check official timetable)",level:"Grade 6",url:"https://www2.knec.ac.ke/services/examinations/"},{name:"KJSEA",body:"KNEC · scheduled from 26 October into early November 2026 (check official timetable)",level:"Grade 9",url:"https://www2.knec.ac.ke/services/examinations/"},{name:"KCSE",body:"KNEC · scheduled 2–20 November 2026 in the published 2026 calendar report",level:"Legacy secondary cohort",url:"https://www2.knec.ac.ke/services/examinations/"}],
  schools:[{name:"Ministry of Education / NEMIS institution list",type:"Official institution-data source",url:"https://nemis.education.go.ke/Reports/InstitutionList.aspx"},{name:"CBE Nexus Senior Schools Directory",type:"CBE Nexus directory; verify details against Ministry records",url:"/schools-institutions.html"}],
  papers:[{name:"KNEC official site",type:"Official examination body; availability varies by paper and release",url:"https://www.knec.ac.ke/"},{name:"KICD curriculum designs",type:"Official curriculum designs; not past examination papers",url:"https://kicd.ac.ke/cbc-materials/"}],
  jobs:[{name:"Teachers Service Commission (TSC)",type:"Public teacher recruitment",url:"https://teachersonline.tsc.go.ke/"},{name:"International School of Kenya employment",type:"School-published vacancies; check live status",url:"https://www.isk.ac.ke/employment/openings"},{name:"CBE Nexus international teaching jobs",type:"Aggregated listings require employer-side rechecking",url:"/international-teaching-jobs.html"}],
  teachers:[{name:"TSC teacher registration",url:"https://www.tsc.go.ke/"},{name:"TSC Teachers Online",url:"https://teachersonline.tsc.go.ke/"}],
  further:[{name:"Commission for University Education (CUE)",url:"https://www.cue.or.ke/"},{name:"TVET Authority (TVETA)",url:"https://www.tveta.go.ke/"},{name:"Kenya Universities and Colleges Central Placement Service (KUCCPS)",url:"https://www.kuccps.net/"}],
  sources:[{label:"Ministry NEMIS institution list",url:"https://nemis.education.go.ke/Reports/InstitutionList.aspx"},{label:"KICD curriculum materials",url:"https://kicd.ac.ke/cbc-materials/"},{label:"KNEC",url:"https://www.knec.ac.ke/"},{label:"TSC teacher registration and recruitment requirements",url:"https://www.tsc.go.ke/index.php/media-centre/downloads/category/50-qualification-requirements?download=178%3Ateacher-registration-and-recruitment-requirements"},{label:"2026 school calendar report (confirm against Ministry circular)",url:"https://www.standardmedia.co.ke/business/amp/education/article/2001531746/ministry-releases-next-years-calendar-for-schools-and-colleges"}]
 },
 "japan": {
  curriculum:"Japan's national Course of Study is set by MEXT; schools deliver subjects within national standards. International schools may instead offer authorised curricula such as IB, Cambridge or national curricula from another country.",
  termCalendar:"The school year normally runs April to March. Exact term dates and holidays vary by municipality, prefecture and school.",
  qualificationRequirements:"Teacher licensing and employment rules depend on school type and licence category. Public-school teaching commonly requires the relevant Japanese teaching licence; international schools may set separate degree, teacher-certification, experience and language requirements. Confirm with the school and prefectural authority.",
  officialLanguages:"Japanese is the principal language of instruction; official-language status is not asserted here.",
  authority:"Ministry of Education, Culture, Sports, Science and Technology (MEXT)",
  system:"Commonly described as 6 years elementary, 3 years lower secondary and 3 years upper secondary, followed by higher education or vocational pathways. Verify special programme and equivalency details with MEXT.",
  calendar:"Many schools follow an April–March academic year; individual calendars may differ.",
  exams:[{name:"University entrance examinations",body:"Universities and relevant national testing bodies; arrangements vary",level:"Higher education entry",url:"https://www.mext.go.jp/en/"}],
  schools:[{name:"MEXT",type:"Official education authority and school information entry point",url:"https://www.mext.go.jp/en/"},{name:"Japan school information",type:"School-specific details require checking with the institution or local board",url:"https://www.mext.go.jp/en/"}],
  papers:[{name:"MEXT",type:"Official education policy and materials; a comprehensive official past-paper archive was not confirmed",url:"https://www.mext.go.jp/en/"}],
  jobs:[{name:"MEXT",type:"Official education authority; not a live nationwide teaching-vacancy board",url:"https://www.mext.go.jp/en/"},{name:"CBE Nexus international teaching jobs",type:"Aggregated listings must be verified with the employer",url:"/international-teaching-jobs.html"}],
  teachers:[{name:"MEXT",url:"https://www.mext.go.jp/en/"}],
  further:[{name:"Study in Japan / official study information",url:"https://www.studyinjapan.go.jp/en/"}],
  sources:[{label:"MEXT (English)",url:"https://www.mext.go.jp/en/"},{label:"Study in Japan",url:"https://www.studyinjapan.go.jp/en/"}]
 },
 "united-states": {
  curriculum:"No single national K–12 curriculum. State standards and district/local curricula predominate; schools may also offer IB, AP, Cambridge or other programmes.",
  termCalendar:"No single national term calendar. School years commonly begin in August or September and finish in May or June, but dates are set by states, districts and schools.",
  qualificationRequirements:"Public-school teacher licensure is state-specific. Common requirements include a bachelor's degree, approved teacher preparation, background checks and required exams; exact routes vary. Private and international schools may set different requirements.",
  officialLanguages:"English; language policy, services and instruction vary by state and locality. Verify current legal details with federal and state sources.",
  authority:"U.S. Department of Education; state and local education agencies administer many school and assessment functions.",
  system:"Education stages, standards, assessment rules and calendars vary by state, district and school.",
  calendar:"Usually set by state, district or individual school; check the relevant local authority.",
  exams:[{name:"State assessments",body:"State education agencies",level:"Varies by state and grade",url:"https://www.ed.gov/"},{name:"SAT / ACT",body:"Independent testing organizations; admissions use varies",level:"College admissions",url:"https://www.ed.gov/"}],
  schools:[{name:"National Center for Education Statistics (NCES)",type:"Official U.S. education statistics and school search tools",url:"https://nces.ed.gov/"},{name:"U.S. Department of Education",type:"Federal education authority",url:"https://www.ed.gov/"}],
  papers:[{name:"State education agency resources",type:"Assessment sample papers vary by state; no single national past-paper archive",url:"https://www.ed.gov/"}],
  jobs:[{name:"School district career pages",type:"Vacancies are employer- and state-specific; check the hiring district",url:"https://www.ed.gov/"},{name:"CBE Nexus international teaching jobs",type:"Aggregated listings must be verified with the employer",url:"/international-teaching-jobs.html"}],
  teachers:[{name:"State teacher licensure authority",url:"https://www.ed.gov/"}],
  further:[{name:"Federal Student Aid",url:"https://studentaid.gov/"},{name:"U.S. Department of Education",url:"https://www.ed.gov/"}],
  sources:[{label:"U.S. Department of Education",url:"https://www.ed.gov/"},{label:"NCES",url:"https://nces.ed.gov/"}]
 },
 "united-kingdom": {
  curriculum:"Education is devolved: England uses the National Curriculum in relevant schools; Wales, Scotland and Northern Ireland have distinct frameworks. Schools may offer IB, Cambridge or other curricula where authorised.",
  termCalendar:"Term dates vary across England, Scotland, Wales and Northern Ireland, and by local authority/school. Many schools use autumn, spring and summer terms; check the specific school's calendar.",
  qualificationRequirements:"In England, QTS is required for teaching in maintained primary, secondary and special schools, subject to exceptions. Training routes commonly require a bachelor's degree and specified GCSE-equivalent English and maths, plus science for primary routes. Requirements differ in the other UK nations and by school type.",
  officialLanguages:"English is the principal language of instruction across most schools; education policy differs across England, Scotland, Wales and Northern Ireland.",
  authority:"Education is devolved across the UK; use the relevant national department and regulator.",
  system:"School stages, qualifications and exam arrangements differ between England, Scotland, Wales and Northern Ireland.",
  calendar:"Term dates vary by nation, local authority and school.",
  exams:[{name:"GCSE / A level",body:"Approved awarding organisations; rules differ by nation and qualification",level:"Secondary qualifications",url:"https://www.gov.uk/government/organisations/ofqual"},{name:"Scottish Qualifications",body:"Scottish Qualifications Authority / Qualifications Scotland",level:"Scotland",url:"https://www.sqa.org.uk/"}],
  schools:[{name:"Get Information about Schools",type:"Official England school and college information service",url:"https://get-information-schools.service.gov.uk/"},{name:"GOV.UK education",type:"Official UK government entry point; follow the correct nation",url:"https://www.gov.uk/browse/education"}],
  papers:[{name:"Ofqual",type:"Qualification regulator; exam boards publish specimen and past papers subject to their terms",url:"https://www.gov.uk/government/organisations/ofqual"}],
  jobs:[{name:"Teaching Vacancies",type:"Official England school teaching vacancies service",url:"https://teaching-vacancies.service.gov.uk/"},{name:"CBE Nexus international teaching jobs",type:"Aggregated listings must be verified with the employer",url:"/international-teaching-jobs.html"}],
  teachers:[{name:"Teaching Regulation Agency (England)",url:"https://www.gov.uk/government/organisations/teaching-regulation-agency"},{name:"National education departments",url:"https://www.gov.uk/browse/education"}],
  further:[{name:"UCAS",url:"https://www.ucas.com/"},{name:"GOV.UK student finance",url:"https://www.gov.uk/student-finance"}],
  sources:[{label:"GOV.UK education",url:"https://www.gov.uk/browse/education"},{label:"Get Information about Schools",url:"https://get-information-schools.service.gov.uk/"},{label:"Ofqual",url:"https://www.gov.uk/government/organisations/ofqual"}]
 }
 "kosovo": {
  curriculum:"Kosovo's public education system is overseen by the Ministry of Education, Science, Technology and Innovation (MESTI). Curriculum frameworks and school programmes should be checked against current ministry publications; private and international schools may follow additional approved programmes.",
  termCalendar:"School-year and holiday dates are set through official ministry calendars and may be updated. Check the latest MESTI school calendar and the relevant municipality or school notice before relying on dates.",
  qualificationRequirements:"Teacher qualification, licensing, recruitment and recognition requirements are governed by Kosovo's applicable education legislation and ministry rules. Confirm current requirements and any foreign-qualification recognition directly with MESTI or the recruiting institution.",
  officialLanguages:"Albanian and Serbian are official languages at the national level; Turkish, Bosnian and Romani have recognised community-language status in relevant contexts. Confirm local language-of-instruction rules with the municipality and school.",
  authority:"Ministry of Education, Science, Technology and Innovation (MESTI); municipal education directorates also administer local school functions.",
  system:"Compulsory education commonly covers primary and lower-secondary stages, followed by upper-secondary general or vocational pathways. Check current ministry guidance for grade structure, age rules and qualification equivalencies.",
  calendar:"Use the current official MESTI school calendar and confirm local term dates with the relevant municipality or school.",
  exams:[{name:"National assessment and Matura",body:"Ministry and relevant assessment bodies; current arrangements must be checked in official notices",level:"Assessment and upper-secondary completion",url:"https://masht.rks-gov.net/"}],
  schools:[{name:"Ministry of Education, Science, Technology and Innovation (MESTI)",type:"Official national education authority",url:"https://masht.rks-gov.net/"},{name:"Kosovo Agency of Statistics",type:"Official education statistics and publications; school-level details should be confirmed with the institution or municipality",url:"https://ask.rks-gov.net/"}],
  papers:[{name:"MESTI official publications",type:"Check current curriculum, assessment and specimen materials; a complete official past-paper archive was not confirmed",url:"https://masht.rks-gov.net/"}],
  jobs:[{name:"MESTI",type:"Official education authority; not a guaranteed live nationwide vacancy board",url:"https://masht.rks-gov.net/"},{name:"Kosovo public employment services",type:"Check official public recruitment announcements and eligibility conditions",url:"https://aprk.rks-gov.net/"}],
  teachers:[{name:"MESTI",url:"https://masht.rks-gov.net/"},{name:"Kosovo public employment services",url:"https://aprk.rks-gov.net/"}],
  further:[{name:"Accreditation Agency of Kosovo",url:"https://akreditimi.rks-gov.net/"},{name:"University of Prishtina",url:"https://uni-pr.edu/"}],
  sources:[{label:"Ministry of Education, Science, Technology and Innovation (MESTI)",url:"https://masht.rks-gov.net/"},{label:"Kosovo Agency of Statistics",url:"https://ask.rks-gov.net/"},{label:"Accreditation Agency of Kosovo",url:"https://akreditimi.rks-gov.net/"}]
 },
};


/* Africa research batch 1: authority, curriculum and examination links checked against primary-source sites.
 * Dates and vacancies are deliberately not hard-coded unless a current official notice is confirmed.
 */
const africaResearchProfiles = {
 "uganda": {
  researchStatus:"Primary-source links checked for the national authority, curriculum and examinations. Current school calendar, complete school register and teacher-registration details still require separate verification.",
  authority:"Ministry of Education and Sports (MoES); National Curriculum Development Centre (NCDC); Uganda National Examinations Board (UNEB).",
  officialLanguages:"English and Swahili are Uganda's official languages; many local languages are used in communities and early education. Confirm the language of instruction with each school.",
  curriculum:"National curriculum and curriculum materials are published by the National Curriculum Development Centre. Verify the current curriculum version and subject syllabus on the NCDC website.",
  system:"Schooling commonly includes pre-primary, primary, lower-secondary and upper-secondary stages, alongside technical and vocational pathways. Confirm current grade, age and qualification rules with MoES.",
  termCalendar:"Current term dates not yet entered. Check the latest MoES circular and the individual school or district notice before relying on dates.",
  calendar:"Use the current MoES school calendar; term dates may be revised by official circular.",
  exams:[{name:"Uganda National Examinations Board (UNEB)",body:"Official national assessment and examination body. Use its current notices for assessment levels, registration and timetables.",level:"National assessments and examinations",url:"https://uneb.ac.ug/"}],
  schools:[{name:"Ministry of Education and Sports",type:"National education authority; confirm whether a public school register is available through current MoES services",url:"https://www.education.go.ug/"}],
  papers:[{name:"National Curriculum Development Centre (NCDC)",type:"Official curriculum and learning-material source",url:"https://ncdc.go.ug/"},{name:"Uganda National Examinations Board",type:"Official examination notices and assessment guidance",url:"https://uneb.ac.ug/"}],
  jobs:[{name:"Ministry of Education and Sports",type:"Official notices and recruitment information; verify each vacancy with the employer",url:"https://www.education.go.ug/"}],
  teachers:[{name:"Ministry of Education and Sports",type:"Confirm current teacher qualification, registration and licensing requirements directly with the responsible authority",url:"https://www.education.go.ug/"}],
  further:[{name:"National Council for Higher Education (NCHE)",url:"https://unche.or.ug/"}],
  sources:[{label:"Ministry of Education and Sports",url:"https://www.education.go.ug/"},{label:"National Curriculum Development Centre",url:"https://ncdc.go.ug/"},{label:"Uganda National Examinations Board",url:"https://uneb.ac.ug/"},{label:"National Council for Higher Education",url:"https://unche.or.ug/"}]
 },
 "tanzania": {
  researchStatus:"Primary-source links checked for the Ministry, curriculum institute and examination council. Calendar dates, complete school register and teacher registration rules need current notice-level verification.",
  authority:"Ministry of Education, Science and Technology; Tanzania Institute of Education (TIE); National Examinations Council of Tanzania (NECTA). Zanzibar has separate education administration.",
  officialLanguages:"Kiswahili is the national language and English is also widely used in secondary and higher education. Do not label either as the sole constitutional official language without a specific legal source; language of instruction varies by level and institution.",
  curriculum:"Tanzania Institute of Education (TIE) publishes national curricula, syllabi and learning materials. Check the current curriculum and syllabus for the relevant level on TIE's official website.",
  system:"Education pathways include pre-primary, primary, ordinary secondary, advanced secondary, and technical/vocational and higher education. Zanzibar administration and arrangements may differ.",
  termCalendar:"Current term dates not yet entered. Check the latest Ministry circular and the relevant school or regional authority.",
  calendar:"Confirm the current academic calendar through the Ministry of Education, Science and Technology and the relevant local authority; Zanzibar may publish separate notices.",
  exams:[{name:"National Examinations Council of Tanzania (NECTA)",body:"Official national examinations body; current examination formats, registration windows and timetables are published on its website.",level:"National school and teacher examinations",url:"https://www.necta.go.tz/"}],
  schools:[{name:"Ministry of Education, Science and Technology",type:"National ministry; check current official services for school records",url:"https://www.moe.go.tz/en"}],
  papers:[{name:"Tanzania Institute of Education (TIE)",type:"Official curricula, syllabi and teaching/learning materials",url:"https://www.tie.go.tz/"},{name:"NECTA",type:"Official examination formats and timetables",url:"https://www.necta.go.tz/"}],
  jobs:[{name:"Ministry of Education, Science and Technology",type:"Official notices; verify vacancy status and applicant eligibility",url:"https://www.moe.go.tz/en"}],
  teachers:[{name:"Ministry of Education, Science and Technology",type:"Confirm teacher registration and qualifications with the responsible authority; NECTA also provides teacher examination services",url:"https://www.moe.go.tz/en"}],
  further:[{name:"Tanzania Commission for Universities (TCU)",url:"https://www.tcu.go.tz/"}],
  sources:[{label:"Ministry of Education, Science and Technology",url:"https://www.moe.go.tz/en"},{label:"Tanzania Institute of Education",url:"https://www.tie.go.tz/"},{label:"National Examinations Council of Tanzania",url:"https://www.necta.go.tz/"},{label:"Tanzania Commission for Universities",url:"https://www.tcu.go.tz/"}]
 },
 "rwanda": {
  researchStatus:"Primary-source links checked for the Ministry, Rwanda Basic Education Board and national examination/school inspection authority. Current term dates, school register coverage and teacher licensing rules still require direct verification.",
  authority:"Ministry of Education (MINEDUC); Rwanda Basic Education Board (REB); National Examination and School Inspection Authority (NESA).",
  officialLanguages:"Kinyarwanda, English, French and Kiswahili are official languages of Rwanda. Confirm the school's current language of instruction and programme.",
  curriculum:"Rwanda Basic Education Board publishes curriculum, teaching and learning resources. Confirm the current competency-based curriculum and subject materials through REB.",
  system:"The system includes pre-primary, primary, lower-secondary and upper-secondary education, with technical secondary and post-basic pathways. Verify current grade and qualification details with MINEDUC/REB.",
  termCalendar:"Current school calendar dates not yet entered; use the latest MINEDUC/REB notice and school-specific communication.",
  calendar:"Check the current academic calendar published by MINEDUC or REB; do not rely on previous-year dates.",
  exams:[{name:"National Examination and School Inspection Authority (NESA)",body:"Official examination, selection, assessment, certification and school-inspection authority. Consult current notices for timetables and requirements.",level:"National examinations and certification",url:"https://www.nesa.gov.rw/"}],
  schools:[{name:"Rwanda Basic Education Board (REB)",type:"Official basic-education and curriculum authority; school data services are linked from its website",url:"https://www.reb.gov.rw/"},{name:"Ministry of Education (MINEDUC)",type:"National education ministry",url:"https://www.mineduc.gov.rw/"}],
  papers:[{name:"Rwanda Basic Education Board",type:"Official curriculum and teaching/learning materials",url:"https://www.reb.gov.rw/"},{name:"NESA",type:"Official assessment and examination information",url:"https://www.nesa.gov.rw/"}],
  jobs:[{name:"Rwanda Basic Education Board",type:"Official education notices; verify any live vacancy and application channel",url:"https://www.reb.gov.rw/"}],
  teachers:[{name:"Rwanda Basic Education Board",type:"Teacher development and management information; confirm current requirements with the responsible authority",url:"https://www.reb.gov.rw/"}],
  further:[{name:"Higher Education Council (HEC)",url:"https://www.hec.gov.rw/"}],
  sources:[{label:"Ministry of Education",url:"https://www.mineduc.gov.rw/"},{label:"Rwanda Basic Education Board",url:"https://www.reb.gov.rw/"},{label:"National Examination and School Inspection Authority",url:"https://www.nesa.gov.rw/"},{label:"Higher Education Council",url:"https://www.hec.gov.rw/"}]
 },
 "nigeria": {
  researchStatus:"Primary-source links checked for the Federal Ministry of Education and national examination bodies. Education administration is shared with state authorities; state-level calendars, school registers and teacher licensing must be checked locally.",
  authority:"Federal Ministry of Education; Universal Basic Education Commission (UBEC); National Examinations Council (NECO); West African Examinations Council (WAEC). State ministries and SUBEBs administer important school functions.",
  officialLanguages:"English is Nigeria's official language; Hausa, Yoruba, Igbo and many other languages are widely used. Language of instruction and school policy can vary by state and school.",
  curriculum:"Use current Federal Ministry of Education and Nigerian Educational Research and Development Council (NERDC) curriculum documents; state and school implementation can vary. Confirm the applicable version and subject.",
  system:"Education includes early-childhood/pre-primary, basic education, senior secondary, technical/vocational and tertiary pathways. State-specific policies and school calendars may differ.",
  termCalendar:"No single national term calendar is asserted here. Verify dates through the relevant state ministry or FCT education authority and the individual school.",
  calendar:"School term dates are commonly issued at state/FCT level. Check the latest official circular for the exact jurisdiction.",
  exams:[{name:"National Examinations Council (NECO)",body:"Official national examination body; use current NECO notices for registration and timetable information.",level:"National examinations",url:"https://www.neco.gov.ng/"},{name:"West African Examinations Council (WAEC Nigeria)",body:"Official WAEC Nigeria portal for examinations, registration, results and e-learning resources.",level:"Senior secondary examinations",url:"https://www.waecnigeria.org/"}],
  schools:[{name:"Federal Ministry of Education",type:"Federal education authority; school administration and directories may be state-based",url:"https://education.gov.ng/"},{name:"Universal Basic Education Commission (UBEC)",type:"Federal basic-education commission",url:"https://ubec.gov.ng/"}],
  papers:[{name:"Nigerian Educational Research and Development Council (NERDC)",type:"National curriculum and educational-resource source; confirm current curriculum publications",url:"https://nerdc.gov.ng/"},{name:"NECO",type:"Official examination information",url:"https://www.neco.gov.ng/"},{name:"WAEC Nigeria",type:"Official examination resources",url:"https://www.waecnigeria.org/"}],
  jobs:[{name:"Federal Ministry of Education",type:"Official federal notices; many teaching vacancies are state or school-employer specific",url:"https://education.gov.ng/"}],
  teachers:[{name:"Teachers Registration Council of Nigeria (TRCN)",type:"Teacher registration and professional standards; verify current rules directly",url:"https://trcn.gov.ng/"}],
  further:[{name:"National Universities Commission (NUC)",url:"https://www.nuc.edu.ng/"},{name:"National Board for Technical Education (NBTE)",url:"https://net.nbte.gov.ng/"}],
  sources:[{label:"Federal Ministry of Education",url:"https://education.gov.ng/"},{label:"Universal Basic Education Commission",url:"https://ubec.gov.ng/"},{label:"NERDC",url:"https://nerdc.gov.ng/"},{label:"NECO",url:"https://www.neco.gov.ng/"},{label:"WAEC Nigeria",url:"https://www.waecnigeria.org/"},{label:"Teachers Registration Council of Nigeria",url:"https://trcn.gov.ng/"}]
 },
 "south-africa": {
  researchStatus:"Primary-source links checked for the Department of Basic Education and national curriculum information. Provinces administer many operational school matters; verify provincial calendars and school-directory details locally.",
  authority:"National Department of Basic Education (DBE), nine provincial education departments, and the South African Council for Educators (SACE) for educator registration.",
  officialLanguages:"South Africa has 12 official languages, including South African Sign Language. School language-of-learning policy varies by province, school and phase.",
  curriculum:"The national Curriculum and Assessment Policy Statement (CAPS) applies across Grades R–12 in public schools, with subject-specific documents available from DBE. Confirm the relevant phase and current document.",
  system:"School education is generally organised from Grade R through Grade 12, with Foundation, Intermediate, Senior and Further Education and Training phases; provinces and school types affect administration.",
  termCalendar:"Term dates are published by DBE and can differ by school category and year. Confirm the current official calendar and provincial notice before publishing dates.",
  calendar:"Use the current DBE school calendar and relevant provincial education department notice.",
  exams:[{name:"National Senior Certificate (NSC)",body:"DBE publishes official NSC examination information, timetables, past papers and results notices.",level:"Grade 12",url:"https://www.education.gov.za/"}],
  schools:[{name:"Department of Basic Education",type:"National basic-education authority; provides school information and a Schools Masterlist resource",url:"https://www.education.gov.za/"},{name:"Provincial education departments",type:"Official provincial authorities; use the province-specific directory for local records",url:"https://www.gov.za/"}],
  papers:[{name:"DBE CAPS curriculum",type:"Official curriculum, assessment policy, past examination papers and study guides",url:"https://www.education.gov.za/"}],
  jobs:[{name:"Department of Basic Education",type:"Official recruitment notices; educator vacancies may be advertised by provincial departments",url:"https://www.education.gov.za/"}],
  teachers:[{name:"South African Council for Educators (SACE)",type:"Educator registration and professional standards; confirm current requirements directly",url:"https://www.sace.org.za/"}],
  further:[{name:"Council on Higher Education (CHE)",url:"https://www.che.ac.za/"},{name:"South African Qualifications Authority (SAQA)",url:"https://www.saqa.org.za/"}],
  sources:[{label:"National Department of Basic Education",url:"https://www.education.gov.za/"},{label:"South African Government — CAPS overview",url:"https://www.gov.za/faq/education/what-caps"},{label:"South African Council for Educators",url:"https://www.sace.org.za/"},{label:"Council on Higher Education",url:"https://www.che.ac.za/"}]
 },
 "ghana": {
  researchStatus:"Primary-source links checked for the Ministry of Education and National Council for Curriculum and Assessment. Current school calendars, school-register coverage and teacher registration requirements still need current notice-level verification.",
  authority:"Ministry of Education; Ghana Education Service (GES); National Council for Curriculum and Assessment (NaCCA); West African Examinations Council (WAEC Ghana).",
  officialLanguages:"English is Ghana's official language. Akan/Twi, Ewe, Ga, Dagbani and many other Ghanaian languages are widely spoken; language of instruction varies by level and school.",
  curriculum:"NaCCA develops the national pre-tertiary curriculum and assessment standards. Use its official curriculum resources and confirm the current grade/phase version.",
  system:"The system includes kindergarten, primary, junior high school and senior high/technical and vocational pathways, followed by tertiary education. Confirm current qualification and admission rules with the authorities.",
  termCalendar:"Current term dates not yet entered. Check the latest Ministry/GES calendar or circular and confirm the individual school's dates.",
  calendar:"Use the current Ministry of Education or Ghana Education Service calendar; avoid carrying dates over from prior years.",
  exams:[{name:"West African Examinations Council (WAEC Ghana)",body:"Official examination authority for relevant West African school examinations; use current notices for registration and timetables.",level:"Basic and secondary assessment/examinations as applicable",url:"https://www.waecgh.org/"}],
  schools:[{name:"Ghana Education Service (GES)",type:"Official service responsible for public pre-tertiary education; confirm current school directory services",url:"https://ges.gov.gh/"},{name:"Ministry of Education",type:"National education ministry",url:"https://moe.gov.gh/"}],
  papers:[{name:"National Council for Curriculum and Assessment (NaCCA)",type:"Official national curriculum, assessment standards and resource materials",url:"https://nacca.gov.gh/"},{name:"WAEC Ghana",type:"Official examination information",url:"https://www.waecgh.org/"}],
  jobs:[{name:"Ghana Education Service",type:"Official education recruitment notices; verify whether each vacancy is live",url:"https://ges.gov.gh/"}],
  teachers:[{name:"National Teaching Council (NTC)",type:"Teacher professional standards, licensing and registration information",url:"https://ntc.gov.gh/"}],
  further:[{name:"Ghana Tertiary Education Commission (GTEC)",url:"https://gtec.edu.gh/"}],
  sources:[{label:"Ministry of Education",url:"https://moe.gov.gh/"},{label:"Ghana Education Service",url:"https://ges.gov.gh/"},{label:"NaCCA",url:"https://nacca.gov.gh/"},{label:"National Teaching Council",url:"https://ntc.gov.gh/"},{label:"WAEC Ghana",url:"https://www.waecgh.org/"}]
 },
 "ethiopia": {
  researchStatus:"National education authority and curriculum discovery sources identified; verify the current ministry structure, regional authorities, school register and official language policy against the latest federal and regional sources.",
  authority:"Federal Ministry of Education; regional education bureaus administer substantial school-level responsibilities.",
  officialLanguages:"Amharic is the federal working language; Ethiopia recognises multiple languages and regional working languages. Do not treat one language as the sole language of instruction nationwide.",
  curriculum:"Confirm current national curriculum frameworks, textbooks and grade/subject syllabi through the Federal Ministry of Education and the relevant regional education bureau.",
  system:"The structure and implementation of general education, preparatory education, TVET and higher education are subject to national policy and reforms. Confirm current grade structure and transition rules from the latest ministry publications.",
  termCalendar:"No nationwide term dates are asserted. Confirm the academic calendar with the Federal Ministry of Education, relevant regional education bureau and school.",
  calendar:"Verify current dates with the relevant regional education bureau and school; regional differences may apply.",
  exams:[{name:"Federal Ministry of Education",body:"Use official ministry notices to identify the current national examination and assessment body, examination levels and timetables.",level:"Verify current examination arrangements",url:"https://moe.gov.et/"}],
  schools:[{name:"Federal Ministry of Education",type:"Federal authority; regional education bureaus may maintain local school directories",url:"https://moe.gov.et/"}],
  papers:[{name:"Federal Ministry of Education",type:"Official curriculum, textbook and education-policy starting point; verify current documents and versions",url:"https://moe.gov.et/"}],
  jobs:[{name:"Federal Ministry of Education",type:"Official notices; many school appointments are administered by regional authorities",url:"https://moe.gov.et/"}],
  teachers:[{name:"Federal Ministry of Education and regional education bureaus",type:"Verify teacher training, qualification and licensing requirements with the relevant federal/regional authority",url:"https://moe.gov.et/"}],
  further:[{name:"Ethiopian Education and Training Authority",type:"Confirm current accreditation and institutional recognition through official government sources",url:"https://eta.gov.et/"}],
  sources:[{label:"Federal Ministry of Education",url:"https://moe.gov.et/"},{label:"UNESCO UIS SDG 4 country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "morocco": {
  researchStatus:"Primary-source starting points identified for the Ministry and national education assessment/research bodies. Verify current ministry naming, school directory, calendar, curriculum version and teacher requirements before marking them fully verified.",
  authority:"Ministry responsible for National Education, Preschool and Sports; the national curriculum and assessment framework is implemented through relevant ministry and national bodies.",
  officialLanguages:"Arabic and Amazigh are Morocco's official languages. French is widely used in some educational contexts but should not be described as a national official language.",
  curriculum:"Use the current ministry's official curriculum and programme publications. Language, subject and pathway arrangements can vary across primary, secondary, vocational and international schools.",
  system:"Schooling includes preschool, primary, lower and upper secondary, vocational and higher education pathways. Confirm the current grade structure and progression requirements in ministry publications.",
  termCalendar:"Current term dates not yet entered. Check the latest ministry school calendar and any regional or school-specific updates.",
  calendar:"Use the latest official Ministry school-year calendar; do not rely on a previous-year schedule.",
  exams:[{name:"Ministry national examinations and assessment notices",body:"Consult the official Ministry portal for current examination arrangements, candidate guidance and timetables.",level:"National school examinations; verify current cycle",url:"https://www.men.gov.ma/"}],
  schools:[{name:"Ministry of National Education, Preschool and Sports",type:"National education authority; confirm availability of a current official school directory",url:"https://www.men.gov.ma/"}],
  papers:[{name:"Ministry of National Education, Preschool and Sports",type:"Official curriculum and assessment publications; verify current grade and language version",url:"https://www.men.gov.ma/"}],
  jobs:[{name:"Ministry of National Education, Preschool and Sports",type:"Official recruitment and competition notices; verify the current application window",url:"https://www.men.gov.ma/"}],
  teachers:[{name:"Ministry of National Education, Preschool and Sports",type:"Confirm current teacher recruitment, training and qualification-recognition requirements in official notices",url:"https://www.men.gov.ma/"}],
  further:[{name:"National Agency for Evaluation and Quality Assurance in Higher Education and Scientific Research (ANEAQ)",url:"https://www.aneaq.ma/"}],
  sources:[{label:"Ministry of National Education, Preschool and Sports",url:"https://www.men.gov.ma/"},{label:"UNESCO UIS SDG 4 country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "botswana": {
  researchStatus:"Official ministry and examination authority sources identified. Current school calendar, school register and teacher registration requirements still need direct confirmation from the latest official notices.",
  authority:"Ministry of Child Welfare and Basic Education (verify current portfolio naming and remit on the government portal); Botswana Examinations Council (BEC).",
  officialLanguages:"English is the official language and Setswana is the national language; additional languages are spoken in communities. Confirm language of instruction at school level.",
  curriculum:"Check current national curriculum and syllabuses through the responsible education ministry and Botswana Examinations Council; use current versions for the relevant level.",
  system:"School pathways include primary, junior secondary and senior secondary, plus technical/vocational and tertiary education. Confirm current progression and qualification rules with the ministry.",
  termCalendar:"Current term dates not yet entered. Verify the latest official school calendar and any school-specific updates.",
  calendar:"Use the current calendar published by the responsible ministry; do not reuse last year's dates.",
  exams:[{name:"Botswana Examinations Council (BEC)",body:"Official examinations and assessment authority. Consult current notices for assessment levels, registration and timetables.",level:"National school examinations",url:"https://www.bec.co.bw/"}],
  schools:[{name:"Botswana Government education portal",type:"Official government discovery point for the responsible ministry and school services",url:"https://www.gov.bw/"}],
  papers:[{name:"Botswana Examinations Council",type:"Official examination and assessment information",url:"https://www.bec.co.bw/"}],
  jobs:[{name:"Government of Botswana",type:"Official public-service recruitment starting point; confirm education-specific vacancies and live status",url:"https://www.gov.bw/"}],
  teachers:[{name:"Responsible education ministry / public service",type:"Verify current teacher qualification and registration requirements with official Botswana government sources",url:"https://www.gov.bw/"}],
  further:[{name:"Botswana Qualifications Authority (BQA)",url:"https://www.bqa.org.bw/"}],
  sources:[{label:"Government of Botswana",url:"https://www.gov.bw/"},{label:"Botswana Examinations Council",url:"https://www.bec.co.bw/"},{label:"Botswana Qualifications Authority",url:"https://www.bqa.org.bw/"}]
 },
 "namibia": {
  researchStatus:"Primary-source links identified for the education ministry and national examinations/assessment board. Confirm current ministry title, term dates, school directory and teacher-registration details before marking complete.",
  authority:"Ministry responsible for Education, Innovation, Youth, Sport, Arts and Culture; Namibia Qualifications Authority (NQA) for qualifications recognition; national examinations administered through the responsible education assessment body.",
  officialLanguages:"English is Namibia's official language. Multiple indigenous and community languages are used in education and daily life; confirm school-level language policy.",
  curriculum:"Use current official curriculum, syllabuses and assessment materials from the education ministry and national examination authorities.",
  system:"Education includes pre-primary, primary, junior and senior secondary, vocational training and tertiary pathways. Confirm current grade structure and qualification equivalencies with official sources.",
  termCalendar:"Current school term dates not yet entered; consult the latest ministry calendar and school notice.",
  calendar:"Use the current official education calendar and check for revisions before publishing dates.",
  exams:[{name:"National examinations and assessment",body:"Consult the current education ministry notices for the responsible examination body, candidate guidance and timetables.",level:"National school assessment; verify current details",url:"https://moe.gov.na/"}],
  schools:[{name:"Ministry of Education",type:"National education authority; confirm current public school directory or EMIS access",url:"https://moe.gov.na/"}],
  papers:[{name:"Ministry of Education",type:"Official curriculum and assessment publications; verify current versions",url:"https://moe.gov.na/"}],
  jobs:[{name:"Namibian government vacancies",type:"Official public-service recruitment starting point; confirm education vacancies and closing dates",url:"https://www.gov.na/"}],
  teachers:[{name:"Ministry of Education and Namibia Qualifications Authority",type:"Confirm current teacher registration, qualifications and foreign-credential recognition requirements with official authorities",url:"https://moe.gov.na/"}],
  further:[{name:"Namibia Qualifications Authority (NQA)",url:"https://www.nqa.org.na/"}],
  sources:[{label:"Ministry of Education",url:"https://moe.gov.na/"},{label:"Government of Namibia",url:"https://www.gov.na/"},{label:"Namibia Qualifications Authority",url:"https://www.nqa.org.na/"}]
 },
 "zambia": {
  researchStatus:"Official ministry and examination authority sources identified. Verify current school calendar, school directory, curriculum versions and teacher-registration rules from the latest official notices.",
  authority:"Ministry of Education; Examinations Council of Zambia (ECZ); Teaching Council of Zambia (TCZ).",
  officialLanguages:"English is Zambia's official language and principal language of formal schooling; several Zambian languages are used in communities and early-grade instruction.",
  curriculum:"Check current curriculum frameworks, syllabuses and teaching resources through the Ministry of Education and official curriculum bodies. Confirm the relevant grade and subject version.",
  system:"Schooling includes early childhood education, primary, secondary, and technical/vocational and higher education pathways. Confirm current grade structure and assessment transitions through ministry publications.",
  termCalendar:"Current term dates not yet entered. Confirm the latest official Ministry of Education school calendar and school notice.",
  calendar:"Use the current Ministry of Education calendar; check for circulars that revise term dates.",
  exams:[{name:"Examinations Council of Zambia (ECZ)",body:"Official national assessment and examination authority; use current official timetables and candidate guidance.",level:"National examinations and assessments",url:"https://www.exams-council.org.zm/"}],
  schools:[{name:"Ministry of Education",type:"National education authority; check current official school data services",url:"https://www.edu.gov.zm/"}],
  papers:[{name:"Ministry of Education",type:"Official curriculum and syllabus starting point",url:"https://www.edu.gov.zm/"},{name:"Examinations Council of Zambia",type:"Official examination information",url:"https://www.exams-council.org.zm/"}],
  jobs:[{name:"Ministry of Education",type:"Official notices; confirm whether any vacancy is current and open",url:"https://www.edu.gov.zm/"}],
  teachers:[{name:"Teaching Council of Zambia (TCZ)",type:"Teacher registration and professional standards; confirm current rules",url:"https://www.tcz.ac.zm/"}],
  further:[{name:"Higher Education Authority (HEA)",url:"https://www.hea.org.zm/"}],
  sources:[{label:"Ministry of Education",url:"https://www.edu.gov.zm/"},{label:"Examinations Council of Zambia",url:"https://www.exams-council.org.zm/"},{label:"Teaching Council of Zambia",url:"https://www.tcz.ac.zm/"},{label:"Higher Education Authority",url:"https://www.hea.org.zm/"}]
 },
 "zimbabwe": {
  researchStatus:"Official ministry and examination authority sources identified. Current school calendar, public school directory and teacher registration rules require checking against current government notices.",
  authority:"Ministry responsible for Primary and Secondary Education; Zimbabwe School Examinations Council (ZIMSEC); Zimbabwe Council for Higher Education (ZIMCHE).",
  officialLanguages:"Zimbabwe recognises 16 official languages under its Constitution. English, Shona and Ndebele are widely used in education; the school's language policy and level should be confirmed.",
  curriculum:"Use the current curriculum framework, syllabuses and learning materials issued by the responsible education ministry and relevant curriculum bodies.",
  system:"Schooling commonly includes infant, junior and secondary stages, with technical/vocational and tertiary pathways. Confirm current grade, assessment and qualification requirements with the ministry.",
  termCalendar:"Current term dates not yet entered. Check the latest ministry school calendar and any official circular revising dates.",
  calendar:"Use the current official school calendar from the responsible ministry; do not assume dates from previous years remain valid.",
  exams:[{name:"Zimbabwe School Examinations Council (ZIMSEC)",body:"Official national examination authority; use current notices for registration, examination timetables and results.",level:"National school examinations",url:"https://www.zimsec.co.zw/"}],
  schools:[{name:"Ministry of Primary and Secondary Education",type:"National education authority; confirm current school directory or EMIS services",url:"https://www.mopse.co.zw/"}],
  papers:[{name:"Zimbabwe School Examinations Council",type:"Official examination notices and candidate information",url:"https://www.zimsec.co.zw/"}],
  jobs:[{name:"Ministry of Primary and Secondary Education",type:"Official recruitment notices; verify current vacancy status",url:"https://www.mopse.co.zw/"}],
  teachers:[{name:"Responsible education ministry and Public Service Commission",type:"Confirm current teacher qualification, registration and recruitment requirements directly with the official authorities",url:"https://www.mopse.co.zw/"}],
  further:[{name:"Zimbabwe Council for Higher Education (ZIMCHE)",url:"https://www.zimche.ac.zw/"}],
  sources:[{label:"Ministry of Primary and Secondary Education",url:"https://www.mopse.co.zw/"},{label:"Zimbabwe School Examinations Council",url:"https://www.zimsec.co.zw/"},{label:"Zimbabwe Council for Higher Education",url:"https://www.zimche.ac.zw/"}]
 }
};
Object.keys(africaResearchProfiles).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(africaResearchProfiles[slug]).forEach(function(field){target[field]=africaResearchProfiles[slug][field];});
});
 
/* Ensure every registered country has a visible, honest research record.
 * These are discovery links and verification prompts, not claims that the fields have been researched.
 * Country facts are only promoted to verified when checked against a national authority or other primary source.
 */
countryRegistry.forEach(function(country){
 const key=country.slug;
 const query=encodeURIComponent(country.name+" official ministry of education national school directory");
 const officialSearch="https://www.google.com/search?q="+query;
 const researchSources=[
  {label:"UNESCO UIS SDG 4 country profiles (national education-system diagrams and indicators)",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"},
  {label:"UNESCO national education-system profiles (research reference; check profile dates)",url:"https://education-profiles.org/"},
  {label:"Search for "+country.name+" official government education authority (discovery link; verify the domain)",url:officialSearch}
 ];
 const starter={
  researchStatus:"Needs country-specific primary-source verification. Links below are research starting points, not proof that a field is verified.",
  authority:"Not yet verified for this country. Identify the responsible national education ministry/regulator and any relevant state, province or municipal authority from official government sources.",
  curriculum:"Not yet verified. Confirm the current national curriculum framework, curriculum authority, grade coverage and any recognised international/private-school pathways from official sources.",
  termCalendar:"Not yet verified. Add the current academic-year calendar only after checking the latest ministry or subnational authority circular and its publication date.",
  qualificationRequirements:"Not yet verified. Confirm teacher qualifications, training, registration/licensing, foreign credential recognition, language requirements and work authorisation with the official regulator and employer.",
  system:"Not yet verified. Confirm school stages, compulsory-education ages, grade structure and qualification pathways from the national authority and UNESCO UIS country mapping.",
  calendar:"Not yet verified. Add current term dates only from a dated official calendar; note subnational differences where applicable.",
  schools:[{name:"Official school directory — locate and verify the national or subnational education authority's own directory",type:"Research link; this is not a verified school record",url:officialSearch}],
  exams:[{name:"Official national examinations and assessment authority — research required",body:"Identify the responsible examination body and link its official syllabus, assessment guidance and current timetable. No exam date is asserted here.",level:"Research required",url:officialSearch}],
  papers:[{name:"Official curriculum and assessment materials — research required",type:"Locate official syllabus, specimen papers and past-paper archives; availability varies by country",url:officialSearch}],
  jobs:[{name:"Official public education recruitment — research required",type:"Discovery link only; confirm that each vacancy is live, official and open to the applicant",url:officialSearch}],
  teachers:[{name:"Official teacher registration/licensing authority — research required",type:"Confirm registration, qualification recognition and current rules with the regulator",url:officialSearch}],
  further:[{name:"Official higher-education regulator and accreditation register — research required",url:officialSearch}],
  sources:researchSources
 };
 const existing=countryData[key]||(countryData[key]={});
 Object.keys(starter).forEach(function(field){if(existing[field]===undefined||existing[field]===null||existing[field]===""){existing[field]=starter[field];}});
 if(!existing.sources)existing.sources=researchSources;
});

if(typeof window!=="undefined"){window.CBE_GLOBAL_COUNTRIES=countryRegistry;window.CBE_GLOBAL_COUNTRY_DATA=countryData;}
if(typeof module!=="undefined"&&module.exports){module.exports={countries:countryRegistry,countryData};}
})();