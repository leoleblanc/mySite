import Link from 'next/link'
import { Project } from "@/projectInfo/projectTypes";
import { urlifiedString } from "@/utilities";

import CustomImage from "@/components/CustomImage";
import BlankSpace from "@/components/BlankSpace";
import styles from './ProjectCard.module.sass';
import PreviewBanner from './PreviewBanner';

const getProjectLink = (projectName: string): string => {
    return `/projects/${urlifiedString(projectName)}`
}

const ProjectCard = (props: Project) => {
    const { projectName, projectSubtitle, preview } = props;

    const CardContainer = !preview ? Link : 'div';

    return (
        <CardContainer className={styles.projectCardContainer} href={!preview ? getProjectLink(projectName) : {}}>
            <div className={styles.projectCardImageOuterContainer}>
                <CustomImage
                    src={props.image}
                    alt={props.image}
                    fill
                />
            </div>
            <div className={`flex flex-fill flex-align-center flex-justify-center flex-col padding-sm`} style={{ height: '40%' }}>
                <div className={`bold text-slight-lg`}>
                    {projectName}
                </div>
                <BlankSpace space={1} />
                <div className={`padding-sm-horizontal ${styles.test}`}>
                    {projectSubtitle || "No description provided."}
                </div>

            </div>
            <PreviewBanner isPreview={preview} />
        </CardContainer>
    )
}

export default ProjectCard;