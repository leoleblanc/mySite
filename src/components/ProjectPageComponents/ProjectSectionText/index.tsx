import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionTextProps {
    text: string
    spacing?: number
}

const ProjectSectionText = ({ text, spacing = 1 }: ProjectSectionTextProps) => {
    return <div className={`text-left text-space`}>
        {text}
        {<BlankSpace space={spacing} />}
    </div>
}

export default ProjectSectionText;