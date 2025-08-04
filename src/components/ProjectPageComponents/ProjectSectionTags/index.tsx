import styles from './ProjectSectionTagsStyles.module.sass'

interface ProjectSectionTagsProps {
    tags: string[]
}

const ProjectSectionTags = ({ tags }: ProjectSectionTagsProps) => {
    // TODO: change how the "pills" are generated... notably, using 10000px
    // without the side spans the issue ended up being that the elements
    // have different heights
    const renderedTags = tags.map((language, index) =>
        <span key={`${language}+${index}`} className={`flex flex-row`}>
            <span className={`theme-background-banner-light circular-left`} style={{ width: '1vw' }} />
            <span className={`text-slight-sm theme-background-banner-light padding-sm-vertical`}>
                {language}
            </span>
            <span className={`theme-background-banner-light circular-right`} style={{ width: '1vw' }} />
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