import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET() {
  try {
    const peers = await query("SELECT * FROM ivr_menus");
    return NextResponse.json(peers);
  } catch (error) {
    console.error("Error fetching IVR Menu:", error);
    return NextResponse.json({ message: "Error fetching IVR Menu" }, { status: 500 });
  }
}

export async function POST(req) {
}
