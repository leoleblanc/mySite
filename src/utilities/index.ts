'use client';

export const isDarkMode = () => {
    // TODO: Fix this so that server and client agree
    return true;
    if (typeof window == 'undefined') {
        return true;
    } else {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}