import Link from 'next/link'
import { HiChevronRight } from 'react-icons/hi'

const capabilities = [
  {
    title: 'Industrial Supply & Procurement',
    description:
      'PT KOJE Natural Indonesia provides industrial supply, MRO, packaging materials, and procurement support for manufacturing operations across Indonesia.',
    items:
      'Industrial supply, MRO spareparts, packaging materials, procurement support, logistics coordination.',
    href: '/capabilities/industrial-supply',
  },
  {
    title: 'Manufacturing & Distribution',
    description:
      'Production and distribution of beverage products under controlled quality standards for commercial and corporate supply.',
    items:
      'Beverage production, private label manufacturing, distribution network, corporate supply.',
    href: '/capabilities/manufacturing',
  },
]

export default function UltraCorporateCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER - Document Style */}
        <div className="mb-16">
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

        {/* LIST - Clickable Rows */}
        <div className="space-y-1">

          {capabilities.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group block border-b border-gray-100 py-6 last:border-0 hover:bg-gray-50/50 transition-colors -mx-6 px-6"
            >
              <div className="flex items-start gap-4">

                {/* Number */}
                <span className="text-sm font-medium text-gray-300 mt-0.5 group-hover:text-gray-400 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed group-hover:text-gray-600 transition-colors">
                    {item.description}
                  </p>

                  <p className="text-sm text-gray-400 mt-2 leading-relaxed group-hover:text-gray-500 transition-colors">
                    {item.items}
                  </p>
                </div>

                {/* Arrow - Subtle */}
                <div className="ml-auto flex items-center text-gray-300 group-hover:text-gray-500 transition-colors">
                  <HiChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>

              </div>
            </Link>
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
