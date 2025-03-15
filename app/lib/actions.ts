'use server';

import { z } from 'zod';
import postgres from "postgres";

// Use the same connection setup as your first file
if (!process.env.RDS_PG_HOST || !process.env.RDS_PG_PORT || !process.env.RDS_PG_USER || !process.env.RDS_PG_PASSWORD || !process.env.RDS_PG_DATABASE) {
  throw new Error('One or more required environment variables are not defined');
}

const connectionString = `postgres://${process.env.RDS_PG_USER}:${process.env.RDS_PG_PASSWORD}@${process.env.RDS_PG_HOST}:${process.env.RDS_PG_PORT}/${process.env.RDS_PG_DATABASE}`;
const sql = postgres(connectionString, { ssl: { rejectUnauthorized: false } });

const FormSchema = z.object({
    id: z.string(),
    file_name: z.string(),
    s3_url: z.string(),
});

export async function createImageProfile(formData: FormData) {
    const { id, file_name, s3_url } = FormSchema.parse({
      id: formData.get('id'),
      file_name: formData.get('file_name'),
      s3_url: formData.get('s3_url'),
    });

    console.log('Parsed Data:', { id, file_name, s3_url });

    await sql`
        INSERT INTO images (id, file_name, s3_url)
        VALUES (${id}, ${file_name}, ${s3_url})
    `;
}