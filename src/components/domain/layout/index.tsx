import Meta, { OgpProps } from '../../meta'
import Footer from './footer'
import Header from './header'

type Props = {
  og: OgpProps
  hiddenHeader?: boolean
  children: React.ReactNode
}

const Layout = ({ og, hiddenHeader, children }: Props) => {
  return (
    <>
      <Meta og={og} />
      <Header hidden={hiddenHeader} />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
