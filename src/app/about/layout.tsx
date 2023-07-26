import { Metadata } from 'next'

import Container from '../../components/server/headless/container'

export const metadata: Metadata = {
  title: 'About'
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // eslint-disable-next-line react/jsx-no-undef
  return <Container>{children}</Container>
}
