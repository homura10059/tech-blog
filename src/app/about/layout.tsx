import { Metadata } from 'next'

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
      <div className="h-screen">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  )
}
