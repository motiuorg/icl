// Actors — inventari de la lluita (font: W web + X xerrades). Bilingüe.
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
    name: "Prou Sal",
    type: { ca: "Plataforma", en: "Platform" },
    role: {
      ca: "Documenta sentències i judicis contra ICL (prousal.org); (Albert)",
      en: "Documents rulings and lawsuits against ICL (prousal.org); (Albert)",
    },
    source: "W /xerrades/ · D refs",
  },
  {
    name: "MontSalat",
    type: { ca: "Col·lectiu", en: "Collective" },
    role: { ca: "Xerrada del cicle (Jep)", en: "Talk series (Jep)" },
    source: "W /xerrades/ · D refs",
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
      ca: "Explota potassa al Bages des de 1998; vincles amb l'exèrcit d'Israel; fòsfor blanc via filial dels EUA",
      en: "Mines potash in Bages since 1998; ties with Israel's army; white phosphorus via US subsidiary",
    },
    source: "D",
  },
  {
    name: "ICL Iberia (ex Iberpotash)",
    type: { ca: "Filial espanyola", en: "Spanish subsidiary" },
    role: {
      ca: "Mina de Cabanasses (Súria); 879 treballadors; 332 M€ facturats (2023)",
      en: "Cabanasses mine (Súria); 879 workers; €332M billed (2023)",
    },
    source: "D",
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
      ca: "Complicitats: FGC, ACA, subvencions (PERTE), Pla Phoenix",
      en: "Complicities: FGC, ACA, subsidies (PERTE), Phoenix Plan",
    },
    source: "W/D",
  },
  {
    name: "ACA — Agència Catalana de l'Aigua",
    type: { ca: "Organisme", en: "Agency" },
    role: {
      ca: "Concessió de 12,8 M m³ a ICL; 122,7 M€ en osmosi inversa",
      en: "12.8 Mm³ concession to ICL; €122.7M on reverse osmosis",
    },
    source: "D",
  },
  {
    name: "Ajuntaments de Súria i Sallent",
    type: { ca: "Institucions locals", en: "Local institutions" },
    role: {
      ca: "Permisos d'ampliació del runam Fusteret; pla de plaques solars als runams",
      en: "Expansion permits for the Fusteret dump; solar panel plan on the dumps",
    },
    source: "D",
  },
  {
    name: "Estat espanyol",
    type: { ca: "Estat", en: "State" },
    role: { ca: "Complicitat jurídica i de finançament (PERTE, 18 M€)", en: "Legal and financial complicity (PERTE, €18M)" },
    source: "D",
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