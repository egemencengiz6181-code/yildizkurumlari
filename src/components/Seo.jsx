import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeo, headTags } from '../seo'

/**
 * Sayfa değiştikçe <head> içindeki başlık, meta, canonical ve JSON-LD etiketlerini günceller.
 * Prerender edilmiş HTML'deki etiketler de `data-seo` ile işaretli olduğundan aynı kayıtlar güncellenir.
 */
export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getSeo(pathname, window.location.origin)
    const { meta, canonical, ld } = headTags(seo)
    const head = document.head

    document.title = seo.title

    meta.forEach(([attr, key, value]) => {
      let el = head.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        head.appendChild(el)
      }
      el.setAttribute('content', value)
    })
    if (!seo.canonical) head.querySelector('meta[property="og:url"]')?.remove()

    let link = head.querySelector('link[rel="canonical"]')
    if (canonical) {
      if (!link) {
        link = document.createElement('link')
        link.rel = 'canonical'
        head.appendChild(link)
      }
      link.href = canonical
    } else {
      link?.remove()
    }

    head.querySelectorAll('script[data-seo="ld"]').forEach((s) => s.remove())
    ld.forEach((obj) => {
      const s = document.createElement('script')
      s.type = 'application/ld+json'
      s.dataset.seo = 'ld'
      s.textContent = JSON.stringify(obj)
      head.appendChild(s)
    })
  }, [pathname])

  return null
}
