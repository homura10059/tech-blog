import Meta from '../../meta'
import Footer from './footer'
import Header from './header'

type Props = {
  preview?: boolean
  title?: string
  children: React.ReactNode
}

const Layout = ({ preview, title, children }: Props) => {
  return (
    <>
      <Meta title={title} />
      <Header />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
