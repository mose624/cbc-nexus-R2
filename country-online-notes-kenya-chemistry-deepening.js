/* CBE Nexus — Kenya Grade 10 Chemistry lesson deepening and self-assessment.
   Adds worked-practice checkpoints and competency-focused questions to the KICD-ordered core chapters. */
(()=> {
 const list=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry;
 if(!Array.isArray(list)) return;
 const extra={
 "ke-g10-chem-1-1":[
 ["Classify the following as physical or chemical change: melting ice, burning magnesium, dissolving sugar.","Melting ice and dissolving sugar are physical changes; burning magnesium is a chemical change."],
 ["Give one example of Chemistry improving public health.","Water treatment, medicine development, sanitation products or diagnostic testing."],
 ["Why should a learner never mix bleach with an acidic toilet cleaner?","The mixture can release toxic chlorine-containing gas; household chemicals must never be mixed unless the label explicitly instructs it."],
 ["Name the branch that identifies substances in a sample.","Analytical chemistry."],
 ["Explain why controlled experiments are important in Chemistry.","They allow the effect of one variable to be tested while other factors are controlled, making conclusions more reliable."]
 ],
 "ke-g10-chem-1-2":[
 ["Write the electron configuration of magnesium (Z=12).","1s² 2s² 2p⁶ 3s²."],
 ["Write the electron configuration of potassium (Z=19).","1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹."],
 ["Draw the orbital box arrangement for nitrogen, 1s² 2s² 2p³.","1s [↑↓], 2s [↑↓], 2p [↑] [↑] [↑]. The three 2p electrons occupy separate orbitals before pairing."],
 ["How many orbitals are in a d subshell and what is its maximum electron capacity?","Five orbitals; ten electrons maximum."],
 ["An element has isotopes 35 (75%) and 37 (25%). Calculate its relative atomic mass.","(35×75 + 37×25)/100 = 35.5."],
 ["Why is the 4s subshell filled before 3d in the usual introductory filling order?","For neutral atoms in the usual Aufbau sequence, 4s is slightly lower in energy than 3d at the point of filling; transition-metal ion configurations can differ as occupancy changes."]
 ],
 "ke-g10-chem-1-3":[
 ["Write the formula formed by Al³⁺ and SO₄²⁻.","Al₂(SO₄)₃."],
 ["What is the charge on an ammonium ion?","+1; NH₄⁺."],
 ["Explain why a neutral ionic compound has no overall charge.","The total positive charge of its cations equals the total negative charge of its anions."],
 ["Balance: Al + O₂ → Al₂O₃.","4Al + 3O₂ → 2Al₂O₃."],
 ["State the group and common ion charge of a halogen such as chlorine.","Group 17; commonly forms a −1 ion."]
 ],
 "ke-g10-chem-1-4":[
 ["Explain why magnesium oxide has a high melting point.","It has a giant ionic lattice with strong electrostatic attractions between Mg²⁺ and O²⁻ ions, requiring much energy to overcome."],
 ["Why can graphite conduct electricity but diamond cannot?","Graphite has delocalised electrons that move along its layers; diamond has no mobile delocalised electrons because each carbon forms four covalent bonds."],
 ["Describe metallic bonding.","Electrostatic attraction between positive metal ions and a sea of delocalised electrons."],
 ["What type of bonding is present in a water molecule?","Covalent bonding; oxygen and hydrogen share electron pairs."],
 ["Why do molten ionic compounds conduct electricity?","Their ions are free to move and carry charge."]
 ],
 "ke-g10-chem-1-5":[
 ["Explain why atomic radius generally decreases across Period 3.","Nuclear charge increases while added electrons enter the same main energy level, so the stronger attraction pulls the electron cloud closer."],
 ["Explain why Group 1 reactivity increases down the group.","The outer electron is farther from the nucleus and more shielded, so it is lost more easily."],
 ["Which is generally more reactive, chlorine or iodine, and why?","Chlorine; halogen reactivity decreases down the group because an incoming electron is attracted less strongly as atomic size and shielding increase."],
 ["Define metallic character.","The tendency of an element to lose electrons and form positive ions; it generally increases down a group and decreases across a period."],
 ["Why are periodic trends described as general patterns rather than absolute rules?","Subshell energies, electron pairing and differences in structure can cause exceptions."]
 ],
 "ke-g10-chem-2-1":[
 ["Write a balanced equation for magnesium reacting with hydrochloric acid.","Mg + 2HCl → MgCl₂ + H₂."],
 ["Write a balanced equation for calcium carbonate reacting with nitric acid.","CaCO₃ + 2HNO₃ → Ca(NO₃)₂ + H₂O + CO₂."],
 ["What is the difference between a base and an alkali?","A base neutralises an acid; an alkali is a soluble base that produces hydroxide ions in water."],
 ["A solution changes universal indicator to red. What does this suggest?","It is strongly acidic, with a low pH; the exact pH requires a suitable chart or meter."],
 ["Why does a weak acid not necessarily have a high pH?","pH depends on both concentration and extent of ionisation; a concentrated weak acid can still be acidic."]
 ],
 "ke-g10-chem-2-2":[
 ["Describe how to prepare dry crystals of a soluble salt from an acid and an insoluble oxide.","Warm dilute acid gently, add excess oxide until no more reacts, filter off excess solid, evaporate some filtrate, cool to crystallise, then filter and dry crystals."],
 ["What is the purpose of titration when preparing a soluble sodium salt from an acid and an alkali?","It determines the exact volumes needed for neutralisation when both reactants are soluble and excess reactant cannot be filtered off."],
 ["Write the precipitation equation for lead(II) nitrate and potassium iodide.","Pb(NO₃)₂(aq) + 2KI(aq) → PbI₂(s) + 2KNO₃(aq)."],
 ["Why is a salt solution cooled after partial evaporation?","Cooling reduces solubility for many salts and encourages crystals to form."],
 ["Give two examples of salts used in everyday life and one use for each.","Sodium chloride for food seasoning/preservation; calcium carbonate in building materials or antacid products; copper(II) sulfate in approved agricultural or laboratory applications."]
 ],
 "ke-g10-chem-3-0":[
 ["Write the molecular formula of butane using the alkane general formula.","For n=4, C₄H₁₀."],
 ["Balance complete combustion of ethane: C₂H₆ + O₂ → CO₂ + H₂O.","2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O."],
 ["Why is carbon able to form many different compounds?","Carbon forms four covalent bonds and can bond to other carbon atoms to make chains, branches and rings."],
 ["State one danger of incomplete combustion of fuels.","It can produce carbon monoxide, a poisonous gas that reduces the blood's oxygen-carrying ability."],
 ["What is the difference between saturated and unsaturated hydrocarbons?","Saturated hydrocarbons have only carbon-carbon single bonds; unsaturated hydrocarbons contain at least one carbon-carbon double or triple bond."]
 ]
 };
 for(const [id,items] of Object.entries(extra)){
  const chapter=list.find(x=>x.id===id);
  if(!chapter) continue;
  chapter.questions=chapter.questions||[];
  for(const [q,a] of items) if(!chapter.questions.some(item=>item.q===q)) chapter.questions.push({q,a});
  chapter.curriculumContext=(chapter.curriculumContext||"")+" Includes additional practice questions and self-assessment.";
 }
})();
