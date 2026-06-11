'use client'

import Link from 'next/link'  // ← TAMBAHKAN INI
import { motion } from 'framer-motion'
import { HiLightningBolt, HiShieldCheck, HiTruck, HiClipboardCheck, HiCheckCircle } from 'react-icons/hi'

const features = [
  { icon: HiLightningBolt, title: 'Fast Response', desc: 'Quotation & follow up dalam 2x24 jam' },
  { icon: HiShieldCheck, title: 'Trusted Vendor', desc: 'Terdaftar resmi & mitra terpercaya' },
  { icon: HiTruck, title: 'Nationwide Delivery', desc: 'Jangkau seluruh Indonesia' },
  { icon: HiClipboardCheck, title: 'Quality Control', desc: 'Inspeksi ketat sebelum pengiriman' },
]

export default function WhyChooseUs() {
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
            Why Choose Us
          </span>
          <h2 className="section-title">
            Kenapa <span className="text-primary">Memilih KOJE Natural?</span>
          </h2>
          <p className="section-subtitle">
            Keunggulan kompetitif yang membuat klien terus mempercayakan kebutuhan mereka kepada kami
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-2xl text-primary" />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all shadow-lg">
            <span>Konsultasi Gratis</span>
            <HiCheckCircle className="text-sm" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
