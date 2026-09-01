'use client'

import { useState } from 'react'
import useFetch from '@/lib/useFetch'
import useDebounce from '@/lib/useDebounce'
import './search.scss'
import FetchWrapper from '@/components/FetchWrapper'
import SearchResults from './SearchResults'

export default function Search() {
  const [inputVal, setInputVal] = useState('')
  const debouncedInput = useDebounce(inputVal, 500)
  const searchValue = debouncedInput.trim()
  const valueExist = !!inputVal

  const {
    data: searchResults,
    setData: setSearchResults,
    error,
    isLoading,
  } = useFetch<string[][]>('/api/search', {
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
        <FetchWrapper data={searchResults} error={error} isLoading={isLoading}>
          {(data) => (
            <SearchResults
              data={data}
              onClose={() => {
                setInputVal('')
                setSearchResults(null)
              }}
            />
          )}
        </FetchWrapper>
      )}
    </div>
  )
}
