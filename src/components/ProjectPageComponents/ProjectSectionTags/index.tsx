interface ProjectSectionTagsProps {
    tags: string[]
}

const ProjectSectionTags = ({ tags }: ProjectSectionTagsProps) => {
    const renderedTags = tags.map((language, index) =>
        <span key={`${language}+${index}`} className={`flex flex-row`}>
            <span className={`theme-background-light circular-left`} style={{ width: '1vw' }} />
            <span className={`text-slight-sm theme-background-light padding-sm-vertical`}>
                {language}
            </span>
            <span className={`theme-background-light circular-right`} style={{ width: '1vw' }} />
        </span>
    )

    return (
        <div className={`width-full center`}>
            <div className={`flex flex-row flex-justify-center flex-align-center width-half flex-wrap`} style={{ gap: '15px' }}>
                {renderedTags}
            </div>
        </div>)
}

export default ProjectSectionTags