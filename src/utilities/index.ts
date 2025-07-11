export const isDarkMode = () => {
    // TODO: Find a way to detect preferences server side

    if (typeof window == 'undefined') {
        return true;
    } else {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
}

export const urlifiedString = (str: string) => {
    return str.replace(/\s+/g, '-').toLowerCase();
}
