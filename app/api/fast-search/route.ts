// app/api/fast-search/route.ts
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  if (!search) {
    return NextResponse.json(
      { error: 'Search param is required' },
      { status: 400 }
    )
  }

  const result = await query({
    query: `
        SELECT title
        FROM services
        WHERE UPPER(title) REGEXP UPPER(?)
        ORDER BY priority DESC
            LIMIT 5
    `,
    values: [search],
  })

  const titles = result.map((row: any) => row.title)

  return NextResponse.json(titles)
}