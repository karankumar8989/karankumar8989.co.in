import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // EmailJS configuration - Replace these with your EmailJS credentials
  // Get them from https://www.emailjs.com/ (free tier available)
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY'

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Check if EmailJS is configured
      if (
        EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
        EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
        EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
      ) {
        // Fallback: Use mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`)
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )
        window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitting(false)
        return
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_PUBLIC_KEY)

      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Karan', // Your name
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      name: 'Email',
      value: 'your.email@example.com',
      icon: '📧',
      link: 'mailto:your.email@example.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'WhatsApp',
      value: '+1 234 567 8900',
      icon: '💬',
      link: 'https://wa.me/12345678900',
      color: 'from-green-500 to-green-600',
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      icon: '💼',
      link: 'https://linkedin.com/in/yourprofile',
      color: 'from-blue-600 to-blue-700',
    },
    {
      name: 'GitHub',
      value: 'github.com/yourusername',
      icon: '🐙',
      link: 'https://github.com/yourusername',
      color: 'from-gray-700 to-gray-800',
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 mt-4 text-lg">
            I'm always open to discussing new projects and opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="flex items-center space-x-4 relative z-10">
                  <div
                    className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    {method.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-gradient transition-colors duration-300">
                      {method.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{method.value}</p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              <span className="text-gradient">Send me a message</span>
            </h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl animate-scale-in">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-green-800 font-semibold">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl animate-scale-in">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-red-800 font-semibold">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again or contact me directly via email.</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-gray-300 ${
                    errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your name"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-gray-300 ${
                    errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="your.email@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all hover:border-gray-300 resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Your message here..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 animate-slide-up">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform relative overflow-hidden ${
                  isSubmitting
                    ? 'opacity-75 cursor-not-allowed'
                    : 'hover:scale-105 hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? (
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

