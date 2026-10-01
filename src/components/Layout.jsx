import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { Logo, StarMark } from './Brand'
import { useReveal } from './motion'
import { BRAND, COURSES, NAV, SCHOOL } from '../data/site'
import { Arrow, Instagram, Phone } from './Icons'
import Seo from './Seo'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
    <header className={`header ${scrolled ? 'header--solid' : ''} ${open ? 'header--open' : ''}`}>
      <div className="header__bar">
        <Link to="/" className="header__logo" aria-label="Yıldız Eğitim Kurumları ana sayfa">
          <Logo />
        </Link>
        <nav className="header__nav" aria-label="Ana menü">
          {NAV.slice(1).map((n) => (
            <NavLink key={n.to} to={n.to} className="header__link">
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="header__actions">
          <a href={`tel:${BRAND.phoneHref}`} className="header__phone">
            <Phone /> {BRAND.phone}
          </a>
          <Link to="/iletisim#on-kayit" className="btn btn--gold btn--sm">
            Ön Kayıt
          </Link>
          <button
            className="burger"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

    </header>
      <div className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <StarMark size={520} className="menu__star" />
        <div className="menu__inner">
          <nav className="menu__nav">
            {NAV.map((n, i) => (
              <NavLink key={n.to} to={n.to} end className="menu__link" style={{ transitionDelay: `${120 + i * 60}ms` }}>
                <span className="menu__num">0{i + 1}</span>
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="menu__side">
            <p className="eyebrow">Kurumlarımız</p>
            <Link to="/okul" className="menu__sub">{SCHOOL.name}</Link>
            {COURSES.map((c) => (
              <Link key={c.slug} to={`/kurslar/${c.slug}`} className="menu__sub">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <Logo stacked motto />
          <p className="footer__heritage">{BRAND.heritage}</p>
        </div>
        <div className="footer__cols">
          <div>
            <p className="eyebrow">Okul</p>
            <Link to="/okul" className="footer__name">{SCHOOL.name}</Link>
            <div className="footer__levels">
              {SCHOOL.levels.map((l) => (
                <Link key={l.key} to={`/okul#${l.key}`}>{l.title}</Link>
              ))}
            </div>
            <p className="footer__addr">{SCHOOL.address}</p>
            {SCHOOL.phones.map((p) => (
              <a key={p.href} href={`tel:${p.href}`} className="footer__tel">{p.label}</a>
            ))}
          </div>
          <div className="footer__courses">
            <p className="eyebrow">Kurslarımız</p>
            {COURSES.map((c) => (
              <div key={c.slug} className="footer__course">
                <Link to={`/kurslar/${c.slug}`} className="footer__name">{c.name}</Link>
                <a href={`tel:${c.phones[0].href}`} className="footer__tel">{c.phones[0].label}</a>
              </div>
            ))}
          </div>
          <div>
            <p className="eyebrow">Keşfet</p>
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="footer__link">{n.label}</Link>
            ))}
            <a href={BRAND.instagram} target="_blank" rel="noreferrer" className="footer__link footer__ig">
              <Instagram /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer__giant" aria-hidden="true">Sadece Eğitim</div>
      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} {BRAND.name}. Tüm hakları saklıdır.</span>
        <span className="footer__ted">
          <img src="/img/logo/ted.png" alt="" /> Tarabya Yıldız Schools, TED Akreditasyon ve Danışmanlığı ile.
        </span>
      </div>
    </footer>
  )
}

function FloatingCall() {
  return (
    <a className="fab" href={`https://wa.me/${BRAND.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp ile yazın">
      <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
        <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2C2.2 6.6 6.6 2.2 12 2.2c2.6 0 5.1 1 6.9 2.9 1.8 1.8 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8M20.4 3.6C18.2 1.3 15.2 0 12 0 5.5 0 .1 5.3.1 11.9c0 2.1.5 4.1 1.6 5.9L0 24l6.3-1.7c1.7.9 3.7 1.4 5.7 1.4 6.5 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.2" />
      </svg>
    </a>
  )
}

export default function Layout() {
  const { pathname, hash } = useLocation()
  useReveal()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <Seo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingCall />
    </>
  )
}

export function PageHero({ eyebrow, title, lead, image, children }) {
  return (
    <section className="phero">
      {image && <img className="phero__bg" src={image} alt="" />}
      <div className="phero__shade" />
      <StarMark size={640} className="phero__star" />
      <div className="container phero__inner">
        <p className="eyebrow eyebrow--light">{eyebrow}</p>
        <h1 className="phero__title">{title}</h1>
        {lead && <p className="phero__lead">{lead}</p>}
        {children}
      </div>
    </section>
  )
}

export function MoreLink({ to, children }) {
  return (
    <Link to={to} className="more">
      {children} <Arrow />
    </Link>
  )
}
