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
  HiArrowUp,
} from 'react-icons/hi'

const coreCapabilities = [
  'Industrial products & components',
  'MRO spareparts & consumables',
  'Electrical & mechanical supplies',
  'Packaging materials',
  'Industrial tools & equipment',
  'Product sourcing & specification matching',
  'Vendor coordination & procurement support',
  'Material delivery & logistics coordination',
]

const procurementProcess = [
  {
    number: '01',
    title: 'Requirement Review',
    description:
      'We review product specifications, quantity, brand requirements, delivery location, application, and project requirements.',
  },
  {
    number: '02',
    title: 'Sourcing & Supplier Matching',
    description:
      'Our procurement team identifies suitable suppliers based on product specifications, availability, commercial requirements, and delivery needs.',
  },
  {
    number: '03',
    title: 'Quotation & Verification',
    description:
      'Product specifications, pricing, availability, lead time, and relevant documentation are reviewed before quotation.',
  },
  {
    number: '04',
    title: 'Delivery Coordination',
    description:
      'We coordinate order fulfillment, material delivery, and logistics according to the agreed procurement requirements.',
  },
  {
    number: '05',
    title: 'Post-Delivery Support',
    description:
      'We ensure proper delivery, verify documentation, and provide ongoing procurement support as needed.',
  },
]

const productAreas = [
  {
    icon: HiOfficeBuilding,
    title: 'Industrial Products',
    description:
      'Industrial components, materials, equipment, tools, and operational supplies for manufacturing and industrial facilities.',
  },
  {
    icon: HiCog,
    title: 'MRO & Consumables',
    description:
      'Maintenance, repair, and operational supplies supporting routine maintenance and continuous industrial operations.',
  },
  {
    icon: HiCube,
    title: 'Packaging Materials',
    description:
      'Packaging products and supporting materials for manufacturing, FMCG, food, beverage, and commercial operations.',
  },
  {
    icon: HiTruck,
    title: 'Logistics Support',
    description:
      'Material delivery coordination and logistics support based on project location, quantity, urgency, and procurement requirements.',
  },
]

const procurementAdvantages = [
  {
    icon: HiShieldCheck,
    title: 'Specification Focused',
    description:
      'Product sourcing is based on required specifications, brands, quantities, application, and procurement requirements.',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Multi-Category Supply',
    description:
      'Industrial products, MRO, packaging, equipment, and operational supplies can be coordinated through one procurement partner.',
  },
  {
    icon: HiTruck,
    title: 'Coordinated Delivery',
    description:
      'Delivery and logistics coordination can be arranged according to order quantity, project location, schedule, and operational needs.',
  },
]

const capabilityHighlights = [
  {
    title: 'Multi-Category',
    description: 'Industrial Supply',
  },
  {
    title: 'Specification',
    description: 'Based Sourcing',
  },
  {
    title: 'Supplier',
    description: 'Coordination',
  },
  {
    title: 'End-to-End',
    description: 'Procurement Support',
  },
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering',
  'FMCG',
  'Food & Beverage',
  'Commercial Facilities',
]

const relatedCapabilities = [
  {
    title: 'Engineering & Technical Support',
    description: 'Technical sourcing, equipment procurement, and project support.',
    href: '/capabilities/engineering-support',
  },
  {
    title: 'Safety & Compliance Solutions',
    description: 'Safety equipment, PPE, and workplace safety support.',
    href: '/capabilities/safety-compliance',
  },
  {
    title: 'Project & Logistics Support',
    description: 'Material delivery, logistics coordination, and site support.',
    href: '/capabilities/project-logistics',
  },
  {
    title: 'Manufacturing & FMCG',
    description: 'Manufacturing, private label, packaging, and FMCG solutions.',
    href: '/capabilities/manufacturing',
  },
]

export default function IndustrialSupplyPage() {
  return (
    <main id="top" className="bg-white">

      {/* =====================================================
          HEADER / HERO
      ===================================================== */}

      <section className="pt-28 md:pt-32 pb-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link
              href="/"
              className="hover:text-gray-600 transition"
            >
              Home
            </Link>

            <span>/</span>

            <Link
              href="/capabilities"
              className="hover:text-gray-600 transition"
            >
              Capabilities
            </Link>

            <span>/</span>

            <span className="text-gray-900">
              Industrial Supply
            </span>
          </nav>

          {/* Back */}
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-8 group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
            Back to Capabilities
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capability Detail
              </span>

              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Industrial Supply
              <span className="block font-medium">
                & Procurement
              </span>
            </h1>

            <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed max-w-3xl">
              PT KOJE Natural Indonesia provides industrial procurement and
              sourcing support for manufacturing, construction, engineering,
              FMCG, and commercial operations across Indonesia. Our scope
              includes industrial materials, MRO supplies, electrical and
              mechanical products, packaging, equipment, consumables, supplier
              coordination, and delivery support.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition rounded-lg"
              >
                Submit Procurement Inquiry
                <HiArrowRight className="w-4 h-4" />
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

      // Tambahkan section:
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

      <p className="text-sm text-gray-500 mt-4 leading-relaxed">
        Our procurement and sourcing support can be adapted to different
        operational environments and purchasing requirements.
      </p>
    </motion.div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {industries.map((industry, index) => (
        <motion.div
          key={industry}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
          className="border border-gray-200 bg-white px-4 py-5 text-center hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
        >
          <span className="text-sm text-gray-600">{industry}</span>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20"
          >

            <div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Procurement Support
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                One procurement partner for
                <span className="block font-medium">
                  multiple supply requirements.
                </span>
              </h2>

            </div>

            <div className="space-y-5 text-sm md:text-base text-gray-500 leading-relaxed">

              <p>
                Industrial procurement often involves multiple suppliers,
                product specifications, delivery schedules, and operational
                requirements. KOJE helps simplify this process through
                coordinated sourcing and procurement support.
              </p>

              <p>
                We work with clients to identify suitable products and
                suppliers according to technical specifications, brand
                requirements, quantity, availability, budget, and delivery
                location.
              </p>

              <p>
                Our role can extend from product sourcing and quotation
                coordination to vendor communication, order fulfillment,
                and logistics coordination.
              </p>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CAPABILITY HIGHLIGHTS
      ===================================================== */}

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-100 pt-12"
          >

            {capabilityHighlights.map((item) => (
              <div
                key={item.title}
                className="text-center"
              >

                <div className="text-lg md:text-xl font-medium text-gray-900">
                  {item.title}
                </div>

                <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">
                  {item.description}
                </div>

              </div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          CORE CAPABILITIES
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
                Scope of Supply
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Industrial procurement
              <span className="font-medium">
                {' '}capabilities.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our procurement scope can be adapted to product specifications,
              project requirements, quantities, brands, and delivery locations.
            </p>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-5"
          >

            {coreCapabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className="flex items-center gap-3 border-b border-gray-200 pb-4"
              >

                <HiCheckCircle className="w-5 h-5 text-gray-400 shrink-0" />

                <span className="text-sm text-gray-600">
                  {item}
                </span>

              </motion.div>
            ))}

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT AREAS
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Product Areas
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              What We Can{' '}
              <span className="font-medium">
                Supply
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Selected product categories supporting industrial,
              manufacturing, commercial, and project procurement requirements.
            </p>

          </motion.div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {productAreas.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="border border-gray-100 p-6 bg-white hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >

                  <Icon className="w-7 h-7 text-gray-400 mb-5" />

                  <h3 className="text-base font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCUREMENT PROCESS
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-[0.8fr_1.8fr] gap-12 lg:gap-20"
          >

            <div>

              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Our Process
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
                A structured approach to
                <span className="block font-medium">
                  industrial procurement.
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                Procurement requirements are coordinated from initial
                specification through sourcing and delivery support.
              </p>

            </div>


            <div className="space-y-0">

              {procurementProcess.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="grid grid-cols-[48px_1fr] gap-5 py-6 border-b border-gray-200 first:pt-0"
                >

                  <span className="text-xs tracking-[0.15em] text-gray-300 font-medium">
                    {item.number}
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
          WHY KOJE
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
                Procurement Advantage
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Built around your
              <span className="font-medium">
                {' '}procurement needs.
              </span>
            </h2>

          </motion.div>


          <div className="grid md:grid-cols-3 gap-6">

            {procurementAdvantages.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="border border-gray-100 p-7 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >

                  <Icon className="w-7 h-7 text-gray-400 mb-5" />

                  <h3 className="text-base font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>
      </section>

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
          Related Capabilities
        </span>
        <span className="w-8 h-px bg-gray-300" />
      </div>

      <h2 className="text-2xl md:text-4xl font-light text-gray-900">
        More ways KOJE can
        <span className="font-medium"> support your business.</span>
      </h2>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-4">
      {relatedCapabilities.map((item, index) => (
        <motion.div
          key={item.href}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <Link
            href={item.href}
            className="group block border border-gray-200 bg-white p-6 hover:border-gray-400 transition"
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <h3 className="text-base font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <HiArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-700 group-hover:translate-x-1 transition shrink-0" />
            </div>
          </Link>
        </motion.div>
      ))}
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

                Procurement Inquiry

              </div>

              <h2 className="text-2xl md:text-3xl font-light mt-4">
                Looking for a specific industrial product?
              </h2>

              <p className="text-sm text-white/50 mt-3 max-w-2xl leading-relaxed">
                Send us your product specification, quantity, preferred brand,
                or project requirements. Our procurement team will review your
                request and assist with sourcing and quotation.
              </p>

            </div>


            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] px-7 py-3.5 text-sm font-medium hover:bg-gray-100 transition rounded-lg"
            >
              Submit RFQ

              <HiArrowRight className="w-4 h-4" />
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
