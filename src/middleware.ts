import { NextRequest, NextResponse } from 'next/server'

const adjustFeatureFlags = (params: URLSearchParams) => {
    const response = NextResponse.next();



    return response;
}

export function middleware(request: NextRequest) {
    try {
        const params = request.nextUrl.searchParams
        return adjustFeatureFlags(params)
    } catch (error) {
        console.error('Middleware ran into an error... ', error)
        return NextResponse;
    }
}

// Match only on page requests
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}