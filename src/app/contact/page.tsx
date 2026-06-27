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
  HiBuildingOffice,
  HiEnvelope,
  HiUser,
  HiChatBubbleLeftRight,
  HiMapPin,
  HiGlobeAlt
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
    
    // Simulate submission
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0A0F1A] to-[#1A1F2E] pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-primary/50" />
              <span className="text-xs tracking-[0.25em] text-primary/70 uppercase">
                Hubungi Kami
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
              Mari Bekerja Sama
            </h1>
            <p className="text-gray-400 text-base md:text-lg mt-4 max-w-xl leading-relaxed">
              Tim kami siap membantu kebutuhan supply chain dan procurement Anda. 
              Hubungi kami untuk konsultasi gratis.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#25D366]/30"
              >
                <FaWhatsapp className="text-base" />
                Chat via WhatsApp
              </a>
              <a
                href="tel:+6281234567890"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-white/20 transition-all border border-white/20"
              >
                <HiPhone className="text-base" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gray-300" />
                  <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                    Kirim Pesan
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-2">
                  Kirimkan Pesan Anda
                </h2>
                <p className="text-sm text-gray-500 mb-8">
                  Isi form di bawah dan tim kami akan menghubungi Anda dalam waktu 24 jam.
                </p>

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
                        <HiEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
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
                        <HiBuildingOffice className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
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
                      <HiChatBubbleLeftRight className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
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
                      w-full sm:w-auto px-8 py-3.5 bg-primary text-white text-sm font-medium rounded-lg 
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

            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-px bg-gray-300" />
                    <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                      Informasi Kontak
                    </span>
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-6">
                    Hubungi Kami
                  </h3>

                  <div className="space-y-5">
                    {contactInfo.map((info, idx) => (
                      <motion.a
                        key={idx}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <info.icon className="text-primary text-base" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{info.label}</p>
                          <p className="text-sm font-medium text-gray-900">{info.value}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{info.description}</p>
                        </div>
                        <HiChevronRight className="text-gray-300 text-sm ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Media */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">Ikuti Kami</p>
                    <div className="flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300 group"
                      >
                        <FaLinkedin className="text-gray-600 text-sm group-hover:text-white transition" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#E4405F] to-[#F56040] hover:text-white hover:border-[#E4405F] transition-all duration-300 group"
                      >
                        <FaInstagram className="text-gray-600 text-sm group-hover:text-white transition" />
                      </a>
                      <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all duration-300 group"
                      >
                        <FaWhatsapp className="text-gray-600 text-sm group-hover:text-white transition" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Quick Response Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-5 text-center"
                >
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <HiClock className="text-lg" />
                    <span className="text-sm font-medium">Respons Cepat &lt; 24 Jam</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Tim kami siap membantu kebutuhan Anda</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container-custom">
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
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">
              Temukan <span className="text-primary">Kami</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
          >
            <div className="aspect-[16/6] bg-gray-200 relative flex items-center justify-center">
              <div className="text-center">
                <HiMapPin className="text-4xl text-primary/40 mx-auto mb-2" />
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
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
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
