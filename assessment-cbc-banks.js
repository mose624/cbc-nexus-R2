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
    const add = (q,o,a,t,e) => out.push(Q(q,o,a,t,e));
    const topicSets = {
      "English":["grammar","vocabulary","reading","writing","punctuation","sentence construction","comprehension","oral communication","spelling","literature"],
      "English Activities":["phonics","vocabulary","listening","speaking","reading","writing","letters","sounds","sentences","communication"],
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
      "General Science":["scientific method","measurement","matter","energy","forces","environment","health","data","experiments","technology"]
    };
    const topics=topicSets[subject] || ["knowledge","application","reasoning","communication","problem solving","evidence","skills","values","practice","reflection"];
    for(let i=0;i<100;i++){
      const t=topics[i%topics.length], k=Math.floor(i/topics.length)+1;
      const a=(n+k)%4;
      const opts=[
        "Apply the relevant "+t+" principle to the situation.",
        "Ignore the evidence and choose an unrelated action.",
        "Use a reasoned approach based on "+t+".",
        "Choose an answer without considering the situation."
      ];
      add("Grade "+n+" "+subject+": Which response best demonstrates understanding of "+t+" in scenario "+k+"?",
        [opts[0],opts[1],opts[2],opts[3]], a===2?2:0, t,
        "The strongest response applies the relevant "+t+" knowledge or skill to the situation.");
    }
    return out;
  }

  const supportedMajorSubjects = [
    "English","English Activities","Kiswahili","Kiswahili Activities",
    "Science","Science & Technology","Integrated Science","Social Studies",
    "Agriculture","Business Studies","Computer Science","Computer Studies",
    "Pre-Technical Studies","Health Education","Life Skills Education",
    "Religious Education","General Science"
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

  window.CBENexusCBCBanks = {banks:banks,topicMap:topicMap};
})();