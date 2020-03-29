import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URI
});

export default pool;
