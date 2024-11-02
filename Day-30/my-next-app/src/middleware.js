import { NextResponse } from "next/server";

let isLoggedin = false;

export function middleware(request) {
  // Redirect to the homepage if the user is not logged in and not already on the homepage
  // if (!isLoggedin && request.nextUrl.pathname !== "/") {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }
  return NextResponse.redirect(new URL("/", request.url));
}


export const config = {
  matcher :[
    "/about/:path*"
  ]
}
