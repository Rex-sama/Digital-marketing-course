const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
const dotenv = require('dotenv');

dotenv.config(); 
const app = express();
const port = process.env.PORT ||  5000;

const pool = new Pool({
  user: process.env.DB_USER, 
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

app.use(cors());
app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  const { first_name, last_name, email, phone, dob } = req.body;

  if (!first_name || !last_name || !email || !phone || !dob) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const client = await pool.connect();

    const checkEmail = await client.query(
      "SELECT * FROM registrations WHERE email = $1",
      [email]
    );

    if (checkEmail.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }
    const result = await client.query(
      "INSERT INTO registrations (first_name, last_name, email, phone, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [first_name, last_name, email, phone, dob]
    );
    res.status(201).json(result.rows[0]);
    client.release();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
