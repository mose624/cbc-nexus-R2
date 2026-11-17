/* CBE Nexus country- and curriculum-matched question extensions.
 * Questions are original practice items mapped to official published curriculum strands.
 * They supplement, rather than reproduce, official examination papers.
 * Cognitive tag is stored at item[11]; language tag at item[12].
 */
(function(){
"use strict";
const make=(q,opts,answer,topic,explanation,strand,sub,outcome,content,cognitive,language="English")=>
 [q,opts,answer,topic,explanation,strand,sub,outcome,content,"","",cognitive,language];
function afghanGrade1MathDari(){
 const out=[];
 const digits=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
 const n=x=>String(x).replace(/[0-9]/g,d=>digits[Number(d)]);
 const add=(a,b)=>a+b, sub=(a,b)=>a-b;
 const push=(q,ans,wrong,topic,explain,level="foundational")=>{
   const values=[...new Set([ans,...wrong])];
   for(let candidate=0;values.length<4;candidate++) if(!values.includes(candidate)) values.push(candidate);
   const shift=out.length%4;
   const opts=values.slice(shift).concat(values.slice(0,shift));
   const correct=opts.indexOf(ans);
   out.push(make(q,opts.map(n),correct,topic,explain,"عدد و عملیات","شمارش، جمع و تفریق","حل مسئله‌های سادهٔ عددی",topic,level,"دری"));
 };
 for(let a=0;a<=9;a++) for(let b=0;b<=9;b++){
   if(out.length>=25) break;
   const z=add(a,b); push("اگر "+n(a)+" سیب داشته باشیم و "+n(b)+" سیب دیگر بگیریم، چند سیب می‌شود؟",z,[z+1,Math.max(0,z-1),z+2],"جمع","با افزودن "+n(b)+" به "+n(a)+"، حاصل "+n(z)+" است.",out.length%5===0?"higher-order":"foundational");
 }
 for(let a=1;a<=10;a++) for(let b=1;b<=a;b++){
   if(out.length>=50) break;
   const z=sub(a,b); push("از "+n(a)+" مهره، "+n(b)+" مهره برداشته شود. چند مهره باقی می‌ماند؟",z,[z+1,Math.max(0,z-1),z+2],"تفریق","با کم کردن "+n(b)+" از "+n(a)+"، "+n(z)+" باقی می‌ماند.",out.length%5===0?"higher-order":"foundational");
 }
 const countQs=[
  [3,5],[6,2],[8,4],[1,7],[9,5],[2,6],[4,8],[5,9],[7,3],[0,6],
  [10,4],[2,9],[1,8],[3,7],[6,10]
 ];
 countQs.forEach(([a,b],i)=>push("کدام عدد بزرگ‌تر است: "+n(a)+" یا "+n(b)+"؟",Math.max(a,b),[Math.min(a,b),Math.abs(a-b),Math.max(a,b)+1],"مقایسهٔ اعداد","عدد "+n(Math.max(a,b))+" از "+n(Math.min(a,b))+" بزرگ‌تر است.",i%3===0?"higher-order":"foundational"));
 const shapes=[
 ["مثلث چند ضلع دارد؟",3,[2,4,5],"اشکال هندسی","مثلث سه ضلع دارد."],
 ["مربع چند ضلع مساوی دارد؟",4,[3,5,2],"اشکال هندسی","مربع چهار ضلع مساوی دارد."],
 ["دایره چند گوشه دارد؟",0,[1,2,3],"اشکال هندسی","دایره گوشه ندارد."],
 ["مستطیل چند گوشه دارد؟",4,[2,3,5],"اشکال هندسی","مستطیل چهار گوشه دارد."],
 ["اگر یک مثلث و یک مربع داشته باشیم، روی‌هم چند ضلع دارند؟",7,[6,8,9],"اشکال هندسی","مثلث سه ضلع و مربع چهار ضلع دارد؛ ۳ + ۴ = ۷."]
 ];
 shapes.forEach((x,i)=>push(x[0],x[1],x[2],x[3],x[4],i===4?"higher-order":"foundational"));
 const contexts=[
  ["مریم ۴ کتاب دارد. برادرش ۳ کتاب دیگر به او می‌دهد. مریم چند کتاب دارد؟",7,[6,8,9],"مسئلهٔ روزمره","۴ + ۳ = ۷."],
  ["در یک سبد ۹ نارنج بود. ۲ نارنج خورده شد. چند نارنج باقی ماند؟",7,[6,8,9],"مسئلهٔ روزمره","۹ − ۲ = ۷."],
  ["در صنف ۵ دختر و ۴ پسر هستند. چند شاگرد در صنف است؟",9,[8,10,7],"مسئلهٔ روزمره","۵ + ۴ = ۹."],
  ["احمد ۱۰ افغانی داشت و ۶ افغانی مصرف کرد. چند افغانی برایش باقی ماند؟",4,[3,5,6],"پول و شمارش","۱۰ − ۶ = ۴ افغانی."],
  ["یک موتر ۳ مسافر داشت؛ ۲ مسافر دیگر سوار شدند. اکنون چند مسافر است؟",5,[4,6,7],"مسئلهٔ روزمره","۳ + ۲ = ۵."],
  ["در باغ ۸ درخت بود. ۳ درخت دیگر غرس شد. اکنون چند درخت است؟",11,[10,12,9],"مسئلهٔ روزمره","۸ + ۳ = ۱۱."],
  ["۱۰ پرنده روی درخت بودند؛ ۴ پرنده پرواز کردند. چند پرنده ماند؟",6,[5,7,8],"مسئلهٔ روزمره","۱۰ − ۴ = ۶."],
  ["فاطمه ۲ قلم و دوستش ۵ قلم دارد. هر دو باهم چند قلم دارند؟",7,[6,8,9],"مسئلهٔ روزمره","۲ + ۵ = ۷."],
  ["یک دکان ۷ توپ داشت و ۲ توپ فروخت. چند توپ باقی ماند؟",5,[4,6,7],"مسئلهٔ روزمره","۷ − ۲ = ۵."],
  ["در یک صف ۶ کودک ایستاده‌اند. ۳ کودک دیگر آمدند. چند کودک شد؟",9,[8,10,7],"مسئلهٔ روزمره","۶ + ۳ = ۹."]
 ];
 contexts.forEach((x,i)=>push(x[0],x[1],x[2],x[3],x[4],i>=5?"higher-order":"application"));
 while(out.length<100){
   const k=out.length, a=(k*3)%11, b=(k*7)%6, z=(k%2===0)?a+b:Math.max(0,a-b);
   const q=k%2===0?"حاصل جمع "+n(a)+" و "+n(b)+" چند است؟":"حاصل تفریق "+n(b)+" از "+n(a)+" چند است؟";
   push(q,z,[z+1,Math.max(0,z-1),z+2],k%3===0?"الگوهای عددی":"جمع و تفریق",k%2===0?n(a)+" + "+n(b)+" = "+n(z):n(a)+" − "+n(b)+" = "+n(z),k%4===0?"higher-order":"foundational");
 }
 return out.slice(0,100);
}

function afghanGrade1MathPashto(){
 const out=[];
 const digits=["۰","۱","۲","۳","۴","۵","۶","۷","۸","۹"];
 const n=x=>String(x).replace(/[0-9]/g,d=>digits[Number(d)]);
 const push=(q,ans,wrong,topic,explain,level="foundational")=>{
  const values=[...new Set([ans,...wrong])];
  for(let candidate=0;values.length<4;candidate++) if(!values.includes(candidate)) values.push(candidate);
  const shift=out.length%4, opts=values.slice(shift).concat(values.slice(0,shift));
  out.push(make(q,opts.map(n),opts.indexOf(ans),topic,explain,"شمېرې او عملیات","شمېرل، جمع او تفریق","د ساده عددي ستونزو حل",topic,level,"پښتو"));
 };
 for(let a=0;a<=9;a++) for(let b=0;b<=9;b++){ if(out.length>=25) break; const z=a+b; push("که "+n(a)+" مڼې ولرو او "+n(b)+" نورې ترلاسه کړو، ټولې څو مڼې کېږي؟",z,[z+1,Math.max(0,z-1),z+2],"جمع","د "+n(a)+" او "+n(b)+" جمع "+n(z)+" ده.",out.length%5===0?"higher-order":"foundational"); }
 for(let a=1;a<=10;a++) for(let b=1;b<=a;b++){ if(out.length>=50) break; const z=a-b; push("له "+n(a)+" مرمرو څخه "+n(b)+" لرې شي، څو مرمر پاتې کېږي؟",z,[z+1,Math.max(0,z-1),z+2],"تفریق","د "+n(a)+" څخه "+n(b)+" منفي کړو، "+n(z)+" پاتې کېږي.",out.length%5===0?"higher-order":"foundational"); }
 [[3,5],[6,2],[8,4],[1,7],[9,5],[2,6],[4,8],[5,9],[7,3],[0,6],[10,4],[2,9],[1,8],[3,7],[6,10]].forEach(([a,b],i)=>push("کومه شمېره لویه ده: "+n(a)+" که "+n(b)+"؟",Math.max(a,b),[Math.min(a,b),Math.abs(a-b),Math.max(a,b)+1],"د شمېرو پرتله","شمېره "+n(Math.max(a,b))+" له "+n(Math.min(a,b))+" څخه لویه ده.",i%3===0?"higher-order":"foundational"));
 const shapes=[["مثلث څو اړخونه لري؟",3,[2,4,5],"هندسي بڼې","مثلث درې اړخونه لري."],["مربع څو مساوي اړخونه لري؟",4,[3,5,2],"هندسي بڼې","مربع څلور مساوي اړخونه لري."],["دایره څو کونجونه لري؟",0,[1,2,3],"هندسي بڼې","دایره هېڅ کونج نه لري."],["مستطیل څو کونجونه لري؟",4,[2,3,5],"هندسي بڼې","مستطیل څلور کونجونه لري."],["د مثلث او مربع ټول څو اړخونه دي؟",7,[6,8,9],"هندسي بڼې","مثلث درې او مربع څلور اړخونه لري؛ ټول اووه کېږي."]];
 shapes.forEach((x,i)=>push(x[0],x[1],x[2],x[3],x[4],i===4?"higher-order":"foundational"));
 const contexts=[["احمد ۴ کتابونه لري او ۳ نور ورته ورکړل شي. اوس څو کتابونه لري؟",7,[6,8,9],"ورځنی ژوند","۴ + ۳ = ۷."],["په ټوکرۍ کې ۹ نارنج وو؛ ۲ وخوړل شول. څو پاتې شول؟",7,[6,8,9],"ورځنی ژوند","۹ − ۲ = ۷."],["په ټولګي کې ۵ نجونې او ۴ هلکان دي. ټول زده کوونکي څو دي؟",9,[8,10,7],"ورځنی ژوند","۵ + ۴ = ۹."],["مریم ۱۰ افغانۍ لرلې او ۶ یې ولګولې. څو افغانۍ ورسره پاتې شوې؟",4,[3,5,6],"پیسې او شمېرل","۱۰ − ۶ = ۴."],["په موټر کې ۳ مسافر وو او ۲ نور پورته شول. اوس څو مسافر دي؟",5,[4,6,7],"ورځنی ژوند","۳ + ۲ = ۵."],["په بڼ کې ۸ ونې وې او ۳ نورې کېنول شوې. اوس څو ونې دي؟",11,[10,12,9],"ورځنی ژوند","۸ + ۳ = ۱۱."],["۱۰ مرغان پر ونه وو؛ ۴ والوتل. څو پاتې شول؟",6,[5,7,8],"ورځنی ژوند","۱۰ − ۴ = ۶."],["فاطمې ۲ قلمونه او ملګرې یې ۵ قلمونه لري. ټول څو قلمونه دي؟",7,[6,8,9],"ورځنی ژوند","۲ + ۵ = ۷."],["دوکان ۷ توپونه لرل او ۲ یې وپلورل. څو پاتې شول؟",5,[4,6,7],"ورځنی ژوند","۷ − ۲ = ۵."],["په کتار کې ۶ ماشومان ولاړ دي؛ ۳ نور راغلل. اوس څو ماشومان دي؟",9,[8,10,7],"ورځنی ژوند","۶ + ۳ = ۹."]];
 contexts.forEach((x,i)=>push(x[0],x[1],x[2],x[3],x[4],i>=5?"higher-order":"application"));
 while(out.length<100){const k=out.length,a=(k*3)%11,b=(k*7)%6,z=k%2===0?a+b:Math.max(0,a-b);push(k%2===0?"د "+n(a)+" او "+n(b)+" مجموعه څو ده؟":"له "+n(a)+" څخه "+n(b)+" منفي کړو، څو پاتې کېږي؟",z,[z+1,Math.max(0,z-1),z+2],k%3===0?"د شمېرونو بڼې":"جمع او تفریق",k%2===0?n(a)+" + "+n(b)+" = "+n(z):n(a)+" − "+n(b)+" = "+n(z),k%4===0?"higher-order":"foundational");}
 return out.slice(0,100);
}

function b1math(lang){
 const out=[],T={
 Albanian:{add:(a,b)=>"Sa është shuma e "+a+" dhe "+b+"?",sub:(a,b)=>"Sa mbetet nëse nga "+a+" hiqet "+b+"?",cmp:(a,b)=>"Cili numër është më i madh: "+a+" apo "+b+"?",word:(a,b)=>"Arta ka "+a+" mollë dhe merr edhe "+b+". Sa mollë ka gjithsej?",tri:"Sa brinjë ka një trekëndësh?",sq:"Sa brinjë ka një katror?",cir:"Sa kënde ka një rreth?",combo:"Një trekëndësh ka 3 brinjë dhe një katror 4. Sa brinjë kanë së bashku?",explain:n=>"Përgjigjja e saktë është "+n+"."},
 Arabic:{add:(a,b)=>"ما مجموع "+a+" و"+b+"؟",sub:(a,b)=>"كم يتبقى إذا طرحنا "+b+" من "+a+"؟",cmp:(a,b)=>"أي العددين أكبر: "+a+" أم "+b+"؟",word:(a,b)=>"لدى سارة "+a+" تفاحات وأخذت "+b+" تفاحات أخرى. كم تفاحة لديها؟",tri:"كم ضلعاً للمثلث؟",sq:"كم ضلعاً للمربع؟",cir:"كم زاوية للدائرة؟",combo:"للمثلث 3 أضلاع وللمربع 4 أضلاع. كم ضلعاً لهما معاً؟",explain:n=>"الإجابة الصحيحة هي "+n+"."},
 Catalan:{add:(a,b)=>"Quina és la suma de "+a+" i "+b+"?",sub:(a,b)=>"Quants en queden si traiem "+b+" de "+a+"?",cmp:(a,b)=>"Quin nombre és més gran: "+a+" o "+b+"?",word:(a,b)=>"La Laia té "+a+" pomes i en rep "+b+" més. Quantes en té en total?",tri:"Quants costats té un triangle?",sq:"Quants costats té un quadrat?",cir:"Quants vèrtexs té un cercle?",combo:"Un triangle té 3 costats i un quadrat en té 4. Quants costats sumen?",explain:n=>"La resposta correcta és "+n+"."},
 Portuguese:{add:(a,b)=>"Qual é a soma de "+a+" e "+b+"?",sub:(a,b)=>"Quanto resta se retirarmos "+b+" de "+a+"?",cmp:(a,b)=>"Qual número é maior: "+a+" ou "+b+"?",word:(a,b)=>"A Ana tem "+a+" maçãs e recebe mais "+b+". Quantas maçãs tem ao todo?",tri:"Quantos lados tem um triângulo?",sq:"Quantos lados tem um quadrado?",cir:"Quantos cantos tem um círculo?",combo:"Um triângulo tem 3 lados e um quadrado tem 4. Quantos lados têm juntos?",explain:n=>"A resposta correta é "+n+"."},
 English:{add:(a,b)=>"What is the sum of "+a+" and "+b+"?",sub:(a,b)=>"How many remain when "+b+" is taken from "+a+"?",cmp:(a,b)=>"Which number is greater: "+a+" or "+b+"?",word:(a,b)=>"A learner has "+a+" apples and receives "+b+" more. How many apples are there altogether?",tri:"How many sides does a triangle have?",sq:"How many sides does a square have?",cir:"How many corners does a circle have?",combo:"A triangle has 3 sides and a square has 4. How many sides are there altogether?",explain:n=>"The correct answer is "+n+"."}
 }[lang];
 const add=(q,n,topic,tag)=>{const v=[n,n+1,Math.max(0,n-1),n+2];while(new Set(v).size<4)v.push(n+3+v.length);const s=out.length%4,o=v.slice(s).concat(v.slice(0,s));out.push(make(q,o,o.indexOf(n),topic,T.explain(n),topic,topic,"Solve a Grade 1 number or shape problem.",q,tag,lang));};
 for(let i=0;i<20;i++){let a=i%10+1,b=i%5+1;add(T.add(a,b),a+b,"Addition",i%5===0?"higher-order":"foundational");}
 for(let i=0;i<20;i++){let a=i%10+2,b=i%3+1;add(T.sub(a,b),a-b,"Subtraction",i%5===0?"higher-order":"foundational");}
 for(let i=0;i<20;i++){let a=i+1,b=20-i;add(T.cmp(a,b),Math.max(a,b),"Comparing numbers","application");}
 for(let i=0;i<20;i++){let a=i%8+1,b=i%4+1;add(T.word(a,b),a+b,"Everyday problem solving","application");}
 for(let i=0;i<10;i++){let a=i+3,b=i%3+1;add(T.word(a,b),a+b,"Reasoning with quantities","higher-order");}
 add(T.tri,3,"Geometry","foundational");add(T.sq,4,"Geometry","foundational");add(T.cir,0,"Geometry","foundational");add(T.combo,7,"Geometry","higher-order");
 while(out.length<100){let i=out.length,a=i%10+1,b=i%5+1;add(T.add(a,b),a+b,"Number operations",i%4===0?"higher-order":"foundational");}
 return out.slice(0,100);
}

const packs={

 "Albania":{curriculum:"Albania National Pre-University Curriculum / ASCAP",language:"Albanian",languageNote:"100 original Grade 1 Mathematics practice items in Albanian. Supplementary foundational practice; detailed learning-outcome mapping remains in progress.",verifiedAt:"2026-11-17",source:"https://www.ascap.edu.al/wp-content/uploads/2026/01/Urdhri-nr.-555-date-28.10.2025-Per-miratimin-e-programeve-mesimore-te-disa-lendeve-te-kurrikules-berthame-te-disa-klasave-te-arsimit-baze.pdf",grades:{"Grade 1":{"Mathematics":b1math("Albanian")}}},
 "Algeria":{curriculum:"Algeria National Curriculum / Ministry of National Education",language:"Arabic",languageNote:"100 original first-year primary Mathematics practice items in Arabic. This does not represent separate French- or Tamazight-language streams.",verifiedAt:"2026-11-17",source:"https://www.education.gov.dz/",grades:{"1ère année primaire":{"Mathematics":b1math("Arabic")}}},
 "Andorra":{curriculum:"Andorra Andorran Education System",language:"Catalan",languageNote:"100 original first-year primary Mathematics practice items in Catalan. French- and Spanish-system banks require separate language-specific work.",verifiedAt:"2026-11-17",source:"https://www.govern.ad/en/ministeris-i-secretaries-d-estat/ministeri-de-relacions-institucionals-educacio-i-universitats/convenis-i-normativa/legislacio-ordenament-curricular",grades:{"Primera ensenyança 1":{"Mathematics":b1math("Catalan")}}},
 "Angola":{curriculum:"Angola National Curriculum / INADE",language:"Portuguese",languageNote:"100 original 1.ª Classe Mathematics practice items in Portuguese. Supplementary practice; detailed INADE outcome mapping remains in progress.",verifiedAt:"2026-11-17",source:"https://inate.gov.ao/",grades:{"1.ª Classe":{"Mathematics":b1math("Portuguese"),"Matemática":b1math("Portuguese")}}},
 "Antigua and Barbuda":{curriculum:"Antigua and Barbuda National Curriculum / Ministry of Education",language:"English",languageNote:"100 original Grade 1 Mathematics practice items in English. Supplementary foundational practice; detailed national outcome mapping remains in progress.",verifiedAt:"2026-11-17",source:"https://education.gov.ag/",grades:{"Grade 1":{"Mathematics":b1math("English")}}},
\n
 "Antigua and Barbuda":{
  curriculum:"Antigua and Barbuda National Curriculum / Ministry of Education",
  language:"English",languageNote:"Country-level curriculum and grade selector configured. Subject-level banks will be added only after topic and language validation.",
  verifiedAt:"2026-11-17",source:"https://education.gov.ag/",grades:{}
 },
 "Argentina":{
  curriculum:"Argentina National Education Law / NAP and Provincial Curricula",
  language:"Spanish",languageNote:"NAPs provide common national learning priorities; provincial curricula and grade organisation must be checked for the learner's jurisdiction.",
  verifiedAt:"2026-11-17",source:"https://www.educ.ar/recursos/150199/coleccion-ncleos-de-aprendizaje-prioritarios-",grades:{}
 },
 "Armenia":{
  curriculum:"Armenia State Standard of General Education / Ministry of ESCS",
  language:"Armenian",languageNote:"Twelve-year general education is organised as grades 1–4, 5–9 and 10–12; updated subject programmes are being phased in.",
  verifiedAt:"2026-11-17",source:"https://escs.am/en/static/second-education?s=edu",grades:{}
 },
 "Australia":{
  curriculum:"Australian Curriculum / ACARA",
  language:"English",languageNote:"Australian Curriculum Version 9.0; state and territory authorities determine implementation timing and local delivery.",
  verifiedAt:"2026-11-17",source:"https://www.education.gov.au/australian-curriculum",grades:{}
 },
 "Austria":{
  curriculum:"Austria National Curriculum (Lehrplan) / BMB",
  language:"German",languageNote:"Primary school (Volksschule) commonly covers school years 1–4; school pathways and upper-level provision vary.",
  verifiedAt:"2026-11-17",source:"https://www.bildung.gv.at/",grades:{}
 },

  "Afghanistan":{
  variants:{
   "Afghanistan Ministry of Education National Curriculum (Dari)":{
    curriculum:"Afghanistan Ministry of Education National Curriculum (Dari)",language:"Dari",
    languageNote:"Grade 1 Mathematics practice questions in Dari; original supplementary items, pending detailed mapping to the revised textbook.",
    verifiedAt:"2026-11-17",source:"https://moe.gov.af/en/node/450",
    subjectSources:{"Mathematics":"https://moe.gov.af/en/node/450"},
    grades:{"Grade 1":{"Mathematics":afghanGrade1MathDari()}}
   },
   "Afghanistan Ministry of Education National Curriculum (Pashto)":{
    curriculum:"Afghanistan Ministry of Education National Curriculum (Pashto)",language:"Pashto",
    languageNote:"Grade 1 Mathematics practice questions in Pashto; original supplementary items, pending detailed mapping to the revised textbook.",
    verifiedAt:"2026-11-17",source:"https://moe.gov.af/en/node/450",
    subjectSources:{"Mathematics":"https://moe.gov.af/en/node/450"},
    grades:{"Grade 1":{"Mathematics":afghanGrade1MathPashto()}}
   }
  }
 },
"Kenya":{
  curriculum:"Kenya CBC/CBE",language:"English",verifiedAt:"2026-11-17",
  source:"https://kicd.ac.ke/cbc-materials/curriculum-designs/",
  grades:{
   "Grade 7":{
    Mathematics:[
     make("A school water tank contains 240 L, which is 3/5 of its capacity. During cleaning, 1/4 of the water is drained. The tank is then refilled with 90 L. How much water is in the tank now?",["210 L","240 L","270 L","330 L"],2,"Fractions and problem solving","The tank initially contains 240 L. Draining 1/4 leaves 180 L; adding 90 L gives 270 L.","Number","Fractions, decimals and percentages","Apply fractions to a multi-step real-life problem.","Multi-step fractional reasoning","higher-order"),
     make("A class plans to plant trees along a 48 m boundary. Trees are placed 3 m apart, with one at each end. How many trees are needed?",["15","16","17","18"],2,"Measurement and patterns","There are 48 ÷ 3 = 16 intervals. Including a tree at both ends requires 17 trees.","Geometry and Measurement","Measurement","Model a practical spacing problem and distinguish intervals from objects.","Boundary spacing model","higher-order")
    ],
    "Integrated Science":[
     make("A garden has many caterpillars feeding on crop leaves. After a broad-spectrum pesticide is sprayed, caterpillars decrease but insect-eating birds also become fewer. Which explanation best accounts for the bird decline?",["The pesticide increased photosynthesis","Birds lost a food source and may also have been exposed to the pesticide","Birds changed into herbivores","The soil stopped containing minerals"],1,"Ecosystems and human impact","The pesticide can reduce prey availability and may also affect birds through direct or indirect exposure. This is a food-web consequence.","Living Things and Environment","Interdependence and environmental conservation","Explain how a human activity can affect more than one trophic level.","Pesticide effects on a food web","higher-order"),
     make("Two identical seedlings are grown for 10 days. One receives light and water; the other receives water but is kept in darkness. Which comparison would provide the fairest test of the effect of light?",["Use different soil types","Give both seedlings equal water, soil, container and temperature","Give the dark seedling more fertiliser","Measure only the height of the brighter seedling"],1,"Scientific investigation","A fair test changes only the light condition while keeping other variables constant and measuring both seedlings.","Scientific Investigation","Planning a fair test","Identify controlled variables in an investigation.","Seedling experiment design","higher-order")
    ]
   },
   "Grade 8":{
    Mathematics:[
     make("A learner says that increasing every side of a rectangular garden by 20% increases its area by 20%. The original garden is 10 m by 5 m. Which statement is correct?",["The new area is 60 m², a 20% increase","The new area is 66 m², a 32% increase","The new area is 72 m², a 44% increase","The new area is 75 m², a 50% increase"],2,"Percentages and area","New dimensions are 12 m and 6 m. New area = 72 m²; original area = 50 m². Increase = 22/50 × 100 = 44%.","Number","Fractions, decimals and percentages","Evaluate a claim by applying percentage change to two dimensions.","Compound percentage change in area","higher-order"),
     make("A taxi charges a fixed booking fee of 80 shillings plus 25 shillings per kilometre. A passenger has at most 330 shillings. What is the greatest whole number of kilometres the passenger can travel?",["8 km","9 km","10 km","11 km"],2,"Linear relationships","80 + 25k ≤ 330, so 25k ≤ 250 and k ≤ 10. The greatest distance is 10 km.","Algebra","Linear equations and inequalities","Form and solve an inequality from a real-life situation.","Taxi fare inequality","higher-order")
    ],
    "Integrated Science":[
     make("Two identical bulbs are connected in series to a battery. One bulb is removed. What is the most likely observation and why?",["The other bulb becomes brighter because resistance falls","The other bulb goes out because the circuit is open","The other bulb remains equally bright because current is unchanged","The battery produces more current through an open circuit"],1,"Electric circuits","Removing one bulb breaks the single path in a series circuit, so current stops throughout the circuit.","Energy","Electricity and circuits","Predict and explain the effect of changing a circuit.","Series-circuit fault analysis","higher-order"),
     make("A metal spoon and a wooden spoon are placed in hot water for the same time. The metal handle feels hotter. Which conclusion is best supported?",["Metal creates heat from nothing","Metal conducts thermal energy more readily than wood","Wood has a higher temperature in every situation","Both materials have identical thermal conductivity"],1,"Heat transfer","Metal is generally a better thermal conductor than wood, so energy is transferred along the metal spoon more readily.","Matter","Heat transfer and materials","Use observations to compare thermal conductivity.","Comparing conductors and insulators","higher-order")
    ]
   },
   "Grade 9":{
    Mathematics:[
     make("A school club sells 120 tickets. Adult tickets cost 300 shillings and student tickets cost 150 shillings. Total revenue is 27,000 shillings. How many adult tickets were sold?",["40","50","60","80"],2,"Simultaneous equations","Let a + s = 120 and 300a + 150s = 27,000. Dividing the revenue equation by 150 gives 2a + s = 180. Subtracting a + s = 120 gives a = 60.","Algebra","Linear equations","Construct and solve simultaneous equations from a context.","Ticket-sales model","higher-order"),
     make("A map uses a scale of 1:25,000. A walking route measures 7.2 cm on the map. A learner walks at 4.5 km/h. Approximately how long will the walk take?",["12 minutes","18 minutes","24 minutes","30 minutes"],2,"Scale, ratio and rate","Actual distance = 7.2 × 25,000 cm = 180,000 cm = 1.8 km. Time = 1.8/4.5 hour = 0.4 hour = 24 minutes.","Geometry and Measurement","Scale drawing and rates","Combine scale conversion and speed to solve a journey problem.","Map scale and travel time","higher-order")
    ],
    "Integrated Science":[
     make("A farmer observes that a crop grows poorly in acidic soil. Which investigation would best test whether correcting soil pH improves growth?",["Apply lime to every plot and compare with no records","Use several similar plots, apply different measured lime amounts, keep other conditions equal and compare growth","Change soil pH, water, seed type and sunlight together","Measure only one plant before treatment"],1,"Experimental design","Replicated plots with controlled conditions and measured treatments allow the effect of soil pH correction to be evaluated more reliably.","Living Things and Environment","Soil and sustainable agriculture","Design a controlled investigation using replication and variables.","Soil pH field investigation","higher-order"),
     make("A student claims that a heavier object always falls faster than a lighter object. Which experiment would best evaluate this claim while reducing the effect of air resistance?",["Drop a feather and a stone outdoors","Drop two compact objects of different masses from the same height in a low-air-resistance tube","Roll two objects down different slopes","Throw one object upward and one downward"],1,"Forces and motion","Using a low-air-resistance environment and the same release height helps isolate the effect of mass on falling motion.","Force and Energy","Forces and motion","Evaluate a scientific claim using a controlled experiment.","Testing a claim about falling objects","higher-order")
    ]
   }
  }
 },
 "Ghana":{
  curriculum:"Ghana NaCCA Curriculum / WASSCE",language:"English",verifiedAt:"2026-11-17",
  source:"https://nacca.gov.gh/wp-content/uploads/2023/06/MATHEMATICS.pdf",
  subjectSources:{"Science":"https://nacca.gov.gh/wp-content/uploads/2022/10/Science-Curriculum.pdf"},
  grades:{
   "Basic 7":{
    Mathematics:[
     make("A trader buys 24 exercise books at GH₵8 each and sells all of them at GH₵11 each. She uses one-third of the profit to buy stationery. How much profit remains?",["GH₵24","GH₵48","GH₵56","GH₵72"],1,"Number operations and money","Cost = 24 × 8 = GH₵192. Revenue = 24 × 11 = GH₵264. Profit = GH₵72; one-third is GH₵24, leaving GH₵48.","Number","Number operations","Solve a multi-step financial problem using operations and fractions.","Trading profit and expenditure","higher-order"),
     make("A school wants to fence a rectangular garden with area 96 m². Which pair of whole-number dimensions gives the least perimeter?",["6 m by 16 m","8 m by 12 m","4 m by 24 m","3 m by 32 m"],1,"Geometry and measurement","The perimeters are 44 m, 40 m, 56 m and 70 m respectively. The 8 m by 12 m garden has the least perimeter.","Geometry and Measurement","Measurement","Compare dimensions using area and perimeter.","Optimising a rectangular enclosure","higher-order")
    ],
    Science:[
     make("A learner places equal amounts of water in two identical containers. One is placed in sunlight and the other in shade. Which result would best support the idea that temperature affects evaporation?",["The shaded container loses more water in every trial","The sunlit container loses more water, with other conditions kept equal","Both containers are covered tightly","Different amounts of water are used"],1,"Scientific investigation","A fair comparison changes the temperature condition while keeping container, starting volume and exposure time consistent.","Scientific Investigation","Planning and conducting investigations","Identify variables and interpret evidence from a fair test.","Evaporation investigation","higher-order")
    ]
   },
   "Basic 8":{
    Mathematics:[
     make("A phone bundle gives 2.4 GB for GH₵30. Another gives 3.5 GB for GH₵42. Which bundle offers the lower cost per gigabyte, and by how much?",["First bundle by GH₵0.50/GB","Second bundle by GH₵0.50/GB","First bundle by GH₵1.00/GB","Both cost the same per GB"],1,"Ratio and proportion","First: 30/2.4 = GH₵12.50/GB. Second: 42/3.5 = GH₵12.00/GB. The second is cheaper by GH₵0.50/GB.","Number","Ratios and proportion","Compare unit rates and justify a value-for-money decision.","Comparing mobile data plans","higher-order"),
     make("The mean of five scores is 14. Four scores are 9, 12, 16 and 18. A learner says the fifth score must be 15. Is the learner correct?",["Yes, because 14 × 5 − 9 − 12 − 16 − 18 = 15","No, the fifth score is 14","No, the fifth score is 19","Yes, because the median is 15"],0,"Handling data","Total score = 14 × 5 = 70. Known scores total 55, so the fifth score is 15.","Data","Data","Use the mean to infer a missing value and assess a claim.","Missing data from a mean","higher-order")
    ],
    Science:[
     make("A community notices that a nearby stream becomes cloudy after heavy rainfall on cleared farmland. Which action would most directly reduce the cause of the cloudiness?",["Remove vegetation along the stream","Plant cover crops and maintain vegetated buffer strips","Increase ploughing down the slope","Leave the soil bare until the next rainy season"],1,"Environment and sustainability","Vegetation protects soil and buffer strips trap sediment before it enters the stream.","Earth and Environmental Science","Soil conservation","Recommend a solution based on an environmental cause-and-effect relationship.","Runoff and stream sediment","higher-order")
    ]
   },
   "Basic 9":{
    Mathematics:[
     make("A school hall has 240 seats. At an event, 85% are occupied. If 30 people leave and 18 arrive, what percentage of the seats is occupied now?",["80%","82.5%","85%","87.5%"],0,"Fractions, decimals and percentages","Initially 0.85 × 240 = 204 people. Then 204 − 30 + 18 = 192. Occupancy = 192/240 × 100 = 80%.","Number","Fractions, decimals and percentages","Apply percentage and number operations to a changing situation.","Changing hall occupancy","higher-order"),
     make("A linear relationship is represented by y = 3x + 2. A learner says doubling x always doubles y. Which counterexample proves the claim false?",["x = 1 gives y = 5; x = 2 gives y = 8","x = 2 gives y = 8; x = 4 gives y = 14","x = 3 gives y = 11; x = 6 gives y = 20","All of the above"],3,"Algebraic relationships","Each pair shows that doubling x does not double y because the constant term 2 remains. Any listed pair is a counterexample.","Algebra","Variables and equations","Evaluate a generalisation using examples and algebraic structure.","Testing a claim about linear functions","higher-order")
    ],
    Science:[
     make("A student investigates whether fertiliser increases bean-plant growth. Which design provides the strongest evidence?",["One fertilised plant compared with a different species","Several similar plants randomly assigned to fertiliser and control groups, with equal water, light and soil","Fertilised plants receive more water and sunlight","Measure only the tallest plant in each group"],1,"Scientific investigation","Replication, a control group, random allocation and controlled growing conditions reduce bias and allow a fair comparison.","Scientific Investigation","Experimental design","Evaluate reliability and validity in an investigation.","Testing fertiliser effectiveness","higher-order")
    ]
   }
  }
 },
 "Nigeria":{
  curriculum:"Nigeria NERDC Curriculum / WAEC / NECO",language:"English",verifiedAt:"2026-11-17",
  source:"https://nerdc.gov.ng/content_manager/jss1-3.html",
  grades:{
   "JSS 1":{
    Mathematics:[
     make("A trader buys 15 exercise books at ₦240 each and sells them at ₦300 each. She uses 40% of the total profit to replace damaged stock. How much profit remains?",["₦360","₦450","₦540","₦900"],2,"Number operations and financial literacy","Cost = 15×240 = ₦3,600; revenue = 15×300 = ₦4,500; profit = ₦900. Forty percent is ₦360, leaving ₦540.","Number and Numeration","Operations with whole numbers, money and percentages","Apply percentage reasoning to a commercial situation.","Trading and profit","higher-order"),
     make("A school bus travels 120 km in 2 hours. It then travels another 90 km in 1.5 hours. A learner claims the average speed for the whole journey is 60 km/h. Is the claim correct?",["Yes. Total distance is 210 km and total time is 3.5 h, so average speed is 60 km/h","No. The average speed is 70 km/h","No. Average speed must be the average of the two journey times","Yes. The two journey stages take equal time"],0,"Measurement and rate","Total distance is 120 + 90 = 210 km. Total time is 2 + 1.5 = 3.5 h. Average speed = 210 ÷ 3.5 = 60 km/h, so the claim is correct.","Measurement","Rate, speed and time","Evaluate a claim using combined distance and time.","Average speed across journey stages","higher-order")
    ],
    "Basic Science":[
     make("A learner separates a mixture of sand, salt and iron filings. Which sequence will recover all three materials with the least contamination?",["Add water, filter, evaporate filtrate; use a magnet on the residue","Use a magnet first, add water to the remaining mixture, filter, then evaporate the filtrate","Evaporate the dry mixture, then filter it","Filter the dry mixture, then add a magnet to the filtrate"],1,"Separation of mixtures","First remove iron filings with a magnet. Add water to dissolve salt, filter off sand, then evaporate the filtrate to recover salt.","Matter","Separation techniques","Select and justify a sequence of separation methods for a complex mixture.","Recovering components of a mixture","higher-order")
    ]
   },
   "JSS 2":{
    Mathematics:[
     make("A rectangular classroom floor is 12 m by 9 m. Square tiles of side 30 cm are used with no gaps or cutting. How many tiles are required?",["900","1,000","1,200","1,400"],2,"Mensuration","Floor area = 108 m². Tile area = 0.3×0.3 = 0.09 m². Number = 108/0.09 = 1,200.","Measurement","Area and metric conversion","Combine unit conversion and area to solve a practical problem.","Tiling a classroom","higher-order")
    ],
    "Basic Science":[
     make("A community stores drinking water in an uncovered container. After several days, cases of mosquito-borne illness increase. Which intervention most directly addresses the breeding risk without changing the water source?",["Add sugar to the water","Cover the container tightly and remove stagnant water nearby","Keep the container in direct sunlight only","Pour soil into the container"],1,"Environment and public health","A tight cover prevents mosquitoes from accessing stored water, while removing nearby stagnant water removes breeding sites.","Environment","Health and sanitation","Choose an intervention based on a biological transmission pathway.","Mosquito breeding and water storage","higher-order")
    ]
   }
  }
 },
 "Tanzania":{
  curriculum:"Tanzania NECTA Curriculum",language:"English",languageNote:"English is used for this question pack; check the learner's school language policy and current national guidance.",
  verifiedAt:"2026-11-17",source:"https://www.tie.go.tz/uploads/documents/sw-1727256902-MATHEMATICS%20SYLLABUS%20-%20O%20level%20final.pdf",
  grades:{
   "Form I":{
    Mathematics:[
     make("A shopkeeper buys 25 bags of maize flour at TSh 18,000 each. Transport costs TSh 50,000. All bags are sold at TSh 22,000 each. Calculate the percentage profit on the total cost.",["8%","10%","12%","15%"],1,"Profit and loss","Total cost = 25×18,000 + 50,000 = TSh 500,000. Revenue = 25×22,000 = TSh 550,000. Profit = 50,000; percentage profit = 50,000/500,000×100 = 10%.","Commercial arithmetic","Profit and loss","Evaluate a real trading situation using total cost and percentage profit.","Maize flour trading model","higher-order"),
     make("A water project uses a straight pipe route shown as 6 cm on a map with scale 1:50,000. A contractor can lay 1.5 km of pipe per day. How many working days are needed for the route?",["1 day","2 days","3 days","4 days"],1,"Ratio, scale and rate","Actual length = 6×50,000 cm = 300,000 cm = 3 km. At 1.5 km per day, the work takes 2 days.","Ratio and Proportion","Scale and rate","Convert map distance to actual distance and apply a work rate.","Water pipe route planning","higher-order")
    ]
   }
  }
 },
 "South Africa":{
  curriculum:"South Africa CAPS / NSC (DBE)",language:"English",
  languageNote:"This pack is written in English. South African schools may use different approved languages of learning and teaching; confirm the learner's school language before assigning a language-specific assessment.",
  verifiedAt:"2026-11-17",
  source:"https://www.education.gov.za/Portals/0/CD/National%20Curriculum%20Statements%20and%20Vocational/CAPS%20SP%20%20MATHEMATICS%20GR%207-9.pdf",
  subjectSources:{"Natural Sciences":"https://www.education.gov.za/Portals/0/CD/National%20Curriculum%20Statements%20and%20Vocational/CAPS%20SP%20%20NATURAL%20SCIENCES%20GR%207-9%20%20WEB.pdf"},
  grades:{
   "Grade 7":{
    Mathematics:[
     make("A rectangular water tank is 2 m long, 1.5 m wide and 1 m high. It is filled to 80% of its capacity. How many litres of water does it contain?",["1,200 L","2,000 L","2,400 L","3,000 L"],2,"Measurement: volume and capacity","Volume = 2×1.5×1 = 3 m³ = 3,000 L. At 80%, the tank contains 2,400 L.","Measurement","Volume and capacity","Apply volume and unit conversion to a real-life context.","Water tank capacity","higher-order"),
     make("A learner claims that doubling the length and width of a rectangular prism while keeping its height unchanged doubles its volume. Is the claim correct?",["Yes, it doubles","No, it becomes four times as large","No, it becomes eight times as large","No, it remains unchanged"],1,"Measurement: volume","Volume is length×width×height. Doubling two dimensions multiplies volume by 2×2 = 4, not 2. The claim is false because doubling two dimensions multiplies volume by four; option B is correct.","Measurement","Volume and capacity","Evaluate a generalisation about how dimensions affect volume.","Effect of changing dimensions on volume","higher-order")
    ],
    "Natural Sciences":[
     make("A grassland food web contains grass, grasshoppers, frogs and snakes. If pesticide use sharply reduces the grasshopper population, which sequence is the most likely indirect effect?",["Frogs increase because they have less food","Frogs may decrease, and snakes may later decrease because fewer frogs are available","Grass disappears immediately","Snakes become producers"],1,"Life and living systems","Frogs lose a major food source; if frog numbers fall, snakes may also have less prey. Food-web effects can move through several trophic levels.","Life and Living Systems","Ecosystems and food webs","Predict indirect consequences of a disturbance in a food web.","Pesticide disturbance in a food web","higher-order")
    ]
   },
   "Grade 8":{
    Mathematics:[
     make("A ladder 10 m long rests against a vertical wall. Its foot is 6 m from the wall. How high up the wall does it reach?",["6 m","7 m","8 m","9 m"],2,"Theorem of Pythagoras","The wall, ground and ladder form a right triangle. Height² = 10² − 6² = 64, so height = 8 m.","Geometry","Theorem of Pythagoras","Apply Pythagoras' theorem to solve a practical right-triangle problem.","Ladder safety calculation","higher-order")
    ],
    "Natural Sciences":[
     make("Equal-length rods of copper and wood have the same cross-sectional area. One end of each rod is heated equally. Which observation best supports the difference in thermal conductivity?",["The far end of the copper rod warms sooner because copper is a better thermal conductor","The far end of the wooden rod warms sooner because wood is a metal","Both far ends must warm at exactly the same rate","Neither rod can transfer thermal energy"],0,"Energy and change","Copper conducts thermal energy much more readily than wood, so the far end of the copper rod is expected to warm sooner under comparable conditions.","Energy and Change","Heat transfer and material properties","Use evidence from a comparison to explain differences in thermal conductivity.","Comparing thermal conductors","higher-order")
    ]
   },
   "Grade 9":{
    Mathematics:[
     make("A cylindrical water container has radius 0.7 m and height 2 m. Using π = 22/7, calculate its capacity in litres.",["2,200 L","2,800 L","3,080 L","3,600 L"],2,"Measurement: cylinders","Volume = πr²h = 22/7 × 0.7² × 2 = 3.08 m³. Since 1 m³ = 1,000 L, capacity = 3,080 L.","Measurement","Surface area and volume of cylinders","Apply cylinder volume and metric capacity conversion.","Cylindrical water storage","higher-order"),
     make("A learner says that doubling the radius of a cylinder while keeping its height unchanged doubles its volume. Which correction is mathematically justified?",["The volume doubles because radius is linear","The volume becomes four times as large because radius is squared","The volume becomes eight times as large","The volume does not change"],1,"Measurement: cylinders","V = πr²h. Replacing r by 2r gives π(2r)²h = 4πr²h, so volume becomes four times as large.","Measurement","Surface area and volume of cylinders","Analyse the effect of a scale change on volume.","Cylinder scaling claim","higher-order")
    ],
    "Natural Sciences":[
     make("A learner investigates how changing the mass of a trolley affects its acceleration when the pulling force is kept constant. Which graph should best represent the expected relationship if Newton's second law applies?",["Acceleration increases directly with mass","Acceleration decreases as mass increases","Acceleration remains constant for all masses","Acceleration increases with the square of mass"],1,"Matter and materials / forces","For a constant net force, a = F/m. Acceleration is inversely proportional to mass, so it decreases as mass increases.","Matter and Materials","Forces and motion","Interpret a physical relationship and predict a graph trend.","Mass and acceleration investigation","higher-order")
    ]
   }
  }
 },
 "Uganda":{
  curriculum:"Uganda NCDC Curriculum / UNEB",language:"English",verifiedAt:"2026-11-17",
  source:"https://ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf",
  subjectSources:{"Biology":"https://ncdc.go.ug/wp-content/uploads/2024/02/Biology_Syllabus_compressed.pdf"},
  grades:{
   "Senior 1":{
    Mathematics:[
     make("A school can buy 18 identical calculators and still have UGX 36,000 left from a budget of UGX 360,000. What is the greatest number of calculators it could buy with the full budget if each costs the same?",["18","19","20","21"],2,"Number and operations","The 18 calculators cost 360,000 − 36,000 = UGX 324,000. Unit cost = 18,000. The full budget buys 360,000/18,000 = 20 calculators.","Number","Number and numeration","Use arithmetic reasoning to interpret a budget and unit cost.","Calculator purchasing decision","higher-order"),
     make("A learner solves 3(x − 2) = 2x + 5 and obtains x = 11. Which step best verifies the solution?",["Substitute x = 11: left side 27 and right side 27","Substitute x = 11: left side 11 and right side 5","Divide both sides by 3 only","Change the equation to 3x − 2 = 2x + 5"],0,"Patterns and algebra","Substitution gives 3(11 − 2) = 27 and 2(11) + 5 = 27, so both sides are equal.","Patterns and Algebra","Linear equations","Verify an algebraic solution by substitution.","Checking a linear equation","higher-order")
    ],
    "Biology":[
     make("A plant kept in darkness for several days is tested with iodine after one leaf is exposed to sunlight. Which result is expected and why?",["Both leaves turn blue-black because roots make starch","The exposed leaf area turns blue-black because photosynthesis produces starch","The covered leaf turns blue-black because it receives no light","Neither leaf can contain starch"],1,"Nutrition in plants","The illuminated leaf area can photosynthesise and form starch; iodine turns blue-black where starch is present.","Living Things","Nutrition in plants","Relate experimental evidence to photosynthesis and starch formation.","Iodine test for starch","higher-order")
    ]
   },
   "Senior 2":{
    Mathematics:[
     make("A school records the time taken by two groups to complete a task. Group A has a mean of 18 minutes and Group B a mean of 15 minutes. Group A has 10 learners and Group B has 20. What is the combined mean?",["15 minutes","16 minutes","16.5 minutes","17 minutes"],1,"Data and statistics","Combined total = 10×18 + 20×15 = 480 learner-minutes. Divide by 30 learners: 16 minutes.","Data","Data","Combine two data sets using weighted means.","Weighted mean of two groups","higher-order"),
     make("A rectangular plot is enlarged by a scale factor of 1.5. Its original area is 80 m². What is the new area, and why?",["120 m² because area scales by 1.5","160 m² because area doubles","180 m² because area scales by 1.5²","240 m² because area scales by 3"],2,"Geometry and measurement","Area scales by the square of the linear scale factor: 80 × 1.5² = 180 m².","Geometry and Measurement","Similarity and scale","Apply scale factors to area and justify the relationship.","Area under enlargement","higher-order")
    ]
   },
   "Senior 3":{
    Mathematics:[
     make("A trader's profit P (in thousands of shillings) after x weeks is modelled by P = −2x² + 16x − 15. During which week is the model's maximum profit reached?",["Week 2","Week 4","Week 6","Week 8"],1,"Patterns and algebra","For a quadratic ax²+bx+c, the turning point occurs at x = −b/(2a) = −16/(−4) = 4.","Patterns and Algebra","Quadratic relationships","Interpret a quadratic model and determine its maximum.","Maximum profit model","higher-order"),
     make("A survey reports that 70% of 40 learners prefer football and 60% of 30 learners prefer netball. Can we conclude that 46 different learners prefer at least one of the sports?",["Yes, because 28 + 18 = 46","No, because some learners may prefer both sports","Yes, because percentages always add","No, because the sample sizes differ"],1,"Data and probability","The groups may overlap. Without information about learners who prefer both, the number of distinct learners cannot be determined.","Data","Probability and data interpretation","Identify overlap and limitations in interpreting survey data.","Overlapping preferences survey","higher-order")
    ]
   }
  }
 }
};
window.CBENexusCountryQuestionPacks=packs;
})();