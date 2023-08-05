import { Metadata } from 'next'

import Header from '../../components/client/navigation/header'
import Footer from '../../components/server/layout/footer'
import { BLOG_TITLE } from '../../lib/constants'

export const metadata: Metadata = {
  title: {
    template: `%s | ${BLOG_TITLE}`,
    default: 'All Posts'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
