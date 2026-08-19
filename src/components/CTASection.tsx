'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiArrowRight, HiPhone } from 'react-icons/hi'

export default function CTASection() {
  return (
    <section className="bg-[#0A0F14] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >

          {/* LABEL */}
          <div className="flex items-center gap-3 mb-6">

            <span className="w-10 h-px bg-white/30" />

            <span className="text-xs tracking-[0.25em] uppercase text-gray-500">
              Procurement Inquiry
            </span>

          </div>

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Have a Procurement
            <span className="block font-medium">
              Requirement?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mt-6 max-w-2xl">
            Share your procurement, industrial supply, engineering,
            manufacturing, or distribution requirements with our team.
            We will review your requirements and respond accordingly.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-10">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                px-7
                py-3.5
                bg-white
                text-gray-900
                text-sm
                font-medium
                hover:bg-gray-200
                transition-colors
              "
            >
              Request an RFQ
              <HiArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:+6281234567890"
              className="
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-400
                hover:text-white
                transition-colors
              "
            >
              <HiPhone className="w-4 h-4" />
              Contact Procurement
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
