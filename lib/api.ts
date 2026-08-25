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

  const res = await fetch(fullUrl)

  return (await res.json()) as T
}
