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
  const enabled = !!(inputVal && searchValue)

  const {
    data: searchResults,
    setData: setSearchResults,
    error,
    isLoading,
  } = useFetch<string[][]>('/api/search', {
    params: { search: searchValue },
    enabled,
  })

  return (
    <div className="search">
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Введите запрос"
      />
      <FetchWrapper
        data={searchResults}
        error={error}
        isLoading={isLoading}
        enabled={enabled}
        fallback={<h3>К сожалению, по Вашему запросу ничего не найдено.</h3>}
      >
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
    </div>
  )
}
