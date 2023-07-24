import '../styles/index.css'

import { Metadata } from 'next'

import { BLOG_DESCRIPTION, BLOG_TITLE } from '../lib/constants'

export const metadata: Metadata = {
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico'
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
