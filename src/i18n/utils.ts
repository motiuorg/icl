// Utilitats d'i18n + base path (conscient de /icl/ a GitHub Pages).
export type Lang = "ca" | "en";

export interface Bilingual<T = string> {
  ca: T;
  en: T;
}

/** Base del lloc: "" (arrel) o "/icl" (GitHub Pages). Sense barra final. */
export const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "") || "/";

/** Crea un traductor per a la llengua actual. */
export function tr(lang: Lang) {
  return <T>(o: Bilingual<T>): T => o[lang];
}

/** Afegeix el prefix de llengua i de base a una ruta interna. */
export function localizeHref(lang: Lang, path: string): string {
  const localized = lang === "en" ? `/en${path === "/" ? "" : path}` : path;
  if (BASE === "/") return localized;
  return localized === "/" ? `${BASE}/` : `${BASE}${localized}`;
}

/** L'enllaç de la mateixa pàgina en l'altra llengua (pathname amb base). */
export function otherLocaleHref(lang: Lang, pathname: string): string {
  const stripped = BASE !== "/" && pathname.startsWith(BASE)
    ? pathname.slice(BASE.length)
    : pathname;
  if (lang === "ca") {
    const en = stripped === "/" ? "/en" : `/en${stripped}`;
    return BASE === "/" ? en : `${BASE}${en}`;
  }
  const ca = stripped.replace(/^\/en/, "");
  const root = ca === "" ? "/" : ca;
  return BASE === "/" ? root : `${BASE}${root}`;
}

/** Treu el prefix de llengua (i base) d'una ruta, per comparar actius. */
export function stripLocale(lang: Lang, pathname: string): string {
  const stripped = BASE !== "/" && pathname.startsWith(BASE)
    ? pathname.slice(BASE.length)
    : pathname;
  return lang === "en" ? stripped.replace(/^\/en/, "") || "/" : stripped;
}