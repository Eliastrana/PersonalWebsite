import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Navbar from "./Navbar";
import Newnavbar from "./newtest/newnavbar";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen border-none">
          <Newnavbar />
          <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
