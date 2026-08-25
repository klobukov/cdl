'use client'
import React, { JSX, useState, ChangeEvent, MouseEvent, useRef } from 'react'
import './search.scss'
import useFastSearch from './useFastSearch'
import useSearch from './useSearch'
import useClickOutside from './useClickOutside'

export default function Search(): JSX.Element {
  const [inputVal, setInputVal] = useState('')
  const { searchResults, setSearchResults, search } = useSearch()
  const { fastResults, setFastResults, fastSearch } = useFastSearch()
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useClickOutside('search__fast__elem', clearFastResults)

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
        <button onClick={(e) => handleSearch(e)}>Поиск</button>
      </form>
      {fastResults && FastResults(fastResults)}
      {searchResults && SearchResults(searchResults)}
    </div>
  )

  function FastResults(data: string[]): JSX.Element | null {
    if (data.length === 0) return null

    return (
      <ul className="search__fast">
        {data.map((item: string, index: number): JSX.Element => {
          return (
            <li
              key={index}
              onClick={(e) => handleSearch(e, item)}
              className="search__fast__elem"
            >
              {item}
            </li>
          )
        })}
      </ul>
    )
  }

  function SearchResults(data: string[][] | string): JSX.Element {
    if (typeof data === 'string') return <div>{data}</div>

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

  function onInputChange(e: ChangeEvent<HTMLInputElement>): void {
    if (timerRef.current) clearTimeout(timerRef.current)
    const value = e.target.value
    setInputVal(value)
    if (value.trim() === '') return
    timerRef.current = setTimeout(() => fastSearch(value), 500)
  }

  async function handleSearch(
    e: MouseEvent<HTMLButtonElement> | MouseEvent<HTMLLIElement>,
    item?: string,
  ): Promise<void> {
    e.preventDefault()
    const val = (item || inputVal).trim()
    if (val === '') return

    await search(val)
    setInputVal('')
    setFastResults(null)
  }

  function clearFastResults() {
    setFastResults(null)
  }
}
