import { useEffect } from "react";
import { personal } from "../data/portfolio";
import { personJsonLd, seo, siteUrl, websiteJsonLd } from "../data/seo";

function setMeta(name, content, property = false) {
  if (!content) return;
  const attr = property ? "property" : "name";
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel, href) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function Seo() {
  useEffect(() => {
    document.title = seo.title;
    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("author", seo.author);
    setMeta("robots", "index, follow, max-image-preview:large");
    setLink("canonical", siteUrl);

    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", siteUrl, true);
    setMeta("og:image", seo.image, true);
    setMeta("og:locale", seo.locale, true);
    setMeta("og:site_name", "Abdulrahman Iqbal Portfolio", true);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", seo.image);

    const schemas = [
      { id: "seo-person", data: personJsonLd(personal) },
      { id: "seo-website", data: websiteJsonLd() },
    ];

    schemas.forEach(({ id, data }) => {
      let script = document.getElementById(id);
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = id;
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    });
  }, []);

  return null;
}
