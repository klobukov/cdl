import { useState } from 'react'
import { get } from '@/lib/api'

export default function useFastSearch() {
  const [fastResults, setFastResults] = useState<string[] | null>(null)

  async function fastSearch(searchValue: string): Promise<void> {
    try {
      const data = await get('/api/fast-search', { search: searchValue })
      setFastResults(data)
    } catch {
      setFastResults(null)
    }
  }

  return { fastResults, setFastResults, fastSearch }
}
