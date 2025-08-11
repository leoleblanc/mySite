import styles from './ProjectSectionTagsStyles.module.sass'

interface ProjectSectionTagsProps {
    tags: string[]
}

const ProjectSectionTags = ({ tags }: ProjectSectionTagsProps) => {
    const renderedTags = tags.map((language, index) =>
        <span key={`${language}+${index}`}>
            <span className={`text-slight-sm theme-background-banner-light flex flex-align-center`} style={{ height: '3cap', borderRadius: 10000, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap', padding: '5px 10px' }}>
                {`${language}`}
            </span>
        </span>
    )

    return (
        <div className={`width-full center`}>
            <div className={`flex flex-row flex-justify-center flex-align-center flex-wrap ${styles.allTagsContainer}`}>
                {renderedTags}
            </div>
        </div>)
}

export default ProjectSectionTags