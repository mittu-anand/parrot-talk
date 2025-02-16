import { NextResponse } from "next/server";

export function middleware(req) {
  const protectedRoutes = [
    "/sip-users",
    "/sip-peers",
    "/extensions",
    "/ivr-audios",
    "/ivr-menu",
    "/ivr-options",
    "/app-users",
  ];

  const { pathname } = req.nextUrl;
  const token = req.cookies.get("next-auth.session-token")?.value || req.cookies.get("__Secure-next-auth.session-token")?.value;

  if (pathname === "/about" || pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    return NextResponse.redirect(new URL(token ? "/sip-peers" : "/login", req.url));
  }

  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/sip-peers", req.url));
  }

  if (!token && protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/", "/sip-users", "/sip-peers", "/extensions", "/ivr-audios", 
    "/ivr-menu", "/ivr-options", "/app-users", "/login"
  ],
};
