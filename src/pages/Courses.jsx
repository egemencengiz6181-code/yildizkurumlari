import { Link, Navigate, useParams } from 'react-router-dom'
import { StarMark } from '../components/Brand'
import { PageHero } from '../components/Layout'
import { Arrow, ArrowUpRight, Check, Instagram, Mail, Phone, Pin } from '../components/Icons'
import { Accordion, ProgramTabs, Stories } from '../components/Detail'
import { COACHING, COURSE_CONTENT, GUIDANCE } from '../data/courseContent'
import { CourseIndex, EnrollSection, Method, SectionHead, Testimonials } from '../components/Sections'
import { COURSES } from '../data/site'

export const COURSE_IMG = {
  tarabya: '/img/kurs/etut-salonu.jpg',
  sirinevler: '/img/kurs/sirinevler-bina.jpg',
  sefakoy: '/img/kurs/bireysel.jpg',
  halkali: '/img/kurs/sinif.jpg',
  mimaroba: '/img/kurs/lise-sinif.jpg',
}

export function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Yıldız Kursları"
        title={<>Efsane <em>geri döndü.</em></>}
        lead="Tarabya, Şirinevler, Sefaköy, Halkalı ve Mimaroba’da; LGS ve YKS’ye hazırlıkta nesiller yetiştiren sınav disiplini; Yıldız Eğitim Kurumları güvencesiyle."
        image="/img/kurs/etut-salonu.jpg"
      />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="5 Lokasyon" title={<>Size en yakın <em>Yıldız.</em></>} />
          <CourseIndex />
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="ccards">
            {COURSES.map((c, i) => (
              <Link to={`/kurslar/${c.slug}`} className="ccard" key={c.slug} data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <div className="ccard__media">
                  <img src={COURSE_IMG[c.slug]} alt={c.name} loading="lazy" />
                  <span className="ccard__focus">{c.focus}</span>
                </div>
                <div className="ccard__body">
                  <span className="ccard__county">{c.county}</span>
                  <h3>{c.name}</h3>
                  <p>{c.blurb}</p>
                  <span className="ccard__grades">{c.grades}</span>
                  <span className="ccard__go">Kursa git <ArrowUpRight /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container">
          <SectionHead light eyebrow="Yıldız Metodu" title={<>Sağlam temel, <em>kanıtlanmış başarı.</em></>} />
          <Method />
        </div>
      </section>

      <Testimonials />
      <EnrollSection defaultUnit={COURSES[0].name} />
    </>
  )
}

export function CourseDetail() {
  const { slug } = useParams()
  const c = COURSES.find((x) => x.slug === slug)
  if (!c) return <Navigate to="/kurslar" replace />
  const k = COURSE_CONTENT[slug]
  const others = COURSES.filter((x) => x.slug !== slug)

  return (
    <>
      <PageHero eyebrow={`Yıldız Eğitim Kurumları · ${c.side}`} title={<>{c.district} <em>Kursu</em></>} lead={c.blurb} image={COURSE_IMG[c.slug]}>
        <div className="phero__chips">
          <a href="#programlar" className="chip chip--light chip--link">{c.focus} programları <Arrow /></a>
          <a href="#programlar" className="chip chip--light chip--link">{c.grades}</a>
        </div>
      </PageHero>

      {/* Hakkında + iletişim kartı */}
      <section className="section section--paper">
        <div className="container course">
          <div className="course__main">
            <p className="eyebrow" data-reveal>{k.about.heading}</p>
            <h2 className="course__title" data-reveal>{k.about.tagline}</h2>
            <div className="course__text" data-reveal>
              {k.about.text.map((t, i) => <p key={i}>{t}</p>)}
              {k.why && <p>{k.why}</p>}
            </div>
            <div className="vm" data-reveal>
              <div><span className="eyebrow">Vizyon</span><p>{k.about.vision}</p></div>
              <div><span className="eyebrow">Misyon</span><p>{k.about.mission}</p></div>
            </div>
            <div className="course__hl">
              {c.highlights.map((h, i) => (
                <div key={h} className="hl" data-reveal style={{ '--d': `${i * 80}ms` }}>
                  <StarMark size={18} />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="course__card" data-reveal>
            <StarMark size={56} className="course__logo" />
            <h3>{c.name}</h3>
            <ul className="contact-list">
              <li><Pin /> {c.address}</li>
              {c.phones.map((p) => (
                <li key={p.href}><Phone /> <a href={`tel:${p.href}`}>{p.label}</a></li>
              ))}
              {c.email && <li><Mail /> <a href={`mailto:${c.email}`}>E-posta gönderin</a></li>}
              <li><Instagram /> <a href={c.instagram} target="_blank" rel="noreferrer">Instagram’da takip edin</a></li>
            </ul>
            <a href={`tel:${c.phones[0].href}`} className="btn btn--gold btn--block">Hemen Arayın <Arrow /></a>
          </aside>
        </div>
      </section>

      {/* Programlar */}
      <section className="section" id="programlar">
        <div className="container">
          <SectionHead
            eyebrow={`${k.programs.length} Program`}
            title={<>Hedefinize göre <em>program.</em></>}
            lead="Sınıfınızı seçin; ders saatleri, kapsam ve program içeriğinin tamamını görün."
          />
          <ProgramTabs key={slug} programs={k.programs} />
          {k.lgsPrograms && (
            <div className="course__lgs">
              <SectionHead eyebrow="LGS Birimi · 4–8. Sınıf" title={<>Şirinevler <em>LGS programları.</em></>} lead="Mahmutbey Cad. No:5A’daki LGS birimimizde ortaokul öğrencilerine özel programlar." />
              <ProgramTabs key={`${slug}-lgs`} programs={k.lgsPrograms} />
            </div>
          )}
        </div>
      </section>

      {/* Mimaroba: LGS & YKS odak blokları */}
      {k.focusBlocks && (
        <section className="section section--paper">
          <div className="container focus">
            {k.focusBlocks.map((b) => (
              <div key={b.title} className="focus__item" data-reveal>
                <StarMark size={28} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sıfır hata */}
      {k.zeroError && (
        <section className="zero">
          <div className="container zero__grid">
            <div data-reveal>
              <p className="eyebrow eyebrow--light">Kişiye Özel Kitap</p>
              <h2 className="zero__title">Sıfır <em>hata.</em></h2>
            </div>
            <p className="zero__text" data-reveal>{k.zeroError}</p>
          </div>
        </section>
      )}

      {/* Rehberlik */}
      <section className="section section--paper">
        <div className="container guidance">
          <div className="guidance__side">
            <SectionHead eyebrow="Rehberlik & Psikolojik Danışmanlık" title={<>Her öğrenciye <em>ayrı yol haritası.</em></>} lead={GUIDANCE.intro} />
            <div className="coach" data-reveal>
              <h4>Eğitim Koçu Hizmetleri</h4>
              <ul>
                {COACHING.map((x) => <li key={x}><Check /> {x}</li>)}
              </ul>
            </div>
          </div>
          <div data-reveal>
            <Accordion
              items={GUIDANCE.items.map((g, i) => ({
                num: `0${i + 1}`,
                title: g.title,
                content: (
                  <>
                    <p className="acc__lead">{g.text}</p>
                    {g.tags.length > 0 && (
                      <div className="acc__tags">{g.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                    )}
                    {g.body.map((b, j) => <p key={j}>{b}</p>)}
                    {g.list.length > 0 && (
                      <ul className="acc__list">{g.list.map((t) => <li key={t}><Check /> {t}</li>)}</ul>
                    )}
                  </>
                ),
              }))}
            />
          </div>
        </div>
      </section>

      {/* Başarılar */}
      {k.refs && (
        <section className="section" id="basarilar">
          <div className="container">
            <SectionHead eyebrow="Başarı Hikâyeleri" title={<>Öğrencilerimizin gerçek <em>başarıları.</em></>} />
            <Stories refs={k.refs} />
          </div>
        </section>
      )}

      {k.testimonials.length > 0 && <Testimonials key={slug} items={k.testimonials} title="Öğrenci & veli görüşleri" />}

      <section className="section section--ink">
        <div className="container">
          <SectionHead light eyebrow="Yıldız Metodu" title={<>Sağlam temel, <em>kanıtlanmış başarı.</em></>} />
          <Method />
        </div>
      </section>

      <section className="mapband">
        <iframe title={`${c.name} harita`} src={c.map} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHead eyebrow="Diğer Kurslarımız" title={<>Aynı disiplin, <em>farklı semtler.</em></>} />
          <div className="others">
            {others.map((o) => (
              <Link key={o.slug} to={`/kurslar/${o.slug}`} className="other" data-reveal>
                <span className="other__name">{o.district}</span>
                <span className="other__meta">{o.focus} · {o.county}</span>
                <ArrowUpRight />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnrollSection defaultUnit={c.name} />
    </>
  )
}
