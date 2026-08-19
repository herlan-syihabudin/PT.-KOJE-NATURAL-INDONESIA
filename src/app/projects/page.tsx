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
  HiDocumentText,
  HiLightningBolt,
} from 'react-icons/hi'

const projectApplications = [
  {
    number: '01',
    icon: HiOfficeBuilding,
    title: 'Industrial Procurement',
    industry: 'Manufacturing & Industrial',
    requirement:
      'Industrial materials, components, MRO products, consumables, and operational supplies.',
    scope:
      'Specification-based sourcing, procurement, supplier coordination, and delivery.',
    solution:
      'KOJE reviews the requirement, identifies suitable products and suppliers, coordinates quotations, and supports procurement through delivery.',
    tags: ['Industrial Supply', 'MRO', 'Procurement'],
  },
  {
    number: '02',
    icon: HiCog,
    title: 'Engineering & MEP Supply',
    industry: 'Engineering, Construction & MEP',
    requirement:
      'Electrical, mechanical, technical equipment, spare parts, and project-specific materials.',
    scope:
      'Technical sourcing, specification review, equipment procurement, and project coordination.',
    solution:
      'Requirements are reviewed against technical specifications before suitable products, brands, suppliers, and commercial options are coordinated.',
    tags: ['Engineering', 'MEP', 'Technical Supply'],
  },
  {
    number: '03',
    icon: HiCube,
    title: 'Factory & MRO Supply',
    industry: 'Manufacturing Operations',
    requirement:
      'Maintenance parts, production consumables, operational materials, and replacement components.',
    scope:
      'Recurring supply, sourcing, vendor coordination, and material delivery.',
    solution:
      'KOJE can coordinate multiple product categories and suppliers to support ongoing factory and operational requirements.',
    tags: ['Factory', 'MRO', 'Consumables'],
  },
  {
    number: '04',
    icon: HiBeaker,
    title: 'FMCG & Beverage Supply',
    industry: 'FMCG, Food & Beverage',
    requirement:
      'Beverage products, private label requirements, corporate orders, and FMCG supply.',
    scope:
      'Manufacturing coordination, packaging, production planning, and B2B supply.',
    solution:
      'KOJE supports beverage and FMCG requirements from product specification and production coordination through packaging and delivery.',
    tags: ['FMCG', 'Beverage', 'Private Label'],
  },
  {
    number: '05',
    icon: HiTruck,
    title: 'Corporate & Institutional Supply',
    industry: 'Corporate & Institutional',
    requirement:
      'Products and supplies required by offices, institutions, businesses, and organizational procurement.',
    scope:
      'Product sourcing, quotation coordination, bulk purchasing, and delivery.',
    solution:
      'KOJE provides a single coordination point for different product requirements, helping simplify purchasing and supply arrangements.',
    tags: ['Corporate', 'B2B', 'Bulk Supply'],
  },
  {
    number: '06',
    icon: HiClipboardCheck,
    title: 'Project Material & Logistics',
    industry: 'Construction & Project Operations',
    requirement:
      'Project-specific materials requiring scheduled procurement and delivery.',
    scope:
      'Material sourcing, supplier coordination, purchasing, scheduling, and logistics.',
    solution:
      'KOJE coordinates procurement activities with project requirements, delivery locations, quantities, and operational timelines.',
    tags: ['Project Supply', 'Logistics', 'Delivery'],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Requirement',
    description:
      'We receive the product specification, quantity, application, preferred brand, project scope, and delivery requirements.',
  },
  {
    number: '02',
    title: 'Review',
    description:
      'Our team reviews the requirement and determines the appropriate sourcing, procurement, manufacturing, or supply approach.',
  },
  {
    number: '03',
    title: 'Sourcing',
    description:
      'Suitable products, suppliers, production options, and commercial alternatives are identified based on the requirement.',
  },
  {
    number: '04',
    title: 'Coordination',
    description:
      'We coordinate quotations, availability, specifications, purchasing requirements, production, and logistics.',
  },
  {
    number: '05',
    title: 'Delivery',
    description:
      'The approved products or materials are prepared and delivered according to the agreed requirements and schedule.',
  },
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering & MEP',
  'Industrial Operations',
  'FMCG',
  'Food & Beverage',
  'Corporate',
  'Commercial Facilities',
]

export default function ProjectsPage() {
  return (
    <main id="top" className="bg-white text-gray-900">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#0A0F14] pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0FA3A8]/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[#0FA3A8]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 text-sm text-gray-400"
          >
            <Link
              href="/"
              className="transition hover:text-white"
            >
              Home
            </Link>

            <span>/</span>

            <span className="text-white">
              Projects
            </span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >

            <div className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-300">
              <HiClipboardCheck className="text-[#0FA3A8]" />
              Projects & Supply Applications
            </div>

            <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              From Business Requirements
              <span className="block text-[#0FA3A8]">
                to Practical Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-400 md:text-lg">
              PT KOJE Natural Indonesia supports industrial, commercial,
              engineering, manufacturing, and FMCG requirements through
              procurement, supply, manufacturing, and project coordination.
            </p>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
              Explore the types of project applications and business
              requirements that can be supported through KOJE&apos;s
              integrated supply and operational capabilities.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#0FA3A8] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0C8A8E]"
              >
                Discuss Your Project
                <HiArrowRight />
              </Link>

              <Link
                href="/capabilities"
                className="inline-flex min-h-[48px] items-center justify-center border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Capabilities
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center"
          >

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                Project Applications
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                Different requirements.
                <span className="block text-gray-400">
                  One coordinated partner.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600">
              <p>
                Every business requirement has different specifications,
                quantities, timelines, and purchasing structures. KOJE
                supports these requirements by coordinating the right
                products, suppliers, production resources, and delivery
                arrangements.
              </p>

              <p>
                The applications below represent the types of industrial,
                commercial, project, and FMCG requirements that can be
                supported through our operational capabilities.
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT APPLICATIONS
      ===================================================== */}

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
              Selected Applications
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Where KOJE Can Support
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Examples of business and project requirements that can be
              supported through our procurement, supply, manufacturing,
              and logistics capabilities.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {projectApplications.map((project, index) => {
              const Icon = project.icon

              return (
                <motion.article
                  key={project.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                  className="group border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0FA3A8]/30 hover:shadow-xl md:p-8"
                >

                  {/* Header */}
                  <div className="flex items-start justify-between gap-5">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#0FA3A8]/10 text-2xl text-[#0FA3A8]">
                        <Icon />
                      </div>

                      <div>
                        <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                          Project Application
                        </div>

                        <div className="mt-1 text-xs font-medium text-[#0FA3A8]">
                          {project.number}
                        </div>
                      </div>

                    </div>

                    <HiArrowRight className="mt-1 text-gray-300 transition duration-300 group-hover:translate-x-1 group-hover:text-[#0FA3A8]" />

                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>

                  {/* Industry */}
                  <div className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                    {project.industry}
                  </div>

                  {/* Requirement */}
                  <div className="mt-7">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Requirement
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {project.requirement}
                    </p>
                  </div>

                  {/* Scope */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Scope
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {project.scope}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mt-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      KOJE Solution
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {project.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-7 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </motion.article>
              )
            })}
          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT PROCESS
      ===================================================== */}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                Project Workflow
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
                From requirement
                <span className="block text-gray-400">
                  to delivery.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-gray-600">
                Our process is designed to keep procurement, sourcing,
                manufacturing, and delivery requirements coordinated
                from the beginning of an engagement through completion.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-900 transition hover:text-[#0FA3A8]"
              >
                Start a project discussion
                <HiArrowRight />
              </Link>

            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">

              {processSteps.map((step) => (
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

      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="border-y border-gray-100 bg-[#F8FAFC] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
              Industries & Applications
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Supporting different
              <span className="text-gray-400">
                {' '}operational environments.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Our project applications can be adapted to different
              industries, purchasing structures, operational requirements,
              and project environments.
            </p>

          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">

            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white px-5 py-5 transition duration-300 hover:-translate-y-1 hover:border-[#0FA3A8]/30"
              >
                <div className="flex items-center gap-3">

                  <HiCheckCircle className="shrink-0 text-[#0FA3A8]" />

                  <span className="text-sm text-gray-600">
                    {industry}
                  </span>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          PROJECT TYPES
      ===================================================== */}

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-6 md:grid-cols-3">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-gray-200 bg-white p-7"
            >

              <HiDocumentText className="text-2xl text-[#0FA3A8]" />

              <h3 className="mt-5 text-lg font-semibold">
                Specification-Based Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Suitable for requirements where products, materials,
                equipment, brands, quantities, or technical specifications
                have already been defined.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              viewport={{ once: true }}
              className="border border-gray-200 bg-white p-7"
            >

              <HiLightningBolt className="text-2xl text-[#0FA3A8]" />

              <h3 className="mt-5 text-lg font-semibold">
                Sourcing Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Suitable when clients need assistance identifying
                products, suppliers, alternatives, availability,
                or procurement options.
              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              viewport={{ once: true }}
              className="border border-gray-200 bg-white p-7"
            >

              <HiTruck className="text-2xl text-[#0FA3A8]" />

              <h3 className="mt-5 text-lg font-semibold">
                Supply & Delivery Projects
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                Suitable for project requirements involving purchasing,
                production, material coordination, scheduled delivery,
                and ongoing supply.
              </p>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="bg-[#0A0F14] py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center"
          >

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0FA3A8]">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
                Have a project or supply requirement?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400">
                Send us your product specification, quantity, preferred
                brand, equipment requirement, project scope, or delivery
                requirement. Our team will review the request and determine
                the appropriate support approach.
              </p>

            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[#0FA3A8] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0C8A8E]"
              >
                Submit RFQ
                <HiArrowRight />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 border border-white/15 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                View Products
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          BACK TO TOP
      ===================================================== */}

      <div className="border-t border-gray-100 py-6">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-gray-700"
          >
            <HiArrowUp className="h-4 w-4" />
            Back to Top
          </Link>

        </div>
      </div>

    </main>
  )
}
