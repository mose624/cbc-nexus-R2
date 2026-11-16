/* CBE Nexus Learning Studio — Ghana SHS Year 1 Chemistry.
   Original supplementary chapter: atomic structure, isotopes and electron arrangement.
   Curriculum alignment: NaCCA SHS Chemistry; check the current school scheme for sequence.
   Append-only: preserves existing country notes and the Kenya reference design. */
(()=> {
 "use strict";
 const level=window.CBE_COUNTRY_NOTES?.Ghana?.levels?.["SHS Year 1"];
 if(!level) return;
 const list=level.Chemistry||(level.Chemistry=[]);
 if(list.some(x=>x.id==="gh-shs1-chem-atomic-structure-studio")) return;
 const svg=(title,labels,caption)=> {
   const safe=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
   const x=[28,196,364], fills=["#dceeff","#fff0c2","#dcf7e5"], strokes=["#3478a8","#bd8700","#348653"];
   const boxes=labels.map((v,i)=>'<rect x="'+x[i]+'" y="38" width="128" height="66" rx="11" fill="'+fills[i]+'" stroke="'+strokes[i]+'" stroke-width="2"/><text x="'+(x[i]+64)+'" y="66" text-anchor="middle" font-size="13" font-weight="700" fill="#17324d">'+safe(v)+'</text>');
   return '<svg viewBox="0 0 520 160" role="img" aria-label="'+safe(title)+'" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="510" height="150" rx="14" fill="#f7fbff" stroke="#b8cce0"/>'+boxes.join("")+'<path d="M156 71 H194 M324 71 H362" stroke="#2563eb" stroke-width="3"/><path d="M185 64 L195 71 L185 78 M353 64 L363 71 L353 78" fill="none" stroke="#2563eb" stroke-width="3"/><text x="260" y="130" text-anchor="middle" font-size="12" fill="#40566d">'+safe(caption)+'</text></svg>';
 };
 const diagrams=[
  ["Atomic model through time",["Dalton","Rutherford","Bohr"],"Models change when new experimental evidence is obtained"],
  ["Parts of an atom",["Protons (+)","Neutrons (0)","Electrons (−)"],"Nucleus contains protons and neutrons; electrons occupy surrounding regions"],
  ["Nuclear notation",["Mass number A","Element symbol X","Atomic number Z"],"A = protons + neutrons; Z = protons"],
  ["Isotopes of carbon",["Carbon-12","Carbon-13","Carbon-14"],"Same proton number; different neutron numbers"],
  ["Formation of a positive ion",["Neutral atom","Loses electron","Positive ion"],"Proton number stays constant when electrons are transferred"],
  ["Formation of a negative ion",["Neutral atom","Gains electron","Negative ion"],"An added electron increases the magnitude of negative charge"],
  ["Electron shells",["First shell","Second shell","Third shell"],"Introductory shell model; electrons fill lower-energy shells first"],
  ["Periodic table connection",["Atomic number","Electron pattern","Group and period"],"Electron arrangement helps explain periodic position and properties"],
  ["Relative particle masses",["Proton ≈ 1","Neutron ≈ 1","Electron ≈ 1/1836"],"Most atomic mass is concentrated in the nucleus"],
  ["Mass number calculation",["Protons = 11","Neutrons = 12","Mass number = 23"],"Mass number is the total number of nucleons"]
 ];
 const questions=[
  ["Define atomic number.","Atomic number is the number of protons in the nucleus of an atom.",2,["Number of protons (2)."]],
  ["Define mass number.","Mass number is the total number of protons and neutrons in the nucleus.",2,["Protons and neutrons (2)."]],
  ["An atom has 17 protons and 18 neutrons. Determine its atomic number and mass number.","Atomic number = 17. Mass number = 17 + 18 = 35.",3,["Atomic number 17 (1); correct addition (1); mass number 35 (1)."]],
  ["Explain why atoms are electrically neutral.","A neutral atom has equal numbers of positively charged protons and negatively charged electrons, so the charges cancel.",2,["Equal proton and electron numbers (1); charges cancel (1)."]],
  ["What are isotopes?","Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.",3,["Same element/proton number (1); different neutron number (1); clear definition (1)."]],
  ["Explain why isotopes of an element have similar chemical properties.","They have the same proton number and, when neutral, the same electron arrangement. Chemical behaviour depends mainly on electrons, especially outer-shell electrons.",3,["Same proton number (1); same electron arrangement (1); chemistry depends on electrons (1)."]],
  ["An aluminium atom has atomic number 13 and mass number 27. Calculate its number of neutrons.","Neutrons = mass number − atomic number = 27 − 13 = 14.",2,["Correct relationship (1); 14 neutrons (1)."]],
  ["Describe the charge and relative location of a proton, neutron and electron.","A proton has charge +1 and is in the nucleus; a neutron has charge 0 and is in the nucleus; an electron has charge −1 and occupies regions around the nucleus.",3,["Each particle's charge and location (1 each)."]],
  ["Explain how a sodium atom forms a sodium ion, Na⁺.","A sodium atom loses one electron. It then has one more proton than electrons and carries a +1 charge.",3,["Loss of one electron (1); proton excess (1); +1 charge (1)."]],
  ["An oxygen atom gains two electrons. State the charge of the ion formed and explain.","The ion has a 2− charge because it has two more electrons than protons.",2,["2− charge (1); explanation (1)."]],
  ["Distinguish an atom from an ion.","An atom is electrically neutral; an ion is a charged particle formed when electrons are lost or gained.",2,["Neutral atom (1); charged ion through electron transfer (1)."]],
  ["Why does the atomic number identify an element?","Each element has a unique number of protons. Changing the proton number changes the identity of the element.",2,["Unique proton number (1); identity changes if proton number changes (1)."]],
  ["A species contains 12 protons, 10 electrons and 12 neutrons. Determine its charge and mass number.","Charge = 2+ because it has two more protons than electrons. Mass number = 12 + 12 = 24.",4,["Charge calculation (2); mass number calculation (2)."]],
  ["State two limitations of the simple shell model of the atom.","It does not show the full three-dimensional probability distribution of electrons and it oversimplifies subshells and orbital energies, especially for larger atoms.",2,["Any two valid limitations (1 each)."]],
  ["A learner says isotopes are different elements because they have different masses. Evaluate the statement.","The statement is incorrect. Isotopes have different neutron numbers and therefore different masses, but the same proton number; they remain atoms of the same element.",3,["Rejects claim (1); same proton number (1); different neutron number/mass (1)."]]
 ];
 const chapter={
  id:"gh-shs1-chem-atomic-structure-studio",
  title:"Atomic structure, isotopes and electron arrangement",
  lessons:"Learning Studio chapter • guided lessons, diagrams and examination practice",
  curriculumContext:"Ghana NaCCA Senior High School Chemistry, Year 1 foundational atomic theory. This is original CBE Nexus supplementary material, not an official NaCCA textbook or a claim to reproduce every school's term-by-term order. Confirm the current syllabus and scheme of learning with the school.",
  curriculumStatus:"supplementary-country-aligned",
  objectives:[
   "Describe the structure of an atom in terms of protons, neutrons and electrons.",
   "Use atomic number and mass number to calculate numbers of subatomic particles.",
   "Explain isotopes and interpret nuclide notation.",
   "Explain the formation of positive and negative ions through electron transfer.",
   "Relate introductory electron arrangement to chemical behaviour and periodic position.",
   "Evaluate the usefulness and limitations of simplified atomic models."
  ],
  sections:[
   {heading:"1. The atom: the building block of matter",paragraphs:[
    "All ordinary matter is made from atoms and the particles or structures formed when atoms combine. An atom is the smallest unit of an element that retains the chemical identity of that element. Atoms are extremely small; a typical atomic diameter is of the order of 10⁻¹⁰ m. Because individual atoms cannot be seen with an ordinary light microscope, scientists infer their structure from carefully designed experiments and measurements.",
    "An atom contains a tiny, dense nucleus surrounded by electrons. The nucleus contains positively charged protons and electrically neutral neutrons. Electrons carry a negative charge and occupy regions around the nucleus. Almost all the mass of an atom is concentrated in the nucleus because protons and neutrons are much more massive than electrons.",
    "The proton number determines the identity of the element. Every carbon atom has six protons; every oxygen atom has eight. If the number of protons changes, the atom becomes a different element. In a neutral atom, the number of electrons equals the number of protons, so the total positive and negative charges balance.",
    "Atomic models are scientific representations, not miniature photographs. Dalton's model treated atoms as indivisible particles; later evidence established internal structure. Rutherford's scattering experiment supported a small, positively charged nucleus. Bohr introduced quantised electron energy levels, while modern quantum theory describes electrons using orbitals and probability distributions. Models are refined when new evidence requires better explanations."
   ],keyTerms:["atom","nucleus","proton","neutron","electron","atomic model"]},
   {heading:"2. Atomic number, mass number and nuclide notation",paragraphs:[
    "The atomic number, represented by Z, is the number of protons in the nucleus. It is the defining number for an element and is shown on the periodic table. In a neutral atom, electron number is also Z. In an ion, the electron number may differ, but the proton number and element identity remain unchanged.",
    "The mass number, represented by A, is the total number of protons and neutrons in the nucleus. Neutrons are sometimes called nucleons together with protons. The number of neutrons is calculated using N = A − Z. For example, sodium-23 has 11 protons and 12 neutrons because 23 − 11 = 12.",
    "Nuclide notation places the mass number at the upper left of the element symbol and the atomic number at the lower left. The notation allows a reader to identify the element and calculate its neutron number. A common written form is carbon-14 or sodium-23; the number after the hyphen is the mass number.",
    "Do not confuse mass number with relative atomic mass. Mass number refers to one particular nuclide and is a whole number. Relative atomic mass is a weighted average that takes account of the naturally occurring isotopes and their abundances; it is often not a whole number."
   ],keyTerms:["atomic number","mass number","nucleon","nuclide","relative atomic mass"]},
   {heading:"3. Isotopes and their applications",paragraphs:[
    "Isotopes are atoms of the same element that contain the same number of protons but different numbers of neutrons. Because they have the same atomic number, they occupy the same position in the periodic table. Neutral isotopes of an element have the same electron arrangement and broadly similar chemical behaviour, although their masses differ.",
    "Carbon-12 and carbon-14 both contain six protons. Carbon-12 has six neutrons, while carbon-14 has eight. The difference in neutron number changes the mass and nuclear stability, not the identity of the element. Some isotopes are stable; others are radioactive and decay over time.",
    "Radioisotopes have useful applications when their radiation and half-life are appropriate and carefully controlled. Medical tracers can help investigate organ function; selected radioisotopes are used in cancer treatment; industrial gauges can monitor thickness; and radiocarbon dating estimates the age of once-living materials. Applications require trained professionals, shielding, monitoring, secure storage and compliance with radiation-safety rules.",
    "An isotope's usefulness depends on its physical and nuclear properties, not simply on its name. A short half-life may be useful for a medical tracer because activity decreases relatively quickly, while a longer-lived source may be required for other applications. Radioactive materials must never be handled or obtained for classroom experiments; use simulations, teacher-provided data or approved sealed demonstration sources."
   ],keyTerms:["isotope","radioisotope","radioactive decay","half-life","tracer"]},
   {heading:"4. Ions and electron transfer",paragraphs:[
    "An ion is an atom or group of atoms with an electrical charge. Ions form when electrons are transferred. The nucleus is not changed during ordinary chemical ion formation: the number of protons remains the same. Losing negatively charged electrons produces a positive ion called a cation; gaining electrons produces a negative ion called an anion.",
    "A sodium atom has 11 protons and 11 electrons. When it loses one electron, it has 11 protons and 10 electrons, giving an overall charge of +1. The symbol is Na⁺. A chlorine atom has 17 protons and 17 electrons. When it gains one electron, it has 17 protons and 18 electrons, giving an overall charge of −1; the symbol is Cl⁻.",
    "The magnitude of an ion's charge is determined by the difference between proton number and electron number. A magnesium atom that loses two electrons forms Mg²⁺. An oxygen atom that gains two electrons forms O²⁻. The charge is written as a superscript, not as a change to the element's atomic number.",
    "Oppositely charged ions attract through electrostatic forces. This attraction is important in ionic bonding and the formation of ionic compounds. The formula of an ionic compound must represent an electrically neutral combination overall. For example, two Na⁺ ions and one O²⁻ ion would not form a neutral formula unit; charge balance must be checked carefully before writing a formula."
   ],keyTerms:["ion","cation","anion","electron transfer","electrostatic attraction"]},
   {heading:"5. Electron arrangement and the periodic table",paragraphs:[
    "Electrons occupy regions of space around the nucleus. In an introductory shell model, electrons are arranged in energy levels or shells. For the first twenty elements, a useful simplified filling pattern is 2, 8, 8, 2. This model is suitable for basic patterns but does not replace the more detailed orbital model used at higher levels.",
    "The first shell holds up to two electrons in the introductory model. The second shell can hold up to eight in the simple school-level representation. For elements beyond the first twenty, electron configurations require a more careful treatment of subshells and energy ordering; learners should follow the notation required by their current syllabus.",
    "For main-group elements, the number of occupied shells is related to the period, while the number of outer-shell electrons helps explain group patterns. Elements in the same group often show similar chemical properties because they have similar outer-shell electron arrangements. This connection helps explain why elements form ions with characteristic charges.",
    "Electron arrangement is not a random list to memorise. It helps explain reactivity, ion formation, bonding and periodic trends. For example, sodium has one outer-shell electron and commonly loses it to form Na⁺; magnesium has two outer-shell electrons and commonly forms Mg²⁺; chlorine has seven outer-shell electrons and commonly gains one to form Cl⁻."
   ],keyTerms:["electron shell","energy level","outer-shell electron","period","group"]},
   {heading:"6. Worked examples and calculation methods",paragraphs:[
    "Worked example 1 — A nuclide has atomic number 16 and mass number 32. Number of protons = Z = 16. For a neutral atom, number of electrons = 16. Number of neutrons = A − Z = 32 − 16 = 16. The atom is sulfur-32.",
    "Worked example 2 — An ion contains 13 protons and 10 electrons. Its charge is 13 − 10 = +3, so it is a 3+ ion. The element is aluminium because its atomic number is 13. Electron transfer changes the charge but does not change the element.",
    "Worked example 3 — Chlorine has isotopes chlorine-35 and chlorine-37. Both have 17 protons. Chlorine-35 has 35 − 17 = 18 neutrons; chlorine-37 has 37 − 17 = 20 neutrons. They are isotopes because they have equal proton numbers but different neutron numbers.",
    "A reliable method is to write the known values first, state the relationship, substitute values with units or particle counts, calculate, and then check whether the answer is physically sensible. Neutron number cannot be negative, and the charge of an ion must match the difference between protons and electrons."
   ],workedExamples:[
    {title:"Finding subatomic particle numbers",question:"An atom of phosphorus has atomic number 15 and mass number 31. Find its numbers of protons, neutrons and electrons.",marks:4,method:"Use Z = protons, A = protons + neutrons, and for a neutral atom electrons = protons.",steps:["Protons = Z = 15","Neutrons = A − Z = 31 − 15 = 16","Electrons = 15 because the atom is neutral"],answer:"15 protons, 16 neutrons and 15 electrons.",explanation:"The element identity is set by its 15 protons; the mass number includes both protons and neutrons."},
    {title:"Calculating ionic charge",question:"An ion has 20 protons and 18 electrons. Determine its charge and identify the element.",marks:3,method:"Net charge in elementary-charge units = number of protons − number of electrons.",steps:["20 − 18 = +2","Atomic number 20 identifies calcium","Ion symbol: Ca²⁺"],answer:"Ca²⁺, with a 2+ charge.",explanation:"Two fewer electrons than protons gives a net positive charge of two."},
    {title:"Comparing isotopes",question:"Compare chlorine-35 and chlorine-37. Chlorine has atomic number 17.",marks:4,method:"For each isotope, neutrons = mass number − atomic number.",steps:["Chlorine-35: 35 − 17 = 18 neutrons","Chlorine-37: 37 − 17 = 20 neutrons","Both have 17 protons","They differ by two neutrons"],answer:"Both are chlorine atoms with 17 protons; they contain 18 and 20 neutrons respectively.",explanation:"Equal proton number means the same element; different neutron numbers make them isotopes."}
   ]},
   {heading:"7. Practical and digital learning activities",paragraphs:[
    "Activity A — Build a physical or digital atom model. Use different colours or shapes for protons, neutrons and electrons. Label the nucleus, show the electron arrangement and include a key. Explain which features are not to scale and why the model is simplified.",
    "Activity B — Isotope card sort. Prepare cards for several nuclides showing element symbol, atomic number and mass number. Learners calculate neutron numbers, group isotopes of the same element and explain their reasoning.",
    "Activity C — Ion formation simulation. Use counters to represent electrons transferred from one atom to another. Record proton and electron numbers before and after transfer, calculate the resulting charge and explain why the nucleus remains unchanged.",
    "Activity D — Evidence and model evaluation. Compare a simple shell diagram with a modern orbital representation supplied by the teacher. Identify what each model explains well and what it leaves out. Do not claim that a two-dimensional diagram is a photograph of an atom."
   ],practicalActivities:[
    {title:"Construct and annotate an atom model",description:"Create a labelled model of carbon-12 and sodium-23. Include a key, particle counts and a short note explaining why the drawing is not to scale."},
    {title:"Isotope comparison table",description:"For three pairs of isotopes, record atomic number, mass number, proton number, neutron number and one similarity or difference."},
    {title:"Ion charge investigation using counters",description:"Model electron loss and gain with counters. For each example, record proton and electron numbers and calculate the net charge. Use only paper counters or a digital simulation."}
   ]},
   {heading:"8. Common misconceptions and revision checkpoints",paragraphs:[
    "Misconception: electrons are inside the nucleus. Correction: protons and neutrons are in the nucleus; electrons occupy regions around it.",
    "Misconception: changing the number of neutrons changes the element. Correction: changing neutron number produces a different isotope; changing proton number changes the element.",
    "Misconception: a positive ion has gained protons. Correction: ordinary ions form by electron transfer. A positive ion has lost electrons.",
    "Misconception: mass number and relative atomic mass mean the same thing. Correction: mass number applies to one nuclide; relative atomic mass is a weighted average of isotopic masses.",
    "Misconception: electron shell diagrams show exact electron paths. Correction: they are simplified teaching models; modern quantum theory describes electron probability distributions."
   ],commonMisconceptions:[
    {misconception:"Electrons are located in the nucleus.",correction:"The nucleus contains protons and neutrons. Electrons occupy regions around the nucleus."},
    {misconception:"An isotope is a different element.",correction:"Isotopes have the same proton number and different neutron numbers, so they remain the same element."},
    {misconception:"A positive ion is formed by gaining protons.",correction:"A positive ion forms when electrons are lost; the proton number is unchanged."},
    {misconception:"Mass number is the same as relative atomic mass.",correction:"Mass number is for one nuclide; relative atomic mass is a weighted average of isotopic masses."},
    {misconception:"Shell diagrams are exact pictures of electron orbits.",correction:"Shell diagrams are simplified models; modern atomic theory uses orbitals and probability distributions."}
   ]},
   {heading:"9. Examination practice and marking guidance",paragraphs:[
    "Attempt the questions without looking at the notes. Show every calculation step, use correct particle terminology and distinguish the nucleus from the electron regions. For explanation questions, make the scientific relationship explicit rather than listing disconnected facts.",
    "For numerical questions, award marks for the correct relationship, substitution and final answer. For comparison questions, state both sides of the comparison. For evaluation questions, make a clear judgement and support it with accurate scientific evidence."
   ]}
  ],
  diagramGallery:diagrams.map(([title,labels,caption])=>({title,svg:svg(title,labels,caption),explanation:caption+"."})),
  realLifeApplications:[
   "Medical imaging and nuclear medicine use carefully selected isotopes under strict professional radiation-safety controls.",
   "Radiocarbon dating uses the changing abundance of carbon-14 to estimate the age of suitable once-living materials.",
   "Electron transfer helps explain the formation of ions in salts used in food, agriculture and industrial processes.",
   "Knowledge of atomic number and electron arrangement supports understanding of materials used in batteries, electronics and chemical manufacturing.",
   "Isotope analysis can help scientists investigate environmental processes, water sources and geological history."
  ],
  summary:[
   "Atoms contain a nucleus of protons and neutrons with electrons occupying regions around it.",
   "Atomic number Z equals proton number; mass number A equals protons plus neutrons.",
   "Neutron number is A − Z; a neutral atom has equal proton and electron numbers.",
   "Isotopes have the same proton number but different neutron numbers.",
   "Ions form when electrons are lost or gained; the proton number does not change.",
   "Electron arrangement helps explain periodic patterns and chemical behaviour."
  ],
  questions:questions.map(([q,a,marks,markingPoints])=>({q,a,marks,category:"Atomic structure and chemical reasoning",markingPoints,explanation:a})),
  seo:{
   title:"Ghana SHS Chemistry Notes: Atomic Structure, Isotopes and Electron Arrangement",
   description:"Study Ghana SHS Year 1 Chemistry with clear notes on protons, neutrons, electrons, atomic number, mass number, isotopes, ions and electron arrangement, plus worked examples and examination questions.",
   keywords:["Ghana SHS Chemistry notes","SHS 1 Chemistry atomic structure","atomic number and mass number","isotopes explained","electron arrangement","formation of ions","NaCCA Chemistry learning resources","Ghana senior high school Chemistry revision"],
   faq:[
    {question:"What is the atomic number of an element?",answer:"The atomic number is the number of protons in the nucleus and identifies the element."},
    {question:"How do you calculate the number of neutrons?",answer:"Subtract the atomic number from the mass number: neutrons = A − Z."},
    {question:"What are isotopes?",answer:"Isotopes are atoms of the same element with equal proton numbers but different neutron numbers."},
    {question:"How is a positive ion formed?",answer:"A positive ion forms when an atom loses one or more electrons."}
   ]
  }
 };
 list.unshift(chapter);
})();
