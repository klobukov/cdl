import mysql from 'mysql2/promise'
import { Row } from './types'

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
})

export async function query({
  query,
  values = [],
}: {
  query: string
  values?: (string | number | null)[]
}): Promise<Row[]> {
  const connection = await pool.getConnection()
  try {
    const [results] = await connection.execute(query, values || [])
    return results as Row[]
  } finally {
    connection.release()
  }
}
