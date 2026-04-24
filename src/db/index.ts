import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error(
    "DATABASE_URL is not set. Add it to your .env.local file.\n" +
      "Format: postgresql://user:password@host/dbname?sslmode=require"
  );
}

const sql = neon(connectionString);

export const db = drizzle(sql, { schema });
export { sql };

export type DB = typeof db;
