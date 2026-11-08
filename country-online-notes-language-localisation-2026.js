/* Localise earlier country lesson batches into the language of delivery.
   Reuses fully authored French and Portuguese lesson bodies from the language-reviewed packs.
*/
(()=> {
 const all=window.CBE_COUNTRY_NOTES||{};
 const source=(country,level,subject)=>all[country]?.levels?.[level]?.[subject]?.find(x=>x.language==="fr"||x.language==="pt");
 const targets=[
  {name:"Senegal",level:"Lycée • séries scientifiques",lang:"fr",sourceCountry:"Côte d’Ivoire",sourceLevel:"Seconde • séries scientifiques",status:"Ressource en français, langue d’enseignement des séries scientifiques."},
  {name:"Democratic Republic of the Congo",level:"3ème–5ème Secondaire • Humanités scientifiques",lang:"fr",sourceCountry:"Côte d’Ivoire",sourceLevel:"Seconde • séries scientifiques",status:"Ressource en français, langue d’enseignement du secondaire général."},
  {name:"Madagascar",level:"T10–T12 • Lycée scientifique",lang:"fr",sourceCountry:"Côte d’Ivoire",sourceLevel:"Seconde • séries scientifiques",status:"Ressource en français pour l’enseignement scientifique au lycée; tenir compte des usages linguistiques locaux."},
  {name:"Comoros",level:"Lycée • Seconde / Première scientifique support",lang:"fr",sourceCountry:"Côte d’Ivoire",sourceLevel:"Seconde • séries scientifiques",status:"Ressource en français, langue utilisée dans l’enseignement secondaire avec l’arabe selon les matières."},
  {name:"Angola",level:"10.ª–12.ª Classe • Ciências Físicas e Biológicas",lang:"pt",sourceCountry:"Cabo Verde",sourceLevel:"10º–12º Ano • Ciências e Tecnologias",status:"Recurso em português, língua de ensino das disciplinas científicas."},
  {name:"Mozambique",level:"8ª–9ª Classe • Secondary foundations",lang:"pt",sourceCountry:"Cabo Verde",sourceLevel:"10º–12º Ano • Ciências e Tecnologias",status:"Recurso em português, língua de ensino do currículo escolar."}
 ];
 for(const t of targets){
  const dest=all[t.name]?.levels?.[t.level];if(!dest)continue;
  for(const subject of ["Biology","Chemistry","Physics","Mathematics"]){
   const src=source(t.sourceCountry,t.sourceLevel,subject);if(!src)continue;
   const id=t.name.toLowerCase().replace(/[^a-z]+/g,"-")+"-language-"+subject.toLowerCase()+"-01";
   const copy=JSON.parse(JSON.stringify(src));copy.id=id;copy.language=t.lang;copy.deliveryLanguage=t.lang==="fr"?"Français":"Português";
   copy.curriculumContext=t.status+" "+(t.lang==="fr"?"Contenu pédagogique complémentaire CBE Nexus.":"Conteúdo pedagógico complementar CBE Nexus.");
   const list=dest[subject]||(dest[subject]=[]);
   const existing=list.findIndex(x=>x.id===id);if(existing>=0)list[existing]=copy;else list.push(copy);
  }
 }
})();