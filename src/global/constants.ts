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

// project images
import cloudGamingImage from '@/images/cloudGaming.png'
import skillzAppImage from '@/images/skillzAppImage.png'
import skillzGenresImage from '@/images/skillzGenresImage.png'

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
    // TODO: adjust last technology; it should not be SCSS twice
    REACT: {
        name: 'React',
        path: reactImage,
        purpose: 'Frontend component framework',
        adjustForLightMode: true, // TODO: remove when theming is fixed
    },
    NEXT: {
        name: 'Next.js',
        path: nextImage,
        purpose: 'Framework for the frontend + backend',
        adjustForDarkMode: true,
    },
    TYPESCRIPT: {
        name: 'TypeScript',
        path: typeScriptImage,
        purpose: 'Typed JavaScript'
    },
    VERCEL: {
        name: 'Vercel',
        path: vercelImage,
        purpose: 'To deploy this site',
        adjustForDarkMode: true,
    },
    SASS: {
        name: 'Sass',
        path: sassImage,
        purpose: 'Individualized Styling'
    },
    CSS: {
        name: 'CSS',
        path: sassImage,
        purpose: 'For even more style'
    }
}

export const PROJECTS_WORKED_ON: PROJECTS = {
    // TODO: change this structure; needs to be projects rather than companies
    CLOUDGAMING: {
        name: 'Cloud Gaming',
        icon: typeScriptImage,
        briefDescription: 'Enabling gameplay on any web-connected device',
        // briefDescription: 'Enable people to play Skillz games on any device with a web connection',
        image: cloudGamingImage.src,
        imageDescription: 'Screenshots of the Skillz game Solitaire Cube while playing on the cloud',
        situation: `Often, we would see that people would visit games.skillz.com and interact with some of its pages, but wouldn't download any games. Hmm... What if people could "test drive" games using their own phones? After all, what better way to figure out if you want to use a product than, well, using it? That's where cloud gaming comes in.`,
        situationTitle: "What was the problem?",
        task: `We wanted people to be able to play games on the site, but also not have us susceptible to incurring excessive server fees. It should be functionally identical to the app, as if the game was already on the user's phone.`,
        taskTitle: "What was the plan?",
        action: `To do this, we essentially spun up some servers with emulators that already had the games pre-installed, and enabled connection to those emulators from the browser. And, to ensure that people connecting to the servers were real people, we implemented session management via the site, allowing people to log in and play. What did I do? Specifically, I integrated the flow that allowed users to log in, managed the session tokens, and alerted the servers that they needed to be available for a user. For letting users log in, I implemented a "log in" option as part of the header, which accepted a user's credentials and checked them against the backend. If they were a valid user, I would've gotten an authenticated token, and I continued refreshing this token for as long as they were playing a cloud game. But... How did I initialize the session? I created a "Play" button, and when this was pressed, I initialized a webview that would render what the server was sending (in this case, the emulated game).`,
        actionTitle: 'What did we do?',
        result: `In the end, this project involved a lot of collaboration with teams spanning various disciplines, including project managers, designers, and fellow engineers. Seeing our idea come to life via cloud gaming was an amazing achievement!`,
        resultTitle: 'What was the impact?',
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
    SKILLZAPP: {
        name: 'Skillz Mobile App',
        icon: typeScriptImage,
        briefDescription: 'Centralizing user profiles and games in a single app',
        // briefDescription: 'Building an app to centralize user profiles and games',
        // briefDescription: 'A consolidated location for all things Skillz',
        image: skillzAppImage.src,
        imageDescription: 'placeholder',
        roles: {
            FULLSTACK: {
                title: 'Full Stack Engineer',
                description: 'Worked with generative AI pipelines to fine-tune models for better performance on software engineering tasks.',
                representativeImage: '/images/data-annotation-fullstack.png'
            }
        }
    },
    SKILLZGENRES: {
        name: 'Game Genres',
        icon: typeScriptImage,
        briefDescription: 'Adding genres to games for easier discovery',
        // briefDescription: 'Adding genres to Skillz games so they can be discovered more easily.',
        image: skillzGenresImage.src,
        imageDescription: 'placeholder',
        roles: {
            DATAANALYST: {
                title: 'Data Analyst',
                description: 'Worked with generative AI pipelines to fine-tune models for better performance on software engineering tasks.',
                representativeImage: '/images/data-annotation-fullstack.png'
            }
        }
    },
    SKILLZ: {
        name: 'Skillz',
        icon: typeScriptImage,
        hide: true,
        briefDescription: 'With their tagline "eSports for Everyone", Skillz is a mobile gaming platform that empowers players to compete in skill-based games.',
        image: "",
        imageDescription: 'placeholder',
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
        hide: true,
        briefDescription: 'DataAnnotation is the premier platform for high-quality machine learning data.',
        image: "",
        imageDescription: 'placeholder',
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
        hide: true,
        briefDescription: 'DataAnnotation is the premier platform for high-quality machine learning data.',
        image: "",
        imageDescription: 'placeholder',
        roles: {
            DATAANALYST: {
                title: 'Data Analyst',
                description: 'Worked with generative AI pipelines to fine-tune models for better performance on software engineering tasks.',
                representativeImage: '/images/data-annotation-fullstack.png'
            }
        }
    }
}