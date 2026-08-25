import { NextResponse } from 'next/server'
import { query } from '@/lib/db'
import { Row } from '@/lib/types'

export async function GET(): Promise<NextResponse> {
  const result = await query({
    query: 'SELECT subdivision FROM services GROUP BY subdivision',
  })

  const subdivisions = (result as Row[]).map((row) => row.subdivision as string)
  return NextResponse.json(subdivisions)
}
