'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiChevronRight,
  HiOfficeBuilding,
  HiUsers,
  HiGlobeAlt,
  HiClock,
  HiShieldCheck,
  HiTruck,
  HiBeaker,
  HiDocumentText,
  HiArrowUp,
} from 'react-icons/hi'
import { FaAward, FaHandshake, FaLeaf } from 'react-icons/fa'

const stats = [
  { value: '50+', label: 'Produk Kategori' },
  { value: '100+', label: 'Supplier Partners' },
  { value: '500+', label: 'Produk Tersedia' },
  { value: '34', label: 'Kota di Indonesia' },
]

const industries = [
  'Manufacturing',
  'Construction',
  'Engineering & MEP',
  'FMCG',
  'Food & Beverage',
  'Commercial Facilities',
  'Industrial Operations',
  'Project & Site Operations',
]

const advantages = [
  {
    title: 'Specification-Based Procurement',
    description:
      'Products and suppliers sourced according to technical specifications, application requirements, quantity, availability, and commercial considerations.',
  },
  {
    title: 'Multi-Category Sourcing',
    description:
      'Support across multiple procurement categories through a single coordination point.',
  },
  {
    title: 'Supplier Coordination',
    description:
      'Managing quotations, lead times, documentation, supplier communication, and purchasing requirements.',
  },
  {
    title: 'Project-Based Support',
    description:
      'Supporting procurement requirements aligned with project schedules and operational needs.',
  },
]

const milestones = [
  {
    year: '2023',
    title: 'Company Establishment',
  },
  {
    year: '2024',
    title: 'Industrial Supply Expansion',
  },
  {
    year: '2025',
    title: 'Manufacturing & FMCG Development',
  },
  {
    year: '2026',
    title: 'National Procurement Network Growth',
  },
]

const values = [
  {
    icon: HiShieldCheck,
    title: 'Integritas',
    description: 'Kami berkomitmen pada transparansi dan kejujuran dalam setiap transaksi.',
  },
  {
    icon: FaHandshake,
    title: 'Kemitraan',
    description: 'Membangun hubungan jangka panjang dengan klien dan vendor.',
  },
  {
    icon: HiGlobeAlt,
    title: 'Jangkauan Nasional',
    description: 'Melayani klien di 34 kota di seluruh Indonesia.',
  },
  {
    icon: HiClock,
    title: 'Ketepatan Waktu',
    description: 'Komitmen pada pengiriman tepat waktu dan layanan responsif.',
  },
]

export default function AboutPage() {
  return (
    <main id="top" className="bg-white">

      {/* HEADER */}
      <section className="bg-white pt-28 md:pt-32 pb-12">
        <div className="max-w-6xl mx-auto px-6">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mb-6"
          >
            <Link href="/" className="hover:text-gray-600 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900">About</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                About Us
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Mitra Terpercaya untuk <br />
              <span className="text-[#0FA3A8]">Kebutuhan Industri</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-2xl">
              PT KOJE Natural Indonesia adalah perusahaan procurement dan supply chain yang
              terpercaya, melayani industri manufaktur, konstruksi, engineering, dan FMCG
              di seluruh Indonesia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-start"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Company Overview
                </span>
              </div>

              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Solusi Procurement & Supply Chain
              </h2>

              <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
                <p>
                  PT KOJE Natural Indonesia beroperasi sebagai mitra pengadaan dan manufaktur
                  yang mendukung rantai pasok industri, operasi teknik, sistem keselamatan,
                  dan jaringan distribusi FMCG di Indonesia.
                </p>
                <p>
                  Dengan pengalaman di berbagai sektor industri, kami menyediakan solusi
                  terintegrasi yang mencakup pengadaan material, dukungan teknis,
                  kepatuhan keselamatan, dan logistik.
                </p>
                <p>
                  Komitmen kami adalah memberikan layanan yang andal, efisien, dan
                  profesional untuk mendukung pertumbuhan bisnis klien.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0FA3A8] text-white px-6 py-2.5 text-sm font-medium hover:bg-[#0C8A8E] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#0FA3A8]/30"
                >
                  Hubungi Kami
                  <HiChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/capabilities"
                  className="inline-flex items-center gap-2 text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
                >
                  Lihat Capabilities
                  <HiChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right - Stats */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 bg-white"
                  >
                    <p className="text-2xl font-light text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-[#0FA3A8]/20 rounded-full flex items-center justify-center">
                    <FaAward className="text-[#0FA3A8] text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Terpercaya Sejak 2023</p>
                    <p className="text-xs text-gray-400">Pengalaman di industri procurement</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-10"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-3xl font-light text-gray-900">
              Supporting diverse industrial sectors.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-4">
            {industries.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-5 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-sm text-gray-600">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY COMPANIES WORK WITH KOJE */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Why Companies Work With KOJE
              </span>
            </div>

            <h2 className="text-3xl font-light text-gray-900">
              Procurement support designed for business operations.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 bg-white p-7 hover:border-gray-300 hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mb-12"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Company Milestones
              </span>
            </div>

            <h2 className="text-3xl font-light text-gray-900">
              Company growth and development.
            </h2>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-[120px_1fr] gap-6 border-b border-gray-100 pb-6"
              >
                <div className="text-gray-400 text-sm">{item.year}</div>
                <div className="font-medium text-gray-900">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Core Values
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-2xl font-light text-gray-900">
              Prinsip yang <span className="text-[#0FA3A8]">Kami Pegang</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-gray-700 transition">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES PREVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Layanan Kami
                </span>
              </div>

              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Solusi Lengkap untuk <span className="text-[#0FA3A8]">Bisnis Anda</span>
              </h2>

              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Kami menyediakan layanan terintegrasi yang mencakup seluruh kebutuhan
                supply chain dan procurement industri.
              </p>

              <div className="space-y-3">
                {[
                  'Industrial Supply & Procurement',
                  'Engineering & Technical Support',
                  'Safety & Compliance Solutions',
                  'Manufacturing & FMCG Distribution',
                  'Project & Logistics Support',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-[#0FA3A8]/40 rounded-full" />
                    {item}
                  </div>
                ))}
              </div>

              <Link
                href="/capabilities"
                className="inline-flex items-center gap-2 mt-6 text-sm text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition"
              >
                Lihat Semua Capabilities
                <HiChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right - Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5"
              >
                <HiOfficeBuilding className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Industrial Supply</p>
                <p className="text-xs text-gray-400 mt-1">Procurement & MRO</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 mt-4"
              >
                <HiBeaker className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Manufacturing</p>
                <p className="text-xs text-gray-400 mt-1">FMCG & Beverage</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.15 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5"
              >
                <HiShieldCheck className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Safety Solutions</p>
                <p className="text-xs text-gray-400 mt-1">Compliance & PPE</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 mt-4"
              >
                <HiTruck className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Logistics</p>
                <p className="text-xs text-gray-400 mt-1">Project & Distribution</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Why KOJE
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-2xl font-light text-gray-900">
              Mitra yang <span className="text-[#0FA3A8]">Anda Percayai</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: FaLeaf,
                title: 'Solusi Terintegrasi',
                description: 'Layanan end-to-end dari procurement hingga logistik dalam satu platform terintegrasi.',
              },
              {
                icon: HiUsers,
                title: 'Tim Profesional',
                description: 'Didukung oleh tim berpengalaman di bidang procurement, engineering, dan supply chain.',
              },
              {
                icon: FaHandshake,
                title: 'Kemitraan Jangka Panjang',
                description: 'Membangun hubungan yang berkelanjutan dengan klien dan vendor terpercaya.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300"
              >
                <item.icon className="text-2xl text-gray-400 mb-3" />
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* RFQ Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-[0.2em]">
                <HiDocumentText className="w-4 h-4" />
                Mulai Kerjasama
              </div>
              <h3 className="text-lg font-medium text-gray-900 mt-2">
                Butuh solusi procurement untuk bisnis Anda?
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Hubungi kami untuk konsultasi gratis dan penawaran terbaik.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition rounded-lg"
            >
              Hubungi Kami
              <HiChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* BACK TO TOP */}
      <div className="border-t border-gray-100 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition"
          >
            <HiArrowUp className="w-4 h-4" />
            Back to Top
          </Link>
        </div>
      </div>

    </main>
  )
}
