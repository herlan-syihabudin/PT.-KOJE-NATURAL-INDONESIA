import Link from 'next/link'
import { HiArrowLeft, HiCheckCircle } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Industrial Supply & Procurement | PT KOJE Natural Indonesia',
  description:
    'Industrial supply, MRO, packaging materials, and procurement services for manufacturing and industrial operations across Indonesia.',
}

export default function IndustrialSupplyPage() {
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

            <h1 className="text-4xl md:text-5xl font-light mt-3 text-gray-900">
              Industrial Supply & Procurement
            </h1>

            <p className="text-gray-500 mt-5 text-sm md:text-base leading-relaxed">
              PT KOJE Natural Indonesia provides integrated procurement services including industrial supply,
              MRO, packaging materials, vendor coordination, and logistics support for industrial operations.
            </p>
          </div>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* CORE CAPABILITIES */}
          <h2 className="text-lg font-medium text-gray-900 mb-6">
            Core Capabilities
          </h2>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Industrial Supply & Distribution',
              'MRO Spareparts & Consumables',
              'Packaging Materials Procurement',
              'Vendor Management',
              'Logistics Coordination',
              'Supply Chain Support',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                <HiCheckCircle className="text-gray-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* SLA */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Service Level Agreement
              </h2>

              <ul className="text-sm text-gray-500 space-y-3">
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Response Time</span>
                  <span className="text-gray-700 font-medium">&lt; 4 Hours</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Quotation Delivery</span>
                  <span className="text-gray-700 font-medium">&lt; 24 Hours</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Delivery Lead Time</span>
                  <span className="text-gray-700 font-medium">3–7 Days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Quality Standard</span>
                  <span className="text-gray-700 font-medium">ISO Compliant</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Distribution Coverage
              </h2>

              <ul className="text-sm text-gray-500 space-y-3">
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Jabodetabek</span>
                  <span className="text-gray-700 font-medium">1–2 Days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Java</span>
                  <span className="text-gray-700 font-medium">2–4 Days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Sumatra</span>
                  <span className="text-gray-700 font-medium">3–5 Days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Eastern Indonesia</span>
                  <span className="text-gray-700 font-medium">5–7 Days</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="w-10 h-px bg-gray-300 my-10" />

          {/* RFQ FORM */}
          <div className="bg-gray-50 p-8 md:p-10">

            <h2 className="text-lg font-medium text-gray-900">
              Request For Quotation (RFQ)
            </h2>

            <p className="text-sm text-gray-500 mt-2 mb-6">
              Submit your procurement requirements. Our team will respond within 24 hours.
            </p>

            <form className="space-y-4">

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-gray-400 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-gray-400 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-gray-400 outline-none"
              />

              <textarea
                placeholder="Procurement requirements / specification..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 text-sm focus:border-gray-400 outline-none resize-none"
              />

              <button
                type="submit"
                className="bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition"
              >
                Submit RFQ
              </button>

            </form>

          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
