import Link from 'next/link'
import {
  HiChevronRight,
  HiOfficeBuilding,
  HiCog,
  HiShieldCheck,
  HiBeaker,
  HiTruck,
  HiDocumentText
} from 'react-icons/hi'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Capabilities | PT KOJE Natural Indonesia',
  description:
    'Industrial supply, engineering support, safety compliance, and FMCG manufacturing solutions for corporate and industrial clients.',
}

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'End-to-end procurement services for industrial supply chains including MRO, consumables, packaging, and vendor coordination.',
    items: [
      'Industrial supply & distribution',
      'MRO spareparts & consumables',
      'Packaging materials',
      'Vendor management',
      'Logistics coordination',
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Technical sourcing and engineering support for industrial projects, maintenance operations, and equipment procurement.',
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
      'Provision of industrial safety equipment and compliance systems aligned with workplace safety standards.',
    items: [
      'PPE supply',
      'Safety systems',
      'Fire protection equipment',
      'Compliance documentation',
      'Training support',
    ],
    icon: HiShieldCheck,
    href: '/capabilities/safety-compliance',
  },
  {
    id: '04',
    title: 'Manufacturing & FMCG Distribution',
    description:
      'Controlled beverage manufacturing and FMCG production with integrated distribution for corporate and retail channels.',
    items: [
      'Beverage manufacturing',
      'Private label production',
      'FMCG distribution',
      'Corporate supply',
      'Custom packaging',
    ],
    icon: HiBeaker,
    href: '/capabilities/beverage',
  },
]

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6">

          {/* HEADER - Procurement Style */}
          <div className="mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capabilities Statement
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Integrated Procurement & Industrial Solutions
            </h1>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed">
              PT KOJE Natural Indonesia operates as a procurement and manufacturing partner supporting
              industrial supply chains, engineering operations, safety systems, and FMCG distribution networks.
            </p>
          </div>

          {/* GRID - Enterprise Cards */}
          <div className="grid md:grid-cols-2 gap-6">

            {capabilities.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group border border-gray-100 hover:border-gray-300 transition bg-white p-7 hover:-translate-y-1 duration-300"
              >

                {/* Top Row */}
                <div className="flex items-start justify-between mb-6">

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-gray-300">
                      {item.id}
                    </span>

                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition" />
                  </div>

                  <HiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-gray-600 group-hover:translate-x-1 transition" />
                </div>

                {/* Title */}
                <h2 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  {item.description}
                </p>

                {/* Bullet List */}
                <div className="mt-5 space-y-2">
                  {item.items.map((sub) => (
                    <div key={sub} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="w-1 h-1 mt-2 bg-gray-300 rounded-full" />
                      {sub}
                    </div>
                  ))}
                </div>

              </Link>
            ))}

          </div>

          {/* RFQ STRIP - IMPORTANT ENTERPRISE ELEMENT */}
          <div className="mt-20 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.2em]">
                <HiDocumentText className="w-4 h-4" />
                Procurement RFQ System
              </div>

              <h3 className="text-lg font-medium text-gray-900 mt-2">
                Submit industrial procurement request
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Response within 24 hours by procurement team
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
