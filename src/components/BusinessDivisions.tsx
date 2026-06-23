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

        {/* HEADER - Document Style */}
        <div className="mb-16">
          {/* Badge with lines */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-gray-300" />
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Capabilities Statement
            </span>
            <span className="w-8 h-px bg-gray-300" />
          </div>

          <h2 className="text-3xl md:text-4xl font-light mt-6 text-gray-900">
            Supply & Manufacturing
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-2xl">
            PT KOJE Natural Indonesia operates as a procurement and manufacturing partner 
            supporting industrial supply chains and distribution networks in Indonesia.
          </p>
        </div>

        {/* LIST STYLE - Clean, No Card */}
        <div className="space-y-12">

          {capabilities.map((item, i) => (
            <div key={i} className="border-b border-gray-200 pb-12 last:border-0 last:pb-0">

              {/* Title with subtle indicator */}
              <div className="flex items-start gap-4">
                <span className="text-sm font-medium text-gray-300 mt-0.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
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
              </div>

            </div>
          ))}

        </div>

        {/* SIMPLE CONTACT CTA */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <p className="text-xs text-gray-400 tracking-[0.2em] uppercase">
            Procurement Inquiry
          </p>

          <div className="flex items-center gap-6 mt-3">
            <Link
              href="/contact"
              className="inline-block text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
            >
              Submit RFQ →
            </Link>
            <span className="text-xs text-gray-300">|</span>
            <Link
              href="/capabilities"
              className="inline-block text-sm text-gray-500 border-b border-transparent pb-1 hover:border-gray-300 transition"
            >
              View full capabilities
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
