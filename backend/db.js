require("dotenv").config();
const { Pool } = require("pg");

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect()
  .then(() => console.log("Connected to Supabase PostgreSQL ✅"))
  .catch((err) => console.log("Database connection failed:", err));

module.exports = db;