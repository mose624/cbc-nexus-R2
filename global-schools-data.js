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
 

/* Africa research batch 2. Official-source starting points for another set of countries.
 * Do not infer live vacancies, school lists or current term dates from a ministry homepage alone.
 */
const africaResearchProfilesBatch2 = {
 "senegal": {
  researchStatus:"National ministry source checked for curriculum responsibilities and national examinations. Current academic calendar should be taken from the latest signed ministerial circular; regional ministry pages may be useful but must be checked for authenticity and currentness.",
  authority:"Ministry of National Education (Ministère de l'Éducation nationale); national directorates and regional education academies; Office du Baccalauréat for the baccalaureate.",
  officialLanguages:"French is the official language; national languages including Wolof, Pulaar, Serer, Jola, Mandinka and Soninke are widely used. Language-of-instruction arrangements vary by level and programme.",
  curriculum:"The Ministry defines national curricula and programmes, with technical curriculum work involving the relevant national institutes and directorates. Check the latest official programme and circular for each cycle.",
  system:"Education includes preschool, elementary, middle and secondary education, alongside technical/vocational and higher education. Confirm current age, grade and qualification rules in ministry publications.",
  termCalendar:"Do not use dates from an undated or regional sample page as nationwide dates. Confirm the latest signed national school-calendar circular at the Ministry of National Education.",
  calendar:"Current school calendar requires confirmation from the latest official ministerial circular; the Ministry's site publishes back-to-school announcements and official texts.",
  exams:[{name:"CFEE and BFEM",body:"National examinations administered through the education ministry's responsible directorates; check current official notices for dates and candidate requirements.",level:"Elementary and middle-school completion",url:"https://www.education.sn/"},{name:"Baccalauréat",body:"Check current session and candidate guidance through the Office du Baccalauréat and the Ministry.",level:"Secondary completion",url:"https://officedubac.sn/"}],
  schools:[{name:"Ministry of National Education",type:"National authority; school-level administration includes regional academies and local education inspectorates",url:"https://www.education.sn/"}],
  papers:[{name:"Ministry of National Education",type:"Official curriculum, circulars and examination information; confirm the applicable current document",url:"https://www.education.sn/"}],
  jobs:[{name:"Ministry of National Education",type:"Official recruitment and competitive-exam notices; verify each campaign and deadline directly",url:"https://www.education.sn/"}],
  teachers:[{name:"Ministry of National Education",type:"Teacher recruitment, training and career notices; check current eligibility and application conditions",url:"https://www.education.sn/"}],
  further:[{name:"Ministry responsible for higher education / Office du Baccalauréat",type:"Use current government portals to verify tertiary admissions and recognition",url:"https://officedubac.sn/"}],
  sources:[{label:"Ministry of National Education",url:"https://www.education.sn/"},{label:"Office du Baccalauréat",url:"https://officedubac.sn/"}]
 },
 "algeria": {
  researchStatus:"Official Ministry of National Education portal identified, including teacher recruitment notices. Current academic calendar and examination dates must be confirmed from the latest official circular.",
  authority:"Ministry of National Education; National Office of Examinations and Competitions (ONEC) supports national examinations and recruitment competitions.",
  officialLanguages:"Arabic and Tamazight are Algeria's official languages. French is used in some educational and professional contexts but is not a national official language.",
  curriculum:"Use the Ministry of National Education's current curricula, subject programmes and official circulars; verify grade, stream and school-year version.",
  system:"The school system includes primary, middle and secondary education, followed by vocational training and higher education. Consult current ministry rules for progression and examination requirements.",
  termCalendar:"Current term dates not entered; confirm through the latest Ministry school-year circular and any subsequent official update.",
  calendar:"Use the current Ministry of National Education calendar and official amendments; do not reuse dates from previous academic years.",
  exams:[{name:"Baccalauréat and BEM",body:"Use the Ministry and ONEC official notices for examination arrangements, candidate registration and timetables.",level:"Middle-school and secondary completion examinations",url:"https://www.education.gov.dz/"}],
  schools:[{name:"Ministry of National Education",type:"National education authority; confirm current school-directory/administrative services on the official portal",url:"https://www.education.gov.dz/"}],
  papers:[{name:"Ministry of National Education",type:"Official curriculum and programme documents; verify current subject and grade versions",url:"https://www.education.gov.dz/"}],
  jobs:[{name:"Ministry of National Education",type:"Official recruitment and competition notices; verify eligibility and closing dates from each notice",url:"https://www.education.gov.dz/"}],
  teachers:[{name:"Ministry of National Education",type:"Teacher recruitment eligibility depends on the post and subject; follow current official competition notices",url:"https://www.education.gov.dz/"}],
  further:[{name:"Ministry of Higher Education and Scientific Research",url:"https://www.mesrs.dz/"}],
  sources:[{label:"Ministry of National Education",url:"https://www.education.gov.dz/"},{label:"Ministry of Higher Education and Scientific Research",url:"https://www.mesrs.dz/"}]
 },
 "malawi": {
  researchStatus:"Official education ministry and national examinations council sources identified. Verify current calendar, school directory, curriculum version and teacher registration details from current notices.",
  authority:"Ministry of Education; Malawi National Examinations Board (MANEB); Malawi National Council for Higher Education (NCHE).",
  officialLanguages:"English is the official language; Chichewa is the national language. Other languages are spoken locally; school language-of-instruction rules may vary by level.",
  curriculum:"Check the current curriculum and syllabuses published by the Ministry of Education and the responsible curriculum-development bodies.",
  system:"Schooling includes primary and secondary education, with technical/vocational and higher education pathways. Confirm current grade structure, selection and qualification rules through official notices.",
  termCalendar:"Current school term dates not entered. Check the latest Ministry of Education calendar and any circular that revises dates.",
  calendar:"Use the current official school calendar; confirm any changes directly with the Ministry and the school.",
  exams:[{name:"Malawi National Examinations Board (MANEB)",body:"Official examination body; use its current notices for national examination levels, registration and timetables.",level:"National primary and secondary examinations",url:"https://www.maneb.edu.mw/"}],
  schools:[{name:"Ministry of Education",type:"National education authority; confirm current official school-directory services",url:"https://education.gov.mw/"}],
  papers:[{name:"Malawi National Examinations Board",type:"Official assessment and examination information",url:"https://www.maneb.edu.mw/"}],
  jobs:[{name:"Ministry of Education",type:"Official recruitment notices; confirm current vacancies and application channels",url:"https://education.gov.mw/"}],
  teachers:[{name:"Ministry of Education",type:"Confirm current teacher qualification, registration and recruitment rules with the responsible government authority",url:"https://education.gov.mw/"}],
  further:[{name:"National Council for Higher Education (NCHE)",url:"https://www.nche.ac.mw/"}],
  sources:[{label:"Ministry of Education",url:"https://education.gov.mw/"},{label:"Malawi National Examinations Board",url:"https://www.maneb.edu.mw/"},{label:"National Council for Higher Education",url:"https://www.nche.ac.mw/"}]
 },
 "lesotho": {
  researchStatus:"Official government education portal and examination council source identified. Confirm current term dates, school register and teacher registration/qualification requirements before treating these fields as complete.",
  authority:"Ministry of Education and Training; Examinations Council of Lesotho (ECoL); Council on Higher Education (CHE).",
  officialLanguages:"Sesotho and English are Lesotho's official languages. Language of instruction varies by grade and school.",
  curriculum:"Check current curriculum frameworks, syllabuses and teaching resources through the Ministry of Education and Training and ECoL.",
  system:"The system includes early childhood, primary, secondary, technical/vocational and higher education pathways. Verify current grade progression and qualification requirements from ministry documents.",
  termCalendar:"Current school term dates not entered; verify the latest official ministry calendar and school-level notices.",
  calendar:"Use the current Ministry of Education and Training school calendar; confirm whether any later circular changes the dates.",
  exams:[{name:"Examinations Council of Lesotho (ECoL)",body:"Official national examinations and assessment body. Check current candidate notices, subject syllabuses and examination timetables.",level:"National school examinations",url:"https://www.ecol.org.ls/"}],
  schools:[{name:"Ministry of Education and Training",type:"National education authority; confirm current school-directory and education statistics services",url:"https://www.education.gov.ls/"}],
  papers:[{name:"Examinations Council of Lesotho",type:"Official assessment and examination information",url:"https://www.ecol.org.ls/"}],
  jobs:[{name:"Government of Lesotho",type:"Official public-service recruitment starting point; verify education vacancies and deadlines",url:"https://www.gov.ls/"}],
  teachers:[{name:"Ministry of Education and Training",type:"Confirm current teacher qualification and recruitment rules with the ministry and employer",url:"https://www.education.gov.ls/"}],
  further:[{name:"Council on Higher Education (CHE)",url:"https://www.che.ac.ls/"}],
  sources:[{label:"Ministry of Education and Training",url:"https://www.education.gov.ls/"},{label:"Examinations Council of Lesotho",url:"https://www.ecol.org.ls/"},{label:"Council on Higher Education",url:"https://www.che.ac.ls/"}]
 },
 "eswatini": {
  researchStatus:"Official education ministry and examinations council sources identified. Current academic calendar, school register and teacher registration requirements remain to be verified against current official notices.",
  authority:"Ministry of Education and Training; Examinations Council of Eswatini (ECESWA); Eswatini Higher Education Council (ESHEC).",
  officialLanguages:"siSwati and English are official languages. The language of instruction varies by grade and institution.",
  curriculum:"Check the current curriculum and syllabuses through the Ministry of Education and Training and ECESWA, including the applicable examination pathway.",
  system:"Schooling includes primary and secondary education, alongside technical/vocational and higher education. Verify current grade and qualification details with official sources.",
  termCalendar:"Current term dates not entered. Check the latest Ministry calendar and official circulars before publishing dates.",
  calendar:"Use the current Ministry of Education and Training school calendar; confirm any updates directly with the ministry or school.",
  exams:[{name:"Examinations Council of Eswatini (ECESWA)",body:"Official examinations authority; consult current syllabus, registration and examination timetable notices.",level:"National and externally benchmarked school examinations",url:"https://www.eceswa.org.sz/"}],
  schools:[{name:"Ministry of Education and Training",type:"National education authority; verify current school-list or EMIS services",url:"https://www.gov.sz/"}],
  papers:[{name:"Examinations Council of Eswatini",type:"Official examination and syllabus information",url:"https://www.eceswa.org.sz/"}],
  jobs:[{name:"Government of Eswatini",type:"Official public-service recruitment starting point; verify current teaching vacancies",url:"https://www.gov.sz/"}],
  teachers:[{name:"Ministry of Education and Training",type:"Confirm current teacher training, qualifications and recruitment requirements with official authorities",url:"https://www.gov.sz/"}],
  further:[{name:"Eswatini Higher Education Council",url:"https://www.eshec.org.sz/"}],
  sources:[{label:"Government of Eswatini",url:"https://www.gov.sz/"},{label:"Examinations Council of Eswatini",url:"https://www.eceswa.org.sz/"},{label:"Eswatini Higher Education Council",url:"https://www.eshec.org.sz/"}]
 },
 "madagascar": {
  researchStatus:"Official ministry and national education authority sources require further direct validation. The links below are starting points; confirm the current ministry domain and current national circulars before upgrading verification status.",
  authority:"Ministry responsible for National Education; national and regional education directorates administer school services.",
  officialLanguages:"Malagasy and French are official languages. Language of instruction varies by school and level.",
  curriculum:"Confirm the current national curriculum, syllabuses and assessment framework through the official Ministry of National Education portal and current circulars.",
  system:"Schooling includes primary and secondary cycles, with technical/vocational and higher education pathways. Confirm current cycle names, grade structure and qualification equivalencies with the Ministry.",
  termCalendar:"Current term dates not entered. Confirm the current national calendar and any regional or school-specific updates from official sources.",
  calendar:"Verify current dates with the official Ministry of National Education and the relevant regional education authority.",
  exams:[{name:"National school examinations",body:"Identify and verify the current national examination authority and official examination notices through the Ministry; no timetable is asserted here.",level:"Verify current examination arrangements",url:"https://www.education.gov.mg/"}],
  schools:[{name:"Ministry of National Education",type:"Official starting point; confirm current school-directory services and portal availability",url:"https://www.education.gov.mg/"}],
  papers:[{name:"Ministry of National Education",type:"Locate the current official curriculum, syllabuses and assessment documents; verify each document's date",url:"https://www.education.gov.mg/"}],
  jobs:[{name:"Ministry of National Education",type:"Official recruitment starting point; verify each live vacancy and its eligibility rules",url:"https://www.education.gov.mg/"}],
  teachers:[{name:"Ministry of National Education",type:"Confirm current teacher qualifications, recruitment and career rules with the responsible authority",url:"https://www.education.gov.mg/"}],
  further:[{name:"Ministry responsible for higher education",type:"Verify the current higher-education regulator and accreditation register through government sources",url:"https://www.education.gov.mg/"}],
  sources:[{label:"Ministry of National Education (portal requires current validation)",url:"https://www.education.gov.mg/"},{label:"UNESCO UIS country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "mauritius": {
  researchStatus:"Official education ministry, examinations syndicate and higher-education regulator sources identified. Current term dates and school-level directory details should be checked in the latest official notices.",
  authority:"Ministry of Education and Human Resource; Mauritius Examinations Syndicate (MES); Higher Education Commission (HEC).",
  officialLanguages:"English is the official language of the National Assembly; Mauritius has a multilingual society and French and Mauritian Creole are widely used. Do not simplify this to a single official spoken language across all school contexts.",
  curriculum:"Use the current Ministry curriculum and assessment policy and the Mauritius Institute of Education resources; verify the relevant grade, subject and examination pathway.",
  system:"Schooling includes pre-primary, primary, secondary, technical/vocational and tertiary pathways. Confirm current grade and qualification rules through the Ministry and MES.",
  termCalendar:"Current term dates not entered. Check the latest Ministry school calendar and any subsequent official update.",
  calendar:"Use the current Ministry of Education calendar and verify any revisions before publishing term dates.",
  exams:[{name:"Mauritius Examinations Syndicate (MES)",body:"Official examination authority; current examination timetables, syllabuses and candidate information are published through MES.",level:"Primary and secondary examinations",url:"https://mes.govmu.org/"}],
  schools:[{name:"Ministry of Education",type:"National education authority; confirm current school-directory services and official institution records",url:"https://education.govmu.org/"}],
  papers:[{name:"Mauritius Examinations Syndicate",type:"Official syllabus, examination and assessment information",url:"https://mes.govmu.org/"},{name:"Mauritius Institute of Education",type:"Teacher education and curriculum resources",url:"https://mie.ac.mu/"}],
  jobs:[{name:"Public Service Commission Mauritius",type:"Official public-service recruitment; verify live vacancy notices and eligibility",url:"https://psc.govmu.org/"}],
  teachers:[{name:"Ministry of Education and Human Resource",type:"Confirm current teacher qualifications and recruitment requirements in official notices",url:"https://education.govmu.org/"}],
  further:[{name:"Higher Education Commission",url:"https://www.hec.mu/"}],
  sources:[{label:"Ministry of Education",url:"https://education.govmu.org/"},{label:"Mauritius Examinations Syndicate",url:"https://mes.govmu.org/"},{label:"Mauritius Institute of Education",url:"https://mie.ac.mu/"},{label:"Higher Education Commission",url:"https://www.hec.mu/"}]
 },
 "mozambique": {
  researchStatus:"Official ministry and national examination/curriculum sources need current validation. Check the latest government structure and current circulars before treating dates or school directory information as verified.",
  authority:"Ministry responsible for Education and Human Development; national curriculum and examination services operate under the education administration.",
  officialLanguages:"Portuguese is the official language. Numerous Mozambican languages are used in communities and bilingual education programmes; language-of-instruction policy varies by level and school.",
  curriculum:"Confirm the current national curriculum and syllabus through the Ministry responsible for education and its official curriculum publications.",
  system:"Education includes primary, secondary, technical/professional and higher education pathways. Confirm current grade structure, assessment transitions and qualification requirements from official publications.",
  termCalendar:"Current term dates not entered; verify the latest ministry calendar and any subsequent official changes.",
  calendar:"Use only a current dated calendar issued by the responsible Ministry or local education authority.",
  exams:[{name:"National examinations and assessment",body:"Confirm the current national examination directorate and timetable through the official Ministry portal; no examination dates are asserted here.",level:"Verify current examination arrangements",url:"https://www.mined.gov.mz/"}],
  schools:[{name:"Ministry responsible for Education",type:"National authority; verify current school directory and administrative services through official government sources",url:"https://www.mined.gov.mz/"}],
  papers:[{name:"Ministry responsible for Education",type:"Official curriculum and syllabus starting point; confirm the current document and grade",url:"https://www.mined.gov.mz/"}],
  jobs:[{name:"Ministry responsible for Education",type:"Official recruitment notices; confirm current vacancy and application details",url:"https://www.mined.gov.mz/"}],
  teachers:[{name:"Ministry responsible for Education",type:"Confirm current teacher training, qualifications and employment rules with the responsible authority",url:"https://www.mined.gov.mz/"}],
  further:[{name:"Ministry responsible for higher education",type:"Verify current accreditation and qualification-recognition authority via government sources",url:"https://www.mined.gov.mz/"}],
  sources:[{label:"Ministry responsible for Education (verify current portal)",url:"https://www.mined.gov.mz/"},{label:"UNESCO UIS country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "angola": {
  researchStatus:"Official government education portal identified as a starting point. Verify current ministry structure, curriculum, examination authority, school calendar and teacher requirements from current official notices.",
  authority:"Ministry of Education of Angola; confirm the current division of responsibilities for curriculum, examinations and school administration in official ministry documents.",
  officialLanguages:"Portuguese is Angola's official language. National languages are used by communities and may feature in local education contexts.",
  curriculum:"Check current national curriculum plans, syllabuses and learning materials published by the Ministry of Education.",
  system:"Education includes primary and secondary schooling, technical/professional training and higher education. Verify the current grade and qualification structure in ministry publications.",
  termCalendar:"Current school term dates not entered; check the latest official school calendar and any subsequent ministry circular.",
  calendar:"Use the latest Ministry of Education school calendar; do not carry dates over from a previous year.",
  exams:[{name:"National school examinations",body:"Verify the current examination directorate, exam levels and official timetable through the Ministry of Education.",level:"Verify current examination arrangements",url:"https://med.gov.ao/"}],
  schools:[{name:"Ministry of Education",type:"National education authority; confirm current school-directory services",url:"https://med.gov.ao/"}],
  papers:[{name:"Ministry of Education",type:"Official curriculum and education policy starting point; verify current documents",url:"https://med.gov.ao/"}],
  jobs:[{name:"Ministry of Education",type:"Official recruitment notices; verify live status and eligibility",url:"https://med.gov.ao/"}],
  teachers:[{name:"Ministry of Education",type:"Confirm current teacher qualification, training and recruitment requirements with official notices",url:"https://med.gov.ao/"}],
  further:[{name:"Ministry responsible for higher education",type:"Verify current higher-education accreditation authority and register via official government sources",url:"https://med.gov.ao/"}],
  sources:[{label:"Ministry of Education",url:"https://med.gov.ao/"},{label:"UNESCO UIS country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "benin": {
  researchStatus:"Government education portals identified as research starting points. Validate the current division between ministry portfolios, examination bodies, school calendars and teacher recruitment rules against current official notices.",
  authority:"Benin's education administration is divided among ministries responsible for preschool/primary, secondary/technical education and higher education; confirm the current portfolio names on the official government portal.",
  officialLanguages:"French is the official language. Fon, Yoruba, Bariba and many other national languages are widely spoken; school language policy varies.",
  curriculum:"Use the current official curriculum and syllabuses from the responsible ministry and national education authorities; verify each grade and subject document.",
  system:"Education includes preschool, primary, secondary, technical/vocational and higher education pathways. Confirm current grade structure and qualification rules through official sources.",
  termCalendar:"Current term dates not entered. Check the latest official school-year circular from the ministry responsible for the relevant level.",
  calendar:"Verify dates from a current official ministry calendar and any later amendments.",
  exams:[{name:"National examinations",body:"Identify the responsible current examination directorate and use official notices for CEP, BEPC, baccalaureate and other relevant examinations.",level:"National school examinations; verify current arrangements",url:"https://www.gouv.bj/"}],
  schools:[{name:"Government of Benin",type:"Official starting point for identifying current education ministries and school services",url:"https://www.gouv.bj/"}],
  papers:[{name:"Responsible education ministry",type:"Locate current curriculum, syllabus and official assessment documents through government sources",url:"https://www.gouv.bj/"}],
  jobs:[{name:"Government of Benin",type:"Official public-service recruitment starting point; confirm current teaching competitions and deadlines",url:"https://www.gouv.bj/"}],
  teachers:[{name:"Responsible education ministry",type:"Confirm current teacher recruitment and qualification rules in the relevant official competition notice",url:"https://www.gouv.bj/"}],
  further:[{name:"Ministry responsible for higher education",type:"Verify the current accreditation and recognition authority via the government portal",url:"https://www.gouv.bj/"}],
  sources:[{label:"Government of Benin",url:"https://www.gouv.bj/"},{label:"UNESCO UIS country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 },
 "cameroon": {
  researchStatus:"National education administration is split across multiple ministries and language/education subsystems. Official government sources identified as starting points; current school calendar, school register and teacher requirements need level-specific verification.",
  authority:"Ministry of Basic Education (MINEDUB); Ministry of Secondary Education (MINESEC); Ministry of Employment and Vocational Training and Ministry of Higher Education for their respective remits.",
  officialLanguages:"English and French are official languages. The education system includes English-speaking and French-speaking subsystems; language and curriculum must be identified by school and region.",
  curriculum:"Use the current curriculum and syllabuses issued by the responsible ministry for the relevant subsystem, level and subject. Do not assume a single uniform curriculum across all school contexts.",
  system:"Education includes basic, secondary, technical/vocational and higher education pathways. Structure and terminology differ between English-speaking and French-speaking subsystems; verify locally.",
  termCalendar:"Current term dates not entered. Confirm the latest official calendar from the ministry responsible for the relevant level and subsystem.",
  calendar:"Use a current official calendar and identify whether it applies to MINEDUB, MINESEC, a regional subsystem or a particular school.",
  exams:[{name:"National examinations and assessment",body:"Confirm the responsible examination body for the relevant subsystem and certificate; use current official timetables rather than assuming a single examination authority.",level:"Subsystem-specific examinations",url:"https://www.minesec.gov.cm/"}],
  schools:[{name:"Ministry of Basic Education (MINEDUB)",type:"Official authority for basic education",url:"https://www.minedub.cm/"},{name:"Ministry of Secondary Education (MINESEC)",type:"Official secondary education authority",url:"https://www.minesec.gov.cm/"}],
  papers:[{name:"MINEDUB",type:"Official basic-education policy and curriculum starting point",url:"https://www.minedub.cm/"},{name:"MINESEC",type:"Official secondary education and examination information",url:"https://www.minesec.gov.cm/"}],
  jobs:[{name:"Official education ministries",type:"Recruitment may be ministry-, regional- or public-service-specific; verify current notices and eligibility",url:"https://www.minesec.gov.cm/"}],
  teachers:[{name:"Responsible education ministry and public service",type:"Confirm qualifications, appointment and recognition rules for the relevant subsystem and school type",url:"https://www.minedub.cm/"}],
  further:[{name:"Ministry of Higher Education",url:"https://www.minesup.gov.cm/"}],
  sources:[{label:"MINEDUB",url:"https://www.minedub.cm/"},{label:"MINESEC",url:"https://www.minesec.gov.cm/"},{label:"Ministry of Higher Education",url:"https://www.minesup.gov.cm/"}]
 },
 "cote-d-ivoire": {
  researchStatus:"Official Ministry of National Education portal identified. Verify the current academic calendar, curriculum documents, examination arrangements and school register using dated official publications.",
  authority:"Ministry of National Education and Literacy; other ministries oversee technical/vocational education and higher education within their respective remits.",
  officialLanguages:"French is the official language. Côte d’Ivoire has many national languages used in communities and local education contexts.",
  curriculum:"Check current official curriculum programmes and syllabuses through the Ministry of National Education and Literacy; verify the grade and subject version.",
  system:"Education includes preschool, primary, lower and upper secondary, technical/vocational and higher education pathways. Confirm current grade and qualification rules with official publications.",
  termCalendar:"Current school term dates not entered. Check the latest official ministerial rentrée/calendar circular and any later updates.",
  calendar:"Use the current Ministry of National Education school calendar and confirm any revisions before publishing dates.",
  exams:[{name:"CEPE, BEPC and Baccalauréat",body:"Check current official examination announcements, candidate guidance and timetables through the Ministry and the responsible examination directorates.",level:"Primary and secondary examinations",url:"https://www.education.gouv.ci/"}],
  schools:[{name:"Ministry of National Education and Literacy",type:"National education authority; confirm current school-directory or EMIS access",url:"https://www.education.gouv.ci/"}],
  papers:[{name:"Ministry of National Education and Literacy",type:"Official curriculum and assessment documents; confirm current version and grade",url:"https://www.education.gouv.ci/"}],
  jobs:[{name:"Ministry of National Education and Literacy",type:"Official recruitment and competitive-exam notices; verify current eligibility and deadlines",url:"https://www.education.gouv.ci/"}],
  teachers:[{name:"Ministry of National Education and Literacy",type:"Confirm teacher recruitment, training and qualification requirements from current official notices",url:"https://www.education.gouv.ci/"}],
  further:[{name:"Ministry responsible for Higher Education and Scientific Research",type:"Verify current accreditation and higher-education recognition services through government sources",url:"https://enseignement.gouv.ci/"}],
  sources:[{label:"Ministry of National Education and Literacy",url:"https://www.education.gouv.ci/"},{label:"Ministry responsible for Higher Education",url:"https://enseignement.gouv.ci/"}]
 }
};
Object.keys(africaResearchProfilesBatch2).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(africaResearchProfilesBatch2[slug]).forEach(function(field){target[field]=africaResearchProfilesBatch2[slug][field];});
});
 

/* Africa research batch 3: official-authority starting points and conservative status notes. */
const africaResearchProfilesBatch3 = {
 "gambia": {
  researchStatus:"The Ministry of Basic and Secondary Education website identifies national services, school lists, examinations guidance and published education statistics. Check each publication date before using figures or deadlines.",
  authority:"Ministry of Basic and Secondary Education (MoBSE); Ministry of Higher Education, Research, Science and Technology for tertiary education.",
  officialLanguages:"English is the official language; Mandinka, Wolof, Fula, Jola and other Gambian languages are widely used. Confirm language-of-instruction policy by level and programme.",
  curriculum:"Use MoBSE curriculum and policy publications for basic and secondary education; verify current syllabus editions with the ministry.",
  system:"Basic and secondary education are overseen by MoBSE, with separate tertiary-education oversight. Confirm current grade structure and qualification equivalencies from official publications.",
  termCalendar:"Use the latest school-year calendar issued by MoBSE; dates are not hard-coded here.",
  calendar:"Check MoBSE's latest circular and school-specific notices for changes.",
  exams:[{name:"Ministry of Basic and Secondary Education",body:"Official examinations guidance and education notices; confirm the current examining body and timetable for each qualification.",level:"Basic and secondary",url:"https://www.mobse-website.org/"}],
  schools:[{name:"Ministry of Basic and Secondary Education",type:"Official starting point for school lists and education statistics; check the date and coverage of each list",url:"https://www.mobse-website.org/"}],
  papers:[{name:"Ministry of Basic and Secondary Education",type:"Curriculum and examination guidance; confirm availability of past papers",url:"https://www.mobse-website.org/"}],
  jobs:[{name:"Ministry of Basic and Secondary Education",type:"Check current official recruitment notices and closing dates",url:"https://www.mobse-website.org/"}],
  teachers:[{name:"Ministry of Basic and Secondary Education",type:"Verify teacher qualifications, recruitment and professional requirements with the ministry",url:"https://www.mobse-website.org/"}],
  further:[{name:"Ministry of Higher Education, Research, Science and Technology",url:"https://www.gov.gm/"}],
  sources:[{label:"Ministry of Basic and Secondary Education",url:"https://www.mobse-website.org/"},{label:"Government of The Gambia",url:"https://gambia.gov.gm/government/"}]
 },
 "liberia": {
  researchStatus:"The Ministry of Education publishes national curriculum and education-sector documents. Treat draft curriculum material as draft until formally approved; verify current examination and calendar notices separately.",
  authority:"Ministry of Education, Republic of Liberia; national examination and higher-education bodies should be checked through current government publications.",
  officialLanguages:"English is Liberia's official language; many Liberian languages are spoken. Verify the approved language-of-instruction policy for the relevant school level.",
  curriculum:"The Ministry of Education is the starting point for national curriculum frameworks, syllabuses and education-sector plans. Check whether a document is draft or approved.",
  system:"The system includes early childhood, primary, secondary, technical/vocational and higher education. Confirm current grade, promotion and qualification rules from official sources.",
  termCalendar:"Current dates not entered; use the latest Ministry of Education academic calendar or circular.",
  calendar:"Confirm school-year dates against the latest ministry notice and any subsequent updates.",
  exams:[{name:"Ministry of Education",body:"Consult current official guidance for national examinations, candidate requirements and timetables.",level:"School examinations",url:"https://moe.gov.lr/"}],
  schools:[{name:"Ministry of Education",type:"National authority; check current school census, school lists and education statistics",url:"https://moe.gov.lr/"}],
  papers:[{name:"Ministry of Education",type:"Official curriculum and assessment information; confirm whether materials are draft or final",url:"https://moe.gov.lr/"}],
  jobs:[{name:"Ministry of Education",type:"Official recruitment and education-sector announcements; verify deadline and eligibility",url:"https://moe.gov.lr/"}],
  teachers:[{name:"Ministry of Education",type:"Confirm teacher qualifications, recruitment and professional standards with the ministry",url:"https://moe.gov.lr/"}],
  further:[{name:"Ministry of Education",url:"https://moe.gov.lr/"}],
  sources:[{label:"Ministry of Education, Liberia",url:"https://moe.gov.lr/"}]
 },
 "sierra-leone": {
  researchStatus:"The Ministry of Basic and Senior Secondary Education maintains an official website. Confirm the current approved curriculum, examination notices, calendar and teacher-service requirements from dated official publications.",
  authority:"Ministry of Basic and Senior Secondary Education (MBSSE); Ministry of Technical and Higher Education for tertiary and technical pathways.",
  officialLanguages:"English is the official language; Krio and other Sierra Leonean languages are widely used. Check official language-of-instruction guidance by level.",
  curriculum:"Use MBSSE curriculum and policy publications and verify the edition and approval status before listing a syllabus as current.",
  system:"Basic and senior secondary education are overseen by MBSSE; technical and higher education have separate oversight. Confirm grade and qualification rules in official documents.",
  termCalendar:"Current term dates not entered; consult the latest MBSSE circular and school notices.",
  calendar:"Do not rely on historical calendars; check the most recent ministry announcement.",
  exams:[{name:"Ministry of Basic and Senior Secondary Education",body:"Official assessment and examination notices; verify current examination arrangements and timetable.",level:"Basic and senior secondary",url:"https://mbsse.gov.sl/"}],
  schools:[{name:"Ministry of Basic and Senior Secondary Education",type:"Official starting point for school information and education statistics; verify the current register",url:"https://mbsse.gov.sl/"}],
  papers:[{name:"Ministry of Basic and Senior Secondary Education",type:"Curriculum, syllabus and assessment guidance; verify current editions",url:"https://mbsse.gov.sl/"}],
  jobs:[{name:"Ministry of Basic and Senior Secondary Education",type:"Check official notices and public-service recruitment channels for active vacancies",url:"https://mbsse.gov.sl/"}],
  teachers:[{name:"Ministry of Basic and Senior Secondary Education",type:"Confirm teacher recruitment and service requirements through the ministry and relevant teacher-service authority",url:"https://mbsse.gov.sl/"}],
  further:[{name:"Ministry of Technical and Higher Education",url:"https://www.mthe.gov.sl/"}],
  sources:[{label:"Ministry of Basic and Senior Secondary Education",url:"https://mbsse.gov.sl/"}]
 },
 "togo": {
  researchStatus:"The national Ministry of Education portal is available. Verify the latest official programme, examination announcements and school calendar before publishing dates or eligibility rules.",
  authority:"Ministry of National Education (Ministère de l'Éducation nationale); other ministries oversee technical training and higher education.",
  officialLanguages:"French is the official language; Ewe, Kabiyè and other national languages are used. Confirm current language-of-instruction arrangements by level.",
  curriculum:"Consult the Ministry's official programmes, circulars and examination information; verify the version applicable to each cycle.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm current grade progression and certificate equivalencies from official documents.",
  termCalendar:"Current dates not entered; use the latest ministry school-year circular.",
  calendar:"Confirm calendar dates from the ministry's current notice; later circulars may amend them.",
  exams:[{name:"Ministry of National Education",body:"Official ministry announcements and school examination information; confirm current examination body and dates.",level:"School education",url:"https://education.gouv.tg/"}],
  schools:[{name:"Ministry of National Education",type:"National authority and official starting point for school-sector information; confirm availability of a current directory",url:"https://education.gouv.tg/"}],
  papers:[{name:"Ministry of National Education",type:"Official programmes and examination notices; verify current syllabus editions",url:"https://education.gouv.tg/"}],
  jobs:[{name:"Ministry of National Education",type:"Check current ministry announcements and official public-service recruitment notices",url:"https://education.gouv.tg/"}],
  teachers:[{name:"Ministry of National Education",type:"Verify teacher training, recruitment and service rules with the ministry",url:"https://education.gouv.tg/"}],
  further:[{name:"Ministry of National Education",url:"https://education.gouv.tg/"}],
  sources:[{label:"Ministry of National Education, Togo",url:"https://education.gouv.tg/"}]
 },
 "burkina-faso": {
  researchStatus:"Education responsibilities are distributed across national ministries, including basic education and higher education. Confirm the current ministry names, official domains and document status before treating records as verified.",
  authority:"National ministry responsible for basic education and literacy; separate national ministry responsible for higher education, scientific research and innovation.",
  officialLanguages:"French is used in government and education administration; Burkina Faso also recognizes national languages. Verify the current legal and instructional-language policy from official sources.",
  curriculum:"Use the responsible ministry's approved curriculum, literacy and examination publications; confirm the date and approval status of each document.",
  system:"The system includes preschool, primary, post-primary, secondary, technical/vocational and higher education. Confirm current cycles and certificates in official documents.",
  termCalendar:"Current school dates not entered; consult the latest official ministry circular.",
  calendar:"Verify the current school calendar with the responsible ministry and later circulars.",
  exams:[{name:"Responsible national education ministry",body:"Check official examination notices and the current national assessment arrangements before publishing dates.",level:"School examinations",url:"https://www.education.gov.bf/"}],
  schools:[{name:"Government of Burkina Faso",type:"Government portal as a discovery point; identify the current responsible ministry and validate any school register",url:"https://www.gouvernement.gov.bf/"}],
  papers:[{name:"Government of Burkina Faso",type:"Use official ministry publications for approved syllabuses and examinations; direct ministry portal requires validation",url:"https://www.gouvernement.gov.bf/"}],
  jobs:[{name:"Government of Burkina Faso",type:"Check current public-service recruitment notices and the responsible ministry's announcements",url:"https://www.gouvernement.gov.bf/"}],
  teachers:[{name:"Responsible national education ministry",type:"Confirm teacher qualification and recruitment rules through current official notices",url:"https://www.gouvernement.gov.bf/"}],
  further:[{name:"Government of Burkina Faso",url:"https://www.gouvernement.gov.bf/"}],
  sources:[{label:"Government of Burkina Faso (discovery portal; verify ministry links)",url:"https://www.gouvernement.gov.bf/"}]
 },
 "mali": {
  researchStatus:"Official education authority pages and current legal notices should be checked for the responsible ministry, curriculum, exams and school calendar. No dates or vacancies are asserted here.",
  authority:"National ministry responsible for education; separate portfolio(s) may oversee higher education and scientific research. Confirm current official ministry structure.",
  officialLanguages:"Bambara and other national languages are widely spoken; French has historically been used in administration and schooling. Because language policy can change, verify the current legal status and school-language rules with official sources.",
  curriculum:"Use the current approved national curriculum and ministry circulars; check the issue date and applicable education cycle.",
  system:"The system includes basic, secondary, technical/vocational and higher education pathways. Confirm the current structure and certificates with official ministry documents.",
  termCalendar:"Current school calendar not entered; consult the latest official ministry notice.",
  calendar:"Verify dates and any revisions through the current ministry circular.",
  exams:[{name:"National education authority",body:"Check the current official examination calendar and candidate notices; no dates are asserted here.",level:"School examinations",url:"https://www.education.gouv.ml/"}],
  schools:[{name:"Government of Mali",type:"Official government discovery point; confirm the current education ministry and school-register link",url:"https://www.gouvernement.ml/"}],
  papers:[{name:"Government of Mali",type:"Locate approved curriculum and examination publications through the current ministry",url:"https://www.gouvernement.ml/"}],
  jobs:[{name:"Government of Mali",type:"Check official public-service and education ministry recruitment notices",url:"https://www.gouvernement.ml/"}],
  teachers:[{name:"National education authority",type:"Verify teacher qualification and recruitment requirements from current official notices",url:"https://www.gouvernement.ml/"}],
  further:[{name:"Government of Mali",url:"https://www.gouvernement.ml/"}],
  sources:[{label:"Government of Mali (discovery portal; validate current ministry links)",url:"https://www.gouvernement.ml/"}]
 },
 "niger": {
  researchStatus:"Education responsibilities and ministry portfolios may be reorganized. Verify the current ministry name, official portal and dated curriculum/examination circulars before marking details as verified.",
  authority:"National ministry responsible for primary/secondary education and literacy; confirm the current structure and separate higher-education authority from official government notices.",
  officialLanguages:"Hausa, Zarma-Songhai, Tamasheq, Fulfulde, Kanuri and other national languages are spoken; French has been used in administration and schooling. Verify current official-language and instructional-language policy from current law and ministry guidance.",
  curriculum:"Consult current approved curriculum and official examination publications once the responsible ministry portal is validated.",
  system:"The system includes basic, secondary, technical/vocational and higher education. Confirm current cycle names and qualification requirements from official documents.",
  termCalendar:"Current school dates not entered; consult the latest official ministry circular.",
  calendar:"Check the latest dated ministry calendar and any amendments.",
  exams:[{name:"National education authority",body:"Use current official examination notices; no timetable is assumed here.",level:"School examinations",url:"https://www.gouv.ne/"}],
  schools:[{name:"Government of Niger",type:"Government discovery portal; verify current ministry and school-register links",url:"https://www.gouv.ne/"}],
  papers:[{name:"Government of Niger",type:"Locate approved curriculum and examination resources through the current responsible ministry",url:"https://www.gouv.ne/"}],
  jobs:[{name:"Government of Niger",type:"Check current government and ministry recruitment notices",url:"https://www.gouv.ne/"}],
  teachers:[{name:"National education authority",type:"Verify teacher recruitment and professional requirements through current official notices",url:"https://www.gouv.ne/"}],
  further:[{name:"Government of Niger",url:"https://www.gouv.ne/"}],
  sources:[{label:"Government of Niger (discovery portal; validate current ministry links)",url:"https://www.gouv.ne/"}]
 },
 "burundi": {
  researchStatus:"The responsible national ministry and its current official portal should be confirmed against government sources. School calendars, examination dates and recruitment notices are intentionally not guessed.",
  authority:"Ministry responsible for national education and scientific research; confirm the current official ministry title and division of responsibilities.",
  officialLanguages:"Kirundi and French are official languages; English is also an official language under Burundi's legal framework. Verify the language-of-instruction policy for each cycle.",
  curriculum:"Consult current ministry-approved curricula, programmes and examination guidance; check the edition and applicable grade.",
  system:"The system includes preschool, basic education, post-basic/secondary, technical/vocational and higher education. Confirm current grade structure and certificate names from official sources.",
  termCalendar:"Current dates not entered; use the latest official ministry calendar or circular.",
  calendar:"Check the ministry's most recent dated school calendar and amendments.",
  exams:[{name:"Responsible national education ministry",body:"Confirm current national examination arrangements and timetables with official notices.",level:"School examinations",url:"https://www.gov.bi/"}],
  schools:[{name:"Government of Burundi",type:"Government discovery point; verify the responsible ministry's school directory and statistics",url:"https://www.gov.bi/"}],
  papers:[{name:"Government of Burundi",type:"Find approved curriculum and examination resources through the current ministry",url:"https://www.gov.bi/"}],
  jobs:[{name:"Government of Burundi",type:"Check current public-service and ministry recruitment notices",url:"https://www.gov.bi/"}],
  teachers:[{name:"Responsible national education ministry",type:"Verify teacher qualifications, recruitment and service rules with current official notices",url:"https://www.gov.bi/"}],
  further:[{name:"Government of Burundi",url:"https://www.gov.bi/"}],
  sources:[{label:"Government of Burundi (discovery portal; validate current ministry links)",url:"https://www.gov.bi/"}]
 },
 "seychelles": {
  researchStatus:"The Ministry of Education site provides school-year calendar resources, job-vacancy information and education resources. Use the latest calendar file and verify its coverage before listing dates.",
  authority:"Ministry of Education; relevant higher-education and human-resource agencies should be confirmed through current government publications.",
  officialLanguages:"Seychelles has three official languages: Seychellois Creole, English and French. Verify the language used for instruction by level and school.",
  curriculum:"Use Ministry of Education curriculum, policy, past-paper and resource publications; record the date/version of each resource.",
  system:"The system includes early childhood, primary, secondary, professional/technical and post-secondary pathways. Confirm current grade and qualification details from the ministry.",
  termCalendar:"The ministry publishes calendar-of-operations resources for state primary and secondary schools and professional centres; use the current file.",
  calendar:"Official school calendar resource is available from the Ministry of Education website; check for the newest file and any later notices.",
  exams:[{name:"Ministry of Education",body:"Official education resources and past-paper links; confirm current examination notices and dates.",level:"School education",url:"https://edu.gov.sc/"}],
  schools:[{name:"Ministry of Education",type:"National authority; check the current school list and state/private school coverage",url:"https://edu.gov.sc/"}],
  papers:[{name:"Ministry of Education",type:"Official resources and past papers where published",url:"https://edu.gov.sc/"}],
  jobs:[{name:"Ministry of Education",type:"Official vacancies section; check the live posting, eligibility and deadline",url:"https://edu.gov.sc/"}],
  teachers:[{name:"Ministry of Education",type:"Confirm current recruitment, qualifications and professional requirements through ministry notices",url:"https://edu.gov.sc/"}],
  further:[{name:"Ministry of Education",url:"https://edu.gov.sc/"}],
  sources:[{label:"Ministry of Education, Seychelles",url:"https://edu.gov.sc/"}]
 },
 "egypt": {
  researchStatus:"National education and higher-education responsibilities are split between ministries. Use the current official portals for the relevant school stage and verify curriculum, examination and calendar publications by year.",
  authority:"Ministry of Education and Technical Education; Ministry of Higher Education and Scientific Research for tertiary education.",
  officialLanguages:"Arabic is the official language. English and French may be taught as foreign languages; the language of instruction varies by programme and institution.",
  curriculum:"Consult the Ministry of Education and Technical Education for current school curricula, assessment and examination announcements. Verify the year and stage.",
  system:"The system includes kindergarten, basic education, secondary general and technical education, and higher education. Confirm current pathways, admission rules and qualification equivalencies from official publications.",
  termCalendar:"Current school-year dates not entered; use the latest ministry-announced academic calendar.",
  calendar:"Check the current Ministry of Education and Technical Education school-year announcement for dates and subsequent changes.",
  exams:[{name:"Ministry of Education and Technical Education",body:"Official school assessment and examination announcements; verify current grade-specific schedules.",level:"School examinations",url:"https://moe.gov.eg/"}],
  schools:[{name:"Ministry of Education and Technical Education",type:"National authority; check official school directories and current education statistics",url:"https://moe.gov.eg/"}],
  papers:[{name:"Ministry of Education and Technical Education",type:"Official curricula, assessment and examination notices; verify current versions",url:"https://moe.gov.eg/"}],
  jobs:[{name:"Ministry of Education and Technical Education",type:"Check official ministry and civil-service recruitment announcements for active vacancies",url:"https://moe.gov.eg/"}],
  teachers:[{name:"Ministry of Education and Technical Education",type:"Confirm teacher appointment, qualifications and recruitment requirements from current official notices",url:"https://moe.gov.eg/"}],
  further:[{name:"Ministry of Higher Education and Scientific Research",url:"https://mohesr.gov.eg/"}],
  sources:[{label:"Ministry of Education and Technical Education",url:"https://moe.gov.eg/"},{label:"Ministry of Higher Education and Scientific Research",url:"https://mohesr.gov.eg/"}]
 },
 "tunisia": {
  researchStatus:"The national Ministry of Education is the primary starting point for school-level information. Confirm the current official portal, school-year circulars, examination schedules and approved curriculum editions before marking details verified.",
  authority:"Ministry of Education (Ministère de l'Éducation); separate ministry responsible for higher education and scientific research.",
  officialLanguages:"Arabic is the official language. French is widely used in parts of education, particularly in some scientific and technical subjects; actual instruction depends on level and programme.",
  curriculum:"Use current Ministry of Education programmes, official circulars and national examination information; verify each document's year and cycle.",
  system:"The system includes preschool, primary, preparatory/basic, secondary, technical/vocational and higher education. Confirm current pathway names and qualification rules from ministry publications.",
  termCalendar:"Current dates not entered; consult the latest official ministry school calendar.",
  calendar:"Verify the current school-year circular and any amendments from the ministry.",
  exams:[{name:"Ministry of Education",body:"Official examination announcements and education circulars; check the current timetable for the relevant examination.",level:"School examinations",url:"https://www.education.gov.tn/"}],
  schools:[{name:"Ministry of Education",type:"National authority; verify the current school directory and official education statistics",url:"https://www.education.gov.tn/"}],
  papers:[{name:"Ministry of Education",type:"Official curriculum and examination guidance; confirm current editions",url:"https://www.education.gov.tn/"}],
  jobs:[{name:"Ministry of Education",type:"Check current official recruitment notices and public-service procedures",url:"https://www.education.gov.tn/"}],
  teachers:[{name:"Ministry of Education",type:"Verify teacher recruitment and qualification rules through current ministry notices",url:"https://www.education.gov.tn/"}],
  further:[{name:"Ministry responsible for higher education",type:"Confirm current official portal through the Tunisian government directory",url:"https://www.tunisie.gov.tn/"}],
  sources:[{label:"Tunisian government portal (confirm current education ministry links)",url:"https://www.tunisie.gov.tn/"}]
 },
 "democratic-republic-of-the-congo": {
  researchStatus:"Education administration is divided across national portfolios, including primary/secondary education and higher education. Confirm the current official ministry domains and dated circulars before treating school lists, calendars or vacancies as verified.",
  authority:"National ministry responsible for primary, secondary and technical education; separate ministry responsible for higher education and universities.",
  officialLanguages:"French is the official language. Lingala, Swahili, Kikongo ya leta and Tshiluba are national languages; use of languages in early learning and instruction varies by region and programme.",
  curriculum:"Use current approved curricula and official ministry guidance for the relevant education cycle; check the edition, language and effective date.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm current grade progression and state examination requirements from official sources.",
  termCalendar:"Current school-year dates not entered; consult the latest ministry circular and any subsequent notices.",
  calendar:"Verify the current calendar through the responsible national ministry; do not infer dates from older circulars.",
  exams:[{name:"National education authority",body:"Check current official examination and state-test notices with the responsible ministry.",level:"School examinations",url:"https://www.primature.gouv.cd/"}],
  schools:[{name:"Government of the Democratic Republic of the Congo",type:"Government discovery portal; verify current ministry and official school-register links",url:"https://www.primature.gouv.cd/"}],
  papers:[{name:"Government of the Democratic Republic of the Congo",type:"Locate approved curriculum and examination materials through the current ministry",url:"https://www.primature.gouv.cd/"}],
  jobs:[{name:"Government of the Democratic Republic of the Congo",type:"Check official government and ministry recruitment notices; verify all deadlines",url:"https://www.primature.gouv.cd/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher qualification, recruitment and service requirements through current official ministry notices",url:"https://www.primature.gouv.cd/"}],
  further:[{name:"Government of the Democratic Republic of the Congo",url:"https://www.primature.gouv.cd/"}],
  sources:[{label:"Government of the Democratic Republic of the Congo (discovery portal; validate ministry links)",url:"https://www.primature.gouv.cd/"}]
 }
};
Object.keys(africaResearchProfilesBatch3).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(africaResearchProfilesBatch3[slug]).forEach(function(field){target[field]=africaResearchProfilesBatch3[slug][field];});
});


/* Africa research batch 4: ministry and government discovery sources; calendars/vacancies are not inferred. */
const africaResearchProfilesBatch4 = {
 "central-african-republic": {
  researchStatus:"Government and international education-source directories identify a national education ministry, but current direct ministry URLs and dated notices need validation. This profile deliberately avoids asserting live dates or vacancy status.",
  authority:"National ministry responsible for national education; separate portfolios may oversee higher education and research. Confirm the current official titles and division of duties.",
  officialLanguages:"Sango and French are official languages. Verify language-of-instruction arrangements by school level and programme.",
  curriculum:"Use the latest approved curriculum and ministry circulars once the responsible authority's current official portal is validated.",
  system:"Education pathways include preschool, primary, secondary, technical/vocational and higher education. Confirm current cycles, grade progression and qualifications from official publications.",
  termCalendar:"Current school dates not entered; check the latest ministry circular and school notices.",
  calendar:"No dates are assumed; confirm the current school-year calendar and any amendments with the responsible ministry.",
  exams:[{name:"National education authority",body:"Confirm the current national examination body, candidate notices and timetable through official government publications.",level:"School examinations",url:"https://www.sangonet.org/"}],
  schools:[{name:"Government of the Central African Republic",type:"Government discovery source; verify current ministry and school-directory links before using them as official",url:"https://www.sangonet.org/"}],
  papers:[{name:"National education authority",type:"Locate approved curricula and examination resources through current official ministry publications",url:"https://www.sangonet.org/"}],
  jobs:[{name:"National education authority",type:"Check current government recruitment notices; no live vacancies are asserted",url:"https://www.sangonet.org/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher qualifications and recruitment rules through current official notices",url:"https://www.sangonet.org/"}],
  further:[{name:"Government education-source directory",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}],
  sources:[{label:"Yale University Library African Studies: official government website guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "chad": {
  researchStatus:"A national ministry responsible for education is identified in international education-source directories. Validate the current official portal, ministry structure and dated school-year/examination notices before treating these fields as complete.",
  authority:"National ministry responsible for national education; higher education and vocational training responsibilities should be confirmed against current government structure.",
  officialLanguages:"French and Arabic are official languages. Local languages are also used; confirm the current language-of-instruction policy by level.",
  curriculum:"Use current ministry-approved curricula, programmes and examination notices; verify each document's year and applicable cycle.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm current grade progression and qualification equivalencies from official documents.",
  termCalendar:"Current dates not entered; consult the latest official ministry calendar or circular.",
  calendar:"Check the latest school-year notice and any amendments; historical dates are not carried forward.",
  exams:[{name:"National education authority",body:"Use current official candidate notices and examination timetables; no dates are asserted here.",level:"School examinations",url:"https://www.education.gouv.td/"}],
  schools:[{name:"National education authority",type:"Verify the current school directory and education statistics through the responsible ministry",url:"https://www.education.gouv.td/"}],
  papers:[{name:"National education authority",type:"Confirm approved curriculum editions and official examination resources",url:"https://www.education.gouv.td/"}],
  jobs:[{name:"National education authority",type:"Check current ministry and public-service recruitment announcements",url:"https://www.education.gouv.td/"}],
  teachers:[{name:"National education authority",type:"Verify teacher qualifications and recruitment requirements from current official notices",url:"https://www.education.gouv.td/"}],
  further:[{name:"Government of Chad",url:"https://www.gouvernement.td/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"},{label:"Government of Chad portal (validate current education links)",url:"https://www.gouvernement.td/"}]
 },
 "gabon": {
  researchStatus:"The national education ministry is identified in official-government source directories. Confirm the current ministry portal and dated curriculum, examination, school calendar and recruitment notices.",
  authority:"Ministry responsible for national education; separate portfolios may oversee technical education and higher education. Confirm current official titles.",
  officialLanguages:"French is the official language; national languages are also spoken. Confirm language-of-instruction arrangements for each education cycle.",
  curriculum:"Consult current ministry-approved programmes and circulars; record the edition and applicable school level.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Verify current grade structure and qualification requirements through official publications.",
  termCalendar:"Current term dates not entered; consult the latest official ministry circular.",
  calendar:"Verify the current school-year calendar and any amendments directly from the ministry.",
  exams:[{name:"National education authority",body:"Confirm current examination arrangements and timetables through official ministry notices.",level:"School examinations",url:"https://www.education.gouv.ga/"}],
  schools:[{name:"National education authority",type:"Official starting point for school information; verify current school register and coverage",url:"https://www.education.gouv.ga/"}],
  papers:[{name:"National education authority",type:"Use current approved curricula and examination information; verify versions",url:"https://www.education.gouv.ga/"}],
  jobs:[{name:"National education authority",type:"Check current ministry and public-service recruitment notices",url:"https://www.education.gouv.ga/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher recruitment and qualification requirements through current notices",url:"https://www.education.gouv.ga/"}],
  further:[{name:"Government of Gabon",url:"https://www.gouvernement.ga/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"},{label:"Government of Gabon portal (validate current ministry links)",url:"https://www.gouvernement.ga/"}]
 },
 "republic-of-the-congo": {
  researchStatus:"Government and international education directories identify national education portfolios. Validate the current ministry domain and the status/date of each curriculum, examination or recruitment publication.",
  authority:"Ministry responsible for primary and secondary education; higher education is administered through a separate national portfolio. Confirm current official titles and responsibilities.",
  officialLanguages:"French is the official language; Lingala and Kituba are national languages. Confirm language-of-instruction policy by cycle.",
  curriculum:"Use current approved ministry curricula and official circulars; do not treat older syllabuses as current without checking their edition.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm grade progression and qualification names from official publications.",
  termCalendar:"Current school dates not entered; use the latest official ministry circular.",
  calendar:"Check the latest school-year calendar and subsequent amendments with the responsible ministry.",
  exams:[{name:"National education authority",body:"Verify current examination arrangements and timetables in official notices.",level:"School examinations",url:"https://www.enseignement-general.gouv.cg/"}],
  schools:[{name:"National education authority",type:"Check current school registers and education statistics with the responsible ministry",url:"https://www.enseignement-general.gouv.cg/"}],
  papers:[{name:"National education authority",type:"Official curriculum and examination starting point; verify the current edition",url:"https://www.enseignement-general.gouv.cg/"}],
  jobs:[{name:"National education authority",type:"Check current ministry and public-service recruitment notices",url:"https://www.enseignement-general.gouv.cg/"}],
  teachers:[{name:"National education authority",type:"Verify teacher qualification and recruitment rules through current official notices",url:"https://www.enseignement-general.gouv.cg/"}],
  further:[{name:"Government of the Republic of the Congo",url:"https://www.gouvernement.cg/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"},{label:"Government of the Republic of the Congo portal (validate current ministry links)",url:"https://www.gouvernement.cg/"}]
 },
 "equatorial-guinea": {
  researchStatus:"The national education portfolio is identified in international education-source directories. Confirm the current official ministry portal and dated curriculum, examination, calendar and teacher-recruitment notices.",
  authority:"Ministry responsible for education, university education, vocational education and sports; verify current official title and responsibilities.",
  officialLanguages:"Spanish, French and Portuguese have official status under the country's language framework. Verify actual language-of-instruction arrangements by school and programme.",
  curriculum:"Consult current ministry-approved programmes and examination notices; check the edition, language and applicable cycle.",
  system:"The system includes preschool, primary, secondary, vocational and higher education. Confirm current grade structure and qualification equivalencies from official publications.",
  termCalendar:"Current school dates not entered; consult the latest official ministry circular.",
  calendar:"Verify the current school-year dates and amendments with the responsible ministry.",
  exams:[{name:"National education authority",body:"Confirm current examination bodies and timetables through official government notices.",level:"School examinations",url:"https://www.guineaecuatorialpress.com/"}],
  schools:[{name:"Government of Equatorial Guinea",type:"Government information source; verify current education ministry and school-register links",url:"https://www.guineaecuatorialpress.com/"}],
  papers:[{name:"National education authority",type:"Find approved curriculum and examination materials through the current ministry",url:"https://www.guineaecuatorialpress.com/"}],
  jobs:[{name:"Government of Equatorial Guinea",type:"Check official recruitment notices and verify application channels and deadlines",url:"https://www.guineaecuatorialpress.com/"}],
  teachers:[{name:"National education authority",type:"Verify teacher qualifications and recruitment rules through current official notices",url:"https://www.guineaecuatorialpress.com/"}],
  further:[{name:"Government of Equatorial Guinea",url:"https://www.guineaecuatorialpress.com/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "sao-tome-and-principe": {
  researchStatus:"The Ministry of Education portal has not yet been independently validated for every field. Verify the current official site, approved curriculum, school-year calendar and examination/recruitment notices.",
  authority:"Ministry responsible for education; verify current official name and division of responsibilities for higher education and vocational training.",
  officialLanguages:"Portuguese is the official language; Forro, Angolar, Principense and Cape Verdean Creole are also spoken. Confirm instructional-language arrangements by level.",
  curriculum:"Use the latest ministry-approved curriculum and programme publications; verify their date and applicability.",
  system:"The system includes preschool, basic/primary, secondary, technical/vocational and higher education. Confirm current grade and qualification rules from official sources.",
  termCalendar:"Current dates not entered; consult the latest official school-year circular.",
  calendar:"Do not infer dates from older notices; verify the current calendar and any amendments.",
  exams:[{name:"National education authority",body:"Check current official examination and candidate notices with the responsible ministry.",level:"School examinations",url:"https://www.gov.st/"}],
  schools:[{name:"Government of São Tomé and Príncipe",type:"Government discovery portal; validate current ministry school-list links",url:"https://www.gov.st/"}],
  papers:[{name:"National education authority",type:"Locate approved curriculum and examination materials through current ministry publications",url:"https://www.gov.st/"}],
  jobs:[{name:"Government of São Tomé and Príncipe",type:"Check current official public-service and education recruitment notices",url:"https://www.gov.st/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher qualifications and recruitment rules through current official notices",url:"https://www.gov.st/"}],
  further:[{name:"Government of São Tomé and Príncipe",url:"https://www.gov.st/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "cabo-verde": {
  researchStatus:"The official Ministry of Education portal was located and displays education services, learning materials, public announcements and recruitment/competition notices. Verify the date and status of each individual item before treating it as active.",
  authority:"Ministry of Education, Professional Training, Higher Education, Science and Innovation (confirm the current official title as published on the ministry portal).",
  officialLanguages:"Portuguese is the official language; Cape Verdean Creole is widely spoken. Confirm language-of-instruction policy by level and programme.",
  curriculum:"The ministry portal provides official education guidance and school learning materials, including subject resources. Check the current grade, edition and publication date.",
  system:"The system includes preschool, basic education, secondary, technical/professional training and higher education. Confirm current grade and qualification rules from ministry documents.",
  termCalendar:"Current school dates not entered; consult the latest official ministry announcement.",
  calendar:"Use the latest school-year calendar published by the ministry and check for later updates.",
  exams:[{name:"Ministry of Education",body:"Official education guidance and learning resources; confirm current examination notices and timetables.",level:"School education",url:"https://minedu.gov.cv/"}],
  schools:[{name:"Ministry of Education",type:"National authority; verify school directory and current education statistics on the ministry portal",url:"https://minedu.gov.cv/"}],
  papers:[{name:"Ministry of Education",type:"Official learning materials and guidance; verify grade, subject and current edition",url:"https://minedu.gov.cv/"}],
  jobs:[{name:"Ministry of Education",type:"Portal includes competition and announcement notices; verify each active notice and deadline",url:"https://minedu.gov.cv/"}],
  teachers:[{name:"Ministry of Education",type:"Check official recruitment competitions and qualification requirements in the relevant notice",url:"https://minedu.gov.cv/"}],
  further:[{name:"Ministry of Education",url:"https://minedu.gov.cv/"}],
  sources:[{label:"Ministry of Education, Cabo Verde",url:"https://minedu.gov.cv/"}]
 },
 "comoros": {
  researchStatus:"National education authorities are identified in international education directories. Validate the current official ministry website, ministry titles and dated calendar/examination documents before marking details complete.",
  authority:"National ministry responsible for education; verify current official title and division of duties for higher education and vocational training.",
  officialLanguages:"Comorian (Shikomori), Arabic and French are official languages. Confirm language-of-instruction arrangements by level.",
  curriculum:"Use current approved curriculum and examination publications from the responsible ministry; verify the issue date and applicable cycle.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm current grade structure and qualification requirements from official sources.",
  termCalendar:"Current school dates not entered; check the latest official ministry circular.",
  calendar:"Verify the current school-year calendar and any amendments through the responsible ministry.",
  exams:[{name:"National education authority",body:"Check current examination notices and timetables through official ministry publications.",level:"School examinations",url:"https://beit-salam.km/"}],
  schools:[{name:"Government of Comoros",type:"Government discovery portal; validate current education ministry and school directory links",url:"https://beit-salam.km/"}],
  papers:[{name:"National education authority",type:"Locate approved curriculum and examination resources through the current ministry",url:"https://beit-salam.km/"}],
  jobs:[{name:"Government of Comoros",type:"Check current government and ministry recruitment notices",url:"https://beit-salam.km/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher qualifications and recruitment rules from current official notices",url:"https://beit-salam.km/"}],
  further:[{name:"Government of Comoros",url:"https://beit-salam.km/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "guinea": {
  researchStatus:"The national education ministry is identified in international education-source directories. Confirm current ministry portals and approved, dated curriculum and examination notices before marking fields verified.",
  authority:"Ministry responsible for pre-university education and literacy; higher education is overseen by a separate national portfolio. Verify current ministry titles.",
  officialLanguages:"French is the official language; several national languages are widely used. Confirm language-of-instruction policy by level and programme.",
  curriculum:"Consult current ministry-approved programmes, syllabuses and assessment notices; check their publication date and applicability.",
  system:"The system includes preschool, primary, secondary, technical/vocational and higher education. Confirm current cycles and qualification names from official documents.",
  termCalendar:"Current dates not entered; use the latest ministry school-year circular.",
  calendar:"Check the latest dated official calendar and subsequent amendments.",
  exams:[{name:"National education authority",body:"Verify current examination bodies, candidate requirements and timetables from official notices.",level:"School examinations",url:"https://www.education.gov.gn/"}],
  schools:[{name:"National education authority",type:"Official starting point; confirm current school register and education statistics",url:"https://www.education.gov.gn/"}],
  papers:[{name:"National education authority",type:"Check current approved curriculum and examination materials",url:"https://www.education.gov.gn/"}],
  jobs:[{name:"National education authority",type:"Check current ministry and public-service recruitment notices",url:"https://www.education.gov.gn/"}],
  teachers:[{name:"National education authority",type:"Confirm teacher qualification and recruitment requirements through current official notices",url:"https://www.education.gov.gn/"}],
  further:[{name:"Government of Guinea",url:"https://www.gouvernement.gov.gn/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "guinea-bissau": {
  researchStatus:"The national education portfolio is identified in international education-source directories. Confirm the current ministry website and approved curricula, examination calendars and recruitment notices before treating fields as verified.",
  authority:"Ministry responsible for national education, higher education and scientific research; verify the current official title and administrative structure.",
  officialLanguages:"Portuguese is the official language; Guinea-Bissau Creole and national languages are widely spoken. Confirm language-of-instruction policy by level.",
  curriculum:"Use current approved ministry programmes and circulars; verify the edition and school cycle before publishing.",
  system:"The system includes preschool, basic/primary, secondary, technical/vocational and higher education. Confirm current grade progression and qualifications from official publications.",
  termCalendar:"Current dates not entered; consult the latest official ministry calendar.",
  calendar:"Verify the current school-year circular and any amendments through the responsible ministry.",
  exams:[{name:"National education authority",body:"Confirm current national examination arrangements and timetables from official ministry notices.",level:"School examinations",url:"https://www.gov.gw/"}],
  schools:[{name:"Government of Guinea-Bissau",type:"Government discovery portal; validate current ministry and school-register links",url:"https://www.gov.gw/"}],
  papers:[{name:"National education authority",type:"Locate approved curriculum and examination resources through current ministry publications",url:"https://www.gov.gw/"}],
  jobs:[{name:"Government of Guinea-Bissau",type:"Check current public-service and education recruitment notices",url:"https://www.gov.gw/"}],
  teachers:[{name:"National education authority",type:"Verify teacher qualification and recruitment requirements through current official notices",url:"https://www.gov.gw/"}],
  further:[{name:"Government of Guinea-Bissau",url:"https://www.gov.gw/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "djibouti": {
  researchStatus:"The Ministry of National Education and Vocational Training is identified in international education directories. Confirm current official portal, approved curricula, examination arrangements and school-year calendar.",
  authority:"Ministry of National Education and Vocational Training (MENFOP); confirm current official name and responsibilities.",
  officialLanguages:"Arabic and French are official languages; Somali and Afar are widely spoken. Confirm the language-of-instruction arrangements by level.",
  curriculum:"Consult current ministry-approved curriculum and programme documents; verify their publication date and applicable grade.",
  system:"The system includes preschool, primary, middle/secondary, vocational and higher education. Confirm current cycles and qualifications from official publications.",
  termCalendar:"Current dates not entered; use the latest ministry circular.",
  calendar:"Verify current school-year dates and any amendments with MENFOP.",
  exams:[{name:"Ministry of National Education and Vocational Training",body:"Official starting point for school examination and assessment information; check current notices.",level:"School examinations",url:"https://www.education.gov.dj/"}],
  schools:[{name:"Ministry of National Education and Vocational Training",type:"National authority; verify current school directory and education statistics",url:"https://www.education.gov.dj/"}],
  papers:[{name:"Ministry of National Education and Vocational Training",type:"Locate approved curriculum and assessment resources; verify current editions",url:"https://www.education.gov.dj/"}],
  jobs:[{name:"Ministry of National Education and Vocational Training",type:"Check current ministry and public-service recruitment notices",url:"https://www.education.gov.dj/"}],
  teachers:[{name:"Ministry of National Education and Vocational Training",type:"Verify teacher qualification, training and recruitment requirements through current official notices",url:"https://www.education.gov.dj/"}],
  further:[{name:"Government of Djibouti",url:"https://www.presidence.dj/"}],
  sources:[{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 },
 "eritrea": {
  researchStatus:"The Ministry of Education is identified in international education-source directories. Current official web access, curriculum versions, examination notices and calendar publications still require direct validation.",
  authority:"Ministry of Education, State of Eritrea.",
  officialLanguages:"Tigrinya, Arabic and English are used in national contexts; language-of-instruction policy varies by region and educational level and should be confirmed from current ministry policy.",
  curriculum:"Use current ministry-approved curriculum, textbook and examination publications; verify the edition and applicable grade.",
  system:"The system includes basic education, secondary education, technical/vocational and higher education. Confirm current grade structure and qualification requirements from official sources.",
  termCalendar:"Current dates not entered; consult the latest official ministry notice.",
  calendar:"Verify the current academic calendar through the ministry and school notices.",
  exams:[{name:"Ministry of Education",body:"Check current official assessment and examination announcements; no dates are assumed here.",level:"School examinations",url:"https://moe.gov.er/"}],
  schools:[{name:"Ministry of Education",type:"Official starting point; validate current school directories and education statistics",url:"https://moe.gov.er/"}],
  papers:[{name:"Ministry of Education",type:"Locate approved curricula, textbooks and assessment resources; verify versions",url:"https://moe.gov.er/"}],
  jobs:[{name:"Ministry of Education",type:"Check current official recruitment and education-sector notices",url:"https://moe.gov.er/"}],
  teachers:[{name:"Ministry of Education",type:"Verify teacher training, qualifications and recruitment requirements through official notices",url:"https://moe.gov.er/"}],
  further:[{name:"Ministry of Education",url:"https://moe.gov.er/"}],
  sources:[{label:"UNESCO IICBA country briefs",url:"https://www.iicba.unesco.org/en/country-briefs"},{label:"Yale University Library African Studies official-government guide",url:"https://guides.library.yale.edu/c.php?g=1532971&p=11487447"}]
 }
};
Object.keys(africaResearchProfilesBatch4).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(africaResearchProfilesBatch4[slug]).forEach(function(field){target[field]=africaResearchProfilesBatch4[slug][field];});
});


/* Africa research batch 5: current ministry portals and official-source guidance. */
const africaResearchProfilesBatch5 = {
 "libya": {
  researchStatus:"The Ministry of Education portal and Educational Curricula and Educational Research Centre publish current school information. The ministry website reported the 2026–2027 school-year launch and school/examination dates in September 2026; always open the latest official notice before using exact dates.",
  authority:"Ministry of Education; Educational Curricula and Educational Research Centre for curriculum and schoolbooks.",
  officialLanguages:"Arabic is the official language; other languages are spoken in communities. Confirm the language-of-instruction rules for the relevant school and programme.",
  curriculum:"The Educational Curricula and Educational Research Centre is responsible for preparing and developing basic and secondary curricula and textbooks. Check the portal for the current grade, subject and academic-year edition.",
  system:"School education includes basic and secondary stages, alongside technical/vocational and higher education. Verify current cycle names, grade progression and qualification rules from ministry publications.",
  termCalendar:"The Ministry of Education published information for the 2026–2027 school year in September 2026; use the current official calendar and later amendments.",
  calendar:"Official 2026–2027 dates are available through the Ministry of Education's current notices. Verify the relevant grade/stage and latest amendments before publishing dates.",
  exams:[{name:"Ministry of Education",body:"Official school and public-examination notices; consult the current 2026–2027 schedule and amendments.",level:"Basic and secondary",url:"https://moe.gov.ly/"},{name:"Educational Curricula and Educational Research Centre",body:"Official curriculum and textbook portal with grade/subject/year filters.",level:"Basic and secondary",url:"https://cerc.moe.gov.ly/educational-curricul/"}],
  schools:[{name:"Ministry of Education",type:"Official ministry portal; verify current school directories and local education-monitorate coverage",url:"https://moe.gov.ly/"}],
  papers:[{name:"Educational Curricula and Educational Research Centre",type:"Official curriculum and textbook portal; check academic year, grade and subject",url:"https://cerc.moe.gov.ly/educational-curricul/"}],
  jobs:[{name:"Ministry of Education",type:"Check dated official recruitment and education-sector announcements; confirm application deadlines",url:"https://moe.gov.ly/"}],
  teachers:[{name:"Ministry of Education",type:"Verify current teacher appointment, qualification and professional requirements through official notices",url:"https://moe.gov.ly/"}],
  further:[{name:"Ministry of Higher Education and Scientific Research",url:"https://mhesr.gov.ly/"}],
  sources:[{label:"Libya Ministry of Education",url:"https://moe.gov.ly/"},{label:"Educational Curricula and Educational Research Centre",url:"https://cerc.moe.gov.ly/educational-curricul/"}]
 },
 "sudan": {
  researchStatus:"The Ministry of National Education portal lists curricula, examination materials, school calendar resources and examination schedules. Confirm the current notice and whether it applies nationally or to a particular examination session/region.",
  authority:"Ministry of National Education; verify current division of responsibilities for general education and higher education through official government sources.",
  officialLanguages:"Arabic is the principal official language of national education and government; English and Sudan's many local languages are also used in education and communities. Confirm current policy and regional language-of-instruction rules.",
  curriculum:"The ministry portal provides curriculum materials for primary, intermediate and secondary stages. Check the class, subject and publication year because some visible resources relate to earlier years.",
  system:"School pathways include primary, intermediate and secondary education, alongside technical/vocational and higher education. Confirm current grade and certificate requirements in official notices.",
  termCalendar:"A 2026 school-calendar resource is listed on the Ministry of National Education portal. Verify the latest version and any revisions before using dates.",
  calendar:"Official school-calendar and examination resources are available from the ministry portal; confirm current dates and the applicable jurisdiction/session.",
  exams:[{name:"Ministry of National Education",body:"Portal lists national examination schedules, including Sudanese Certificate notices; check the latest session and date.",level:"Primary/intermediate/secondary",url:"https://gmoe.gov.sd/"}],
  schools:[{name:"Ministry of National Education",type:"Official education portal; verify current school directory, state coverage and statistics",url:"https://gmoe.gov.sd/"}],
  papers:[{name:"Ministry of National Education",type:"Curriculum, subject materials and examination resources; confirm grade and year",url:"https://gmoe.gov.sd/"}],
  jobs:[{name:"Ministry of National Education",type:"Check current official ministry and public-service recruitment announcements",url:"https://gmoe.gov.sd/"}],
  teachers:[{name:"Ministry of National Education",type:"Verify teacher recruitment and qualification requirements through current ministry notices",url:"https://gmoe.gov.sd/"}],
  further:[{name:"Ministry of Higher Education and Scientific Research",url:"https://mohe.gov.sd/"}],
  sources:[{label:"Ministry of National Education",url:"https://gmoe.gov.sd/"}]
 },
 "south-sudan": {
  researchStatus:"The Ministry of General Education and Instruction has an active official portal with curriculum, education statistics, job and scholarship information. It announced the 2026 national examination timetable in October 2026; use the current official timetable and later notices.",
  authority:"Ministry of General Education and Instruction (MoGEI); state ministries of education also have implementation responsibilities.",
  officialLanguages:"English is the official working language; numerous national languages are spoken. Verify actual language-of-instruction policy by level and location.",
  curriculum:"MoGEI is responsible for national curriculum development, teaching and learning materials, assessment policy, teacher standards and school inspection. Use the current curriculum portal and confirm the grade/version.",
  system:"General education includes primary and secondary schooling, with technical/vocational and higher-education pathways. Confirm current grade progression and qualification details from MoGEI notices.",
  termCalendar:"Current school term dates not entered; consult the latest MoGEI circular and state-level notices.",
  calendar:"Check MoGEI's current calendar and state-specific notices; do not infer dates from older school-year documents.",
  exams:[{name:"Ministry of General Education and Instruction",body:"Official press releases include the 2026 national CPE/CSE examination timetable; consult the latest timetable and candidate notices.",level:"Primary and secondary",url:"https://www.mogei.gov.ss/"}],
  schools:[{name:"Ministry of General Education and Instruction",type:"Official national authority; verify current school register and state-level coverage",url:"https://www.mogei.gov.ss/"}],
  papers:[{name:"Ministry of General Education and Instruction",type:"Official curriculum portal and teaching/learning materials; verify current versions",url:"https://www.mogei.gov.ss/"}],
  jobs:[{name:"Ministry of General Education and Instruction",type:"Official jobs/opportunities section; verify each notice, eligibility and deadline",url:"https://www.mogei.gov.ss/"}],
  teachers:[{name:"Ministry of General Education and Instruction",type:"National authority for teacher recruitment, training and deployment policy; check current requirements",url:"https://www.mogei.gov.ss/"}],
  further:[{name:"Ministry of Higher Education, Science and Technology",url:"https://www.mohest.gov.ss/"}],
  sources:[{label:"Ministry of General Education and Instruction",url:"https://www.mogei.gov.ss/"},{label:"MoGEI mandate and responsibilities",url:"https://mogei.gov.ss/about"}]
 },
 "somalia": {
  researchStatus:"The Federal Ministry of Education, Culture and Higher Education has an active official portal covering national policy, curriculum, basic education, technical/vocational and higher education. Federal member-state implementation and school details may vary; verify jurisdiction and document date.",
  authority:"Federal Ministry of Education, Culture and Higher Education; Federal Member States have education ministries and implementation responsibilities.",
  officialLanguages:"Somali and Arabic are official languages. English and Arabic are also used in parts of schooling and higher education; verify language of instruction for the specific institution and region.",
  curriculum:"The federal ministry is responsible for national education policy, curriculum and quality standards. Confirm current curriculum documents and the relevant Federal Member State's implementation.",
  system:"Education includes early childhood, primary, secondary, technical/vocational and higher education. Confirm current grade structure, assessment and equivalency rules from official federal/state publications.",
  termCalendar:"Current nationwide school dates not entered; consult the federal ministry and relevant Federal Member State ministry for the latest calendar.",
  calendar:"Check current federal and state-level circulars; school calendars may vary by region and education authority.",
  exams:[{name:"Federal Ministry of Education, Culture and Higher Education",body:"Official national education and curriculum policy source; verify current national examination notices and the relevant state authority.",level:"Basic and secondary",url:"https://moe.gov.so/"}],
  schools:[{name:"Federal Ministry of Education, Culture and Higher Education",type:"Official federal authority; verify school lists and regional coverage with relevant state ministries",url:"https://moe.gov.so/"}],
  papers:[{name:"Federal Ministry of Education, Culture and Higher Education",type:"Official curriculum and learning-resource starting point; verify grade, year and regional applicability",url:"https://moe.gov.so/"}],
  jobs:[{name:"Federal Ministry of Education, Culture and Higher Education",type:"Check official federal and state-level education recruitment notices",url:"https://moe.gov.so/"}],
  teachers:[{name:"Federal Ministry of Education, Culture and Higher Education",type:"Confirm current teacher standards, training and recruitment requirements with the federal/state authority",url:"https://moe.gov.so/"}],
  further:[{name:"Federal Ministry of Education, Culture and Higher Education",url:"https://moe.gov.so/"}],
  sources:[{label:"Federal Ministry of Education, Culture and Higher Education",url:"https://moe.gov.so/"},{label:"Office of the Prime Minister government directory",url:"https://opm.gov.so/en/government-directory/m72z0hlsodkct3c7ldkzx3xm"}]
 },
 "mauritania": {
  researchStatus:"The Ministry of National Education and Education System Reform has an active official portal with ministry announcements, online services and education-sector information. Verify each notice's date, status and applicability before presenting it as current.",
  authority:"Ministry of National Education and Education System Reform; separate national portfolios oversee higher education and vocational training.",
  officialLanguages:"Arabic is the official language. French is used in some educational and professional settings; Pulaar, Soninke and Wolof are also national languages. Confirm current language-of-instruction rules by level.",
  curriculum:"Use the ministry's current approved curricula, programmes and education-system reform publications; confirm edition and applicable grade.",
  system:"The system includes preschool, primary, lower/upper secondary, technical/vocational and higher education. Confirm current grade progression and qualification rules from ministry publications.",
  termCalendar:"Current school dates not entered; consult the latest official ministry circular and school notices.",
  calendar:"Check the ministry's current school-year calendar and any amendments before publishing exact dates.",
  exams:[{name:"Ministry of National Education and Education System Reform",body:"Official education announcements and online services; confirm current examination body, candidate requirements and timetable.",level:"School examinations",url:"https://education.gov.mr/"}],
  schools:[{name:"Ministry of National Education and Education System Reform",type:"Official ministry portal; verify current school register, regional coverage and statistics",url:"https://education.gov.mr/"}],
  papers:[{name:"Ministry of National Education and Education System Reform",type:"Official curriculum and education resources; confirm grade, year and approval status",url:"https://education.gov.mr/"}],
  jobs:[{name:"Ministry of National Education and Education System Reform",type:"Ministry news includes recruitment competitions; verify the active notice, eligibility and deadline",url:"https://education.gov.mr/"}],
  teachers:[{name:"Ministry of National Education and Education System Reform",type:"Verify teacher recruitment, qualification and competition requirements in current official notices",url:"https://education.gov.mr/"}],
  further:[{name:"Government of Mauritania",url:"https://www.gov.mr/"}],
  sources:[{label:"Ministry of National Education and Education System Reform",url:"https://education.gov.mr/"}]
 }
};
Object.keys(africaResearchProfilesBatch5).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(africaResearchProfilesBatch5[slug]).forEach(function(field){target[field]=africaResearchProfilesBatch5[slug][field];});
});


/* Asia research batch 1: country-level education authority and language records.
 * Direct portals are starting points; verify each link, dated notice, and regional scope before marking as fully verified.
 */
const asiaResearchProfilesBatch1 = {};
[["afghanistan","Afghanistan","Ministry of Education","Dari and Pashto; verify regional and programme-specific language policy","https://moe.gov.af/"],["armenia","Armenia","Ministry of Education, Science, Culture and Sport","Armenian; minority-language provision varies","https://escs.am/"],["azerbaijan","Azerbaijan","Ministry of Science and Education","Azerbaijani; minority-language provision varies","https://edu.gov.az/"],["bahrain","Bahrain","Ministry of Education","Arabic; English is widely used as a second language in education","https://www.moe.gov.bh/"],["bangladesh","Bangladesh","Ministry of Education; Directorate of Primary Education","Bangla; English-medium and other streams also operate","https://moedu.gov.bd/"],["bhutan","Bhutan","Ministry of Education and Skills Development","Dzongkha is the national language; English is widely used as a medium of instruction","https://education.gov.bt/"],["brunei","Brunei","Ministry of Education","Malay is the official language; English is used in education, including bilingual schooling","https://www.moe.gov.bn/"],["cambodia","Cambodia","Ministry of Education, Youth and Sport","Khmer; minority-language and multilingual programmes may be available","https://moeys.gov.kh/"],["china","China","Ministry of Education","Standard Chinese (Putonghua) is the national standard spoken language; minority-language education varies by region","https://en.moe.gov.cn/"],["cyprus","Cyprus","Ministry of Education, Sport and Youth","Greek and Turkish are official languages; school language depends on community and school","https://www.moec.gov.cy/"],["georgia","Georgia","Ministry of Education, Science and Youth","Georgian; minority-language provision varies","https://mes.gov.ge/"],["india","India","Ministry of Education; state and union-territory education departments","Hindi and English are used at Union level; constitutionally scheduled and regional languages are important in school instruction","https://www.education.gov.in/"],["indonesia","Indonesia","Ministry of Primary and Secondary Education; Ministry of Higher Education, Science and Technology","Indonesian (Bahasa Indonesia); local languages are also used in some early-grade and local programmes","https://www.kemendikdasmen.go.id/"],["iran","Iran","Ministry of Education","Persian (Farsi); other languages are spoken and used in some local contexts","https://www.medu.gov.ir/"],["iraq","Iraq","Ministry of Education; Kurdistan Region Ministry of Education","Arabic and Kurdish are official languages; school language and authority may vary by region","https://moedu.gov.iq/"],["israel","Israel","Ministry of Education","Hebrew and Arabic are used in separate and mixed educational settings; check sector-specific rules","https://www.gov.il/en/departments/ministry_of_education/govil-landing-page"],["japan","Japan","Ministry of Education, Culture, Sports, Science and Technology (MEXT)","Japanese; international and multilingual programmes are available in some schools","https://www.mext.go.jp/en/"],["jordan","Jordan","Ministry of Education","Arabic; English is widely taught","https://moe.gov.jo/"],["kazakhstan","Kazakhstan","Ministry of Education; Ministry of Science and Higher Education","Kazakh is the state language; Russian is officially used in government and widely used in education","https://www.gov.kz/memleket/entities/edu?lang=en"],["kuwait","Kuwait","Ministry of Education","Arabic; English is widely taught and used in some school programmes","https://www.moe.edu.kw/"],["kyrgyzstan","Kyrgyzstan","Ministry of Education and Science","Kyrgyz is the state language; Russian has official status; school language varies","https://edu.gov.kg/"],["laos","Laos","Ministry of Education and Sports","Lao; ethnic minority languages are spoken and may be used in local contexts","https://moes.edu.la/"],["lebanon","Lebanon","Ministry of Education and Higher Education","Arabic is official; French and English are widely used as languages of instruction in many schools","https://www.mehe.gov.lb/"],["malaysia","Malaysia","Ministry of Education","Malay is the national language; Chinese-, Tamil- and English-medium streams also operate","https://www.moe.gov.my/"],["maldives","Maldives","Ministry of Education","Dhivehi; English is widely used as a medium of instruction for many subjects","https://www.moe.gov.mv/"],["mongolia","Mongolia","Ministry of Education","Mongolian; minority-language provision varies by location","https://moe.gov.mn/"],["myanmar","Myanmar","Ministry of Education","Myanmar language is widely used; ethnic languages and instruction practices vary by region and provider","https://www.moe.gov.mm/"],["nepal","Nepal","Ministry of Education, Science and Technology; provincial and local education authorities","Nepali is the official language; many local languages are used in communities and some schools","https://moest.gov.np/"],["north-korea","North Korea","Ministry of Education","Korean; public information and accessible official school directories are limited","https://www.dprkportal.kp/"],["oman","Oman","Ministry of Education","Arabic; English is widely taught","https://home.moe.gov.om/"],["pakistan","Pakistan","Federal Ministry of Federal Education and Professional Training; provincial education departments","Urdu and English are used in official and educational contexts; provincial and regional languages are significant","https://www.mofept.gov.pk/"],["palestine","Palestine","Ministry of Education and Higher Education","Arabic; English is widely taught","https://www.moe.edu.ps/"],["philippines","Philippines","Department of Education (DepEd); Commission on Higher Education","Filipino and English are official languages; regional languages are used in education, particularly in early grades","https://www.deped.gov.ph/"],["qatar","Qatar","Ministry of Education and Higher Education","Arabic; English is widely used in international and private schools","https://www.edu.gov.qa/"],["saudi-arabia","Saudi Arabia","Ministry of Education","Arabic; English is taught and used in some programmes","https://www.moe.gov.sa/"],["singapore","Singapore","Ministry of Education","English, Malay, Mandarin Chinese and Tamil are official languages; English is the main language of instruction in most schools","https://www.moe.gov.sg/"],["south-korea","South Korea","Ministry of Education","Korean; foreign-language and international-school programmes also operate","https://english.moe.go.kr/"],["sri-lanka","Sri Lanka","Ministry of Education; provincial education authorities","Sinhala and Tamil are official and national languages; English is a link language and used in some programmes","https://moe.gov.lk/"],["syria","Syria","Ministry of Education","Arabic; local and minority-language practices may vary","https://moed.gov.sy/"],["tajikistan","Tajikistan","Ministry of Education and Science","Tajik is the state language; Russian and minority languages are also used in some education contexts","https://maorif.tj/"],["thailand","Thailand","Ministry of Education","Thai; minority and local languages are spoken and may be used in local programmes","https://www.moe.go.th/"],["timor-leste","Timor-Leste","Ministry of Education","Tetum and Portuguese are official languages; Indonesian and English are also used in some settings","https://www.moe.gov.tl/"],["turkmenistan","Turkmenistan","Ministry of Education","Turkmen; Russian and minority languages may be used in some settings","https://edu.gov.tm/"],["united-arab-emirates","United Arab Emirates","Ministry of Education; local education regulators including KHDA and ADEK","Arabic is official; English is widely used in private and international schools","https://www.moe.gov.ae/"],["uzbekistan","Uzbekistan","Ministry of Preschool and School Education; Ministry of Higher Education, Science and Innovation","Uzbek is the state language; Russian and other minority languages are used in some schools","https://uzedu.uz/"],["vietnam","Vietnam","Ministry of Education and Training","Vietnamese; ethnic-minority language policies and provision vary by locality","https://moet.gov.vn/"],["yemen","Yemen","Ministry of Education; education administration and access vary by area","Arabic; current school operations and authority arrangements can vary by location","https://moe-ye.net/"]].forEach(function(row){
 const key=row[0], name=row[1], authority=row[2], language=row[3], portal=row[4];
 asiaResearchProfilesBatch1[key]={
  researchStatus:"Country-level starting profile added. The authority and language summary are curated; verify current curriculum editions, examination calendars, school registers and recruitment notices directly with the relevant national or subnational authority before marking those fields fully verified.",
  authority:authority,
  officialLanguages:language,
  curriculum:"Consult the official education authority portal for the current approved curriculum, grade/subject syllabuses and textbook editions. Verify academic year, language stream, regional jurisdiction and publication date.",
  system:"Education structure, grade names, assessment routes and public/private school regulation may differ by level, region and school type. Confirm current structure using official ministry publications and UNESCO UIS country education profiles.",
  termCalendar:"Current term dates not entered as verified. Check the latest dated national and, where relevant, regional/provincial calendar.",
  calendar:"Use the current official school calendar and later amendments; do not infer dates from previous academic years.",
  exams:[{name:authority,body:"Check current official examination notices, candidate guidance and published timetables; the exact examination body and calendar may vary by level or region.",level:"School education",url:portal}],
  schools:[{name:authority,type:"Official authority starting point; a complete, current school-by-school directory has not yet been independently verified for this country.",url:portal}],
  papers:[{name:authority,type:"Official curriculum/textbook starting point; verify grade, subject, language and academic-year edition.",url:portal}],
  jobs:[{name:authority,type:"Check dated official recruitment announcements and confirm eligibility, application channel and deadline.",url:portal}],
  teachers:[{name:authority,type:"Verify teacher qualification, registration, licensing and recruitment rules with the competent national or subnational authority.",url:portal}],
  sources:[{label:name+" education authority portal",url:portal},{label:"UNESCO UIS SDG 4 country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"},{label:"UNESCO national education systems",url:"https://gem-report-education-profiles.unesco.org/national-education-systems.html"}]
 };
});
Object.keys(asiaResearchProfilesBatch1).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(asiaResearchProfilesBatch1[slug]).forEach(function(field){target[field]=asiaResearchProfilesBatch1[slug][field];});
});
/* United States: enrich existing profile with authoritative national and state directory resources. */
countryData["united-states"]=countryData["united-states"]||{};
countryData["united-states"].authority="The U.S. Department of Education provides federal policy and data; education is primarily administered by state and local authorities, and teacher licensure is state-specific.";
countryData["united-states"].officialLanguages="There is no single official language at the federal level; English is the primary language of instruction in most schools, with multilingual and bilingual programmes varying by state and district.";
countryData["united-states"].schools=[{name:"NCES School and District Navigator",type:"Official federal public-school and district directory; data reflect the stated school year.",url:"https://nces.ed.gov/ccd/schoolmap/"},{name:"NCES school locator",type:"Search public schools nationwide",url:"https://nces.ed.gov/ccd/schoolsearch/"},{name:"NCES private school locator",type:"Search private schools",url:"https://nces.ed.gov/surveys/pss/privateschoolsearch/"},{name:"State Education Agencies",type:"Official state education agency directory",url:"https://nces.ed.gov/ccd/ccseas.asp"}];
countryData["united-states"].teachers=[{name:"U.S. Department of Education",type:"Teacher certification/licensure is set by each state; consult the relevant state education agency.",url:"https://www.ed.gov/about/contact-us/faqs/Elementary%20and%20Secondary%20Education"},{name:"State Education Agencies",type:"Find state-specific licensure and certification requirements",url:"https://nces.ed.gov/ccd/ccseas.asp"}];
countryData["united-states"].sources=(countryData["united-states"].sources||[]).concat([{label:"NCES Common Core of Data",url:"https://nces.ed.gov/ccd/aboutccd.asp"},{label:"NCES state education agencies",url:"https://nces.ed.gov/ccd/ccseas.asp"}]);

/* Other continents batch 1: national/subnational education authority starting points for Europe, the Americas and Oceania.
 * These are research profiles, not a claim that every ministry URL, school register, calendar or exam schedule has been independently verified.
 */
const otherContinentsProfilesBatch1 = {};
[["albania","Albania","Ministry of Education and Sports","Albanian","https://arsimi.gov.al/","Europe"],["andorra","Andorra","Ministry responsible for education and higher education","Catalan","https://www.govern.ad/","Europe"],["austria","Austria","Federal Ministry of Education","German","https://www.bmb.gv.at/","Europe"],["belarus","Belarus","Ministry of Education","Belarusian and Russian","https://edu.gov.by/","Europe"],["belgium","Belgium","Education authorities of the Flemish, French and German-speaking Communities","Dutch, French and German, depending on community","https://www.belgium.be/en/education","Europe"],["bosnia-and-herzegovina","Bosnia and Herzegovina","Education ministries at entity, cantonal and Brčko District levels; no single centralized school authority","Bosnian, Croatian and Serbian","https://www.mcp.gov.ba/","Europe"],["bulgaria","Bulgaria","Ministry of Education and Science","Bulgarian","https://www.mon.bg/","Europe"],["croatia","Croatia","Ministry of Science, Education and Youth","Croatian","https://mzom.gov.hr/","Europe"],["czechia","Czechia","Ministry of Education, Youth and Sports","Czech","https://msmt.gov.cz/","Europe"],["denmark","Denmark","Ministry of Children and Education","Danish","https://eng.uvm.dk/","Europe"],["estonia","Estonia","Ministry of Education and Research","Estonian","https://www.hm.ee/en","Europe"],["finland","Finland","Ministry of Education and Culture; Finnish National Agency for Education","Finnish and Swedish","https://okm.fi/en/frontpage","Europe"],["france","France","Ministry of National Education","French","https://www.education.gouv.fr/","Europe"],["germany","Germany","Education ministries of the 16 Länder; federal coordination through KMK","German; minority and regional-language provision varies","https://www.kmk.org/","Europe"],["greece","Greece","Ministry of Education, Religious Affairs and Sports","Greek","https://www.minedu.gov.gr/","Europe"],["hungary","Hungary","Ministry responsible for public education; relevant education directorates","Hungarian","https://www.kormany.hu/en/ministry-of-interior","Europe"],["iceland","Iceland","Ministry of Education and Children","Icelandic","https://www.government.is/ministries/ministry-of-education-and-children/","Europe"],["ireland","Ireland","Department of Education","Irish and English","https://www.gov.ie/en/department-of-education/","Europe"],["italy","Italy","Ministry of Education and Merit","Italian","https://www.mim.gov.it/","Europe"],["latvia","Latvia","Ministry of Education and Science","Latvian","https://www.izm.gov.lv/en","Europe"],["liechtenstein","Liechtenstein","Office of Education, Government of Liechtenstein","German","https://www.llv.li/","Europe"],["lithuania","Lithuania","Ministry of Education, Science and Sport","Lithuanian","https://smsm.lrv.lt/en/","Europe"],["luxembourg","Luxembourg","Ministry of Education, Children and Youth","Luxembourgish, French and German in different education contexts","https://men.public.lu/en.html","Europe"],["malta","Malta","Ministry for Education, Sport, Youth, Research and Innovation","Maltese and English","https://education.gov.mt/","Europe"],["moldova","Moldova","Ministry of Education and Research","Romanian","https://mec.gov.md/","Europe"],["monaco","Monaco","Department of National Education, Youth and Sports","French","https://en.gouv.mc/Policy-Practice/Education","Europe"],["montenegro","Montenegro","Ministry of Education, Science and Innovation","Montenegrin; Serbian, Bosnian, Albanian and Croatian are also used","https://www.gov.me/mps","Europe"],["netherlands","Netherlands","Ministry of Education, Culture and Science; school boards and municipalities","Dutch; Frisian has official status in Friesland","https://www.government.nl/ministries/ministry-of-education-culture-and-science","Europe"],["north-macedonia","North Macedonia","Ministry of Education and Science","Macedonian and Albanian; language varies by school and community","https://mon.gov.mk/","Europe"],["norway","Norway","Ministry of Education and Research; Norwegian Directorate for Education and Training","Norwegian Bokmål and Nynorsk; Sami language rights apply in designated areas","https://www.regjeringen.no/en/dep/kd/id586/","Europe"],["poland","Poland","Ministry of National Education","Polish","https://www.gov.pl/web/education","Europe"],["portugal","Portugal","Ministry of Education, Science and Innovation","Portuguese","https://www.portugal.gov.pt/en/gc24/ministries/education-science-and-innovation","Europe"],["romania","Romania","Ministry of Education and Research","Romanian; minority-language schooling is available under applicable rules","https://www.edu.ro/","Europe"],["russia","Russia","Ministry of Education; Ministry of Science and Higher Education for higher education","Russian; republic and regional languages may be used in local education","https://edu.gov.ru/","Europe/Asia"],["san-marino","San Marino","Department of Education and Culture","Italian","https://www.gov.sm/","Europe"],["serbia","Serbia","Ministry of Education","Serbian; minority-language education is available in designated contexts","https://prosveta.gov.rs/","Europe"],["slovakia","Slovakia","Ministry of Education, Research, Development and Youth","Slovak; minority-language provision varies","https://www.minedu.sk/","Europe"],["slovenia","Slovenia","Ministry of Education","Slovene; Italian and Hungarian have protected local education contexts","https://www.gov.si/en/state-authorities/ministries/ministry-of-education/","Europe"],["spain","Spain","Ministry of Education, Vocational Training and Sports; autonomous communities","Spanish; co-official regional languages are used in relevant autonomous communities","https://www.educacionfpydeportes.gob.es/","Europe"],["sweden","Sweden","Ministry of Education and Research; Swedish National Agency for Education","Swedish; national minority languages and Sami rights apply","https://www.government.se/government-of-sweden/ministry-of-education-and-research/","Europe"],["switzerland","Switzerland","Cantonal education departments coordinated through EDK/CDIP","German, French, Italian and Romansh; language depends on canton","https://www.edk.ch/en","Europe"],["ukraine","Ukraine","Ministry of Education and Science","Ukrainian; minority-language rights and current local arrangements must be checked","https://mon.gov.ua/eng","Europe"],["argentina","Argentina","Secretariat/Ministry responsible for education; provinces and Buenos Aires City administer schools","Spanish; Indigenous and other community languages are present","https://www.argentina.gob.ar/educacion","South America"],["bolivia","Bolivia","Ministry of Education","Spanish and Indigenous official languages; school language depends on locality and programme","https://www.minedu.gob.bo/","South America"],["brazil","Brazil","Ministry of Education; state and municipal education authorities","Portuguese; Indigenous and sign languages have specific contexts","https://www.gov.br/mec/pt-br","South America"],["chile","Chile","Ministry of Education","Spanish; Indigenous-language and intercultural education programmes exist","https://www.mineduc.cl/","South America"],["colombia","Colombia","Ministry of National Education; departmental and municipal secretariats","Spanish; Indigenous and Creole languages have official status in their territories","https://www.mineducacion.gov.co/portal/","South America"],["ecuador","Ecuador","Ministry of Education","Spanish; Kichwa and Shuar and other ancestral languages have recognised roles","https://educacion.gob.ec/","South America"],["guyana","Guyana","Ministry of Education","English; Indigenous and Creole languages are spoken","https://education.gov.gy/","South America"],["paraguay","Paraguay","Ministry of Education and Sciences","Spanish and Guaraní","https://www.mec.gov.py/","South America"],["peru","Peru","Ministry of Education; regional education directorates","Spanish; Quechua, Aymara and other Indigenous languages are official where predominant","https://www.gob.pe/minedu","South America"],["suriname","Suriname","Ministry of Education, Science and Culture","Dutch is official; Sranan Tongo and other community languages are widely used","https://gov.sr/","South America"],["uruguay","Uruguay","National Public Education Administration (ANEP); Ministry of Education and Culture","Spanish","https://www.anep.edu.uy/","South America"],["venezuela","Venezuela","Ministry of Popular Power for Education","Spanish; Indigenous languages have official recognition for Indigenous peoples","https://www.me.gob.ve/","South America"],["antigua-and-barbuda","Antigua and Barbuda","Ministry of Education, Sports and Creative Industries","English","https://education.gov.ag/","North America/Caribbean"],["bahamas","Bahamas","Ministry of Education and Technical and Vocational Training","English","https://www.ministryofeducationbahamas.com/","North America/Caribbean"],["barbados","Barbados","Ministry of Educational Transformation","English","https://mes.gov.bb/","North America/Caribbean"],["belize","Belize","Ministry of Education, Culture, Science and Technology","English; Belizean Creole, Spanish and Indigenous languages are also used","https://www.moecst.gov.bz/","North America/Central America"],["canada","Canada","Provincial and territorial ministries/departments of education; Council of Ministers of Education, Canada","English and French at federal level; school language depends on province/territory","https://www.cmec.ca/","North America"],["costa-rica","Costa Rica","Ministry of Public Education","Spanish","https://www.mep.go.cr/","North America/Central America"],["cuba","Cuba","Ministry of Education","Spanish","https://www.mined.gob.cu/","North America/Caribbean"],["dominica","Dominica","Ministry of Education, Human Resource Planning, Vocational Training and National Excellence","English; Dominican Creole is widely spoken","https://education.gov.dm/","North America/Caribbean"],["dominican-republic","Dominican Republic","Ministry of Education","Spanish","https://www.minerd.gob.do/","North America/Caribbean"],["el-salvador","El Salvador","Ministry of Education, Science and Technology","Spanish","https://www.mined.gob.sv/","North America/Central America"],["grenada","Grenada","Ministry of Education","English; Grenadian Creole is also spoken","https://www.gov.gd/","North America/Caribbean"],["guatemala","Guatemala","Ministry of Education","Spanish and recognised Mayan, Garifuna and Xinka languages","https://www.mineduc.gob.gt/","North America/Central America"],["haiti","Haiti","Ministry of National Education and Vocational Training","Haitian Creole and French","https://menfp.gouv.ht/","North America/Caribbean"],["honduras","Honduras","Secretariat of Education","Spanish; Indigenous and Afro-descendant languages are also spoken","https://www.se.gob.hn/","North America/Central America"],["jamaica","Jamaica","Ministry of Education, Skills, Youth and Information","English; Jamaican Patois is widely spoken","https://moey.gov.jm/","North America/Caribbean"],["mexico","Mexico","Secretariat of Public Education (SEP); state education authorities","Spanish; Indigenous languages have legal recognition and local education programmes","https://www.gob.mx/sep","North America"],["nicaragua","Nicaragua","Ministry of Education; regional authorities on the Caribbean Coast","Spanish; English Creole and Indigenous languages are used in autonomous regions","https://www.mined.gob.ni/","North America/Central America"],["panama","Panama","Ministry of Education","Spanish; Indigenous languages are used in relevant communities","https://www.meduca.gob.pa/","North America/Central America"],["saint-kitts-and-nevis","Saint Kitts and Nevis","Ministry of Education","English","https://www.gov.kn/","North America/Caribbean"],["saint-lucia","Saint Lucia","Ministry of Education, Sustainable Development, Innovation, Science, Technology and Vocational Training","English; Saint Lucian Creole is widely spoken","https://education.govt.lc/","North America/Caribbean"],["saint-vincent-and-the-grenadines","Saint Vincent and the Grenadines","Ministry of Education and National Reconciliation","English; Vincentian Creole is also spoken","https://education.gov.vc/","North America/Caribbean"],["trinidad-and-tobago","Trinidad and Tobago","Ministry of Education","English; Trinidadian and Tobagonian Creoles are also spoken","https://www.moe.gov.tt/","North America/Caribbean"],["nicaragua","Nicaragua","Ministry of Education","Spanish; English Creole and Indigenous languages are used in autonomous regions","https://www.mined.gob.ni/","North America/Central America"],["australia","Australia","Australian Department of Education; states and territories administer school systems","English is the main language of instruction; Indigenous and community languages are also used","https://www.education.gov.au/","Oceania"],["fiji","Fiji","Ministry of Education","English, iTaukei and Fiji Hindi are widely used in education and society","https://www.education.gov.fj/","Oceania"],["kiribati","Kiribati","Ministry of Education","Gilbertese (I-Kiribati) and English","https://www.moe.gov.ki/","Oceania"],["marshall-islands","Marshall Islands","Ministry of Education, Sports and Training","Marshallese and English","https://www.mecrmi.net/","Oceania"],["micronesia","Micronesia","FSM Department of Education; state education departments","English and state/local languages including Chuukese, Pohnpeian, Kosraean and Yapese","https://national.doe.fm/","Oceania"],["nauru","Nauru","Department of Education","Nauruan and English","https://www.nauru.gov.nr/","Oceania"],["new-zealand","New Zealand","Ministry of Education; Education Review Office","English and Māori; New Zealand Sign Language is an official language","https://www.education.govt.nz/","Oceania"],["palau","Palau","Ministry of Education","Palauan and English","https://www.palaumoe.net/","Oceania"],["papua-new-guinea","Papua New Guinea","Department of Education","English, Tok Pisin, Hiri Motu and many local languages; language of instruction varies by programme","https://www.education.gov.pg/","Oceania"],["samoa","Samoa","Ministry of Education and Culture","Samoan and English","https://www.mesc.gov.ws/","Oceania"],["solomon-islands","Solomon Islands","Ministry of Education and Human Resources Development","English; Solomon Islands Pijin and many local languages are used","https://www.mehrd.gov.sb/","Oceania"],["tonga","Tonga","Ministry of Education and Training","Tongan and English","https://www.education.gov.to/","Oceania"],["tuvalu","Tuvalu","Ministry of Education, Youth and Sports","Tuvaluan and English","https://www.gov.tv/","Oceania"],["vanuatu","Vanuatu","Ministry of Education and Training","Bislama, English and French","https://moet.gov.vu/","Oceania"]].forEach(function(row){
 const key=row[0], name=row[1], authority=row[2], language=row[3], portal=row[4], region=row[5];
 otherContinentsProfilesBatch1[key]={
  researchStatus:"Research profile added for "+region+". Authority and language information is a starting summary; verify the live portal, current policy, school register, curriculum edition, examination calendar and recruitment notice before marking individual fields fully verified.",
  authority:authority,
  officialLanguages:language,
  curriculum:"Consult the national or subnational education authority for current approved curriculum, grade/subject syllabuses and textbook editions. In decentralized systems, verify the relevant state, province, canton, community or local authority.",
  system:"Check current official publications for school stages, grade progression, assessment routes, public/private school regulation and qualifications. Structure can differ by region and school type.",
  termCalendar:"Current term dates have not been independently verified in this profile. Use the latest dated official calendar and check for amendments.",
  calendar:"Use the competent authority's current school-year calendar; dates may vary by region, school system or academic year.",
  exams:[{name:authority,body:"Starting point for official examination notices and regulations. Verify the examination authority, session, candidate guidance and latest timetable.",level:"School education",url:portal}],
  schools:[{name:authority,type:"Official authority starting point. A complete current school-by-school directory has not yet been independently verified here.",url:portal}],
  papers:[{name:authority,type:"Curriculum and learning-resource starting point. Confirm subject, grade, language and academic-year edition.",url:portal}],
  jobs:[{name:authority,type:"Check current dated official recruitment notices; verify eligibility, application route and deadline.",url:portal}],
  teachers:[{name:authority,type:"Confirm teacher qualification, licensing, registration and recruitment rules with the competent authority; rules may be subnational.",url:portal}],
  sources:[{label:name+" education authority / government portal",url:portal},{label:"UNESCO national education systems",url:"https://gem-report-education-profiles.unesco.org/national-education-systems.html"},{label:"UNESCO SDG 4 country profiles",url:"https://www.uis.unesco.org/en/data/sdg4-country-profiles"}]
 };
});
Object.keys(otherContinentsProfilesBatch1).forEach(function(slug){
 const target=countryData[slug]||(countryData[slug]={});
 Object.keys(otherContinentsProfilesBatch1[slug]).forEach(function(field){target[field]=otherContinentsProfilesBatch1[slug][field];});
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