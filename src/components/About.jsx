import profileSrc from '../images/89.jpg'

const About = () => {

  return (
    <section
      id="about"
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative">
              {/* Animated gradient border ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 animate-spin-slow" style={{ animationDuration: '10s' }}></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-50 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '8s' }}></div>
              
              {/* Image container with gradient overlay */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={profileSrc}
                  alt="About Me"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.classList.add('hidden')
                    e.currentTarget.nextElementSibling?.classList.remove('hidden')
                  }}
                />
                {/* Fallback gradient background */}
                <div className="hidden w-full h-full flex items-center justify-center text-8xl bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200">
                  👨‍💻
                </div>
              </div>
              
              {/* Decorative gradient elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full opacity-30 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* About Text Section */}
          <div className="order-1 md:order-2">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  I'm a passionate developer with a love for creating elegant
                  solutions to complex problems. My journey in tech started with
                  curiosity and has evolved into a career dedicated to building
                  exceptional digital experiences.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I believe in writing clean, maintainable code and constantly
                  learning to stay ahead in this ever-evolving field.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  🎯 Mission
                </h3>
                <p className="text-gray-700">
                  To build innovative solutions that make a positive impact
                  through code.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  💡 Philosophy
                </h3>
                <p className="text-gray-700">
                  Code is poetry, and every project is a canvas for creativity.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-blue-50 p-6 rounded-lg border-l-4 border-pink-600 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  🚀 Approach
                </h3>
                <p className="text-gray-700">
                  User-centric design, clean architecture, and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

