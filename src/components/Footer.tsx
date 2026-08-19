'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'
import {
  HiLocationMarker,
  HiMail,
  HiPhone,
  HiClock,
  HiChevronRight,
  HiDocumentText,
} from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0F14] text-gray-400">

      <div className="max-w-6xl mx-auto px-6">

        {/* =====================================================
            MAIN FOOTER
        ====================================================== */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* =====================================================
              COMPANY
          ====================================================== */}
          <div className="lg:col-span-1">

            <Link href="/" className="inline-block mb-6">
              <div className="relative w-32 h-20">
                <Image
                  src="/images/logo/koje_putih-removebg-preview.png"
                  alt="PT KOJE Natural Indonesia"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              PT KOJE Natural Indonesia is an Indonesian procurement,
              engineering support, manufacturing, and supply partner
              serving industrial and FMCG businesses.
            </p>

            {/* Social */}
            <div className="flex items-center gap-4 mt-7">

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 hover:text-white transition-colors"
              >
                <FaInstagram className="w-4 h-4" />
              </a>

            </div>

          </div>


          {/* =====================================================
              COMPANY
          ====================================================== */}
          <div>

            <h3 className="text-xs tracking-[0.2em] text-white uppercase mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/capabilities"
                  className="hover:text-white transition-colors"
                >
                  Capabilities
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="hover:text-white transition-colors"
                >
                  Projects & Operations
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/company-profile/PT-KOJE-NATURAL-INDONESIA-Company-Profile.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <HiDocumentText className="w-4 h-4" />
                  Company Profile
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================================
              CAPABILITIES
          ====================================================== */}
          <div>

            <h3 className="text-xs tracking-[0.2em] text-white uppercase mb-6">
              Capabilities
            </h3>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  href="/capabilities/industrial-supply"
                  className="hover:text-white transition-colors"
                >
                  Industrial Supply & Procurement
                </Link>
              </li>

              <li>
                <Link
                  href="/capabilities/engineering"
                  className="hover:text-white transition-colors"
                >
                  Engineering Support
                </Link>
              </li>

              <li>
                <Link
                  href="/capabilities/manufacturing"
                  className="hover:text-white transition-colors"
                >
                  FMCG Manufacturing
                </Link>
              </li>

              <li>
                <Link
                  href="/capabilities/distribution"
                  className="hover:text-white transition-colors"
                >
                  FMCG Distribution
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-white hover:text-gray-300 transition-colors"
                >
                  Submit an RFQ
                  <HiChevronRight className="w-4 h-4" />
                </Link>
              </li>

            </ul>

          </div>


          {/* =====================================================
              CONTACT
          ====================================================== */}
          <div>

            <h3 className="text-xs tracking-[0.2em] text-white uppercase mb-6">
              Contact
            </h3>

            <div className="space-y-5 text-sm">

              <div className="flex items-start gap-3">
                <HiLocationMarker className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />

                <span>
                  Indonesia
                </span>
              </div>

              <div className="flex items-center gap-3">

                <HiPhone className="w-4 h-4 text-gray-500 shrink-0" />

                <a
                  href="tel:+6281234567890"
                  className="hover:text-white transition-colors"
                >
                  +62 812 3456 7890
                </a>

              </div>

              <div className="flex items-center gap-3">

                <HiMail className="w-4 h-4 text-gray-500 shrink-0" />

                <a
                  href="mailto:info@kojenatural.com"
                  className="hover:text-white transition-colors"
                >
                  info@kojenatural.com
                </a>

              </div>

              <div className="flex items-start gap-3">

                <HiClock className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />

                <span>
                  Monday – Friday
                  <br />
                  08:00 – 17:00 WIB
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            RFQ CTA
        ====================================================== */}
        <div className="border-t border-white/10 border-b border-white/10 py-8">

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

            <div>

              <p className="text-[11px] tracking-[0.2em] uppercase text-gray-500">
                Procurement Inquiry
              </p>

              <h3 className="text-lg text-white font-medium mt-2">
                Looking for a reliable procurement & supply partner?
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Submit your requirements and our team will review your RFQ.
              </p>

            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                bg-white
                text-gray-900
                text-sm
                font-medium
                hover:bg-gray-200
                transition-colors
                shrink-0
              "
            >
              Request an RFQ
              <HiChevronRight className="w-4 h-4" />
            </Link>

          </div>

        </div>


        {/* =====================================================
            BOTTOM
        ====================================================== */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-600">
            © {currentYear} PT KOJE Natural Indonesia. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs">

            <Link
              href="/privacy"
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-600 hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          WHATSAPP
      ====================================================== */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact PT KOJE Natural Indonesia via WhatsApp"
        className="
          fixed
          bottom-6
          right-6
          z-50
          w-12
          h-12
          bg-[#25D366]
          text-white
          flex
          items-center
          justify-center
          rounded-full
          shadow-lg
          hover:scale-105
          transition-transform
        "
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

    </footer>
  )
}
