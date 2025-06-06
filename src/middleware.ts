import { NextResponse } from 'next/server'

export function middleware() {
    return NextResponse;
}

// Match only on page requests
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}