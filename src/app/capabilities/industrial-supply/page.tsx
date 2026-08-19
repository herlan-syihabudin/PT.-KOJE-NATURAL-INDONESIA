import Link from 'next/link'
import {
  HiArrowLeft,
  HiArrowRight,
  HiCheckCircle,
  HiOfficeBuilding,
  HiCog,
  HiCube,
  HiTruck,
  HiShieldCheck,
  HiDocumentText,
} from 'react-icons/hi'

export const metadata = {
  title: 'Industrial Supply & Procurement | PT KOJE Natural Indonesia',
  description:
    'Industrial supply and procurement services for manufacturing, construction, engineering, and commercial operations across Indonesia, including MRO, industrial materials, packaging, sourcing, vendor coordination, and logistics support.',
}

const coreCapabilities = [
  'Industrial products & components',
  'MRO spareparts & consumables',
  'Electrical & mechanical supplies',
  'Packaging materials',
  'Industrial tools & equipment',
  'Product sourcing & specification matching',
  'Vendor coordination & procurement support',
  'Material delivery & logistics coordination',
]

const procurementProcess = [
  {
    number: '01',
    title: 'Requirement Review',
    description:
      'We review product specifications, quantity, brand requirements, delivery location, and project requirements.',
  },
  {
    number: '02',
    title: 'Sourcing & Supplier Matching',
    description:
      'Our procurement team identifies suitable suppliers based on product specifications, availability, commercial requirements, and delivery needs.',
  },
  {
    number: '03',
    title: 'Quotation & Verification',
    description:
      'Product specifications, pricing, availability, lead time, and relevant documentation are reviewed before quotation.',
  },
  {
    number: '04',
    title: 'Delivery Coordination',
    description:
      'We coordinate order fulfillment, material delivery, and logistics according to the agreed procurement requirements.',
  },
]

const productAreas = [
  {
    icon: HiOfficeBuilding,
    title: 'Industrial Products',
    description:
      'Industrial components, materials, equipment, tools, and operational supplies for manufacturing and industrial facilities.',
  },
  {
    icon: HiCog,
    title: 'MRO & Consumables',
    description:
      'Maintenance, repair, and operational supplies supporting routine maintenance and continuous industrial operations.',
  },
  {
    icon: HiCube,
    title: 'Packaging Materials',
    description:
      'Packaging products and supporting materials for manufacturing, FMCG, food, beverage, and commercial operations.',
  },
  {
    icon: HiTruck,
    title: 'Logistics Support',
    description:
      'Material delivery coordination and logistics support based on project location, quantity, urgency, and procurement requirements.',
  },
]

export default function IndustrialSupplyPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="pt-24 pb-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <Link
            href="/capabilities"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition mb-10 group"
          >
            <HiArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition" />
            Back to Capabilities
          </Link>

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-5">
              <span className="w-10 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Capability Detail
              </span>

              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Industrial Supply
              <span className="block font-medium">
                & Procurement
              </span>
            </h1>

            <p className="text-gray-500 mt-6 text-sm md:text-base leading-relaxed max-w-3xl">
              PT KOJE Natural Indonesia provides industrial supply and
              procurement solutions for manufacturing, construction,
              engineering, and commercial operations across Indonesia.
              Our services cover product sourcing, MRO supplies,
              industrial materials, packaging, vendor coordination,
              and delivery support.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition"
              >
                Submit Procurement Inquiry
                <HiArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 px-6 py-3 text-sm font-medium hover:border-gray-400 transition"
              >
                View Product Portfolio
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">

            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="w-8 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Procurement Support
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-light text-gray-900 leading-tight">
                One procurement partner for
                <span className="block font-medium">
                  multiple supply requirements.
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-sm md:text-base text-gray-500 leading-relaxed">

              <p>
                Industrial procurement often involves multiple suppliers,
                product specifications, delivery schedules, and operational
                requirements. KOJE helps simplify this process through
                coordinated sourcing and procurement support.
              </p>

              <p>
                We work with clients to identify suitable products and
                suppliers according to technical specifications, brand
                requirements, quantity, availability, budget, and delivery
                location.
              </p>

              <p>
                Our role can extend from product sourcing and quotation
                coordination to vendor communication, order fulfillment,
                and logistics coordination.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CORE CAPABILITIES
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mb-12">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Scope of Supply
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Industrial procurement
              <span className="font-medium"> capabilities.</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Our procurement scope can be adapted to product specifications,
              project requirements, quantities, brands, and delivery locations.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">

            {coreCapabilities.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 border-b border-gray-200 pb-4"
              >
                <HiCheckCircle className="w-5 h-5 text-gray-400 shrink-0" />

                <span className="text-sm text-gray-600">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          PRODUCT AREAS
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-12">

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Product Areas
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              What We Can <span className="font-medium">Supply</span>
            </h2>

            <p className="text-sm text-gray-500 mt-4 leading-relaxed">
              Selected product categories supporting industrial,
              manufacturing, commercial, and project procurement requirements.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            {productAreas.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.title}
                  className="border border-gray-100 p-6 bg-white hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
                >

                  <Icon className="w-7 h-7 text-gray-400 mb-5" />

                  <h3 className="text-base font-medium text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                    {item.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCUREMENT PROCESS
      ===================================================== */}

      <section className="bg-[#F8FAFC] py-20 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-[0.8fr_1.8fr] gap-12 lg:gap-20">

            <div>

              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />

                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Our Process
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-light text-gray-900 leading-tight">
                A structured approach to
                <span className="block font-medium">
                  industrial procurement.
                </span>
              </h2>

              <p className="text-sm text-gray-500 mt-5 leading-relaxed">
                Procurement requirements are coordinated from initial
                specification through sourcing and delivery support.
              </p>

            </div>

            <div className="space-y-0">

              {procurementProcess.map((item) => (
                <div
                  key={item.number}
                  className="grid grid-cols-[48px_1fr] gap-5 py-6 border-b border-gray-200 first:pt-0"
                >

                  <span className="text-xs tracking-[0.15em] text-gray-300 font-medium">
                    {item.number}
                  </span>

                  <div>

                    <h3 className="text-base font-medium text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY KOJE
      ===================================================== */}

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mb-12">

            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />

              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Procurement Advantage
              </span>

              <span className="w-8 h-px bg-gray-300" />
            </div>

            <h2 className="text-2xl md:text-4xl font-light text-gray-900">
              Built around your
              <span className="font-medium"> procurement needs.</span>
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="border border-gray-100 p-7">
              <HiShieldCheck className="w-7 h-7 text-gray-400 mb-5" />

              <h3 className="text-base font-medium text-gray-900">
                Specification Focused
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Product sourcing is based on required specifications,
                brands, quantities, application, and procurement requirements.
              </p>
            </div>

            <div className="border border-gray-100 p-7">
              <HiOfficeBuilding className="w-7 h-7 text-gray-400 mb-5" />

              <h3 className="text-base font-medium text-gray-900">
                Multi-Category Supply
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Industrial products, MRO, packaging, equipment, and
                operational supplies can be coordinated through one procurement partner.
              </p>
            </div>

            <div className="border border-gray-100 p-7">
              <HiTruck className="w-7 h-7 text-gray-400 mb-5" />

              <h3 className="text-base font-medium text-gray-900">
                Coordinated Delivery
              </h3>

              <p className="text-sm text-gray-500 mt-3 leading-relaxed">
                Delivery and logistics coordination can be arranged according
                to order quantity, project location, schedule, and operational needs.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          RFQ CTA
      ===================================================== */}

      <section className="bg-[#0F172A] py-20 text-white">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">

            <div>

              <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-white/40">
                <HiDocumentText className="w-4 h-4" />
                Procurement Inquiry
              </div>

              <h2 className="text-2xl md:text-3xl font-light mt-4">
                Looking for a specific industrial product?
              </h2>

              <p className="text-sm text-white/50 mt-3 max-w-2xl leading-relaxed">
                Send us your product specification, quantity, preferred brand,
                or project requirements. Our procurement team will review your
                request and assist with sourcing and quotation.
              </p>

            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#0F172A] px-7 py-3.5 text-sm font-medium hover:bg-gray-100 transition"
            >
              Submit RFQ
              <HiArrowRight className="w-4 h-4" />
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}
