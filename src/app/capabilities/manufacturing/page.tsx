'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheckCircle,
  HiOfficeBuilding,
  HiCog,
  HiCube,
  HiTruck,
  HiShieldCheck,
  HiDocumentText,
} from 'react-icons/hi'

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'Industrial supply and procurement support covering MRO, consumables, packaging materials, industrial products, sourcing, supplier coordination, and delivery requirements.',
    items: [
      'Industrial products & components',
      'MRO spare parts & consumables',
      'Electrical & mechanical supplies',
      'Packaging materials',
      'Product sourcing & vendor coordination',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Technical sourcing, equipment procurement, engineering coordination, maintenance support, and project assistance for industrial and commercial operations.',
    items: [
      'Technical sourcing',
      'Engineering coordination',
      'Equipment procurement',
      'Maintenance & spare parts',
      'Project execution support',
    ],
    icon: HiCog,
    href: '/capabilities/engineering-support',
  },
  {
    id: '03',
    title: 'Safety & Compliance Solutions',
    description:
      'Safety equipment and supporting solutions for workplace protection, operational requirements, industrial environments, and compliance needs.',
    items: [
      'Personal protective equipment',
      'Industrial safety equipment',
      'Fire protection equipment',
      'Safety systems',
      'Compliance support',
    ],
    icon: HiShieldCheck,
    href: '/capabilities/safety-compliance',
  },
  {
    id: '04',
    title: 'Manufacturing & FMCG',
    description:
      'Manufacturing and FMCG solutions covering beverage production, private label, packaging, corporate supply, and distribution requirements.',
    items: [
      'Beverage manufacturing',
      'Private label production',
      'FMCG products',
      'Corporate supply',
      'Custom packaging',
    ],
    icon: HiCube,
    href: '/capabilities/manufacturing-fmcg',
  },
  {
    id: '05',
    title: 'Project & Logistics Support',
    description:
      'Project procurement and logistics coordination supporting material delivery, supplier management, scheduling, and operational execution.',
    items: [
      'Logistics coordination',
      'Material delivery management',
      'Project scheduling support',
      'Vendor coordination',
      'Site logistics support',
    ],
    icon: HiTruck,
    href: '/capabilities/project-logistics',
  },
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering & MEP',
  'FMCG',
  'Food & Beverage',
  'Commercial Facilities',
  'Industrial Operations',
  'Project & Site Operations',
]

const supportPoints = [
  {
    title: 'Specification-Based Sourcing',
    description:
      'We help identify products and suppliers based on technical specifications, application, brand requirements, quantity, availability, and commercial considerations.',
  },
  {
    title: 'Multi-Category Procurement',
    description:
      'Multiple procurement requirements can be coordinated through one partner, reducing the need to manage separate suppliers across different product categories.',
  },
  {
    title: 'Supplier Coordination',
    description:
      'We coordinate supplier communication, quotations, availability, lead times, documentation, and order requirements according to the client\'s needs.',
  },
  {
    title: 'Project & Delivery Support',
    description:
      'Procurement activities can be coordinated with project schedules, material requirements, delivery locations, and operational timelines.',
  },
]

export default function CapabilitiesPage() {
  return (
    <main id="top" className="bg-white">

      {/* =====================================================
          HERO / POSITIONING
      ===================================================== */}

      <section className="pt-28 md:pt-32 pb-16 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-gray-700 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">Capabilities</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capabilities Statement
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Integrated Procurement &
              <span className="block font-medium">
                Industrial Solutions
              </span>
            </h1>

            <p className="mt-6 text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
              PT KOJE Natural Indonesia operates as an integrated supply,
procurement, manufacturing, and project support partner for
industrial, manufacturing, construction, engineering, FMCG,
and commercial clients across Indonesia.
            </p>

            <p className="mt-4 text-gray-500 text-sm md:text-base leading-relaxed max-w-3xl">
              Our capabilities are designed to support businesses
              requiring reliable sourcing, supplier coordination,
              technical procurement, manufacturing solutions, and
              project-related supply support.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition rounded-lg"
              >
                Submit Procurement Inquiry
                <HiChevronRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium hover:border-gray-400 transition rounded-lg"
              >
                View Product Portfolio
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CORE CAPABILITIES
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Core Capabilities
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
              One partner for
              <span className="font-medium"> multiple business requirements.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our capabilities combine procurement, industrial supply,
              technical support, manufacturing, safety, and logistics
              coordination to support different operational and project
              requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="group block border border-gray-100 hover:border-gray-300 transition bg-white p-7 hover:-translate-y-1 duration-300 h-full"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-gray-300">
                          {item.id}
                        </span>
                        <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" />
                      </div>
                      <HiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition" />
                    </div>

                    <h2 className="text-lg md:text-xl font-medium text-gray-900">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 space-y-2">
                      {item.items.map((sub) => (
                        <div key={sub} className="flex items-start gap-2 text-sm text-gray-400">
                          <HiCheckCircle className="w-4 h-4 mt-0.5 text-gray-300 shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 pt-4 border-t border-gray-100 text-xs text-gray-400 group-hover:text-gray-700 transition">
                      Explore capability
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Industries We Serve
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Supporting diverse
              <span className="font-medium"> business operations.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed max-w-2xl">
              Our procurement and supply capabilities can be adapted
              to different industries, operational environments,
              project requirements, and purchasing structures.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white px-5 py-5 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-sm text-gray-600">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          HOW KOJE SUPPORTS OPERATIONS
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.9fr_1.6fr] gap-12 lg:gap-20"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Our Approach
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
                Supporting your
                <span className="block font-medium">
                  operations from requirement to delivery.
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                KOJE works across multiple stages of the procurement
                and supply process, helping clients coordinate
                products, suppliers, technical requirements, and
                delivery needs.
              </p>
            </div>

            <div>
              {supportPoints.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[40px_1fr] gap-5 py-6 border-b border-gray-100 first:pt-0"
                >
                  <span className="text-xs text-gray-300 font-medium">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div>
                    <h3 className="text-base font-medium text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROCUREMENT / PROJECT SUPPORT
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Procurement & Project Support
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              From sourcing requirements to
              <span className="font-medium"> operational support.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Depending on the requirement, KOJE can support product
              sourcing, supplier coordination, technical procurement,
              material supply, manufacturing requirements, and
              logistics coordination.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: HiOfficeBuilding,
                title: 'Procurement Support',
                description:
                  'Product sourcing, supplier identification, quotation coordination, specification matching, and purchasing support.',
              },
              {
                icon: HiCog,
                title: 'Technical Support',
                description:
                  'Equipment sourcing, technical requirement review, maintenance support, spare parts, and engineering coordination.',
              },
              {
                icon: HiTruck,
                title: 'Project & Logistics',
                description:
                  'Material delivery, logistics coordination, supplier communication, project scheduling, and site-related supply support.',
              },
            ].map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-gray-200 bg-white p-7 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-7 h-7 text-gray-400 mb-5" />
                  <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          RFQ CTA
      ===================================================== */}

      <section className="bg-[#0F172A] py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr_auto] gap-8 items-center"
          >
            <div>
              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40">
                <HiDocumentText className="w-4 h-4" />
                Business Inquiry
              </div>

              <h2 className="text-2xl md:text-3xl font-light mt-4">
                Have a procurement or project requirement?
              </h2>

              <p className="text-sm text-white/50 mt-3 max-w-2xl leading-relaxed">
                Send us your product specification, quantity,
                preferred brand, equipment requirement, or project
                requirements. Our team will review your inquiry and
                determine the appropriate sourcing and support approach.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] px-7 py-3.5 text-sm font-medium hover:bg-gray-100 transition rounded-lg"
            >
              Submit RFQ
              <HiChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <div className="border-t border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition"
          >
            <HiArrowUp className="w-4 h-4" />
            Back to Top
          </Link>
        </div>
      </div>

    </main>
  )
}
