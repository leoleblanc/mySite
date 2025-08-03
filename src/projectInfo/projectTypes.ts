export interface Projects {
    [project: string]: Project
}

export interface Project {
    projectName: string;
    projectSubtitle: string;
    projectTags: string[];
    image: string;
    imageSubtitle?: string;
    preview?: boolean;
    projectInfo: TProjectItem[];
}

export enum PROJECT_OBJECTS {
    TITLE = "TITLE",
    SUBTITLE = "SUBTITLE",
    TEXT = "TEXT",
    FOOTNOTE = "FOOTNOTE",
    LIST_NUMBERED = "LIST_NUMBERED",
    LIST_BULLETED = "LIST_BULLETED",
    IMAGE = "IMAGE",
    IMAGETEXT = "IMAGETEXT"
}

export interface ProjectContentWithSpacing {
    objectContent: string | string[],
    spacing?: number
}

export type TProjectItem = { [key in PROJECT_OBJECTS]?: ProjectContentWithSpacing }
