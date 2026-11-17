/* CBE Nexus country- and curriculum-matched question extensions.
 * Questions are original practice items mapped to official published curriculum strands.
 * They supplement, rather than reproduce, official examination papers.
 * Cognitive tag is stored at item[11]; language tag at item[12].
 */
(function(){
"use strict";
const make=(q,opts,answer,topic,explanation,strand,sub,outcome,content,cognitive,language="English")=>
 [q,opts,answer,topic,explanation,strand,sub,outcome,content,"","",cognitive,language];
const packs={
 "Kenya":{
  curriculum:"Kenya CBC/CBE",language:"English",
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
     make("A taxi charges a fixed booking fee of 80 shillings plus 25 shillings per kilometre. A passenger has at most 330 shillings. What is the greatest whole number of kilometres the passenger can travel?",["8 km","9 km","10 km","11 km"],1,"Linear relationships","80 + 25k ≤ 330, so 25k ≤ 250 and k ≤ 10. The greatest distance is 10 km.","Algebra","Linear equations and inequalities","Form and solve an inequality from a real-life situation.","Taxi fare inequality","higher-order")
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
  curriculum:"Ghana NaCCA Curriculum / WASSCE",language:"English",
  source:"https://nacca.gov.gh/wp-content/uploads/2023/06/MATHEMATICS.pdf",
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
     make("A phone bundle gives 2.4 GB for GH₵30. Another gives 3.5 GB for GH₵42. Which bundle offers the lower cost per gigabyte, and by how much?",["First bundle by GH₵0.50/GB","Second bundle by GH₵0.50/GB","First bundle by GH₵1.00/GB","Both cost the same per GB"],0,"Ratio and proportion","First: 30/2.4 = GH₵12.50/GB. Second: 42/3.5 = GH₵12.00/GB. The second is cheaper by GH₵0.50/GB.","Number","Ratios and proportion","Compare unit rates and justify a value-for-money decision.","Comparing mobile data plans","higher-order"),
     make("The mean of five scores is 14. Four scores are 9, 12, 16 and 18. A learner says the fifth score must be 15. Is the learner correct?",["Yes, because 14 × 5 − 9 − 12 − 16 − 18 = 15","No, the fifth score is 14","No, the fifth score is 19","Yes, because the median is 15"],0,"Handling data","Total score = 14 × 5 = 70. Known scores total 55, so the fifth score is 15.","Data","Data","Use the mean to infer a missing value and assess a claim.","Missing data from a mean","higher-order")
    ],
    Science:[
     make("A community notices that a nearby stream becomes cloudy after heavy rainfall on cleared farmland. Which action would most directly reduce the cause of the cloudiness?",["Remove vegetation along the stream","Plant cover crops and maintain vegetated buffer strips","Increase ploughing down the slope","Leave the soil bare until the next rainy season"],1,"Environment and sustainability","Vegetation protects soil and buffer strips trap sediment before it enters the stream.","Earth and Environmental Science","Soil conservation","Recommend a solution based on an environmental cause-and-effect relationship.","Runoff and stream sediment","higher-order")
    ]
   },
   "Basic 9":{
    Mathematics:[
     make("A school hall has 240 seats. At an event, 85% are occupied. If 30 people leave and 18 arrive, what percentage of the seats is occupied now?",["80%","82.5%","85%","87.5%"],1,"Fractions, decimals and percentages","Initially 0.85 × 240 = 204 people. Then 204 − 30 + 18 = 192. Occupancy = 192/240 × 100 = 80%.","Number","Fractions, decimals and percentages","Apply percentage and number operations to a changing situation.","Changing hall occupancy","higher-order"),
     make("A linear relationship is represented by y = 3x + 2. A learner says doubling x always doubles y. Which counterexample proves the claim false?",["x = 1 gives y = 5; x = 2 gives y = 8","x = 2 gives y = 8; x = 4 gives y = 14","x = 3 gives y = 11; x = 6 gives y = 20","All of the above"],3,"Algebraic relationships","Each pair shows that doubling x does not double y because the constant term 2 remains. Any listed pair is a counterexample.","Algebra","Variables and equations","Evaluate a generalisation using examples and algebraic structure.","Testing a claim about linear functions","higher-order")
    ],
    Science:[
     make("A student investigates whether fertiliser increases bean-plant growth. Which design provides the strongest evidence?",["One fertilised plant compared with a different species","Several similar plants randomly assigned to fertiliser and control groups, with equal water, light and soil","Fertilised plants receive more water and sunlight","Measure only the tallest plant in each group"],1,"Scientific investigation","Replication, a control group, random allocation and controlled growing conditions reduce bias and allow a fair comparison.","Scientific Investigation","Experimental design","Evaluate reliability and validity in an investigation.","Testing fertiliser effectiveness","higher-order")
    ]
   }
  }
 },
 "Uganda":{
  curriculum:"Uganda NCDC Curriculum / UNEB",language:"English",
  source:"https://ncdc.go.ug/wp-content/uploads/2024/03/Curriculum_Framework.pdf",
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