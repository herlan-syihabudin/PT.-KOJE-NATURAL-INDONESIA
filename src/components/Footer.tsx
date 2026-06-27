'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail, HiPhone, HiClock, HiArrowRight, HiCheckCircle } from 'react-icons/hi'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#0A0F1A] to-[#06090F] text-gray-400">
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Kolom 1: Logo & Deskripsi */}
          <div>
            {/* Logo - Diperbesar */}
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/logo/koje_putih-removebg-preview.png"
                  alt="KOJE Natural Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              PT Koje Natural Indonesia - Industrial Procurement & Supply Solutions
            </p>
            <div className="flex gap-3">
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all duration-300 group"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-white/70 text-sm group-hover:text-white transition" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all duration-300 group"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-white/70 text-sm group-hover:text-white transition" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-gradient-to-tr from-[#E4405F] to-[#F56040] hover:text-white transition-all duration-300 group"
                aria-label="Instagram"
              >
                <FaInstagram className="text-white/70 text-sm group-hover:text-white transition" />
              </a>
            </div>
          </div>

          {/* Kolom 2: Perusahaan */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">PERUSAHAAN</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Capabilities
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Proyek
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">LAYANAN</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/capabilities" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  General Supply
                </Link>
              </li>
              <li>
                <Link href="/capabilities" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Produk KOJE
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Corporate Gifting
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200 flex items-center gap-2">
                  <span className="w-1 h-1 bg-primary/30 rounded-full"></span>
                  Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Kontak */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider">KONTAK</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 hover:text-white transition-colors duration-200 group">
                <HiLocationMarker className="text-primary text-base mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition">Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors duration-200 group">
                <HiPhone className="text-primary text-base shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+6281234567890" className="text-gray-400 group-hover:text-white transition">
                  +62 812 3456 7890
                </a>
              </div>
              <div className="flex items-center gap-3 hover:text-white transition-colors duration-200 group">
                <HiMail className="text-primary text-base shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@kojenatural.com" className="text-gray-400 group-hover:text-white transition">
                  info@kojenatural.com
                </a>
              </div>
              <div className="flex items-start gap-3 hover:text-white transition-colors duration-200 group">
                <HiClock className="text-primary text-base mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-400 group-hover:text-white transition">Senin-Jumat: 08.00-17.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-white text-sm font-medium mb-2">Tetap Terhubung</p>
            <p className="text-gray-500 text-xs mb-4">Dapatkan update terbaru dari KOJE Natural</p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30 whitespace-nowrap"
              >
                {isSubscribed ? 'Terdaftar!' : 'Berlangganan'}
              </button>
            </form>
            {isSubscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 text-xs mt-3"
              >
                <HiCheckCircle className="inline mr-1" /> Terima kasih telah berlangganan!
              </motion.p>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-gray-500">
            &copy; {currentYear} PT Koje Natural Indonesia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-gray-500 hover:text-primary transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-primary transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-primary transition-colors duration-200">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-shadow duration-300"
        aria-label="Chat via WhatsApp"
      >
        <FaWhatsapp className="text-xl" />
      </motion.a>
    </footer>
  )
}
