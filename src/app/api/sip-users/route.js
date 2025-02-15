import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET() {
  try {
    const users = await query("SELECT * FROM sip_users");
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json({ message: "Error fetching users" }, { status: 500 });
  }
}

export async function POST(req) {
  const { username, secret, context, host, allow, port, is_active } = await req.json();
  try {
    await query(
      "INSERT INTO sip_users (username, secret, context, host, allow, port, is_active) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [username, secret, context, host, allow, port, is_active]
    );
    return NextResponse.json({ message: "User added successfully" });
  } catch (error) {
    console.error("Error adding user:", error);
    return NextResponse.json({ message: "Error adding user" }, { status: 500 });
  }
}
