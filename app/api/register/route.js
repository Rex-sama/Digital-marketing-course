import { NextResponse } from "next/server";

export async function POST(req) {
  const { first_name, last_name, email, phone, dob } = await req.json();

  if (!first_name || !last_name || !email || !phone || !dob) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }
  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ first_name, last_name, email, phone, dob }),
    });

    const data = await response.json();
    if (response.ok) {
      return NextResponse.json(data, { status: 201 });
    } else {
      return NextResponse.json({ error: data.error }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
