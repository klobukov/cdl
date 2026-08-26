import { useState, useEffect } from 'react'
import { get } from '@/lib/api'
import { isDev } from '@/constants/common'
import {dbErrorMessage} from "../constants/common";

interface UseFetchOptions {
  params?: Record<string, string | number | boolean>
  deps?: any[]
}

export default function useFetch<T>(url: string, options?: UseFetchOptions) {
  const { params, deps = [] } = options || {}

  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await get<T>(url, params)
        setData(result)
        setError(null)
      } catch (err) {
        if (isDev) console.error(err)
        setError(dbErrorMessage)
        setData(null)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url, JSON.stringify(params), ...deps])

  return { data, error, isLoading }
}