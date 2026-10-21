/* CBE Nexus Grade 10 higher-order practice bank.
   Original scenario-based practice; aligned to broad KICD senior-school learning areas.
   Not an official KNEC paper. Each item uses the existing Interactive Questions schema.
*/
"use strict";
const subjects = {
"Core Mathematics":["linear equations","functions and graphs","ratio and proportion","percentages and commercial arithmetic","geometry and measurement","trigonometry","statistics","probability","indices and standard form","sequences"],
"Essential Mathematics":["budgeting and percentages","ratio and proportion","measurement","data interpretation","linear relationships","financial decisions","probability","graphs","estimation","problem solving"],
"Sign Language":["sign vocabulary","facial expression and non-manual signals","spatial grammar","fingerspelling","turn-taking","visual attention","sentence structure","interpreting meaning","audience and context","clear communication"],
"Mathematics":["linear equations","functions and graphs","ratio and proportion","percentages and commercial arithmetic","geometry and measurement","trigonometry","statistics","probability","indices and standard form","sequences"],
"English":["reading inference","argument and evidence","grammar in context","sentence structure","tone and audience","summary","vocabulary in context","punctuation","creative writing","oral communication"],
"Kiswahili":["ufahamu","sarufi katika muktadha","uandishi wa insha","msamiati","methali na nahau","muundo wa sentensi","fasihi","mawasiliano","hoja na ushahidi","uandishi rasmi"],
"Biology":["cell structure and function","nutrition","transport in organisms","respiration","reproduction","ecology","classification","health and disease","experimental design","adaptation"],
"Chemistry":["atomic structure","electronic configuration and spdf notation","periodic trends","chemical bonding","formulae and equations","acids bases and indicators","separation techniques","mole concept","rates of reaction","laboratory safety"],
"Physics":["measurement and uncertainty","motion and graphs","forces and Newton's laws","pressure","mechanical properties of materials","heat transfer","waves and sound","light","electric circuits","energy conversion"],
"Integrated Science":["scientific investigation","matter and materials","energy transfer","forces and motion","cells and health","ecosystems","electricity","waves","measurement and data","environmental sustainability"],
"General Science":["scientific method","measurement","matter","energy","forces","human health","ecosystems","data interpretation","technology","environmental conservation"],
"Business Studies":["scarcity and choice","entrepreneurship","market research","demand and supply","business records","cash flow","consumer rights","insurance and risk","marketing","ethical business decisions"],
"Geography":["map interpretation","weather and climate","landforms","population patterns","settlement","natural resources","fieldwork","environmental management","transport networks","data presentation"],
"History and Citizenship":["historical evidence","cause and consequence","constitutional principles","citizenship","human rights","governance","national identity","conflict resolution","heritage","responsible participation"],
"History & Citizenship":["historical evidence","cause and consequence","constitutional principles","citizenship","human rights","governance","national identity","conflict resolution","heritage","responsible participation"],
"Community Service Learning":["community needs assessment","stakeholder consultation","project planning","budgeting resources","teamwork","safeguarding and ethics","implementation","monitoring indicators","reflection","sustainable impact"],
"Computer Studies":["algorithms","data representation","programming logic","networks","cybersecurity","databases","spreadsheets","digital citizenship","troubleshooting","system design"],
"Computer Science":["algorithms","data representation","programming logic","networks","cybersecurity","databases","spreadsheets","digital citizenship","troubleshooting","system design"],
"Agriculture":["soil management","crop selection","water conservation","pest management","livestock care","farm records","agroforestry","food safety","farm budgeting","sustainable farming"],
"Home Science":["balanced nutrition","food hygiene","food preparation","textiles and clothing","consumer decisions","home budgeting","child safety","resource management","first aid","sustainable living"],
"Home Science":["balanced nutrition","food hygiene","food preparation","textiles and clothing","consumer decisions","home budgeting","child safety","resource management","first aid","sustainable living"],
"Physical Education":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Sports & Recreation":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Sports and Recreation":["fitness components","warm-up and recovery","training principles","hydration","injury prevention","team tactics","fair play","movement analysis","nutrition","performance evaluation"],
"Christian Religious Education":["interpretation of scripture","ethical decision-making","human dignity","stewardship","service to others","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"Islamic Religious Education":["Qur'anic interpretation","ethical decision-making","human dignity","stewardship","charity and service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"Hindu Religious Education":["scriptural interpretation","ethical decision-making","dharma and responsibility","stewardship","service to others","peace and reconciliation","family responsibilities","justice","values in daily life","community action"],
"CRE":["scripture and values","ethical decision-making","human dignity","stewardship","service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"IRE":["Qur'anic teachings","ethical decision-making","human dignity","stewardship","charity and service","peace and reconciliation","family responsibilities","justice","faith in daily life","community action"],
"HRE":["religious teachings","ethical decision-making","responsibility","stewardship","service to others","peace and reconciliation","family responsibilities","justice","values in daily life","community action"],
"French":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"German":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"Arabic":["comprehension","grammar in context","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","verb forms","cultural context","editing for clarity"],
"Mandarin Chinese":["comprehension","characters and meaning","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","sentence patterns","cultural context","editing for clarity"],
"Mandarin":["comprehension","characters and meaning","everyday vocabulary","written communication","listening strategies","spoken interaction","register and audience","sentence patterns","cultural context","editing for clarity"],
"Literature in English":["character motivation","theme and evidence","narrative perspective","imagery","tone","dramatic conflict","structure","context","interpretation","evidence-based response"],
"Fasihi ya Kiswahili":["wahusika na motisha","maudhui na ushahidi","mandhari","tamathali za semi","mtindo","mgogoro wa tamthilia","muundo","muktadha","tafsiri","uchambuzi wa dondoo"],
"Media Technology":["audience and purpose","storyboarding","camera framing","sound recording","editing continuity","copyright and consent","lighting","production planning","digital file quality","evaluating media impact"],
"Building and Construction":["site safety","materials selection","measurement and setting out","foundation planning","structural loads","drawing interpretation","tools and maintenance","cost estimation","sustainable construction","quality inspection"],
"Building Construction":["site safety","materials selection","measurement and setting out","foundation planning","structural loads","drawing interpretation","tools and maintenance","cost estimation","sustainable construction","quality inspection"],
"Electricity":["electrical safety","circuit symbols","series and parallel circuits","current voltage and resistance","power and energy","fault finding","earthing","measurement instruments","load calculations","efficient energy use"],
"Metalwork":["workshop safety","material selection","measuring and marking out","cutting and shaping","joining methods","tool selection","drawing interpretation","tolerances","quality control","waste reduction"],
"Power Mechanics":["engine systems","energy conversion","lubrication","cooling systems","transmission","fault diagnosis","workshop safety","maintenance schedules","fuel efficiency","technical measurement"],
"Wood Technology":["timber selection","grain and defects","measuring and marking out","joints","tool safety","finishing","drawing interpretation","strength and load","sustainable sourcing","quality inspection"],
"Woodwork":["timber selection","grain and defects","measuring and marking out","joints","tool safety","finishing","drawing interpretation","strength and load","sustainable sourcing","quality inspection"],
"Aviation":["principles of flight","weather interpretation","navigation basics","aircraft safety","forces and motion","communication protocols","human factors","flight planning","maintenance checks","risk assessment"],
"Marine and Fisheries Technology":["aquatic ecosystems","sustainable fishing","water safety","fish handling","navigation basics","weather and tides","equipment maintenance","stock assessment","aquaculture","resource conservation"],
"Marine & Fisheries Technology":["aquatic ecosystems","sustainable fishing","water safety","fish handling","navigation basics","weather and tides","equipment maintenance","stock assessment","aquaculture","resource conservation"],
"Music & Dance":["rhythm and meter","melody","dynamics","ensemble coordination","movement and expression","rehearsal planning","cultural context","notation","performance evaluation","stage safety"],
"Theatre & Film":["character and motivation","script interpretation","blocking","camera and shot choices","sound design","editing continuity","rehearsal planning","audience and purpose","consent and safety","performance evaluation"],
"Fine Arts":["composition","colour relationships","texture","perspective","materials selection","visual communication","cultural context","sustainable practice","critique with evidence","portfolio development"],
"Creative Arts":["composition","colour relationships","texture","perspective","materials selection","visual communication","cultural context","sustainable practice","critique with evidence","portfolio development"],
"Pre-Technical Studies":["design brief","materials selection","technical drawing","measurement","mechanisms","electrical safety","prototyping","tool selection","testing and iteration","sustainable design"],
"Life Skills Education":["self-awareness","decision-making","communication","conflict resolution","resilience","goal setting","empathy","leadership","personal safety","reflection"],
"Health Education":["nutrition","hygiene","mental wellbeing","first aid","disease prevention","relationships and consent","substance awareness","physical activity","risk assessment","health communication"],
"Environmental Activities":["waste management","water conservation","biodiversity","community participation","soil protection","pollution prevention","resource reuse","data collection","safety","sustainable choices"],
"Indigenous Languages":["comprehension","oral traditions","vocabulary in context","sentence structure","storytelling","proverbs","respectful communication","translation choices","cultural context","writing for audience"]
};
const aliases = {
"History and Citizenship":"History & Citizenship","Core Mathematics":"Core Mathematics","Essential Mathematics":"Essential Mathematics","Mandarin Chinese":"Mandarin Chinese","Sign Language":"Sign Language","Indigenous Languages":"Indigenous Languages","Building and Construction":"Building Construction",
"Marine and Fisheries Technology":"Marine & Fisheries Technology","Wood Technology":"Woodwork",
"Sports and Recreation":"Sports & Recreation","Home Science":"Home Science"
};
const contexts = [
  "A learner team at a Kenyan school is asked to solve a practical problem during a project.",
  "A community group collects evidence before deciding how to improve a local service.",
  "A small enterprise reviews its results after an unexpected change in conditions.",
  "During a practical lesson, a learner notices that the first plan produces inconsistent results.",
  "A county project must balance cost, safety, inclusion and long-term sustainability."
];
const prompts = [
  (s,t,c)=>c+" While investigating "+t+", which action best demonstrates sound "+s+" reasoning?",
  (s,t,c)=>c+" The group is working on "+t+". Which evidence would be most useful before it chooses a solution?",
  (s,t,c)=>c+" A proposed solution to a problem involving "+t+" has an unexpected result. What should the learners do next?",
  (s,t,c)=>c+" In a task about "+t+", two explanations seem possible. Which approach gives the most defensible conclusion?",
  (s,t,c)=>c+" The team must present its findings on "+t+". Which response best shows application rather than simple recall?"
];
const answerSets = [
  ["Choose the option supported by relevant evidence, accurate analysis and the stated constraints.","Accept the first suggestion because it sounds confident.","Ignore contrary observations to finish quickly.","Copy a solution without checking whether it fits the context."],
  ["Collect relevant data, check its reliability and compare it with the question being investigated.","Select only the information that supports the preferred answer.","Use an unrelated example as the only evidence.","Make the decision before identifying what information is needed."],
  ["Repeat the procedure safely, change one relevant factor at a time and record the result.","Hide the unexpected result from the report.","Change several factors at once without recording them.","Assume the original prediction must be correct."],
  ["Compare the explanations against the available evidence and state any limitations.","Choose the explanation with the most technical-sounding words.","Treat both explanations as proven without checking.","Discard the evidence and rely on personal preference."],
  ["Apply the relevant principle to the situation and justify the choice with specific evidence.","Repeat a definition without connecting it to the situation.","Give an opinion without explaining its basis.","Describe an unrelated fact instead of answering the task."]
];
const out=[];
const seen=new Set();
for (const [subject,topics] of Object.entries(subjects)) {
  const canonical=aliases[subject]||subject;
  if (seen.has(canonical)) continue;
  seen.add(canonical);
  for(let i=0;i<50;i++){
    const topic=topics[i%topics.length], c=contexts[Math.floor(i/5)%contexts.length], p=prompts[i%prompts.length], set=answerSets[i%answerSets.length];
    const opts=set.slice();
    const correct=(i*3+Math.floor(i/5))%4;
    const answer=opts[0]; opts[0]=opts[correct]; opts[correct]=answer;
    const question=p(canonical,topic,c);
    out.push({
      id:"g10-ho-"+canonical.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+String(i+1).padStart(2,"0"),
      grade:"Grade 10",subject:canonical,strand:topic,question,options:opts,correctIndex:correct,
      explanation:opts[correct]+" The key is to connect "+topic+" to evidence, context, safety and the intended outcome.",
      published:true
    });
  }
}
module.exports = out;
