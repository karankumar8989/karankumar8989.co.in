import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    // Add smooth scroll behavior
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        const targetId = link.getAttribute('href')
        if (targetId === '#') return

        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          const offset = 80 // Height of fixed navbar
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            offset

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          })
        }
      })
    })
  }, [])

  return (
    <div className="App relative">
      {/* Global animated background shared across all sections */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute -top-16 -left-10 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-float"></div>
        <div className="absolute top-40 -right-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-24 left-1/4 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply blur-2xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute -bottom-16 right-1/3 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply blur-2xl opacity-10 animate-float" style={{ animationDelay: '6s' }}></div>
      </div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

