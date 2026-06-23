import Link from 'next/link'
import { HiChevronRight, HiOfficeBuilding, HiCog, HiShieldCheck, HiBeaker } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const capabilities = [
  {
    id: '01',
    title: 'Industrial Supply & Procurement',
    description:
      'PT KOJE Natural Indonesia provides industrial supply, MRO, packaging materials, and procurement support for manufacturing operations across Indonesia.',
    items: [
      'Industrial supply & distribution',
      'MRO spareparts & consumables',
      'Packaging materials',
      'Procurement support & vendor management',
      'Logistics coordination'
    ],
    icon: HiOfficeBuilding,
    href: '/capabilities/industrial-supply',
  },
  {
    id: '02',
    title: 'Engineering & Technical Support',
    description:
      'Supporting industrial projects through technical sourcing, engineering coordination, equipment procurement, and project execution support.',
    items: [
      'Technical sourcing & procurement',
      'Engineering project support',
      'Equipment procurement',
      'Maintenance & repair services',
      'Site execution coordination'
    ],
    icon: HiCog,
    href: '/capabilities/engineering-support',
  },
  {
    id: '03',
    title: 'Safety & Compliance Solutions',
    description:
      'Providing safety equipment, PPE, and compliance solutions for industrial and construction sectors to ensure workplace safety standards.',
    items: [
      'Personal Protective Equipment (PPE)',
      'Safety equipment & signage',
      'Fire protection systems',
      'Compliance documentation',
      'Safety training support'
    ],
    icon: HiShieldCheck,
    href: '/capabilities/safety-compliance',
  },
  {
    id: '04',
    title: 'Beverage & FMCG Solutions',
    description:
      'Production and distribution of beverage products, private label manufacturing, and FMCG supply for commercial and corporate partners.',
    items: [
      'Beverage production & bottling',
      'Private label manufacturing',
      'FMCG distribution network',
      'Corporate supply & gifting',
      'Custom formulation & packaging'
    ],
    icon: HiBeaker,
    href: '/capabilities/beverage',
  },
]

export const metadata = {
  title: 'Industrial Supply Capabilities | PT KOJE Natural Indonesia',
  description: 'PT KOJE Natural Indonesia provides procurement, industrial supply, and technical support solutions for manufacturing, engineering, construction, and commercial sectors across Indonesia.',
}

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* HEADER */}
          <div className="mb-16">
            <div className="flex items-center gap-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capabilities Statement
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-3xl md:text-4xl font-light mt-6 text-gray-900">
              Procurement & Supply Solutions
            </h2>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-2xl">
              PT KOJE Natural Indonesia operates as a procurement and manufacturing partner 
              supporting industrial supply chains, engineering projects, and distribution networks in Indonesia.
            </p>
          </div>

          {/* LIST - Clickable Rows */}
          <div className="space-y-1">

            {capabilities.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group block border-b border-gray-100 py-6 last:border-0 hover:bg-gray-50/50 transition-colors -mx-6 px-6"
              >
                <div className="flex items-start gap-4">

                  {/* Number */}
                  <span className="text-sm font-medium text-gray-300 mt-0.5 group-hover:text-gray-400 transition-colors">
                    {item.id}
                  </span>

                  {/* Icon */}
                  <div className="mt-0.5 text-gray-300 group-hover:text-gray-500 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-black transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed group-hover:text-gray-600 transition-colors">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
                      {item.items.map((subItem) => (
                        <span key={subItem} className="text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
                          {subItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="ml-auto flex items-center text-gray-300 group-hover:text-gray-500 transition-colors">
                    <HiChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>

                </div>
              </Link>
            ))}

          </div>

          {/* CONTACT CTA */}
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
      <Footer />
    </>
  )
}
