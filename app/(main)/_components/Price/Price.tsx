'use client'
import React, { JSX, useEffect, useState } from 'react'
import { baseURL } from '../../../../constants/baseURL'
import AnalysisSubdivision from './AnalysisSubdivision'
import './subdivisionsGroup.scss'

export default function Price() {
  const [subdivisions, setSubdivisions] = useState<string[] | string | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          baseURL + 'backend/analysisSubdivisionsGroup.php',
        )
        const { data } = res
        const sorted = data
          .filter((item: string) => item !== 'Дополнительные услуги')
          .concat('Дополнительные услуги')
        setSubdivisions(sorted)
      } catch {
        setSubdivisions('Ошибка подключения к базе данных..:(')
      }
    }

    fetchData()
  }, [])

  return (
    <div className="subdivisionsGroup">
      <h1>Список всех анализов</h1>
      <div className="subdivisionsGroup__header">
        <div>Название исследования</div>
        <div>Срок выполнения (суток)</div>
        <div>Цена (руб.) </div>
        <div>Код номенклатуры</div>
      </div>
      <div className="subdivisionsGroup__tree">
        <Subdivisions />
      </div>
    </div>
  )

  function Subdivisions(): null | string | JSX.Element[] {
    if (!subdivisions) return null
    if (typeof subdivisions === 'string') return subdivisions
    return subdivisions.map((item: string) => (
      <AnalysisSubdivision name={item} key={item} />
    ))
  }
}
