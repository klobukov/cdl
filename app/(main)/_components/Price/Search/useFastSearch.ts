import { useState } from 'react'

export default function useFastSearch() {
  const [fastResults, setFastResults] = useState<string[] | null>(null)

  async function fastSearch(searchValue: string): Promise<void> {
    try {
      const params = new URLSearchParams({ search: searchValue })
      const res = await fetch(`/api/fast-search?${params}`)
      const data = await res.json()
      setFastResults(data)
    } catch {
      setFastResults(null)
    }
  }

  return { fastResults, setFastResults, fastSearch }
}