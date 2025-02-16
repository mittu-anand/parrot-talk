import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const response = NextResponse.redirect("/login");

  cookies().delete("next-auth.session-token");
  cookies().delete("next-auth.csrf-token");

  return response;
}