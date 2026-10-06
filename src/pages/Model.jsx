import { StarMark } from '../components/Brand'
import { PageHero } from '../components/Layout'
import { Check } from '../components/Icons'
import { EnrollSection, SectionHead } from '../components/Sections'
import { MEGA_DAY, MODEL_STEPS } from '../data/modelContent'

export default function Model() {
  return (
    <>
      <PageHero
        eyebrow="Yıldız Kurs Başarı Modeli"
        title={<>Sekiz adım, <em>tek hedef.</em></>}
        lead="Hazır bulunuşluk sınavından üniversite tercihine kadar; her öğrencinin yıl boyunca geçtiği, birbirini tamamlayan sekiz adımlık başarı modeli."
        image="/img/kurs/etut-salonu.jpg"
      >
        <div className="phero__chips">
          {MODEL_STEPS.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="chip chip--light chip--link mchip" style={{ '--c': s.color }}>
              <i className="mdot" /> {s.name}
            </a>
          ))}
        </div>
      </PageHero>

      {/* Yolculuk şeridi */}
      <section className="section section--paper mjourney">
        <div className="container">
          <SectionHead
            eyebrow="Öğrencinin Yolculuğu"
            title={<>Başlangıçtan <em>tercihe kadar.</em></>}
            lead="Model, eğitim yılının akışını izler: önce seviyeyi ölçer, sonra yeteneği ve dikkati çalışır, yıl boyu ölçer, sonunda öğrenciyi doğru hedefe yönlendirir."
          />
          <ol className="mtrack">
            {MODEL_STEPS.map((s, i) => (
              <li key={s.slug} data-reveal style={{ '--c': s.color, '--d': `${i * 70}ms` }}>
                <a href={`#${s.slug}`}>
                  <span className="mtrack__badge"><StarMark size={22} color="#fff" /></span>
                  <span className="mtrack__num">0{i + 1}</span>
                  <span className="mtrack__name">{s.name}</span>
                  <span className="mtrack__when">{s.when}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Adımlar */}
      <section className="section msteps">
        <div className="container">
          {MODEL_STEPS.map((s, i) => (
            <article key={s.slug} id={s.slug} className={`mstep ${i % 2 ? 'mstep--alt' : ''}`} style={{ '--c': s.color }}>
              <figure className="mstep__media" data-reveal>
                <img src={s.image} alt={`${s.name}: ${s.poster}`} loading="lazy" width="1200" height="1200" />
              </figure>
              <div className="mstep__body" data-reveal style={{ '--d': '120ms' }}>
                <div className="mstep__tag">
                  <span className="mstep__badge"><StarMark size={20} color="#fff" /></span>
                  <span className="mstep__name">{s.name}</span>
                  <span className="mstep__num">0{i + 1} / 0{MODEL_STEPS.length}</span>
                </div>
                <p className="mstep__when">{s.when}</p>
                <h2 className="mstep__title">
                  {s.title[0]} <em>{s.title[1]}</em>
                </h2>
                <blockquote className="mstep__quote">{s.poster}</blockquote>
                <p className="mstep__text">{s.text}</p>
                <ul className="mstep__points">
                  {s.points.map((p) => <li key={p}><Check /> {p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mega Günü */}
      <section className="section section--ink mega" id="mega-gunu">
        <StarMark size={620} className="mega__star" />
        <div className="container mega__grid">
          <div data-reveal>
            <p className="eyebrow eyebrow--light">Öğretmenlerimiz İçin</p>
            <h2 className="mega__title">Yıldız / <em>Mega Günü.</em></h2>
            <p className="mega__when"><StarMark size={18} /> {MEGA_DAY.when}</p>
            <blockquote className="mega__quote">{MEGA_DAY.poster}</blockquote>
            <p className="mega__text">{MEGA_DAY.text}</p>
          </div>
          <figure className="mega__media" data-reveal style={{ '--d': '120ms' }}>
            <img src={MEGA_DAY.image} alt={`${MEGA_DAY.name}: ${MEGA_DAY.poster}`} loading="lazy" width="1200" height="1200" />
          </figure>
        </div>
      </section>

      <EnrollSection />
    </>
  )
}
