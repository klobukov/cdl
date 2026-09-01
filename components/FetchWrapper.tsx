import { ReactNode } from 'react'
import Preloader from './Preloader'

interface FetchWrapperProps<T> {
  data: T | null
  error: string | null
  isLoading: boolean
  children: (data: T) => ReactNode
  fallback?: ReactNode
  enabled?: boolean
}

export default function FetchWrapper<T>({
  data,
  error,
  isLoading,
  children,
  fallback,
  enabled,
}: FetchWrapperProps<T>) {
  if (enabled === false) return null

  if (isLoading) return <Preloader />
  if (error) return <div className="text-red-500">{error}</div>
  if (!data || (data instanceof Array && data.length == 0))
    return (
      fallback || <div>К сожалению, по Вашему запросу ничего не найдено.</div>
    )

  return <>{children(data)}</>
}
