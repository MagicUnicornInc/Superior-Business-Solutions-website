import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import Home from './pages/Home'
    import About from './pages/About'
    import Services from './pages/Services'
    import Contact from './pages/Contact'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      return (
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      )
    }

    export default App
