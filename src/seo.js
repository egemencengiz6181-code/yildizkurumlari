/**
 * Sayfa bazlı SEO: başlık, açıklama, paylaşım görseli ve JSON-LD yapılandırılmış veri.
 * Hem tarayıcıda (Seo bileşeni) hem build sırasında (prerender) kullanılır.
 */
import { BRAND, COURSES, SCHOOL } from './data/site'
import { SCHOOL_FAQ } from './data/schoolFaq'

export const SITE_NAME = 'Yıldız Eğitim Kurumları'
const DEFAULT_IMAGE = '/img/okul/tarabya-bogaz.jpg'

const COURSE_IMAGE = {
  tarabya: '/img/kurs/etut-salonu.jpg',
  sirinevler: '/img/kurs/sirinevler-bina.jpg',
  sefakoy: '/img/kurs/bireysel.jpg',
  halkali: '/img/kurs/sinif.jpg',
  mimaroba: '/img/kurs/lise-sinif.jpg',
}

/** Prerender edilecek tüm rotalar (sitemap de buradan üretilir). */
export const ROUTES = ['/', '/hakkimizda', '/okul', '/kurslar', ...COURSES.map((c) => `/kurslar/${c.slug}`), '/iletisim']

const abs = (origin, path) => (origin ? origin.replace(/\/$/, '') + path : path)

function address(street, locality) {
  return {
    '@type': 'PostalAddress',
    streetAddress: street,
    addressLocality: locality,
    addressRegion: 'İstanbul',
    addressCountry: 'TR',
  }
}

function organization(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': abs(origin, '/#organization'),
    name: SITE_NAME,
    alternateName: 'Yıldız Eğitim',
    slogan: BRAND.motto,
    description: `${BRAND.heritage}. Tarabya Yıldız Schools (TED AD) ve İstanbul’da beş LGS & YKS hazırlık kursu.`,
    url: abs(origin, '/'),
    logo: abs(origin, '/favicon.svg'),
    image: abs(origin, DEFAULT_IMAGE),
    telephone: BRAND.phoneHref,
    sameAs: [BRAND.instagram, BRAND.youtube],
    subOrganization: [
      { '@id': abs(origin, '/okul#school') },
      ...COURSES.map((c) => ({ '@id': abs(origin, `/kurslar/${c.slug}#course`) })),
    ],
  }
}

function breadcrumb(origin, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Ana Sayfa', path: '/' }, ...items].map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(origin, it.path),
    })),
  }
}

function schoolLd(origin) {
  return {
    '@context': 'https://schema.org',
    '@type': ['School', 'EducationalOrganization'],
    '@id': abs(origin, '/okul#school'),
    name: SCHOOL.name,
    alternateName: SCHOOL.legal,
    description: SCHOOL.intro,
    url: abs(origin, '/okul'),
    image: abs(origin, '/img/okul/bina.jpg'),
    telephone: SCHOOL.phones.map((p) => p.href),
    address: address('Ferahevler Mahallesi Nuri Paşa Caddesi No:113/1', 'Sarıyer'),
    sameAs: [SCHOOL.instagram],
    parentOrganization: { '@id': abs(origin, '/#organization') },
    memberOf: { '@type': 'Organization', name: 'Türk Eğitim Derneği (TED)', url: 'https://www.ted.org.tr' },
  }
}

function courseLd(origin, c) {
  const street = c.address.replace(/,\s*[^,]*\/\s*İstanbul$/, '')
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': abs(origin, `/kurslar/${c.slug}#course`),
    name: `${SITE_NAME} ${c.name}`,
    description: c.blurb,
    url: abs(origin, `/kurslar/${c.slug}`),
    image: abs(origin, COURSE_IMAGE[c.slug]),
    telephone: c.phones.map((p) => p.href),
    ...(c.email ? { email: c.email } : {}),
    address: address(street, c.county),
    areaServed: `${c.district}, ${c.county}, İstanbul`,
    sameAs: [c.instagram],
    parentOrganization: { '@id': abs(origin, '/#organization') },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${c.focus} hazırlık programları`,
      itemListElement: c.programs.map((p) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Course', name: `${p} — ${c.focus}`, provider: { '@id': abs(origin, `/kurslar/${c.slug}#course`) } },
      })),
    },
  }
}

function faqLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: (Array.isArray(f.a) ? f.a : [f.a]).join(' ') },
    })),
  }
}

/** Verilen yol için SEO bilgisi. `origin` verilirse URL'ler mutlak üretilir. */
export function getSeo(pathname, origin = '') {
  const path = pathname.replace(/\/+$/, '') || '/'
  const org = organization(origin)
  let page

  if (path === '/') {
    page = {
      title: `${SITE_NAME} | Sadece Eğitim — Okul, LGS ve YKS Kursları İstanbul`,
      description:
        'Eğitimde yarım asırlık tecrübe. TED akreditasyonlu Tarabya Yıldız Schools ve Tarabya, Şirinevler, Sefaköy, Halkalı, Mimaroba LGS & YKS kursları. Öğretmen kökenli yönetim, sadece eğitim.',
      ld: [org],
    }
  } else if (path === '/hakkimizda') {
    page = {
      title: `Biz Kimiz — Öğretmen Kökenli Eğitimciler | ${SITE_NAME}`,
      description:
        'Yıldız Eğitim Kurumları; yönetim kurulu tamamen öğretmen kökenli eğitimcilerden oluşan, tek işi eğitim olan bir çatı marka. Yarım asırlık birikim, bir okul ve beş kurs.',
      image: '/img/okul/ortaokul-ders.jpg',
      ld: [org, breadcrumb(origin, [{ name: 'Biz Kimiz', path: '/hakkimizda' }])],
    }
  } else if (path === '/okul') {
    page = {
      title: `Tarabya Yıldız Schools — TED AD Özel Okul Sarıyer | ${SITE_NAME}`,
      description:
        'Tarabya Yıldız Schools: TED akreditasyon ve danışmanlığında okul öncesi, ilkokul ve ortaokul. Çift dilli eğitim, 18 kişilik sınıflar, yarı olimpik havuz, %100’e varan başarı bursu.',
      image: '/img/okul/bina.jpg',
      ld: [schoolLd(origin), breadcrumb(origin, [{ name: 'Okul', path: '/okul' }]), faqLd(SCHOOL_FAQ)],
    }
  } else if (path === '/kurslar') {
    page = {
      title: `LGS ve YKS Hazırlık Kursları İstanbul — 5 Lokasyon | ${SITE_NAME}`,
      description:
        'Tarabya, Şirinevler, Sefaköy, Halkalı ve Mimaroba’da LGS ve YKS hazırlık kursları. VIP sınıflar, yapay zekâ destekli deneme analizi, bireysel rehberlik ve Deneme Kulübü.',
      image: '/img/kurs/etut-salonu.jpg',
      ld: [org, breadcrumb(origin, [{ name: 'Kurslar', path: '/kurslar' }])],
    }
  } else if (path.startsWith('/kurslar/')) {
    const c = COURSES.find((x) => `/kurslar/${x.slug}` === path)
    if (c) {
      page = {
        title: `${c.district} ${c.focus} Kursu (${c.county}) | ${SITE_NAME}`,
        description: `${c.district} ${c.focus} hazırlık kursu: ${c.grades}. ${c.blurb} ${c.address}. Tel: ${c.phones[0].label}.`,
        image: COURSE_IMAGE[c.slug],
        ld: [
          courseLd(origin, c),
          breadcrumb(origin, [
            { name: 'Kurslar', path: '/kurslar' },
            { name: `${c.district} Kursu`, path },
          ]),
        ],
      }
    }
  } else if (path === '/iletisim') {
    page = {
      title: `İletişim ve Ön Kayıt | ${SITE_NAME}`,
      description:
        'Tarabya Yıldız Schools ve Yıldız kurslarının adres ve telefonları. 2026–2027 ön kayıt formunu doldurun, eğitim danışmanlarımız sizi arasın.',
      image: '/img/okul/bahce-giris.jpg',
      ld: [org, breadcrumb(origin, [{ name: 'İletişim', path: '/iletisim' }])],
    }
  }

  if (!page) {
    return {
      title: `Sayfa bulunamadı | ${SITE_NAME}`,
      description: 'Aradığınız sayfa bulunamadı.',
      canonical: null,
      image: abs(origin, DEFAULT_IMAGE),
      robots: 'noindex, follow',
      ld: [],
    }
  }

  return {
    ...page,
    canonical: abs(origin, path),
    image: abs(origin, page.image || DEFAULT_IMAGE),
    robots: 'index, follow, max-image-preview:large',
  }
}

/** Head etiketleri: prerender HTML'e yazar, Seo bileşeni tarayıcıda aynısını günceller. */
export function headTags(seo) {
  const meta = [
    ['name', 'description', seo.description],
    ['name', 'robots', seo.robots],
    ['property', 'og:type', 'website'],
    ['property', 'og:site_name', SITE_NAME],
    ['property', 'og:locale', 'tr_TR'],
    ['property', 'og:title', seo.title],
    ['property', 'og:description', seo.description],
    ['property', 'og:image', seo.image],
    ...(seo.canonical ? [['property', 'og:url', seo.canonical]] : []),
    ['name', 'twitter:card', 'summary_large_image'],
    ['name', 'twitter:title', seo.title],
    ['name', 'twitter:description', seo.description],
    ['name', 'twitter:image', seo.image],
  ]
  return { meta, canonical: seo.canonical, ld: seo.ld }
}
