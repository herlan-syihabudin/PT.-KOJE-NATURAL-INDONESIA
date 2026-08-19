'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  HiOfficeBuilding,
  HiCog,
  HiGlobeAlt,
  HiClock,
} from 'react-icons/hi'

const trustSignals = [
  {
    icon: HiOfficeBuilding,
    title: 'Industrial Supply',
    description:
      'Supporting industrial operations with procurement, MRO supplies, materials, and consumables.',
  },
  {
    icon: HiCog,
    title: 'Technical Support',
    description:
      'Supporting project and operational requirements through technical sourcing and engineering coordination.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Nationwide Coverage',
    description:
      'Supply and distribution support for businesses and operations across Indonesia.',
  },
  {
    icon: HiClock,
    title: 'Responsive Support',
    description:
      'Procurement and customer support focused on clear communication and timely response.',
  },
]

export default function TrustSignals() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="
        border-y
        border-gray-100
        bg-gray-50
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

        <div
          className="
            mb-10
            max-w-3xl

            sm:mb-12
            md:mb-14
          "
        >

          {/* Eyebrow */}

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
              Trust &amp; Capability
            </span>

          </div>


          {/* Heading */}

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
            Built for Reliable

            <span className="block font-medium">
              Business Operations
            </span>
          </h2>


          {/* Description */}

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
            PT KOJE Natural Indonesia combines procurement, technical support,
            supply coordination, and FMCG manufacturing capabilities to support
            businesses across Indonesia.
          </p>

        </div>


        {/* =========================================
            TRUST SIGNALS
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            border-t
            border-gray-200

            md:grid-cols-2

            lg:grid-cols-4
          "
        >

          {trustSignals.map((signal, idx) => {
            const Icon = signal.icon

            return (
              <motion.div
                key={signal.title}
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

                {/* =================================
                    ICON
                ================================= */}

                <div className="mb-4 sm:mb-5">

                  <Icon
                    className="
                      h-5
                      w-5
                      text-gray-400
                      transition-colors
                      duration-200

                      group-hover:text-gray-700
                    "
                    aria-hidden="true"
                  />

                </div>


                {/* =================================
                    TITLE
                ================================= */}

                <h3
                  className="
                    mb-2
                    text-base
                    font-medium
                    leading-6
                    text-gray-900
                  "
                >
                  {signal.title}
                </h3>


                {/* =================================
                    DESCRIPTION
                ================================= */}

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
                  {signal.description}
                </p>

              </motion.div>
            )
          })}

        </div>

      </div>
    </section>
  )
}
