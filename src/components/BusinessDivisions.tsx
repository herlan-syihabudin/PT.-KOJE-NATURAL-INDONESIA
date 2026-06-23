import Link from 'next/link'
import { HiChevronRight, HiOfficeBuilding, HiCube } from 'react-icons/hi'

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'Integrated procurement services covering industrial supply, MRO, packaging materials, vendor coordination, and logistics support for manufacturing operations.',
    items: [
      'Industrial supply & distribution',
      'MRO spareparts & consumables',
      'Packaging materials procurement',
      'Vendor management',
      'Logistics coordination',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Manufacturing & Distribution',
    description:
      'Controlled manufacturing and distribution of beverage and FMCG products for commercial, retail, and corporate supply chains.',
    items: [
      'Beverage production',
      'Private label manufacturing',
      'FMCG distribution network',
      'Corporate supply',
      'Packaging solutions',
    ],
    icon: HiCube,
    href: '/capabilities/manufacturing',
  },
]

export default function UltraCorporateCapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gray-300" />
            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Capabilities Statement
            </span>
            <span className="w-10 h-px bg-gray-300" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Supply & Manufacturing Solutions
          </h2>

          <p className="text-sm text-gray-500 mt-5 leading-relaxed">
            PT KOJE Natural Indonesia operates as a procurement and manufacturing partner supporting
            industrial supply chains and FMCG distribution networks across Indonesia.
          </p>
        </div>

        {/* LIST */}
        <div className="space-y-1">

          {capabilities.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group block border-b border-gray-100 py-7 hover:bg-gray-50/40 transition-colors -mx-6 px-6"
            >

              <div className="flex items-start gap-5">

                {/* ID */}
                <span className="text-xs font-medium text-gray-300 mt-1 group-hover:text-gray-400 transition">
                  {item.id}
                </span>

                {/* ICON */}
                <div className="mt-1 text-gray-300 group-hover:text-gray-600 transition">
                  <item.icon className="w-5 h-5" />
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">

                  <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {item.items.map((sub) => (
                      <span
                        key={sub}
                        className="text-sm text-gray-400 group-hover:text-gray-500 transition"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                </div>

                {/* ARROW */}
                <div className="ml-auto flex items-center text-gray-300 group-hover:text-gray-500 transition">
                  <HiChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </Link>
          ))}

        </div>

        {/* RFQ STRIP (MATCH SYSTEM) */}
        <div className="mt-20 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
              Procurement Inquiry
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-2">
              Submit RFQ for industrial procurement needs
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Response within 24 hours from procurement team
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
          >
            Submit RFQ
            <HiChevronRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  )
}
