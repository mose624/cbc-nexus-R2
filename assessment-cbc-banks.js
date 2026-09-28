/* CBE Nexus - Kenya CBC grade-specific assessment bank layer.
   Uses KICD curriculum grade progression and varied numerical values.
*/
(() => {
  const Q = (q,o,a,t,e) => [q,o,a,t,e];
  function mathBank(g) {
    const n = Number(String(g).replace(/[^0-9]/g,"")) || 1, out = [];
    const add = (q,o,a,t,e) => out.push(Q(q,o,a,t,e));
    if (n <= 3) {
      for (let i=1;i<=25;i++){let a=n*5+i,b=n*3+(i%9)+1,s=a+b;add("What is "+a+" + "+b+"?",[String(s-1),String(s),String(s+1),String(s+2)],1,"Number",a+" + "+b+" = "+s+".");}
      for (let i=1;i<=20;i++){let a=n*8+i+4,b=n*2+(i%6)+1,s=a-b;add("What is "+a+" - "+b+"?",[String(s-1),String(s),String(s+1),String(s+2)],1,"Number",a+" - "+b+" = "+s+".");}
      for (let i=2;i<=16;i++){let a=i+n,b=(i%5)+2,s=a*b;add("What is "+a+" × "+b+"?",[String(s-2),String(s),String(s+2),String(s+4)],1,"Multiplication",a+" × "+b+" = "+s+".");}
      for (let i=1;i<=15;i++){let b=(i%5)+2,s=(i+n)+3,a=b*s;add("What is "+a+" ÷ "+b+"?",[String(s-2),String(s),String(s+2),String(s+3)],1,"Division",a+" ÷ "+b+" = "+s+".");}
      for (let i=1;i<=20;i++){let side=(i%5)+2,s=side*side;add("A square has a side of "+side+" cm. What is its area?",[String(s-2)+" cm²",String(s)+" cm²",String(s+2)+" cm²",String(s+4)+" cm²"],1,"Measurement","Area = "+side+" × "+side+" = "+s+" cm².");}
    } else if (n <= 6) {
      for (let i=1;i<=25;i++){let a=100+n*7+i*3,b=40+n*4+i*2,s=a+b;add("What is "+a+" + "+b+"?",[String(s-10),String(s),String(s+10),String(s+20)],1,"Whole Numbers",a+" + "+b+" = "+s+".");}
      for (let i=1;i<=20;i++){let d=(i%8)+2,u=(i%d)+1,w=(i%6)+2,p=w*d+u;add("Which mixed number is equivalent to "+p+"/"+d+"?",[String(w-1)+" "+u+"/"+d,String(w)+" "+u+"/"+d,String(w+1)+" "+u+"/"+d,String(w)+" "+d+"/"+u],1,"Fractions",p+" ÷ "+d+" gives "+w+" remainder "+u+".");}
      for (let i=1;i<=20;i++){let p=(i%9)+1,b=100+(i%5)*20,s=b*p/100;add("What is "+p+"% of "+b+"?",[String(s-2),String(s),String(s+2),String(s+5)],1,"Percentages",p+"% of "+b+" = "+s+".");}
      for (let i=1;i<=20;i++){let l=(i%9)+4,w=(i%6)+2,s=l*w;add("A rectangle is "+l+" cm by "+w+" cm. What is its area?",[String(s-2)+" cm²",String(s)+" cm²",String(s+2)+" cm²",String(s+4)+" cm²"],1,"Measurement","Area = "+l+" × "+w+" = "+s+" cm².");}
    } else if (n <= 9) {
      for (let i=1;i<=25;i++){let x=i+n,c=(i%9)+2,s=x+c;add("If x = "+x+", what is x + "+c+"?",[String(s-2),String(s),String(s+2),String(s+3)],1,"Algebra","Substitute x = "+x+": x + "+c+" = "+s+".");}
      for (let i=1;i<=20;i++){let x=i+n,a=(i%5)+2,b=a*x;add("Solve "+a+"x = "+b+".",[String(x-2),String(x),String(x+2),String(x+3)],1,"Algebra","Divide both sides by "+a+": x = "+x+".");}
      for (let i=1;i<=20;i++){let r=(i%6)+2,total=r+1,part=3;total*=part;add("A ratio is 1:"+r+". If the total is "+total+", what is one part?",[String(part-1),String(part),String(part+1),String(part+2)],1,"Ratio","The ratio has "+(r+1)+" equal parts; one part is "+part+".");}
      for (let i=1;i<=20;i++){let b=(i%8)+3,h=(i%7)+2,s=b*h/2;add("A triangle has base "+b+" cm and height "+h+" cm. Find its area.",[String(s-1)+" cm²",String(s)+" cm²",String(s+1)+" cm²",String(s+2)+" cm²"],1,"Geometry","Area = 1/2 × "+b+" × "+h+" = "+s+" cm².");}
      for (let i=1;i<=20;i++){let a=i+n,b=i+n+2,c=i+n+4,s=(a+b+c)/3;add("Find the mean of "+a+", "+b+" and "+c+".",[String(s-1),String(s),String(s+1),String(s+2)],1,"Statistics","Mean = ("+a+" + "+b+" + "+c+") ÷ 3 = "+s+".");}
    } else {
      for (let i=1;i<=25;i++){let a=i+n,b=(i%9)+2,c=(i%7)+1,s=a*b+c;add("Evaluate "+a+"("+b+") + "+c+".",[String(s-2),String(s),String(s+2),String(s+4)],1,"Algebra",a+" × "+b+" + "+c+" = "+s+".");}
      for (let i=1;i<=20;i++){let m=(i%8)+2,x=i+n,s=m*x;add("If f(x) = "+m+"x, what is f("+x+")?",[String(s-2),String(s),String(s+2),String(s+4)],1,"Functions","f("+x+") = "+m+" × "+x+" = "+s+".");}
      for (let i=1;i<=20;i++){let q=(i%6)+2,p=(i%8)+2,s=p*q;add("A quantity increases from "+q+" to "+s+". What is the multiplication factor?",[String(p-1),String(p),String(p+1),String(p+2)],1,"Variation",s+" ÷ "+q+" = "+p+".");}
      for (let i=1;i<=20;i++){let b=i+4,h=(i%9)+3,s=b*h/2;add("Find the area of a triangle with base "+b+" cm and height "+h+" cm.",[String(s-2)+" cm²",String(s)+" cm²",String(s+2)+" cm²",String(s+4)+" cm²"],1,"Geometry","Area = 1/2 × "+b+" × "+h+" = "+s+" cm².");}
      for (let i=1;i<=20;i++){let a=i+n,b=i+n+2,c=i+n+4,d=i+n+6,s=(a+b+c+d)/4;add("Find the mean of "+a+", "+b+", "+c+" and "+d+".",[String(s-1),String(s),String(s+1),String(s+2)],1,"Statistics","Mean = total ÷ 4 = "+s+".");}
    }
    return out;
  }
  const banks = {};
  for (let n=1;n<=12;n++) banks["Grade "+n] = { Mathematics: mathBank("Grade "+n) };
  const topicMap = {
    "Grade 1":["numbers","addition","subtraction","measurement","shapes"],
    "Grade 2":["numbers","place value","addition","subtraction","multiplication","division","measurement"],
    "Grade 3":["numbers","fractions","multiplication","division","measurement","money","time","shapes"],
    "Grade 4":["whole numbers","fractions","decimals","measurement","geometry","percentages"],
    "Grade 5":["whole numbers","fractions","decimals","percentages","measurement","geometry","data"],
    "Grade 6":["fractions","decimals","percentages","ratio","measurement","geometry","data"],
    "Grade 7":["integers","fractions","algebra","ratio","geometry","statistics","probability"],
    "Grade 8":["algebra","linear equations","geometry","statistics","probability","ratio"],
    "Grade 9":["algebra","geometry","statistics","probability","commercial arithmetic","graphs"],
    "Grade 10":["algebra","functions","geometry","trigonometry","statistics","probability"],
    "Grade 11":["functions","sequences","trigonometry","statistics","probability","calculus foundations"],
    "Grade 12":["advanced algebra","functions","calculus","statistics","probability","geometry"]
  };


  function textBank(subject, grade) {
    const n = Number(String(grade).replace(/[^0-9]/g,"")) || 1;
    const out = [];
    const add = (q,o,a,t,e) => out.push(Q(q,o,a,a === 0 ? t : t,e));

    const topicSets = {
      "English":["grammar","vocabulary","reading","writing","punctuation","sentence construction","comprehension","oral communication","spelling","literature"],
      "English Activities":["phonics","vocabulary","listening","speaking","reading","writing","sounds","sentences","communication","storytelling"],
      "Kiswahili":["sarufi","msamiati","ufahamu","uandishi","kusoma","kusikiliza","mazungumzo","methali","nahau","fasihi"],
      "Kiswahili Activities":["msamiati","kusikiliza","kuongea","kusoma","kuandika","matamshi","sentensi","majina","vitendo","mawasiliano"],
      "Science":["living things","plants","animals","matter","energy","forces","health","environment","materials","measurement"],
      "Science & Technology":["living things","materials","energy","forces","environment","health","technology","measurement","weather","conservation"],
      "Integrated Science":["matter","energy","forces","health","cells","environment","electricity","waves","measurement","scientific inquiry"],
      "Social Studies":["community","citizenship","history","geography","resources","culture","maps","trade","environment","governance"],
      "Agriculture":["soil","crops","livestock","farm tools","water","pests","nutrition","agroforestry","farm records","marketing"],
      "Business Studies":["entrepreneurship","markets","production","trade","finance","saving","insurance","business records","consumer rights","management"],
      "Computer Science":["algorithms","data","programming","networks","cybersecurity","digital literacy","systems","databases","problem solving","ethics"],
      "Computer Studies":["computer systems","data","programming","networks","cybersecurity","databases","algorithms","digital citizenship","systems","problem solving"],
      "Pre-Technical Studies":["materials","tools","technical drawing","design","safety","structures","mechanisms","electricity","entrepreneurship","prototyping"],
      "Health Education":["nutrition","hygiene","mental wellbeing","relationships","first aid","disease prevention","physical activity","safety","substance awareness","healthy living"],
      "Life Skills Education":["self-awareness","decision making","communication","relationships","resilience","problem solving","goal setting","empathy","leadership","responsibility"],
      "Religious Education":["values","service","relationships","responsibility","peace","integrity","stewardship","compassion","decision making","community"],
      "Creative Arts":["drawing","painting","colour","pattern","design","craft","music","performance","art appreciation","cultural heritage"],
      "Performing Arts":["melody","rhythm","storytelling","animation","folk songs","performance","drama","audience","voice","movement"],
      "Visual Arts":["drawing","painting","colour","texture","pattern","composition","design","craft","art appreciation","cultural heritage"],
      "Music & Dance":["rhythm","melody","folk song","dance","performance","notation","movement","tempo","dynamics","cultural heritage"],
      "Theatre & Film":["acting","storytelling","character","dialogue","stagecraft","film language","camera","sound","audience","production"],
      "Fine Arts":["drawing","painting","sculpture","colour","texture","composition","design","craft","art appreciation","visual communication"],
      "Sports & Physical Education":["fitness","athletics","games","coordination","teamwork","safety","nutrition","fair play","skills","wellbeing"],
      "Sports & Recreation":["fitness","games","athletics","teamwork","safety","fair play","coordination","endurance","strength","wellbeing"],
      "Home Science":["nutrition","food preparation","hygiene","clothing","consumer education","home management","child care","safety","textiles","resource management"],
      "French":["vocabulary","greetings","grammar","reading","writing","listening","speaking","numbers","descriptions","daily routines"],
      "German":["vocabulary","greetings","grammar","reading","writing","listening","speaking","numbers","descriptions","daily routines"],
      "Mandarin":["vocabulary","greetings","characters","reading","writing","listening","speaking","numbers","descriptions","daily routines"],
      "Mandarin Chinese":["vocabulary","greetings","characters","reading","writing","listening","speaking","numbers","descriptions","daily routines"],
      "Arabic":["vocabulary","greetings","grammar","reading","writing","listening","speaking","numbers","descriptions","daily routines"],
      "Kenyan Sign Language":["sign vocabulary","fingerspelling","greetings","family signs","school signs","numbers","directions","sentences","facial expression","communication"],
      "History & Citizenship":["history","citizenship","governance","human rights","constitution","culture","heritage","leadership","community","national values"],
      "Geography":["maps","weather","climate","landforms","population","resources","settlement","transport","environment","fieldwork"],
      "Community Service Learning":["community needs","project planning","teamwork","service","reflection","leadership","problem solving","resources","communication","impact"],
      "Biology":["cells","nutrition","transport","respiration","reproduction","ecology","classification","health","experiments","genetics"],
      "Chemistry":["matter","atomic structure","bonding","acids and bases","salts","separation","stoichiometry","energy","rates","laboratory safety"],
      "Physics":["measurement","motion","forces","energy","pressure","electricity","waves","light","heat","magnetism"],
      "General Science":["scientific method","measurement","matter","energy","forces","environment","health","data","experiments","technology"]
    };

    const topics = topicSets[subject] || ["knowledge","application","reasoning","communication","problem solving","evidence","skills","values","practice","reflection"];

    function makeQuestion(topic, i) {
      const seed = n * 31 + i;
      const mode = seed % 5;
      const clean = topic.charAt(0).toUpperCase() + topic.slice(1);
      if (subject === "English") {
        if (topic === "punctuation") return ["Which sentence uses punctuation correctly?",["After the lesson, the learners went home.","After the lesson the learners, went home.","After, the lesson the learners went home","After the lesson the learners went, home."],0,clean,"A comma correctly separates the introductory phrase from the main clause."];
        if (topic === "grammar") return ["Which word is the verb in the sentence 'The learners discussed the poem'?",["learners","discussed","poem","the"],1,clean,"'Discussed' is the action word in the sentence."];
        if (topic === "vocabulary") return ["Which word is closest in meaning to 'rapid'?",["slow","quick","weak","quiet"],1,clean,"'Quick' has a similar meaning to 'rapid'."];
        if (topic === "spelling") return ["Choose the correctly spelt word.",["necessary","neccessary","necesary","necessery"],0,clean,"The correct spelling is 'necessary'."];
        if (topic === "sentence construction") return ["Which is a complete sentence?",["Because the rain fell.","The learners completed the task.","When the teacher arrived.","Although they were ready."],1,clean,"'The learners completed the task' contains a complete thought."];
        if (topic === "reading") return ["What is the main purpose of reading a passage carefully?",["To identify and understand information and ideas","To skip unfamiliar words","To memorise every line","To ignore the writer's message"],0,clean,"Careful reading helps a learner identify and understand ideas and information."];
        if (topic === "comprehension") return ["When answering a comprehension question, what should a learner use first?",["Evidence from the passage","An unrelated personal story","A guess without reading","Only the title"],0,clean,"Comprehension answers should be supported by information in the passage."];
        if (topic === "writing") return ["Which feature improves a well-organised paragraph?",["A clear main idea supported by relevant details","Unrelated sentences","Repeated words only","No punctuation"],0,clean,"A paragraph is clearer when one main idea is developed with relevant details."];
        if (topic === "oral communication") return ["Which behaviour shows active listening?",["Maintaining attention and responding appropriately","Interrupting constantly","Looking away throughout","Ignoring the speaker"],0,clean,"Active listening involves attention and appropriate responses."];
        return ["Which statement best describes the value of literature?",["It develops imagination, language and understanding of human experiences","It is only useful for spelling tests","It has no connection with life","It should never be discussed"],0,clean,"Literature can develop language, imagination and understanding of human experiences."];
      }
      if (subject === "Kiswahili" || subject === "Kiswahili Activities") {
        if (topic === "sarufi") return ["Neno lipi ni kitenzi katika sentensi 'Wanafunzi wanasoma vitabu'?",["wanafunzi","wanasoma","vitabu","soma"],1,clean,"'Wanasoma' ni kitenzi kinachoonyesha kitendo."];
        if (topic === "msamiati") return ["Neno lenye maana sawa na 'furaha' ni lipi?",["huzuni","shangwe","hasira","uchovu"],1,clean,"'Shangwe' lina maana inayokaribiana na furaha."];
        if (topic === "methali") return ["Methali 'Haraka haraka haina baraka' inasisitiza nini?",["Kufanya mambo kwa pupa kunaweza kuleta hasara","Kila jambo lifanywe kwa haraka","Hakuna haja ya kupanga","Kuchelewa ni lazima"],0,clean,"Methali hiyo inashauri mtu kutofanya mambo kwa pupa."];
        return ["Kusoma kifungu kwa makini humsaidia mwanafunzi kufanya nini?",["Kuelewa ujumbe na mawazo yaliyomo","Kupuuza maelezo","Kukisia bila kusoma","Kukumbuka kichwa pekee"],0,clean,"Kusoma kwa makini husaidia kuelewa ujumbe na mawazo ya kifungu."];
      }
      if (subject === "Mathematics") {
        const a = (seed % 20) + n + 5, b = (seed % 9) + 2;
        if (mode === 0) return ["What is "+a+" + "+b+"?",[String(a+b),String(a+b+1),String(a+b-1),String(a+b+2)],0,clean,a+" + "+b+" = "+(a+b)+"."];
        if (mode === 1) return ["What is "+a+" − "+b+"?",[String(a-b+1),String(a-b),String(a-b-1),String(a+b)],1,clean,a+" − "+b+" = "+(a-b)+"."];
        if (mode === 2) return ["What is "+a+" × "+b+"?",[String(a*b),String(a*b+1),String(a*b-1),String(a+b)],0,clean,a+" × "+b+" = "+(a*b)+"."];
        return ["Which statement is true about "+clean.toLowerCase()+"?",["It should be solved using the relevant mathematical rule.","It never requires reasoning.","It has no practical use.","It cannot be represented numerically."],0,clean,"The relevant mathematical rule should be applied to solve the problem."];
      }
      if (subject === "Science" || subject === "Science & Technology" || subject === "Integrated Science" || subject === "General Science") {
        const science = {
          "living things":["Which characteristic is shared by living things?",["They carry out life processes","They never change","They cannot reproduce","They do not respond to stimuli"],0],
          "plants":["Which process enables green plants to make food?",["Photosynthesis","Digestion","Respiration only","Excretion"],0],
          "matter":["Which state of matter has a fixed volume but takes the shape of its container?",["Solid","Liquid","Gas","Plasma only"],1],
          "energy":["Which form of energy is associated with a moving object?",["Kinetic energy","Chemical energy","Sound only","Potential energy only"],0],
          "forces":["What can a force do to an object?",["Change its motion or shape","Remove all mass","Create matter from nothing","Stop all energy"],0],
          "environment":["Which action helps conserve the environment?",["Planting and caring for trees","Burning waste in open areas","Dumping waste in rivers","Destroying vegetation"],0],
          "health":["Which practice helps prevent the spread of infectious diseases?",["Regular handwashing","Sharing personal towels","Ignoring hygiene","Drinking untreated water"],0]
        };
        const s = science[topic];
        if (s) return [s[0],s[1],s[2],clean,"The correct response applies a basic "+topic+" principle."];
      }
      if (subject === "Social Studies" || subject === "History & Citizenship" || subject === "Geography") {
        if (topic === "maps") return ["What is the main purpose of a map scale?",["To show the relationship between map distance and actual distance","To show rainfall only","To identify political leaders","To measure temperature"],0,clean,"A map scale relates distance on the map to distance on the ground."];
        if (topic === "citizenship") return ["Which action demonstrates responsible citizenship?",["Respecting laws and participating positively in the community","Destroying public property","Ignoring community needs","Discriminating against others"],0,clean,"Responsible citizenship includes respect for laws and constructive community participation."];
        if (topic === "human rights") return ["Why are human rights important?",["They protect the dignity and freedoms of people","They apply only to leaders","They remove all responsibilities","They are limited to one community"],0,clean,"Human rights protect the dignity and fundamental freedoms of people."];
        if (topic === "weather") return ["Which instrument is used to measure rainfall?",["Rain gauge","Thermometer","Wind vane","Barometer"],0,clean,"A rain gauge measures the amount of rainfall received."];
      }
      if (subject === "Agriculture") {
        if (topic === "soil") return ["Which practice helps maintain soil fertility?",["Applying appropriate organic manure","Removing all crop residues","Planting continuously without care","Leaving soil bare on steep slopes"],0,clean,"Appropriate organic manure can improve soil fertility."];
        if (topic === "crops") return ["Why is seed selection important before planting?",["It helps farmers choose healthy and suitable planting material","It prevents all crop diseases permanently","It removes the need for soil preparation","It guarantees rainfall"],0,clean,"Healthy, suitable seed supports good crop establishment."];
        if (topic === "livestock") return ["Why should livestock be provided with clean drinking water?",["For proper health and normal body functions","To replace all feed","To prevent every disease","To increase soil fertility directly"],0,clean,"Clean water is essential for livestock health and normal body functions."];
      }
      if (subject === "Business Studies") {
        if (topic === "saving") return ["Why is saving money important?",["It helps meet future needs and planned goals","It guarantees unlimited income","It removes all business risks","It means money cannot be used"],0,clean,"Saving helps a person prepare for future needs and goals."];
        if (topic === "entrepreneurship") return ["Which quality is useful to an entrepreneur?",["Creativity and willingness to solve problems","Avoiding customers","Refusing to plan","Ignoring feedback"],0,clean,"Entrepreneurs need creativity and problem-solving skills."];
        if (topic === "markets") return ["What is a market?",["A place or system where buyers and sellers exchange goods or services","A place where only producers work","A record book only","A transport route"],0,clean,"A market facilitates exchange between buyers and sellers."];
      }
      if (subject === "Computer Studies" || subject === "Computer Science") {
        if (topic === "algorithms") return ["What is an algorithm?",["A step-by-step procedure for solving a problem","A computer monitor","A storage device","A type of printer"],0,clean,"An algorithm is a sequence of steps used to solve a problem or complete a task."];
        if (topic === "cybersecurity") return ["Which practice improves account security?",["Using a strong unique password and keeping it private","Sharing passwords publicly","Opening unknown attachments","Disabling all updates"],0,clean,"Strong, private passwords improve account security."];
        if (topic === "programming") return ["What is a variable commonly used for in a program?",["Storing a value that can change","Printing paper","Cleaning a screen","Connecting a keyboard physically"],0,clean,"A variable stores data that a program can use and change."];
      }
      if (subject === "Health Education" || subject === "Life Skills Education") {
        if (topic === "nutrition" || topic === "healthy living") return ["Which choice supports a healthy lifestyle?",["Eating a balanced diet and being physically active","Skipping meals regularly","Avoiding water","Never exercising"],0,clean,"A balanced diet and physical activity support healthy living."];
        if (topic === "decision making") return ["What is a useful first step when making an important decision?",["Identify the problem and consider available options","Act without thinking","Ignore consequences","Let others decide every time"],0,clean,"Identifying the problem and considering options supports sound decision making."];
        if (topic === "communication") return ["Which behaviour supports effective communication?",["Listening carefully and expressing ideas clearly","Interrupting continuously","Ignoring the speaker","Using insults"],0,clean,"Effective communication requires listening and clear expression."];
      }
      if (subject === "Religious Education" || subject === "Christian Religious Education" || subject === "Islamic Religious Education" || subject === "Hindu Religious Education") {
        if (topic === "integrity") return ["Which action demonstrates integrity?",["Doing what is right even when no one is watching","Cheating when possible","Changing facts for personal gain","Blaming others for one's actions"],0,clean,"Integrity involves honesty and doing what is right."];
        if (topic === "peace") return ["Which action promotes peaceful coexistence?",["Listening to others and resolving disagreements respectfully","Using violence to settle disputes","Spreading rumours","Refusing dialogue"],0,clean,"Respectful dialogue and listening support peaceful coexistence."];
        if (topic === "compassion") return ["Which action demonstrates compassion?",["Helping a person who is in need","Ignoring someone in difficulty","Mocking another person","Taking advantage of weakness"],0,clean,"Compassion involves concern for others and helpful action."];
      }
      if (subject === "Physics") {
        const mass=(seed%12)+2, acc=(seed%5)+2, force=mass*acc;
        return ["A body of mass "+mass+" kg accelerates at "+acc+" m/s². What is the resultant force?",[String(force)+" N",String(force+2)+" N",String(force-2)+" N",String(mass+acc)+" N"],0,clean,"Using F = ma, the force is "+mass+" × "+acc+" = "+force+" N."];
      }
      if (subject === "Chemistry") {
        const amount=(seed%5)+1, molar=18, mass=amount*molar;
        return ["A sample contains "+amount+" mol of a substance with molar mass 18 g/mol. What is its mass?",[String(mass)+" g",String(mass+9)+" g",String(mass-9)+" g",String(mass+18)+" g"],0,clean,"Mass = amount × molar mass = "+amount+" × 18 = "+mass+" g."];
      }
      if (subject === "Biology") {
        return ["Which statement best describes "+clean.toLowerCase()+"?",["It should be explained using evidence and relevant biological principles","It has no connection with living systems","It can be understood without observation","It never involves investigation"],0,clean,"Biology uses observation, evidence and relevant biological principles to explain living systems."];
      }
      if (subject === "French" || subject === "German" || subject === "Mandarin" || subject === "Mandarin Chinese" || subject === "Arabic") {
        return ["Which skill is most directly developed through regular "+topic+" practice?",["Accurate communication in the target language","Avoiding communication","Ignoring vocabulary","Replacing language practice with unrelated activities"],0,clean,"Regular practice develops communication skills in the target language."];
      }
      return ["Which statement best applies the idea of "+topic+"?",["Use the relevant knowledge or skill to solve the task correctly","Ignore the information provided","Choose an unrelated action","Avoid applying the concept"],0,clean,"The correct response applies the relevant "+topic+" knowledge or skill."];
    }

    for (let i=0;i<100;i++) {
      const topic = topics[i % topics.length];
      const item = makeQuestion(topic, i);
      add(item[0], item[1], item[2], item[3], item[4]);
    }
    return out;
  }

  const supportedMajorSubjects = [
    "Mathematics","English","English Activities","Kiswahili","Kiswahili Activities",
    "Environmental Activities","Creative Activities","Creative Arts",
    "Christian Religious Education","Islamic Religious Education","Hindu Religious Education",
    "Science","Science & Technology","Integrated Science","Social Studies","Agriculture",
    "Business Studies","Computer Science","Computer Studies","Pre-Technical Studies",
    "Health Education","Life Skills Education","Religious Education",
    "Sports & Physical Education","Visual Arts","Performing Arts","Home Science",
    "French","German","Mandarin","Mandarin Chinese","Arabic","Kenyan Sign Language",
    "Indigenous Language","Indigenous Languages","Core Mathematics","Essential Mathematics",
    "Community Service Learning","Biology","Chemistry","Physics","Aviation",
    "Building Construction","Electricity","Metalwork","Power Mechanics","Wood Technology",
    "Media Technology","Marine & Fisheries Technology","History & Citizenship","Geography",
    "Literature in English","Fasihi ya Kiswahili","Sign Language","Sports & Recreation",
    "Music & Dance","Theatre & Film","Fine Arts"
  ];
  for (let n=1;n<=12;n++) {
    const g="Grade "+n;
    banks[g]=banks[g]||{};
    supportedMajorSubjects.forEach(s => { if (!banks[g][s]) banks[g][s]=textBank(s,g); });
  }

  // Senior-school STEM banks: varied numerical and reasoning items.
  function scienceNumericBank(subject, grade) {
    const n=Number(String(grade).replace(/[^0-9]/g,""))||10, out=[];
    const add=(q,o,a,t,e)=>out.push(Q(q,o,a,t,e));
    for(let i=1;i<=100;i++){
      if(subject==="Physics"){
        const m=i+n, acc=(i%5)+2, force=m*acc;
        add("A body of mass "+m+" kg accelerates at "+acc+" m/s². What is the resultant force?",
          [String(force-2)+" N",String(force)+" N",String(force+2)+" N",String(force+4)+" N"],1,"Mechanics",
          "Using F = ma gives "+force+" N.");
      } else if(subject==="Chemistry"){
        const mol=(i%5)+1, mass=mol*18;
        add("A sample contains "+mol+" mol of a substance with molar mass 18 g/mol. What is its mass?",
          [String(mass-9)+" g",String(mass)+" g",String(mass+9)+" g",String(mass+18)+" g"],1,"Stoichiometry",
          "Mass = amount × molar mass = "+mol+" × 18 = "+mass+" g.");
      } else {
        const base=(i%8)+2, height=(i%6)+3, area=base*height;
        add("A biological sample has "+base+" units across and "+height+" units deep. What is the rectangular area?",
          [String(area-2),String(area),String(area+2),String(area+4)],1,"Quantitative Biology",
          "Area = "+base+" × "+height+" = "+area+" square units.");
      }
    }
    return out;
  }
  for(let n=10;n<=12;n++){
    const g="Grade "+n;
    banks[g].Physics=scienceNumericBank("Physics",g);
    banks[g].Chemistry=scienceNumericBank("Chemistry",g);
    banks[g].Biology=scienceNumericBank("Biology",g);
  }

  // KICD Social Studies curriculum map for Junior School.
  // These are curriculum strand/sub-strand labels, not official exam questions.
  const kicdSocialStudiesCurriculum = {
    "Grade 4": [
      "1.0 Natural and Built Environments",
      "2.0 People and Population",
      "3.0 Social Organisations",
      "4.0 Resources and Economic Activities",
      "5.0 Citizenship and Governance in Kenya"
    ],
    "Grade 5": [
      "1.0 Natural and Historic Built Environments",
      "2.0 People and Social Organisations",
      "3.0 Resources and Economic Activities",
      "4.0 Political Systems",
      "5.0 Governance"
    ],
    "Grade 6": [
      "1.0 Natural and the Built Environments",
      "2.0 People and Social Organisations",
      "3.0 Resources and Economic Activities",
      "4.0 Political Systems",
      "5.0 Governance"
    ],
    "Grade 7": [
      "1.0 Social Studies and Personal Development — 1.1 Self-Exploration",
      "1.0 Social Studies and Personal Development — 1.2 Social Entrepreneurial Opportunities",
      "2.0 People and Relationships — 2.1 Human Origin",
      "2.0 People and Relationships — 2.2 Early Civilisation",
      "2.0 People and Relationships — 2.3 Slavery and Servitude",
      "2.0 People and Relationships — 2.4 Developments in Medium of Trade",
      "2.0 People and Relationships — 2.5 Diversity and Interpersonal Relationships",
      "2.0 People and Relationships — 2.6 Peaceful Coexistence",
      "3.0 Community Service-Learning — 3.1 Community Service-Learning Project",
      "4.0 Natural and Historic Built Environments — 4.1 Historical Information",
      "4.0 Natural and Historic Built Environments — 4.2 Historical Development of Agriculture",
      "4.0 Natural and Historic Built Environments — 4.3 Maps and Map Work",
      "4.0 Natural and Historic Built Environments — 4.4 Earth and the Solar System",
      "4.0 Natural and Historic Built Environments — 4.5 Weather",
      "4.0 Natural and Historic Built Environments — 4.6 Fieldwork",
      "5.0 Political Development and Governance — 5.1 Political Development in Africa",
      "5.0 Political Development and Governance — 5.2 The Constitution of Kenya",
      "5.0 Political Development and Governance — 5.3 Human Rights",
      "5.0 Political Development and Governance — 5.4 African Diasporas",
      "5.0 Political Development and Governance — 5.5 Citizenship"
    ],
    "Grade 8": [
      "1.0 Social Studies and Personal Management — 1.1 Self-Improvement",
      "1.0 Social Studies and Personal Management — 1.2 Self-Esteem Assessment",
      "2.0 Community Service Learning — 2.1 Community Service-Learning Project",
      "3.0 People and Relationships — 3.1 Scientific Theory about Human Origin",
      "3.0 People and Relationships — 3.2 Early Civilisations",
      "3.0 People and Relationships — 3.3 Trans-Saharan Slave Trade",
      "3.0 People and Relationships — 3.4 Population Growth in Africa",
      "3.0 People and Relationships — 3.5 Diversity and Interpersonal Skills",
      "3.0 People and Relationships — 3.6 Peaceful Conflict Resolutions",
      "4.0 Natural and Historic Built Environments — 4.1 Map Reading and Interpretation",
      "4.0 Natural and Historic Built Environments — 4.2 Weather and Climate",
      "4.0 Natural and Historic Built Environments — 4.3 Vegetation in Africa",
      "4.0 Natural and Historic Built Environments — 4.4 Historical Sites and Monuments in Africa",
      "5.0 Political Developments and Governance — 5.1 The Constitution of Kenya",
      "5.0 Political Developments and Governance — 5.2 Human Rights",
      "5.0 Political Developments and Governance — 5.3 Citizenship"
    ],
    "Grade 9": [
      "1.0 Social Studies and Career Development — 1.1 Pathway Choices",
      "1.0 Social Studies and Career Development — 1.2 Pre-career Choices",
      "2.0 Community Service-Learning — 2.1 Community Service-Learning Project",
      "3.0 People and Relationships — 3.1 Socio-Economic Practices of Early Humans",
      "3.0 People and Relationships — 3.2 Indigenous Knowledge Systems in African Societies",
      "3.0 People and Relationships — 3.3 Poverty Reduction",
      "3.0 People and Relationships — 3.4 Population Structure",
      "3.0 People and Relationships — 3.5 Peace and Non-violent Conflict Resolution",
      "3.0 People and Relationships — 3.6 Healthy Relationships",
      "4.0 Natural and Historic Built Environments — 4.1 Topographical Maps",
      "4.0 Natural and Historic Built Environments — 4.2 Internal Land Forming Processes",
      "4.0 Natural and Historic Built Environments — 4.3 Multipurpose River Projects in Africa",
      "4.0 Natural and Historic Built Environments — 4.4 Management and Conservation of the Environment",
      "4.0 Natural and Historic Built Environments — 4.5 World Heritage Sites in Africa",
      "5.0 Political Developments and Governance — 5.1 The Constitution of Kenya",
      "5.0 Political Developments and Governance — 5.2 Civic Engagement in Governance",
      "5.0 Political Developments and Governance — 5.3 Kenya's Bill of Rights",
      "5.0 Political Developments and Governance — 5.4 Cultural Globalization"
    ]
  };

  Object.keys(kicdSocialStudiesCurriculum).forEach((g) => {
    const questions = Array.isArray(banks[g] && banks[g]["Social Studies"])
      ? banks[g]["Social Studies"]
      : [];
    const labels = kicdSocialStudiesCurriculum[g];
    if (questions.length && labels.length) {
      questions.forEach((item, index) => {
        item[3] = labels[index % labels.length];
      });
    }
  });

  const curriculum = {};
  Object.keys(kicdSocialStudiesCurriculum).forEach((g) => {
    curriculum[g] = {"Social Studies": kicdSocialStudiesCurriculum[g]};
  });

  window.CBENexusCBCBanks = {banks:banks,topicMap:topicMap,curriculum:curriculum};
})();