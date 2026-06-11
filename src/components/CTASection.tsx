'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiPhone, HiMail } from 'react-icons/hi'

export default function CTASection() {
  return (
    <section className="section-padding bg-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Siap Mengoptimalkan Rantai Pasok & Bisnis Anda?
          </h2>
          <p className="text-gray-300 mb-8">
            Dapatkan penawaran terbaik untuk kebutuhan industrial supply atau produk KOJE.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <HiPhone /> Request Quotation
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark transition-all rounded-full px-6 py-3 flex items-center gap-2 font-semibold">
              <HiMail /> Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
