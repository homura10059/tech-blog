import '../styles/index.css'
import 'highlight.js/styles/monokai.css'

import { Metadata } from 'next'

import Analytics from '../components/client/scripts/google-analytics'
import { BLOG_DESCRIPTION, BLOG_TITLE, TWITTER_ACCOUNT } from '../lib/constants'

export const metadata: Metadata = {
  metadataBase: new URL('https://tech-blog.homura10059.dev/'),
  title: {
    template: `%s | ${BLOG_TITLE}`,
    default: BLOG_TITLE
  },
  description: BLOG_DESCRIPTION,
  icons: {
    icon: '/favicon/favicon-32x32.png',
    apple: '/favicon/apple-touch-icon.png',
    shortcut: '/favicon/favicon.ico'
  },
  manifest: '/favicon/site.webmanifest',
  alternates: {
    types: {
      'application/rss+xml': '/rss/feed.xml'
    }
  },
  openGraph: {
    type: 'website',
    title: {
      template: `%s | ${BLOG_TITLE}`,
      default: BLOG_TITLE
    },
    description: BLOG_DESCRIPTION,
    siteName: BLOG_TITLE,
    images: ['https://i.imgur.com/H2X0iCp.png']
  },
  twitter: {
    card: 'summary',
    site: TWITTER_ACCOUNT
  }
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className="bg-background-dark text-surface">{children}</body>
    </html>
  )
}
