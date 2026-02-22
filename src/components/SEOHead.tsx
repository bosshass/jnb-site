import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogType?: string;
}

export default function SEOHead({ title, description, keywords, canonical, ogType = "website" }: Props) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", description);
    setMeta("name", "keywords", keywords);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", ogType);
    if (canonical) { setMeta("property", "og:url", canonical); }
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
      link.setAttribute("href", canonical);
    }
    return () => { document.title = "JNB LLC | Bookkeeping, Tax & Fractional CFO | Littleton CO"; };
  }, [title, description, keywords, canonical, ogType]);
  return null;
}
