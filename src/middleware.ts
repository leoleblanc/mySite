import { NextRequest, NextResponse } from 'next/server'
import { FEATURE_FLAGS } from '@/global/flags'

const adjustFeatureFlags = (params: URLSearchParams) => {
    const response = NextResponse.next();

    // I'm using this syntax because params.entries().forEach was breaking
    console.log('params is: ', params)
    for (const [key, value] of params.entries()) {
        if (FEATURE_FLAGS[key]) {
            if (value === 'true' || value === 'false') {
                response.cookies.set(key, value, { httpOnly: false })
            }
        }
    }

    return response;
}

export function middleware(request: NextRequest) {
    const params = request.nextUrl.searchParams
    return adjustFeatureFlags(params)
}

// Match only on page requests
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}