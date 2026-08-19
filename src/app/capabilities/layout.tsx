// src/app/capabilities/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Procurement & Supply Capabilities | PT KOJE Natural Indonesia',
  description:
    'PT KOJE Natural Indonesia provides industrial procurement, MRO supply, engineering support, safety solutions, project logistics, manufacturing, and FMCG distribution for businesses across Indonesia.',
  openGraph: {
    title: 'Industrial Procurement & Supply Capabilities | PT KOJE Natural Indonesia',
    description: 'Industrial procurement, MRO supply, engineering support, safety solutions, project logistics, manufacturing, and FMCG distribution.',
    url: 'https://kojenatural.com/capabilities',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function CapabilitiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
