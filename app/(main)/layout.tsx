import React from 'react'
import Header from './_components/Header/Header'
import Footer from './_components/Footer'
import ArrowUp from './_components/ArrowUp'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ArrowUp />
    </>
  )
}
