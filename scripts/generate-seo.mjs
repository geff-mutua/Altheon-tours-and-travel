import { mkdir, writeFile } from "node:fs/promises";
import { journal } from "../src/data.js";
import { services } from "../src/company-profile.js";

const siteUrl = (process.env.VITE_SITE_URL || "https://altheontourandtravels.com").replace(/\/$/, "");
const staticPaths = ["/", "/about", "/services", "/journal", "/plan-your-journey"];
const paths = [
  ...staticPaths,
  ...services.map(({ slug }) => `/services/${slug}`),
  ...journal.map(({ slug }) => `/journal/${slug}`),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${siteUrl}${path === "/" ? "" : path}</loc></url>`).join("\n")}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

await mkdir("dist", { recursive: true });
await Promise.all([
  writeFile("dist/sitemap.xml", sitemap),
  writeFile("dist/robots.txt", robots),
]);

console.log(`Generated SEO files for ${siteUrl}`);
