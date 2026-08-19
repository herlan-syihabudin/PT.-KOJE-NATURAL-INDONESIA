'use client'

import { useState } from 'react'
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
  HiMap,
  HiDocumentText,
} from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

const contactInfo = [
  {
    icon: HiPhone,
    label: 'Phone',
    value: '+62 812 3456 7890',
    href: 'tel:+6281234567890',
    description: 'Monday – Friday, 08:00 – 17:00 WIB',
  },
  {
    icon: HiMail,
    label: 'Email',
    value: 'info@kojenatural.com',
    href: 'mailto:info@kojenatural.com',
    description: 'Business inquiries and procurement requests',
  },
  {
    icon: HiLocationMarker,
    label: 'Office',
    value: 'Jakarta, Indonesia',
    href: '#location',
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    setIsSubmitting(true)

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
      <section className="bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Contact & Procurement
              </span>

              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Connect With <span className="text-primary">KOJE</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl">
              Connect with PT KOJE Natural Indonesia for industrial procurement,
              supply chain support, technical sourcing, safety solutions,
              project logistics, and manufacturing requirements.
            </p>

            <div className="flex flex-wrap gap-4 mt-7">

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#20BD5A] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/20"
              >
                <FaWhatsapp className="text-base" />
                Chat via WhatsApp
              </a>

              <a
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-all hover:-translate-y-0.5"
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

            {/* =====================================================
                CONTACT FORM
            ===================================================== */}
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
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-primary">*</span>
                      </label>

                      <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                      >
                        Business Email <span className="text-primary">*</span>
                      </label>

                      <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="name@company.com"
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* PHONE + COMPANY */}
                  <div className="grid sm:grid-cols-2 gap-6">

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                      >
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                      >
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                  </div>

                  {/* SUBJECT */}
                  <div>

                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Inquiry Type <span className="text-primary">*</span>
                    </label>

                    <div className="relative">

                      <HiChat className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />

                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all appearance-none"
                      >
                        <option value="">
                          Select inquiry type
                        </option>

                        <option value="procurement">
                          Industrial Procurement
                        </option>

                        <option value="industrial-supply">
                          Industrial Supply
                        </option>

                        <option value="engineering">
                          Engineering & Technical Support
                        </option>

                        <option value="safety">
                          Safety & Compliance
                        </option>

                        <option value="logistics">
                          Project & Logistics
                        </option>

                        <option value="manufacturing">
                          Manufacturing & FMCG
                        </option>

                        <option value="partnership">
                          Partnership Opportunity
                        </option>

                        <option value="general">
                          General Inquiry
                        </option>

                      </select>

                    </div>
                  </div>

                  {/* MESSAGE */}
                  <div>

                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5"
                    >
                      Requirements / Message{' '}
                      <span className="text-primary">*</span>
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Describe your requirements, specifications, quantity, delivery location, or project details..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />

                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/20 ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed'
                        : 'hover:bg-primary-dark'
                    }`}
                  >

                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />

                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
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
                        Inquiry submitted successfully. Our team will contact
                        you shortly.
                      </span>
                    </motion.div>
                  )}

                </form>
              </motion.div>
            </div>

            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <div className="lg:col-span-2">

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
              >

                <div className="flex items-center gap-3 mb-7">

                  <span className="w-8 h-px bg-gray-300" />

                  <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                    Contact Information
                  </span>

                </div>

                <div className="space-y-4">

                  {contactInfo.map((info, idx) => {
                    const Icon = info.icon

                    return (
                      <motion.a
                        key={idx}
                        href={info.href}
                        initial={{ opacity: 0, x: -15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: idx * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="group flex items-start gap-4 p-5 border border-gray-100 hover:border-gray-300 bg-white hover:-translate-y-0.5 transition-all duration-300"
                      >

                        <div className="mt-0.5">
                          <Icon className="text-gray-400 group-hover:text-gray-700 transition text-lg" />
                        </div>

                        <div className="flex-1">

                          <p className="text-xs text-gray-400 uppercase tracking-wider">
                            {info.label}
                          </p>

                          <p className="text-sm font-medium text-gray-900">
                            {info.value}
                          </p>

                          <p className="text-xs text-gray-400 mt-0.5">
                            {info.description}
                          </p>

                        </div>

                        <HiChevronRight className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />

                      </motion.a>
                    )
                  })}

                </div>

                {/* SOCIAL */}
                <div className="mt-8 pt-8 border-t border-gray-100">

                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">
                    Follow KOJE
                  </p>

                  <div className="flex gap-3">

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>

                    <a
                      href="#"
                      aria-label="Instagram"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#E4405F] to-[#F56040] hover:text-white hover:border-[#E4405F] transition-all duration-300 group"
                    >
                      <FaInstagram className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>

                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
                    >
                      <FaWhatsapp className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>

                  </div>
                </div>

                {/* RFQ */}
                <div className="mt-8 border border-gray-100 bg-gray-50 p-6">

                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.2em]">

                    <HiDocumentText className="w-4 h-4" />

                    Procurement Inquiry

                  </div>

                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    Need a quotation or sourcing support? Send your
                    requirements to our procurement team.
                  </p>

                  <Link
                    href="/capabilities/industrial-supply"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
                  >
                    Explore Procurement Services
                    <HiChevronRight className="w-4 h-4" />
                  </Link>

                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          LOCATION
      ========================================================= */}
      <section
        id="location"
        className="bg-gray-50 py-16 border-t border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >

            <div className="flex items-center justify-center gap-3 mb-3">

              <span className="w-8 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Our Location
              </span>

              <span className="w-8 h-px bg-gray-300" />

            </div>

            <h2 className="text-2xl font-light text-gray-900">
              Find <span className="text-primary">KOJE</span>
            </h2>

            <p className="text-sm text-gray-500 mt-3">
              Jakarta, Indonesia
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 overflow-hidden"
          >

            <div className="aspect-[16/6] bg-gray-200 relative">

              <iframe
                src="GANTI_DENGAN_GOOGLE_MAPS_EMBED_URL"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PT KOJE Natural Indonesia Location"
              />

            </div>

            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">

              <div className="flex items-center gap-3">

                <HiLocationMarker className="text-primary text-lg" />

                <div>

                  <p className="text-sm font-medium text-gray-900">
                    PT KOJE Natural Indonesia
                  </p>

                  <p className="text-xs text-gray-500">
                    Jakarta, Indonesia
                  </p>

                </div>

              </div>

              <a
                href="GANTI_DENGAN_GOOGLE_MAPS_URL"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
              >
                Open in Google Maps
                <HiChevronRight className="text-sm" />
              </a>

            </div>

          </motion.div>
        </div>
      </section>
    </>
  )
}
