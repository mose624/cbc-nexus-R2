/* Tanzania TIE / NECTA-specific original practice MCQs. Not official NECTA examination questions. */
(()=>{"use strict";
 const Q=(q,o,a,t,e)=>[q,o,a,t,e];
 const topics={
 "Form I":{"Basic Mathematics":["Number operations","Ratio and percentage"],"English Language":["Grammar","Vocabulary"],"Biology":["Cells","Classification"],"Chemistry":["Matter","Separation"],"Physics":["Measurement","Force"]},
 "Form II":{"Basic Mathematics":["Algebra","Geometry"],"English Language":["Tenses","Comprehension"],"Biology":["Nutrition","Respiration"],"Chemistry":["Atomic structure","Acids and bases"],"Physics":["Pressure","Energy"]},
 "Form III":{"Basic Mathematics":["Equations","Trigonometry"],"English Language":["Clauses","Summary writing"],"Biology":["Reproduction","Inheritance"],"Chemistry":["Moles","Bonding"],"Physics":["Electricity","Waves"]},
 "Form IV":{"Basic Mathematics":["Quadratics","Statistics"],"English Language":["Functional writing","Editing"],"Biology":["Genetics","Ecology"],"Chemistry":["Organic chemistry","Electrolysis"],"Physics":["Induction","Radioactivity"]}
 };
 const banks={};
 Object.entries(topics).forEach(([form,subjects])=>{
  banks[form]={};
  Object.entries(subjects).forEach(([subject,items])=>{
   const rows=[];
   items.forEach((topic,i)=>{
    const qset={
     "Basic Mathematics":[["What is 20% of 150?",["15","20","30","45"],2,"Percentages","0.20 × 150 = 30."],["Solve 4x = 28.",["5","6","7","8"],2,"Algebra","x = 28 ÷ 4 = 7."]],
     "English Language":[["Choose the correct plural subject–verb agreement.",["The learners is ready.","The learners are ready.","The learners was ready.","The learners be ready."],1,"Grammar","The plural subject 'learners' takes 'are'."],["A synonym for 'accurate' is:",["correct","careless","vague","uncertain"],0,"Vocabulary","Accurate means correct or exact."]],
     "Biology":[["Which organelle contains most genetic material in a typical eukaryotic cell?",["Ribosome","Nucleus","Vacuole","Cell wall"],1,"Cell biology","The nucleus contains chromosomes."],["Which process releases energy from food in cells?",["Photosynthesis","Respiration","Transpiration","Osmosis"],1,"Cell processes","Respiration releases usable energy from organic molecules."]],
     "Chemistry":[["Which particle has a negative charge?",["Proton","Neutron","Electron","Nucleus"],2,"Atomic structure","Electrons carry negative charge."],["Which method separates an insoluble solid from a liquid?",["Filtration","Distillation","Chromatography","Crystallisation"],0,"Separation","Filtration retains the insoluble solid." ]],
     "Physics":[["What is the SI unit of electric current?",["Volt","Ampere","Ohm","Watt"],1,"Electricity","Current is measured in amperes."],["A body travels 100 m in 20 s. Its average speed is:",["2 m/s","4 m/s","5 m/s","10 m/s"],2,"Motion","Speed = 100 ÷ 20 = 5 m/s."]]
    };
    const row=qset[subject][i];
    rows.push(Q(row[0],row[1],row[2],row[3],row[4]));
   });
   banks[form][subject]=rows;
  });
 });
 window.CBENexusTanzaniaBanks={curriculum:"Tanzania TIE Curriculum / NECTA",banks};
})();