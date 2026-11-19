/* Kenya CBC/CBE lower-primary Mathematics question bank.
 * Original practice MCQs mapped to KICD Grade 1-3 Mathematical Activities design.
 * These are not official KNEC examination items.
 */
"use strict";
const sources = {
  "Grade 1": "https://kicd.ac.ke/wp-content/uploads/2024/02/GRADE.1.MATHEMATICS.ACTIVITIES.pdf",
  "Grade 2": "https://kicd.ac.ke/wp-content/uploads/2024/02/GRADE.2.MATHEMATICS.ACTIVITIES.pdf",
  "Grade 3": "https://kicd.ac.ke/wp-content/uploads/2024/02/GRADE.3.MATHEMATICS.ACTIVITIES.pdf"
};
const rows = [
  ["Grade 1","Pre-Number Activities","Grouping","A learner sorts bottle tops by colour. What is the learner doing?",["Classifying objects by a common feature","Measuring their mass","Adding their values","Finding their capacity"],0,"Sorting by colour groups objects using a shared feature.","Numbers","1.1 Pre-Number Activities"],
  ["Grade 1","Whole Numbers","Counting","There are 8 mangoes in a basket. Two more are added. How many mangoes are there now?",["9","10","11","12"],1,"Counting on two steps from eight gives ten.","Numbers","1.2 Whole Numbers"],
  ["Grade 1","Addition","Adding numbers","A learner has 4 pencils and receives 3 more. How many pencils does the learner have?",["6","7","8","9"],1,"4 + 3 = 7 pencils.","Numbers","1.3 Addition"],
  ["Grade 1","Subtraction","Taking away","There are 9 birds on a tree. Four fly away. How many remain?",["4","5","6","7"],1,"9 − 4 = 5 birds remain.","Numbers","1.4 Subtraction"],
  ["Grade 1","Length","Comparing length","Which tool is suitable for measuring the length of a pencil?",["A ruler","A weighing scale","A clock","A cup"],0,"A ruler is used to measure length.","Measurements","2.1 Length"],

  ["Grade 2","Whole Numbers","Place value","In the number 46, what does the digit 4 represent?",["Four ones","Four tens","Six tens","Forty-six ones"],1,"The digit 4 is in the tens place, so it represents four tens (40).","Numbers","1.2 Whole Numbers"],
  ["Grade 2","Addition","Regrouping","A shop has 27 oranges and receives 15 more. How many oranges are there altogether?",["32","40","42","52"],2,"27 + 15 = 42.","Numbers","1.3 Addition"],
  ["Grade 2","Subtraction","Difference","A farmer harvested 38 tomatoes and sold 12. How many tomatoes remained?",["24","26","28","30"],1,"38 − 12 = 26 tomatoes.","Numbers","1.4 Subtraction"],
  ["Grade 2","Mass","Comparing mass","Which is most suitable for finding the mass of a bag of maize?",["A beam balance or weighing scale","A ruler","A measuring jug","A wall clock"],0,"A balance or weighing scale is used to compare or measure mass.","Measurements","2.2 Mass"],
  ["Grade 2","Capacity","Comparing capacity","Which container is likely to hold the most water?",["A teaspoon","A cup","A 5-litre jerrycan","A bottle cap"],2,"A 5-litre jerrycan has a greater capacity than a cup, teaspoon or bottle cap." ,"Measurements","2.3 Capacity"],

  ["Grade 3","Multiplication","Equal groups","There are 4 trays with 6 eggs on each tray. How many eggs are there altogether?",["10","20","24","26"],2,"4 groups of 6 gives 4 × 6 = 24 eggs.","Numbers","1.5 Multiplication"],
  ["Grade 3","Division","Sharing equally","Twenty-four learners are placed equally into 4 groups. How many learners are in each group?",["4","5","6","8"],2,"24 ÷ 4 = 6 learners in each group.","Numbers","1.6 Division"],
  ["Grade 3","Fractions","Equal parts","A chapati is divided into 4 equal parts. One part is eaten. What fraction was eaten?",["1/2","1/3","1/4","4/1"],2,"One of four equal parts is one-quarter (1/4).","Numbers","1.7 Fractions"],
  ["Grade 3","Time","Reading time","A lesson starts at 8:00 a.m. and ends at 9:00 a.m. How long is the lesson?",["30 minutes","45 minutes","1 hour","2 hours"],2,"The time from 8:00 a.m. to 9:00 a.m. is one hour.","Measurements","2.4 Time"],
  ["Grade 3","Money","Making amounts","A learner buys a ruler for KSh 25 and pays with KSh 50. What change should the learner receive?",["KSh 15","KSh 20","KSh 25","KSh 30"],2,"KSh 50 − KSh 25 = KSh 25 change.","Measurements","2.5 Money"]
].map((r,i)=>({
  id:"ke-cbc-math-"+r[0].toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+String(i+1).padStart(2,"0"),
  country:"Kenya",curriculum:"Kenya CBC/CBE",grade:r[0],subject:"Mathematics",
  topic:r[1],question:r[3],options:r[4],correctIndex:r[5],explanation:r[6],
  strand:r[7],substrand:r[8],difficulty:"Foundational application",published:true,
  source:sources[r[0]],sourceName:"Kenya Institute of Curriculum Development (KICD) Mathematics Activities curriculum design",
  createdAt:"2026-11-19T00:00:00.000Z",updatedAt:"2026-11-19T00:00:00.000Z"
}));
module.exports = rows;
