export interface HEADER_ELEMENTS {
    [key: string]: HEADER_ELEMENT;
}

export interface HEADER_ELEMENT {
    name: string;
    path: string;
    icon?: string;
}