import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";

export async function GET() {
  try {
    const ivr_options = await query("SELECT * FROM ivr_options");
    return NextResponse.json(ivr_options);
  } catch (error) {
    console.error("Error fetching IVR Options:", error);
    return NextResponse.json({ message: "Error fetching IVR Options" }, { status: 500 });
  }
}

export async function POST(req) {
}
