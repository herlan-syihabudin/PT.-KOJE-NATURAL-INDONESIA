// src/app/capabilities/engineering-support/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering & Technical Support | PT KOJE Natural Indonesia',
  description:
    'Engineering support, technical sourcing, equipment procurement, maintenance coordination, and project execution support for industrial and commercial operations across Indonesia.',
  openGraph: {
    title: 'Engineering & Technical Support | PT KOJE Natural Indonesia',
    description: 'Engineering support, technical sourcing, equipment procurement, maintenance coordination, and project execution support.',
    url: 'https://kojenatural.com/capabilities/engineering-support',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function EngineeringSupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
