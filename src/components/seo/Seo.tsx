import { useEffect } from "react";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  absoluteUrl,
  type SeoConfig,
} from "@/lib/seo";

const MANAGED_ATTR = "data-seo-managed";

/** Cria/atualiza uma <meta> identificada por name/property. */
function upsertMeta(key: "name" | "property", value: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${key}="${value}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, value);
    el.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Cria/atualiza o <link rel="canonical">. */
function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Gerencia o <head> por rota em uma SPA: título, descrição, canonical,
 * Open Graph, Twitter, robots e JSON-LD específicos da página.
 *
 * Os dados estruturados globais (Organization/WebSite) ficam no index.html;
 * aqui adicionamos apenas o que é específico de cada página.
 */
export default function Seo({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  type = "website",
  jsonLd,
}: SeoConfig) {
  useEffect(() => {
    const url = absoluteUrl(path);
    const fullTitle = title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta("name", "description", description);
    upsertMeta(
      "name",
      "robots",
      noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", "pt_BR");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);

    upsertCanonical(url);

    // JSON-LD específico da página (removido ao desmontar/trocar de rota).
    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute(MANAGED_ATTR, "page-jsonld");
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      if (script) script.remove();
    };
  }, [title, description, path, image, noindex, type, jsonLd]);

  return null;
}
