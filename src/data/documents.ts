// Documents de recerca — registre (font: W /investigacio/ i, des del 29.10.2026, transcripcions completes a boicot-icl-knowledge/sources/). Bilingüe.
import type { Bilingual } from "../i18n/utils";

export interface Doc {
  id: string;
  title: string;
  author: string;
  year: string;
  lang: string;
  type: Bilingual;
  summary: Bilingual;
  status: "full" | "pending";
  statusNote: Bilingual;
  findings?: Bilingual[]; // idees clau, només el que diu el document
  link: string;
}

export const documents: Doc[] = [
  {
    id: "dossier",
    title: "Dossier informatiu Boicot ICL",
    author: "Campanya Boicot ICL",
    year: "2025 (nov.)",
    lang: "CAT + ENG",
    type: { ca: "Dossier", en: "Dossier" },
    summary: {
      ca: "Denuncia el vincle directe entre ICL, el genocidi i l'ocupació militar de Palestina; documenta l'operació de l'empresa als Països Catalans (mines de Súria i Sallent, FGC, terminal del Port de Barcelona), l'extracció de recursos palestins, el fòsfor blanc, els danys ambientals (salinització del Llobregat, metalls pesants) i l'estratègia laboral. Inclou les demandes de la campanya.",
      en: "Denounces the direct link between ICL, the genocide and the military occupation of Palestine; documents the company's operations in the Catalan Countries (Súria and Sallent mines, FGC, Barcelona port terminal), the extraction of Palestinian resources, white phosphorus, environmental damage (Llobregat salinisation, heavy metals) and its labour strategy. Includes the campaign's demands.",
    },
    status: "full",
    statusNote: {
      ca: "Text complet disponible a la base de coneixement (27 pàgines de PDF, 24 de numerades; transcrit a Markdown) — el lector en línia arribarà en una propera versió.",
      en: "Full text available in the knowledge base (27 PDF pages, 24 numbered; transcribed to Markdown) — the online reader arrives in a future version.",
    },
    link: "https://boicoticl.org/investigacio/",
  },
  {
    id: "extractivisme",
    title: "Extractivisme, percepció dels riscos i mobilització social: una mirada al conflicte ambiental del Bages",
    author: "Iona Crusat Reig (UAB; tutor: Josep Espluga)",
    year: "2025 (maig)",
    lang: "CAT",
    type: { ca: "Estudi", en: "Study" },
    summary: {
      ca: "Examina els impactes de les mines de potassa al Bages i com els riscos han estat ignorats o minimitzats. Mitjançant entrevistes a gent afectada i anàlisi del discurs corporatiu, mostra com ICL consolida la seva hegemonia amb una estratègia de «maladaptació»: converteix el malestar en consentiment passiu. Evidencia els límits de l'acció social quan el poder empresarial (Gramsci) controla l'agenda.",
      en: "Examines the impacts of the Bages potash mines and how risks have been ignored or downplayed. Through interviews with affected people and analysis of corporate discourse, it shows how ICL consolidates its hegemony through a strategy of 'maladaptation': turning discontent into passive consent. It highlights the limits of social action when corporate power (Gramsci) sets the agenda.",
    },
    status: "full",
    statusNote: {
      ca: "Transcrita per OCR (95 pàgines; la capa de text del PDF és corrupta) amb taules, cronologies i xifres revisades sobre la imatge. Part empírica: 4 entrevistes (març–abril de 2025), mostra molt petita: són indicis qualitatius, no dades representatives.",
      en: "Transcribed by OCR (95 pages; the PDF's text layer is corrupt), with tables, chronologies and figures checked against the page image. Empirical part: 4 interviews (March–April 2025), a very small sample: qualitative indications, not representative data.",
    },
    findings: [
      {
        ca: "Els riscos laborals (les morts a la mina) preocupen més i de forma més emocional que els ambientals, que s'han assimilat com a rutina.",
        en: "Occupational risks (deaths in the mine) worry people more, and more emotionally, than environmental ones, which have been absorbed as routine.",
      },
      {
        ca: "Hi ha malestar i fins i tot rebuig a les mines, però no s'ha traduït en mobilització àmplia: impotència davant la multinacional, desconfiança en l'autoorganització i dificultat d'aliança amb les persones treballadores.",
        en: "There is discontent and even rejection of the mines, but it has not become broad mobilisation: powerlessness before the multinational, distrust of self-organisation and difficulty allying with workers.",
      },
      {
        ca: "ICL consolida una dinàmica de «maladaptació»: la gent busca compensacions pels danys en lloc d'organitzar-se per exigir responsabilitats.",
        en: "ICL consolidates a 'maladaptation' dynamic: people seek compensation for damages instead of organising to demand accountability.",
      },
      {
        ca: "La narrativa dels moviments (Montsalat, Prou Sal!, Boicot ICL) ha prevalgut sobre la de l'empresa pel que fa als riscos ambientals; no pel que fa a l'economia, on la mina es veu com l'única via.",
        en: "The movements' narrative (Montsalat, Prou Sal!, Boicot ICL) has prevailed over the company's on environmental risks, though not on the economy, where the mine is seen as the only way.",
      },
      {
        ca: "Inclou cronologies de la salinització i de les mobilitzacions (1995–2025), un mapa d'actors del conflicte i el relat de la tradició d'oposició: Montsalat (1997) → Prou Sal! (2007) → Boicot ICL (2024).",
        en: "Includes chronologies of salinisation and mobilisations (1995–2025), a map of the conflict's actors and the account of the opposition tradition: Montsalat (1997) → Prou Sal! (2007) → Boicot ICL (2024).",
      },
    ],
    link: "https://boicoticl.org/investigacio/",
  },
  {
    id: "complicitats",
    title: "Complicitats institucionals i capitalisme verd: el cas d'ICL Iberia al Bages",
    author: "Iona Crusat Reig (doble grau en Ciències Polítiques i Sociologia; tutor: Josep Espluga)",
    year: "2025",
    lang: "CAT",
    type: { ca: "Estudi", en: "Study" },
    summary: {
      ca: "Analitza les complicitats que han permès a ICL minvar les regulacions ambientals i com el Pla Phoenix i les propostes de «transició ecològica» s'emmarquen en el capitalisme verd. Conclou que el Pla Phoenix es basa en complicitats institucionals, lleis laxes i greenwashing per mantenir el sistema extractiu intacte.",
      en: "Analyses the complicities that have let ICL weaken environmental regulations and how the Phoenix Plan and institutional 'green transition' proposals fit within green capitalism. It concludes the Phoenix Plan rests on institutional complicities, lax laws and greenwashing to keep the extractive system intact.",
    },
    status: "full",
    statusNote: {
      ca: "Transcrita per OCR (64 pàgines; la capa de text del PDF és corrupta) amb taules, annexos de cronologia i litigis i xifres revisats sobre la imatge. És un treball de grau amb marc crític explícit: font secundària, a contrastar amb les fonts primàries que cita. La bibliografia transcrita és aproximada.",
      en: "Transcribed by OCR (64 pages; the PDF's text layer is corrupt), with tables, chronology and litigation annexes and figures checked against the page image. It is an undergraduate thesis with an explicit critical framework: a secondary source, to be checked against the primary sources it cites. The transcribed bibliography is approximate.",
    },
    findings: [
      {
        ca: "Capturat institucional: les administracions catalanes han actuat de promotores i garants d'ICL, mitjançant «flexibilitat ambiental» i «legalitat convenient» (canviar la norma o les condicions quan la llei no encaixa).",
        en: "Institutional capture: Catalan administrations have acted as ICL's promoters and guarantors through 'environmental flexibility' and 'convenient legality' (changing the rule or conditions when the law does not fit).",
      },
      {
        ca: "Impunitat judicial: les sentències (cinc procediments i dos expedients de la UE) han estat clau per reconèixer el deure de restaurar, però no han responsabilitzat l'empresa: dos runams encara esperen restauració i el Fusteret continua creixent.",
        en: "Judicial impunity: the rulings (five cases and two EU files) were key to recognising the duty to restore, but did not hold the company accountable: two dumps still await restoration and the Fusteret keeps growing.",
      },
      {
        ca: "Diners públics: col·lectors, potabilitzadores, ajuts i fiances rebaixades (6,9 + 6,1 M€ davant d'un cost estimat de 83,3 M€ només al Cogulló).",
        en: "Public money: collectors, treatment plants, aid and discounted bonds (€6.9M + €6.1M against an estimated €83.3M for the Cogulló alone).",
      },
      {
        ca: "El Pla Phoenix converteix les obligacions de les sentències en oportunitats de negoci (venda de residus salins) i les presenta com a «mineria sostenible»: greenwashing dins del capitalisme verd.",
        en: "The Phoenix Plan turns obligations from the rulings into business opportunities (selling salt waste) and presents them as 'sustainable mining': greenwashing within green capitalism.",
      },
    ],
    link: "https://boicoticl.org/investigacio/",
  },
];

export const dossiersSources: Bilingual = {
  ca: "Referències completes del dossier (pàg. 20–24): icliberia.com, informes ESG d'ICL (2023/2024), whoprofits.org, highergov.com (contracte fòsfor blanc), odhe.cat, washingtonpost.com, prousal.org, montsalat.cat, 3cat/324, Cañedo-Argüelles et al. 2017 (Environmental Pollution) i altres. Disponibles a la base de coneixement.",
  en: "Full references in the dossier (pp. 20–24): icliberia.com, ICL ESG reports (2023/2024), whoprofits.org, highergov.com (white phosphorus contract), odhe.cat, washingtonpost.com, prousal.org, montsalat.cat, 3cat/324, Cañedo-Argüelles et al. 2017 (Environmental Pollution) and more. Available in the knowledge base.",
};