import Link from 'next/link'
import {
  HiArrowLeft,
  HiCheckCircle,
  HiShieldCheck,
  HiOfficeBuilding,
  HiClipboardCheck,
} from 'react-icons/hi'

export const metadata = {
  title: 'Safety & Compliance Solutions | PT KOJE Natural Indonesia',
  description:
    'Industrial safety equipment, PPE, fire protection solutions, compliance support, and workplace safety supplies for manufacturing, construction, and commercial operations across Indonesia.',
}

const capabilities = [
  'Personal Protective Equipment (PPE)',
  'Industrial safety equipment',
  'Fire protection equipment',
  'Safety signage and workplace identification',
  'Compliance documentation support',
  'Safety training and implementation support',
]

export default function SafetyCompliancePage() {
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
            Safety & Compliance Solutions
          </h1>

          <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
            PT KOJE Natural Indonesia provides industrial safety equipment,
            personal protective equipment, fire protection solutions, and
            compliance support for manufacturing, construction, engineering,
            and commercial operations.
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
            Safety & Compliance Areas
          </h2>

          <div className="grid md:grid-cols-3 gap-4">

            <div className="border border-gray-100 p-6">
              <HiShieldCheck className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                PPE & Safety Equipment
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Supply of personal protective equipment and industrial safety
                products for workplace protection and operational requirements.
              </p>
            </div>

            <div className="border border-gray-100 p-6">
              <HiOfficeBuilding className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                Fire Protection
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Supporting fire protection requirements through equipment
                sourcing, procurement coordination, and related safety supplies.
              </p>
            </div>

            <div className="border border-gray-100 p-6">
              <HiClipboardCheck className="w-5 h-5 text-gray-400 mb-4" />

              <h3 className="text-sm font-medium text-gray-900">
                Compliance Support
              </h3>

              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Assistance with safety documentation, workplace requirements,
                supplier coordination, and implementation support.
              </p>
            </div>

          </div>
        </section>

        <div className="w-10 h-px bg-gray-300 my-10" />

        {/* SAFETY CATEGORIES */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">

          <div>
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Safety Product Categories
            </h2>

            <ul className="text-sm text-gray-500 space-y-3">
              <li className="border-b border-gray-100 py-2">
                Head, eye & face protection
              </li>

              <li className="border-b border-gray-100 py-2">
                Hand & body protection
              </li>

              <li className="border-b border-gray-100 py-2">
                Safety footwear
              </li>

              <li className="border-b border-gray-100 py-2">
                Respiratory protection
              </li>

              <li className="border-b border-gray-100 py-2">
                Fall protection equipment
              </li>

              <li className="border-b border-gray-100 py-2">
                Fire safety equipment
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
                Warehousing & Logistics
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

        {/* CTA */}
        <section className="bg-gray-50 p-8 md:p-10">

          <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
            Safety & Compliance Inquiry
          </span>

          <h2 className="text-xl font-medium text-gray-900 mt-3">
            Need safety equipment or compliance support?
          </h2>

          <p className="text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
            Send your safety requirements, product specifications, or workplace
            requirements to our team. We can assist with sourcing, procurement,
            supplier coordination, and safety support.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 mt-6 bg-gray-900 text-white px-7 py-3 text-sm hover:bg-gray-800 transition"
          >
            Submit Safety Inquiry
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
