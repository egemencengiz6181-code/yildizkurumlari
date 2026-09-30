import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StarMark } from './Brand'
import { Counter } from './motion'
import { Arrow, ArrowUpRight, Check } from './Icons'
import { BRAND, COURSE_METHOD, COURSES, SCHOOL, STATS, TED, TESTIMONIALS } from '../data/site'

export function SectionHead({ eyebrow, title, lead, light = false, align = 'left' }) {
  return (
    <div className={`shead shead--${align} ${light ? 'shead--light' : ''}`} data-reveal>
      <p className={`eyebrow ${light ? 'eyebrow--light' : ''}`}>{eyebrow}</p>
      <h2 className="shead__title">{title}</h2>
      {lead && <p className="shead__lead">{lead}</p>}
    </div>
  )
}

/* ── Sadece Eğitim manifestosu ───────────────────────── */
export function Manifesto() {
  const pillars = [
    {
      n: '01',
      title: 'Öğretmen kökenli yönetim',
      text: 'Yönetim kurulumuzun tamamı, kariyerine kara tahtanın önünde başlamış eğitimcilerden oluşur. Kararlarımızı sınıfı bilen insanlar verir.',
    },
    {
      n: '02',
      title: 'Tek işimiz eğitim',
      text: 'Başka sektörden gelen sermaye, yan iş ya da yatırım portföyü değiliz. İnşaat yapmıyoruz, ticaret yapmıyoruz. Sadece eğitim.',
    },
    {
      n: '03',
      title: 'Yarım asırlık birikim',
      text: 'Nesiller yetiştiren sınav disiplinimiz ile TED’in 98 yıllık eğitim geleneği bugün tek çatı altında: Yıldız.',
    },
  ]
  return (
    <section className="manifesto">
      <div className="container">
        <div className="manifesto__top">
          <p className="eyebrow" data-reveal>Manifesto</p>
          <h2 className="manifesto__quote" data-reveal>
            Eğitime sonradan <em>gelmedik.</em>
            <br />
            Eğitimden <em>geldik.</em>
          </h2>
        </div>
        <div className="manifesto__grid">
          {pillars.map((p, i) => (
            <article key={p.n} className="pillar" data-reveal style={{ '--d': `${i * 120}ms` }}>
              <span className="pillar__n">{p.n}</span>
              <h3 className="pillar__title">{p.title}</h3>
              <p className="pillar__text">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Rakamlar ─────────────────────────────────────────── */
export function Stats({ dark = false }) {
  return (
    <section className={`stats ${dark ? 'stats--dark' : ''}`}>
      <div className="container stats__grid">
        {STATS.map((s, i) => (
          <div key={s.label} className="stat" data-reveal style={{ '--d': `${i * 100}ms` }}>
            <span className="stat__value">
              <Counter to={s.value} suffix={s.suffix} />
            </span>
            <span className="stat__label">{s.label}</span>
            <span className="stat__note">{s.note}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ── İki dünya: Okul & Kurslar ───────────────────────── */
export function TwoWorlds() {
  return (
    <section className="worlds">
      <div className="container">
        <SectionHead
          eyebrow="Tek Çatı, İki Dünya"
          title={<>Bir okul. Beş kurs.<br /><em>Tek bir eğitim anlayışı.</em></>}
        />
        <div className="worlds__grid">
          <Link to="/okul" className="world" data-reveal>
            <div className="world__media">
              <img src="/img/okul/lobi.jpg" alt="Tarabya Yıldız Schools giriş lobisi" loading="lazy" />
            </div>
            <div className="world__body">
              <span className="world__tag">Okul · TED AD</span>
              <h3 className="world__title">Tarabya Yıldız Schools</h3>
              <p className="world__text">Okul öncesi, ilkokul ve ortaokul. Türk Eğitim Derneği akreditasyonu ve danışmanlığıyla, Boğaz’ın kıyısında çift dilli eğitim.</p>
              <span className="world__cta">Okulu keşfedin <ArrowUpRight /></span>
            </div>
          </Link>
          <Link to="/kurslar" className="world world--alt" data-reveal style={{ '--d': '140ms' }}>
            <div className="world__media">
              <img src="/img/kurs/etut-salonu.jpg" alt="Yıldız kursu etüt salonu" loading="lazy" />
            </div>
            <div className="world__body">
              <span className="world__tag">Kurslar · LGS & YKS</span>
              <h3 className="world__title">Yıldız Kursları</h3>
              <p className="world__text">Tarabya, Şirinevler, Sefaköy, Halkalı ve Mimaroba. Nesiller yetiştiren sınav disiplini, yapay zekâ destekli analizle yeniden.</p>
              <span className="world__cta">Kursları keşfedin <ArrowUpRight /></span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

/* ── Okul kademeleri ─────────────────────────────────── */
const LEVEL_IMG = { 'okul-oncesi': '/img/okul/anasinifi.jpg', ilkokul: '/img/okul/ilkokul.jpg', ortaokul: '/img/okul/ortaokul-ders.jpg' }

export function Levels() {
  return (
    <div className="levels">
      {SCHOOL.levels.map((l, i) => (
        <article key={l.key} className="level" data-reveal style={{ '--d': `${i * 120}ms` }}>
          <div className="level__media">
            <img src={LEVEL_IMG[l.key]} alt={l.title} loading="lazy" />
            <span className="level__en" lang="en">{l.en}</span>
          </div>
          <div className="level__body">
            <span className="level__n">0{i + 1}</span>
            <h3 className="level__title">{l.title}</h3>
            <p className="level__text">{l.text}</p>
            <ul className="level__list">
              {l.points.map((p) => (
                <li key={p}><Check /> {p}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}

/* ── TED AD ───────────────────────────────────────────── */
export function TedBlock({ full = false }) {
  return (
    <section className="ted" id="ted">
      <StarMark size={900} className="ted__star" />
      <div className="container">
        <div className="ted__head">
          <div data-reveal>
            <p className="eyebrow eyebrow--light">TED Akreditasyon & Danışmanlık</p>
            <h2 className="ted__title">
              98 yıllık bir geleneğin <em>güvencesiyle.</em>
            </h2>
          </div>
          <div className="ted__intro" data-reveal style={{ '--d': '120ms' }}>
            <img src="/img/logo/ted.png" alt="Türk Eğitim Derneği" className="ted__logo" />
            <p>{TED.intro}</p>
          </div>
        </div>

        <ol className="ted__steps">
          {TED.steps.map((s, i) => (
            <li key={s.title} className="ted__step" data-reveal style={{ '--d': `${i * 110}ms` }}>
              <span className="ted__stepn">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        {full && (
          <div className="ted__grid">
            {TED.items.map((t, i) => (
              <div key={t.title} className="ted__item" data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <h4>{t.title}</h4>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        <div className="ted__partners" data-reveal>
          <span>TED ailesi</span>
          <img src="/img/logo/ted.png" alt="Türk Eğitim Derneği" />
          <img src="/img/logo/tedmem.png" alt="TEDMEM" className="ted__wide" />
        </div>
      </div>
    </section>
  )
}

/* ── Kurs listesi (editoryal tablo) ──────────────────── */
export function CourseIndex() {
  return (
    <ul className="cindex">
      {COURSES.map((c, i) => (
        <li key={c.slug} data-reveal style={{ '--d': `${i * 80}ms` }}>
          <Link to={`/kurslar/${c.slug}`} className="crow">
            <span className="crow__n">0{i + 1}</span>
            <span className="crow__name">
              {c.district}
              <small>{c.county}</small>
            </span>
            <span className="crow__focus">{c.focus}</span>
            <span className="crow__grades">{c.grades}</span>
            <span className="crow__go"><Arrow /></span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

/* ── Yıldız metodu ────────────────────────────────────── */
export function Method() {
  return (
    <div className="method">
      {COURSE_METHOD.map((m, i) => (
        <div key={m.title} className="method__item" data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
          <StarMark size={22} className="method__star" />
          <h3>{m.title}</h3>
          <p>{m.text}</p>
        </div>
      ))}
    </div>
  )
}

/* ── Yorumlar ────────────────────────────────────────── */
export function Testimonials({ items = TESTIMONIALS, title = 'Onların başarısı, bizim motivasyonumuz' }) {
  const [i, setI] = useState(0)
  const t = items[i]
  return (
    <section className="voices">
      <div className="container voices__inner">
        <p className="eyebrow" data-reveal>{title}</p>
        <blockquote key={i} className="voices__quote">
          <span className="voices__mark">“</span>
          {t.quote}
        </blockquote>
        <div className="voices__meta">
          <div>
            <strong>{t.name}</strong>
            <span>{t.role || t.result}</span>
          </div>
          <div className="voices__dots">
            {items.map((_, k) => (
              <button key={k} className={k === i ? 'is-on' : ''} onClick={() => setI(k)} aria-label={`Yorum ${k + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Galeri şeridi ───────────────────────────────────── */
const GALLERY = [
  ['/img/okul/bahce-giris.jpg', 'Tarabya Yıldız Schools bahçe girişi'],
  ['/img/okul/satranc.jpg', 'Satranç kulübü'],
  ['/img/okul/logo-duvar.jpg', 'Okul lobisi'],
  ['/img/okul/bilisim.jpg', 'Bilişim dersi'],
  ['/img/kurs/etut-salonu.jpg', 'Kurs etüt salonu'],
  ['/img/okul/laboratuvar.jpg', 'Fen laboratuvarı'],
  ['/img/okul/ilkokul-sinif.jpg', 'İlkokul sınıfı'],
  ['/img/kurs/sinif.jpg', 'Kurs sınıfı'],
  ['/img/okul/ogrenciler.jpg', 'Öğrencilerimiz'],
]

export function Gallery() {
  const items = [...GALLERY, ...GALLERY]
  return (
    <section className="gallery" aria-label="Kampüslerimizden kareler">
      <div className="gallery__track">
        {items.map(([src, alt], k) => (
          <figure key={k} className={`gallery__item ${k % 3 === 1 ? 'gallery__item--tall' : ''}`}>
            <img src={src} alt={k < GALLERY.length ? alt : ''} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ── Ön kayıt formu ──────────────────────────────────── */
export function EnrollForm({ defaultUnit = '' }) {
  const [sent, setSent] = useState(false)
  const units = [SCHOOL.name, ...COURSES.map((c) => c.name)]

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const msg = [
      'Merhaba, ön kayıt / bilgi almak istiyorum.',
      `Ad Soyad: ${f.get('name')}`,
      `Telefon: ${f.get('phone')}`,
      `Kurum: ${f.get('unit')}`,
      `Kademe / Sınıf: ${f.get('grade')}`,
      f.get('note') ? `Not: ${f.get('note')}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    setSent(true)
  }

  return (
    <form className="enroll" onSubmit={submit}>
      {sent ? (
        <div className="enroll__done">
          <StarMark size={56} />
          <h3>Talebiniz alındı.</h3>
          <p>Eğitim danışmanlarımız en kısa sürede sizinle iletişime geçecek.</p>
          <button type="button" className="btn btn--line" onClick={() => setSent(false)}>Yeni talep</button>
        </div>
      ) : (
        <>
          <div className="enroll__row">
            <label className="field">
              <span>Ad Soyad</span>
              <input name="name" required autoComplete="name" placeholder="Veli veya öğrenci adı" />
            </label>
            <label className="field">
              <span>Telefon</span>
              <input name="phone" required type="tel" autoComplete="tel" placeholder="05xx xxx xx xx" />
            </label>
          </div>
          <div className="enroll__row">
            <label className="field">
              <span>Kurum</span>
              <select name="unit" defaultValue={defaultUnit || units[0]}>
                {units.map((u) => <option key={u}>{u}</option>)}
              </select>
            </label>
            <label className="field">
              <span>Kademe / Sınıf</span>
              <select name="grade" defaultValue="8. Sınıf (LGS)">
                {['Okul Öncesi', 'İlkokul (1–4)', '5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf (LGS)', '9. Sınıf', '10. Sınıf', '11. Sınıf', '12. Sınıf (YKS)', 'Mezun', 'Açık Lise'].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="field">
            <span>Mesajınız (isteğe bağlı)</span>
            <textarea name="note" rows="3" placeholder="Merak ettiklerinizi yazın" />
          </label>
          <div className="enroll__foot">
            <p className="enroll__kvkk">Gönder’e tıkladığınızda talebiniz WhatsApp üzerinden eğitim danışmanımıza iletilir.</p>
            <button className="btn btn--gold" type="submit">
              Ön Kayıt Talebi Gönder <Arrow />
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export function EnrollSection({ defaultUnit }) {
  return (
    <section className="cta" id="on-kayit">
      <div className="container cta__grid">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">2026 – 2027 Ön Kayıt</p>
          <h2 className="cta__title">
            Başlamaya <em>hazır mısınız?</em>
          </h2>
          <p className="cta__lead">
            Okul ya da kurs; hangi kapıdan girerseniz girin, karşınızda aynı özen olacak. Formu doldurun, eğitim danışmanlarımız sizi arasın.
          </p>
          <div className="cta__lines">
            <a href={`tel:${BRAND.phoneHref}`}>{BRAND.phone}<small>Tarabya Yıldız Schools</small></a>
            <a href={`tel:${COURSES[0].phones[0].href}`}>{COURSES[0].phones[0].label}<small>Yıldız Kursları</small></a>
          </div>
        </div>
        <div data-reveal style={{ '--d': '120ms' }}>
          <EnrollForm defaultUnit={defaultUnit} />
        </div>
      </div>
    </section>
  )
}
