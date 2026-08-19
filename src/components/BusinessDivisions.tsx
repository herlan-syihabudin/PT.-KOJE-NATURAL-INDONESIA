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

export default function BusinessDivisions() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 lg:py-28">
      <div className="container-custom">

        {/* =========================================
            HEADER
        ========================================= */}

        <div className="mb-10 max-w-3xl sm:mb-12 md:mb-14">

          <div className="mb-4 flex items-center gap-2.5 sm:gap-3">
            <span
              className="h-px w-7 bg-gray-300 sm:w-10"
              aria-hidden="true"
            />

            <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400 sm:text-xs sm:tracking-[0.25em]">
              Capabilities Statement
            </span>

            <span
              className="h-px w-7 bg-gray-300 sm:w-10"
              aria-hidden="true"
            />
          </div>

          <h2
            className="
              text-[1.875rem]
              font-light
              leading-[1.15]
              tracking-[-0.02em]
              text-gray-900

              min-[375px]:text-[2rem]
              sm:text-4xl
              md:text-5xl
            "
          >
            Procurement, Supply &amp; Manufacturing Solutions
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-500

              sm:mt-5
              sm:leading-relaxed
            "
          >
            PT KOJE Natural Indonesia operates as a procurement, supply, and
            manufacturing partner supporting industrial operations and FMCG
            supply chains across Indonesia.
          </p>

        </div>


        {/* =========================================
            CAPABILITIES LIST
        ========================================= */}

        <div className="divide-y divide-gray-100">

          {capabilities.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.id}
                href={item.href}
                className="
                  group
                  block
                  -mx-4
                  px-4
                  py-6
                  transition-colors
                  duration-200
                  hover:bg-gray-50/60

                  min-[375px]:-mx-5
                  min-[375px]:px-5

                  sm:-mx-6
                  sm:px-6
                  sm:py-7

                  md:py-8
                "
              >

                <div
                  className="
                    flex
                    items-start
                    gap-3

                    sm:gap-5
                  "
                >

                  {/* =================================
                      ID
                  ================================= */}

                  <span
                    className="
                      mt-1
                      w-5
                      shrink-0
                      text-[10px]
                      font-medium
                      text-gray-300
                      transition-colors

                      sm:w-7
                      sm:text-xs

                      group-hover:text-gray-400
                    "
                  >
                    {item.id}
                  </span>


                  {/* =================================
                      ICON
                  ================================= */}

                  <div
                    className="
                      mt-0.5
                      shrink-0
                      text-gray-300
                      transition-colors

                      group-hover:text-gray-600
                    "
                  >
                    <Icon
                      className="
                        h-5
                        w-5

                        sm:h-5
                        sm:w-5
                      "
                      aria-hidden="true"
                    />
                  </div>


                  {/* =================================
                      CONTENT
                  ================================= */}

                  <div className="min-w-0 flex-1">

                    <h3
                      className="
                        pr-2
                        text-base
                        font-medium
                        leading-6
                        text-gray-900
                        transition-colors

                        sm:text-lg

                        group-hover:text-black
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        max-w-3xl
                        text-xs
                        leading-5
                        text-gray-500

                        sm:text-sm
                        sm:leading-relaxed
                      "
                    >
                      {item.description}
                    </p>


                    {/* SUB ITEMS */}

                    <div
                      className="
                        mt-3
                        flex
                        flex-wrap
                        gap-x-3
                        gap-y-1.5

                        sm:gap-x-4
                        sm:gap-y-1
                      "
                    >
                      {item.items.map((sub) => (
                        <span
                          key={sub}
                          className="
                            text-[11px]
                            leading-5
                            text-gray-400
                            transition-colors

                            sm:text-sm

                            group-hover:text-gray-500
                          "
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                  </div>


                  {/* =================================
                      ARROW
                  ================================= */}

                  <div
                    className="
                      mt-1
                      shrink-0
                      text-gray-300
                      transition-colors

                      group-hover:text-gray-500
                    "
                  >
                    <HiChevronRight
                      className="
                        h-5
                        w-5
                        transition-transform
                        duration-200

                        sm:h-5
                        sm:w-5

                        group-hover:translate-x-1
                      "
                      aria-hidden="true"
                    />
                  </div>

                </div>

              </Link>
            )
          })}

        </div>


        {/* =========================================
            RFQ STRIP
        ========================================= */}

        <div
          className="
            mt-12
            flex
            flex-col
            gap-5
            border
            border-gray-100
            bg-gray-50
            p-5

            sm:mt-16
            sm:gap-6
            sm:p-7

            md:flex-row
            md:items-center
            md:justify-between
            md:p-8

            lg:mt-20
          "
        >

          <div className="min-w-0">

            <p
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-gray-400

                sm:text-xs
                sm:tracking-[0.2em]
              "
            >
              Procurement Inquiry
            </p>

            <h3
              className="
                mt-2
                text-base
                font-medium
                leading-6
                text-gray-900

                sm:text-lg
              "
            >
              Submit an RFQ for industrial procurement needs
            </h3>

            <p
              className="
                mt-1
                max-w-xl
                text-xs
                leading-5
                text-gray-500

                sm:text-sm
                sm:leading-relaxed
              "
            >
              Our procurement team will review your requirements and respond promptly.
            </p>

          </div>


          <Link
            href="/contact"
            className="
              inline-flex
              min-h-[46px]
              w-full
              shrink-0
              items-center
              justify-center
              gap-2
              bg-gray-900
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-gray-800
              hover:-translate-y-0.5
              active:scale-[0.98]

              sm:w-auto
              sm:px-6
            "
          >
            Submit an RFQ

            <HiChevronRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </Link>

        </div>

      </div>
    </section>
  )
}
