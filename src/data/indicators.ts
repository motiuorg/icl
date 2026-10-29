// Indicadors i sèries per a les visualitzacions — bilingüe (ca/en).
// Regla: cada dada porta font (D = dossier nov–des 2025, W = boicoticl.org,
// T1 = Crusat 2025 «Complicitats institucionals i capitalisme verd»,
// T2 = Crusat 2025 «Extractivisme, percepció dels riscos i mobilització social»).
// Les tesis són treballs de grau amb marc crític explícit: es tracten com a font
// secundària i es contrasten amb les fonts primàries que citen.
// [derivat] = càlcul propi marcat a la UI.
import type { Bilingual } from "../i18n/utils";

export interface Stat {
  label: Bilingual;
  value: string;
  note: Bilingual;
  source: string;
}

export const kpis: Stat[] = [
  {
    label: { ca: "Aigua concedida per l'ACA", en: "Water granted by the ACA" },
    value: "12,8 M m³/any",
    note: {
      ca: "Més que el consum anual de Terrassa (233.000 hab.) · ≈ 10 piscines olímpiques al dia",
      en: "More than the yearly consumption of Terrassa (233,000 inh.) · ≈ 10 Olympic pools a day",
    },
    source: "D §Ús de l'aigua · W manifest",
  },
  {
    label: { ca: "Massa salina exposada", en: "Exposed salt mass" },
    value: "> 80 M t",
    note: {
      ca: "4 runams (Fusteret, Cogulló, Cabanasses, Botjosa); el Fusteret de Súria encara creix (≈ 1,6 M t/any el 2024) malgrat l'ordre penal",
      en: "4 salt dumps (Fusteret, Cogulló, Cabanasses, Botjosa); Súria's Fusteret still grows (≈ 1.6 Mt/year in 2024) despite the criminal order",
    },
    source: "D §Runams · T1 §Impunitat (notes 20–21)",
  },
  {
    label: { ca: "Trens FGC per a ICL", en: "FGC trains for ICL" },
    value: "745 → 1110",
    note: {
      ca: "2023 → 2025 (+45% segons la campanya; +49% exacte [derivat])",
      en: "2023 → 2025 (+45% per the campaign; +49% exact [derived])",
    },
    source: "W /fgc/",
  },
  {
    label: { ca: "Morts laborals (8 anys)", en: "Workplace deaths (8 years)" },
    value: "10",
    note: {
      ca: "Xifra del web de la campanya; el dossier només diu «diversos accidents mortals en les últimes dècades» (vegeu «Xifres a reconciliar»)",
      en: "Campaign-website figure; the dossier only says 'several fatal accidents in recent decades' (see 'Figures to reconcile')",
    },
    source: "W manifest · D §Demandes",
  },
  {
    label: { ca: "Retirada dels runams", en: "Salt dump removal" },
    value: "75 vs 180 anys",
    note: {
      ca: "El que proposa el pla vs el ritme real de restauració segons el dossier (runam de la Botjosa). Atenció: la tesi dona 0,4 M t/any sobre 9,5 M t, que serien ≈ 24 anys per a la Botjosa sola (vegeu «Xifres a reconciliar»)",
      en: "What the plan proposes vs the real restoration pace according to the dossier (Botjosa dump). Note: the thesis gives 0.4 Mt/year on 9.5 Mt, which would be ≈ 24 years for the Botjosa alone (see 'Figures to reconcile')",
    },
    source: "D §Runams · T1 §Pla Phoenix",
  },
  {
    label: { ca: "Despesa pública directa", en: "Direct public spending" },
    value: "> 480 M€",
    note: {
      ca: "Suma de partides del dossier: 122,7 M€ potabilitzadores (2009) + 300 M€ deute estimat + 43 M€ FGC + 18 M€ PERTE. Pot haver-hi solapaments (vegeu «Xifres a reconciliar»)",
      en: "Sum of dossier items: €122.7M treatment plants (2009) + €300M estimated debt + €43M FGC + €18M PERTE. Items may overlap (see 'Figures to reconcile')",
    },
    source: "D §Potabilitzadores, §Port, §Bateries",
  },
];

// --- Aigua ---
export const water = {
  icl_hm3: 12.8,
  manresa_hm3: 12.8 / 2.5, // W: 2,5 cops el consum de Manresa
  manresa_derived: true,
  depuradora_hm3: 6.8, // D: 6,8; T1/T2: 6,86 hm³/any (sol·licitud d'agost de 2020, concessió específica d'ICL)
  pools_per_day: 10,
  phoenix_baells: 3,
  phoenix_llosa: 4,
  osmotic_meur: 122.7,
  debt_meur: 300,
  sources: [
    {
      ca: "D §Ús de l'aigua: concessió ACA 12,8 M m³; 6,8 M m³ de la depuradora de Manresa; restauració = 3 pantans de la Baells o 4 de la Llosa del Cavall",
      en: "D §Water use: ACA concession 12.8 Mm³; 6.8 Mm³ from the Manresa plant; restoration = 3 Baells reservoirs or 4 of La Llosa del Cavall",
    } satisfies Bilingual,
    {
      ca: "W manifest: 2,5× el consum de Manresa; Pla Phoenix = 3 pantans de la Baells a 10 piscines olímpiques/dia",
      en: "W manifesto: 2.5× Manresa's consumption; Phoenix Plan = 3 Baells reservoirs at 10 Olympic pools/day",
    } satisfies Bilingual,
    {
      ca: "D §Potabilitzadores: osmosi inversa a Abrera i Sant Joan Despí (122,7 M€, 2009); deute > 300 M€",
      en: "D §Water treatment plants: reverse osmosis at Abrera and Sant Joan Despí (€122.7M, 2009); debt > €300M",
    } satisfies Bilingual,
    {
      ca: "T1 §Dimensió 4: 73,5 M€ a Abrera (85% de fons de la UE) + 49,2 M€ a Sant Joan Despí = 122,7 M€ (ACA, 2009); +3 M€/any de manteniment; ≈ 198 M€ en col·lectors i filtres (ACA, 2009)",
      en: "T1 §Dimension 4: €73.5M at Abrera (85% EU funds) + €49.2M at Sant Joan Despí = €122.7M (ACA, 2009); +€3M/year maintenance; ≈ €198M in collectors and filters (ACA, 2009)",
    } satisfies Bilingual,
    {
      ca: "T1 §Annex 2 / T2 §Annex 6: ICL és la 6a empresa en extracció d'aigua per a ús industrial a Catalunya (El Crític, 2024); la concessió de 6,86 hm³/any de la depuradora de Manresa es va sol·licitar l'agost de 2020",
      en: "T1 §Annex 2 / T2 §Annex 6: ICL is the 6th-largest industrial water abstractor in Catalonia (El Crític, 2024); the 6.86 hm³/year concession from the Manresa treatment plant was requested in August 2020",
    } satisfies Bilingual,
  ],
};

// --- Runams ---
export const runams = {
  count: 4,
  names: ["Fusteret (Súria)", "Cogulló (Sallent)", "Cabanasses (Súria)", "Botjosa (Sallent)"] as const,
  restored: "Vilafruns (Balsareny), impermeabilitzat el 2009/2010 amb 7,5 M€ de l'ACA",
  masa_mt: 80,
  restoration_plan_years: 75,
  restoration_real_years: 180,
  // Fiança: el dossier només dona 6,9 M€; la tesi aclareix que és la de Sallent (Súria: 6,1 M€).
  fianca_meur: 6.9,
  fianca_sallent_meur: 6.9,
  fianca_suria_meur: 6.1,
  fianca_original_meur: { suria: 0.77, sallent: 1.1 },
  restoration_cost_cogullo_meur: 83.3, // Estudi Ramon Folch (2012); nota T1: «83 M€»
  fianca_eu_criteria_meur: 100,
  manteniment_meur: [30, 40] as const,
  collector_km: 120,
  collector_year: 1988, // D; T1/T2 situen el final de les obres el novembre de 1989
  new_collector_year: 2027, // D; T1/T2: el 2020 s'esperava per al 2025, el 2022 es va endarrerir un any
  sentence_year: 2014,
  sentence_date: "18.12.2014",
  sentence_months: "5–6", // Audiència Provincial, març 2016: 5 mesos (cronologia); T1 diu «6 mesos» — vegeu discrepàncies
  sentence_fine_eur: 13500,
  cogullo_dumping_stopped: 2019,
  botjosa_rate_mt: 0.4,
  fusteret_growth_mt: 1.6,
  sources: [
    {
      ca: "D §Runams: > 80 M t; el dossier afirma que la sentència penal de 2014 «condemnava a presó a tres dirigents» (vegeu «Xifres a reconciliar»); pla = 75 anys; ritme Botjosa = 180 anys (dossier); fiança 6,9 M€; rasa + salmorra 30–40 M€/any",
      en: "D §Salt dumps: >80 Mt; the dossier states the 2014 criminal ruling 'sentenced three executives to prison' (see 'Figures to reconcile'); plan = 75 years; Botjosa pace = 180 years (dossier); €6.9M bond; ditch + brine €30–40M/year",
    } satisfies Bilingual,
    {
      ca: "D §Col·lector: canonada 120 km (1988); nou col·lector funcional el 2027 des del Cogulló",
      en: "D §Brine collector: 120 km pipeline (1988); new collector operational from Cogulló in 2027",
    } satisfies Bilingual,
    {
      ca: "T1 §Impunitat i annex 3 · T2 annex 6: sentència penal 18.12.2014 (confirmada el 2016 amb pena rebaixada a 5 mesos); abocament al Cogulló aturat el 30.06.2019 per les sentències del TSJC; fiances de 6,9 M€ (Sallent) i 6,1 M€ (Súria); Botjosa ≈ 0,4 M t/any; Fusteret ≈ 1,6 M t/any (2024)",
      en: "T1 §Impunity and annex 3 · T2 annex 6: criminal ruling 18.12.2014 (upheld in 2016 with the sentence cut to 5 months); Cogulló dumping stopped on 30.06.2019 under the TSJC rulings; bonds of €6.9M (Sallent) and €6.1M (Súria); Botjosa ≈ 0.4 Mt/year; Fusteret ≈ 1.6 Mt/year (2024)",
    } satisfies Bilingual,
  ],
};

// --- FGC / transport ---
export const fgc = {
  trains: [
    { year: "2023", count: 745 },
    { year: "2025", count: 1110 },
  ],
  pct_campaign: 45,
  pct_exact: Math.round(((1110 - 745) / 745) * 100),
  contract_years: 30,
  contract_renewed: 2019,
  trains_per_day: 4,
  wagons_per_train: 21,
  investment_meur: 43,
  sources: [
    {
      ca: "W /fgc/: 745 (2023) → 1110 (2025), «més d'un 45%»; contracte renovat 2019 per 30 anys; 43 M€ (5 locomotores + 66 vagons)",
      en: "W /fgc/: 745 (2023) → 1,110 (2025), 'over 45%'; contract renewed 2019 for 30 years; €43M (5 locomotives + 66 wagons)",
    } satisfies Bilingual,
    {
      ca: "D §Port: 4 trens diaris de 21 vagons, 7 dies/setmana",
      en: "D §Port: 4 daily trains of 21 wagons, 7 days a week",
    } satisfies Bilingual,
  ],
};

// --- Diners públics ---
export const publicMoney: { label: Bilingual; amount: number; note: Bilingual }[] = [
  {
    label: { ca: "Osmosi inversa potabilitzadores (2009)", en: "Reverse osmosis treatment plants (2009)" },
    amount: 122.7,
    note: { ca: "Abrera + Sant Joan Despí", en: "Abrera + Sant Joan Despí" },
  },
  {
    label: { ca: "Deute de la salinització (estimat)", en: "Salinisation debt (estimated)" },
    amount: 300,
    note: { ca: "Administració pública catalana", en: "Catalan public administration" },
  },
  {
    label: { ca: "Manteniment rasa + salmorra (cada any)", en: "Ditch + brine maintenance (yearly)" },
    amount: 40,
    note: { ca: "30–40 M€/any [es mostra el màxim]", en: "€30–40M/year [maximum shown]" },
  },
  {
    label: { ca: "FGC — locomotores i vagons (2019)", en: "FGC — locomotives & wagons (2019)" },
    amount: 43,
    note: { ca: "Empresa pública", en: "Public company" },
  },
  {
    label: { ca: "PERTE fàbrica bateries Sallent (2025)", en: "PERTE Sallent battery plant (2025)" },
    amount: 18,
    note: {
      ca: "Projecte abandonat al desembre 2025; no consta si l'ajut s'ha desemborsat o retornat",
      en: "Project abandoned in December 2025; unclear whether the grant was paid out or returned",
    },
  },
];

// --- Laboral / territori ---
export const laboral = {
  deaths_8y: 10, // W; no apareix al dossier
  workers_iberia_2024: 879, // D: informe de responsabilitat corporativa, 2024
  workers_spain_2023: 918, // T2: ICL Group 2024
  workers_bages_2023: 758, // T2: ICL Iberia 2024
  revenue_meur: 332, // D: 2023, «a l'Estat espanyol»
  revenue_meur_t2: 322, // T2: La Vanguardia, 25.03.2024
  fertilizers: 100,
  farmers_claims: 30,
  evicted_dossier: 110,
  evicted_web: 800,
  evicted_families_2008: 46, // Nació Digital, 26.04.2012 (verificació externa)
  evicted_people_2009: 121, // Adigsa, 08.01.2009, 37 unitats familiars (id.)
  export_pct: 80,
  potassa_t: 1_000_000, // D: «aproximadament un milió»
  potassa_t_t2: 600_575, // T2: 2023
};

// --- Justícia: 5 processos judicials + 2 expedients de la UE (T1 §Impunitat, annex 3; cronologies d'annex 1/6) ---
export interface Case {
  name: Bilingual;
  years: string;
  who: Bilingual;
  court: string;
  outcome: Bilingual;
  after: Bilingual;
}
export const justice: Case[] = [
  {
    name: {
      ca: "Causa penal per delicte ecològic (salinització d'aigües)",
      en: "Criminal case for ecological crime (water salinisation)",
    },
    years: "1997 → 2014 → 2023",
    who: { ca: "L'Alzina i Montsalat (denúncia de 1997)", en: "L'Alzina and Montsalat (1997 complaint)" },
    court: "Jutjat Penal 1 de Manresa",
    outcome: {
      ca: "Desembre de 2014: condemna a Iberpotash i a tres dirigents pels fets de 1997–2000 (Sallent, Santpedor, Callús i Súria). Pena de presó rebaixada a 5–6 mesos (el 2016, per dilacions indegudes) i 13.500 € de multa.",
      en: "December 2014: Iberpotash and three executives convicted for the 1997–2000 facts (Sallent, Santpedor, Callús and Súria). Prison term cut to 5–6 months (in 2016, for undue delays) and a €13,500 fine.",
    },
    after: {
      ca: "El 2017 l'empresa presenta el pla de recuperació de les aigües; el febrer de 2022 el jutjat el rebutja i el 2023 accepta que un tècnic de l'ACA en valori la suficiència. La tesi destaca que els tres condemnats van quedar a la pena mínima per no ingressar a presó.",
      en: "In 2017 the company files its water-recovery plan; in February 2022 the court rejects it and in 2023 accepts that an ACA technician assess whether it is sufficient. The thesis stresses the three convicts ended up with the minimum term that avoids entering prison.",
    },
  },
  {
    name: {
      ca: "Contenciós contra la fiança i el pla de restauració del Cogulló",
      en: "Appeal against the bond and the restoration plan for the Cogulló",
    },
    years: "2008 → 2014",
    who: { ca: "Sebastià Estradé (particular)", en: "Sebastià Estradé (private individual)" },
    court: "TSJC (i Tribunal Suprem)",
    outcome: {
      ca: "Octubre de 2011: el TSJC qualifica d'insuficients el programa i la fiança de restauració; el Tribunal Suprem ho ratifica el juliol de 2014.",
      en: "October 2011: the TSJC rules the restoration programme and bond insufficient; the Supreme Court upholds it in July 2014.",
    },
    after: {
      ca: "ICL respon amb el Pla Phoenix (2011–12). Les fiances s'acaben fixant en 6,9 M€ (Sallent) i 6,1 M€ (Súria), un 50% per sota del cost estimat.",
      en: "ICL responds with the Phoenix Plan (2011–12). The bonds end up at €6.9M (Sallent) and €6.1M (Súria), 50% below the estimated cost.",
    },
  },
  {
    name: {
      ca: "Contenciós contra el POUM de 2010 de Sallent",
      en: "Appeal against Sallent's 2010 urban plan (POUM)",
    },
    years: "2010 → 2019",
    who: { ca: "AAVV La Rampinya i Montsalat", en: "La Rampinya neighbours' association and Montsalat" },
    court: "TSJC",
    outcome: {
      ca: "Juliol de 2013: anul·la la clau 19 del POUM, que legalitzava el runam del Cogulló sense condicions ambientals. Per primera vegada s'exigeix aturar l'abocament; s'hi fixa el 30 de juny de 2017 i una alçada màxima de 538 m (abans, 610 m).",
      en: "July 2013: annuls clause 19 of the POUM, which legalised the Cogulló dump without environmental conditions. Dumping is ordered to stop for the first time; 30 June 2017 is set as deadline, with a 538 m height cap (previously 610 m).",
    },
    after: {
      ca: "Pròrrogues successives: l'abocament al Cogulló només s'atura el 30 de juny de 2019.",
      en: "Successive extensions: dumping at the Cogulló only stops on 30 June 2019.",
    },
  },
  {
    name: {
      ca: "Contenciós contra l'autorització ambiental de Sallent/Balsareny",
      en: "Appeal against the Sallent/Balsareny environmental permit",
    },
    years: "2008 → 2015",
    who: { ca: "AAVV La Rampinya i Montsalat", en: "La Rampinya neighbours' association and Montsalat" },
    court: "TSJC (i Tribunal Suprem)",
    outcome: {
      ca: "15 d'octubre de 2013: el TSJC anul·la l'autorització perquè l'estudi d'impacte no avaluava els efectes de l'activitat; el Suprem ho fa públic el setembre de 2015.",
      en: "15 October 2013: the TSJC annuls the permit because the impact study did not assess the activity's effects; the Supreme Court's confirmation is published in September 2015.",
    },
    after: {
      ca: "Exigeix pla de restauració immediat i una fiança ajustada als riscos; l'abocament continua sis anys més.",
      en: "Requires an immediate restoration plan and a risk-adjusted bond; dumping continues for six more years.",
    },
  },
  {
    name: {
      ca: "Contenciós contra l'Ajuntament de Sallent per tolerar l'abocament",
      en: "Appeal against Sallent Town Council for tolerating the dumping",
    },
    years: "2008 → 2024",
    who: { ca: "AAVV La Rampinya i Montsalat", en: "La Rampinya neighbours' association and Montsalat" },
    court: "TSJC",
    outcome: {
      ca: "Febrer de 2014 (sentència 34/2014): declara il·legals els abocaments i obliga a suspendre'ls i a restablir la realitat física alterada.",
      en: "February 2014 (ruling 34/2014): declares the dumping illegal and orders it suspended and the altered land restored.",
    },
    after: {
      ca: "Execució forçosa dictada el setembre de 2022; el 6 de març de 2024 el TSJC rebutja els recursos d'ICL i de l'Ajuntament: no s'ha retirat «cap metre cúbic» de residu.",
      en: "Forced execution ordered in September 2022; on 6 March 2024 the TSJC rejects the appeals by ICL and the Town Council: not 'a single cubic metre' of waste has been removed.",
    },
  },
];

export const euActions: { date: string; text: Bilingual }[] = [
  {
    date: "07/2014",
    text: {
      ca: "La Comissió Europea obre un procediment d'infracció contra l'Estat espanyol per incompliment de la directiva de residus d'indústries extractives (carta d'emplaçament del 10 de juliol de 2014); el 2015 l'amplia a la Directiva Marc de l'Aigua.",
      en: "The European Commission opens an infringement procedure against Spain for breaching the extractive-waste directive (letter of formal notice of 10 July 2014); in 2015 it extends it to the Water Framework Directive.",
    },
  },
  {
    date: "01/2016 → 08/2017",
    text: {
      ca: "Investigació d'ajuts il·legals (restauració de Vilafruns i fiança de Sallent/Balsareny); l'agost de 2017 la Comissió reclama recuperar 5,8 M€.",
      en: "State-aid investigation (Vilafruns restoration and the Sallent/Balsareny bond); in August 2017 the Commission demands recovery of €5.8M.",
    },
  },
  {
    date: "16/01/2020",
    text: {
      ca: "El Tribunal General de la UE (T-257/18, Iberpotash contra Comissió) avala la decisió: les fiances eren «clarament insuficients» i van donar un avantatge indegut d'uns 1,8 M€.",
      en: "The EU General Court (T-257/18, Iberpotash v Commission) upholds the decision: the bonds were 'clearly insufficient' and gave an undue advantage of about €1.8M.",
    },
  },
];

// --- Diners públics: partides documentades a les tesis (no sumables amb les del dossier: possibles solapaments) ---
export const publicMoneyDetail: { year: string; label: Bilingual; amount: string; source: string }[] = [
  {
    year: "1989",
    label: { ca: "Primer col·lector de salmorres, 100% públic", en: "First brine collector, 100% public" },
    amount: "1.200 M ptes",
    source: "T1 · Gorostiza et al. 2015",
  },
  {
    year: "2009",
    label: { ca: "Potabilitzadores d'Abrera (73,5 M€, 85% fons UE) i Sant Joan Despí (49,2 M€)", en: "Abrera (€73.5M, 85% EU funds) and Sant Joan Despí (€49.2M) treatment plants" },
    amount: "122,7 M€",
    source: "T1 · ACA 2009",
  },
  {
    year: "2009",
    label: { ca: "Primera fase del desdoblament del col·lector (Abrera – el Prat)", en: "First phase of the collector doubling (Abrera – el Prat)" },
    amount: "62 M€",
    source: "T1 · ACA 2009",
  },
  {
    year: "2009–10",
    label: { ca: "Restauració del runam de Vilafruns (la UE en demana retornar 5,8 M€ com a ajut il·legal)", en: "Vilafruns dump restoration (the EU demands €5.8M back as illegal aid)" },
    amount: "7,5 M€",
    source: "T1 · ACA 2009 · El Triangle 2020",
  },
  {
    year: "2015–18",
    label: { ca: "Projecte Hermes (ferrocarril de mercaderies industrials), coordinat per ICL", en: "Hermes project (industrial freight rail), coordinated by ICL" },
    amount: "6,7 M€",
    source: "T1 · Comissió Europea",
  },
  {
    year: "2022–27",
    label: { ca: "Programa de l'ACA contra la salinització del Llobregat (les mineres hi destinen 58,4 M€)", en: "ACA programme against Llobregat salinisation (mining firms put in €58.4M)" },
    amount: "90,5 M€",
    source: "T1 · ACA 2022",
  },
  {
    year: "2023",
    label: { ca: "Ajut de la Diputació al parc fotovoltaic sobre el runam del Fusteret", en: "Barcelona Provincial Council grant for the solar park on the Fusteret dump" },
    amount: "1,2 M€",
    source: "T1 · Bricollé 2023",
  },
  {
    year: "2024",
    label: { ca: "Nova planta d'osmosi inversa a Castellgalí (ajuts de l'ACA i la Diputació)", en: "New reverse-osmosis plant at Castellgalí (ACA and Provincial Council aid)" },
    amount: "—",
    source: "T1 · Escudé 2024",
  },
];

// --- Altres impactes documentats (Estudi Ramon Folch 2012 i literatura citada a T2, annex 3) ---
export const otherImpacts: { title: Bilingual; text: Bilingual; source: string }[] = [
  {
    title: { ca: "Salut", en: "Health" },
    text: {
      ca: "Estudis citats a la tesi associen l'exposició a trihalometans (subproductes de la cloració de l'aigua salinitzada) amb un augment del risc de càncer de bufeta del 43–50% a la zona minera respecte a la resta d'àrees analitzades. És una associació epidemiològica citada de segona mà: cal verificar l'estudi (Villanueva et al.) abans d'usar-la en comunicació.",
      en: "Studies cited in the thesis associate exposure to trihalomethanes (by-products of chlorinating salinised water) with a 43–50% higher bladder-cancer risk in the mining area than in the other areas analysed. It is an epidemiological association cited second-hand: check the study (Villanueva et al.) before using it in communication.",
    },
    source: "T2 annex 3 (cita Villanueva et al.)",
  },
  {
    title: { ca: "Paisatge", en: "Landscape" },
    text: {
      ca: "El 1999, el runam del Fusteret era visible des del 10% del territori de la comarca i el del Cogulló des del 24%; l'estudi preveia arribar al 15% i al 28% pel creixement dels runams. No s'han trobat dades actualitzades.",
      en: "In 1999 the Fusteret dump was visible from 10% of the county's territory and the Cogulló from 24%; the study predicted 15% and 28% as the dumps grow. No updated data were found.",
    },
    source: "T2 annex 3 (Estudi Ramon Folch 2012)",
  },
  {
    title: { ca: "Sòl, vegetació i biodiversitat", en: "Soil, vegetation and biodiversity" },
    text: {
      ca: "Pèrdua de sòl fèrtil per l'ocupació dels runams i el traçat del col·lector, i fugues i vessaments del salmorraducte els darrers anys. A l'entorn del Cogulló la qualitat ecològica del riu és baixa i només hi viuen dues famílies de macroinvertebrats tolerants a la sal.",
      en: "Loss of fertile soil from the dumps' footprint and the collector route, plus leaks and spills from the brine pipeline in recent years. Around the Cogulló the river's ecological quality is low, with only two salt-tolerant macroinvertebrate families.",
    },
    source: "T2 annex 3 (Ladrera et al. 2017; Estudi Ramon Folch 2012)",
  },
  {
    title: { ca: "Subsidència i barri de l'Estació", en: "Subsidence and the Estació neighbourhood" },
    text: {
      ca: "Als barris de l'Estació i la Rampinya (Sallent) l'esfondrament ha provocat l'evacuació i reubicació dels veïns. A l'Estació, el terreny encara es mou després d'enderrocar els edificis: fins a 2 metres en algunes zones en 27 anys (TV3, 17.12.2024). L'IGC va activar l'alerta el 2008 i la tesi parla de 43 famílies evacuades abans del febrer de 2009; Nació Digital en compta 46 el desembre de 2008. La cronologia de les tesis situa el procés entre 2004 i el darrer acord de sortida, el desembre de 2018.",
      en: "In Sallent's Estació and Rampinya neighbourhoods the subsidence forced residents to be evacuated and relocated. At the Estació the ground keeps moving after the buildings were demolished: up to 2 metres in some areas over 27 years (TV3, 17 Dec 2024). The IGC raised the alert in 2008 and the thesis speaks of 43 families evacuated before February 2009; Nació Digital counts 46 in December 2008. The theses' chronology places the process between 2004 and the last exit agreement, in December 2018.",
    },
    source: "T2 annex 3 i 6 · TV3 17.12.2024 · Nació Digital 26.04.2012",
  },
];

export const discrepancies: {
  topic: Bilingual;
  versions: { value: Bilingual; source: string }[];
  action: Bilingual;
}[] = [
  {
    topic: {
      ca: "Desallotjades del barri de l'Estació (Sallent)",
      en: "Evacuees from the Estació neighbourhood (Sallent)",
    },
    versions: [
      {
        value: {
          ca: "800 persones desallotjades i un barri esfondrat",
          en: "800 people evacuated and a collapsed neighbourhood",
        },
        source: "W /revoltes-de-la-terra/",
      },
      {
        value: {
          ca: "110 habitants; abandonament el 2009 per perill d'esfondrament",
          en: "110 inhabitants; abandoned in 2009 over collapse risk",
        },
        source: "D §Barri de l'estació",
      },
      {
        value: {
          ca: "46 famílies evacuades preventivament el desembre de 2008; 121 persones en 37 unitats familiars segons Adigsa (gener de 2009); unes 120 persones encara en 60 edificis el 2010. La tesi 2 (nota de l'annex 3, citant l'IGC) parla de 43 famílies abans del febrer de 2009",
          en: "46 families preventively evacuated in December 2008; 121 people in 37 family units per Adigsa (January 2009); about 120 people still in 60 buildings in 2010. Thesis 2 (annex 3 note, citing the IGC) speaks of 43 families before February 2009",
        },
        source: "Nació Digital, 26.04.2012 (verificació externa) · T2 annex 3",
      },
    ],
    action: {
      ca: "Cap font verificable recolza les 800. Proposta: publicar «prop de 120 persones» amb la font, i demanar a la campanya d'on surten les 800.",
      en: "No verifiable source supports the 800. Proposal: publish 'about 120 people' with the source, and ask the campaign where the 800 come from.",
    },
  },
  {
    topic: { ca: "Morts laborals", en: "Workplace deaths" },
    versions: [
      {
        value: { ca: "10 morts en els darrers 8 anys", en: "10 deaths in the last 8 years" },
        source: "W manifest",
      },
      {
        value: {
          ca: "«Diversos accidents mortals en les últimes dècades»",
          en: "'Several fatal accidents in recent decades'",
        },
        source: "D §Demandes",
      },
      {
        value: {
          ca: "Un accident mortal d'un treballador el 2020 atura la mina de Vilafruns (Regió7, 25.06.2020); entrevistats parlen de pèrdues humanes sense xifra",
          en: "A fatal accident of one worker in 2020 halts the Vilafruns mine (Regió7, 25.06.2020); interviewees speak of human losses without a number",
        },
        source: "T2 §Àrea d'estudi i dimensió sociocultural",
      },
    ],
    action: {
      ca: "Només hi ha un cas documentat amb font (2020). Demanar a la campanya el llistat nominal o la font de les 10 morts abans de publicar la xifra sola.",
      en: "Only one case is documented with a source (2020). Ask the campaign for the list or source of the 10 deaths before publishing the figure alone.",
    },
  },
  {
    topic: { ca: "Condemna penal del 2014", en: "The 2014 criminal conviction" },
    versions: [
      {
        value: {
          ca: "«Condemnava a presó a tres dirigents» i ordenava aturar l'abocament al Cogulló",
          en: "'Sentenced three executives to prison' and ordered dumping at the Cogulló to stop",
        },
        source: "D §Runams · W",
      },
      {
        value: {
          ca: "Pena de 2 anys rebaixada a 5 mesos (Audiència, 2016) o a 6 mesos (el text de la tesi), més 13.500 € de multa; l'ordre d'aturar el Cogulló ve de les sentències contencioses del TSJC, no de la penal",
          en: "A 2-year term cut to 5 months (Provincial Court, 2016) or to 6 months (the thesis text), plus a €13,500 fine; the order to stop the Cogulló comes from the TSJC administrative rulings, not the criminal one",
        },
        source: "T1 §Impunitat i annex 3 · T1/T2 cronologia 2014 i 2016",
      },
    ],
    action: {
      ca: "Formulació segura: «condemna per delicte ecològic (2014), confirmada el 2016, amb una pena rebaixada a mesos i 13.500 € de multa». Verificar si algú ha ingressat a presó.",
      en: "Safe wording: 'convicted of ecological crime (2014), upheld in 2016, with a sentence cut to months and a €13,500 fine'. Verify whether anyone has entered prison.",
    },
  },
  {
    topic: { ca: "Fiança de restauració", en: "Restoration bond" },
    versions: [
      {
        value: { ca: "«Fiança de 6,9 milions»", en: "'€6.9M bond'" },
        source: "D §Runams",
      },
      {
        value: {
          ca: "6,9 M€ per a Sallent i 6,1 M€ per a Súria (50% de descompte); abans, 1,1 M€ i 0,77 M€. Cost de tapar el Cogulló: 83,3 M€; segons criteris UE, la fiança hauria de ser de 100 M€",
          en: "€6.9M for Sallent and €6.1M for Súria (50% discount); earlier, €1.1M and €0.77M. Cost of capping the Cogulló: €83.3M; under EU criteria the bond should be €100M",
        },
        source: "T1 §Dimensió 3 (Cordero 2014; Estudi Ramon Folch 2012; Tribunal General 2020)",
      },
    ],
    action: {
      ca: "No hi ha contradicció: el dossier només cita la de Sallent. Convé dir «6,9 + 6,1 M€» i comparar-ho amb els 83,3 M€ de cost estimat.",
      en: "Not a contradiction: the dossier only quotes Sallent's. Better to say '€6.9M + €6.1M' and compare with the €83.3M estimated cost.",
    },
  },
  {
    topic: { ca: "Plantilla, facturació i producció d'ICL Iberia", en: "ICL Iberia workforce, turnover and output" },
    versions: [
      {
        value: {
          ca: "879 treballadors (2024); 332 M€ facturats a l'Estat (2023); ≈ 1 milió de tones de potassa/any",
          en: "879 workers (2024); €332M billed in Spain (2023); ≈ 1 million tonnes of potash/year",
        },
        source: "D §Qui és ICL, §Súria",
      },
      {
        value: {
          ca: "918 treballadors a l'Estat i 758 al Bages (2023); 322 M€ facturats (La Vanguardia, 25.03.2024); 600.575 t de potassa produïdes el 2023",
          en: "918 workers in Spain and 758 in Bages (2023); €322M billed (La Vanguardia, 25.03.2024); 600,575 t of potash produced in 2023",
        },
        source: "T2 §Àrea d'estudi",
      },
    ],
    action: {
      ca: "Els abasts i els anys difereixen. Mantenir 879 (informe corporatiu 2024) i indicar-ne l'any; verificar 332 vs 322 M€ i 1 Mt vs 0,6 Mt a l'informe de sostenibilitat d'ICL.",
      en: "Scopes and years differ. Keep 879 (2024 corporate report) with its year; verify €332M vs €322M and 1 Mt vs 0.6 Mt in ICL's sustainability report.",
    },
  },
  {
    topic: { ca: "Any d'arribada d'ICL i del col·lector", en: "Year ICL arrived and the collector was built" },
    versions: [
      {
        value: {
          ca: "ICL entra el 1998; col·lector acabat el 1988",
          en: "ICL arrives in 1998; collector completed in 1988",
        },
        source: "D · T2 §Àrea d'estudi",
      },
      {
        value: {
          ca: "Compra de les mines per Iberpotash: 1999; fi de les obres del col·lector: novembre de 1989 (primer col·lector, 1.200 M ptes)",
          en: "Purchase of the mines by Iberpotash: 1999; end of the collector works: November 1989 (first collector, 1,200 M pesetas)",
        },
        source: "T1/T2 annex de cronologia · T1 §Dimensió 4",
      },
    ],
    action: {
      ca: "Fins resoldre-ho, dir «1998–99» i «1988–89» (o la data dels contractes de compra).",
      en: "Until settled, say '1998–99' and '1988–89' (or cite the purchase-contract dates).",
    },
  },
  {
    topic: { ca: "Naixement de Boicot ICL", en: "Birth of Boicot ICL" },
    versions: [
      { value: { ca: "2023 (taula de formes d'articulació)", en: "2023 (table of forms of articulation)" }, source: "T2 fig. 4" },
      { value: { ca: "Finals de 2023, amb l'agreujament de l'ocupació israeliana", en: "Late 2023, as the Israeli occupation worsened" }, source: "T2 annex 9" },
      { value: { ca: "Abril de 2024, amb una acció a l'oficina d'ACCIÓ", en: "April 2024, with an action at the ACCIÓ office" }, source: "T2 annex 8" },
    ],
    action: {
      ca: "Preguntar a la campanya la data que vol que consti (constitució del grup vs primera acció).",
      en: "Ask the campaign which date it wants on record (group founding vs first action).",
    },
  },
  {
    topic: { ca: "Ritme de retirada del runam de la Botjosa", en: "Removal pace of the Botjosa dump" },
    versions: [
      {
        value: {
          ca: "Al ritme actual tardaria 180 anys a retirar-se (pla global: 75 anys)",
          en: "At the current pace it would take 180 years to remove (overall plan: 75 years)",
        },
        source: "D §Runams",
      },
      {
        value: {
          ca: "Decreix a 0,4 M t/any; massa de 9,5 M t: unes 24 anys (la nota de la tesi diu «uns 9 anys», que no quadra amb aquests números)",
          en: "Shrinks at 0.4 Mt/year; mass of 9.5 Mt: about 24 years (the thesis footnote says 'about 9 years', which does not match these numbers)",
        },
        source: "T1 §Pla Phoenix (dades de Montsalat) i nota 20",
      },
    ],
    action: {
      ca: "Els 180 anys no surten de cap font citada: demanar a la campanya el càlcul. Mentre no hi sigui, no usar la xifra sola.",
      en: "The 180 years do not come from any cited source: ask the campaign for the calculation. Until then, do not use the figure alone.",
    },
  },
  {
    topic: { ca: "Suma de diners públics", en: "Sum of public money" },
    versions: [
      {
        value: {
          ca: "> 480 M€: 122,7 + 300 (deute estimat) + 43 (FGC) + 18 (PERTE)",
          en: "> €480M: 122.7 + 300 (estimated debt) + 43 (FGC) + 18 (PERTE)",
        },
        source: "D §Potabilitzadores, §Port, §Bateries",
      },
      {
        value: {
          ca: "≈ 198 M€ invertits en col·lectors i filtres (ACA, 2009); 90,5 M€ de l'ACA al programa 2022–27 contra la salinitat",
          en: "≈ €198M invested in collectors and filters (ACA, 2009); €90.5M from the ACA in the 2022–27 anti-salinity programme",
        },
        source: "T1 §Dimensió 4",
      },
    ],
    action: {
      ca: "No es detalla què inclou el deute de 300 M€ i pot contenir els 122,7 M€. Fins que la campanya ho aclareixi, presentar la suma com a «partides del dossier», no com a total.",
      en: "What the €300M debt includes is not detailed and it may contain the €122.7M. Until the campaign clarifies, present the sum as 'dossier items', not as a total.",
    },
  },
];
