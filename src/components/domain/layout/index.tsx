import Meta, { OgpProps } from '../../meta'
import Footer from './footer'
import Header from './header'

type Props = {
  og: OgpProps
  inView?: boolean
  children: React.ReactNode
}

const Layout = ({ og, inView, children }: Props) => {
  return (
    <>
      <Meta og={og} />
      {!inView && <Header />}
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
