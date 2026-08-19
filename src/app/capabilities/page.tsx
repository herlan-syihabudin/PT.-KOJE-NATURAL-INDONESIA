'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiChevronRight,
  HiOfficeBuilding,
  HiCog,
  HiShieldCheck,
  HiTruck,
  HiBeaker,
  HiArrowUp,
} from 'react-icons/hi'

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'Providing industrial supply, MRO materials, packaging solutions, and procurement support for manufacturing, construction, and commercial operations across Indonesia.',
    items: [
      'Industrial supply & distribution',
      'MRO spare parts & consumables',
      'Packaging materials',
      'Vendor management',
      'Procurement support',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Supporting industrial projects through technical sourcing, engineering coordination, equipment procurement, maintenance support, and project execution assistance.',
    items: [
      'Technical sourcing',
      'Engineering coordination',
      'Equipment procurement',
      'Maintenance support',
      'Project execution support',
    ],
    icon: HiCog,
    href: '/capabilities/engineering-support',
  },
  {
    id: '03',
    title: 'Safety & Compliance Solutions',
    description:
      'Providing safety equipment, PPE, fire protection solutions, compliance support, and workplace safety requirements for industrial and construction operations.',
    items: [
      'Personal Protective Equipment',
      'Industrial safety equipment',
      'Fire protection systems',
      'Compliance documentation',
      'Safety training support',
    ],
    icon: HiShieldCheck,
    href: '/capabilities/safety-compliance',
  },
  {
    id: '04',
    title: 'Project & Logistics Support',
    description:
      'Supporting procurement and project execution through logistics coordination, material delivery management, vendor coordination, scheduling, and site logistics services.',
    items: [
      'Logistics coordination',
      'Material delivery management',
      'Project scheduling support',
      'Vendor coordination',
      'Site logistics services',
    ],
    icon: HiTruck,
    href: '/capabilities/project-logistics',
  },
  {
    id: '05',
    title: 'Manufacturing & FMCG Distribution',
    description:
      'Supporting beverage manufacturing, private label production, FMCG distribution, and corporate supply requirements through controlled production and distribution capabilities.',
    items: [
      'Beverage manufacturing',
      'Private label production',
      'FMCG distribution',
      'Corporate & institutional supply',
      'Custom packaging',
    ],
    icon: HiBeaker,
    href: '/capabilities/manufacturing',
  },
]

const industries = [
  'Manufacturing',
  'Construction',
  'FMCG',
  'Engineering',
  'Commercial Facilities',
]

export default function CapabilitiesPage() {
  return (
    <main id="top" className="bg-white">

      {/* HERO / HEADER */}
      <section className="pt-28 md:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-6">

          {/* BREADCRUMB */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Capabilities</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] uppercase text-gray-400">
                Capabilities Statement
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mt-6 leading-tight">
              Integrated Industrial & Procurement Solutions
            </h1>

            <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed max-w-3xl">
              PT KOJE Natural Indonesia provides integrated procurement,
              industrial supply, engineering support, safety solutions,
              project logistics, manufacturing, and FMCG distribution for
              manufacturing, construction, engineering, and commercial
              businesses across Indonesia.
            </p>
          </motion.div>

          {/* CAPABILITIES */}
          <div className="space-y-1">
            {capabilities.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="group block border-b border-gray-100 py-6 hover:bg-gray-50/40 hover:shadow-sm transition-all duration-300 -mx-6 px-6 rounded-lg"
                  >
                    <div className="flex items-start gap-4">
                      {/* NUMBER */}
                      <span className="text-sm font-medium text-gray-300 mt-0.5 shrink-0">
                        {item.id}
                      </span>

                      {/* ICON */}
                      <div className="text-gray-300 mt-0.5 group-hover:text-gray-500 transition-colors shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* CONTENT */}
                      <div className="flex-1 min-w-0">
                        <h2 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h2>

                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                          {item.items.map((subItem, idx) => (
                            <span
                              key={subItem}
                              className="text-sm text-gray-400 flex items-center gap-2"
                            >
                              {idx > 0 && (
                                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                              )}
                              {subItem}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* ARROW */}
                      <div className="text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all shrink-0">
                        <HiChevronRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* INDUSTRIES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 pt-12 border-t border-gray-100"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
              Industries We Serve
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 bg-white px-4 py-3 text-center hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-sm text-gray-600">{industry}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RFQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20 pt-8 border-t border-gray-100"
          >
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
              Procurement Inquiry
            </p>

            <h2 className="text-lg font-medium text-gray-900 mt-2">
              Need a procurement or supply solution?
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Send your requirements and our team will assist with sourcing,
              procurement, manufacturing, logistics, and quotation.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
            >
              Submit RFQ
              <HiChevronRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-gray-400 mt-3">
              Response within 24 business hours
            </p>
          </motion.div>

          {/* BACK TO TOP */}
          <div className="border-t border-gray-100 mt-12 pt-6">
            <div className="text-center">
              <Link
                href="#top"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition"
              >
                <HiArrowUp className="w-4 h-4" />
                Back to Top
              </Link>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
