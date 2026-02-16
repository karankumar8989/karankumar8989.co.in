const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: [
        { name: 'HTML', level: 95, color: 'from-orange-500 to-orange-600' },
        { name: 'CSS / SCSS', level: 92, color: 'from-pink-500 to-rose-600' },
        { name: 'JavaScript', level: 88, color: 'from-yellow-500 to-yellow-600' },
        { name: 'React', level: 85, color: 'from-blue-500 to-blue-600' },
        { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-cyan-600' },
        { name: 'Responsive UI', level: 90, color: 'from-indigo-500 to-indigo-600' },
      ],
    },
    {
      title: 'APIs & Integrations',
      icon: '🔗',
      skills: [
        { name: 'Gemini API (Chatbot)', level: 80, color: 'from-purple-500 to-purple-600' },
        { name: 'Apple Music API', level: 75, color: 'from-red-500 to-pink-600' },
        { name: 'REST APIs', level: 80, color: 'from-green-500 to-emerald-600' },
      ],
    },
    {
      title: 'Backend (Learning Focus)',
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 65, color: 'from-green-500 to-green-600' },
        { name: 'Express', level: 60, color: 'from-gray-500 to-gray-600' },
        { name: 'MongoDB', level: 55, color: 'from-emerald-500 to-emerald-600' },
      ],
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 85, color: 'from-red-500 to-red-600' },
        { name: 'Vite', level: 85, color: 'from-purple-500 to-purple-600' },
        { name: 'Figma', level: 75, color: 'from-pink-500 to-purple-600' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-center text-gray-800 mb-6 group-hover:text-gradient transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="transform hover:scale-105 transition-transform duration-200"
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden shadow-inner">
                        <div
                          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{ width: `${skill.level}%` }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

