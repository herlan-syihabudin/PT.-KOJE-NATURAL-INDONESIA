'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiOfficeBuilding, HiCube } from 'react-icons/hi'

const capabilities = [
  {
    title: 'Industrial Supply & Procurement',
    subtitle: 'General Trading Division',
    description:
      'Menyediakan kebutuhan industrial supply, MRO, packaging, dan material pendukung operasional perusahaan secara terintegrasi.',
    icon: HiOfficeBuilding,
    items: [
      'Industrial Supply',
      'MRO & Sparepart',
      'Packaging Material',
      'Procurement Support',
    ],
    href: '/capabilities/general-supply',
  },
  {
    title: 'Beverage Manufacturing',
    subtitle: 'F&B Production Unit',
    description:
      'Produksi minuman kesehatan dan produk F&B dengan standar kualitas dan distribusi yang terkontrol.',
    icon: HiCube,
    items: [
      'Beverage Production',
      'Private Label',
      'Distribution',
      'Corporate Supply',
    ],
    href: '/capabilities/beverage',
  },
]

export default function Capabilities() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            Capabilities
          </p>

          <h2 className="text-3xl md:text-5xl font-light mt-4">
            Integrated Supply &
            <span className="block font-semibold">Manufacturing Solutions</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            PT KOJE Natural Indonesia operates as a procurement and manufacturing partner supporting industrial and consumer supply chains.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {capabilities.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="border border-gray-100 p-8"
            >

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center border border-gray-200 mb-6">
                <item.icon className="text-xl text-gray-700" />
              </div>

              {/* TEXT */}
              <h3 className="text-xl font-medium text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-400 mt-1">
                {item.subtitle}
              </p>

              <p className="text-gray-500 mt-4 leading-relaxed text-sm">
                {item.description}
              </p>

              {/* ITEMS */}
              <div className="mt-6 space-y-2">
                {item.items.map((i) => (
                  <div key={i} className="text-sm text-gray-600">
                    • {i}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={item.href}
                className="inline-flex items-center gap-2 mt-6 text-sm text-black hover:gap-3 transition"
              >
                Learn more <HiArrowRight />
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}
