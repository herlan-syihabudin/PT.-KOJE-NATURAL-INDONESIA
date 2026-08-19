import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Font configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

// Koje Natural Indonesia - Brand Colors & Metadata
export const metadata: Metadata = {
  title: {
    default: 'PT Koje Natural Indonesia | General Supplier & Beverage Partner',
    template: '%s | PT Koje Natural Indonesia',
  },
  description: 'Trusted general supplier for industrial needs and premium beverage manufacturer. Solusi pengadaan industri dan produsen minuman kesehatan.',
  keywords: 'general supplier, industrial supply, KOJE beverage, minuman kesehatan, B2B supplier, corporate gifting, procurement, manufacturing',
  authors: [{ name: 'PT Koje Natural Indonesia' }],
  creator: 'PT Koje Natural Indonesia',
  publisher: 'PT Koje Natural Indonesia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'PT Koje Natural Indonesia | General Supplier & Beverage Partner',
    description: 'Solusi pengadaan industri & minuman kesehatan premium untuk kebutuhan B2B Anda.',
    url: 'https://kojenatural.com',
    siteName: 'PT Koje Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PT Koje Natural Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PT Koje Natural Indonesia',
    description: 'Solusi pengadaan industri & minuman kesehatan premium.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code', // Ganti dengan code verifikasi Google
  },
  category: 'business',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0F1A' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={`${poppins.variable} ${inter.variable}`} suppressHydrationWarning>
      <body
  className="bg-white antialiased"
  suppressHydrationWarning
>
        {/* Navbar - Akan muncul di semua halaman */}
        <Navbar />
        
        {/* Main content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Footer - Akan muncul di semua halaman */}
        <Footer />
      </body>
    </html>
  )
}
