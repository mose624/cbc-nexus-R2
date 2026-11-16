/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.1 Introduction to Chemistry.
   Append-only enrichment: ten original labelled diagrams, practical learning and assessment. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-1"); if(!c)return;
 const concepts=[
 ["Chemistry and the particle model","Matter consists of particles in constant motion; particle arrangement, spacing and motion help explain observable properties."],
 ["States of matter","Solids have closely packed particles vibrating about fixed positions; liquids have close particles that move past one another; gases have widely spaced rapidly moving particles."],
 ["Changes of state","Heating or cooling changes particle kinetic energy and can cause melting, boiling, condensation, freezing or sublimation without changing chemical identity."],
 ["Physical and chemical change","A physical change alters form or state without producing a new substance; a chemical change produces substances with different compositions and properties."],
 ["Mixtures and pure substances","A pure substance has a fixed composition; a mixture contains two or more substances physically combined in variable proportions."],
 ["Separation techniques","Filtration, evaporation, crystallisation, distillation, chromatography and magnetic separation exploit differences in physical properties."],
 ["Laboratory apparatus","Beakers, measuring cylinders, pipettes, burettes, balances and thermometers have different precision and appropriate uses."],
 ["Measurement and significant figures","Reliable measurements require suitable instruments, units, careful reading and sensible recording of precision."],
 ["Laboratory safety","Risk is reduced by identifying hazards, assessing exposure, using controls and following instructions for chemicals, heat and glassware."],
 ["Chemistry in society","Chemical knowledge supports water treatment, agriculture, medicine, energy, materials, manufacturing and environmental protection."]
 ];
 const colours=["#dceeff","#e1f4df","#fff0d7","#f4e3ff","#ffe5e2","#e0f5f2","#e9edff","#f8e8d8","#f3e5e5","#e2ecfa"];
 c.diagramGallery=(c.diagramGallery||[]).concat(concepts.map((x,i)=>({title:(i+1)+". "+x[0],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 240" role="img" aria-label="'+x[0]+'"><rect x="8" y="8" width="624" height="224" rx="16" fill="'+colours[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="48" text-anchor="middle" font-size="21" font-weight="bold" fill="#17365d">'+x[0]+'</text><rect x="62" y="76" width="516" height="105" rx="12" fill="#fff" fill-opacity=".85" stroke="#7894aa"/><text x="320" y="112" text-anchor="middle" font-size="14" fill="#20384d">'+x[1]+'</text><text x="320" y="205" text-anchor="middle" font-size="12" fill="#52677c">CBE Nexus • Chemistry concept map</text></svg>',explanation:x[1]})));
 c.realLifeApplications=[
 "Water treatment uses sedimentation, filtration, adsorption and disinfection to make water safer; each stage addresses different contaminants and must be properly monitored.",
 "Agriculture uses fertilisers to replace mineral nutrients, while soil testing helps avoid unnecessary application and nutrient runoff.",
 "Medicine depends on chemical analysis, formulation, dosage control and understanding how substances interact with biological systems.",
 "Food processing uses controlled heating, cooling, crystallisation, fermentation and preservation to maintain quality and safety.",
 "Materials science uses chemical knowledge to select metals, ceramics, polymers, glass and composites for buildings, transport and electronics.",
 "Environmental chemistry measures pollutants in air, soil and water and helps design safer processes and waste treatment."
 ];
 c.practicalActivities=[
 {title:"Compare physical and chemical changes",steps:["Observe melting ice, dissolving salt in water and an approved teacher demonstration of an iron nail rusting or a safe effervescent reaction.","Record evidence before and after each change.","Decide whether a new substance has formed and justify the classification.","Explain why a change in appearance alone is not sufficient proof of a chemical reaction."]},
 {title:"Separate a mixture of sand and salt",steps:["Add a small measured volume of water to a mixture of sand and salt and stir.","Filter the mixture using a funnel and filter paper; retain the filtrate.","Evaporate some water carefully under teacher supervision, then allow the concentrated solution to crystallise.","Explain the property used at each separation stage and identify one source of product loss."]},
 {title:"Improve measurement quality",steps:["Measure a fixed volume of water using a beaker, measuring cylinder and pipette where available.","Record the scale divisions and estimated uncertainty of each instrument.","Repeat measurements and compare consistency.","Explain which instrument is most suitable for measuring a small accurate volume and why."]}
 ];
 c.commonMisconceptions=[
 {misconception:"All changes that can be reversed are physical and all irreversible changes are chemical.",correction:"Reversibility alone does not classify a change. Decide whether a new substance has formed; some physical changes are difficult to reverse and some chemical reactions can be reversed."},
 {misconception:"Particles in a solid do not move.",correction:"Particles in solids vibrate about fixed positions; they are not motionless."},
 {misconception:"Dissolving always produces a chemical reaction.",correction:"Many substances dissolve without forming a new substance; the solute particles become dispersed among solvent particles."},
 {misconception:"A mixture has the same composition throughout by definition.",correction:"A homogeneous mixture is uniform, but a heterogeneous mixture may have visibly different regions or phases."},
 {misconception:"A larger measuring instrument is always more accurate.",correction:"Accuracy depends on instrument design, calibration, resolution and technique, not physical size."},
 {misconception:"Heating always raises temperature.",correction:"During a change of state, energy may be used to overcome intermolecular attractions while temperature remains approximately constant."}
 ];
 const qs=[
 ["Distinguish between an element, a compound and a mixture, giving one example of each.","An element contains one type of atom; a compound contains elements chemically combined in fixed proportions; a mixture contains substances physically combined in variable proportions. Examples appropriate.",3],
 ["Explain, using the particle model, why a gas can be compressed more easily than a liquid.","Gas particles are widely separated with large empty spaces; compression reduces these spaces. Liquid particles are already close together.",3],
 ["A learner says that particles in ice are stationary. Correct the statement.","Particles in ice vibrate about fixed positions; they have kinetic energy but cannot move freely past one another as in a liquid.",2],
 ["Describe the difference between melting and dissolving.","Melting is a change of state from solid to liquid; dissolving is mixing a solute with a solvent to form a solution. Dissolving need not involve melting.",3],
 ["A mixture contains iron filings, sand and sodium chloride. Describe a sequence to separate all three components.","Use a magnet to remove iron; add water to dissolve sodium chloride; filter to separate sand; evaporate or crystallise the filtrate to recover salt.",4],
 ["Explain why filtration cannot separate dissolved salt from salt solution.","Dissolved salt particles pass through ordinary filter-paper pores with the solvent; evaporation or crystallisation is required to recover the salt.",2],
 ["Compare evaporation to dryness and crystallisation as methods of recovering a dissolved solid.","Evaporation to dryness removes solvent completely but may damage heat-sensitive solids; crystallisation concentrates a solution and allows crystals to form, often improving purity and crystal quality.",4],
 ["A learner measures 25 mL using a beaker marked every 50 mL. Explain why the result is unreliable and suggest an improvement.","The scale divisions are too coarse for a reliable 25 mL reading; use a suitably graduated measuring cylinder or pipette and read the meniscus at eye level.",3],
 ["Explain why a chemical change is identified by formation of new substances rather than by colour change alone.","Colour change may occur in physical mixing or dilution; chemical change requires a change in composition and formation of products with different chemical identities. Other evidence may support the conclusion.",3],
 ["A student heats water and records temperature every minute. Identify two variables that should be controlled for a fair comparison between trials.","Control starting water volume/mass, starting temperature, heater power, container, thermometer position, and ambient conditions; any two with explanation.",3],
 ["Describe two hazards associated with heating chemicals and a suitable control for each.","Burns or hot splashes: use eye protection, heatproof mat and tongs; toxic fumes: use a fume cupboard or avoid the hazardous substance; glass breakage: inspect apparatus and use suitable clamps. Any two.",4],
 ["Explain why a pure substance has a fixed melting point while an impure sample often melts over a range.","A pure substance has a consistent composition and characteristic melting temperature at a stated pressure; impurities disrupt the solid structure and usually lower and broaden the melting range.",3],
 ["A water sample contains suspended soil, dissolved salts and microorganisms. Propose a treatment sequence and state what each stage removes.","Sedimentation/coagulation and filtration remove suspended matter; distillation or suitable membrane treatment can reduce dissolved salts; validated disinfection addresses microorganisms. State limitations and safe practice.",5],
 ["A factory wants to reduce chemical waste. Suggest three chemistry-based strategies and explain their value.","Use atom-efficient reactions, recycle solvents/materials, substitute less hazardous reagents, optimise conditions, monitor process streams and treat waste; explain reduced resource use or pollution.",5],
 ["Evaluate the statement: 'Chemistry is only useful to people who work in laboratories.'","Chemistry informs cooking, cleaning, farming, healthcare, construction, energy, water safety, materials and environmental decisions; provide at least three explained examples.",4]
 ];
 c.questions=(c.questions||[]).concat(qs.map(x=>({q:x[0],a:x[1],category:"Learning Studio • examination practice",marks:x[2],markingPoints:x[1]})));
 c.summary=(c.summary||[]).concat([
 "Chemistry studies the composition, structure, properties and transformations of matter.",
 "The particle model explains the behaviour of solids, liquids and gases and many physical changes.",
 "Physical changes do not create new substances; chemical changes produce substances with new compositions and properties.",
 "Mixtures can be separated by exploiting differences in physical properties such as solubility, particle size, boiling point and magnetism.",
 "Accurate measurements require suitable instruments, correct units, careful technique and honest recording.",
 "Laboratory safety depends on hazard identification, risk reduction, protective equipment and responsible disposal.",
 "Chemistry contributes to health, agriculture, water treatment, materials, energy and environmental sustainability."
 ]);
 c.paperDuration="60 minutes";
 c.seoTitle="Introduction to Chemistry Grade 10 Kenya | Notes, Diagrams and Exam Questions";
 c.metaDescription="Kenya Grade 10 Chemistry introduction notes: matter, particles, physical and chemical changes, mixtures, separation methods, measurement, laboratory safety, 10 concept diagrams and exam practice.";
 c.seoKeywords=["Kenya Grade 10 Chemistry","Introduction to Chemistry notes","particle model of matter","physical and chemical changes","separation techniques","chemistry laboratory safety","KICD Chemistry Grade 10"];
})();