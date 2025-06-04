'use client'

import { HEADER_ELEMENTS } from "./types";

import { isDarkMode } from "@/utilities";
import darkModeGitHubIcon from "@/images/github-mark.svg"
import lightModeGitHubIcon from "@/images/github-mark-white.svg";
import darkModeLinkedInIcon from "@/images/linkedInBlue.png"
import lightModeLinkedInIcon from "@/images/linkedInBlack.png";

// TODO: adjust ordering if desired

export const HEADER: HEADER_ELEMENTS = {
    'PROJECTS': {
        'name': 'Projects',
        'path': '/projects/site',
    },
    'ABOUT': {
        'name': 'About',
        'path': '/about',
    },
    'CONTACT': {
        'name': 'Contact',
        'path': '/contact',
    },
    'LINKEDIN': {
        'name': 'LinkedIn',
        'path': 'https://www.linkedin.com/in/leo-leblanc/',
        'icon': {
            path: isDarkMode() ? darkModeLinkedInIcon : lightModeLinkedInIcon,
            height: 18,
            width: 21.17
        }
    },
    'GITHUB': {
        'name': 'GitHub',
        'path': 'https://github.com/leoleblanc',
        'icon': {
            path: isDarkMode() ? darkModeGitHubIcon : lightModeGitHubIcon,
            height: 18,
            width: 18
        }
    }
}

