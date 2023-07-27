import { Metadata } from 'next'

import Header from '../../components/client/navigation/header'
import Container from '../../components/server/headless/container'
import Footer from '../../components/server/layout/footer'

export const metadata: Metadata = {
  title: 'Profile'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
