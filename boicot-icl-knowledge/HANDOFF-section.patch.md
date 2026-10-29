# Nova secció per a `HANDOFF.md`: «System proposal» — a aplicar a mà

## System proposal (2026-10-27)

- Branca de revisió, **no desplegar encara**. Les organitzadores no ho han vist; el seu vistiplau va primer.
- Fitxers: `src/components/pages/Sistema.astro` (+ wrappers `src/pages/sistema.astro`, `src/pages/en/sistema.astro`), `src/components/charts/SystemDiagram.astro`, `BeforeAfter.astro`, `src/config/project.ts` (nom i lema), `assetHref()` a `src/i18n/utils.ts`, captures a `src/assets/proof/`.
- Regenerar captures: `node screens/proof.cjs`. Regenerar PDF: `npm run build && npm run preview` i `node screens/pdf.cjs` (sense sandbox), després `python3 screens/pdfcheck.py screens` (ha de dir 2 pàgines per llengua) i un altre `npm run build`. Verificar: `node screens/verify.cjs`. Fotos de pàgina: `node screens/shot.cjs`.
- El CSS d'impressió viu a `Sistema.astro` (`@media print`, dins l'estil *scoped*). El CA és més llarg: si es canvia text, comprovar que segueix sent 2 pàgines.
- Insígnia «prototip · Motiu» del nav = enllaç a la pàgina.

### Pendents
- Revisió nativa del català.
- Verificar les fonts externes (veure `proposta-sistema.md` §4; cap obertura de pàgina ha estat possible).
- Segona lluita, nom, fons, autenticació real, xifres 800/110 i morts (veure §5).
- Contrastar els passos del playbook v0 amb aquest HANDOFF.
- Detalls EN amb fragments en català al web existent (§6).


## Integració de les tesis i del dossier (2026-10-29)

- Branca `content/sources-integration-2026-10-29`, **no desplegar encara**.
- Dades: `src/data/indicators.ts` (laboral, `justice`, `euActions`, `publicMoneyDetail`, `otherImpacts`, `discrepancies` ampliades), `timeline.ts` (+18 entrades i `eras`), `actors.ts` (`judicial`, `conflictMap`, `lineage`), `documents.ts` (tesis «text complet» amb idees clau), `campaigns.ts`, `intern.ts`.
- Pàgines tocades: Danys (justícia, altres impactes, detall de diners públics), Cronologia (etapes), Actors (mapa del conflicte, tres generacions), Recerca, Portada.
- Convencions de font: D = dossier, W = web, T1/T2 = tesis (annex/§), «Nació Digital» = verificació externa. Les xifres que no quadren van a `discrepancies`, no es trien en silenci.
- Si es toquen els gràfics de barres: `Bars.astro` ara parteix les etiquetes en línies.
- Pendents nous: confirmar amb la campanya les 800 persones, les 10 morts, els 180 anys de la Botjosa, 332 vs 322 M€, data de naixement de Boicot ICL; localitzar l'estudi de Villanueva et al. sobre THM; revisar la bibliografia OCR de les tesis.
