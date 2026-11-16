/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.2 The Atom: depth pack 2.
   Extends explanations, quantitative practice and scientific models without replacing existing content. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-2");if(!c||c.__atomDepth2)return;c.__atomDepth2=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Atomic number, mass number and isotope notation",paragraphs:[
 "An element is defined by its proton number. Every atom with six protons is carbon, whether it has six, seven or eight neutrons. Changing the proton number changes the identity of the element; changing the neutron number produces another isotope of the same element. Changing the number of electrons produces an ion but does not change the element's identity.",
 "Nuclide notation places the mass number at the upper left of the chemical symbol and the atomic number at the lower left. For example, carbon-14 is written with A = 14 and Z = 6. It therefore contains six protons and eight neutrons. If it is neutral, it has six electrons. A 2+ ion of magnesium-24 has 12 protons, 12 neutrons and 10 electrons.",
 "The mass number is always a whole number for a particular nuclide because it counts nucleons. Relative atomic mass is usually not a whole number because it is a weighted mean of naturally occurring isotopes. Do not confuse the two quantities."
 ],workedExamples:[
 {question:"An ion is represented by ⁵⁶₂₆Fe³⁺. Determine its protons, neutrons and electrons.",solution:"Protons = Z = 26. Neutrons = A − Z = 56 − 26 = 30. A 3+ ion has lost three electrons, so electrons = 26 − 3 = 23."},
 {question:"An atom contains 17 protons, 18 neutrons and 18 electrons. Identify its element and charge.",solution:"Atomic number 17 identifies chlorine. It has one more electron than protons, so its charge is −1; it is a chloride ion."}
 ]},
 {heading:"Relative atomic mass from isotopic abundance",paragraphs:[
 "The relative atomic mass of an element is the weighted average of the masses of its naturally occurring isotopes, relative to the defined carbon-12 scale. An isotope that is more abundant contributes more strongly to the average than a rare isotope. Abundances may be given as percentages or fractions; the total must be 100% or 1 respectively.",
 "For two isotopes, if isotope masses are m₁ and m₂ and their percentage abundances are p₁ and p₂, then Ar = (m₁p₁ + m₂p₂) ÷ 100. For more isotopes, include every isotope in the sum. Check that the abundances add to 100% before calculating.",
 "A calculated relative atomic mass should lie between the lightest and heaviest isotope masses. If the result lies outside that interval, check the arithmetic, abundance total and units. A result closer to one isotope's mass indicates that isotope is more abundant."
 ],workedExamples:[
 {question:"An element has isotopes of mass 10 (20.0%) and mass 11 (80.0%). Calculate its relative atomic mass.",solution:"Ar = (10 × 20.0 + 11 × 80.0) ÷ 100 = (200 + 880) ÷ 100 = 10.8."},
 {question:"An element has isotopes ⁶³X (69%) and ⁶⁵X (31%). Calculate its relative atomic mass to two decimal places.",solution:"Ar = (63 × 69 + 65 × 31) ÷ 100 = (4347 + 2015) ÷ 100 = 63.62."}
 ]},
 {heading:"Ions and electron arrangements",paragraphs:[
 "A neutral atom has equal numbers of protons and electrons. A positive ion forms when electrons are removed; a negative ion forms when electrons are gained. The nucleus is not changed during ordinary ion formation. Consequently, the proton number remains constant and the electron number changes by the magnitude of the charge.",
 "For main-group elements, atoms often form ions with a more stable outer-shell arrangement. Sodium (2,8,1) loses one electron to form Na⁺ (2,8); magnesium (2,8,2) loses two to form Mg²⁺ (2,8); chlorine (2,8,7) gains one to form Cl⁻ (2,8,8); oxygen (2,6) gains two to form O²⁻ (2,8). This is a useful introductory model, not a claim that every atom always forms a simple ion.",
 "When writing electron configurations for ions, first count the electrons from the atomic number and charge. Then arrange the electrons in the appropriate orbitals. For common main-group ions, it is often easiest to begin with the neutral atom's configuration and remove or add electrons from the outermost occupied shell."
 ],workedExamples:[
 {question:"Write the shell arrangement of Al³⁺, where aluminium has atomic number 13.",solution:"A neutral aluminium atom has 13 electrons: 2,8,3. It loses three electrons to form Al³⁺, leaving 10 electrons: 2,8."},
 {question:"How many electrons are present in S²⁻ if sulfur has atomic number 16?",solution:"A neutral sulfur atom has 16 electrons. It gains two electrons, so S²⁻ has 18 electrons."}
 ]},
 {heading:"Orbitals as probability models",paragraphs:[
 "An orbital is a mathematical description of a region in which an electron is likely to be found. It is not a circular track or a tiny planetary path. The familiar spherical s and dumbbell-shaped p diagrams represent probability distributions. The boundary surface in a textbook drawing is a chosen representation, not a hard wall around the electron.",
 "The three p orbitals in a subshell have the same energy in an isolated atom and are often labelled pₓ, pᵧ and p_z to show their different orientations. Each orbital can hold two electrons with opposite spin. The s subshell has one orbital, the p subshell has three, and these give capacities of two and six electrons respectively.",
 "For the first 20 elements, the KICD core electron configuration work uses s and p notation and the filling sequence 1s, 2s, 2p, 3s, 3p, 4s. The d and f subshells can be introduced as enrichment, but should not obscure the required first-20-element outcomes."
 ],workedExamples:[
 {question:"Explain why a p subshell can hold six electrons.",solution:"A p subshell contains three orbitals. Each orbital holds a maximum of two electrons with opposite spins, so the total capacity is 3 × 2 = 6 electrons."}
 ]},
 {heading:"Checking configurations and diagnosing common errors",paragraphs:[
 "A reliable configuration check has three steps. First, add all superscripts and confirm that the total equals the electron number. Second, check that no orbital or subshell exceeds its capacity. Third, check that the filling order follows the energy sequence required for the element and level of study.",
 "For a neutral atom, the electron total must equal the atomic number. For a cation, subtract the positive charge from the atomic number; for an anion, add the magnitude of the negative charge. If a configuration has the wrong total, the error may be a missing subshell, an incorrect superscript or a failure to account for ionic charge.",
 "Orbital box diagrams make Hund's rule visible. In a set of three equal-energy p orbitals, place one electron in each box with parallel spin before pairing. Do not pair electrons in one p orbital while leaving another equal-energy p orbital empty in the ground-state arrangement."
 ],workedExamples:[
 {question:"A learner writes oxygen as 1s² 2s² 2p⁶. Identify the error and correct it.",solution:"The configuration contains 10 electrons, but oxygen has atomic number 8. The correct configuration is 1s² 2s² 2p⁴."}
 ]}
 ]);
 c.realLifeApplications=(c.realLifeApplications||[]).concat([
 "Isotope measurements are used in geology, archaeology, environmental tracing and medical diagnosis; the interpretation depends on the isotope and its half-life or chemical behaviour.",
 "Mass spectrometry separates ions according to mass-to-charge ratio and helps identify isotopes and molecular fragments.",
 "Understanding ion formation helps explain electrolytes in body fluids, battery chemistry, electrolysis and the behaviour of salts in water.",
 "Electron arrangements help predict element reactivity, common ion charges and patterns in the periodic table."
 ]);
 c.commonMisconceptions=(c.commonMisconceptions||[]).concat([
 {misconception:"Isotopes of an element have different proton numbers.",correction:"Isotopes have the same proton number but different neutron numbers."},
 {misconception:"A positive ion is formed by gaining protons.",correction:"Ordinary positive-ion formation involves loss of electrons; the nucleus and proton number remain unchanged."},
 {misconception:"Mass number and relative atomic mass are interchangeable.",correction:"Mass number counts nucleons in one nuclide; relative atomic mass is an abundance-weighted average for an element."},
 {misconception:"Electrons travel in fixed circular paths called orbitals.",correction:"Orbitals are probability descriptions of where electrons are likely to be found, not fixed tracks."},
 {misconception:"A p subshell contains six orbitals.",correction:"A p subshell contains three orbitals and can hold six electrons in total."}
 ]);
 const qs=[
 ["An ion is ³⁵₁₇Cl⁻. Calculate its numbers of protons, neutrons and electrons.","Protons = 17; neutrons = 35 − 17 = 18; electrons = 18 because the ion has gained one electron.",3],
 ["An ion contains 12 protons and 10 electrons. State its charge and identify the element.","It has charge 2+ because it has two fewer electrons than protons. Atomic number 12 is magnesium, so the ion is Mg²⁺.",3],
 ["Explain why isotopes of the same element have similar chemical properties.","They have the same proton number and, when neutral, the same electron arrangement, especially the same valence-electron arrangement.",2],
 ["An element has isotopes ⁶⁰X (25%) and ⁶²X (75%). Calculate its relative atomic mass.","Ar = (60 × 25 + 62 × 75) ÷ 100 = 61.5.",2],
 ["A learner calculates Ar = 64 for isotopes of mass 63 and 65. Explain why the answer is impossible.","A weighted average must lie between the isotope masses 63 and 65; 64 is possible only for equal abundance. If given unequal abundances, check the calculation and abundance data.",3],
 ["Write the electron configuration of calcium (Z=20) using s and p notation.","1s² 2s² 2p⁶ 3s² 3p⁶ 4s².",2],
 ["Explain why a neutral atom of atomic number 9 has 9 electrons but a fluoride ion has 10.","A neutral atom has equal protons and electrons. Fluorine gains one electron to form F⁻, so it has 10 electrons while retaining 9 protons.",3],
 ["State the maximum number of electrons in the 2p subshell and explain.","Six electrons: the p subshell has three orbitals and each orbital holds two electrons.",2],
 ["Use the Aufbau, Pauli and Hund rules to explain the arrangement of 2p⁴.","Aufbau fills 2s before 2p; Pauli allows at most two opposite-spin electrons per orbital; Hund places one electron in each of the three p orbitals before the fourth pairs in one orbital.",4],
 ["A learner gives sodium's configuration as 1s² 2s² 2p⁶ 3s². Identify and correct the error.","That configuration contains 12 electrons and represents magnesium. Sodium has 11 electrons: 1s² 2s² 2p⁶ 3s¹.",2],
 ["Explain why forming Mg²⁺ does not change the identity of magnesium.","The nucleus still contains 12 protons, so the atomic number and element identity remain magnesium; only the electron number changes.",2],
 ["Calculate the number of neutrons in ²⁷₁₃Al and the electrons in Al³⁺.","Neutrons = 27 − 13 = 14. Al³⁺ has 13 − 3 = 10 electrons.",3],
 ["An element has three isotopes: masses 24, 25 and 26 with abundances 79%, 10% and 11%. Calculate Ar.","Ar = (24×79 + 25×10 + 26×11) ÷ 100 = 24.32.",3],
 ["Explain why orbital diagrams are models rather than photographs of electrons.","They represent probability distributions and energy states; electrons do not have precisely defined classical paths and the diagram is a simplified visual model.",3],
 ["A student writes 2p⁷ in an electron configuration. Explain the error.","A p subshell has three orbitals with two electrons each, so its maximum capacity is six; 2p⁷ is impossible.",2]
 ];
 c.questions=(c.questions||[]).concat(qs.map(q=>({q:q[0],a:q[1],category:"Learning Studio • atomic structure",marks:q[2],markingPoints:q[1]})));
 c.summary=(c.summary||[]).concat([
 "Proton number defines an element; neutron number distinguishes its isotopes; electron number determines the charge of an ion.",
 "Mass number is protons plus neutrons; relative atomic mass is a weighted mean of isotope masses.",
 "Calculate ion electrons by subtracting a positive charge or adding the magnitude of a negative charge to the atomic number.",
 "Orbitals are probability models; s has one orbital and p has three, giving capacities of two and six electrons.",
 "For the first 20 elements, use the s/p filling sequence required by the curriculum and check the total electron count.",
 "Use Aufbau, Pauli and Hund rules to construct valid configurations and orbital box diagrams."
 ]);
 c.seoTitle="The Atom Grade 10 Chemistry Kenya | Isotopes, Ions and Electron Configuration";
 c.metaDescription="Kenya Grade 10 Chemistry atom notes: proton number, mass number, isotopes, relative atomic mass calculations, ions, orbitals and electron configurations with worked examples and exam questions.";
 c.seoKeywords=["Kenya Grade 10 Chemistry atom","isotopes relative atomic mass","atomic structure notes","electron configuration first 20 elements","ions and electron arrangement","KICD Chemistry"];
})();