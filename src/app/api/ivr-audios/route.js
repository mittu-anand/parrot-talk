import { NextResponse } from "next/server";
import { query } from "../../../../lib/db";
import fs from "fs";
import path from "path";

const UPLOADS_DIR = "/tmp/audio/";

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");
    const name = formData.get("filename");
    const format = formData.get("format");

    if (!file || !name || !format) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(UPLOADS_DIR, fileName);
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    fs.writeFileSync(filePath, fileBuffer);

    const queryStr = `
      INSERT INTO ivr_announcements (name, file_path, format)
      VALUES (?, ?, ?)
    `;
    await query(queryStr, [name, filePath, format]);

    return NextResponse.json(
      { message: "File uploaded and saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json(
      { message: "Error uploading file" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const ivr_recordings = await query("SELECT * FROM ivr_announcements");
    return NextResponse.json(ivr_recordings);
  } catch (error) {
    console.error("Error fetching IVR Audio:", error);
    return NextResponse.json({ message: "Error fetching IVR Audio" }, { status: 500 });
  }
}

