'use server';

import postgres from "postgres";
import { UploadImage } from "./definitions";

if (!process.env.RDS_PG_HOST || !process.env.RDS_PG_PORT || !process.env.RDS_PG_USER || !process.env.RDS_PG_PASSWORD || !process.env.RDS_PG_DATABASE) {
  throw new Error('One or more required environment variables are not defined');
}

// Construct the connection string
const connectionString = `postgres://${process.env.RDS_PG_USER}:${process.env.RDS_PG_PASSWORD}@${process.env.RDS_PG_HOST}:${process.env.RDS_PG_PORT}/${process.env.RDS_PG_DATABASE}`;

// Initialize the postgres client
const sql = postgres(connectionString, { ssl: 'verify-full' });

// Upload images into the AWS S3 Bucket and store the path in RDS
export async function insertGame(image: Partial<UploadImage>) {
    try {
      // Dynamically construct the SQL query to include only provided fields
      const result = await sql`
        INSERT INTO games ${sql(image)}
        RETURNING id
      `;
      return result[0].id;
    } catch (error) {
      console.error("Error inserting game:", error);
      throw error;
    }
  }
