'use client'

import { motion } from 'framer-motion'
import { HiCheckCircle, HiBuildingOffice, HiUsers, HiGlobeAlt, HiClock } from 'react-icons/hi'

const trustSignals = [
  { icon: HiBuildingOffice, value: '100+', label: 'Corporate Clients' },
  { icon: HiUsers, value: '50+', label: 'Industrial Projects' },
  { icon: HiClock, value: '24/7', label: 'Support Ready' },
  { icon: HiGlobeAlt, value: '34', label: 'Cities Coverage' },
]

export default function TrustSignals() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustSignals.map((signal, idx) => (
            <motion.div
              key={signal.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <signal.icon className="text-primary text-3xl mx-auto mb-3" />
              <p className="text-2xl font-bold text-dark">{signal.value}</p>
              <p className="text-gray-500 text-sm">{signal.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
