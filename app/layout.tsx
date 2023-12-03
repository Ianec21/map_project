import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Countries.',
  description: 'Project created for MAP, by Jizdan Ianec and Pricop Mihai.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + "flex flex-1"}>
        {children}
        <Footer/>
        <Toaster/>
      </body>
    </html>
  )
}
