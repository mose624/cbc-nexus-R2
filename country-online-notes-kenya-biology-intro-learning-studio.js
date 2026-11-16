/* CBE Nexus Learning Studio — Kenya Grade 10 Biology 1.1 */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Biology?.find(x=>x.id==="bio-intro"); if(!c)return;
 const labels=["Levels of organisation","Characteristics of life","Plant and animal cells","Biology and public health","Biology and food security","Ecosystem components","Scientific investigation cycle","Biology career pathways","Biodiversity levels","Evidence-based decisions"];
 const descriptions=[
 "Cells form tissues, tissues form organs, organs form systems and systems form organisms; populations and ecosystems describe higher ecological organisation.",
 "Living organisms show coordinated nutrition, respiration, movement, growth, reproduction, sensitivity and excretion.",
 "Plant and animal cells share a membrane, cytoplasm, DNA and ribosomes; typical plant cells also have a cellulose wall and large vacuole.",
 "Biology informs disease prevention, diagnosis, treatment and surveillance through evidence about pathogens, vectors and immunity.",
 "Biology improves food security through crop breeding, soil ecology, pest management, livestock health and food preservation.",
 "Ecosystems contain living organisms interacting with non-living factors such as water, air, light and soil.",
 "A scientific investigation moves from a question to a hypothesis, fair test, data, conclusion and revised questions.",
 "Biology supports careers in medicine, veterinary science, ecology, biotechnology, agriculture and laboratory science.",
 "Biodiversity includes genetic variation, species diversity and ecosystem diversity.",
 "Responsible decisions begin with observation, evidence collection, evaluation of options and review of outcomes."
 ];
 const colours=["#dceeff","#e1f4df","#fff0d7","#f4e3ff","#ffe5e2","#e0f5f2","#e9edff","#f8e8d8","#e7f3d8","#e2ecfa"];
 c.diagramGallery=(c.diagramGallery||[]).concat(labels.map((label,i)=>({title:(i+1)+". "+label,svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 240" role="img" aria-label="'+label+'"><rect x="8" y="8" width="624" height="224" rx="16" fill="'+colours[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="48" text-anchor="middle" font-size="21" font-weight="bold" fill="#17365d">'+label+'</text><rect x="70" y="88" width="500" height="88" rx="12" fill="#ffffff" fill-opacity=".8" stroke="#7894aa"/><text x="320" y="125" text-anchor="middle" font-size="15" fill="#20384d">'+descriptions[i].replace(/&/g,"&amp;").replace(/</g,"&lt;")+'</text><text x="320" y="202" text-anchor="middle" font-size="12" fill="#52677c">CBE Nexus Learning Studio • labelled concept diagram</text></svg>',explanation:descriptions[i]})));
 c.realLifeApplications=[
 "Public health teams use biological knowledge of pathogens, vectors and immunity to plan prevention, vaccination, sanitation and disease surveillance.",
 "Farmers apply plant physiology, genetics, soil ecology and animal health to improve yields while reducing unnecessary pesticide use and environmental damage.",
 "Conservation organisations use ecology and population biology to protect habitats, restore degraded ecosystems and manage human-wildlife interactions.",
 "Food scientists apply microbiology and biochemistry to fermentation, food safety, preservation and nutrition.",
 "Biotechnology uses cells, enzymes and genetic information to develop diagnostic tests, medicines, improved crops and industrial processes."
 ];
 c.practicalActivities=[
 {title:"Build a levels-of-organisation model",steps:["Arrange cards labelled cell, tissue, organ, organ system and organism in the correct order.","Use muscle cell → muscle tissue → heart → circulatory system → human as an example.","Add population, community, ecosystem and biosphere to show ecological organisation.","Explain why each level depends on the level below it."]},
 {title:"Classify evidence of life",steps:["Observe a seed, a growing plant, a flame, a crystal and a moving toy.","Record observable features without deciding too early whether each is living.","Use cellular organisation and coordinated life processes to justify each classification.","Discuss why movement or growth-like change alone can be misleading."]},
 {title:"Investigate a local Biology problem",steps:["Identify a local issue such as stagnant water, crop damage, food spoilage or litter affecting organisms.","Write a testable question and identify evidence that could answer it safely.","Collect observations without harming people, organisms or habitats.","Present an evidence-based recommendation and state limitations."]}
 ];
 c.commonMisconceptions=[
 {misconception:"Every living thing must move from place to place.",correction:"Locomotion is not required. Plants and sessile organisms show movement of parts or internal processes while remaining attached."},
 {misconception:"A seed that is not visibly growing is dead.",correction:"A viable dormant seed is alive but has greatly reduced metabolic activity until suitable germination conditions occur."},
 {misconception:"Biology is only about naming plants and animals.",correction:"Biology also investigates molecules, cells, physiology, genetics, microorganisms, ecosystems and applications to society."},
 {misconception:"A scientific hypothesis is simply a guess.",correction:"A hypothesis is a reasoned, testable proposed explanation or prediction evaluated using evidence."},
 {misconception:"One observation proves a general biological rule.",correction:"Reliable conclusions require adequate sampling, repeats, controls and consideration of alternative explanations."},
 {misconception:"All biological discoveries are automatically beneficial.",correction:"Applications require ethical review, safety assessment, fairness and evaluation of environmental and social consequences."}
 ];
 const data=[
 ["Explain why Biology is a systematic science rather than a collection of facts.","It uses testable questions, planned observations, measurements and experiments; evidence is analysed and explanations are evaluated or revised.",2],
 ["A dormant seed appears inactive. Explain why it may still be classified as living.","It contains living cells and can resume metabolism and growth under suitable conditions; dormancy reduces visible activity but does not necessarily mean death.",3],
 ["Distinguish between a population and a community using a local ecosystem example.","A population is individuals of one species in an area; a community consists of populations of different species living and interacting there.",3],
 ["Explain two ways Biology contributes to food security.","Crop improvement can increase yield or resistance; soil and pest management can reduce losses; animal health and food preservation improve supply and safety. Any two explained.",4],
 ["A learner claims that fire is living because it grows, uses oxygen and spreads. Evaluate the claim.","Fire is not cellular and does not reproduce biologically or maintain homeostasis through metabolism; apparent similarities to life processes are insufficient.",4],
 ["Describe how a biologist could investigate whether a local water source supports diverse organisms.","Use safe permitted sampling at several sites; apply standardised sampling; identify organisms; record abiotic conditions; repeat sampling and minimise habitat disturbance.",5],
 ["Explain the relationship between cell, tissue, organ and organ system.","Cells with related functions form tissues; different tissues combine to form organs; organs coordinate in organ systems to perform functions.",4],
 ["A farmer reports low maize yields. Propose a biological investigation and identify two controlled variables.","Test a factor such as soil nutrients or pest pressure; compare plots with a control; measure yield; control seed variety, water, planting density or soil type.",5],
 ["Explain why conservation requires attention to genetic, species and ecosystem diversity.","Genetic variation supports adaptation; species diversity maintains ecological interactions; ecosystem diversity preserves habitats and ecological processes.",4],
 ["Compare the roles of a microbiologist and an ecologist in investigating a disease outbreak.","A microbiologist identifies and studies the pathogen; an ecologist investigates vectors, reservoirs, habitats and environmental conditions influencing transmission.",4],
 ["A hypothesis predicts seedlings exposed to more light grow taller. Give a limitation and improve the investigation.","Other factors affect growth and light may have an optimum; control water, temperature and nutrients, use replicates and measure growth over a defined period.",4],
 ["Discuss two ethical issues in biological research involving living organisms.","Issues include harm, habitat damage, protected species, consent, privacy and fair sharing of benefits; safeguards should minimise harm and obtain approval.",4],
 ["A community proposes draining a wetland for farmland. Evaluate the decision using biological evidence.","Assess biodiversity, flood regulation, water purification, carbon storage, livelihoods and food production; compare alternatives and long-term impacts.",6],
 ["Explain how Biology and Chemistry work together in understanding nutrition.","Biology examines digestion, absorption and physiological needs; Chemistry explains molecular structure, reactions, nutrients and energy transformations.",4],
 ["Design a short public education message correcting one misconception about living organisms and justify it.","Identify a misconception and provide an accurate correction based on cellular organisation or coordinated life processes using clear accessible language.",4]
 ];
 c.questions=(c.questions||[]).concat(data.map(x=>({q:x[0],a:x[1],category:"Learning Studio • higher-order",marks:x[2],markingPoints:x[1]})));
 c.summary=(c.summary||[]).concat(["Biology is an evidence-based science studying life from molecules and cells to organisms and ecosystems.","Living organisms show cellular organisation and a coordinated combination of life processes; no single visible feature is decisive.","Biological knowledge supports health, food security, conservation, technology and responsible decisions.","Investigations require testable questions, fair methods, reliable records, ethical practice and evidence-based conclusions.","Biology offers diverse careers and works closely with Chemistry, Mathematics and computing."]);
 c.paperDuration="60 minutes";
 c.seoTitle="Introduction to Biology Grade 10 Kenya | Learning Studio Notes, Diagrams and Questions";
 c.metaDescription="Kenya Grade 10 Biology Introduction to Biology notes with 10 labelled diagrams, applications, practical activities, misconceptions and examination questions with marking guidance.";
 c.seoKeywords=["Kenya Grade 10 Biology","Introduction to Biology notes","characteristics of living organisms","Biology careers","levels of biological organisation","KICD Biology Grade 10"];
})();