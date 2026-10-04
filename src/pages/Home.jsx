import { Link } from 'react-router-dom'
import { StarMark } from '../components/Brand'
import { SplitWords } from '../components/motion'
import { Arrow } from '../components/Icons'
import { MoreLink } from '../components/Layout'
import {
  CourseIndex,
  EnrollSection,
  Gallery,
  Manifesto,
  Method,
  SectionHead,
  Stats,
  TedBlock,
  Testimonials,
  TwoWorlds,
} from '../components/Sections'
import { BRAND } from '../data/site'

const TICKER = [
  ['Tarabya', '/kurslar/tarabya'],
  ['Şirinevler', '/kurslar/sirinevler'],
  ['Sefaköy', '/kurslar/sefakoy'],
  ['Halkalı', '/kurslar/halkali'],
  ['Mimaroba', '/kurslar/mimaroba'],
  ['TED AD', '/okul#ted'],
  ['LGS', '/kurslar'],
  ['YKS', '/kurslar'],
  ['Sadece Eğitim', '/hakkimizda'],
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero__media">
        <img src="/img/okul/tarabya-bogaz.jpg" alt="Tarabya ve İstanbul Boğazı" fetchPriority="high" />
      </div>
      <div className="hero__shade" />
      <div className="hero__grain" />
      <StarMark size={760} className="hero__star" />

      <div className="container hero__inner">
        <p className="hero__eyebrow">
          <span className="hero__line" />
          Yıldız Eğitim Kurumları · İstanbul
        </p>
        <h1 className="hero__title">
          <SplitWords text="Efsane" />
          <SplitWords text="geri döndü." className="hero__title-em" delay={180} />
        </h1>
        <p className="hero__lead">
          {BRAND.heritage}. Bir TED AD okulu ve beş kurs merkeziyle İstanbul’da eğitimin çıtasını belirliyoruz.
        </p>
        <div className="hero__ctas">
          <Link to="/kurslar" className="btn btn--gold">
            Kurumlarımızı Keşfedin <Arrow />
          </Link>
          <Link to="/hakkimizda" className="btn btn--ghost">
            Biz Kimiz?
          </Link>
        </div>
      </div>

      <div className="hero__foot container">
        <div className="hero__motto">
          <StarMark size={18} />
          <span>Sadece Eğitim.</span>
        </div>
        <div className="hero__facts">
          <Link to="/okul"><b>1</b> Okul</Link>
          <Link to="/kurslar"><b>5</b> Kurs</Link>
          <Link to="/hakkimizda"><b>50</b> Yıl</Link>
        </div>
        <span className="hero__scroll" aria-hidden="true">
          <span />
        </span>
      </div>
    </section>
  )
}

function Ticker() {
  const row = [...TICKER, ...TICKER, ...TICKER]
  return (
    <nav className="ticker" aria-label="Kurumlarımız">
      <div className="ticker__track">
        {row.map(([label, to], i) => (
          // Kayan şerit için liste 3 kez tekrarlanır; kopyalar klavye ve ekran okuyucudan gizlenir.
          <Link key={i} to={to} className="ticker__item" tabIndex={i < TICKER.length ? undefined : -1} aria-hidden={i >= TICKER.length || undefined}>
            {label}
            <StarMark size={14} />
          </Link>
        ))}
      </div>
    </nav>
  )
}

function Heritage() {
  return (
    <section className="heritage">
      <div className="container heritage__grid">
        <div className="heritage__media" data-reveal>
          <img src="/img/okul/logo-duvar.jpg" alt="Tarabya Yıldız Schools lobisi" loading="lazy" />
          <div className="heritage__badge">
            <span className="heritage__big">50</span>
            <span>yıllık<br />birikim</span>
          </div>
        </div>
        <div className="heritage__body">
          <p className="eyebrow" data-reveal>İkinci Sözümüz</p>
          <h2 className="heritage__title" data-reveal>
            Eğitimde <em>yarım asırlık</em> tecrübe.
          </h2>
          <p className="heritage__text" data-reveal>
            Yarım asırdır sınıflarda nesiller yetiştiren, kurduğu sistem ve öğrencisine duyduğu güvenle efsaneleşen
            eğitim anlayışımız; bugün aynı tutku ve yeni nesil araçlarla Yıldız Eğitim Kurumları çatısı altında
            büyümeye devam ediyor.
          </p>
          <p className="heritage__text" data-reveal>
            Okulumuzda TED’in akademik güvencesi, kurslarımızda güçlü ölçme-değerlendirme sistemimiz. İkisinin ortak paydası
            tek: öğrencinin kendi yıldızını bulması.
          </p>
          <div data-reveal>
            <MoreLink to="/hakkimizda">Hikâyemizi okuyun</MoreLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Manifesto />
      <Stats />
      <TwoWorlds />
      <Heritage />

      <TedBlock />

      <section className="section">
        <div className="container">
          <div className="split-head">
            <SectionHead
              eyebrow="Yıldız Kursları · 5 Lokasyon"
              title={<>İstanbul’un dört bir yanında, <em>aynı disiplin.</em></>}
              lead="Size en yakın kursumuzu seçin. LGS’den YKS’ye, ilkokuldan mezuna."
            />
            <div data-reveal>
              <MoreLink to="/kurslar">Tüm kurslar</MoreLink>
            </div>
          </div>
          <CourseIndex />
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <SectionHead
            light
            eyebrow="Yıldız Metodu"
            title={<>Sağlam temel, <em>kanıtlanmış başarı.</em></>}
            lead="Nesiller yetiştiren sistem; bugünün teknolojisiyle."
          />
          <Method />
        </div>
      </section>

      <Testimonials />
      <Gallery />
      <EnrollSection />
    </>
  )
}
