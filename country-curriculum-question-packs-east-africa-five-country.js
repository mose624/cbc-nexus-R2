/* CBE Nexus five-country supplementary question banks.
 * Static, version-controlled practice material. It is not an official examination paper.
 * Detailed outcome-by-outcome mapping must be checked against each current national syllabus.
 */
(function(){
"use strict";
const packs=window.CBENexusCountryQuestionPacks||(window.CBENexusCountryQuestionPacks={});
const make=(q,opts,answer,topic,explanation,strand,sub,outcome,contentTag,cognitive,language="English")=>
 [q,opts,answer,topic,explanation,strand,sub,outcome,contentTag,"","",cognitive,language];
const countries={
"Tanzania":{
 curriculum:"Tanzania NECTA Curriculum",language:"English / Kiswahili (school- and level-dependent)",
 levels:["Standard I","Standard II","Standard III","Standard IV","Standard V","Standard VI","Standard VII","Form I","Form II","Form III","Form IV","Form V","Form VI"],
 primary:["Mathematics","English","Kiswahili","Science and Technology","Social Studies"],
 secondary:["Mathematics","English Language","Biology","Chemistry","Physics","Geography","History","Civics"]
},
"Uganda":{
 curriculum:"Uganda NCDC Curriculum / UNEB",language:"English; local-language learning is used in early primary according to school policy",
 levels:["Primary 1","Primary 2","Primary 3","Primary 4","Primary 5","Primary 6","Primary 7","Senior 1","Senior 2","Senior 3","Senior 4","Senior 5","Senior 6"],
 primary:["Mathematics","English","Literacy","Integrated Science","Social Studies"],
 secondary:["Mathematics","English Language","General Science","Biology","Chemistry","Physics","Geography","History and Political Education"]
},
"Rwanda":{
 curriculum:"Rwanda REB Curriculum / NESA",language:"Kinyarwanda / English / French according to school, level and programme",
 levels:["P1","P2","P3","P4","P5","P6","S1","S2","S3","S4","S5","S6"],
 primary:["Mathematics","Kinyarwanda","English","Science and Elementary Technology","Social and Religious Studies"],
 secondary:["Mathematics","English","Biology","Chemistry","Physics","Geography","History and Citizenship"]
},
"Burundi":{
 curriculum:"Burundi Fundamental Education Curriculum",language:"Kirundi / French / English according to level and school programme",
 levels:["1ère année fondamentale","2ème année fondamentale","3ème année fondamentale","4ème année fondamentale","5ème année fondamentale","6ème année fondamentale","7ème année fondamentale","8ème année fondamentale","9ème année fondamentale","1ère année post-fondamentale","2ème année post-fondamentale","3ème année post-fondamentale"],
 primary:["Mathématiques","Kirundi","Français","Sciences et technologie","Étude du milieu"],
 secondary:["Mathématiques","Français","Biologie","Chimie","Physique","Géographie","Histoire"]
},
"South Sudan":{
 curriculum:"South Sudan National Curriculum / NCDC",language:"English; local-language provision may vary by school and programme",
 levels:["P-1","P-2","P-3","P-4","P-5","P-6","P-7","P-8","S-1","S-2","S-3","S-4"],
 primary:["Mathematics","English Language","Science","Social Studies","Religious Education"],
 secondary:["Mathematics","English Language","Biology","Chemistry","Physics","Geography","History","Agriculture"]
}
};
function numberBank(country,level,index){
 const n=index+1, a=3+n*2, b=4+n, sum=a+b, product=(n+2)*(n+3), half=2*(n+4), length=n+4,width=n+2;
 const p=[];
 p.push(make("A learner in "+country+" collects "+a+" seeds on Monday and "+b+" on Tuesday. How many seeds are collected altogether?",[String(sum+1),String(sum),String(sum-1),String(sum+2)],1,"Addition","Add the two quantities: "+a+" + "+b+" = "+sum+".","Number","Addition","Add two whole numbers in a practical context.","Seed collection and counting","foundational"));
 p.push(make("There are "+(n+2)+" groups with "+(n+3)+" learners in each group. How many learners are there altogether?",[String(product-1),String(product),String(product+1),String(product+2)],1,"Multiplication","Multiply the number of groups by the number in each group: "+(n+2)+" × "+(n+3)+" = "+product+".","Number","Multiplication","Use multiplication to solve equal-group problems.","Classroom grouping","application"));
 p.push(make("What is one half of "+half+"?",[String(half/2+1),String(half/2),String(half/2-1),String(half/2+2)],1,"Fractions","One half means divide by 2: "+half+" ÷ 2 = "+(half/2)+".","Number","Fractions","Find a unit fraction of a quantity.","Sharing and measurement","foundational"));
 p.push(make("A rectangular school garden is "+length+" m long and "+width+" m wide. What is its area?",[String(length+width)+" m²",String(length*width)+" m²",String(2*(length+width))+" m²",String(length*width+2)+" m²"],1,"Measurement","Area = length × width = "+length+" × "+width+" = "+(length*width)+" m².","Measurement","Area","Calculate the area of a rectangle and include units.","School garden measurement","application"));
 const vals=[n+2,n+4,n+6],mean=n+4;
 p.push(make("A learner scores "+vals.join(", ")+" marks in three short tasks. What is the mean score?",[String(mean-1),String(mean),String(mean+1),String(mean+2)],1,"Statistics","Mean = total ÷ number of values = ("+vals.join(" + ")+") ÷ 3 = "+mean+".","Data handling","Mean","Calculate and interpret the arithmetic mean.","Learner assessment data","application"));
 return p;
}
function secondaryMath(country,index){
 const n=index+1, x=n+2, rhs=x+3, pct=(n+2)*10, base=100+n*20, ratioA=n+1,ratioB=n+2;
 return [
 make("Solve the equation x + "+x+" = "+(x+rhs)+".",[String(rhs-1),String(rhs),String(rhs+1),String(rhs+2)],1,"Algebra","Subtract "+x+" from both sides: x = "+rhs+".","Algebra","Linear equations","Solve a one-step linear equation.","Problem solving","application"),
 make("A school item costs "+base+" currency units. A discount of 10% is applied. What is the discount?",[String(base/20),String(base/10),String(base/5),String(base/2)],1,"Percentages","10% = 0.10; 0.10 × "+base+" = "+(base/10)+".","Number","Percentages","Calculate a percentage of a quantity.","Local commerce","application"),
 make("A mixture uses "+ratioA+" cups of concentrate for every "+ratioB+" cups of water. How many cups of concentrate are needed for "+(ratioB*3)+" cups of water?",[String(ratioA),String(ratioA*2),String(ratioA*3),String(ratioA*4)],2,"Ratio","The ratio is "+ratioA+":"+ratioB. Tripling the water quantity requires "+(ratioA*3)+" cups of concentrate.","Ratio and proportion","Direct proportion","Apply a ratio to scale a mixture.","Mixture preparation","reasoning"),
 make("A triangle has angles of "+(40+n)+"° and "+(60+n)+"°. What is the third angle?",[String(80-2*n)+"°",String(80)+"°",String(100-2*n)+"°",String(120)+"°"],0,"Geometry","Angles in a triangle total 180°. Third angle = 180 − ("+(40+n)+" + "+(60+n)+") = "+(80-2*n)+"°.","Geometry","Angle properties","Use the angle sum of a triangle.","Geometric reasoning","application"),
 make("The values 2, 4, 6, 8 and "+(10+n)+" have what median?",[String(4+n),String(6),String(8),String(10+n)],1,"Statistics","There are five ordered values, so the median is the third value, 6.","Data handling","Median","Determine the median of an ordered data set.","Data interpretation","reasoning")
 ];
}
function languageBank(){
 return [
 make("Which word is a noun in the sentence: 'The teacher opened the book'?",["opened","the","teacher","quickly"],2,"Parts of speech","'Teacher' names a person, so it is a noun.","Language","Nouns","Identify a noun in a sentence.","Reading and grammar","foundational"),
 make("Choose the correct verb: 'The pupils ___ their work every day.'",["completes","complete","completing","completion"],1,"Grammar","The plural subject 'pupils' takes the base-form verb 'complete'.","Language","Subject–verb agreement","Use subject–verb agreement accurately.","Classroom communication","application"),
 make("Which punctuation mark ends a direct question?",["Full stop","Comma","Question mark","Colon"],2,"Punctuation","A question mark is used at the end of a direct question.","Writing","Punctuation","Apply punctuation conventions.","Writing skills","foundational"),
 make("Choose the adjective in: 'The careful learner measured the liquid.'",["learner","measured","liquid","careful"],3,"Parts of speech","'Careful' describes the noun 'learner'.","Language","Adjectives","Identify descriptive words and their function.","Scientific writing","application"),
 make("Which sentence is correctly punctuated?",["where is the library.","Where is the library?","Where is the library,","where is the library?"],1,"Writing","A sentence begins with a capital letter and a direct question ends with a question mark.","Writing","Sentence conventions","Use capitalisation and end punctuation correctly.","Communication","application")
 ];
}
function scienceBank(){
 return [
 make("Which process allows green plants to make food using light energy?",["Respiration","Photosynthesis","Excretion","Germination"],1,"Plants","Photosynthesis uses light energy to make glucose from carbon dioxide and water.","Life processes","Photosynthesis","Explain the role of photosynthesis in plants.","Agriculture and ecosystems","foundational"),
 make("At standard atmospheric pressure, pure water boils at approximately:",["0°C","50°C","100°C","150°C"],2,"Matter","Pure water boils at about 100°C at standard atmospheric pressure.","Matter","Changes of state","Relate temperature to a change of state.","Water and cooking","foundational"),
 make("Which instrument is used to measure mass in a school laboratory?",["Thermometer","Balance","Ruler","Stopwatch"],1,"Measurement","A balance is used to measure mass.","Scientific skills","Measurement","Select appropriate measuring instruments.","Practical science","foundational"),
 make("Which gas is needed for aerobic respiration?",["Nitrogen","Oxygen","Carbon dioxide","Helium"],1,"Living things","Aerobic respiration uses oxygen to release energy from food.","Life processes","Respiration","Identify the role of oxygen in aerobic respiration.","Health and living systems","application"),
 make("Which action best protects a local water source?",["Dumping waste beside it","Removing vegetation on its banks","Keeping chemicals and waste away","Washing vehicles inside it"],2,"Environment","Preventing waste and chemical pollution protects water quality and aquatic organisms.","Environment","Conservation","Select practices that reduce water pollution.","Community environmental care","application")
 ];
}
function biologyBank(){
 return [
 make("Which cell structure controls most activities of a typical eukaryotic cell?",["Cell wall","Nucleus","Vacuole","Ribosome"],1,"Cell biology","The nucleus contains genetic material and helps regulate cell activities.","Cell biology","Cell structure","Relate cell structures to their functions.","Microscopy","foundational"),
 make("Which process produces glucose in green plants?",["Transpiration","Photosynthesis","Fermentation","Excretion"],1,"Plant physiology","Photosynthesis converts light energy into chemical energy stored in organic molecules.","Plant physiology","Nutrition","Explain how plants manufacture food.","Crop production","application"),
 make("Which blood component transports oxygen?",["Platelets","Red blood cells","Plasma proteins only","White blood cells"],1,"Human biology","Haemoglobin in red blood cells binds and transports oxygen.","Transport","Circulation","Describe the role of red blood cells.","Human health","foundational"),
 make("In a simple food chain, green plants are usually:",["Primary consumers","Producers","Decomposers","Parasites"],1,"Ecology","Green plants make organic food and form the producer level.","Ecology","Food chains","Identify trophic roles in a food chain.","Local ecosystems","application"),
 make("A characteristic passed from parents to offspring is described as:",["Acquired only","Inherited","Randomly learned","A habitat"],1,"Genetics","Inherited characteristics are transmitted through genetic information.","Genetics","Inheritance","Distinguish inherited characteristics from acquired ones.","Variation","reasoning")
 ];
}
function chemistryBank(){
 return [
 make("The atomic number of an element is the number of:",["Neutrons","Protons","Protons plus neutrons","Electron shells"],1,"Atomic structure","Atomic number equals the number of protons in the nucleus.","Matter","Atomic structure","Interpret atomic number.","Elements","foundational"),
 make("A solution with pH 3 is:",["Neutral","Acidic","Alkaline","Always pure water"],1,"Acids and bases","A pH below 7 indicates an acidic solution at ordinary conditions.","Chemical properties","Acids and bases","Classify solutions using the pH scale.","Laboratory indicators","application"),
 make("Which method is most suitable for separating an insoluble solid from a liquid?",["Filtration","Distillation","Chromatography","Crystallisation only"],0,"Separation techniques","Filtration retains the insoluble solid while the liquid passes through the filter.","Practical chemistry","Separation","Choose a separation technique based on properties.","Water treatment","application"),
 make("What is the chemical symbol for sodium?",["S","So","Na","N"],2,"Elements","The symbol for sodium is Na, from its Latin name natrium.","Periodic table","Symbols","Use correct chemical symbols.","Everyday materials","foundational"),
 make("In a closed system, the total mass during a chemical reaction is:",["Always lost","Always doubled","Conserved","Converted entirely to heat"],2,"Chemical reactions","The law of conservation of mass states that total mass remains constant in a closed system.","Reactions","Conservation of mass","Apply conservation of mass.","Quantitative chemistry","reasoning")
 ];
}
function physicsBank(){
 return [
 make("The SI unit of force is the:",["Joule","Watt","Newton","Pascal"],2,"Forces","Force is measured in newtons (N).","Mechanics","Force","Use SI units for physical quantities.","Engineering","foundational"),
 make("Average speed is calculated using:",["Time ÷ distance","Distance ÷ time","Mass × acceleration","Force ÷ area"],1,"Motion","Average speed = total distance travelled ÷ total time taken.","Mechanics","Speed","Calculate average speed from distance and time.","Transport","application"),
 make("Which instrument measures electric current?",["Voltmeter","Ammeter","Thermometer","Barometer"],1,"Electricity","An ammeter is connected in series to measure current.","Electricity","Current","Select instruments for electrical measurements.","Electrical circuits","foundational"),
 make("The energy stored in a raised object due to its position is:",["Chemical energy","Gravitational potential energy","Sound energy","Nuclear energy"],1,"Energy","An elevated object stores gravitational potential energy relative to a reference level.","Energy","Potential energy","Identify energy stores and transfers.","Water reservoirs","application"),
 make("Pressure is defined as:",["Force × area","Force ÷ area","Area ÷ force","Mass × volume"],1,"Pressure","Pressure is the normal force acting per unit area.","Mechanics","Pressure","Apply the definition of pressure.","Structures and fluids","reasoning")
 ];
}
function socialBank(country){
 return [
 make("A map scale is used to show:",["The age of a map","The relationship between map distance and ground distance","The colour of a country's flag","The population only"],1,"Map skills","A scale relates a measured distance on the map to the corresponding real-world distance.","Geography","Map skills","Interpret a map scale.","Local mapping","foundational"),
 make("Which practice supports sustainable use of soil?",["Removing all vegetation","Planting cover crops and preventing erosion","Burning every field","Dumping waste on farmland"],1,"Environment","Cover crops protect soil and reduce erosion.","Geography","Resources","Explain sustainable management of natural resources.","Agriculture","application"),
 make("Why are national laws important?",["They remove all responsibilities","They provide rules and protect rights","They replace community cooperation","They apply only to visitors"],1,"Civics","Laws set shared rules, define responsibilities and protect rights.","Civics","Governance","Explain the role of laws in society.","Citizenship","application"),
 make("Which source is most useful for checking a current national population figure?",["An unsourced social-media post","An official national statistics office publication","A fictional story","An old personal diary"],1,"Research skills","Official statistics publications provide traceable methods and reference dates.","Research","Evidence","Evaluate the reliability of information sources.","National data","reasoning"),
 make("Which action is an example of responsible citizenship in "+country+"?",["Damaging public property","Participating peacefully in community improvement","Spreading unverified rumours","Ignoring community safety"],1,"Citizenship","Responsible citizenship includes peaceful participation and care for shared resources.","Civics","Participation","Identify constructive civic participation.","Community development","application")
 ];
}
for(const [country,p] of Object.entries(countries)){
 const root=packs[country]||(packs[country]={});
 root.curriculum=p.curriculum;
 root.language=p.language;
 root.languageNote="Original CBE Nexus supplementary practice questions. Grade and subject labels follow the national education pathway; the full outcome-by-outcome syllabus mapping and language localisation must be checked against the current official syllabus. These are not official examination papers.";
 root.verifiedAt="2026-11-19";
 root.grades=root.grades||{};
 p.levels.forEach((level,i)=>{
  const secondary=i>=p.levels.findIndex(x=>/Form I|Senior 1|S1$|9ème|P-1/.test(x));
  const subjects=secondary?p.secondary:p.primary;
  const existing=root.grades[level]||(root.grades[level]={});
  for(const subject of subjects){
   if(existing[subject]&&existing[subject].length)continue;
   let questions;
   if(/Math|Mathématiques/.test(subject))questions=secondary?secondaryMath(country,i):numberBank(country,level,i);
   else if(/Biology/.test(subject))questions=biologyBank();
   else if(/Chemistry|Chimie/.test(subject))questions=chemistryBank();
   else if(/Physics|Physique/.test(subject))questions=physicsBank();
   else if(/English|Kiswahili|Kinyarwanda|Kirundi|Français|Literacy/.test(subject))questions=languageBank();
   else if(/Science|General Science|Sciences/.test(subject))questions=scienceBank();
   else questions=socialBank(country);
   const lang=/Kirundi|Français|Mathématiques/.test(subject)?"French":/Kiswahili/.test(subject)?"Kiswahili":/Kinyarwanda/.test(subject)?"Kinyarwanda":"English";
   existing[subject]=questions.map(q=>{const item=q.slice();item[12]=lang;return item;});
  }
 });
}
window.CBENexusEastAfricaFiveCountryBanks={countries:Object.keys(countries),status:"supplementary-banks-added-official-syllabus-outcome-mapping-pending",version:"2026-11-19"};
})();