/* CBE Nexus — Batch 31–40 worked-example and practice enrichment.
   Original supplementary learning material. It is not an official syllabus or exam paper.
   The lesson is added only where the matching country/level exists; it never replaces existing notes. */
(()=> {
 const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
 const countries=[
  ["Burkina Faso","fr","À Ouagadougou, un groupement scolaire compare les rendements du mil après différentes quantités d’eau."],
  ["Mali","fr","À Ségou, une classe étudie les mesures d’irrigation et la qualité de l’eau utilisée pour le riz."],
  ["Niger","fr","À Maradi, les élèves analysent la conservation des céréales et les effets de la chaleur sur les matériaux."],
  ["Togo","fr","À Lomé, les élèves utilisent des données de transport, de consommation d’énergie et de qualité de l’eau."],
  ["Chad","fr","À N’Djamena, une classe étudie les mesures de température, les mélanges et l’approvisionnement en eau."],
  ["Central African Republic","fr","À Bangui, les élèves exploitent des observations de la rivière Oubangui et d’écosystèmes forestiers."],
  ["Republic of the Congo","fr","À Brazzaville, une classe étudie les données de débit du fleuve Congo et les écosystèmes riverains."],
  ["Democratic Republic of the Congo","fr","À Kinshasa, les élèves utilisent des exemples du bassin du Congo, de l’agriculture et de l’électricité."],
  ["Gabon","fr","À Libreville, une classe relie les mesures scientifiques aux écosystèmes côtiers et forestiers."],
  ["Equatorial Guinea","es","En Malabo, una clase analiza datos de lluvia, ecosistemas costeros y consumo de energía."]
 ];
 const lessonData={
 fr:{
  Biology:{title:"Écologie quantitative : populations, ressources et écosystèmes",sections:[
   "Un écosystème associe une communauté d’êtres vivants et un milieu physique. Les facteurs abiotiques comprennent la lumière, la température, l’eau, le pH et les éléments minéraux. Les facteurs biotiques comprennent la compétition, la prédation, le parasitisme et la coopération.",
   "Une population est un ensemble d’individus d’une même espèce vivant dans une zone donnée. Son effectif varie avec les naissances, les décès, l’immigration et l’émigration. La disponibilité de nourriture, d’eau, d’abris et d’espace peut limiter la croissance d’une population.",
   "Un échantillonnage permet d’estimer une population sans compter chaque organisme. Les quadrats conviennent aux organismes immobiles ou peu mobiles. La méthode de capture-marquage-recapture peut estimer l’effectif d’animaux mobiles, sous certaines hypothèses."
  ],example:"Dans 5 quadrats de 1 m², on compte 8, 10, 7, 9 et 11 jeunes plants. Moyenne = (8 + 10 + 7 + 9 + 11) ÷ 5 = 9 plants/m². Pour une zone de 200 m² comparable, estimation = 9 × 200 = 1 800 plants. Cette extrapolation suppose que les quadrats sont représentatifs.",activity:"Choisir une petite zone sûre près de l’établissement. Poser au hasard plusieurs quadrats de même surface, compter une espèce végétale et comparer les moyennes. Ne pas arracher les plantes."},
  Chemistry:{title:"Solutions, concentration et dilution",sections:[
   "Une solution est un mélange homogène constitué d’un solvant et d’un ou plusieurs solutés. La concentration massique indique la masse de soluté dissoute par volume de solution. Elle s’exprime souvent en g/L.",
   "La relation de concentration massique est Cₘ = m ÷ V, où m est la masse du soluté en grammes et V le volume de solution en litres. Il faut convertir les millilitres en litres avant le calcul.",
   "Lors d’une dilution, on ajoute du solvant sans ajouter de soluté. La quantité de soluté reste constante : C₁V₁ = C₂V₂. La verrerie jaugée améliore la précision. Les solutions inconnues ne doivent jamais être goûtées."
  ],example:"On dissout 5,0 g de sel dans 250 mL de solution. V = 0,250 L ; Cₘ = 5,0 ÷ 0,250 = 20 g/L. Pour préparer 100 mL d’une solution à 4 g/L à partir d’une solution mère à 20 g/L : V₁ = (4 × 100) ÷ 20 = 20 mL de solution mère, puis compléter à 100 mL.",activity:"Préparer une solution de sel alimentaire avec une balance et une éprouvette graduée, sous supervision. Comparer l’effet d’une dilution sur l’intensité d’une solution colorée sûre."},
  Physics:{title:"Électricité : puissance, énergie et sécurité",sections:[
   "Le courant électrique correspond au déplacement ordonné de charges. Dans un circuit simple, l’intensité I se mesure en ampères, la tension U en volts et la résistance R en ohms. Pour un conducteur ohmique, U = RI.",
   "La puissance électrique est le débit de transfert d’énergie : P = UI. Elle s’exprime en watts. L’énergie transférée pendant une durée t est E = Pt ; en unités SI, E est en joules et t en secondes. Les compteurs domestiques utilisent souvent le kilowattheure.",
   "Les appareils doivent être utilisés à leur tension nominale. Un fusible ou un disjoncteur protège contre les surintensités. L’eau, les conducteurs dénudés et les prises endommagées augmentent le risque d’électrocution. Les expériences se font avec des piles basse tension."
  ],example:"Une lampe fonctionne sous 12 V et reçoit un courant de 0,5 A. P = UI = 12 × 0,5 = 6 W. Si elle reste allumée 2 h, E = 6 W × 2 h = 12 Wh = 0,012 kWh.",activity:"Lire les étiquettes de puissance d’appareils hors tension. Estimer l’énergie consommée par deux appareils selon leur durée d’utilisation ; ne jamais ouvrir une prise ou un appareil secteur."},
  Mathematics:{title:"Statistiques : moyenne, étendue et interprétation",sections:[
   "Une série statistique rassemble des valeurs observées. La moyenne arithmétique est la somme des valeurs divisée par leur nombre. La médiane partage une série ordonnée en deux groupes de même effectif, à un rang près.",
   "L’étendue est la différence entre la valeur maximale et la valeur minimale. Elle donne une mesure simple de dispersion, mais ne décrit pas à elle seule la répartition des données. Un diagramme en bâtons convient aux catégories ou valeurs discrètes.",
   "Une conclusion statistique doit préciser la population étudiée, l’unité, la période et la méthode d’échantillonnage. Une moyenne issue d’un petit échantillon non représentatif ne doit pas être généralisée sans réserve."
  ],example:"Les précipitations relevées pendant cinq jours sont 12, 8, 15, 5 et 10 mm. Moyenne = 50 ÷ 5 = 10 mm. Série ordonnée : 5, 8, 10, 12, 15 ; médiane = 10 mm ; étendue = 15 − 5 = 10 mm.",activity:"Recueillir cinq mesures quotidiennes disponibles (pluie, température ou durée de trajet), indiquer l’unité, calculer moyenne, médiane et étendue, puis expliquer une limite de l’échantillon."}
 },
 es:{
  Biology:{title:"Ecología cuantitativa: poblaciones, recursos y ecosistemas",sections:[
   "Un ecosistema reúne una comunidad de seres vivos y su medio físico. Los factores abióticos incluyen luz, temperatura, agua, pH y minerales. Los factores bióticos incluyen competencia, depredación, parasitismo y cooperación.",
   "Una población es un conjunto de individuos de la misma especie que viven en una zona. Su tamaño cambia por nacimientos, muertes, inmigración y emigración. El alimento, el agua, el refugio y el espacio pueden limitar su crecimiento.",
   "El muestreo permite estimar una población sin contar todos los organismos. Los cuadrantes sirven para organismos inmóviles o poco móviles. La captura, marcado y recaptura puede estimar animales móviles si se cumplen sus supuestos."
  ],example:"En cinco cuadrantes de 1 m² se cuentan 8, 10, 7, 9 y 11 plantas. Promedio = 45 ÷ 5 = 9 plantas/m². Para una zona comparable de 200 m²: estimación = 9 × 200 = 1 800 plantas. La estimación supone que los cuadrantes representan bien la zona.",activity:"Seleccionar una zona pequeña y segura. Colocar varios cuadrantes al azar, contar una especie vegetal y comparar los promedios sin arrancar las plantas."},
  Chemistry:{title:"Disoluciones, concentración y dilución",sections:[
   "Una disolución es una mezcla homogénea formada por un disolvente y uno o más solutos. La concentración en masa expresa la masa de soluto por volumen de disolución y suele medirse en g/L.",
   "La concentración en masa se calcula con C = m ÷ V, donde m se expresa en gramos y V en litros. Convierte los mililitros a litros antes de calcular.",
   "Al diluir se añade disolvente sin añadir soluto. La cantidad de soluto permanece constante: C₁V₁ = C₂V₂. Se debe utilizar material volumétrico adecuado y nunca probar sustancias del laboratorio."
  ],example:"Se disuelven 5,0 g de sal en 250 mL de disolución. V = 0,250 L; C = 5,0 ÷ 0,250 = 20 g/L. Para preparar 100 mL a 4 g/L desde una disolución madre de 20 g/L: V₁ = (4 × 100) ÷ 20 = 20 mL; completar hasta 100 mL.",activity:"Preparar una disolución de sal alimentaria con supervisión. Comparar la intensidad de una disolución coloreada segura antes y después de diluirla."},
  Physics:{title:"Electricidad: potencia, energía y seguridad",sections:[
   "La corriente eléctrica es el movimiento ordenado de cargas. En un circuito sencillo, la intensidad I se mide en amperios, la tensión U en voltios y la resistencia R en ohmios. Para un conductor óhmico, U = RI.",
   "La potencia eléctrica es la rapidez de transferencia de energía: P = UI. La energía transferida durante un tiempo t es E = Pt. La potencia se expresa en vatios y la energía puede expresarse en julios o kilovatios-hora.",
   "Los aparatos deben funcionar a su tensión nominal. Un fusible o interruptor automático protege frente a sobrecorrientes. El agua y los cables dañados aumentan el riesgo de descarga. Las prácticas escolares deben usar pilas de baja tensión."
  ],example:"Una lámpara funciona a 12 V y recibe 0,5 A. P = UI = 12 × 0,5 = 6 W. Si funciona durante 2 h, E = 6 × 2 = 12 Wh = 0,012 kWh.",activity:"Leer etiquetas de potencia de aparatos desconectados y estimar su consumo según el tiempo de uso. No abrir enchufes ni aparatos conectados a la red."},
  Mathematics:{title:"Estadística: media, mediana y rango",sections:[
   "Una serie estadística reúne datos observados. La media aritmética es la suma de los valores dividida por el número de datos. La mediana divide una serie ordenada en dos partes.",
   "El rango es la diferencia entre el valor máximo y el mínimo. Describe una parte de la dispersión, pero no muestra por sí solo cómo se distribuyen todos los datos. Un gráfico de barras sirve para comparar categorías o valores discretos.",
   "Una conclusión estadística debe indicar la población, la unidad, el periodo y el método de muestreo. Una muestra pequeña o sesgada no representa necesariamente a toda la población."
  ],example:"Las lluvias de cinco días son 12, 8, 15, 5 y 10 mm. Media = 50 ÷ 5 = 10 mm. Ordenados: 5, 8, 10, 12, 15; mediana = 10 mm; rango = 15 − 5 = 10 mm.",activity:"Recoger cinco mediciones disponibles de lluvia, temperatura o tiempo de viaje. Calcular media, mediana y rango, e indicar una limitación de la muestra."}
 }
 };
 const questions={
 fr:[
  ["Définir un facteur abiotique et donner deux exemples.","Un facteur non vivant du milieu, par exemple la température et la disponibilité en eau."],
  ["Citer deux facteurs qui peuvent limiter une population.","La disponibilité de nourriture et d’eau, par exemple."],
  ["Pourquoi utilise-t-on plusieurs quadrats ?","Pour réduire l’effet du hasard et obtenir une estimation plus représentative."],
  ["Quelle est l’unité usuelle de la concentration massique ?","Le gramme par litre (g/L)."],
  ["Pourquoi convertir 250 mL en 0,250 L ?","Parce que la formule Cₘ = m/V exige ici un volume en litres pour obtenir des g/L."],
  ["Quelle grandeur reste constante pendant une dilution ?","La quantité de soluté, si aucune perte n’a lieu."],
  ["Énoncer la relation entre tension, intensité et résistance pour un conducteur ohmique.","U = RI."],
  ["Quelle est l’unité SI de la puissance ?","Le watt (W)."],
  ["Pourquoi ne faut-il pas manipuler un circuit secteur en classe ?","La tension du secteur peut provoquer une électrocution grave ; utiliser une alimentation basse tension supervisée."],
  ["Comment calcule-t-on la moyenne arithmétique ?","On additionne les valeurs puis on divise par leur nombre."],
  ["Que mesure l’étendue ?","La différence entre la valeur maximale et la valeur minimale."],
  ["Pourquoi faut-il préciser la méthode d’échantillonnage ?","Pour juger si les données représentent correctement la population étudiée."]
 ],
 es:[
  ["Definir un factor abiótico y dar dos ejemplos.","Un factor no vivo del medio, por ejemplo la temperatura y la disponibilidad de agua."],
  ["Mencionar dos factores que pueden limitar una población.","La disponibilidad de alimento y de agua, por ejemplo."],
  ["¿Por qué se utilizan varios cuadrantes?","Para reducir el efecto del azar y obtener una estimación más representativa."],
  ["¿Cuál es la unidad habitual de concentración en masa?","El gramo por litro (g/L)."],
  ["¿Por qué se convierte 250 mL en 0,250 L?","Porque la fórmula C = m/V requiere el volumen en litros para obtener g/L."],
  ["¿Qué magnitud permanece constante durante una dilución?","La cantidad de soluto, si no hay pérdidas."],
  ["Escribir la relación entre tensión, intensidad y resistencia.","U = RI."],
  ["¿Cuál es la unidad SI de potencia?","El vatio (W)."],
  ["¿Por qué no se manipula la red eléctrica en clase?","Puede causar una descarga grave; se deben usar fuentes de baja tensión y supervisión."],
  ["¿Cómo se calcula la media aritmética?","Se suman los valores y se divide por el número de datos."],
  ["¿Qué mide el rango?","La diferencia entre el valor máximo y el mínimo."],
  ["¿Por qué se debe describir el método de muestreo?","Para evaluar si los datos representan adecuadamente a la población."]
 ]
 };
 for(const [country,lang,localContext] of countries){
  const record=all[country];
  if(!record||!record.levels) continue;
  const level=Object.keys(record.levels)[0];
  const subjects=lessonData[lang];
  for(const subject of ["Biology","Chemistry","Physics","Mathematics"]){
   const list=record.levels[level][subject]||(record.levels[level][subject]=[]);
   const id="batch31-40-"+country.toLowerCase().replace(/[^a-z0-9]+/g,"-")+"-"+subject.toLowerCase()+"-worked";
   if(list.some(x=>x.id===id)) continue;
   const d=subjects[subject];
   list.push({
    id,title:d.title,lessons:"Leçon complémentaire • exemple résolu et entraînement",
    curriculumContext:record.curriculum+" • "+record.authority+". "+(record.status||"")+" "+localContext+" Cette leçon originale est un complément de révision ; vérifier l'ordre et les attentes dans le programme officiel de la classe.",
    curriculumStatus:"supplementary-national-curriculum-support",
    objectives:["Définir et expliquer les notions essentielles du chapitre.","Résoudre un problème en montrant les étapes du raisonnement.","Interpréter des résultats et préciser les unités.","Relier les notions à une situation locale."],
    sections:d.sections.map((body,i)=>({heading:["Notions fondamentales","Explication et méthode","Application et interprétation"][i],body,paragraphs:[body]})),
    example:d.example,
    activity:d.activity+" Contexte local : "+localContext,
    summary:d.sections.map(x=>x.split(".")[0]+"."),
    questions:questions[lang].map(([q,a])=>({q,a,worked:a,explanation:a}))
   });
  }
 }
})();