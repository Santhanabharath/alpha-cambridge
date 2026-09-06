import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SlideProvider } from './context/SlideContext'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import CambridgeExams from './pages/CambridgeExams'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter>
      <SlideProvider>
        <div className="page-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/"                element={<Home />} />
              <Route path="/about"           element={<About />} />
              <Route path="/cambridge-exams" element={<CambridgeExams />} />
              <Route path="/services"        element={<Services />} />
              <Route path="/contact"         element={<Contact />} />
            </Routes>
          </main>
        </div>
      </SlideProvider>
    </BrowserRouter>
  )
}
