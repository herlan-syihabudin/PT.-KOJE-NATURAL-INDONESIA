'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  HiCalendar,
  HiLocationMarker,
  HiEye,
  HiChevronRight,
} from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Industrial Material Supply',
    category: 'Industrial Supply',
    date: 'Jan 2026',
    location: 'Jakarta',
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200',
  },
  {
    id: 2,
    title: 'FMCG Beverage Distribution',
    category: 'FMCG Distribution',
    date: 'Feb 2026',
    location: 'Surabaya',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200',
  },
  {
    id: 3,
    title: 'Warehouse & Supply Operations',
    category: 'Supply Operations',
    date: 'Mar 2026',
    location: 'Jakarta',
    image:
      'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=1200',
  },
]

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-24">
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
              Projects & Operations
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Selected Supply
            <span className="block font-medium">
              Operations & Activities
            </span>
          </h2>

          <p className="text-sm md:text-base text-gray-500 mt-5 leading-relaxed max-w-2xl">
            Selected activities and supply operations supporting industrial,
            commercial, and FMCG requirements across Indonesia.
          </p>

        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 border-t border-gray-200">

          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
                border-b
                md:border-b-0
                md:border-r
                md:last:border-r-0
                border-gray-200
                cursor-pointer
              "
              onClick={() => setSelectedImage(project.image)}
            >

              {/* IMAGE */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">

                <img
                  src={project.image}
                  alt={`${project.title} - PT KOJE Natural Indonesia`}
                  className="
                    w-full
                    h-full
                    object-cover
                    grayscale
                    group-hover:grayscale-0
                    group-hover:scale-[1.02]
                    transition-all
                    duration-700
                  "
                />

                {/* VIEW */}
                <div
                  className="
                    absolute
                    top-4
                    right-4
                    w-9
                    h-9
                    bg-black/50
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                  "
                >
                  <HiEye className="text-white text-sm" />
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <div className="flex items-center justify-between gap-4 mb-3">

                  <span className="text-[11px] tracking-[0.15em] uppercase text-gray-400">
                    {project.category}
                  </span>

                  <span className="text-xs text-gray-300">
                    0{project.id}
                  </span>

                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-400">

                  <span className="flex items-center gap-1.5">
                    <HiCalendar className="w-3.5 h-3.5" />
                    {project.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker className="w-3.5 h-3.5" />
                    {project.location}
                  </span>

                </div>

                <div className="mt-5 flex items-center gap-1 text-xs text-gray-400 group-hover:text-gray-700 transition-colors">
                  View activity
                  <HiChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* NOTE / CTA */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-5 border-t border-gray-200 pt-8">

          <p className="text-xs text-gray-400 max-w-xl leading-relaxed">
            Project documentation may be subject to client confidentiality
            and commercial restrictions.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-gray-600 transition"
          >
            Discuss your requirements
            <HiChevronRight className="w-4 h-4" />
          </a>

        </div>

      </div>

      {/* IMAGE PREVIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Project activity preview"
            className="max-w-full max-h-[90vh] object-contain"
          />

          <button
            type="button"
            aria-label="Close image preview"
            className="
              absolute
              top-6
              right-6
              w-10
              h-10
              border
              border-white/20
              text-white
              flex
              items-center
              justify-center
              hover:bg-white/10
              transition
            "
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

        </div>
      )}

    </section>
  )
}
