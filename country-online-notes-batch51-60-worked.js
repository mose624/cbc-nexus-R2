/* CBE Nexus — country batch 51–60 supplementary notes.
 * New country pathways: Afghanistan, Bangladesh, Bhutan, Maldives, Myanmar, Nepal,
 * Sri Lanka and Thailand. India CBSE and Pakistan FBISE receive additional modules
 * within their existing subject pathways. Lessons are English-supported with
 * local-language key vocabulary; they are supplementary, not official textbook copies.
 */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const countries=[
  {name:"Afghanistan",level:"Secondary • Science and Mathematics",curriculum:"Afghanistan school curriculum • supplementary secondary science and mathematics",authority:"Ministry of Education, Afghanistan",source:"https://moe.gov.af/",lang:"Dari and Pashto",code:"en",context:"mountain watersheds, irrigation canals, orchard agriculture and solar energy",terms:"Dari / پښتو key vocabulary"},
  {name:"Bangladesh",level:"Secondary • Science and Mathematics",curriculum:"Bangladesh NCTB curriculum context • supplementary secondary science and mathematics",authority:"National Curriculum and Textbook Board (NCTB)",source:"https://nctb.gov.bd/",lang:"Bangla and English",code:"en",context:"monsoon rainfall, river deltas, rice cultivation, fisheries and coastal resilience",terms:"বাংলা key vocabulary"},
  {name:"Bhutan",level:"Secondary • Science and Mathematics",curriculum:"Bhutan national curriculum context • supplementary secondary science and mathematics",authority:"Royal Education Council and Bhutan Council for School Examinations and Assessment",source:"https://rec.gov.bt/",lang:"Dzongkha and English",code:"en",context:"Himalayan watersheds, forest ecosystems, hydropower and mountain farming",terms:"རྫོང་ཁ key vocabulary"},
  {name:"Maldives",level:"Secondary • Science and Mathematics",curriculum:"Maldives national curriculum context • supplementary secondary science and mathematics",authority:"Ministry of Education, Maldives",source:"https://education.gov.mv/",lang:"Dhivehi and English",code:"en",context:"coral reef ecosystems, island water security, fisheries and renewable energy",terms:"ދިވެހި key vocabulary"},
  {name:"Myanmar",level:"Secondary • Science and Mathematics",curriculum:"Myanmar basic education curriculum context • supplementary secondary science and mathematics",authority:"Ministry of Education, Myanmar",source:"https://www.moe.gov.mm/",lang:"Myanmar language and ethnic community languages",code:"en",context:"Ayeyarwady river systems, monsoon agriculture, forests and local energy use",terms:"မြန်မာဘာသာ key vocabulary"},
  {name:"Nepal",level:"Secondary • Science and Mathematics",curriculum:"Nepal national curriculum context • supplementary secondary science and mathematics",authority:"Curriculum Development Centre, Nepal",source:"https://moecdc.gov.np/",lang:"Nepali and English",code:"en",context:"Himalayan watersheds, terraced farming, hydropower and earthquake preparedness",terms:"नेपाली key vocabulary"},
  {name:"Sri Lanka",level:"Secondary • Science and Mathematics",curriculum:"Sri Lanka national curriculum context • supplementary secondary science and mathematics",authority:"National Institute of Education and Ministry of Education",source:"https://nie.lk/",lang:"Sinhala, Tamil and English",code:"en",context:"monsoon rainfall, tea cultivation, reservoirs, coastal ecosystems and biodiversity",terms:"සිංහල / தமிழ் key vocabulary"},
  {name:"Thailand",level:"Secondary • Science and Mathematics",curriculum:"Thailand Basic Education Core Curriculum context • supplementary secondary science and mathematics",authority:"Office of the Basic Education Commission (OBEC)",source:"https://www.obec.go.th/",lang:"Thai and English",code:"en",context:"Chao Phraya river basin, rice cultivation, monsoon weather and coastal ecosystems",terms:"คำศัพท์ภาษาไทย"}
 ];
 const vocab={
  "Afghanistan":{Biology:"زیست‌شناسی / بیولوژي • سلول / حجره • زیست‌بوم / ایکوسیستم",Chemistry:"کیمیا / کیمیاوي علوم • اتم / اتوم • محلول / محلول",Physics:"فزیک / فزیک • نیرو / قوه • انرژی / انرژي",Mathematics:"ریاضی / ریاضي • میانگین / اوسط • معادله / معادله"},
  "Bangladesh":{Biology:"জীববিজ্ঞান • কোষ • বাস্তুতন্ত্র",Chemistry:"রসায়ন • পরমাণু • দ্রবণ",Physics:"পদার্থবিজ্ঞান • বল • শক্তি",Mathematics:"গণিত • গড় • সমীকরণ"},
  "Bhutan":{Biology:"སྐྱེ་དངོས་རིག་པ • ཕྲ་ཕུང་ • རང་བྱུང་ཁམས།",Chemistry:"རྫས་སྦྱོར་རིག་པ • རྡུལ་ • ཞུ་ཁུ།",Physics:"དངོས་ཁམས་རིག་པ • ཤུགས་ • ནུས་པ།",Mathematics:"རྩིས་རིག • ཆ་སྙོམས་ • མཉམ་རྩིས།"},
  "Maldives":{Biology:"ދިވެހި: އައިލަންދު އިލްމު • ސެލް • އިކޯސިސްޓަމް",Chemistry:"ކެމިސްޓްރީ • އެޓަމް • މަޙްލޫލު",Physics:"ފިޒިކްސް • ބާރު • އެނަރޖީ",Mathematics:"މެތަމެޓިކްސް • އެވްރެޖް • އިކުއޭޝަން"},
  "Myanmar":{Biology:"ဇီဝဗေဒ • ဆဲလ် • ဂေဟစနစ်",Chemistry:"ဓာတုဗေဒ • အက်တမ် • ပျော်ရည်",Physics:"ရူပဗေဒ • အင်အား • စွမ်းအင်",Mathematics:"သင်္ချာ • ပျမ်းမျှ • ညီမျှခြင်း"},
  "Nepal":{Biology:"जीवविज्ञान • कोशिका • पारिस्थितिक प्रणाली",Chemistry:"रसायनशास्त्र • परमाणु • घोल",Physics:"भौतिकशास्त्र • बल • ऊर्जा",Mathematics:"गणित • औसत • समीकरण"},
  "Sri Lanka":{Biology:"ජීව විද්‍යාව / உயிரியல் • සෛලය / உயிரணு • පරිසර පද්ධතිය / சூழலமைப்பு",Chemistry:"රසායන විද්‍යාව / வேதியியல் • පරමාණුව / அணு • ද්‍රාවණය / கரைசல்",Physics:"භෞතික විද්‍යාව / இயற்பியல் • බලය / விசை • ශක්තිය / ஆற்றல்",Mathematics:"ගණිතය / கணிதம் • සාමාන්‍යය / சராசரி • සමීකරණය / சமன்பாடு"},
  "Thailand":{Biology:"ชีววิทยา • เซลล์ • ระบบนิเวศ",Chemistry:"เคมี • อะตอม • สารละลาย",Physics:"ฟิสิกส์ • แรง • พลังงาน",Mathematics:"คณิตศาสตร์ • ค่าเฉลี่ย • สมการ"},
  "India":{Biology:"जीवविज्ञान • कोशिका • पारितंत्र",Chemistry:"रसायन विज्ञान • परमाणु • विलयन",Physics:"भौतिकी • बल • ऊर्जा",Mathematics:"गणित • माध्य • समीकरण"},
  "Pakistan":{Biology:"حیاتیات • خلیہ • ماحولیاتی نظام",Chemistry:"کیمیا • ایٹم • محلول",Physics:"طبیعیات • قوت • توانائی",Mathematics:"ریاضی • اوسط • مساوات"}
 };
 const examples={
  "Afghanistan":["An irrigation channel supplies 24 L/s for 15 minutes. Volume = 24 × 15 × 60 = 21,600 L. This is 21.6 m³.","A 2.0 kg solar-water pump component is lifted 1.5 m. Taking g = 9.8 N/kg, gain in gravitational potential energy = mgh = 2.0 × 9.8 × 1.5 = 29.4 J.","An orchard sample has 12, 15, 13, 10 and 15 seedlings in equal plots. Mean = 65 ÷ 5 = 13 seedlings per plot.","A solar lamp uses 6 W for 5 h. Energy = Pt = 6 × 5 = 30 Wh = 0.03 kWh."],
  "Bangladesh":["A field receives 18 mm of rain over 2 m². Volume = 0.018 m × 2 m² = 0.036 m³ = 36 L.","A 0.50 kg fishing net float is displaced by 0.20 m. Work done against gravity = mgh = 0.50 × 9.8 × 0.20 = 0.98 J.","Five rice plots yield 4.2, 4.8, 4.5, 4.1 and 4.9 tonnes/ha. Mean = 22.5 ÷ 5 = 4.5 tonnes/ha.","A 10 W LED is used for 8 h. Energy = 10 × 8 = 80 Wh = 0.08 kWh."],
  "Bhutan":["A stream carries 0.8 m³/s for 10 minutes. Volume = 0.8 × 600 = 480 m³.","A 3 kg load is raised 2 m. Gain in gravitational potential energy = mgh = 3 × 9.8 × 2 = 58.8 J.","A forest survey records 7, 9, 8, 10 and 6 saplings in equal quadrats. Mean = 40 ÷ 5 = 8 saplings per quadrat.","A 2 kW heater runs for 0.5 h. Energy = 2 × 0.5 = 1 kWh."],
  "Maldives":["A tank holds 1,200 L of rainwater. If 300 L is used, remaining water = 1,200 − 300 = 900 L.","A 4 kg equipment box is lifted 0.75 m. Work against gravity = mgh = 4 × 9.8 × 0.75 = 29.4 J.","A reef survey records 18, 22, 20, 16 and 24 coral colonies in equal areas. Mean = 100 ÷ 5 = 20 colonies per area.","A 100 W fan operates for 6 h. Energy = 100 × 6 = 600 Wh = 0.6 kWh."],
  "Myanmar":["A farm stores 2.4 m³ of water. If 750 L is used, remaining volume = 2,400 − 750 = 1,650 L.","A 5 kg rice sack is raised 1.2 m. Gain in gravitational potential energy = 5 × 9.8 × 1.2 = 58.8 J.","Five paddy plots yield 3.8, 4.1, 4.0, 3.7 and 4.4 tonnes/ha. Mean = 20 ÷ 5 = 4.0 tonnes/ha.","A 40 W lamp operates for 5 h. Energy = 40 × 5 = 200 Wh = 0.2 kWh."],
  "Nepal":["A hillside tank receives 0.6 m³/min for 8 min. Volume = 0.6 × 8 = 4.8 m³.","A 10 kg load is raised 1.5 m. Gain in gravitational potential energy = 10 × 9.8 × 1.5 = 147 J.","A seedling survey records 9, 11, 10, 8 and 12 plants per quadrat. Mean = 50 ÷ 5 = 10 plants per quadrat.","A 500 W micro-hydro device supplies power for 4 h. Energy = 500 × 4 = 2,000 Wh = 2 kWh."],
  "Sri Lanka":["A reservoir releases 1.5 m³/s for 4 minutes. Volume = 1.5 × 240 = 360 m³.","A 2.5 kg tea basket is raised 1.2 m. Gain in gravitational potential energy = 2.5 × 9.8 × 1.2 = 29.4 J.","A biodiversity survey records 6, 8, 7, 9 and 10 species in equal plots. Mean = 40 ÷ 5 = 8 species per plot.","A 750 W appliance runs for 2 h. Energy = 750 × 2 = 1,500 Wh = 1.5 kWh."],
  "Thailand":["A canal supplies 0.25 m³/s for 20 minutes. Volume = 0.25 × 1,200 = 300 m³.","A 20 kg rice sack is lifted 0.8 m. Gain in gravitational potential energy = 20 × 9.8 × 0.8 = 156.8 J.","Five rice plots yield 5.1, 4.8, 5.0, 4.9 and 5.2 tonnes/ha. Mean = 25 ÷ 5 = 5.0 tonnes/ha.","A 1.2 kW pump runs for 3 h. Energy = 1.2 × 3 = 3.6 kWh."],
  "India":["A tank stores 2,000 L. If 650 L is used, remaining volume = 1,350 L.","A 4 kg object is lifted 2 m. Gain in gravitational potential energy = 4 × 9.8 × 2 = 78.4 J.","Five crop plots yield 4, 5, 6, 5 and 5 tonnes/ha. Mean = 25 ÷ 5 = 5 tonnes/ha.","A 60 W lamp runs for 5 h. Energy = 300 Wh = 0.3 kWh."],
  "Pakistan":["A water tank holds 1,500 L. If 450 L is used, remaining volume = 1,050 L.","A 3 kg object is lifted 2.5 m. Gain in gravitational potential energy = 3 × 9.8 × 2.5 = 73.5 J.","Five crop plots yield 3, 4, 5, 4 and 4 tonnes/ha. Mean = 20 ÷ 5 = 4 tonnes/ha.","A 100 W lamp runs for 4 h. Energy = 400 Wh = 0.4 kWh."]
 };
 const modules={
  Biology:{title:"Ecosystems, biodiversity and scientific sampling",sections:[
   ["Core concepts","An ecosystem consists of living communities and the non-living environment. Abiotic factors include water, light, temperature, pH and soil nutrients. Biotic interactions include competition, predation, parasitism and mutualism. Biodiversity can be considered at genetic, species and ecosystem levels."],
   ["Population and sampling","A population is a group of organisms of one species in a defined area. Its size changes through births, deaths, immigration and emigration. Random quadrats help estimate the abundance of plants or organisms that move little. Repeated samples reduce the effect of chance."],
   ["Interpreting evidence","A reliable ecological investigation states the sampling area, quadrat size, number of samples, method of random placement and units. Correlation does not automatically prove causation. Human activities such as habitat conversion, pollution and overharvesting can alter ecosystem balance."]
  ],questions:[["What is an abiotic factor?","A non-living environmental factor such as water, light or temperature."],["Name two biotic interactions.","Competition and predation; parasitism and mutualism are also examples."],["Why use random quadrats?","To reduce selection bias when estimating abundance."],["What is a population?","Members of the same species living in a defined area."],["Name two causes of population increase.","Births and immigration."],["Why repeat ecological samples?","To reduce chance variation and improve reliability."],["What is biodiversity?","Variety of life at genetic, species and ecosystem levels."],["Does correlation prove causation?","No; other variables or chance may explain an association."],["Give one human threat to habitats.","Deforestation, pollution, fragmentation or overharvesting."],["Why record units?","Units make measurements interpretable and comparable."],["What is a control variable?","A factor kept constant so its influence does not distort the comparison."],["Why identify sampling limitations?","To judge how far the results can be generalised."]]},
  Chemistry:{title:"Atoms, mixtures, solutions and concentration",sections:[
   ["Atomic structure","Atoms contain protons and neutrons in a central nucleus, with electrons occupying surrounding energy levels or orbitals. The proton number identifies the element. In a neutral atom, proton number equals electron number. Isotopes have the same proton number but different neutron numbers."],
   ["Mixtures and solutions","A pure substance has a fixed composition; a mixture contains substances physically combined in variable proportions. A solution is a homogeneous mixture of solute and solvent. Filtration separates an insoluble solid from a liquid, while evaporation or crystallisation can recover a dissolved solid."],
   ["Quantitative concentration","Mass concentration C = m/V, where mass m is in grams and volume V is in litres. Convert millilitres to litres before calculating. During dilution, solute amount remains constant and C₁V₁ = C₂V₂. Always use appropriate laboratory safety procedures."]
  ],questions:[["What identifies an element?","Its proton number (atomic number)."],["What are isotopes?","Atoms of the same element with different neutron numbers."],["What is a neutral atom's electron count?","Equal to its proton number."],["What is a solution?","A homogeneous mixture of solute and solvent."],["Which method separates an insoluble solid from a liquid?","Filtration."],["What is crystallisation used for?","Recovering a dissolved solid as crystals."],["State the mass concentration formula.","C = m/V."],["Convert 250 mL to litres.","0.250 L."],["What remains constant in a simple dilution?","The amount of solute."],["State the dilution equation.","C₁V₁ = C₂V₂."],["Why label laboratory containers?","To identify contents and hazards and prevent mix-ups."],["Why never taste chemicals?","Laboratory substances may be toxic, corrosive or contaminated."]]},
  Physics:{title:"Motion, forces, work, energy and power",sections:[
   ["Describing motion","Distance is the total path travelled; displacement is the straight-line change in position with direction. Average speed = distance/time. Average velocity = displacement/time. Acceleration is the rate of change of velocity and is measured in m/s²."],
   ["Forces and Newton's laws","A resultant force changes an object's motion. Newton's second law is F = ma for constant mass. Weight is the gravitational force W = mg. Friction and air resistance oppose relative motion and can transfer useful mechanical energy into thermal energy."],
   ["Work, energy and power","Work done by a constant force parallel to displacement is W = Fs. Gravitational potential energy change is ΔEp = mgh. Kinetic energy is Ek = ½mv². Power is the rate of energy transfer, P = E/t. Use SI units and state assumptions."]
  ],questions:[["Define average speed.","Total distance travelled divided by total time."],["How does displacement differ from distance?","Displacement is a directed change in position; distance is total path length."],["State Newton's second law.","Resultant force F = ma."],["What is the SI unit of force?","The newton (N)."],["How is weight calculated?","W = mg."],["What is acceleration?","Rate of change of velocity."],["State the work formula for a parallel force.","W = Fs."],["State gravitational potential energy change.","ΔEp = mgh."],["State kinetic energy.","Ek = ½mv²."],["Define power.","Energy transferred or work done per unit time."],["What is the SI unit of power?","The watt (W)."],["Why state assumptions in calculations?","They show the conditions under which the model and answer are valid."]]},
  Mathematics:{title:"Linear equations, ratios, statistics and data interpretation",sections:[
   ["Algebraic reasoning","An equation states that two expressions are equal. Apply the same operation to both sides to preserve equality. Expand brackets carefully, collect like terms and check a solution by substitution into the original equation."],
   ["Ratios and proportional reasoning","A ratio compares quantities in the same units. Simplify by dividing all terms by their greatest common factor. Direct proportion has the form y = kx; inverse proportion has the form y = k/x, where k is a constant."],
   ["Statistics and interpretation","The arithmetic mean is the sum divided by the number of observations. The median is the middle ordered value. The range is maximum minus minimum. Graphs should include a title, labelled axes, units and an appropriate scale. A sample may be biased or too small to represent a population."]
  ],questions:[["Solve 3x + 5 = 20.","x = 5."],["Why perform the same operation on both sides?","To preserve equality."],["Expand 2(x + 4).","2x + 8."],["Simplify the ratio 12:18.","2:3."],["If y = 4x, find y when x = 6.","24."],["If y = 24/x, find y when x = 3.","8."],["How is the arithmetic mean found?","Add values and divide by their number."],["What is the median?","The middle value after ordering the data."],["Find the range of 4, 7, 9, 12.","12 − 4 = 8."],["Why label graph axes?","To identify variables and units."],["What is sampling bias?","A systematic method that makes some outcomes more likely than others."],["How can a solution be checked?","Substitute it into the original equation."]]}
 };
 const make=(country,subject)=>{
  const m=modules[subject],example=examples[country.name][["Biology","Chemistry","Physics","Mathematics"].indexOf(subject)];
  const glossary=vocab[country.name]?.[subject]||"Local-language key terms should be checked with the teacher.";
  return {
   id:"batch51-60-"+country.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+subject.toLowerCase()+"-supplement",
   title:m.title+" | "+country.name+" • "+glossary,
   lessons:"Supplementary secondary revision • explanations, worked example and practice",
   language:"en",deliveryLanguage:"English-supported; local-language key vocabulary included",
   curriculumContext:country.curriculum+". Education authority reference: "+country.authority+" ("+country.source+"). Local context: "+country.context+". Delivery languages: "+country.lang+". Local-language glossary: "+glossary+". This is original supplementary learning material, not an official ministry textbook or verified chapter-by-chapter syllabus map. Compare topics and assessment requirements with the current official curriculum for the learner's grade and school.",
   curriculumStatus:"supplementary-national-curriculum-support",
   objectives:["Explain the central concepts using accurate scientific or mathematical language.","Apply the relevant method and show each calculation step.","Interpret results with correct units and context.","Identify assumptions, limitations and safe practice where relevant."],
   sections:m.sections.map(([heading,body])=>({heading,body,paragraphs:[body]})),
   example:example+" Check the units, identify the assumptions and explain whether the result is reasonable in the local context.",
   activity:"Local investigation: use a safe school or community example from "+country.context+". Record the method, observations, units and one limitation. For laboratory work, follow the teacher's safety instructions.",
   summary:m.sections.map(x=>x[1].split(".")[0]+"."),
   glossary,
   questions:m.questions.map(([q,a])=>({q,a,worked:a,explanation:a}))
  };
 };
 countries.forEach(c=>{
  const record=all[c.name]||(all[c.name]={});
  record.curriculum=record.curriculum||c.curriculum;
  record.authority=record.authority||c.authority;
  record.source=record.source||c.source;
  record.levels=record.levels||{};
  const level=record.levels[c.level]||(record.levels[c.level]={});
  ["Biology","Chemistry","Physics","Mathematics"].forEach(subject=>{
   const list=level[subject]||(level[subject]=[]);
   const item=make(c,subject);if(!list.some(x=>x.id===item.id))list.push(item);
  });
 });
 // Extend existing India CBSE and Pakistan FBISE pathways without replacing their verified maps.
 ["India","Pakistan"].forEach(name=>{
  const record=all[name];if(!record?.levels)return;
  const levelName=name==="India"?"Class XI":"HSSC-I • SLO study skills";
  const level=record.levels[levelName];if(!level)return;
  const c={name,context:examples[name][0],curriculum:record.curriculum||name+" national curriculum",authority:record.authority||"National education authority",source:record.source||"",lang:name==="India"?"Hindi and English, plus state languages":"Urdu and English, plus provincial languages"};
  ["Biology","Chemistry","Physics","Mathematics"].forEach(subject=>{
   const list=level[subject]||(level[subject]=[]);
   const item=make(c,subject);item.id="batch51-60-"+name.toLowerCase()+"-"+subject.toLowerCase()+"-application";
   item.title="Applied revision: "+modules[subject].title+" • "+name;
   item.curriculumContext=(record.curriculum||c.curriculum)+". Additional original application module; not an official chapter sequence. Compare with the current board syllabus and cohort-specific assessment framework.";
   if(!list.some(x=>x.id===item.id))list.push(item);
  });
 });
})();