/* CBE Nexus — Country Batch 04 curriculum pathway audit overlay.
   Registry order countries 31–40: France, Germany, Greece, Grenada, Guatemala,
   Guyana, Haiti, Honduras, Hungary and Iceland.
   Profiles add curriculum context and SEO only; they do not certify topic-level alignment.
*/
(()=>{"use strict";
const all=window.CBE_COUNTRY_NOTES||(window.CBE_COUNTRY_NOTES={});
const profiles={
  "France": {
    "level": "Collège and lycée (voie générale, technologique or professionnelle)",
    "authority": "Ministère de l’Éducation nationale; Conseil supérieur des programmes",
    "curriculum": "France uses national programmes by subject and school stage. Collège programmes lead to the Diplôme national du brevet; lycée pathways differ across general, technological and vocational routes. Science course choices and depth vary by class and pathway, so the exact programme must be checked for the learner's year.",
    "exam": "Diplôme national du brevet at the end of collège; baccalauréat routes and current subject examinations at lycée.",
    "languages": "French is the principal language of instruction; regional and foreign-language provision varies.",
    "source": "https://www.education.gouv.fr/les-programmes-scolaires-105",
    "status": "national-programmes-identified-pathway-and-grade-specific-topic-mapping-pending",
    "note": "Use the official programme for the exact collège/lycée year and pathway; do not merge general, technological and vocational syllabuses."
  },
  "Germany": {
    "level": "Sekundarstufe I and Sekundarstufe II; Gymnasium and vocational pathways",
    "authority": "Education ministries of the 16 Länder, coordinated through the Kultusministerkonferenz (KMK)",
    "curriculum": "School education is primarily the responsibility of the Länder. Curricula, subject names, grade sequence and upper-secondary course requirements differ by state and school type. The Abitur pathway is not identical to vocational upper-secondary routes.",
    "exam": "State-specific lower-secondary certificates and the Abitur; vocational qualifications follow their own regulations.",
    "languages": "German is the main language of instruction; minority and bilingual provision varies by Land.",
    "source": "https://www.kmk.org/",
    "status": "federal-state-curriculum-structure-identified-land-and-school-specific-topic-mapping-pending",
    "note": "A state and school pathway are required before claiming exact syllabus alignment. Keep these lessons supplementary until mapped to the relevant Land curriculum."
  },
  "Greece": {
    "level": "Gymnasio (lower secondary) and Lykeio (upper secondary)",
    "authority": "Hellenic Ministry of Education, Religious Affairs and Sports; Institute of Educational Policy (IEP)",
    "curriculum": "Greece has national curricula and subject programmes for lower and upper secondary education. General Lykeio and vocational EPAL routes have different course structures and learning requirements. Current IEP programme documents should determine grade-specific science and mathematics sequence.",
    "exam": "School assessments; Panhellenic examinations for access to higher education in relevant Lykeio pathways; vocational routes have distinct certification arrangements.",
    "languages": "Greek is the principal language of instruction; foreign languages are taught as curriculum subjects.",
    "source": "https://www.minedu.gov.gr/; https://www.iep.edu.gr/",
    "status": "national-curriculum-authorities-identified-current-grade-and-route-topic-mapping-pending",
    "note": "Distinguish Gymnasio, General Lykeio and EPAL content; verify current programme circulars and examination specifications."
  },
  "Grenada": {
    "level": "Primary and secondary education; lower and upper secondary",
    "authority": "Grenada Ministry of Education",
    "curriculum": "Grenada's secondary education operates within national policy and Caribbean regional curriculum and assessment pathways. Many schools prepare learners for CXC examinations, including CSEC and, where offered, CAPE. Subject availability and course sequence can vary by school.",
    "exam": "CXC CSEC and CAPE for applicable subjects and centres; confirm current syllabus and examination year with CXC and the school.",
    "languages": "English is the official language of instruction; Grenadian Creole is used in everyday communication.",
    "source": "https://www.gov.gd/; https://www.cxc.org/",
    "status": "regional-cxc-pathway-identified-school-and-subject-offering-topic-mapping-pending",
    "note": "Do not describe CXC syllabuses as a single Grenada-only national curriculum. Map each subject to the current CSEC or CAPE syllabus used by the school."
  },
  "Guatemala": {
    "level": "Ciclo Básico and Ciclo Diversificado",
    "authority": "Ministerio de Educación de Guatemala (MINEDUC)",
    "curriculum": "Guatemala's Currículo Nacional Base (CNB) establishes competencies and learning areas. Secondary education includes Ciclo Básico and the diversified upper-secondary cycle, where bachillerato and other specialised tracks differ. Subject names and depth should be mapped to the relevant CNB and career track.",
    "exam": "School and programme assessments; completion and certification requirements depend on the selected diversified pathway and current MINEDUC rules.",
    "languages": "Spanish is widely used in instruction; bilingual intercultural education supports relevant Maya, Garífuna and Xinka language communities.",
    "source": "https://www.mineduc.gob.gt/; https://cnb.mineduc.gob.gt/",
    "status": "national-cnb-framework-identified-grade-and-diversified-track-topic-mapping-pending",
    "note": "Respect bilingual-intercultural contexts and distinguish basic cycle from each diversified bachillerato or technical programme."
  },
  "Guyana": {
    "level": "Secondary education; Forms 1–6, with varied school pathways",
    "authority": "Ministry of Education, Guyana; Caribbean Examinations Council (CXC) for regional syllabuses",
    "curriculum": "Guyana's secondary schools use national education guidance alongside regional examination syllabuses. Subject offerings and progression differ by school and level. CSEC and CAPE syllabuses are relevant for participating centres; confirm the actual subject and examination route.",
    "exam": "National school assessments and CXC CSEC/CAPE in applicable schools and subjects.",
    "languages": "English is the official language of instruction; Guyanese Creole and Indigenous languages are used in communities.",
    "source": "https://education.gov.gy/; https://www.cxc.org/",
    "status": "national-ministry-and-cxc-pathways-identified-school-and-subject-mapping-pending",
    "note": "Use the school's current subject offering and CXC syllabus code before presenting a lesson as examination-aligned."
  },
  "Haiti": {
    "level": "Enseignement fondamental and secondary education",
    "authority": "Ministère de l’Éducation Nationale et de la Formation Professionnelle (MENFP)",
    "curriculum": "Haiti's education system includes fundamental education and secondary pathways undergoing reform. Curriculum documents, language policy and implementation can vary across programme and institution. Grade-specific subject sequence must be verified against current MENFP materials before claiming national alignment.",
    "exam": "Official school-leaving and state examination arrangements are set by MENFP; confirm the current secondary examination session and pathway.",
    "languages": "Haitian Creole and French are used in education; the language of teaching and assessment may vary by institution and programme.",
    "source": "https://menfp.gouv.ht/",
    "status": "ministry-identified-current-secondary-reform-and-grade-specific-topic-mapping-pending",
    "note": "Present this content as supplementary until current MENFP programmes and the relevant language of instruction are confirmed."
  },
  "Honduras": {
    "level": "Educación Básica and Educación Media (Bachillerato)",
    "authority": "Secretaría de Educación de Honduras",
    "curriculum": "Honduras uses national curriculum frameworks and basic curriculum standards, with Educación Media pathways including general and technical-professional options. Subject sequence and depth depend on the cycle, modality and current national curriculum documents.",
    "exam": "School-based assessment and official completion requirements under Secretaría de Educación; check current regulations for the learner's modality.",
    "languages": "Spanish is the principal language of instruction; Indigenous and Afro-Honduran language communities have context-specific provision.",
    "source": "https://www.se.gob.hn/",
    "status": "national-curriculum-framework-identified-modality-and-grade-topic-mapping-pending",
    "note": "Differentiate Educación Básica from Educación Media and general from technical-professional bachillerato."
  },
  "Hungary": {
    "level": "Lower and upper secondary education; gimnázium and vocational pathways",
    "authority": "Hungarian Ministry of Interior education administration; Educational Authority (Oktatási Hivatal)",
    "curriculum": "Hungary's National Core Curriculum (NAT) and framework curricula set national requirements, while school type and programme determine subject allocation and depth. Gymnasium and technical/vocational pathways must not be treated as identical.",
    "exam": "Érettségi (secondary school-leaving examination), with vocational qualification and examination requirements for relevant technical programmes.",
    "languages": "Hungarian is the main language of instruction; minority-language and bilingual schools also operate.",
    "source": "https://www.oktatas.hu/; https://njt.hu/",
    "status": "national-core-and-framework-curricula-identified-school-programme-topic-mapping-pending",
    "note": "Map lessons to the current NAT framework curriculum and the exact school type/year; check current Érettségi subject requirements."
  },
  "Iceland": {
    "level": "Compulsory school (grades 1–10) and upper-secondary education",
    "authority": "Icelandic Ministry of Education and Children; Directorate of Education and School Services",
    "curriculum": "Iceland's National Curriculum Guide provides national policy and subject objectives, while schools and upper-secondary institutions organise programmes and course structures. Upper-secondary routes can be academic or vocational, and course sequence varies by institution.",
    "exam": "Assessment and graduation requirements are defined through the national framework and individual upper-secondary programmes; verify current programme and admission requirements.",
    "languages": "Icelandic is the principal language of instruction; English and Danish are commonly taught, with additional language provision.",
    "source": "https://www.stjornarradid.is/; https://island.is/en/o/directorate-of-education-and-school-services",
    "status": "national-curriculum-guide-identified-school-and-upper-secondary-programme-topic-mapping-pending",
    "note": "Distinguish compulsory grades 1–10 from institution-specific upper-secondary programmes; do not assume one national chapter order for all tracks."
  }
};
for(const [country,p] of Object.entries(profiles)){
 const record=all[country]; if(!record) continue;
 record.curriculumAuthority=p.authority;
 record.curriculumLevel=p.level;
 record.curriculumSource=p.source;
 record.curriculumAuditStatus=p.status;
 record.curriculumNotice=p.note;
 record.curriculumExamination=p.exam;
 record.curriculumLanguages=p.languages;
 record.curriculumDescription=p.curriculum;
 const level=p.level;
 for(const [grade,subjects] of Object.entries(record.levels||{})){
  for(const [subject,chapters] of Object.entries(subjects||{})){
   for(const ch of chapters||[]){
    ch.curriculumStatus="supplementary-unverified";
    ch.curriculumContext=p.curriculum+" Authority: "+p.authority+". Assessment: "+p.exam+". Language: "+p.languages+". "+p.note+" This supplementary lesson is not yet mapped to a specific official learning outcome.";
    ch.seoTitle=country+" "+grade+" "+subject+" Notes and Worked Examples | CBE Nexus";
    ch.metaDescription="Study "+subject+" in "+country+" with structured supplementary lessons, labelled diagrams, worked examples, practical activities and revision questions. Check the current official syllabus for your school pathway.";
    ch.seoKeywords=[country+" "+subject+" notes",country+" "+grade+" "+subject+" curriculum",country+" "+subject+" revision",country+" "+subject+" worked examples",country+" "+subject+" practical activities","CBE Nexus Learning Studio"];
    ch.countryCurriculumStatus=p.status;
   }
  }
 }
 record.learningStudioSEO={title:country+" Secondary Biology, Chemistry, Physics, Mathematics and English | CBE Nexus",description:"Country-specific supplementary secondary learning resources with curriculum pathway guidance, labelled diagrams, worked examples and revision practice.",keywords:[country+" curriculum",country+" Biology notes",country+" Chemistry notes",country+" Physics notes",country+" Mathematics notes",country+" English notes","CBE Nexus Learning Studio"],authority:p.authority,examinationPathway:p.exam,languages:p.languages};
}
window.CBE_NEXUS_COUNTRY_BATCH_04={countries:Object.keys(profiles),subjects:["Biology","Chemistry","Physics","Mathematics","English"],status:"curriculum-pathway-profiled-topic-by-topic-audit-pending",version:"2026-11-16-batch-04"};
})();