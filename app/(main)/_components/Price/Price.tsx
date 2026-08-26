'use client'
import AnalysisSubdivision from './AnalysisSubdivision'
import './subdivisionsGroup.scss'
import Search from './Search/Search'
import useFetch from "@/lib/useFetch"
import Preloader from "@/components/Preloader"

export default function Price() {
  const { data: subdivisions, error, isLoading } = useFetch<string[]>('/api/analysis-subdivisions')

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

  function Subdivisions() {
    if (isLoading) return <Preloader />
    if (error || !subdivisions) return <div>error</div>

    return subdivisions.map((item: string) => (
      <AnalysisSubdivision name={item} key={item} />
    ))
  }
}
