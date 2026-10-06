/**
 * Yıldız Kurs Başarı Modeli — öğrencinin yıl boyunca geçtiği sekiz adım ve
 * öğretmenlere yönelik Yıldız / Mega Günü. Renkler afişlerdeki rozetlerden alındı.
 * `poster` metinleri afişlerdeki ifadelerle birebir aynıdır.
 */

export const MODEL_STEPS = [
  {
    slug: 'focus',
    name: 'Yıldız Focus',
    color: '#8dc63f',
    when: 'Eğitim başlamadan önce',
    title: ['Sınava hazır', 'mısın?'],
    poster: 'Her öğrencimizin kurs eğitimi başlamadan önce Yıldız Hazır Bulunuşluk Sınavı yapılır.',
    text:
      'Yolculuk, öğrencinin bugün nerede durduğunu doğru görmekle başlar. Hazır Bulunuşluk Sınavı; önceki yıllardan taşınan eksikleri, güçlü olunan konuları ve çalışma alışkanlıklarını ortaya koyar. Sınıf yerleşimi ve ilk haftaların ders planı bu tabloya göre kurulur.',
    points: ['Başlangıç seviyesinin tespiti', 'Konu bazlı eksik haritası', 'Doğru sınıf ve program yerleşimi'],
    image: '/img/model/focus.jpg',
  },
  {
    slug: 'analiz',
    name: 'Yıldız Analiz',
    color: '#d6409a',
    when: 'Yıl boyunca',
    title: ['Yeteneklerimizi', 'ön plana çıkarıyoruz.'],
    poster: 'Her öğrencimizin kişisel yetenek ve başarılarının kapsamlı bir analizi yapılmaktadır.',
    text:
      'Her öğrenci farklı bir yıldızdır. Akademik sonuçların yanında ilgi alanları, öğrenme stili ve güçlü yönler birlikte değerlendirilir. Bu analiz, rehberlik servisinin ve danışman öğretmenin öğrenciye özel yol haritasının temelini oluşturur.',
    points: ['Kişisel yetenek profili', 'Öğrenme stiline uygun çalışma planı', 'Danışman öğretmenle düzenli değerlendirme'],
    image: '/img/model/analiz.jpg',
  },
  {
    slug: 'dikkat',
    name: 'Yıldız Dikkat',
    color: '#2e7d32',
    when: 'Her derste',
    title: ['Dikkatle', 'öğretiyoruz.'],
    poster: 'Yıldız Kurs başarı modelinde dikkat başlı başına ele alınması gereken bir konu olarak konumlandırılır.',
    text:
      'Bilgiyi bilmek kadar sınav anında doğru kullanabilmek de önemlidir. Dikkat; ders içi yöntemlerden soru çözüm tekniklerine, süre yönetiminden dikkatsizlik kaynaklı hataların takibine kadar ayrı bir başlık olarak çalışılır.',
    points: ['Dikkat ve odak çalışmaları', 'Dikkatsizlik hatalarının ayrı takibi', 'Süre ve sınav yönetimi'],
    image: '/img/model/dikkat.jpg',
  },
  {
    slug: '360',
    name: 'Yıldız 360',
    color: '#2e3192',
    when: 'Dönem boyunca',
    title: ['Her açıdan', 'ölçme.'],
    poster:
      'Her öğrencimiz Yıldız kurs yayınları dışında kalan çok çeşitli yayın ve materyallerden ölçme ve değerlendirmeye tabi tutulur.',
    text:
      'Tek bir kaynağa alışan öğrenci, sınavda farklı bir soru tarzıyla karşılaştığında zorlanabilir. Yıldız 360 ile öğrenciler, kurs yayınlarımızın yanı sıra farklı yayınevlerinin soru ve denemeleriyle de ölçülür; böylece her soru tipine hazır hâle gelir.',
    points: ['Farklı yayınlardan denemeler', 'Geniş soru tipi deneyimi', 'Kaynaktan bağımsız gerçek seviye ölçümü'],
    image: '/img/model/360.jpg',
  },
  {
    slug: 'full',
    name: 'Yıldız Full',
    color: '#f0891a',
    when: 'Eğitim yılının tamamı',
    title: ['Yıl boyu', 'tam program.'],
    poster: 'Yıldız Kurs Başarı Modelinde yıl boyunca yapılan bütün çalışmaların yer aldığı adımdır.',
    text:
      'Dersler, etütler, soru çözüm saatleri, deneme kulübü ve rehberlik görüşmeleri; tamamı tek bir planın parçasıdır. Yıldız Full, bu çalışmaları birbirine bağlayan ve öğrencinin yıl boyunca istikrarla ilerlemesini sağlayan omurgadır.',
    points: ['Ders, etüt ve soru çözüm bütünlüğü', 'Düzenli deneme takvimi', 'Veliyle sürekli iletişim'],
    image: '/img/model/full.jpg',
  },
  {
    slug: 'total',
    name: 'Yıldız Total',
    color: '#e2541e',
    when: 'Mayıs ayı ortası',
    title: ['Kazanım ve Yanlış', 'Kitapçığı.'],
    poster:
      'Yıldız Eğitim Kurumları’nda yıl boyunca süren çalışmalar sonucunda öğrencimize Mayıs ayı ortasında “Kazanım ve Yanlış Kitapçığı” verilir.',
    text:
      'Sınava son haftalarda öğrencinin elinde, kendi yıl boyu yaptığı yanlışlardan ve eksik kazanımlarından derlenmiş, yalnızca ona ait bir tekrar kitabı olur. Son düzlükte zaman, öğrencinin gerçekten ihtiyaç duyduğu konulara harcanır.',
    points: ['Kişiye özel tekrar kitapçığı', 'Yıl boyu yanlışların derlemesi', 'Son dönem için odaklı çalışma'],
    image: '/img/model/total.jpg',
  },
  {
    slug: 'university',
    name: 'Yıldız University',
    color: '#8f9aa8',
    when: 'Tercih dönemi',
    title: ['Doğru üniversite,', 'doğru bölüm.'],
    poster:
      'Öğrencilerimizin kendilerine en uygun üniversite ve bölümü bulma olanağını elde edecekleri kapsamlı bir mesleki rehberlik sürecidir.',
    text:
      'Sınav başarısı, doğru tercihle anlam kazanır. Rehberlik servisimiz; ilgi ve yetenek değerlendirmeleri, meslek tanıtımları ve birebir görüşmelerle öğrencinin ve ailenin tercih sürecine eşlik eder.',
    points: ['Mesleki rehberlik görüşmeleri', 'İlgi ve yetenek değerlendirmesi', 'Tercih danışmanlığı'],
    image: '/img/model/university.jpg',
  },
  {
    slug: 'global',
    name: 'Yıldız Global',
    color: '#7b3fa0',
    when: 'Yurt dışı hedefleyenlere',
    title: ['Hedef', 'dünya.'],
    poster:
      'Yurtdışında eğitim görmek isteyen öğrencilerin hangi ülke, hangi üniversite ve hangi bölümde okumasına karar verilen Yurtdışı Eğitim Danışmanlık sürecidir.',
    text:
      'Yurt dışında okumak isteyen öğrenciler için ülke, üniversite ve bölüm seçimi; öğrencinin akademik profili ve hedefleriyle birlikte planlanır. Süreç, doğru kararın verilmesine kadar danışmanlarımızla birlikte yürütülür.',
    points: ['Ülke ve üniversite seçimi', 'Bölüm ve kariyer planlaması', 'Yurt dışı eğitim danışmanlığı'],
    image: '/img/model/global.jpg',
  },
]

export const MEGA_DAY = {
  name: 'Yıldız / Mega Günü',
  when: 'Her ayın 1. ve 15. günü',
  poster: 'Türkiye’nin uzman eğitimcileri öğretmenlerimiz ve yöneticilerimiz için eğitim verecektir.',
  text:
    'Öğrencinin başarısı, öğretmeninin gelişimiyle başlar. Ayda iki kez düzenlenen Mega Günleri’nde öğretmen ve yöneticilerimiz, alanında uzman eğitimcilerle bir araya gelerek yöntem, ölçme-değerlendirme ve rehberlik üzerine çalışır.',
  image: '/img/model/mega.jpg',
}
