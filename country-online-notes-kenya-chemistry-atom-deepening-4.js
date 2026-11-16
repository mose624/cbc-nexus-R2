/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.2 The Atom: depth pack 4.
   Final supplementary depth extension; append-only and guarded. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-2");
 if(!c||c.__atomDepth4)return;c.__atomDepth4=true;
 c.sections=(c.sections||[]).concat([
 {heading:"Atomic structure and the periodic table: predicting behaviour",paragraphs:[
 "The periodic table is arranged in order of increasing proton number. For neutral atoms, the proton number also gives the electron number. The electron arrangement therefore provides a link between atomic structure and an element's position in the periodic table. In the simplified shell model for the first 20 elements, the number of occupied shells indicates the period, while the number of outer-shell electrons is related to the main-group position.",
 "Elements in the same main group have similar outer-electron arrangements and often show similar chemical properties. For example, lithium, sodium and potassium each have one electron in the outer shell and commonly form ions with a charge of +1. Fluorine and chlorine each have seven outer-shell electrons and commonly form ions with a charge of −1. These patterns are explained by electron arrangement rather than by atomic mass.",
 "Across a period, proton number increases by one from one element to the next. Electrons are added to the same principal shell for the main-group elements, so nuclear attraction and shielding help explain trends in atomic size and ionisation energy. Down a group, an additional occupied shell is added, increasing the distance of outer electrons from the nucleus and increasing shielding.",
 "The periodic table is not merely a list to memorise. It is a compact representation of repeating patterns in atomic structure. When predicting an ion, first identify the element and its electron arrangement; then determine whether electron loss or gain gives a common stable ion for that group. Treat this as a useful introductory prediction, not an absolute rule for every element or compound."
 ],workedExamples:[
 {question:"An element has electron arrangement 2,8,2. Predict its group behaviour and common ion.",solution:"It has two outer-shell electrons and is a Group 2 element in the simplified main-group scheme. It commonly loses two electrons to form a 2+ ion with arrangement 2,8."},
 {question:"Explain why sodium and potassium have similar chemical properties.",solution:"Both are Group 1 elements with one outer-shell electron. They commonly lose that electron to form +1 ions, giving them similar patterns of chemical reactivity."}
 ]},
 {heading:"Quantum numbers and the limits of shell diagrams",paragraphs:[
 "A complete quantum-mechanical description of an electron uses quantum numbers. At introductory level, the principal quantum number n identifies the main energy level and is associated with the general size and energy of an orbital. The subshell type is identified by the angular momentum quantum number, commonly represented by s, p, d or f labels. Each orbital within a subshell can hold up to two electrons.",
 "The shell model groups electrons by principal energy level and is convenient for counting electrons in the first 20 elements. It does not show the different subshell energies or the three-dimensional probability distributions of orbitals. For this reason, a shell diagram should be used when the question asks for a simple arrangement, while an s/p configuration should be used when the question asks for subshell notation.",
 "The Pauli exclusion principle states that no two electrons in an atom can have the same set of four quantum numbers. In an orbital diagram, this means an orbital holds no more than two electrons and the two must have opposite spins. Hund's rule states that electrons occupy equal-energy orbitals singly, with parallel spins, before pairing. The Aufbau principle gives the order in which orbitals are filled in the ground-state configuration.",
 "These rules help construct configurations systematically. They also explain why a configuration is more than a list of numbers: it records how electrons are distributed among allowed states. At this level, focus on applying the rules to the elements and ions specified in the syllabus, rather than memorising advanced exceptions without understanding the basic principles."
 ],workedExamples:[
 {question:"How many orbitals are present in a p subshell, and what is its maximum electron capacity?",solution:"A p subshell has three orbitals. Each orbital can contain two electrons, so the maximum capacity is six electrons."},
 {question:"A learner pairs two electrons in one p orbital while leaving the other two p orbitals empty. Why is this not the ground-state arrangement for a p² configuration?",solution:"The three p orbitals have equal energy. Hund's rule requires electrons to occupy separate orbitals singly with parallel spins before pairing, so p² has one electron in each of two orbitals."}
 ]},
 {heading:"Extended problem-solving clinic: choosing the correct atomic calculation",paragraphs:[
 "Atomic-structure questions often combine several quantities. Read the symbol and identify the information supplied before beginning arithmetic. The atomic number gives the proton count. The mass number gives the total number of protons and neutrons. The ionic charge gives the difference between protons and electrons. Write these relationships down before substituting values.",
 "For an isotope-abundance question, identify every isotope mass and its abundance. Confirm that percentage abundances sum to 100%. Multiply each mass by its percentage, add the products and divide by 100. If abundances are fractions, multiply and add without dividing by 100. If a missing abundance is required, subtract the known percentages from 100% first.",
 "For a half-life question, determine how many half-life intervals have elapsed. Divide the initial quantity by two once for each interval, or use the fraction remaining as (1/2)^n. Check whether the question asks for the amount remaining, the amount decayed or the number of half-lives. These are different quantities.",
 "For an electron configuration question, calculate the electron count before filling orbitals. A neutral atom has electrons equal to its atomic number. A positive ion has fewer electrons; a negative ion has more. After writing the configuration, add the superscripts to verify the total. This final check catches many errors.",
 "In an explanation question, answer the command word. 'State' requires a concise fact; 'calculate' requires a method and answer; 'explain' requires a reason linked to the scientific principle; 'compare' requires a clear similarity or difference. A correct number without working may not earn all calculation marks, while a memorised definition may not answer an explanation question."
 ],workedExamples:[
 {question:"An ion has mass number 40, atomic number 20 and charge 2+. Calculate its protons, neutrons and electrons, then write its shell arrangement.",solution:"Protons = 20. Neutrons = 40−20 = 20. Electrons = 20−2 = 18. The shell arrangement is 2,8,8."},
 {question:"An isotope has mass 10 at 20% abundance and mass 11 at 80% abundance. A learner obtains 10.2. Diagnose the likely error.",solution:"The correct weighted mean is (10×20 + 11×80)/100 = 10.8. The answer 10.2 suggests that the abundances may have been interchanged or the contributions were weighted incorrectly."}
 ]}
 ]);
 c.commonMisconceptions=(c.commonMisconceptions||[]).concat([
 {misconception:"The period number is the number of outer-shell electrons.",correction:"In the simplified shell model, the period relates to the number of occupied shells; main-group position is related to outer-shell electrons."},
 {misconception:"A shell diagram and an orbital diagram show exactly the same information.",correction:"A shell diagram groups electrons by principal energy level; an orbital diagram shows subshell orbitals and electron pairing."},
 {misconception:"A configuration is correct if its superscripts look familiar.",correction:"Always add the superscripts and confirm that the total equals the electron count of the atom or ion."}
 ]);
 c.summary=(c.summary||[]).concat([
 "Electron arrangements connect atomic structure to periodic-table position and recurring chemical properties.",
 "Shell diagrams are useful simplified models; subshell and orbital diagrams provide more detailed descriptions.",
 "Aufbau, Pauli and Hund rules guide the construction of ground-state electron configurations.",
 "Choose the correct calculation method for isotope abundance, ion particle counts and half-life problems, and verify the final result."
 ]);
 c.seoTitle="Atomic Structure and Electron Configuration: Kenya Grade 10 Chemistry Notes";
 c.metaDescription="Comprehensive Grade 10 Chemistry revision on atomic structure, periodic-table links, quantum numbers, electron configurations, isotopes, ions and worked calculations.";
})();