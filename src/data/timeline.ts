// Cronologia — només fets documentats (D = dossier, W = web, T1/T2 = tesis d'Iona Crusat, annexos de cronologia). Bilingüe.
// Les entrades es mostren ordenades per any (ordre estable dins de cada any).
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

const base: TimelineEvent[] = [
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
    year: "1988–89",
    title: { ca: "Col·lector de salmorres finalitzat", en: "Brine collector completed" },
    text: {
      ca: "Canonada de 120 km que porta salmorra de les mines fins al mar, finançada amb diners públics. El dossier el data el 1988; les tesis, al novembre de 1989 (fins a Sant Joan Despí; el 2002 s'allarga fins al mar). Filtracions i averies reiterades; vessament a Sant Joan de Vilatorrada el 2023.",
      en: "A 120 km pipeline taking mine brine to the sea, publicly funded. The dossier dates it 1988; the theses say November 1989 (to Sant Joan Despí; extended to the sea in 2002). Repeated leaks and breakdowns; spill at Sant Joan de Vilatorrada in 2023.",
    },
    cat: "danys",
    source: "D §Col·lector · T1/T2 annex 1",
  },
  {
    year: "1998–99",
    title: { ca: "ICL entra a Catalunya", en: "ICL enters Catalonia" },
    text: {
      ca: "Privatització de les mines públiques: Iberpotash (després ICL Iberia) obté els drets de les mines de potassa de Súria i Sallent/Balsareny. El dossier i el text de les tesis diuen 1998; la cronologia de les tesis, 1999.",
      en: "Privatisation of the public mines: Iberpotash (later ICL Iberia) gets the rights to the Súria and Sallent/Balsareny potash mines. The dossier and the theses' text say 1998; the theses' chronology says 1999.",
    },
    cat: "corporatiu",
    source: "D/W · T1/T2",
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
    year: "2008–09",
    title: { ca: "Evacuació del barri de l'Estació (Sallent)", en: "Evacuation of the Estació neighbourhood (Sallent)" },
    text: {
      ca: "Risc d'esfondrament pels forats de la mineria: el desembre de 2008 s'evacuen preventivament 46 famílies (121 persones segons Adigsa, gener de 2009; la tesi 2 en compta 43 famílies abans del febrer de 2009). Els últims veïns hi acorden la sortida el desembre de 2018. El dossier parla de 110 habitants i el web de 800 persones: cap de les dues xifres no s'ha pogut verificar.",
      en: "Collapse risk from the mining voids: in December 2008, 46 families are preventively evacuated (121 people according to Adigsa, January 2009; thesis 2 counts 43 families before February 2009). The last residents agree to leave in December 2018. The dossier says 110 inhabitants and the website 800 people: neither figure could be verified.",
    },
    cat: "danys",
    source: "Nació Digital 26.04.2012 · T2 annex 6 · D §Barri · W revoltes",
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
    title: { ca: "Condemna penal a Iberpotash i tres exdirectius", en: "Criminal conviction of Iberpotash and three former executives" },
    text: {
      ca: "18 de desembre: el Jutjat Penal 1 de Manresa els condemna per delicte ecològic de salinització d'aigües (denúncia de 1997). El 2016 l'Audiència de Barcelona ratifica la condemna però rebaixa la pena a cinc mesos de presó per dilacions indegudes. L'ordre d'aturar el Cogulló no ve d'aquesta causa sinó dels contenciosos del TSJC.",
      en: "18 December: Manresa Criminal Court no. 1 convicts them of ecological crime for salinising waters (complaint of 1997). In 2016 the Barcelona Provincial Court upholds the conviction but cuts the sentence to five months for undue delays. The order to stop the Cogulló does not come from this case but from the TSJC administrative rulings.",
    },
    cat: "danys",
    source: "T1 annex 1 i 3 · T2 annex 6 · D §Runams",
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
      ca: "El Teatre Kursaal de Manresa (març de 2025) i la UManresa tallen vincles amb ICL. Concentració davant el Kursaal (març 2025) i manifestació a Manresa (setembre 2025).",
      en: "Manresa's Teatre Kursaal (March 2025) and UManresa cut ties with ICL. Rally outside the Kursaal (March 2025) and demonstration in Manresa (September 2025).",
    },
    cat: "lluita",
    source: "D §Introducció · W · T2 annex 8",
  },
  {
    year: "2025",
    title: { ca: "El projecte de bateries a Sallent, abandonat", en: "The Sallent battery project, abandoned" },
    text: {
      ca: "Gener: anunci de fàbrica de càtodes amb Dynanonic i 18 M€ del PERTE (resolució del Ministeri d'Indústria). Desembre: ICL anuncia que abandona el projecte; no consta que l'ajut s'hagi desemborsat o retornat.",
      en: "January: cathode factory announced with Dynanonic and €18M from PERTE (Industry Ministry resolution). December: ICL announces the project is abandoned; it is not recorded whether the aid was paid out or returned.",
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

// --- Afegits a partir de les tesis (T1 = Complicitats institucionals; T2 = Extractivisme i percepció dels riscos) ---
const fromTheses: TimelineEvent[] = [
  {
    year: "1926",
    title: { ca: "La Buresa denuncia la salinització del riu", en: "'La Buresa' reports the salinisation of the river" },
    text: {
      ca: "Antònia Burés denuncia Minas de Potasa de Súria S.A. per la degradació del riu i la concessió de cabals. És la primera denúncia coneguda d'un conflicte que dura un segle (l'explotació de potassa comença cap al 1925).",
      en: "Antònia Burés reports Minas de Potasa de Súria S.A. for degrading the river and the water allocation. It is the first known complaint in a conflict now a century old (potash mining starts around 1925).",
    },
    cat: "lluita",
    source: "T2 §Àrea d'estudi (Gorostiza et al. 2015)",
  },
  {
    year: "1997",
    title: { ca: "Neix Montsalat i es denuncia Iberpotash", en: "Montsalat is born and Iberpotash is reported" },
    text: {
      ca: "Presentació del problema de la salinització a la Festa Major de Santpedor i naixement de la plataforma cívica Montsalat. L'Alzina i persones a títol individual denuncien Iberpotash per delicte ecològic: és l'origen de la condemna penal del 2014.",
      en: "The salinisation problem is presented at Santpedor's festa major and the civic platform Montsalat is born. L'Alzina and individuals report Iberpotash for ecological crime: this is the origin of the 2014 criminal conviction.",
    },
    cat: "lluita",
    source: "T2 annex 8",
  },
  {
    year: "2003",
    title: { ca: "La Fiscalia demana clausurar els abocaments", en: "Prosecutors ask for the dumping to be shut down" },
    text: {
      ca: "La Fiscalia de Medi Ambient del TSJC sol·licita la clausura cautelar dels abocaments salins al Cogulló i al Fusteret per indicis de delicte ecològic.",
      en: "The TSJC Environmental Prosecutor requests precautionary closure of salt dumping at the Cogulló and the Fusteret over signs of ecological crime.",
    },
    cat: "institucional",
    source: "T1 annex 1",
  },
  {
    year: "2006–08",
    title: { ca: "Fiances de restauració rebaixades", en: "Restoration bonds cut" },
    text: {
      ca: "Les autoritzacions ambientals de Súria (2006) i Sallent (2008) fixen les fiances en 0,77 M€ i 1,1 M€. Més tard s'elevaran a 6,1 M€ i 6,9 M€, encara un 50% per sota del cost estimat de restaurar només el Cogulló (83,3 M€).",
      en: "The environmental permits for Súria (2006) and Sallent (2008) set the bonds at €0.77M and €1.1M. They are later raised to €6.1M and €6.9M, still 50% below the estimated cost of restoring the Cogulló alone (€83.3M).",
    },
    cat: "institucional",
    source: "T1 §Dimensió 3 i annex 1",
  },
  {
    year: "2007",
    title: { ca: "Neix Prou Sal!", en: "Prou Sal! is born" },
    text: {
      ca: "Durant l'enramada salada de Sallent (maig/juny) neix la plataforma Prou Sal!, que pren el nom d'una pancarta penjada al runam del Cogulló. A finals d'any recull 1.400 signatures contra l'ampliació del runam.",
      en: "During Sallent's 'salty enramada' (May/June), the Prou Sal! platform is born, named after a banner hung on the Cogulló dump. By year's end it gathers 1,400 signatures against the dump's expansion.",
    },
    cat: "lluita",
    source: "T2 annex 8",
  },
  {
    year: "2009–10",
    title: { ca: "Es restaura el runam de Vilafruns", en: "The Vilafruns dump is restored" },
    text: {
      ca: "L'ACA restaura (amb impermeabilització) el runam de Vilafruns per 7,5 M€ de diners públics. La Comissió Europea hi veurà un ajut il·legal i en reclamarà 5,8 M€ el 2017. És l'únic dels cinc runams restaurat.",
      en: "The ACA restores (with waterproofing) the Vilafruns dump for €7.5M of public money. The European Commission will see illegal aid in it and demand €5.8M back in 2017. It is the only one of the five dumps restored.",
    },
    cat: "institucional",
    source: "T1 §Dimensió 4 · T2 annex 6",
  },
  {
    year: "2011–12",
    title: { ca: "El TSJC tomba el pla de restauració; ICL llança el Pla Phoenix", en: "TSJC rejects the restoration plan; ICL launches the Phoenix Plan" },
    text: {
      ca: "Octubre de 2011: el TSJC declara que el programa i la fiança de restauració del Cogulló no són vàlids (el Suprem ho ratifica el 2014). ICL respon amb el Pla Phoenix: una rampa per accedir amb camions a la mina de Súria (2012) i l'ampliació del Cogulló, que l'Ajuntament de Sallent rebutja el gener de 2013.",
      en: "October 2011: the TSJC rules the Cogulló restoration programme and bond invalid (the Supreme Court confirms in 2014). ICL answers with the Phoenix Plan: a ramp giving trucks access to the Súria mine (2012) and an extension of the Cogulló, which Sallent Town Council rejects in January 2013.",
    },
    cat: "danys",
    source: "T1 annex 1 i 3",
  },
  {
    year: "2013–14",
    title: { ca: "Tres sentències del TSJC contra els abocaments de Sallent", en: "Three TSJC rulings against Sallent's dumping" },
    text: {
      ca: "Juliol de 2013: anul·la la clau 19 del POUM. Octubre de 2013: anul·la l'autorització ambiental de Sallent/Balsareny. Febrer de 2014: declara il·legals els abocaments i en demana la suspensió. La data límit queda fixada primer el 2016 i després el 2017.",
      en: "July 2013: annuls clause 19 of the urban plan. October 2013: annuls the Sallent/Balsareny environmental permit. February 2014: declares the dumping illegal and orders it suspended. The deadline is set first for 2016, then 2017.",
    },
    cat: "danys",
    source: "T1 annex 3 · T2 annex 6",
  },
  {
    year: "2014–17",
    title: { ca: "La Comissió Europea investiga Espanya", en: "The European Commission investigates Spain" },
    text: {
      ca: "Juliol de 2014: procediment d'infracció per la directiva de residus d'indústries extractives. 2015: s'amplia a la Directiva Marc de l'Aigua. 2016: investigació d'ajuts il·legals. Agost de 2017: reclama recuperar 5,8 M€. El Tribunal General de la UE ho avala el gener de 2020.",
      en: "July 2014: infringement procedure over the extractive-waste directive. 2015: extended to the Water Framework Directive. 2016: state-aid investigation. August 2017: demands €5.8M be recovered. The EU General Court upholds it in January 2020.",
    },
    cat: "institucional",
    source: "T1 annex 1 i 3",
  },
  {
    year: "2015",
    title: { ca: "Judici popular contra ICL; conveni Generalitat–ICL", en: "People's trial of ICL; Generalitat–ICL agreement" },
    text: {
      ca: "Novembre: Prou Sal! i BDS organitzen un judici popular contra ICL, amb Unió de Pagesos, UPC per Palestina, CGT i CUP. El mateix mes la Generalitat i ICL Iberia signen un conveni que consolida l'ampliació de Súria i el trasllat de la sal al mar fins al 2065.",
      en: "November: Prou Sal! and BDS stage a people's trial of ICL, with Unió de Pagesos, UPC per Palestina, CGT and CUP. The same month the Generalitat and ICL Iberia sign an agreement consolidating the Súria expansion and sending the salt to the sea until 2065.",
    },
    cat: "lluita",
    source: "T2 annex 8 · T1 annex 1",
  },
  {
    year: "2017",
    title: { ca: "El Parlament demana pròrroga per al Cogulló", en: "Parliament backs an extension for the Cogulló" },
    text: {
      ca: "Juny: tots els grups menys la CUP voten una resolució perquè ICL pugui seguir abocant transitòriament. El TSJC dona una pròrroga fins al 30 de juny de 2018 (ampliable al 2019). Juliol: aprovació urbanística d'ampliar el Fusteret en 15 ha.",
      en: "June: all groups except the CUP vote a resolution letting ICL keep dumping temporarily. The TSJC grants an extension to 30 June 2018 (extendable to 2019). July: planning approval to expand the Fusteret by 15 ha.",
    },
    cat: "institucional",
    source: "T1 annex 1",
  },
  {
    year: "2018",
    title: { ca: "Taula del Llobregat i Ateneu Rocaus; ruptura amb AkzoNobel", en: "Taula del Llobregat and Ateneu Rocaus; split with AkzoNobel" },
    text: {
      ca: "Abril: neix la Taula del Llobregat a Molins de Rei. Neix també l'Ateneu Rocaus. Al setembre, ICL trenca l'acord de venda de sal amb AkzoNobel, que anuncia un arbitratge internacional. Al juliol s'aproven programes de restauració que preveuen buidar els runams durant 50 anys.",
      en: "April: the Taula del Llobregat is born in Molins de Rei, as is the Ateneu Rocaus. In September ICL breaks its salt-sales agreement with AkzoNobel, which announces international arbitration. In July restoration programmes are approved that plan to empty the dumps over 50 years.",
    },
    cat: "lluita",
    source: "T2 annex 8 · T1 annex 1",
  },
  {
    year: "2019",
    title: { ca: "S'atura l'abocament al Cogulló", en: "Dumping at the Cogulló stops" },
    text: {
      ca: "Juny: aturada definitiva de l'abocament al runam del Cogulló (Sallent), després d'una pròrroga i d'una execució de sentència demanada pels veïns de La Rampinya. El 2024 el TSJC constatarà que encara no se n'ha retirat «cap metre cúbic» de residu. El Fusteret (Súria) continua creixent.",
      en: "June: dumping at the Cogulló dump (Sallent) stops for good, after an extension and an enforcement request by La Rampinya neighbours. In 2024 the TSJC will note that not 'a single cubic metre' of waste has been removed. The Fusteret (Súria) keeps growing.",
    },
    cat: "lluita",
    source: "T1 annex 1 i 3",
  },
  {
    year: "2020",
    title: { ca: "Accident mortal i tancament de Vilafruns; el Tribunal General avala Brussel·les", en: "Fatal accident and closure of Vilafruns; General Court backs Brussels" },
    text: {
      ca: "Gener: el Tribunal General de la UE dona la raó a la Comissió en el cas dels ajuts il·legals. Juliol: arran de l'accident mortal d'un treballador s'atura l'extracció a Vilafruns. Agost: ICL sol·licita 6,86 hm³/any d'aigua regenerada de l'EDAR de Manresa. Entra en servei l'ampliació del Fusteret.",
      en: "January: the EU General Court sides with the Commission on illegal aid. July: after a worker's fatal accident, extraction at Vilafruns stops. August: ICL applies for 6.86 hm³/yr of reclaimed water from the Manresa treatment plant. The Fusteret expansion enters service.",
    },
    cat: "danys",
    source: "T1 annex 1 i 3 · T2 §Àrea d'estudi",
  },
  {
    year: "2021",
    title: { ca: "Rampa de Cabanasses, conveni del col·lector i vessaments", en: "Cabanasses ramp, collector agreement and spills" },
    text: {
      ca: "Juliol: estrena del túnel-rampa de 5 km a Súria. Abril: l'ACA i ICL signen l'acord per impulsar el nou col·lector. Gener i juny: vessaments de salmorra a Sant Joan de Vilatorrada i entre els ponts de la C-31 i la C-32.",
      en: "July: opening of the 5 km tunnel-ramp at Súria. April: the ACA and ICL sign the agreement to push ahead with the new collector. January and June: brine spills at Sant Joan de Vilatorrada and between the C-31 and C-32 bridges.",
    },
    cat: "danys",
    source: "T1 annex 1",
  },
  {
    year: "2022",
    title: { ca: "Urbanisme avala el nou runam i el parc solar; el jutjat refusa el pla ambiental", en: "Planning approves the new dump and solar park; court rejects the environmental plan" },
    text: {
      ca: "Febrer: el Jutjat Penal 1 de Manresa refusa el pla de recuperació ambiental d'Iberpotash per no oferir garanties d'eficàcia plena. Octubre: Urbanisme aprova modificar el PDU de la Mineria: el Cogulló pot esdevenir macroparc solar i es pot crear un nou runam a Súria.",
      en: "February: Manresa Criminal Court no. 1 rejects Iberpotash's environmental recovery plan for not offering full guarantees. October: Planning approves amending the Mining master plan: the Cogulló can become a solar mega-park and a new dump can be created at Súria.",
    },
    cat: "institucional",
    source: "T1 annex 1",
  },
  {
    year: "2023",
    title: { ca: "Nous vessaments i recurs de La Rampinya", en: "More spills and a La Rampinya appeal" },
    text: {
      ca: "Març–juny: dos grans vessaments a l'entrada del col·lector a Súria; l'ACA obre expedient a ICL. Juny: l'AAVV La Rampinya recorre la modificació que permet plaques solars als runams. Juliol: vessament davant de Sant Joan de Vilatorrada.",
      en: "March–June: two major spills at the collector inlet in Súria; the ACA opens a file against ICL. June: the La Rampinya neighbours' association appeals the amendment allowing solar panels on the dumps. July: spill opposite Sant Joan de Vilatorrada.",
    },
    cat: "danys",
    source: "T1 annex 1 · T2 annex 8",
  },
  {
    year: "2024",
    title: { ca: "El TSJC rebutja els recursos d'ICL; neix Boicot ICL", en: "TSJC rejects ICL's appeals; Boicot ICL is born" },
    text: {
      ca: "Març: el TSJC desestima els recursos d'ICL i de l'Ajuntament de Sallent contra l'execució forçosa de la sentència del 2014. Abril: neix Boicot ICL amb una acció a l'oficina d'ACCIÓ (altres parts de la tesi el situen a finals de 2023). Agost: Urbanisme dona llum verda definitiva al creixement del runam de Súria.",
      en: "March: the TSJC dismisses ICL's and Sallent Town Council's appeals against forced execution of the 2014 ruling. April: Boicot ICL is born with an action at the ACCIÓ office (other parts of the thesis place it in late 2023). August: Planning gives final approval to the Súria dump's growth.",
    },
    cat: "lluita",
    source: "T1 annex 1 · T2 annex 8 i 9",
  },
];

export const timeline: TimelineEvent[] = [...base, ...fromTheses].sort(
  (a, b) => parseInt(a.year) - parseInt(b.year),
);

// Trams històrics per agrupar la cronologia a la pàgina.
export const eras: { from: number; label: Bilingual }[] = [
  { from: 1900, label: { ca: "Orígens (fins al 1999)", en: "Origins (to 1999)" } },
  { from: 2000, label: { ca: "Primeres denúncies i sentències (2000–2013)", en: "First complaints and rulings (2000–2013)" } },
  { from: 2014, label: { ca: "Condemna, Brussel·les i conveni (2014–2019)", en: "Conviction, Brussels and the agreement (2014–2019)" } },
  { from: 2020, label: { ca: "Pla Phoenix, col·lector i boicot (2020–avui)", en: "Phoenix Plan, collector and boycott (2020–today)" } },
];

export const timelineNote: Bilingual = {
  ca: "Les entrades de 1926 a 2024 s'han afegit o corregit a partir dels annexos de cronologia de les dues tesis d'Iona Crusat (2025); on les tesis i el dossier no coincideixen (1998/1999, 1988/1989, 5/6 mesos de condemna) es mostren les dues dates. Els buits es marquen com a pendents, mai inventats.",
  en: "Entries from 1926 to 2024 were added or corrected from the chronology annexes of Iona Crusat's two theses (2025); where the theses and the dossier disagree (1998/1999, 1988/1989, 5/6-month sentence) both dates are shown. Gaps are flagged as pending, never invented.",
};
