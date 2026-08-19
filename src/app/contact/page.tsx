'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiClock,
  HiChevronRight,
  HiCheckCircle,
  HiOfficeBuilding,
  HiUser,
  HiChat,
  HiDocumentText,
  HiExclamationCircle,
} from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

// Environment variables
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '6281234567890'
const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE || '+62 812 3456 7890'
const COMPANY_EMAIL = process.env.NEXT_PUBLIC_EMAIL || 'info@kojenatural.com'
const COMPANY_ADDRESS = process.env.NEXT_PUBLIC_ADDRESS || 'Jakarta, Indonesia'
const GOOGLE_MAPS_EMBED = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260485283!2d106.827561!3d-6.208764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6c2b1e1a0e1%3A0x1234567890abcdef!2sJakarta!5e0!3m2!1sen!2sid!4v1234567890'
const GOOGLE_MAPS_URL = process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL || 'https://maps.google.com/maps?q=Jakarta+Indonesia'

const contactInfo = [
  {
    icon: HiPhone,
    label: 'Phone',
    value: PHONE_NUMBER,
    href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}`,
    description: 'Monday – Friday, 08:00 – 17:00 WIB',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: COMPANY_EMAIL,
    href: `mailto:${COMPANY_EMAIL}`,
    description: 'Business inquiries and procurement requests',
  },
  {
    icon: HiLocationMarker,
    label: 'Office',
    value: COMPANY_ADDRESS,
    href: GOOGLE_MAPS_URL,
    description: 'Serving clients across Indonesia',
  },
  {
    icon: HiClock,
    label: 'Business Hours',
    value: '08:00 – 17:00 WIB',
    href: '#',
    description: 'Monday – Friday',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  // Auto-focus ke input pertama
  useEffect(() => {
    document.getElementById('name')?.focus()
  }, [])

  const validateField = (name: string, value: string) => {
    const newErrors: Record<string, string> = {}
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else if (value.trim().length < 2) {
          newErrors.name = 'Name must be at least 2 characters'
        }
        break
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        }
        break
      case 'subject':
        if (!value) {
          newErrors.subject = 'Please select an inquiry type'
        }
        break
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required'
        } else if (value.trim().length < 10) {
          newErrors.message = 'Message must be at least 10 characters'
        }
        break
    }
    
    return newErrors
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Validate on change if touched
    if (touched[name]) {
      const fieldErrors = validateField(name, value)
      setErrors(prev => ({ ...prev, ...fieldErrors }))
    }
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    
    const fieldErrors = validateField(name, value)
    setErrors(prev => ({ ...prev, ...fieldErrors }))
  }

  const validateForm = () => {
    const allErrors: Record<string, string> = {}
    
    Object.keys(formData).forEach(key => {
      const fieldErrors = validateField(key, formData[key as keyof typeof formData])
      Object.assign(allErrors, fieldErrors)
    })
    
    setErrors(allErrors)
    return Object.keys(allErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      // Scroll ke error pertama
      const firstError = document.querySelector('.error-message')
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setIsSubmitting(true)

    // Simulasi API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      })
      
      setTouched({})
      setErrors({})

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1200)
  }

  return (
    <>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-white pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Contact</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Contact & Procurement
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Connect With <span className="text-[#0FA3A8]">KOJE</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              Connect with PT KOJE Natural Indonesia for industrial procurement,
              supply chain support, technical sourcing, safety solutions,
              project logistics, and manufacturing requirements.
            </p>

            <div className="flex flex-wrap gap-4 mt-7">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#20BD5A] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20 rounded-lg"
              >
                <FaWhatsapp className="text-base" />
                Chat via WhatsApp
              </a>

              <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-all hover:-translate-y-0.5 rounded-lg"
              >
                <HiPhone className="text-base" />
                Call Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* CONTACT FORM */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <span className="w-8 h-px bg-gray-300" />
                  <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                    Business Inquiry
                  </span>
                </div>

                <h2 className="text-2xl font-light text-gray-900">
                  Tell Us About Your Requirements
                </h2>

                <p className="text-sm text-gray-500 mt-2 mb-7 max-w-xl leading-relaxed">
                  Share your procurement, supply, engineering, logistics, or
                  manufacturing requirements and our team will review your
                  inquiry.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* NAME + EMAIL */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          placeholder="Your full name"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.name && touched.name
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                              : 'border-gray-200 focus:border-[#0FA3A8] focus:ring-[#0FA3A8]/20'
                          }`}
                        />
                      </div>
                      {errors.name && touched.name && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                          <HiExclamationCircle />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Business Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required
                          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                          title="Please enter a valid email address"
                          placeholder="name@company.com"
                          className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all ${
                            errors.email && touched.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                              : 'border-gray-200 focus:border-[#0FA3A8] focus:ring-[#0FA3A8]/20'
                          }`}
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                          <HiExclamationCircle />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* PHONE + COMPANY */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <div className="relative">
                        <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+62 812 3456 7890"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#0FA3A8] focus:ring-2 focus:ring-[#0FA3A8]/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Company
                      </label>
                      <div className="relative">
                        <HiOfficeBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company name"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-[#0FA3A8] focus:ring-2 focus:ring-[#0FA3A8]/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                      Inquiry Type <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <HiChat className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all appearance-none ${
                          errors.subject && touched.subject
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-[#0FA3A8] focus:ring-[#0FA3A8]/20'
                        }`}
                      >
                        <option value="">Select inquiry type</option>
                        <option value="procurement">Industrial Procurement</option>
                        <option value="industrial-supply">Industrial Supply</option>
                        <option value="engineering">Engineering & Technical Support</option>
                        <option value="safety">Safety & Compliance</option>
                        <option value="logistics">Project & Logistics</option>
                        <option value="manufacturing">Manufacturing & FMCG</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                    {errors.subject && touched.subject && (
                      <p className="flex items-center gap-1 text-red-500 text-xs mt-1.5">
                        <HiExclamationCircle />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                      Requirements / Message <span className="text-red-500">*</span>
                    </label>
                    <div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                        rows={6}
                        maxLength={1000}
                        placeholder="Describe your requirements, specifications, quantity, delivery location, or project details..."
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all resize-none ${
                          errors.message && touched.message
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : 'border-gray-200 focus:border-[#0FA3A8] focus:ring-[#0FA3A8]/20'
                        }`}
                      />
                      <div className="flex justify-between text-xs mt-1.5">
                        <div>
                          {errors.message && touched.message && (
                            <p className="flex items-center gap-1 text-red-500">
                              <HiExclamationCircle />
                              {errors.message}
                            </p>
                          )}
                        </div>
                        <span className={`${formData.message.length > 900 ? 'text-orange-500' : 'text-gray-400'}`}>
                          {formData.message.length}/1000
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#0FA3A8] text-white text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#0FA3A8]/20 rounded-lg ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-[#0C8A8E]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <HiChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* SUCCESS */}
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3"
                    >
                      <HiCheckCircle className="text-lg" />
                      <span className="text-sm">
                        Inquiry submitted successfully. Our team will contact you shortly.
                      </span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* CONTACT INFORMATION - SAMA */}
            {/* ... (contact info cards tetap sama) ... */}
          </div>
        </div>
      </section>

      {/* LOCATION SECTION - SAMA tapi dengan embed URL yang fixed */}
      {/* ... */}
    </>
  )
}
