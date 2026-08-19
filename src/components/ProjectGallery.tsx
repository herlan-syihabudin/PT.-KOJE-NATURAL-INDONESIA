'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import {
  HiCalendar,
  HiLocationMarker,
  HiEye,
  HiChevronRight,
  HiX,
} from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Industrial Material Supply',
    category: 'Industrial Supply',
    date: 'Jan 2026',
    location: 'Jakarta',
    image:
      'https://images.unsplash.com/photo-1580674285054-bed31e145f59?w=1200&q=80',
  },
  {
    id: 2,
    title: 'FMCG Beverage Distribution',
    category: 'FMCG Distribution',
    date: 'Feb 2026',
    location: 'Surabaya',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=1200&q=80',
  },
  {
    id: 3,
    title: 'Warehouse & Supply Operations',
    category: 'Supply Operations',
    date: 'Mar 2026',
    location: 'Jakarta',
    image:
      'https://images.unsplash.com/photo-1581090464777-f3222bbe8b2b?w=1200&q=80',
  },
]

export default function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      className="
        border-t
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
              Projects &amp; Operations
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
            Selected Supply

            <span className="block font-medium">
              Operations &amp; Activities
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
            Selected activities and supply operations supporting industrial,
            commercial, and FMCG requirements across Indonesia.
          </p>

        </motion.div>


        {/* =========================================
            PROJECT GRID
        ========================================= */}

        <div
          className="
            grid
            grid-cols-1
            border-t
            border-gray-200

            md:grid-cols-2

            lg:grid-cols-3
          "
        >

          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
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
                cursor-pointer
                border-b
                border-gray-200

                md:border-r
                md:[&:nth-child(2n)]:border-r-0

                lg:border-r
                lg:border-b-0
                lg:[&:nth-child(2n)]:border-r
                lg:last:border-r-0
              "
              onClick={() => setSelectedImage(project.image)}
            >

              {/* =================================
                  IMAGE
              ================================= */}

              <div
                className="
                  relative
                  aspect-[4/3]
                  w-full
                  overflow-hidden
                  bg-gray-100
                "
              >

                <Image
                  src={project.image}
                  alt={`${project.title} - PT KOJE Natural Indonesia`}
                  fill
                  sizes="
                    (max-width: 767px) 100vw,
                    (max-width: 1023px) 50vw,
                    33vw
                  "
                  className="
                    object-cover
                    grayscale
                    transition-all
                    duration-700

                    group-hover:scale-[1.03]
                    group-hover:grayscale-0
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500

                    group-hover:bg-black/5
                  "
                  aria-hidden="true"
                />

                {/* VIEW BUTTON */}

                <div
                  className="
                    absolute
                    right-3
                    top-3
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    bg-black/50
                    opacity-100
                    transition-opacity

                    sm:right-4
                    sm:top-4

                    md:opacity-0
                    md:group-hover:opacity-100
                  "
                >
                  <HiEye
                    className="text-sm text-white"
                    aria-hidden="true"
                  />
                </div>

              </div>


              {/* =================================
                  CONTENT
              ================================= */}

              <div
                className="
                  p-5

                  sm:p-6
                "
              >

                {/* CATEGORY + NUMBER */}

                <div
                  className="
                    mb-3
                    flex
                    items-center
                    justify-between
                    gap-3
                  "
                >

                  <span
                    className="
                      min-w-0
                      truncate
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.14em]
                      text-gray-400

                      sm:text-[11px]
                      sm:tracking-[0.15em]
                    "
                  >
                    {project.category}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-[10px]
                      text-gray-300

                      sm:text-xs
                    "
                  >
                    0{project.id}
                  </span>

                </div>


                {/* TITLE */}

                <h3
                  className="
                    mb-4
                    text-base
                    font-medium
                    leading-6
                    text-gray-900

                    sm:text-lg
                  "
                >
                  {project.title}
                </h3>


                {/* META */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-x-4
                    gap-y-2
                    text-[10px]
                    text-gray-400

                    sm:text-xs
                  "
                >

                  <span className="flex items-center gap-1.5">
                    <HiCalendar
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />

                    {project.date}
                  </span>

                  <span className="flex items-center gap-1.5">
                    <HiLocationMarker
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />

                    {project.location}
                  </span>

                </div>


                {/* VIEW ACTIVITY */}

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    gap-1
                    text-xs
                    text-gray-400
                    transition-colors

                    group-hover:text-gray-700
                  "
                >
                  View activity

                  <HiChevronRight
                    className="
                      h-4
                      w-4
                      transition-transform

                      group-hover:translate-x-1
                    "
                    aria-hidden="true"
                  />
                </div>

              </div>

            </motion.article>
          ))}

        </div>


        {/* =========================================
            NOTE / CTA
        ========================================= */}

        <div
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-gray-200
            pt-6

            sm:mt-12
            sm:pt-8

            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          <p
            className="
              max-w-xl
              text-[10px]
              leading-5
              text-gray-400

              sm:text-xs
              sm:leading-relaxed
            "
          >
            Project documentation may be subject to client confidentiality
            and commercial restrictions.
          </p>

          <a
            href="/contact"
            className="
              inline-flex
              min-h-[44px]
              w-full
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              text-gray-900
              transition-colors
              hover:text-gray-600

              md:w-auto
              md:justify-start
            "
          >
            Discuss your requirements

            <HiChevronRight
              className="h-4 w-4"
              aria-hidden="true"
            />
          </a>

        </div>

      </div>


      {/* =========================================
          IMAGE PREVIEW MODAL
      ========================================= */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/95
            p-4

            sm:p-6
          "
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() => setSelectedImage(null)}
        >

          {/* IMAGE */}

          <div
            className="
              relative
              h-[80vh]
              w-full
              max-w-6xl
            "
            onClick={(e) => e.stopPropagation()}
          >

            <Image
              src={selectedImage}
              alt="Project activity preview"
              fill
              sizes="100vw"
              className="object-contain"
              quality={90}
            />

          </div>


          {/* CLOSE BUTTON */}

          <button
            type="button"
            aria-label="Close image preview"
            className="
              absolute
              right-3
              top-3
              flex
              h-11
              w-11
              items-center
              justify-center
              border
              border-white/20
              bg-black/30
              text-white
              transition

              sm:right-6
              sm:top-6

              hover:bg-white/10
              active:scale-95
            "
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <HiX
              className="h-5 w-5"
              aria-hidden="true"
            />
          </button>

        </div>
      )}

    </section>
  )
}
