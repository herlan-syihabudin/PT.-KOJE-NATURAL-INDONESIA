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
  HiDocumentText
} from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
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
        message: ''
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: HiPhone,
      label: 'Telepon',
      value: '+62 812 3456 7890',
      href: 'tel:+6281234567890',
      description: 'Senin - Jumat, 08:00 - 17:00 WIB'
    },
    {
      icon: HiMail,
      label: 'Email',
      value: 'info@kojenatural.com',
      href: 'mailto:info@kojenatural.com',
      description: 'Respon dalam 24 jam'
    },
    {
      icon: HiLocationMarker,
      label: 'Alamat',
      value: 'Jakarta, Indonesia',
      href: '#',
      description: 'Kunjungi kantor kami'
    },
    {
      icon: HiClock,
      label: 'Jam Operasional',
      value: '08:00 - 17:00 WIB',
      href: '#',
      description: 'Senin s/d Jumat'
    }
  ]

  return (
    <>
      {/* HEADER - SAMA dengan Capabilities */}
      <section className="bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Hubungi Kami
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Hubungi Tim <span className="text-primary">KOJE</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-2xl">
              Tim kami siap membantu kebutuhan supply chain dan procurement Anda. 
              Hubungi kami untuk konsultasi gratis dan solusi terbaik untuk bisnis Anda.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#20BD5A] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/30"
              >
                <FaWhatsapp className="text-base" />
                Chat via WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 text-sm font-medium hover:bg-gray-800 transition-all hover:-translate-y-0.5"
              >
                <HiPhone className="text-base" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT - SAMA dengan Capabilities grid */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-gray-300" />
                  <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                    Kirim Pesan
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Nama Lengkap <span className="text-primary">*</span>
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Email <span className="text-primary">*</span>
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
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Nomor Telepon
                      </label>
                      <div className="relative">
                        <HiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                        Perusahaan
                      </label>
                      <div className="relative">
                        <HiOfficeBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="PT Company Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                      Subjek <span className="text-primary">*</span>
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
                        <option value="">Pilih Subjek</option>
                        <option value="general">General Inquiry</option>
                        <option value="procurement">Procurement Request</option>
                        <option value="partnership">Partnership Opportunity</option>
                        <option value="product">Product Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 uppercase tracking-wider mb-1.5">
                      Pesan <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                      placeholder="Ceritakan kebutuhan Anda..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`
                      w-full sm:w-auto px-8 py-3 bg-primary text-white text-sm font-medium 
                      transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary-dark'}
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Mengirim...
                      </span>
                    ) : (
                      'Kirim Pesan'
                    )}
                  </button>

                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg px-4 py-3"
                    >
                      <HiCheckCircle className="text-lg" />
                      <span className="text-sm">Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.</span>
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>

            {/* Contact Info - 2 columns - SAMA dengan card style capabilities */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-px bg-gray-300" />
                  <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                    Informasi Kontak
                  </span>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, idx) => (
                    <motion.a
                      key={idx}
                      href={info.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="group flex items-start gap-4 p-5 border border-gray-100 hover:border-gray-300 bg-white hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <div className="mt-0.5">
                        <info.icon className="text-gray-400 group-hover:text-gray-700 transition text-lg" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                        <p className="text-sm font-medium text-gray-900">{info.value}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{info.description}</p>
                      </div>
                      <HiChevronRight className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.a>
                  ))}
                </div>

                {/* Social Media - SAMA dengan capabilities style */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4">Ikuti Kami</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 group"
                    >
                      <FaLinkedin className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#E4405F] to-[#F56040] hover:text-white hover:border-[#E4405F] transition-all duration-300 group"
                    >
                      <FaInstagram className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
                    >
                      <FaWhatsapp className="text-gray-400 text-sm group-hover:text-white transition" />
                    </a>
                  </div>
                </div>

                {/* RFQ Strip - SAMA PERSIS dengan capabilities */}
                <div className="mt-8 border border-gray-100 bg-gray-50 p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.2em]">
                    <HiDocumentText className="w-4 h-4" />
                    Procurement Inquiry
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Butuh penawaran khusus? Hubungi tim procurement kami.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
                  >
                    Submit RFQ
                    <HiChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP SECTION - SAMA dengan capabilities strip style */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Lokasi Kami
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-2xl font-light text-gray-900">
              Temukan <span className="text-primary">Kami</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 overflow-hidden"
          >
            <div className="aspect-[16/6] bg-gray-200 relative flex items-center justify-center">
              <div className="text-center">
                <HiMap className="text-4xl text-primary/40 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Google Maps Integration</p>
                <p className="text-xs text-gray-400">Jakarta, Indonesia</p>
              </div>
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <HiLocationMarker className="text-primary text-lg" />
                <div>
                  <p className="text-sm font-medium text-gray-900">PT Koje Natural Indonesia</p>
                  <p className="text-xs text-gray-500">Jakarta, Indonesia</p>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
              >
                Buka di Google Maps
                <HiChevronRight className="text-sm" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
