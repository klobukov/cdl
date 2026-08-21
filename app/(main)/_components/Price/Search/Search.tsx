'use client'
import React, {
  JSX,
  useState,
  ChangeEvent,
  MouseEvent,
  useEffect,
  useRef,
} from 'react'
import './search.scss'

const errorMessage = 'Ошибка подключения к базе данных..:('

export default function Search(): JSX.Element {
  const [inputVal, setInputVal] = useState('')
  const [searchResults, setSearchResults] = useState<string[] | string | null>(
    null,
  )
  const [fastResults, setfastResults] = useState<string[] | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const removeFastResults = (e: Event): void => {
      const target = e.target as HTMLElement
      if (target.classList.contains('search__fast__elem')) return
      setfastResults(null)
    }

    document.body.addEventListener('click', removeFastResults)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      document.body.removeEventListener('click', removeFastResults)
    }
  }, [])

  return (
    <div className="search">
      <form>
        <input
          value={inputVal}
          type="text"
          placeholder="Введите запрос"
          autoComplete="off"
          onChange={(e) => onInputChange(e)}
        />
        <button onClick={(e) => search(e)}>Поиск</button>
      </form>
      {fastResults && FastResults(fastResults)}
      {searchResults && SearchResults(searchResults)}
    </div>
  )

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    if (timerRef.current) clearTimeout(timerRef.current)
    const value = e.target.value
    setInputVal(value)
    if (value.trim() === '') return
    timerRef.current = setTimeout(() => fastSearch(value), 500)
  }

  async function fastSearch(searchValue: string): Promise<void> {
    try {
      const params = new URLSearchParams({ search: searchValue })
      const res = await fetch(`/api/fast-search?${params}`)
      const data = await res.json()
      setfastResults(data)
    } catch {
      setfastResults(null)
    }
  }

  function FastResults(data: string[]): JSX.Element | null {
    if (data.length === 0) return null

    return (
      <ul className="search__fast">
        {data.map((item: string, index: number): JSX.Element => {
          return (
            <li
              key={index}
              onClick={(e) => search(e, item)}
              className="search__fast__elem"
            >
              {item}
            </li>
          )
        })}
      </ul>
    )
  }

  async function search(
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLIElement>,
    item?: string,
  ): Promise<void> {
    e.preventDefault()
    const val = (item || inputVal).trim()
    if (val === '') return

    try {
      const params = new URLSearchParams({ search: val })
      const res = await fetch(`/api/search?${params}`)
      const data = await res.json()
      setSearchResults(data)
    } catch {
      setSearchResults(errorMessage)
    } finally {
      setInputVal('')
      setfastResults(null)
    }
  }

  function SearchResults(data: string[] | string): JSX.Element {
    if (data === errorMessage) return <div>{errorMessage}</div>

    return (
      <div className="search__results">
        <div className="search__results-header">
          <div>Результаты поиска: </div>
          <button onClick={() => setSearchResults(null)}>Закрыть</button>
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
              {typeof data !== 'string' &&
                data.map((item: string, index: number) => {
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
}
