import React, { Fragment, ReactNode } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import ArrowUp from '../components/ArrowUp'

export default function PageContent(children: ReactNode) {
  return (
    <Fragment>
      <Header />
      <Navigation />
      <main>{children}</main>
      <Footer />
      <ArrowUp />
    </Fragment>
  )
}
