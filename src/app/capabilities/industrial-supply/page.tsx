import Link from 'next/link'
import { HiArrowLeft, HiCheckCircle, HiPhone, HiMail } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Industrial Supply & Procurement | KOJE Natural',
  description: 'PT KOJE Natural Indonesia provides industrial supply, MRO, packaging materials, and procurement support for manufacturing operations across Indonesia.',
}

export default function IndustrialSupplyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">

          {/* Back Link */}
          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-12 group"
          >
            <HiArrowLeft className="text-sm group-hover:-translate-x-0.5 transition" />
            Back to Capabilities
          </Link>

          {/* Title */}
          <div className="mb-8">
            <span className="text-xs tracking-[0.2em] text-gray-400 uppercase">
              Capability Detail
            </span>
            <h1 className="text-4xl md:text-5xl font-light mt-3 text-gray-900">
              Industrial Supply & Procurement
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-3xl">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light">
              PT KOJE Natural Indonesia provides comprehensive industrial supply, MRO, packaging materials, and procurement support for manufacturing operations across Indonesia.
            </p>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gray-300 my-10" />

          {/* Core Capabilities */}
          <h2 className="text-xl font-medium text-gray-900 mb-6">Core Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              'Industrial Supply',
              'MRO Spareparts',
              'Packaging Materials',
              'Procurement Support',
              'Logistics Coordination',
              'Vendor Management',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-600 text-sm">
                <HiCheckCircle className="text-primary/60 text-sm" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gray-300 my-10" />

          {/* SLA Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Service Level Agreement</h2>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Response Time</span>
                  <span className="font-medium text-gray-700">&lt; 4 hours</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Quotation Delivery</span>
                  <span className="font-medium text-gray-700">&lt; 24 hours</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Delivery Lead Time</span>
                  <span className="font-medium text-gray-700">3-7 days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Quality Assurance</span>
                  <span className="font-medium text-gray-700">ISO Certified</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-medium text-gray-900 mb-4">Distribution Coverage</h2>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Jabodetabek</span>
                  <span className="font-medium text-gray-700">1-2 days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Java</span>
                  <span className="font-medium text-gray-700">2-4 days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Sumatra</span>
                  <span className="font-medium text-gray-700">3-5 days</span>
                </li>
                <li className="flex justify-between border-b border-gray-100 py-2">
                  <span>Eastern Indonesia</span>
                  <span className="font-medium text-gray-700">5-7 days</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-gray-300 my-10" />

          {/* Inquiry Form Section */}
          <div className="bg-gray-50 p-8 md:p-10">
            <h2 className="text-xl font-medium text-gray-900 mb-2">Request a Quotation</h2>
            <p className="text-gray-400 text-sm mb-6 font-light">
              Submit your procurement inquiry and our team will respond within 24 hours.
            </p>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 outline-none transition text-sm"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 outline-none transition text-sm"
                />
              </div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 outline-none transition text-sm"
              />
              <textarea
                placeholder="Describe your procurement needs..."
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 outline-none transition text-sm resize-none"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
              >
                Submit Inquiry
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-400">
                Or contact us directly: <a href="tel:+6281234567890" className="text-gray-700 hover:text-primary transition">+62 812 3456 7890</a> • <a href="mailto:procurement@kojenatural.com" className="text-gray-700 hover:text-primary transition">procurement@kojenatural.com</a>
              </p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
