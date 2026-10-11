// Cronologia — només fets documentats (D = dossier, W = web). Bilingüe.
// Categories: lluita (mobilitzacions/victòries) · danys (impactes/sentències)
// · corporatiu (ICL i xarxa) · institucional (administracions/empreses públiques).
import type { Bilingual } from "../i18n/utils";

export interface TimelineEvent {
  year: string;
  title: Bilingual;
  text: Bilingual;
  cat: "lluita" | "danys" | "corporatiu" | "institucional";
  source: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "1921–22",
    title: { ca: "Orígens del projecte miner del Mar Mort", en: "Origins of the Dead Sea mining project" },
    text: {
      ca: "Moshe Novomeysky, sionista convençut, tresorer de l'Haganah, impulsa el projecte miner que després serà Dead Sea Works (1951) i ICL (1968).",
      en: "Moshe Novomeysky, a convinced Zionist and Haganah treasurer, pushes the mining project that becomes Dead Sea Works (1951) and ICL (1968).",
    },
    cat: "corporatiu",
    source: "D §Qui és ICL",
  },
  {
    year: "1988",
    title: { ca: "Col·lector de salmorres finalitzat", en: "Brine collector completed" },
    text: {
      ca: "Canonada de 120 km que porta salmorra de les mines fins al mar. Filtracions i averies reiterades; vessament a Sant Joan de Vilatorrada el 2023.",
      en: "A 120 km pipeline taking mine brine to the sea. Repeated leaks and breakdowns; spill at Sant Joan de Vilatorrada in 2023.",
    },
    cat: "danys",
    source: "D §Col·lector",
  },
  {
    year: "1998",
    title: { ca: "ICL entra a Catalunya", en: "ICL enters Catalonia" },
    text: {
      ca: "Privatització de les mines públiques: Iberpotash (després ICL Iberia) obté els drets de les mines de potassa de Súria i Sallent/Balsareny.",
      en: "Privatisation of the public mines: Iberpotash (later ICL Iberia) gets the rights to the Súria and Sallent/Balsareny potash mines.",
    },
    cat: "corporatiu",
    source: "D/W",
  },
  {
    year: "2005",
    title: { ca: "Crida BDS", en: "BDS call" },
    text: {
      ca: "Més de 170 organitzacions de la societat civil palestina convoquen la campanya internacional de Boicot, Desinversions i Sancions.",
      en: "Over 170 Palestinian civil society organisations launch the international Boycott, Divestment and Sanctions campaign.",
    },
    cat: "lluita",
    source: "D §BDS",
  },
  {
    year: "2008–09",
    title: { ca: "Operació Plom Fos", en: "Operation Cast Lead" },
    text: {
      ca: "L'exèrcit israelià fa servir fòsfor blanc sobre espais habitats de Gaza (Israel ho admet el 2010). El fòsfor blanc està prohibit per al seu ús en zones civils (Protocol III).",
      en: "The Israeli army uses white phosphorus over inhabited areas of Gaza (Israel admits it in 2010). White phosphorus use in civilian areas is banned (Protocol III).",
    },
    cat: "corporatiu",
    source: "D §Fòsfor blanc",
  },
  {
    year: "2009",
    title: { ca: "Potabilitzadores amb osmosi inversa", en: "Reverse osmosis treatment plants" },
    text: {
      ca: "L'ACA inverteix 122,7 M€ a Abrera i Sant Joan Despí per dessalar el Llobregat contaminat per la mineria.",
      en: "The ACA spends €122.7M at Abrera and Sant Joan Despí to desalinate the mining-polluted Llobregat.",
    },
    cat: "institucional",
    source: "D §Potabilitzadores",
  },
  {
    year: "2009",
    title: { ca: "Abandonament del barri de l'Estació (Sallent)", en: "Abandonment of the Estació neighbourhood (Sallent)" },
    text: {
      ca: "Risc d'esfondrament pels forats de la mineria: el barri s'abandona (110 habitants segons el dossier; el web parla de 800 persones desallotjades).",
      en: "Collapse risk from the mining voids: the neighbourhood is abandoned (110 inhabitants per the dossier; the website says 800 people evacuated).",
    },
    cat: "danys",
    source: "D §Barri · W revoltes",
  },
  {
    year: "2011",
    title: { ca: "ICL compra Agromediterráneo", en: "ICL buys Agromediterráneo" },
    text: {
      ca: "Adquisició de Fuentes Fertilizantes (Totana i Cartagena, Múrcia): canal d'entrada i transformació de matèries primeres de territoris palestins ocupats.",
      en: "Acquisition of Fuentes Fertilizantes (Totana and Cartagena, Murcia): an entry and processing channel for raw materials from occupied Palestinian territories.",
    },
    cat: "corporatiu",
    source: "D §Specialty Fertilizers",
  },
  {
    year: "2014",
    title: { ca: "Sentència penal contra tres dirigents d'ICL", en: "Criminal ruling against three ICL executives" },
    text: {
      ca: "Presó per incompliment de lleis ambientals; ordre d'aturar l'abocament al runam del Cogulló (Sallent) i restaurar-lo. Els runams encara creixen.",
      en: "Prison for breaching environmental law; order to stop dumping at the Cogulló dump (Sallent) and restore it. The dumps still grow.",
    },
    cat: "danys",
    source: "D §Runams",
  },
  {
    year: "2014",
    title: { ca: "Operació «Marge protector»", en: "Operation Protective Edge" },
    text: {
      ca: "Més de 2.000 morts a Gaza; ICL ofereix a ~2.000 ciutadans israelians un dia de descans a l'assentament de Kfar Etzion (Cisjordània).",
      en: "Over 2,000 killed in Gaza; ICL offers ~2,000 Israeli citizens a free day off at the Kfar Etzion settlement (West Bank).",
    },
    cat: "corporatiu",
    source: "D §Colònies",
  },
  {
    year: "2019",
    title: { ca: "Contracte FGC–ICL renovat 30 anys", en: "FGC–ICL contract renewed for 30 years" },
    text: {
      ca: "4 trens diaris de 21 vagons, 7 dies/setmana; FGC inverteix 43 M€ en 5 locomotores i 66 vagons (en servei el 2023).",
      en: "4 daily trains of 21 wagons, 7 days a week; FGC invests €43M in 5 locomotives and 66 wagons (in service in 2023).",
    },
    cat: "institucional",
    source: "W /fgc/ · D §Port",
  },
  {
    year: "2020",
    title: { ca: "Sallent i Balsareny tanquen; s'obre la terminal del Port", en: "Sallent and Balsareny close; port terminal opens" },
    text: {
      ca: "La mineria es concentra a Cabanasses (Súria). Al Port de Barcelona, la terminal Tramer passa de 800.000 a 4 milions de tones de capacitat.",
      en: "Mining concentrates at Cabanasses (Súria). At the Port of Barcelona, the Tramer terminal grows from 800,000 to 4 million tonnes of capacity.",
    },
    cat: "corporatiu",
    source: "D §ICL Iberia Súria i Port",
  },
  {
    year: "2023",
    title: { ca: "Genocidi a Gaza; ICL s'hi vincula", en: "Genocide in Gaza; ICL ties itself to it" },
    text: {
      ca: "Trens FGC: 745. ICL celebra la Hanukka a bases militars («Llum per a la victòria»), «adopta» regiments i munta dutxes calentes per als soldats a Gaza.",
      en: "FGC trains: 745. ICL celebrates Hanukkah at military bases ('Light for victory'), 'adopts' regiments and sets up hot showers for soldiers in Gaza.",
    },
    cat: "corporatiu",
    source: "D §Suport a l'exèrcit · W /fgc/",
  },
  {
    year: "2023",
    title: { ca: "ICL Rotem, delinqüent ambiental núm. 1 a Israel", en: "ICL Rotem, Israel's #1 environmental offender" },
    text: {
      ca: "Primera de la llista del Ministeri de Protecció Ambiental (violacions 2019–2021); al desembre, filtració d'aigües residuals amb subproducte radioactiu.",
      en: "First on the Environmental Protection Ministry list (2019–2021 violations); in December, a wastewater leak containing a radioactive by-product.",
    },
    cat: "corporatiu",
    source: "D §Extracció",
  },
  {
    year: "2024–25",
    title: { ca: "Victòries de la campanya", en: "Campaign wins" },
    text: {
      ca: "El Teatre Kursaal de Manresa i la UManresa tallen vincles amb ICL. Concentració davant el Kursaal (març 2025) i manifestació a Manresa (setembre 2025).",
      en: "Manresa's Teatre Kursaal and UManresa cut ties with ICL. Rally outside the Kursaal (March 2025) and demonstration in Manresa (September 2025).",
    },
    cat: "lluita",
    source: "D §Introducció · W",
  },
  {
    year: "2025",
    title: { ca: "El projecte de bateries a Sallent, abandonat", en: "The Sallent battery project, abandoned" },
    text: {
      ca: "Gener: anunci de fàbrica de càtodes amb Dynanonic i 18 M€ del PERTE. Desembre: ICL anuncia que abandona el projecte.",
      en: "January: cathode factory announced with Dynanonic and €18M from PERTE. December: ICL announces the project is abandoned.",
    },
    cat: "corporatiu",
    source: "D §Bateries",
  },
  {
    year: "2025",
    title: { ca: "Premi «Defense Minister's Shield»", en: "'Defense Minister's Shield' award" },
    text: {
      ca: "El Ministeri de Defensa d'Israel premia ICL pel suport als reservistes («the vanguard of the State of Israel»).",
      en: "Israel's Defence Ministry awards ICL for supporting reservists ('the vanguard of the State of Israel').",
    },
    cat: "corporatiu",
    source: "D §Suport a l'exèrcit",
  },
  {
    year: "2026",
    title: { ca: "Germinació 2026 i campanyes actives", en: "Germinació 2026 and active campaigns" },
    text: {
      ca: "Revoltes de la Terra (Fem fora ICL · Aturem el desastre · Regenerem i habitem). Campanya FGC (carta d'exigències, protestes). Campanya Distribuïdores.",
      en: "Revoltes de la Terra (Get ICL out · Stop the disaster · Regenerate and inhabit). FGC campaign (letter of demands, protests). Distributors campaign.",
    },
    cat: "lluita",
    source: "W",
  },
  {
    year: "2027",
    title: { ca: "Nou col·lector de salmorres (previst)", en: "New brine collector (planned)" },
    text: {
      ca: "Funcional des del runam del Cogulló, finançat en part amb diners públics.",
      en: "Operational from the Cogulló dump, partly funded with public money.",
    },
    cat: "institucional",
    source: "D §Col·lector",
  },
];

export const timelineNote: Bilingual = {
  ca: "Hi ha més dates de mobilització històrica als estudis d'Iona Crusat (extracció de text pendent) i a l'arxiu de la campanya. Els buits es marcaran com a pendents, mai inventats.",
  en: "More dates of historic mobilisation are in Iona Crusat's studies (text extraction pending) and the campaign's archive. Gaps are flagged as pending, never invented.",
};