import Link from 'next/link'
import { HiOfficeBuilding, HiCube } from 'react-icons/hi'

const capabilities = [
  {
    title: 'Industrial Supply & Procurement',
    description:
      'PT KOJE Natural Indonesia provides industrial supply, MRO, packaging materials, and procurement support for manufacturing operations across Indonesia.',
    items:
      'Industrial supply, MRO spareparts, packaging materials, procurement support, logistics coordination.',
  },
  {
    title: 'Manufacturing & Distribution',
    description:
      'Production and distribution of beverage products under controlled quality standards for commercial and corporate supply.',
    items:
      'Beverage production, private label manufacturing, distribution network, corporate supply.',
  },
]

export default function UltraCorporateCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER - DOCUMENT STYLE */}
        <div className="mb-16">
          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase">
            Capabilities Statement
          </p>

          <h2 className="text-3xl font-light mt-4 text-gray-900">
            Supply & Manufacturing Overview
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-2xl">
            PT KOJE Natural Indonesia operates as a procurement and manufacturing partner supporting industrial supply chains and distribution networks in Indonesia.
          </p>
        </div>

        {/* LIST STYLE (NO CARD, NO SHADOW) */}
        <div className="space-y-12">

          {capabilities.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-10">

              <h3 className="text-lg font-medium text-gray-900">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                {item.description}
              </p>

              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                {item.items}
              </p>

            </div>
          ))}

        </div>

        {/* SIMPLE CONTACT CTA */}
        <div className="mt-16">
          <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
            Procurement Inquiry
          </p>

          <Link
            href="/contact"
            className="inline-block mt-3 text-sm text-gray-900 border-b border-gray-300 pb-1"
          >
            Submit RFQ →
          </Link>
        </div>

      </div>
    </section>
  )
}
