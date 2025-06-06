import { cookies } from 'next/headers';

// TODO: Examine this; maybe there's a simpler way to handle it
// for instance, I'm using flag import and introducing dependency,
// but ultimately I'm reading from a cookie. I don't need this for that...
export const FEATURE_FLAG_LIST: string[] = [
    'usePadding',
] as const;

type FEATURE_FLAG = typeof FEATURE_FLAG_LIST[number]

// TODO: initialize this differently... maybe using that factory function below?
export const FEATURE_FLAGS: Record<FEATURE_FLAG, () => Promise<boolean>> = {}

// generic implementation for more potential flags
FEATURE_FLAG_LIST.forEach(flagName => {
    FEATURE_FLAGS[flagName] = async () => {
        const cookieStore = await cookies();
        return cookieStore.get(flagName)?.value === 'true';
    }
})

// Factory function to initialize FEATURE_FLAGS
// const FEATURE_FLAGS = (): Record<FEATURE_FLAG, () => Promise<boolean>> => {
//     const featureFlags: Record<FEATURE_FLAG, () => Promise<boolean>> = {};

//     FEATURE_FLAG_LIST.forEach(flagName => {
//         featureFlags[flagName] = async () => {
//             const cookieStore = await cookies();
//             return cookieStore.get(flagName)?.value === 'true';
//         };
//     });

//     return featureFlags;
// };

// export const FEATURE_FLAGS;
