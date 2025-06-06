import { NextRequest, NextResponse } from 'next/server'
import { FEATURE_FLAGS } from '@/app/flags'

const adjustFeatureFlags = (params: URLSearchParams) => {
    const response = NextResponse.next();

    params.entries().forEach(([key, value]) => {
        if (FEATURE_FLAGS[key]) {
            if (value === 'true' || value === 'false') {
                response.cookies.set(key, value, { httpOnly: false })
            }
        }
    })

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
