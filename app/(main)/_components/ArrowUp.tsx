'use client'
import React, { JSX, useEffect, useState } from 'react'
import './arrowUp.scss'

export default function ArrowUp(): JSX.Element | null {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const arrow = () => {
      setShow(window.pageYOffset > 500)
    }
    window.addEventListener('scroll', arrow)
    return () => window.removeEventListener('scroll', arrow)
  }, [])

  return show ? (
    <div className="arrowUp" onClick={() => window.scrollTo(0, 0)}></div>
  ) : null
}
