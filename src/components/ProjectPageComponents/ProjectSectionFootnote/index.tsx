import BlankSpace from "@/components/BlankSpace";

interface ProjectSectionFootnoteProps {
    footnote: string
    spacing?: number
}

const ProjectSectionFootnote = ({ footnote, spacing = 0 }: ProjectSectionFootnoteProps) => {
    return <div className={`text-slight-sm italic text-left`}>
        {footnote}
        {<BlankSpace space={spacing} />}
    </div>
}

export default ProjectSectionFootnote;