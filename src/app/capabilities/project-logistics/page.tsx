'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowRight,
  HiArrowUp,
  HiCheckCircle,
  HiTruck,
  HiOfficeBuilding,
  HiClipboardCheck,
} from 'react-icons/hi'

const capabilities = [
  'Logistics coordination',
  'Material delivery management',
  'Project scheduling support',
  'Vendor coordination',
  'Site logistics services',
  'Procurement and delivery coordination',
]

const serviceAreas = [
  {
    icon: HiTruck,
    title: 'Material Delivery',
    description:
      'Coordinating material deliveries from suppliers to project locations while supporting delivery schedules and operational requirements.',
  },
  {
    icon: HiOfficeBuilding,
    title: 'Vendor Coordination',
    description:
      'Coordinating suppliers, vendors, purchasing requirements, and delivery activities to support smooth project execution.',
  },
  {
    icon: HiClipboardCheck,
    title: 'Site Logistics',
    description:
      'Supporting material movement, delivery scheduling, site coordination, and logistics requirements during project execution.',
  },
]

const logisticsServices = [
  'Material delivery coordination',
  'Delivery scheduling',
  'Supplier and vendor coordination',
  'Site delivery coordination',
  'Procurement-to-delivery coordination',
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering & MEP',
  'Warehousing & Distribution',
  'Commercial Facilities',
]

const howWeSupport = [
  {
    title: 'Procurement to Delivery',
    description:
      'We support coordination between procurement activities, suppliers, material availability, delivery schedules, and project requirements to help maintain an organized supply flow.',
  },
  {
    title: 'Project Material Coordination',
    description:
      'Material requirements can be coordinated with project schedules, delivery locations, supplier lead times, and operational requirements.',
  },
  {
    title: 'Supplier & Vendor Coordination',
    description:
      'We coordinate supplier communication, quotations, availability, delivery requirements, and purchasing information according to project needs.',
  },
  {
    title: 'Site Delivery Support',
    description:
      'Delivery activities can be coordinated with site requirements, receiving schedules, project locations, and material handling requirements.',
  },
]

const relatedCapabilities = [
  {
    title: 'Industrial Supply & Procurement',
    description: 'Industrial products, MRO supplies, sourcing, and procurement support.',
    href: '/capabilities/industrial-supply',
  },
  {
    title: 'Engineering & Technical Support',
    description: 'Technical sourcing, equipment procurement, and engineering support.',
    href: '/capabilities/engineering-support',
  },
  {
    title: 'Safety & Compliance Solutions',
    description: 'Industrial safety equipment and compliance-related supply solutions.',
    href: '/capabilities/safety-compliance',
  },
]

export default function ProjectLogisticsPage() {
  return (
    <main id="top" className="pt-28 md:pt-32 pb-20 bg-white">
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
          <Link href="/capabilities" className="hover:text-gray-600 transition">
            Capabilities
          </Link>
          <span>/</span>
          <span className="text-gray-900">Project & Logistics Support</span>
        </nav>

        {/* BACK */}
        <Link
          href="/capabilities"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-8 group"
        >
          <HiArrowLeft className="group-hover:-translate-x-0.5 transition" />
          Back to Capabilities
        </Link>

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Capability Detail
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>

          <h1 className="text-4xl md:text-5xl font-light mt-3 text-gray-900 leading-tight">
            Project & Logistics Support
          </h1>

          <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
            PT KOJE Natural Indonesia supports industrial and commercial
            projects through logistics coordination, material delivery
            management, vendor coordination, scheduling support, and site
            logistics services.
          </p>
        </motion.div>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* CORE CAPABILITIES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mb-12">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 text-sm text-gray-600"
              >
                <HiCheckCircle className="text-gray-400 mt-0.5 shrink-0" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* SERVICE AREAS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Logistics & Project Support Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {serviceAreas.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="border border-gray-100 p-6 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-gray-400 mb-4" />

                  <h3 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* PROJECT LOGISTICS SERVICES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Project Logistics Services
          </h2>

          <ul className="text-sm text-gray-500 space-y-3">
            {logisticsServices.map((item) => (
              <li key={item} className="border-b border-gray-100 py-2">
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* HOW WE SUPPORT PROJECT LOGISTICS */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            How We Support Project Logistics
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {howWeSupport.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-6 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-sm font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* INDUSTRIES SUPPORTED */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Industries Supported
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* RELATED CAPABILITIES */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-5">
            Related Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {relatedCapabilities.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Link
                  href={item.href}
                  className="block border border-gray-100 p-5 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-sm font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2">
                    {item.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 md:p-10"
        >
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
            Logistics Inquiry
          </span>

          <h2 className="text-xl font-medium text-gray-900 mt-3">
            Need project logistics support?
          </h2>

          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Send your project location, material requirements, delivery
            schedule, or logistics requirements to our team. We can assist
            with coordination from procurement through delivery.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-gray-900 text-white px-7 py-3 text-sm hover:bg-gray-800 transition rounded-lg"
          >
            Submit Logistics Inquiry
            <HiArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-gray-400 mt-4">
            Response within 24 business hours
          </p>
        </motion.section>

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
    </main>
  )
}
