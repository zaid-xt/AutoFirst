import fs from "fs";
import path from "path";

// Your live domain
const domain = "https://www.autofirstmechanicalaid.co.za";

// List all your routes from App.jsx
const routes = [
  "/",
  "/about",
  "/services",
  "/packages",
  "/book",
  "/contact",
  "/thank-you",
  "/cart",
  "/checkout",
  "/confirmation",
  "/Privacy-Policy",
];

// Generate sitemap XML
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${domain}${route}</loc>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

// Write sitemap.xml to /public
fs.writeFileSync(path.resolve("./src/sitemap.xml"), sitemapContent, "utf8");

console.log("✅ Sitemap generated successfully at /public/sitemap.xml");
