'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOfficeBuilding, HiBeaker, HiCheckCircle } from 'react-icons/hi'

const divisions = {
  generalSupply: {
    title: 'General Supply Division',
    subtitle: 'Solusi Pengadaan Industri',
    description: 'Menyediakan berbagai kebutuhan industrial supply, MRO, sparepart, dan logistik untuk mendukung operasional perusahaan Anda.',
    icon: HiOfficeBuilding,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    benefits: ['Industrial Supply', 'MRO & Sparepart', 'Logistik Distribusi', 'Pengadaan Khusus'],
    href: '/divisions/general-supply'
  },
  beverage: {
    title: 'F&B Division - KOJE',
    subtitle: 'Minuman Kesehatan Premium',
    description: 'Produsen minuman kesehatan berkualitas dengan varian rasa yang segar dan menyehatkan, cocok untuk konsumsi harian.',
    icon: HiBeaker,
    color: 'from-primary to-accent',
    bgColor: 'bg-primary/5',
    benefits: ['Minuman Kesehatan', 'Corporate Gifting', 'Retail Distribution', 'Custom Packaging'],
    href: '/divisions/beverage',
    isHighlight: true
  }
}

export default function BusinessDivisions() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Business Divisions
          </span>
          <h2 className="section-title">
            Dua Pilar <span className="text-primary">Bisnis Kami</span>
          </h2>
          <p className="section-subtitle">
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* General Supply */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <div className="p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <divisions.generalSupply.icon className="text-2xl text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">{divisions.generalSupply.title}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{divisions.generalSupply.subtitle}</p>
              <p className="text-gray-500 mb-6 leading-relaxed">{divisions.generalSupply.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {divisions.generalSupply.benefits.map((benefit) => (
                  <span key={benefit} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <Link 
                href={divisions.generalSupply.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                <span>Pelajari selengkapnya</span>
                <HiArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>

          {/* Beverage Division - Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="group bg-gradient-to-br from-primary/5 via-white to-accent/5 rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20 hover:shadow-xl transition-all duration-300 relative"
          >
            <div className="absolute top-4 right-4">
              <span className="bg-gradient-to-r from-primary to-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                ★ PRODUK UNGGULAN
              </span>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <divisions.beverage.icon className="text-2xl text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-dark mb-2">{divisions.beverage.title}</h3>
              <p className="text-accent text-sm font-semibold mb-3">{divisions.beverage.subtitle}</p>
              <p className="text-gray-500 mb-6 leading-relaxed">{divisions.beverage.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {divisions.beverage.benefits.map((benefit) => (
                  <span key={benefit} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {benefit}
                  </span>
                ))}
              </div>
              
              <Link 
                href={divisions.beverage.href}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                <span>Lihat Produk KOJE</span>
                <HiArrowRight className="text-sm" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-8 pt-4"
        >
          <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
            <HiCheckCircle className="text-accent" />
            <span>Dipercaya oleh 100+ perusahaan industri & 50+ mitra distribusi</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
