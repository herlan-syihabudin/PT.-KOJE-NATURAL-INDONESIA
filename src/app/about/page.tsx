// app/about/page.tsx
import Link from 'next/link'
import Image from 'next/image'
import { 
  HiChevronRight, 
  HiOfficeBuilding, 
  HiUsers, 
  HiGlobeAlt, 
  HiClock,
  HiShieldCheck,
  HiTruck,
  HiBeaker,
  HiDocumentText
} from 'react-icons/hi'
import { FaAward, FaHandshake, FaLeaf } from 'react-icons/fa'

export const metadata = {
  title: 'Tentang Kami | PT KOJE Natural Indonesia',
  description:
    'PT KOJE Natural Indonesia adalah perusahaan procurement dan supply chain yang terpercaya, melayani industri manufaktur, konstruksi, dan FMCG di seluruh Indonesia.',
}

const values = [
  {
    icon: HiShieldCheck,
    title: 'Integritas',
    description: 'Kami berkomitmen pada transparansi dan kejujuran dalam setiap transaksi.'
  },
  {
    icon: FaHandshake,
    title: 'Kemitraan',
    description: 'Membangun hubungan jangka panjang dengan klien dan vendor.'
  },
  {
    icon: HiGlobeAlt,
    title: 'Jangkauan Nasional',
    description: 'Melayani klien di 34 kota di seluruh Indonesia.'
  },
  {
    icon: HiClock,
    title: 'Ketepatan Waktu',
    description: 'Komitmen pada pengiriman tepat waktu dan layanan responsif.'
  }
]

const stats = [
  { value: '100+', label: 'Corporate Clients' },
  { value: '50+', label: 'Industrial Projects' },
  { value: '34', label: 'Cities Coverage' },
  { value: '24/7', label: 'Support Ready' },
]

export default function AboutPage() {
  return (
    <>
      {/* HEADER - SAMA dengan Capabilities */}
      <section className="bg-white pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Tentang Kami
              </span>
              <span className="w-10 h-px bg-gray-300" />
            </div>

            <h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              Mitra Terpercaya untuk <br />
              <span className="text-primary">Kebutuhan Industri</span>
            </h1>

            <p className="mt-5 text-gray-500 text-sm leading-relaxed max-w-2xl">
              PT KOJE Natural Indonesia adalah perusahaan procurement dan supply chain yang 
              terpercaya, melayani industri manufaktur, konstruksi, engineering, dan FMCG 
              di seluruh Indonesia.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE - Company Overview */}
      <section className="bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Profil Perusahaan
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
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 text-sm font-medium hover:bg-primary-dark transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/30"
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

            {/* Right - Stats Grid */}
            <div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 bg-white"
                  >
                    <p className="text-2xl font-light text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-6 border border-gray-100 bg-gray-50 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border-2 border-primary/20 rounded-full flex items-center justify-center">
                    <FaAward className="text-primary text-lg" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Terpercaya Sejak 2010</p>
                    <p className="text-xs text-gray-400">Pengalaman lebih dari 10 tahun</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES - SAMA dengan capabilities grid style */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Nilai Perusahaan
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-2xl font-light text-gray-900">
              Prinsip yang <span className="text-primary">Kami Pegang</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300"
              >
                <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center mb-4 text-gray-400 group-hover:text-gray-700 transition">
                  <item.icon className="text-xl" />
                </div>
                <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES PREVIEW - SAMA dengan capabilities */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-gray-300" />
                <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                  Layanan Kami
                </span>
              </div>

              <h2 className="text-2xl font-light text-gray-900 mb-4">
                Solusi Lengkap untuk <span className="text-primary">Bisnis Anda</span>
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
                  'Project & Logistics Support'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
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

            {/* Right - Visual */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5">
                <HiOfficeBuilding className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Industrial Supply</p>
                <p className="text-xs text-gray-400 mt-1">Procurement & MRO</p>
              </div>
              <div className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 mt-4">
                <HiBeaker className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Manufacturing</p>
                <p className="text-xs text-gray-400 mt-1">FMCG & Beverage</p>
              </div>
              <div className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5">
                <HiShieldCheck className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Safety Solutions</p>
                <p className="text-xs text-gray-400 mt-1">Compliance & PPE</p>
              </div>
              <div className="border border-gray-100 p-6 hover:border-gray-300 transition-all hover:-translate-y-0.5 mt-4">
                <HiTruck className="text-2xl text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-900">Logistics</p>
                <p className="text-xs text-gray-400 mt-1">Project & Distribution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US - SAMA dengan capabilities strip */}
      <section className="bg-gray-50 py-20 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-px bg-gray-300" />
              <span className="text-xs tracking-[0.25em] text-gray-400 uppercase">
                Mengapa Memilih Kami
              </span>
              <span className="w-8 h-px bg-gray-300" />
            </div>
            <h2 className="text-2xl font-light text-gray-900">
              Mitra yang <span className="text-primary">Anda Percayai</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300">
              <FaLeaf className="text-2xl text-gray-400 mb-3" />
              <h3 className="text-base font-medium text-gray-900">Solusi Terintegrasi</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Layanan end-to-end dari procurement hingga logistik dalam satu platform terintegrasi.
              </p>
            </div>

            <div className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300">
              <HiUsers className="text-2xl text-gray-400 mb-3" />
              <h3 className="text-base font-medium text-gray-900">Tim Profesional</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Didukung oleh tim berpengalaman di bidang procurement, engineering, dan supply chain.
              </p>
            </div>

            <div className="border border-gray-100 hover:border-gray-300 transition bg-white p-6 hover:-translate-y-1 duration-300">
              <FaHandshake className="text-2xl text-gray-400 mb-3" />
              <h3 className="text-base font-medium text-gray-900">Kemitraan Jangka Panjang</h3>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                Membangun hubungan yang berkelanjutan dengan klien dan vendor terpercaya.
              </p>
            </div>
          </div>

          {/* RFQ Strip - SAMA dengan capabilities */}
          <div className="mt-12 border border-gray-100 bg-gray-50 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
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
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition"
            >
              Hubungi Kami
              <HiChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
