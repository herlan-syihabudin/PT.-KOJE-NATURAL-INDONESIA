import type { Metadata, Viewport } from 'next'
import './globals.css'

// Koje Natural Indonesia - Brand Colors
export const metadata: Metadata = {
  title: 'PT Koje Natural Indonesia | General Supplier & Beverage Partner',
  description: 'Trusted general supplier for industrial needs and premium beverage manufacturer. Solusi pengadaan industri dan produsen minuman kesehatan.',
  keywords: 'general supplier, industrial supply, KOJE beverage, minuman kesehatan, B2B supplier, corporate gifting',
  authors: [{ name: 'PT Koje Natural Indonesia' }],
  openGraph: {
    title: 'PT Koje Natural Indonesia',
    description: 'Solusi pengadaan industri & minuman kesehatan premium',
    type: 'website',
    locale: 'id_ID',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className="bg-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
