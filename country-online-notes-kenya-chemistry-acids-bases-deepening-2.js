/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 2.1 Acids and Bases: depth pack 2.
   Adds worked titration, salt preparation, environmental and pH interpretation content. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-2-1");
 if(!c||c.__acidsBasesDepth2)return;c.__acidsBasesDepth2=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Writing ionic equations and identifying spectator ions",paragraphs:[
 "A full chemical equation shows all reactants and products. An ionic equation represents strong electrolytes in aqueous solution as their ions, while substances that remain as solids, liquids, gases or weakly ionised molecules are written in their molecular form as appropriate. Ionic equations make the particles directly involved in a reaction easier to identify.",
 "A spectator ion is present in the solution but does not undergo chemical change in the reaction. For example, when hydrochloric acid reacts with sodium hydroxide, sodium ions and chloride ions remain in solution. The essential reaction is between hydrogen ions and hydroxide ions to form water. Removing unchanged spectator ions gives the net ionic equation H⁺(aq) + OH⁻(aq) → H₂O(l).",
 "When constructing an ionic equation, first write a correct balanced formula equation with state symbols. Split aqueous strong electrolytes into their ions, but do not split solids, liquids, gases or weak electrolytes in a simplified treatment. Cancel identical ions appearing unchanged on both sides, then check that both atoms and total charge are balanced.",
 "The same approach helps explain precipitation reactions and acid reactions with carbonates. For a carbonate reacting with acid, hydrogen ions react with carbonate ions to form carbon dioxide and water: 2H⁺(aq) + CO₃²⁻(aq) → CO₂(g) + H₂O(l). The salt ions are spectators in the net ionic description."
 ],workedExamples:[
 {question:"Write the net ionic equation for nitric acid reacting with potassium hydroxide.",solution:"The molecular equation is HNO₃(aq) + KOH(aq) → KNO₃(aq) + H₂O(l). K⁺ and NO₃⁻ are spectator ions. Net ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)."},
 {question:"Write the net ionic equation for an acid reacting with a carbonate.",solution:"2H⁺(aq) + CO₃²⁻(aq) → CO₂(g) + H₂O(l). Check atoms and charge: both sides have total charge zero."}
 ]},
 {heading:"Preparing a soluble salt by neutralisation",paragraphs:[
 "A soluble salt can be prepared by reacting an acid with an insoluble base or carbonate, adding the solid in excess so that all the acid is used. Warm the acid gently if instructed, add the insoluble solid in small portions while stirring, and continue until no more reacts. Excess solid is removed by filtration, leaving a salt solution.",
 "The filtrate is concentrated by gentle evaporation until it approaches the crystallisation point. Allow the solution to cool so crystals form, then collect them by filtration and dry them between clean filter papers or using an approved drying method. Avoid strong heating to dryness when the salt may decompose or when good crystals are required.",
 "A soluble salt can also be prepared by titration when both reactants are soluble, because excess acid or alkali cannot be removed by simple filtration. First carry out a titration using an indicator to determine the exact volumes required. Repeat the neutralisation using the same measured volumes but without indicator, then concentrate and crystallise the salt solution.",
 "The choice of acid determines the anion in the salt: hydrochloric acid forms chlorides, sulfuric acid forms sulfates and nitric acid forms nitrates. The base or carbonate determines the positive ion. Name the salt by stating the positive ion first and the acid-derived negative ion second, for example copper(II) sulfate or sodium nitrate."
 ],workedExamples:[
 {question:"Describe how to prepare pure dry copper(II) sulfate crystals from dilute sulfuric acid and excess copper(II) oxide.",solution:"Warm dilute sulfuric acid gently. Add copper(II) oxide in small portions while stirring until some remains unreacted, showing the acid has been used up. Filter off excess solid. Heat the filtrate gently to concentrate it, allow it to cool and crystallise, then filter and dry the crystals."},
 {question:"Why is titration used to prepare sodium chloride from hydrochloric acid and sodium hydroxide?",solution:"Both reactants and the product are soluble, so an excess reactant cannot be removed by filtration. Titration determines the exact reacting volumes; repeat the reaction without indicator to obtain a purer salt solution for crystallisation."}
 ]},
 {heading:"pH interpretation, dilution and environmental chemistry",paragraphs:[
 "The pH scale is logarithmic. For dilute aqueous solutions at a fixed temperature, a change of one pH unit corresponds to a tenfold change in hydrogen-ion concentration. A solution of pH 3 has ten times the hydrogen-ion concentration of a solution of pH 4, while pH 2 has one hundred times the concentration of pH 4. Avoid saying that pH 2 is simply 'twice as acidic' as pH 4.",
 "Diluting an acidic solution with water generally raises its pH towards neutral because the hydrogen-ion concentration decreases. Diluting an alkaline solution generally lowers its pH towards neutral because the hydroxide-ion concentration decreases. Dilution does not automatically make a hazardous solution safe; handling and disposal must still follow the appropriate safety procedure.",
 "Acid rain forms when certain atmospheric pollutants, especially sulfur dioxide and nitrogen oxides, react in the atmosphere to form acidic substances that return to Earth's surface in precipitation or deposited particles. These pollutants can arise from combustion and industrial processes, although natural sources also exist. Acid deposition can affect lakes, soils, vegetation, buildings and aquatic organisms.",
 "The effects of acid deposition depend on the environment's buffering capacity. Some soils and waters contain minerals that neutralise added acidity, while poorly buffered environments are more vulnerable. Liming may reduce soil acidity in agriculture, but the amount should be based on soil analysis because excessive liming can also create nutrient-availability problems.",
 "pH management is important in drinking-water treatment, wastewater treatment, aquaculture, agriculture and swimming pools. A pH measurement should be interpreted alongside other water-quality indicators; pH alone does not establish that water is safe to drink or that an ecosystem is healthy."
 ],workedExamples:[
 {question:"Compare the hydrogen-ion concentration of solutions at pH 2 and pH 5.",solution:"The difference is three pH units. The pH 2 solution has 10³ = 1000 times the hydrogen-ion concentration of the pH 5 solution, at the same temperature and under the usual dilute-solution interpretation."},
 {question:"Explain why adding water to an acidic solution usually increases its pH but does not prove it is safe.",solution:"Dilution decreases hydrogen-ion concentration and moves pH towards neutral. However, the solution may remain acidic or contain other hazardous substances, so safety cannot be inferred from dilution alone."}
 ]},
 {heading:"Titration calculations and quality of results",paragraphs:[
 "A titration measures the volume of one solution required to react completely with a known volume of another solution. The balanced equation gives the mole ratio. Calculate the amount of the known solution using n = cV, where volume must be in dm³. Use the equation coefficients to determine the amount of the unknown reactant, then divide by its volume in dm³ to find concentration.",
 "A titre is the volume delivered from a burette, calculated as final reading minus initial reading. Burette readings should be recorded to the precision marked on the instrument, commonly to two decimal places. Read the meniscus at eye level to avoid parallax error. The pipette should deliver the fixed aliquot accurately, and the burette should be rinsed with the titrant before filling.",
 "A rough titration identifies the approximate endpoint. Subsequent accurate titrations should be performed carefully, adding titrant dropwise near the endpoint while swirling the flask. Concordant titres are close values that agree within the tolerance specified by the practical instructions. Use the concordant results to calculate a mean titre; do not automatically average a rough result with accurate titres.",
 "A titration result can be affected by air bubbles in the burette tip, leaks, incorrect rinsing, overshooting the endpoint, poor indicator choice, contaminated glassware and inaccurate pipetting. A good evaluation identifies which error is plausible and explains whether it would make the recorded titre too high or too low."
 ],workedExamples:[
 {question:"20.0 cm³ of 0.150 mol dm⁻³ sodium hydroxide neutralises 30.0 cm³ of hydrochloric acid. Calculate the acid concentration.",solution:"Equation: HCl + NaOH → NaCl + H₂O, a 1:1 ratio. Moles NaOH = 0.150 × 0.0200 = 0.00300 mol. Moles HCl = 0.00300 mol. Volume acid = 0.0300 dm³. Concentration = 0.00300 ÷ 0.0300 = 0.100 mol dm⁻³."},
 {question:"A learner records a final burette reading of 24.60 cm³ and an initial reading of 0.15 cm³. Calculate the titre.",solution:"Titre = 24.60 − 0.15 = 24.45 cm³."}
 ]}
 ]);
 c.realLifeApplications=(c.realLifeApplications||[]).concat([
 "Soluble salt manufacture uses controlled neutralisation, filtration and crystallisation to produce fertiliser, food and industrial chemicals.",
 "Water-treatment operators monitor pH and alkalinity to protect distribution systems and maintain effective treatment.",
 "Environmental scientists monitor lakes and soils to identify acidification and assess whether buffering or restoration measures are needed.",
 "Quality-control laboratories use titration to check acid content in vinegar, beverages, cleaning products and industrial solutions."
 ]);
 c.commonMisconceptions=(c.commonMisconceptions||[]).concat([
 {misconception:"Spectator ions must be included in every net ionic equation.",correction:"Spectator ions are cancelled because they remain unchanged; a net ionic equation shows only the species involved in the chemical change."},
 {misconception:"Any amount of water added makes an acid harmless.",correction:"Dilution lowers concentration but does not guarantee safety; follow the risk assessment and disposal instructions."},
 {misconception:"The rough titre should be included in the mean of concordant titres.",correction:"The rough titre is used to locate the endpoint; use the accurate concordant titres as directed by the practical method."},
 {misconception:"A soluble salt can always be purified by filtering the reaction mixture.",correction:"Dissolved salts pass through filter paper. Filtration removes insoluble excess reactant; crystallisation is used to recover the dissolved salt."}
 ]);
 c.questions=(c.questions||[]).concat([
 {q:"Write the net ionic equation for the reaction of hydrogen ions with carbonate ions.",a:"2H⁺(aq) + CO₃²⁻(aq) → CO₂(g) + H₂O(l).",category:"Learning Studio • acids and bases",marks:2,markingPoints:"Correct formulae and balanced atoms and charge."},
 {q:"Describe how to prepare pure crystals of a soluble salt from an acid and an insoluble base.",a:"Warm acid gently; add excess insoluble base until no more reacts; filter off excess solid; concentrate the filtrate; cool to crystallise; filter and dry crystals.",category:"Learning Studio • salt preparation",marks:5,markingPoints:"Any five correct sequential stages."},
 {q:"Explain why acid rain can affect some lakes more severely than others.",a:"Lakes differ in buffering capacity. Waters with little dissolved carbonate or other neutralising material are less able to resist pH change and can acidify more readily.",category:"Learning Studio • environment",marks:3,markingPoints:"Link buffering capacity to resistance to pH change."},
 {q:"25.0 cm³ of 0.200 mol dm⁻³ sodium hydroxide neutralises 20.0 cm³ of monoprotic acid. Calculate the acid concentration.",a:"Moles NaOH = 0.200 × 0.0250 = 0.00500 mol. The 1:1 acid amount is 0.00500 mol. Concentration acid = 0.00500 ÷ 0.0200 = 0.250 mol dm⁻³.",category:"Learning Studio • titration",marks:4,markingPoints:"Correct mole calculation, 1:1 ratio and concentration."},
 {q:"A burette reading changes from 1.20 cm³ to 26.35 cm³. Calculate the titre.",a:"26.35 − 1.20 = 25.15 cm³.",category:"Learning Studio • titration",marks:1,markingPoints:"Correct subtraction."},
 {q:"State two sources of error in an acid-base titration and explain one improvement.",a:"Possible errors include parallax when reading the meniscus, overshooting the endpoint, air bubbles in the burette tip, leaks or contaminated glassware. Read at eye level and add titrant dropwise near the endpoint while swirling.",category:"Learning Studio • titration",marks:3,markingPoints:"Two errors and a relevant improvement."}
 ]);
 c.summary=(c.summary||[]).concat([
 "Net ionic equations remove spectator ions and show the species that undergo chemical change.",
 "Soluble salts can be prepared by reacting an acid with an excess insoluble base, filtering, concentrating and crystallising.",
 "Titration is used when both reactants are soluble and excess reactant cannot be removed by filtration.",
 "The pH scale is logarithmic; three pH units represent a thousandfold difference in hydrogen-ion concentration.",
 "Acid deposition effects depend partly on the buffering capacity of soils and waters.",
 "Titration calculations use balanced mole ratios, n=cV and volumes converted to dm³.",
 "Reliable titration requires suitable apparatus, correct rinsing, careful endpoint detection and concordant titres."
 ]);
 c.seoTitle="Acids and Bases: Ionic Equations, Salt Preparation and Titration | Grade 10 Kenya";
 c.metaDescription="Expanded Kenya Grade 10 Chemistry acids and bases notes covering net ionic equations, soluble salt preparation, pH comparisons, acid rain, titration calculations and practical evaluation.";
 c.seoKeywords=[...(c.seoKeywords||[]),"net ionic equations acids","preparation of soluble salts","acid rain buffering capacity","titration calculations mol dm-3","Grade 10 Chemistry Kenya acids bases"];
})();