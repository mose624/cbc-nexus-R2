/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.3 The Periodic Table.
   Append-only enrichment to complete visual, practical and assessment components. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-3");if(!c||c.__periodicStudioExtra)return;c.__periodicStudioExtra=true;
 const items=[
 ["Groups and valence electrons","Elements in a group have related outer-electron arrangements and often show similar chemical properties. For main-group elements, group position helps predict the number of valence electrons."],
 ["Periods and occupied shells","A period is a horizontal row. For representative elements, the period number indicates the highest principal energy level occupied by electrons in the ground state."],
 ["Metals, non-metals and metalloids","Metals are generally good conductors and tend to form positive ions; non-metals are often poor conductors and may form negative ions or covalent bonds. Metalloids show intermediate properties."],
 ["Periodic trends across a period","Across a period, nuclear charge generally increases while electrons are added to the same main energy level; atomic radius often decreases and attraction for bonding electrons generally increases."],
 ["Reactivity and periodic position","Reactivity depends on electron loss, gain or sharing. Group 1 metals tend to become more reactive down the group, while halogen reactivity generally decreases down Group 17."]
 ];
 const bg=["#e2f0ff","#e3f5e4","#fff0d8","#f2e5ff","#ffe6e1"];
 const graphics=[
 '<g><g fill="#dceeff" stroke="#3978a8"><rect x="95" y="75" width="95" height="115" rx="8"/><rect x="235" y="75" width="95" height="115" rx="8"/><rect x="375" y="75" width="95" height="115" rx="8"/></g><g fill="#17365d" font-size="15" text-anchor="middle"><text x="142" y="108">Group 1</text><text x="282" y="108">Group 2</text><text x="422" y="108">Group 17</text><text x="142" y="145">1 outer e⁻</text><text x="282" y="145">2 outer e⁻</text><text x="422" y="145">7 outer e⁻</text><text x="142" y="170">Li, Na, K</text><text x="282" y="170">Be, Mg, Ca</text><text x="422" y="170">F, Cl, Br</text></g></g>',
 '<g><g fill="#e3f5e4" stroke="#39834a"><rect x="85" y="70" width="470" height="38" rx="7"/><rect x="85" y="120" width="470" height="38" rx="7"/><rect x="85" y="170" width="470" height="38" rx="7"/></g><g font-size="14" fill="#17365d"><text x="110" y="95">Period 2: Li to Ne</text><text x="110" y="145">Period 3: Na to Ar</text><text x="110" y="195">Period 4: K to Kr</text></g><path d="M565 70v138m-6-8 6 8 6-8" stroke="#52677c" stroke-width="2" fill="none"/></g>',
 '<g><rect x="55" y="75" width="155" height="115" rx="12" fill="#cce9ff" stroke="#3978a8" stroke-width="2"/><rect x="240" y="75" width="155" height="115" rx="12" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><rect x="425" y="75" width="155" height="115" rx="12" fill="#fff0d8" stroke="#b88620" stroke-width="2"/><g font-size="15" text-anchor="middle" fill="#17365d"><text x="132" y="115">Metals</text><text x="132" y="145">left and centre</text><text x="317" y="115">Metalloids</text><text x="317" y="145">staircase region</text><text x="502" y="115">Non-metals</text><text x="502" y="145">upper right</text></g></g>',
 '<g><path d="M100 185L520 75" stroke="#3978a8" stroke-width="5"/><g fill="#dceeff" stroke="#3978a8"><circle cx="130" cy="177" r="12"/><circle cx="250" cy="145" r="12"/><circle cx="370" cy="113" r="12"/><circle cx="500" cy="80" r="12"/></g><g font-size="13" fill="#17365d"><text x="95" y="215">Larger radius</text><text x="420" y="55">Smaller radius</text><text x="250" y="245" text-anchor="middle">General trend across a period (simplified)</text></g></g>',
 '<g><rect x="70" y="78" width="210" height="115" rx="12" fill="#ffe6e1" stroke="#bb6658" stroke-width="2"/><rect x="360" y="78" width="210" height="115" rx="12" fill="#e2f0ff" stroke="#3978a8" stroke-width="2"/><g font-size="15" text-anchor="middle" fill="#17365d"><text x="175" y="110">Group 1 metals</text><text x="175" y="140">lose 1 electron</text><text x="175" y="165">form M⁺ ions</text><text x="465" y="110">Halogens</text><text x="465" y="140">gain 1 electron</text><text x="465" y="165">form X⁻ ions</text></g><path d="M280 135h80m-8-7 8 7-8 7" stroke="#52677c" stroke-width="2" fill="none"/></g>'
 ];
 c.diagramGallery=(c.diagramGallery||[]).concat(items.map((x,i)=>({title:(i+6)+". "+x[0],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" role="img" aria-label="'+x[0]+'"><rect x="8" y="8" width="624" height="244" rx="16" fill="'+bg[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="42" text-anchor="middle" font-size="20" font-weight="bold" fill="#17365d">'+x[0]+'</text>'+graphics[i]+'</svg>',explanation:x[1]})));
 c.realLifeApplications=[
 "Periodic position helps materials scientists choose metals and semiconductors for electrical wiring, electronic devices and structural applications.",
 "Group 1 metal reactivity explains why sodium and potassium are stored away from water and why laboratory demonstrations require strict controls.",
 "Halogen chemistry supports water disinfection, manufacture of polymers and production of useful salts, but concentration and toxicity must be managed.",
 "Periodic trends help predict the ions and compounds formed in fertilisers, batteries, medicines and industrial catalysts.",
 "Understanding element properties supports safer substitution of hazardous elements in products and manufacturing."
 ];
 c.practicalActivities=[
 {title:"Classify element property cards",steps:["Use teacher-provided cards for selected metals, non-metals and metalloids.","Sort them by conductivity, appearance, malleability and typical ion formation using supplied data.","Place each element in its approximate periodic-table region.","Explain why classification is based on a pattern of properties rather than one feature alone."]},
 {title:"Investigate a periodic trend using data",steps:["Use a data table of atomic radii or first ionisation energies for a selected period.","Plot the property against atomic number.","Describe the overall trend and identify any exceptions shown by the data.","Explain the trend using nuclear charge, shielding and electron arrangement at an appropriate level."]},
 {title:"Model group ion formation",steps:["Use counters to represent outer-shell electrons for a Group 1 element and a Group 17 element.","Show electron loss by the metal and electron gain by the halogen.","Check the charges and show how oppositely charged ions attract.","Explain why the resulting compound has an overall neutral charge."]}
 ];
 c.commonMisconceptions=[
 {misconception:"Elements in the same group are identical in their properties.",correction:"They share important patterns, especially valence-electron arrangements, but physical properties and reactivity vary down the group."},
 {misconception:"The period number is the number of outer-shell electrons.",correction:"For representative elements, the period indicates the highest occupied principal energy level; group position is more useful for predicting valence electrons."},
 {misconception:"All elements on the left side of the periodic table are equally reactive metals.",correction:"Metal reactivity varies by group and down a group; transition metals and other metals show different patterns."},
 {misconception:"Atomic radius always decreases smoothly across every element in the table.",correction:"The general trend across a period is a decrease for many main-group comparisons, but definitions and subshell effects create complexities."},
 {misconception:"A halogen atom is negatively charged in its elemental form.",correction:"A neutral halogen atom has equal proton and electron numbers; it gains an electron when forming a halide ion."}
 ];
 const qs=[
 ["Explain why elements in the same group often have similar chemical properties.","They have similar outer-shell electron arrangements, which influence bonding, ion formation and reactions.",2],
 ["An element is in Group 1 and Period 3. Identify its likely element and predict the ion it forms.","Sodium (Na); it loses one outer electron to form Na⁺.",2],
 ["Explain why elements in the same period do not all have the same chemical properties.","Their outer electron arrangements change across the period, leading to different bonding, ion formation and chemical behaviour.",3],
 ["Compare the typical electron changes of a Group 1 metal and a Group 17 non-metal.","Group 1 metals lose one electron to form +1 ions; Group 17 non-metals gain one electron to form −1 ions.",3],
 ["Describe the general change in atomic radius across a period and explain it.","Atomic radius generally decreases as proton number and nuclear charge increase while added electrons enter the same main energy level, increasing attraction.",3],
 ["Explain why Group 1 metals become more reactive down the group.","The outer electron is farther from the nucleus and more shielded, so it is generally lost more easily.",3],
 ["Explain why halogen reactivity generally decreases down Group 17.","Atomic radius and electron shielding increase, reducing the attraction for an incoming electron; gaining an electron becomes less favourable.",3],
 ["A learner says that chlorine is a negative ion because it is in Group 17. Correct the statement.","A chlorine atom is neutral; it becomes chloride, Cl⁻, only after gaining one electron in a reaction.",2],
 ["Distinguish between a group and a period in the periodic table.","A group is a vertical column; a period is a horizontal row.",2],
 ["Use periodic position to predict the formula of a compound formed by magnesium and chlorine.","Magnesium forms Mg²⁺ and chlorine forms Cl⁻; two chloride ions balance one magnesium ion, giving MgCl₂.",3],
 ["Explain why noble gases are generally unreactive compared with Group 1 elements.","Noble gases have filled outer electron shells and are relatively stable; Group 1 atoms readily lose their single outer electron.",3],
 ["A student claims all metals are solids at room temperature. Evaluate the claim.","Most are solids, but mercury is liquid at ordinary room temperature; physical properties have exceptions.",2],
 ["Explain how periodic trends can help scientists select materials for a specific use.","Patterns in conductivity, reactivity, strength and ion formation help predict suitability; selection must also consider cost, safety and environmental impact.",4],
 ["A new element is predicted to have seven outer-shell electrons. Predict its likely group family and one chemical behaviour.","It is likely a halogen in Group 17; it may gain one electron to form a 1− ion and react with metals to form salts.",3],
 ["Evaluate why the modern periodic table is more useful than arranging elements only alphabetically.","It organises elements by atomic number and recurring properties, allowing trends and relationships to be identified and predictions to be made.",4]
 ];
 c.questions=(c.questions||[]).concat(qs.map(x=>({q:x[0],a:x[1],category:"Learning Studio • periodic reasoning",marks:x[2],markingPoints:x[1]})));
 c.summary=(c.summary||[]).concat([
 "The modern periodic table arranges elements in increasing atomic number.",
 "Groups are vertical columns and periods are horizontal rows; position reveals patterns in electron arrangement.",
 "Metals, non-metals and metalloids occupy characteristic regions, with exceptions to simple rules.",
 "Periodic trends arise from changes in nuclear charge, shielding, occupied energy levels and electron arrangement.",
 "Group 1 metals tend to lose one electron; halogens tend to gain one electron; noble gases have filled outer shells.",
 "Periodic position helps predict properties but predictions should be checked against evidence and exceptions."
 ]);
 c.paperDuration="60 minutes";
 c.seoTitle="Periodic Table Grade 10 Chemistry Kenya | Groups, Periods and Trends";
 c.metaDescription="Kenya Grade 10 Chemistry Periodic Table notes with groups, periods, metals and non-metals, electron arrangement, periodic trends, 10 labelled diagrams and examination questions.";
 c.seoKeywords=["Kenya Grade 10 periodic table notes","groups and periods chemistry","periodic trends atomic radius","Group 1 metals","Group 17 halogens","KICD Grade 10 Chemistry"];
})();