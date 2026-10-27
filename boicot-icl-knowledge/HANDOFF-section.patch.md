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
