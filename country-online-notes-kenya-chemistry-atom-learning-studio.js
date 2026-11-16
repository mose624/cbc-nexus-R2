/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.2 The Atom.
   Append-only extension; preserves the KICD chapter and existing content. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-2"); if(!c||c.__atomStudioExtra)return;c.__atomStudioExtra=true;
 const items=[
 ["Isotopes and their abundance","Isotopes are atoms of the same element with equal proton number but different neutron numbers. Relative atomic mass is a weighted mean based on the natural abundance of isotopes."],
 ["Formation of positive and negative ions","A positive ion forms when an atom loses electrons; a negative ion forms when it gains electrons. The nucleus and proton number remain unchanged during ordinary ion formation."],
 ["Electron shells and energy levels","Electrons occupy quantised energy levels. In the simplified shell model, the first shell holds up to two electrons and the second up to eight; shell diagrams are useful introductory representations."],
 ["From shells to orbitals","A shell contains subshells and orbitals. An orbital is a region of high probability of finding an electron, not a circular track. Each orbital accommodates at most two electrons with opposite spins."],
 ["Atomic models and experimental evidence","Scientific atomic models changed as evidence improved: Dalton's indivisible atoms, Thomson's electrons, Rutherford's small dense nucleus, Bohr's quantised energy levels and the modern quantum model."]
 ];
 const fills=["#e2f0ff","#e3f5e4","#fff0d8","#f2e5ff","#ffe6e1"];
 const svgs=[
 '<g><circle cx="250" cy="135" r="62" fill="#dceeff" stroke="#3978a8" stroke-width="2"/><circle cx="250" cy="135" r="18" fill="#ed9b8b"/><circle cx="250" cy="135" r="8" fill="#5c8fc5"/><ellipse cx="250" cy="135" rx="105" ry="48" fill="none" stroke="#4b88b5" stroke-width="2"/><circle cx="355" cy="135" r="8" fill="#3978a8"/><circle cx="145" cy="135" r="8" fill="#3978a8"/><text x="390" y="105" font-size="14" fill="#17365d">Isotopes: same protons</text><text x="390" y="130" font-size="14" fill="#17365d">different neutrons</text><text x="390" y="170" font-size="13" fill="#52677c">Example: carbon-12 / carbon-14</text></g>',
 '<g><circle cx="175" cy="130" r="52" fill="#e4efff" stroke="#3978a8" stroke-width="2"/><circle cx="175" cy="130" r="15" fill="#d98778"/><text x="175" y="135" text-anchor="middle" font-size="12" fill="white">11p</text><circle cx="175" cy="65" r="7" fill="#3978a8"/><circle cx="175" cy="195" r="7" fill="#3978a8"/><path d="M250 130h80" stroke="#52677c" stroke-width="2"/><path d="M318 123l12 7-12 7" fill="none" stroke="#52677c" stroke-width="2"/><text x="370" y="115" font-size="16" fill="#17365d">Na → Na⁺ + e⁻</text><text x="370" y="145" font-size="13" fill="#52677c">Loss of one electron</text><text x="370" y="175" font-size="13" fill="#52677c">Proton number stays 11</text></g>',
 '<g><rect x="90" y="75" width="150" height="115" rx="12" fill="#dceeff" stroke="#3978a8" stroke-width="2"/><rect x="280" y="75" width="150" height="115" rx="12" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><rect x="470" y="75" width="80" height="115" rx="12" fill="#fff0d8" stroke="#b88620" stroke-width="2"/><g fill="#3978a8"><circle cx="165" cy="105" r="7"/><circle cx="165" cy="135" r="7"/><circle cx="165" cy="165" r="7"/></g><g fill="#39834a"><circle cx="355" cy="105" r="7"/><circle cx="355" cy="135" r="7"/><circle cx="355" cy="165" r="7"/></g><text x="165" y="215" text-anchor="middle" font-size="13" fill="#17365d">Shell 1: max 2</text><text x="355" y="215" text-anchor="middle" font-size="13" fill="#17365d">Shell 2: max 8</text><text x="510" y="215" text-anchor="middle" font-size="13" fill="#17365d">Shell 3</text></g>',
 '<g><circle cx="170" cy="135" r="65" fill="none" stroke="#3978a8" stroke-width="2"/><circle cx="170" cy="135" r="35" fill="none" stroke="#39834a" stroke-width="2"/><circle cx="170" cy="135" r="10" fill="#d98778"/><ellipse cx="430" cy="135" rx="95" ry="55" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><ellipse cx="430" cy="135" rx="28" ry="18" fill="#d98778"/><text x="170" y="225" text-anchor="middle" font-size="13" fill="#17365d">Shell model</text><text x="430" y="225" text-anchor="middle" font-size="13" fill="#17365d">Orbital probability region</text><text x="320" y="65" text-anchor="middle" font-size="13" fill="#52677c">An orbital is not a fixed planetary path</text></g>',
 '<g><rect x="55" y="75" width="115" height="105" rx="12" fill="#e2f0ff" stroke="#3978a8" stroke-width="2"/><rect x="195" y="75" width="115" height="105" rx="12" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><rect x="335" y="75" width="115" height="105" rx="12" fill="#fff0d8" stroke="#b88620" stroke-width="2"/><rect x="475" y="75" width="115" height="105" rx="12" fill="#f2e5ff" stroke="#8c65a7" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="#17365d"><text x="112" y="112">Dalton</text><text x="112" y="140">solid atom</text><text x="252" y="112">Thomson</text><text x="252" y="140">electrons</text><text x="392" y="112">Rutherford</text><text x="392" y="140">nucleus</text><text x="532" y="112">Bohr</text><text x="532" y="140">energy levels</text></g><path d="M170 128h25m-6-6 6 6-6 6M310 128h25m-6-6 6 6-6 6M450 128h25m-6-6 6 6-6 6" stroke="#52677c" stroke-width="2" fill="none"/></g>'
 ];
 c.diagramGallery=(c.diagramGallery||[]).concat(items.map((x,i)=>({title:(i+6)+". "+x[0],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" role="img" aria-label="'+x[0]+'"><rect x="8" y="8" width="624" height="244" rx="16" fill="'+fills[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="42" text-anchor="middle" font-size="19" font-weight="bold" fill="#17365d">'+x[0]+'</text>'+svgs[i]+'</svg>',explanation:x[1]})));
 c.realLifeApplications=[
 "Isotope ratios are used in geological dating, environmental tracing and medical diagnosis or treatment; the application depends on the isotope's nuclear properties and safety.",
 "Understanding ions explains why table salt forms an ionic lattice, why electrolyte solutions conduct electricity and how batteries transfer charge.",
 "Electron arrangement helps chemists predict valency, ion formation, bonding patterns and periodic trends.",
 "Atomic models underpin spectroscopy, materials science, semiconductor technology and the interpretation of chemical reactions.",
 "Radioisotopes are used in carefully controlled medical imaging and cancer treatment; exposure, half-life and safe handling must be considered."
 ];
 c.practicalActivities=[
 {title:"Build isotope models",steps:["Use coloured counters to represent protons, neutrons and electrons.","Construct two isotopes of one element with equal proton numbers and different neutron numbers.","Write nuclide symbols and calculate the neutron number from mass number minus atomic number.","Explain why the isotopes remain atoms of the same element."]},
 {title:"Model ion formation",steps:["Represent a neutral atom using counters for positive protons and negative electrons.","Remove or add electron counters to model a cation or anion.","Calculate the net charge from proton and electron numbers.","Explain why changing electrons does not change the element's atomic number."]},
 {title:"Interpret isotope abundance data",steps:["Use teacher-provided isotope masses and percentage abundances.","Convert percentages to fractions and calculate the weighted mean relative atomic mass.","Check that the answer lies between the isotope masses.","Explain why the result is usually not a whole number."]}
 ];
 c.commonMisconceptions=[
 {misconception:"Isotopes are different elements because they have different mass numbers.",correction:"Isotopes have the same proton number and therefore are atoms of the same element; their neutron numbers differ."},
 {misconception:"An ion forms when an atom gains or loses protons.",correction:"Ordinary ions form by electron transfer. Changing proton number changes the element itself."},
 {misconception:"Electrons travel around the nucleus on fixed circular tracks.",correction:"The modern model describes orbitals as probability distributions; the Bohr model is a simplified historical representation."},
 {misconception:"The mass number is the same as relative atomic mass.",correction:"Mass number counts protons and neutrons in one isotope; relative atomic mass is a weighted average of isotopic masses."},
 {misconception:"A neutral atom contains equal numbers of protons and neutrons.",correction:"A neutral atom has equal numbers of protons and electrons. Neutron number may be different."}
 ];
 const qs=[
 ["An atom has atomic number 17 and mass number 37. Determine its numbers of protons, neutrons and electrons when neutral.","Protons = 17; neutrons = 37 − 17 = 20; electrons = 17.",3],
 ["Explain why carbon-12 and carbon-14 are isotopes of the same element.","Both have six protons, so both are carbon; their neutron numbers are six and eight respectively.",3],
 ["A magnesium atom forms Mg²⁺. Explain what changes and what remains unchanged.","It loses two electrons; proton number and nuclear composition remain unchanged, giving a net charge of +2.",3],
 ["An ion contains 13 protons and 10 electrons. Identify its charge and explain.","Net charge is +3 because there are three more protons than electrons; it is a 3+ ion of aluminium.",3],
 ["Calculate the number of neutrons in ²³₁₁Na and state why the atomic number is written below the symbol.","Neutrons = 23 − 11 = 12. Atomic number identifies the proton number and hence the element.",3],
 ["Explain why the relative atomic mass of chlorine is close to 35.5 rather than a whole number.","Natural chlorine contains isotopes of mass 35 and 37 in unequal abundances; relative atomic mass is their abundance-weighted mean.",3],
 ["A sample contains 75% isotope X-10 and 25% isotope X-11. Calculate its relative atomic mass.","(0.75 × 10) + (0.25 × 11) = 10.25.",2],
 ["Compare the nuclear model proposed by Rutherford with the earlier plum-pudding model.","Rutherford's model has a small dense positive nucleus with electrons outside and mostly empty space; plum-pudding spread positive charge through the atom with embedded electrons.",4],
 ["Describe how alpha-particle scattering evidence led to the nuclear model.","Most particles passed through, showing atoms are mostly empty space; a few deflected sharply or bounced back, indicating a tiny dense positively charged nucleus.",4],
 ["Explain why the electron arrangement of an atom is important in predicting chemical behaviour.","Outer-shell electrons are involved in bonding and ion formation; their arrangement helps explain valency and similarities in chemical properties.",3],
 ["Write the electron arrangement of a neutral atom with atomic number 12 using shells and identify its outer-shell electron count.","2,8,2; it has two outer-shell electrons.",2],
 ["Distinguish between an orbital and an electron shell.","A shell is a principal energy level; it contains subshells and orbitals. An orbital is a probability region that holds up to two electrons.",3],
 ["Explain why changing the number of neutrons usually does not change the chemical identity of an atom.","Chemical identity is determined by proton number and chemical behaviour is mainly governed by electron arrangement; changing neutrons changes isotope mass, not element identity.",3],
 ["A learner says a neutral atom has no charged particles. Evaluate the statement.","Incorrect: it contains positively charged protons and negatively charged electrons in equal numbers, so total charge is zero; neutrons are uncharged.",3],
 ["Discuss one benefit and one risk of using radioisotopes in medicine.","Benefit: imaging or targeted treatment; risk: ionising radiation can damage healthy tissue. Safe selection, dose control, shielding and trained handling are needed.",4]
 ];
 c.questions=(c.questions||[]).concat(qs.map(x=>({q:x[0],a:x[1],category:"Learning Studio • atomic structure",marks:x[2],markingPoints:x[1]})));
 c.summary=(c.summary||[]).concat([
 "The atomic number equals the number of protons and determines the identity of an element.",
 "For a neutral atom, electron number equals proton number; ion formation changes electrons, not protons.",
 "Mass number is the total number of protons and neutrons in one isotope; neutron number is A − Z.",
 "Isotopes have the same proton number but different neutron numbers; relative atomic mass is an abundance-weighted mean.",
 "Electron arrangement explains many patterns in bonding, ion formation and periodic behaviour.",
 "Atomic models develop when new experimental evidence requires better explanations."
 ]);
 c.paperDuration="60 minutes";
 c.seoTitle="The Atom Grade 10 Chemistry Kenya | Isotopes, Ions and Electron Configuration";
 c.metaDescription="Kenya Grade 10 Chemistry The Atom notes with isotope calculations, ion formation, electron shells and orbitals, atomic models, 10 labelled diagrams, practical activities and exam questions.";
 c.seoKeywords=["The Atom Grade 10 Kenya","atomic structure notes Kenya","isotopes calculations","relative atomic mass","ions and electron arrangement","Rutherford experiment","KICD Chemistry"];
})();