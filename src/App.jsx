import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import Teaching from './pages/Teaching'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <div className="noise-overlay" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="research" element={<Research />} />
          <Route path="teaching" element={<Teaching />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}
