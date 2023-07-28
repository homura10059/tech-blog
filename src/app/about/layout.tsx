import { Metadata } from 'next'

import Header from '../../components/client/navigation/header'
import Container from '../../components/server/headless/container'
import Footer from '../../components/server/layout/footer'

export const metadata: Metadata = {
  title: 'About'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="h-screen">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  )
}
