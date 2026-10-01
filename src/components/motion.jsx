import { useEffect, useRef, useState } from 'react'

/** Görünür olduğunda `is-in` sınıfı ekler; CSS geçişleri buna bağlı. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })
}

export function Counter({ to, suffix = '', duration = 1600 }) {
  const ref = useRef(null)
  // Sunucu HTML'inde (ve JS çalışmadan) gerçek değer görünsün; sayma animasyonu ekrana gelince oynar.
  const [val, setVal] = useState(to)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        setVal(Math.round(to * (1 - Math.pow(1 - p, 4))))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to, duration])
  return (
    <span ref={ref}>
      {suffix === '%' ? '%' : ''}
      {val}
      {suffix && suffix !== '%' ? suffix : ''}
    </span>
  )
}

/** Başlığı kelime kelime maskeli animasyonla gösterir. */
export function SplitWords({ text, className = '', delay = 0, as: Tag = 'span' }) {
  return (
    <Tag className={`split ${className}`}>
      {text.split(' ').map((w, i) => (
        <span className="split__mask" key={i}>
          <span className="split__word" style={{ animationDelay: `${delay + i * 90}ms` }}>
            {w}
          </span>
        </span>
      ))}
    </Tag>
  )
}
