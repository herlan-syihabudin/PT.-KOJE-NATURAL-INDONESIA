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

  // =====================================================
  // ELECTRICAL COMPONENTS
  // URL:
  // /products/industrial-products/electrical-components
  // =====================================================

  'electrical-components': {

    title: 'Electrical Components',

    subtitle:
      'Industrial Electrical & Control Components',

    description:
      'Electrical components, protection devices, control equipment, and supporting materials for industrial and commercial electrical systems.',

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
          'Industrial push buttons and control switches for machinery and electrical control panels.',
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
          'Cable glands for cable entry, sealing, strain relief, and protection in electrical installations.',
        image:
          '/images/products/industrial/electrical/cable-gland.jpg',
      },

      {
        name: 'Cable Lug',
        description:
          'Cable lugs and termination components for reliable electrical connection applications.',
        image:
          '/images/products/industrial/electrical/cable-lug.jpg',
      },

      {
        name: 'Industrial Socket',
        description:
          'Industrial plugs and sockets for power distribution and equipment connection.',
        image:
          '/images/products/industrial/electrical/industrial-socket.jpg',
      },

      {
        name: 'Switch',
        description:
          'Electrical switches for industrial, commercial, machinery, and control applications.',
        image:
          '/images/products/industrial/electrical/switch.jpg',
      },

      {
        name: 'Indicator Lamp',
        description:
          'Panel indicator lamps for equipment status indication and electrical control panels.',
        image:
          '/images/products/industrial/electrical/indicator-lamp.jpg',
      },

      {
        name: 'Electrical Enclosure',
        description:
          'Electrical enclosures and control boxes for protecting electrical components and control systems.',
        image:
          '/images/products/industrial/electrical/electrical-enclosure.jpg',
      },

    ],
  },


  // =====================================================
  // MECHANICAL COMPONENTS
  // URL:
  // /products/industrial-products/mechanical-components
  // =====================================================

  'mechanical-components': {

    title: 'Mechanical Components',

    subtitle:
      'Industrial Mechanical & Power Transmission Components',

    description:
      'Mechanical components and power transmission products supporting industrial machinery, production equipment, conveyors, pumps, motors, and maintenance operations.',

    products: [

      {
        name: 'Bearings',
        description:
          'Industrial bearings for motors, pumps, conveyors, rotating machinery, and mechanical equipment.',
        image:
          '/images/products/industrial/mechanical/bearings.jpg',
      },

      {
        name: 'Couplings',
        description:
          'Flexible and rigid couplings for power transmission between shafts and rotating equipment.',
        image:
          '/images/products/industrial/mechanical/couplings.jpg',
      },

      {
        name: 'Gears & Sprockets',
        description:
          'Gears, sprockets, and transmission components for industrial machinery and drive systems.',
        image:
          '/images/products/industrial/mechanical/gears-sprockets.jpg',
      },

      {
        name: 'Pulleys & Bushings',
        description:
          'Pulleys, taper bushings, and related components for industrial power transmission systems.',
        image:
          '/images/products/industrial/mechanical/pulleys-bushings.jpg',
      },

      {
        name: 'Industrial Chains',
        description:
          'Roller chains and industrial transmission chains for conveyors and mechanical drive applications.',
        image:
          '/images/products/industrial/mechanical/chains.jpg',
      },

      {
        name: 'Shafts & Components',
        description:
          'Shafts and supporting mechanical components for machinery and industrial equipment.',
        image:
          '/images/products/industrial/mechanical/shafts.jpg',
      },

      {
        name: 'Seals & O-Rings',
        description:
          'Mechanical seals, oil seals, and O-rings for pumps, rotating equipment, and industrial machinery.',
        image:
          '/images/products/industrial/mechanical/seals-o-rings.jpg',
      },

      {
        name: 'Mechanical Fasteners',
        description:
          'Bolts, nuts, washers, threaded rods, and other mechanical fastening components.',
        image:
          '/images/products/industrial/mechanical/fasteners.jpg',
      },

    ],
  },


  // =====================================================
  // INDUSTRIAL EQUIPMENT
  // URL:
  // /products/industrial-products/industrial-equipment
  // =====================================================

  'industrial-equipment': {

    title: 'Industrial Equipment',

    subtitle:
      'Industrial Equipment & Operational Systems',

    description:
      'Industrial equipment supporting manufacturing, production, material handling, utilities, facility operations, and industrial processes.',

    products: [

      {
        name: 'Industrial Pumps',
        description:
          'Centrifugal, diaphragm, dosing, and other industrial pumps for water, process fluids, and industrial applications.',
        image:
          '/images/products/industrial/equipment/pumps.jpg',
      },

      {
        name: 'Electric Motors',
        description:
          'Industrial electric motors for pumps, conveyors, machinery, fans, compressors, and production equipment.',
        image:
          '/images/products/industrial/equipment/electric-motors.jpg',
      },

      {
        name: 'Gearboxes & Reducers',
        description:
          'Industrial gearboxes and speed reducers for mechanical power transmission and machinery drive systems.',
        image:
          '/images/products/industrial/equipment/gearboxes.jpg',
      },

      {
        name: 'Air Compressors',
        description:
          'Industrial air compressors and compressed-air equipment for manufacturing and operational requirements.',
        image:
          '/images/products/industrial/equipment/air-compressors.jpg',
      },

      {
        name: 'Industrial Fans & Blowers',
        description:
          'Industrial fans and blowers for ventilation, air circulation, cooling, and process applications.',
        image:
          '/images/products/industrial/equipment/fans-blowers.jpg',
      },

      {
        name: 'Conveyor Systems',
        description:
          'Conveyor equipment and components for material handling, production lines, warehousing, and logistics.',
        image:
          '/images/products/industrial/equipment/conveyor.jpg',
      },

      {
        name: 'Material Handling Equipment',
        description:
          'Equipment for lifting, moving, transporting, and handling materials within industrial facilities.',
        image:
          '/images/products/industrial/equipment/material-handling.jpg',
      },

      {
        name: 'Welding Equipment',
        description:
          'Industrial welding machines and supporting equipment for fabrication, maintenance, and production.',
        image:
          '/images/products/industrial/equipment/welding.jpg',
      },

      {
        name: 'Generator Sets',
        description:
          'Diesel and other generator sets for standby, backup, and industrial power generation requirements.',
        image:
          '/images/products/industrial/equipment/genset.jpg',
      },

      {
        name: 'Water Treatment Equipment',
        description:
          'Equipment supporting industrial water treatment, filtration, purification, and process water systems.',
        image:
          '/images/products/industrial/equipment/water-treatment.jpg',
      },

      {
        name: 'Industrial HVAC Equipment',
        description:
          'HVAC equipment supporting temperature control, ventilation, air conditioning, and industrial facilities.',
        image:
          '/images/products/industrial/equipment/hvac.jpg',
      },

      {
        name: 'Process Equipment',
        description:
          'Selected process equipment supporting manufacturing, production, mixing, processing, and plant operations.',
        image:
          '/images/products/industrial/equipment/process-equipment.jpg',
      },

    ],
  },


  // =====================================================
  // TOOLS & WORKSHOP SUPPLIES
  // URL:
  // /products/industrial-products/tools-workshop-supplies
  // =====================================================

  'tools-workshop-supplies': {

    title: 'Tools & Workshop Supplies',

    subtitle:
      'Professional Tools & Workshop Equipment',

    description:
      'Professional tools, workshop equipment, maintenance tools, and supporting supplies for industrial maintenance, fabrication, repair, and operational activities.',

    products: [

      {
        name: 'Hand Tools',
        description:
          'Professional hand tools including wrenches, pliers, screwdrivers, hammers, and maintenance tools.',
        image:
          '/images/products/industrial/tools/hand-tools.jpg',
      },

      {
        name: 'Power Tools',
        description:
          'Electric and cordless power tools for drilling, grinding, cutting, fastening, and maintenance applications.',
        image:
          '/images/products/industrial/tools/power-tools.jpg',
      },

      {
        name: 'Cutting Tools',
        description:
          'Industrial cutting tools including blades, cutters, saws, and machining-related cutting equipment.',
        image:
          '/images/products/industrial/tools/cutting-tools.jpg',
      },

      {
        name: 'Grinding Tools',
        description:
          'Grinding wheels, abrasive tools, grinders, and accessories for fabrication and maintenance applications.',
        image:
          '/images/products/industrial/tools/grinding-tools.jpg',
      },

      {
        name: 'Measuring Tools',
        description:
          'Precision and general-purpose measuring tools for inspection, maintenance, fabrication, and quality control.',
        image:
          '/images/products/industrial/tools/measuring-tools.jpg',
      },

      {
        name: 'Workshop Equipment',
        description:
          'Workshop equipment including workbenches, tool cabinets, storage systems, and supporting equipment.',
        image:
          '/images/products/industrial/tools/workshop-equipment.jpg',
      },

      {
        name: 'Lifting & Rigging Tools',
        description:
          'Industrial lifting and rigging equipment including slings, shackles, hoists, and related accessories.',
        image:
          '/images/products/industrial/tools/lifting-rigging.jpg',
      },

      {
        name: 'Welding Tools & Accessories',
        description:
          'Welding tools, accessories, electrodes, holders, clamps, and supporting fabrication equipment.',
        image:
          '/images/products/industrial/tools/welding-tools.jpg',
      },

      {
        name: 'Pneumatic Tools',
        description:
          'Compressed-air powered tools for industrial maintenance, assembly, fastening, and workshop applications.',
        image:
          '/images/products/industrial/tools/pneumatic-tools.jpg',
      },

      {
        name: 'Tool Storage',
        description:
          'Tool boxes, tool cabinets, organizers, carts, and storage systems for professional workshops.',
        image:
          '/images/products/industrial/tools/tool-storage.jpg',
      },

      {
        name: 'Workshop Accessories',
        description:
          'Supporting workshop accessories and supplies for maintenance, fabrication, repair, and daily operations.',
        image:
          '/images/products/industrial/tools/workshop-accessories.jpg',
      },

      {
        name: 'Maintenance Tools',
        description:
          'Specialized maintenance tools for machinery servicing, equipment repair, and industrial maintenance operations.',
        image:
          '/images/products/industrial/tools/maintenance-tools.jpg',
      },

    ],
  },

}


export default function ProductSubCategoryPage() {

  const params = useParams()

  const productSlug = params.product as string

  const category = productCategories[productSlug]


  // =====================================================
  // NOT FOUND
  // =====================================================

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
            className="inline-flex items-center gap-2 bg-[#0F172A] text-white px-6 py-3 rounded-sm text-sm hover:bg-[#1E293B] transition"
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


      {/* =================================================
          HERO
      ================================================= */}

      <section className="relative bg-[#0F172A] text-white overflow-hidden">


        {/* GRID BACKGROUND */}

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


          {/* BACK */}

          <Link
            href="/products/industrial-products"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs mb-10 transition"
          >

            <HiArrowLeft />

            Back to Industrial Products

          </Link>


          {/* HERO CONTENT */}

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


      {/* =================================================
          PRODUCT GRID
      ================================================= */}

      <section className="bg-[#F8FAFC] py-20 md:py-24">

        <div className="max-w-6xl mx-auto px-6">


          {/* SECTION HEADER */}

          <div className="mb-12">

            <div className="flex items-center gap-3 mb-4">

              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Product Portfolio
              </span>

            </div>


            <h2 className="text-3xl md:text-5xl font-light text-gray-900">
              {category.title}
            </h2>


            <p className="text-sm text-gray-500 mt-4 max-w-2xl leading-relaxed">
              Explore products available within this product category.
              Product availability may vary according to specification,
              brand, quantity, and project requirements.
            </p>

          </div>


          {/* PRODUCT GRID */}

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
                    loading="lazy"
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


      {/* =================================================
          CTA
      ================================================= */}

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="bg-[#0F172A] text-white p-8 md:p-12">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">


              <div className="max-w-2xl">

                <p className="text-xs tracking-[0.2em] text-white/40 uppercase">
                  Product Inquiry
                </p>


                <h2 className="text-2xl md:text-3xl font-light mt-3">
                  Looking for a specific product?
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
