'use client';

import type { ReactNode } from 'react'
import Navbar from '@/components/header'
import Footer from '@/components/footer'

export default function Layout(children: ReactNode) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}