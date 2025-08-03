import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionTitleProps {
    title: string
    spacing?: number
}

const ProjectSectionTitle = ({ title, spacing = .25 }: ProjectSectionTitleProps) => {
    return <div className={`text-lg bold`}>
        {title}
        {<BlankSpace space={spacing} />}
    </div>
}

export default ProjectSectionTitle;