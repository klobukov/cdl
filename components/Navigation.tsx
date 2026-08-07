import React, { JSX } from 'react'
import '../Styles/navigation.scss'
import Price from '../app/_components/Price'
import Contacts from '.././pages/Contacts'
import Politics from '.././pages/Politics'

export default function Navigation(): JSX.Element {
  return <div>navigation</div>
  const baseClassName = 'navigation__tab'
  const activeClassName = baseClassName + ' navigation__active'
  const pagesArr = [Price, Contacts, Politics]
  const location = useLocation()

  function getLinks(arr: IPage[]) {
    return arr.map((item) => {
      return (
        <Link
          key={item.url}
          to={item.url}
          className={
            location.pathname === item.url ? activeClassName : baseClassName
          }
        >
          {item.name}
        </Link>
      )
    })
  }

  return <nav className="navigation">{getLinks(pagesArr)}</nav>
}
