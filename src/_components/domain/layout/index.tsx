import Footer from '../../../components/server/layout/footer'
import Header from '../../../components/server/layout/header'
import Meta, { OgpProps } from '../../meta'

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
