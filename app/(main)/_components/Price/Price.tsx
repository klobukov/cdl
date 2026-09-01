'use client'
import AnalysisSubdivision from './AnalysisSubdivision'
import './subdivisionsGroup.scss'
import Search from './Search/Search'
import useFetch from '@/lib/useFetch'
import FetchWrapper from '@/components/FetchWrapper'

export default function Price() {
  const { data, error, isLoading } = useFetch<string[]>(
    '/api/analysis-subdivisions',
  )

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
          <FetchWrapper data={data} error={error} isLoading={isLoading}>
            {(data) =>
              data.map((item: string) => (
                <AnalysisSubdivision name={item} key={item} />
              ))
            }
          </FetchWrapper>
        </div>
      </div>
    </div>
  )
}
