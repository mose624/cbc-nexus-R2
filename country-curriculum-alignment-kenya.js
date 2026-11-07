/* Kenya Grade 10 Biology curriculum alignment layer.
   Core sequence follows KICD Biology Grade 10 (2025) strand 1.0:
   1.1 Introduction; 1.2 Specimen Collection and Preservation;
   1.3 Cell Structure and Specialisation; 1.4 Chemicals of Life.
   Other imported topic-bank items are retained after the core sequence as supplementary
   material until each is verified against the relevant official sub-strand. */
(()=> {
 const kenya=window.CBE_COUNTRY_NOTES?.Kenya?.levels?.["Grade 10"];
 if(!kenya || !Array.isArray(kenya.Biology)) return;
 const list=kenya.Biology;
 const byId=id=>list.find(x=>x.id===id);
 const intro=byId("bio-intro");
 const cells=byId("bio-cells");
 const chemicals=byId("bio-chemicals");
 const specimen={
  id:"kenya-g10-biology-specimen-collection-preservation",
  title:"1.2 Specimen Collection and Preservation",
  lessons:"KICD suggested sub-strand • practical learning",
  curriculumContext:"KICD Grade 10 Biology 2025 • Strand 1.0 Cell Biology and Biodiversity • Sub-strand 1.2 Specimen Collection and Preservation.",
  objectives:[
   "Explain why biological specimens are collected and preserved.",
   "Select appropriate tools and methods for collecting representative specimens.",
   "Describe safe, ethical and environmentally responsible specimen collection.",
   "Explain temporary and long-term preservation and accurate labelling.",
   "Record observations and use specimens to investigate biological features."
  ],
  sections:[
   {heading:"Meaning, purpose and types of biological specimens",paragraphs:[
    "A biological specimen is a part or whole of a living or once-living organism collected for observation, identification, comparison, teaching or scientific investigation. Specimens may include leaves, flowers, fruits, seeds, insects, feathers, shells, bones, soil organisms, fungi and microorganisms. A specimen may be studied while alive, preserved for later study, or represented by a photograph, drawing or digital record when physical collection is unnecessary or inappropriate.",
    "Specimen collection helps learners observe structures that may be difficult to study in the field, compare variation between organisms, identify organisms using observable features and build evidence for biological explanations. A good specimen is relevant to the question being investigated, sufficiently intact for the intended observations and accompanied by reliable information about where, when and how it was collected.",
    "Collection is not automatically necessary. Photographs, sketches, fallen leaves, naturally shed feathers, models and existing collections may provide the required evidence without harming organisms. Never collect a protected organism or remove material from a protected area without the required authorisation."
   ],keyTerms:[
    {term:"Specimen",definition:"A sample or representative organism collected for observation or study."},
    {term:"Sampling",definition:"Selecting a subset of organisms or material from a larger population or habitat."},
    {term:"Preservation",definition:"Treatment or storage that slows decay and maintains useful specimen features."},
    {term:"Voucher specimen",definition:"A documented specimen retained as evidence of the identity of an organism used in a study."}
   ]},
   {heading:"Tools and methods for collecting specimens",paragraphs:[
    "The collecting tool depends on the organism, habitat and purpose. A hand lens helps examine small external features. Forceps can pick up small objects without crushing them. A soft brush can transfer delicate insects. A pooter or aspirator may be used for tiny insects only when designed with a filter that prevents inhalation. A sweep net samples insects in vegetation; a pond net samples some aquatic invertebrates. A quadrat helps estimate the abundance or distribution of plants and slow-moving organisms in a defined area.",
    "For plants, collect only where permitted and take the smallest sample needed. Where a whole plant is not required, a fallen leaf, a small leaf section, a flower or a photograph may be enough. A plant press can flatten and dry suitable plant material while retaining identifying features. For animals, prefer observation, photography, humane temporary viewing and release. Traps or capture methods require supervision, permission and careful attention to animal welfare.",
    "A representative sample should reflect the area or population being studied. Random sampling reduces deliberate selection bias. Systematic sampling follows a regular pattern, such as placing quadrats at fixed intervals along a transect. Record the sampling method because the method affects what conclusions can reasonably be drawn."
   ],keyTerms:[
    {term="Quadrat",definition:"A frame of known area used to sample organisms in a defined area."},
    {term:"Transect",definition:"A line or strip across a habitat along which observations or samples are recorded."},
    {term:"Random sampling",definition:"A method in which each eligible sampling position has a chance of selection."}
   ]},
   {heading:"Safety, ethics and conservation during collection",paragraphs:[
    "Before fieldwork, identify possible hazards such as biting or stinging animals, sharp plant parts, poisonous plants, contaminated water, slippery ground, traffic, extreme weather and allergies. Work with teacher supervision, wear suitable footwear and gloves where appropriate, wash hands after handling specimens and never taste or directly smell unknown materials. Do not handle dangerous animals or unknown fungi.",
    "Obtain permission before entering private land or collecting specimens. Follow conservation rules and local regulations. Do not collect endangered or protected organisms, destroy nests, uproot rare plants or damage habitats. Collect only the minimum quantity required and avoid disturbing breeding sites. If a living organism is temporarily observed, minimise handling time and return it carefully to the place where it was found when safe and appropriate.",
    "Ethical biological study balances learning with respect for living things and the environment. When a photograph or non-invasive observation can answer the question, it is usually preferable to killing or removing an organism."
   ]},
   {heading:"Preservation, storage and labelling",paragraphs:[
    "Preservation slows decomposition, fungal growth, insect damage and physical deterioration. Plant specimens suitable for herbarium study are commonly pressed between absorbent sheets and dried in a ventilated place; sheets may need changing until the material is dry. Dry seeds, shells and some hard structures can be stored in clean, dry, labelled containers. Wet specimens may require an appropriate preservative and a sealed, clearly labelled container, but chemical preservatives must only be handled under trained supervision using the approved school procedure.",
    "Temporary storage is different from long-term preservation. A fresh specimen may be kept briefly in a cool, suitable container for immediate observation, but it can deteriorate quickly. Do not seal damp plant material in a warm container because mould may develop. Do not mix specimens from different collection sites unless the records clearly distinguish them.",
    "Every specimen label should be durable and linked to a field record. Useful information includes the specimen code, common name if known, date, location or habitat, collector, collection method and relevant notes. Scientific identification should be recorded only when reasonably certain; otherwise use a provisional description such as 'unidentified grasshopper' rather than guessing."
   ],keyTerms:[
    {term:"Herbarium",definition:"A collection of dried, pressed and labelled plant specimens used for reference and study."},
    {term:"Field record",definition:"Notes documenting the location, date, habitat, method and observations associated with a specimen."}
   ]},
   {heading:"Observation, identification and recording",paragraphs:[
    "Observe specimens systematically. Use a hand lens or microscope where appropriate and record visible features such as size, colour, shape, leaf arrangement, venation, symmetry, body segments, number of legs, type of covering and presence of reproductive structures. Drawings should be large, clear and proportional, with single clean lines and labels connected by straight ruled lines that do not cross.",
    "Do not add features that cannot be seen. A biological drawing is an evidence record, not an artistic picture. Give it a title and magnification where relevant. If measurements are taken, include units and state the instrument used. A scale bar is useful for images because it remains meaningful if the image is resized.",
    "Identification uses observable characteristics and appropriate keys or reference materials. Start with broad features and progressively narrow the possibilities. If evidence is insufficient, state that the specimen cannot yet be identified confidently. Record uncertainty rather than forcing a conclusion."
   ]},
   {heading:"Worked field example: sampling plants with a quadrat",paragraphs:[
    "A class wants to compare the abundance of a small ground plant in a grassy field and beside a footpath. The learners mark a study area in each habitat, use the same quadrat size and place the quadrat at randomly selected positions. They count the target plants in each quadrat and record the results in a table.",
    "The independent comparison is habitat type. The measured outcome is the number of target plants per quadrat. Quadrat size and counting rules are kept the same. Several quadrats are sampled in each habitat because one quadrat may not represent the whole area. The mean count per quadrat can be compared, but the learners should also consider variation and possible differences in soil, shade, trampling and moisture.",
    "The investigation supports a conclusion about the sampled locations, not automatically every grassy field or footpath. A larger, better distributed sample improves representativeness."
   ]}
  ],
  example:"A learner finds a fallen broad leaf under a tree. The learner records the date, location and habitat, photographs the leaf on a scale, observes its margin and venation with a hand lens, and presses it between absorbent sheets. The specimen is labelled with a unique code. Because it was already fallen, collection causes less harm than removing a healthy leaf from the plant.",
  diagram:"FIELD SPECIMEN RECORD\n\nSpecimen code: ________     Date: __________\nLocation / habitat: ______________________\nCollector: _____________  Method: __________\nVisible features: _________________________\nPreservation / storage: ___________________\nIdentification (if known): _________________\n\nQuadrat sampling: place the same known-area frame\nat several randomly selected positions and record\nthe organisms inside each frame.",
  activity:"In groups, plan a safe school-ground specimen study using photographs, fallen plant material or non-invasive observation. Prepare a specimen label and field-record sheet. Explain why your sample is representative, how you will avoid harming organisms and how the material will be stored.",
  summary:[
   "A specimen is collected to provide evidence for observation, identification or study.",
   "The tool and sampling method must suit the organism and purpose.",
   "Random and systematic sampling can reduce bias when used appropriately.",
   "Permission, safety, animal welfare and conservation must guide collection.",
   "Preservation slows deterioration; labels and field records protect the specimen's scientific value.",
   "Drawings and conclusions must be based on features actually observed."
  ],
  questions:[
   {q:"Define a biological specimen.",a:"A biological specimen is a whole organism or part of an organism collected or recorded for observation, identification, comparison or scientific study."},
   {q:"Give four details that should appear on a specimen label.",a:"Any four: specimen code, date, location or habitat, collector, collection method, provisional or confirmed identification, and relevant field notes."},
   {q:"Why should a learner avoid collecting a rare flowering plant?",a:"Removing it may harm a vulnerable population or be prohibited. A photograph or non-invasive observation should be used unless authorised collection is essential."},
   {q:"State one use of a quadrat.",a:"A quadrat samples the abundance or distribution of plants and other slow-moving organisms in a known area."},
   {q:"Distinguish random sampling from systematic sampling.",a:"Random sampling selects positions by chance; systematic sampling selects positions according to a regular planned pattern, such as fixed intervals along a transect."}
  ]
 };
 const core=[intro,specimen,cells,chemicals].filter(Boolean);
 const used=new Set(core.map(x=>x.id));
 const remainder=list.filter(x=>!used.has(x.id));
 const investigation=remainder.find(x=>x.id==="bio-investigations");
 if(investigation){
  investigation.title="Supplementary: Scientific investigation skills in Biology";
  investigation.curriculumContext="Supplementary learning support. This is not labelled as a separate KICD Grade 10 Biology sub-strand in the published strand summary.";
 }

 const enrich=(chapter,index,extra,keyTerms,workedExamples)=>{
  const s=chapter?.sections?.[index]; if(!s) return;
  s.paragraphs=[s.body||"",...extra].filter(Boolean);
  if(keyTerms) s.keyTerms=keyTerms;
  if(workedExamples) s.workedExamples=workedExamples;
 };
 enrich(intro,0,[
  "Biology is evidence-based: biologists observe patterns, ask questions, collect data and test explanations. A scientific explanation must be open to checking and revision when stronger evidence becomes available. The same biological question may be investigated at different scales, from molecules and cells to whole ecosystems.",
  "A useful way to appreciate the scope of Biology is to connect a local issue to a biological field. For example, investigating a crop pest may involve Entomology to identify the insect, Ecology to understand its interactions, Genetics to study resistance and Plant Physiology to understand effects on the crop."
 ],[
  {term:"Biology",definition:"The scientific study of living organisms and life processes."},
  {term:"Biodiversity",definition:"The variety of living organisms, including variation within species, between species and among ecosystems."},
  {term:"Physiology",definition:"The study of how living organisms and their parts function."}
 ],[
  {title:"Choosing a biological field",question:"A community wants to reduce mosquito-borne disease without damaging wetland biodiversity. Which biological fields could contribute?",method:"Entomology can identify mosquito species; Ecology can examine breeding habitats and food webs; Parasitology and Microbiology can study disease-causing organisms; Public Health can guide prevention.",answer:"Several fields are relevant and should work together.",explanation:"Real biological problems are often interdisciplinary. A sound solution considers human health and ecosystem effects."}
 ]);
 enrich(cells,0,[
  "Cell theory is commonly expressed through three linked ideas: living organisms are made of one or more cells; the cell is the basic unit of structure and function; and new cells arise from pre-existing cells. These ideas help explain growth, repair and reproduction in living organisms.",
  "Cell size is limited partly by exchange requirements. As a cell becomes larger, its volume increases faster than its surface area. This can make it harder to exchange enough nutrients, gases and wastes across the membrane to support the whole cell."
 ],[
  {term:"Cell theory",definition:"The principle that organisms are made of cells, cells are the basic units of life, and cells arise from pre-existing cells."},
  {term:"Surface-area-to-volume ratio",definition:"The amount of surface area available for exchange compared with the volume that requires resources."}
 ]);
 enrich(chemicals,0,[
  "The chemical composition of an organism is closely linked to its activities. Water provides a medium in which many reactions occur and allows dissolved substances to be transported. Carbohydrates and lipids are important energy stores, while proteins have structural, transport, defensive and catalytic roles.",
  "A balanced diet supplies different nutrients in suitable amounts. Deficiency may impair growth, repair or normal body function, while excess intake of some nutrients can also be harmful. The role of a nutrient should be distinguished from the food source that supplies it."
 ],[
  {term:"Nutrient",definition:"A chemical substance obtained from food or the environment and used for energy, growth, repair or regulation."},
  {term:"Enzyme",definition:"A biological catalyst that increases the rate of a reaction without being used up overall."}
 ]);
 kenya.Biology=core.concat(remainder);
})();
