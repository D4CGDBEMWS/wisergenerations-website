import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Wiser Generations — Life Is a Project™',
    template: '%s | Wiser Generations',
  },
  description:
    'A 14-session leadership program for young professionals ages 17–21 built on the 7 Project Principles™. Earn your CAPM® pathway certificate. Online and in-person in Metro Atlanta.',
  keywords: [
    'project management youth', 'CAPM certification teens', 'life is a project',
    'enterprise academy', 'young professional leadership', '7 project principles',
    'PMI education hours', 'Crystal Stewart',
  ],
  metadataBase: new URL('https://wisergenerations.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wisergenerations.com',
    siteName: 'Wiser Generations',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Wiser Generations — Life Is a Project™' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
