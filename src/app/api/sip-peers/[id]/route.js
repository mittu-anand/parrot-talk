import { NextResponse } from "next/server";
import { query } from "../../../../../lib/db";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const peers = await query("SELECT * FROM sip_peers WHERE id = ?", [id]);

    if (peers.length === 0) {
      return NextResponse.json({ message: "Peer not found" }, { status: 404 });
    }

    return NextResponse.json(peers[0]);
  } catch (error) {
    console.error("Error fetching peer:", error);
    return NextResponse.json({ message: "Error fetching peer" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { username, secret, context, host, allow, port, is_active } = await req.json();

  try {
    const result = await query(
      "UPDATE sip_peers SET username = ?, secret = ?, context = ?, host = ?, allow = ?, port = ?, is_active = ? WHERE id = ?",
      [username, secret, context, host, allow, port, is_active, id]
    );

    if (result.affectedRows === 0) {
      return NextResponse.json({ message: "Peer not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Peer updated successfully" });
  } catch (error) {
    console.error("Error updating peer:", error);
    return NextResponse.json({ message: "Error updating peer" }, { status: 500 });
  }
}
