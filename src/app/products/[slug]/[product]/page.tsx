'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiArrowRight,
} from 'react-icons/hi'

type ProductItem = {
  name: string
  description: string
  image: string
}

type ProductCategory = {
  title: string
  subtitle: string
  description: string
  products: ProductItem[]
}

const productCategories: Record<string, ProductCategory> = {

  'electrical-components': {
    title: 'Electrical Components',
    subtitle: 'Industrial Electrical & Control Components',

    description:
      'Electrical components, protection devices, control equipment, and supporting materials for industrial and commercial applications.',

    products: [

      {
        name: 'MCB',
        description:
          'Miniature Circuit Breakers for electrical protection and circuit control applications.',
        image:
          '/images/products/industrial/electrical/mcb.jpg',
      },

      {
        name: 'MCCB',
        description:
          'Molded Case Circuit Breakers for higher-capacity industrial electrical protection.',
        image:
          '/images/products/industrial/electrical/mccb.jpg',
      },

      {
        name: 'Contactor',
        description:
          'Industrial contactors for motor control, switching, and electrical automation applications.',
        image:
          '/images/products/industrial/electrical/contactor.jpg',
      },

      {
        name: 'Relay',
        description:
          'Control and protection relays for industrial electrical and automation systems.',
        image:
          '/images/products/industrial/electrical/relay.jpg',
      },

      {
        name: 'Push Button',
        description:
          'Industrial push buttons and control switches for machinery and control panels.',
        image:
          '/images/products/industrial/electrical/push-button.jpg',
      },

      {
        name: 'Terminal Block',
        description:
          'Electrical terminal blocks for safe and organized wire and cable connections.',
        image:
          '/images/products/industrial/electrical/terminal-block.jpg',
      },

      {
        name: 'Cable Gland',
        description:
          'Cable glands for cable entry, sealing, and protection in electrical installations.',
        image:
          '/images/products/industrial/electrical/cable-gland.jpg',
      },

      {
        name: 'Cable Lug',
        description:
          'Cable lugs and termination components for electrical connection applications.',
        image:
          '/images/products/industrial/electrical/cable-lug.jpg',
      },

      {
        name: 'Industrial Socket',
        description:
          'Industrial plugs and sockets for electrical power distribution and equipment connection.',
        image:
          '/images/products/industrial/electrical/industrial-socket.jpg',
      },

      {
        name: 'Switch',
        description:
          'Electrical switches for industrial, commercial, and control applications.',
        image:
          '/images/products/industrial/electrical/switch.jpg',
      },

      {
        name: 'Indicator Lamp',
        description:
          'Panel indicator lamps for equipment status and electrical control panels.',
        image:
          '/images/products/industrial/electrical/indicator-lamp.jpg',
      },

      {
        name: 'Electrical Enclosure',
        description:
          'Electrical enclosures and control boxes for protecting electrical components.',
        image:
          '/images/products/industrial/electrical/electrical-enclosure.jpg',
      },

    ],
  },

}

export default function ProductSubCategoryPage() {

  const params = useParams()

  const productSlug = params.product as string

  const category =
    productCategories[productSlug]

  if (!category) {

    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">

        <div className="text-center">

          <p className="text-xs tracking-[0.25em] text-gray-400 uppercase mb-4">
            Product Category Not Found
          </p>

          <h1 className="text-3xl font-light text-gray-900 mb-6">
            Product category not found.
          </h1>

          <Link
            href="/products/industrial-products"
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-sm text-sm"
          >

            <HiArrowLeft />

            Back to Industrial Products

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
            href="/products/industrial-products"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-10 transition"
          >

            <HiArrowLeft />

            Back to Industrial Products

          </Link>


          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="max-w-4xl"
          >

            <div className="flex items-center gap-3 mb-6">

              <span className="w-10 h-px bg-white/40" />

              <span className="text-xs tracking-[0.3em] text-white/50 uppercase">
                Product Subcategory
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
          PRODUCTS
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
              Electrical Products
            </h2>


            <p className="text-sm text-gray-500 mt-4 max-w-2xl leading-relaxed">
              Explore electrical components and supporting products available
              for industrial, commercial, manufacturing, and project
              requirements.
            </p>

          </div>


          {/* =========================================
              PRODUCT GRID
          ========================================= */}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {category.products.map((product, index) => (

              <motion.div
                key={product.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >

                {/* IMAGE */}

                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                </div>


                {/* CONTENT */}

                <div className="p-5">

                  <h3 className="text-base font-semibold text-gray-900">
                    {product.name}
                  </h3>


                  <p className="text-xs text-gray-500 leading-relaxed mt-2">
                    {product.description}
                  </p>


                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] text-gray-400 group-hover:text-[#0FA3A8] mt-5 transition"
                  >

                    Request Product

                    <HiArrowRight className="w-3 h-3" />

                  </Link>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
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
                  Looking for a specific electrical component?
                </h2>


                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  Send us the required specification, brand, quantity, or
                  technical reference. Our procurement team will assist with
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

    </main>
  )
}
