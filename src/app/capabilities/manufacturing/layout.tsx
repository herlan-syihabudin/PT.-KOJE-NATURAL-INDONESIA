// src/app/capabilities/manufacturing/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Manufacturing & FMCG Distribution | PT KOJE Natural Indonesia',
  description:
    'Beverage manufacturing, private label production, FMCG distribution, corporate supply, and custom packaging solutions for businesses across Indonesia.',
  openGraph: {
    title: 'Manufacturing & FMCG Distribution | PT KOJE Natural Indonesia',
    description: 'Beverage manufacturing, private label production, FMCG distribution, corporate supply, and custom packaging solutions.',
    url: 'https://kojenatural.com/capabilities/manufacturing',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-manufacturing.jpg',
        width: 1200,
        height: 630,
        alt: 'Manufacturing & FMCG Distribution - PT KOJE Natural Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manufacturing & FMCG Distribution | PT KOJE Natural Indonesia',
    description: 'Beverage manufacturing, private label production, FMCG distribution, corporate supply, and custom packaging solutions.',
    images: ['/images/og-manufacturing.jpg'],
  },
  alternates: {
    canonical: 'https://kojenatural.com/capabilities/manufacturing',
  },
}

export default function ManufacturingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
