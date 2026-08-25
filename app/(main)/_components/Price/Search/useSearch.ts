// hooks/useSearch.ts
import { useState } from 'react'
import { get } from '@/lib/api'
import { dbErrorMessage } from '../../../../../constants/common'

export default function useSearch() {
  const [searchResults, setSearchResults] = useState<
    string[][] | string | null
  >(null)

  async function search(searchValue: string): Promise<void> {
    const val = searchValue.trim()
    if (val === '') return

    try {
      const data = await get<string[][]>('/api/search', { search: val })
      setSearchResults(data)
    } catch {
      setSearchResults(dbErrorMessage)
    }
  }

  return { searchResults, setSearchResults, search }
}
