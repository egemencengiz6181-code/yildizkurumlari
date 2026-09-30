import { useState } from 'react'
import { StarMark } from './Brand'
import { Check } from './Icons'

/** Açılır-kapanır soru/cevap ya da hizmet listesi. */
export function Accordion({ items, defaultOpen = 0, light = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`acc ${light ? 'acc--light' : ''}`}>
      {items.map((it, i) => {
        const on = open === i
        return (
          <div key={it.title} className={`acc__item ${on ? 'is-open' : ''}`}>
            <button className="acc__head" onClick={() => setOpen(on ? -1 : i)} aria-expanded={on}>
              {it.num && <span className="acc__num">{it.num}</span>}
              <span className="acc__title">{it.title}</span>
              <span className="acc__icon" aria-hidden="true" />
            </button>
            <div className="acc__panel">
              <div className="acc__inner">{it.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/** Kurs programları: solda sınıf listesi, sağda seçilen programın tüm detayı. */
export function ProgramTabs({ programs }) {
  const [active, setActive] = useState(0)
  const p = programs[active]
  return (
    <div className="ptabs">
      <div className="ptabs__nav" role="tablist">
        {programs.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={i === active}
            className={`ptabs__tab ${i === active ? 'is-on' : ''} ${/VIP/.test(x.title) ? 'is-vip' : ''}`}
            onClick={() => setActive(i)}
          >
            {x.title}
          </button>
        ))}
      </div>

      <article className="ptabs__panel" key={p.key}>
        <header className="ptabs__head">
          <span className="eyebrow">Program</span>
          <h3 className="ptabs__title">{p.title}</h3>
          {p.tagline && <p className="ptabs__tagline">{p.tagline}</p>}
        </header>

        {p.scope.length > 0 && (
          <ul className="ptabs__scope">
            {p.scope.map((s) => (
              <li key={s}><Check /> {s}</li>
            ))}
          </ul>
        )}

        {p.about.length > 0 && (
          <div className="ptabs__about">
            {p.about.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>
        )}

        {p.schedule.length > 0 && (
          <div className="ptabs__block">
            <h4>Haftalık Program</h4>
            <div className="ptabs__schedule">
              {p.schedule.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
          </div>
        )}

        {p.details.length > 0 && (
          <div className="ptabs__details">
            {p.details.map((d, i) => (
              <div key={d.title} className="ptabs__detail">
                <span className="ptabs__dn">0{i + 1}</span>
                <div>
                  <h4>{d.title}</h4>
                  {d.text && <p>{d.text}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        {(p.meta || p.summary) && (
          <footer className="ptabs__summary">
            <StarMark size={20} />
            <div>
              {p.meta && <strong>{p.meta}</strong>}
              {p.summary && <p>{p.summary}</p>}
            </div>
          </footer>
        )}
      </article>
    </div>
  )
}

export function Stories({ refs }) {
  return (
    <div className="stories">
      <div className="stories__grid">
        {refs.stories.map((s) => (
          <figure key={s.name + s.result} className="story" data-reveal>
            <span className="story__result">{s.result}</span>
            {s.quote && <blockquote>“{s.quote}”</blockquote>}
            <figcaption>{s.name}</figcaption>
          </figure>
        ))}
      </div>
      {refs.schools.length > 0 && (
        <div className="stories__schools" data-reveal>
          <p className="eyebrow">Öğrencilerimizin yerleştiği okullardan</p>
          <div className="stories__chips">
            {refs.schools.map((s) => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </div>
      )}
      {refs.features.length > 0 && (
        <ul className="stories__features" data-reveal>
          {refs.features.map((f) => (
            <li key={f}><StarMark size={14} /> {f}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export function Faq({ items, light }) {
  return (
    <Accordion
      light={light}
      defaultOpen={-1}
      items={items.map((f) => ({
        title: f.q,
        content: (Array.isArray(f.a) ? f.a : [f.a]).map((a, i) => <p key={i}>{a}</p>),
      }))}
    />
  )
}
