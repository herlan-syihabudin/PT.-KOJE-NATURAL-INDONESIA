'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    if (!mounted) return
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted, handleScroll])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const isHomePage = useMemo(() => pathname === '/', [pathname])
  const isWhite = useMemo(() => isHomePage ? isScrolled || isMobileMenuOpen : true, [isHomePage, isScrolled, isMobileMenuOpen])

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container-custom flex justify-between items-center py-1 md:py-0.5">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -my-7 sm:-my-9 md:-my-11">
            <Image
              src="/images/logo/koje_16_jun_-removebg-preview.png"
              alt="KOJE Natural Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isWhite
            ? 'bg-white/80 backdrop-blur-md border-b border-gray-100/50 shadow-sm'
            : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isWhite ? 'rgba(255,255,255,0.8)' : 'transparent',
        }}
      >
        <div className="container-custom flex justify-between items-center py-1 md:py-0.5 transition-all duration-300">
          {/* Logo - Sekarang besar seperti Cassindo */}
          <Link href="/" className="shrink-0 group relative z-10">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 -my-7 sm:-my-9 md:-my-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/koje_16_jun_-removebg-preview.png"
                alt="KOJE Natural Logo"
                fill
                sizes="(max-width: 768px) 112px, 144px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 py-1 group text-sm ${
                    isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                  } ${isActive ? (isWhite ? 'text-primary' : 'text-white') : ''}`}
                >
                  {item.label}
                  {isActive && (
                    <span className={`absolute -bottom-0.5 left-0 w-full h-0.5 ${
                      isWhite ? 'bg-primary' : 'bg-white'
                    }`} />
                  )}
                  <span className={`absolute -bottom-0.5 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isWhite ? 'bg-primary' : 'bg-white'
                  } ${isActive ? 'opacity-0' : ''}`} />
                </Link>
              )
            })}

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200/50">
              <a
                href="tel:+6281234567890"
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  isWhite ? 'text-gray-500 hover:text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 812 3456 7890</span>
              </a>
            </div>

            <Link
              href="/contact"
              className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
                isWhite
                  ? 'bg-primary text-white shadow-md shadow-primary/30 hover:bg-primary-dark'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20'
              }`}
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 active:scale-95"
            aria-label="Open menu"
          >
            <HiMenu size={18} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[998]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 z-[999] bg-white rounded-t-3xl shadow-2xl overflow-hidden"
            >
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-12 h-1 bg-gray-200 rounded-full" />
              </div>

              <div className="px-5 pt-2 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/images/logo/koje_16_jun_-removebg-preview.png"
                        alt="KOJE Natural Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-sm text-primary">KOJE</span>
                      <p className="text-[7px] text-gray-400 -mt-0.5">PT Koje Natural Indonesia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 active:bg-gray-200 transition"
                    aria-label="Close menu"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="px-5 py-3 border-b border-gray-50">
                <a
                  href="tel:+6281234567890"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 active:bg-primary/10 transition group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition">
                      <HiPhone className="text-primary text-sm" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500">Call us now</p>
                      <p className="text-xs font-semibold text-gray-900">+62 812 3456 7890</p>
                    </div>
                  </div>
                  <svg className="text-primary text-xs opacity-60 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              <div className="px-5 py-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-2.5 px-2 rounded-xl font-medium transition-all duration-200 text-sm ${
                        isActive
                          ? 'bg-primary text-white shadow-md shadow-primary/20'
                          : 'text-gray-700 active:bg-gray-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                      )}
                    </Link>
                  )
                })}
              </div>

              <div className="px-5 pt-2 pb-5">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col gap-1.5 w-full p-3 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">Request Quote</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p className="text-[10px] text-white/70">Dapatkan penawaran dalam &lt; 24 jam</p>
                </Link>
              </div>

              <div className="px-5 pb-5 pt-1 text-center border-t border-gray-50">
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
