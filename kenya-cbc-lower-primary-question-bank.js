/* Kenya CBC/CBE Lower Primary Environmental Activities question bank.
 * Original practice MCQs aligned to KICD strand/sub-strand headings.
 * Not official KNEC assessment items. Source references are stored per item.
 */
"use strict";
const source = "https://kicd.ac.ke/wp-content/uploads/2024/03/Environmental-activities-for-Grade-1.pdf";
const sources = {
  "Grade 1": source,
  "Grade 2": "https://kicd.ac.ke/wp-content/uploads/2024/01/GRADE.2.ENVIRONMENTAL.ACTIVITIES.pdf",
  "Grade 3": "https://kicd.ac.ke/wp-content/uploads/2024/03/Environmental-Activities-for-Grade-3.pdf"
};
const rows = [
  ["Grade 1","Cleaning My Body","Which action helps to keep your hands clean before eating?",["Washing them with clean water and soap","Wiping them on a shirt","Touching the floor","Rubbing them in soil"],0,"Personal hygiene removes dirt and many germs. Wash hands with clean water and soap before eating.","Social Environment","1.1 Cleaning My Body"],
  ["Grade 1","Our Home","Where should household waste be put to keep the home clean?",["In a proper waste bin","Under the bed","In the drinking-water container","On the cooking area"],0,"A proper waste bin keeps rubbish contained and helps prevent pests and disease.","Social Environment","1.2 Our Home"],
  ["Grade 1","Weather and the Sky","Dark clouds gather and strong wind begins. What should a learner do when going outside?",["Carry suitable rain protection and seek shelter if rain starts","Play in an open field during lightning","Stand under a lone tree during a storm","Ignore the changing weather"],0,"Dark clouds and strong wind may signal rain. Safe choices include suitable protection and shelter during a storm.","Natural Environment","2.1 Weather and the Sky"],
  ["Grade 1","Water","Which action helps a family save clean water at home?",["Close the tap while brushing teeth","Leave a tap running","Pour clean water onto the road","Use a leaking container"],0,"Turning off the tap when water is not needed prevents wastage.","Resources in Our Environment","3.1 Water"],
  ["Grade 1","Plants","A young plant is kept in a dark cupboard and is not watered. What is most likely to happen?",["It will become weak and may die","It will grow normally forever","It will produce more flowers immediately","It will no longer need air"],0,"Plants need water and light, among other conditions, to grow well.","Resources in Our Environment","3.2 Plants"],

  ["Grade 2","Family Needs and Wants","A family has money for food and a new toy. Which should they buy first if food is needed for supper?",["Food because it is a basic need","The toy because it is colourful","Both toys before food","Nothing that the family needs"],0,"Food is a basic need. A family should prioritise essential needs before non-essential wants.","Social Environment","1.2 Family Needs and Wants"],
  ["Grade 2","Our National Flag","Why should learners handle the Kenyan national flag respectfully?",["It is a national symbol representing the country","It is an ordinary piece of cloth","It belongs to one learner","It is used only as a blanket"],0,"The national flag is a symbol of Kenya and should be treated with respect.","Social Environment","1.4 Our National Flag"],
  ["Grade 2","Soil","A learner pours water onto sandy soil and clay soil. Which observation is most likely?",["Water passes through sandy soil faster than through clay soil","Water cannot pass through either soil","Clay soil always has larger particles than sand","Both soils behave exactly the same"],0,"Sandy soil has larger spaces between particles, so water usually drains through it faster than clay soil.","Natural Environment","2.2 Soil"],
  ["Grade 2","Light","Which object is a natural source of light during the day?",["The Sun","A wooden desk","A closed book","A stone"],0,"The Sun is a natural source of light. The other objects do not produce light.","Natural Environment","2.3 Light"],
  ["Grade 2","Animals","A learner sees a young chick following a hen. What does this observation show?",["Some animals care for their young","All animals live in water","Chicks are plants","Hens do not need food"],0,"A hen is a parent bird and may protect and guide its chicks.","Resources in Our Environment","3.3 Animals"],

  ["Grade 3","Our Community","A blocked drain causes dirty water to collect near homes. What is the best community action?",["Work together to clear the drain safely and dispose of waste properly","Add more rubbish to the drain","Allow children to play in the dirty water","Block the drain completely"],0,"Community members can reduce stagnant dirty water by clearing drains safely and managing waste properly.","Social Environment","1.4 Our Community"],
  ["Grade 3","Food in Our Environment","A learner wants to keep vegetables fresh for longer. Which action is most suitable?",["Store them in a clean, cool place","Leave them in direct hot sunlight","Mix them with rubbish","Keep them in dirty water"],0,"Clean and cool storage slows spoilage and helps protect food from contamination.","Social Environment","1.3 Food in Our Environment"],
  ["Grade 3","Heat","Which action is safest when a learner notices a hot cooking pot on a fire?",["Tell an adult and keep a safe distance","Touch the pot to test its heat","Pour paraffin onto the fire","Play beside the fire"],0,"Hot pots and fires can cause burns. A learner should alert an adult and stay at a safe distance.","Natural Environment","2.3 Heat"],
  ["Grade 3","Water","A family collects rainwater for household use. Which practice helps keep the stored water safer?",["Use a clean, covered container","Leave the container open","Dip dirty cups into it","Store it beside waste"],0,"A clean, covered container reduces contamination and prevents insects from entering the water.","Resources in Our Environment","3.1 Water"],
  ["Grade 3","Waste Materials","A school has fruit peels and plastic bottles after lunch. Which action is the best way to manage them?",["Separate organic waste for composting and collect plastics for appropriate reuse or recycling","Burn all the waste beside classrooms","Throw everything into a stream","Hide the waste in a classroom"],0,"Separating waste supports composting of organic materials and responsible handling of recyclable plastics.","Resources in Our Environment","3.4 Waste Materials"]
].map((r,i)=>({
  id:"ke-cbc-env-"+r[0].toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+String(i+1).padStart(2,"0"),
  country:"Kenya",curriculum:"Kenya CBC/CBE",grade:r[0],subject:"Environmental Activities",
  strand:r[6],subStrand:r[7],question:r[2],options:r[3],correctIndex:r[4],explanation:r[5],
  difficulty:"Foundational application",published:true,source:sources[r[0]],sourceName:"Kenya Institute of Curriculum Development (KICD) curriculum design",
  createdAt:"2026-11-19T00:00:00.000Z",updatedAt:"2026-11-19T00:00:00.000Z"
}));
module.exports = rows;
