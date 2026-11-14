/* CBE Nexus — countries 121–130 original supplementary secondary notes.
 * English-supported learning with local-language context and country examples.
 * Not official textbook reproductions or verified chapter-by-chapter syllabus maps.
 */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const countries=[
  {
    "name": "Mauritania",
    "lang": "Arabic and French; national and local language contexts",
    "authority": "Ministry of National Education and System Reform",
    "source": "https://www.education.gov.mr/",
    "context": "Sahara and Sahel ecosystems, pastoralism, coastal fisheries, desertification and water conservation",
    "terms": "خلية، ذرة، طاقة، قوة، نسبة"
  },
  {
    "name": "Mexico",
    "lang": "Spanish and recognised Indigenous languages",
    "authority": "Secretariat of Public Education (SEP)",
    "source": "https://www.gob.mx/sep",
    "context": "Deserts, tropical forests, highlands, biodiversity, agriculture, geothermal and solar energy",
    "terms": "célula, átomo, energía, fuerza, proporción"
  },
  {
    "name": "Federated States of Micronesia",
    "lang": "English and local languages including Chuukese, Kosraean, Pohnpeian and Yapese",
    "authority": "FSM Department of Education and state education departments",
    "source": "https://www.fsmed.gov.fm/",
    "context": "Island and atoll ecosystems, coral reefs, lagoons, fisheries, coastal resilience and solar energy",
    "terms": "cell, atom, energy, force, ratio"
  },
  {
    "name": "Moldova",
    "lang": "Romanian; minority-language provision including Russian and others",
    "authority": "Ministry of Education and Research",
    "source": "https://mec.gov.md/",
    "context": "Dniester and Prut river systems, forests, agriculture, soils and renewable energy",
    "terms": "celulă, atom, energie, forță, proporție"
  },
  {
    "name": "Monaco",
    "lang": "French; Monegasque, Italian and English also present",
    "authority": "Department of National Education, Youth and Sports",
    "source": "https://en.gouv.mc/Policy-Practice/Education",
    "context": "Mediterranean marine habitats, coastal geology, urban sustainability, transport and energy",
    "terms": "cellule, atome, énergie, force, proportion"
  },
  {
    "name": "Montenegro",
    "lang": "Montenegrin; Serbian, Bosnian, Albanian and Croatian also used",
    "authority": "Ministry of Education, Science and Innovation",
    "source": "https://www.gov.me/en/mps",
    "context": "Adriatic coast, Dinaric Alps, karst landscapes, rivers, forests and hydropower",
    "terms": "ćelija, atom, energija, sila, razmjera"
  },
  {
    "name": "Netherlands",
    "lang": "Dutch; Frisian in Friesland and English in international education",
    "authority": "Ministry of Education, Culture and Science",
    "source": "https://www.government.nl/ministries/ministry-of-education-culture-and-science",
    "context": "River delta systems, polders, coastal management, agriculture, biodiversity and wind energy",
    "terms": "cel, atoom, energie, kracht, verhouding"
  },
  {
    "name": "New Zealand",
    "lang": "English and te reo Māori; New Zealand Sign Language is also official",
    "authority": "Ministry of Education",
    "source": "https://www.education.govt.nz/",
    "context": "Volcanic landscapes, geothermal systems, forests, marine ecosystems, agriculture and renewable energy",
    "terms": "pūtau, ngota, pūngao, tōpana, ōwehenga"
  },
  {
    "name": "Nicaragua",
    "lang": "Spanish; Indigenous and regional languages in some communities",
    "authority": "Ministry of Education (MINED)",
    "source": "https://www.mined.gob.ni/",
    "context": "Volcanic landscapes, lakes, tropical forests, agriculture, biodiversity and geothermal energy",
    "terms": "célula, átomo, energía, fuerza, razón"
  },
  {
    "name": "Norway",
    "lang": "Norwegian Bokmål and Nynorsk; Sámi languages in relevant areas",
    "authority": "Ministry of Education and Research",
    "source": "https://www.regjeringen.no/en/dep/kd/id586/",
    "context": "Fjords, Arctic and sub-Arctic ecosystems, fisheries, hydropower, wind and climate systems",
    "terms": "celle, atom, energi, kraft, forhold"
  }
];
 const subjects={
  "Biology": {
    "title": "Cells, human biology, genetics and ecosystems",
    "topics": [
      [
        "Cells and organisation",
        "Cells are the basic structural and functional units of living organisms. Eukaryotic cells contain a cell membrane, cytoplasm, ribosomes and DNA; many also contain a nucleus and mitochondria. Plant cells commonly have a cellulose cell wall, a large permanent vacuole and chloroplasts in photosynthetic tissues. Cells form tissues, organs and organ systems."
      ],
      [
        "Nutrition, transport and homeostasis",
        "Photosynthesis transfers light energy into chemical energy stored in glucose. Digestion breaks large food molecules into smaller absorbable substances. Circulatory systems transport oxygen, nutrients and wastes. Enzymes are biological catalysts whose activity depends on temperature and pH. Homeostasis regulates internal conditions within suitable limits."
      ],
      [
        "Inheritance, ecology and sustainability",
        "DNA carries hereditary information. Genes influence inherited characteristics, while alleles are alternative forms of a gene. Meiosis contributes to variation. Ecosystems contain interacting organisms and physical environments; food webs show feeding relationships. Habitat loss, pollution, invasive species and climate change can threaten biodiversity."
      ]
    ],
    "questions": [
      [
        "What is the basic unit of life?",
        "The cell."
      ],
      [
        "State one function of the cell membrane.",
        "It controls movement of substances into and out of the cell."
      ],
      [
        "Name two structures commonly found in plant cells but not animal cells.",
        "Cellulose cell wall and chloroplasts."
      ],
      [
        "Where is most hereditary information stored in a eukaryotic cell?",
        "In DNA, mainly in the nucleus."
      ],
      [
        "Define a tissue.",
        "A group of similar cells working together to perform a function."
      ],
      [
        "Write the word equation for photosynthesis.",
        "Carbon dioxide + water → glucose + oxygen, using light energy and chlorophyll."
      ],
      [
        "What is an enzyme?",
        "A biological catalyst."
      ],
      [
        "Define homeostasis.",
        "Regulation of internal conditions within suitable limits."
      ],
      [
        "What is an allele?",
        "An alternative form of a gene."
      ],
      [
        "How does meiosis contribute to variation?",
        "It produces genetically varied haploid cells."
      ],
      [
        "What does a food web show?",
        "Interconnected feeding relationships in an ecosystem."
      ],
      [
        "Give two threats to biodiversity.",
        "Habitat destruction and pollution; invasive species and climate change are also threats."
      ]
    ]
  },
  "Chemistry": {
    "title": "Atomic structure, bonding, reactions and quantitative chemistry",
    "topics": [
      [
        "Atomic structure and the periodic table",
        "Atoms contain protons and neutrons in a nucleus and electrons around it. Atomic number is the proton number; mass number is protons plus neutrons. Isotopes are atoms of the same element with different neutron numbers. Periodic properties are linked to electron arrangements."
      ],
      [
        "Bonding and chemical change",
        "Ionic bonding is electrostatic attraction between oppositely charged ions. Covalent bonding involves shared electron pairs. Metallic bonding involves positive metal ions and delocalised electrons. Chemical reactions rearrange atoms, so equations must be balanced using coefficients, not altered formula subscripts."
      ],
      [
        "Acids, rates and amount of substance",
        "Acids produce hydrogen ions in aqueous solution; alkalis produce hydroxide ions. Neutralisation commonly forms salt and water. Rate depends on temperature, concentration, surface area and catalysts. Amount of substance is measured in moles; concentration c = n/V when volume is in litres."
      ]
    ],
    "questions": [
      [
        "What is atomic number?",
        "The number of protons in the nucleus."
      ],
      [
        "How is mass number calculated?",
        "Protons plus neutrons."
      ],
      [
        "What are isotopes?",
        "Atoms of the same element with different numbers of neutrons."
      ],
      [
        "Describe ionic bonding.",
        "Electrostatic attraction between oppositely charged ions."
      ],
      [
        "What happens in covalent bonding?",
        "Atoms share electron pairs."
      ],
      [
        "What is metallic bonding?",
        "Attraction between positive metal ions and delocalised electrons."
      ],
      [
        "Why must chemical equations be balanced?",
        "Atoms are conserved in a chemical reaction."
      ],
      [
        "Which ion is characteristic of acids in water?",
        "Hydrogen ions, H⁺."
      ],
      [
        "Which ion do alkalis produce in aqueous solution?",
        "Hydroxide ions, OH⁻."
      ],
      [
        "What are the usual products of neutralisation?",
        "A salt and water."
      ],
      [
        "Name two factors that can increase reaction rate.",
        "Higher temperature and concentration; greater surface area or a catalyst can also help."
      ],
      [
        "State the molar concentration equation.",
        "c = n/V, with n in moles and V in litres."
      ]
    ]
  },
  "Physics": {
    "title": "Motion, forces, energy, electricity and waves",
    "topics": [
      [
        "Motion and forces",
        "Average speed is distance divided by time. Acceleration is change in velocity divided by time. A resultant force changes an object's motion according to Newton's second law, F = ma. Weight is the gravitational force on a mass, W = mg. Always state units and distinguish mass from weight."
      ],
      [
        "Energy, work and power",
        "Energy is transferred between stores and cannot be created or destroyed. Work done equals force multiplied by distance moved in the force direction. Power is energy transferred per unit time. Renewable energy sources include solar, wind, hydroelectric, geothermal and tidal systems; each has environmental and practical constraints."
      ],
      [
        "Waves and electricity",
        "Waves transfer energy without net transfer of matter. Wave speed v = fλ. In a simple circuit, current is charge flow per second and potential difference is energy transferred per unit charge. Ohm's law is V = IR for an ohmic conductor at constant physical conditions. Electrical safety requires suitable insulation and protection."
      ]
    ],
    "questions": [
      [
        "Define average speed.",
        "Distance travelled divided by time taken."
      ],
      [
        "State the equation linking force, mass and acceleration.",
        "F = ma."
      ],
      [
        "What is the difference between mass and weight?",
        "Mass measures amount of matter; weight is gravitational force."
      ],
      [
        "Give the SI unit of force.",
        "The newton (N)."
      ],
      [
        "Define work done by a constant force.",
        "Force multiplied by displacement in the force direction."
      ],
      [
        "What is power?",
        "Energy transferred or work done per unit time."
      ],
      [
        "State the principle of conservation of energy.",
        "Energy cannot be created or destroyed, only transferred or transformed."
      ],
      [
        "Give two renewable energy sources.",
        "Solar and wind; hydro, geothermal and tidal are others."
      ],
      [
        "What is the equation for wave speed?",
        "v = fλ."
      ],
      [
        "Define electric current.",
        "Rate of flow of electric charge."
      ],
      [
        "State Ohm's law.",
        "V = IR, under constant physical conditions."
      ],
      [
        "Why is earthing used in electrical installations?",
        "It provides a low-resistance path for fault current to help protective devices disconnect the supply."
      ]
    ]
  },
  "Mathematics": {
    "title": "Number, algebra, geometry, statistics and proportion",
    "topics": [
      [
        "Number, ratio and percentage",
        "Use place value and order of operations carefully. A percentage is a fraction out of 100. To find p% of a quantity, multiply by p/100. Ratios compare quantities in the same units; simplify by dividing each part by the highest common factor."
      ],
      [
        "Algebra, equations and graphs",
        "Collect like terms and use inverse operations to solve equations. Expand brackets by multiplying each term. A linear relationship can be written y = mx + c, where m is gradient and c is the vertical intercept. Substitute values carefully and show each algebraic step."
      ],
      [
        "Geometry, measures and data",
        "Angles on a straight line total 180° and angles around a point total 360°. The area of a triangle is ½ × base × perpendicular height. Mean is total divided by number of values; median is the middle ordered value. Choose a graph that suits the data and label axes with units."
      ]
    ],
    "questions": [
      [
        "Write 0.375 as a fraction in simplest form.",
        "3/8."
      ],
      [
        "Find 15% of 240.",
        "0.15 × 240 = 36."
      ],
      [
        "Simplify the ratio 18:24.",
        "3:4."
      ],
      [
        "Solve 3x + 5 = 20.",
        "3x = 15, so x = 5."
      ],
      [
        "Expand 4(2x − 3).",
        "8x − 12."
      ],
      [
        "Find the gradient between (1, 3) and (5, 11).",
        "(11 − 3)/(5 − 1) = 2."
      ],
      [
        "What is the sum of angles on a straight line?",
        "180°."
      ],
      [
        "Find the area of a triangle with base 10 cm and height 6 cm.",
        "½ × 10 × 6 = 30 cm²."
      ],
      [
        "Find the mean of 4, 6, 8 and 10.",
        "28 ÷ 4 = 7."
      ],
      [
        "Find the median of 3, 5, 9, 11 and 20.",
        "9."
      ],
      [
        "A map scale is 1 cm to 5 km. What distance is 7 cm?",
        "7 × 5 = 35 km."
      ],
      [
        "A jacket costs 80 units and is discounted by 25%. Find the sale price.",
        "Discount = 20; sale price = 80 − 20 = 60 units."
      ]
    ]
  }
};
 const examples={
  "Mauritania": [
    "A Sahel vegetation survey records 4, 6, 8 and 10 plant species in equal plots. Mean = 28 ÷ 4 = 7 species per plot.",
    "A 0.12 mol sample occupies 0.30 L. Concentration = 0.12 ÷ 0.30 = 0.40 mol/L.",
    "A 1.2 kW solar water pump operates for 5 h. Energy = 1.2 × 5 = 6 kWh.",
    "A vehicle covers 180 km in 3 h. Average speed = 180 ÷ 3 = 60 km/h."
  ],
  "Mexico": [
    "A forest survey records 9, 11, 12 and 16 tree species in equal plots. Mean = 48 ÷ 4 = 12 species per plot.",
    "A 0.25 mol solution occupies 0.50 L. Concentration = 0.25 ÷ 0.50 = 0.50 mol/L.",
    "A 2.5 kW geothermal demonstration unit runs for 4 h. Energy = 10 kWh.",
    "A bus travels 225 km in 3 h. Average speed = 75 km/h."
  ],
  "Federated States of Micronesia": [
    "Four reef transects record 7, 8, 10 and 11 fish species. Mean = 36 ÷ 4 = 9 species per transect.",
    "A 0.10 mol solution is made up to 0.25 L. Concentration = 0.40 mol/L.",
    "A 700 W solar system operates for 5 h. Energy = 3,500 Wh = 3.5 kWh.",
    "A boat travels 30 km in 2.5 h. Average speed = 12 km/h."
  ],
  "Moldova": [
    "A riverbank survey records 8, 10, 12 and 14 reed patches. Mean = 44 ÷ 4 = 11 patches.",
    "A 0.18 mol sample occupies 0.60 L. Concentration = 0.30 mol/L.",
    "A 1.8 kW heat pump operates for 3 h. Energy = 5.4 kWh.",
    "A train travels 150 km in 2 h. Average speed = 75 km/h."
  ],
  "Monaco": [
    "A marine habitat survey records 5, 7, 8 and 12 species in equal sample areas. Mean = 32 ÷ 4 = 8 species.",
    "A 0.08 mol sample occupies 0.20 L. Concentration = 0.40 mol/L.",
    "A 1.5 kW solar installation operates for 2 h. Energy = 3 kWh.",
    "A route of 6 km is covered in 0.5 h. Average speed = 12 km/h."
  ],
  "Montenegro": [
    "A mountain meadow survey records 6, 8, 9 and 13 plant species. Mean = 36 ÷ 4 = 9 species per plot.",
    "A 0.20 mol solution occupies 0.50 L. Concentration = 0.40 mol/L.",
    "A 2 kW hydropower model operates for 3 h. Energy = 6 kWh.",
    "A mountain route is 24 km and takes 2 h. Average speed = 12 km/h."
  ],
  "Netherlands": [
    "A wetland survey records 10, 12, 14 and 16 bird species. Mean = 52 ÷ 4 = 13 species per site.",
    "A 0.15 mol sample occupies 0.30 L. Concentration = 0.50 mol/L.",
    "A 3 MW wind turbine model operates at 2 MW average output for 4 h. Energy = 8 MWh.",
    "A cyclist covers 42 km in 2 h. Average speed = 21 km/h."
  ],
  "New Zealand": [
    "A forest plot survey records 8, 9, 11 and 12 native plant species. Mean = 40 ÷ 4 = 10 species per plot.",
    "A 0.16 mol solution occupies 0.40 L. Concentration = 0.40 mol/L.",
    "A 2.4 kW geothermal demonstration pump operates for 2.5 h. Energy = 6 kWh.",
    "A field team travels 36 km in 1.5 h. Average speed = 24 km/h."
  ],
  "Nicaragua": [
    "A lake-edge survey records 6, 8, 10 and 12 aquatic plant species. Mean = 36 ÷ 4 = 9 species per plot.",
    "A 0.09 mol solution occupies 0.30 L. Concentration = 0.30 mol/L.",
    "A 1.5 kW geothermal demonstration system runs for 4 h. Energy = 6 kWh.",
    "A road journey of 144 km takes 2.4 h. Average speed = 60 km/h."
  ],
  "Norway": [
    "A fjord-side survey records 7, 9, 10 and 14 plant species. Mean = 40 ÷ 4 = 10 species per plot.",
    "A 0.20 mol sample occupies 0.50 L. Concentration = 0.40 mol/L.",
    "A 4 kW hydropower model operates for 3 h. Energy = 12 kWh.",
    "A ferry travels 96 km in 2 h. Average speed = 48 km/h."
  ]
};
 const make=(c,subject)=>{const m=subjects[subject],idx=["Biology","Chemistry","Physics","Mathematics"].indexOf(subject);return {
 id:"batch121-130-"+c.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+subject.toLowerCase()+"-supplement",
 title:m.title+" | "+c.name,
 lessons:"Original supplementary secondary learning • explanations, worked example and revision practice",
 language:"en",deliveryLanguage:"English-supported with local-language key vocabulary; not a full translation",
 curriculumContext:c.name+" education context. Competent authority: "+c.authority+" ("+c.source+"). Language context: "+c.lang+". Local learning context: "+c.context+". Key vocabulary: "+c.terms+". This original supplementary resource is not an official ministry textbook or verified chapter-by-chapter national syllabus map. Check grade, topic sequence and assessment requirements against current official curriculum documents and the learner's school pathway.",
 curriculumStatus:"supplementary-national-curriculum-support",
 objectives:["Explain core concepts using accurate subject vocabulary.","Apply methods and show calculations step by step.","Interpret observations and numerical results using suitable units.","Describe safe practical methods and limitations of evidence."],
 sections:m.topics.map(([heading,body])=>({heading,body,paragraphs:[body]})),
 example:examples[c.name][idx]+" Write the formula, substitute values with units, calculate and check whether the result is reasonable.",
 activity:"Plan a safe school-based investigation linked to "+c.context+". State a research question, identify independent, dependent and controlled variables, describe a method, record results with units and explain one limitation. Follow teacher guidance and laboratory or fieldwork safety rules.",
 summary:m.topics.map(x=>x[1].split(".")[0]+"."),
 glossary:c.terms,
 questions:m.questions.map(([q,a])=>({q,a,worked:a,explanation:a}))
 };};
 countries.forEach(c=>{const record=all[c.name]||(all[c.name]={});record.curriculum=record.curriculum||c.name+" education context";record.authority=record.authority||c.authority;record.source=record.source||c.source;record.levels=record.levels||{};const levelName="Secondary • Science and Mathematics";const level=record.levels[levelName]||(record.levels[levelName]={});Object.keys(subjects).forEach(subject=>{const list=level[subject]||(level[subject]=[]),item=make(c,subject);if(!list.some(x=>x.id===item.id))list.push(item);});});
})();