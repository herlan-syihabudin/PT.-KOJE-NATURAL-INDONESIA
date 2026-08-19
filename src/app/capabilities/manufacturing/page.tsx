import Link from 'next/link'
import {
  HiChevronRight,
  HiOfficeBuilding,
  HiCog,
  HiShieldCheck,
  HiBeaker,
  HiTruck,
  HiDocumentText,
} from 'react-icons/hi'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Capabilities | PT KOJE Natural Indonesia',
  description:
    'PT KOJE Natural Indonesia provides industrial supply, procurement, engineering support, safety solutions, manufacturing, FMCG distribution, and project logistics services across Indonesia.',
}

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'Industrial supply and procurement services covering MRO, consumables, packaging materials, industrial products, sourcing, vendor coordination, and delivery support.',
    items: [
      'Industrial supply & distribution',
      'MRO spareparts & consumables',
      'Packaging materials',
      'Product sourcing',
      'Vendor management',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Technical sourcing and procurement support for industrial projects, maintenance operations, equipment requirements, and engineering-related needs.',
    items: [
      'Technical sourcing',
      'Engineering coordination',
      'Equipment procurement',
      'Maintenance support',
      'Project execution support',
    ],
    icon: HiCog,
    href: '/capabilities/engineering-support',
  },
  {
    id: '03',
    title: 'Safety & Compliance Solutions',
    description:
      'Industrial safety equipment and supporting solutions for workplace safety, operational requirements, and compliance needs.',
    items: [
      'Personal Protective Equipment',
      'Industrial safety equipment',
      'Fire protection equipment',
      'Safety systems',
      'Compliance support',
    ],
    icon: HiShieldCheck,
    href: '/capabilities/safety-compliance',
  },
  {
    id: '04',
    title: 'Manufacturing & FMCG',
    description:
      'Manufacturing and FMCG supply solutions covering beverage production, private label products, packaging, corporate supply, and distribution channels.',
    items: [
      'Beverage manufacturing',
      'Private label production',
      'FMCG products',
      'Corporate supply',
      'Custom packaging',
    ],
    icon: HiBeaker,
    href: '/capabilities/manufacturing-fmcg',
  },
  {
    id: '05',
    title: 'Project & Logistics Support',
    description:
      'Procurement and logistics coordination supporting material delivery, project requirements, vendor coordination, and operational execution.',
    items: [
      'Logistics coordination',
      'Material delivery management',
      'Project scheduling support',
      'Vendor coordination',
      'Site logistics support',
    ],
    icon: HiTruck,
    href: '/capabilities/project-logistics',
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-16 max-w-3xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capabilities Statement
              </span>

              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Integrated Procurement &
              <span className="block font-medium">
                Industrial Solutions
              </span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              PT KOJE Natural Indonesia operates as a procurement,
              supply, manufacturing, and project support partner for
              industrial, manufacturing, construction, engineering,
              and commercial clients across Indonesia.
            </p>

          </div>


          {/* CAPABILITIES GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {capabilities.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group border border-gray-100 hover:border-gray-300 transition bg-white p-7 hover:-translate-y-1 duration-300"
                >

                  {/* TOP ROW */}
                  <div className="flex items-start justify-between mb-6">

                    <div className="flex items-center gap-3">

                      <span className="text-xs font-medium text-gray-300">
                        {item.id}
                      </span>

                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" />

                    </div>

                    <HiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition" />

                  </div>


                  {/* TITLE */}
                  <h2 className="text-lg font-medium text-gray-900">
                    {item.title}
                  </h2>


                  {/* DESCRIPTION */}
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>


                  {/* ITEMS */}
                  <div className="mt-5 space-y-2">

                    {item.items.map((sub) => (
                      <div
                        key={sub}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >

                        <span className="w-1 h-1 mt-2 bg-gray-300 rounded-full shrink-0" />

                        {sub}

                      </div>
                    ))}

                  </div>

                </Link>
              )
            })}

          </div>


          {/* INDUSTRIES */}
          <div className="mt-20 pt-12 border-t border-gray-100">

            <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
              Industries We Serve
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-gray-600">

              <div>Manufacturing</div>
              <div>Construction</div>
              <div>FMCG</div>
              <div>Engineering</div>
              <div>Commercial Facilities</div>

            </div>

          </div>


          {/* RFQ */}
          <div className="mt-16 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>

              <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.2em]">

                <HiDocumentText className="w-4 h-4" />

                Procurement Inquiry

              </div>

              <h3 className="text-lg font-medium text-gray-900 mt-2">
                Have a procurement or project requirement?
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Send your product specification, quantity, or project requirements to our team.
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
      </main>

      <Footer />
    </>
  )
}
