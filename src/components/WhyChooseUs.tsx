'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  HiLightningBolt,
  HiShieldCheck,
  HiTruck,
  HiClipboardCheck,
  HiChevronRight,
} from 'react-icons/hi'
import Link from 'next/link'

const features = [
  {
    id: '01',
    icon: HiLightningBolt,
    title: 'Responsive Procurement',
    desc: 'Clear communication and responsive handling of procurement inquiries, quotations, and supply requirements.',
  },
  {
    id: '02',
    icon: HiShieldCheck,
    title: 'Reliable Supply',
    desc: 'Structured sourcing and vendor coordination to support consistent industrial and commercial supply requirements.',
  },
  {
    id: '03',
    icon: HiTruck,
    title: 'Nationwide Distribution',
    desc: 'Supply and logistics coordination supporting business operations across Indonesia.',
  },
  {
    id: '04',
    icon: HiClipboardCheck,
    title: 'Quality & Compliance',
    desc: 'Procurement processes focused on product specifications, supplier coordination, and delivery requirements.',
  },
]

export default function WhyChooseUs() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="
        border-t
        border-gray-100
        bg-white
        py-16

        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      <div className="container-custom">

        {/* =========================================
            HEADER
        ========================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.5,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
          className="
            mb-10
            max-w-3xl

            sm:mb-12
            md:mb-14
          "
        >

          {/* EYEBROW */}

          <div className="mb-4 flex items-center gap-2.5 sm:gap-3">

            <span
              className="h-px w-7 bg-gray-300 sm:w-10"
              aria-hidden="true"
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-400

                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              Why KOJE
            </span>

          </div>


          {/* HEADING */}

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
            A Reliable Partner for

            <span className="block font-medium">
              Business Supply Requirements
            </span>
          </h2>


          {/* DESCRIPTION */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-500

              sm:mt-5
              sm:text-base
              sm:leading-relaxed
            "
          >
            We combine procurement, sourcing, technical coordination, and
            distribution capabilities to support the operational requirements
            of industrial and FMCG businesses.
          </p>

        </motion.div>


        {/* =========================================
            FEATURES
        ========================================= */}

        <div className="border-t border-gray-200">

          <div
            className="
              grid
              grid-cols-1

              md:grid-cols-2

              lg:grid-cols-4
            "
          >

            {features.map((feature, idx) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.id}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : {
                          opacity: 1,
                          y: 0,
                        }
                  }
                  transition={
                    shouldReduceMotion
                      ? undefined
                      : {
                          duration: 0.5,
                          delay: idx * 0.08,
                        }
                  }
                  viewport={{
                    once: true,
                    margin: '-50px',
                  }}
                  className="
                    group
                    relative
                    border-b
                    border-gray-200
                    py-7

                    md:px-6
                    md:py-8

                    lg:border-b-0
                    lg:border-r
                    lg:px-7
                    lg:py-8

                    lg:first:pl-0
                    lg:last:border-r-0
                    lg:last:pr-0
                  "
                >

                  {/* NUMBER + ICON */}

                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      justify-between

                      sm:mb-7
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        font-medium
                        text-gray-300
                        transition-colors

                        sm:text-xs

                        group-hover:text-gray-500
                      "
                    >
                      {feature.id}
                    </span>

                    <Icon
                      className="
                        h-5
                        w-5
                        text-gray-300
                        transition-colors

                        group-hover:text-gray-700
                      "
                      aria-hidden="true"
                    />

                  </div>


                  {/* TITLE */}

                  <h3
                    className="
                      mb-2
                      text-base
                      font-medium
                      leading-6
                      text-gray-900

                      sm:mb-3
                    "
                  >
                    {feature.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p
                    className="
                      max-w-sm
                      text-xs
                      leading-5
                      text-gray-500

                      sm:text-sm
                      sm:leading-relaxed
                    "
                  >
                    {feature.desc}
                  </p>

                </motion.div>
              )
            })}

          </div>

        </div>


        {/* =========================================
            CTA
        ========================================= */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          transition={{
            duration: 0.5,
            delay: shouldReduceMotion ? 0 : 0.25,
          }}
          viewport={{
            once: true,
            margin: '-50px',
          }}
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
              Procurement &amp; Supply Inquiry
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
              Have a specific supply requirement?
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
              Share your requirements with our team for sourcing and
              procurement support.
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

        </motion.div>

      </div>
    </section>
  )
}
