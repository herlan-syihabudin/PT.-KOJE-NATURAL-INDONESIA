'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiDocumentText } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-white text-[11px] uppercase tracking-[0.2em] font-medium">Serving Excellence Since 2020</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            General Supplier & 
            <span className="text-accent block"> Premium Beverage Partner</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-2xl font-light">
            Solusi pengadaan industri dan minuman kesehatan premium untuk mendukung 
            kebutuhan korporasi di seluruh Indonesia.
          </p>

          {/* Trust Signals - Ditambahkan lagi biar lebih meyakinkan */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
            {[
              { value: '100+', label: 'Corporate Clients' },
              { value: '50+', label: 'Industrial Projects' },
              { value: '24/7', label: 'Support Ready' },
              { value: '34', label: 'Cities Coverage' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-4 bg-accent hover:bg-accent/90 text-white font-semibold rounded-sm transition-all flex items-center gap-2 shadow-lg shadow-accent/20">
              Request Quotation <HiArrowRight />
            </Link>
            <Link href="/divisions" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-sm transition-all flex items-center gap-2">
              <HiDocumentText className="text-accent" /> Explore Divisions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 group"
        >
          <span className="text-white/40 text-[10px] tracking-widest text-xs">SCROLL</span>
          <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center group-hover:border-accent transition-colors">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-0.5 h-2 bg-white rounded-full mt-1.5"
            />
          </div>
        </button>
      </div>

      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
    </section>
  )
}
