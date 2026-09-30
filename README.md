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
