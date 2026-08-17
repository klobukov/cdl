'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './not-found.scss'

export default function NotFound() {
  const pathname = usePathname()

  return (
    <div className="page404">
      <Link href="/">
        <img src="/images/logo.jpg" title="logo" alt="logo" />
      </Link>
      <h1>
        По адресу <i>{pathname}</i> ничего не найдено. Попробуйте начать с
        главной страницы
      </h1>
      <Link href="/">Главная страница</Link>
    </div>
  )
}
