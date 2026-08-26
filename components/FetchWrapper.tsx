import { ReactNode } from 'react'
import Preloader from './Preloader'

interface FetchWrapperProps<T> {
  data: T | null
  error: string | null
  isLoading: boolean
  children: (data: T) => ReactNode
  fallback?: ReactNode
}

export default function FetchWrapper<T>({
                                  data,
                                  error,
                                  isLoading,
                                  children,
                                  fallback,
                                }: FetchWrapperProps<T>) {
  if (isLoading) return <Preloader />
  if (error) return <div className="text-red-500">{error}</div>
  if (!data) return fallback || <div>Нет данных</div>

  return <>{children(data)}</>
}