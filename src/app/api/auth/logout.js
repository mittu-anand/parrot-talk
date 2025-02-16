import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const response = NextResponse.redirect("/login");

  cookies().delete("next-auth.session-token");
  cookies().delete("__Secure-next-auth.session-token");
  cookies().delete("__Secure-next-auth.callback-url")
  cookies().delete("next-auth.csrf-token");

  return response;
}