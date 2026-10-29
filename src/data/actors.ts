// Actors — inventari de la lluita (font: W web + X xerrades; T1/T2 = tesis d'Iona Crusat, 2025). Bilingüe.
import type { Bilingual } from "../i18n/utils";

export interface Actor {
  name: string;
  type: Bilingual;
  role: Bilingual;
  source: string;
}

export const lluita: Actor[] = [
  {
    name: "Boicot ICL",
    type: { ca: "Campanya", en: "Campaign" },
    role: {
      ca: "Impulsa el boicot a ICL en el marc del BDS. Contacte: boicoticl@proton.me",
      en: "Drives the boycott of ICL within the BDS framework. Contact: boicoticl@proton.me",
    },
    source: "W/D",
  },
  {
    name: "Coalició Prou Complicitat amb Israel",
    type: { ca: "Organització", en: "Organisation" },
    role: { ca: "Xerrada «Trenquem les complicitats» (Alis Estapé)", en: "Talk 'Breaking the complicities' (Alis Estapé)" },
    source: "W /xerrades/",
  },
  {
    name: "Crits de la terra",
    type: { ca: "Col·lectiu", en: "Collective" },
    role: { ca: "Xerrada «Potassa a la terra i sal a l'aigua» (Pau)", en: "Talk 'Potash in the land and salt in the water' (Pau)" },
    source: "W /xerrades/",
  },
  {
    name: "ICTA — Institut de Ciència i Tecnologia Ambientals (UAB)",
    type: { ca: "Institut de recerca", en: "Research institute" },
    role: { ca: "Xerrada sobre impactes ecològics (Miguel)", en: "Talk on ecological impacts (Miguel)" },
    source: "W /xerrades/",
  },
  {
    name: "Aigua és vida",
    type: { ca: "Plataforma", en: "Platform" },
    role: { ca: "Defensa de l'aigua; xerrada del cicle (Dante)", en: "Water defence; talk series (Dante)" },
    source: "W /xerrades/",
  },
  {
    name: "ERA + Escola Agrària de Manresa",
    type: { ca: "Entitat / escola", en: "Organisation / school" },
    role: { ca: "Perspectiva agrària i agroecològica (Berta)", en: "Farming and agroecological perspective (Berta)" },
    source: "W /xerrades/",
  },
  {
    name: "ODG",
    type: { ca: "Organització", en: "Organisation" },
    role: { ca: "Xerrada «La classe treballadora contra les multinacionals» (Júlia)", en: "Talk 'The working class against multinationals' (Júlia)" },
    source: "W /xerrades/",
  },
  {
    name: "Prou Sal!",
    type: { ca: "Plataforma", en: "Platform" },
    role: {
      ca: "Col·lectiu de veïns i persones afectades del Bages, sense vincle amb cap partit. Neix el 2007 a l'enramada salada de Sallent. Exigeix aturar els abocaments i retirar els residus salins; organitza el judici popular contra ICL (2015) i documenta les sentències (prousal.org); (Albert)",
      en: "Collective of Bages residents and affected people, tied to no party. Born in 2007 at Sallent's salty enramada. Demands an end to dumping and removal of salt waste; organised the people's trial of ICL (2015) and documents the rulings (prousal.org); (Albert)",
    },
    source: "W /xerrades/ · D refs · T2 fig. 4 i annex 8",
  },
  {
    name: "Montsalat",
    type: { ca: "Plataforma cívica", en: "Civic platform" },
    role: {
      ca: "Neix el 1997 i agrupa col·lectius ecologistes, associacions veïnals i persones afectades. Va portar la via jurídica (amb l'AAVV La Rampinya): la denúncia de 1997 és l'origen de la condemna penal i dels contenciosos davant el TSJC. Fa seguiment dels impactes i proposa solucions tècniques; (Jep)",
      en: "Born in 1997, it groups ecologist collectives, neighbours' associations and affected people. Led the legal route (with the La Rampinya neighbours' association): the 1997 complaint is the origin of the criminal conviction and the TSJC appeals. Monitors impacts and proposes technical solutions; (Jep)",
    },
    source: "W /xerrades/ · D refs · T2 fig. 4 i annex 8",
  },
  {
    name: "ODHE — Observatori de Drets Humans i Empreses a la Mediterrània",
    type: { ca: "Observatori", en: "Observatory" },
    role: {
      ca: "Informes: fòsfor blanc (2017), metalls pesants, informe ICL",
      en: "Reports: white phosphorus (2017), heavy metals, ICL report",
    },
    source: "D refs",
  },
  {
    name: "El Salto",
    type: { ca: "Mitjà", en: "Media outlet" },
    role: { ca: "Suport al documental «Sal a la ferida»", en: "Support for the documentary 'Salt in the wound'" },
    source: "W /documental/",
  },
  {
    name: "L'Alzina (Col·lectiu Ecologista)",
    type: { ca: "Col·lectiu ecologista", en: "Ecologist collective" },
    role: {
      ca: "Denuncia Iberpotash per delicte ecològic el 1997 (arrel de la condemna del 2014). Ja el 1995 feia un mural a Manresa contra la salinització.",
      en: "Reports Iberpotash for ecological crime in 1997 (root of the 2014 conviction). Already in 1995 it painted a mural in Manresa against the salinisation.",
    },
    source: "T1/T2 annex 8",
  },
  {
    name: "AAVV La Rampinya (Sallent)",
    type: { ca: "Associació de veïns", en: "Neighbours' association" },
    role: {
      ca: "Amb Montsalat, guanya al TSJC tres sentències contra els abocaments de Sallent (2013–14), demana l'execució forçosa (2019) i recorre el 2023 el canvi urbanístic que permet plaques solars als runams.",
      en: "With Montsalat, wins three TSJC rulings against Sallent's dumping (2013–14), requests forced execution (2019) and in 2023 appeals the planning change allowing solar panels on the dumps.",
    },
    source: "T1 annex 1 i 3",
  },
  {
    name: "Taula del Llobregat · Ateneu Rocaus",
    type: { ca: "Xarxa territorial · ateneu", en: "Territorial network · social centre" },
    role: {
      ca: "Neixen el 2018 (la Taula, a Molins de Rei; l'Ateneu, al Bages). Cooperen amb Prou Sal! i el boicot, p. ex. a la protesta de la Cursa dels Maquis (2021).",
      en: "Both born in 2018 (the Taula in Molins de Rei; the Ateneu in Bages). They cooperate with Prou Sal! and the boycott, e.g. at the Cursa dels Maquis protest (2021).",
    },
    source: "T2 annex 8",
  },
  {
    name: "Unió de Pagesos · Ecologistes en Acció",
    type: { ca: "Sindicat agrari · ecologisme", en: "Farmers' union · ecologist group" },
    role: {
      ca: "La Unió de Pagesos participa al judici popular (2015), organitza un taller sobre salinització del sòl (2020) i demana el 2022 retirar la modificació urbanística de la mineria. Ecologistes en Acció signa amb Prou Sal! la petició de pla de restauració liderat per la Generalitat (2017).",
      en: "Unió de Pagesos takes part in the people's trial (2015), runs a workshop on soil salinisation (2020) and in 2022 asks for the mining planning change to be withdrawn. Ecologistes en Acció co-signs with Prou Sal! the call for a Generalitat-led restoration plan (2017).",
    },
    source: "T2 annex 8",
  },
  {
    name: "Teatre Kursaal de Manresa",
    type: { ca: "Equipament cultural", en: "Cultural venue" },
    role: { ca: "Victòria BDS: talla vincles amb ICL (2024–25)", en: "BDS win: cuts ties with ICL (2024–25)" },
    source: "D",
  },
  {
    name: "UManresa (Universitat de Vic)",
    type: { ca: "Universitat", en: "University" },
    role: { ca: "Victòria BDS: talla vincles amb ICL (2024–25)", en: "BDS win: cuts ties with ICL (2024–25)" },
    source: "D",
  },
];

export const objectiu: Actor[] = [
  {
    name: "ICL (Israel Chemicals Ltd)",
    type: { ca: "Multinacional", en: "Multinational" },
    role: {
      ca: "Explota potassa al Bages des de 1998–99; vincles amb l'exèrcit d'Israel; fòsfor blanc via filial dels EUA",
      en: "Mines potash in Bages since 1998–99; ties with Israel's army; white phosphorus via US subsidiary",
    },
    source: "D",
  },
  {
    name: "ICL Iberia (ex Iberpotash)",
    type: { ca: "Filial espanyola", en: "Spanish subsidiary" },
    role: {
      ca: "Mina de Cabanasses (Súria; Vilafruns aturada des del 2020). Condemnada penalment el 2014. Plantilla: 879 (informe 2024, dossier) o 758 al Bages (2023, tesi); facturació 332 M€ (dossier) o 322 M€ (La Vanguardia, 2023): vegeu discrepàncies",
      en: "Cabanasses mine (Súria; Vilafruns halted since 2020). Criminally convicted in 2014. Workforce: 879 (2024 report, dossier) or 758 in Bages (2023, thesis); turnover €332M (dossier) or €322M (La Vanguardia, 2023): see discrepancies",
    },
    source: "D · T2 §Àrea d'estudi · T1/T2 annex 1",
  },
  {
    name: "ICL Specialty Fertilizers / Fuentes Fertilizantes",
    type: { ca: "Filial agroquímica", en: "Agrochemical subsidiary" },
    role: {
      ca: "Totana i Cartagena; 162 M€ (2023); entrada de matèries de territoris ocupats",
      en: "Totana and Cartagena; €162M (2023); entry point for materials from occupied territories",
    },
    source: "D",
  },
  {
    name: "FOMDESA / Logística de Fertilizantes Fuentes",
    type: { ca: "Filials logística", en: "Logistics subsidiaries" },
    role: {
      ca: "Port de Cartagena (dàrsena d'Escombreras); descàrrega d'àcid fosfòric i potassa",
      en: "Port of Cartagena (Escombreras dock); unloading phosphoric acid and potash",
    },
    source: "D",
  },
  {
    name: "ICL Dead Sea / ICL Rotem",
    type: { ca: "Filials a Israel", en: "Subsidiaries in Israel" },
    role: {
      ca: "Mar Mort i Nègueb; ICL Rotem, delinqüent ambiental núm. 1 (2023)",
      en: "Dead Sea and Negev; ICL Rotem, #1 environmental offender (2023)",
    },
    source: "D",
  },
  {
    name: "ICL-IP America",
    type: { ca: "Filial EUA", en: "US subsidiary" },
    role: {
      ca: "Contracte de fòsfor blanc amb l'exèrcit dels EUA (2020–25, Pine Bluff Arsenal)",
      en: "White phosphorus contract with the US army (2020–25, Pine Bluff Arsenal)",
    },
    source: "D",
  },
  {
    name: "FGC — Ferrocarrils de la Generalitat",
    type: { ca: "Empresa pública", en: "Public company" },
    role: {
      ca: "Contracte de 30 anys amb ICL; +45% de trens; campanya per trencar la col·laboració",
      en: "30-year contract with ICL; +45% trains; campaign to end the collaboration",
    },
    source: "W/D",
  },
  {
    name: "CAF (Construcciones y Auxiliar de Ferrocarriles)",
    type: { ca: "Empresa", en: "Company" },
    role: {
      ca: "Tramvia de Jerusalem (assentaments); citada per l'ONU; trens Sèries 112/113/213 d'FGC",
      en: "Jerusalem tramway (settlements); cited by the UN; FGC trains Series 112/113/213",
    },
    source: "W /fgc/",
  },
  {
    name: "Generalitat de Catalunya",
    type: { ca: "Institució", en: "Institution" },
    role: {
      ca: "Complicitats: FGC, ACA, subvencions (PERTE), Pla Phoenix. Segons la tesi, «permissiva»: fiances rebaixades, conveni amb ICL (2015) que preveu enviar la sal al mar fins al 2065, i canvis urbanístics quan la llei no encaixa",
      en: "Complicities: FGC, ACA, subsidies (PERTE), Phoenix Plan. According to the thesis, 'permissive': discounted bonds, an agreement with ICL (2015) planning to send the salt to the sea until 2065, and planning changes when the law does not fit",
    },
    source: "W/D · T1 §Dimensió 1–3 · T2 fig. 2",
  },
  {
    name: "ACA — Agència Catalana de l'Aigua",
    type: { ca: "Organisme", en: "Agency" },
    role: {
      ca: "Concessió de 12,8 M m³ a ICL; 122,7 M€ en osmosi inversa; 90,5 M€ al programa 2022–27 contra la salinitat (les mineres hi posen 58,4 M€)",
      en: "12.8 Mm³ concession to ICL; €122.7M on reverse osmosis; €90.5M in the 2022–27 anti-salinity programme (mining firms contribute €58.4M)",
    },
    source: "D · T1 §Dimensió 4",
  },
  {
    name: "Ajuntaments de Súria i Sallent",
    type: { ca: "Institucions locals", en: "Local institutions" },
    role: {
      ca: "Permisos d'ampliació del runam Fusteret; pla de plaques solars als runams. Divergents: Sallent obre el 2024 una Comissió Municipal per la Mineria i el 2013 va rebutjar el Pla Especial d'ampliació del Cogulló; d'altres donen suport a l'empresa per l'ocupació",
      en: "Expansion permits for the Fusteret dump; solar panel plan on the dumps. Divergent: Sallent opens a Municipal Mining Commission in 2024 and in 2013 rejected the Cogulló expansion plan; others back the company for jobs",
    },
    source: "D · T1 annex 1 · T2 fig. 2",
  },
  {
    name: "Estat espanyol",
    type: { ca: "Estat", en: "State" },
    role: {
      ca: "Complicitat jurídica i de finançament (PERTE, 18 M€: no consta si s'ha desemborsat o retornat); la Comissió Europea li reclama 5,8 M€ d'ajuts il·legals a Iberpotash",
      en: "Legal and financial complicity (PERTE, €18M: not recorded whether paid out or returned); the European Commission demands €5.8M of illegal aid to Iberpotash back from it",
    },
    source: "D · T1 annex 1",
  },
  {
    name: "Elbit Systems",
    type: { ca: "Empresa armamentística", en: "Arms company" },
    role: {
      ca: "Foneria de directius (Elad Aharonson) i accionistes d'ICL",
      en: "Feeder of ICL executives (Elad Aharonson) and shareholders",
    },
    source: "D",
  },
  {
    name: "Israel Corporation / Idan Ofer",
    type: { ca: "Accionista majoritari", en: "Majority shareholder" },
    role: {
      ca: "Fortuna valorada en 20.000 M$; dimissió de la junta de Harvard (2023)",
      en: "Fortune valued at $20B; resigned from Harvard's board (2023)",
    },
    source: "D",
  },
  {
    name: "Monsanto/Bayer · Pine Bluff Arsenal · exèrcit dels EUA",
    type: { ca: "Cadena del fòsfor blanc", en: "White phosphorus chain" },
    role: { ca: "Producció i ús de fòsfor blanc (2008–13 i 2020–25)", en: "White phosphorus production and use (2008–13 and 2020–25)" },
    source: "D",
  },
];
// --- Qui jutja i qui regula (T2 fig. 2; T1 annex 3) ---
export const judicial: Actor[] = [
  {
    name: "TSJC — Tribunal Superior de Justícia de Catalunya",
    type: { ca: "Tribunal", en: "Court" },
    role: {
      ca: "Sala contenciosa: dicta les sentències que anul·len el POUM, l'autorització ambiental i el programa de restauració i declaren il·legals els abocaments (2011–2014); el març de 2024 rebutja els recursos d'ICL i de l'Ajuntament contra l'execució forçosa.",
      en: "Administrative chamber: issues the rulings annulling the urban plan, the environmental permit and the restoration programme and declaring the dumping illegal (2011–2014); in March 2024 rejects ICL's and the Town Council's appeals against forced execution.",
    },
    source: "T1 annex 3 · T2 fig. 2",
  },
  {
    name: "Jutjat Penal núm. 1 de Manresa · Audiència de Barcelona",
    type: { ca: "Tribunal penal", en: "Criminal court" },
    role: {
      ca: "Condemna Iberpotash i tres exdirectius per delicte de salinització d'aigües (2014; ratificat el 2016). El 2022 refusa el pla de recuperació ambiental d'ICL.",
      en: "Convicts Iberpotash and three former executives of salinising waters (2014; upheld 2016). In 2022 rejects ICL's environmental recovery plan.",
    },
    source: "T1 annex 1 · T2 fig. 2",
  },
  {
    name: "Comissió Europea · Tribunal General de la UE",
    type: { ca: "Institució europea", en: "EU institution" },
    role: {
      ca: "Obre un procediment d'infracció contra Espanya (2014), n'amplia l'abast (2015) i investiga ajuts il·legals (2016). El Tribunal General avala la decisió el 2020.",
      en: "Opens an infringement procedure against Spain (2014), extends it (2015) and investigates illegal aid (2016). The General Court upholds the decision in 2020.",
    },
    source: "T1 annex 1 i 3 · T2 fig. 2",
  },
  {
    name: "Fiscalia de Medi Ambient del TSJC",
    type: { ca: "Ministeri fiscal", en: "Public prosecutor" },
    role: {
      ca: "El 2003 demana la clausura cautelar dels abocaments salins per indicis de delicte ecològic; acusa a la causa penal.",
      en: "In 2003 requests precautionary closure of the salt dumping over signs of ecological crime; prosecutes in the criminal case.",
    },
    source: "T1 annex 1",
  },
];

// --- Mapa del conflicte (T2 fig. 2 i fig. 3): actor, afinitat amb el conflicte, poder, posició ---
export interface ConflictRow {
  group: Bilingual;
  actor: Bilingual;
  affinity: Bilingual;
  power: Bilingual;
  position: Bilingual;
}
export const conflictMap: ConflictRow[] = [
  {
    group: { ca: "Promotors", en: "Promoters" },
    actor: { ca: "ICL Iberia", en: "ICL Iberia" },
    affinity: { ca: "Afí", en: "Aligned" },
    power: { ca: "Molt alt", en: "Very high" },
    position: { ca: "Justificadora / responsable directa", en: "Justifying / directly responsible" },
  },
  {
    group: { ca: "Afectats", en: "Affected" },
    actor: { ca: "Treballadors/es de la mina", en: "Mine workers" },
    affinity: { ca: "Afí", en: "Aligned" },
    power: { ca: "Mitjà", en: "Medium" },
    position: { ca: "Ambivalent / dependent (por de perdre la feina)", en: "Ambivalent / dependent (fear of job loss)" },
  },
  {
    group: { ca: "Afectats", en: "Affected" },
    actor: { ca: "Ciutadania del Bages", en: "Bages residents" },
    affinity: { ca: "Aliena", en: "Alien" },
    power: { ca: "Baix", en: "Low" },
    position: { ca: "Fragmentada, amb interès en la qualitat ambiental", en: "Fragmented, with an interest in environmental quality" },
  },
  {
    group: { ca: "Afectats", en: "Affected" },
    actor: { ca: "Moviments socials", en: "Social movements" },
    affinity: { ca: "Oposats", en: "Opposed" },
    power: { ca: "Mitjà", en: "Medium" },
    position: { ca: "Crítics / mobilitzadors", en: "Critical / mobilising" },
  },
  {
    group: { ca: "Reguladors", en: "Regulators" },
    actor: { ca: "Ajuntaments afectats", en: "Affected town councils" },
    affinity: { ca: "Diferents", en: "Different" },
    power: { ca: "Mitjà", en: "Medium" },
    position: { ca: "Dividida: uns donen suport a l'empresa per l'ocupació, d'altres exigeixen controls", en: "Divided: some back the company for jobs, others demand controls" },
  },
  {
    group: { ca: "Reguladors", en: "Regulators" },
    actor: { ca: "Generalitat (ACA, Territori, Indústria)", en: "Generalitat (ACA, Territory, Industry)" },
    affinity: { ca: "Afí", en: "Aligned" },
    power: { ca: "Molt alt", en: "Very high" },
    position: { ca: "Permissiva: ha facilitat la continuïtat d'ICL", en: "Permissive: has enabled ICL's continuity" },
  },
  {
    group: { ca: "Reguladors", en: "Regulators" },
    actor: { ca: "Comissió Europea", en: "European Commission" },
    affinity: { ca: "Oposada", en: "Opposed" },
    power: { ca: "Alt", en: "High" },
    position: { ca: "Crítica / exigent: pot sancionar", en: "Critical / demanding: can sanction" },
  },
  {
    group: { ca: "Altres", en: "Others" },
    actor: { ca: "TSJC", en: "TSJC" },
    affinity: { ca: "Neutre", en: "Neutral" },
    power: { ca: "Alt", en: "High" },
    position: { ca: "Àrbitre / sancionador", en: "Arbiter / sanctioner" },
  },
  {
    group: { ca: "Altres", en: "Others" },
    actor: { ca: "Jutjat Penal 1 de Manresa", en: "Manresa Criminal Court 1" },
    affinity: { ca: "Neutre", en: "Neutral" },
    power: { ca: "Mitjà", en: "Medium" },
    position: { ca: "Àrbitre / sancionador", en: "Arbiter / sanctioner" },
  },
];

// --- Tres generacions d'oposició (T2 fig. 4) ---
export interface Generation {
  name: string;
  born: string;
  form: Bilingual;
  aim: Bilingual;
  stance: Bilingual;
  strategy: Bilingual;
}
export const lineage: Generation[] = [
  {
    name: "Montsalat",
    born: "1997",
    form: {
      ca: "Plataforma cívica de grups ecologistes, associacions veïnals i persones afectades",
      en: "Civic platform of ecologist groups, neighbours' associations and affected people",
    },
    aim: {
      ca: "Aturar els impactes de la mineria de sal i fer-la compatible amb l'entorn",
      en: "Stop the impacts of salt mining and make it compatible with its surroundings",
    },
    stance: { ca: "Ecologisme conservacionista", en: "Conservationist ecologism" },
    strategy: {
      ca: "Seguiment dels impactes, via jurídica, educació ambiental, propostes tècniques",
      en: "Impact monitoring, legal action, environmental education, technical proposals",
    },
  },
  {
    name: "Prou Sal!",
    born: "2007",
    form: {
      ca: "Col·lectiu de veïns i persones afectades, sense vincle amb cap partit",
      en: "Collective of residents and affected people, tied to no party",
    },
    aim: {
      ca: "Aturar els abocaments als runams de Sallent i Súria i retirar els residus dipositats (Sallent, Súria, Balsareny, Cardona)",
      en: "Stop dumping at the Sallent and Súria dumps and remove deposited waste (Sallent, Súria, Balsareny, Cardona)",
    },
    stance: { ca: "Ecologisme reformista", en: "Reformist ecologism" },
    strategy: {
      ca: "Conscienciació comunitària i mediàtica, mobilització i incidència institucional",
      en: "Community and media awareness, mobilisation and institutional lobbying",
    },
  },
  {
    name: "Boicot ICL",
    born: "2023–24",
    form: {
      ca: "Campanya amb col·lectius ecologistes, feministes, antifeixistes i llibertaris",
      en: "Campaign with ecologist, feminist, antifascist and libertarian groups",
    },
    aim: {
      ca: "Expulsar ICL, nacionalitzar la mina i trencar tots els vincles empresarials i institucionals amb ICL",
      en: "Expel ICL, nationalise the mine and cut all business and institutional ties with ICL",
    },
    stance: {
      ca: "Ecologisme radical, anticapitalisme, antiimperialisme, solidaritat amb Palestina",
      en: "Radical ecologism, anti-capitalism, anti-imperialism, solidarity with Palestine",
    },
    strategy: {
      ca: "Acció directa disruptiva, conscienciació crítica, denúncia i confrontació institucional",
      en: "Disruptive direct action, critical awareness, institutional denunciation and confrontation",
    },
  },
];

export const lineageNote: Bilingual = {
  ca: "Segons la tesi, el període més actiu va ser 2007–2015, amb cinc victòries judicials, però Montsalat i Prou Sal! mantenien un discurs només ambiental; Boicot ICL hi afegeix el model capitalista i extractiu i vol superar la fractura amb la classe treballadora. La tesi també apunta que part de la campanya no prové dels municipis miners.",
  en: "According to the thesis, the most active period was 2007–2015, with five court wins, but Montsalat and Prou Sal! kept to an environmental-only discourse; Boicot ICL adds the capitalist and extractive model and aims to bridge the gap with the working class. The thesis also notes that part of the campaign does not come from the mining towns.",
};
