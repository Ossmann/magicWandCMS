import { Client } from 'pg';
import { NextRequest, NextResponse } from 'next/server';

export default async function handler(req: NextRequest) {
  const client = new Client({
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT || '5432'),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  });

  try {
    await client.connect();

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS images (
        id SERIAL PRIMARY KEY,
        file_name VARCHAR(100),
        s3_url VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await client.query(createTableQuery);
    await client.end();

    return NextResponse.json({ message: 'Table created successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error creating table:', error);
    await client.end();
    return NextResponse.json({ error: 'Error creating table' }, { status: 500 });
  }
}
