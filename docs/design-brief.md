# Design brief — redesign of proucomplicitat.cat

**For:** the agent/developer who will build the new site in Astro, and the coalition who must approve it.
**Status:** discovery + design direction. No production code exists yet.
**Evidence base:** everything below traces to material captured on 2026-11-01. Paths are relative to the repo root.

| Evidence | Where |
|---|---|
| Page inventory (297 URLs: pages, 174 posts, archives, 404s) | `content/current-site/_inventory.md` (+ `_inventory.json`) |
| Verbatim text of each section page (Catalan, untranslated) | `content/current-site/<slug>.md`; site-wide header/nav/footer/slider/cookie text in `_chrome.md` |
| Screenshots, 1440 px and 390 px, full page + first screen; nav open + footer for 4 templates | `screenshots/<slug>--{1440,390}-{full,top}.png`, `*--nav-open.png`, `*--footer.png` |
| Mirrored images, logos and the organisation's own PDFs, plus a manifest | `assets/original/**`, `assets/original/_manifest.md` |
| Network log (every response per page, bytes, embeds) | `content/current-site/_network.json` |
| Reproducible tooling | `scripts/crawl.mjs`, `scripts/capture.mjs`, `scripts/mirror-assets.mjs` |

Scope note (agreed with the project owner mid-task): every **section** is captured (all 39 WordPress pages, the home page, the Festes Majors and Agenda menu targets, and one representative post, category, tag and author archive). The 174 blog posts are inventoried but not captured one by one; they can be imported through the site's open WordPress REST API (see §6).

---

## 1. Summary and recommended direction

**What the site is.** proucomplicitat.cat belongs to the *Coalició Prou Complicitat amb Israel (CPCI)*, a Catalan coordination space of movements, collectives and individuals. In its own words (`qui-som.md`) it works «per trencar la complicitat de les institucions i empreses catalanes en la violació dels drets del poble palestí, tot promovent la solidaritat de la ciutadania amb Palestina, conscienciant-la i oferint-li vies d'acció». The site is active: posts arrive roughly monthly, and the latest is dated 09/10/2026.

**Why it fails today (detail in §A.3).** The site is a 2015 WordPress/Vantage install that grew by accretion. On a phone, the first screen shows the logo and four social icons each labelled "More Info"; there is no mission statement and no action. The home page is an endless blog roll, 33,568 px tall on desktop and 53,040 px on mobile. Seven pages print raw plugin code such as `[emailpetition id=»4″]` instead of a form, five are empty, one is lorem ipsum, and three are duplicates. The two most important asks, signing the manifesto and subscribing to the newsletter, both lead to broken or empty pages.

**Recommended direction: A — "Cartell" (the poster).** The site reads like the coalition's own street placards. Condensed capital-letter headlines, the logo's red, black and newsprint palette, and big plain-text statements replace stock photography. The structure is action-first: the home page answers *what is happening*, *what can I do*, and *what have we won* within three screens.

**Why A.** It needs no photographer and no designer. It builds on assets the coalition already has (the logo's red `#BF1616` and condensed type, and the 4:5 posters it already makes for Instagram). It keeps the angry, direct voice. It is the cheapest direction to keep looking good when a volunteer adds content in Markdown.

**What we trade away:** the sober, documentary credibility of direction C, which journalists and council officers may trust more, and C's deep evidence archive. We also give up B's lean, almost font-free speed: A adds one ≈35 KB webfont. Full trade-offs are in §B.4.

**Fix before any redesign (zero-design wins):** remove or redirect the broken, empty and duplicate pages listed in §2, and decide how petitions and the newsletter will work (open questions Q1–Q2). Without that decision the new design would just wrap the same dead ends.

---

Interpretation of the current site is in **Appendix A**; the three directions and the reasoning behind the recommendation are in **Appendix B**.

---

## 2. Page inventory: current → proposed

Rule: **nothing is deleted.** "Merge" means the content moves; "redirect" means the old URL points at its new home. Every old URL in the table must get a redirect (§6.5). Blog posts keep their exact URLs.

| Current URL | Proposed URL | Action | Justification / where content moves |
|---|---|---|---|
| `/` | `/` | **Rebuild** | Becomes the campaign home (§B.1). The blog roll moves to `/noticies` |
| `/qui-som` | `/qui-som` | Keep | Core identity page; member wall becomes a component |
| `/no-mes-complicitat` | `/qui-som#historia` | Merge + redirect | Legacy "Qui som" of the predecessor campaign. Its full text, including «Sabem que la nostra llibertat és incompleta sense la llibertat del poble palestí» (Mandela quote), moves into a "La nostra història" section |
| `/aliances-internacionals` | `/qui-som/aliances` | Keep (move) + redirect | Same content; it sits under Qui som |
| `/prou-complicitat-amb-israel-es-lhora-dactuar` | `/manifest` | Keep (move) + redirect | Founding manifesto. The broken `[emailpetition id=»4″]` becomes the real signing mechanism (Q1) |
| `/signa-el-manifest`, `/nou-manifest` | `/manifest` | Redirect | Empty pages (title only); nothing to move |
| `/que-hi-puc-fer-jo` | `/actua` | Keep (move) + redirect | Action hub; same 6 cards plus ELAI and Festes Majors |
| `/que-hi-puc-fer-jo/participa` | `/actua/adhereix-te` | Keep (move) + redirect | «Adhereix-te» text kept; the broken form is replaced (Q1) |
| `/participa-en-assamblees` | `/actua/assemblees` | Keep (move) + redirect | Content kept verbatim; flagged for review because it names 2014 commissions (Q10) |
| `/organitza-una-xerrada-al-teu-poble` | `/actua/xerrades` | Keep (move) + redirect | — |
| `/boicot` | `/actua/boicot` | Keep (move) + redirect | — |
| `/newsletter` | `/actua/newsletter` | Rebuild + redirect | Currently empty; needs a provider (Q2) |
| `/mocio-de-suport-a-lajuntament-del-teu-poble` | `/actua/mocio` | **Hold** (draft, unpublished) | Body is entirely lorem ipsum («Lorem ipsum dolor sit amet, consectetuer adipiscing elit…»). Keep the title as a draft until real text exists (Q10) |
| `/tallers-oberts-per-trencar-les-complicitats-entre-catalunya-i-israel` | same URL (post) | Keep as dated post | Page and post share this URL; keep it as a post dated to its original year (unknown → Q10). Remove from the action cards because it is a past event |
| `/campanya-elai` | `/campanyes/elai` | Keep (move) + redirect | Map embed replaced by a link or static image (§5, EmbedPlaceholder) |
| `/festes-majors` (post) | `/campanyes/festes-majors` | Keep (move) + redirect | It is in the main menu, so it deserves a stable campaign URL; the post URL redirects |
| `/manifest-i-adhesions` | `/campanyes` | Merge + redirect | Becomes the campaigns index; its four petition tiles and member manifestos are kept |
| `/campanyes` | `/campanyes` (history section) | Merge | Its text about «No més complicitat amb Israel» (2014) becomes a "Campanyes anteriors" section of the same index |
| `/exigeix-​​-nomescomplicitat-amb-israel` | `/campanyes/no-mes-complicitat-2014` | Keep (move, archive) + redirect | 2014 petition text kept. The broken `[emailpetition id="1"]` and `[signaturelist id="1"]` become a static closed notice and an archived signatory list if the data still exists in WordPress (Q1) |
| `/aturem-el-castig-collectiu-a-palestina` | `/campanyes/aturem-el-castig-collectiu` | Keep (archive) + redirect | Same treatment (`id="2"`) |
| `/crida-del-mon-de-la-cultura-…` + `/adhesions-a-la-crida-…` | `/campanyes/crida-mon-cultura` | Merge + redirect | Adhesion page holds only the broken shortcode; one archived page |
| `/ajuntament-de-barcelona-amb-lapartheid-no` + `/bcnambtlvno` | `/campanyes/barcelona-amb-lapartheid-no` | Merge + redirect | Background text and the Google Form call to action «Signa el Manifest» on one page |
| `/la-suspensio-de-relacions-…-palesti` | same URL | Keep | The longest version (504 words) |
| `/la-suspensio-…-palesti-2`, `…-3` | `/la-suspensio-…-palesti` | Redirect | Duplicates: same opening text, 181 words each, i.e. truncated copies of the kept page |
| `/palestina-caminem-cap-a-la-fi-de-lapartheid`, `/les-organitzacions-palestines-demanen-aplicar-a-israel-…` | same URLs | Keep as posts | They are statements/events, so they belong in news. Pages and posts collapse into one entry |
| `/agenda` | `/agenda` | Rebuild | `[ai1ec view=»monthly»]` is broken. It becomes an event list sourced from the events collection (§6) |
| `/category/esdeveniments` | `/agenda` | Redirect | The menu already uses it as "Agenda" |
| `/documentacio` | `/premsa` | Keep (move) + redirect | All sections kept (press contact, reports, press notes, dossiers, videos, media appearances). Dead third-party links get flagged, not removed (Q11) |
| `/premsa` | `/premsa` | Reuse URL | Empty today; it receives `/documentacio`'s content |
| `/blog`, `/noticies`, `/rss-prueba` | `/noticies` | Merge + redirect | Empty or broken; `/noticies` becomes the posts index (paginated, filterable by category) |
| `/piulades` | `/noticies` (footer link list) | Merge + redirect | Its two hashtag search links («Tuits sobre "#GazaUnderAttack OR #stopsettlersterror OR #freegaza"», «Tuits sobre "#proucomplicitat OR #nomescomplicitat"») move into the social-links block |
| `/contacte` | `/contacte` | Keep | Expanded with press and talk contacts already on other pages |
| `/avis-legal` | `/avis-legal` | Keep | Content kept; Catalan version requested (Q7); typo «Coalució» flagged, not silently fixed |
| `/politica-de-cookies` | `/privacitat` | Rewrite + redirect | If the new site sets no cookies (§7.4), the policy shrinks. The old text stays in the repo as an archive |
| `/category/*`, `/tag/*` | `/noticies/tema/<slug>` | Redirect | 9 categories map to topic filters; 44 tags kept in post frontmatter, but tag pages not generated (thin) → redirect to `/noticies` (Q12) |
| `/author/*` | `/noticies` | Redirect | Author pages reveal volunteer usernames (e.g. post bylines «cpci» link to `/author/sarai`); see §7.4 |
| `/type/image` | `/noticies` | Redirect | Post-format archive, no editorial value |
| 174 posts `/<slug>` | **same URL** | Keep | Imported via REST API. URL kept so inbound links and search results survive with no redirects. Ugly slugs (e.g. `/248092-2`) still get a readable alias (§6.5) |

---

## 3. Proposed IA and navigation

```
/                         Inici
/actua                    Què hi puc fer jo?   ← primary CTA everywhere
  /actua/adhereix-te
  /actua/newsletter
  /actua/assemblees
  /actua/xerrades
  /actua/boicot
  /actua/mocio            (draft)
/manifest                 Manifest (+ signatura)
/campanyes                Campanyes (index + history)
  /campanyes/elai
  /campanyes/festes-majors
  /campanyes/barcelona-amb-lapartheid-no
  /campanyes/<archived 2014 petitions>
/agenda                   Events (upcoming / past)
/noticies                 Posts (paginated, topic filter)
  /noticies/tema/<cat>
/<post-slug>              Individual posts (unchanged URLs)
/victories                Victòries (timeline)
/qui-som                  Qui som + member wall + història
  /qui-som/aliances
/premsa                   Premsa i documentació
/contacte
/avis-legal  /privacitat
```

| | Mobile (< 768 px) | Desktop (≥ 1024 px) |
|---|---|---|
| Header | Logo (left, 40 px tall) · «Actua» red button · «Menú» button with a visible label (not an icon alone) | Logo · Actua · Agenda · Campanyes · Notícies · Qui som · Premsa · red «Signa el manifest» button |
| Menu | Full-screen panel; links stacked at 22 px with 56 px rows; social links and contact email at the bottom; closes on Esc and returns focus to the toggle | No dropdowns. Sub-pages are reached from section index pages (no hover-only menus) |
| Sticky | Header is not sticky (saves vertical space). A sticky bottom «Actua» bar is optional and appears only after 1 screen of scroll | Not sticky |
| Footer | Sections as an accordion-free list; contact; legal; social with text labels | 4 columns: Actua · Coalició · Notícies & agenda · Contacte/legal |
| Search | Dropped in v1: Pagefind (static, free) is an option later (Q12) | Same |

Search exists today in the header (`searchform` on every page). Dropping it is a reduction in function, so it is flagged as Q12 rather than decided.

---

## 4. Design system

### 4.1 Type scale (direction A)

Fluid between 390 px and 1440 px with `clamp()`. Sizes in px for the handoff.

| Token | Mobile | Desktop | Line-height | Font | Use |
|---|---|---|---|---|---|
| `display` | 44 | 88 | 0.95 | Anton, uppercase | Home hero, campaign statement |
| `h1` | 36 | 64 | 1.0 | Anton, uppercase (≤ 70 chars, else sentence case) | Page titles |
| `h2` | 28 | 40 | 1.05 | Anton, uppercase | Section titles |
| `h3` | 21 | 24 | 1.25 | System, 700 | Card titles, sub-sections |
| `body-lg` | 19 | 21 | 1.5 | System, 400 | Intros/lead |
| `body` | 17 | 18 | 1.55 | System, 400 | Prose (max 68ch) |
| `small` | 15 | 15 | 1.45 | System, 400 | Meta, captions |
| `label` | 13 | 13 | 1.2 | System, 700, uppercase, +0.06em | Dates, badges (≥ 13 px floor) |

### 4.2 Palette and semantic tokens

| Token | Hex | Role | Contrast (verified) |
|---|---|---|---|
| `--color-paper` | `#F4F1EA` | Page background | — |
| `--color-surface` | `#FFFFFF` | Cards, member-logo tiles | — |
| `--color-ink` | `#141414` | Text, dark bands | 16.33:1 on paper |
| `--color-muted` | `#595650` | Meta text | 6.48:1 on paper |
| `--color-accent` | `#BF1616` | Primary buttons, key words, links | 5.57:1 on paper; white text on it 6.28:1 |
| `--color-accent-strong` | `#9E1010` | Hover/active of accent | 7.34:1 on paper |
| `--color-accent-on-dark` | `#FF5A4F` | Accent inside ink bands | 5.99:1 on ink (brand red on ink is only 2.93:1, so never use it there) |
| `--color-success` | `#1E6B34` | Victory badges, form success | 5.80:1 on paper |
| `--color-rule` | `#8A857C` | Borders, input outlines | 3.25:1 on paper (meets 3:1 non-text, WCAG 1.4.11) |
| `--color-focus` | `#141414` on light / `#F4F1EA` on dark | 3 px focus outline + 2 px offset | ≥ 3:1 against both adjacent colours |
| `--color-error` | `#9E1010` + icon + text | Form errors (never colour alone) | 7.34:1 |

Links in prose: `--color-accent`, underlined (1 px, offset 3 px), with a 2 px underline on hover. Underline is required: colour alone is not enough (WCAG 1.4.1).

### 4.3 Spacing, grid, breakpoints

| Item | Value |
|---|---|
| Spacing scale (4-based) | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128 |
| Section rhythm | 64 px vertical between sections on mobile, 96 px on desktop |
| Gutters | 16 px (< 768) · 24 px (768–1023) · 32 px (≥ 1024) |
| Container | max 1200 px; prose max 68ch (≈ 680 px at 18 px) |
| Grid | 4 cols (mobile) · 8 cols (≥ 768) · 12 cols (≥ 1024) |
| Breakpoints | `sm` 480 · `md` 768 · `lg` 1024 · `xl` 1280 |
| Card grids | 1 col < 600 · 2 cols ≥ 600 · 3 cols ≥ 1024 |

### 4.4 Radius, shadow, border

| Element | Convention |
|---|---|
| Radius | **0** everywhere (poster, cut paper). Exception: 999 px for small badges |
| Shadow | None. Depth comes from borders and colour bands |
| Borders | 2 px `--color-ink` for cards and inputs; 1 px `--color-rule` for dividers |
| Buttons | Solid accent fill / 2 px ink outline; min height 48 px; padding 12 × 20 px |

### 4.5 Icons and illustration

- Icons: **Lucide** (ISC licence), inline SVG, 24 px, 2 px stroke, `aria-hidden` with a visible text label. It replaces Font Awesome and the theme icon font (2 icon fonts, 77 KB today).
- Social icons always come with their name («Instagram», «Telegram», «Bluesky», «X»), never «More Info».
- No illustration system. The logo's "pushing figure" mark may be used as a section divider *only* if a vector version exists (Q3).
- Photos: CSS duotone (ink/paper) for mixed-source news images; posters shown untreated.

### 4.6 Motion

| Rule | Value |
|---|---|
| Default | No motion: no carousel, no parallax, no scroll-triggered animation, no auto-playing video |
| Allowed | Colour/underline transitions ≤ 150 ms; menu panel open ≤ 200 ms |
| Reduced motion | `prefers-reduced-motion: reduce` → all transitions 0 ms |
| Video | Click-to-play only, with poster frame |

---

## 5. Component inventory

States key: D default · H hover · F focus-visible · A active/pressed · X disabled · L loading · E empty · R error.

| Component | Purpose | Variants | Slots | States |
|---|---|---|---|---|
| **Header** | Identity + primary nav + CTA | — | logo, nav items, CTA | D; nav link H (underline), F (outline), current page (`aria-current`, 3 px red underline) |
| **MobileMenu** | Nav under 1024 px | — | links, social, contact | closed/open; F trapped inside while open; Esc closes; X n/a |
| **Footer** | Sitemap, contact, legal | — | 4 link groups, email, entity name | D/H/F on links |
| **Button** | Actions | primary (red), secondary (ink outline), on-dark (paper outline), link-style | label, optional icon | D, H (accent-strong), F, A (inset 2 px), X (`aria-disabled`, 50% opacity + not-allowed cursor, explained in text), L (spinner + «Enviant…», disabled) |
| **ActionCard** | One way to act | default, featured (red top border 6 px), inactive | icon, title, summary, link label, effort badge | D, H (border → red), F (whole card focusable via the title link), X (`active: false` → hidden in build, never shown greyed), E (hub shows Notice «Aviat noves accions») |
| **EventItem** | Agenda row | compact (home), full (agenda) | date block (day/month), title, place, city, link | D, H, F; past events in muted colour with label «Passat»; E: «No hi ha actes programats. Segueix-nos a Telegram» + link |
| **PostCard** | News teaser | with poster, text-only | date, topic, title, excerpt, poster | D, H (title underline), F, E (index: «Encara no hi ha notícies») |
| **CampaignTile** | Campaign entry | active, won (green badge), archived (muted) | statement, title, status, poster | D, H, F |
| **StatementBand** | Big uppercase statements on ink | 1–4 statements | statement text, source link | D only (static) |
| **VictoryTimeline** | Proof of impact | short (5 latest), full | month, text, source link, place | D, F on links, E (hidden on home) |
| **MemberWall** | Coalition members | — | logo (on white tile), name, link | D, H (tile border), F; missing logo → name in a text tile |
| **NewsletterBlock** | Subscribe | inline form, link-out (if provider has hosted form) | heading, email input, consent text, submit | D, F, L, success (green Notice), R (field error message tied with `aria-describedby`; server error Notice), X while sending |
| **ManifestoSign** | Sign the manifesto | inline form, link-out, closed | heading, fields (name, email, collectiu?, població), consent, submit, signatory count (optional) | D, F, L, success, R, closed («Aquesta campanya està tancada») |
| **SocialLinks** | Channels | header, footer | icon + platform name | D, H, F |
| **Prose** | Rich text from Markdown | — | any Markdown | Styles for h2–h4, lists, blockquote, tables, figures + captions, external link marker |
| **PosterImage** | 4:5 posters | thumb, full | image, alt, caption, link to full size | D; L (aspect-ratio box reserves space, so no layout shift); R (alt text shown in a bordered box) |
| **Pagination** | Lists | — | prev/next, page numbers | D, H, F, current (`aria-current="page"`), X (no prev on page 1: rendered as text, not a link) |
| **TopicFilter** | News by topic | — | topic links | D, H, F, current |
| **Notice** | Status messages | info, success, error, archived | icon, text, optional link | static; `role="status"` (success) or `role="alert"` (error) |
| **EmbedPlaceholder** | Replace third-party embeds | map, video, social | title, description, outbound link, optional static preview image | D; click loads the embed only if the coalition opts in (§7.4) |

---

## 6. Astro mapping (names and responsibilities only)

### 6.1 Routes

| Route file (pattern) | Renders | Data |
|---|---|---|
| `index` | Home | `actions`, `events` (next 3), `victories` (last 5), `posts` (last 3), `campaigns` (featured), `members`, `site` |
| `actua/index`, `actua/[slug]` | Action hub and action detail | `pages` (section = actua), `actions` |
| `manifest` | Manifesto + sign form | `pages` entry `manifest` |
| `campanyes/index`, `campanyes/[slug]` | Campaign index/detail | `campaigns` |
| `agenda/index` | Upcoming + past events | `events` |
| `noticies/[...page]`, `noticies/tema/[topic]/[...page]` | Paginated posts | `posts` |
| `[slug]` | Individual post at its original root URL | `posts` |
| `victories` | Full timeline | `victories` |
| `qui-som/index`, `qui-som/aliances` | About, allies | `pages`, `members`, `allies` |
| `premsa`, `contacte`, `avis-legal`, `privacitat` | Static pages | `pages` |
| `404` | Not found, with links to Actua and Notícies | `site` |
| `rss.xml` | Feed of posts | `posts` (keeps feed readers working; old `/feed` redirects here) |

### 6.2 Layouts

| Layout | Responsibility |
|---|---|
| `BaseLayout` | `<html lang="ca">`, meta/OG, skip link, Header, Footer, font preload |
| `PageLayout` | Page title block + prose column (68ch) + optional aside |
| `PostLayout` | Date, topic, prose, poster, source/related links, "Actua" footer CTA |
| `CampaignLayout` | Hero statement, status badge, call to action, timeline, resources |

### 6.3 Content collections (frontmatter)

| Collection | Folder | Fields (type, required?) |
|---|---|---|
| `posts` | `src/content/posts/*.md` | `title` (string, req) · `date` (date, req) · `slug` (string, req: original WP slug) · `lang` (`ca`/`es`/`en`, default `ca`) · `topics` (string[], from WP categories) · `tags` (string[]) · `excerpt` (string, ≤ 200 chars) · `poster` (image path, optional) · `posterAlt` (string, required if poster) · `translations` (slug[], optional) · `draft` (bool) · `wpId` (number, provenance) |
| `pages` | `src/content/pages/*.md` | `title` · `section` (`actua`/`qui-som`/`legal`/`premsa`…) · `order` (number) · `summary` · `cta` (`{label, href}`, optional) · `updated` (date) · `draft` |
| `campaigns` | `src/content/campaigns/*.md` | `title` · `statement` (≤ 12 words, used uppercase) · `status` (`activa`/`guanyada`/`arxivada`) · `started` (date) · `cta` (`{label, href}`) · `poster` · `posterAlt` · `featured` (bool) |
| `events` | `src/content/events/*.md` | `title` · `start` (datetime, req) · `end` (datetime) · `place` (string) · `city` (string) · `mapUrl` (url) · `link` (url to post or external) · `organiser` (string) |
| `actions` | `src/content/actions/*.yaml` | `title` · `summary` · `icon` (name) · `href` · `effort` (`5min`/`tarda`/`col·lectiu`) · `order` · `active` (bool) |
| `victories` | `src/content/victories.yaml` | list of `{date (yyyy-mm), text, sourceUrl?, place?}` |
| `members` | `src/content/members.yaml` | list of `{name, logo, url, description}` (from `/qui-som`) |
| `allies` | `src/content/allies.yaml` | list of `{name, url, description}` (from `/aliances-internacionals`) |
| `site` | `src/content/site.yaml` | contact emails, social URLs, newsletter URL, manifesto form URL, legal entity name |

Validation: schemas reject a `poster` without `posterAlt` and an `event` without `start`. This lets a non-technical editor get a clear build error instead of a silently broken page.

### 6.4 Shared components

Header, MobileMenu, Footer, Button, ActionCard, EventItem, PostCard, CampaignTile, StatementBand, VictoryTimeline, MemberWall, NewsletterBlock, SocialLinks, Prose, Pagination, TopicFilter, Notice, PosterImage, EmbedPlaceholder. Specs are in §5.

### 6.5 Where content comes from, and redirects

| Item | How |
|---|---|
| Posts (174) | One-off import script from `https://proucomplicitat.cat/wp-json/wp/v2/posts` (verified open: `X-WP-Total: 175`). Convert HTML to Markdown, keep `slug` and `date`, download images to `src/assets/posts/<year>/`. The next agent may stub posts with mockup text first, but the API makes the real thing cheap |
| Pages | Start from `content/current-site/<slug>.md` (verbatim) and strip the frontmatter notes |
| Images | `assets/original/wp-content/uploads/**` → `src/assets/…`; let Astro `<Image>` produce AVIF/WebP at 1×/2× |
| Redirects | Astro `redirects` config (generates static meta-refresh pages, works on any host) plus a `_redirects` file if the host supports it. Table in §2 is the source |
| Readable aliases | e.g. `/248092-2` keeps working, plus an alias if the coalition wants one (Q12) |

---

## 7. Non-functional requirements

### 7.1 Accessibility: WCAG 2.2 AA (targets, testable)

| Area | Requirement |
|---|---|
| Language | `lang="ca"` on `<html>`; posts in `es`/`en` set their own `lang` (3.1.1, 3.1.2) |
| Keyboard | Every function works with keyboard alone; logical tab order; skip link «Salta al contingut» first in the tab order; no keyboard traps; the mobile menu closes with Esc and returns focus (2.1.1, 2.1.2, 2.4.1) |
| Focus | Always visible: 3 px outline + 2 px offset with ≥ 3:1 contrast. Never hidden by the header or by a cookie or sticky bar (2.4.7, **2.4.11 Focus Not Obscured**) |
| Contrast | Text ≥ 4.5:1, large text (≥ 24 px, or 18.66 px bold) ≥ 3:1, UI and graphics ≥ 3:1. All palette pairs verified in §4.2 (1.4.3, 1.4.11) |
| Target size | ≥ 24×24 px (2.5.8); our standard is 44×44 px |
| Text in images | None for content. Slider statements become HTML text. Posters need alt text that contains the poster's text (1.4.5, 1.1.1) |
| Structure | One `h1` per page; no skipped heading levels; landmarks (`header`, `nav`, `main`, `footer`); lists as lists |
| Links | Descriptive text: no «Més info >» alone; use «Més info sobre Junts» (visible text or `aria-label` that contains it) (2.4.4, 2.5.3) |
| Forms | Visible labels; errors in text, linked with `aria-describedby`; no CAPTCHA puzzles (3.3.8 Accessible Authentication); don't ask for info already given (3.3.7) |
| Motion | No auto-moving content; reduced-motion respected (2.2.2, 2.3.3 as good practice) |
| Reflow and zoom | Works at 320 px wide and 400% zoom without horizontal scroll (1.4.10); text spacing overrides don't break layout (1.4.12) |
| Help | Contact email in the footer on every page (3.2.6 Consistent Help) |
| Testing | axe-core (or Pa11y) in CI on all routes = 0 violations; manual keyboard pass + VoiceOver/TalkBack spot check on home, actua, manifest, agenda |

### 7.2 Performance budget (per page, mobile, cold cache)

| Metric | Budget | Today (measured) |
|---|---|---|
| Total transfer | ≤ 500 KB (home ≤ 600 KB) | home 1,972 KB; median page 555 KB; `/category/palestina` 5,005 KB |
| Requests | ≤ 25 | 36–56 |
| JavaScript | ≤ 15 KB (menu only); no jQuery | ≈ 245–409 KB (jQuery, slider, mediaelement, CF7, Petitioner, emoji…) |
| Fonts | 1 file ≤ 40 KB, `font-display: swap`, preloaded | 77 KB (2 icon fonts) |
| Largest image | ≤ 200 KB served (AVIF/WebP, responsive `srcset`) | 1,119 KB PNG |
| LCP | ≤ 2.0 s on "Slow 4G" in Lighthouse | not measured (§9) |
| CLS | ≤ 0.05 (all images have width/height or aspect-ratio) | not measured |

Five heaviest assets observed (all PNG posters served at 768–819 px):

| # | Asset | Size | Seen on |
|---|---|---|---|
| 1 | `/wp-content/uploads/2025/10/CAT_MOSTRA-768x960.png` | 1,119 KB | `/category/esdeveniments` |
| 2 | `/wp-content/uploads/2025/08/8-1-768x960.png` | 1,115 KB | `/tag/bds` |
| 3 | `/wp-content/uploads/2025/11/Noviembre-2025-Cartel-A3-vertical-724x1024.png` | 837 KB | `/category/esdeveniments` |
| 4 | `/wp-content/uploads/2025/08/7-1-768x960.png` | 629 KB | `/tag/bds` |
| 5 | `/wp-content/uploads/2024/01/ciudades_cat-819x1024.png` | 618 KB | `/category/palestina` |

Converting these to AVIF/WebP at the displayed size cuts each to roughly 60–150 KB (estimate). Astro's built-in image pipeline does this at build time for free.

### 7.3 SEO and metadata

- Unique `<title>` («<Page> · Prou Complicitat amb Israel») and meta description (from `summary`/`excerpt`). Today the pages expose no meta description.
- Open Graph and Twitter cards: `og:image` = poster or a generated default card (logo on red); `og:locale` `ca_ES`.
- Canonical URLs; `sitemap-index.xml` (`@astrojs/sitemap`); `robots.txt`; RSS at `/rss.xml` plus a redirect from `/feed`.
- JSON-LD `Organization` on home and `Event` on agenda items.
- Every old URL in §2 resolves (redirect or same URL). Verify by replaying `_inventory.json` URLs against the new build (all must be 200/301/308).
- `hreflang` only between posts that have `translations`.

### 7.4 Privacy

| Today | New site |
|---|---|
| `platform.twitter.com/widgets.js` is requested on every page before consent (observed on home) | **No third-party scripts.** Social links are plain links |
| Cookie banner (cookie-law-info) sets `cookielawinfo-checkbox-*` cookies on first visit | No cookies, so **no cookie banner needed**. Replace the cookie policy with a short privacy note |
| No analytics detected (no GA, Matomo, Plausible, Meta pixel found in HTML or requests) | Keep it that way. If they want numbers, the host's server-side, cookieless stats are enough (Cloudflare Web Analytics is free but is a third-party beacon; flag before enabling) |
| Google Maps iframe on `/campanya-elai`; YouTube iframes in posts; Google Forms; WordPress Vimeo renderer script loaded on 4 of 297 crawled pages, including home | EmbedPlaceholder: static preview + link. Load the iframe only on click, with text saying it goes to Google/YouTube |
| reCAPTCHA referenced in home HTML (Contact Form 7) | Avoid; if a form service needs spam protection, prefer a honeypot field |
| Author archives expose volunteer usernames (`/author/sarai`, `/author/queralt` …) | No author pages. Byline «Coalició Prou Complicitat amb Israel» unless an author asks to be named. This matters for a movement that writes about police infiltration («Comunitat contra la infiltració d'una agent de la Policía Nacional al moviment de solidaritat amb Palestina», post title, verbatim including its typos) |

### 7.5 Languages (i18n)

The site is Catalan-first, and content stays in Catalan. At least 11 posts are in Spanish (counted by hand from titles, e.g. «Manifiesto 29 noviembre: una llamada a la solidaridad con la resistencia del pueblo palestino») and one in English (e.g. `/the-parliament-of-catalonia-declares-…`). Recommendation: **no i18n routing**. Each post carries a `lang` field and optional `translations` links; the legal pages get Catalan versions (Q7). Adding full `/es/` or `/en/` sections would double the maintenance load for a volunteer team, so it is not recommended unless asked.

### 7.6 Maintenance

| Question | Recommendation |
|---|---|
| Who edits | One or two volunteers, non-technical (assumed; see Q4) |
| How | Markdown files in a Git repo, edited through **Pages CMS** (free, open-source, edits GitHub repos in a browser form) or GitHub's web editor. Both need a free GitHub account. Decap CMS is the alternative, but its login setup is fiddlier on non-Netlify hosts |
| Hosting | Static build on **Cloudflare Pages** or **GitHub Pages** (both free; the custom domain proucomplicitat.cat is kept). Netlify's free tier also works. Each publish is a commit that builds in about 1 minute |
| Weekly tasks | Add a post (title, date, text, optional poster); add or remove events; add victories |
| Guardrails | Schema validation (missing alt or date → build fails with a readable message); a `README-editors.md` in Catalan with screenshots; a "draft" toggle |
| Skill level | Can fill a web form and upload an image. No terminal, no Node, no Git concepts beyond "Desa" |
| Paid services | **None required.** Flag: newsletter provider and petition tooling may be paid depending on choice (Q1–Q2); the domain renewal is already a cost they carry |

---

## 8. Open questions for the coalition

Only the coalition can answer these. Q1–Q3 block the build.

| # | Question | Why it matters |
|---|---|---|
| **Q1** | **How should people sign the manifesto and petitions now?** The Email Petition shortcodes (`[emailpetition id=…]`) are broken and the "Petitioner" plugin is installed but unused on these pages. Do you still have the signatory data in WordPress? Keep the Google Forms approach used on `/bcnambtlvno`, or something else? | The main CTA on the home page depends on it |
| **Q2** | **Which newsletter do you send, and with what tool?** `/newsletter` is empty; no provider is visible on the site | Second CTA; may be a paid service |
| **Q3** | **Brand assets:** do you have the logo as vector (SVG/AI/PDF)? The site only has a 250×89 JPEG. The slider shows an older lock-up «NO MÉS COMPLICITAT AMB ISRAEL»: which name is current? | Sharp logo on retina screens and social cards |
| Q4 | Who will update the site, how often, and are they comfortable with a GitHub account? | Chooses Pages CMS vs. simpler alternatives |
| Q5 | Deadlines (e.g. a campaign moment to launch for) and who approves the design (assembly, a commission, one person)? | Scheduling and sign-off |
| Q6 | Photography: do you have rights and consent for protest photos? Should faces be blurred by default? Can we use the photos in the current slider (they look like press/agency images)? | Licensing and activists' safety |
| Q7 | Legal: the avís legal is in Spanish and names «Coalució Prou Complicitat amb Israel». Is there a registered legal entity, NIF and address? Who is the data controller for petition signatures? | Legal page accuracy and GDPR for forms |
| Q8 | Hosting: who controls the domain and the current hosting account? Any budget at all (even €0/year)? | Migration and DNS |
| Q9 | Do the values in §A.2 (urgency, collective, evidence, accessibility, defiance) match how you see yourselves? | The direction is built on them |
| Q10 | Which content is still current: assemblies (monthly?), the talk offer, Tallers Oberts, the town-council motion (lorem ipsum today)? | What to show as active vs. archive |
| Q11 | In `/documentacio` many links go to defunct sites (e.g. `naqba2013.files.wordpress.com`, `nomescomplicitat.cat`). Keep them as historical references, or replace with copies? | Archive integrity |
| Q12 | Is it OK to drop: tag pages, author pages, site search (v1), and Spanish/English duplicates as separate pages? | Function reduction; needs consent per the no-delete rule |
| Q13 | Member list on `/qui-som` dates from 2015 (logos in `uploads/2015/04/`). Is it current? | Trust: a stale coalition list misleads |

---

## 9. Not captured / assumptions

| Item | Status | Reason / what was tried |
|---|---|---|
| X/Twitter timeline («Tweets by proucomplicitat»), Google Maps (ELAI), YouTube, Instagram, Telegram, Bluesky, nomescomplicitat.cat | **Not captured** | This environment's network policy blocks these hosts (proxy `CONNECT 403`, `ERR_TUNNEL_CONNECTION_FAILED`). The empty "Tweets by" box in the screenshots may be an artefact of that, so it is **not** counted as a site defect. Its iframe URL is recorded in `campanya-elai.md` |
| Third-party documents (≈ 55 PDFs on other domains) | Listed, not mirrored | Not the coalition's files; many on defunct hosts. Listed in `assets/original/_manifest.json` (kind `document-external`) |
| Self-hosted video `/wp-content/uploads/2025/08/correfoc_girona_palestina.mp4` (on `/festes-majors`) | Not mirrored | Video excluded from the mirror for weight; URL recorded in `festes-majors.md` |
| 174 individual posts | Inventoried, not screenshotted or text-extracted | Scope agreed with owner; importable via REST API |
| Archive pagination beyond page 2 | Not crawled | Crawler caps listing pagination at page 2 |
| LCP/CLS field data | Not measured | No Lighthouse run; budget is a target, not a comparison |
| Theme colours on screen | Measured via computed styles on `/qui-som` only | Values in §A.3 (13 px body, `#666`, link `#248CC8`) |
| Slider text | Transcribed by eye from images | Possible transcription error; JPEGs in `assets/original/wp-content/uploads/2015/04/` |
| Years for `/tallers-oberts…` (2015) and `/palestina-caminem…` (2021) | **Assumption** | Pages carry no year; inferred from their position in the chronologically ordered posts sitemap |
| Audiences and values (§A.1–A.2) | **Assumption** | Inferred from copy; to confirm (Q9) |
| Font: rendered fallback | Assumption | The theme requests "Helvetica Neue", Helvetica, Arial; the screenshots show this container's fallback sans, so real visitors may see Helvetica/Arial |
| Member logo licensing | Assumption | Logos of member organisations are presumed usable by the coalition; confirm (Q13) |
| WordPress version | Fact as reported | `<meta name="generator" content="WordPress 7.1.4">`; theme Vantage 1.20.11 (SiteOrigin); plugins observed: MetaSlider 3.100.1, CookieYes/cookie-law-info 3.5.8, Contact Form 7 6.1.7, Petitioner 0.4.6, SiteOrigin Widgets Bundle. Calendar (`ai1ec` = All-in-One Event Calendar), RSS importer and Email Petition shortcodes point to plugins no longer active (inferred from unrendered shortcodes) |
| Hosting | Unknown | Server header «Apache», `x-ws-*` headers (provider not identifiable with confidence) |
| Translations | None made | All quotes in this brief are verbatim Catalan; no translations included |

---

## Appendix A — Interpretation (grounded in the capture)

### A.1 What this campaign is

| Aspect | Finding | Source |
|---|---|---|
| Mission | Break Catalan institutional and corporate complicity with Israel; promote citizen solidarity with Palestine; offer ways to act | `qui-som.md`, `prou-complicitat-amb-israel-es-lhora-dactuar.md` |
| Who speaks | A coalition. `qui-som.md` lists member organisations with logos (Comunitat Palestina de Catalunya, Associació Catalunya-Líban, Junts, BDS Catalunya, Rumbo a Gaza, NOVACT, SCI, SUDS, Unadikum …) | `qui-som.md`, `assets/original/wp-content/uploads/2015/04/` |
| Audiences (inferred from the asks) | (1) people in Catalonia who want to act; (2) collectives and organisations that could adhere; (3) local councils and cultural/festival organisers being pressured; (4) press | `que-hi-puc-fer-jo.md`, `campanya-elai.md`, `festes-majors.md`, `documentacio.md` |
| Concrete asks | Sign manifestos/petitions · subscribe to the newsletter · join the monthly assembly · organise a talk · boycott (BDS, "llista de la No-Compra") · declare your space an ELAI (Espai Lliure d'Apartheid Israelià) · bring Palestine to the Festes Majors · demonstrate (events) · press contact | `que-hi-puc-fer-jo.md` and linked pages |
| Proof of impact | Dated victories: e.g. «La Uvic no renova el seu conveni amb ICL gràcies a la denuncia popular»; Barcelona council motion of 30 May 2025; Israel withdrawing from the Smart City Expo | `victories-populars-de-setembre-2024-a-agost-de-2025.md`, post titles in `_inventory.md` |
| Contact | `proucomplicitat@gmail.com` (press and talks); `boicotisraelbds@gmail.com` (ELAI) | `contacte.md`, `documentacio.md`, `campanya-elai.md` |
| Channels | Instagram, X, Telegram, Bluesky (header icons) | `_chrome.md` |
| Languages | Mostly Catalan. Some posts duplicate in Spanish and one in English; the legal and cookie pages are in Spanish only | `_inventory.md`, `avis-legal.md` |

**Tone of voice.** Urgent, accusatory and collective ("nosaltres"), with imperative calls and occasional slogans. Five lines that capture it, verbatim:

1. «Ens indigna que Israel violi els Drets Humans de la població palestina i el Dret Internacional amb total impunitat» — `prou-complicitat-amb-israel-es-lhora-dactuar.md`
2. «No volem ser còmplices dels crims del règim sionista ni que Israel sigui un «model» o un «referent» per a Catalunya.» — same file
3. «ELS GENOCIDES NO FAN VACANCES» — `festes-majors.md`
4. «Davant la repressió, ens trobaran organitzades» — post title, 2025-03-05
5. «Vine a berenar síndria i dóna suport al poble palestí!» — `festes-majors.md`

The slider's four statements are the site's sharpest summary of its argument, but they exist **only as text inside JPEGs**. Transcriptions are in `_chrome.md`.

### A.2 Values → form

Values are inferred from the copy above; the coalition must confirm them (Q9).

| Value (evidence) | Type | Colour | Density | Imagery | Motion | Interaction |
|---|---|---|---|---|---|---|
| **Urgency / denunciation** («és l'hora d'actuar», «Exigim…») | Display headlines in a condensed grotesque, uppercase, set large: 40/44 px on mobile and 72/76 px on desktop for H1. Body stays sentence case so it remains readable | Red `#BF1616` reserved for action and alarm, used on about 10% or less of the surface so it keeps its force | Short blocks: each statement ≤ 25 words before a break | Real protest photos and the coalition's posters, never generic stock | None decorative; urgency comes from type, not animation | Primary call to action visible on the first screen of every page at 390 px |
| **Collective / grassroots** (coalition of many groups; "ens trobaran organitzades") | No corporate polish: one display face plus the system body stack | Newsprint background `#F4F1EA` rather than pure white, which evokes paper flyers | Member logos shown as a dense wall: 3 columns at 390 px, 6 at 1440 px | Member logos at their real colours, placed on white tiles so mismatched backgrounds don't clash | — | Every action leads to a human: an email, an assembly or a form, never a dead end |
| **Evidence / legitimacy** (reports, parliament resolutions, the victories list) | Dates and sources set in tabular figures at 14 px, uppercase with 0.04em letter spacing | Neutral ink for facts; red never used for body copy | Victories as a dated timeline: one line per item, linked to its source | Document thumbnails (PDF first page) where available | — | External sources open in the same tab and carry a "font: <domain>" label |
| **Accessibility to anyone** (talks in your town, festes majors) | Body text 18 px on desktop and 17 px on mobile, line-height 1.55, measure capped at 68ch (today: 13 px and about 118 characters per line) | Every text pair ≥ 4.5:1 (verified in §4.2) | Generous spacing between actions: 24 px minimum gap between tap targets | — | Respect `prefers-reduced-motion`: everything static | Tap targets ≥ 44×44 px, beyond WCAG 2.2's 24×24 px minimum |
| **Defiance under repression** (posts on infiltration and repression) | — | — | — | No photos of identifiable activists without consent; blur faces at demos by default (Q6) | — | No third-party trackers or embeds that leak visitor IPs before consent |

### A.3 Why the current design fails (specific)

| Problem | Evidence | Consequence |
|---|---|---|
| **No message above the fold** | `index--390-top.png`: the whole first mobile screen is the logo plus four social icons labelled «More Info» (in English) | A visitor from a shared link learns nothing about who this is or what to do |
| **Home is a blog dump** | `index--1440-full.png` is 33,568 px tall; `index--390-full.png` is 53,040 px. It shows full post bodies in date order with 18 pages of pagination | The page's job is chronology, not campaigning, and the latest post can be a niche legal update |
| **Key statements are pictures** | Slider text is baked into 1024×300 JPEGs, upscaled to 1440 px (blurry) and invisible to screen readers and search | The core argument is inaccessible and unindexed |
| **Broken plugin code shown as text** | `[emailpetition id=»4″]` on the manifesto (`prou-complicitat-amb-israel-es-lhora-dactuar--1440-top.png`); `[ai1ec view=»monthly»]` on `/agenda`; `[wp_rss_multi_importer …]` on `/noticies` and `/rss-prueba`; `[emailpetition]`/`[signaturelist]` on 4 petition pages | The manifesto, the main ask, cannot be signed. Visible code also damages trust |
| **Dead-end calls to action** | The «Subscriu-te a la nostra newsletter» card leads to `/newsletter`, which is empty; `/signa-el-manifest`, `/nou-manifest`, `/blog` and `/premsa` are empty; `/mocio-de-suport-…` is entirely lorem ipsum | The two cheapest commitments, newsletter and signature, both fail |
| **Navigation mislabels destinations** | Menu "Agenda" goes to `/category/esdeveniments`, not `/agenda`; "Premsa" goes to `/documentacio`; "Campanyes" goes to `/manifest-i-adhesions` while a separate `/campanyes` exists | Two URLs per concept and orphaned pages |
| **Weak hierarchy** | Measured: body 13 px `#666`, H1 20 px (only 1.5× body), nav 13 px. See `styles` measurements in §9 | Everything looks equally unimportant |
| **Fails contrast** | In-text link `#248CC8` on `#FCFCFC` = **3.62:1** (fails WCAG 1.4.3, which requires 4.5:1) | Links are hard to see for low-vision users |
| **Overlong lines** | 770 px column at 13 px ≈ 118 characters per line | Long manifestos are tiring to read |
| **Mobile overlay** | A permanent «Privacy & Cookies Policy» tab covers content at the bottom of every mobile screenshot | It obscures text and buttons |
| **Stale content presented as current** | «Tallers Oberts» (2015 workshops) is the first action card; `/participa-en-assamblees` describes 2014 campaign commissions | Visitors can't tell what is live |
| **Theme credit, not organisation, in footer** | The footer ends «A SiteOrigin Theme»; there is no address, legal links or contact in it | It misses a cheap trust signal |
| **Weight from posters** | Category page 5.0 MB; individual PNG posters up to 1.1 MB each (§7.2) | Slow on mobile data at demos |
| **Legal in another language** | `/avis-legal` and `/politica-de-cookies` are in Spanish, and the entity name has a typo («Coalució») | Inconsistent, and a typo in a legal identity |

What works and must survive: the six-card **«Què hi puc fer jo?»** page (the best structure on the site), the member wall on **«Qui som?»**, the **Festes Majors** toolkit, and the dated **Victòries populars** list.

### A.4 Content's natural structure

**Pages that do real work:** `/qui-som`, the manifesto, `/que-hi-puc-fer-jo` and its children (boicot, xerrada, assemblees), `/campanya-elai`, `/festes-majors`, `/documentacio` (press), `/aliances-internacionals`, `/contacte`, the blog posts (news, statements, event calls), and `category/esdeveniments` (de facto agenda).

**Duplicates / overlaps:** `/campanyes` ≈ `/manifest-i-adhesions` · `/no-mes-complicitat` ≈ `/qui-som` · `…-ale-desperanca…` ×3 · `/tallers-oberts…`, `/palestina-caminem…` and `/les-organitzacions-palestines…` exist as both page and post · `/premsa` ≈ `/documentacio` · `/agenda` ≈ `category/esdeveniments` · `/noticies` ≈ `/rss-prueba` ≈ `/blog` ≈ home.

**A visitor's top three questions, and whether the current IA answers them:**

| # | Question | Answered today? |
|---|---|---|
| 1 | *Who are you and what do you want?* | Partly: one good paragraph on `/qui-som`, two clicks deep under a menu item labelled «Prou Complicitat»; nothing on home |
| 2 | *What can I do, now?* | Partly: `/que-hi-puc-fer-jo` exists, but 2 of its 6 actions are dead or stale, and the newsletter and signature are broken |
| 3 | *What is happening next and where?* | Poorly: "Agenda" is a category archive of full posts in publication order (not event date), with no date/place summary |

---

## Appendix B — Three directions

All three share the same IA (§3) and components; they differ in voice, type, colour, imagery and cost.

### B.1 Direction A — «Cartell» (poster) ★ recommended

**Idea:** every page is a protest placard: one loud statement, one clear action, printed in red and black on newsprint.

**Home wireframe (top → bottom)**
1. **Top bar:** logo (left) · «Actua» red button (right) · menu button (mobile) / 6 links (desktop).
2. **Hero statement:** uppercase condensed H1 taken from the slider copy, e.g. «PROU COMPLICITAT AMB ISRAEL», with one sentence of mission from `/qui-som`. Two buttons: «Signa el manifest» (primary) and «Què hi puc fer jo?» (secondary). No image.
3. **Next date strip:** the next 1–3 events (date block · title · place), «Tota l'agenda →».
4. **«Què hi puc fer jo?»:** six action cards (icon, title, one line, link) in a 1/2/3-column grid. Copy comes from the current page; dead ones are fixed per §8 Q1–Q2.
5. **Four statements band:** the four slider sentences as real text, in a black band with paper-coloured type, one per row, each with a source link.
6. **Victòries:** the five most recent dated victories (timeline) and «Totes les victòries →».
7. **Latest news:** three cards (date, title, 2-line excerpt, optional 4:5 poster thumbnail).
8. **Campanyes:** 3–4 campaign tiles (ELAI, Festes Majors, Barcelona amb l'apartheid no, …).
9. **Who we are:** one paragraph and a member-logo wall, «Qui som →».
10. **Newsletter + channels:** email field (or a link to the provider, Q2) and the four social links with real labels.
11. **Footer:** short sitemap, contact email, legal links, «Coalició Prou Complicitat amb Israel».

| Aspect | Spec |
|---|---|
| Typography | Display: **Anton** (SIL OFL, Google Fonts, self-hosted woff2, latin + latin-ext subset ≈ 35 KB; check it covers «l·l»). Uppercase for H1–H2 only. Body/UI: system stack `system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` (0 KB) |
| Palette | `#BF1616` red (sampled from logo) · `#9E1010` red-dark · `#141414` ink · `#F4F1EA` paper · `#FFFFFF` white · `#595650` muted · `#FF5A4F` red-on-ink · `#1E6B34` green (victories/success only) |
| Imagery | The coalition's own 4:5 posters as thumbnails; protest photos in duotone (ink and paper, via a CSS filter so no editing is needed) to unify mixed sources; no stock |
| Motion | None by default. Hover/focus: 120 ms colour/underline change. No sliders, no parallax |
| Effort for the organisation | **Low.** A post needs a title, a date, text and an optional poster. The visual identity comes from type and colour, so pages without images still look finished |

### B.2 Direction B — «Caixa d'eines» (toolkit)

**Idea:** the site is a switchboard of actions. Every screen answers "what can I do this week?", like a utility app rather than a campaign poster.

**Home wireframe**
1. Compact header: logo, search, «Agenda», «Actua».
2. **"Aquesta setmana"** panel: the next events as a list with date, place and an «Afegeix al calendari» (.ics) link.
3. **Action finder:** chips for «Tinc 5 minuts», «Tinc una tarda», «Soc un col·lectiu», «Soc d'un ajuntament», which filter the action cards.
4. Action cards (same 6, plus ELAI and Festes Majors as "kits").
5. Downloads shelf: flyers, manifests, templates (PDF/Canva links) with file type and size.
6. Latest news: a text-only list, 5 items.
7. Footer.

| Aspect | Spec |
|---|---|
| Typography | System stack only (0 KB of fonts); headings 600 weight; sizes 16/20/24/32 |
| Palette | `#FFFFFF` bg · `#F3F3F1` surface · `#1A1A1A` ink · `#5C5C5C` muted · `#BF1616` single accent · `#2E7D32` success · `#8C8C8C` borders |
| Imagery | Icons only (Lucide or Tabler, MIT, inline SVG). Posters appear only inside downloads |
| Motion | Filter results update instantly; no transitions |
| Effort | **Medium.** It only works if the agenda and downloads are kept current. Stale entries are more visible here than in A |

### B.3 Direction C — «Dossier» (evidence archive)

**Idea:** the site is the public record of Catalan complicity and of what popular pressure has won: an editorial, serif, source-heavy dossier.

**Home wireframe**
1. Masthead (logo plus a dateline «Actualitzat: <date>»).
2. **Lead essay:** the latest statement, styled like a newspaper front page.
3. **«Casos de complicitat»:** a grid of case files (institution, company, status: active, won or ongoing), each linking to a case page with its timeline and sources.
4. **Victories timeline** (full year).
5. **Research library:** reports and PDFs, filterable by year and type.
6. Small "Actua" box and newsletter.
7. Footer.

| Aspect | Spec |
|---|---|
| Typography | Body **Source Serif 4** (OFL, ≈ 60 KB subset) · labels **IBM Plex Sans Condensed** (OFL, ≈ 30 KB) |
| Palette | `#FAF8F3` paper · `#1C1C1C` ink · `#A31212` annotation red · `#6B6B6B` meta · `#1D4E89` link |
| Imagery | Document scans and PDF covers; photos with full credit lines |
| Motion | None |
| Effort | **High.** Someone must write and maintain case files, tag 174 posts to cases, and source every claim. Without that it looks abandoned fastest |

### B.4 Recommendation and its cost

**Choose A, «Cartell».** It is the only direction whose quality does not depend on continuous editorial work: a plain post still looks deliberate because the identity lives in type and colour. It matches the coalition's existing visual language (logo, posters). It puts the actions first while keeping B's action cards as a component.

**What we give up by choosing A:**

| Trade-off | Mitigation |
|---|---|
| C's sober, documentary credibility with press and institutions | Keep a calm "document" layout for manifestos and press (no uppercase body text, sources visible); press page lists dossiers clearly |
| C's case-file archive and B's action filters | Victories timeline and campaign pages cover the strongest proof; action filters can be added later as an enhancement |
| B's zero-font speed | One webfont of about 35 KB with `font-display: swap`, and the system fallback is metrically close enough for headings |
| Risk of shouting (all-caps fatigue) | Uppercase only for H1/H2 and short statements (≤ 12 words); never in body, buttons or nav |
| Condensed type reads poorly for long headlines | Cap H1 at about 70 characters; long post titles render in sentence case at H1 size |
