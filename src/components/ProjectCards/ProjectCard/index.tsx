'use client'

import { useRouter } from "next/navigation";
import { PROJECT } from "@/global/types";
import { urlifiedString } from "@/utilities";

import CustomImage from "@/components/CustomImage";
import BlankSpace from "@/components/BlankSpace";
import styles from './ProjectCard.module.sass';



const ProjectCard = (props: PROJECT) => {
    const { name, icon, briefDescription } = props;

    const router = useRouter()

    const goToProject = () => {
        router.push(`/projects/${urlifiedString(name)}`)
    }

    return (
        <div className={styles.projectCardContainer}>
            <div className={styles.projectCardLogoOuterContainer} onClick={goToProject}>
                <div className={styles.projectCardLogoInnerContainer}>
                    <CustomImage
                        src={icon}
                        alt={name}
                        className={styles.projectCardLogo}
                        fill
                    />
                </div>
            </div>
            <BlankSpace space={1} />
            <div className={styles.projectCardTitle}>
                {name}
            </div>
            <div className={styles.projectCardDescription}>
                {briefDescription || "No description provided."}
            </div>
        </div>
    )
}

export default ProjectCard;