import { HEADER_ELEMENTS, PROGRAMMING_LOGOS, PROJECTS } from "./types";

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

export const PROJECTS_WORKED_ON: PROJECTS = {
    // TODO: change this structure; needs to be projects rather than companies
    SKILLZ: {
        name: 'Skillz',
        icon: typeScriptImage,
        briefDescription: 'With their tagline "eSports for Everyone", Skillz is a mobile gaming platform that empowers players to compete in skill-based games.',
        longDescription: 'eSports for Everyone! Skillz is a leading mobile gaming platform that connects players through competitive tournaments and skill-based games. I worked on the Skillz Games site, where I implemented various frontend and backend features in Next.js, TypeScript, and Node.js.',
        roles: {
            ANDROID: {
                title: 'Android Software Engineer',
                description: 'Service owner for https://www.games.skillz.com, where I implemented various frontend and backend features.',

                representativeImage: '/images/skillz-android.png'
            },
            FULLSTACK: {
                title: 'Full Stack Software Engineer',
                description: 'Service owner for https://www.games.skillz.com, where I implemented various frontend and backend features.',
                representativeImage: '/images/skillz-fullstack.png'
            }
        }
    },
    DATAANNOTATION: {
        name: 'DataAnnotation',
        icon: typeScriptImage,
        briefDescription: 'DataAnnotation is the premier platform for high-quality machine learning data.',
        longDescription: 'DataAnnotation is a platform that provides high-quality data annotation services for machine learning and AI projects.',
        roles: {
            FULLSTACK: {
                title: 'Full Stack Engineer',
                description: 'Worked with generative AI pipelines to fine-tune models for better performance on software engineering tasks.',
                representativeImage: '/images/data-annotation-fullstack.png'
            }
        }
    },
    ENTREPRENEUR: {
        name: 'Entrepreneur',
        icon: typeScriptImage,
        briefDescription: 'DataAnnotation is the premier platform for high-quality machine learning data.',
        longDescription: 'DataAnnotation is a platform that provides high-quality data annotation services for machine learning and AI projects.',
        roles: {
            DATAANALYST: {
                title: 'Data Analyst',
                description: 'Worked with generative AI pipelines to fine-tune models for better performance on software engineering tasks.',
                representativeImage: '/images/data-annotation-fullstack.png'
            }
        }
    }
}