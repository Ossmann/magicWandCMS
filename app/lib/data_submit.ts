'use server';

import postgres from "postgres";
import { UploadImage } from "./definitions";

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined');
}
const sql = postgres(process.env.DATABASE_URL, { ssl: 'verify-full' });

// Upload images into the AWS S3 Bucket and store the path in RDS
export async function insertGame(game: Partial<UploadImage>) {
    try {
      // Dynamically construct the SQL query to include only provided fields
      const result = await sql`
        INSERT INTO games ${sql(game)}
        RETURNING id
      `;
      return result[0].id;
    } catch (error) {
      console.error("Error inserting game:", error);
      throw error;
    }
  }
