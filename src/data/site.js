/**
 * Yıldız Eğitim Kurumları — tüm marka, okul ve kurs verisi.
 * Sayfalar bu dosyadan beslenir; içerik güncellemeleri buradan yapılır.
 */

export const BRAND = {
  name: 'Yıldız Eğitim Kurumları',
  short: 'Yıldız',
  motto: 'Sadece Eğitim',
  launch: 'Efsane Geri Döndü',
  heritage: 'Eğitimde Yarım Asırlık Tecrübe',
  phone: '0212 286 20 20',
  phoneHref: '+902122862020',
  // Ön kayıt formu ve WhatsApp butonu bu numaraya yazar (ülke koduyla, + olmadan).
  // TODO: kurumun WhatsApp Business numarasıyla değiştirin.
  whatsapp: '902122862020',
  instagram: 'https://www.instagram.com/tarabyaschools',
  youtube: 'https://www.youtube.com/@abdEgitimKurumlari',
}

export const STATS = [
  { value: 50, suffix: '', label: 'Yıllık eğitim birikimi', note: 'Yarım asır', to: '/hakkimizda' },
  { value: 1, suffix: '', label: 'TED AD akreditasyonlu okul', note: 'Tarabya', to: '/okul' },
  { value: 5, suffix: '', label: 'Kurs merkezi', note: 'İstanbul genelinde', to: '/kurslar' },
  { value: 94, suffix: '%', label: 'Sınav başarı oranı', note: 'LGS & YKS', to: '/kurslar/tarabya#basarilar' },
]

export const SCHOOL = {
  slug: 'tarabya-yildiz-schools',
  name: 'Tarabya Yıldız Schools',
  legal: 'Tarabya Yıldız Koleji | TED-AD',
  tagline: 'Sınıfın Ötesinde Bir Eğitim',
  motto: 'Geleceğe Yön Veren Çağdaş Eğitimle Hayat Boyu Başarıya Birlikte!',
  intro:
    'TED Danışmanlığı rehberliğinde Tarabya Yıldız Koleji, her öğrencinin kendi yıldızını keşfedeceği bir öğrenme yolculuğu sunar.',
  ataturk:
    '“Eğitimdir ki, bir milleti ya özgür, bağımsız, şanlı bir topluluk halinde yaşatır; ya da esaret ve sefalete terk eder.”',
  address: 'Ferahevler Mahallesi Nuri Paşa Caddesi No:113/1, Sarıyer / İstanbul',
  phones: [
    { label: '0212 286 20 20', href: '+902122862020' },
    { label: '0212 286 20 30', href: '+902122862030' },
  ],
  instagram: 'https://www.instagram.com/tarabyaschools',
  instagramHandle: '@tarabyaschools',
  map: 'https://maps.google.com/maps?q=Ferahevler+Mahallesi+Nuri+Pa%C5%9Fa+Caddesi+No%3A113%2F1+Sar%C4%B1yer&output=embed',
  levels: [
    {
      key: 'okul-oncesi',
      title: 'Okul Öncesi',
      en: 'Early Years',
      text:
        'Montessori, Reggio Emilia, High Scope ve Çoklu Zeka Kuramı’ndan beslenen öğrenme ortamları; çocuğun merak, ifade ve keşif yolculuğunu destekler. Hafta içi 08:30 – 16:00, günlük etkinliklerin yarısı İngilizce.',
      points: ['Sanat & Mutfak Atölyesi', 'Doğa ve Ekoloji', 'Drama ve Sahne Sanatları', 'Bilim & Teknoloji'],
    },
    {
      key: 'ilkokul',
      title: 'İlkokul',
      en: 'Primary School',
      text:
        'MEB müfredatı; disiplinlerarası projeler, uluslararası standartlarda İngilizce, bilim uygulamaları, sanat ve spor ile zenginleştirilir. Sınıf mevcudu en fazla 18 öğrenci.',
      points: ['Maks. 18 kişilik sınıflar', 'Günlük İngilizce', 'Birebir etüt', 'Her öğrenciye sanat + spor'],
    },
    {
      key: 'ortaokul',
      title: 'Ortaokul',
      en: 'Middle School',
      text:
        'Proje bazlı öğrenme, eleştirel düşünme, ileri düzey İngilizce ve sosyal sorumluluk. LGS sürecinde kişiye özel akademik yol haritası aileyle birlikte kurgulanır.',
      points: ['CEFR B1–B2 İngilizce', 'LGS hazırlık & deneme', 'Proje tabanlı öğrenme', 'Sosyal sorumluluk'],
    },
  ],
  pillars: [
    {
      title: 'Öğrenci Merkezli Yaklaşım',
      text: 'Her bireyin öğrenme tarzına uygun, kişiselleştirilmiş eğitim planları.',
    },
    {
      title: 'Çift Dilli Eğitim',
      text: 'Bilingual Education Program: Türkçe ve İngilizce, ana dili İngilizce öğretmenlerle tam gün, doğal ve tematik bir ortamda.',
    },
    {
      title: 'Uygulama Tabanlı Süreçler',
      text: 'Proje tabanlı öğrenme, atölyeler ve 21. yüzyıl becerileri; öğrenci bilgiyi yalnızca öğrenmez, üretir.',
    },
    {
      title: 'Tam Öğrenme Modeli',
      text: 'Düzenli formatif taramalar ve bireysel etüt programlarıyla öğrenme eksikleri hızla kapatılır.',
    },
  ],
  eca: ['Liderlik', 'Girişimcilik', 'Finansal Okuryazarlık', 'Yapay Zeka Okuryazarlığı', 'Topluluk Önünde Konuşma', 'Sosyal Farkındalık'],
  campus: [
    { title: 'Yarı Olimpik Yüzme Havuzu', text: 'Hijyen ve güvenlik standartlarında, su sporları için.' },
    { title: 'Kapalı Spor Salonu & Halı Saha', text: 'Beden eğitimi, kulüp çalışmaları ve takım sporları.' },
    { title: 'Laboratuvarlar', text: 'Fen, bilişim ve dil laboratuvarları; akıllı tahta ve dijital materyaller.' },
    { title: 'Sanat & Müzik Atölyeleri', text: 'Resim, heykel, seramik, müzik, dans ve drama.' },
    { title: 'Kütüphane & Etüt Alanları', text: 'Zengin kaynaklar ve sessiz çalışma alanları.' },
    { title: 'Peyzajlı Bahçe', text: 'Açık hava etkinlikleri ve dinlenme alanları.' },
  ],
  scholarship:
    'Akademik Başarı Bursu: 5, 6 ve 7. sınıflar için Akademik Değerlendirme Sınavı ve mülakat sonucunda %100’e varan burs imkânı.',
}

export const TED = {
  intro:
    'Okulumuz, Türk Eğitim Derneği akreditasyonu ve danışmanlığı kapsamında faaliyet göstermektedir. Veliler için bu; çocuklarının 98 yıllık köklü bir eğitim geleneğinin standartlarında, düzenli olarak denetlenen ve sürekli geliştirilen bir ortamda eğitim aldığının güvencesidir.',
  items: [
    { title: 'TED Akreditasyonu', text: 'Türk Eğitim Derneği akreditasyonu ve danışmanlığı kapsamında eğitim.' },
    { title: 'İnsan Kaynakları', text: 'Öğretmen alımları dâhil tüm İK süreçleri TED onayından geçer.' },
    { title: 'Eğitim Standartları', text: 'Müfredat, pedagoji ve ölçme-değerlendirme TED okullarıyla birebir örtüşür.' },
    { title: 'Periyodik Denetim', text: 'TED ekipleri Ankara’dan belirli aralıklarla sistematik denetim yapar.' },
    { title: 'Saha Gözlemleri', text: 'Öğretmenlerle birebir çalışma, sınıf içi gözlem ve özel eğitimler.' },
    { title: 'Sürdürülebilir Kalite', text: 'Geri bildirimler izlenir, gelişim sürekli takip edilir.' },
  ],
  steps: [
    { title: 'Durum Analizi', text: 'Akademik, yönetsel ve finansal yapı değerlendirilir.' },
    { title: 'Gelişim Planı', text: 'TED uzmanlarınca kuruma özel yol haritası çizilir.' },
    { title: 'Uygulama & Denetim', text: 'Periyodik ziyaretler, gözlemler ve öğretmen eğitimleri.' },
    { title: 'Sürekli Gelişim', text: 'Kalite standartları sürdürülebilir şekilde korunur.' },
  ],
}

/** Yıldız Eğitim Kurumları kursları — 5 lokasyon */
export const COURSES = [
  {
    slug: 'tarabya',
    district: 'Tarabya',
    county: 'Sarıyer',
    side: 'Avrupa Yakası · Boğaz',
    name: 'Tarabya Kursu',
    focus: 'LGS & YKS',
    grades: '5 – 12. Sınıf · Mezun',
    blurb: 'Tarabya’dan Türkiye’nin en nitelikli liselerine ve üniversitelerine. Okulumuzla aynı semtte, aynı disiplinle.',
    address: 'Ferahevler, Aydın Sokak No:13, 34457 Sarıyer / İstanbul',
    phones: [{ label: '0212 223 82 83', href: '+902122238283' }],
    email: 'tarabyaozelogretimkursu@abdkurumlari.com',
    instagram: 'https://www.instagram.com/tarabyafinalegitimkurumlari',
    instagramHandle: '@tarabyafinalegitimkurumlari',
    map: 'https://maps.google.com/maps?q=Ferahevler+Ayd%C4%B1n+Sokak+No%3A13+Sar%C4%B1yer&output=embed',
    programs: ['6. Sınıf', '7. Sınıf', '8. Sınıf', '8. Sınıf VIP', '10. Sınıf', '11. Sınıf', '12. Sınıf', 'Mezun', 'Deneme Kulübü', 'Özel Ders'],
    highlights: ['VIP sınıflar 6–10 öğrenci', 'Hafta sonu günde 4–6 ders', 'Yapay zekâ destekli sınav analizi', 'Bireysel danışman öğretmen'],
  },
  {
    slug: 'sirinevler',
    district: 'Şirinevler',
    county: 'Bahçelievler',
    side: 'Avrupa Yakası',
    name: 'Şirinevler Kursu',
    focus: 'YKS & LGS',
    grades: '5 – 12. Sınıf · Mezun · Açık Lise',
    blurb: 'Kişiye özel kitap, sıfır hata anlayışı ve Baykuş Kütüphanesi ile YKS’de kanıtlanmış başarı.',
    address: 'Hürriyet Mah., Mahmutbey Cad. No:5 – 5A, Bahçelievler / İstanbul',
    phones: [{ label: '0212 551 72 73', href: '+902125517273' }],
    email: 'sirinevlerfinalozelogretim@abdkurumlari.com',
    instagram: 'https://www.instagram.com/sirinevler.final',
    instagramHandle: '@sirinevler.final',
    map: 'https://maps.google.com/maps?q=Mahmutbey+Cad+No+5+Bah%C3%A7elievler&output=embed',
    programs: ['9. Sınıf', '10. Sınıf', '11. Sınıf', '12. Sınıf', '12. Sınıf VIP', 'Mezun', 'Mezun VIP', 'LGS (5–8. Sınıf)', 'Açık Lise', 'Deneme Kulübü', 'Özel Ders'],
    highlights: ['Kişiye özel kitap', 'Baykuş Kütüphanesi', 'Ayrı LGS birimi', 'Birebir öğrenci takibi'],
  },
  {
    slug: 'sefakoy',
    district: 'Sefaköy',
    county: 'Küçükçekmece',
    side: 'Avrupa Yakası',
    name: 'Sefaköy Kursu',
    focus: 'LGS & YKS',
    grades: '1 – 12. Sınıf · Mezun',
    blurb: 'İlkokuldan mezuniyete tek çatı. Sağlam temel, kanıtlanmış başarı.',
    address: 'Kartaltepe Mah. Halkalı Cad. 2. Orkide Sok. No:2, Küçükçekmece / İstanbul',
    phones: [{ label: '0212 601 15 00', href: '+902126011500' }],
    email: 'sefakoy.finalabd@gmail.com',
    instagram: 'https://www.instagram.com/sefakoy_final',
    instagramHandle: '@sefakoy_final',
    map: 'https://maps.google.com/maps?q=Orkide+Sok+No+2+Sefak%C3%B6y+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece&output=embed',
    programs: ['İlkokul Grubu (1–4)', '5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf', '8. Sınıf VIP', '9 – 12. Sınıf', 'Mezun', 'Deneme Kulübü', 'Özel Ders'],
    highlights: ['İlkokul grubu', '8. Sınıf VIP', 'Haftalık deneme', 'Rehberlik & psikolojik danışmanlık'],
  },
  {
    slug: 'halkali',
    district: 'Halkalı',
    county: 'Küçükçekmece',
    side: 'Avrupa Yakası',
    name: 'Halkalı Kursu',
    focus: 'LGS',
    grades: '5 – 8. Sınıf',
    blurb: 'LGS’ye odaklı butik yapı: haftalık deneme, net analizi ve yapay zekâ destekli yol haritası.',
    address: 'Halkalı Merkez, Fatih Cad. No:18 Kat:2, 34303 Küçükçekmece / İstanbul',
    phones: [
      { label: '0212 495 30 21', href: '+902124953021' },
      { label: '0545 349 17 74', href: '+905453491774' },
    ],
    email: 'halkalifinaletutmerkezi@abdkurumlari.com',
    instagram: 'https://www.instagram.com/halkalifinal_lgs',
    instagramHandle: '@halkalifinal_lgs',
    map: 'https://maps.google.com/maps?q=Fatih+Cad+No+18+Halkal%C4%B1+K%C3%BC%C3%A7%C3%BCk%C3%A7ekmece&output=embed',
    programs: ['5. Sınıf', '6. Sınıf', '7. Sınıf', '8. Sınıf & LGS', 'Deneme Kulübü', 'Özel Ders'],
    highlights: ['Hafta sonu +16 ders saati', 'Haftalık LGS denemesi', 'Yapay zekâ ile net analizi', 'Bireysel rehberlik'],
  },
  {
    slug: 'mimaroba',
    district: 'Mimaroba',
    county: 'Büyükçekmece',
    side: 'Avrupa Yakası · Marmara',
    name: 'Mimaroba Kursu',
    focus: 'YKS & LGS',
    grades: '6 – 12. Sınıf · Mezun · Açık Lise',
    blurb: 'Büyükçekmece’nin kalbinde VIP sınıflar ve eğitim koçluğuyla üniversite hedefine.',
    address: 'Sinanoba Mah., Mustafa Kemal Bulvarı, Melek Plaza No:52/1, Büyükçekmece / İstanbul',
    phones: [{ label: '0212 863 25 27', href: '+902128632527' }],
    email: null,
    instagram: 'https://www.instagram.com/mimarobafinalkurs',
    instagramHandle: '@mimarobafinalkurs',
    map: 'https://maps.google.com/maps?q=Mustafa+Kemal+Bulvar%C4%B1+Melek+Plaza+No+52+B%C3%BCy%C3%BCk%C3%A7ekmece&output=embed',
    programs: ['6. Sınıf', '7. Sınıf', '8. Sınıf', '8. Sınıf VIP', '10. Sınıf', '11. Sınıf', '12. Sınıf', '12. Sınıf VIP', 'Mezun', 'Mezun VIP', 'Açık Lise'],
    highlights: ['VIP sınıflar', 'Eğitim koçluğu', 'Psikolojik danışmanlık', 'Yapay zekâ destekli model'],
  },
]

export const COURSE_METHOD = [
  { title: 'Bireysel Danışman Öğretmen', text: 'Her öğrenciye atanan danışman öğretmen; veliyle düzenli iletişim.' },
  { title: 'Yapay Zekâ Destekli Analiz', text: 'Deneme sonuçları konu ve kazanım bazında analiz edilir, eksikler anında hedeflenir.' },
  { title: 'Deneme Kulübü', text: 'Gerçek sınav koşullarında haftalık denemeler ve net takibi.' },
  { title: 'VIP Sınıflar', text: '6–10 kişilik akıllı tahtalı sınıflar, birebir ders desteği.' },
  { title: 'Rehberlik & Psikolojik Destek', text: 'Stres ve kaygı yönetimi, bireysel çalışma programları.' },
  { title: 'Etüt & Soru Çözüm', text: 'Hafta içi ek dersler ve soru çözüm saatleri.' },
]

export const TESTIMONIALS = [
  { quote: '12. sınıf desteğiyle YKS’de hedeflediğim puana ulaştım. Öğretmenlerin gösterdiği özen gerçekten farklıydı.', name: 'Elif K.', role: 'Öğrenci · Şirinevler Kursu' },
  { quote: 'Oğlum burada mezun oldu ve Cerrahpaşa Tıp’a yerleşti. Bireysel ilgi bizi çok şaşırttı.', name: 'Yusuf E.', role: 'Veli · Şirinevler Kursu' },
  { quote: 'Deneme Kulübü sınav kaygımı tamamen bitirdi. Rehberlik servisi paha biçilemezdi.', name: 'Selin T.', role: 'Öğrenci · Yıldız Kursları' },
]

export const NAV = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hakkimizda', label: 'Biz Kimiz' },
  { to: '/okul', label: 'Okul' },
  { to: '/kurslar', label: 'Kurslar' },
  { to: '/iletisim', label: 'İletişim' },
]
