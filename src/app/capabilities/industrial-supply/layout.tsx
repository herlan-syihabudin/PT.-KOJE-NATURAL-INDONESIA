import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Industrial Supply & Procurement | PT KOJE Natural Indonesia',
  description:
    'Industrial supply and procurement services for manufacturing, construction, engineering, FMCG, and commercial operations across Indonesia, including MRO, industrial materials, packaging, sourcing, vendor coordination, and logistics support.',
  openGraph: {
    title: 'Industrial Supply & Procurement | PT KOJE Natural Indonesia',
    description: 'Industrial supply and procurement services for manufacturing, construction, engineering, FMCG, and commercial operations.',
    url: 'https://kojenatural.com/capabilities/industrial-supply',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function IndustrialSupplyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
