import React from 'react'
import '../styles/index.scss'

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
