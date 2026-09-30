import { Link } from 'react-router-dom'
import { PageHero } from '../components/Layout'
import { Instagram, Phone, Pin } from '../components/Icons'
import { EnrollForm, SectionHead } from '../components/Sections'
import { COURSES, SCHOOL } from '../data/site'

export default function Contact() {
  const units = [
    { name: SCHOOL.name, tag: 'Okul · TED AD', to: '/okul', address: SCHOOL.address, phones: SCHOOL.phones, instagram: SCHOOL.instagram, handle: SCHOOL.instagramHandle },
    ...COURSES.map((c) => ({ name: c.name, tag: `Kurs · ${c.focus}`, to: `/kurslar/${c.slug}`, address: c.address, phones: c.phones, instagram: c.instagram, handle: c.instagramHandle })),
  ]
  return (
    <>
      <PageHero eyebrow="İletişim" title={<>Kapımız <em>açık.</em></>} lead="Altı kurum, tek aile. Size en yakın kurumumuza ulaşın ya da ön kayıt formunu doldurun." image="/img/okul/bahce-giris.jpg" />

      <section className="section section--paper" id="on-kayit">
        <div className="container contact-grid">
          <div>
            <SectionHead eyebrow="Ön Kayıt & Bilgi" title={<>Sizi <em>arayalım.</em></>} lead="Formu doldurun; eğitim danışmanlarımız kurum, program ve burs olanakları hakkında sizi bilgilendirsin." />
          </div>
          <div data-reveal>
            <EnrollForm />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Kurumlarımız" title={<>Altı adres, <em>tek aile.</em></>} />
          <div className="units">
            {units.map((u, i) => (
              <article className="unit" key={u.name} data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <span className="unit__tag">{u.tag}</span>
                <h3><Link to={u.to}>{u.name}</Link></h3>
                <p className="unit__addr"><Pin /> {u.address}</p>
                {u.phones.map((p) => (
                  <a className="unit__tel" key={p.href} href={`tel:${p.href}`}><Phone /> {p.label}</a>
                ))}
                <a className="unit__ig" href={u.instagram} target="_blank" rel="noreferrer"><Instagram /> Instagram</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
