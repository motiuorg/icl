// Utilitats d'i18n.
export type Lang = "ca" | "en";

export interface Bilingual<T = string> {
  ca: T;
  en: T;
}

/** Crea un traductor per a la llengua actual. */
export function tr(lang: Lang) {
  return <T>(o: Bilingual<T>): T => o[lang];
}

/** L'enllaç de la mateixa pàgina en l'altra llengua. */
export function otherLocaleHref(lang: Lang, pathname: string): string {
  if (lang === "ca") {
    return "/en" + (pathname === "/" ? "" : pathname);
  }
  const base = pathname.replace(/^\/en/, "");
  return base === "" ? "/" : base;
}

/** Afegeix el prefix de llengua a una ruta interna (per al menú). */
export function localizeHref(lang: Lang, path: string): string {
  return lang === "en" ? `/en${path === "/" ? "" : path}` : path;
}