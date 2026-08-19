import Link from 'next/link'
import {
  HiArrowLeft,
  HiCheckCircle,
  HiClipboardCheck,
  HiCog,
  HiOfficeBuilding,
} from 'react-icons/hi'


export const metadata = {
  title: 'Engineering & Technical Support | PT KOJE Natural Indonesia',
  description:
    'Engineering support, technical sourcing, equipment procurement, maintenance coordination, and project execution support for industrial and commercial operations across Indonesia.',
}

const capabilities = [
  'Technical sourcing and specification review',
  'Engineering coordination',
  'Industrial equipment procurement',
  'Maintenance support and spare parts sourcing',
  'Project execution support',
  'Technical documentation and coordination',
]

export default function EngineeringSupportPage() {
  return (

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
          <div className="max-w-3xl mb-10">
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Capability Detail
            </span>

            <h1 className="text-4xl md:text-5xl font-light mt-3 text-gray-900 leading-tight">
              Engineering & Technical Support
            </h1>

            <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
              PT KOJE Natural Indonesia provides technical sourcing, engineering
              coordination, equipment procurement, maintenance support, and
              project execution assistance for industrial, manufacturing,
              construction, and commercial operations.
            </p>
          </div>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* CORE CAPABILITIES */}
          <section>
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Core Capabilities
            </h2>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-4 mb-12">
              {capabilities.map((item) => (
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

          {/* SERVICE AREAS */}
          <section className="mb-12">
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              Technical Support Areas
            </h2>

            <div className="grid md:grid-cols-3 gap-4">

              <div className="border border-gray-100 p-6">
                <HiCog className="w-5 h-5 text-gray-400 mb-4" />

                <h3 className="text-sm font-medium text-gray-900">
                  Technical Sourcing
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Sourcing industrial equipment, components, spare parts, and
                  technical materials based on project specifications and
                  operational requirements.
                </p>
              </div>

              <div className="border border-gray-100 p-6">
                <HiOfficeBuilding className="w-5 h-5 text-gray-400 mb-4" />

                <h3 className="text-sm font-medium text-gray-900">
                  Equipment Procurement
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Supporting equipment procurement through supplier
                  identification, quotation coordination, technical comparison,
                  and purchasing support.
                </p>
              </div>

              <div className="border border-gray-100 p-6">
                <HiClipboardCheck className="w-5 h-5 text-gray-400 mb-4" />

                <h3 className="text-sm font-medium text-gray-900">
                  Project Support
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  Coordinating technical requirements, suppliers, materials,
                  schedules, and project execution activities to support
                  operational delivery.
                </p>
              </div>

            </div>
          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* PROJECT SUPPORT */}
          <section className="grid md:grid-cols-2 gap-8 mb-12">

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Project Support
              </h2>

              <ul className="text-sm text-gray-500 space-y-3">
                <li className="flex items-center gap-3 border-b border-gray-100 py-2">
                  <span>Technical requirement review</span>
                </li>

                <li className="flex items-center gap-3 border-b border-gray-100 py-2">
                  <span>Supplier coordination</span>
                </li>

                <li className="flex items-center gap-3 border-b border-gray-100 py-2">
                  <span>Equipment and material sourcing</span>
                </li>

                <li className="flex items-center gap-3 border-b border-gray-100 py-2">
                  <span>Procurement coordination</span>
                </li>

                <li className="flex items-center gap-3 border-b border-gray-100 py-2">
                  <span>Project execution assistance</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Industries Supported
              </h2>

              <ul className="text-sm text-gray-500 space-y-3">
                <li className="border-b border-gray-100 py-2">
                  Manufacturing
                </li>

                <li className="border-b border-gray-100 py-2">
                  Construction
                </li>

                <li className="border-b border-gray-100 py-2">
                  Engineering & MEP
                </li>

                <li className="border-b border-gray-100 py-2">
                  Commercial Facilities
                </li>

                <li className="border-b border-gray-100 py-2">
                  Industrial Operations
                </li>
              </ul>
            </div>

          </section>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* RFQ CTA */}
          <section className="bg-gray-50 p-8 md:p-10">

            <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
              Technical Inquiry
            </span>

            <h2 className="text-xl font-medium text-gray-900 mt-3">
              Need technical sourcing or project support?
            </h2>

            <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
              Send your equipment requirements, technical specifications, or
              project requirements to our team. We can assist with sourcing,
              supplier coordination, procurement, and technical support.
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
  )
}
