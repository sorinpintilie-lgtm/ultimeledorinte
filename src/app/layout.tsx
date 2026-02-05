import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PromoBar } from '@/components/PromoBar'

export const viewport: Viewport = {
  themeColor: '#F5F0E8',
}

export const metadata: Metadata = {
  title: {
    default: 'Ultimele dorințe ale unui văduv tânăr',
    template: '%s | Ultimele dorințe',
  },
  description: 'Un jurnal despre viață, timp, călătorii și sens, scris cu luciditate și umor.',
  keywords: ['memoare', 'călătorii', 'seniori', 'viață', 'reflecții', 'romanian', 'blog'],
  authors: [{ name: 'Dan Goldiș' }],
  creator: 'Dan Goldiș',
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'Ultimele dorințe ale unui văduv tânăr',
    title: 'Ultimele dorințe ale unui văduv tânăr',
    description: 'Un jurnal despre viață, timp, călătorii și sens.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimele dorințe ale unui văduv tânăr',
    description: 'Un jurnal despre viață, timp, călătorii și sens.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased" style={{ paddingTop: 'calc(var(--promo-bar-height) + env(safe-area-inset-top, 0px))' }}>
        <a href="#main-content" className="skip-link">
          Sari la conținutul principal
        </a>
        
        <PromoBar />
        
        {/* Decorative top border */}
        <div className="fixed top-[calc(var(--promo-bar-height)+env(safe-area-inset-top,0px))] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/40 to-transparent z-[9999]" />
        
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
