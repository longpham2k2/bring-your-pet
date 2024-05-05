import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const header = request.headers;
  const UA = header.get("user-agent");
  console.log(UA);
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: [
    '/category/:key*'
  ],
};