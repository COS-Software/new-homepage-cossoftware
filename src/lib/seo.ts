/**
 * Configuração central de SEO/GEO do site.
 * Ajuste SITE_URL para o domínio final em produção.
 */
export const SITE_URL = "https://cossoftware.com";
export const SITE_NAME = "COSSOFTWARE";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/logo.png`;

/** Monta uma URL absoluta a partir de um caminho relativo. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export type SeoConfig = {
  title: string;
  description: string;
  /** Caminho relativo (ex.: "/calculator") usado no canonical e og:url. */
  path?: string;
  image?: string;
  /** Impede indexação (ex.: páginas utilitárias). */
  noindex?: boolean;
  type?: "website" | "article";
  /** Dados estruturados JSON-LD específicos da página. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};
