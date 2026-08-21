import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')

  if (!search) {
    return NextResponse.json(
      { error: 'Search param is required.' },
      { status: 400 },
    )
  }

  const result = await query({
    query: `
        SELECT title, price, time_ready, nomenc
        FROM services
        WHERE UPPER(title) LIKE UPPER(?)
        ORDER BY
            CASE WHEN title = ? THEN 1 ELSE 0 END DESC,
            priority DESC
    `,
    values: [`%${search}%`, search],
  })

  const formatted = result.map((row: any) => [
    row.title,
    row.time_ready,
    row.price,
    row.nomenc,
  ])

  return NextResponse.json(formatted)
}
