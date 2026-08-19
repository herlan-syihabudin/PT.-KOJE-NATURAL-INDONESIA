import Link from 'next/link'
import {
  HiChevronRight,
  HiOfficeBuilding,
  HiCube,
  HiTruck,
} from 'react-icons/hi'

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'Integrated procurement services covering industrial supply, MRO, packaging materials, vendor coordination, and logistics support for manufacturing operations.',
    items: [
      'Industrial supply & distribution',
      'MRO spare parts & consumables',
      'Packaging materials procurement',
      'Vendor sourcing & coordination',
      'Logistics coordination',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Technical sourcing and engineering support for industrial requirements, project specifications, equipment, materials, and operational needs.',
    items: [
      'Engineering support',
      'Technical sourcing',
      'Project requirements',
      'Equipment & materials',
      'Specification support',
    ],
    icon: HiCube,
    href: '/capabilities/engineering',
  },
  {
    id: '03',
    title: 'FMCG Manufacturing & Distribution',
    description:
      'Controlled manufacturing and distribution of beverage and FMCG products for commercial, retail, corporate, and private label supply chains.',
    items: [
      'Beverage production',
      'Private label manufacturing',
      'FMCG distribution',
      'Corporate supply',
      'Packaging solutions',
    ],
    icon: HiTruck,
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
            Procurement, Supply & Manufacturing Solutions
          </h2>

          <p className="text-sm text-gray-500 mt-5 leading-relaxed">
            PT KOJE Natural Indonesia operates as a procurement, supply, and
            manufacturing partner supporting industrial operations and FMCG
            supply chains across Indonesia.
          </p>
        </div>

        {/* CAPABILITIES LIST */}
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

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed max-w-3xl">
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

        {/* RFQ STRIP */}
        <div className="mt-20 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

          <div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
              Procurement Inquiry
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-2">
              Submit an RFQ for industrial procurement needs
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Our procurement team will review your requirements and respond promptly.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
          >
            Submit an RFQ
            <HiChevronRight className="w-4 h-4" />
          </Link>

        </div>

      </div>
    </section>
  )
}
