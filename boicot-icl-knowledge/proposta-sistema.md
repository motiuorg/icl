# Proposta de sistema (nom provisional: corpo-fight toolkit; abans «Arrel»)

Última actualització: 2026-10-27. Estat: **esborrany per revisar per Giulio; no compartit amb cap organitzadora.**

> ⚠️ **Revisió del CA:** el text català de la pàgina `/sistema/` i del PDF és una redacció idiomàtica, però **cal que el reculli una persona catalanoparlant nativa** abans de compartir-lo.
>
> ⚠️ **Context de la sessió que ho ha escrit:** el KB real (`HANDOFF.md`, `AGENT-CONTEXT.md`, `site-inventory.md`, `dades-xifres.md`) **no era accessible** (només el repo). Aquest fitxer és, doncs, una còpia de treball dins del repo; cal moure'l al KB i aplicar-hi `README-index.patch.md` i `HANDOFF-section.patch.md`. Els passos del playbook v0 (dossier → markdown → KB → registre de xifres → web → desplegament) vénen del text de l'encàrrec; **cal contrastar-los amb el HANDOFF real**.

## 1. Marc

Un **kit de campanya** obert i reutilitzable perquè una comunitat que lluita contra una multinacional que fa mal al seu territori passi de «una pila de PDF i grups de xat» a un web públic bilingüe amb fonts i un espai de coordinació intern, de manera barata i repetible, amb la IA fent el muntatge lent i persones verificant cada afirmació.

Tres capes (la part interessant és la combinació de les dues primeres):

1. **Kit públic (frontend):** web de campanya a mida; visualitzacions, biblioteca de recerca, cronologia, actors. Primera instància: el prototip d'ICL.
2. **Capa interna (backend):** tauler d'accions, cua de revisió d'evidències, agenda, contactes. Al prototip: demo amb dades falses; l'autenticació real és pendent.
3. **Playbook obert:** procés, plantilles i prompts publicats. Motivador «més gran que ICL», secundari.

Full de ruta: Catalunya / Vall del Bages = primera instància i prova → punt de partida per connectar altres lluites contra ICL (coalició internacional a llarg termini) → reproductibilitat per a altres lluites i multinacionals, més endavant (esmentat ara perquè es vegi que és més gran que una campanya).

## 2. Decisions preses

- Pàgina `sistema` (CA `/sistema/`, EN `/en/sistema/`), component `src/components/pages/Sistema.astro`.
- **Atribució (2026-10-27, a petició de Giulio):** el prototip ja no es diu «Boicot ICL». La marca del nav és `PROJECT_NAME`; una franja a totes les pàgines (`Base.astro`), el peu, el hero d'Inici, la banda de context i la pàgina `sistema` diuen que la idea és de Motiu i que el prototip està **inspirat en el grup Boicot ICL i fet amb materials del seu dossier i web**, sense avalar-ho la campanya.
- Nom en una sola constant: `src/config/project.ts` (`PROJECT_NAME`, `PROJECT_TAGLINE`). Cap nom *hardcoded* a la còpia ni als noms de fitxer.
- **Nav:** no s'afegeix un 8è ítem (el menú ja ocupa gairebé tot l'ample de 1120 px i a 390 px passaria a 5 files). L'insígnia «prototip · Motiu» és ara un enllaç a la pàgina (queda negra quan s'hi és).
- Banda «Aquest prototip, en context» després del hero a Inici; enllaç al peu (columna Motiu); una línia a la capa interna (capa 2, només dades de demo), visible un cop desbloquejada la demo.
- Cap botó de donació, enllaç de pagament ni res que sembli recaptació. Pressupost: «uns 5–10 mil €, per discutir»; qui custodia els fons, **sense decidir**.
- Llicències proposades (oberta a opinió): codi AGPL-3.0; playbook i documentació CC BY-SA 4.0; el contingut de campanya continua sent de la campanya.
- Fase 1 deliberadament no puritana: provar amb el que funcioni, anotar cada eina triada, i després pila 100% oberta (inclosos models de pes obert).
- No s'afirma cap durada de construcció del prototip: els 4 commits van del 2026-10-11 14:03 al 14:25 (+0200), però són dates de *commit*, no de treball real.
- «14 pàgines» = 7 seccions × 2 llengües (sortida del build abans d'afegir `sistema`; el build actual en dóna 16). El mapa de relacions d'actors **no** existeix encara: la pàgina diu «fitxes d'actors».
- Captures reals del build a `src/assets/proof/` (CA i EN, generades amb `screens/proof.cjs`). La de la capa interna es fa amb la demo desbloquejada via `sessionStorage`; no hi apareix cap contrasenya.
- **PDF retirat (2026-10-27, a petició de Giulio):** no hi ha botó ni fitxers a `public/downloads/`; es comparteix la pàgina web. L'estil d'impressió (`@media print`, 2 pàgines A4) i `screens/pdf.cjs` es mantenen per si es vol regenerar. Detall tècnic anterior: `public/downloads/sistema-{ca,en}.pdf`, 2 pàgines A4 cadascun (verificat amb `screens/pdfcheck.py`; PyMuPDF no instal·lat, s'usa pypdf). `screens/pdf.cjs` usa el Chromium de Playwright perquè puppeteer no hi és (mateixa API `page.pdf`).

## 3. Opcions de nom

Pendents: **comprovacions de domini i marca** (no fetes) i que la comunitat hi doni el seu parer.

| Nom | Raonament |
|---|---|
| **Arrel** (treball) | «Root» en català: arrelament al territori, i el que es comparteix per sota de cada lluita. Curt, pronunciable, bilingüe. |
| Colla | Grup que treballa plegat (cultura catalana); poc traduïble. |
| Atles de Lluita | Descriptiu; massa proper a EJAtlas i pot sonar a mapa només. |
| Struggle Kit | Clar en anglès; menys càlid, i «struggle» pot sonar gran. |
| Open Front | Recull «obert» i «front de lluita»; genèric. |
| Local Front | Posa l'accent en el territori; genèric. |
| Campbox | Descriptiu (campaign + box); sona a producte. |
| Dossier Engine | Descriu el flux dossier→web; sona tècnic i «motor» és poc comunitari. |

## 4. Investigació

**Limitació important:** en aquesta sessió el tràfic de sortida bloquejava l'obertura de pàgines (WebFetch i curl: `ENOTFOUND`/403 del *proxy*). Només hi va haver cerca web, que retorna resums. Per això **cap entrada és «verified: yes»**: «snippet» vol dir que un resum de cerca coincideix amb l'afirmació però **no s'ha obert la font**. Les entrades que surten a la pàgina estan així marcades i s'han de comprovar abans de compartir. Data d'accés: 2026-10-27.

### Eines (panorama)

| Nom | URL | Descripció (una línia) | Llicència | Verificat | A la pàgina |
|---|---|---|---|---|---|
| EJAtlas | https://ejatlas.org | Atles col·laboratiu de conflictes ambientals. Xifra de casos: fonts secundàries donen >4.000 (inici 2024); **no s'ha pogut confirmar la xifra actual**, per això no apareix. «Dirigit a ICTA-UAB»: no confirmat, no apareix. | — | no (snippet, pàgina no oberta) | sí, sense xifres |
| CiviCRM | https://civicrm.org | CRM de codi obert per a grups d'incidència i entitats | AGPL-3.0 (snippet: web del projecte + Wikipedia) | no (snippet) | sí |
| Mobilizon | https://joinmobilizon.org | Plataforma federada d'esdeveniments i grups (Framasoft; manteniment passat a Kaihuri el 2024) | AGPL v3+ (snippet) | no (snippet) | sí |
| Action Network | https://actionnetwork.org | Eines per correu: peticions, esdeveniments, recaptació, contacte amb legisladors | no confirmada | no (snippet) | sí, sense llicència ni abast geogràfic |
| Mobilize | https://www.mobilize.us | Gestió de voluntariat i esdeveniments (propietat d'EveryAction / NGP VAN segons Wikipedia) | no confirmada | no (snippet) | sí |
| Tech for Palestine | https://techforpalestine.org | Coalició/incubadora de projectes de codi obert (llançada gener 2024) | per projecte, no comprovada | no (snippet) | sí |
| Decidim | https://decidim.org | Participació ciutadana | **no confirmada** | no | **no** |
| Ushahidi | https://www.ushahidi.com | Cartografia col·laborativa de crisis | **no confirmada** | no | **no** |
| Open Collective | https://opencollective.com | Finançament i transparència de col·lectius | **no confirmada** | no | **no** |
| No Tech for Apartheid | — | No consultat | — | no | **no** |
| Eines de dossier→web | — | No s'ha trobat res específic (cerca limitada) | — | no | cal fase de recerca |
| Llista «tools for activism» | https://www.context-awesome.com/list/drewrwilson/toolsforactivism | Només per descobrir candidats; no es cita. No consultada. | — | no | no |

Les frases «no cobreix…» de la pàgina són **judici propi** («que sapiguem»), no fets verificats; la pàgina ho diu.

### Possibles fronts

| Element | URL | Resum | Verificat | A la pàgina |
|---|---|---|---|---|
| Informe tècnic SEC d'ICL (febr. 2022): Boulby (UK), Cabanasses i Vilafruns (Espanya), Rotem i Dead Sea Works (Israel), Haikou (Xina) | https://www.sec.gov/Archives/edgar/data/941221/000117891322000767/exhibit_15-2.htm | No s'ha pogut obrir | **no** | no (només es fa servir indirectament) |
| Boulby, North York Moors | https://en.wikipedia.org/wiki/Boulby_Mine (+ informe de sostenibilitat d'ICL https://2019.icl-group-sustainability.com/?p=914, no obert) | Mina operada per Cleveland Potash, filial d'ICL, a la costa nord-est de les North York Moors (snippet) | no (snippet) | sí, com a font Wikipedia |
| Mar Mort: concessió fins al 2030, licitació prevista | https://www.kitco.com/news/off-the-wire/2025-11-06/icl-could-lose-dead-sea-concession-2030-under-government-tender-plan | Snippet de cerca coincideix (Reuters via Kitco, 6 nov. 2025). Cerques posteriors parlen d'un acord vinculant signat el 27 gen. 2026 (2.540 M USD) i d'un projecte de llei de desembre 2025: **la pàgina podria estar desactualitzada; revisar** | no (snippet) | sí |
| Brasil: Amaggi / EcoPeace | https://www.brasildefato.com.br/2026/01/30/amaggi-compra-fertilizante-de-empresa-acusada-de-lucrar-com-ocupacao-de-israel-na-palestina/ | La cerca no troba l'informe d'EcoPeace; només confirma que Amaggi diu comprar fertilitzants a Israel | **no** | **no** |
| Balears | okdiario (font hostil) | Només una font hostil (crida al boicot, 2024) | **no** | **no** |
| Etiòpia / Danakil (Allana Potash, ~2015) | — | No cercat; estat actual desconegut | **no** | **no** |
| NOVACT manifest (2026-06-29) | https://novact.org/en/?p=7532 | La cerca no el troba; NOVACT = institut barceloní d'acció no violenta. Possible xarxa aliada, **sense verificar** | **no** | **no** |

## 5. Preguntes obertes (no bloquegen)

1. Quina segona lluita concreta? (Giulio l'afegirà; la pàgina té un espai marcat.)
2. Nom definitiu (+ comprovacions de domini i marca).
3. Qui custodia els fons i quin és el desglossament real del pressupost.
4. Les organitzadores del Bages han vist el prototip? **El seu vistiplau va abans de qualsevol difusió més àmplia**, i un esforç internacional de recaptació no ha de competir amb el de la campanya.
5. Autenticació real per a la capa interna.
6. Reconciliar les xifres 800 vs 110 persones evacuades i la xifra de morts amb la campanya (ja pendent).
7. Revisió nativa del CA.
8. Verificar de debò les fonts de la secció 4 (xarxa oberta) i actualitzar la nota del Mar Mort.

## 6. Observacions sobre el web existent (no tocades)

Detectades en fer captures; no s'han modificat perquè la brigada deia de no tocar xifres ni caixes de transparència:
- A les pàgines EN apareixen fragments en català: «càlcul derivat» (`.derived::before` a `global.css`), «anys» al gràfic dels runams, «12,8 M m³/any» a la fitxa KPI.
- A `/danys/` el text «12,8 M m³/any» queda tallat al gràfic de barres (ample del SVG).
- La contrasenya de demo es mostra a la porta de la capa interna (és intencionat a la demo, però no s'ha de mostrar a captures de difusió).
