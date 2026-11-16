/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 1.4 Chemical Bonding.
   Append-only Learning Studio enrichment; retains existing chapter material. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-1-4");if(!c||c.__bondingStudioExtra)return;c.__bondingStudioExtra=true;
 const data=[
 ["Ionic bond formation","An ionic bond is the electrostatic attraction between oppositely charged ions. Electron transfer often occurs from a metal atom to a non-metal atom; the resulting ions form a lattice."],
 ["Covalent bonding and shared pairs","A covalent bond forms when atoms share one or more pairs of electrons. Shared electrons are attracted to both nuclei, holding the atoms together."],
 ["Metallic bonding","Metals consist of positive ion cores in a lattice surrounded by delocalised electrons. Attraction between the ion cores and electron sea helps explain conductivity and malleability."],
 ["Structure determines properties","Ionic lattices, simple molecular substances, giant covalent networks and metallic structures have different melting points, conductivity, hardness and solubility."],
 ["Representing bonding accurately","Dot-and-cross diagrams show outer electrons and electron transfer or sharing. They are models: they do not show true particle sizes, distances or three-dimensional geometry."]
 ];
 const bg=["#e2f0ff","#e3f5e4","#fff0d8","#f2e5ff","#ffe6e1"];
 const art=[
 '<g><circle cx="175" cy="130" r="38" fill="#b8d8f5" stroke="#3978a8" stroke-width="2"/><circle cx="175" cy="130" r="15" fill="#3978a8"/><circle cx="370" cy="130" r="38" fill="#f6c5b9" stroke="#b65f50" stroke-width="2"/><circle cx="370" cy="130" r="15" fill="#b65f50"/><path d="M220 130h100m-12-8 12 8-12 8" stroke="#52677c" stroke-width="2" fill="none"/><text x="175" y="195" text-anchor="middle" font-size="14" fill="#17365d">Metal atom</text><text x="370" y="195" text-anchor="middle" font-size="14" fill="#17365d">Non-metal atom</text><text x="320" y="85" text-anchor="middle" font-size="13" fill="#52677c">Electron transfer → oppositely charged ions</text><text x="320" y="225" text-anchor="middle" font-size="14" fill="#17365d">Electrostatic attraction forms ionic bonding</text></g>',
 '<g><circle cx="220" cy="135" r="48" fill="#dceeff" stroke="#3978a8" stroke-width="2"/><circle cx="390" cy="135" r="48" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><circle cx="278" cy="125" r="7" fill="#3978a8"/><circle cx="294" cy="125" r="7" fill="#39834a"/><circle cx="278" cy="145" r="7" fill="#3978a8"/><circle cx="294" cy="145" r="7" fill="#39834a"/><text x="220" y="205" text-anchor="middle" font-size="14" fill="#17365d">Atom A</text><text x="390" y="205" text-anchor="middle" font-size="14" fill="#17365d">Atom B</text><text x="320" y="75" text-anchor="middle" font-size="14" fill="#17365d">Two shared electron pairs</text><text x="320" y="235" text-anchor="middle" font-size="13" fill="#52677c">Simplified double covalent bond model</text></g>',
 '<g><g fill="#f1c7a5" stroke="#9b6543"><circle cx="150" cy="100" r="24"/><circle cx="220" cy="100" r="24"/><circle cx="290" cy="100" r="24"/><circle cx="360" cy="100" r="24"/><circle cx="430" cy="100" r="24"/><circle cx="500" cy="100" r="24"/><circle cx="150" cy="170" r="24"/><circle cx="220" cy="170" r="24"/><circle cx="290" cy="170" r="24"/><circle cx="360" cy="170" r="24"/><circle cx="430" cy="170" r="24"/><circle cx="500" cy="170" r="24"/></g><g fill="#3978a8"><circle cx="185" cy="135" r="5"/><circle cx="255" cy="135" r="5"/><circle cx="325" cy="135" r="5"/><circle cx="395" cy="135" r="5"/><circle cx="465" cy="135" r="5"/></g><text x="320" y="225" text-anchor="middle" font-size="14" fill="#17365d">Positive ion cores in a sea of delocalised electrons</text></g>',
 '<g><rect x="50" y="78" width="125" height="112" rx="10" fill="#dceeff" stroke="#3978a8"/><rect x="195" y="78" width="125" height="112" rx="10" fill="#e3f5e4" stroke="#39834a"/><rect x="340" y="78" width="125" height="112" rx="10" fill="#fff0d8" stroke="#b88620"/><rect x="485" y="78" width="105" height="112" rx="10" fill="#f2e5ff" stroke="#8c65a7"/><g font-size="13" text-anchor="middle" fill="#17365d"><text x="112" y="112">Ionic lattice</text><text x="112" y="142">High melting</text><text x="112" y="160">point</text><text x="257" y="112">Molecular</text><text x="257" y="142">Often low</text><text x="257" y="160">melting point</text><text x="402" y="112">Giant covalent</text><text x="402" y="142">Often very</text><text x="402" y="160">hard</text><text x="537" y="112">Metallic</text><text x="537" y="142">Conductive</text></g></g>',
 '<g><rect x="65" y="80" width="225" height="115" rx="12" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><rect x="350" y="80" width="225" height="115" rx="12" fill="#dceeff" stroke="#3978a8" stroke-width="2"/><g font-size="14" text-anchor="middle" fill="#17365d"><text x="177" y="112">Dot-and-cross</text><text x="177" y="140">shows valence</text><text x="177" y="162">electrons</text><text x="462" y="112">Model limits</text><text x="462" y="140">not to scale</text><text x="462" y="162">not 3-D geometry</text></g><path d="M290 137h60m-8-7 8 7-8 7" stroke="#52677c" stroke-width="2" fill="none"/></g>'
 ];
 c.diagramGallery=(c.diagramGallery||[]).concat(data.map((x,i)=>({title:(i+6)+". "+x[0],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" role="img" aria-label="'+x[0]+'"><rect x="8" y="8" width="624" height="244" rx="16" fill="'+bg[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="42" text-anchor="middle" font-size="20" font-weight="bold" fill="#17365d">'+x[0]+'</text>'+art[i]+'</svg>',explanation:x[1]})));
 c.realLifeApplications=[
 "Ionic compounds such as sodium chloride are used in food and chemical manufacture; their solubility and conductivity depend on ions and lattice structure.",
 "Covalent molecules form fuels, medicines, plastics, proteins and many other substances; molecular structure influences reactivity and physical properties.",
 "Metallic bonding explains why copper and aluminium are useful electrical conductors and why many metals can be shaped into wires and sheets.",
 "Giant covalent structures such as diamond and graphite have contrasting properties because their bonding arrangements differ.",
 "Semiconductors and advanced materials rely on controlled bonding and electron behaviour in solids."
 ];
 c.practicalActivities=[
 {title:"Compare electrical conductivity",steps:["Under teacher supervision, test a low-voltage conductivity circuit using graphite, copper, solid sodium chloride and sodium chloride solution where safely available.","Record whether the bulb or indicator responds; do not use mains electricity.","Relate observations to mobile electrons or mobile ions.","Explain why solid ionic compounds do not conduct in the same way as molten or dissolved ionic compounds."]},
 {title:"Construct dot-and-cross diagrams",steps:["Use counters or two colours of dots and crosses to represent outer electrons.","Model sodium chloride formation and a simple covalent molecule such as hydrogen or chlorine.","Check that atoms achieve appropriate outer-shell arrangements for the model used.","Annotate which electrons are transferred and which are shared."]},
 {title:"Relate structure to material choice",steps:["Compare teacher-provided data for copper, sodium chloride, graphite and a simple molecular substance such as wax.","Record melting behaviour, conductivity and hardness from reliable data or safe demonstrations.","Identify the type of structure and bonding in each sample.","Recommend a material for an electrical wire, a hard cutting surface or an insulating coating and justify each choice."]}
 ];
 c.commonMisconceptions=[
 {misconception:"Ionic bonds are shared pairs of electrons.",correction:"Ionic bonding is electrostatic attraction between oppositely charged ions; covalent bonding involves shared electron pairs."},
 {misconception:"All covalent substances have low melting points.",correction:"Simple molecular substances often have low melting points, but giant covalent networks such as diamond and silicon dioxide have very high melting points."},
 {misconception:"Solid ionic compounds conduct electricity because they contain ions.",correction:"Their ions are fixed in a lattice and cannot move freely; molten or aqueous ionic substances conduct when ions are mobile."},
 {misconception:"Metals conduct because metal atoms pass electrons from one atom to another.",correction:"Delocalised electrons move through the metallic lattice and carry charge."},
 {misconception:"A dot-and-cross diagram is a photograph of an atom.",correction:"It is a simplified model of outer electrons and bonding; it is not to scale and does not show exact electron positions."}
 ];
 const qs=[
 ["Explain the difference between ionic and covalent bonding.","Ionic bonding is electrostatic attraction between oppositely charged ions after electron transfer; covalent bonding involves shared pairs of electrons between atoms.",3],
 ["Describe how sodium and chlorine form sodium chloride.","Sodium transfers one outer electron to chlorine, forming Na⁺ and Cl⁻; electrostatic attraction holds the ions in a giant ionic lattice.",4],
 ["Explain why magnesium chloride has formula MgCl₂.","Magnesium forms Mg²⁺ and each chlorine forms Cl⁻; two chloride ions balance one magnesium ion to give zero overall charge.",3],
 ["Explain why solid sodium chloride does not conduct electricity but molten sodium chloride does.","In the solid lattice ions are fixed; when molten, ions are mobile and can carry electrical charge.",3],
 ["Describe metallic bonding and use it to explain electrical conductivity.","Positive metal ion cores are attracted to delocalised electrons; these electrons move through the lattice and carry charge.",3],
 ["Explain why copper can be drawn into wires.","Metallic layers can move or slide while metallic attraction is maintained by the delocalised electrons, allowing ductility.",3],
 ["Compare the structures and properties of diamond and graphite.","Both are giant covalent forms of carbon; diamond has a 3-D network with each carbon bonded to four others and is very hard, while graphite has layers with three bonds per carbon and delocalised electrons, making it softer and conductive.",5],
 ["A learner says all substances with covalent bonds are gases. Evaluate the claim.","Incorrect: simple molecular substances may be gases or liquids, while giant covalent structures such as diamond and silicon dioxide are solids with high melting points.",3],
 ["Draw or describe the electron transfer in formation of calcium oxide.","Calcium loses two electrons to form Ca²⁺; oxygen gains two electrons to form O²⁻; attraction between ions forms calcium oxide.",4],
 ["Explain why a simple molecular substance often has a low boiling point.","Covalent bonds within molecules are strong, but intermolecular forces between molecules are relatively weak and require less energy to overcome.",3],
 ["Predict the formula of aluminium oxide using ion charges Al³⁺ and O²⁻.","The lowest whole-number ratio balancing charge is 2 aluminium ions (+6) to 3 oxide ions (−6), giving Al₂O₃.",3],
 ["Explain why graphite conducts electricity while diamond does not.","Each graphite carbon forms three covalent bonds, leaving one electron delocalised; in diamond each carbon forms four covalent bonds, leaving no equivalent mobile electron.",4],
 ["A material is hard, has a very high melting point and does not conduct electricity. Suggest a likely structure and justify.","A giant covalent network such as diamond or silicon dioxide; strong covalent bonds extend throughout the structure and there are no mobile charge carriers in the solid.",3],
 ["Explain how bonding and structure determine the use of copper in electrical cables.","Metallic bonding provides mobile delocalised electrons for conductivity; metallic layers allow drawing into flexible wires. Copper is also durable and workable.",4],
 ["Evaluate why a dot-and-cross diagram is useful but limited.","It shows outer-electron transfer or sharing and helps track charges and bonding; it is simplified, not to scale, and does not represent true electron probability or 3-D structure.",4]
 ];
 c.questions=(c.questions||[]).concat(qs.map(x=>({q:x[0],a:x[1],category:"Learning Studio • bonding and structure",marks:x[2],markingPoints:x[1]})));
 c.summary=(c.summary||[]).concat([
 "Ionic bonding is electrostatic attraction between oppositely charged ions; covalent bonding involves shared electron pairs.",
 "Metallic bonding is attraction between positive ion cores and delocalised electrons.",
 "Ionic lattices, simple molecules, giant covalent networks and metals have distinct structures and properties.",
 "Mobile ions conduct in molten or aqueous ionic substances; delocalised electrons conduct in metals and graphite.",
 "Dot-and-cross diagrams are useful models but have limitations and should be interpreted carefully."
 ]);
 c.paperDuration="60 minutes";
 c.seoTitle="Chemical Bonding Grade 10 Chemistry Kenya | Ionic, Covalent and Metallic Bonds";
 c.metaDescription="Kenya Grade 10 Chemistry chemical bonding notes with ionic, covalent and metallic bonding, dot-and-cross diagrams, structure-property links, practical activities and examination questions.";
 c.seoKeywords=["Kenya Grade 10 chemical bonding","ionic bonding notes","covalent bonding","metallic bonding","dot and cross diagrams","structure and properties","KICD Chemistry"];
})();