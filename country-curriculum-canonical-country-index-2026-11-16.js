/* CBE Nexus — canonical country identity and source-map coverage index.
 * Scope: the project's 196-entry country/jurisdiction register, not every UN M49 area.
 * ISO alpha-3 identifiers are used as stable keys; Kosovo uses project code XKX.
 * Source-map presence is not curriculum verification or chapter completion.
 */
const countryPairs = "Afghanistan=AFG;Albania=ALB;Algeria=DZA;Andorra=AND;Angola=AGO;Antigua and Barbuda=ATG;Argentina=ARG;Armenia=ARM;Australia=AUS;Austria=AUT;Azerbaijan=AZE;Bahamas=BHS;Bahrain=BHR;Bangladesh=BGD;Barbados=BRB;Belarus=BLR;Belgium=BEL;Belize=BLZ;Benin=BEN;Bhutan=BTN;Bolivia=BOL;Bosnia and Herzegovina=BIH;Botswana=BWA;Brazil=BRA;Brunei=BRN;Bulgaria=BGR;Burkina Faso=BFA;Burundi=BDI;Cabo Verde=CPV;Cambodia=KHM;Cameroon=CMR;Canada=CAN;Central African Republic=CAF;Chad=TCD;Chile=CHL;China=CHN;Colombia=COL;Comoros=COM;Congo=COG;Costa Rica=CRI;Côte d’Ivoire=CIV;Croatia=HRV;Cuba=CUB;Cyprus=CYP;Czechia=CZE;Democratic Republic of the Congo=COD;Denmark=DNK;Djibouti=DJI;Dominica=DMA;Dominican Republic=DOM;Ecuador=ECU;Egypt=EGY;El Salvador=SLV;Equatorial Guinea=GNQ;Eritrea=ERI;Estonia=EST;Eswatini=SWZ;Ethiopia=ETH;Fiji=FJI;Finland=FIN;France=FRA;Gabon=GAB;Gambia=GMB;Georgia=GEO;Germany=DEU;Ghana=GHA;Greece=GRC;Grenada=GRD;Guatemala=GTM;Guinea=GIN;Guinea-Bissau=GNB;Guyana=GUY;Haiti=HTI;Honduras=HND;Hungary=HUN;Iceland=ISL;India=IND;Indonesia=IDN;Iran=IRN;Iraq=IRQ;Ireland=IRL;Israel=ISR;Italy=ITA;Jamaica=JAM;Japan=JPN;Jordan=JOR;Kazakhstan=KAZ;Kenya=KEN;Kiribati=KIR;Kuwait=KWT;Kyrgyzstan=KGZ;Laos=LAO;Latvia=LVA;Lebanon=LBN;Lesotho=LSO;Liberia=LBR;Libya=LBY;Liechtenstein=LIE;Lithuania=LTU;Luxembourg=LUX;Madagascar=MDG;Malawi=MWI;Malaysia=MYS;Maldives=MDV;Mali=MLI;Malta=MLT;Marshall Islands=MHL;Mauritania=MRT;Mauritius=MUS;Mexico=MEX;Micronesia=FSM;Moldova=MDA;Monaco=MCO;Mongolia=MNG;Montenegro=MNE;Morocco=MAR;Mozambique=MOZ;Myanmar=MMR;Namibia=NAM;Nauru=NRU;Nepal=NPL;Netherlands=NLD;New Zealand=NZL;Nicaragua=NIC;Niger=NER;Nigeria=NGA;North Korea=PRK;North Macedonia=MKD;Norway=NOR;Oman=OMN;Pakistan=PAK;Palau=PLW;Palestine=PSE;Panama=PAN;Papua New Guinea=PNG;Paraguay=PRY;Peru=PER;Philippines=PHL;Poland=POL;Portugal=PRT;Qatar=QAT;Romania=ROU;Russia=RUS;Rwanda=RWA;Saint Kitts and Nevis=KNA;Saint Lucia=LCA;Saint Vincent and the Grenadines=VCT;Samoa=WSM;San Marino=SMR;Sao Tome and Principe=STP;Saudi Arabia=SAU;Senegal=SEN;Serbia=SRB;Seychelles=SYC;Sierra Leone=SLE;Singapore=SGP;Slovakia=SVK;Slovenia=SVN;Solomon Islands=SLB;Somalia=SOM;South Africa=ZAF;South Korea=KOR;South Sudan=SSD;Spain=ESP;Sri Lanka=LKA;Sudan=SDN;Suriname=SUR;Sweden=SWE;Switzerland=CHE;Syria=SYR;Tajikistan=TJK;Tanzania=TZA;Thailand=THA;Timor-Leste=TLS;Togo=TGO;Tonga=TON;Trinidad and Tobago=TTO;Tunisia=TUN;Türkiye=TUR;Turkmenistan=TKM;Tuvalu=TUV;Uganda=UGA;Ukraine=UKR;United Arab Emirates=ARE;United Kingdom=GBR;United States=USA;Uruguay=URY;Uzbekistan=UZB;Vanuatu=VUT;Vatican City=VAT;Venezuela=VEN;Vietnam=VNM;Yemen=YEM;Zambia=ZMB;Zimbabwe=ZWE;Kosovo=XKX";
const batchData = "1:Kenya,Ghana,Nigeria,Uganda,Tanzania||2:Albania,Algeria,Andorra,Angola,Antigua and Barbuda||3:Argentina,Armenia,Australia,Austria,Azerbaijan||4:Bahamas,Bahrain,Bangladesh,Barbados,Belarus||5:Belize,Benin,Bhutan,Bolivia,Bosnia and Herzegovina||6:Botswana,Brazil,Brunei Darussalam,Bulgaria,Burkina Faso||7:Burundi,Cabo Verde,Cambodia,Cameroon,Canada||8:Central African Republic,Chad,Chile,China,Colombia||9:Comoros,Democratic Republic of the Congo,Republic of the Congo,Costa Rica,Côte d’Ivoire||10:Croatia,Cuba,Cyprus,Czechia,Denmark||11:Djibouti,Dominica,Dominican Republic,Ecuador,Egypt||12:El Salvador,Equatorial Guinea,Eritrea,Estonia,Eswatini||13:Ethiopia,Fiji,Finland,France,Gabon||14:The Gambia,Georgia,Germany,Ghana,Greece||15:Grenada,Guatemala,Guinea,Guinea-Bissau,Guyana||16:Haiti,Honduras,Hungary,Iceland,India||17:Indonesia,Iran,Iraq,Ireland,Israel||18:Italy,Jamaica,Japan,Jordan,Kazakhstan||19:Kenya,Kiribati,Kuwait,Kyrgyzstan,Laos||20:Latvia,Lebanon,Lesotho,Liberia,Libya||21:Liechtenstein,Lithuania,Luxembourg,Madagascar,Malawi||22:Malaysia,Maldives,Mali,Malta,Marshall Islands||23:Mauritania,Mauritius,Mexico,Federated States of Micronesia,Moldova||24:Monaco,Mongolia,Montenegro,Morocco,Mozambique||25:Myanmar,Namibia,Nauru,Nepal,Netherlands||26:New Zealand,Nicaragua,Niger,Democratic People's Republic of Korea,North Macedonia||27:Norway,Oman,Pakistan,Palau,Palestine||28:Panama,Papua New Guinea,Paraguay,Peru,Philippines||29:Poland,Portugal,Qatar,Romania,Russia||30:Rwanda,Saint Kitts and Nevis,Saint Lucia,Saint Vincent and the Grenadines,Samoa||31:San Marino,São Tomé and Príncipe,Saudi Arabia,Senegal,Serbia||32:Seychelles,Sierra Leone,Singapore,Slovakia,Slovenia||33:Solomon Islands,Somalia,South Africa,South Sudan,Spain||34:Sri Lanka,Sudan,Suriname,Sweden,Switzerland||35:Syria,Taiwan,Tajikistan,Thailand,Timor-Leste||36:Togo,Tonga,Trinidad and Tobago,Tunisia,Türkiye||37:Turkmenistan,Tuvalu,Uganda,Ukraine,United Arab Emirates||38:United Kingdom,United States,Uruguay,Uzbekistan,Vanuatu||39:Venezuela,Vietnam,Yemen,Zambia,Zimbabwe||40:Afghanistan,Belgium,South Korea,Kosovo,Vatican City";
const normalize = value => String(value || "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g," ").trim().replace(/\s+/g," ");
const countries = countryPairs.split(";").map(pair => { const i=pair.lastIndexOf("="); return {name:pair.slice(0,i),isoAlpha3:pair.slice(i+1)}; });
const aliasPairs = {
  "brunei darussalam":"Brunei",
  "federated states of micronesia":"Micronesia",
  "democratic people s republic of korea":"North Korea",
  "republic of korea":"South Korea",
  "the gambia":"Gambia",
  "republic of the congo":"Congo",
  "republic of congo":"Congo",
  "republic of congo brazzaville":"Congo",
  "cape verde":"Cabo Verde",
  "swaziland":"Eswatini",
  "burma":"Myanmar",
  "east timor":"Timor-Leste",
  "turkey":"Türkiye",
  "ivory coast":"Côte d’Ivoire",
  "lao people s democratic republic":"Laos",
  "micronesia federated states of":"Micronesia",
  "moldova republic of":"Moldova",
  "venezuela bolivarian republic of":"Venezuela",
  "palestine state of":"Palestine"
};
const sourceMapBatchCountries = Object.fromEntries(batchData.split("||").map(row => {
  const i=row.indexOf(":"); return [row.slice(0,i),row.slice(i+1).split(",")];
}));
export const canonicalCountryIndex = {
  version:"2026-11-16-v1",
  standard:"ISO 3166-1 alpha-3 identifiers; XKX is a project-assigned Kosovo code",
  countries,
  sourceMapBatchCountries,
  extraJurisdictions:["Taiwan"],
  normalizeName(value) {
    const key=normalize(value);
    const canonical=aliasPairs[key] || countries.find(c => normalize(c.name)===key)?.name;
    return canonical || null;
  },
  auditSourceMapCoverage() {
    const seen=new Map(), duplicates=[], extras=[];
    for (const [batch,names] of Object.entries(sourceMapBatchCountries)) for (const suppliedName of names) {
      const canonical=this.normalizeName(suppliedName);
      if (!canonical) { extras.push({batch:Number(batch),suppliedName}); continue; }
      const record=countries.find(c=>c.name===canonical);
      if (!record) { extras.push({batch:Number(batch),suppliedName}); continue; }
      if (seen.has(record.isoAlpha3)) duplicates.push({country:canonical,isoAlpha3:record.isoAlpha3,firstBatch:seen.get(record.isoAlpha3),duplicateBatch:Number(batch)});
      else seen.set(record.isoAlpha3,Number(batch));
    }
    return {
      registryCount:countries.length,
      mappedUniqueCountries:seen.size,
      coveragePercent:Number((seen.size/countries.length*100).toFixed(2)),
      totalBatchEntries:Object.values(sourceMapBatchCountries).reduce((n,a)=>n+a.length,0),
      batchCount:Object.keys(sourceMapBatchCountries).length,
      missing:countries.filter(c=>!seen.has(c.isoAlpha3)),
      duplicates,
      extraJurisdictions:extras
    };
  }
};
