// Campanyes — estat i contingut (font: W web + D dossier). Bilingüe.
import type { Bilingual } from "../i18n/utils";

export interface Campaign {
  slug: string;
  name: string;
  status: Bilingual;
  tagline: Bilingual;
  objectives: Bilingual[];
  data: Bilingual[];
  actions: Bilingual[];
  wins: Bilingual[];
  materials: Bilingual[];
  source: string;
}

export const campaigns: Campaign[] = [
  {
    slug: "boicot-icl",
    name: "Boicot ICL",
    status: { ca: "Activa · marc BDS", en: "Active · BDS framework" },
    tagline: {
      ca: "Que ICL marxi de forma immediata i permanent; després, procés participatiu sobre el futur de la mina.",
      en: "Get ICL out, immediately and permanently; then, a participatory process on the mine's future.",
    },
    objectives: [
      {
        ca: "Solidaritat amb Palestina: ICL és part de l'economia del genocidi (BDS).",
        en: "Solidarity with Palestine: ICL is part of the genocide economy (BDS).",
      },
      {
        ca: "El territori: pràctiques ecocides reincidents i acaparament de recursos.",
        en: "The territory: repeated ecocidal practices and resource grabbing.",
      },
      {
        ca: "La classe treballadora: fi del xantatge laboral, de les primes i la subcontractació.",
        en: "The working class: end to labour blackmail, bonuses and subcontracting.",
      },
    ],
    data: [
      { ca: "332 M€ facturats a l'estat espanyol (2023)", en: "€332M billed in Spain (2023)" },
      { ca: "879 treballadors (2024)", en: "879 workers (2024)" },
      {
        ca: "Informe financer d'ICL 2022: admet risc pel boicot",
        en: "ICL's 2022 financial report admits boycott risk",
      },
    ],
    actions: [
      { ca: "Difusió del dossier informatiu", en: "Distribution of the info dossier" },
      { ca: "Pressió a entitats i institucions", en: "Pressure on organisations and institutions" },
      { ca: "Coordinació amb el moviment BDS", en: "Coordination with the BDS movement" },
    ],
    wins: [
      { ca: "Teatre Kursaal de Manresa talla vincles (2024–25)", en: "Teatre Kursaal de Manresa cuts ties (2024–25)" },
      { ca: "UManresa talla vincles (2024–25)", en: "UManresa cuts ties (2024–25)" },
      { ca: "Agermanament Barcelona–Tel-Aviv trencat", en: "Barcelona–Tel Aviv twinning broken" },
      {
        ca: "Oficines del Departament d'Acció de la Generalitat a Israel tancades",
        en: "Generalitat's Action Department office in Israel closed",
      },
    ],
    materials: [
      { ca: "Dossier informatiu (CAT/ENG)", en: "Info dossier (CAT/ENG)" },
      { ca: "Cançó d'INCENDI KIF", en: "INCENDI KIF song" },
      { ca: "Documental «Sal a la ferida»", en: "Documentary 'Salt in the wound'" },
    ],
    source: "W manifest · D §Demandes",
  },
  {
    slug: "revoltes-de-la-terra",
    name: "Revoltes de la Terra — Germinació 2026",
    status: { ca: "Activa (2026)", en: "Active (2026)" },
    tagline: {
      ca: "«Som el riu que es revolta»: un procés d'anys, no un cap de setmana d'acció.",
      en: "'We are the river that rises up': a years-long process, not a weekend of action.",
    },
    objectives: [
      { ca: "1 · Fem fora ICL", en: "1 · Get ICL out" },
      {
        ca: "2 · Aturem el desastre: els runams han de deixar de créixer; el Llobregat és un problema de país",
        en: "2 · Stop the disaster: the salt dumps must stop growing; the Llobregat is a country-scale problem",
      },
      {
        ca: "3 · Regenerem i habitem el territori: procés col·lectiu sobre quina comarca volem",
        en: "3 · Regenerate and inhabit the territory: a collective process on the region we want",
      },
    ],
    data: [
      {
        ca: "Un barri de Sallent esfondrat i 800 persones desallotjades (xifra del web; el dossier diu 110 habitants — a reconciliar)",
        en: "A collapsed Sallent neighbourhood and 800 evacuees (website figure; the dossier says 110 inhabitants — to reconcile)",
      },
      {
        ca: "Sentència del runam de Sallent: deu anys després segueix creixent",
        en: "Sallent dump ruling: ten years later it keeps growing",
      },
    ],
    actions: [
      { ca: "Mobilització territorial", en: "Territorial mobilisation" },
      {
        ca: "Construcció de xarxa amb actors afectats (plantilles, veïnat, pagesia)",
        en: "Network building with affected actors (workforces, neighbours, farmers)",
      },
    ],
    wins: [],
    materials: [
      { ca: "Manifest «Germinació 2026»", en: "'Germinació 2026' manifesto" },
      { ca: "Cançó «Boicot ICL» (INCENDI KIF)", en: "'Boicot ICL' song (INCENDI KIF)" },
    ],
    source: "W /revoltes-de-la-terra/",
  },
  {
    slug: "fgc",
    name: "Campanya FGC",
    status: { ca: "Activa · pressió a una empresa pública", en: "Active · pressure on a public company" },
    tagline: {
      ca: "Aturar la col·laboració de Ferrocarrils de la Generalitat amb ICL — la «Línia Còmplice del Genocidi».",
      en: "Stop Ferrocarrils de la Generalitat's collaboration with ICL — the 'Genocide Complicity Line'.",
    },
    objectives: [
      {
        ca: "Revisió urgent dels contractes amb ICL i CAF (dret internacional + resolució del Parlament de Catalunya).",
        en: "Urgent review of the contracts with ICL and CAF (international law + Catalan Parliament resolution).",
      },
      {
        ca: "Avaluació pública de diligència deguda en drets humans.",
        en: "Public human-rights due diligence assessment.",
      },
      {
        ca: "Mesures per evitar contribució a situacions il·legals.",
        en: "Measures to avoid contributing to illegal situations.",
      },
      {
        ca: "Posar fi a les relacions contractuals amb ICL Iberia i CAF.",
        en: "End contractual relations with ICL Iberia and CAF.",
      },
    ],
    data: [
      { ca: "745 → 1110 trens/any (2023 → 2025), +45%", en: "745 → 1,110 trains/year (2023 → 2025), +45%" },
      {
        ca: "Contracte renovat el 2019 per 30 anys (4 trens/dia, 7 dies/setmana)",
        en: "Contract renewed in 2019 for 30 years (4 trains/day, 7 days a week)",
      },
      {
        ca: "43 M€ en 5 locomotores i 66 vagons (en servei el 2023)",
        en: "€43M on 5 locomotives and 66 wagons (in service in 2023)",
      },
      { ca: "CAF: tramvia de Jerusalem; citada per l'ONU", en: "CAF: Jerusalem tramway; cited by the UN" },
    ],
    actions: [
      { ca: "Protestes als municipis per on passen els trens", en: "Protests in the towns the trains pass through" },
      { ca: "Carta d'exigències a FGC", en: "Letter of demands to FGC" },
      { ca: "Xerrades i projecció del documental", en: "Talks and documentary screenings" },
    ],
    wins: [],
    materials: [
      { ca: "Carta a FGC (4 exigències)", en: "Letter to FGC (4 demands)" },
      { ca: "Cartells icl-fgc1 / icl-fgc2 / V2", en: "Posters icl-fgc1 / icl-fgc2 / V2" },
    ],
    source: "W /fgc/ · D §Port",
  },
  {
    slug: "distribuidores",
    name: "Campanya Distribuïdores",
    status: { ca: "Fase de mapa i registre", en: "Mapping & registry phase" },
    tagline: {
      ca: "Mapa i llistat de les distribuïdores dels fertilitzants d'ICL a la Península Ibèrica.",
      en: "Map and list of the distributors of ICL's fertilisers across the Iberian Peninsula.",
    },
    objectives: [
      {
        ca: "Identificar la xarxa de distribució d'ICL Specialty Fertilizers",
        en: "Identify ICL Specialty Fertilizers' distribution network",
      },
      { ca: "Pressió local sobre distribuïdores i grans compradors", en: "Local pressure on distributors and big buyers" },
    ],
    data: [
      {
        ca: "Xarxa de distribuïdors en tot l'estat (mapa al web de la campanya)",
        en: "Distributor network across Spain (map on the campaign site)",
      },
    ],
    actions: [{ ca: "Recopilació de contactes — registre intern en curs", en: "Contact gathering — internal registry in progress" }],
    wins: [],
    materials: [
      {
        ca: "Mapa de distribuïdores (boicoticl.org/proposta-distris/)",
        en: "Distributors map (boicoticl.org/proposta-distris/)",
      },
    ],
    source: "W /proposta-distris/ · D (mapa de distribuïdors de la Península)",
  },
];

export const talks: {
  title: Bilingual;
  speakers: Bilingual;
  topics: Bilingual;
}[] = [
  {
    title: {
      ca: "Trenquem les complicitats amb el genocidi a Palestina",
      en: "Breaking the complicities with the genocide in Palestine",
    },
    speakers: {
      ca: "Alis Estapé (Prou Complicitat amb Israel) · Arnau (Boicot ICL)",
      en: "Alis Estapé (Prou Complicitat amb Israel) · Arnau (Boicot ICL)",
    },
    topics: {
      ca: "BDS, història d'ICL, «Adopta un Soldat», fòsfor blanc",
      en: "BDS, ICL's history, 'Adopt a Soldier', white phosphorus",
    },
  },
  {
    title: { ca: "Potassa a la terra i sal a l'aigua", en: "Potash in the land, salt in the water" },
    speakers: {
      ca: "Pau (Boicot ICL / Crits de la terra) · Miguel (ICTA) · Dante (Aigua és vida) · Berta (ERA / Escola Agrària de Manresa)",
      en: "Pau (Boicot ICL / Crits de la terra) · Miguel (ICTA) · Dante (Aigua és vida) · Berta (ERA / Manresa Agricultural School)",
    },
    topics: {
      ca: "Impactes ecològics, ús de l'aigua, fertilitzants i agroindústria",
      en: "Ecological impacts, water use, fertilisers and agribusiness",
    },
  },
  {
    title: {
      ca: "La classe treballadora contra les multinacionals",
      en: "The working class against the multinationals",
    },
    speakers: {
      ca: "Júlia (ODG) · Albert (Prou Sal) · Jep (MontSalat) · Uri (Boicot ICL)",
      en: "Júlia (ODG) · Albert (Prou Sal) · Jep (MontSalat) · Uri (Boicot ICL)",
    },
    topics: {
      ca: "Complicitat institucional, cooptació, flexibilització legal",
      en: "Institutional complicity, co-optation, legal flexibilisation",
    },
  },
];