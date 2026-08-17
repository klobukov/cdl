// app/api/subdivision-items/route.ts
import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (!name)
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })

  const result = await query({
    query: `
      SELECT title, price, time_ready, nomenc
      FROM services
      WHERE UPPER(subdivision) REGEXP UPPER(?)
    `,
    values: [name],
  })

  const formatted = result.map((row: any) => [
    row.title,
    row.time_ready,
    row.price,
    row.nomenc,
  ])

  return NextResponse.json(formatted)
}
