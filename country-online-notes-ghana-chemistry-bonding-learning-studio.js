/* CBE Nexus Learning Studio — Ghana SHS Year 1 Chemistry.
   Original supplementary chapter: chemical bonding and structure.
   Ghana curriculum alignment is supplementary; confirm exact sequence with current NaCCA scheme.
   Append-only registration preserves existing country notes. */
(()=> {
 "use strict";
 const level=window.CBE_COUNTRY_NOTES?.Ghana?.levels?.["SHS Year 1"];
 if(!level) return;
 const list=level.Chemistry||(level.Chemistry=[]);
 if(list.some(x=>x.id==="gh-shs1-chem-chemical-bonding-studio")) return;
 const safe=s=>String(s).replace(/[&<>"]/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[ch]));
 const svg=(title,labels,caption)=>{
  const x=[28,196,364], fills=["#dceeff","#fff0c2","#dcf7e5"], strokes=["#3478a8","#bd8700","#348653"];
  const boxes=labels.map((v,i)=>'<rect x="'+x[i]+'" y="36" width="128" height="66" rx="11" fill="'+fills[i]+'" stroke="'+strokes[i]+'" stroke-width="2"/><text x="'+(x[i]+64)+'" y="64" text-anchor="middle" font-size="13" font-weight="700" fill="#17324d">'+safe(v)+'</text>');
  return '<svg viewBox="0 0 520 156" role="img" aria-label="'+safe(title)+'" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="510" height="146" rx="14" fill="#f7fbff" stroke="#b8cce0"/>'+boxes.join("")+'<path d="M156 69 H194 M324 69 H362" stroke="#2563eb" stroke-width="3"/><path d="M185 62 L195 69 L185 76 M353 62 L363 69 L353 76" fill="none" stroke="#2563eb" stroke-width="3"/><text x="260" y="128" text-anchor="middle" font-size="12" fill="#40566d">'+safe(caption)+'</text></svg>';
 };
 const diagrams=[
  ["Why atoms bond",["Atom A","Electron","Atom B"],"Bonding can lower the energy of the combined system"],
  ["Ionic bonding",["Metal atom","Electron transfer","Non-metal ion"],"Electron transfer forms oppositely charged ions"],
  ["Sodium chloride",["Na⁺","Electrostatic","Cl⁻"],"Opposite charges attract in a giant ionic lattice"],
  ["Covalent bonding",["Atom A","Shared pair","Atom B"],"A covalent bond is a shared pair of electrons"],
  ["Hydrogen molecule",["H·","Shared pair","·H"],"Each hydrogen contributes one electron to the shared pair"],
  ["Coordinate bond",["Donor pair","Shared pair","Acceptor"],"Both bonding electrons are supplied by one atom"],
  ["Metallic bonding",["Positive ions","Delocalised","Electrons"],"Metal cations are attracted to mobile delocalised electrons"],
  ["Ionic lattice",["Positive ion","Negative ion","Repeating array"],"Ions form a regular three-dimensional arrangement"],
  ["Bonding and properties",["Structure","Attraction","Properties"],"Structure and bonding explain melting and conductivity"],
  ["Bond polarity",["δ⁺ end","Unequal share","δ⁻ end"],"Electronegativity difference creates a polar bond"]
 ];
 const qs=[
  ["Define a chemical bond.","A chemical bond is an attractive force that holds atoms or ions together in a substance.",2,["Attractive force (1); holds atoms/ions together (1)."]],
  ["Explain why atoms form chemical bonds.","Bond formation can produce a more stable, lower-energy arrangement of electrons and nuclei.",2,["More stable/lower energy (1); electron arrangement or attraction (1)."]],
  ["Describe how an ionic bond forms in sodium chloride.","A sodium atom transfers one outer electron to a chlorine atom, forming Na⁺ and Cl⁻ ions. Their opposite charges attract electrostatically.",4,["Electron transfer from sodium (1); sodium ion (1); chloride ion (1); electrostatic attraction (1)."]],
  ["State two properties of ionic compounds.","They generally have high melting and boiling points and conduct electricity when molten or dissolved in water, but not when solid.",2,["Any two correctly stated properties (1 each)."]],
  ["Why does solid sodium chloride not conduct electricity?","Its ions are held in fixed positions in the lattice and cannot move to carry charge.",2,["Ions fixed in lattice (1); no mobile charge carriers (1)."]],
  ["Explain why molten sodium chloride conducts electricity.","When molten, the lattice is disrupted and the ions become mobile, allowing them to carry electric charge.",2,["Mobile ions (1); ions carry charge (1)."]],
  ["Define a covalent bond.","A covalent bond is the electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms.",2,["Shared pair of electrons (1); attraction to nuclei (1)."]],
  ["Use electron sharing to explain the formation of a hydrogen molecule.","Each hydrogen atom contributes one electron to a shared pair. The shared pair is attracted to both nuclei, holding the atoms together.",3,["Each atom contributes one electron (1); shared pair (1); attraction to both nuclei (1)."]],
  ["Distinguish between ionic and covalent bonding.","Ionic bonding involves electrostatic attraction between oppositely charged ions after electron transfer; covalent bonding involves shared electron pairs between atoms.",3,["Ionic transfer/ions (1); covalent sharing (1); clear distinction (1)."]],
  ["What is a coordinate covalent bond?","It is a covalent bond in which both electrons in the shared pair are donated by the same atom.",2,["Shared pair (1); both electrons from one donor atom (1)."]],
  ["Explain metallic bonding.","Metallic bonding is the electrostatic attraction between a lattice of positive metal ions and delocalised electrons.",2,["Positive metal ions (1); attraction to delocalised electrons (1)."]],
  ["Why are many metals good electrical conductors?","They contain delocalised electrons that can move through the metallic structure and carry charge.",2,["Delocalised electrons (1); mobile charge carriers (1)."]],
  ["Explain why many simple molecular substances have low boiling points.","The intermolecular forces between their molecules are often relatively weak, so comparatively little energy is needed to separate the molecules. Covalent bonds within molecules are not normally broken during boiling.",3,["Weak intermolecular forces (1); little energy to overcome them (1); distinguish intermolecular forces from covalent bonds (1)."]],
  ["A substance has a high melting point and conducts electricity when molten but not when solid. Suggest its bonding and explain.","It is likely ionic. Its ions are fixed in the solid lattice but mobile when molten, so they conduct only in the molten state.",3,["Ionic substance (1); fixed ions in solid (1); mobile ions in melt (1)."]],
  ["Explain why graphite conducts electricity whereas diamond does not.","Each carbon in graphite forms three covalent bonds, leaving one electron per atom delocalised and able to move along layers. In diamond, each carbon forms four covalent bonds, so there are no mobile delocalised electrons.",4,["Graphite three bonds per carbon (1); delocalised mobile electron (1); diamond four bonds (1); no mobile electrons (1)."]]
 ];
 const chapter={
  id:"gh-shs1-chem-chemical-bonding-studio",
  title:"Chemical bonding and structure",
  lessons:"Learning Studio chapter • ionic, covalent and metallic bonding, structure and properties",
  curriculumContext:"Ghana NaCCA Senior High School Chemistry supplementary material. This original CBE Nexus chapter supports foundational bonding concepts; it is not an official NaCCA textbook. Confirm the exact topic sequence and required depth with the current curriculum and school scheme.",
  curriculumStatus:"supplementary-country-aligned",
  objectives:[
   "Explain why atoms form chemical bonds in terms of stability and energy.",
   "Describe ionic bonding as electron transfer followed by electrostatic attraction.",
   "Explain covalent bonding using shared pairs of electrons and simple dot-and-cross representations.",
   "Recognise coordinate covalent bonding and identify the electron-pair donor.",
   "Describe metallic bonding using positive ions and delocalised electrons.",
   "Relate bonding and structure to melting point, hardness, solubility and electrical conductivity.",
   "Compare giant ionic, giant covalent, metallic and simple molecular structures."
  ],
  sections:[
   {heading:"1. Why do atoms form chemical bonds?",paragraphs:[
    "Most substances around us are made of atoms joined by chemical bonds. Oxygen in the air, water, table salt, metals used in buildings and the materials in living cells all depend on interactions between atoms or ions. A chemical bond is an attractive force that holds particles together in a stable arrangement.",
    "Atoms form bonds because the resulting arrangement can have lower energy and greater stability than the separated particles. The electrons in the outermost occupied shell, called valence electrons, play the central role in many introductory models of bonding. Atoms may transfer electrons or share them, depending on their electronic structures and the elements involved.",
    "The octet rule is a useful introductory guide: many main-group atoms tend to form arrangements with eight electrons in their outer shell, resembling the electron arrangement of a noble gas. Hydrogen and helium are important exceptions because their first shell is full with two electrons. The octet rule is a model, not a universal law; some compounds do not follow it.",
    "Bonding models help explain why substances have different properties. The type of particles, the strength and arrangement of attractions, and the mobility of charged particles influence melting point, boiling point, hardness, brittleness, solubility and electrical conductivity."
   ],keyTerms:["chemical bond","valence electrons","outer shell","stability","octet rule","energy"]},
   {heading:"2. Ionic bonding: electron transfer",paragraphs:[
    "Ionic bonding usually occurs between a metal and a non-metal. A metal atom may lose one or more outer-shell electrons to form a positively charged ion called a cation. A non-metal atom may gain electrons to form a negatively charged ion called an anion. The ions are held together by electrostatic attraction between opposite charges.",
    "Sodium has one electron in its outer shell. It can lose this electron to form Na⁺. Chlorine has seven outer-shell electrons and can gain one electron to form Cl⁻. Both ions then have stable outer-shell arrangements in the simple shell model. The transfer of electrons forms ions; the ionic bond itself is the electrostatic attraction between the ions.",
    "Magnesium forms Mg²⁺ by losing two electrons. Oxygen forms O²⁻ by gaining two electrons. The oppositely charged ions attract, producing magnesium oxide. The formula MgO reflects the simplest ratio of ions that gives an electrically neutral compound.",
    "Ionic compounds are electrically neutral overall. The total positive charge must balance the total negative charge. For example, calcium forms Ca²⁺ and chlorine forms Cl⁻, so two chloride ions are needed for every calcium ion. The formula is CaCl₂.",
    "An ionic formula gives the simplest whole-number ratio of ions in the lattice; it does not normally represent a separate molecule. In sodium chloride, NaCl represents a 1:1 ratio of Na⁺ to Cl⁻ ions throughout the giant structure."
   ],keyTerms:["ionic bond","electron transfer","cation","anion","electrostatic attraction","ionic formula"]},
   {heading:"3. Giant ionic structures and their properties",paragraphs:[
    "In a solid ionic compound, ions are arranged in a regular repeating three-dimensional structure called a giant ionic lattice. Each ion is surrounded by ions of opposite charge. Strong electrostatic attractions act in all directions through the lattice, so considerable energy is usually needed to separate the ions.",
    "Ionic compounds therefore generally have high melting and boiling points. Their solid crystals are often hard but brittle. When a force shifts one layer of ions, ions with the same charge may become adjacent; strong repulsion can cause the crystal to split or shatter.",
    "Solid ionic compounds do not normally conduct electricity because their ions are held in fixed lattice positions. When the compound melts or dissolves in water, the ions can move. These mobile ions carry electric charge, allowing the molten or aqueous substance to conduct electricity.",
    "Many ionic compounds dissolve in water, but solubility varies. Whether a substance dissolves depends on the balance between attractions within the ionic lattice and interactions between the ions and water molecules. Do not assume that every ionic compound is soluble.",
    "A fair conductivity test uses a suitable low-voltage circuit and compares a solid sample, a melt under teacher supervision or an aqueous solution where safe and appropriate. Never attempt to melt chemicals or handle hot apparatus without trained supervision and a risk assessment."
   ],keyTerms:["giant ionic lattice","melting point","brittle","mobile ions","aqueous solution","electrical conductivity"]},
   {heading:"4. Covalent bonding: sharing electron pairs",paragraphs:[
    "Covalent bonding usually occurs between non-metal atoms. Instead of transferring electrons completely, atoms share one or more pairs of electrons. A covalent bond is the electrostatic attraction between the shared electron pair and the nuclei of the bonded atoms.",
    "A hydrogen atom has one electron and needs one more to fill its first shell. Two hydrogen atoms each contribute one electron to a shared pair, forming H₂. The shared pair is attracted to both nuclei and holds the atoms together.",
    "In a chlorine molecule, Cl₂, each chlorine atom contributes one electron to a shared pair. Each atom then has an outer shell of eight electrons in the simple shell model. A single covalent bond contains one shared pair of electrons.",
    "A double covalent bond contains two shared pairs, as in oxygen, O₂. A triple covalent bond contains three shared pairs, as in nitrogen, N₂. The number of shared pairs is related to the bonding requirements and electronic structure of the atoms.",
    "Dot-and-cross diagrams show outer-shell electrons from different atoms using different symbols. The symbols help track which atom supplied each electron; after bonding, the shared electrons belong to the bonded system. Include only the electrons required by the diagram and show the shared pair or pairs clearly."
   ],keyTerms:["covalent bond","shared pair","single bond","double bond","triple bond","dot-and-cross diagram"]},
   {heading:"5. Covalent molecules and simple molecular substances",paragraphs:[
    "Many covalent substances exist as separate molecules. Examples include hydrogen, oxygen, nitrogen, water, carbon dioxide and methane. Strong covalent bonds hold the atoms together within each molecule. In many simple molecular substances, weaker intermolecular forces act between separate molecules.",
    "During melting or boiling of a simple molecular substance, the molecules move farther apart as intermolecular attractions are overcome. The covalent bonds within the molecules are generally not broken. This distinction explains why many simple molecular substances have relatively low melting and boiling points despite strong covalent bonds within each molecule.",
    "Simple molecular substances generally do not conduct electricity because they do not contain mobile ions or delocalised electrons. Their solubility depends on the nature of the molecules and the solvent. A useful introductory principle is that substances with similar types of intermolecular interactions are often more likely to mix, but this is not an absolute rule.",
    "Water is a polar molecule. Its oxygen-hydrogen bonds are polar because oxygen attracts the shared electrons more strongly than hydrogen. The molecule has a bent shape, so the bond polarities do not cancel. This contributes to water's unusual physical properties and its ability to dissolve many ionic and polar substances."
   ],keyTerms:["simple molecular substance","intermolecular force","polar bond","polar molecule","molecular shape","solubility"]},
   {heading:"6. Coordinate covalent bonding and bond polarity",paragraphs:[
    "A coordinate covalent bond, also called a dative covalent bond, is a covalent bond in which both electrons in the shared pair are supplied by one atom. The atom donating the pair is the donor; the atom or ion accepting it provides an available orbital or suitable space for the pair.",
    "A common introductory example is the formation of an ammonium ion, NH₄⁺, when ammonia, NH₃, donates its lone pair to a hydrogen ion, H⁺. The donated pair forms a bond to the hydrogen ion. Once formed, the four N–H bonds in the ammonium ion are equivalent in the usual bonding model.",
    "A covalent bond may be non-polar or polar. In a non-polar covalent bond, the shared electrons are distributed equally or nearly equally between the atoms. In a polar covalent bond, one atom attracts the shared electrons more strongly, producing a partial negative charge (δ−) at one end and a partial positive charge (δ+) at the other.",
    "Electronegativity describes the ability of an atom in a bond to attract shared electrons. A difference in electronegativity can make a bond polar. Molecular shape also matters: a molecule may contain polar bonds but have no overall molecular dipole if the bond dipoles cancel because of its symmetrical shape."
   ],keyTerms:["coordinate covalent bond","dative bond","lone pair","donor","acceptor","electronegativity","polarity"]},
   {heading:"7. Metallic bonding and the properties of metals",paragraphs:[
    "In the metallic bonding model, metal atoms contribute outer electrons to a shared pool of delocalised electrons. The structure can be described as a regular arrangement of positive metal ions surrounded by mobile delocalised electrons. Metallic bonding is the electrostatic attraction between these positive ions and the delocalised electrons.",
    "Delocalised electrons can move through the metal. Their mobility explains why metals generally conduct electricity and transfer thermal energy effectively. When a potential difference is applied, mobile electrons move through the structure and carry charge.",
    "Metallic bonding is not confined to one direction. Layers of metal ions can slide past one another while the attraction to the electron sea remains, helping explain why many metals are malleable and ductile. Malleability is the ability to be hammered or rolled into sheets; ductility is the ability to be drawn into wires.",
    "The strength of metallic bonding varies among metals and helps influence melting points, hardness and strength. Alloys contain a mixture of elements, often including different-sized atoms that disrupt the regular layers and can make the material harder or less easily deformed than a pure metal."
   ],keyTerms:["metallic bond","positive metal ions","delocalised electrons","malleability","ductility","alloy"]},
   {heading:"8. Giant covalent structures: diamond and graphite",paragraphs:[
    "Some elements form giant covalent structures rather than separate small molecules. In these structures, atoms are joined by covalent bonds in an extended network. The strong bonds throughout the structure usually require a large amount of energy to break, giving many giant covalent substances high melting points.",
    "Diamond consists of carbon atoms, each covalently bonded to four other carbon atoms in a strong three-dimensional network. This rigid arrangement makes diamond extremely hard. Each carbon uses its four outer electrons in covalent bonds, so there are no mobile delocalised electrons; pure diamond does not conduct electricity under ordinary conditions.",
    "Graphite consists of layers of carbon atoms arranged in hexagonal networks. Each carbon atom forms three covalent bonds with neighbouring carbon atoms. The remaining outer electron is delocalised within the layer and can move, allowing graphite to conduct electricity along its layers.",
    "The layers in graphite are held together by relatively weak attractions compared with the strong covalent bonds within each layer. They can slide over one another, making graphite soft and useful as a lubricant and in pencil cores. The different structures of diamond and graphite explain why the same element can have very different properties."
   ],keyTerms:["giant covalent structure","diamond","graphite","hexagonal layer","delocalised electron","network solid"]},
   {heading:"9. Comparing bonding, structure and physical properties",paragraphs:[
    "A substance's properties depend on the particles present and the attractions between them. Giant ionic lattices contain positive and negative ions held by strong electrostatic attractions. Simple molecular substances contain molecules with strong covalent bonds inside each molecule and weaker attractions between molecules. Giant covalent structures have covalent bonds extending through a network. Metals contain positive ions and delocalised electrons.",
    "When explaining a high melting point, identify the structure and the attractions that must be overcome. For an ionic solid, refer to strong electrostatic attractions between oppositely charged ions. For a giant covalent solid, refer to the many strong covalent bonds throughout the network. For a simple molecular solid, distinguish the weaker intermolecular forces from the covalent bonds within molecules.",
    "Electrical conductivity requires mobile charged particles. Metals conduct because of delocalised electrons. Ionic compounds conduct when molten or in aqueous solution because their ions can move. Solid ionic compounds do not conduct because their ions are fixed. Most simple molecular substances do not conduct because they lack mobile ions or electrons.",
    "Hardness, brittleness and malleability also depend on structure. Ionic crystals can be brittle when layers shift and like charges line up. Metals can be malleable because layers of ions can move while the electron attraction continues. Diamond is hard because of its strong three-dimensional covalent network; graphite is soft because its layers slide."
   ],keyTerms:["structure-property relationship","giant ionic","simple molecular","giant covalent","metallic","conductivity"]},
   {heading:"10. Worked examples, practical activities and common misconceptions",paragraphs:[
    "Worked example 1 — Predict the formula of the compound formed between aluminium ions, Al³⁺, and oxide ions, O²⁻. The total positive and negative charges must balance. Two Al³⁺ ions give +6 and three O²⁻ ions give −6, so the formula is Al₂O₃.",
    "Worked example 2 — Explain why magnesium oxide has a high melting point. Magnesium oxide has a giant ionic lattice containing Mg²⁺ and O²⁻ ions. Strong electrostatic attractions act between oppositely charged ions throughout the lattice, and considerable energy is required to overcome them.",
    "Worked example 3 — Explain why graphite conducts electricity but diamond does not. In graphite, each carbon forms three covalent bonds and has one delocalised electron that can move through the layers. In diamond, each carbon forms four covalent bonds, leaving no mobile delocalised electrons.",
    "Practical A — Build particle models of ionic, simple molecular and giant covalent structures using safe classroom modelling materials. Label the particles and attractions. Models represent ideas and should not be mistaken for actual scale diagrams.",
    "Practical B — Compare electrical conductivity of safe, teacher-approved samples such as graphite and suitable aqueous ionic solutions using a low-voltage circuit. Use eye protection where directed, avoid tasting or directly handling chemicals and follow the school's laboratory safety rules.",
    "Practical C — Use a data table of melting points and conductivity observations to classify unknown substances by likely structure. Support each classification with more than one property and state when the evidence is insufficient for a definite conclusion.",
    "Misconception: electron transfer itself is the ionic bond. Correction: transfer forms ions; the ionic bond is the electrostatic attraction between oppositely charged ions.",
    "Misconception: ionic compounds are made of separate NaCl molecules. Correction: solid sodium chloride is a giant lattice; NaCl gives the simplest ratio of ions.",
    "Misconception: covalent bonds break when a simple molecular substance boils. Correction: boiling usually overcomes intermolecular attractions, not the covalent bonds inside molecules.",
    "Misconception: all covalent substances have low melting points. Correction: simple molecular substances often have low melting points, but giant covalent structures such as diamond have very high melting points.",
    "Misconception: every substance that contains ions conducts electricity as a solid. Correction: ions must be mobile; solid ionic lattices normally do not conduct."
   ],workedExamples:[
    {title:"Writing an ionic formula",question:"Determine the formula of the ionic compound formed from Al³⁺ and O²⁻ ions.",marks:3,method:"Choose the smallest whole-number ratio that makes the total charge zero.",steps:["Two Al³⁺ ions give total charge +6","Three O²⁻ ions give total charge −6","The neutral ratio is 2:3"],answer:"Al₂O₃",explanation:"The total positive charge (+6) balances the total negative charge (−6)."},
    {title:"Explaining a high melting point",question:"Explain why magnesium oxide has a high melting point.",marks:3,method:"Identify its structure, the attractive forces and the energy needed to overcome them.",steps:["Magnesium oxide has a giant ionic lattice","Strong electrostatic attractions act between Mg²⁺ and O²⁻ ions","A large amount of energy is needed to overcome these attractions"],answer:"It has a high melting point because strong electrostatic attractions hold oppositely charged ions together throughout its giant lattice.",explanation:"A complete explanation links the giant ionic structure to strong attractions and high energy requirement."},
    {title:"Comparing graphite and diamond",question:"Explain why graphite conducts electricity but diamond does not.",marks:4,method:"Compare the number of covalent bonds each carbon forms and the availability of mobile electrons.",steps:["Each graphite carbon forms three covalent bonds","One electron per carbon is delocalised and mobile","Each diamond carbon forms four covalent bonds","Diamond has no mobile delocalised electrons"],answer:"Graphite conducts because it has mobile delocalised electrons; diamond does not because all four outer electrons of each carbon are used in covalent bonds.",explanation:"The difference comes from the bonding arrangement of carbon atoms."}
   ],practicalActivities:[
    {title:"Particle-model comparison",description:"Use classroom-safe models to represent an ionic lattice, a simple molecule and a giant covalent network. Label ions, shared pairs and the attractions holding each structure together."},
    {title:"Electrical conductivity investigation",description:"Under teacher supervision, compare approved solid and aqueous samples using a low-voltage conductivity circuit. Record observations and relate them to the mobility of ions or electrons."},
    {title:"Structure and property data task",description:"Use supplied melting-point and conductivity data to classify substances as ionic, metallic, simple molecular or giant covalent. Justify each decision using particle structure."}
   ],commonMisconceptions:[
    {misconception:"Electron transfer is the ionic bond.",correction:"Electron transfer forms ions; the ionic bond is the electrostatic attraction between oppositely charged ions."},
    {misconception:"Ionic solids contain separate molecules.",correction:"They usually form giant ionic lattices; the formula represents the simplest ion ratio."},
    {misconception:"Covalent bonds break when simple molecular substances boil.",correction:"Boiling generally overcomes intermolecular forces between molecules, not the covalent bonds within them."},
    {misconception:"All covalent substances have low melting points.",correction:"Simple molecular substances often have low melting points, while giant covalent networks can have very high melting points."},
    {misconception:"Solid ionic substances conduct electricity because they contain ions.",correction:"The ions are fixed in the solid lattice. Electrical conduction requires mobile charged particles."}
   ]},
   {heading:"11. Examination practice and marking guidance",paragraphs:[
    "Attempt the questions before reading the answers. In bonding explanations, use precise terms such as electron transfer, shared pair, electrostatic attraction, lattice, delocalised electron and mobile ion. Avoid saying that atoms 'want' electrons; explain the arrangement and attractions instead.",
    "For structure-property questions, follow a clear chain: identify the structure, identify the particles and forces, then explain how those features produce the observed property. For conductivity, always state which charged particle moves and under what physical condition."
   ]}
  ],
  diagramGallery:diagrams.map(([title,labels,caption])=>({title,svg:svg(title,labels,caption),explanation:caption+"."})),
  realLifeApplications:[
   "Ionic compounds such as salts are used in food, agriculture, water treatment and industrial processes.",
   "Metallic bonding explains why copper and aluminium are useful in electrical wiring and why many metals can be shaped into sheets and wires.",
   "Graphite is used in pencil cores, electrodes and some lubricating applications because of its layered structure and electrical conductivity.",
   "Diamond's hardness makes it useful in cutting and drilling tools, while its structure is important in materials science.",
   "Understanding molecular polarity helps explain the behaviour of water, solvents, medicines and many biological molecules."
  ],
  summary:[
   "Atoms form bonds when the resulting arrangement is more stable and has lower energy.",
   "Ionic bonding is electrostatic attraction between oppositely charged ions formed through electron transfer.",
   "Ionic compounds form giant lattices and conduct electricity when molten or dissolved, but generally not as solids.",
   "Covalent bonds involve shared electron pairs between atoms; coordinate bonds have both shared electrons donated by one atom.",
   "Simple molecular substances often have low melting and boiling points because intermolecular forces are relatively weak.",
   "Metallic bonding is attraction between positive metal ions and delocalised electrons; mobile electrons explain conductivity.",
   "Diamond and graphite are giant covalent forms of carbon with different structures and properties.",
   "Always link a substance's properties to its particles, structure and the attractions or mobile charge carriers present."
  ],
  questions:qs.map(([q,a,marks,markingPoints])=>({q,a,marks,category:"Chemical bonding and structure",markingPoints,explanation:a})),
  seo:{
   title:"Ghana SHS Chemistry Notes: Ionic, Covalent and Metallic Bonding",
   description:"Study Ghana SHS Year 1 Chemistry chemical bonding with detailed notes on ionic, covalent, coordinate and metallic bonds, dot-and-cross diagrams, giant structures, conductivity, melting points, worked examples and exam questions.",
   keywords:["Ghana SHS Chemistry notes","SHS 1 chemical bonding Ghana","ionic bonding electron transfer","covalent bonding dot and cross diagrams","metallic bonding delocalised electrons","giant ionic lattice properties","diamond and graphite structure","NaCCA Chemistry revision questions"],
   faq:[
    {question:"What is an ionic bond?",answer:"An ionic bond is the electrostatic attraction between oppositely charged ions, commonly formed after electron transfer."},
    {question:"Why do ionic compounds conduct electricity when molten?",answer:"Their ions become mobile when molten and can move to carry electric charge."},
    {question:"What is a covalent bond?",answer:"A covalent bond is the electrostatic attraction between a shared pair of electrons and the nuclei of the bonded atoms."},
    {question:"Why does graphite conduct electricity?",answer:"Each carbon atom in graphite forms three covalent bonds, leaving delocalised electrons that can move through the layers."}
   ]
  }
 };
 list.unshift(chapter);
})();
