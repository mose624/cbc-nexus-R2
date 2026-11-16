/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.1 Introduction: depth pack 5.
   Short consolidation extension with applied laboratory numeracy. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-1");
 if(!c||c.__chemIntroDepth5)return;c.__chemIntroDepth5=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Laboratory numeracy: unit conversion, ratios and percentage yield",paragraphs:[
 "Chemistry calculations require careful handling of units. One cubic decimetre is equal to 1000 cubic centimetres, and one litre is equal to one cubic decimetre. Convert volumes before substituting into formulae that require dm³. One kilogram is 1000 grams, and one gram is 1000 milligrams. Write the conversion step explicitly so that the method can be checked.",
 "A ratio compares quantities. In a chemical formula, subscripts show the simplest whole-number ratio of atoms or ions represented by the formula. In an experiment, a ratio may compare volumes or masses of reactants. Keep the order of quantities consistent and simplify only after checking that both quantities use compatible units.",
 "Percentage recovery compares the amount of a desired product actually recovered with the amount expected or initially present. Percentage recovery = (actual amount recovered ÷ expected amount) × 100%. Percentage yield is used for a product formed in a reaction and compares actual yield with theoretical yield. A result below 100% may arise from incomplete reaction, side reactions, transfer losses or purification losses. A value above 100% often indicates a wet or impure product, measurement error or an incorrect theoretical calculation.",
 "A good laboratory record includes the aim, date, apparatus, quantities, method, safety controls, raw observations, calculations and conclusion. Record units at the point of measurement and keep original readings separate from processed values. This makes it possible for another learner to audit the method and repeat the investigation."
 ],workedExamples:[
 {question:"Convert 375 cm³ to dm³ and calculate the concentration when 7.5 g of solute is present in that final volume.",solution:"375 cm³ ÷ 1000 = 0.375 dm³. Concentration = 7.5 ÷ 0.375 = 20 g dm⁻³."},
 {question:"A learner expects to recover 8.0 g of crystals but obtains 6.4 g after drying. Calculate percentage recovery.",solution:"Percentage recovery = (6.4 ÷ 8.0) × 100 = 80%."}
 ]}
 ]);
 c.questions=(c.questions||[]).concat([
 {q:"Convert 425 cm³ into dm³.",a:"425 ÷ 1000 = 0.425 dm³.",category:"Learning Studio • laboratory numeracy",marks:1,markingPoints:"Correct conversion."},
 {q:"A solution contains 3.0 g of solute in 150 cm³. Calculate its concentration in g dm⁻³.",a:"150 cm³ = 0.150 dm³; concentration = 3.0 ÷ 0.150 = 20 g dm⁻³.",category:"Learning Studio • laboratory numeracy",marks:2,markingPoints:"Correct volume conversion and calculation."},
 {q:"A student recovers 4.5 g of a solid from an expected 6.0 g. Calculate percentage recovery.",a:"(4.5 ÷ 6.0) × 100 = 75%.",category:"Learning Studio • laboratory numeracy",marks:2,markingPoints:"Correct formula and answer."},
 {q:"Give two possible reasons why the percentage recovery of a purified solid is below 100%.",a:"Some product may remain dissolved in the solvent; material may be lost during transfer, filtration or washing; the reaction may be incomplete.",category:"Learning Studio • laboratory numeracy",marks:2,markingPoints:"Any two valid reasons."},
 {q:"A recovered product has a mass greater than the theoretical yield. Give one likely explanation.",a:"The product may not be completely dry or may contain impurities; alternatively, a mass or theoretical-yield calculation may be wrong.",category:"Learning Studio • laboratory numeracy",marks:1,markingPoints:"One valid explanation."}
 ]);
 c.summary=(c.summary||[]).concat([
 "Convert units before substituting values into concentration and other formulae.",
 "Percentage recovery and percentage yield compare actual recovered or produced material with an expected amount.",
 "A result above 100% often signals moisture, contamination or calculation error and should be investigated.",
 "A complete laboratory record preserves raw data, units, calculations, safety controls and a conclusion."
 ]);
})();