# Mirrored assets — manifest

Produced by `scripts/mirror-assets.mjs` on 2026-11-01 from the pages captured by `scripts/capture.mjs`. Machine-readable: `_manifest.json`.

Files keep the site's path: `assets/original/wp-content/uploads/<year>/<month>/<file>`. For WordPress thumbnails (`name-300x200.jpg`) the unresized original was also fetched.

**Provenance and risk are a heuristic reading of filenames, dimensions and where each file is used — not verified with the coalition.** Treat every "Own (likely)" as unconfirmed (open questions Q6, Q13 in `docs/design-brief.md`).

## Summary

| Category | Files |
|---|---|
| Campaign poster / social graphic | 50 |
| Image received via messaging app (WhatsApp/Telegram naming) | 27 |
| Member/ally logo | 26 |
| News/press photo | 23 |
| Campaign poster / social graphic (4:5) | 17 |
| Theme/plugin UI asset | 8 |
| Screenshot of own press note/document | 8 |
| Image downloaded from Facebook | 7 |
| Other / unclassified | 6 |
| Slider: press/agency photos + own text | 4 |
| Own PDF | 4 |
| Organisation logo | 1 |

| Licensing risk | Files |
|---|---|
| low-medium | 67 |
| low | 39 |
| HIGH | 27 |
| MEDIUM | 27 |
| none | 8 |
| MEDIUM-HIGH | 7 |
| check | 6 |

## Licensing flags (read before reusing anything)

- **Slider photos** (`2015/04/Slide1.jpg`, `slide2.jpg`, `Slide3.jpg`, `slide4.jpg`): press/agency-style photos with no credit, showing children, a soldier, an injured man and an identifiable Catalan politician. Do not reuse without a source and licence. Their *text* is reusable (transcribed in `content/current-site/_chrome.md`).
- **News photos** in posts (e.g. `2020/06/Nammo.jpg`, `2022/02/mur.jpg`, `2015/08/rototom.jpg`, `2014/09/filmoteca_israel.jpg`, `2023/02/laurent-ada*.jpg`): no credit line on the site.
- **Messaging-app / Facebook images** (WhatsApp-*, photo_*, long numeric names, `*_n.jpg`): author and consent of people pictured unknown; protest photos may identify activists.
- **Member logos**: owned by each member organisation; fine for the coalition page with consent.
- **Own posters** (1080×1350 and similar): appear to be the coalition's own designs; may embed Canva elements or third-party photos — Canva's licence generally permits use in your own designs but not extraction of elements.
- **Organisation logo**: only a 250×89 JPEG exists on the site. No vector found.
- **Fonts mirrored are theme icon fonts** (vantage-icons, Font Awesome, slider icons) — not brand fonts; the site uses no text webfont.

## Not mirrored

- 28 images on third-party hosts (mostly `nomescomplicitat.cat`, the predecessor campaign's site, plus `lafiraenlamira.wordpress.com`): blocked by this environment's network policy (`fetch failed`). Listed below with status.
- 51 documents on third-party domains: linked from posts/pages, deliberately not mirrored (not the coalition's files). Listed at the end.
- Video `wp-content/uploads/2025/08/correfoc_girona_palestina.mp4` (on `/festes-majors`): skipped for weight.

## All files

| File | Format | Pixels / pages | Size | Used on | Kind / provenance | Licence risk | Status |
|---|---|---|---|---|---|---|---|
| `wp-content/uploads/2026/10/2026-10-09-19.52.37-240x300.jpg` | jpeg | 240×300 | 17 KB | `/` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/04/Slide1.jpg` | jpeg | 1024×300 | 134 KB | `/`, `/campanyes` | Slider: press/agency photos + own text / Third-party photos | HIGH — identifiable people incl. children and a politician; source not credited | mirrored |
| `wp-content/uploads/2015/01/AF_LOGO_PROUCOMPLICITAT-ptit.jpg` | jpeg | 250×89 | 43 KB | `/`, `/adhesions-a-la-crida-del-mon-de-la-cultura-contra-el-castig-col%c2%b7lectiu-al-poble-palesti`, `/agenda` +43 | Organisation logo / Own | low — but only 250×89 JPEG; request vector (Q3) | mirrored |
| `wp-content/themes/vantage/icons/vantage-icons.woff` | woff | — | 1 KB | `/`, `/adhesions-a-la-crida-del-mon-de-la-cultura-contra-el-castig-col%c2%b7lectiu-al-poble-palesti`, `/agenda` +43 | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/uploads/2015/04/Slide3.jpg` | jpeg | 1024×300 | 162 KB | `/`, `/campanyes` | Slider: press/agency photos + own text / Third-party photos | HIGH — identifiable people incl. children and a politician; source not credited | mirrored |
| `wp-content/themes/vantage/fontawesome/fonts/fontawesome-webfont.woff2` | woff2 | — | 75 KB | `/`, `/adhesions-a-la-crida-del-mon-de-la-cultura-contra-el-castig-col%c2%b7lectiu-al-poble-palesti`, `/agenda` +43 | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/uploads/2015/04/slide2.jpg` | jpeg | 1024×300 | 91 KB | `/`, `/campanyes` | Slider: press/agency photos + own text / Third-party photos | HIGH — identifiable people incl. children and a politician; source not credited | mirrored |
| `wp-content/themes/vantage/images/sprites/more-icon.png` | png | 5×8 | 0 KB | `/`, `/adhesions-a-la-crida-del-mon-de-la-cultura-contra-el-castig-col%c2%b7lectiu-al-poble-palesti`, `/agenda` +43 | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/uploads/2015/04/slide4.jpg` | jpeg | 1024×300 | 167 KB | `/`, `/campanyes` | Slider: press/agency photos + own text / Third-party photos | HIGH — identifiable people incl. children and a politician; source not credited | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.44-240x300.jpg` | jpeg | 240×300 | 22 KB | `/` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.48-240x300.jpg` | jpeg | 240×300 | 19 KB | `/` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.51-240x300.jpg` | jpeg | 240×300 | 16 KB | `/` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.55-240x300.jpg` | jpeg | 240×300 | 21 KB | `/` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/2026-07-29-18.35.11.jpg` | jpeg | 1280×640 | 177 KB | `/`, `/ (as resized)`, `/category/palestina` +2 | Other / unclassified / Unknown | check | mirrored |
| `wp-includes/js/mediaelement/mejs-controls.svg` | svg | — | 4 KB | `/`, `/category/palestina`, `/festes-majors` | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/plugins/ml-slider/assets/metaslider/bg_direction_nav.png` | png | 57×27 | 2 KB | `/`, `/campanyes` | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/uploads/2025/08/2026-07-29-18.35.11-960x480.jpg` | jpeg | 960×480 | 98 KB | `/` | Other / unclassified / Unknown | check | mirrored |
| `wp-content/uploads/2026/07/photo_2026-07-15-16.58.05-768x961.jpeg` | jpeg | 768×961 | 102 KB | `/` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/03/5855212835015691646-1-240x300.jpg` | jpeg | 240×300 | 17 KB | `/` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/5765134881053674814-240x300.jpg` | jpeg | 240×300 | 18 KB | `/` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/5765134881053674813-240x300.jpg` | jpeg | 240×300 | 21 KB | `/` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-02-114909-768x125.png` | png | 768×125 | 57 KB | `/` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2026/01/6034946637848841503-244x300.jpg` | jpeg | 244×300 | 27 KB | `/`, `/category/esdeveniments` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `https://lafiraenlamira.wordpress.com/wp-content/uploads/2024/08/la-fira-en-la-mira_horitzontal_negre.png` | — | — | — | `/` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `wp-content/uploads/2015/04/banner-01-1024x127.png` | png | 1024×127 | 67 KB | `/tallers-oberts-per-trencar-les-complicitats-entre-catalunya-i-israel` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/04/tallers_prou_complicitat.jpg` | jpeg | 842×556 | 229 KB | `/tallers-oberts-per-trencar-les-complicitats-entre-catalunya-i-israel` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2021/10/Imagen-1B-768x486.jpg` | jpeg | 768×486 | 62 KB | `/palestina-caminem-cap-a-la-fi-de-lapartheid` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2023/02/laurent-ada-1024x674.jpg` | jpeg | 1024×674 | 130 KB | `/la-suspensio-de-relacions-de-barcelona-amb-israel-es-un-ale-desperanca-per-al-poble-palesti` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2023/02/Laurent-Ada3.jpg` | jpeg | 713×1024 | 406 KB | `/la-suspensio-de-relacions-de-barcelona-amb-israel-es-un-ale-desperanca-per-al-poble-palesti` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2023/02/laurent-ada2-1024x683.jpg` | jpeg | 1024×683 | 118 KB | `/la-suspensio-de-relacions-de-barcelona-amb-israel-es-un-ale-desperanca-per-al-poble-palesti` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2014/05/logo_naqba.jpg` | jpeg | 250×108 | 27 KB | `/campanyes`, `/manifest-i-adhesions`, `/no-mes-complicitat` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2014/05/logo_complicitats.jpg` | jpeg | 250×108 | 47 KB | `/campanyes`, `/manifest-i-adhesions`, `/no-mes-complicitat` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2014/05/logo_negocisocults.jpg` | jpeg | 250×108 | 26 KB | `/campanyes`, `/manifest-i-adhesions`, `/no-mes-complicitat` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2014/05/logo_rumbo_a_gaza.jpg` | jpeg | 250×108 | 30 KB | `/campanyes`, `/manifest-i-adhesions`, `/no-mes-complicitat` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2014/05/Logo-BDS-Cat.png` | png | 250×108 | 32 KB | `/campanyes`, `/manifest-i-adhesions`, `/no-mes-complicitat` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/plugins/so-widgets-bundle/icons/fontawesome/webfonts/fa-brands-400.woff2` | woff2 | — | 115 KB | `/manifest-i-adhesions` | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/wordpress.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/twitter.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/facebook.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/youtube.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/rss.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/vimeo.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/flicker.jpg` | — | — | — | `/campanyes`, `/manifest-i-adhesions` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `wp-content/plugins/siteorigin-panels/widgets/img/textures/light-dashed.png` | png | 72×72 | 2 KB | `/participa-en-assamblees` | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/04/empreses_que_produeixen_a_les_colonies.jpg` | — | — | — | `/boicot` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/04/empreses_2.jpg` | — | — | — | `/boicot` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/04/empreses_3.jpg` | — | — | — | `/boicot` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/who_profits.jpg` | — | — | — | `/aliances-internacionals` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/war_on_want_logo.jpg` | — | — | — | `/aliances-internacionals` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/Logo-BDS.jpg` | — | — | — | `/aliances-internacionals` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | NOT mirrored: fetch failed |
| `https://nomescomplicitat.cat/wp-content/uploads/2014/05/logo_controlp.jpg` | — | — | — | `/aliances-internacionals` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | NOT mirrored: fetch failed |
| `wp-content/uploads/2024/10/Ass-CL.jpg` | jpeg | 409×239 | 39 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/bds.jpg` | jpeg | 347×145 | 16 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2024/10/LOGO-COMUNITAT-vFINAL.jpg` | jpeg | 650×260 | 51 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/Junts.jpg` | jpeg | 1048×373 | 92 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/RaG.jpg` | jpeg | 1098×504 | 96 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/LOGO-NOVACT.jpg` | jpeg | 896×293 | 53 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/Suds.jpg` | jpeg | 591×354 | 16 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/SCI.png` | png | 2361×1369 | 74 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2023/10/donesxdones.png` | png | 250×150 | 18 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/unadikum.png` | png | 180×185 | 29 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/pallasos-en-rebeldia.png` | png | 267×189 | 4 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2024/10/delas.png` | png | 450×198 | 41 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/Logo-CJB-AI.png` | png | 2826×1518 | 94 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2018/03/huriyalogo.png` | png | 295×167 | 30 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2018/06/baixa.png` | png | 225×225 | 7 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2015/04/logo_nexes.jpg` | jpeg | 2287×971 | 129 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2017/12/cropped-larecolectiva2.jpg` | jpeg | 1240×1308 | 109 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2017/12/fundipau.jpg` | jpeg | 1438×1102 | 335 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2019/10/Logo-CNJC.png` | png | 415×215 | 77 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2024/10/lilogo.png` | png | 450×254 | 1 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2022/06/collectiu_intifada.jpg` | jpeg | 1181×675 | 95 KB | `/qui-som` | Member/ally logo / Third-party (member org) | low — usable with member consent (Q13) | mirrored |
| `wp-content/uploads/2019/10/ELAI-cas-300x300.png` | png | 300×300 | 74 KB | `/campanya-elai` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2021/10/picture1-1635139662-300x129.png` | png | 300×129 | 34 KB | `/les-organitzacions-palestines-demanen-aplicar-a-israel-mesures-clares-contundents-i-publiques` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2021/07/Foto_Amb-lApartheid-no-2.jpg` | jpeg | 1280×695 | 188 KB | `/bcnambtlvno` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/plugins/so-widgets-bundle/css/slider/fonts/slider.woff` | woff | — | 1 KB | `/bcnambtlvno` | Theme/plugin UI asset / GPL/OFL (theme) | none — not reused | mirrored |
| `wp-content/uploads/2022/02/mur.jpg` | jpeg | 880×495 | 43 KB | `/bcnambtlvno` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2025/08/1-1-240x300.png` | png | 240×300 | 71 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/2-1-240x300.png` | png | 240×300 | 71 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/3-1-240x300.png` | png | 240×300 | 99 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/5-1-240x300.png` | png | 240×300 | 72 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/6-1-240x300.png` | png | 240×300 | 89 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/4-1-240x300.png` | png | 240×300 | 82 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/7-1-768x960.png` | png | 768×960 | 628 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/8-1-768x960.png` | png | 768×960 | 1114 KB | `/tag/bds`, `/victories-populars-de-setembre-2024-a-agost-de-2025` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/10/20150525191200Fira-de-MontjuAFc-1-760x428-2-720x380.jpg` | jpeg | 720×380 | 41 KB | `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-16-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf-768x432.png` | png | 768×432 | 260 KB | `/category/palestina` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-40-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf-768x953.png` | png | 768×953 | 430 KB | `/category/palestina` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-47-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf-768x805.png` | png | 768×805 | 366 KB | `/category/palestina` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/07/5-240x300.png` | png | 240×300 | 107 KB | `/category/palestina` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/07/8-240x300.png` | png | 240×300 | 111 KB | `/category/palestina` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/04/Mani_20-abril_TW_CAT-simple-720x380.jpg` | jpeg | 720×380 | 43 KB | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/02/Imatge-1-720x380.jpeg` | jpeg | 720×380 | 56 KB | `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/02/Imatge-1-e1707904439301.jpeg` | jpeg | 600×600 | 63 KB | `/category/palestina` | Other / unclassified / Unknown | check | mirrored |
| `wp-content/uploads/2024/01/WhatsApp-Image-2024-01-11-at-23.38.08-819x1024-1.jpeg` | jpeg | 819×1024 | 84 KB | `/category/palestina` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/01/20G_hotitzontal_general_cat-720x380.png` | png | 720×380 | 122 KB | `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/20G_RRSS_AR_Barcelona-copy-819x1024.png` | png | 819×1024 | 448 KB | `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/ciudades_cat-819x1024.png` | png | 819×1024 | 617 KB | `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/INSTAGRAM_4_5_BARCELONA-819x1024-1.png` | png | 819×1024 | 567 KB | `/category/palestina` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/INSTAGRAM_4_5_BCN_ES-819x1024-1.png` | png | 819×1024 | 586 KB | `/category/palestina` | Campaign poster / social graphic (4:5) / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2023/10/PALESTINA-XXSS_HORITZONTAL-720x380.jpg` | jpeg | 720×380 | 77 KB | `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2023/10/TW-MANIFEST-720x380.jpg` | jpeg | 720×380 | 61 KB | `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_IG_modificado_lu4-1024x1024.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_IG_modificado_lu9-1024x1024.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_IG_urdu-1024x1024.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_IG_modificado_lu6-1024x1024.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_TW_CAT-simple-1-1024x576.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_TW_AR-1024x576.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_TW_ES-simple-1024x576.jpg` | — | — | — | `/author/nomescomplicitat`, `/category/esdeveniments`, `/category/palestina` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | NOT mirrored: fetch failed |
| `https://s.w.org/images/core/emoji/17.0.2/svg/1f4c6.svg` | — | — | — | `/category/palestina` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://s.w.org/images/core/emoji/17.0.2/svg/231a.svg` | — | — | — | `/category/palestina` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://s.w.org/images/core/emoji/17.0.2/svg/1f517.svg` | — | — | — | `/category/palestina` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `wp-content/uploads/2025/06/2025-06-30-06.31.08-720x380.jpg` | jpeg | 720×380 | 31 KB | `/tag/bds` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2025/06/2025-06-30-06.31.08-1024x544.jpg` | jpeg | 1024×544 | 51 KB | `/tag/bds` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2015/10/CARTELLJUDICIdestacada-720x380.jpg` | jpeg | 720×380 | 58 KB | `/tag/bds` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/10/CARTELLJUDICI-212x300.jpg` | jpeg | 212×300 | 25 KB | `/tag/bds` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/10/995649_845962985501013_4001524119841036418_n-300x169.jpg` | jpeg | 300×169 | 16 KB | `/tag/bds` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/10/12112423_845962948834350_8792881536909140921_n-720x380.jpg` | jpeg | 720×380 | 70 KB | `/tag/bds` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/10/12115429_845962958834349_7462166122587568712_n-300x169.jpg` | jpeg | 300×169 | 20 KB | `/tag/bds` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/10/12112423_845962948834350_8792881536909140921_n-300x169.jpg` | jpeg | 300×169 | 20 KB | `/tag/bds` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/08/rototom.jpg` | jpeg | 690×362 | 62 KB | `/tag/bds` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2014/09/imagenes_de_proximidad_cine_israelia_2-594x380.jpg` | jpeg | 594×380 | 58 KB | `/tag/bds` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2014/09/filmoteca_israel-498x1024.jpg` | jpeg | 498×1024 | 194 KB | `/tag/bds` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `https://www.sci-cat.org/imatges/xarxes/bds_catalunya_72_color.jpg` | — | — | — | `/tag/bds` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `wp-content/uploads/2025/10/5764809846518647609-720x380.jpg` | jpeg | 720×380 | 42 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/5965366256389442123-768x768.jpg` | jpeg | 768×768 | 148 KB | `/author/nomescomplicitat`, `/category/esdeveniments` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/5965366256389442123-720x380.jpg` | jpeg | 720×380 | 83 KB | `/author/nomescomplicitat`, `/category/esdeveniments` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/comunicat_web-720x380.jpg` | jpeg | 720×380 | 43 KB | `/author/nomescomplicitat` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/03/WhatsApp-Image-2025-03-06-at-08.36.08-768x960.jpeg` | jpeg | 768×960 | 148 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-10.43.54-720x380.jpeg` | jpeg | 720×380 | 84 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/02/genocides_fora_de_la_fira-720x380.png` | png | 720×380 | 112 KB | `/author/nomescomplicitat` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-14.28.03-720x380.jpeg` | jpeg | 720×380 | 77 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-14.28.031-768x505.jpeg` | jpeg | 768×505 | 87 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/12/WhatsApp-Image-2024-12-08-at-12.03.02.jpeg` | jpeg | 720×381 | 101 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/12/WhatsApp-Image-2024-12-08-at-17.06.08-768x961.jpeg` | jpeg | 768×961 | 123 KB | `/author/nomescomplicitat` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/12/razzmatazz-720x380.jpg` | jpeg | 720×380 | 54 KB | `/author/nomescomplicitat` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2024/03/hotizontal_web_2.jpg` | jpeg | 720×380 | 14 KB | `/author/nomescomplicitat` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/11/Noviembre-2025-Cartel-A3-vertical-724x1024.png` | png | 724×1024 | 836 KB | `/category/esdeveniments` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/10/CAT_MOSTRA-768x960.png` | png | 768×960 | 1119 KB | `/category/esdeveniments` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/04/Cartel_10M_RRSS_cat-240x300.jpg` | jpeg | 240×300 | 17 KB | `/category/esdeveniments` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/04/1-removebg-preview-1-300x300.png` | png | 300×300 | 36 KB | `/category/esdeveniments` | Other / unclassified / Unknown | check | mirrored |
| `wp-content/uploads/2020/06/Nammo-720x380.jpg` | jpeg | 720×380 | 54 KB | `/category/esdeveniments` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `https://s.w.org/images/core/emoji/17.0.2/svg/1f1f5-1f1f8.svg` | — | — | — | `/category/esdeveniments` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `https://s.w.org/images/core/emoji/17.0.2/svg/2757.svg` | — | — | — | `/category/esdeveniments` | Other / unclassified / Unknown | check | NOT mirrored: fetch failed |
| `wp-content/uploads/2015/04/FORMACI__PROU_COMPLICITAT.pdf` | pdf | 3 p. | 995 KB | `/tallers-oberts-per-trencar-les-complicitats-entre-catalunya-i-israel` | Own PDF / Own | low | mirrored |
| `wp-content/uploads/2015/10/MANIFESTFINALCPCI.pdf` | pdf | 1 p. | 127 KB | `/author/queralt/page/2`, `/mes-dun-centenar-de-persones-es-manifesten-davant-la-delegacio-del-govern-espanyol-en-solidaritat-amb-palestina`, `/tag/barcelona` +3 | Own PDF / Own | low | mirrored |
| `wp-content/uploads/2015/04/NdP-Compromn_is-Partits-Poli_tics-.pdf` | pdf | 2 p. | 86 KB | `/author/lydia`, `/documentacio`, `/lesquerra-parlamentaria-catalana-es-compromet-activament-amb-la-solidaritat-amb-palestina` +4 | Own PDF / Own | low | mirrored |
| `wp-content/uploads/2025/03/5M_Manifest-unitari.pdf` | pdf | 1 p. | 76 KB | `/author/nomescomplicitat`, `/category/uncategorized/page/2`, `/davant-la-repressio-ens-trobaran-organitzades` | Own PDF / Own | low | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.37.jpg` | jpeg | 1024×1280 | 164 KB | `/ (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.44.jpg` | jpeg | 1024×1280 | 150 KB | `/ (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.48.jpg` | jpeg | 1024×1280 | 140 KB | `/ (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.51.jpg` | jpeg | 1024×1280 | 116 KB | `/ (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/10/2026-10-09-19.52.55.jpg` | jpeg | 1024×1280 | 144 KB | `/ (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2026/07/photo_2026-07-15-16.58.05.jpeg` | jpeg | 1023×1280 | 180 KB | `/ (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/03/5855212835015691646-1.jpg` | jpeg | 1023×1280 | 154 KB | `/ (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/5765134881053674814.jpg` | jpeg | 1023×1280 | 166 KB | `/ (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/5765134881053674813.jpg` | jpeg | 1023×1280 | 180 KB | `/ (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2026/02/Captura-de-pantalla-2026-02-02-114909.png` | png | 1062×173 | 65 KB | `/ (as resized)` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2026/01/6034946637848841503.jpg` | jpeg | 1039×1280 | 173 KB | `/ (as resized)`, `/category/esdeveniments (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2015/04/banner-01.png` | png | 1517×188 | 29 KB | `/tallers-oberts-per-trencar-les-complicitats-entre-catalunya-i-israel (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2021/10/Imagen-1B.jpg` | jpeg | 937×593 | 115 KB | `/palestina-caminem-cap-a-la-fi-de-lapartheid (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2023/02/laurent-ada.jpg` | jpeg | 1280×842 | 193 KB | `/la-suspensio-de-relacions-de-barcelona-amb-israel-es-un-ale-desperanca-per-al-poble-palesti (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2023/02/laurent-ada2.jpg` | jpeg | 1280×854 | 157 KB | `/la-suspensio-de-relacions-de-barcelona-amb-israel-es-un-ale-desperanca-per-al-poble-palesti (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2019/10/ELAI-cas.png` | png | 1122×1121 | 140 KB | `/campanya-elai (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2021/10/picture1-1635139662.png` | png | 668×287 | 27 KB | `/les-organitzacions-palestines-demanen-aplicar-a-israel-mesures-clares-contundents-i-publiques (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2025/08/1-1.png` | png | 1080×1350 | 822 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/2-1.png` | png | 1080×1350 | 719 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/3-1.png` | png | 1080×1350 | 1537 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/5-1.png` | png | 1080×1350 | 763 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/6-1.png` | png | 1080×1350 | 1244 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/4-1.png` | png | 1080×1350 | 831 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/7-1.png` | png | 1080×1350 | 953 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/08/8-1.png` | png | 1080×1350 | 2338 KB | `/tag/bds (as resized)`, `/victories-populars-de-setembre-2024-a-agost-de-2025 (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/10/20150525191200Fira-de-MontjuAFc-1-760x428-2.jpg` | jpeg | 760×428 | 52 KB | `/category/palestina (as resized)` | Other / unclassified / Unknown | check | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-16-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf.png` | png | 1492×840 | 556 KB | `/category/palestina (as resized)` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-40-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf.png` | png | 1088×1350 | 746 KB | `/category/palestina (as resized)` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/10/Screenshot-2025-10-22-at-13-14-47-NDP-la-Fira-de-Barcelona-versio-final-NDP-la-Fira-de-Barcelona-versio-final-1.pdf.png` | png | 1112×1166 | 511 KB | `/category/palestina (as resized)` | Screenshot of own press note/document / Own (likely) | low | mirrored |
| `wp-content/uploads/2025/07/5.png` | png | 1080×1350 | 1177 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/07/8.png` | png | 1080×1350 | 1197 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/04/Mani_20-abril_TW_CAT-simple.jpg` | jpeg | 2133×1200 | 259 KB | `/author/nomescomplicitat (as resized)`, `/category/esdeveniments (as resized)`, `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/02/Imatge-1.jpeg` | jpeg | 1280×1280 | 189 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/20G_hotitzontal_general_cat.png` | png | 1920×1080 | 292 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/20G_RRSS_AR_Barcelona-copy.png` | png | 4500×5625 | 1945 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2024/01/ciudades_cat.png` | png | 1080×1350 | 171 KB | `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2023/10/PALESTINA-XXSS_HORITZONTAL.jpg` | jpeg | 1920×1080 | 899 KB | `/category/esdeveniments (as resized)`, `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2023/10/TW-MANIFEST.jpg` | jpeg | 2251×1126 | 2661 KB | `/category/esdeveniments (as resized)`, `/category/palestina (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/06/2025-06-30-06.31.08.jpg` | jpeg | 1130×600 | 71 KB | `/tag/bds (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2015/10/CARTELLJUDICIdestacada.jpg` | jpeg | 800×401 | 94 KB | `/tag/bds (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/10/CARTELLJUDICI.jpg` | jpeg | 800×1130 | 265 KB | `/tag/bds (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2015/10/995649_845962985501013_4001524119841036418_n.jpg` | jpeg | 960×540 | 52 KB | `/tag/bds (as resized)` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/10/12112423_845962948834350_8792881536909140921_n.jpg` | jpeg | 960×540 | 64 KB | `/tag/bds (as resized)` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2015/10/12115429_845962958834349_7462166122587568712_n.jpg` | jpeg | 960×540 | 65 KB | `/tag/bds (as resized)` | Image downloaded from Facebook / Unknown author | MEDIUM-HIGH — author unknown | mirrored |
| `wp-content/uploads/2014/09/imagenes_de_proximidad_cine_israelia_2.jpg` | jpeg | 594×396 | 79 KB | `/tag/bds (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2014/09/filmoteca_israel.jpg` | jpeg | 940×1931 | 1612 KB | `/tag/bds (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2025/10/5764809846518647609.jpg` | jpeg | 1023×1280 | 163 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/5965366256389442123.jpg` | jpeg | 1080×1080 | 226 KB | `/author/nomescomplicitat (as resized)`, `/category/esdeveniments (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/comunicat_web.jpg` | jpeg | 1440×760 | 166 KB | `/author/nomescomplicitat (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/03/WhatsApp-Image-2025-03-06-at-08.36.08.jpeg` | jpeg | 1280×1600 | 273 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/03/WhatsApp-Image-2025-03-05-at-10.43.54.jpeg` | jpeg | 1280×720 | 224 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/02/genocides_fora_de_la_fira.png` | png | 1500×938 | 144 KB | `/author/nomescomplicitat (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-14.28.03.jpeg` | jpeg | 1280×720 | 383 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2025/01/WhatsApp-Image-2025-01-10-at-14.28.031.jpeg` | jpeg | 1119×736 | 310 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/12/WhatsApp-Image-2024-12-08-at-17.06.08.jpeg` | jpeg | 1080×1351 | 425 KB | `/author/nomescomplicitat (as resized)` | Image received via messaging app (WhatsApp/Telegram naming) / Unknown author | MEDIUM — author/consent unknown | mirrored |
| `wp-content/uploads/2024/12/razzmatazz.jpg` | jpeg | 1600×1600 | 293 KB | `/author/nomescomplicitat (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |
| `wp-content/uploads/2025/11/Noviembre-2025-Cartel-A3-vertical.png` | png | 1414×2000 | 997 KB | `/category/esdeveniments (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/10/CAT_MOSTRA.png` | png | 1080×1350 | 2011 KB | `/category/esdeveniments (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/04/Cartel_10M_RRSS_cat.jpg` | jpeg | 1080×1350 | 363 KB | `/category/esdeveniments (as resized)` | Campaign poster / social graphic / Own (likely; check embedded photos & fonts) | low-medium — Canva templates/stock inside posters possible | mirrored |
| `wp-content/uploads/2025/04/1-removebg-preview-1.png` | png | 500×500 | 89 KB | `/category/esdeveniments (as resized)` | Other / unclassified / Unknown | check | mirrored |
| `wp-content/uploads/2020/06/Nammo.jpg` | jpeg | 860×472 | 100 KB | `/category/esdeveniments (as resized)` | News/press photo / Third-party (likely) | HIGH — no credit or licence shown | mirrored |

## Third-party documents linked (not mirrored)

| URL | Linked from |
|---|---|
| http://novact.org/wp-content/uploads/2014/06/CAT-Loteria-dels-Somnis_Programa.pdf | `/setmana-del-refugiat-del-19-al-22-de-juny`, `/tag/no-mes-complicitat-amb-israel` |
| http://nomescomplicitat.cat/wp-content/uploads/2014/08/comunicat-de-premsa.pdf | `/1200-professors-i-investigadors-universitaris-de-lestat-espanyol-demanen-trencar-relacions-academiques-amb-israel` |
| http://nomescomplicitat.cat/wp-content/uploads/2014/08/comunicado-de-prensa.pdf | `/1200-professors-i-investigadors-universitaris-de-lestat-espanyol-demanen-trencar-relacions-academiques-amb-israel` |
| http://nomescomplicitat.cat/wp-content/uploads/2014/08/press-release-.pdf | `/1200-professors-i-investigadors-universitaris-de-lestat-espanyol-demanen-trencar-relacions-academiques-amb-israel` |
| http://www.comercio.mineco.gob.es/es-ES/comercio-exterior/estadisticas-informes/PDF/INFORMEESTAD%C3%8DSTICAS2013(6-5-14).pdf | `/la-flotilla-de-la-libertad-volvera-a-navegar-rumbo-a-gaza`, `/author/alys` |
| http://www.boe.es/boe/dias/2000/07/04/pdfs/A23737-23900.pdf | `/la-flotilla-de-la-libertad-volvera-a-navegar-rumbo-a-gaza`, `/author/alys` |
| http://www.un.org/Depts/los/convention_agreements/texts/unclos/convemar_es.pdf | `/la-flotilla-de-la-libertad-volvera-a-navegar-rumbo-a-gaza`, `/author/alys` |
| https://garra.ladiaria.com.uy/media/attachments/comunicado_palestino.pdf | `/messi-i-suarez-no-contribuiu-a-tapar-els-crims-de-guerra-de-lestat-disrael-contra-el-poble-palesti`, `/author/queralt` |
| https://novact.org/wp-content/uploads/2016/03/INFORME_ESP_ISR_cas_web.pdf | `/la-venta-darmament-israelita-contribueix-a-abaratir-el-cost-de-mantenir-els-territoris-ocupats-mentre-es-ven-com-a-provat-en-combat`, `/category/esdeveniments` |
| https://www.accio.gencat.cat/web/.content/bancconeixement/documents/fitxes_pais/informe-israel.pdf | `/la-generalitat-de-catalunya-ignora-el-dret-internacional`, `/category/nomescomplicitats/page/2` |
| https://ajuntament.barcelona.cat/relacionsinternacionalsicooperacio/sites/default/files/declaracio_sobre_palestina_aprovada_ple_consell_20052021.pdf | `/es-de-112-organitzacions-de-la-societat-civil-demanen-a-lajuntament-de-barcelona-que-trenqui-lagermanament-amb-tel-aviv`, `/la-campanya-barcelona-amb-lapartheid-no-barcelona-amb-els-drets-humans-si-celebra-la-suspensio-de-les-relacions-institucionals-amb-israel` |
| https://finalcomerciodearmasconisrael.org/wp-content/uploads/2024/02/24Ene24-Adjudicaciones-contratos-publicos-Israel-defensa-y-seguridad-desde-oct-2023-1.pdf | `/el-govern-espanyol-ha-mentit-de-manera-reiterada-sobre-la-suspensio-de-vendes-darmes-a-israel`, `/author/suds` |
| https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_A3_CAT.pdf | `/20-dabril-manifestacio-aturem-el-genocidi`, `/category/esdeveniments` |
| https://www.palestina.cat/wp-content/uploads/2024/04/Mani_20-abril_A3_AR_sin_marcas_01.pdf | `/20-dabril-manifestacio-aturem-el-genocidi`, `/category/esdeveniments` |
| https://www.emro.who.int/images/stories/Sitrep_51.pdf | `/el-festival-de-la-infancia-un-esdeveniment-organitzat-en-un-espai-de-complicitat-amb-el-genocidi-a-palestina`, `/category/bds` |
| https://www.bdsmovement.net/sites/default/files/2024-05/BDS%20Spanish.pdf | `/sonar-boicot-i-responsabilitat-politica-no-nhi-ha-prou-amb-ser-propalesti-cal-ser-antisionista`, `/category/uncategorized` |
| https://www.palestina.cat/wp-content/uploads/2024/07/Octaveta_generica_color_CAT.pdf | `/festes-majors`, `/` |
| https://www.parlament.cat/document/bopc/432937772.pdf | `/per-tercer-any-consecutiu-el-festival-de-cinema-israelia-seret-no-pot-celebrar-se-obertament-a-barcelona`, `/` |
| https://www.parlament.cat/document/bopc/433347494.pdf | `/denunciem-limperalisme-deua-i-el-terrorisme-disrael`, `/` |
| http://naqba2013.files.wordpress.com/2013/05/dossier_premsa_naqba2013.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/nota-de-premsa-_2_.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/nota-de-premsa-_1_.pdf | `/documentacio` |
| http://independent.cat/gracia/Independent_484.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/dossier_parlamentaris.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/dossier_mov-socials.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/accio.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/140_fitxa-nuclis-transnacionals-4.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/05/acuerdos-seguridad-1.pdf | `/documentacio` |
| http://stopbalesdegoma.org/wp-content/uploads/2013/06/informe-SBG2013.pdf | `/documentacio` |
| http://naqba2013.files.wordpress.com/2013/12/bancos-que-financian-armas.pdf | `/documentacio` |
| http://negocisocults.files.wordpress.com/2013/05/13032acp_articles_ocults-1.pdf | `/documentacio` |
| http://www.sci-cat.org/documents/informe2_soltam.cat.pdf | `/documentacio` |
| http://www.sci-cat.org/documents/pp1_relacions-militars-entre-israel-i-espanya_cat.pdf | `/documentacio` |
| http://negocisocults.files.wordpress.com/2013/04/informe2_soltam-cast.pdf | `/documentacio` |
| http://negocisocults.palestina.cat/wp-content/uploads/2014/05/INFORME_E-I__CAT_web_.pdf | `/documentacio` |
| http://negocisocults.palestina.cat/wp-content/uploads/2014/05/INFORME_ESP_ISR_cas_web-3.pdf | `/documentacio` |
| http://www.sci-cat.org/documents/entrevista-rafeef-la-directa.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2013/06/MemoriaRaG2012.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/48.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/53.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/273.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/InformeAmnistiaInternacional.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/KAIROS-PALESTINA.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/argumentos-para-un-boicot-acadecc81mico-jason-kunin.pdf | `/documentacio` |
| http://www.acsur.org/IMG/pdf/Apartheid_contra_el_poble_palesti.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/the-economy-of-the-occupation-the-alternative-information-center-academic-boycott-of-israel.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/the-fallacy-of-academic-freedom-and-the-academic-boycott-of-israel.pdf | `/documentacio` |
| http://www.rumboagaza.org/wp-content/uploads/2010/09/Conclusiones-Tribunal-Russell-Palestina.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/btselem_-nir-shalev-2009-the-hidden-agenda_-the-establishment-and-expansion-plans-of-maale-adummim-and-their.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/btselem_hareuveni-eyal2010-by-hook-and-by-crook-israeli-settlement-policy-in-the-west-bank.pdf | `/documentacio` |
| http://complicitatsquematen.files.wordpress.com/2013/11/btselem_lein-yehezkel-2002-land-grab-israels-settlement-policy-in-the-west-bank.pdf | `/documentacio` |
