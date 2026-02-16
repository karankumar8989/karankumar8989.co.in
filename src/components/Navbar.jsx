import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-2xl md:text-3xl font-bold text-gradient hover:scale-110 transition-transform duration-300 relative group select-none"
          >
            <span className="relative z-10">Portfolio</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 relative group py-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 group-hover:w-full transition-all duration-300 rounded-full"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 -z-10"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none rounded-lg hover:bg-blue-50 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 transition-transform duration-300"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-2 animate-slide-up">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-lg transition-all duration-300 font-medium hover:translate-x-2"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

