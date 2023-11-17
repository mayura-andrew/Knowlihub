import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Home from './page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Knowlihub',
  description: 'Your ultimate destination for free education',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../public/logo.png" />
        <link rel="apple-touch-icon" href="../public/logo.png" />
        <link rel="shortcut icon" type="image/png" href="../public/logo.png" />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
