import Footer from './footer'
import Meta from './meta'
import Navbar from './NavBar'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen border-none">
          <Navbar />
          <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
