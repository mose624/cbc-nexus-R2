/* CBE Nexus — supplementary worked lessons for country batch 41–50.
   Arabic pathways: Algeria, Libya, Morocco, Tunisia and Sudan.
   English pathways: South Sudan, Somalia and Eritrea.
   Egypt already has Arabic textbook-style lessons; Djibouti already has French science notes.
   These lessons are original supplementary revision, not a substitute for official syllabuses. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const records=[
  {name:"Algeria",level:"الثانوي • المسار العلمي",curriculum:"المنهاج الوطني الجزائري • العلوم والرياضيات",authority:"وزارة التربية الوطنية الجزائرية",source:"https://www.education.gov.dz/",lang:"ar",context:"أمثلة تطبيقية مرتبطة بالمياه والزراعة والطاقة في الجزائر."},
  {name:"Libya",level:"الثانوي • المسار العلمي",curriculum:"المنهج الوطني الليبي • العلوم والرياضيات",authority:"وزارة التربية والتعليم الليبية",source:"https://moe.gov.ly/",lang:"ar",context:"أمثلة تطبيقية مرتبطة بالمياه والطاقة والبيئة الساحلية في ليبيا."},
  {name:"Morocco",level:"الثانوي التأهيلي • المسالك العلمية",curriculum:"المنهاج المغربي • المسالك العلمية",authority:"وزارة التربية الوطنية والتعليم الأولي والرياضة",source:"https://www.men.gov.ma/",lang:"ar",context:"أمثلة تطبيقية مرتبطة بالزراعة والموارد المائية والبيئة في المغرب."},
  {name:"Tunisia",level:"الثانوي • الشعب العلمية",curriculum:"البرامج التونسية للتعليم الثانوي • الشعب العلمية",authority:"وزارة التربية التونسية",source:"https://www.education.gov.tn/",lang:"ar",context:"أمثلة تطبيقية مرتبطة بالموارد المائية والزراعة والطاقة في تونس."},
  {name:"Sudan",level:"المرحلة الثانوية • المسار العلمي",curriculum:"المنهج السوداني • العلوم والرياضيات",authority:"وزارة التربية والتعليم السودانية",source:"https://moe.gov.sd/",lang:"ar",context:"أمثلة تعليمية مرتبطة بالمياه والزراعة والطاقة والبيئات النهرية في السودان."},
  {name:"South Sudan",level:"Senior Secondary • Science",curriculum:"South Sudan National Curriculum • Science subjects",authority:"Ministry of General Education and Instruction; National Curriculum Development Centre",source:"https://moe.gov.ss/",lang:"en",context:"Examples draw on water, agriculture, energy and river ecosystems in South Sudan."},
  {name:"Somalia",level:"Secondary • Science",curriculum:"Somalia national curriculum • secondary science foundations",authority:"Federal Ministry of Education, Culture and Higher Education",source:"https://moe.gov.so/",lang:"en",context:"Examples draw on water, coastal environments, pastoral livelihoods and energy in Somalia. Key terms are also identified for Somali-language discussion."},
  {name:"Eritrea",level:"Secondary • Science",curriculum:"Eritrea national curriculum • secondary science foundations",authority:"Ministry of Education, State of Eritrea",source:"https://moe.gov.er/",lang:"en",context:"Examples draw on water conservation, agriculture, coastal environments and energy in Eritrea."}
 ];
 const packs={
 ar:{
  Biology:{title:"علم الأحياء: النظام البيئي والتنوع الحيوي وتوازن الجماعات",sections:[
   "يتكون النظام البيئي من الكائنات الحية والعوامل غير الحية التي تؤثر فيها. تشمل العوامل غير الحية الضوء ودرجة الحرارة والماء ودرجة الحموضة والأملاح المعدنية. وتشمل العلاقات الحيوية التنافس والافتراس والتطفل والتكافل.",
   "الجماعة الحيوية هي أفراد النوع الواحد الذين يعيشون في منطقة محددة. يتغير عددها بسبب الولادات والوفيات والهجرة إلى المنطقة أو خارجها. وقد تحد قلة الغذاء والماء والمأوى والمساحة من نمو الجماعة.",
   "يساعد أخذ العينات على تقدير أعداد الكائنات دون عدها جميعاً. تستخدم المربعات العشوائية للنباتات والكائنات قليلة الحركة. يجب تكرار القياس واختيار مواقع ممثلة لتقليل أثر الصدفة."
  ],example:"في خمسة مربعات مساحة كل منها 1 م²، كان عدد النباتات 8 و10 و7 و9 و11. المتوسط = (8+10+7+9+11) ÷ 5 = 9 نباتات/م². إذا كانت المساحة المشابهة 200 م²، فالتقدير = 9 × 200 = 1800 نبات. يعتمد ذلك على تمثيل العينات للمنطقة.",activity:"اختر مساحة آمنة قرب المدرسة، وضع عدة مربعات عشوائياً، وسجل عدد النباتات من النوع نفسه. احسب المتوسط وقارن النتائج دون اقتلاع النباتات."},
  Chemistry:{title:"الكيمياء: المحاليل والتركيز والتخفيف",sections:[
   "المحلول خليط متجانس يتكون من مذيب ومذاب واحد أو أكثر. يبين التركيز الكتلي كتلة المذاب في حجم معين من المحلول، ويقاس غالباً بوحدة غرام لكل لتر (g/L).",
   "تحسب الكتلة التركيزية بالعلاقة C = m ÷ V، حيث m كتلة المذاب بالغرام وV حجم المحلول باللتر. يجب تحويل المليلتر إلى لتر قبل التعويض في العلاقة.",
   "في عملية التخفيف نضيف مذيباً دون إضافة مذاب، لذلك تبقى كمية المذاب ثابتة. تستخدم العلاقة C₁V₁ = C₂V₂. يجب استعمال أدوات قياس مناسبة وعدم تذوق أي مادة مخبرية."
  ],example:"أذيب 5.0 g من الملح لتحضير 250 mL من المحلول. الحجم = 0.250 L؛ التركيز = 5.0 ÷ 0.250 = 20 g/L. لتحضير 100 mL بتركيز 4 g/L من محلول تركيزه 20 g/L: V₁ = (4 × 100) ÷ 20 = 20 mL، ثم نكمل بالمذيب حتى 100 mL.",activity:"حضّر محلولاً آمناً من ملح الطعام تحت إشراف المعلم، وقارن تركيز محلول ملون آمن قبل التخفيف وبعده."},
  Physics:{title:"الفيزياء: الكهرباء والقدرة والطاقة والسلامة",sections:[
   "شدة التيار I تقاس بالأمبير، وفرق الجهد U بالفولت، والمقاومة R بالأوم. في موصل أومي وعند ثبات درجة الحرارة، يصف قانون أوم العلاقة U = RI.",
   "القدرة الكهربائية هي معدل انتقال الطاقة، وتحسب بالعلاقة P = UI وتقاس بالواط. الطاقة المنتقلة خلال زمن t تحسب بالعلاقة E = Pt. ويمكن التعبير عن الطاقة المنزلية بالكيلوواط ساعة.",
   "يجب تشغيل الأجهزة عند الجهد الاسمي المحدد لها. تحمي المصاهر وقواطع الدائرة من التيار الزائد. لا تجرِ تجارب مدرسية على كهرباء المنازل؛ استخدم بطاريات أو مصادر جهد منخفض تحت إشراف المعلم."
  ],example:"مصباح يعمل عند 12 V ويمر فيه تيار 0.5 A. القدرة P = 12 × 0.5 = 6 W. إذا عمل ساعتين، فالطاقة = 6 × 2 = 12 Wh = 0.012 kWh.",activity:"اقرأ بيانات القدرة على ملصقات الأجهزة وهي مفصولة عن الكهرباء، وقدّر الطاقة المستهلكة بحسب زمن التشغيل. لا تفتح المقابس أو الأجهزة المتصلة بالشبكة."},
  Mathematics:{title:"الرياضيات: الإحصاء والوسط الحسابي والوسيط والمدى",sections:[
   "تتكون السلسلة الإحصائية من بيانات جُمعت حول ظاهرة. الوسط الحسابي هو مجموع القيم مقسوماً على عددها. أما الوسيط فهو القيمة الوسطى بعد ترتيب البيانات، أو متوسط القيمتين الوسطيتين عند وجود عدد زوجي من القيم.",
   "المدى هو الفرق بين أكبر قيمة وأصغر قيمة. يعطي فكرة أولية عن انتشار البيانات لكنه لا يوضح شكل توزيعها بالكامل. تساعد الجداول والرسوم البيانية على تنظيم البيانات ومقارنتها.",
   "ينبغي أن يوضح الاستنتاج الإحصائي المجتمع المدروس ووحدة القياس والفترة وطريقة اختيار العينة. لا يجوز تعميم نتائج عينة صغيرة أو غير ممثلة على جميع السكان دون تحفظ."
  ],example:"كانت كميات المطر خلال خمسة أيام 12 و8 و15 و5 و10 mm. الوسط = 50 ÷ 5 = 10 mm. بعد الترتيب: 5، 8، 10، 12، 15؛ الوسيط = 10 mm؛ المدى = 15 − 5 = 10 mm.",activity:"اجمع خمس قراءات متاحة للمطر أو الحرارة، وسجل الوحدة، ثم احسب الوسط والوسيط والمدى واكتب قيداً واحداً على العينة."}
 },
 en:{
  Biology:{title:"Biology: ecosystems, biodiversity and population sampling",sections:[
   "An ecosystem includes a community of organisms and the non-living environment. Abiotic factors include light, temperature, water, pH and mineral nutrients. Biotic interactions include competition, predation, parasitism and mutualism.",
   "A population is a group of organisms of the same species living in an area. Its size changes through births, deaths, immigration and emigration. Food, water, shelter and space can limit population growth.",
   "Sampling estimates abundance without counting every organism. Random quadrats are useful for plants and other organisms that move little. Repeated samples reduce the influence of chance and make estimates more reliable."
  ],example:"Five 1 m² quadrats contain 8, 10, 7, 9 and 11 seedlings. Mean density = 45 ÷ 5 = 9 seedlings/m². For a comparable 200 m² area, estimated abundance = 9 × 200 = 1,800 seedlings. This assumes the quadrats represent the whole area.",activity:"In a safe area near school, place several quadrats at random, count one plant species and calculate mean density. Do not uproot plants."},
  Chemistry:{title:"Chemistry: solutions, concentration and dilution",sections:[
   "A solution is a homogeneous mixture of a solvent and one or more solutes. Mass concentration is the mass of dissolved solute per volume of solution, commonly expressed in g/L.",
   "Mass concentration is calculated using C = m ÷ V, where m is mass in grams and V is solution volume in litres. Convert millilitres to litres before substituting.",
   "During dilution, solvent is added without adding solute. The amount of solute remains constant, so C₁V₁ = C₂V₂. Use suitable measuring equipment and never taste laboratory chemicals."
  ],example:"Dissolve 5.0 g of salt to make 250 mL of solution. V = 0.250 L; C = 5.0 ÷ 0.250 = 20 g/L. To prepare 100 mL at 4 g/L from a 20 g/L stock: V₁ = (4 × 100) ÷ 20 = 20 mL; add solvent to a final volume of 100 mL.",activity:"Prepare a safe salt solution under supervision and compare a safe coloured solution before and after dilution."},
  Physics:{title:"Physics: electricity, power, energy and safety",sections:[
   "Current I is measured in amperes, potential difference U in volts and resistance R in ohms. For an ohmic conductor at constant temperature, Ohm's law is U = RI.",
   "Electrical power is the rate of energy transfer: P = UI. Energy transferred in time t is E = Pt. Power is measured in watts; electrical energy may be expressed in joules or kilowatt-hours.",
   "Appliances should operate at their rated voltage. Fuses and circuit breakers protect against excessive current. Classroom investigations should use low-voltage cells, never exposed household mains wiring."
  ],example:"A lamp operates at 12 V and draws 0.5 A. P = UI = 12 × 0.5 = 6 W. In 2 hours, E = 6 × 2 = 12 Wh = 0.012 kWh.",activity:"Read power labels on disconnected appliances and estimate energy use from operating time. Do not open plugs or mains-powered equipment."},
  Mathematics:{title:"Mathematics: statistics, mean, median and range",sections:[
   "A statistical data set contains observations collected about a variable. The arithmetic mean is the sum of the values divided by their number. The median is the middle value after ordering the data; with an even number of values, it is the mean of the two middle values.",
   "The range is the maximum value minus the minimum value. It gives a simple measure of spread but does not describe the full distribution. Tables and graphs help organise and compare observations.",
   "A sound statistical conclusion states the population, units, time period and sampling method. A small or biased sample should not be treated as representative of an entire population."
  ],example:"Rainfall over five days is 12, 8, 15, 5 and 10 mm. Mean = 50 ÷ 5 = 10 mm. Ordered data: 5, 8, 10, 12, 15; median = 10 mm; range = 15 − 5 = 10 mm.",activity:"Collect five available rainfall, temperature or travel-time readings. Record units, calculate mean, median and range, and state one limitation of the sample."}
 }
 };
 const qa={
 ar:[
  ["ما المقصود بالعامل غير الحي؟","عامل فيزيائي أو كيميائي غير حي يؤثر في النظام البيئي، مثل الضوء أو الماء أو درجة الحرارة."],
  ["اذكر عاملين يحدان من نمو الجماعة الحيوية.","قد تحد قلة الغذاء أو الماء أو المأوى أو المساحة من نمو الجماعة."],
  ["لماذا نستخدم عدة مربعات عشوائية؟","لتحسين تمثيل العينة وتقليل أثر الاختلاف العشوائي بين المواقع."],
  ["ما وحدة التركيز الكتلي الشائعة؟","غرام لكل لتر (g/L)."],
  ["لماذا نحول 250 mL إلى 0.250 L؟","لأن الحجم في العلاقة C = m/V يجب أن يكون باللتر للحصول على g/L."],
  ["ماذا يحدث لكمية المذاب أثناء التخفيف؟","تبقى كمية المذاب ثابتة إذا لم يحدث فقد للمادة."],
  ["اكتب قانون أوم.","U = RI لموصل أومي عند ثبات درجة الحرارة."],
  ["ما وحدة القدرة الكهربائية؟","الواط (W)."],
  ["لماذا نتجنب كهرباء المنازل في التجارب المدرسية؟","لأن جهد الشبكة قد يسبب صعقاً خطيراً؛ تستخدم مصادر جهد منخفض تحت الإشراف."],
  ["كيف نحسب الوسط الحسابي؟","نجمع القيم ثم نقسم الناتج على عدد القيم."],
  ["ما المقصود بالمدى؟","الفرق بين أكبر قيمة وأصغر قيمة في البيانات."],
  ["لماذا نذكر طريقة اختيار العينة؟","حتى نقيّم مدى تمثيل البيانات للمجتمع الذي ندرسه."]
 ],
 en:[
  ["What is an abiotic factor?","A non-living physical or chemical part of an environment, such as light, water or temperature."],
  ["Name two factors that can limit population growth.","Food availability and water availability are two examples."],
  ["Why use several random quadrats?","To reduce chance variation and improve the representativeness of the estimate."],
  ["What is a common unit for mass concentration?","Grams per litre (g/L)."],
  ["Why convert 250 mL to 0.250 L?","The volume must be in litres to obtain concentration in g/L using C = m/V."],
  ["What remains constant during dilution?","The amount of solute, provided none is lost."],
  ["State Ohm's law.","U = RI for an ohmic conductor at constant temperature."],
  ["What is the SI unit of power?","The watt (W)."],
  ["Why should learners avoid household mains wiring?","Mains voltage can cause severe electric shock; supervised low-voltage supplies are safer."],
  ["How is the arithmetic mean calculated?","Add the values and divide by the number of values."],
  ["What does the range measure?","The difference between the maximum and minimum values."],
  ["Why report the sampling method?","It helps readers judge whether the data represent the population."]
 ]
 };
 for(const c of records){
  const record=all[c.name]||(all[c.name]={});
  record.curriculum=record.curriculum||c.curriculum;
  record.authority=record.authority||c.authority;
  record.source=record.source||c.source;
  record.levels=record.levels||{};
  const level=record.levels[c.level]||(record.levels[c.level]={});
  for(const subject of ["Biology","Chemistry","Physics","Mathematics"]){
   const list=level[subject]||(level[subject]=[]);
   const p=packs[c.lang][subject],id="batch41-50-"+c.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+subject.toLowerCase()+"-worked";
   if(list.some(x=>x.id===id))continue;
   list.push({
    id,title:p.title,lessons:"Supplementary national-curriculum revision • worked example and practice",
    language:c.lang,deliveryLanguage:c.lang==="ar"?"العربية":"English",
    curriculumContext:c.curriculum+" • "+c.authority+". "+c.context+" This is original supplementary learning material. Match the topics, grade and sequence against the current official syllabus and school programme.",
    curriculumStatus:"supplementary-national-curriculum-support",
    objectives:["فهم المفاهيم الأساسية وتفسيرها بدقة.".replace("فهم المفاهيم الأساسية وتفسيرها بدقة.",c.lang==="ar"?"فهم المفاهيم الأساسية وتفسيرها بدقة.":"Explain the key concepts accurately."),c.lang==="ar"?"حل المسائل مع إظهار خطوات التفكير والوحدات.":"Solve problems while showing reasoning and units.",c.lang==="ar"?"تفسير البيانات وربطها بسياق واقعي.":"Interpret data and connect ideas to a real context.",c.lang==="ar"?"تقييم حدود النتائج وطريقة جمع البيانات.":"Evaluate limitations and the method used to collect data."],
    sections:p.sections.map((body,i)=>({heading:(c.lang==="ar"?["المفاهيم الأساسية","الشرح والطريقة","التطبيق والتحليل"][i]:["Core concepts","Explanation and method","Application and analysis"][i]),body,paragraphs:[body]})),
    example:p.example,activity:p.activity+" "+c.context,
    summary:p.sections.map(x=>x.split(/[.؟]/)[0]+(c.lang==="ar"?"。":".")),
    questions:qa[c.lang].map(([q,a])=>({q,a,worked:a,explanation:a}))
   });
  }
 }
})();