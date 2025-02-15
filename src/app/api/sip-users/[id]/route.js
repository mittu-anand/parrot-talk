import { NextResponse } from "next/server";
import { query } from "../../../../../lib/db";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const users = await query("SELECT * FROM sip_users WHERE id = ?", [id]);

    if (users.length === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(users[0]);
  } catch (error) {
    console.error("Error fetching user:", error);
    return NextResponse.json({ message: "Error fetching user" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { username, secret, context, host, allow, port, is_active } = await req.json();

  try {
    const result = await query(
      "UPDATE sip_users SET username = ?, secret = ?, context = ?, host = ?, allow = ?, port = ?, is_active = ? WHERE id = ?",
      [username, secret, context, host, allow, port, is_active, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ message: "Error updating user" }, { status: 500 });
  }
}
