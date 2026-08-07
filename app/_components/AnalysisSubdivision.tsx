import React, { JSX, useEffect, useState } from 'react'
import { baseURL } from '../../constants/baseURL'
import './subdivision.scss'

export default function AnalysisSubdivision({ name }: { name: string }) {
  const [show, setShow] = useState<boolean>(false)
  const [data, setData] = useState<string[][] | null | string>(null)
  const error = 'error'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `${baseURL}backend/analysisSubdivision.php?name=${encodeURIComponent(name)}`
        let res = await fetch(url)
        res = await res.json()
        setData(res.data)
      } catch {
        setData(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="subdivision">
      <div onClick={(): void => setShow(!show)} className="subdivision__name">
        {name}
      </div>
      <div className="subdivision__analyzes">{show && <AnalysisList />}</div>
    </div>
  )

  function AnalysisList(): null | JSX.Element | JSX.Element[] {
    if (!data) return null
    if (data === error) return <div>Ошибка подключения к базе данных..:(</div>
    if (typeof data === 'string') return null // ts data.map -_-

    return data.map((item: string[], index: number) => (
      <div key={index}>
        <div>{item[0]}</div>
        <div>{item[1]}</div>
        <div>{item[2]}</div>
        <div>{item[3]}</div>
      </div>
    ))
  }
}
