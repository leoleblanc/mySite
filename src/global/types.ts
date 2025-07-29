import { StaticImageData } from "next/image";

export interface HEADER_ELEMENTS {
    [key: string]: HEADER_ELEMENT;
}

export interface HEADER_ELEMENT {
    name: string;
    path: string;
    icon?: {
        iconPath: StaticImageData,
        darkModeWhiten?: boolean,
    };
}

export interface PROGRAMMING_LOGOS {
    [key: string]: LOGO
}

export interface LOGO {
    name: string,
    path: string,
    purpose: string,
    adjustForLightMode?: boolean,
    adjustForDarkMode?: boolean
}

export interface ROLE {
    [key: string]: ROLE_DETAILS
}

export interface ROLE_DETAILS {
    title: string,
    description: string,
    representativeImage: string,
}
