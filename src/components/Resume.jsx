const Resume = () => {
  const handleDownload = () => {
    // Link to the actual PDF resume
    const link = document.createElement('a')
    link.href = '/Karan Resume.pdf'
    link.download = 'Karan Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="resume" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Resume / CV</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-12 text-lg">
            Download my resume to learn more about my experience and
            qualifications
          </p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-6xl mb-6">📄</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to download?
            </h3>
            <p className="text-gray-600 mb-8">
              Get a copy of my resume in PDF format
            </p>
            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download Resume</span>
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="font-bold text-gray-800 mb-2">Experience</h4>
              <p className="text-gray-600 text-sm">
                0–1 year of hands-on development experience
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="font-bold text-gray-800 mb-2">Education</h4>
              <p className="text-gray-600 text-sm">
                Computer Science degree from top university
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="text-3xl mb-3">🏅</div>
              <h4 className="font-bold text-gray-800 mb-2">Certifications</h4>
              <p className="text-gray-600 text-sm">
                Multiple industry-recognized certifications
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

