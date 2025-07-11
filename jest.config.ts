// found this online after trying to add babel, which...
// messed up a lot of things. So, removing babel, adding this.
// I only need babel for the tests, so this seems to work
// how exactly does it know what babel is if it's not installed...
// who knows?
// found here: https://github.com/agcty/nextjs-advanced-starter/issues/28

module.exports = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};