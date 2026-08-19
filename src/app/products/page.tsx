'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiChevronRight,
  HiOfficeBuilding,
  HiCog,
  HiCube,
  HiBeaker,
  HiCollection,
  HiTruck,
} from 'react-icons/hi'

const categories = [
  {
    id: '01',
    title: 'Industrial Products',
    href: '/products/industrial-products',
    description:
      'Industrial components, equipment, materials, and operational supplies for manufacturing and industrial facilities.',
    icon: HiOfficeBuilding,
    items: [
      'Electrical & industrial components',
      'Mechanical components',
      'Industrial equipment',
      'Tools & workshop supplies',
    ],
  },
  {
    id: '02',
    title: 'MRO & Consumables',
    href: '/products/mro-consumables',
    description:
      'Maintenance, repair, and operational supplies supporting continuous industrial operations.',
    icon: HiCog,
    items: [
      'MRO spareparts',
      'Maintenance consumables',
      'Safety & operational supplies',
      'Workshop consumables',
    ],
  },
  {
    id: '03',
    title: 'Packaging Materials',
    href: '/products/packaging-materials',
    description:
      'Packaging materials and supporting products for industrial, FMCG, food, and beverage operations.',
    icon: HiCube,
    items: [
      'Primary packaging',
      'Secondary packaging',
      'Bottles & containers',
      'Packaging accessories',
    ],
  },
  {
    id: '04',
    title: 'Chemical & Processing Supplies',
    href: '/products/chemical-processing',
    description:
      'Selected materials and processing supplies for manufacturing and production requirements.',
    icon: HiBeaker,
    items: [
      'Processing materials',
      'Production supplies',
      'Industrial chemicals',
      'Supporting materials',
    ],
  },
  {
    id: '05',
    title: 'FMCG Products',
    href: '/products/fmcg',
    description:
      'Beverage and FMCG products supplied for corporate, retail, commercial, and distribution channels.',
    icon: HiCollection,
    items: [
      'Beverage products',
      'Private label products',
      'FMCG products',
      'Corporate supply',
    ],
  },
  {
    id: '06',
    title: 'Custom & Sourcing',
    href: '/products/custom-sourcing',
    description:
      'Sourcing solutions for products and materials that require specific specifications, brands, or procurement requirements.',
    icon: HiTruck,
    items: [
      'Product sourcing',
      'Brand-specific procurement',
      'Custom specifications',
      'Vendor coordination',
    ],
  },
]

export default function ProductsPage() {
  return (
    <main className="bg-white">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative bg-[#0F172A] text-white overflow-hidden">

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
        </div>

        <div className="container-custom relative z-10 py-24 md:py-32">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-white/40" />

              <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
                Product Portfolio
              </span>

              <span className="w-10 h-px bg-white/40" />
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.08] tracking-tight">
              Industrial Products
              <span className="block font-semibold">
                & Supply Portfolio
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/60 leading-relaxed">
              A comprehensive portfolio of industrial products, MRO
              consumables, packaging materials, and FMCG products supporting
              procurement and supply requirements across Indonesia.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[#0F172A] px-6 py-3.5 text-sm font-medium rounded-sm hover:bg-gray-100 transition"
              >
                Request Product Inquiry
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/capabilities"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3.5 text-sm font-medium rounded-sm hover:bg-white/10 transition"
              >
                View Capabilities
              </Link>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="bg-white py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20">

            <div>

              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  What We Supply
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                Products selected for
                <span className="block font-medium">
                  business requirements.
                </span>
              </h2>

            </div>

            <div className="text-sm md:text-base text-gray-500 leading-relaxed space-y-5">

              <p>
                PT KOJE Natural Indonesia provides procurement and sourcing
                solutions for industrial, manufacturing, construction, and
                FMCG businesses.
              </p>

              <p>
                Our product portfolio is supported by supplier sourcing,
                specification matching, vendor coordination, quality
                verification, and logistics support.
              </p>

              <p>
                Product availability may vary according to specification,
                brand, quantity, and project requirements.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PRODUCT CATEGORIES
      ========================================= */}

      <section className="bg-[#F8FAFC] py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-14 max-w-3xl">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Product Categories
              </span>

              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              Our Product Portfolio
            </h2>

            <p className="text-sm text-gray-500 mt-5 leading-relaxed">
              Product categories covering industrial procurement,
              manufacturing support, packaging, and FMCG supply requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-px bg-gray-200 border border-gray-200">

            {categories.map((category, index) => {
              const Icon = category.icon

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={category.href}
                    className="group block bg-white p-7 md:p-9 hover:bg-gray-50 transition-colors h-full"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0">
                        <div className="w-11 h-11 border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-[#0FA3A8] group-hover:border-[#0FA3A8]/30 transition">
                          <Icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span className="text-[10px] tracking-[0.2em] text-gray-300">
                              {category.id}
                            </span>
                            <h3 className="text-lg font-medium text-gray-900 mt-1">
                              {category.title}
                            </h3>
                          </div>
                          <HiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0FA3A8] group-hover:translate-x-1 transition-all shrink-0" />
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mt-3">
                          {category.description}
                        </p>
                        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-5">
                          {category.items.map((item) => (
                            <div
                              key={item}
                              className="flex items-center gap-2 text-xs text-gray-400"
                            >
                              <span className="w-1 h-1 bg-gray-300 rounded-full shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#0FA3A8] transition">
                          View Products
                          <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}

          </div>

        </div>

      </section>


      {/* =========================================
          PROCUREMENT CTA
      ========================================= */}

      <section className="bg-white py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="border border-gray-200 bg-gray-50 p-8 md:p-12">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

              <div className="max-w-2xl">

                <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
                  Product Inquiry
                </p>

                <h2 className="text-2xl md:text-3xl font-light text-gray-900 mt-3">
                  Looking for a specific product or specification?
                </h2>

                <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                  Send us your product requirements, specification, quantity,
                  or preferred brand. Our procurement team will assist with
                  sourcing and quotation.
                </p>

              </div>

              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white px-7 py-3.5 text-sm font-medium rounded-sm hover:bg-[#1E293B] transition"
              >
                Submit Product Inquiry
                <HiArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
