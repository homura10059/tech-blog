import { Metadata } from 'next'

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
      <Container>{children}</Container>
      <Footer />
    </>
  )
}
