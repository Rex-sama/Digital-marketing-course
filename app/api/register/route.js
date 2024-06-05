import { NextResponse } from "next/server";
import { Pool } from "pg";
import {db} from '@vercel/postgres'

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DATABASE,
  password: process.env.POSTGRES_PASSWORD,
//   port: process.env.DB_PORT,
ssl:true
});

export async function POST(req) {
    const body = await req.json()

  const { first_name, last_name, email, phone, dob } = body;

  if (!first_name || !last_name || !email || !phone || !dob) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
  }

  try {
    const client = await pool.connect();

    const checkEmail = await client.query(
      "SELECT * FROM registrations WHERE email = $1",
      [email]
    );

   
    if (checkEmail.rows.length > 0) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const result = await client.query(
      "INSERT INTO registrations (first_name, last_name, email, phone, dob) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [first_name, last_name, email, phone, dob]
    );
    return NextResponse.json({ message: result.rows[0]}, { status: 201 });
    client.release();
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
