import { NextRequest, NextResponse } from 'next/server'
import { FEATURE_FLAGS } from '@/app/flags'

const adjustFeatureFlags = (params: URLSearchParams) => {
    const response = NextResponse.next();

    console.log('now enumerating logs...')
    console.log(params)
    console.log(params.entries())
    console.log(params.entries().forEach)
    console.log('end enumerating logs...')
    if (params.entries()) {
        params.entries().forEach(([key, value]) => {
            if (FEATURE_FLAGS[key]) {
                if (value === 'true' || value === 'false') {
                    response.cookies.set(key, value, { httpOnly: false })
                }
            }
        })
    } else {
        console.log('no params detected');
    }

    return response;
}

export function middleware(request: NextRequest) {
    try {
        const params = request.nextUrl.searchParams
        return adjustFeatureFlags(params)
    } catch (error) {
        console.error('Middleware ran into an error... ', error)
        return NextResponse.next();
    }
}

// Match only on page requests
export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}