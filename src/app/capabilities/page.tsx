import Link from 'next/link'
import { HiChevronRight, HiOfficeBuilding, HiCog, HiShieldCheck, HiTruck } from 'react-icons/hi'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const capabilities = [
{
id: '01',
title: 'Industrial Supply & Procurement',
description:
'Providing industrial supply, MRO materials, packaging solutions, and procurement support for manufacturing and commercial operations across Indonesia.',
items: [
'Industrial supply & distribution',
'MRO spareparts & consumables',
'Packaging materials',
'Vendor management',
'Procurement support',
],
icon: HiOfficeBuilding,
href: '/capabilities/industrial-supply',
},
{
id: '02',
title: 'Engineering & Technical Support',
description:
'Supporting industrial projects through technical sourcing, engineering coordination, equipment procurement, and project execution assistance.',
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
'Providing safety equipment, PPE, compliance solutions, and workplace safety support for industrial and construction sectors.',
items: [
'Personal Protective Equipment',
'Safety equipment',
'Fire protection systems',
'Compliance documentation',
'Safety training support',
],
icon: HiShieldCheck,
href: '/capabilities/safety-compliance',
},
{
id: '04',
title: 'Project & Logistics Support',
description:
'End-to-end logistics coordination and project support services to ensure smooth procurement and operational execution.',
items: [
'Logistics coordination',
'Material delivery management',
'Project scheduling support',
'Vendor coordination',
'Site logistics services',
],
icon: HiTruck,
href: '/capabilities/project-logistics',
},
]

export const metadata = {
title: 'Industrial Supply Capabilities | PT KOJE Natural Indonesia',
description:
'PT KOJE Natural Indonesia provides procurement, industrial supply, engineering support, and project solutions for manufacturing, construction, and commercial sectors across Indonesia.',
}

export default function CapabilitiesPage() {
return (
<>
  <Navbar />

  <section className="bg-white py-24">
    <div className="max-w-5xl mx-auto px-6">

      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-gray-300" />
          <span className="text-xs tracking-[0.25em] uppercase text-gray-400">
            Capabilities Statement
          </span>
          <span className="w-8 h-px bg-gray-300" />
        </div>

        <h1 className="text-3xl md:text-4xl font-light text-gray-900 mt-6">
          Procurement & Supply Solutions
        </h1>

        <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-3xl">
          PT KOJE Natural Indonesia provides procurement, industrial supply,
          engineering support, and project solutions for manufacturing,
          construction, engineering, and commercial sectors across Indonesia.
        </p>
      </div>

      {/* Capabilities */}
      <div className="space-y-1">
        {capabilities.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group block border-b border-gray-100 py-6 hover:bg-gray-50/40 transition-colors -mx-6 px-6"
          >
            <div className="flex items-start gap-4">

              <span className="text-sm font-medium text-gray-300 mt-0.5">
                {item.id}
              </span>

              <div className="text-gray-300 mt-0.5 group-hover:text-gray-500 transition-colors">
                <item.icon className="w-5 h-5" />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3">
                  {item.items.map((subItem) => (
                    <span
                      key={subItem}
                      className="text-sm text-gray-400"
                    >
                      {subItem}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-gray-300 group-hover:text-gray-500 transition-colors">
                <HiChevronRight className="w-5 h-5" />
              </div>

            </div>
          </Link>
        ))}
      </div>

      {/* Industries */}
      <div className="mt-20 pt-12 border-t border-gray-100">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">
          Industries We Serve
        </p>

        <div className="grid md:grid-cols-5 gap-4 text-sm text-gray-600">
          <div>Manufacturing</div>
          <div>Construction</div>
          <div>FMCG</div>
          <div>Engineering</div>
          <div>Commercial Facilities</div>
        </div>
      </div>

      {/* RFQ CTA */}
      <div className="mt-20 pt-8 border-t border-gray-100">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400">
          Procurement Inquiry
        </p>

        <Link
          href="/contact"
          className="inline-block mt-3 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
        >
          Submit RFQ →
        </Link>

        <p className="text-xs text-gray-400 mt-3">
          Response within 24 business hours
        </p>
      </div>

    </div>
  </section>

  <Footer />
</>
)
}
