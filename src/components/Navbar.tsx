'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HiMenu, HiX, HiPhone } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Beranda' },
  { href: '/about', label: 'Tentang' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

const LOGO_SRC = '/images/logo/koje_16_jun_-removebg-preview.png'
const PHONE_NUMBER = '+6281234567890'
const PHONE_DISPLAY = '+62 812 3456 7890'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isWhite = !isHomePage || isScrolled || isMobileMenuOpen

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = ''
      return
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <>
      {/* =========================================
          DESKTOP / GLOBAL NAVBAR
      ========================================= */}

      <nav
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
          isWhite
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm'
            : 'bg-transparent'
        }`}
        aria-label="Main navigation"
      >
        <div className="container-custom">
          <div className="flex min-h-[64px] items-center justify-between md:min-h-[72px]">

            {/* =====================================
                LOGO
            ===================================== */}

            <Link
              href="/"
              className="relative z-10 flex shrink-0 items-center"
              aria-label="PT Koje Natural Indonesia - Beranda"
            >
              <div
                className="
                  relative
                  h-20 w-20
                  sm:h-24 sm:w-24
                  md:h-28 md:w-28
                  lg:h-32 lg:w-32
                  -my-4
                  sm:-my-5
                  md:-my-7
                  lg:-my-8
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                <Image
                  src={LOGO_SRC}
                  alt="KOJE Natural Indonesia"
                  fill
                  sizes="
                    (max-width: 639px) 80px,
                    (max-width: 767px) 96px,
                    (max-width: 1023px) 112px,
                    128px
                  "
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* =====================================
                DESKTOP MENU
            ===================================== */}

            <div className="hidden md:flex md:items-center md:gap-5 lg:gap-7 xl:gap-8">

              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      group
                      relative
                      whitespace-nowrap
                      py-2
                      text-sm
                      font-medium
                      transition-colors
                      duration-200

                      ${
                        isWhite
                          ? 'text-gray-600 hover:text-primary'
                          : 'text-white/80 hover:text-white'
                      }

                      ${
                        isActive
                          ? isWhite
                            ? 'text-primary'
                            : 'text-white'
                          : ''
                      }
                    `}
                  >
                    {item.label}

                    <span
                      className={`
                        absolute
                        bottom-0
                        left-0
                        h-0.5
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? 'w-full'
                            : 'w-0 group-hover:w-full'
                        }

                        ${
                          isWhite
                            ? 'bg-primary'
                            : 'bg-white'
                        }
                      `}
                    />
                  </Link>
                )
              })}

              {/* PHONE */}

              <div
                className={`
                  ml-1
                  flex
                  items-center
                  gap-3
                  border-l
                  pl-5
                  ${
                    isWhite
                      ? 'border-gray-200'
                      : 'border-white/20'
                  }
                `}
              >
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  aria-label={`Telepon ${PHONE_DISPLAY}`}
                  className={`
                    flex
                    min-h-[44px]
                    items-center
                    gap-2
                    whitespace-nowrap
                    text-sm
                    font-medium
                    transition-colors

                    ${
                      isWhite
                        ? 'text-gray-500 hover:text-primary'
                        : 'text-white/80 hover:text-white'
                    }
                  `}
                >
                  <HiPhone className="shrink-0 text-base" />

                  <span className="hidden xl:inline">
                    {PHONE_DISPLAY}
                  </span>
                </a>
              </div>

              {/* REQUEST QUOTE */}

              <Link
                href="/contact"
                className={`
                  inline-flex
                  min-h-[42px]
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  px-4
                  lg:px-5
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  hover:-translate-y-0.5

                  ${
                    isWhite
                      ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary-dark'
                      : 'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                  }
                `}
              >
                Request Quote
              </Link>
            </div>

            {/* =====================================
                MOBILE BUTTON
            ===================================== */}

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={`
                md:hidden
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                transition-all
                duration-200
                active:scale-95

                ${
                  isWhite
                    ? 'border-gray-200 bg-white text-gray-800 shadow-sm'
                    : 'border-white/20 bg-white/10 text-white backdrop-blur-sm'
                }
              `}
              aria-label="Buka menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <HiMenu className="text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Tutup menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[998] cursor-default bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* MENU SHEET */}

            <motion.div
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{
                type: 'spring',
                damping: 30,
                stiffness: 300,
              }}
              className="
                fixed
                inset-x-0
                bottom-0
                z-[999]
                max-h-[90dvh]
                overflow-y-auto
                overscroll-contain
                rounded-t-3xl
                bg-white
                shadow-2xl
              "
            >

              {/* HANDLE */}

              <div className="flex justify-center px-5 pb-1 pt-3">
                <div
                  className="h-1 w-12 rounded-full bg-gray-200"
                  aria-hidden="true"
                />
              </div>

              {/* HEADER */}

              <div className="border-b border-gray-100 px-5 pb-4 pt-3">
                <div className="flex items-center justify-between">

                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex min-w-0 items-center gap-3"
                  >
                    <div className="relative h-9 w-9 shrink-0">
                      <Image
                        src={LOGO_SRC}
                        alt="KOJE Natural Indonesia"
                        fill
                        sizes="36px"
                        className="object-contain"
                      />
                    </div>

                    <div className="min-w-0">
                      <span className="font-poppins text-sm font-bold text-primary">
                        KOJE
                      </span>

                      <p className="truncate text-[8px] text-gray-400">
                        PT Koje Natural Indonesia
                      </p>
                    </div>
                  </Link>

                  <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                      text-gray-500
                      transition
                      active:scale-95
                    "
                    aria-label="Tutup menu"
                  >
                    <HiX className="text-lg" />
                  </button>
                </div>
              </div>

              {/* PHONE */}

              <div className="border-b border-gray-50 px-5 py-3">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="
                    flex
                    min-h-[52px]
                    items-center
                    justify-between
                    rounded-xl
                    border
                    border-primary/10
                    bg-gradient-to-r
                    from-primary/5
                    to-accent/5
                    p-3
                    transition
                    active:bg-primary/10
                  "
                >
                  <div className="flex min-w-0 items-center gap-3">

                    <div className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-primary/10
                    ">
                      <HiPhone className="text-primary" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[10px] text-gray-500">
                        Call us
                      </p>

                      <p className="truncate text-xs font-semibold text-gray-900">
                        {PHONE_DISPLAY}
                      </p>
                    </div>
                  </div>

                  <span
                    className="shrink-0 pl-3 text-primary"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>

              {/* NAVIGATION */}

              <nav className="px-5 py-3" aria-label="Mobile navigation">

                <div className="space-y-1">

                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`
                          flex
                          min-h-[46px]
                          items-center
                          justify-between
                          rounded-xl
                          px-3
                          text-sm
                          font-medium
                          transition-all
                          duration-200

                          ${
                            isActive
                              ? 'bg-primary text-white shadow-md shadow-primary/20'
                              : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                          }
                        `}
                      >
                        <span>{item.label}</span>

                        {isActive && (
                          <span
                            className="h-1.5 w-1.5 shrink-0 rounded-full bg-white"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    )
                  })}

                </div>
              </nav>

              {/* CTA */}

              <div className="px-5 pb-4 pt-1">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="
                    flex
                    min-h-[64px]
                    w-full
                    items-center
                    justify-between
                    rounded-xl
                    bg-gradient-to-r
                    from-primary
                    to-primary-dark
                    p-4
                    text-white
                    shadow-lg
                    shadow-primary/25
                    transition
                    active:scale-[0.98]
                  "
                >
                  <div className="min-w-0">
                    <span className="block text-sm font-semibold">
                      Request Quote
                    </span>

                    <span className="mt-0.5 block text-[10px] text-white/70">
                      Dapatkan penawaran dalam &lt; 24 jam
                    </span>
                  </div>

                  <span
                    className="shrink-0 pl-4 text-lg"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* COPYRIGHT */}

              <div className="border-t border-gray-50 px-5 pb-5 pt-3 text-center">
                <p className="text-[8px] text-gray-400">
                  © {new Date().getFullYear()} PT Koje Natural Indonesia
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
