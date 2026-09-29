import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, PT_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans' })
const ptSerif = PT_Serif({
  subsets: ['latin', 'cyrillic'],
  weight: ['700'],
  variable: '--font-serif',
})

const SITE_URL = 'https://ramenbet13casino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ramenbet — Раменбет официальный сайт, зеркало и казино Ramen bet',
  description:
    'Ramenbet (Раменбет) — официальный сайт, рабочее зеркало и вход в казино Ramenbet. Слоты, live-игры, бонусы и быстрый вывод в Ramen bet без блокировок и лишних сложностей каждый день.',
  generator: 'v0.app',
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Ramenbet — Раменбет официальный сайт, зеркало и казино Ramen bet',
    description:
      'Официальный сайт, рабочее зеркало и казино Ramenbet (Раменбет). Слоты, live-игры и быстрые выплаты в Ramen bet.',
    siteName: 'Ramenbet',
    images: ['/ramenbet-hero-art.png'],
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ramenbet — Раменбет официальный сайт и зеркало',
    description:
      'Ramenbet (Раменбет): официальный сайт, рабочее зеркало и казино Ramen bet.',
    images: ['/ramenbet-hero-art.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: 'dark',
  themeColor: '#1b1310',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        {/* Пользовательский слот: сюда можно добавлять дополнительные meta/verification теги */}
      </head>
      <body className={`antialiased ${inter.variable} ${ptSerif.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
