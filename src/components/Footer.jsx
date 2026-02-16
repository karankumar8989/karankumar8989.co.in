const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-gradient-light">Portfolio</span>
          </h3>
          <p className="text-gray-300 mb-6">
            Built with React, Vite, and Tailwind CSS
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors hover:scale-110 transform"
            >
              Twitter
            </a>
          </div>
          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Karan Sood. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

