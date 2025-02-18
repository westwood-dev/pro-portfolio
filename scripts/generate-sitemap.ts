import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectsDir = path.join(__dirname, '../content/projects');

async function generateSitemap() {
  const baseUrl = 'https://williamwestwood.com';
  const today = new Date().toISOString();
  
  // Get all markdown files
  const files = fs.readdirSync(projectsDir)
    .filter(file => file.endsWith('.md'));
  
  // Generate sitemap entries for each project
  const projectUrls = files.map(file => {
    const name = file.replace('.md', '');
    return `  <url>
    <loc>${baseUrl}/project/${name}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
  </url>`;
  }).join('\n');

  // Create the complete sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
  </url>
${projectUrls}
</urlset>`;

  // Write sitemap to public directory
  fs.writeFileSync(path.join(__dirname, '../public/sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch(console.error);