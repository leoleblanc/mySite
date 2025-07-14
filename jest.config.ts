// found this online after trying to add babel, which...
// messed up a lot of things. So, removing babel, adjusting this.
// I only need babel for the tests, so this seems to work
// jest config docs: https://jestjs.io/docs/configuration
// found this after attempting to add babel: https://github.com/agcty/nextjs-advanced-starter/issues/28

import type { Config } from 'jest';

const config: Config = {
    collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    transform: {
        // Use babel-jest to transpile tests with the next/babel preset
        // this comes with jest out of the box
        '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
}

export default config;