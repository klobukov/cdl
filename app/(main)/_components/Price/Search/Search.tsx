'use client'

import { useState } from 'react'
import useFetch from '@/lib/useFetch'
import useDebounce from '@/lib/useDebounce'
import './search.scss'
import SearchResults from './SearchResults'

export default function Search() {
  const [inputVal, setInputVal] = useState('')
  const debouncedInput = useDebounce(inputVal, 500)
  const searchValue = debouncedInput.trim()
  const valueExist = !!inputVal

  const { data: searchResults, setData: setSearchResults } = useFetch<
    string[][]
  >('/api/search', {
    params: { search: searchValue },
    enabled: !!(valueExist && searchValue),
  })

  return (
    <div className="search">
      <form>
        <input
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Введите запрос"
        />
        <button type="submit">Поиск</button>
      </form>
      {searchResults && (
        <SearchResults
          data={searchResults}
          onClose={() => {
            setInputVal('')
            setSearchResults(null)
          }}
        />
      )}
    </div>
  )
}
