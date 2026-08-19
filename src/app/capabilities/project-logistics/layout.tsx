// src/app/capabilities/project-logistics/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project & Logistics Support | PT KOJE Natural Indonesia',
  description:
    'Project logistics, material delivery coordination, vendor management, scheduling support, and site logistics services for industrial and commercial projects across Indonesia.',
  openGraph: {
    title: 'Project & Logistics Support | PT KOJE Natural Indonesia',
    description: 'Project logistics, material delivery coordination, vendor management, and site logistics services.',
    url: 'https://kojenatural.com/capabilities/project-logistics',
    siteName: 'PT KOJE Natural Indonesia',
    locale: 'id_ID',
    type: 'website',
  },
}

export default function ProjectLogisticsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
