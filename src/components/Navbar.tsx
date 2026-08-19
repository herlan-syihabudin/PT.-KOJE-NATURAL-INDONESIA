'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import {
  HiMenu,
  HiX,
  HiSearch,
  HiPhone,
  HiArrowRight,
} from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { href: '/', label: 'Beranda' },
  { href: '/products', label: 'Products' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'Tentang' },
  { href: '/contact', label: 'Kontak' },
]

const SEARCH_ITEMS = [
  {
    title: 'Industrial Products',
    category: 'Products',
    description:
      'Industrial components, equipment, materials, and operational supplies.',
    href: '/products/industrial-products',
    keywords:
      'industrial electrical mechanical equipment tools components',
  },
  {
    title: 'MRO & Consumables',
    category: 'Products',
    description:
      'Maintenance, repair, operational supplies, and industrial consumables.',
    href: '/products/mro-consumables',
    keywords:
      'mro maintenance repair consumables spareparts safety workshop',
  },
  {
    title: 'Packaging Materials',
    category: 'Products',
    description:
      'Packaging materials, bottles, containers, and packaging accessories.',
    href: '/products/packaging-materials',
    keywords:
      'packaging bottle bottles container containers plastic packaging',
  },
  {
    title: 'Chemical & Processing Supplies',
    category: 'Products',
    description:
      'Processing materials and industrial supplies for production requirements.',
    href: '/products/chemical-processing',
    keywords:
      'chemical processing production materials industrial',
  },
  {
    title: 'FMCG Products',
    category: 'Products',
    description:
      'Beverage and FMCG products for corporate, retail, and distribution.',
    href: '/products/fmcg',
    keywords:
      'fmcg beverage drinks private label retail corporate',
  },
  {
    title: 'Custom & Sourcing',
    category: 'Capabilities',
    description:
      'Product sourcing, brand-specific procurement, and custom specifications.',
    href: '/products/custom-sourcing',
    keywords:
      'sourcing procurement custom brand specification vendor',
  },
]

const LOGO_SRC =
  '/images/logo/koje_16_jun_-removebg-preview.png'

const PHONE_NUMBER = '+6281234567890'
const PHONE_DISPLAY = '+62 812 3456 7890'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false)

  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] =
    useState(false)

  const [isMobileSearchOpen, setIsMobileSearchOpen] =
    useState(false)

  const pathname = usePathname()

  const isHomePage = pathname === '/'

  const isWhite =
    !isHomePage ||
    isScrolled ||
    isMobileMenuOpen ||
    isMobileSearchOpen

  /* =========================================
     SEARCH RESULTS
  ========================================= */

  const searchResults = searchQuery.trim()
    ? SEARCH_ITEMS.filter((item) => {
        const query = searchQuery.toLowerCase().trim()

        return (
          item.title.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.keywords.toLowerCase().includes(query)
        )
      }).slice(0, 5)
    : []

  /* =========================================
     SCROLL
  ========================================= */

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    handleScroll()

    window.addEventListener(
      'scroll',
      handleScroll,
      { passive: true }
    )

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      )
    }
  }, [handleScroll])

  /* =========================================
     CLOSE MOBILE MENU WHEN ROUTE CHANGES
  ========================================= */

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsMobileSearchOpen(false)
    setSearchQuery('')
  }, [pathname])

  /* =========================================
     LOCK BODY SCROLL
  ========================================= */

  useEffect(() => {
    const shouldLock =
      isMobileMenuOpen || isMobileSearchOpen

    document.body.style.overflow = shouldLock
      ? 'hidden'
      : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [
    isMobileMenuOpen,
    isMobileSearchOpen,
  ])

  /* =========================================
     ESCAPE KEY
  ========================================= */

  useEffect(() => {
    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key !== 'Escape') return

      setIsMobileMenuOpen(false)
      setIsMobileSearchOpen(false)
      setIsSearchFocused(false)
    }

    window.addEventListener(
      'keydown',
      handleEscape
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleEscape
      )
    }
  }, [])

  /* =========================================
     CLOSE SEARCH
  ========================================= */

  const closeSearch = () => {
    setIsMobileSearchOpen(false)
    setSearchQuery('')
    setIsSearchFocused(false)
  }

  return (
    <>
      {/* =========================================
          DESKTOP / GLOBAL NAVBAR
      ========================================= */}

      <nav
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          transition-all
          duration-300

          ${
            isWhite
              ? 'border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md'
              : 'bg-transparent'
          }
        `}
        aria-label="Main navigation"
      >
        <div className="container-custom">

          <div
            className="
              flex
              min-h-[64px]
              items-center
              justify-between
              md:min-h-[72px]
              md:gap-8
            "
          >

            {/* =====================================
                LOGO
            ===================================== */}

            <Link
              href="/"
              className="
                relative
                z-10
                flex
                shrink-0
                items-center
              "
              aria-label="PT Koje Natural Indonesia - Beranda"
            >
              <div
                className="
                  relative
                  h-16
                  w-16
                  sm:h-20
                  sm:w-20
                  md:h-24
                  md:w-24
                  lg:h-28
                  lg:w-28
                  -my-3
                  sm:-my-4
                  md:-my-5
                  lg:-my-6
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
                    (max-width: 639px) 64px,
                    (max-width: 767px) 80px,
                    (max-width: 1023px) 96px,
                    112px
                  "
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* =====================================
                DESKTOP MENU
            ===================================== */}

            <div
              className="
                hidden
                md:ml-4
                md:flex
                md:items-center
                md:gap-6
                lg:ml-6
                lg:gap-8
                xl:gap-10
              "
            >

              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href

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

              {/* =====================================
                  DESKTOP SEARCH
              ===================================== */}

              <div className="relative hidden lg:block">

                <div
                  className={`
                    flex
                    h-10
                    w-44
                    items-center
                    rounded-lg
                    border
                    px-3
                    transition-all
                    duration-200
                    xl:w-52

                    ${
                      isWhite
                        ? 'border-gray-200 bg-white'
                        : 'border-white/20 bg-white/10 backdrop-blur-sm'
                    }
                  `}
                >

                  <HiSearch
                    className={`
                      mr-2
                      shrink-0
                      text-base

                      ${
                        isWhite
                          ? 'text-gray-400'
                          : 'text-white/60'
                      }
                    `}
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(
                        event.target.value
                      )
                    }
                    onFocus={() =>
                      setIsSearchFocused(true)
                    }
                    onBlur={() => {
                      setTimeout(() => {
                        setIsSearchFocused(false)
                      }, 150)
                    }}
                    placeholder="Search products..."
                    aria-label="Search products"
                    className={`
                      w-full
                      bg-transparent
                      text-sm
                      outline-none
                      placeholder:text-gray-400

                      ${
                        isWhite
                          ? 'text-gray-700'
                          : 'text-white placeholder:text-white/50'
                      }
                    `}
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onMouseDown={(event) =>
                        event.preventDefault()
                      }
                      onClick={() =>
                        setSearchQuery('')
                      }
                      className="
                        ml-2
                        shrink-0
                        text-gray-400
                        transition
                        hover:text-gray-700
                      "
                      aria-label="Clear search"
                    >
                      <HiX className="text-base" />
                    </button>
                  )}

                </div>

                {/* SEARCH DROPDOWN */}

                {isSearchFocused &&
                  searchQuery.trim() && (
                    <div
                      className="
                        absolute
                        right-0
                        top-[calc(100%+10px)]
                        z-[100]
                        w-80
                        overflow-hidden
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        shadow-xl
                      "
                    >

                      {searchResults.length > 0 ? (
                        <div className="py-2">

                          {searchResults.map(
                            (item) => (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                  setSearchQuery('')
                                  setIsSearchFocused(
                                    false
                                  )
                                }}
                                className="
                                  group
                                  block
                                  px-4
                                  py-3
                                  transition
                                  hover:bg-gray-50
                                "
                              >

                                <div
                                  className="
                                    flex
                                    items-start
                                    justify-between
                                    gap-3
                                  "
                                >

                                  <div className="min-w-0">

                                    <p
                                      className="
                                        text-[10px]
                                        font-medium
                                        uppercase
                                        tracking-[0.15em]
                                        text-primary
                                      "
                                    >
                                      {item.category}
                                    </p>

                                    <p
                                      className="
                                        mt-1
                                        text-sm
                                        font-medium
                                        text-gray-900
                                      "
                                    >
                                      {item.title}
                                    </p>

                                    <p
                                      className="
                                        mt-1
                                        line-clamp-2
                                        text-xs
                                        leading-relaxed
                                        text-gray-400
                                      "
                                    >
                                      {item.description}
                                    </p>

                                  </div>

                                  <HiArrowRight
                                    className="
                                      mt-1
                                      shrink-0
                                      text-gray-300
                                      transition
                                      group-hover:translate-x-1
                                      group-hover:text-primary
                                    "
                                  />

                                </div>

                              </Link>
                            )
                          )}

                        </div>
                      ) : (
                        <div className="px-4 py-6 text-center">

                          <p className="text-sm text-gray-500">
                            No products found
                          </p>

                          <p className="mt-1 text-xs text-gray-400">
                            Try another keyword
                          </p>

                        </div>
                      )}

                    </div>
                  )}

              </div>

              {/* =====================================
                  PHONE
              ===================================== */}

              <div
                className={`
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

              {/* =====================================
                  REQUEST RFQ
              ===================================== */}

              <Link
                href="/contact"
                className={`
                  inline-flex
                  min-h-[42px]
                  items-center
                  justify-center
                  whitespace-nowrap
                  rounded-full
                  px-5
                  text-sm
                  font-semibold
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  lg:px-6

                  ${
                    isWhite
                      ? 'bg-primary text-white shadow-md shadow-primary/20 hover:bg-primary-dark'
                      : 'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20'
                  }
                `}
              >
                Request RFQ
              </Link>

            </div>

            {/* =====================================
                MOBILE ACTIONS
            ===================================== */}

            <div className="flex items-center gap-2 md:hidden">

              <button
                type="button"
                onClick={() => {
                  setIsMobileSearchOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                className={`
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

                  ${
                    isWhite
                      ? 'border-gray-200 bg-white text-gray-700 shadow-sm'
                      : 'border-white/20 bg-white/10 text-white backdrop-blur-sm'
                  }
                `}
                aria-label="Search products"
              >
                <HiSearch className="text-xl" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setIsMobileMenuOpen(true)
                }
                className={`
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
        </div>
      </nav>

      {/* =========================================
          MOBILE SEARCH
      ========================================= */}

      <AnimatePresence>
        {isMobileSearchOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup search"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-0
                z-[998]
                cursor-default
                bg-black/50
                backdrop-blur-sm
              "
              onClick={closeSearch}
            />

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-x-0
                top-0
                z-[999]
                bg-white
                shadow-xl
              "
            >

              <div className="container-custom">

                <div
                  className="
                    flex
                    min-h-[72px]
                    items-center
                    gap-3
                  "
                >

                  <HiSearch
                    className="
                      shrink-0
                      text-xl
                      text-gray-400
                    "
                  />

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(event) =>
                      setSearchQuery(
                        event.target.value
                      )
                    }
                    placeholder="Search products..."
                    autoFocus
                    className="
                      min-w-0
                      flex-1
                      bg-transparent
                      text-base
                      text-gray-900
                      outline-none
                      placeholder:text-gray-400
                    "
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() =>
                        setSearchQuery('')
                      }
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-gray-100
                        text-gray-500
                      "
                      aria-label="Clear search"
                    >
                      <HiX />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={closeSearch}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-gray-100
                      text-gray-600
                    "
                    aria-label="Tutup search"
                  >
                    <HiX />
                  </button>

                </div>

                {searchQuery.trim() && (
                  <div
                    className="
                      max-h-[70vh]
                      overflow-y-auto
                      border-t
                      border-gray-100
                      py-2
                    "
                  >

                    {searchResults.length > 0 ? (
                      searchResults.map(
                        (item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeSearch}
                            className="
                              block
                              rounded-xl
                              px-3
                              py-4
                              transition
                              hover:bg-gray-50
                            "
                          >

                            <p
                              className="
                                text-[10px]
                                font-medium
                                uppercase
                                tracking-[0.15em]
                                text-primary
                              "
                            >
                              {item.category}
                            </p>

                            <div
                              className="
                                mt-1
                                flex
                                items-center
                                justify-between
                                gap-3
                              "
                            >

                              <p
                                className="
                                  text-sm
                                  font-medium
                                  text-gray-900
                                "
                              >
                                {item.title}
                              </p>

                              <HiArrowRight
                                className="
                                  shrink-0
                                  text-gray-300
                                "
                              />

                            </div>

                            <p
                              className="
                                mt-1
                                text-xs
                                leading-relaxed
                                text-gray-400
                              "
                            >
                              {item.description}
                            </p>

                          </Link>
                        )
                      )
                    ) : (
                      <div
                        className="
                          px-4
                          py-10
                          text-center
                        "
                      >
                        <p className="text-sm text-gray-500">
                          No products found
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          Try another keyword
                        </p>
                      </div>
                    )}

                  </div>
                )}

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* =========================================
          MOBILE MENU
      ========================================= */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="
                fixed
                inset-0
                z-[998]
                cursor-default
                bg-black/60
                backdrop-blur-sm
              "
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
            />

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
                  className="
                    h-1
                    w-12
                    rounded-full
                    bg-gray-200
                  "
                  aria-hidden="true"
                />
              </div>

              {/* HEADER */}

              <div
                className="
                  border-b
                  border-gray-100
                  px-5
                  pb-4
                  pt-3
                "
              >

                <div className="flex items-center justify-between">

                  <Link
                    href="/"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        relative
                        h-9
                        w-9
                        shrink-0
                      "
                    >
                      <Image
                        src={LOGO_SRC}
                        alt="KOJE Natural Indonesia"
                        fill
                        sizes="36px"
                        className="object-contain"
                      />
                    </div>

                    <div className="min-w-0">

                      <span
                        className="
                          font-poppins
                          text-sm
                          font-bold
                          text-primary
                        "
                      >
                        KOJE
                      </span>

                      <p
                        className="
                          truncate
                          text-[8px]
                          text-gray-400
                        "
                      >
                        PT Koje Natural Indonesia
                      </p>

                    </div>

                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
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

              <div
                className="
                  border-b
                  border-gray-50
                  px-5
                  py-3
                "
              >

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

                  <div
                    className="
                      flex
                      min-w-0
                      items-center
                      gap-3
                    "
                  >

                    <div
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-primary/10
                      "
                    >
                      <HiPhone className="text-primary" />
                    </div>

                    <div className="min-w-0">

                      <p className="text-[10px] text-gray-500">
                        Call us
                      </p>

                      <p
                        className="
                          truncate
                          text-xs
                          font-semibold
                          text-gray-900
                        "
                      >
                        {PHONE_DISPLAY}
                      </p>

                    </div>

                  </div>

                  <span
                    className="
                      shrink-0
                      pl-3
                      text-primary
                    "
                    aria-hidden="true"
                  >
                    →
                  </span>

                </a>

              </div>

              {/* NAVIGATION */}

              <nav
                className="px-5 py-3"
                aria-label="Mobile navigation"
              >

                <div className="space-y-1">

                  {NAV_ITEMS.map((item) => {
                    const isActive =
                      pathname === item.href

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() =>
                          setIsMobileMenuOpen(false)
                        }
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

                        <span>
                          {item.label}
                        </span>

                        {isActive && (
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-white
                            "
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
                  onClick={() =>
                    setIsMobileMenuOpen(false)
                  }
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

                    <span
                      className="
                        block
                        text-sm
                        font-semibold
                      "
                    >
                      Request RFQ
                    </span>

                    <span
                      className="
                        mt-0.5
                        block
                        text-[10px]
                        text-white/70
                      "
                    >
                      Dapatkan penawaran dalam &lt; 24 jam
                    </span>

                  </div>

                  <span
                    className="
                      shrink-0
                      pl-4
                      text-lg
                    "
                    aria-hidden="true"
                  >
                    →
                  </span>

                </Link>

              </div>

              {/* COPYRIGHT */}

              <div
                className="
                  border-t
                  border-gray-50
                  px-5
                  pb-5
                  pt-3
                  text-center
                "
              >

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
