'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiArrowUp,
  HiCheckCircle,
  HiOfficeBuilding,
  HiCog,
  HiTruck,
  HiBeaker,
  HiClipboardCheck,
  HiCube,
} from 'react-icons/hi'

const projectCategories = [
  {
    icon: HiOfficeBuilding,
    title: 'Industrial Supply & Procurement',
    description:
      'Procurement support for industrial materials, equipment, components, and operational requirements based on project specifications.',
    items: [
      'Material sourcing',
      'Equipment procurement',
      'Vendor coordination',
      'Project-based purchasing',
    ],
    href: '/capabilities/industrial-supply',
  },
  {
    icon: HiCog,
    title: 'Engineering Support',
    description:
      'Technical and engineering support to help clients coordinate requirements, specifications, materials, and implementation needs.',
    items: [
      'Technical coordination',
      'Material specification',
      'Engineering support',
      'Project documentation',
    ],
    href: '/capabilities/engineering-support',
  },
  {
    icon: HiBeaker,
    title: 'FMCG Manufacturing',
    description:
      'Manufacturing support for beverage and FMCG products with a focus on quality, consistency, and scalable production requirements.',
    items: [
      'Beverage production',
      'Product development',
      'Private label support',
      'Production coordination',
    ],
    href: '/capabilities/manufacturing-fmcg',
  },
  {
    icon: HiTruck,
    title: 'FMCG Distribution',
    description:
      'Supply and distribution support designed to connect products with business, retail, corporate, and institutional requirements.',
    items: [
      'Product distribution',
      'B2B supply',
      'Corporate orders',
      'Supply coordination',
    ],
    href: '/capabilities/project-logistics',
  },
]

const workflow = [
  {
    number: '01',
    title: 'Requirement',
    description:
      'We review your project requirements, specifications, quantities, timeline, and delivery expectations.',
  },
  {
    number: '02',
    title: 'Sourcing',
    description:
      'Our team identifies suitable products, materials, suppliers, or production solutions based on the requirement.',
  },
  {
    number: '03',
    title: 'Coordination',
    description:
      'We coordinate technical details, commercial requirements, availability, production, and logistics.',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'The approved solution is prepared and delivered according to the agreed project requirements.',
  },
]

const operationalItems = [
  {
    icon: HiCube,
    title: 'Supply',
    text: 'Product and material sourcing based on requirements.',
  },
  {
    icon: HiCog,
    title: 'Technical',
    text: 'Coordination and engineering support where required.',
  },
  {
    icon: HiBeaker,
    title: 'Manufacturing',
    text: 'FMCG and beverage production support.',
  },
  {
    icon: HiTruck,
    title: 'Distribution',
    text: 'Product supply and delivery coordination.',
  },
]

export default function ProjectsPage() {
  return (
    <main id="top" className="bg-white text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A0F14] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#0FA3A8]/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#0FA3A8]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
              <HiClipboardCheck className="text-[#0FA3A8]" />
              Projects & Operations
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Supporting Business Requirements
              <span className="block text-[#0FA3A8]">
                From Procurement to Delivery
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              PT KOJE Natural Indonesia provides integrated procurement,
              engineering support, manufacturing, and distribution solutions
              for industrial and FMCG business requirements.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#0FA3A8] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0C8A8E]"
              >
                Discuss Your Requirement
                <HiArrowRight />
              </Link>

              <Link
                href="/capabilities"
                className="inline-flex min-h-[48px] items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                Explore Capabilities
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                Our Operations
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                One partner for multiple business requirements.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600">
              <p>
                Every project has different requirements. From sourcing
                industrial materials and coordinating technical specifications
                to manufacturing and distributing FMCG products, KOJE works
                as a flexible supply and operational partner.
              </p>

              <p>
                Our approach is built around understanding the requirement
                first, coordinating the right resources, and delivering a
                practical solution aligned with the client&apos;s operational
                needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
              Project Scope
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Areas We Support
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our operational scope covers procurement, technical support,
              manufacturing, and distribution requirements.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projectCategories.map((category, index) => {
              const Icon = category.icon

              return (
                <motion.article
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0FA3A8]/30 hover:shadow-xl md:p-8"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#0FA3A8]/10 text-2xl text-[#0FA3A8]">
                      <Icon />
                    </div>

                    <span className="text-xs font-medium uppercase tracking-[0.15em] text-gray-400">
                      KOJE
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {category.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <HiCheckCircle className="mt-0.5 shrink-0 text-[#0FA3A8]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={category.href}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition group-hover:text-[#0FA3A8]"
                  >
                    Explore capability
                    <HiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECT APPROACH */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                How We Work
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Structured process.
                <span className="block text-gray-400">
                  Practical execution.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
                We aim to make procurement and supply coordination simpler by
                maintaining clear communication from initial requirement
                through delivery.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#0FA3A8]"
              >
                Start a discussion
                <HiArrowRight />
              </Link>
            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {workflow.map((step) => (
                <div
                  key={step.number}
                  className="grid gap-5 py-7 sm:grid-cols-[80px_1fr]"
                >
                  <div className="text-sm font-semibold tracking-[0.15em] text-[#0FA3A8]">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* OPERATIONAL VALUE */}
      <section className="bg-[#0A0F14] py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                Operational Support
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Built for business requirements that need flexibility.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
                Whether the requirement involves industrial procurement,
                technical coordination, beverage manufacturing, or product
                distribution, KOJE can support the process based on the scope
                and specifications of each engagement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {operationalItems.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="border border-white/10 bg-white/[0.03] p-6"
                  >
                    <Icon className="text-2xl text-[#0FA3A8]" />

                    <h3 className="mt-5 font-semibold">{item.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {item.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border border-gray-200 bg-gray-50 px-6 py-12 text-center md:px-12 md:py-16"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
              Start a Project
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Have a procurement or supply requirement?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
              Share your requirements with our team. We can review the scope,
              specifications, quantity, and timeline to determine the right
              approach.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#0FA3A8] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0C8A8E]"
              >
                Request an RFQ
                <HiArrowRight />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-[48px] items-center justify-center border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400"
              >
                View Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BACK TO TOP */}
      <div className="border-t border-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center">
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
