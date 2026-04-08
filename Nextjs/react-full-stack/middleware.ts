import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const user = request.cookies.get('user')?.value
console.log("--------middleware-------")
  const isProtected = request.nextUrl.pathname.startsWith('/web')

  if (isProtected && !user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}
