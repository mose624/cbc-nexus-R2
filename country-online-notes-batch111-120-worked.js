/* CBE Nexus — countries 111–120 original supplementary secondary notes.
 * English-supported learning with local-language context and country examples.
 * Not official textbook reproductions or verified chapter-by-chapter syllabus maps.
 */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const countries=[
  {
    "name": "Italy",
    "lang": "Italian; German, French, Slovenian and other minority-language contexts in relevant regions",
    "authority": "Ministry of Education and Merit",
    "source": "https://www.mim.gov.it/",
    "context": "Alpine and Apennine ecosystems, Mediterranean coasts, agriculture, transport and renewable energy",
    "terms": "cellula, atomo, energia, forza, proporzione"
  },
  {
    "name": "Jamaica",
    "lang": "English; Jamaican Creole widely spoken",
    "authority": "Ministry of Education, Skills, Youth and Information",
    "source": "https://moey.gov.jm/",
    "context": "Caribbean coral reefs, tropical forests, watersheds, agriculture, bauxite and renewable energy",
    "terms": "cell, atom, energy, force, ratio"
  },
  {
    "name": "Kiribati",
    "lang": "Gilbertese (I-Kiribati) and English",
    "authority": "Ministry of Education",
    "source": "https://www.moe.gov.ki/",
    "context": "Pacific atolls, coral reefs, lagoons, coastal change, fisheries and solar energy",
    "terms": "te bai ni maiu, energy, force, matter"
  },
  {
    "name": "Kuwait",
    "lang": "Arabic; English widely used in international schools",
    "authority": "Ministry of Education",
    "source": "https://www.moe.edu.kw/",
    "context": "Arabian Gulf marine environments, desert ecology, water desalination, petroleum and solar energy",
    "terms": "خلية، ذرة، طاقة، قوة، نسبة"
  },
  {
    "name": "Latvia",
    "lang": "Latvian; minority-language and multilingual school contexts",
    "authority": "Ministry of Education and Science",
    "source": "https://www.izm.gov.lv/en",
    "context": "Baltic Sea, forests, wetlands, rivers, agriculture and wind energy",
    "terms": "šūna, atoms, enerģija, spēks, proporcija"
  },
  {
    "name": "Liechtenstein",
    "lang": "German",
    "authority": "Office of Education; Government of Liechtenstein",
    "source": "https://www.llv.li/",
    "context": "Alpine habitats, Rhine valley, hydropower, mountain weather and sustainable transport",
    "terms": "Zelle, Atom, Energie, Kraft, Verhältnis"
  },
  {
    "name": "Lithuania",
    "lang": "Lithuanian; Polish- and Russian-language school provision",
    "authority": "Ministry of Education, Science and Sport",
    "source": "https://smsm.lrv.lt/en/",
    "context": "Baltic coast, Curonian Spit, forests, lakes, agriculture and renewable energy",
    "terms": "ląstelė, atomas, energija, jėga, santykis"
  },
  {
    "name": "Luxembourg",
    "lang": "Luxembourgish, French and German; multilingual pathways",
    "authority": "Ministry of Education, Children and Youth",
    "source": "https://men.public.lu/en.html",
    "context": "Moselle and Alzette rivers, forests, urban sustainability, transport and energy",
    "terms": "cellule, Atom, Energie, Kraaft, Verhältnis"
  },
  {
    "name": "Malta",
    "lang": "Maltese and English",
    "authority": "Ministry for Education, Sport, Youth, Research and Innovation",
    "source": "https://education.gov.mt/",
    "context": "Mediterranean marine ecosystems, limestone geology, water conservation, agriculture and solar energy",
    "terms": "ċellula, atomu, enerġija, forza, proporzjon"
  },
  {
    "name": "Marshall Islands",
    "lang": "Marshallese and English",
    "authority": "Ministry of Education, Sports and Training / Public School System",
    "source": "https://www.pss.edu.mh/",
    "context": "Pacific atolls, coral reefs, lagoons, ocean warming, coastal resilience and solar power",
    "terms": "cell, atom, energy, force, ratio"
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
  "Italy": [
    "A coastal biodiversity survey records 7, 9, 10 and 14 plant species in equal quadrats. Mean = (7+9+10+14) ÷ 4 = 10 species per quadrat.",
    "A 0.15 mol solution is made up to 0.50 L. Concentration = n/V = 0.15 ÷ 0.50 = 0.30 mol/L.",
    "A 2.0 kW solar installation operates at rated output for 3 h. Energy = P × t = 2.0 × 3 = 6.0 kWh.",
    "A train travels 210 km in 2.5 h. Average speed = 210 ÷ 2.5 = 84 km/h."
  ],
  "Jamaica": [
    "A reef survey records 8, 10, 12 and 14 coral colonies in equal plots. Mean = 44 ÷ 4 = 11 colonies per plot.",
    "A 0.12 mol solution occupies 0.30 L. Concentration = 0.12 ÷ 0.30 = 0.40 mol/L.",
    "A 1.5 kW pump operates for 4 h. Energy = 1.5 × 4 = 6 kWh.",
    "A field team covers 18 km in 1.5 h. Average speed = 18 ÷ 1.5 = 12 km/h."
  ],
  "Kiribati": [
    "Four lagoon transects record 6, 8, 9 and 13 fish species. Mean = 36 ÷ 4 = 9 species per transect.",
    "A 0.08 mol sample is dissolved to 0.20 L. Concentration = 0.08 ÷ 0.20 = 0.40 mol/L.",
    "A 600 W solar unit runs for 5 h. Energy = 600 × 5 = 3,000 Wh = 3 kWh.",
    "A boat travels 24 km in 2 h. Average speed = 12 km/h."
  ],
  "Kuwait": [
    "A desert plant survey records 4, 5, 7 and 8 species in equal plots. Mean = 24 ÷ 4 = 6 species per plot.",
    "A 0.20 mol solution occupies 0.50 L. Concentration = 0.20 ÷ 0.50 = 0.40 mol/L.",
    "A 2.4 kW desalination demonstration unit runs for 2 h. Energy = 4.8 kWh.",
    "A vehicle covers 150 km in 2 h. Average speed = 75 km/h."
  ],
  "Latvia": [
    "A wetland survey records 8, 10, 11 and 15 plant species. Mean = 44 ÷ 4 = 11 species per quadrat.",
    "A 0.18 mol sample occupies 0.60 L. Concentration = 0.30 mol/L.",
    "A 1.8 kW wind-powered model operates for 3 h. Energy = 5.4 kWh.",
    "A cyclist travels 36 km in 2 h. Average speed = 18 km/h."
  ],
  "Liechtenstein": [
    "An Alpine meadow survey records 5, 7, 8 and 12 flower species. Mean = 32 ÷ 4 = 8 species per plot.",
    "A 0.10 mol solution occupies 0.25 L. Concentration = 0.40 mol/L.",
    "A 900 W hydropower model transfers energy for 40 minutes (2/3 h). Energy = 0.9 × 2/3 = 0.6 kWh.",
    "A mountain path is 9 km and takes 1.5 h. Average speed = 6 km/h."
  ],
  "Lithuania": [
    "A forest survey records 9, 10, 12 and 13 saplings per plot. Mean = 44 ÷ 4 = 11 saplings.",
    "A 0.25 mol solution occupies 0.50 L. Concentration = 0.50 mol/L.",
    "A 2 kW heat pump operates for 2.5 h. Energy = 5 kWh.",
    "A bus travels 96 km in 1.5 h. Average speed = 64 km/h."
  ],
  "Luxembourg": [
    "A riverbank survey records 6, 8, 10 and 12 reed patches. Mean = 36 ÷ 4 = 9 patches.",
    "A 0.09 mol solution occupies 0.30 L. Concentration = 0.30 mol/L.",
    "A 1.2 kW pump operates for 2 h. Energy = 2.4 kWh.",
    "A cycling route is 27 km and takes 1.5 h. Average speed = 18 km/h."
  ],
  "Malta": [
    "A coastal habitat survey records 5, 7, 8 and 12 plant species. Mean = 32 ÷ 4 = 8 species per plot.",
    "A 0.16 mol sample occupies 0.40 L. Concentration = 0.40 mol/L.",
    "A 1.5 kW solar water heater runs at rated power for 2 h. Energy = 3 kWh.",
    "A ferry travels 45 km in 1.25 h. Average speed = 36 km/h."
  ],
  "Marshall Islands": [
    "A lagoon survey records 7, 8, 10 and 11 fish species in equal transects. Mean = 36 ÷ 4 = 9 species per transect.",
    "A 0.14 mol solution occupies 0.35 L. Concentration = 0.40 mol/L.",
    "A 500 W solar system operates for 6 h. Energy = 3,000 Wh = 3 kWh.",
    "A boat travels 30 km in 2.5 h. Average speed = 12 km/h."
  ]
};
 const make=(c,subject)=>{const m=subjects[subject],idx=["Biology","Chemistry","Physics","Mathematics"].indexOf(subject);return {
 id:"batch111-120-"+c.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+subject.toLowerCase()+"-supplement",
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