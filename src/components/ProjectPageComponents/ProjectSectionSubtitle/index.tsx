import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionSubtitleProps {
    subtitle: string
    spacing?: number
}

const ProjectSectionSubtitle = ({ subtitle, spacing = .25 }: ProjectSectionSubtitleProps) => {
    return <div className={`text-slight-lg text-left bold`}>
        {subtitle}
        {<BlankSpace space={spacing} />}
    </div>
}

export default ProjectSectionSubtitle;