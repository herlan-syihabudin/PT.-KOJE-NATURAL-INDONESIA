'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUp,
  HiCheckCircle,
  HiClipboardCheck,
  HiCog,
  HiOfficeBuilding,
  HiDocumentText,
  HiTruck,
  HiShieldCheck,
} from 'react-icons/hi'

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering & MEP',
  'FMCG',
  'Food & Beverage',
  'Commercial Facilities',
]

const capabilityHighlights = [
  {
    title: 'Technical',
    description: 'Sourcing',
  },
  {
    title: 'Engineering',
    description: 'Coordination',
  },
  {
    title: 'Equipment',
    description: 'Procurement',
  },
  {
    title: 'Project',
    description: 'Support',
  },
]

const capabilities = [
  'Technical sourcing and specification review',
  'Engineering coordination',
  'Industrial equipment procurement',
  'Maintenance support and spare parts sourcing',
  'Project execution support',
  'Technical documentation and coordination',
  'Supplier identification and coordination',
  'Technical comparison and quotation support',
]

const serviceAreas = [
  {
    icon: HiCog,
    title: 'Technical Sourcing',
    description:
      'Sourcing industrial equipment, components, spare parts, and technical materials based on project specifications, application requirements, and operational needs.',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Equipment Procurement',
    description:
      'Supporting equipment procurement through supplier identification, quotation coordination, technical comparison, availability checking, and purchasing support.',
  },
  {
    icon: HiClipboardCheck,
    title: 'Engineering Coordination',
    description:
      'Coordinating technical requirements, product specifications, suppliers, documentation, and procurement activities to support project and operational requirements.',
  },
  {
    icon: HiCog,
    title: 'Maintenance & Spare Parts',
    description:
      'Supporting maintenance activities through spare parts sourcing, replacement component procurement, consumables, and supplier coordination.',
  },
  {
    icon: HiTruck,
    title: 'Project Support',
    description:
      'Supporting project execution through material sourcing, supplier coordination, procurement follow-up, scheduling, and delivery coordination.',
  },
  {
    icon: HiDocumentText,
    title: 'Technical Documentation',
    description:
      'Coordinating relevant product information, technical specifications, quotations, supplier documentation, and procurement records.',
  },
]

const engineeringProcess = [
  {
    number: '01',
    title: 'Requirement Review',
    description:
      'We review technical specifications, equipment requirements, application, quantities, project conditions, delivery location, and relevant documentation.',
  },
  {
    number: '02',
    title: 'Technical Sourcing',
    description:
      'Suitable products and suppliers are identified according to technical requirements, availability, brand preferences, commercial considerations, and project needs.',
  },
  {
    number: '03',
    title: 'Technical Comparison',
    description:
      'Product specifications, alternatives, pricing, lead time, availability, and relevant technical information are reviewed to support procurement decisions.',
  },
  {
    number: '04',
    title: 'Procurement Coordination',
    description:
      'Supplier communication, quotation coordination, order processing, documentation, and procurement follow-up are coordinated according to the agreed requirements.',
  },
  {
    number: '05',
    title: 'Delivery & Project Support',
    description:
      'Material delivery, logistics coordination, project requirements, and post-procurement support are coordinated to help maintain operational continuity.',
  },
]

const projectSupportItems = [
  'Technical requirement review',
  'Equipment and material sourcing',
  'Supplier identification and coordination',
  'Technical comparison and quotation support',
  'Procurement coordination',
  'Material delivery coordination',
  'Project execution assistance',
  'Technical documentation coordination',
]

const relatedCapabilities = [
  {
    title: 'Industrial Supply & Procurement',
    description:
      'Industrial materials, MRO supplies, equipment, packaging, sourcing, and procurement support.',
    href: '/capabilities/industrial-supply',
  },
  {
    title: 'Safety & Compliance Solutions',
    description:
      'Safety equipment, PPE, workplace safety products, and compliance-related supply support.',
    href: '/capabilities/safety-compliance',
  },
  {
    title: 'Project & Logistics Support',
    description:
      'Material delivery, logistics coordination, project support, and operational supply requirements.',
    href: '/capabilities/project-logistics',
  },
  {
    title: 'Manufacturing & FMCG',
    description:
      'Manufacturing support, packaging, private label, and FMCG-related procurement solutions.',
    href: '/capabilities/manufacturing',
  },
]

export default function EngineeringSupportPage() {
  return (
    <main id="top" className="bg-white">

      {/* =====================================================
          HERO
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
              Engineering & Technical Support
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
              Engineering
              <span className="block font-medium">
                & Technical Support
              </span>
            </h1>

            <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed max-w-3xl">
              PT KOJE Natural Indonesia provides technical sourcing,
              engineering coordination, equipment procurement, maintenance
              support, and project execution assistance for manufacturing,
              construction, engineering, and commercial operations across
              Indonesia.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition rounded-lg"
              >
                Submit Technical Inquiry
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/capabilities/industrial-supply"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium hover:border-gray-400 transition rounded-lg"
              >
                View Industrial Supply
              </Link>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES WE SERVE
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
              Technical support across
              <span className="font-medium">
                {' '}multiple industries.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our technical sourcing and engineering support can be adapted
              to different operational environments, project requirements,
              equipment specifications, and procurement needs.
            </p>

          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">

            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white px-4 py-5 text-center hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-sm text-gray-600">
                  {industry}
                </span>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          ENGINEERING CAPABILITY HIGHLIGHTS
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
                Engineering Scope
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Technical capabilities
              <span className="font-medium">
                {' '}built around project requirements.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our engineering support can be adapted to equipment
              specifications, operational requirements, project scope,
              procurement needs, and technical documentation.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-x-12 gap-y-5"
          >

            {capabilities.map((item, index) => (
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
          TECHNICAL SUPPORT AREAS
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
                Technical Support Areas
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              How We Can
              <span className="font-medium">
                {' '}Support Your Project
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Selected technical support areas covering sourcing,
              procurement, engineering coordination, maintenance,
              documentation, and project execution requirements.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

            {serviceAreas.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
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
          ENGINEERING / PROJECT PROCESS
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
                  Engineering Process
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
                A structured approach to
                <span className="block font-medium">
                  technical project support.
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                Technical requirements are coordinated from initial
                specification review through sourcing, procurement,
                delivery, and project support.
              </p>

            </div>

            <div className="space-y-0">

              {engineeringProcess.map((item, index) => (
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
          PROJECT SUPPORT
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-20"
          >

            <div>

              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Project Support
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
                Supporting technical
                <span className="block font-medium">
                  requirements from sourcing to delivery.
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-5 leading-relaxed max-w-xl">
                KOJE can support project teams with technical sourcing,
                supplier coordination, procurement activities, material
                requirements, documentation, and delivery coordination
                according to project scope.
              </p>

            </div>

            <div>

              <div className="border border-gray-100">

                {projectSupportItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.04,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 px-6 py-4 border-b border-gray-100 last:border-b-0"
                  >

                    <HiCheckCircle className="w-5 h-5 text-gray-400 shrink-0" />

                    <span className="text-sm text-gray-600">
                      {item}
                    </span>

                  </motion.div>
                ))}

              </div>

            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          INDUSTRIES SUPPORTED
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
                Industries Supported
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Technical support for
              <span className="font-medium">
                {' '}industrial operations.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our services can support technical procurement and project
              requirements across manufacturing, construction, engineering,
              commercial facilities, and industrial operations.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">

            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white p-6 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300"
              >

                <HiOfficeBuilding className="w-6 h-6 text-gray-400 mb-4" />

                <h3 className="text-sm font-medium text-gray-900">
                  {industry}
                </h3>

                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Technical sourcing, procurement, coordination, and
                  project support according to operational requirements.
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          RELATED CAPABILITIES
      ===================================================== */}

      <section className="py-20">
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
              <span className="font-medium">
                {' '}support your business.
              </span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Explore related capabilities that can complement technical
              sourcing, engineering coordination, procurement, and project
              support requirements.
            </p>

          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">

            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.05,
                }}
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
          TECHNICAL RFQ CTA
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

                Technical Inquiry

              </div>

              <h2 className="text-2xl md:text-3xl font-light mt-4">
                Need technical sourcing or project support?
              </h2>

              <p className="text-sm text-white/50 mt-3 max-w-2xl leading-relaxed">
                Send us your equipment requirements, technical
                specifications, spare parts requirements, or project
                scope. Our team can assist with technical sourcing,
                supplier coordination, procurement, and project support.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] px-7 py-3.5 text-sm font-medium hover:bg-gray-100 transition rounded-lg"
            >
              Submit Technical Inquiry

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
