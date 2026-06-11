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

  useEffect(() => {
    if (!mounted) return
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

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

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full z-50 bg-white shadow-md py-2">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">K</span>
            </div>
            <span className="font-poppins font-bold text-primary">KOJE Natural</span>
          </div>
        </div>
      </nav>
    )
  }

  const isHomePage = pathname === '/'
  const isTransparent = isHomePage && !isScrolled && !isMobileMenuOpen
  const isWhite = !isTransparent

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isWhite ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
        style={{
          backdropFilter: isWhite ? 'none' : 'blur(12px)',
          backgroundColor: isWhite ? 'white' : 'rgba(255,255,255,0.05)',
        }}
      >
        <div className="container-custom flex justify-between items-center py-2 md:py-1">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <div>
                <span className={`font-poppins font-bold text-sm sm:text-base ${
                  isWhite ? 'text-primary' : 'text-white'
                }`}>
                  KOJE Natural
                </span>
                <p className={`text-[8px] leading-tight ${
                  isWhite ? 'text-gray-400' : 'text-white/60'
                }`}>
                  Indonesia
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition-all duration-300 py-1 group text-sm ${
                  isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
                } ${pathname === item.href ? (isWhite ? 'text-primary' : 'text-white') : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-0.5 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isWhite ? 'bg-primary' : 'bg-white'
                } ${pathname === item.href ? 'w-full' : 'w-0'}`} />
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200">
              <a href="tel:+6281234567890" className={`flex items-center gap-2 text-sm font-medium ${
                isWhite ? 'text-gray-600 hover:text-primary' : 'text-white/80 hover:text-white'
              }`}>
                <HiPhone className="text-sm" />
                <span className="hidden lg:inline">+62 812 3456 7890</span>
              </a>
            </div>
            <Link href="/contact" className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 ${
              isWhite ? 'bg-primary text-white shadow-md shadow-primary/30' : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
            }`}>
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden w-9 h-9 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20"
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
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
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
                <div className="w-12 h-1 bg-gray-300 rounded-full" />
              </div>

              <div className="px-5 pt-2 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">K</span>
                    </div>
                    <div>
                      <span className="font-poppins font-bold text-primary">KOJE Natural</span>
                      <p className="text-[8px] text-gray-400">Indonesia</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <HiX className="text-sm" />
                  </button>
                </div>
              </div>

              <div className="px-5 py-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3 px-2 rounded-xl font-medium transition ${
                      pathname === item.href
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>

              <div className="px-5 pt-2 pb-5">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full p-3 bg-primary rounded-xl text-white shadow-lg shadow-primary/30"
                >
                  <span className="font-semibold">Request Quote →</span>
                </Link>
              </div>

              <div className="px-5 pb-5 pt-1 text-center border-t border-gray-50">
                <p className="text-[8px] text-gray-400">© 2026 PT Koje Natural Indonesia</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
