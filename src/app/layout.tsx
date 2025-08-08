import { Inter } from 'next/font/google'
import ThemeRegistry from '../components/ThemeRegistry'
import Header from '../components/header'
import Footer from '../components/footer'
import './globals.css'
import type { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pet Grooming Booking',
  description: 'Professional pet grooming services',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="emotion-insertion-point" content="" />
      </head>
      <body className={inter.className}>
        <ThemeRegistry>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeRegistry>
      </body>
    </html>
  )
}
