'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDocumentText } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* Badge (lebih simple) */}
          <div className="inline-flex items-center mb-8 text-white/60 text-xs tracking-[0.3em] uppercase">
            PT KOJE NATURAL INDONESIA
          </div>

          {/* Headline (UNILEVER STYLE) */}
          <h1 className="text-5xl md:text-7xl font-light text-white leading-[1.1] mb-6">
            Industrial Supply
            <span className="block text-white font-semibold">
              & Beverage Solutions
            </span>
          </h1>

          {/* Subheading (lebih corporate, tidak salesy) */}
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl font-light">
            Integrated procurement and distribution partner for industrial needs and beverage products across Indonesia.
          </p>

          {/* CTA (lebih clean) */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/contact"
              className="px-8 py-4 bg-white text-black font-medium rounded-sm hover:bg-white/90 transition flex items-center gap-2"
            >
              Request Quotation <HiArrowRight />
            </Link>

            <Link 
              href="/company-profile"
              className="px-8 py-4 border border-white/20 text-white hover:bg-white/10 rounded-sm transition flex items-center gap-2"
            >
              <HiDocumentText /> Company Profile
            </Link>
          </div>

        </motion.div>
      </div>

      {/* Bottom line (lebih subtle dari sebelumnya) */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  )
}
