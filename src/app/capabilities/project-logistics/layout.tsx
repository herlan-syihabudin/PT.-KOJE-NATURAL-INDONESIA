import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Project Logistics & Material Delivery Support | PT KOJE Natural Indonesia',
  description:
    'PT KOJE Natural Indonesia provides project logistics, material delivery coordination, vendor management, site logistics, procurement-to-delivery coordination, and project supply support across Indonesia.',
  keywords: [
    'project logistics Indonesia',
    'logistics support Indonesia',
    'material delivery Indonesia',
    'industrial logistics Indonesia',
    'project material supply',
    'vendor coordination',
    'site logistics',
    'procurement logistics',
    'project logistics services',
    'PT KOJE Natural Indonesia',
  ],
  alternates: {
    canonical: 'https://www.koje-natural.com/capabilities/project-logistics',
  },
  openGraph: {
    title: 'Project Logistics & Material Delivery Support | PT KOJE Natural Indonesia',
    description:
      'Project logistics, material delivery, vendor coordination, site logistics, and procurement-to-delivery support for industrial and commercial projects across Indonesia.',
    url: 'https://www.koje-natural.com/capabilities/project-logistics',
    siteName: 'PT KOJE Natural Indonesia',
    type: 'website',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
