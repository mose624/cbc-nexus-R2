/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.3 Periodic Table: depth pack 3.
   Adds periodicity applications, oxides, reactivity evidence and exam practice. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-3");
 if(!c||c.__periodicTableDepth3)return;c.__periodicTableDepth3=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Period 3 oxides and the changing nature of bonding",paragraphs:[
 "The oxides of Period 3 elements illustrate how bonding and acid-base behaviour change across a period. Sodium and magnesium form mainly ionic oxides, while aluminium oxide has a giant structure with substantial ionic and covalent character. Silicon dioxide has a giant covalent network, whereas phosphorus, sulfur and chlorine form molecular oxides.",
 "Sodium oxide and magnesium oxide are basic oxides. They react with acids to form salts and water. Sodium oxide reacts with water to form sodium hydroxide, while magnesium oxide reacts much less vigorously to form magnesium hydroxide. Aluminium oxide is amphoteric: it reacts with both acids and strong alkalis. Silicon dioxide is an acidic oxide and reacts with strong bases under suitable conditions.",
 "Non-metal oxides such as sulfur dioxide and carbon dioxide are generally acidic. They can dissolve in water to form acidic solutions or react with bases to form salts. Sulfur dioxide contributes to acid deposition when released into the atmosphere; controlling emissions from combustion and industrial processes helps reduce this environmental impact.",
 "The trend is not a simple one-step rule for every oxide. Consider the structure, oxidation state, solubility and reaction conditions. When comparing oxides, support a classification with an equation or an observation, such as reaction with dilute acid, alkali or water."
 ],workedExamples:[
 {question:"Classify magnesium oxide, aluminium oxide and sulfur dioxide as basic, amphoteric or acidic oxides.",solution:"Magnesium oxide is basic; aluminium oxide is amphoteric; sulfur dioxide is acidic."},
 {question:"Explain why aluminium oxide is described as amphoteric.",solution:"It reacts with acids as a base and with strong alkalis as an acid, so it shows both acidic and basic behaviour."}
 ]},
 {heading:"Electron arrangement as the explanation for periodic trends",paragraphs:[
 "The periodic table's repeating chemical patterns arise from repeating outer-electron arrangements. Across a main-group period, proton number increases while electrons are added to the same principal shell. The increasing nuclear charge generally attracts the electron cloud more strongly, although shielding and electron-electron repulsion also influence the detailed trend.",
 "Down a group, each successive element has an additional occupied electron shell. The outer electrons are farther from the nucleus and are shielded by more inner electrons. This helps explain why atomic radius generally increases down a group and why Group 1 metals become more reactive down the group: their outer electron is more easily removed.",
 "For Group 17, the trend in reactivity is opposite to Group 1. Halogen reactions commonly involve gaining an electron. Down the group, the incoming electron is added farther from the nucleus and experiences more shielding, so the attraction for it generally decreases. A more reactive halogen can therefore displace a less reactive halogen from a halide solution.",
 "Ionisation energy is the energy required to remove an electron from a gaseous atom. It generally increases across a period and decreases down a group. The trend is influenced by nuclear charge, distance and shielding, and there are small irregularities due to subshell energies and electron pairing. At introductory level, explain the broad trend using these factors rather than memorising a graph without reasoning."
 ],workedExamples:[
 {question:"Explain why potassium is more reactive than sodium in reactions where a Group 1 atom loses its outer electron.",solution:"Potassium has an additional occupied shell. Its outer electron is farther from the nucleus and more shielded by inner electrons, so it is removed more easily."},
 {question:"Explain why chlorine is more reactive than iodine in reactions where a halogen gains an electron.",solution:"Chlorine is smaller and has less shielding than iodine. It attracts an incoming electron more strongly, so it gains an electron more readily."}
 ]},
 {heading:"Displacement reactions as evidence for relative reactivity",paragraphs:[
 "A displacement reaction occurs when a more reactive element replaces a less reactive element in a compound. In halogen displacement, a more reactive halogen oxidises halide ions of a less reactive halogen. The visible colour change can provide evidence, but the conclusion should be supported by the chemical equation and the known reactivity order.",
 "For example, chlorine can oxidise bromide ions to bromine: Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂. Chlorine is reduced to chloride ions, while bromide ions are oxidised to bromine. The reaction demonstrates electron transfer and allows the relative oxidising strengths of the halogens to be compared.",
 "In metal displacement, a more reactive metal can displace a less reactive metal from its salt solution. Magnesium can displace copper from copper(II) sulfate: Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s). Magnesium atoms lose electrons to form magnesium ions, while copper(II) ions gain electrons to form copper metal.",
 "A negative observation does not always prove that no reaction is possible; reaction rate, surface coatings, concentration and experimental conditions can affect what is seen. Use a suitable control and allow sufficient time, while keeping the test safe and appropriately scaled."
 ],workedExamples:[
 {question:"Predict what happens when magnesium is placed in copper(II) sulfate solution and write a balanced equation.",solution:"Magnesium is more reactive and displaces copper. Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s). A copper deposit forms and the blue colour may fade as Cu²⁺ ions are removed."}
 ]},
 {heading:"Periodic table, materials and technological applications",paragraphs:[
 "The properties of elements make periodic position useful in selecting materials. Copper and aluminium are used as electrical conductors because they combine useful electrical conductivity with workable physical properties. Aluminium is less dense than copper, making it valuable in overhead power cables and transport structures, although the choice also depends on strength, corrosion and connection requirements.",
 "Silicon is a metalloid and an important semiconductor. Its conductivity can be modified by doping with carefully selected atoms, enabling the control of electrical behaviour in diodes, transistors and integrated circuits. The periodic table helps scientists identify elements with suitable valence-electron arrangements for these applications.",
 "Transition metals and their compounds are important catalysts because they can provide reaction pathways with lower activation energies. Iron is used in ammonia manufacture, while other transition metals are used in catalytic converters and chemical synthesis. Catalyst selection depends on activity, selectivity, stability, cost and environmental considerations.",
 "Group 17 elements and their compounds have uses in water disinfection, polymers and chemical manufacture, but their reactivity and toxicity require careful control. Group 1 compounds are used in batteries, glass manufacture and other industries; the properties of the element and its compounds must be distinguished when discussing applications.",
 "A strong materials explanation links an application to a property and then to the relevant structure. For example, silicon is useful in electronic devices because its semiconductor behaviour can be controlled; simply stating that silicon is a metalloid does not explain its technological role."
 ],workedExamples:[
 {question:"Explain why silicon is useful in electronic devices even though it is not a typical metal conductor.",solution:"Silicon is a semiconductor whose electrical conductivity can be controlled by temperature and doping. This allows devices to regulate current rather than simply conduct it freely."}
 ]},
 {heading:"Interpreting periodic-table questions and avoiding overgeneralisation",paragraphs:[
 "When asked to compare elements, identify the group or period and state the relevant electron-structure feature. For a group trend, explain the change in shells, shielding and distance. For a period trend, explain the change in proton number and attraction within the same principal shell. Link these factors to the property being asked about.",
 "Do not assume that every element in a group reacts in exactly the same way or that a trend is perfectly smooth. Physical state, allotropy, structure and reaction conditions can create exceptions. Use 'generally' when describing broad trends and give a specific example when the question requests evidence.",
 "A formula question requires charge balance, not simply copying group numbers as subscripts. A property question requires a structure-property explanation, not just a name. An equation question requires correct formulae and balancing. Check that the final response answers the command word and includes units or state symbols where requested."
 ]}
 ]);
 c.realLifeApplications=(c.realLifeApplications||[]).concat([
 "Period 3 oxide chemistry helps explain acid-base behaviour in industrial processes and the environmental effects of non-metal oxide emissions.",
 "Metal and halogen displacement reactions provide evidence for relative reactivity and electron transfer.",
 "Semiconductor technology depends on the controlled electronic properties of elements such as silicon.",
 "Transition-metal catalysts support large-scale chemical manufacture and pollution-control technologies."
 ]);
 c.commonMisconceptions=(c.commonMisconceptions||[]).concat([
 {misconception:"Every oxide is either only acidic or only basic.",correction:"Some oxides, such as aluminium oxide, are amphoteric and react with both acids and bases."},
 {misconception:"All Group 17 elements become more reactive down the group.",correction:"For reactions involving electron gain, halogen reactivity generally decreases down the group because attraction for an incoming electron decreases."},
 {misconception:"A displacement reaction changes the atomic number of an element.",correction:"Displacement is a chemical electron-transfer process; nuclei and atomic numbers are unchanged."},
 {misconception:"Silicon is a good conductor in exactly the same way as copper.",correction:"Silicon is a semiconductor whose conductivity can be controlled; copper is a metallic conductor with mobile electrons."}
 ]);
 c.questions=(c.questions||[]).concat([
 {q:"Explain why aluminium oxide is amphoteric and give one type of reaction that demonstrates each behaviour.",a:"It reacts with acids as a base to form salt and water, and with strong alkalis as an acid to form aluminate species or related products.",category:"Learning Studio • periodic table",marks:3,markingPoints:"Both acid and alkali reactions identified with correct amphoteric reasoning."},
 {q:"Explain why the reactivity of Group 1 metals generally increases down the group.",a:"The outer electron is farther from the nucleus and more shielded by additional inner shells, so it is removed more easily.",category:"Learning Studio • periodic table",marks:3,markingPoints:"Additional shell, increased distance/shielding and easier electron loss."},
 {q:"Explain why the reactivity of halogens generally decreases down Group 17.",a:"Atomic radius and shielding increase down the group, reducing attraction for an incoming electron; electron gain becomes less favourable.",category:"Learning Studio • periodic table",marks:3,markingPoints:"Increased radius/shielding and weaker attraction for incoming electron."},
 {q:"Write the balanced equation for magnesium reacting with copper(II) sulfate and identify the displaced metal.",a:"Mg(s) + CuSO₄(aq) → MgSO₄(aq) + Cu(s). Copper is displaced.",category:"Learning Studio • periodic table",marks:2,markingPoints:"Correct balanced equation and copper identified."},
 {q:"Describe the acid-base character of sodium oxide, aluminium oxide and sulfur dioxide.",a:"Sodium oxide is basic, aluminium oxide is amphoteric and sulfur dioxide is acidic.",category:"Learning Studio • periodic table",marks:3,markingPoints:"All three correctly classified."},
 {q:"Explain why silicon is used in semiconductor devices.",a:"Its electrical conductivity can be controlled by doping and other conditions, allowing electronic devices to regulate current.",category:"Learning Studio • periodic table",marks:2,markingPoints:"Controlled semiconductor conductivity linked to device function."}
 ]);
 c.summary=(c.summary||[]).concat([
 "Period 3 oxides change from mainly basic through amphoteric to acidic behaviour across the period.",
 "Periodic trends arise from proton number, electron shells, shielding and attraction between nucleus and electrons.",
 "Group 1 reactivity generally increases down the group as outer electrons are lost more easily.",
 "Group 17 reactivity generally decreases down the group as attraction for an incoming electron becomes weaker.",
 "Displacement reactions provide evidence for relative reactivity and electron transfer.",
 "Element properties support technological uses in conductors, semiconductors, catalysts and chemical manufacture.",
 "Explain periodic trends using atomic structure and qualify broad patterns where exceptions or conditions matter."
 ]);
 c.seoTitle="Periodic Table Grade 10 Chemistry: Period 3 Oxides and Reactivity Trends | Kenya";
 c.metaDescription="Kenya Grade 10 Chemistry periodic table notes on Period 3 oxides, Group 1 and Group 17 reactivity, displacement reactions, semiconductor materials and worked exam questions.";
 c.seoKeywords=[...(c.seoKeywords||[]),"Period 3 oxides acidic basic amphoteric","Group 1 reactivity trend","Group 17 halogen displacement","periodic table electron structure","Kenya Grade 10 chemistry periodic table"];
})();