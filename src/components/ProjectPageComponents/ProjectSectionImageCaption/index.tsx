import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionImageCaptionProps {
    caption: string
    spacing?: number
}

const ProjectSectionImageCaption = ({ caption, spacing = .25 }: ProjectSectionImageCaptionProps) => {
    return <div className={`text-slight-sm faint`}>
        {caption}
        {<BlankSpace space={spacing} />}
    </div>
}

export default ProjectSectionImageCaption;