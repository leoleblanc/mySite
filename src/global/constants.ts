import { HEADER_ELEMENTS, PROGRAMMING_LOGOS } from "./types";

import githubIcon from '@/images/github-mark.svg'
import linkedInIcon from "@/images/linkedInBlue.png";
import contactIcon from '@/images/email-envelope.svg';

// programming logos
import reactImage from '@/images/react-original-wordmark.svg'
import nextImage from '@/images/nextjs-original-wordmark.svg'
import typeScriptImage from '@/images/typescript-original.svg'
import sassImage from '@/images/sass-original.svg'
import vercelImage from '@/images/vercel-original-wordmark.svg';
import nodeImage from '@/images/nodejs-original.svg';

// TODO: fix band-aid solution for theming
export const HEADER: HEADER_ELEMENTS = {
    PROJECTS: {
        name: 'Projects',
        path: '/projects/cloud-gaming',
    },
    RESUME: {
        name: 'Resume',
        path: '/resume.pdf'
    },
    LINKEDIN: {
        name: 'LinkedIn',
        path: 'https://www.linkedin.com/in/leo-leblanc/',
        icon: {
            iconPath: linkedInIcon,
            darkModeWhiten: true,
        }
    },
    GITHUB: {
        name: 'GitHub',
        path: 'https://github.com/leoleblanc',
        icon: {
            iconPath: githubIcon,
        }
    },
    CONTACT: {
        name: 'Contact',
        path: 'mailto:lleblancleo@gmail.com',
        icon: {
            iconPath: contactIcon,
        }
    }
}

export const LOGOS: PROGRAMMING_LOGOS = {
    REACT: {
        name: 'React',
        path: reactImage,
        purpose: 'Frontend component framework',
        adjustForLightMode: true, // TODO: remove when theming is fixed
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        path: typeScriptImage,
        purpose: 'JavaScript with typed clarity'
    },
    NODE: {
        name: 'Node',
        path: nodeImage,
        purpose: 'JavaScript runtime environment'
    },
    SASS: {
        name: 'Sass',
        path: sassImage,
        purpose: 'For more stylistic control'
    },
    NEXT: {
        name: 'Next',
        path: nextImage,
        purpose: 'Combines React and Node to make this site',
        adjustForDarkMode: true,
    },
    VERCEL: {
        name: 'Vercel',
        path: vercelImage,
        purpose: 'Deploy and host',
        adjustForDarkMode: true,
    },
}
