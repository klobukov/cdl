import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  const result = await query({query: 'SELECT subdivision FROM services GROUP BY subdivision'})
  const subdivisions = result.map((row: any) => row.subdivision)
  return NextResponse.json(subdivisions)
}