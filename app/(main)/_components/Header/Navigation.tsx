import React, { JSX } from 'react'
import './navigation.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navPages = [
  ['/', 'Анализы и цены'],
  ['/contacts', 'Контакты'],
  ['/politics', 'Политика обработки персональных данных'],
]

export default function Navigation(): JSX.Element {
  const baseClassName = 'navigation__tab'
  const activeClassName = baseClassName + ' navigation__active'
  const pathName = usePathname()

  return (
    <nav className="navigation">
      {navPages.map(([path, title]) => {
        return (
          <Link
            key={path}
            href={path}
            className={path === pathName ? activeClassName : baseClassName}
          >
            {title}
          </Link>
        )
      })}
    </nav>
  )
}
