import { Metadata } from 'next'

import Header from '../../components/client/navigation/header'
import Footer from '../../components/server/layout/footer'

export const metadata: Metadata = {
  title: 'All Posts'
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
