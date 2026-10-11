# Boicot ICL — estat de la lluita (prototip experimental de Motiu)

**Prototip experimental de [Motiu](https://motiu.org)** (cooperativa d'infraestructura per
la regeneració territorial), fet per discutir amb la campanya **Boicot ICL**.
No és un espai oficial de la campanya: complementa [boicoticl.org](https://boicoticl.org)
amb una eina visual de l'estat de la lluita (aigua, runams, trens FGC, laboral,
diners públics), biblioteca de recerca, cronologia, actors i una capa interna
de coordinació (demo).

## Executar

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # build estàtic → dist/
```

## Estructura

- `src/pages/` — rutes: `/` (CA) i `/en/` (EN) per a cada secció.
- `src/components/pages/` — les pàgines reals (bilingüe, `Astro.currentLocale`).
- `src/data/` — dades amb font (indicadors, cronologia, actors, campanyes,
  documents, capa interna). Cada xifra cita el Dossier Boicot ICL (nov. 2025)
  o boicoticl.org; els càlculs propis van marcats com a derivats.
- `src/i18n/` — utilitats de llengua (`ca` default, `en` amb prefix `/en/`).
- `screens/` — captures de referència (local, fora de git).

## Estat

Prototip v1: 7 seccions × 2 llengües, gràfics SVG estàtics, porta interna de
demo (contrasenya `icl-2026` — autenticació real pendent de decisió).
Pendents: text sencer dels estudis d'Iona Crusat (PDF amb codificació
corrupta), lector del dossier, mapa de relacions d'actors, desplegament.