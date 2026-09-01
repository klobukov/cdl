import cache from 'memory-cache'

export async function get<T = unknown>(
  url: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  let fullUrl = url

  if (params) {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value))
    })
    fullUrl += `?${searchParams.toString()}`
  }

  const cacheKey = fullUrl
  const cachedData = cache.get<T>(cacheKey)

  if (cachedData) {
    return cachedData
  }

  const res = await fetch(fullUrl)
  const data = (await res.json()) as T

  cache.put(cacheKey, data, 60 * 60 * 1000) // 1 h

  return data
}
