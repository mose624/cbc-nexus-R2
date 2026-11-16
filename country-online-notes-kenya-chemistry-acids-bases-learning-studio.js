/* CBE Nexus Learning Studio — Kenya Grade 10 Chemistry 2.1 Acids and Bases.
   Append-only enrichment: five additional labelled diagrams and a complete chapter practice set. */
(()=> {
 const c=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"]?.Chemistry?.find(x=>x.id==="ke-g10-chem-2-1");if(!c||c.__acidsBasesStudio20261116)return;c.__acidsBasesStudio20261116=true;
 const topics=[
 ["Strong and weak acids: ionisation","A strong acid ionises extensively in water; a weak acid ionises only partially. Strength describes the extent of ionisation, not the concentration of the solution. A dilute strong acid and a concentrated weak acid are both possible."],
 ["Neutralisation and ionic equations","An acid reacts with a base to form a salt and water in a neutralisation reaction. For reactions between hydrogen ions and hydroxide ions, the net ionic equation is H⁺(aq) + OH⁻(aq) → H₂O(l)."],
 ["The pH scale and logarithmic meaning","At ordinary introductory level, pH is a measure related to hydrogen-ion concentration. A change of one pH unit represents a tenfold change in hydrogen-ion concentration, not a simple equal step."],
 ["Indicators and titration endpoints","Indicators change colour over a characteristic pH range. In a titration, the endpoint is the observed indicator colour change; a suitable indicator is selected so the endpoint is close to the equivalence point."],
 ["Acid reactions and evidence","Acids react with reactive metals to produce a salt and hydrogen, with carbonates to produce a salt, water and carbon dioxide, and with bases to form salt and water. Gas tests and balanced equations support identification."]
 ];
 const colors=["#dceeff","#e3f5e4","#fff0d8","#f2e5ff","#ffe6e1"];
 const art=[
 '<g><rect x="70" y="82" width="205" height="110" rx="12" fill="#dceeff" stroke="#3978a8" stroke-width="2"/><rect x="365" y="82" width="205" height="110" rx="12" fill="#e3f5e4" stroke="#39834a" stroke-width="2"/><g font-size="15" text-anchor="middle" fill="#17365d"><text x="172" y="115">Strong acid</text><text x="172" y="145">extensive ionisation</text><text x="172" y="168">many ions</text><text x="467" y="115">Weak acid</text><text x="467" y="145">partial ionisation</text><text x="467" y="168">fewer ions</text></g></g>',
 '<g><rect x="75" y="85" width="190" height="100" rx="12" fill="#dceeff" stroke="#3978a8"/><rect x="375" y="85" width="190" height="100" rx="12" fill="#e3f5e4" stroke="#39834a"/><text x="170" y="125" text-anchor="middle" font-size="17" fill="#17365d">H⁺(aq)</text><text x="470" y="125" text-anchor="middle" font-size="17" fill="#17365d">OH⁻(aq)</text><path d="M270 135h95m-10-8 10 8-10 8" stroke="#52677c" stroke-width="2" fill="none"/><text x="320" y="220" text-anchor="middle" font-size="17" fill="#17365d">H₂O(l)</text></g>',
 '<g><path d="M95 100h450" stroke="#52677c" stroke-width="4"/><rect x="95" y="100" width="150" height="60" fill="#f5a3a3"/><rect x="245" y="100" width="150" height="60" fill="#f7e58b"/><rect x="395" y="100" width="150" height="60" fill="#9ac9ee"/><g font-size="15" text-anchor="middle" fill="#17365d"><text x="170" y="135">Acidic</text><text x="320" y="135">Neutral</text><text x="470" y="135">Alkaline</text><text x="170" y="190">pH &lt; 7</text><text x="320" y="190">pH = 7*</text><text x="470" y="190">pH &gt; 7</text></g><text x="320" y="225" text-anchor="middle" font-size="12" fill="#52677c">*At 25 °C for neutral water</text></g>',
 '<g><path d="M180 70v75q0 25 25 25h230q25 0 25-25V70" fill="none" stroke="#3978a8" stroke-width="5"/><path d="M205 150h230v25H205z" fill="#c9e7f7"/><path d="M320 48v40" stroke="#b65f50" stroke-width="4"/><path d="M310 80l10 10 10-10" fill="none" stroke="#b65f50" stroke-width="3"/><text x="320" y="215" text-anchor="middle" font-size="15" fill="#17365d">Burette delivers titrant into flask</text><text x="320" y="238" text-anchor="middle" font-size="12" fill="#52677c">Swirl; add indicator; record endpoint</text></g>',
 '<g><rect x="55" y="78" width="160" height="112" rx="10" fill="#dceeff" stroke="#3978a8"/><rect x="240" y="78" width="160" height="112" rx="10" fill="#e3f5e4" stroke="#39834a"/><rect x="425" y="78" width="160" height="112" rx="10" fill="#fff0d8" stroke="#b88620"/><g font-size="14" text-anchor="middle" fill="#17365d"><text x="135" y="112">Acid + metal</text><text x="135" y="145">salt + H₂</text><text x="320" y="112">Acid + base</text><text x="320" y="145">salt + water</text><text x="505" y="112">Acid + carbonate</text><text x="505" y="145">salt + H₂O + CO₂</text></g></g>'
 ];
 c.diagramGallery=(c.diagramGallery||[]).concat(topics.map((t,i)=>({title:(i+6)+". "+t[0],svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 260" role="img" aria-label="'+t[0]+'"><rect x="8" y="8" width="624" height="244" rx="16" fill="'+colors[i]+'" stroke="#55758f" stroke-width="2"/><text x="320" y="42" text-anchor="middle" font-size="19" font-weight="bold" fill="#17365d">'+t[0]+'</text>'+art[i]+'</svg>',explanation:t[1]})));
 c.sections=(c.sections||[]).concat(topics.map(t=>({heading:t[0],paragraphs:[t[1],"In examination explanations, distinguish observations from conclusions. State the reactants and products, describe the evidence, write a balanced equation where required and include state symbols when the question asks for them."]})));
 c.realLifeApplications=[
 "Acid-base chemistry is used in treating acidic soils; agricultural lime can raise soil pH, but application should be guided by soil testing.",
 "Antacids neutralise excess stomach acid; different active ingredients have different neutralising capacities and medical use should follow product guidance.",
 "pH control is essential in swimming pools, drinking-water treatment, aquaculture and industrial wastewater management.",
 "Neutralisation is used to treat acidic or alkaline industrial effluent before discharge, protecting aquatic ecosystems.",
 "Titrations are used in quality control to determine concentrations in food production, pharmaceuticals, water analysis and chemical manufacture."
 ];
 c.practicalActivities=[
 {title:"Compare acid and alkali solutions with indicators",steps:["Wear goggles and use only dilute, teacher-approved solutions.","Test small samples with universal indicator or pH paper and record colour and estimated pH.","Compare the observations with the solutions' labels and classify them as acidic, neutral or alkaline.","Rinse apparatus and dispose of solutions according to the teacher's instructions."]},
 {title:"Investigate a carbonate-acid reaction",steps:["Place a small measured amount of a safe carbonate in a flask and add dilute acid under teacher supervision.","Pass the evolved gas through limewater using an appropriate apparatus.","Record effervescence and any limewater change; identify the gas as carbon dioxide if evidence supports it.","Write and balance the word and symbol equations; explain the safety precautions."]},
 {title:"Plan a simple acid-base titration",steps:["Rinse and fill a burette with the supplied standard solution and record the initial reading.","Pipette a measured volume of the other solution into a conical flask and add a few drops of a suitable indicator.","Add titrant while swirling, slowing to dropwise addition near the endpoint.","Record the final reading, calculate titre, repeat for concordant results and use the data to calculate concentration if instructed."]}
 ];
 c.commonMisconceptions=[
 {misconception:"A strong acid is always concentrated.",correction:"Strength is the extent of ionisation; concentration is the amount of solute per volume. They are different properties."},
 {misconception:"A neutralisation reaction always produces a solution at exactly pH 7.",correction:"The final pH depends on acid and base strengths, amounts, salts and conditions; pH 7 is not guaranteed for every neutralisation."},
 {misconception:"A pH of 2 is only slightly more acidic than pH 3.",correction:"At the same conditions, pH 2 has ten times the hydrogen-ion concentration of pH 3."},
 {misconception:"The endpoint and equivalence point are identical in every titration.",correction:"The endpoint is the observed indicator change; the equivalence point is the stoichiometric point. A suitable indicator makes them close."},
 {misconception:"All acids react at the same rate and with the same intensity.",correction:"Rate and observed vigour depend on concentration, acid strength, temperature, surface area and the nature of the reactants."}
 ];
 const questions=[
 ["Distinguish between a strong acid and a concentrated acid.","A strong acid ionises extensively in water; a concentrated acid contains a large amount of acid per unit volume. Strength and concentration are different.",3],
 ["Write the net ionic equation for neutralisation between hydrogen and hydroxide ions.","H⁺(aq) + OH⁻(aq) → H₂O(l).",2],
 ["Explain why a solution of pH 2 is ten times more acidic in hydrogen-ion concentration than a solution of pH 3.","The pH scale is logarithmic; a decrease of one pH unit corresponds to a tenfold increase in hydrogen-ion concentration.",2],
 ["Describe the products when a dilute acid reacts with a reactive metal.","A salt and hydrogen gas are produced.",2],
 ["Describe a chemical test for carbon dioxide evolved when an acid reacts with a carbonate.","Bubble the gas through limewater; it turns milky/cloudy due to formation of calcium carbonate.",2],
 ["Explain why an indicator is used during an acid-base titration.","It gives a visible colour change over a pH range near the endpoint, helping identify when sufficient titrant has been added.",2],
 ["Distinguish between endpoint and equivalence point in titration.","The endpoint is the observed indicator colour change; the equivalence point is where reacting amounts are in stoichiometric proportions.",3],
 ["A learner uses methyl orange for a titration without considering the acid and base strengths. Explain why indicator choice matters.","Indicators change colour over specific pH ranges; the chosen range should produce an endpoint close to the equivalence point for that titration.",3],
 ["Write a balanced equation for hydrochloric acid reacting with sodium hydroxide.","HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l).",2],
 ["Explain why dilute acid may react more slowly than concentrated acid with the same mass of metal.","A dilute solution has fewer acid particles per unit volume, so effective collisions at the metal surface occur less frequently under otherwise equal conditions.",3],
 ["Calculate the concentration of an acid if 25.0 cm³ is neutralised by 20.0 cm³ of 0.100 mol dm⁻³ sodium hydroxide, assuming a 1:1 reaction.","Moles NaOH = 0.100 × 0.0200 = 0.00200 mol. Acid moles = 0.00200 mol. Acid concentration = 0.00200 ÷ 0.0250 = 0.0800 mol dm⁻³.",4],
 ["Explain why soil pH is important for plant growth.","Soil pH affects nutrient availability, microbial activity and possible toxicity of some ions; unsuitable pH can limit healthy plant growth.",3],
 ["A student says all neutralisation reactions give pH 7. Evaluate the statement.","Not always. Strong acid-strong base mixtures are near pH 7 at equivalence under ordinary conditions, but weak acid/base reactions can give acidic or alkaline solutions.",3],
 ["State two safety precautions when diluting or handling acids.","Wear goggles and suitable protective clothing; add acid slowly to water with stirring, never water to concentrated acid. Follow teacher instructions.",2],
 ["Plan how to obtain reliable titration results.","Use a pipette for a fixed aliquot, rinse apparatus appropriately, read the burette at eye level, add titrant dropwise near endpoint, swirl, record readings and repeat for concordant titres.",4]
 ];
 c.questions=(c.questions||[]).concat(questions.map(q=>({q:q[0],a:q[1],category:"Learning Studio • acids and bases",marks:q[2],markingPoints:q[1]})));
 c.summary=(c.summary||[]).concat([
 "Acids produce hydrogen ions in aqueous solution; alkalis are soluble bases that produce hydroxide ions.",
 "Acid strength describes extent of ionisation, whereas concentration describes amount of solute per volume.",
 "Neutralisation forms a salt and water; the net ionic equation is H⁺ + OH⁻ → H₂O.",
 "pH is logarithmic: one pH unit represents a tenfold change in hydrogen-ion concentration.",
 "Indicators and titration data help identify endpoints and calculate unknown concentrations.",
 "Acids react with metals, bases and carbonates in characteristic ways; balanced equations and safe procedures are essential."
 ]);
 c.paperDuration="60 minutes";
 c.seoTitle="Acids and Bases Grade 10 Chemistry Kenya | pH, Indicators and Titration";
 c.metaDescription="Kenya Grade 10 Chemistry acids and bases notes with pH, strong and weak acids, neutralisation, indicators, titration, labelled diagrams, practical investigations and exam answers.";
 c.seoKeywords=["Kenya Grade 10 acids and bases","pH scale notes","neutralisation equations","acid base titration","strong and weak acids","indicators chemistry","KICD Chemistry"];
})();