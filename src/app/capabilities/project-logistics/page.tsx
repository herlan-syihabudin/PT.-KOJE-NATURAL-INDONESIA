import Link from 'next/link'
import {
  HiArrowLeft,
  HiCheckCircle,
  HiTruck,
  HiOfficeBuilding,
  HiClipboardCheck,
} from 'react-icons/hi'

export const metadata = {
  title: 'Project & Logistics Support | PT KOJE Natural Indonesia',
  description:
    'Project logistics, material delivery coordination, vendor management, scheduling support, and site logistics services for industrial and commercial projects across Indonesia.',
}

const capabilities = [
  'Logistics coordination',
  'Material delivery management',
  'Project scheduling support',
  'Vendor coordination',
  'Site logistics services',
  'Procurement and delivery coordination',
]

export default function ProjectLogisticsPage() {
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
            Project & Logistics Support
          </h1>

          <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
            PT KOJE Natural Indonesia supports industrial and commercial
            projects through logistics coordination, material delivery
            management, vendor coordination, scheduling support, and site
            logistics services.
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
            Logistics & Project Support Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="border border-gray-100 p-6">
              <HiTruck className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                Material Delivery
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Coordinating material deliveries from suppliers to project
                locations while supporting delivery schedules and operational
                requirements.
              </p>
            </div>

            <div className="border border-gray-100 p-6">
              <HiOfficeBuilding className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                Vendor Coordination
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Coordinating suppliers, vendors, purchasing requirements, and
                delivery activities to support smooth project execution.
              </p>
            </div>

            <div className="border border-gray-100 p-6">
              <HiClipboardCheck className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                Site Logistics
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Supporting material movement, delivery scheduling, site
                coordination, and logistics requirements during project
                execution.
              </p>
            </div>

          </div>
        </section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* SUPPORT SERVICES */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Project Logistics Services
            </h2>

            <ul className="text-sm text-gray-500 space-y-3">
              <li className="border-b border-gray-100 py-2">
                Material delivery coordination
              </li>

              <li className="border-b border-gray-100 py-2">
                Delivery scheduling
              </li>

              <li className="border-b border-gray-100 py-2">
                Supplier and vendor coordination
              </li>

              <li className="border-b border-gray-100 py-2">
                Site delivery coordination
              </li>

              <li className="border-b border-gray-100 py-2">
                Procurement-to-delivery coordination
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
                Warehousing & Distribution
              </li>

              <li className="border-b border-gray-100 py-2">
                Commercial Facilities
              </li>
            </ul>
          </div>

        </section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* CTA */}
        <section className="bg-gray-50 p-8 md:p-10">

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
            className="inline-flex items-center gap-2 mt-6 bg-gray-900 text-white px-7 py-3 text-sm hover:bg-gray-800 transition"
          >
            Submit Logistics Inquiry
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
