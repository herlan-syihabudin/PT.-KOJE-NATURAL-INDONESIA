// src/app/capabilities/engineering-support/page.tsx

import Link from 'next/link'
import {
  HiArrowLeft,
  HiCheckCircle,
  HiCog,
  HiOfficeBuilding,
  HiClipboardCheck,
  HiWrench,
} from 'react-icons/hi'

export const metadata = {
  title: 'Engineering & Technical Support | PT KOJE Natural Indonesia',
  description:
    'Engineering support, technical sourcing, equipment procurement, maintenance support, and project execution assistance for industrial and commercial operations across Indonesia.',
}

const coreCapabilities = [
  'Technical sourcing & equipment procurement',
  'Engineering coordination',
  'Industrial equipment supply',
  'Maintenance support',
  'Technical documentation support',
  'Project execution assistance',
]

const technicalServices = [
  {
    title: 'Technical Sourcing',
    description:
      'Sourcing industrial equipment, components, spare parts, and technical materials based on specifications, operational requirements, and project needs.',
    icon: HiCog,
  },
  {
    title: 'Equipment Procurement',
    description:
      'Supporting the procurement process for industrial equipment and technical products through supplier coordination, quotation comparison, and purchasing support.',
    icon: HiOfficeBuilding,
  },
  {
    title: 'Engineering Coordination',
    description:
      'Coordinating technical requirements between clients, suppliers, contractors, and project teams to support accurate procurement and project execution.',
    icon: HiClipboardCheck,
  },
  {
    title: 'Maintenance & Project Support',
    description:
      'Providing technical procurement and operational support for maintenance activities, equipment replacement, and ongoing industrial projects.',
    icon: HiWrench,
  },
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering',
  'Industrial Facilities',
  'Commercial Facilities',
  'FMCG',
]

export default function EngineeringSupportPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* BACK */}
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-10 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-0.5 transition" />
            Back to Capabilities
          </Link>

          {/* HEADER */}
          <div className="mb-10 max-w-3xl">
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Capability Detail
            </span>

            <div className="flex items-start gap-4 mt-3">
              <div className="hidden md:flex w-10 h-10 items-center justify-center border border-gray-100 text-gray-400 shrink-0">
                <HiCog className="w-5 h-5" />
              </div>

              <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
                Engineering & Technical Support
              </h1>
            </div>

            <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
              PT KOJE Natural Indonesia provides engineering support,
              technical sourcing, equipment procurement, maintenance support,
              and project coordination for industrial, construction,
              engineering, and commercial operations across Indonesia.
            </p>
          </div>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* CORE CAPABILITIES */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Core Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
              {coreCapabilities.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <HiCheckCircle className="text-gray-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* TECHNICAL SERVICES */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Technical Services
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {technicalServices.map((service) => {
                const Icon = service.icon

                return (
                  <div
                    key={service.title}
                    className="border border-gray-100 p-6 hover:border-gray-200 transition"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-5 h-5 text-gray-400" />

                      <h3 className="text-base font-medium text-gray-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* PROJECT SUPPORT */}
          <section className="mb-12">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Project & Technical Support
            </h2>

            <p className="text-sm text-gray-500 leading-relaxed max-w-3xl">
              Our technical support approach is designed to connect
              procurement requirements with practical project and operational
              needs. KOJE works with clients, suppliers, contractors, and
              technical teams to help identify suitable products, coordinate
              technical requirements, and support procurement execution.
            </p>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400">
                  01
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Requirement Review
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400">
                  02
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Technical Sourcing
                </p>
              </div>

              <div className="border-t border-gray-100 pt-4">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-400">
                  03
                </p>
                <p className="text-sm text-gray-700 mt-2">
                  Procurement Support
                </p>
              </div>
            </div>
          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* INDUSTRIES */}
          <section className="mb-12">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Industries We Serve
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-sm text-gray-600">
              {industries.map((industry) => (
                <div key={industry}>{industry}</div>
              ))}
            </div>
          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* RFQ CTA */}
          <section className="bg-gray-50 p-8 md:p-10">
            <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
              Technical Procurement Inquiry
            </p>

            <h2 className="text-xl font-medium text-gray-900 mt-2">
              Need technical sourcing or engineering support?
            </h2>

            <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
              Send your equipment specifications, technical requirements,
              project scope, or procurement needs. Our team can assist with
              sourcing, supplier coordination, and quotation.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 bg-gray-900 text-white px-7 py-3 text-sm hover:bg-gray-800 transition"
            >
              Submit Technical Inquiry
              <span>→</span>
            </Link>

            <p className="text-xs text-gray-400 mt-4">
              Response within 24 business hours
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
