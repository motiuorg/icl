// Indicadors i sèries per a les visualitzacions — bilingüe (ca/en).
// Regla: cada dada porta font (D = dossier nov 2025, W = boicoticl.org).
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
      ca: "4 runams; el Fusteret de Súria encara creix malgrat l'ordre penal",
      en: "4 salt dumps; Súria's Fusteret still grows despite the criminal order",
    },
    source: "D §Runams",
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
      ca: "En un context de subcontractació i primes de productivitat",
      en: "Amid subcontracting and productivity bonuses",
    },
    source: "W manifest",
  },
  {
    label: { ca: "Retirada dels runams", en: "Salt dump removal" },
    value: "75 vs 180 anys",
    note: {
      ca: "El que proposa el pla vs el ritme real de restauració (runam de la Botjosa)",
      en: "What the plan proposes vs the real restoration pace (Botjosa dump)",
    },
    source: "D §Runams",
  },
  {
    label: { ca: "Despesa pública directa", en: "Direct public spending" },
    value: "> 480 M€",
    note: {
      ca: "122,7 M€ osmosi (2009) + 300 M€ deute salinització + 43 M€ FGC + 18 M€ PERTE",
      en: "€122.7M osmosis (2009) + €300M salinisation debt + €43M FGC + €18M PERTE",
    },
    source: "D §Potabilitzadores, §Port, §Bateries",
  },
];

// --- Aigua ---
export const water = {
  icl_hm3: 12.8,
  manresa_hm3: 12.8 / 2.5, // W: 2,5 cops el consum de Manresa
  manresa_derived: true,
  depuradora_hm3: 6.8,
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
  ],
};

// --- Runams ---
export const runams = {
  count: 4,
  masa_mt: 80,
  restoration_plan_years: 75,
  restoration_real_years: 180,
  fianca_meur: 6.9,
  manteniment_meur: [30, 40] as const,
  collector_km: 120,
  collector_year: 1988,
  new_collector_year: 2027,
  sentence_year: 2014,
  sources: [
    {
      ca: "D §Runams: > 80 M t; sentència penal 2014 (3 dirigents a presó); pla = 75 anys; ritme Botjosa = 180 anys; fiança 6,9 M€; rasa + salmorra 30–40 M€/any",
      en: "D §Salt dumps: >80 Mt; 2014 criminal ruling (3 executives jailed); plan = 75 years; Botjosa pace = 180 years; €6.9M bond; ditch + brine €30–40M/year",
    } satisfies Bilingual,
    {
      ca: "D §Col·lector: canonada 120 km (1988); nou col·lector funcional el 2027 des del Cogulló",
      en: "D §Brine collector: 120 km pipeline (1988); new collector operational from Cogulló in 2027",
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
    note: { ca: "Projecte abandonat al desembre 2025", en: "Project abandoned in December 2025" },
  },
];

// --- Laboral / territori ---
export const laboral = {
  deaths_8y: 10,
  workers: 879,
  revenue_meur: 332,
  fertilizers: 100,
  farmers_claims: 30,
  evicted_dossier: 110,
  evicted_web: 800,
  export_pct: 80,
  potassa_t: 1_000_000,
};

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
    ],
    action: {
      ca: "Reconciliar amb la campanya abans de publicar cap xifra sola.",
      en: "Reconcile with the campaign before publishing either figure alone.",
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
    ],
    action: {
      ca: "Reconciliar amb les dades del dossier/estudis quan estiguin disponibles.",
      en: "Reconcile with dossier/study data once available.",
    },
  },
];