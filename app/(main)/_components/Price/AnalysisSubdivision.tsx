import React, { JSX, useEffect, useState } from 'react'
import './subdivision.scss'

export default function AnalysisSubdivision({ name }: { name: string }) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="subdivision">
      <div onClick={(): void => setShow(!show)} className="subdivision__name">
        {name}
      </div>
      <div className="subdivision__analyzes">{<AnalysisList name={name} show={show}/>}</div>
    </div>
  )
}

function AnalysisList({ name, show }: { name: string, show: boolean }): null | JSX.Element | JSX.Element[] {
  const [data, setData] = useState<string[][] | null | string>(null)
  const error = 'error'

  useEffect(() => {
    if (!show || data) return
    const fetchData = async () => {
      try {
        const url = `backend/analysisSubdivision.php?name=${encodeURIComponent(name)}`
        let res = await fetch(url)
        res = await res.json()
        setData(res.data)
      } catch {
        setData(error)
      }
    }
    fetchData()
  }, [show])

  if (!show) return null
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
