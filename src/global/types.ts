import { StaticImageData } from "next/image";

export interface HEADER_ELEMENTS {
    [key: string]: HEADER_ELEMENT;
}

export interface HEADER_ELEMENT {
    name: string;
    path: string;
    icon?: {
        path: StaticImageData,
        lightModePath: StaticImageData,
        darkModePath: StaticImageData,
        height: number,
        width: number
    };
}

export interface PROGRAMMING_LOGOS {
    [key: string]: LOGO
}

export interface LOGO {
    name: string,
    path: string,
    adjustForLightMode?: boolean,
    adjustForDarkMode?: boolean
}

export interface PROJECTS {
    [key: string]: PROJECT
}

export interface PROJECT {
    name: string,
    icon: string,
    briefDescription?: string,
    images: string[],
    imagesDescription: string,
    situation?: string,
    situationTitle?: string,
    task?: string,
    taskTitle?: string
    action?: string,
    actionTitle?: string
    result?: string,
    resultTitle?: string,
    starText?: string[],
    hide?: boolean,
    roles: ROLE
}

export interface ROLE {
    [key: string]: ROLE_DETAILS
}

export interface ROLE_DETAILS {
    title: string,
    description: string,
    representativeImage: string,
}
