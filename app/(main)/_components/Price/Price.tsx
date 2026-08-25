'use client'
import React, { JSX, useEffect, useState } from 'react'
import AnalysisSubdivision from './AnalysisSubdivision'
import './subdivisionsGroup.scss'
import { isDev } from '../../../../constants/common'
import Search from './Search/Search'
import {get} from "@/lib/api"

export default function Price() {
  const [subdivisions, setSubdivisions] = useState<string[] | string | null>(
    null,
  )

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await get('/api/analysis-subdivisions')
        const sorted = data
          .filter((item: string) => item !== 'Дополнительные услуги')
          .concat('Дополнительные услуги')
        setSubdivisions(sorted)
      } catch (err) {
        if (isDev) console.error(err)
        setSubdivisions('Ошибка подключения к базе данных..:(')
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <Search />
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
