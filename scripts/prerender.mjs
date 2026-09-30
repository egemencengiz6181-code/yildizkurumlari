/**
 * Build sonrası: her rota için dolu HTML (dist/<rota>/index.html), 404.html, sitemap.xml ve robots.txt üretir.
 *
 * Site adresi sırasıyla şu ortam değişkenlerinden okunur:
 *   SITE_URL (ör. https://www.yildizkurumlari.com)  → önerilen, kendi alan adınız
 *   VERCEL_PROJECT_PRODUCTION_URL                   → Vercel'in otomatik verdiği üretim alan adı
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js')

const envUrl = process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
const SITE_URL = (envUrl || 'http://localhost:4317').replace(/\/$/, '')
if (!envUrl) console.warn(`[prerender] SITE_URL tanımlı değil; canonical ve sitemap adresleri ${SITE_URL} ile üretildi.`)

const { render, ROUTES, getSeo, headTags } = await import(ssrEntry)
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8')

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c')

function headHtml(seo) {
  const { meta, canonical, ld } = headTags(seo)
  return [
    ...meta.map(([attr, key, value]) => `<meta ${attr}="${key}" content="${esc(value)}" />`),
    canonical ? `<link rel="canonical" href="${esc(canonical)}" />` : '',
    ...ld.map((o) => `<script type="application/ld+json" data-seo="ld">${json(o)}</script>`),
  ]
    .filter(Boolean)
    .join('\n    ')
}

function page(url) {
  const seo = getSeo(url, SITE_URL)
  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace('<!--seo-head-->', headHtml(seo))
    .replace('<!--app-html-->', render(url))
}

for (const url of ROUTES) {
  const out = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html')
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, page(url))
  console.log(`[prerender] ${url}`)
}
fs.writeFileSync(path.join(dist, '404.html'), page('/404'))

const today = new Date().toISOString().slice(0, 10)
const priority = (u) => (u === '/' ? '1.0' : u.split('/').length > 2 ? '0.8' : '0.9')
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((u) => `  <url><loc>${SITE_URL}${u === '/' ? '/' : u}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${priority(u)}</priority></url>`).join('\n')}
</urlset>
`,
)
fs.writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true })
console.log(`[prerender] ${ROUTES.length} sayfa + 404, sitemap.xml, robots.txt → ${SITE_URL}`)
