# Yıldız Eğitim Kurumları

Tarabya Yıldız Schools (TED AD) ve 5 kurs merkezini (Tarabya, Şirinevler, Sefaköy, Halkalı, Mimaroba) toplayan çatı marka sitesi.

```bash
npm install
npm run dev      # geliştirme
npm run build    # dist/ çıktısı
```

- Tüm içerik (adres, telefon, programlar, sloganlar): `src/data/site.js`
- Marka işareti (yıldız + wordmark): `src/components/Brand.jsx`
- Renk / font / tasarım sistemi: `src/styles/global.css` (`:root` değişkenleri)
- Görseller: `public/img/` (okul, kurs, logo)
- Ön kayıt formu WhatsApp'a yazar: `BRAND.whatsapp` numarasını güncelleyin.

Sayfalar: `/`, `/hakkimizda`, `/okul`, `/kurslar`, `/kurslar/:slug`, `/iletisim`

## SEO

`npm run build` her sayfayı önceden HTML olarak üretir (`scripts/prerender.mjs`): sayfa başlığı, açıklama,
canonical, Open Graph / Twitter etiketleri, JSON-LD (kurum, okul, kurslar, breadcrumb, SSS), `sitemap.xml`,
`robots.txt` ve `404.html`.

- Sayfa başlık ve açıklamaları: `src/seo.js`
- Alan adı: Vercel'de **Settings → Environment Variables** altına `SITE_URL=https://alanadiniz.com` ekleyin.
  Tanımlı değilse Vercel'in üretim alan adı (`VERCEL_PROJECT_PRODUCTION_URL`) kullanılır.
- Yayından sonra `https://alanadiniz.com/sitemap.xml` adresini Google Search Console'a gönderin.
