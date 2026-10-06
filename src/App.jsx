import { Link, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import School from './pages/School'
import { CourseDetail, Courses } from './pages/Courses'
import Contact from './pages/Contact'
import Model from './pages/Model'

function NotFound() {
  return (
    <section className="notfound">
      <p className="eyebrow">404</p>
      <h1>Bu yıldız henüz <em>parlamadı.</em></h1>
      <Link to="/" className="btn btn--ink">Ana sayfaya dön</Link>
    </section>
  )
}

/** Tarayıcı (main.jsx) ve prerender (entry-server.jsx) aynı rota ağacını kullanır. */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="hakkimizda" element={<About />} />
        <Route path="okul" element={<School />} />
        <Route path="kurslar" element={<Courses />} />
        <Route path="kurslar/:slug" element={<CourseDetail />} />
        <Route path="basari-modeli" element={<Model />} />
        <Route path="iletisim" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
