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
  { href: '/divisions', label: 'Divisi Usaha' },
  { href: '/projects', label: 'Proyek' },
  { href: '/contact', label: 'Kontak' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  // Optimized scroll handler with useCallback
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
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  // Memoize active state untuk performance
  const isHomePage = useMemo(() => pathname === '/', [pathname])
  const isWhite = useMemo(() => isHomePage ? isScrolled || isMobileMenuOpen : true, [isHomePage, isScrolled, isMobileMenuOpen])

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image 
                src="/images/logo/koje-logo.png"
                alt="KOJE Natural Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-poppins font-bold text-sm text-primary tracking-tight">KOJE Natural</span>
              <p className="text-[8px] text-gray-400 -mt-0.5">Indonesia</p>
            </div>
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
        <div className="container-custom flex justify-between items-center py-3 md:py-4">
          {/* Logo - Dengan Gambar Asli */}
          <Link href="/" className="shrink-0 group">
            <div className="flex items-center gap-2">
              <div className="relative w-9 h-9 transition-transform duration-300 group-hover:scale-105">
                <Image 
                  src="/images/logo/koje-logo.png"
                  alt="KOJE Natural Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className={`font-poppins font-bold text-sm sm:text-base tracking-tight ${
                  isWhite ? 'text-primary' : 'text-white'
                }`}>
                  KOJE Natural
                </span>
                <p className={`text-[8px] leading-tight -mt-0.5 ${
                  isWhite ? 'text-gray-400' : 'text-white/60'
                }`}>
                  Indonesia
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative font-medium transition-all duration-300 py-1 group text-sm tracking-wide ${
                    isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                  } ${isActive ? (isWhite ? 'text-primary' : 'text-white') : ''}`}
                >
                  {item.label}
                  {/* Active Indicator - Elegant dot style */}
                  {isActive && (
                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isWhite ? 'bg-primary' : 'bg-white'
                    }`} />
                  )}
                  {/* Hover underline effect */}
                  <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-6 ${
                    isWhite ? 'bg-primary' : 'bg-white'
                  } ${isActive ? 'opacity-0' : ''}`} />
                </Link>
              )
            })}
            
            {/* Divider & Phone */}
            <div className="flex items-center gap-4 ml-2 pl-4 border-l border-gray-200/50">
              <a 
                href="tel:+6281234567890" 
                className={`flex items-center gap-2 text-sm font-medium transition-colors tracking-wide ${
                  isWhite ? 'text-gray-500 hover:text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 812 3456 7890</span>
              </a>
            </div>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 hover:-translate-y-0.5 ${
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
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 active:scale-95"
            aria-label="Open menu"
          >
            <HiMenu size={20} className="text-primary" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Premium Bottom Sheet */}
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
              {/* Handle Bar */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-12 h-1 bg-gray-200 rounded-full" />
              </div>

              {/* Header */}
              <div className="px-5 pt-2 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                      <Image 
                        src="/images/logo/koje-logo.png"
                        alt="KOJE Natural Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-sm text-primary">KOJE Natural</span>
                      <p className="text-[8px] text-gray-400 -mt-0.5">Indonesia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center active:bg-gray-200 transition"
                    aria-label="Close menu"
                  >
                    <HiX className="text-sm text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Phone Number - Premium Card */}
              <div className="px-5 py-4">
                <a 
                  href="tel:+6281234567890"
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 active:bg-primary/10 transition group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center group-hover:scale-110 transition">
                      <HiPhone className="text-primary text-base" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Call us now</p>
                      <p className="text-sm font-semibold text-gray-900">+62 812 3456 7890</p>
                    </div>
                  </div>
                  <svg className="text-primary text-sm opacity-60 group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Navigation Menu - Lebih lega */}
              <div className="px-3 py-2">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between py-4 px-3 rounded-xl font-medium transition-all duration-200 text-base ${
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

              {/* CTA Section - Lebih dominan */}
              <div className="px-5 pt-2 pb-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex flex-col gap-2 w-full p-4 bg-gradient-to-r from-primary to-primary-dark rounded-xl text-white shadow-lg shadow-primary/30 active:scale-[0.98] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-base">Request Quote</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <p className="text-xs text-white/70">Dapatkan penawaran dalam &lt; 24 jam</p>
                </Link>
              </div>

              {/* Footer */}
              <div className="px-5 pb-6 pt-2 text-center border-t border-gray-50">
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
