import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { StarMark } from '../components/Brand'
import { PageHero } from '../components/Layout'
import { Arrow, Check, Instagram, Phone, Pin } from '../components/Icons'
import { Accordion, Faq } from '../components/Detail'
import { EnrollSection, SectionHead, TedBlock } from '../components/Sections'
import { SCHOOL } from '../data/site'
import {
  BILINGUAL_DETAIL,
  DAILY_SCHEDULE,
  ECA_DETAIL,
  FACILITIES,
  LEVEL_DETAIL,
  PERSONALIZED,
  RULES,
  SCHEDULE_NOTES,
  SCHOOL_ABOUT,
  SERVICES,
  STUDENT_PROFILE,
  SUPPORT,
  TED_FAQ,
} from '../data/schoolContent'
import { SCHOOL_FAQ } from '../data/schoolFaq'

const CAMPUS_IMG = ['/img/okul/laboratuvar.jpg', '/img/okul/ogrenciler-koridor.jpg', '/img/okul/yuzme.jpg', '/img/okul/sanat.jpg', '/img/okul/oyun-bahcesi.jpg']
const LEVEL_IMG = { 'okul-oncesi': '/img/okul/anasinifi.jpg', ilkokul: '/img/okul/ilkokul-sinif.jpg', ortaokul: '/img/okul/ortaokul-ders.jpg' }

function LevelTabs() {
  const { hash } = useLocation()
  const [active, setActive] = useState(0)

  // /okul#okul-oncesi, #ilkokul, #ortaokul → ilgili sekme açılır (Layout sayfayı o başlığa kaydırır).
  useEffect(() => {
    const i = SCHOOL.levels.findIndex((x) => `#${x.key}` === hash)
    if (i >= 0) setActive(i)
  }, [hash])

  const l = SCHOOL.levels[active]
  const d = LEVEL_DETAIL[l.key]
  return (
    <div className="ltabs">
      <div className="ltabs__nav" role="tablist">
        {SCHOOL.levels.map((x, i) => (
          <button key={x.key} id={x.key} role="tab" aria-selected={i === active} className={`ltabs__tab ${i === active ? 'is-on' : ''}`} onClick={() => setActive(i)}>
            <span className="ltabs__n">0{i + 1}</span>
            <span className="ltabs__name">{x.title}</span>
            <span className="ltabs__en" lang="en">{x.en}</span>
          </button>
        ))}
      </div>
      <div className="ltabs__panel" key={l.key}>
        <div className="ltabs__media">
          <img src={LEVEL_IMG[l.key]} alt={l.title} loading="lazy" />
        </div>
        <div className="ltabs__body">
          {d.intro.map((p, i) => <p key={i}>{p}</p>)}
          <h4>{d.listTitle}</h4>
          <ul className="ltabs__list">
            {d.list.map((x) => <li key={x}><Check /> {x}</li>)}
          </ul>
        </div>
        <div className="ltabs__faq">
          <p className="eyebrow">{l.title} · Merak Edilenler</p>
          <Faq items={d.faq} />
        </div>
      </div>
    </div>
  )
}

export default function School() {
  return (
    <>
      <PageHero
        eyebrow="Okul · TED Akreditasyon & Danışmanlık"
        title={<>Tarabya Yıldız <em>Schools</em></>}
        lead={SCHOOL.intro}
        image="/img/okul/bina.jpg"
      >
        <div className="phero__logos">
          <img src="/img/logo/tarabya-schools.png" alt="Tarabya Yıldız Schools" className="phero__schoollogo" />
          <span className="phero__x">×</span>
          <img src="/img/logo/ted.png" alt="Türk Eğitim Derneği" className="phero__ted" />
        </div>
      </PageHero>

      {/* Hakkımızda */}
      <section className="section section--paper">
        <div className="container school-intro">
          <div>
            <p className="eyebrow" data-reveal>{SCHOOL.tagline}</p>
            <h2 className="school-intro__title" data-reveal>
              Geleceğe yön veren çağdaş eğitimle, <em>hayat boyu başarıya birlikte.</em>
            </h2>
            <div className="school-intro__text" data-reveal>
              <p className="school-intro__lead">{SCHOOL_ABOUT.lead}</p>
              {SCHOOL_ABOUT.text.map((t, i) => <p key={i}>{t}</p>)}
            </div>
          </div>
          <div className="school-intro__side" data-reveal>
            <p className="school-intro__quote">{SCHOOL.ataturk}</p>
            <span className="school-intro__cite">Mustafa Kemal Atatürk</span>
          </div>
        </div>
        <div className="container">
          <div className="pillars4">
            {SCHOOL.pillars.map((p, i) => (
              <div className="pillar4" key={p.title} data-reveal style={{ '--d': `${i * 100}ms` }}>
                <span className="pillar4__n">0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
          <div className="values" data-reveal>
            <p>{SCHOOL_ABOUT.values}</p>
            <div className="values__chips">
              {SCHOOL_ABOUT.valueList.map((v) => <span key={v} className="chip">{v}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* Kademeler */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Kademeler" title={<>Okul öncesinden <em>ortaokula.</em></>} lead="Her kademenin programını, atölyelerini ve merak edilenlerini inceleyin." />
          <LevelTabs />
        </div>
      </section>

      {/* Öğrenci profili */}
      <section className="section section--ink">
        <div className="container">
          <SectionHead light eyebrow="Öğrenci Profilimiz" title={<>21. yüzyılın <em>bireyi.</em></>} lead={STUDENT_PROFILE.intro} />
          <div className="method">
            {STUDENT_PROFILE.items.map((m, i) => (
              <div key={m.title} className="method__item" data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <StarMark size={22} className="method__star" />
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Çift dilli */}
      <section className="section">
        <div className="container bilingual__grid">
          <div className="bilingual__media" data-reveal>
            <img src="/img/okul/anasinifi.jpg" alt="Çift dilli anasınıfı" loading="lazy" />
          </div>
          <div className="bilingual__body" data-reveal>
            <p className="eyebrow"><span lang="en">Bilingual Education Program</span> · Anasınıfı, 1 ve 5. Sınıflar</p>
            <h2 className="bilingual__title">İki dil, <em>tek doğal akış.</em></h2>
            {BILINGUAL_DETAIL.map((t, i) => <p key={i}>{t}</p>)}
            <div className="bilingual__facts">
              <div><b>B1–B2</b><span>Ortaokul mezuniyetinde CEFR seviyesi</span></div>
              <div><b>%50</b><span>Anaokulunda İngilizce etkinlik oranı</span></div>
              <div><b>18</b><span>İlkokulda azami sınıf mevcudu</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Kişiselleştirilmiş öğretim */}
      <section className="section section--paper">
        <div className="container personal">
          <div>
            <SectionHead eyebrow="Kişiselleştirilmiş Öğretim" title={<>Her çocuğun <em>kendi hızı.</em></>} lead={PERSONALIZED.text} />
            <p className="personal__styles" data-reveal>{PERSONALIZED.styles}</p>
          </div>
          <div className="personal__side" data-reveal>
            <h4>Pekiştireç / Ödev Yaklaşımı</h4>
            <div className="personal__grid">
              {PERSONALIZED.homework.map((h) => (
                <div key={h.title}><strong>{h.title}</strong><span>{h.text}</span></div>
              ))}
            </div>
            <h4>İzleme ve Düzey Belirleme Sınavları</h4>
            <div className="values__chips">
              {PERSONALIZED.tracking.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
            <p className="personal__note">{PERSONALIZED.trackingText}</p>
          </div>
        </div>
      </section>

      {/* Destek & veli */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Destek, Takip & Veli İletişimi" title={<>Aile ile <em>birlikte.</em></>} />
          <div className="principles">
            {SUPPORT.map((s, i) => (
              <div className="principle" key={s.title} data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <StarMark size={20} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECA */}
      <section className="section section--ink eca">
        <div className="container">
          <SectionHead light eyebrow={<span lang="en">Extra Curricular Activities</span>} title={<>Sınıfın <em>ötesinde.</em></>} lead={ECA_DETAIL.text} />
          <div className="eca__chips" data-reveal>
            {[...SCHOOL.eca, ...ECA_DETAIL.list].map((e) => (
              <span key={e} className="chip chip--light"><StarMark size={12} /> {e}</span>
            ))}
          </div>
          <div className="scholar" data-reveal>
            <span className="scholar__pct">%100</span>
            <p>{SCHOOL.scholarship}</p>
          </div>
        </div>
      </section>

      {/* Kampüs */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Fiziki Yapı & Kampüs" title={<>Büyümek için <em>alan.</em></>} lead={FACILITIES.intro} />
          <p className="facilities__building" data-reveal>{FACILITIES.building}</p>
          <div className="facilities">
            {FACILITIES.items.map((c, i) => (
              <figure className="facility" key={c.title} data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <img src={CAMPUS_IMG[i]} alt={c.title} loading="lazy" />
                <figcaption>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="facilities__outro" data-reveal>{FACILITIES.outro}</p>
        </div>
      </section>

      {/* Hizmetler */}
      <section className="section section--paper">
        <div className="container">
          <SectionHead eyebrow="Hizmetlerimiz" title={<>Günün <em>her anında.</em></>} />
          <div className="services">
            {SERVICES.map((s, i) => (
              <div className="service" key={s.title} data-reveal style={{ '--d': `${i * 100}ms` }}>
                <span className="service__n">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Günlük çizelge + kurallar */}
      <section className="section">
        <div className="container daily">
          <div data-reveal>
            <p className="eyebrow">Günlük Zaman Çizelgesi</p>
            <h2 className="daily__title">Bir gün <em>Yıldız’da.</em></h2>
            <table className="daily__table">
              <tbody>
                {DAILY_SCHEDULE.map(([a, b]) => (
                  <tr key={a}><td>{a}</td><td>{b}</td></tr>
                ))}
              </tbody>
            </table>
            <div className="daily__notes">
              {SCHEDULE_NOTES.map(([a, b]) => (
                <div key={a}><b>{b}</b><span>{a}</span></div>
              ))}
            </div>
          </div>
          <div data-reveal>
            <p className="eyebrow">Temel Okul Kuralları · 2025–2026</p>
            <Accordion items={RULES.map((r) => ({ title: r.title, content: <p>{r.text}</p> }))} />
          </div>
        </div>
      </section>

      <TedBlock full />

      {/* SSS */}
      <section className="section section--paper">
        <div className="container faqwrap">
          <div>
            <SectionHead eyebrow="Sık Sorulan Sorular" title={<>Merak <em>edilenler.</em></>} lead="Eğitim modelimizden LGS hazırlığına, yabancı dil programımızdan okul kültürüne kadar temel başlıklar." />
          </div>
          <div data-reveal>
            <Faq items={[...SCHOOL_FAQ, ...TED_FAQ]} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container visit">
          <div data-reveal>
            <p className="eyebrow">Okulu Ziyaret Edin</p>
            <h2 className="visit__title">Okulumuzu <em>yerinde</em> tanıyın.</h2>
            <ul className="contact-list">
              <li><Pin /> {SCHOOL.address}</li>
              {SCHOOL.phones.map((p) => (
                <li key={p.href}><Phone /> <a href={`tel:${p.href}`}>{p.label}</a></li>
              ))}
              <li><Instagram /> <a href={SCHOOL.instagram} target="_blank" rel="noreferrer">{SCHOOL.instagramHandle}</a></li>
            </ul>
            <a href={`tel:${SCHOOL.phones[0].href}`} className="btn btn--ink">Ziyaret Randevusu Alın <Arrow /></a>
          </div>
          <div className="visit__map" data-reveal>
            <iframe title="Tarabya Yıldız Schools harita" src={SCHOOL.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <EnrollSection defaultUnit={SCHOOL.name} />
    </>
  )
}
