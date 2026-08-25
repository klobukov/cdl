import React, { JSX, useEffect, useState } from 'react'
import './subdivision.scss'
import { isDev } from '../../../../constants/common'
import {get} from "@/lib/api"

export default function AnalysisSubdivision({ name }: { name: string }) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="subdivision">
      <div onClick={(): void => setShow(!show)} className="subdivision__name">
        {name}
      </div>
      <div className="subdivision__analyzes">
        {<AnalysisList name={name} show={show} />}
      </div>
    </div>
  )
}

function AnalysisList({
  name,
  show,
}: {
  name: string
  show: boolean
}): null | JSX.Element | JSX.Element[] {
  const [data, setData] = useState<string[][] | null | string>(null)

  useEffect(() => {
    if (!show || data) return
    const fetchData = async () => {
      try {
        const data = await get('/api/subdivision-items', {name})
        setData(data)
      } catch (err) {
        if (isDev) console.error(err)
        setData('error')
      }
    }
    fetchData()
  }, [show])

  if (!show) return null
  if (!data) return null
  if (data === 'error') return <div>Ошибка подключения к базе данных..:(</div>

  return data.map((item: string[], index: number) => (
    <div key={index}>
      <div>{item[0]}</div>
      <div>{item[1]}</div>
      <div>{item[2]}</div>
      <div>{item[3]}</div>
    </div>
  ))
}
