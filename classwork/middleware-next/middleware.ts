import { NextRequest, NextResponse } from "next/server";

// config can match url and filter requests to middleware
// let requestCount = 0;
// export function middleware(request: NextRequest) {
//   requestCount++;
//   const res = NextResponse.next();
//   console.log("Request count: ", requestCount);
//   return res;
// }

// export const config = {
//   matcher: "/api/:path*",
// };

// redirect
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/api/user")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
