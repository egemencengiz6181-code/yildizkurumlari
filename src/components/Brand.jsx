/**
 * Yıldız marka işareti: Tarabya Yıldız Schools logosundaki 8 kollu pusula
 * yıldızından türetildi. Her kol iki yüzeyli (facet) çizilir.
 */
export function StarMark({ size = 40, className = '', color = 'currentColor', accent }) {
  const long = 48
  const short = 30
  const arm = (len, w, rot, key) => (
    <g key={key} transform={`rotate(${rot})`}>
      <path d={`M0 ${-len} L${w} ${-w} L0 0 Z`} fill={color} />
      <path d={`M0 ${-len} L${-w} ${-w} L0 0 Z`} fill={accent || color} opacity={accent ? 1 : 0.62} />
    </g>
  )
  return (
    <svg
      className={`star-mark ${className}`}
      width={size}
      height={size}
      viewBox="-50 -50 100 100"
      aria-hidden="true"
    >
      {[0, 90, 180, 270].map((r) => arm(long, 5.2, r, `l${r}`))}
      {[45, 135, 225, 315].map((r) => arm(short, 4, r, `s${r}`))}
      <circle r="3.2" fill="none" stroke={color} strokeWidth="1.2" />
    </svg>
  )
}

export function Logo({ stacked = false, motto = false, className = '' }) {
  if (stacked) {
    return (
      <div className={`logo logo--stacked ${className}`}>
        <StarMark size={88} className="logo__star" />
        <span className="logo__word">YILDIZ</span>
        <span className="logo__sub">EĞİTİM KURUMLARI</span>
        {motto && (
          <>
            <span className="logo__rule" />
            <span className="logo__motto">Sadece Eğitim</span>
          </>
        )}
      </div>
    )
  }
  return (
    <div className={`logo ${className}`}>
      <StarMark size={34} className="logo__star" />
      <span className="logo__text">
        <span className="logo__word">YILDIZ</span>
        <span className="logo__sub">EĞİTİM KURUMLARI</span>
      </span>
    </div>
  )
}
