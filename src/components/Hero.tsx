'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiDocumentText,
} from 'react-icons/hi'

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-[100svh]
        items-center
        overflow-hidden
        bg-gray-950
      "
    >

      {/* =========================================
          BACKGROUND
      ========================================= */}

      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/industrial-supplies-and-hardware.jpg"
          alt="Industrial procurement and supply solutions by PT KOJE Natural Indonesia"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-cover object-center"
        />

        {/* Main overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Subtle bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/30 to-transparent" />
      </div>


      {/* =========================================
          CONTENT
      ========================================= */}

      <div
        className="
          container-custom
          relative
          z-10
          flex
          w-full
          items-center
          py-28
          sm:py-32
          md:py-36
          lg:py-40
        "
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="
            w-full
            max-w-4xl
          "
        >

          {/* =====================================
              EYEBROW
          ===================================== */}

          <div
            className="
              mb-5
              inline-flex
              items-center
              text-[10px]
              font-medium
              uppercase
              tracking-[0.22em]
              text-white/60

              sm:mb-6
              sm:text-xs
              sm:tracking-[0.28em]
            "
          >
            PT KOJE NATURAL INDONESIA
          </div>


          {/* =====================================
              HEADING
          ===================================== */}

          <h1
            className="
              max-w-4xl
              text-[2.25rem]
              font-light
              leading-[1.08]
              tracking-[-0.025em]
              text-white

              min-[375px]:text-[2.5rem]
              sm:text-[3.25rem]
              md:text-[4.25rem]
              lg:text-[5rem]
              xl:text-[5.5rem]
            "
          >
            Industrial Procurement

            <span
              className="
                mt-1
                block
                font-semibold
                sm:mt-2
              "
            >
              &amp; Supply Solutions in Indonesia
            </span>
          </h1>


          {/* =====================================
              DESCRIPTION
          ===================================== */}

          <p
            className="
              mt-6
              max-w-2xl
              text-sm
              font-light
              leading-7
              text-white/70

              sm:mt-7
              sm:text-base
              sm:leading-7

              md:mt-8
              md:text-lg
              md:leading-8

              lg:text-xl
            "
          >
            Supporting manufacturing, construction, industrial, and FMCG
            businesses across Indonesia with reliable procurement, sourcing,
            engineering support, and nationwide supply solutions.
          </p>


          {/* =====================================
              CTA
          ===================================== */}

          <div
            className="
              mt-8
              flex
              w-full
              flex-col
              gap-3

              min-[400px]:flex-row
              min-[400px]:flex-wrap

              sm:mt-9
              sm:gap-4

              md:mt-10
            "
          >

            {/* RFQ */}

            <Link
              href="/contact"
              className="
                inline-flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-sm
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-all
                duration-200
                hover:bg-white/90
                hover:-translate-y-0.5
                active:scale-[0.98]

                min-[400px]:w-auto

                sm:px-7
                sm:py-3.5
                md:px-8
                md:py-4
              "
            >
              Request an RFQ

              <HiArrowRight
                className="shrink-0 text-base"
                aria-hidden="true"
              />
            </Link>


            {/* COMPANY PROFILE */}

            <a
              href="/company-profile/PT-KOJE-NATURAL-INDONESIA-Company-Profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                min-h-[48px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-sm
                border
                border-white/25
                bg-white/5
                px-6
                py-3
                text-sm
                font-medium
                text-white
                backdrop-blur-sm
                transition-all
                duration-200
                hover:bg-white/10
                hover:-translate-y-0.5
                active:scale-[0.98]

                min-[400px]:w-auto

                sm:px-7
                sm:py-3.5
                md:px-8
                md:py-4
              "
            >
              <HiDocumentText
                className="shrink-0 text-base"
                aria-hidden="true"
              />

              Company Profile
            </a>

          </div>

        </motion.div>
      </div>


      {/* =========================================
          BOTTOM BORDER
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-white/10
        "
        aria-hidden="true"
      />

    </section>
  )
}
