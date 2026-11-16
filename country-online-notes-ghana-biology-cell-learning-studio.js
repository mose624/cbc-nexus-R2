/* CBE Nexus Learning Studio — Ghana SHS Year 1 Biology.
   Original supplementary chapter: cell structure, organisation and specialisation.
   Country curriculum alignment: Ghana NaCCA SHS Biology pathway; verify sequence against the current school scheme.
   Append-only; does not replace existing country data. */
(()=> {
 "use strict";
 const level=window.CBE_COUNTRY_NOTES?.Ghana?.levels?.["SHS Year 1"];
 if(!level) return;
 const list=level.Biology||(level.Biology=[]);
 if(list.some(x=>x.id==="gh-shs1-bio-cell-structure-studio")) return;
 const esc=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
 const svg=(title,labels,caption)=>{
  const xs=[28,196,364], fills=["#dceeff","#fff0c2","#dcf7e5"], strokes=["#3478a8","#bd8700","#348653"];
  const nodes=labels.map((v,i)=>'<rect x="'+xs[i]+'" y="36" width="128" height="66" rx="11" fill="'+fills[i]+'" stroke="'+strokes[i]+'" stroke-width="2"/><text x="'+(xs[i]+64)+'" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#17324d">'+esc(v)+'</text>');
  return '<svg viewBox="0 0 520 156" role="img" aria-label="'+esc(title)+'" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="510" height="146" rx="14" fill="#f7fbff" stroke="#b8cce0"/>'+nodes.join("")+'<path d="M156 69 H194 M324 69 H362" stroke="#2563eb" stroke-width="3"/><path d="M185 62 L195 69 L185 76 M353 62 L363 69 L353 76" fill="none" stroke="#2563eb" stroke-width="3"/><text x="260" y="128" text-anchor="middle" font-size="12" fill="#40566d">'+esc(caption)+'</text></svg>';
 };
 const diagrams=[
  ["Cell theory and organisation",["Cell","Tissue","Organ"],"Cells form tissues; tissues contribute to organs"],
  ["Typical animal cell",["Membrane","Cytoplasm","Nucleus"],"The membrane encloses cytoplasm and the nucleus"],
  ["Typical plant cell",["Cell wall","Chloroplast","Vacuole"],"Plant cells have additional structures for support and photosynthesis"],
  ["Cell membrane transport",["Outside cell","Membrane","Inside cell"],"Selective permeability regulates exchange"],
  ["Mitochondrion",["Outer membrane","Inner folds","Matrix"],"Cristae increase membrane area for aerobic respiration"],
  ["Chloroplast",["Envelope","Grana","Stroma"],"Chlorophyll-containing membranes capture light energy"],
  ["Levels of organisation",["Cells","Tissues","Organs"],"Organs work together in organ systems"],
  ["Root hair cell adaptation",["Long projection","Thin wall","Large surface"],"Shape increases contact with soil water"],
  ["Red blood cell adaptation",["Biconcave","Haemoglobin","No nucleus*"],"*Mature mammalian red blood cells"],
  ["Specialisation in multicellular life",["Nerve cell","Muscle cell","Root hair"],"Different shapes support different functions"]
 ];
 const questions=[
  ["State the cell theory.","The cell is the basic structural and functional unit of life; living organisms are made of one or more cells; and new cells arise from pre-existing cells.",3,["Cell as basic unit (1); organisms composed of cells (1); cells arise from existing cells (1)."]],
  ["Give two differences between a typical plant cell and a typical animal cell.","A typical plant cell has a cellulose cell wall and a large permanent vacuole; photosynthetic plant cells also contain chloroplasts. Animal cells lack a cellulose cell wall and chloroplasts and usually have smaller temporary vacuoles if present.",4,["Any two correctly explained contrasts (2 marks each)."]],
  ["Explain the function of the cell membrane.","It forms a selectively permeable boundary that controls movement of substances into and out of the cell and supports cell communication.",2,["Boundary (1); selective regulation of exchange (1)."]],
  ["Why are mitochondria numerous in active muscle cells?","Mitochondria release energy through aerobic respiration and supply ATP needed for muscle contraction. Active muscle cells have a high energy demand.",2,["ATP/energy supply (1); link to high contraction demand (1)."]],
  ["Describe the pathway from a cell to an organ system.","Similar specialised cells form a tissue; different tissues form an organ; organs work together in an organ system.",3,["Tissue (1); organ (1); organ system (1)."]],
  ["Explain how a root hair cell is adapted for absorption.","Its long projection provides a large surface area for absorbing water and mineral ions; a thin wall gives a short pathway for water entry; many root hair cells increase contact with soil.",3,["Any three valid adaptations linked to function (1 each)."]],
  ["Distinguish diffusion from osmosis.","Diffusion is the net movement of particles from a region of higher concentration to lower concentration. Osmosis is the net movement of water through a selectively permeable membrane from higher water potential to lower water potential.",4,["Diffusion definition (2); osmosis definition (2)."]],
  ["A plant cell is placed in a concentrated sugar solution. Predict and explain what may happen.","Water moves out of the cell by osmosis because the solution has a lower water potential. The vacuole and cytoplasm shrink and the cell membrane may pull away from the cell wall; the cell becomes plasmolysed.",3,["Water leaves by osmosis (1); lower water potential outside (1); plasmolysis (1)."]],
  ["State the role of ribosomes.","Ribosomes are the sites of protein synthesis; they join amino acids to form polypeptides according to genetic instructions.",2,["Protein synthesis (1); accurate elaboration (1)."]],
  ["Compare the functions of chloroplasts and mitochondria.","Chloroplasts absorb light energy for photosynthesis and manufacture carbohydrates. Mitochondria are sites of aerobic respiration, releasing usable energy as ATP from respiratory substrates.",4,["Chloroplast function (2); mitochondrion function (2)."]],
  ["Why is a cell described as the basic functional unit of life?","It carries out essential life processes such as metabolism, growth, response and reproduction, either independently in unicellular organisms or as part of a multicellular organism.",2,["Carries out life processes (1); suitable explanation/example (1)."]],
  ["Explain why cells in a multicellular organism become specialised.","Specialisation allows cells to develop structures suited to particular tasks. Division of labour makes tissues, organs and organ systems work more efficiently.",2,["Adaptation to a function (1); division of labour/efficiency (1)."]],
  ["A microscope image is 40 mm long. The actual cell is 0.08 mm long. Calculate magnification.","Magnification = image size ÷ actual size = 40 ÷ 0.08 = ×500.",3,["Correct formula (1); substitution (1); ×500 (1)."]],
  ["Give two reasons why a biological drawing should use clear single lines and avoid shading.","Clear single lines make structures and boundaries unambiguous and easier to assess; avoiding shading prevents invented texture or confusing detail and supports accurate scientific communication.",2,["Any two valid reasons (1 each)."]],
  ["A learner claims that every plant cell contains chloroplasts. Evaluate the claim with examples.","The claim is incorrect. Chloroplasts occur in photosynthetic cells exposed to light, such as many leaf mesophyll cells. Root hair cells usually lack chloroplasts because they are underground and specialised for absorption, not photosynthesis.",3,["Rejects claim (1); gives photosynthetic example (1); gives non-photosynthetic example with reason (1)."]]
 ];
 const chapter={
  id:"gh-shs1-bio-cell-structure-studio",
  title:"Cell structure, organisation and specialised cells",
  lessons:"Learning Studio chapter • detailed notes, diagrams and examination practice",
  curriculumContext:"Ghana NaCCA Senior High School Biology, Year 1 foundational cell biology. This is original CBE Nexus supplementary learning material, not an official NaCCA textbook. Teachers and learners should confirm the precise teaching order against the current curriculum and school scheme of learning.",
  curriculumStatus:"supplementary-country-aligned",
  objectives:[
   "Explain cell theory and describe the cell as the basic structural and functional unit of life.",
   "Identify the structures found in typical plant and animal cells and relate each structure to its function.",
   "Compare prokaryotic and eukaryotic cells at an introductory level.",
   "Explain diffusion, osmosis and selective permeability in cell exchange.",
   "Describe how specialised cells are adapted to their functions.",
   "Use microscope magnification and prepare accurate biological drawings."
  ],
  sections:[
   {heading:"1. Cell theory: the foundation of Biology",paragraphs:[
    "All living organisms are made of cells. Some organisms, such as many bacteria and some protists, consist of a single cell. Plants, animals and fungi are multicellular and contain many cells that cooperate. The cell is the smallest unit that can carry out the essential processes of life. In a multicellular organism, individual cells depend on one another and are organised into tissues, organs and organ systems.",
    "Modern cell theory is commonly expressed through three central ideas: all living organisms are composed of one or more cells; the cell is the basic structural and functional unit of life; and new cells arise from pre-existing cells through cell division. These ideas developed through observations made with microscopes and experiments by many scientists over time.",
    "Cell size is limited partly by the relationship between surface area and volume. As a cell becomes larger, its volume generally increases faster than its surface area. The membrane must exchange nutrients, gases and waste products with the surroundings. A high surface-area-to-volume ratio can therefore support efficient exchange. Cells may remain small, flatten, fold their membranes or develop projections to increase effective surface area.",
    "Cell theory applies to cellular life. Viruses are acellular and cannot reproduce independently; they require host-cell machinery. Their status as living or non-living is discussed differently in biology, but they are not cells and do not invalidate the cell theory."
   ],keyTerms:["cell theory","unicellular","multicellular","surface-area-to-volume ratio","cell division"]},
   {heading:"2. The cell membrane, cytoplasm and nucleus",paragraphs:[
    "The cell membrane forms the boundary between the cell and its surroundings. It is made mainly of a phospholipid bilayer containing proteins and other molecules. The membrane is selectively permeable: some substances cross readily, while others require channels, carriers or energy-dependent transport. This regulation helps the cell maintain suitable internal conditions.",
    "Cytoplasm includes the cytosol and structures suspended within it. Many metabolic reactions take place in the cytoplasm. The cytoskeleton helps maintain cell shape, positions organelles and supports movement within the cell. Cytoplasm is not simply an empty liquid; it is a dynamic environment in which many coordinated processes occur.",
    "The nucleus is a membrane-bound organelle in eukaryotic cells. It contains most of the cell's DNA, organised into chromosomes, and helps regulate gene expression and cell activities. The nuclear envelope has pores that regulate exchange between the nucleus and cytoplasm. The nucleolus is a region where components of ribosomes are produced and assembled.",
    "Not all cells have a nucleus. Mature mammalian red blood cells lose their nucleus as they develop, creating more space for haemoglobin. Prokaryotic cells, including bacteria, do not have a membrane-bound nucleus; their DNA is located in a nucleoid region."
   ],keyTerms:["cell membrane","selective permeability","cytoplasm","nucleus","DNA","nucleolus"]},
   {heading:"3. Organelles and their specialised functions",paragraphs:[
    "Mitochondria are major sites of aerobic respiration in eukaryotic cells. They have an outer membrane and a highly folded inner membrane. The folds, called cristae, increase the surface area available for processes involved in ATP production. Cells with high energy requirements, such as many muscle cells, commonly contain numerous mitochondria.",
    "Ribosomes are the sites of protein synthesis. They may be free in the cytoplasm or attached to rough endoplasmic reticulum. Proteins made on rough endoplasmic reticulum may enter membranes, lysosomes or the pathway for secretion. Smooth endoplasmic reticulum lacks attached ribosomes and is involved in lipid synthesis, detoxification and calcium storage in particular cell types.",
    "The Golgi apparatus modifies, sorts and packages proteins and lipids into vesicles for delivery to particular destinations. Lysosomes contain digestive enzymes that break down material and recycle worn-out cell components in many animal cells. Vacuoles store water, ions, pigments and other substances. A large permanent vacuole in many plant cells helps maintain turgor pressure.",
    "Chloroplasts are found in photosynthetic plant cells and many algae. They contain chlorophyll and internal membrane systems where light-dependent reactions occur. The stroma contains enzymes used in carbon fixation. Not every plant cell has chloroplasts: root cells are generally not photosynthetic, while green leaf cells are often rich in chloroplasts.",
    "Organelles work as a coordinated system. The nucleus contains instructions, ribosomes build proteins, the endoplasmic reticulum helps process them, the Golgi apparatus sorts and packages them, and vesicles transport them. Mitochondria supply much of the ATP needed for energy-requiring cellular processes."
   ],keyTerms:["mitochondrion","ribosome","endoplasmic reticulum","Golgi apparatus","lysosome","vacuole","chloroplast","ATP"]},
   {heading:"4. Comparing plant, animal and prokaryotic cells",paragraphs:[
    "Typical plant and animal cells are eukaryotic. Both have a cell membrane, cytoplasm, ribosomes, mitochondria and a nucleus. Typical plant cells also have a cellulose cell wall outside the membrane, a large permanent vacuole and chloroplasts in photosynthetic tissues. Animal cells do not have a cellulose cell wall or chloroplasts.",
    "A cell wall provides support and helps prevent a plant cell from bursting when water enters. The cell wall is freely permeable to many small substances, whereas the cell membrane beneath it controls exchange. The large vacuole contains cell sap and pushes the cytoplasm towards the cell edge when the cell is turgid.",
    "Prokaryotic cells, such as bacteria, are generally smaller and have a simpler internal organisation than eukaryotic cells. They lack a membrane-bound nucleus and membrane-bound organelles such as mitochondria. Their DNA is located in a nucleoid region; some also contain small circular DNA molecules called plasmids. A bacterial cell wall is not made of cellulose.",
    "The word 'typical' is important in cell comparisons. There are exceptions and specialisations. Some plant cells lack chloroplasts; mature mammalian red blood cells lack a nucleus; and some animal cells contain specialised structures not found in every animal cell. Biological descriptions should avoid claiming that every cell of a broad group is identical."
   ],keyTerms:["eukaryote","prokaryote","cell wall","plasmid","nucleoid","cell sap","turgor"]},
   {heading:"5. Movement of substances across cell membranes",paragraphs:[
    "Cells need to obtain nutrients and oxygen and remove waste products. Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration as a result of random motion. Diffusion continues until particles are evenly distributed or until another process maintains a concentration difference. The rate is influenced by temperature, concentration gradient, surface area and diffusion distance.",
    "Osmosis is the net movement of water molecules through a selectively permeable membrane from a region of higher water potential to a region of lower water potential. Water potential is affected by dissolved solutes and pressure. In school-level examples, a dilute solution usually has a higher water potential than a concentrated solution, provided other conditions are comparable.",
    "When a plant cell is placed in a dilute solution, water may enter by osmosis. The vacuole expands and the cell contents press against the cell wall, making the cell turgid. The cell wall resists further expansion and helps prevent bursting. If a plant cell is placed in a sufficiently concentrated solution, water leaves; the cytoplasm shrinks and the membrane may pull away from the wall. This is plasmolysis.",
    "Animal cells lack a rigid cell wall. In a very dilute surrounding solution, water may enter and cause an animal cell to swell or burst. In a concentrated solution, water may leave and the cell may shrink. These effects are important in understanding why medical fluids must be prepared with suitable concentrations.",
    "Active transport moves substances across a membrane against a concentration gradient using energy, commonly supplied by ATP, and specific membrane proteins. Root hair cells use active transport to absorb some mineral ions from soil when the ion concentration in the cell is already higher than in the soil solution. Diffusion, osmosis and active transport are distinct processes and should not be used as interchangeable terms."
   ],keyTerms:["diffusion","osmosis","water potential","selectively permeable","active transport","plasmolysis","turgid"]},
   {heading:"6. Specialised cells and division of labour",paragraphs:[
    "A specialised cell has a structure suited to a particular function. Specialisation involves changes in cell shape, organelle abundance, surface area, membrane proteins or the substances produced. In multicellular organisms, specialisation creates division of labour: different cells perform different tasks and cooperate to keep the organism alive.",
    "A root hair cell has a long projection that increases surface area in contact with soil. Its thin wall provides a short pathway for water entry, and membrane transport proteins support mineral-ion uptake. Root hair cells are usually found in the root's absorption region and do not normally contain chloroplasts.",
    "A red blood cell transports oxygen using haemoglobin. Its biconcave shape gives a large surface-area-to-volume ratio and a short diffusion distance. Mature mammalian red blood cells lack a nucleus, leaving more internal space for haemoglobin. They are flexible enough to pass through narrow capillaries.",
    "A neurone transmits electrical impulses. Many neurones have a long axon to carry impulses over a distance, branched dendrites to receive signals and a myelin sheath that insulates the axon and increases conduction speed. Different neurones have different structures depending on their roles.",
    "A sperm cell is adapted for reaching and fertilising an egg. It has a flagellum for movement, many mitochondria in the midpiece to provide ATP and an acrosome containing enzymes that help it penetrate the egg's outer layers. A muscle cell contains contractile proteins and often many mitochondria to support contraction.",
    "Specialisation is linked to gene expression. Most body cells in an organism contain essentially the same DNA, but different genes are switched on or off in different cell types. This leads to different proteins being made and therefore different structures and functions."
   ],keyTerms:["specialisation","root hair cell","red blood cell","neurone","sperm cell","gene expression","division of labour"]},
   {heading:"7. Microscopy, magnification and biological drawings",paragraphs:[
    "A light microscope uses visible light and lenses to magnify small structures. Total magnification is calculated by multiplying the eyepiece magnification by the objective lens magnification. For example, a ×10 eyepiece used with a ×40 objective gives a total magnification of ×400.",
    "Magnification is the ratio of image size to actual size: magnification = image size ÷ actual size. The image and actual measurements must be in the same units before division. If an image measures 30 mm and the actual specimen is 0.06 mm, magnification = 30 ÷ 0.06 = ×500. Magnification has no unit.",
    "Resolution is the ability to distinguish two close points as separate. Increasing magnification without improving resolution produces a larger but not necessarily clearer image. A light microscope can show cells and some organelles, while an electron microscope can reveal much smaller structures at higher resolution, although specimen preparation and the imaging process differ.",
    "A biological drawing should be large enough to show relevant features, use clear single lines, avoid artistic shading, and include labels with straight ruled lines that touch the correct structure. A title should identify the specimen and view. Draw only what is observed; do not add structures because they are expected to be present."
   ],keyTerms:["microscope","magnification","resolution","objective lens","eyepiece","biological drawing"]},
   {heading:"8. Worked examples and step-by-step reasoning",paragraphs:[
    "Worked example 1 — A microscope has a ×10 eyepiece and a ×40 objective. Total magnification = 10 × 40 = ×400. The magnification is written with the multiplication sign and has no unit.",
    "Worked example 2 — A cell image is 24 mm long and the actual cell is 0.06 mm long. Magnification = image size ÷ actual size = 24 ÷ 0.06 = ×400. If the actual size is required instead, rearrange: actual size = image size ÷ magnification.",
    "Worked example 3 — A plant cell is placed in a concentrated sugar solution. Water moves out of the cell by osmosis because the external solution has a lower water potential. The vacuole becomes smaller and the protoplast may pull away from the cell wall. This is plasmolysis.",
    "When answering cell-structure questions, name the structure and link it to the function. For example, do not merely state that a root hair cell has a long extension; explain that it increases surface area for absorption. Clear cause-and-effect explanations earn more credit than lists of unrelated features."
   ],workedExamples:[
    {title:"Calculating total microscope magnification",question:"A microscope has a ×10 eyepiece and a ×25 objective lens. Calculate the total magnification.",marks:2,method:"Total magnification = eyepiece magnification × objective magnification.",steps:["= 10 × 25","= ×250"],answer:"×250",explanation:"Multiply the two lens magnifications. Magnification is a ratio and has no unit."},
    {title:"Finding actual cell size",question:"A cell image is 36 mm long at a magnification of ×600. Calculate the actual cell length in millimetres and micrometres.",marks:4,method:"Actual size = image size ÷ magnification; then convert millimetres to micrometres.",steps:["Actual size = 36 ÷ 600 = 0.06 mm","1 mm = 1000 µm","0.06 × 1000 = 60 µm"],answer:"0.06 mm or 60 µm",explanation:"Keep units consistent during division and convert only after finding the actual size."},
    {title:"Explaining osmosis in a plant cell",question:"A plant cell is placed in a concentrated salt solution. Explain the expected movement of water and the resulting cell condition.",marks:4,method:"Compare water potential inside and outside the cell, then describe the direction of net water movement.",steps:["The surrounding solution has a lower water potential.","Water moves out through the selectively permeable membrane by osmosis.","The vacuole and cytoplasm shrink.","The membrane may pull away from the cell wall: plasmolysis."],answer:"Water leaves the cell by osmosis and the cell becomes plasmolysed.",explanation:"Use the term water potential and identify the membrane through which water moves."}
   ]},
   {heading:"9. Practical activities and investigations",paragraphs:[
    "Practical A — Observe prepared plant and animal cell slides. Begin with the lowest objective lens, focus carefully, then increase magnification. Draw the field of view and label only structures that can be identified confidently. Record the total magnification.",
    "Practical B — Investigate osmosis using equal-sized potato cylinders. Place them in solutions of different concentrations for the same period. Blot each sample consistently and measure mass before and after. Keep potato dimensions, solution volume, temperature and exposure time controlled. Use repeats and calculate percentage change in mass.",
    "Practical C — Model diffusion using a safe teacher-approved demonstration or a digital simulation. Discuss how temperature, concentration difference and distance affect the rate. Do not use hazardous chemicals or taste any laboratory material.",
    "Practical D — Compare specialised cells using diagrams or prepared slides. For each cell, make a two-column table linking a visible structural feature to the function it supports. Distinguish observations from interpretations."
   ],practicalActivities:[
    {title:"Microscope observation and drawing",description:"Observe prepared plant and animal cell slides under supervision. Record eyepiece and objective magnifications, draw a large biological diagram and label only visible structures."},
    {title:"Potato osmosis investigation",description:"Use equal-sized potato cylinders in different teacher-prepared salt or sugar concentrations. Measure initial and final mass, calculate percentage change and explain results using water potential. Wear appropriate protective equipment and do not taste materials."},
    {title:"Specialised cell comparison",description:"Compare root hair cells, red blood cells, neurones, sperm cells and muscle cells. For each, identify at least two adaptations and explain how each supports its function."}
   ]},
   {heading:"10. Common misconceptions and revision checkpoints",paragraphs:[
    "Misconception: every plant cell contains chloroplasts. Correction: chloroplasts occur mainly in photosynthetic tissues; root hair cells usually lack them.",
    "Misconception: the cell wall controls all movement into the cell. Correction: the cell membrane is selectively permeable; the cell wall is generally porous and provides support.",
    "Misconception: osmosis is the movement of any particle. Correction: osmosis specifically concerns the net movement of water through a selectively permeable membrane.",
    "Misconception: mitochondria create energy. Correction: they transfer energy from respiratory substrates into ATP; energy is transformed, not created.",
    "Misconception: all cells in one organism have different DNA. Correction: most body cells contain essentially the same genetic information but express different sets of genes.",
    "Misconception: magnification and resolution are the same. Correction: magnification enlarges an image; resolution determines how clearly two close points can be distinguished."
   ],commonMisconceptions:[
    {misconception:"Every plant cell contains chloroplasts.",correction:"Chloroplasts are found in photosynthetic cells; root hair cells generally lack them."},
    {misconception:"The cell wall is selectively permeable.",correction:"The cell membrane controls selective exchange; the cell wall mainly provides support and is porous to many substances."},
    {misconception:"Osmosis is movement of any type of particle.",correction:"Osmosis is the net movement of water through a selectively permeable membrane down a water-potential gradient."},
    {misconception:"Mitochondria create energy.",correction:"Mitochondria transfer energy from respiratory substrates into ATP; energy is conserved and transformed."},
    {misconception:"Magnification and resolution mean the same thing.",correction:"Magnification enlarges an image; resolution is the ability to distinguish close points separately."}
   ]},
   {heading:"11. Examination practice and marking guidance",paragraphs:[
    "Answer all questions using precise biological language. For structure-function questions, state the feature and explain how it supports the function. For comparisons, give paired differences rather than describing only one cell type. For calculations, write the formula, substitute values and include the correct unit where appropriate.",
    "For practical questions, identify the variable being changed, the outcome measured and the factors controlled. Explain how repeats improve reliability and how measurements should be recorded. Conclusions must be supported by the results rather than by assumptions."
   ]}
  ],
  diagramGallery:diagrams.map(([title,labels,caption])=>({title,svg:svg(title,labels,caption),explanation:caption+"."})),
  realLifeApplications:[
   "Understanding cell membranes helps explain how medicines, nutrients and waste products move into and out of cells.",
   "Knowledge of red blood cell structure supports understanding of anaemia and disorders that affect oxygen transport.",
   "Plant cell structure helps farmers understand water uptake, wilting, mineral nutrition and crop responses to soil salinity.",
   "Microscopy is used in medical laboratories, food safety, agriculture and biological research to examine cells and microorganisms.",
   "Cell specialisation explains how tissues repair, how muscles contract and how nerve cells communicate."
  ],
  summary:[
   "The cell is the basic structural and functional unit of living organisms.",
   "The cell membrane regulates exchange; cytoplasm hosts many reactions; the nucleus contains most eukaryotic DNA.",
   "Mitochondria support aerobic respiration; ribosomes synthesise proteins; chloroplasts carry out photosynthesis.",
   "Plant and animal cells share many structures, but typical plant cells also have a cellulose wall and large permanent vacuole.",
   "Diffusion, osmosis and active transport are distinct mechanisms of movement across or within cells.",
   "Specialised cells have structural adaptations that support particular functions.",
   "Magnification = image size ÷ actual size, using consistent units."
  ],
  questions:questions.map(([q,a,marks,markingPoints])=>({q,a,marks,category:"Cell biology and application",markingPoints,explanation:a})),
  seo:{
   title:"Ghana SHS Biology Notes: Cell Structure, Organelles and Specialised Cells",
   description:"Ghana SHS Year 1 Biology revision notes on cell theory, plant and animal cells, organelles, diffusion, osmosis, specialised cells and microscopy, with diagrams, worked examples and examination questions.",
   keywords:["Ghana SHS Biology notes","SHS 1 Biology cell structure","plant and animal cell differences","cell organelles and functions","osmosis and diffusion notes","specialised cells Biology","NaCCA Biology revision","Ghana senior high school Biology questions"],
   faq:[
    {question:"What is the basic unit of life?",answer:"The cell is the basic structural and functional unit of life."},
    {question:"What is the function of the cell membrane?",answer:"It is selectively permeable and regulates movement of substances into and out of the cell."},
    {question:"How do plant and animal cells differ?",answer:"Typical plant cells have a cellulose cell wall and large permanent vacuole, and photosynthetic plant cells contain chloroplasts; animal cells lack these plant structures."},
    {question:"What is osmosis?",answer:"Osmosis is the net movement of water through a selectively permeable membrane from higher water potential to lower water potential."}
   ]
  }
 };
 list.unshift(chapter);
})();
