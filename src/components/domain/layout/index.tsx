import Meta, { OgpProps } from '../../meta'
import Footer from './footer'
import Header from './header'

type Props = {
  preview?: boolean
  og: OgpProps
  children: React.ReactNode
}

const Layout = ({ preview, og, children }: Props) => {
  return (
    <>
      <Meta og={og} />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
