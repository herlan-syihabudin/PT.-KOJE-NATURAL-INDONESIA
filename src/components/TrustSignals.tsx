'use client'

import { motion } from 'framer-motion'
import {
  HiOfficeBuilding,
  HiCog,
  HiGlobeAlt,
  HiClock,
} from 'react-icons/hi'

const trustSignals = [
  {
    icon: HiOfficeBuilding,
    title: 'Industrial Supply',
    description:
      'Supporting industrial operations with procurement, MRO supplies, materials, and consumables.',
  },
  {
    icon: HiCog,
    title: 'Technical Support',
    description:
      'Supporting project and operational requirements through technical sourcing and engineering coordination.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Nationwide Coverage',
    description:
      'Supply and distribution support for businesses and operations across Indonesia.',
  },
  {
    icon: HiClock,
    title: 'Responsive Support',
    description:
      'Procurement and customer support focused on clear communication and timely response.',
  },
]

export default function TrustSignals() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-14">

          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gray-300" />

            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Trust & Capability
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Built for Reliable
            <span className="block font-medium">
              Business Operations
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-5 leading-relaxed max-w-2xl">
            PT KOJE Natural Indonesia combines procurement, technical support,
            supply coordination, and FMCG manufacturing capabilities to support
            businesses across Indonesia.
          </p>

        </div>

        {/* TRUST SIGNALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-200">

          {trustSignals.map((signal, idx) => (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                py-8
                pr-8
                border-b
                lg:border-b-0
                border-gray-200
                lg:border-r
                lg:last:border-r-0
                lg:pl-8
                first:lg:pl-0
              "
            >

              {/* ICON */}
              <div className="mb-5">
                <signal.icon
                  className="
                    w-5 h-5
                    text-gray-400
                    group-hover:text-gray-700
                    transition-colors
                  "
                />
              </div>

              {/* TITLE */}
              <h3 className="text-base font-medium text-gray-900 mb-2">
                {signal.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm text-gray-500 leading-relaxed">
                {signal.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
