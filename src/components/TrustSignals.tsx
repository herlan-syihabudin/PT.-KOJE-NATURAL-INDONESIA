'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiOfficeBuilding, HiUsers, HiGlobeAlt, HiClock, HiTruck, HiBadgeCheck } from 'react-icons/hi'
import { FaAward, FaHandshake } from 'react-icons/fa'

const trustSignals = [
  { 
    icon: HiOfficeBuilding, 
    value: '100+', 
    label: 'Corporate Clients',
    description: 'Perusahaan terpercaya'
  },
  { 
    icon: HiUsers, 
    value: '50+', 
    label: 'Industrial Projects',
    description: 'Proyek berhasil diselesaikan'
  },
  { 
    icon: HiClock, 
    value: '24/7', 
    label: 'Support Ready',
    description: 'Layanan pelanggan aktif'
  },
  { 
    icon: HiGlobeAlt, 
    value: '34', 
    label: 'Cities Coverage',
    description: 'Jangkauan nasional'
  },
]

export default function TrustSignals() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/80">
      <div className="container-custom">
        {/* Header Section - Unilever Style */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-0.5 bg-primary/40"></span>
              <span className="text-xs font-medium text-primary/70 uppercase tracking-[0.2em]">Trusted Partner</span>
              <span className="w-8 h-0.5 bg-primary/40"></span>
            </div>
            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-dark mb-2">
              Mitra Terpercaya untuk <span className="text-primary">Bisnis Anda</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Didukung oleh pengalaman dan komitmen untuk memberikan layanan terbaik
            </p>
          </motion.div>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100/50 hover:border-primary/20"
            >
              {/* Decorative Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-1/2"></div>
              
              {/* Icon with Circle Background */}
              <div className="relative mb-4">
                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
                  <signal.icon className="text-primary text-2xl" />
                </div>
              </div>

              {/* Value */}
              <p className="text-2xl md:text-3xl font-bold text-dark mb-1">
                {signal.value}
              </p>
              
              {/* Label */}
              <p className="text-sm font-semibold text-gray-800 mb-0.5">
                {signal.label}
              </p>
              
              {/* Description */}
              <p className="text-xs text-gray-400">
                {signal.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Badge - Unilever Style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10 text-center"
        >
          <div className="flex items-center gap-2">
            <FaAward className="text-primary/60 text-lg" />
            <span className="text-xs text-gray-500">ISO 9001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <FaHandshake className="text-primary/60 text-lg" />
            <span className="text-xs text-gray-500">100% Customer Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <HiBadgeCheck className="text-primary/60 text-lg" />
            <span className="text-xs text-gray-500">Premium Quality Products</span>
          </div>
          <div className="flex items-center gap-2">
            <HiTruck className="text-primary/60 text-lg" />
            <span className="text-xs text-gray-500">Nationwide Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
