export interface Projects {
    [project: string]: Project
}

export interface Project {
    projectName: string;
    projectSubtitle: string;
    image: string;
    imageSubtitle?: string;
    projectInfo: TProjectItem[];
}

export enum PROJECT_OBJECTS {
    TITLE = "TITLE",
    SUBTITLE = "SUBTITLE",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    IMAGETEXT = "IMAGETEXT"
}

export type TProjectItem = { [key in PROJECT_OBJECTS]?: string }
