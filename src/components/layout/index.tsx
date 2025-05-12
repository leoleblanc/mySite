import type { ReactElement, ReactNode } from 'react'
import Navbar from '../header'
import Footer from '../footer'

 
export default function Layout(children: ReactNode) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}