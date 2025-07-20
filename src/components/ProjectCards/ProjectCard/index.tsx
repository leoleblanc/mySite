'use client'

import { useRouter } from "next/navigation";
import { Project } from "@/projectInfo/projectTypes";
import { urlifiedString } from "@/utilities";

import CustomImage from "@/components/CustomImage";
import BlankSpace from "@/components/BlankSpace";
import styles from './ProjectCard.module.sass';

const ProjectCard = (props: Project) => {
    const { projectName, projectSubtitle } = props;

    const router = useRouter()

    const goToProject = () => {
        router.push(`/projects/${urlifiedString(projectName)}`)
    }

    return (
        <div className={styles.projectCardContainer} onClick={goToProject}>
            <div className={styles.projectCardLogoOuterContainer}>
                <CustomImage
                    src={props.image}
                    alt={"Skillz Image"}
                    fill
                />
            </div>
            <div className={`flex flex-fill flex-align-center flex-justify-center flex-col padding-sm`} style={{ height: '40%' }}>
                <div className={`bold ${styles.projectCardTitleText}`}>
                    {projectName}
                </div>
                <BlankSpace space={1} />
                <div className={'text padding-sm-horizontal'}
                // style={{ WebkitLineClamp: 2, display: '-webkit-box', overflow: 'hidden' }}
                >
                    {projectSubtitle || "No description provided."}
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;