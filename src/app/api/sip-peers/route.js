import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET() {
  try {
    const peers = await query("SELECT * FROM sip_peers");
    return NextResponse.json(peers);
  } catch (error) {
    console.error("Error fetching peers:", error);
    return NextResponse.json({ message: "Error fetching peers" }, { status: 500 });
  }
}

export async function POST(req) {
  const { username, secret, context, host, allow, port, is_active } = await req.json();
  try {
    await query(
      "INSERT INTO sip_peers (username, secret, context, host, allow, port, is_active) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [username, secret, context, host, allow, port, is_active]
    );
    return NextResponse.json({ message: "Peer added successfully" });
  } catch (error) {
    console.error("Error adding peer:", error);
    return NextResponse.json({ message: "Error adding peer" }, { status: 500 });
  }
}
