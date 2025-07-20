'use client'

import { useRouter } from "next/navigation";
import { PROJECT } from "@/global/types";
import { urlifiedString } from "@/utilities";

import CustomImage from "@/components/CustomImage";
import BlankSpace from "@/components/BlankSpace";
import styles from './ProjectCard.module.sass';

const ProjectCard = (props: PROJECT) => {
    const { name, briefDescription } = props;

    const router = useRouter()

    const goToProject = () => {
        router.push(`/projects/${urlifiedString(name)}`)
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
                    {name}
                </div>
                <BlankSpace space={1} />
                <div className={'text padding-sm-horizontal'}
                // style={{ WebkitLineClamp: 2, display: '-webkit-box', overflow: 'hidden' }}
                >
                    {briefDescription || "No description provided."}
                </div>

            </div>
        </div>
    )
}

export default ProjectCard;