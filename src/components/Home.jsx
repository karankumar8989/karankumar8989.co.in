import profileSrc from '../images/89.jpg'

const Home = () => {

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20 relative overflow-hidden scroll-mt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Profile Image with Animated Gradient Border */}
          <div className="mb-8 animate-float">
            <div className="relative inline-block">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl animate-spin-slow"></div>
              {/* Second animated border for depth */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1 opacity-75 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '6s' }}></div>
              {/* Image container */}
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 border-4 border-white shadow-2xl">
                <img
                  src={profileSrc}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.classList.add('hidden')
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center text-7xl md:text-9xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
                  👨‍💻
                </div>
              </div>
              {/* Glowing effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-gradient text-shadow">Hi, I'm</span>
            <br />
            <span className="text-gray-800 text-shadow">Karan Kumar</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-slide-up font-light leading-relaxed">
            I build beautiful, functional, and user-friendly web experiences
            with modern technologies
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-xl font-semibold overflow-hidden hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 hover:border-purple-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get In Touch
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-16 flex justify-center">
            <a
              href="#about"
              className="animate-bounce text-gray-400 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

