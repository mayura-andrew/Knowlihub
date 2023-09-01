import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'knowlihub',
  description: 'Your ultimate destination for free education',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
