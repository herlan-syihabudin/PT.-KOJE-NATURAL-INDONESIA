'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import { HiArrowRight, HiPhone } from 'react-icons/hi'

export default function CTASection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="
        border-t
        border-white/10
        bg-[#0A0F14]
        py-16

        sm:py-20
        md:py-24
        lg:py-28
      "
    >
      <div className="container-custom">

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
          className="max-w-3xl"
        >

          {/* =========================================
              LABEL
          ========================================= */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-2.5

              sm:mb-6
              sm:gap-3
            "
          >

            <span
              className="
                h-px
                w-7
                bg-white/30

                sm:w-10
              "
              aria-hidden="true"
            />

            <span
              className="
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-gray-500

                sm:text-xs
                sm:tracking-[0.25em]
              "
            >
              Procurement Inquiry
            </span>

          </div>


          {/* =========================================
              TITLE
          ========================================= */}

          <h2
            className="
              text-[1.875rem]
              font-light
              leading-[1.15]
              tracking-[-0.02em]
              text-white

              min-[375px]:text-[2rem]
              sm:text-4xl
              md:text-5xl
            "
          >
            Have a Procurement

            <span className="block font-medium">
              Requirement?
            </span>
          </h2>


          {/* =========================================
              DESCRIPTION
          ========================================= */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-6
              text-gray-400

              sm:mt-6
              sm:text-base
              sm:leading-relaxed
            "
          >
            Share your procurement, industrial supply, engineering,
            manufacturing, or distribution requirements with our team.
            We will review your requirements and respond accordingly.
          </p>


          {/* =========================================
              CTA
          ========================================= */}

          <div
            className="
              mt-8
              flex
              flex-col
              gap-4

              sm:mt-10
              sm:flex-row
              sm:items-center
              sm:gap-5
            "
          >

            {/* RFQ */}

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-[46px]
                w-full
                items-center
                justify-center
                gap-2
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-gray-900
                transition-all
                duration-200

                hover:bg-gray-200
                hover:-translate-y-0.5

                active:scale-[0.98]

                sm:w-auto
                sm:px-7
                sm:py-3.5
              "
            >
              Request an RFQ

              <HiArrowRight
                className="h-4 w-4"
                aria-hidden="true"
              />
            </Link>


            {/* PHONE */}

            <a
              href="tel:+6281234567890"
              className="
                inline-flex
                min-h-[44px]
                w-full
                items-center
                justify-center
                gap-2
                text-sm
                text-gray-400
                transition-colors

                hover:text-white

                sm:w-auto
              "
            >
              <HiPhone
                className="h-4 w-4"
                aria-hidden="true"
              />

              Contact Procurement
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
