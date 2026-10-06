import { Link } from 'react-router-dom'
import { Logo, StarMark } from '../components/Brand'
import { PageHero } from '../components/Layout'
import { ArrowUpRight } from '../components/Icons'
import { EnrollSection, Manifesto, SectionHead, Stats } from '../components/Sections'
import { COURSES, SCHOOL } from '../data/site'

const PRINCIPLES = [
  ['Öğrenci önce gelir', 'Her karar, önce sınıftaki öğrenciye ne kazandıracağı sorusuyla başlar.'],
  ['Öğretmen değerlidir', 'İyi eğitim iyi öğretmenle olur. Kadromuzu seçerken, yetiştirirken ve korurken bunu unutmayız.'],
  ['Ölçülen gelişir', 'Formatif değerlendirme, deneme analizi ve bireysel takip; tahmine değil veriye dayanırız.'],
  ['Aile ortaktır', 'Veli, sürecin paydaşıdır. Şeffaf bilgi akışı, düzenli görüşme ve ebeveyn atölyeleri.'],
  ['Değerler bilgiyle yürür', 'Paylaşımcılık, dürüstlük, sorumluluk ve hoşgörü; akademik başarının ayrılmaz parçası.'],
  ['Gelenek, gelecekle', 'Yarım asırlık birikimi yapay zekâ destekli analiz ve çağdaş pedagojiyle buluştururuz.'],
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Biz Kimiz"
        title={<>Sadece <em>eğitim.</em></>}
        lead="Yıldız Eğitim Kurumları; öğretmen kökenli eğitimcilerin kurduğu, tek işi eğitim olan bir çatı markadır."
        image="/img/okul/ortaokul-ders.jpg"
      />

      <section className="section section--paper">
        <div className="container about-intro">
          <div data-reveal>
            <Logo stacked motto className="about-intro__logo" />
          </div>
          <div className="about-intro__text">
            <p className="about-intro__lead" data-reveal>
              Eğitim sektörü son yıllarda farklı sektörlerden gelen sermayeyle doldu. Biz o hikâyenin parçası değiliz.
            </p>
            <p data-reveal>
              Yönetim kurulumuzun tamamı, meslek hayatına öğretmen olarak başlamış eğitimcilerden oluşur. Bir sınıfın nasıl
              yönetildiğini, bir öğrencinin nasıl motive olduğunu, bir velinin neye ihtiyaç duyduğunu kitaptan değil
              deneyimden biliriz. Başka bir işimiz, başka bir gündemimiz yok.
            </p>
            <p data-reveal>
              Yarım asırlık birikimimizi bugün iki güçlü yapıda sürdürüyoruz: Türk Eğitim Derneği akreditasyonu ve danışmanlığıyla
              faaliyet gösteren <strong>Tarabya Yıldız Schools</strong> ve İstanbul’un beş noktasında öğrencileri LGS ile YKS’ye hazırlayan
              <strong> Yıldız Kursları</strong>.
            </p>
          </div>
        </div>
      </section>

      <Manifesto />
      <Stats dark />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="İlkelerimiz" title={<>Altı cümlelik <em>söz.</em></>} />
          <div className="principles">
            {PRINCIPLES.map(([t, d], i) => (
              <div className="principle" key={t} data-reveal style={{ '--d': `${(i % 3) * 100}ms` }}>
                <StarMark size={20} />
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <SectionHead eyebrow="Marka Mimarisi" title={<>Bir çatı, <em>altı kapı.</em></>} lead="Her kurum kendi kimliğiyle; hepsi aynı ilkeyle." />
          <div className="architecture" data-reveal>
            <div className="architecture__root">
              <StarMark size={44} />
              <span>Yıldız Eğitim Kurumları</span>
            </div>
            <div className="architecture__branches">
              <Link to="/okul" className="architecture__node architecture__node--school">
                <img src="/img/logo/tarabya-schools-navy.png" alt="" />
                <span>{SCHOOL.name}</span>
                <small>Okul · TED AD</small>
                <ArrowUpRight />
              </Link>
              {COURSES.map((c) => (
                <Link to={`/kurslar/${c.slug}`} key={c.slug} className="architecture__node">
                  <StarMark size={44} className="architecture__mark" />
                  <span>{c.name}</span>
                  <small>{c.focus}</small>
                  <ArrowUpRight />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EnrollSection />
    </>
  )
}
