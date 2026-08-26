import { JSX, useState } from 'react'
import './subdivision.scss'
import useFetch from "@/lib/useFetch"
import FetchWrapper from "@/components/FetchWrapper"

export default function AnalysisSubdivision({ name }: { name: string }) {
  const [show, setShow] = useState<boolean>(false)

  return (
    <div className="subdivision">
      <div onClick={(): void => setShow(!show)} className="subdivision__name">
        {name}
      </div>
      <div className="subdivision__analyzes">
        <AnalysisList name={name} show={show} />
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
  const { data, error, isLoading } = useFetch<string[][]>('/api/subdivision-items', {params: {name}, enabled: show})
  if (!show) return null

  return <FetchWrapper data={data} error={error} isLoading={isLoading}>
    {data => data.map((item: string[], index: number) => (
      <div key={index}>
        <div>{item[0]}</div>
        <div>{item[1]}</div>
        <div>{item[2]}</div>
        <div>{item[3]}</div>
      </div>
    ))}
  </FetchWrapper>
}
