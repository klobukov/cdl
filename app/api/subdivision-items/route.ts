import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { Row } from '@/lib/types'

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url)
  const name = searchParams.get('name')

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 })
  }

  const result = await query({
    query: `
        SELECT title, price, time_ready, nomenc
        FROM services
        WHERE UPPER(subdivision) REGEXP UPPER(?)
    `,
    values: [name],
  })

  const formatted = (result as Row[]).map((row) => [
    row.title as string,
    row.time_ready as string,
    row.price as string,
    row.nomenc as string,
  ])

  return NextResponse.json(formatted)
}
