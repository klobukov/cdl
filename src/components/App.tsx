import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacts from './Pages/Contacts'
import Price from './Pages/Price'
import Page404 from './Pages/Page404'
import Documents from './Pages/Documents'
import IPage from './Pages/IPage'
import PageContent from './Pages/PageContent'

export default function App() {
  const routes = [Contacts, Price, Documents, Page404]
  return (
    <BrowserRouter>
      <Routes>{routes.map((route) => makeRoute(route))}</Routes>
    </BrowserRouter>
  )
}

function makeRoute(page: IPage) {
  const element = page.customElement ? page.element : PageContent(page.element)
  return <Route path={page.url} element={element} key={page.url} />
}
