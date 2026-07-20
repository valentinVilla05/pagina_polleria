export const SITE_TITLE = 'Asadero Ronda'
export const SITE_DESCRIPTION = 'Disfruta de sabores caseros.'

export const SITE_URL = 'https://asaderoronda.com/'

export const SITE_METADATA = {
  title: {
    default: 'Asadero Ronda'
  },
  description: 'Disfruta de sabores caseros.',
  keywords: [
    'pollo',
    'asadero',
    'fritos',
    'ensaladas',
    'a domicilio',
    'para recoger',
    'casero',
    'restaurante',
    'granada',
    'menus',
    'familiar',
    'compartir',
    'postres',
    'comida',
    'comida caliente',
    'sabroso'
  ],
  authors: [{ name: 'Valentin Villa Pozo y Daniel Alfonso Vilain', url: SITE_URL }],
  creator: 'Valentin Villa Pozo y Daniel Alfonso Vilain',
  publisher: 'Valentin Villa Pozo y Daniel Alfonso Vilain',
  robots: {
    index: true,
    follow: true
  },
  language: 'en-US',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Asadero Ronda',
    title: 'Asadero Ronda | Asador Granada',
    description: 'Disfruta de sabores caseros.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Asader Ronda | Asadero en Granada',
        type: 'image/png'
      }
    ]
  }
}

// Social media links
export const SOCIAL_LINKS = {
  instagram: ''
}

// Company information for structured data
export const COMPANY_INFO = {
  name: 'Asadero Ronda',
  legalName: 'shadcn Studio Inc.',
  url: SITE_URL,
  logo: `/images/logo.png`,
  foundingDate: '2024',
  address: {
    streetAddress: 'C. Adelfa, 2, Ronda ',
    addressLocality: 'Granada',
    addressRegion: 'Andalucia',
    postalCode: '18006',
    addressCountry: 'ES'
  },
  contactPoint: {
    telephone: '+34 642 65 36 04',
    contactType: 'customer support',
    email: 'support@shadcnstudio.com'
  },
  sameAs: Object.values(SOCIAL_LINKS)
}
