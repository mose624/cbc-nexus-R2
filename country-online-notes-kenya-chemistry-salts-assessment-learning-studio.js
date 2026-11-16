/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 2.2 Salts: assessment and deeper explanations.
   Appends to the existing salts and Learning Studio packs; no existing data is replaced. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-2-2");if(!c||c.__saltsAssessment20261116)return;c.__saltsAssessment20261116=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Solubility rules as a prediction tool",paragraphs:[
 "Solubility rules are patterns that help predict whether an ionic compound remains dissolved or forms a precipitate when two aqueous solutions are mixed. They are guides, not a substitute for the stated conditions or experimental evidence. Many common nitrates and salts of sodium, potassium and ammonium are soluble, while silver chloride and barium sulfate are classic insoluble examples.",
 "To predict a precipitation reaction, identify the ions in each reactant, exchange partners, write the possible product formulae by balancing charges, and then use solubility information to identify any insoluble product. Only after that should the balanced molecular, complete ionic and net ionic equations be written.",
 "Spectator ions remain unchanged in solution. They appear on both sides of the complete ionic equation and cancel when the net ionic equation is formed. The net ionic equation focuses on the particles that actually undergo chemical change."
 ],keyTerms:["solubility","precipitate","spectator ion","net ionic equation"]},
 {heading:"Water of crystallisation and hydrated salts",paragraphs:[
 "Some salts crystallise with a definite number of water molecules incorporated into their crystal structure. This water is called water of crystallisation. A hydrate is represented using a dot between the salt formula and the number of water molecules, for example CuSO₄·5H₂O.",
 "Heating a suitable hydrated salt may remove its water of crystallisation and produce an anhydrous salt. The colour, mass and appearance may change. The process is not simply evaporation of surface moisture; the water is part of the crystalline composition.",
 "If a known mass of hydrate is heated to constant mass, the mass lost can be used to calculate the water content. The calculation assumes the sample is pure and that heating removes only water without decomposing the salt. Experimental errors include spattering, incomplete dehydration and reabsorption of moisture during cooling."
 ],keyTerms:["hydrate","anhydrous salt","water of crystallisation","constant mass"]},
 {heading:"Purity, percentage yield and sustainable salt manufacture",paragraphs:[
 "Percentage yield compares the amount of product actually obtained with the theoretical amount predicted from the balanced equation. It is calculated as actual yield divided by theoretical yield multiplied by 100%. A low yield may result from incomplete reaction, side reactions, transfer losses or product remaining dissolved in the mother liquor.",
 "Purity is a separate question. A sample can have a high apparent mass but contain water, unreacted starting material or other impurities. Washing, recrystallisation and suitable analytical tests can improve or assess purity. A reliable report states the method and limitations.",
 "Sustainable salt manufacture considers raw-material use, energy demand, water consumption, waste brines and safe disposal. A good process seeks high atom economy and product yield while reducing hazardous waste and protecting water resources."
 ],keyTerms:["theoretical yield","actual yield","percentage yield","purity","mother liquor"]}
 ]);
 const qs=[
 ["Aqueous solutions of silver nitrate and sodium chloride are mixed. Predict the precipitate and write the net ionic equation.","Silver chloride, AgCl(s), forms. Ag⁺(aq) + Cl⁻(aq) → AgCl(s).",3],
 ["Explain why spectator ions are omitted from a net ionic equation.","They remain unchanged in solution and occur on both sides of the complete ionic equation, so they cancel.",2],
 ["Write the formula of aluminium sulfate using Al³⁺ and SO₄²⁻ ions.","Al₂(SO₄)₃; two Al³⁺ ions give +6 and three sulfate ions give −6.",2],
 ["A hydrate has formula CuSO₄·5H₂O. Explain the meaning of the 5H₂O.","Each formula unit of hydrated copper(II) sulfate contains five water molecules of crystallisation in its crystal structure.",2],
 ["A 2.50 g sample of hydrated salt loses 0.90 g on heating. Calculate the percentage by mass of water.","Percentage water = (0.90 ÷ 2.50) × 100 = 36.0%.",2],
 ["State two reasons why heating a hydrated salt to constant mass is important.","It indicates that mass loss has stopped and dehydration is likely complete; repeated heating and weighing improves reliability.",2],
 ["A reaction has a theoretical yield of 12.0 g but produces 9.0 g. Calculate percentage yield.","(9.0 ÷ 12.0) × 100 = 75%.",2],
 ["Explain why percentage yield and purity are not the same.","Yield compares actual product mass with theoretical mass; purity measures how much of the sample is the desired substance. Impurities can inflate measured mass.",3],
 ["Describe how recrystallisation can improve the purity of a soluble salt.","Dissolve impure solid in minimum hot solvent, remove insoluble impurities by filtration, cool to crystallise the desired salt, then filter, wash and dry crystals.",4],
 ["A learner writes MgCl as the formula of magnesium chloride. Explain the error and give the correct formula.","Magnesium forms Mg²⁺ and chloride forms Cl⁻; two chloride ions are needed to balance one magnesium ion. Correct formula: MgCl₂.",3],
 ["Explain why a precipitate should be washed with a small amount of cold distilled water.","Washing removes soluble impurities; a small cold volume reduces loss of the product through dissolution.",3],
 ["A student obtains a mass greater than the theoretical yield. Give two possible explanations.","The product may be wet or contaminated, or the starting material/product may contain impurities; weighing or calculation errors are also possible.",2],
 ["Describe how to obtain a net ionic equation for a precipitation reaction.","Write correct formulae and balance the molecular equation, split soluble aqueous ionic compounds into ions, keep solids intact, cancel spectator ions and check atoms and charge.",4],
 ["Explain why barium sulfate is useful as an insoluble precipitate in qualitative analysis.","Its low solubility allows sulfate ions to be identified by forming a visible white precipitate with suitable barium ions, subject to appropriate test conditions.",3],
 ["Evaluate one environmental issue associated with industrial salt production and suggest a control.","Brine discharge can increase salinity and harm aquatic life; treatment, recovery/reuse of brine, controlled discharge and monitoring can reduce impact.",3]
 ];
 c.questions=(c.questions||[]).concat(qs.map(q=>({q:q[0],a:q[1],category:"Learning Studio • salts and quantitative chemistry",marks:q[2],markingPoints:q[1]})));
 c.summary=(c.summary||[]).concat([
 "Use ion charges to write neutral salt formulae; the total positive and negative charge must balance.",
 "Solubility patterns predict precipitates; net ionic equations show the reacting ions and omit spectator ions.",
 "Hydrated salts contain a fixed number of water molecules in their crystal structure.",
 "Percentage yield measures product obtained relative to theoretical yield; it does not measure purity.",
 "Recrystallisation, filtration, washing and drying are selected to improve product quality.",
 "Responsible salt manufacture considers energy, water, waste, product yield and environmental protection."
 ]);
 c.seoTitle="Salts Grade 10 Chemistry Kenya | Solubility, Precipitates and Crystallisation";
 c.metaDescription="Kenya Grade 10 Chemistry salts notes with solubility rules, precipitation and net ionic equations, hydrated salts, yield, purity, crystallisation and exam questions with answers.";
 c.seoKeywords=["Kenya Grade 10 Chemistry salts","solubility rules chemistry","precipitation reactions","net ionic equations","water of crystallisation","percentage yield","recrystallisation","KICD Chemistry"];
})();