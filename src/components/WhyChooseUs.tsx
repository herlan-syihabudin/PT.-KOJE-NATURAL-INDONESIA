'use client'

import { motion } from 'framer-motion'
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
  return (
    <section className="bg-white border-t border-gray-100 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-14"
        >

          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-gray-300" />

            <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
              Why KOJE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            A Reliable Partner for
            <span className="block font-medium">
              Business Supply Requirements
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-5 leading-relaxed max-w-2xl">
            We combine procurement, sourcing, technical coordination, and
            distribution capabilities to support the operational requirements
            of industrial and FMCG businesses.
          </p>

        </motion.div>

        {/* FEATURES */}
        <div className="border-t border-gray-200">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {features.map((feature, idx) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  py-8
                  pr-8
                  border-b
                  lg:border-b-0
                  border-gray-200
                  lg:border-r
                  lg:last:border-r-0
                  lg:pl-8
                  first:lg:pl-0
                "
              >

                {/* NUMBER + ICON */}
                <div className="flex items-center justify-between mb-7">

                  <span className="text-xs font-medium text-gray-300 group-hover:text-gray-500 transition-colors">
                    {feature.id}
                  </span>

                  <feature.icon className="w-5 h-5 text-gray-300 group-hover:text-gray-700 transition-colors" />

                </div>

                {/* TITLE */}
                <h3 className="text-base font-medium text-gray-900 mb-3">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className="
            mt-16
            flex
            flex-col
            md:flex-row
            md:items-center
            justify-between
            gap-6
            border
            border-gray-100
            bg-gray-50
            p-8
          "
        >

          <div>
            <p className="text-xs tracking-[0.2em] text-gray-400 uppercase">
              Procurement & Supply Inquiry
            </p>

            <h3 className="text-lg font-medium text-gray-900 mt-2">
              Have a specific supply requirement?
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Share your requirements with our team for sourcing and procurement support.
            </p>
          </div>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-2
              bg-gray-900
              text-white
              px-6
              py-3
              text-sm
              hover:bg-gray-800
              transition
              whitespace-nowrap
            "
          >
            Submit an RFQ
            <HiChevronRight className="w-4 h-4" />
          </Link>

        </motion.div>

      </div>
    </section>
  )
}
