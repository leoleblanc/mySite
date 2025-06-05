import { HEADER_ELEMENTS, PROGRAMMING_LOGOS } from "./types";

import { isDarkMode } from "@/utilities";
import darkModeGitHubIcon from "@/images/github-mark.svg"
import lightModeGitHubIcon from "@/images/github-mark-white.svg";
import darkModeLinkedInIcon from "@/images/linkedInBlue.png"
import lightModeLinkedInIcon from "@/images/linkedInBlack.png";

// programming logos
import reactImage from '@/images/react-original-wordmark.svg'
import nextImage from '@/images/nextjs-original-wordmark.svg'
import typeScriptImage from '@/images/typescript-original.svg'
import sassImage from '@/images/sass-original.svg'
import vercelImage from '@/images/vercel-original-wordmark.svg';

// this is used to determine if the content should have padding
export const USE_CONTENT_PADDING = false;

// TODO: fix band-aid solution for theming
export const HEADER: HEADER_ELEMENTS = {
    EXPERIENCE: {
        name: 'Experience',
        path: '/experience/site',
    },
    ABOUT: {
        name: 'About',
        path: '/about',
    },
    CONTACT: {
        name: 'Contact',
        path: '/contact',
    },
    LINKEDIN: {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/leo-leblanc/',
        icon: {
            path: isDarkMode() ? darkModeLinkedInIcon : lightModeLinkedInIcon,
            darkModePath: darkModeLinkedInIcon,
            lightModePath: darkModeLinkedInIcon,
            height: 18,
            width: 21.17
        }
    },
    GITHUB: {
        name: 'GitHub',
        path: 'https://github.com/leoleblanc',
        icon: {
            path: isDarkMode() ? darkModeGitHubIcon : lightModeGitHubIcon,
            darkModePath: darkModeGitHubIcon,
            lightModePath: lightModeGitHubIcon,
            height: 18,
            width: 18
        }
    }
}

export const LOGOS: PROGRAMMING_LOGOS = {
    REACT: {
        name: 'React',
        path: reactImage,
        adjustForLightMode: true, // TODO: remove when theming is fixed
    },
    NEXT: {
        name: 'Next.js',
        path: nextImage,
        adjustForDarkMode: true,
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        path: typeScriptImage,
    },
    SASS: {
        name: 'Sass',
        path: sassImage,
    },
    VERCEL: {
        name: 'Vercel',
        path: vercelImage,
        adjustForDarkMode: true,
    }
}