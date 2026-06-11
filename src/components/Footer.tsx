'use client'

import Link from 'next/link'
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
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="font-poppins font-bold text-white">KOJE Natural</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              General Supplier & Premium Beverage Partner
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaWhatsapp className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaLinkedin className="text-white text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaInstagram className="text-white text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Perusahaan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition">Tentang Kami</Link></li>
              <li><Link href="/divisions" className="hover:text-primary transition">Divisi Usaha</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition">Proyek</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Layanan</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/divisions/general-supply" className="hover:text-primary transition">General Supply</Link></li>
              <li><Link href="/divisions/beverage" className="hover:text-primary transition">Produk KOJE</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition">Corporate Gifting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontak</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2"><HiLocationMarker className="text-primary mt-0.5" /> Jakarta, Indonesia</div>
              <div className="flex items-center gap-2"><HiPhone className="text-primary" /> +62 812 3456 7890</div>
              <div className="flex items-center gap-2"><HiMail className="text-primary" /> info@kojenatural.com</div>
              <div className="flex items-center gap-2"><HiClock className="text-primary" /> Senin-Jumat: 08.00-17.00</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs">
          <p className="text-gray-500">&copy; {currentYear} PT Koje Natural Indonesia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition">Privacy</Link>
            <Link href="/terms" className="hover:text-primary transition">Terms</Link>
          </div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg"
      >
        <FaWhatsapp className="text-xl" />
      </motion.a>
    </footer>
  )
}
