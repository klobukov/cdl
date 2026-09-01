import { JSX } from 'react'

export default function SearchResults({
  data,
  onClose,
}: {
  data: string[][]
  onClose: () => void
}): JSX.Element {
  return (
    <div className="search__results">
      <div className="search__results-header">
        <div>Результаты поиска: </div>
        <button onClick={onClose}>Закрыть</button>
      </div>
      {data.length ? (
        <table>
          <thead>
            <tr>
              <th>Название исследования</th>
              <th>Срок выполнения (суток)</th>
              <th>Цена (руб.)</th>
              <th>Код номенклатуры</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: string[], index: number) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>{item[3]}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      ) : (
        <h3>К сожалению, по Вашему запросу ничего не найдено</h3>
      )}
    </div>
  )
}
