// Documents de recerca — registre (font: W /investigacio/). Bilingüe.
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
      ca: "Text complet disponible a la base de coneixement (24 pàgines) — el lector en línia arribarà en una propera versió.",
      en: "Full text available in the knowledge base (24 pages) — the online reader arrives in a future version.",
    },
    link: "https://boicoticl.org/investigacio/",
  },
  {
    id: "extractivisme",
    title: "Extractivisme, percepció dels riscos i mobilització social: una mirada al conflicte ambiental del Bages",
    author: "Iona Crusat",
    year: "—",
    lang: "CAT",
    type: { ca: "Estudi", en: "Study" },
    summary: {
      ca: "Examina els impactes de les mines de potassa al Bages i com els riscos han estat ignorats o minimitzats. Mitjançant entrevistes a gent afectada i anàlisi del discurs corporatiu, mostra com ICL consolida la seva hegemonia amb una estratègia de «maladaptació»: converteix el malestar en consentiment passiu. Evidencia els límits de l'acció social quan el poder empresarial (Gramsci) controla l'agenda.",
      en: "Examines the impacts of the Bages potash mines and how risks have been ignored or downplayed. Through interviews with affected people and analysis of corporate discourse, it shows how ICL consolidates its hegemony through a strategy of 'maladaptation': turning discontent into passive consent. It highlights the limits of social action when corporate power (Gramsci) sets the agenda.",
    },
    status: "pending",
    statusNote: {
      ca: "El PDF té la capa de text corrupta (codificació de font). L'extracció sencera del contingut està pendent d'OCR o dels originals. El resum és del web de la campanya.",
      en: "The PDF's text layer is corrupted (font encoding). Full content extraction is pending OCR or the originals. The summary comes from the campaign website.",
    },
    link: "https://boicoticl.org/investigacio/",
  },
  {
    id: "complicitats",
    title: "Complicitats institucionals i capitalisme verd: el cas d'ICL Iberia al Bages",
    author: "Iona Crusat",
    year: "—",
    lang: "CAT",
    type: { ca: "Estudi", en: "Study" },
    summary: {
      ca: "Analitza les complicitats que han permès a ICL minvar les regulacions ambientals i com el Pla Phoenix i les propostes de «transició ecològica» s'emmarquen en el capitalisme verd. Conclou que el Pla Phoenix es basa en complicitats institucionals, lleis laxes i greenwashing per mantenir el sistema extractiu intacte. El glossari del marc conceptual s'ha pogut recuperar parcialment (decret de convalidesa, flexibilització ambiental, capitalisme verd…).",
      en: "Analyses the complicities that have let ICL weaken environmental regulations and how the Phoenix Plan and institutional 'green transition' proposals fit within green capitalism. It concludes the Phoenix Plan rests on institutional complicities, lax laws and greenwashing to keep the extractive system intact. The conceptual-framework glossary was partially recoverable (decree of amnesty, environmental flexibilisation, green capitalism…).",
    },
    status: "pending",
    statusNote: {
      ca: "El PDF té la capa de text corrupta. Extracció pendent (parcialment recuperat el marc conceptual).",
      en: "The PDF's text layer is corrupted. Extraction pending (conceptual framework partially recovered).",
    },
    link: "https://boicoticl.org/investigacio/",
  },
];

export const dossiersSources: Bilingual = {
  ca: "Referències completes del dossier (pàg. 20–24): icliberia.com, informes ESG d'ICL (2023/2024), whoprofits.org, highergov.com (contracte fòsfor blanc), odhe.cat, washingtonpost.com, prousal.org, montsalat.cat, 3cat/324, Cañedo-Argüelles et al. 2017 (Environmental Pollution) i altres. Disponibles a la base de coneixement.",
  en: "Full references in the dossier (pp. 20–24): icliberia.com, ICL ESG reports (2023/2024), whoprofits.org, highergov.com (white phosphorus contract), odhe.cat, washingtonpost.com, prousal.org, montsalat.cat, 3cat/324, Cañedo-Argüelles et al. 2017 (Environmental Pollution) and more. Available in the knowledge base.",
};