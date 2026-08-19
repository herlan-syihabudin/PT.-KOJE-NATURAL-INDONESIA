// src/app/capabilities/safety-compliance/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Safety & Compliance Solutions | PT KOJE Natural Indonesia',
  description:
    'Industrial safety equipment, PPE, fire protection solutions, compliance support, and workplace safety supplies for manufacturing, construction, and commercial operations across Indonesia.',
  openGraph: {
    title: 'Safety & Compliance Solutions | PT KOJE Natural Indonesia',
    description: 'Industrial safety equipment, PPE, fire protection solutions, and compliance support.',
    url: 'https://kojenatural.com/capabilities/safety-compliance',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function SafetyComplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
