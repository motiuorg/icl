// Capa interna — DADES DE DEMOSTRACIÓ. No són dades reals de coordinació.
// L'accés real i les dades veritables es decidiran amb la campanya.
import type { Bilingual } from "../i18n/utils";

export interface Action {
  title: Bilingual;
  campaign: Bilingual;
  owner: Bilingual;
  due: Bilingual;
  status: "en-curs" | "feta" | "bloquejada";
}

export const actions: Action[] = [
  {
    title: {
      ca: "Penjar el dossier actualitzat (nov 2025) a la web",
      en: "Upload the updated dossier (Nov 2025) to the website",
    },
    campaign: { ca: "Boicot ICL", en: "Boicot ICL" },
    owner: { ca: "Comunicació", en: "Comms" },
    due: { ca: "Fet", en: "Done" },
    status: "feta",
  },
  {
    title: {
      ca: "Recollir contactes de distribuïdores — zona Catalunya",
      en: "Collect distributor contacts — Catalonia area",
    },
    campaign: { ca: "Distribuïdores", en: "Distributors" },
    owner: { ca: "Recerca", en: "Research" },
    due: { ca: "15/11", en: "15/11" },
    status: "en-curs",
  },
  {
    title: {
      ca: "Preparar protesta a l'estació de Manresa",
      en: "Prepare protest at Manresa station",
    },
    campaign: { ca: "FGC", en: "FGC" },
    owner: { ca: "Territori", en: "Territory" },
    due: { ca: "22/11", en: "22/11" },
    status: "en-curs",
  },
  {
    title: {
      ca: "Tancar les discrepàncies de xifres (800 vs 110 desallotjades)",
      en: "Close the figure discrepancies (800 vs 110 evacuees)",
    },
    campaign: { ca: "Comunicació", en: "Comms" },
    owner: { ca: "Recerca", en: "Research" },
    due: { ca: "—", en: "—" },
    status: "bloquejada",
  },
  {
    title: {
      ca: "Carta de resposta a FGC (seguiment de les 4 exigències)",
      en: "Follow-up letter to FGC (tracking the 4 demands)",
    },
    campaign: { ca: "FGC", en: "FGC" },
    owner: { ca: "Jurídic", en: "Legal" },
    due: { ca: "30/11", en: "30/11" },
    status: "en-curs",
  },
  {
    title: {
      ca: "Traducció a l'anglès del manifest de Germinació 2026",
      en: "English translation of the Germinació 2026 manifesto",
    },
    campaign: { ca: "Revoltes de la Terra", en: "Revoltes de la Terra" },
    owner: { ca: "Internacional", en: "International" },
    due: { ca: "Fet", en: "Done" },
    status: "feta",
  },
];

export interface Evidence {
  claim: Bilingual;
  source: string;
  added: string;
  status: "nova" | "revisio" | "publicada";
  by: Bilingual;
}

export const evidenceQueue: Evidence[] = [
  {
    claim: {
      ca: "Despesa de manteniment de la rasa i la salmorra: 30–40 M€/any",
      en: "Ditch and brine maintenance cost: €30–40M/year",
    },
    source: "Dossier p.15",
    added: "02/11",
    status: "publicada",
    by: { ca: "Recerca", en: "Research" },
  },
  {
    claim: {
      ca: "El nou col·lector de salmorres serà funcional el 2027 des del Cogulló",
      en: "The new brine collector will be operational from Cogulló in 2027",
    },
    source: "Dossier p.15",
    added: "02/11",
    status: "publicada",
    by: { ca: "Recerca", en: "Research" },
  },
  {
    claim: {
      ca: "Contracte de fòsfor blanc ICL-IP America ↔ Joint Munitions Command (2020–25)",
      en: "White phosphorus contract ICL-IP America ↔ Joint Munitions Command (2020–25)",
    },
    source: "Highergov (enllaç al dossier)",
    added: "05/11",
    status: "nova",
    by: { ca: "Recerca", en: "Research" },
  },
  {
    claim: {
      ca: "Nombre total de persones desallotjades del barri de l'Estació (800? o 110?)",
      en: "Total evacuees from the Estació neighbourhood (800? or 110?)",
    },
    source: "Web vs dossier — a verificar",
    added: "06/11",
    status: "revisio",
    by: { ca: "Comunicació", en: "Comms" },
  },
  {
    claim: {
      ca: "«El ritme actual de restauració del runam de la Botjosa: 180 anys»",
      en: "'Current restoration pace of the Botjosa dump: 180 years'",
    },
    source: "Dossier p.14-15",
    added: "02/11",
    status: "revisio",
    by: { ca: "Recerca", en: "Research" },
  },
];

export interface DistributorContact {
  name: Bilingual;
  city: Bilingual;
  phone: string;
  email: string;
  note: Bilingual;
}

export const distributors: DistributorContact[] = [
  {
    name: { ca: "Distribuïdora exemple 1 (dada de demostració)", en: "Example distributor 1 (demo data)" },
    city: { ca: "Barcelona", en: "Barcelona" },
    phone: "93 000 00 00",
    email: "demo1@example.cat",
    note: { ca: "Majorista fertilitzants", en: "Fertiliser wholesaler" },
  },
  {
    name: { ca: "Distribuïdora exemple 2 (dada de demostració)", en: "Example distributor 2 (demo data)" },
    city: { ca: "Lleida", en: "Lleida" },
    phone: "973 000 00 00",
    email: "demo2@example.cat",
    note: { ca: "Venda a cooperatives", en: "Sells to cooperatives" },
  },
  {
    name: { ca: "Distribuïdora exemple 3 (dada de demostració)", en: "Example distributor 3 (demo data)" },
    city: { ca: "Cartagena", en: "Cartagena" },
    phone: "968 000 00 00",
    email: "demo3@example.cat",
    note: { ca: "Vinculada a Fuentes Fertilizantes", en: "Linked to Fuentes Fertilizantes" },
  },
];

export const agenda: { date: string; title: Bilingual; place: Bilingual }[] = [
  {
    date: "14/11",
    title: { ca: "Assemblea oberta de la campanya", en: "Open campaign assembly" },
    place: { ca: "Manresa", en: "Manresa" },
  },
  {
    date: "22/11",
    title: { ca: "Protesta a l'estació de Manresa (tren FGC–ICL)", en: "Protest at Manresa station (FGC–ICL train)" },
    place: { ca: "Manresa", en: "Manresa" },
  },
  {
    date: "01/12",
    title: {
      ca: "Tancament de la recollida de contactes de distribuïdores",
      en: "Deadline for collecting distributor contacts",
    },
    place: { ca: "En línia", en: "Online" },
  },
];