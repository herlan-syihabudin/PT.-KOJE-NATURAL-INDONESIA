// src/app/about/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About PT KOJE Natural Indonesia | Procurement, Supply Chain & Industrial Solutions',
  description:
    'PT KOJE Natural Indonesia provides procurement, industrial supply, engineering support, manufacturing solutions, safety equipment, and project logistics services across Indonesia.',
  openGraph: {
    title: 'About PT KOJE Natural Indonesia | Procurement, Supply Chain & Industrial Solutions',
    description: 'Procurement, industrial supply, engineering support, manufacturing solutions, safety equipment, and project logistics services.',
    url: 'https://kojenatural.com/about',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About PT KOJE Natural Indonesia',
    description: 'Procurement, industrial supply, engineering support, manufacturing solutions, safety equipment, and project logistics services.',
  },
  alternates: {
    canonical: 'https://kojenatural.com/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
