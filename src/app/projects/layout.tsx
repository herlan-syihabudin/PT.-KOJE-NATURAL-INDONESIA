// src/app/projects/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects & Operations | PT KOJE Natural Indonesia',
  description:
    'Explore PT KOJE Natural Indonesia capabilities across industrial procurement, engineering support, FMCG manufacturing, distribution, and B2B supply operations.',
  keywords: [
    'PT KOJE Natural Indonesia projects',
    'industrial procurement projects Indonesia',
    'general supplier Indonesia',
    'industrial supply Indonesia',
    'engineering support Indonesia',
    'FMCG manufacturing Indonesia',
    'FMCG distribution Indonesia',
    'B2B procurement Indonesia',
  ],
  alternates: {
    canonical: 'https://kojenatural.com/projects',
  },
  openGraph: {
    title: 'Projects & Operations | PT KOJE Natural Indonesia',
    description:
      'Industrial procurement, engineering support, manufacturing, distribution, and B2B supply operations by PT KOJE Natural Indonesia.',
    url: 'https://kojenatural.com/projects',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/og-projects.jpg',
        width: 1200,
        height: 630,
        alt: 'Projects & Operations - PT KOJE Natural Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Operations | PT KOJE Natural Indonesia',
    description: 'Industrial procurement, engineering support, manufacturing, distribution, and B2B supply operations.',
    images: ['/images/og-projects.jpg'],
  },
}

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
