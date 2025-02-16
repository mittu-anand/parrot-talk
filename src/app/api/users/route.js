import { query } from "../../../../lib/db";

export async function GET() {
    const users = await query("SELECT * FROM users");
    return Response.json(users);
}

export async function POST(req) {
    const { username, password } = await req.json();
    await query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password]);
    return Response.json({ message: "User added" }, { status: 201 });
}

export async function PUT(req) {
    const { id, username } = await req.json();
    await query("UPDATE users SET username = ? WHERE id = ?", [username, id]);
    return Response.json({ message: "User updated" });
}

export async function DELETE(req) {
    const { id } = await req.json();
    await query("DELETE FROM users WHERE id = ?", [id]);
    return Response.json({ message: "User deleted" });
}

