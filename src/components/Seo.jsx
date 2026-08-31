import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { journal } from "../data";
import { getService } from "../company-profile";

const DEFAULT_DESCRIPTION =
  "Altheon Tours & Travel coordinates accommodation, safaris, flights, corporate travel, holidays and group journeys in Kenya and beyond.";

const pages = {
  "/": {
    title: "Altheon Tours & Travel | Travel, Events & Experiences in Kenya",
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About Altheon Tours & Travel | Kenya Travel & Events Partner",
    description: "Meet Altheon, a Nairobi-based travel, events and experience-management company for corporate and leisure clients.",
  },
  "/services": {
    title: "Hotels, Safaris & Travel Services | Altheon Tours & Travel",
    description: "Explore accommodation, safari, travel desk, corporate, holiday and group travel services from Altheon.",
  },
  "/journal": {
    title: "Kenya Travel Guides & Planning Advice | Altheon Journal",
    description: "Read practical Kenya travel guides, destination stories and trip-planning advice from the Altheon team.",
  },
  "/plan-your-journey": {
    title: "Plan Your Journey | Altheon Tours & Travel",
    description: "Tell Altheon what you need and get help planning travel, accommodation, an event, retreat or personalised experience.",
  },
};

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
}

function getPage(pathname) {
  const serviceMatch = pathname.match(/^\/services\/([^/]+)$/);
  if (serviceMatch) {
    const service = getService(serviceMatch[1]);
    if (service) return {
      title: `${service.name} | Altheon Tours & Travel`,
      description: service.intro,
      image: service.image,
    };
  }

  const postMatch = pathname.match(/^\/journal\/([^/]+)$/);
  if (postMatch) {
    const post = journal.find((item) => item.slug === postMatch[1]);
    if (post) return {
      title: `${post.title} | Altheon Journal`,
      description: post.excerpt,
      image: post.cover,
      type: "article",
    };
  }

  return pages[pathname] || pages["/"];
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const page = getPage(pathname);
    const configuredUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
    const siteUrl = configuredUrl || window.location.origin;
    const canonical = `${siteUrl}${pathname === "/" ? "" : pathname}`;
    const image = page.image || `${siteUrl}/logo.png`;

    document.title = page.title;
    document.documentElement.lang = "en-KE";
    upsertMeta('meta[name="description"]', { name: "description", content: page.description });
    upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow, max-image-preview:large" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: page.title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: page.description });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: page.type || "website" });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_KE" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: page.title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: page.description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    let canonicalLink = document.head.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let schema = document.head.querySelector("#altheon-schema");
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.id = "altheon-schema";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Altheon Tours & Travel",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      email: "altheontours@gmail.com",
      telephone: "+254718441414",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12 Meridian Court",
        addressLocality: "Nairobi",
        addressCountry: "KE",
      },
      areaServed: "KE",
    });
  }, [pathname]);

  return null;
}
