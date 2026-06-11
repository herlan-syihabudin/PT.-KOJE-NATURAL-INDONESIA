'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiPhone, HiDocumentText } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format"
          alt="Industrial and beverage background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-xs md:text-sm">Trusted Since 2020</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-5">
            General Supplier & 
            <span className="text-accent block"> Premium Beverage Partner</span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
            Solusi pengadaan industri dan minuman kesehatan premium 
            untuk mendukung kebutuhan korporasi di seluruh Indonesia.
          </p>

          {/* Trust Signals */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { value: '100+', label: 'Corporate Clients' },
              { value: '50+', label: 'Industrial Projects' },
              { value: '24/7', label: 'Support Ready' },
              { value: '34', label: 'Cities Coverage' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <p className="text-xl font-bold text-white">{item.value}</p>
                <p className="text-white/50 text-xs">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary group">
              <HiPhone /> Request Quotation
            </Link>
            <Link href="/divisions" className="btn-outline group">
              <HiDocumentText /> Our Divisions
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-white/50 text-[10px] tracking-wider">SCROLL</span>
          <div className="w-4 h-6 border border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-1 bg-white rounded-full mt-1.5 animate-ping" />
          </div>
        </button>
      </div>
    </section>
  )
}
