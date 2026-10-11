import { LOGO_ART } from './logoArt'

/**
 * Kurumsal logolar: Yıldız Eğitim Kurumları ve Yıldız Kurs.
 * Çizimler logolardan vektörleştirildi (logoArt.js). Her parça sayfada bir kez <defs> içinde tanımlanır,
 * kullanıldığı yerlerde <use> ile çağrılır; böylece yıldız onlarca kez kullanılsa da HTML şişmez.
 */
const KINDS = { egitim: 'e', kurs: 'k' }
const PARTS = ['star', 'word', 'sub', 'tag', 'rules']

/** Layout'ta bir kez render edilir. */
export function LogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        {Object.entries(KINDS).map(([kind, k]) =>
          PARTS.map((p) => <path key={`${k}-${p}`} id={`y${k}-${p}`} d={LOGO_ART[kind][p].d} />),
        )}
      </defs>
    </svg>
  )
}

/** Birden çok parçanın kutusunu kapsayan viewBox. */
function viewBox(kind, parts, pad = 0) {
  const boxes = parts.map((p) => LOGO_ART[kind][p].box)
  const x0 = Math.min(...boxes.map((b) => b[0])) - pad
  const y0 = Math.min(...boxes.map((b) => b[1])) - pad
  const x1 = Math.max(...boxes.map((b) => b[2])) + pad
  const y1 = Math.max(...boxes.map((b) => b[3])) + pad
  return [x0, y0, x1 - x0, y1 - y0].map((v) => +v.toFixed(1)).join(' ')
}

/** Kare viewBox: yıldız her boyutta ortalı dursun. */
function starBox(kind) {
  const [x0, y0, x1, y1] = LOGO_ART[kind].star.box
  const s = Math.max(x1 - x0, y1 - y0)
  return [(x0 + x1 - s) / 2, (y0 + y1 - s) / 2, s, s].map((v) => +v.toFixed(1)).join(' ')
}

/** Logodaki yıldız. Rengi `color` ya da CSS `color` ile verilir. */
export function StarMark({ size = 40, className = '', color = 'currentColor', kind = 'egitim' }) {
  return (
    <svg className={`star-mark ${className}`} width={size} height={size} viewBox={starBox(kind)} aria-hidden="true">
      <use href={`#y${KINDS[kind]}-star`} fill={color} />
    </svg>
  )
}

/**
 * stacked: logonun tamamı (yıldız, YILDIZ, alt yazı, slogan).
 * Varsayılan: header için yatay dizilim (yıldız + YILDIZ + alt yazı).
 * Yazılar `color` (currentColor) ile boyanır; açık zeminde lacivert, koyu zeminde beyaz.
 */
export function Logo({ stacked = false, kind = 'egitim', className = '', label }) {
  const k = KINDS[kind]
  const name = label || (kind === 'kurs' ? 'Yıldız Kurs' : 'Yıldız Eğitim Kurumları')
  if (stacked) {
    return (
      <svg className={`logo logo--stacked ${className}`} viewBox={viewBox(kind, PARTS, 2)} role="img" aria-label={`${name} — başarmak sanattır`}>
        <use href={`#y${k}-star`} className="logo__gold" />
        <use href={`#y${k}-rules`} className="logo__gold" />
        <use href={`#y${k}-word`} />
        <use href={`#y${k}-sub`} />
        <use href={`#y${k}-tag`} />
      </svg>
    )
  }
  return (
    <span className={`logo ${className}`} role="img" aria-label={name}>
      <svg className="logo__star" viewBox={starBox(kind)} aria-hidden="true">
        <use href={`#y${k}-star`} className="logo__gold" />
      </svg>
      <svg className="logo__type" viewBox={viewBox(kind, ['word', 'sub'], 1)} aria-hidden="true">
        <use href={`#y${k}-word`} />
        <use href={`#y${k}-sub`} />
      </svg>
    </span>
  )
}
