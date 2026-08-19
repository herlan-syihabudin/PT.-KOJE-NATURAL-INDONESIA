'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronRight,
  HiX,
} from 'react-icons/hi'

type Product = {
  name: string
  description: string
  image: string
}

type Category = {
  title: string
  subtitle: string
  description: string
  products: Product[]
}

const categories: Record<string, Category> = {
  'industrial-products': {
    title: 'Industrial Products',
    subtitle: 'Industrial Components & Equipment',
    description:
      'Industrial components, equipment, materials, and operational supplies for manufacturing and industrial facilities.',
    products: [
      {
        name: 'Electrical Components',
        description:
          'Electrical components and supporting materials for industrial applications.',
        image:
          '/images/products/industrial/electrical-components.jpg',
      },
      {
        name: 'Mechanical Components',
        description:
          'Mechanical components for machinery, equipment, and industrial operations.',
        image:
          '/images/products/industrial/mechanical-components.jpg',
      },
      {
        name: 'Industrial Equipment',
        description:
          'Industrial equipment supporting manufacturing and operational requirements.',
        image:
          '/images/products/industrial/industrial-equipment.jpg',
      },
      {
        name: 'Tools & Workshop Supplies',
        description:
          'Tools and workshop supplies for maintenance and industrial operations.',
        image:
          '/images/products/industrial/workshop-supplies.jpg',
      },
    ],
  },

  'mro-consumables': {
    title: 'MRO & Consumables',
    subtitle: 'Maintenance, Repair & Operational Supplies',
    description:
      'Maintenance, repair, and operational supplies supporting continuous industrial operations.',
    products: [
      {
        name: 'MRO Spareparts',
        description:
          'Spare parts and replacement components for industrial maintenance.',
        image:
          '/images/products/mro/mro-spareparts.jpg',
      },
      {
        name: 'Maintenance Consumables',
        description:
          'Consumable products supporting routine maintenance activities.',
        image:
          '/images/products/mro/maintenance-consumables.jpg',
      },
      {
        name: 'Safety Supplies',
        description:
          'Safety and operational supplies for industrial environments.',
        image:
          '/images/products/mro/safety-supplies.jpg',
      },
      {
        name: 'Workshop Consumables',
        description:
          'Workshop consumables for daily maintenance and operational needs.',
        image:
          '/images/products/mro/workshop-consumables.jpg',
      },
    ],
  },

  'packaging-materials': {
    title: 'Packaging Materials',
    subtitle: 'Packaging Solutions for Industrial & FMCG',
    description:
      'Packaging materials and supporting products for industrial, FMCG, food, and beverage operations.',
    products: [
      {
        name: 'Bottles & Containers',
        description:
          'Bottles and containers for food, beverage, FMCG, and industrial applications.',
        image:
          '/images/products/packaging/bottles-containers.jpg',
      },
      {
        name: 'Primary Packaging',
        description:
          'Primary packaging solutions for various product applications.',
        image:
          '/images/products/packaging/primary-packaging.jpg',
      },
      {
        name: 'Secondary Packaging',
        description:
          'Secondary packaging materials for distribution and logistics.',
        image:
          '/images/products/packaging/secondary-packaging.jpg',
      },
      {
        name: 'Packaging Accessories',
        description:
          'Supporting accessories for packaging and product presentation.',
        image:
          '/images/products/packaging/accessories.jpg',
      },
    ],
  },

  'chemical-processing': {
    title: 'Chemical & Processing Supplies',
    subtitle: 'Materials for Manufacturing & Processing',
    description:
      'Selected materials and processing supplies for manufacturing and production requirements.',
    products: [
      {
        name: 'Processing Materials',
        description:
          'Materials supporting manufacturing and industrial processing.',
        image:
          '/images/products/chemical/processing-materials.jpg',
      },
      {
        name: 'Production Supplies',
        description:
          'Supporting materials for production and manufacturing operations.',
        image:
          '/images/products/chemical/production-supplies.jpg',
      },
      {
        name: 'Industrial Chemicals',
        description:
          'Selected industrial chemical products based on required specifications.',
        image:
          '/images/products/chemical/industrial-chemicals.jpg',
      },
      {
        name: 'Supporting Materials',
        description:
          'Additional materials supporting industrial production requirements.',
        image:
          '/images/products/chemical/supporting-materials.jpg',
      },
    ],
  },

  fmcg: {
    title: 'FMCG Products',
    subtitle: 'Beverage & Consumer Products',
    description:
      'Beverage and FMCG products supplied for corporate, retail, commercial, and distribution channels.',
    products: [
      {
        name: 'Beverage Products',
        description:
          'Beverage products for corporate, commercial, and retail requirements.',
        image:
          '/images/products/fmcg/beverage-products.jpg',
      },
      {
        name: 'Private Label Products',
        description:
          'Private label product solutions for businesses and commercial partners.',
        image:
          '/images/products/fmcg/private-label.jpg',
      },
      {
        name: 'FMCG Products',
        description:
          'Selected fast-moving consumer goods for commercial distribution.',
        image:
          '/images/products/fmcg/fmcg-products.jpg',
      },
      {
        name: 'Corporate Supply',
        description:
          'FMCG and beverage supply solutions for corporate requirements.',
        image:
          '/images/products/fmcg/corporate-supply.jpg',
      },
    ],
  },

  'custom-sourcing': {
    title: 'Custom & Sourcing',
    subtitle: 'Product Sourcing & Procurement Solutions',
    description:
      'Sourcing solutions for products and materials requiring specific specifications, brands, or procurement requirements.',
    products: [
      {
        name: 'Product Sourcing',
        description:
          'Sourcing products based on required specifications and quantity.',
        image:
          '/images/products/sourcing/product-sourcing.jpg',
      },
      {
        name: 'Brand-Specific Procurement',
        description:
          'Procurement support for specific brands and product requirements.',
        image:
          '/images/products/sourcing/brand-procurement.jpg',
      },
      {
        name: 'Custom Specifications',
        description:
          'Product sourcing based on custom technical and commercial specifications.',
        image:
          '/images/products/sourcing/custom-specifications.jpg',
      },
      {
        name: 'Vendor Coordination',
        description:
          'Supplier and vendor coordination from sourcing through delivery.',
        image:
          '/images/products/sourcing/vendor-coordination.jpg',
      },
    ],
  },
}

export default function ProductCategoryPage({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null)

  const category = categories[params.slug]

  // ESC untuk menutup modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  // Lock body scroll ketika modal terbuka
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedProduct])

  // CATEGORY TIDAK DITEMUKAN
  if (!category) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center">

          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4">
            Product Not Found
          </p>

          <h1 className="text-3xl font-light text-gray-900 mb-6">
            Product category not found.
          </h1>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-sm text-sm hover:bg-[#1E293B] transition"
          >
            <HiArrowLeft />
            Back to Products
          </Link>

        </div>
      </main>
    )
  }

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

        <div className="container-custom relative z-10 py-20 md:py-28">

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-10 transition"
          >
            <HiArrowLeft />
            Back to Product Portfolio
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-3 mb-6">

              <span className="w-10 h-px bg-white/40" />

              <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
                Product Category
              </span>

              <span className="w-10 h-px bg-white/40" />

            </div>

            <h1 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
              {category.title}
            </h1>

            <p className="text-xl md:text-2xl text-white/70 font-light mt-4">
              {category.subtitle}
            </p>

            <p className="max-w-2xl text-sm md:text-base text-white/50 leading-relaxed mt-6">
              {category.description}
            </p>

          </motion.div>

        </div>

      </section>


      {/* =========================================
          PRODUCT GALLERY
      ========================================= */}

      <section className="bg-[#F8FAFC] py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-12">

            <div className="flex items-center gap-3 mb-4">

              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Product Portfolio
              </span>

            </div>

            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              Available Products
            </h2>

            <p className="text-sm text-gray-500 mt-4 max-w-2xl leading-relaxed">
              Explore products available within this category. Product
              availability may vary according to specification, brand,
              quantity, and project requirements.
            </p>

          </div>


          {/* =========================================
              PRODUCT GRID
          ========================================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {category.products.map((product, index) => (

              <motion.button
                key={product.name}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                onClick={() => setSelectedProduct(product)}
                className="group text-left bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>

                <div className="p-5">

                  <div className="flex items-center justify-between gap-3">

                    <h3 className="text-base font-semibold text-gray-900">
                      {product.name}
                    </h3>

                    <HiChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#0FA3A8] group-hover:translate-x-1 transition-all shrink-0" />

                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mt-2">
                    {product.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#0FA3A8] mt-4 transition">

                    View Product

                    <HiArrowRight className="w-3 h-3" />

                  </div>

                </div>

              </motion.button>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          INQUIRY CTA
      ========================================= */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#0F172A] text-white p-8 md:p-12">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">

              <div className="max-w-2xl">

                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
                  Product Inquiry
                </p>

                <h2 className="text-2xl md:text-3xl font-light mt-3">
                  Need a specific product?
                </h2>

                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  Send us your specification, quantity, preferred brand, or
                  product reference. Our procurement team will assist with
                  sourcing and quotation.
                </p>

              </div>

              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center justify-center gap-2 bg-[#0FA3A8] text-white px-7 py-3.5 text-sm font-medium rounded-sm hover:bg-[#0C8A8E] transition"
              >
                Request Quotation
                <HiArrowRight className="w-4 h-4" />
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PRODUCT MODAL
      ========================================= */}

      {selectedProduct && (

        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.2,
            }}
            className="relative bg-white max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(event) => event.stopPropagation()}
          >

            {/* CLOSE BUTTON */}

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:text-black shadow"
              aria-label="Close"
            >
              <HiX />
            </button>


            <div className="grid md:grid-cols-2">

              {/* IMAGE */}

              <div className="bg-gray-100 aspect-square md:aspect-auto">

                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />

              </div>


              {/* INFO */}

              <div className="p-7 md:p-10 flex flex-col justify-center">

                <p className="text-[10px] tracking-[0.2em] uppercase text-[#0FA3A8]">
                  {category.title}
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3">
                  {selectedProduct.name}
                </h2>

                <p className="text-sm text-gray-500 leading-relaxed mt-5">
                  {selectedProduct.description}
                </p>

                <div className="border-t border-gray-100 mt-7 pt-6">

                  <p className="text-xs text-gray-400 leading-relaxed">
                    Product availability and specification may vary according
                    to project requirements.
                  </p>

                </div>

                <Link
                  href="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="inline-flex items-center justify-center gap-2 bg-[#0F172A] text-white px-6 py-3 mt-7 text-sm font-medium rounded-sm hover:bg-[#1E293B] transition"
                >
                  Request This Product
                  <HiArrowRight className="w-4 h-4" />
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      )}

    </main>
  )
}
