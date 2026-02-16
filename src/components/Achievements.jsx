const Achievements = () => {
  const achievements = [
    {
      title: 'MERN Stack Certificate',
      issuer: 'Training Program',
      date: '2 months (training)',
      icon: '🎓',
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Frontend Development Experience',
      issuer: 'Projects: e‑commerce, music players, chatbots, more',
      date: 'Ongoing',
      icon: '🎨',
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Website Creation Certification',
      issuer: 'Web Development Certification',
      date: 'Completed',
      icon: '📜',
      color: 'from-indigo-500 to-violet-600',
    },
    {
      title: 'Backend Learning Journey',
      issuer: 'Focused on strengthening backend concepts',
      date: 'Currently learning',
      icon: '⚙️',
      color: 'from-amber-500 to-orange-600',
    },
  ]

  const stats = [
    { number: '7+', label: 'Projects Built', icon: '🚀' },
    { number: '2 months', label: 'Experience (Training)', icon: '⏱️' },
  ]

  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Certifications and milestones
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto place-items-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow w-full"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`bg-gradient-to-r ${achievement.color} w-16 h-16 rounded-lg flex items-center justify-center text-3xl flex-shrink-0`}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 mb-1">{achievement.issuer}</p>
                  <p className="text-sm text-gray-500">{achievement.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

