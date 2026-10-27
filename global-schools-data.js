/* CBE Nexus Global Schools country registry.
 * The registry provides country routing and flags; it does not imply that every country's education data is verified.
 */
(function(){
"use strict";
const rows = "Afghanistan|AF\nAlbania|AL\nAlgeria|DZ\nAndorra|AD\nAngola|AO\nAntigua and Barbuda|AG\nArgentina|AR\nArmenia|AM\nAustralia|AU\nAustria|AT\nAzerbaijan|AZ\nBahamas|BS\nBahrain|BH\nBangladesh|BD\nBarbados|BB\nBelarus|BY\nBelgium|BE\nBelize|BZ\nBenin|BJ\nBhutan|BT\nBolivia|BO\nBosnia and Herzegovina|BA\nBotswana|BW\nBrazil|BR\nBrunei|BN\nBulgaria|BG\nBurkina Faso|BF\nBurundi|BI\nCabo Verde|CV\nCambodia|KH\nCameroon|CM\nCanada|CA\nCentral African Republic|CF\nChad|TD\nChile|CL\nChina|CN\nColombia|CO\nComoros|KM\nCongo|CG\nCosta Rica|CR\nCôte d’Ivoire|CI\nCroatia|HR\nCuba|CU\nCyprus|CY\nCzechia|CZ\nDemocratic Republic of the Congo|CD\nDenmark|DK\nDjibouti|DJ\nDominica|DM\nDominican Republic|DO\nEcuador|EC\nEgypt|EG\nEl Salvador|SV\nEquatorial Guinea|GQ\nEritrea|ER\nEstonia|EE\nEswatini|SZ\nEthiopia|ET\nFiji|FJ\nFinland|FI\nFrance|FR\nGabon|GA\nGambia|GM\nGeorgia|GE\nGermany|DE\nGhana|GH\nGreece|GR\nGrenada|GD\nGuatemala|GT\nGuinea|GN\nGuinea-Bissau|GW\nGuyana|GY\nHaiti|HT\nHoly See|VA\nHonduras|HN\nHungary|HU\nIceland|IS\nIndia|IN\nIndonesia|ID\nIran|IR\nIraq|IQ\nIreland|IE\nIsrael|IL\nItaly|IT\nJamaica|JM\nJapan|JP\nJordan|JO\nKazakhstan|KZ\nKenya|KE\nKiribati|KI\nKuwait|KW\nKyrgyzstan|KG\nLaos|LA\nLatvia|LV\nLebanon|LB\nLesotho|LS\nLiberia|LR\nLibya|LY\nLiechtenstein|LI\nLithuania|LT\nLuxembourg|LU\nMadagascar|MG\nMalawi|MW\nMalaysia|MY\nMaldives|MV\nMali|ML\nMalta|MT\nMarshall Islands|MH\nMauritania|MR\nMauritius|MU\nMexico|MX\nMicronesia|FM\nMoldova|MD\nMonaco|MC\nMongolia|MN\nMontenegro|ME\nMorocco|MA\nMozambique|MZ\nMyanmar|MM\nNamibia|NA\nNauru|NR\nNepal|NP\nNetherlands|NL\nNew Zealand|NZ\nNicaragua|NI\nNiger|NE\nNigeria|NG\nNorth Korea|KP\nNorth Macedonia|MK\nNorway|NO\nOman|OM\nPakistan|PK\nPalau|PW\nPalestine|PS\nPanama|PA\nPapua New Guinea|PG\nParaguay|PY\nPeru|PE\nPhilippines|PH\nPoland|PL\nPortugal|PT\nQatar|QA\nRomania|RO\nRussia|RU\nRwanda|RW\nSaint Kitts and Nevis|KN\nSaint Lucia|LC\nSaint Vincent and the Grenadines|VC\nSamoa|WS\nSan Marino|SM\nSao Tome and Principe|ST\nSaudi Arabia|SA\nSenegal|SN\nSerbia|RS\nSeychelles|SC\nSierra Leone|SL\nSingapore|SG\nSlovakia|SK\nSlovenia|SI\nSolomon Islands|SB\nSomalia|SO\nSouth Africa|ZA\nSouth Korea|KR\nSouth Sudan|SS\nSpain|ES\nSri Lanka|LK\nSudan|SD\nSuriname|SR\nSweden|SE\nSwitzerland|CH\nSyria|SY\nTajikistan|TJ\nTanzania|TZ\nThailand|TH\nTimor-Leste|TL\nTogo|TG\nTonga|TO\nTrinidad and Tobago|TT\nTunisia|TN\nTürkiye|TR\nTurkmenistan|TM\nTuvalu|TV\nUganda|UG\nUkraine|UA\nUnited Arab Emirates|AE\nUnited Kingdom|GB\nUnited States|US\nUruguay|UY\nUzbekistan|UZ\nVanuatu|VU\nVenezuela|VE\nVietnam|VN\nYemen|YE\nZambia|ZM\nZimbabwe|ZW";
function slug(s){return s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");}
function flag(code){return code.toUpperCase().replace(/[A-Z]/g,c=>String.fromCodePoint(127397+c.charCodeAt(0)));}
const countryRegistry = rows.split("\n").filter(Boolean).map(line=>{const [name,code]=line.split("|");return {name,code,slug:slug(name),flag:flag(code),url:"/global-schools/"+slug(name)};});
const countryData = {
 "kenya": {
  officialLanguages:"Swahili and English (official languages)",
  authority:"Ministry of Education; Kenya Institute of Curriculum Development (KICD); Kenya National Examinations Council (KNEC)",
  system:"2-6-3-3 structure: 2 years pre-primary, 6 primary, 3 junior school and 3 senior school; post-school pathways include TVET and higher education.",
  calendar:"School term dates are set through Ministry circulars; confirm the current year's official calendar.",
  exams:[{name:"KPSEA",body:"KNEC",level:"Grade 6",url:"https://www.knec.ac.ke/"},{name:"KJSEA",body:"KNEC",level:"Grade 9",url:"https://www.knec.ac.ke/"},{name:"KCSE",body:"KNEC",level:"Secondary / transition context",url:"https://www.knec.ac.ke/"}],
  schools:[{name:"Ministry of Education / NEMIS institution list",type:"Official institution-data source",url:"https://nemis.education.go.ke/Reports/InstitutionList.aspx"},{name:"CBE Nexus Senior Schools Directory",type:"CBE Nexus directory; verify details against Ministry records",url:"/schools-institutions.html"}],
  papers:[{name:"KNEC official site",type:"Official examination body; availability varies by paper and release",url:"https://www.knec.ac.ke/"},{name:"KICD curriculum designs",type:"Official curriculum designs; not past examination papers",url:"https://kicd.ac.ke/cbc-materials/"}],
  jobs:[{name:"Teachers Service Commission (TSC)",type:"Public teacher recruitment",url:"https://teachersonline.tsc.go.ke/"},{name:"International School of Kenya employment",type:"School-published vacancies; check live status",url:"https://www.isk.ac.ke/employment/openings"},{name:"CBE Nexus international teaching jobs",type:"Aggregated listings require employer-side rechecking",url:"/international-teaching-jobs.html"}],
  teachers:[{name:"TSC teacher registration",url:"https://www.tsc.go.ke/"},{name:"TSC Teachers Online",url:"https://teachersonline.tsc.go.ke/"}],
  further:[{name:"Commission for University Education (CUE)",url:"https://www.cue.or.ke/"},{name:"TVET Authority (TVETA)",url:"https://www.tveta.go.ke/"},{name:"Kenya Universities and Colleges Central Placement Service (KUCCPS)",url:"https://www.kuccps.net/"}],
  sources:[{label:"Ministry NEMIS institution list",url:"https://nemis.education.go.ke/Reports/InstitutionList.aspx"},{label:"KICD curriculum materials",url:"https://kicd.ac.ke/cbc-materials/"},{label:"KNEC",url:"https://www.knec.ac.ke/"},{label:"TSC",url:"https://www.tsc.go.ke/"}]
 },
 "japan": {
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
  officialLanguages:"No single federal official language is stated here; language policy varies by state and locality.",
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
};
if(typeof window!=="undefined"){window.CBE_GLOBAL_COUNTRIES=countryRegistry;window.CBE_GLOBAL_COUNTRY_DATA=countryData;}
if(typeof module!=="undefined"&&module.exports){module.exports={countries:countryRegistry,countryData};}
})();