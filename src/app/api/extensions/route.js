import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET() {
  try {
    const extensions = await query("SELECT * FROM extensions");
    return NextResponse.json(extensions);
  } catch (error) {
    console.error("Error fetching Extensions:", error);
    return NextResponse.json({ message: "Error fetching Extensions" }, { status: 500 });
  }
}

export async function POST(req) {
}
